import { motion } from 'motion/react';
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
  Sparkles
} from 'lucide-react';

export const GeoServices = () => {
  const { openModal } = useModal();

  // Orvelo's GEO Services (8 Services)
  const services = [
    {
      num: "01",
      title: "AI Search Visibility Audit",
      desc: "We start by checking how your company appears across AI search engines. We test buyer questions across ChatGPT, Gemini, Claude, Perplexity, Google AI Overviews, and Microsoft Copilot.",
      bullets: [
        "Where your company appears vs. competitors",
        "Which product categories & questions are missing",
        "Which pages are not AI-readable enough",
        "Which authority and trust signals are missing"
      ],
      icon: Search
    },
    {
      num: "02",
      title: "Buyer Question Mapping",
      desc: "Manufacturing buyers ask highly specific questions based on applications, materials, compliance, tolerances, and RFQ readiness rather than simple keywords.",
      bullets: [
        "Mapping high-intent RFQ questions to content",
        "Application-specific queries (e.g. data center expansion joints)",
        "Material & compliance-specific questions",
        "Custom capability and lead time discovery"
      ],
      icon: Target
    },
    {
      num: "03",
      title: "Retrieval-Ready Website Content",
      desc: "AI engines need content that is easy to extract, quote, summarize, and recommend. We restructure and create content that is fact-dense, schema-supported, and source-friendly.",
      bullets: [
        "Product, industry, and application pages",
        "Material pages and engineering capability sections",
        "FAQ sections & RFQ guidance documents",
        "Case study pages and technical education content"
      ],
      icon: FileText
    },
    {
      num: "04",
      title: "Manufacturing Entity Optimization",
      desc: "We strengthen your company's digital entity across your website and external databases, helping AI models recognize your authority, certifications, and compliance.",
      bullets: [
        "Company profile clarity & categorization",
        "Certifications, compliance & expertise alignment",
        "Location and service area consistency",
        "Brand mentions and digital footprint consistency"
      ],
      icon: Cpu
    },
    {
      num: "05",
      title: "GEO Content Architecture",
      desc: "Most manufacturing websites lack structure. We connect your products, industries, applications, materials, and credentials into an AI-readable semantic web.",
      bullets: [
        "Dedicated application-specific landing pages",
        "Material-specific use cases and data sheets",
        "Inter-connected product-to-industry mappings",
        "Structured RFQ-stage content silos"
      ],
      icon: Layers
    },
    {
      num: "06",
      title: "AEO and FAQ Optimization",
      desc: "Answer Engine Optimization helps your brand become the cited answer for specific user questions by embedding schema-supported, highly direct answer blocks on your site.",
      bullets: [
        "Short, direct answer blocks for rapid citations",
        "Expandable technical FAQ sections",
        "Decision-support tables & comparisons",
        "Application-specific Q&A documentation"
      ],
      icon: HelpCircle
    },
    {
      num: "07",
      title: "AI Citation & Competitor Tracking",
      desc: "We track how your company performs in AI-generated answers, checking share-of-voice and recommendations over time.",
      bullets: [
        "Monitoring which AI models recommend you",
        "Competitor citation volume & reference sources",
        "Tracking won vs. missed buyer questions",
        "Evaluating content changes' influence on citations"
      ],
      icon: Activity
    },
    {
      num: "08",
      title: "GEO Reporting for Sales & Leadership",
      desc: "We provide practical, clear reports focusing on sales visibility and buyer shortlists, rather than vanity SEO traffic metrics.",
      bullets: [
        "AI visibility by product category & industry",
        "Competitor mention tracking and insights",
        "Buyer questions won and authority gaps",
        "Next-step action maps for growth"
      ],
      icon: BarChart3
    }
  ];

  // What Orvelo Builds for GEO
  const deliverables = [
    {
      title: "GEO Audit",
      desc: "A complete review of your AI search visibility, competitor footprint, website readiness, and technical content gaps.",
      icon: ShieldCheck
    },
    {
      title: "AI Search Visibility Map",
      desc: "A buyer-question map showing where your company appears, where competitors appear, and where new content is needed.",
      icon: Compass
    },
    {
      title: "Retrieval-Ready Website Pages",
      desc: "Product, industry, application, material, and FAQ pages structured specifically for both human buyers and AI engines.",
      icon: FileCode
    },
    {
      title: "Manufacturing Buyer Content",
      desc: "Blogs, guides, FAQs, comparison pages, and RFQ-focused content built around real manufacturing search intent.",
      icon: FileText
    },
    {
      title: "Technical SEO & Schema Support",
      desc: "Structured data, page hierarchy, internal linking, and content formatting that help AI models index and parse your capability.",
      icon: Database
    },
    {
      title: "Competitor GEO Tracking",
      desc: "Ongoing monitoring of how competitors appear across AI search engines for your most important buyer questions.",
      icon: LineChart
    },
    {
      title: "GEO Execution Roadmap",
      desc: "A practical plan showing exactly what to fix, what to build, what to publish, and what to track month-over-month.",
      icon: GitMerge
    }
  ];

  // Who This Service Is For (Sectors)
  const sectors = [
    "Industrial equipment manufacturers",
    "Metal fabrication companies",
    "Machinery manufacturers",
    "Component manufacturers",
    "Pump manufacturers",
    "Valve manufacturers",
    "HVAC component manufacturers",
    "Electrical component manufacturers",
    "Automation companies",
    "Rubber component manufacturers",
    "Custom part manufacturers",
    "RFQ-driven industrial businesses"
  ];

  // The Orvelo GEO Process Steps (1-8)
  const processSteps = [
    { step: "01", title: "AI Visibility Audit", desc: "We test how your company appears across AI tools for important buyer questions." },
    { step: "02", title: "Competitor Citation Review", desc: "We identify which competitors are being mentioned, recommended, or cited instead of you." },
    { step: "03", title: "Buyer Question Strategy", desc: "We map the actual questions your buyers ask before choosing a supplier." },
    { step: "04", title: "Content & Website Gap Analysis", desc: "We review your current website to identify missing product, industry, application, FAQ, and technical content." },
    { step: "05", title: "GEO Content Buildout", desc: "We create or restructure pages so AI engines can understand and retrieve your expertise." },
    { step: "06", title: "Schema & Technical Optimization", desc: "We improve structured data, internal linking, metadata, page hierarchy, and search readability." },
    { step: "07", title: "Authority & Entity Strengthening", desc: "We improve brand consistency, expertise signals, external mentions, and industry credibility." },
    { step: "08", title: "Tracking & Reporting", desc: "We monitor AI visibility, competitor movement, and buyer-question performance over time." }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Generative Engine Optimization (GEO) for Manufacturing | Orvelo" 
        description="Get your manufacturing company recommended by ChatGPT, Gemini, Claude, Perplexity, and AI search engines."
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
        
        <h1 className="text-4xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-slate-900 leading-[1.05] mb-8 font-sans">
          Generative Engine Optimization <br />
          <span className="font-serif italic font-normal text-emerald-700">for Manufacturing Companies</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mb-12">
          Get your manufacturing company recommended by ChatGPT, Gemini, Claude, Perplexity, and AI search engines.
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
              Your buyers are no longer searching only on Google.
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              They are asking AI tools questions to shortlist suppliers, compare capabilities, understand technical options, and prepare RFQs before contacting a company.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              If your company's capabilities, certifications, products, applications, and technical expertise are not structured clearly, AI engines may overlook your company even if you are a strong fit.
            </p>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_25px_rgba(15,23,42,0.01)]">
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-center border-b border-slate-100 pb-4">
              How Industrial Buyers Research Today
            </h3>
            <div className="space-y-4">
              {[
                "“Best metal fabrication companies in the US”",
                "“Top valve manufacturers for industrial applications”",
                "“Which HVAC component supplier should I consider?”",
                "“Reliable pump manufacturers for OEM projects”",
                "“RFQ-ready manufacturers for custom components”"
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

      {/* SECTION 3: REALITY CHECK (Immersive block using the blue accent) */}
      <section className="relative py-20 px-6 md:px-20 z-10 bg-[#0F172A] text-white my-16 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,232,251,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#31e8fb] font-extrabold mb-6">Reality Check</p>
          <h2 className="text-2xl md:text-4xl font-light leading-relaxed tracking-wide text-balance mb-8 font-sans">
            "Traditional SEO helps you rank on Google. <br />
            <span className="font-semibold text-white">GEO helps your company appear</span> when AI tools generate answers, vendor recommendations, comparison lists, and buyer guidance."
          </h2>
          <div className="h-px w-20 bg-white/10 mx-auto mb-8" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            For manufacturers, this is not just a marketing shift. It is a sales visibility shift. We optimize specifically for manufacturing buyer discovery and RFQ generation.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHAT IS GEO */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel className="justify-center">Definition</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            What is GEO? <span className="font-serif italic font-normal text-emerald-700">Generative Engine Optimization</span>
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-lg">
            Generative Engine Optimization is the process of improving how your company is understood, cited, and recommended by AI engines such as ChatGPT, Claude, Gemini, Perplexity, Microsoft Copilot, and Google AI Overviews.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">1</span>
              AEO (Answer Engine Optimization)
            </h3>
            <p className="text-slate-500 font-light leading-relaxed">
              Focuses on making your website the single, directly cited answer for specific factual questions. It is structured to answer direct queries with precision, claiming authority.
            </p>
          </div>
          <div className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-[#cb4b16] mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#cb4b16]/5 text-[#cb4b16] flex items-center justify-center text-sm font-bold">2</span>
              GEO (Generative Engine Optimization)
            </h3>
            <p className="text-slate-500 font-light leading-relaxed">
              Focuses on broader visibility, ensuring your company is consistently listed across comparative answers, recommendations, capability roundups, and active buying guidance.
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
              Why GEO matters for manufacturing companies
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              A procurement manager, OEM buyer, engineering head, or operations leader may ask an AI tool for supplier recommendations before visiting traditional search results.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              Most manufacturing websites are built around basic brochure-style pages. They mention products, industries, and capabilities, but they often miss the semantic structure AI engines need.
            </p>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h3 className="text-lg font-bold text-[#cb4b16] mb-6 uppercase tracking-wider">
              Common Website Issues We Fix
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Generic product descriptions",
                "Thin industry pages",
                "No application-specific content",
                "Weak technical depth",
                "Missing FAQs and direct Q&A",
                "No comparison or buyer guidance",
                "Poor schema structure",
                "Limited external authority signals",
                "No clear proof of experience",
                "No content around RFQ-stage questions"
              ].map((issue, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                  <p className="text-slate-600 text-sm font-light">{issue}</p>
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
            Orvelo's GEO Services <br />
            <span className="font-serif italic font-normal text-emerald-700">for Manufacturing Companies</span>
          </h2>
          <p className="text-slate-500 font-light">
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
                  
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
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
            <p className="text-slate-400 font-light">
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

      {/* SECTION 8: SECTORS SERVED */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <SectionLabel>Target Fit</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              Who This Service Is For
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Orvelo's GEO service is built specifically for US manufacturing companies that depend on technical sales, OEM buyer shortlists, and RFQ conversions.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              We work with teams where engineers, procurement teams, plant managers, or industrial decision-makers must find and trust you before they send an enquiry.
            </p>
            <div className="p-5 border-l-2 border-emerald-600 bg-emerald-50/50 rounded-r-2xl">
              <p className="text-xs text-slate-700 font-light leading-relaxed">
                "Industrial buyers care about capability, fit, materials, tolerances, applications, compliance, turnaround, and proof. We build GEO systems around these real buying factors."
              </p>
            </div>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4 text-center">
              Sectors We Serve
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {sectors.map((sector, idx) => (
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
          <p className="text-slate-500 font-light">
            An organized, step-by-step methodology to index, rank, and cite your manufacturing strengths.
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
          Find out if AI engines recommend your manufacturing company.
        </h2>
        
        <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Your buyers are already using AI to research suppliers, compare options, and prepare RFQs. Orvelo helps manufacturing companies improve visibility and become easier to find, trust, and shortlist.
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
            Check If AI Recommends Your Company
          </Link>
        </div>
      </section>
    </div>
  );
};
