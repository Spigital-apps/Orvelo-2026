import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import express, { type Request, type Response } from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const SENDER_EMAIL = process.env.WEBINAR_SENDER_EMAIL || 'info@spigital.com';
const SENDER_NAME = process.env.WEBINAR_SENDER_NAME || 'Orvelo.ai | Spigital';

interface RegistrationPayload {
  name: string;
  email: string;
  companyName: string;
  designation?: string;
  websiteUrl?: string;
  notes?: string;
  webinarSlug: string;
  webinarTitle: string;
  webinarDate: string;
  webinarFormat?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function base64UrlEncode(input: Buffer | string): string {
  const buf = typeof input === 'string' ? Buffer.from(input, 'utf8') : input;
  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getGoogleServiceAccountToken(clientEmail: string, privateKey: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64UrlEncode(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claimSet = base64UrlEncode(
    JSON.stringify({
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  );

  const signingInput = `${header}.${claimSet}`;
  const formattedKey = privateKey.replace(/\\n/g, '\n');
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signingInput);
  const signature = base64UrlEncode(signer.sign(formattedKey));
  const jwt = `${signingInput}.${signature}`;

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenResponse.ok) {
    const errText = await tokenResponse.text();
    throw new Error(`Google OAuth token exchange failed: ${tokenResponse.status} ${errText}`);
  }

  const tokenData = (await tokenResponse.json()) as { access_token?: string };
  if (!tokenData.access_token) {
    throw new Error('Google OAuth token response missing access_token');
  }
  return tokenData.access_token;
}

async function appendViaServiceAccount(record: RegistrationPayload, submittedAt: string): Promise<boolean> {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !sheetId) {
    return false;
  }

  const sheetTab = process.env.GOOGLE_SHEET_TAB || 'Sheet1';
  const accessToken = await getGoogleServiceAccountToken(clientEmail, privateKey);
  const range = encodeURIComponent(`${sheetTab}!A:I`);

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [
          [
            submittedAt,
            record.webinarTitle,
            record.webinarDate,
            record.name,
            record.email,
            record.companyName,
            record.designation || '',
            record.websiteUrl || '',
            record.notes || '',
          ],
        ],
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Google Sheets API append failed: ${response.status} ${errText}`);
  }

  return true;
}

async function sendConfirmationViaSmtp(record: RegistrationPayload): Promise<boolean> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpUser || !smtpPass) {
    return false;
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const safeName = escapeHtml(record.name);
  const safeTitle = escapeHtml(record.webinarTitle);
  const safeDate = escapeHtml(record.webinarDate);
  const safeFormat = escapeHtml(record.webinarFormat || 'Live Online Session');
  const safeCompany = escapeHtml(record.companyName);

  const subject = `Registration Confirmed: ${record.webinarTitle}`;
  const textBody = [
    `Hi ${record.name},`,
    '',
    `Thank you for registering for "${record.webinarTitle}". We have received your registration details.`,
    '',
    `Session: ${record.webinarTitle}`,
    `Schedule: ${record.webinarDate}`,
    `Format: ${record.webinarFormat || 'Live Online Session'}`,
    `Registered Name: ${record.name}`,
    `Company: ${record.companyName}`,
    '',
    'We will send your direct live joining link and pre-session notes prior to the event.',
    `If you have any questions before the session, reply directly to this email (${SENDER_EMAIL}).`,
    '',
    'Best regards,',
    'Orvelo.ai Team',
    SENDER_EMAIL,
  ].join('\n');

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0f172a; background: #f8fafc;">
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px;">
        <div style="font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #cb4b16; margin-bottom: 12px;">
          Orvelo.ai • Registration Confirmation
        </div>
        <h1 style="font-size: 22px; line-height: 1.3; margin: 0 0 16px; color: #0f172a;">
          You&apos;re registered, ${safeName}!
        </h1>
        <p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 0 0 20px;">
          This email confirms receipt of your registration for <strong>${safeTitle}</strong>.
        </p>
        <div style="background: #f1f5f9; border-radius: 12px; padding: 18px; margin-bottom: 24px; font-size: 14px; line-height: 1.6;">
          <div><strong>Session:</strong> ${safeTitle}</div>
          <div><strong>Date &amp; Time:</strong> ${safeDate}</div>
          <div><strong>Format:</strong> ${safeFormat}</div>
          <div><strong>Company:</strong> ${safeCompany}</div>
        </div>
        <p style="font-size: 14px; line-height: 1.6; color: #475569; margin: 0 0 20px;">
          We will send your live joining link and session resources ahead of the event. If you have any questions or specific topics you would like covered, simply reply to <a href="mailto:${SENDER_EMAIL}" style="color: #cb4b16; font-weight: 600;">${SENDER_EMAIL}</a>.
        </p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
        <div style="font-size: 12px; color: #64748b;">
          Sent by ${escapeHtml(SENDER_NAME)} (${SENDER_EMAIL})
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
    replyTo: SENDER_EMAIL,
    to: record.email,
    subject,
    text: textBody,
    html: htmlBody,
  });

  if (process.env.NOTIFY_ADMIN_ON_REGISTER !== 'false') {
    await transporter.sendMail({
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
      replyTo: record.email,
      to: SENDER_EMAIL,
      subject: `[New Webinar Registration] ${record.name} — ${record.webinarTitle}`,
      text: `New registration received:\n\nSession: ${record.webinarTitle}\nDate: ${record.webinarDate}\nName: ${record.name}\nEmail: ${record.email}\nCompany: ${record.companyName}\nRole: ${record.designation || '-'}\nWebsite: ${record.websiteUrl || '-'}\nNotes: ${record.notes || '-'}`,
    });
  }

  return true;
}

async function postToAppsScriptWebhook(record: RegistrationPayload, submittedAt: string): Promise<{ sheetCaptured: boolean; emailSent: boolean }> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return { sheetCaptured: false, emailSent: false };
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...record,
      submittedAt,
      senderEmail: SENDER_EMAIL,
      senderName: SENDER_NAME,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Apps Script webhook failed: ${response.status} ${errText}`);
  }

  const data = (await response.json().catch(() => ({}))) as { emailSent?: boolean };
  return {
    sheetCaptured: true,
    emailSent: Boolean(data.emailSent),
  };
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.post('/api/webinar-register', async (req: Request, res: Response) => {
    try {
      const body = (req.body || {}) as Partial<RegistrationPayload>;
      const name = String(body.name || '').trim();
      const email = String(body.email || '').trim();
      const companyName = String(body.companyName || '').trim();
      const designation = String(body.designation || '').trim();
      const websiteUrl = String(body.websiteUrl || '').trim();
      const notes = String(body.notes || '').trim();
      const webinarSlug = String(body.webinarSlug || '').trim();
      const webinarTitle = String(body.webinarTitle || '').trim();
      const webinarDate = String(body.webinarDate || '').trim();
      const webinarFormat = String(body.webinarFormat || 'Live Online Session').trim();

      if (!name || !email || !companyName || !webinarTitle) {
        res.status(400).json({
          success: false,
          message: 'Please fill in Full Name, Business Email, and Company Name.',
        });
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        res.status(400).json({
          success: false,
          message: 'Please enter a valid business email address.',
        });
        return;
      }

      const record: RegistrationPayload = {
        name,
        email,
        companyName,
        designation,
        websiteUrl,
        notes,
        webinarSlug,
        webinarTitle,
        webinarDate,
        webinarFormat,
      };

      const submittedAt = new Date().toISOString();
      let sheetCaptured = false;
      let emailSent = false;

      // 1. Google Apps Script Webhook (captures to Google Sheet + can send from info@spigital.com)
      if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
        const webhookResult = await postToAppsScriptWebhook(record, submittedAt);
        sheetCaptured = sheetCaptured || webhookResult.sheetCaptured;
        emailSent = emailSent || webhookResult.emailSent;
      }

      // 2. Direct Google Sheets API via Service Account (if configured)
      if (!sheetCaptured && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
        sheetCaptured = await appendViaServiceAccount(record, submittedAt);
      }

      // 3. Direct SMTP Confirmation Email from info@spigital.com (if configured)
      if (!emailSent && process.env.SMTP_USER && process.env.SMTP_PASS) {
        emailSent = await sendConfirmationViaSmtp(record);
      }

      console.info(
        `[Webinar Registration] ${submittedAt} | ${webinarTitle} | ${name} <${email}> | ${companyName} | sheet=${sheetCaptured} email=${emailSent}`
      );

      res.status(200).json({
        success: true,
        submittedAt,
        sheetCaptured,
        emailSent,
        senderEmail: SENDER_EMAIL,
      });
    } catch (error) {
      console.error('[Webinar Registration Error]', error);
      res.status(500).json({
        success: false,
        message: 'Unable to complete registration right now. Please try again in a moment.',
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      const indexFile = path.join(distPath, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('Not found');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
