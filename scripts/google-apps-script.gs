/**
 * Google Apps Script bound to your Webinar Registrations Google Sheet.
 *
 * Setup (takes ~2 minutes under the info@spigital.com Google account):
 * 1. Open your Google Sheet -> Extensions -> Apps Script.
 * 2. Paste this file into Code.gs and add column headers in Row 1 of Sheet1:
 *    Timestamp | Webinar | Schedule | Full Name | Business Email | Company | Role / Designation | Website | Notes
 * 3. Deploy -> New deployment -> Web app:
 *    - Execute as: Me (info@spigital.com)
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into GOOGLE_SHEETS_WEBHOOK_URL in your environment secrets.
 */

const SENDER_EMAIL = 'info@spigital.com';
const SENDER_NAME = 'Orvelo.ai | Spigital';

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheets()[0];

    // Ensure header row exists on a brand new sheet
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Webinar',
        'Schedule',
        'Full Name',
        'Business Email',
        'Company Name',
        'Role / Designation',
        'Company Website',
        'Notes'
      ]);
    }

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.webinarTitle || '',
      payload.webinarDate || '',
      payload.name || '',
      payload.email || '',
      payload.companyName || '',
      payload.designation || '',
      payload.websiteUrl || '',
      payload.notes || ''
    ]);

    let emailSent = false;
    if (payload.email) {
      const subject = 'Registration Confirmed: ' + (payload.webinarTitle || 'Orvelo Live Webinar');
      const plainBody =
        'Hi ' + (payload.name || 'there') + ',\n\n' +
        'Thank you for registering for "' + (payload.webinarTitle || 'our live session') + '".\n' +
        'This email confirms receipt of your registration.\n\n' +
        'Session: ' + (payload.webinarTitle || '') + '\n' +
        'Schedule: ' + (payload.webinarDate || '') + '\n' +
        'Company: ' + (payload.companyName || '') + '\n\n' +
        'We will share joining instructions before the session begins.\n' +
        'Reply directly to ' + SENDER_EMAIL + ' if you have any questions.\n\n' +
        'Best regards,\n' +
        'Orvelo.ai Team\n' +
        SENDER_EMAIL;

      const htmlBody =
        '<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f8fafc;color:#0f172a;">' +
        '<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:32px;">' +
        '<div style="font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#cb4b16;margin-bottom:12px;">Orvelo.ai • Registration Confirmation</div>' +
        '<h1 style="font-size:22px;margin:0 0 16px;">You&#39;re registered, ' + escapeHtml(payload.name) + '!</h1>' +
        '<p style="font-size:15px;line-height:1.6;color:#334155;">This email confirms receipt of your registration for <strong>' + escapeHtml(payload.webinarTitle) + '</strong>.</p>' +
        '<div style="background:#f1f5f9;border-radius:12px;padding:16px;margin:20px 0;font-size:14px;line-height:1.6;">' +
        '<div><strong>Session:</strong> ' + escapeHtml(payload.webinarTitle) + '</div>' +
        '<div><strong>Schedule:</strong> ' + escapeHtml(payload.webinarDate) + '</div>' +
        '<div><strong>Format:</strong> ' + escapeHtml(payload.webinarFormat || 'Live Online') + '</div>' +
        '<div><strong>Company:</strong> ' + escapeHtml(payload.companyName) + '</div>' +
        '</div>' +
        '<p style="font-size:14px;line-height:1.6;color:#475569;">We will send your live joining link prior to the session. Questions? Reply to <a href="mailto:' + SENDER_EMAIL + '" style="color:#cb4b16;">' + SENDER_EMAIL + '</a>.</p>' +
        '</div></div>';

      GmailApp.sendEmail(payload.email, subject, plainBody, {
        htmlBody: htmlBody,
        name: SENDER_NAME,
        replyTo: SENDER_EMAIL,
        from: SENDER_EMAIL
      });
      emailSent = true;
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, emailSent: emailSent }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
