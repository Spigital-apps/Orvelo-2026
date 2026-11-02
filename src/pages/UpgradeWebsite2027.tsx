import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Search, 
  Bot, 
  MessageSquare, 
  FileText, 
  PhoneCall, 
  Mail, 
  MessageCircle, 
  Layers, 
  Building2, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Check, 
  X,
  Globe, 
  ArrowUpRight, 
  Send, 
  HelpCircle,
  Cpu,
  Target,
  BarChart3,
  Factory,
  Briefcase,
  ExternalLink,
  Laptop,
  CheckCircle
} from 'lucide-react';

export const UpgradeWebsite2027 = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    interestedPackage: 'Package 2: Smart Website (Most Popular)',
    improvements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "682f14ea-354d-4af0-919e-86c7566732ec",
          subject: "New 14-Day Website Upgrade Request (2027 Campaign)",
          name: formData.name,
          email: formData.email,
          companyName: formData.companyName,
          websiteUrl: formData.websiteUrl,
          interestedPackage: formData.interestedPackage,
          improvements: formData.improvements,
          message: `Campaign: Upgrade Your Website for 2027\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.companyName}\nWebsite: ${formData.websiteUrl}\nPackage Selected: ${formData.interestedPackage}\nDesired Improvements: ${formData.improvements || 'None provided'}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          companyName: '',
          websiteUrl: '',
          interestedPackage: 'Package 2: Smart Website (Most Popular)',
          improvements: ''
        });
      } else {
        setSubmitError(result.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Network error. Please try again or email info@orvelo.ai directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Portfolio Data
  const portfolioProjects = [
    {
      title: "Bellows Systems",
      location: "Texas, USA",
      industry: "Manufacturing",
      url: "https://www.bellows-systems.com/",
      image: "/assets/aistudio/BSI_6e121c2f.png",
      tagline: "High-Temperature & High-Pressure Bellows Engineering",
      description: "Engineered high-performance website showcasing custom metal bellows, expansion joints, and exhaust manifolds with structured RFQ pathways for global engineering and procurement teams.",
      highlights: ["Clear technical specification catalog", "Engineering-grade RFQ submission forms", "Mobile-first responsive architecture", "AI Search & Google Indexing readiness"]
    },
    {
      title: "Sond Industries",
      location: "Texas, USA",
      industry: "Precision Engineering",
      url: "https://sondindustries.com/",
      image: "/assets/aistudio/Sond_5920f930.png",
      tagline: "Turning Blueprints into Precision Masterpieces",
      description: "Precision-crafted digital storefront turning blueprints into precision masterpieces, highlighting multi-axis CNC milling, turning, tight tolerances, and rapid quotation workflows.",
      highlights: ["Interactive machinery & capability showcase", "Direct CAD drawing upload funnel", "Fast-loading visual experience", "SEO & BCO structured data"]
    },
    {
      title: "Bonte",
      location: "India",
      industry: "Food Manufacturing",
      url: "https://bonte-web.vercel.app/",
      image: "/assets/aistudio/Bonte_9c11817c.png",
      tagline: "Elevating Culinary Experiences with Premium Craft",
      description: "Engaging, vibrant brand experience with clean product showcases, direct consumer inquiry points, distribution partner forms, and fluid catalog browsing.",
      highlights: ["Modern visual storytelling & brand presence", "B2B distributor enquiry capture", "Seamless mobile and tablet optimization", "Rich media presentation"]
    },
    {
      title: "Firstrate Vantage",
      location: "Texas, USA",
      industry: "Financial Software",
      url: "https://vantage.firstrate.com/",
      image: "/assets/aistudio/Firstrate_0d134043.png",
      tagline: "Fund Administration, Made Simple for Private Capital Firms",
      description: "Sophisticated corporate presence for private capital fund administration, delivering clear service architecture, institutional credibility, and high-converting demo request funnels.",
      highlights: ["Institutional private equity layout", "Interactive demo request workflows", "Executive thought leadership integration", "Fast enterprise compliance foundations"]
    },
    {
      title: "Maddisoft",
      location: "Texas, USA",
      industry: "Technology Consulting",
      url: "https://maddisoft.com/",
      image: "/assets/aistudio/Maddisoft_028156bf.png",
      tagline: "Enterprise Software Solutions & Cloud Engineering",
      description: "Clean tech portfolio website presenting enterprise software solutions, cloud migrations, and technical talent acquisition with crisp value propositions and lead routing.",
      highlights: ["Clean enterprise service matrix", "Client engagement & talent portals", "Structured consultation scheduling", "Streamlined B2B sales touchpoints"]
    }
  ];

  // Section 4: 6 AI-Powered Website Features
  const aiFeatures = [
    {
      id: "seo-ai-search",
      number: "01",
      title: "SEO & AI Search-Ready Website",
      subtitle: "Get found in Google, ChatGPT, Gemini, and Perplexity.",
      description: "Traditional SEO is no longer enough. We build your website with semantic code, structured Schema.org data, clean information architecture, and question-oriented answers so search engines and AI engines recommend your business.",
      icon: Search,
      badge: "Discovery",
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-200/60",
      points: [
        "Semantic HTML5 hierarchy and clean schema markup",
        "AI engine citation-ready information architecture",
        "Organized around genuine buyer search queries",
        "Fast core web vitals and Google Search Console integration"
      ]
    },
    {
      id: "multi-touch-capture",
      number: "02",
      title: "Lead Capture Across 8+ Touchpoints",
      subtitle: "Never lose a prospect because of a broken contact form.",
      description: "Modern buyers prefer different ways to connect. Your upgraded website provides multiple easy, reliable touchpoints to capture inquiries wherever prospects are ready to talk.",
      icon: Layers,
      badge: "Conversion",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/60",
      points: [
        "Website contact & detailed RFQ quotation forms",
        "One-tap click-to-call direct mobile phone links",
        "Direct email inbox triggers & WhatsApp chat widgets",
        "Calendar appointment booking & downloadable catalog gates"
      ]
    },
    {
      id: "email-agents",
      number: "03",
      title: "Automated Email Follow-Up Agents",
      subtitle: "Instant response within seconds, not days.",
      description: "78% of B2B sales go to the company that responds first. When a lead enters your site, an automated email agent sends an immediate, personalized acknowledgement, gathers missing specifications, and alerts your sales rep.",
      icon: Mail,
      badge: "Automation",
      color: "from-[#cb4b16]/10 to-amber-500/10 text-[#cb4b16] border-[#cb4b16]/20",
      points: [
        "Sub-minute tailored acknowledgement emails",
        "Smart prompts asking for missing blueprints or specs",
        "Multi-step nurture sequences for slow-moving inquiries",
        "Instant SMS/email notifications to your sales reps"
      ]
    },
    {
      id: "ai-chatbot",
      number: "04",
      title: "AI Website Chatbot and Sales Agent",
      subtitle: "A 24/7 technical sales assistant on your site.",
      description: "Your custom AI chatbot is trained exclusively on your business documents, service offerings, certifications, and FAQs. It answers prospect questions in real time and collects verified contact details.",
      icon: Bot,
      badge: "Intelligence",
      color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-200/60",
      points: [
        "Trained on your actual product catalog and technical specs",
        "Never hallucinates or invents pricing outside guidelines",
        "Captures email, phone, and requirements during conversation",
        "Seamless fallback to human handoff whenever requested"
      ]
    },
    {
      id: "call-automation",
      number: "05",
      title: "AI-Powered Sales Call Enquiry and Followup",
      subtitle: "Bridge the gap between web forms and voice calls.",
      description: "Speed-to-lead defines modern sales. When high-priority leads request a callback or submit an RFQ, automated voice agents can initiate phone follow-ups or verify caller intent before transferring to your team.",
      icon: PhoneCall,
      badge: "Speed to Lead",
      color: "from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-200/60",
      points: [
        "Instant callback triggers for hot web inquiries",
        "Natural conversational qualification and intent routing",
        "Call transcription and summary sent straight to your sales team",
        "Integrated calendar scheduling during voice interactions"
      ]
    },
    {
      id: "lead-crm",
      number: "06",
      title: "Centralized Lead Management CRM",
      subtitle: "A single dashboard for every inquiry, status, and history.",
      description: "Stop managing high-value leads across scattered inbox threads and sticky notes. We integrate a centralized lead pipeline so your team can track status, notes, follow-up history, and deal stage in one clear view.",
      icon: BarChart3,
      badge: "Pipeline",
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200/60",
      points: [
        "Single dashboard showing leads from forms, chat, and email",
        "Automated lead enrichment with company and contact data",
        "Custom pipeline stages (New, Qualified, Quoted, Closed)",
        "Syncs with existing platforms like HubSpot, Zoho, or Google Sheets"
      ]
    }
  ];

  // Section 5: Comparison Table Data (12 Features x 4 Packages)
  const comparisonFeatures = [
    { name: "Modern Website Design", p1: true, p2: true, p3: true, p4: true },
    { name: "Website Content Improvement", p1: true, p2: true, p3: true, p4: true },
    { name: "Conversion-Focused CTAs", p1: true, p2: true, p3: true, p4: true },
    { name: "Mobile Responsive Design", p1: true, p2: true, p3: true, p4: true },
    { name: "Google Indexing Setup", p1: true, p2: true, p3: true, p4: true },
    { name: "AI Search-Friendly Structure", p1: false, p2: true, p3: true, p4: true },
    { name: "Automated Email Follow-Ups", p1: false, p2: true, p3: true, p4: true },
    { name: "Enquiry Form Automation", p1: false, p2: true, p3: true, p4: true },
    { name: "AI Website Chatbot & Sales Agent", p1: false, p2: false, p3: true, p4: true },
    { name: "AI-Powered Sales Call Enquiry & Followup", p1: false, p2: false, p3: false, p4: true },
    { name: "Lead Management CRM", p1: false, p2: false, p3: true, p4: true },
    { name: "Automated Quote Generator (Add-On)", p1: false, p2: false, p3: false, p4: true }
  ];

  // Section 5: 4 Package Cards
  const packageCards = [
    {
      id: "pkg-1",
      name: "Package 1: Website Essentials",
      badge: "Core Foundation",
      tagline: "A clean, modern, mobile-friendly refresh.",
      bestFor: "Small to mid-size businesses needing a professional, modern presence that looks sharp on phones, tablets, and desktops.",
      keyFeatures: [
        "Modern custom UI design with your branding",
        "Complete website content rewrite & polish",
        "Mobile-first responsive architecture",
        "Conversion-focused call-to-action buttons",
        "Google indexing & foundational SEO setup",
        "Standard contact & inquiry forms"
      ],
      turnaround: "Delivered in 14 Days",
      popular: false
    },
    {
      id: "pkg-2",
      name: "Package 2: Smart Website",
      badge: "Most Popular",
      tagline: "Engineered for AI search discovery & automated replies.",
      bestFor: "Growing businesses and B2B companies looking to be found on ChatGPT/Gemini and capture leads with instant email automation.",
      keyFeatures: [
        "Everything in Website Essentials",
        "AI Search-Friendly Architecture (ChatGPT, Gemini, Perplexity)",
        "Automated email follow-up sequence on form submit",
        "Multi-touch enquiry form routing",
        "Advanced Schema.org structured data",
        "Lead notification alerts for sales reps"
      ],
      turnaround: "Delivered in 14 Days",
      popular: true
    },
    {
      id: "pkg-3",
      name: "Package 3: AI Lead Management",
      badge: "High Growth",
      tagline: "24/7 AI chatbot assistance with unified CRM tracking.",
      bestFor: "Companies receiving steady traffic who want to qualify prospects 24/7 and centralize every lead into an organized pipeline.",
      keyFeatures: [
        "Everything in Smart Website",
        "Custom-trained AI website chatbot for 24/7 inquiries",
        "Centralized Lead Management CRM dashboard",
        "Automated lead qualification & tagging",
        "WhatsApp Business inquiry integration",
        "Team pipeline review & analytics dashboard"
      ],
      turnaround: "Delivered in 14–18 Days",
      popular: false
    },
    {
      id: "pkg-4",
      name: "Package 4: AI Sales Automation",
      badge: "Enterprise Automation",
      tagline: "End-to-end sales acceleration from voice calls to quote drafting.",
      bestFor: "Industrial manufacturers, fabricators, and specialized service firms with high quote volumes and complex customer inquiries.",
      keyFeatures: [
        "Everything in AI Lead Management",
        "AI-Powered Call Automation for instant outreach",
        "AI-Assisted Quotation Generator & draft proposal creator",
        "Custom RFQ engineering blueprint upload pipeline",
        "Full CRM and ERP webhook synchronization",
        "Dedicated onboarding & priority workflow engineering"
      ],
      turnaround: "Scoped in 14–21 Days",
      popular: false
    }
  ];

  // Section 6: 14-Day Timeline
  const timelinePhases = [
    {
      phase: "Phase 1",
      days: "Days 1–3",
      title: "Review & Planning",
      description: "We review your existing website, brand assets, product catalog, customer journey, and lead-handling workflows to build a detailed design blueprint.",
      milestones: ["Existing website technical audit", "Asset, logo, and photography review", "Site architecture & wireframe blueprint", "Lead capture workflow alignment"]
    },
    {
      phase: "Phase 2",
      days: "Days 4–7",
      title: "Design & Development",
      description: "Our engineers build your modern, responsive website from the ground up with clean typography, fast loading times, and engaging visual layouts.",
      milestones: ["Custom UI/UX interface development", "Mobile, tablet, and desktop responsiveness", "Polished copywriting and value proposition", "Conversion-focused CTA placement"]
    },
    {
      phase: "Phase 3",
      days: "Days 8–11",
      title: "SEO Setup & Automation",
      description: "We configure Google indexing, AI search structured data, contact touchpoints, automated email agents, and selected CRM/chatbot workflows.",
      milestones: ["Technical SEO & Schema.org integration", "AI search engine discoverability setup", "Automated email follow-up sequence testing", "CRM and lead notification routing"]
    },
    {
      phase: "Phase 4",
      days: "Days 12–14",
      title: "Testing & Launch",
      description: "We conduct rigorous cross-browser testing, verify all form submissions, perform domain DNS cutover, and hand over your live, upgraded website.",
      milestones: ["End-to-end form and email testing", "Core Web Vitals & speed optimization", "Live domain DNS setup & SSL provisioning", "Team walkthrough and handover"]
    }
  ];

  // Section 7: 10 Frequently Asked Questions
  const faqs = [
    {
      q: "Can you upgrade my existing website without starting from scratch?",
      a: "Yes. During our initial review, we evaluate your existing platform, content, and branding. In many cases, we migrate your existing brand assets, valuable blog posts, and domain authority into a clean, modern framework while eliminating outdated design elements and sluggish code."
    },
    {
      q: "Can you really build my website in 14 days?",
      a: "Yes. For standard business websites where scope, content, and branding approvals are clearly established, our disciplined 14-day development sprint delivers a fully functioning, tested, and live website. More extensive catalog builds or deep custom integrations may require a slightly extended timeline."
    },
    {
      q: "What do you need from our team to get started?",
      a: "We make the process simple. All we need is access to your existing website (or domain registrar), your brand assets (logo, brand colors, high-res photos if available), and a brief 30-minute discovery conversation to understand your target audience and core service offerings."
    },
    {
      q: "Will my new website be mobile-friendly and fast?",
      a: "Absolutely. Every website we build is 100% mobile-first and responsive across smartphones, tablets, laptops, and ultra-wide desktop monitors. We optimize images, scripts, and typography to achieve rapid load times and superior Google Core Web Vitals scores."
    },
    {
      q: "How does the website get optimized for AI search engines (ChatGPT, Perplexity, Gemini)?",
      a: "We implement Brand Citation Optimization (BCO) foundations: clear semantic HTML, structured Schema.org data, clean topical hierarchy, and clear factual answers to customer questions. This allows large language models and search engines to easily parse your capabilities and recommend your brand."
    },
    {
      q: "How does the automated email follow-up agent work?",
      a: "When a customer submits an enquiry or RFQ form, the automated email agent immediately sends an authentic, professional acknowledgement confirming receipt. If critical details like drawings, material grades, or quantities are missing, the agent asks helpful follow-up questions to prepare the lead for your sales team."
    },
    {
      q: "Can the AI chatbot handle complex technical or industry-specific questions?",
      a: "Yes. In Package 3 and Package 4, the AI chatbot is strictly grounded on your approved documents, technical catalogs, spec sheets, and company credentials. It answers questions accurately within predefined boundaries and invites visitors to book a meeting or request a quote for complex projects."
    },
    {
      q: "What is included in the Lead Management CRM?",
      a: "Our centralized CRM pipeline brings together inquiries from your web forms, AI chatbot, and direct emails into a clear, visual pipeline. You can view lead status, contact details, captured requirements, and history in one place, or sync them with your existing CRM."
    },
    {
      q: "How does the AI Quote Generator work?",
      a: "In Package 4, the AI Quote Generator takes structured RFQ inputs (dimensions, quantities, material specs, standard labor assumptions) and applies your pricing logic to generate an itemized draft estimate and proposal document for your estimators to review and approve."
    },
    {
      q: "What happens after the 14-day launch? Do you provide ongoing support?",
      a: "Yes. Following launch, we provide full post-launch support to ensure smooth operation. We also offer ongoing maintenance, hosting management, content updates, and continuous BCO/SEO monitoring packages so your website continues to deliver results year after year."
    }
  ];

  // Schema.org FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Upgrade Your Website for 2027",
    "provider": {
      "@type": "Organization",
      "name": "Orvelo Consulting Group",
      "url": "https://www.orvelo.ai"
    },
    "serviceType": "Modern Business Website Redesign & AI Lead Automation",
    "description": "A modern business website with built-in AI lead follow-up agents built in 14 days, featuring AI search optimization, multi-touchpoint capture, and sales automation.",
    "areaServed": "Global"
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen text-slate-900">
      <SEO 
        title="Upgrade Your Website for 2027 | Built in 14 Days with AI Lead Agents | Orvelo"
        description="Upgrade your business website for 2027 in just 14 days. Modern design, built-in AI lead follow-up agents, 8+ capture channels, AI search optimization, and quote workflows."
        ogTitle="Upgrade Your Website for 2027 – Modern Web with Built-in AI Lead Agents"
        ogDescription="Get a modern business website built in 14 days with built-in AI follow-up agents, multi-channel capture, and AI search discoverability."
        image="/assets/aistudio/Header_Banner_da1dfb30.png"
      />

      {/* Structured Data Scripts */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* HERO BANNER */}
      <section className="relative pt-2 pb-12 md:pb-16">
        <h1 className="sr-only">
          Upgrade Your Website for 2027 – A Modern Business Website With Built-In AI Lead Follow-Up Agents
        </h1>

        {/* Hero Banner Visual Creative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <a href="#upgrade-form" className="block group focus:outline-none">
            <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.12)] bg-slate-900 group-hover:shadow-[0_25px_60px_rgba(15,23,42,0.18)] transition-all">
              <img 
                src="/assets/aistudio/Header_Banner_da1dfb30.png" 
                alt="Upgrade Your Website for 2027 - Built in 14 Days with AI Lead Follow-Up Agents"
                className="w-full h-auto object-cover max-h-[580px] md:max-h-[660px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </a>
        </motion.div>
      </section>

      {/* BUSINESS WEBSITE REDESIGN */}
      <section className="py-16 md:py-24 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Business Website Redesign</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8 font-sans uppercase">
            Been Thinking About Upgrading Your Website? <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#cb4b16] lowercase text-3xl md:text-5xl">
              Now is the time.
            </span>
          </h2>

          <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_30px_rgba(15,23,42,0.03)] space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="font-semibold text-slate-900 text-lg sm:text-xl">
              Your business has evolved. Isn't it time your website did too?
            </p>
            <p className="font-light">
              You've always wanted a modern website that looks professional, attracts potential customers, and helps generate more enquiries for your business.
            </p>
            <p className="font-light">
              At Orvelo, we go beyond traditional website design. We build modern, mobile-friendly business websites with AI-powered features that help capture enquiries, automate follow-ups, and support your sales process.
            </p>
            
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-900 font-semibold flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#cb4b16] flex-shrink-0" />
              <span>We can build your new website in just 14 days.</span>
            </div>

            <p className="font-light">
              Whether you're upgrading an outdated website or creating a stronger digital presence, we'll help you build a website that's ready for the way customers discover and engage with businesses today.
            </p>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <span className="text-sm uppercase tracking-widest font-black text-slate-900">
                Built for your business. Ready for 2027.
              </span>
              <a
                href="#upgrade-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#cb4b16]/20 active:scale-95"
              >
                <span>Upgrade Your Website</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OUR WEBSITE DESIGN PORTFOLIO CAROUSEL */}
      <section className="py-16 md:py-24 border-t border-slate-200/60" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <SectionLabel>Our Website Design Portfolio</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4 font-sans uppercase">
              Websites We've Built <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#cb4b16] lowercase text-3xl md:text-5xl">
                for our clients.
              </span>
            </h2>
            <p className="text-lg font-semibold text-slate-800 mb-3">
              Real businesses. Different industries. Websites built around their needs.
            </p>
            <p className="text-slate-600 font-light leading-relaxed">
              From industrial manufacturers in Texas to technology companies and professional service providers, we've helped businesses establish modern, professional websites that showcase their capabilities and generate real business opportunities.
            </p>
          </div>

          {/* Company Quick-Select Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
            {portfolioProjects.map((item, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-white border border-slate-200/80 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  <span>{item.title}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#cb4b16] text-white font-semibold' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {item.industry}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Carousel Card */}
          <div className="relative bg-white border border-slate-200/80 rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-[0_8px_35px_rgba(15,23,42,0.05)] overflow-hidden">
            {/* Carousel navigation header with counter & arrows */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#cb4b16] bg-[#cb4b16]/10 px-3 py-1 rounded-full uppercase">
                  Project {String(currentSlide + 1).padStart(2, '0')} / {String(portfolioProjects.length).padStart(2, '0')}
                </span>
                <span className="hidden sm:inline-block text-xs font-bold text-slate-400">
                  • {portfolioProjects[currentSlide].industry}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide(prev => (prev - 1 + portfolioProjects.length) % portfolioProjects.length)}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-900 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer active:scale-95"
                  aria-label="Previous portfolio project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentSlide(prev => (prev + 1) % portfolioProjects.length)}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-900 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer active:scale-95"
                  aria-label="Next portfolio project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slide Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual browser frame */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                    {/* Browser chrome header */}
                    <div className="bg-slate-200/90 px-4 py-3 flex items-center justify-between border-b border-slate-300/70">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      </div>
                      <a
                        href={portfolioProjects[currentSlide].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white px-3.5 py-1 rounded-md text-[11px] text-slate-700 hover:text-[#cb4b16] font-mono tracking-tight flex items-center gap-1.5 shadow-sm max-w-[300px] truncate transition-colors group/url border border-slate-200/60"
                        title={`Open live site: ${portfolioProjects[currentSlide].url}`}
                      >
                        <Globe className="w-3 h-3 text-[#cb4b16] flex-shrink-0" />
                        <span className="truncate">{portfolioProjects[currentSlide].url.replace(/^https?:\/\//, '')}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover/url:text-[#cb4b16] flex-shrink-0 ml-1" />
                      </a>
                      <Laptop className="w-4 h-4 text-slate-400" />
                    </div>

                    {/* Screenshot Showcase Image with link */}
                    <a
                      href={portfolioProjects[currentSlide].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block group overflow-hidden aspect-[16/10] bg-slate-900 cursor-pointer"
                      title={`Visit ${portfolioProjects[currentSlide].title} live website`}
                    >
                      <img
                        src={portfolioProjects[currentSlide].image}
                        alt={`${portfolioProjects[currentSlide].title} - ${portfolioProjects[currentSlide].industry} Website Design`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs shadow-lg uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Globe className="w-3.5 h-3.5 text-[#cb4b16]" />
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] uppercase tracking-widest font-black text-[#cb4b16] bg-[#cb4b16]/10 px-3.5 py-1.5 rounded-full">
                        {portfolioProjects[currentSlide].industry}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight">
                        {portfolioProjects[currentSlide].title}
                      </h3>
                      <a
                        href={portfolioProjects[currentSlide].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#cb4b16] hover:underline"
                        title="View live website"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <p className="text-sm font-semibold text-slate-700 italic mb-4">
                      "{portfolioProjects[currentSlide].tagline}"
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                      {portfolioProjects[currentSlide].description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                        Key Inclusions & Highlights:
                      </span>
                      {portfolioProjects[currentSlide].highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#cb4b16] flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={portfolioProjects[currentSlide].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 hover:text-[#cb4b16] hover:border-[#cb4b16] rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 text-center group"
                    >
                      <Globe className="w-4 h-4 text-slate-500 group-hover:text-[#cb4b16]" />
                      <span>View Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#cb4b16]" />
                    </a>
                    <a
                      href="#upgrade-form"
                      onClick={() => setFormData(prev => ({ 
                        ...prev, 
                        improvements: `Interested in a design and workflow similar to ${portfolioProjects[currentSlide].title} (${portfolioProjects[currentSlide].industry}).`
                      }))}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#cb4b16]/20 active:scale-95 text-center"
                    >
                      <span>Request a site like this</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators and thumbnail switcher */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {portfolioProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? 'w-8 bg-[#cb4b16]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{portfolioProjects[currentSlide].title}</span>
                <span>—</span>
                <span className="text-[#cb4b16] font-medium">{portfolioProjects[currentSlide].industry}</span>
              </div>
            </div>
          </div>

          {/* Portfolio Concluding CTA */}
          <div className="mt-14 bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#cb4b16]/15 rounded-full blur-3xl pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-black mb-3 font-sans">
              Your Business Could Be Next.
            </h3>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8 font-light">
              Ready to give your company the modern, professional website it deserves? Let's build your 2027 digital front door in just 14 days.
            </p>
            <a
              href="#upgrade-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#cb4b16]/25"
            >
              <span>Upgrade Your Website</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* AI-POWERED WEBSITE FEATURES */}
      <section className="py-16 md:py-24 border-t border-slate-200/60" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <SectionLabel>AI-Powered Website Features</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4 font-sans uppercase">
              Six Ways We Make <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#cb4b16] lowercase text-3xl md:text-5xl">
                your website work smarter.
              </span>
            </h2>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              We combine world-class modern UI design with automated AI features that work around the clock to capture, qualify, and accelerate buyer opportunities.
            </p>
          </div>

          {/* 6 Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feat) => {
              const IconComponent = feat.icon;
              return (
                <div 
                  key={feat.id}
                  className="bg-white border border-slate-200/80 rounded-[2rem] p-7 shadow-[0_4px_25px_rgba(15,23,42,0.02)] flex flex-col justify-between hover:border-slate-300 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border bg-gradient-to-br ${feat.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-400">
                        {feat.number}
                      </span>
                    </div>

                    <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full mb-3">
                      {feat.badge}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#cb4b16] mb-3">
                      {feat.subtitle}
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed font-light mb-5">
                      {feat.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {feat.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ADD-ON FEATURE: Automated Quotation Generation */}
          <div className="mt-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white rounded-[2.5rem] p-8 sm:p-10 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#cb4b16]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cb4b16]/20 border border-[#cb4b16]/40 text-[#cb4b16] text-[11px] font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Add-On Feature</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3 font-sans">
                  Automated Quotation Generation
                </h3>
                
                <p className="text-sm sm:text-base font-semibold text-slate-300 mb-4">
                  Turn complete technical inquiries and RFQ submissions into quote drafts in minutes.
                </p>
                
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6 max-w-2xl">
                  Speed up your estimating cycle without burdening senior engineers. Connect structured website RFQs directly to AI-assisted quoting logic that drafts itemized estimates, standard terms, and formal proposal PDFs for your estimators to review and approve.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#cb4b16] flex-shrink-0 mt-0.5" />
                    <span>Automated preliminary cost estimation rules</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#cb4b16] flex-shrink-0 mt-0.5" />
                    <span>Standardized PDF proposal generation with branding</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#cb4b16] flex-shrink-0 mt-0.5" />
                    <span>Direct export to CRM and estimating workflows</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#cb4b16] flex-shrink-0 mt-0.5" />
                    <span>Cuts quoting turnaround from 3–5 days to under an hour</span>
                  </div>
                </div>

                <a
                  href="#upgrade-form"
                  onClick={() => setFormData(prev => ({ 
                    ...prev, 
                    packageType: "Package 4: Complete Sales Automation Website",
                    improvements: prev.improvements ? `${prev.improvements} + Interested in adding Automated Quotation Generation.` : "Interested in adding Automated Quotation Generation."
                  }))}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#cb4b16]/30 active:scale-95"
                >
                  <span>Inquire About Quote Generator Add-On</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Visual preview card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-inner relative">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#cb4b16]/20 border border-[#cb4b16]/40 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#cb4b16]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">AI RFQ & Quote Engine</div>
                        <div className="text-[10px] text-slate-400">Micro App Add-On</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Add-On Feature
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
                      <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Step 1: Structured Ingestion</div>
                      <div className="text-slate-200 text-xs">Customer submits technical specs, dimensions & quantities</div>
                    </div>
                    <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
                      <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Step 2: AI Cost Modeling</div>
                      <div className="text-slate-200 text-xs">Raw materials, machine time, labor & margins calculated</div>
                    </div>
                    <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
                      <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Step 3: Document Generation</div>
                      <div className="text-slate-200 text-xs">Itemized quote draft & PDF proposal generated for review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE REDESIGN PACKAGES */}
      <section className="py-16 md:py-24 border-t border-slate-200/60" id="packages">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Website Redesign Packages</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4 font-sans uppercase">
              Choose the Package <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#cb4b16] lowercase text-3xl md:text-5xl">
                that fits your growth.
              </span>
            </h2>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              Transparent, modular tiers designed for rapid 14-day turnaround. Whether you simply need a clean aesthetic upgrade or end-to-end sales automation, we have a package built for your business.
            </p>
          </div>

          {/* 4 Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {packageCards.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-[2rem] p-7 flex flex-col justify-between transition-all relative ${
                  pkg.popular 
                    ? 'bg-slate-900 text-white shadow-xl border-2 border-[#cb4b16]' 
                    : 'bg-white border border-slate-200/80 text-slate-900 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#cb4b16] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold mb-2 text-slate-400">
                    {pkg.badge}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name.split(':')[1] || pkg.name}
                  </h3>
                  <p className={`text-xs mb-4 ${pkg.popular ? 'text-[#cb4b16] font-semibold' : 'text-slate-600 font-medium'}`}>
                    {pkg.tagline}
                  </p>

                  <div className={`p-3.5 rounded-xl text-xs mb-5 ${pkg.popular ? 'bg-white/10 text-slate-300' : 'bg-slate-50 text-slate-600'}`}>
                    <strong className="block text-slate-200 mb-1 text-[11px] uppercase tracking-wider">Best For:</strong>
                    {pkg.bestFor}
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className={`text-[11px] uppercase tracking-wider font-bold block ${pkg.popular ? 'text-slate-400' : 'text-slate-400'}`}>
                      Key Inclusions:
                    </span>
                    {pkg.keyFeatures.map((kf, kIdx) => (
                      <div key={kIdx} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-[#cb4b16]' : 'text-emerald-600'}`} />
                        <span className={pkg.popular ? 'text-slate-300' : 'text-slate-600'}>{kf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100/10">
                  <div className="text-[11px] font-medium text-slate-400 mb-3 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#cb4b16]" />
                    <span>{pkg.turnaround}</span>
                  </div>
                  <a
                    href="#upgrade-form"
                    onClick={() => setFormData(prev => ({ ...prev, interestedPackage: pkg.name }))}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center ${
                      pkg.popular
                        ? 'bg-[#cb4b16] hover:bg-[#b33f11] text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    <span>Select Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Full Comparison Table (12 Features) */}
          <div className="bg-white border border-slate-200/80 rounded-[2.5rem] p-6 md:p-10 shadow-[0_4px_30px_rgba(15,23,42,0.03)]">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Feature Comparison Matrix
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Compare all 12 capabilities across our four redesign tiers.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3">
                      Feature Capability
                    </th>
                    <th className="py-4 px-3 text-xs font-bold text-slate-700 uppercase tracking-wider text-center">
                      Pkg 1: Essentials
                    </th>
                    <th className="py-4 px-3 text-xs font-bold text-[#cb4b16] uppercase tracking-wider text-center bg-[#cb4b16]/5 rounded-t-lg">
                      Pkg 2: Smart
                    </th>
                    <th className="py-4 px-3 text-xs font-bold text-slate-700 uppercase tracking-wider text-center">
                      Pkg 3: Lead CRM
                    </th>
                    <th className="py-4 px-3 text-xs font-bold text-slate-700 uppercase tracking-wider text-center">
                      Pkg 4: Sales Auto
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {comparisonFeatures.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-800">
                        {row.name}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.p1 ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center bg-[#cb4b16]/5">
                        {row.p2 ? (
                          <Check className="w-4 h-4 text-[#cb4b16] mx-auto font-bold" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.p3 ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.p4 ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* WEBSITE DEVELOPMENT IN 14 DAYS */}
      <section className="py-16 md:py-24 border-t border-slate-200/60" id="process">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Website Development in 14 Days</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4 font-sans uppercase">
              How We Build Your Website <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#cb4b16] lowercase text-3xl md:text-5xl">
                in just 14 days.
              </span>
            </h2>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              We eliminate traditional agency bloat, months-long back-and-forth, and vague deadlines with an organized 4-phase agile delivery timeline.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {timelinePhases.map((phase, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-[2rem] p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-bold text-[#cb4b16] font-mono">
                      {phase.days}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-light leading-relaxed mb-6">
                    {phase.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {phase.milestones.map((ms, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-[#cb4b16] flex-shrink-0 mt-0.5" />
                      <span>{ms}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer footnote */}
          <p className="text-xs text-slate-500 italic max-w-3xl leading-relaxed">
            * The 14-day timeline applies to standard business website redesigns with an agreed scope, timely delivery of brand assets, and prompt feedback on draft reviews. Custom catalog data scraping or deeply complex ERP enterprise integrations are scheduled accordingly.
          </p>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-24 border-t border-slate-200/60" id="faqs">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4 font-sans uppercase">
            Everything You Need to Know <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#cb4b16] lowercase text-3xl md:text-5xl">
              before upgrading.
            </span>
          </h2>
          <p className="text-slate-600 font-light text-base leading-relaxed mb-12">
            Got questions about timelines, technology, AI search optimization, or ongoing support? Find clear answers below.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#cb4b16] transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#cb4b16]' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-600 text-sm font-light leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA & ENQUIRY FORM */}
      <section className="py-16 md:py-24 border-t border-slate-200/60" id="upgrade-form">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#cb4b16]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="max-w-2xl mb-10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#cb4b16] bg-[#cb4b16]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
                  Start Your Upgrade
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 font-sans uppercase">
                  Ready to Upgrade Your Business Website <br className="hidden sm:inline" />
                  <span className="font-serif italic font-normal text-[#cb4b16] lowercase text-3xl md:text-5xl">
                    for 2027?
                  </span>
                </h2>
                <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                  Fill out the form below. We'll review your current website, map out your AI search readiness, and share a tailored upgrade plan within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You! Your Request Has Been Received.</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Our web engineering team is reviewing your website. We'll send your 2027 upgrade roadmap and 14-day schedule within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#cb4b16] text-sm transition-all"
                      />
                    </div>

                    {/* Business Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Business Email *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#cb4b16] text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Company Name *
                      </label>
                      <input 
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Manufacturing Inc."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#cb4b16] text-sm transition-all"
                      />
                    </div>

                    {/* Existing Website URL */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Existing Website URL *
                      </label>
                      <input 
                        type="url"
                        name="websiteUrl"
                        required
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        placeholder="https://www.yourcompany.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#cb4b16] text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Interested Package */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Interested Package *
                    </label>
                    <select
                      name="interestedPackage"
                      value={formData.interestedPackage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-[#cb4b16] text-sm transition-all"
                    >
                      <option value="Package 1: Website Essentials">Package 1: Website Essentials (14 Days)</option>
                      <option value="Package 2: Smart Website (Most Popular)">Package 2: Smart Website (Most Popular - AI Search & Email Agents)</option>
                      <option value="Package 3: AI Lead Management">Package 3: AI Lead Management (AI Chatbot & CRM)</option>
                      <option value="Package 4: AI Sales Automation">Package 4: AI Sales Automation (Call Automation & Quoting)</option>
                      <option value="Not Sure - Need Recommendation">Not Sure - Need Recommendation</option>
                    </select>
                  </div>

                  {/* What would you like to improve? */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      What would you like to improve? (Optional)
                    </label>
                    <textarea 
                      name="improvements"
                      rows={3}
                      value={formData.improvements}
                      onChange={handleInputChange}
                      placeholder="e.g. Outdated design, mobile responsiveness, need automated quotation forms, want to appear in AI search engines..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#cb4b16] text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#cb4b16]/30 active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Upgrade Your Website</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Branding tagline */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                <span className="font-mono tracking-wider font-semibold text-slate-300">
                  Orvelo.ai | Engineered for Orbital Velocity
                </span>
                <span>
                  Confidential & Secure • Direct to Senior Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
