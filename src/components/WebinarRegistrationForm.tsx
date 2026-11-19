import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

export interface WebinarRegistrationProps {
  webinarSlug: string;
  webinarTitle: string;
  webinarDate: string;
  webinarFormat: string;
  designationPlaceholder?: string;
  optionalFieldLabel: string;
  optionalFieldPlaceholder: string;
}

const WEB3FORMS_FALLBACK_KEY = '682f14ea-354d-4af0-919e-86c7566732ec';

export const WebinarRegistrationForm = ({
  webinarSlug,
  webinarTitle,
  webinarDate,
  webinarFormat,
  designationPlaceholder = 'Founder, VP Sales, Operations Director, etc.',
  optionalFieldLabel,
  optionalFieldPlaceholder,
}: WebinarRegistrationProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    designation: '',
    websiteUrl: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      companyName: formData.companyName.trim(),
      designation: formData.designation.trim(),
      websiteUrl: formData.websiteUrl.trim(),
      notes: formData.notes.trim(),
      webinarSlug,
      webinarTitle,
      webinarDate,
      webinarFormat,
    };

    try {
      const apiResponse = await fetch('/api/webinar-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const contentType = apiResponse.headers.get('content-type') || '';
      if (!apiResponse.ok || !contentType.includes('application/json')) {
        const errJson = contentType.includes('application/json')
          ? await apiResponse.json().catch(() => null)
          : null;
        if (errJson && errJson.message) {
          throw new Error(errJson.message);
        }
        throw new Error('Server endpoint unavailable');
      }

      const apiResult = await apiResponse.json();
      if (!apiResult.success) {
        throw new Error(apiResult.message || 'Failed to submit registration. Please try again.');
      }

      // Send best-effort Web3Forms alert alongside server capture (non-blocking)
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_FALLBACK_KEY,
          subject: `New Webinar Registration: ${webinarTitle}`,
          name: payload.name,
          email: payload.email,
          companyName: payload.companyName,
          designation: payload.designation,
          websiteUrl: payload.websiteUrl,
          webinarDate,
          message: `Session: ${webinarTitle}\nSchedule: ${webinarDate}\nName: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.companyName}\nRole: ${payload.designation || 'Not specified'}\nWebsite: ${payload.websiteUrl || 'Not specified'}\nNotes: ${payload.notes || 'Not specified'}`,
        }),
      }).catch(() => undefined);

      const confirmationState = {
        name: payload.name,
        email: payload.email,
        companyName: payload.companyName,
        webinarSlug: payload.webinarSlug,
        webinarTitle: payload.webinarTitle,
        webinarDate: payload.webinarDate,
        webinarFormat: payload.webinarFormat,
        submittedAt: apiResult.submittedAt || new Date().toISOString(),
      };

      try {
        sessionStorage.setItem('orvelo_webinar_confirmation', JSON.stringify(confirmationState));
      } catch {
        // Ignore storage restrictions
      }

      navigate('/webinars/thank-you', { state: confirmationState });
    } catch (err) {
      console.error('Webinar registration error:', err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Unable to submit registration right now. Please try again or email info@spigital.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Sarah Jenkins"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Business Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="sarah@company.com"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Acme Global Solutions"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Your Role / Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder={designationPlaceholder}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
            Company Website
          </label>
          <input
            type="text"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleInputChange}
            placeholder="https://example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
            {optionalFieldLabel}
          </label>
          <textarea
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={handleInputChange}
            placeholder={optionalFieldPlaceholder}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors resize-none"
          />
        </div>

        {submitError && (
          <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300">
            {submitError}
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-10 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#cb4b16]/30 active:scale-95 inline-flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Submitting Registration...</span>
            ) : (
              <>
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <Mail className="w-3.5 h-3.5 text-[#cb4b16] shrink-0" />
            <span>
              Confirmation sent from <strong className="text-white">info@spigital.com</strong>
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Free Live Access</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Instant Confirmation of Receipt</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Live Interactive Q&amp;A Included</span>
          </span>
        </div>
      </form>
    </div>
  );
};
