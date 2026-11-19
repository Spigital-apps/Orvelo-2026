import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import {
  CheckCircle2,
  Calendar,
  Mail,
  Building2,
  Laptop,
  ArrowRight,
  Sparkles,
  UserCheck
} from 'lucide-react';

interface ConfirmationState {
  name?: string;
  email?: string;
  companyName?: string;
  webinarSlug?: string;
  webinarTitle?: string;
  webinarDate?: string;
  webinarFormat?: string;
}

export const WebinarThankYou = () => {
  const location = useLocation();
  const [details, setDetails] = useState<ConfirmationState>(() => {
    const state = (location.state as ConfirmationState | null) || null;
    if (state && (state.name || state.webinarTitle)) {
      return state;
    }
    try {
      const saved = sessionStorage.getItem('orvelo_webinar_confirmation');
      if (saved) {
        return JSON.parse(saved) as ConfirmationState;
      }
    } catch {
      // Ignore storage access errors
    }
    return {};
  });

  useEffect(() => {
    const state = (location.state as ConfirmationState | null) || null;
    if (state && (state.name || state.webinarTitle)) {
      setDetails(state);
    }
  }, [location.state]);

  const sessionTitle = details.webinarTitle || 'Orvelo Live AI Webinar';
  const sessionDate = details.webinarDate || '9:30 AM CST';
  const sessionFormat = details.webinarFormat || 'Live Online Session';

  return (
    <div className="pt-28 md:pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-20 max-w-5xl mx-auto min-h-screen">
      <SEO
        title="Registration Confirmed | Orvelo Webinars"
        description="Thank you for registering for our upcoming Orvelo live online webinar. Your confirmation of receipt email has been dispatched from info@spigital.com."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#cb4b16]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <SectionLabel>Registration Complete</SectionLabel>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
            {details.name ? (
              <>
                Thank You, <span className="text-[#cb4b16]">{details.name}</span>!
              </>
            ) : (
              <>
                Your Spot Is <span className="text-[#cb4b16]">Confirmed!</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
            We&apos;ve received your registration for <strong className="text-white font-semibold">{sessionTitle}</strong> and saved your seat for the live session.
          </p>

          {/* Confirmation Email Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/35 border border-emerald-500/30 text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1">
                Confirmation of Receipt Sent
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                A confirmation email from <strong className="text-white">info@spigital.com</strong> has been sent to{' '}
                <strong className="text-white">{details.email || 'your registered business email'}</strong>.
                Please check your inbox (and spam/promotions folder if needed) for your confirmation details.
              </p>
            </div>
          </div>

          {/* Registered Session Summary Card */}
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#cb4b16] mb-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Registered Session</span>
              </div>
              <div className="text-sm font-bold text-white leading-snug">{sessionTitle}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#cb4b16] mb-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Date &amp; Time</span>
              </div>
              <div className="text-sm font-bold text-white">{sessionDate}</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#cb4b16] mb-1.5">
                <Laptop className="w-3.5 h-3.5" />
                <span>Format</span>
              </div>
              <div className="text-sm font-bold text-white">{sessionFormat} • Orvelo.ai</div>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#cb4b16] mb-1.5">
                {details.companyName ? <Building2 className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                <span>Attendee Details</span>
              </div>
              <div className="text-sm font-bold text-white">
                {details.name || 'Confirmed Guest'}
                {details.companyName ? ` • ${details.companyName}` : ''}
              </div>
            </div>
          </div>

          {/* What happens next */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left mb-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              What Happens Next
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-[#cb4b16] font-mono font-bold">01.</span>
                <span>Check your inbox for your confirmation receipt from <strong>info@spigital.com</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#cb4b16] font-mono font-bold">02.</span>
                <span>Mark your calendar for <strong>{sessionDate}</strong> and keep any questions ready for the live Q&amp;A.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#cb4b16] font-mono font-bold">03.</span>
                <span>Direct joining credentials and session reminders will arrive from our team prior to the start time.</span>
              </li>
            </ul>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#cb4b16]/30 inline-flex items-center justify-center gap-2"
            >
              <span>Return to Orvelo Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {details.webinarSlug === 'websites-with-ai-2027' ? (
              <Link
                to="/webinars/business-proposals-with-claude-ai"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Explore Claude Proposals Workshop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                to="/webinars/websites-with-ai-2027"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Explore Websites with AI Webinar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
