import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Server, 
  FileText, 
  Mail, 
  MapPin, 
  ArrowLeft,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "July 12, 2026";

  const quickPillars = [
    {
      icon: EyeOff,
      title: "No Public Model Training",
      desc: "Your proprietary drawings, pricing tables, and private business communications are never used to train public AI foundation models."
    },
    {
      icon: Lock,
      title: "Enterprise Encryption",
      desc: "All transmissions, audit forms, and data pipelines employ modern TLS/HTTPS encryption and strictly segregated application environments."
    },
    {
      icon: Server,
      title: "Strict Data Ownership",
      desc: "You retain full ownership of all business specifications, customer RFQs, and strategic data uploaded or analyzed through our services."
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto min-h-screen">
      <SEO 
        title="Privacy Policy | Orvelo Consulting Group" 
        description="Learn how Orvelo Consulting Group collects, uses, protects, and handles your business and personal data across our AI consulting and digital platforms."
      />

      {/* Back button */}
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#cb4b16] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12 border-b border-slate-200 pb-10"
      >
        <SectionLabel>Legal & Transparency</SectionLabel>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 uppercase">
          Privacy Policy
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Orvelo Consulting Group
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Last Updated: {lastUpdated}
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-500 font-mono">Version 2.4</span>
        </div>
      </motion.div>

      {/* Quick Summary Cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-14">
        {quickPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Sections */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm text-slate-700 leading-relaxed text-sm space-y-10">
        
        {/* 1. Introduction */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">01.</span>
            Introduction & Scope
          </h2>
          <p>
            Welcome to <strong>Orvelo Consulting Group</strong> (&ldquo;Orvelo&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We provide Generative Engine Optimization (GEO), Brand Citation Optimization (BCO), modern website development with AI lead follow-up agents, custom AI micro-applications (including quote generators and enquiry responders), and strategic digital consulting.
          </p>
          <p>
            This Privacy Policy explains how we collect, store, utilize, disclose, and protect information when you visit our website (<strong>orvelo.ai</strong>), interact with our campaign landing pages, request a visibility audit, submit enquiry forms, or engage our advisory and engineering services.
          </p>
        </section>

        <hr className="border-slate-100" />

        {/* 2. Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">02.</span>
            Information We Collect
          </h2>
          <p>
            We collect personal and business information in the following ways:
          </p>
          
          <div className="space-y-4 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                A. Information You Voluntarily Provide
              </h3>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 ml-1">
                <li><strong>Contact Details:</strong> Full name, business email address, phone number, company name, and job title.</li>
                <li><strong>Project & Consultation Briefs:</strong> Current website URL, existing technology stack, operational pain points, and target timeline.</li>
                <li><strong>Technical Enquiries & RFQ Specifications:</strong> Sample CAD files, drawings, tolerances, material grades, or quote parameters submitted for evaluation or prototype demonstration.</li>
                <li><strong>Meeting Bookings:</strong> Details provided when scheduling an exploratory call or sprint session via Calendly.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                B. Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 ml-1">
                <li><strong>Device & Network Data:</strong> IP address, browser type, operating system, device screen resolution, and language settings.</li>
                <li><strong>Usage & Engagement:</strong> Pages visited, duration on page, referring URL, button interactions, and navigation flow.</li>
                <li><strong>Cookies & Session Markers:</strong> Technical cookies necessary for website performance, navigation state, and analytics.</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* 3. How We Use Information */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">03.</span>
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect strictly for legitimate business and client-service purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-slate-600 text-xs md:text-sm">
            <li>Generating customized AI brand citation audits, GEO visibility reports, and feasibility assessments.</li>
            <li>Delivering our core services, such as 14-day modern website builds, AI agent configuration, and custom micro-applications.</li>
            <li>Communicating with you regarding discovery calls, proposals, technical milestones, and client support requests.</li>
            <li>Operating, optimizing, and monitoring the security and reliability of our web infrastructure.</li>
            <li>Complying with contractual obligations, industry regulations, and legal standards.</li>
          </ul>
        </section>

        <hr className="border-slate-100" />

        {/* 4. AI & Enterprise Data Protection Commitment */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">04.</span>
            AI & Enterprise Data Protection Commitment
          </h2>
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 text-slate-700">
            <p className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#cb4b16]" />
              Zero Public Model Training Policy
            </p>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              When Orvelo deploys AI micro-apps (such as AI Quote Generators or Sales Enquiry Responders) or conducts Brand Citation Optimization on your behalf, we interact with frontier AI models via enterprise API endpoints. <strong>We do not permit your proprietary manufacturing blueprints, trade pricing, margin calculations, or customer databases to be utilized to train public machine learning models.</strong>
            </p>
          </div>
          <p>
            All custom prompt pipelines, system architectures, and calculation rules configured for your company remain strictly isolated and governed by client confidentiality agreements.
          </p>
        </section>

        <hr className="border-slate-100" />

        {/* 5. Cookies and Tracking */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">05.</span>
            Cookies & Tracking Technologies
          </h2>
          <p>
            Our website uses standard cookies and tracking scripts to ensure responsive navigation, preserve user preferences, and understand aggregate site traffic. We do not use intrusive spyware or engage in third-party data broker sales.
          </p>
          <p className="text-xs text-slate-500">
            You may adjust your browser settings to reject cookies or notify you when cookies are set. Note that disabling essential cookies may impact certain interactive features on our site.
          </p>
        </section>

        <hr className="border-slate-100" />

        {/* 6. Third-Party Service Providers */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">06.</span>
            Third-Party Service Providers
          </h2>
          <p>
            To deliver our services efficiently, we collaborate with reputable third-party infrastructure and service vendors who process data under stringent confidentiality requirements:
          </p>
          <ul className="list-disc list-inside space-y-1.5 ml-2 text-xs md:text-sm text-slate-600">
            <li><strong>Cloud Hosting & CDN:</strong> Fast, globally distributed servers ensuring 99.9% uptime and DDoS mitigation.</li>
            <li><strong>Inquiry Dispatch & Processing:</strong> Secure form endpoints (e.g. Web3Forms) that transmit submissions directly to our engineering team.</li>
            <li><strong>Scheduling Platforms:</strong> Calendly for client meeting reservations and discovery sprint coordination.</li>
            <li><strong>Enterprise AI APIs:</strong> Frontier model providers operating under enterprise commercial terms with zero data retention for training.</li>
          </ul>
        </section>

        <hr className="border-slate-100" />

        {/* 7. Data Retention & Security */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">07.</span>
            Data Retention & Security
          </h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect personal and business information against unauthorized access, loss, misuse, or alteration. Data is retained only as long as necessary to fulfill the operational purposes outlined in this policy or to comply with statutory and tax obligations.
          </p>
        </section>

        <hr className="border-slate-100" />

        {/* 8. Your Legal Rights (GDPR / CCPA) */}
        <section className="space-y-3">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">08.</span>
            Your Privacy Rights
          </h2>
          <p>
            Depending on your jurisdiction (including the European Union, United Kingdom, and state privacy regimes such as California CPRA/CCPA), you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside space-y-1.5 ml-2 text-xs md:text-sm text-slate-600">
            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
            <li><strong>Right to Deletion:</strong> Request erasure of your personal data where retention is no longer justified.</li>
            <li><strong>Right to Restrict or Object:</strong> Object to processing or request restriction under specific circumstances.</li>
            <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing or informational communications at any time.</li>
          </ul>
          <p className="text-xs text-slate-600 pt-1">
            To exercise any of these rights, please contact our privacy desk at <a href="mailto:mail@orvelo.ai" className="text-[#cb4b16] font-semibold hover:underline">mail@orvelo.ai</a>.
          </p>
        </section>

        <hr className="border-slate-100" />

        {/* 9. Contact Information */}
        <section className="space-y-4 pt-2">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="text-[#cb4b16] font-mono text-sm font-black">09.</span>
            Contacting Us
          </h2>
          <p>
            If you have questions, comments, or requests concerning this Privacy Policy or our information handling practices, please reach out to us directly:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-[#cb4b16]" />
                Corporate Office
              </div>
              <p className="text-xs text-slate-700 font-medium">Orvelo Consulting Group</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                2617, South Main<br />
                Stafford, Texas 77477<br />
                United States
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Mail className="w-4 h-4 text-[#cb4b16]" />
                Direct Communications
              </div>
              <p className="text-xs text-slate-700 font-medium">General & Privacy Enquiries</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Email: <a href="mailto:mail@orvelo.ai" className="text-[#cb4b16] font-semibold hover:underline">mail@orvelo.ai</a><br />
                Response Time: Within 24 business hours
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Return CTA */}
      <div className="mt-12 text-center">
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
        >
          <span>Have a question? Contact Our Team</span>
        </Link>
      </div>

    </div>
  );
};
