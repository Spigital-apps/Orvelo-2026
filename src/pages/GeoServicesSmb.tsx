import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { 
  Bot, 
  Search, 
  Cpu, 
  Compass, 
  GitMerge, 
  FileCheck, 
  Activity, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  Users, 
  Target, 
  FileText, 
  ShieldCheck, 
  Settings, 
  LineChart, 
  CheckCircle2, 
  Layers, 
  FileCode, 
  Database,
  BarChart3,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const GeoServicesSmb = () => {
  const { openModal } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Orvelo's GEO Services (8 Services)
  const services = [
    {
      num: "01",
      title: "AI Search Visibility Audit",
      desc: "We start by checking how your business appears across AI search engines. We test customer questions across platforms such as ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, and Microsoft Copilot.",
      bullets: [
        "Where your business appears vs competitors",
        "Which customer questions you are missing",
        "Which services or locations need stronger visibility",
        "Which sources AI engines currently rely on"
      ],
      icon: Search
    },
    {
      num: "02",
      title: "Customer Question Mapping",
      desc: "Customers do not always search with simple keywords. They ask AI based on need, problem, location, budget, comparison, urgency, trust, and package configurations.",
      bullets: [
        "Mapping high-intent customer questions to content",
        "Identifying budget, package, and comparison queries",
        "Targeting local intent questions (e.g., 'near me')",
        "Turning decision questions into content opportunities"
      ],
      icon: Target
    },
    {
      num: "03",
      title: "Retrieval-Ready Website Content",
      desc: "AI engines need content that is easy to extract, summarize, cite, and recommend. We restructure and create content that is easy for both people and AI systems to parse.",
      bullets: [
        "Service, product, and location pages",
        "Industry and use case pages",
        "FAQ, comparison, and package pages",
        "Case studies, customer outcomes, and educational blogs"
      ],
      icon: FileText
    },
    {
      num: "04",
      title: "Business Entity Optimization",
      desc: "AI engines need to understand who you are and what you are known for. We strengthen your business identity across your website and external sources.",
      bullets: [
        "Service categorization & business profile clarity",
        "Expertise signals (founder or team profiles)",
        "Testimonials, reviews, and case study credibility",
        "Location, directory, and Google Business Profile consistency"
      ],
      icon: Cpu
    },
    {
      num: "05",
      title: "GEO Content Architecture",
      desc: "Most SMB websites have pages, but not enough structure. We build a GEO-focused content architecture that connects your services, locations, use cases, and proofs.",
      bullets: [
        "Inter-connected service-to-location mappings",
        "Dedicated intent-specific landing pages",
        "Structured Q&A and FAQ content silos",
        "Multi-layered buyer decision structures"
      ],
      icon: Layers
    },
    {
      num: "06",
      title: "AEO and FAQ Optimization",
      desc: "Answer Engine Optimization helps your business become the cited answer for specific questions. We build answer-friendly sections so AI engines can easily identify useful responses.",
      bullets: [
        "Short direct answers for rapid citations",
        "Expandable service and package FAQs",
        "Buyer guidance blocks & local intent answers",
        "Schema-supported question and answer structures"
      ],
      icon: HelpCircle
    },
    {
      num: "07",
      title: "AI Citation & Competitor Tracking",
      desc: "We track how your business performs across AI-generated answers. We monitor whether your brand is cited or ignored while checking share-of-voice and recommendations over time.",
      bullets: [
        "Monitoring which AI engines mention your brand",
        "Tracking competitor recommendations and share-of-voice",
        "Identifying won vs. missed customer questions",
        "Evaluating content changes' direct impact on AI visibility"
      ],
      icon: Activity
    },
    {
      num: "08",
      title: "GEO Reporting for Business Owners",
      desc: "SMB owners need practical reports. We focus on whether the business is becoming easier to find, trust, and contact, rather than vanity SEO traffic metrics.",
      bullets: [
        "AI visibility by service and location",
        "Competitor mentions and customer questions won",
        "Website content and trust signal gaps",
        "Recommended next-step actions for lead growth"
      ],
      icon: BarChart3
    }
  ];

  // What Orvelo Builds for GEO (7 Deliverables)
  const deliverables = [
    {
      title: "GEO Audit",
      desc: "A complete review of your AI search visibility, competitor visibility, website readiness, and content gaps.",
      icon: ShieldCheck
    },
    {
      title: "AI Search Visibility Map",
      desc: "A customer-question map showing where your business appears, where competitors appear, and where new content is needed.",
      icon: Compass
    },
    {
      title: "Retrieval-Ready Website Pages",
      desc: "Service, product, location, industry, use case, FAQ, and case study pages structured for both customers and AI engines.",
      icon: FileCode
    },
    {
      title: "SMB Buyer Content",
      desc: "Blogs, guides, FAQs, comparison pages, package pages, and customer education content built around real buying intent.",
      icon: FileText
    },
    {
      title: "Technical SEO and Schema Support",
      desc: "Structured data, page hierarchy, internal linking, metadata, and content formatting that help search and AI engines understand your business.",
      icon: Database
    },
    {
      title: "Competitor GEO Tracking",
      desc: "Ongoing monitoring of how competitors appear across AI engines for your most important customer questions.",
      icon: LineChart
    },
    {
      title: "GEO Execution Roadmap",
      desc: "A practical plan showing what to fix, what to build, what to publish, and what to track.",
      icon: GitMerge
    }
  ];

  // Who This Service Is For (Audiences)
  const audiences = [
    "Small & medium businesses",
    "Education and training businesses",
    "Healthcare and wellness brands",
    "Retail and ecommerce businesses",
    "Restaurants and food service brands",
    "Technology and SaaS companies",
    "Service businesses",
    "Local businesses",
    "Professional service firms",
    "Agencies and consultants",
    "Construction and interior businesses",
    "Event and catering companies"
  ];

  // The Orvelo GEO Process Steps (1-8)
  const processSteps = [
    { step: "01", title: "AI Visibility Audit", desc: "We test how your business appears across AI tools for important customer questions." },
    { step: "02", title: "Competitor Citation Review", desc: "We identify which competitors are being mentioned, recommended, or cited instead of you." },
    { step: "03", title: "Customer Question Strategy", desc: "We map the actual questions your customers ask before choosing a business." },
    { step: "04", title: "Content and Website Gap Analysis", desc: "We review your current website to identify missing service, location, FAQ, case study, and customer education content." },
    { step: "05", title: "GEO Content Buildout", desc: "We create or restructure pages so AI engines can understand and retrieve your expertise." },
    { step: "06", title: "Schema and Technical Optimization", desc: "We improve structured data, internal linking, metadata, page hierarchy, and search readability." },
    { step: "07", title: "Authority and Entity Strengthening", desc: "We improve brand consistency, expertise signals, external mentions, local presence, and review visibility." },
    { step: "08", title: "Tracking and Reporting", desc: "We monitor AI visibility, competitor movement, and customer-question performance over time." }
  ];

  // FAQ Items (10 Items)
  const faqs = [
    {
      q: "What is GEO for SMBs?",
      a: "GEO, or Generative Engine Optimization, helps small and mid-sized businesses become more visible across AI engines such as ChatGPT, Gemini, Claude, Perplexity, Microsoft Copilot, and Google AI Overviews. It focuses on helping AI systems understand your services, locations, expertise, proof, and customer value."
    },
    {
      q: "How is GEO different from SEO?",
      a: "SEO helps your website rank in traditional search results. GEO helps your business appear inside AI-generated answers and recommendations. SEO focuses on search rankings and traffic. GEO focuses on AI visibility, citations, recommendations, and customer-question coverage."
    },
    {
      q: "Do SMBs really need GEO?",
      a: "Yes, especially if your business depends on enquiries, bookings, consultations, calls, RFQs, online discovery, or local search. Customers are increasingly using AI tools to compare and shortlist businesses before contacting them."
    },
    {
      q: "Which AI platforms does Orvelo optimize for?",
      a: "Orvelo focuses on visibility across ChatGPT, Gemini, Claude, Perplexity, Microsoft Copilot, and Google AI Overviews."
    },
    {
      q: "What type of content works best for GEO?",
      a: "The best GEO content is specific, structured, and useful. For SMBs, this includes service pages, location pages, FAQs, case studies, comparison pages, package pages, blogs, customer guides, and testimonials."
    },
    {
      q: "Can GEO help generate more enquiries?",
      a: "GEO can support enquiry generation by improving visibility during the customer research stage. When customers use AI tools to find and compare businesses, strong GEO content can help your business appear earlier in their decision process."
    },
    {
      q: "Is GEO a one-time project or ongoing work?",
      a: "A GEO audit can be done as a one-time project, but long-term results usually require ongoing content, tracking, optimization, and competitor monitoring."
    },
    {
      q: "Does GEO replace traditional SEO?",
      a: "No. GEO and SEO work together. SEO helps you rank in search engines, while GEO helps you appear in AI-generated answers."
    },
    {
      q: "What is an AI Search Visibility Audit?",
      a: "An AI Search Visibility Audit checks whether your business appears across AI platforms for important customer questions. It identifies where you appear, where competitors appear, what content is missing, and what needs to be improved."
    },
    {
      q: "Who should use Orvelo’s GEO service?",
      a: "Orvelo’s GEO service is ideal for SMBs, local businesses, service businesses, ecommerce brands, restaurants, education and training companies, healthcare and wellness brands, technology companies, SaaS companies, consultants, agencies, and professional service providers."
    }
  ];

  return (
    <div className="pt-32 pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="GEO Services for SMBs | Orvelo" 
        description="Orvelo helps SMBs improve visibility across ChatGPT, Gemini, Claude, Perplexity, Copilot, and Google AI Overviews with GEO strategy, AI search audits, and retrieval-ready content."
      />

      {/* SECTION 1: HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 text-center max-w-5xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#cb4b16]/10 bg-[#cb4b16]/5 text-[#cb4b16] text-[10px] uppercase font-bold tracking-widest mx-auto">
          <Bot className="w-3.5 h-3.5" />
          <span>New Frontier: GEO Services</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-slate-900 leading-[1.05] mb-8 font-sans uppercase">
          Generative Engine Optimization <br />
          <span className="font-serif italic font-normal text-emerald-700 lowercase">for Small & Medium Businesses</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-800 font-extrabold max-w-3xl mx-auto leading-relaxed mb-4">
          Get your business discovered by ChatGPT, Gemini, Claude, Perplexity, Copilot, and AI search engines
        </p>

        <p className="text-slate-500 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12">
          Your customers are no longer searching only on Google. Orvelo helps SMBs become more visible, more trusted, and more likely to be recommended across AI search engines, answer engines, and generative AI platforms.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 hover:shadow-xl active:scale-95 text-center"
          >
            Get Your AI Search Visibility Audit
          </Link>
        </div>
      </motion.div>

      {/* SECTION 2: THE SHIFT (Traditional SEO vs GEO) */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              AI Search Is Changing How Customers Discover Businesses
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              Traditional SEO helps your website rank on Google. GEO helps your business appear when AI tools generate answers, recommendations, comparison lists, local suggestions, and buying guidance.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              This matters because customers now use AI to find service providers, compare businesses, shortlist vendors, understand pricing and packages, ask for recommendations, prepare enquiry questions, choose local businesses, and evaluate trust and credibility.
            </p>
            <p className="text-slate-500 font-light leading-relaxed text-xs">
              If your services, products, locations, reviews, FAQs, pricing process, case studies, and business information are not structured clearly, AI engines may overlook your business even if you are a good fit.
            </p>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_25px_rgba(15,23,42,0.01)]">
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-center border-b border-slate-100 pb-4">
              How SMB Customers Research Today
            </h3>
            <div className="space-y-3">
              {[
                "“Best agency for branding and digital marketing”",
                "“Top preschool near me with daycare”",
                "“Best vegetarian catering service for events”",
                "“Reliable wellness clinic for therapy sessions”",
                "“Best ecommerce brand for kitchen appliances”",
                "“Which SaaS product should I use for my business?”",
                "“Good construction company for residential projects”"
              ].map((query, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-100 font-mono text-xs text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#cb4b16] shrink-0" />
                  <p className="italic">"{query}"</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-6">
              If you aren't recommended here, you aren't on the shortlist.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: REALITY CHECK (Immersive block using the dark theme) */}
      <section className="relative py-20 px-6 md:px-20 z-10 bg-[#0F172A] text-white my-16 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,232,251,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#31e8fb] font-extrabold mb-6">Reality Check</p>
          <h2 className="text-2xl md:text-4xl font-light leading-relaxed tracking-wide text-balance mb-8 font-sans">
            "Traditional SEO helps you rank. <br />
            <span className="font-semibold text-white">GEO helps you get recommended.</span>"
          </h2>
          <div className="h-px w-20 bg-white/10 mx-auto mb-8" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Traditional SEO focuses on search rankings, clicks, and organic traffic. GEO focuses on whether AI engines understand, mention, cite, and recommend your business when customers ask questions.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHAT IS GEO */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel className="justify-center">Definition</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            What Is GEO? <span className="font-serif italic font-normal text-emerald-700">Generative Engine Optimization</span>
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-base md:text-lg">
            Generative Engine Optimization is the process of improving how your business is understood, cited, and recommended by AI engines such as ChatGPT, Claude, Gemini, Perplexity, Microsoft Copilot, and Google AI Overviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">1</span>
              AEO (Answer Engine Optimization)
            </h3>
            <p className="text-slate-500 font-light text-xs leading-relaxed">
              Focuses on making your website the single, directly cited answer for specific factual questions. It is structured to answer direct queries with precision, claiming authority.
            </p>
          </div>
          <div className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-[#cb4b16] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#cb4b16]/5 text-[#cb4b16] flex items-center justify-center text-sm font-bold">2</span>
              GEO (Generative Engine Optimization)
            </h3>
            <p className="text-slate-500 font-light text-xs leading-relaxed">
              Unlike traditional SEO, GEO is not only about ranking for keywords. It is about making your business easy for AI systems to recognize as a relevant, credible, and useful answer.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY GEO MATTERS & COMMON WEBSITE ISSUES */}
      <section className="py-16 border-t border-slate-200/60 bg-slate-50/50 rounded-[3rem] px-8 my-12">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionLabel>Buyer Behavior</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              Why GEO Matters for SMBs
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              Your next customer may not start with Google. A parent, business owner, patient, event host, student, buyer, homeowner, or operations manager may ask an AI tool for recommendations before visiting search results.
            </p>
            <p className="text-slate-500 font-light leading-relaxed text-xs">
              AI platforms need content they can easily interpret. Most SMB websites are built as basic brochure pages. They explain services, but often miss the structure AI engines need.
            </p>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h3 className="text-lg font-bold text-[#cb4b16] mb-6 uppercase tracking-wider">
              Common Website Issues We Fix
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Generic service descriptions",
                "Thin location pages",
                "Weak FAQ sections",
                "No clear service process",
                "No pricing or package clarity",
                "Limited customer proof",
                "No case studies",
                "No comparison content",
                "Poor internal linking",
                "Weak business entity signals",
                "Inconsistent online information",
                "Missing schema structure",
                "No content around customer questions"
              ].map((issue, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                  <p className="text-slate-600 text-xs font-light">{issue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE 8 SERVICES */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">Our Offerings</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Orvelo’s GEO Services <br />
            <span className="font-serif italic font-normal text-emerald-700 lowercase">for SMBs</span>
          </h2>
          <p className="text-slate-500 font-light text-xs md:text-sm">
            We combine GEO, traditional SEO, technical content strategy, and entity building into one practical growth system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="bg-white border border-slate-200/50 rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:border-[#cb4b16]/30 hover:shadow-md transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#cb4b16]/5 group-hover:text-[#cb4b16] transition-colors duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#cb4b16]/20 transition-colors">
                      {svc.num}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-slate-950 transition-colors">
                    {svc.title}
                  </h3>
                  
                  <p className="text-slate-500 font-light text-xs leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 mt-2">
                  <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400 mb-3">Core Scope Includes</h4>
                  <ul className="space-y-2">
                    {svc.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2.5 text-xs text-slate-600 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 7: WHAT WE BUILD (DELIVERABLES) */}
      <section className="py-20 border-t border-slate-200/60 bg-slate-900 text-white rounded-[3rem] px-8 md:px-16 my-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(203,75,22,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#cb4b16] bg-[#cb4b16]/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Deliverables
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              What Orvelo Builds for GEO
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-sm">
              Clear, practical artifacts, optimizations, and reports that drive visibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {deliverables.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#cb4b16] mb-4 border border-white/10">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO THIS SERVICE IS FOR */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <SectionLabel>Target Fit</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              Who This Service Is For
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              Orvelo’s GEO service is built specifically for SMBs that want to be discovered by modern customers.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              This service is especially useful if your business depends on customers finding you online, comparing you with competitors, and contacting you after building trust.
            </p>
            <div className="p-5 border-l-2 border-emerald-600 bg-emerald-50/50 rounded-r-2xl">
              <p className="text-xs text-slate-700 font-light leading-relaxed">
                "GEO for SMBs is not the same as enterprise SEO. Small and mid-sized businesses need visibility that connects directly to enquiries, bookings, calls, consultations, RFQs, and sales conversations."
              </p>
            </div>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4 text-center">
              Sectors We Serve
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {audiences.map((sector, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: THE PROCESS */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">The Blueprint</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            The Orvelo GEO Process
          </h2>
          <p className="text-slate-500 font-light text-xs md:text-sm">
            An organized, step-by-step methodology to index, rank, and cite your business strengths.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-[2rem] shadow-[0_4px_15px_rgba(15,23,42,0.01)] hover:border-[#cb4b16]/30 hover:shadow-md transition-all duration-300">
              <span className="font-mono text-xs font-bold text-[#cb4b16] bg-[#cb4b16]/5 px-2.5 py-1 rounded-full mb-4 inline-block">
                Step {step.step}
              </span>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: BOTTOM CALL TO ACTION */}
      <section className="py-20 border-t border-slate-200/60 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-[#cb4b16]/5 text-[#cb4b16] flex items-center justify-center mx-auto mb-8 border border-[#cb4b16]/10">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          Find out if AI engines recommend your business
        </h2>
        
        <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Your customers are already using AI to research businesses, compare options, and prepare enquiries. The question is whether your business is part of the answer. Orvelo helps SMBs improve visibility and become easier to find, trust, and shortlist.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 text-center"
          >
            Request a GEO Visibility Audit
          </Link>
          
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 transition-all duration-300 text-center"
          >
            Check If AI Recommends Your Business
          </Link>
        </div>
      </section>

      {/* FAQ SECTION (SECTION 11) */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel className="justify-center">Got Questions?</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200/60 rounded-3xl bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 md:px-8 text-left flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="text-sm font-bold text-slate-900 pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${
                      activeFaq === idx ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-6 text-xs text-slate-500 font-light leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
