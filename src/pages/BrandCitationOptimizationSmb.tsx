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
  ChevronDown,
  Globe,
  Award,
  TrendingUp,
  MessageSquare,
  ShieldAlert
} from 'lucide-react';

export const BrandCitationOptimizationSmb = () => {
  const { openModal } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Orvelo's BCO Services (9 Services)
  const bcoServices = [
    {
      num: "01",
      title: "AI Brand Visibility Audit",
      desc: "We evaluate how your brand currently appears across platforms such as ChatGPT, Gemini and Perplexity.",
      bullets: [
        "Whether your brand is being mentioned",
        "Which questions trigger a brand mention",
        "How accurately your company is described",
        "Which competitors appear instead",
        "Which sources influence the AI-generated answers",
        "Where the strongest citation opportunities exist"
      ],
      icon: Search
    },
    {
      num: "02",
      title: "AI Citation Gap Analysis",
      desc: "We compare your brand’s AI presence with selected competitors to find missed recommendable topics.",
      bullets: [
        "Which competitors are mentioned more frequently",
        "Which topics they are associated with",
        "Which websites and sources support their visibility",
        "Where your business is missing from relevant answers",
        "Which content and authority gaps need to be addressed"
      ],
      icon: TrendingUp
    },
    {
      num: "03",
      title: "Brand Entity Optimization",
      desc: "AI engines need to understand your company as a clear and consistent business entity.",
      bullets: [
        "Structuring company name, core services, and locations",
        "Defining your target industries and customer segments",
        "Strengthening expertise signals and leadership profiles",
        "Defining core products, solutions, and associations"
      ],
      icon: Cpu
    },
    {
      num: "04",
      title: "Website Citation Readiness",
      desc: "Your website must make it easy for both people and AI engines to understand your company.",
      bullets: [
        "Communicating what your company does and who it's for",
        "Highlighting core problems solved and unique approaches",
        "Proving experience and authoritative capabilities",
        "Optimising page structure, internal linking, and content clarity"
      ],
      icon: FileCode
    },
    {
      num: "05",
      title: "AI-Citable Content Development",
      desc: "We create and optimise content that directly answers the questions your customers ask AI platforms.",
      bullets: [
        "Developing service pages, industry pages, and comparison pages",
        "Building clear buyer guides and frequently asked questions",
        "Writing detailed case studies and research-led articles",
        "Formatting problem-and-solution expert insights"
      ],
      icon: FileText
    },
    {
      num: "06",
      title: "Third-Party Citation Development",
      desc: "AI engines rely heavily on independent mentions to build confidence in your business's credibility.",
      bullets: [
        "Identifying industry publications and business directories",
        "Optimizing presence on review platforms and partner websites",
        "Targeting professional associations and comparison sites",
        "Leveraging expert interviews, podcasts, and media platforms"
      ],
      icon: Globe
    },
    {
      num: "07",
      title: "Brand Message Consistency",
      desc: "Conflicting information can make it difficult for AI systems to understand and trust your business.",
      bullets: [
        "Aligning brand messaging across website and social media",
        "Optimising company registries and business listings",
        "Synchronising partner pages and founder bios",
        "Ensuring consistent review platform and directory representation"
      ],
      icon: Layers
    },
    {
      num: "08",
      title: "AI Reputation and Sentiment Review",
      desc: "Being mentioned by AI is valuable only when the information is accurate, relevant, and positive.",
      bullets: [
        "Reviewing how AI platforms describe your brand strengths",
        "Checking if outdated services or wrong info are appearing",
        "Identifying negative or confusing signals affecting answers",
        "Recommending actions to improve AI reputation quality"
      ],
      icon: ShieldAlert
    },
    {
      num: "09",
      title: "Ongoing AI Citation Monitoring",
      desc: "AI-generated answers can change as models, sources, and online information evolve.",
      bullets: [
        "Tracking new brand mentions and lost citations",
        "Monitoring changes in competitor visibility",
        "Identifying won vs. missed customer questions",
        "Discovering new citation sources and emerging queries"
      ],
      icon: Activity
    }
  ];

  // BCO Process Steps (1-6)
  const processSteps = [
    { 
      step: "01", 
      title: "Discover", 
      desc: "We begin by understanding your business, services, competitors and existing digital presence. We identify questions potential customers ask AI platforms when researching your category." 
    },
    { 
      step: "02", 
      title: "Audit", 
      desc: "We test relevant prompts across major AI engines and review how your brand currently appears, analysing mentions, competitors, cited sources, and gaps." 
    },
    { 
      step: "03", 
      title: "Prioritise", 
      desc: "Not every citation opportunity carries the same value. We prioritise the topics, platforms, sources and actions that are most relevant to your commercial goals." 
    },
    { 
      step: "04", 
      title: "Optimise", 
      desc: "We improve your website, brand information, content and digital authority signals, focusing on both on-site optimization and external brand-building activities." 
    },
    { 
      step: "05", 
      title: "Build Authority", 
      desc: "We help strengthen the third-party evidence that supports your brand’s expertise and credibility. The focus is on building genuine authority, not creating artificial mentions." 
    },
    { 
      step: "06", 
      title: "Monitor and Improve", 
      desc: "We track how your brand visibility changes across AI engines and refine the strategy based on new opportunities, competitor activity and platform changes." 
    }
  ];

  // What BCO can improve
  const bcoImprovements = [
    "Brand mentions in AI-generated answers",
    "Inclusion in AI-generated recommendations",
    "Accuracy of brand descriptions",
    "Visibility for priority services",
    "Visibility within target industries",
    "Recognition as an expert in relevant topics",
    "Third-party authority signals",
    "Competitive presence in AI search",
    "Website citation readiness",
    "Share of AI-generated recommendations"
  ];

  // Sectors for SMBs
  const sectors = [
    "Professional service companies",
    "Manufacturing businesses",
    "Technology and SaaS companies",
    "Healthcare and wellness businesses",
    "Education and training providers",
    "Retail and ecommerce brands",
    "Restaurants and hospitality businesses",
    "Local and regional service providers",
    "Specialist B2B companies",
    "Growing founder-led businesses"
  ];

  // FAQ Items (10 Items)
  const faqs = [
    {
      q: "What does BCO stand for?",
      a: "BCO stands for Brand Citation Optimization. It is Orvelo’s structured approach to improving how frequently, accurately and credibly a brand is mentioned across AI-generated answers."
    },
    {
      q: "Which AI platforms does BCO focus on?",
      a: "BCO can include platforms such as ChatGPT, Gemini, Perplexity, Microsoft Copilot and other AI-powered search and answer engines. The priority platforms are selected based on your audience and business goals."
    },
    {
      q: "Can BCO guarantee that ChatGPT will recommend my business?",
      a: "No agency can guarantee a specific recommendation from an independent AI platform. BCO improves the signals that influence brand visibility, including content relevance, entity clarity, authority, consistency and third-party references."
    },
    {
      q: "How is BCO different from traditional SEO?",
      a: "Traditional SEO primarily focuses on improving rankings and traffic from search-engine result pages. BCO focuses on improving the likelihood that your brand is mentioned, referenced or recommended within a direct AI-generated answer. The two approaches can support each other, but they measure different outcomes."
    },
    {
      q: "Is BCO only for large brands?",
      a: "No. Smaller businesses can build strong AI visibility by establishing clear expertise within a focused market, industry, service or location. BCO helps identify the areas where your business has the strongest opportunity to become relevant."
    },
    {
      q: "How long does Brand Citation Optimization take?",
      a: "The timeline depends on your current website, brand authority, competitive market and the amount of content and third-party visibility already available. Some improvements may appear after foundational updates, while stronger authority and consistent citation growth usually require ongoing work."
    },
    {
      q: "How do you measure BCO performance?",
      a: "We can measure BCO using a defined group of commercially relevant prompts and indicators such as: Brand mention frequency, Recommendation frequency, Citation sources, Accuracy of brand descriptions, Visibility by service or topic, Competitor share of mentions, Changes across AI platforms, Sentiment and context of mentions."
    },
    {
      q: "Can BCO correct inaccurate information about my company?",
      a: "BCO can help strengthen accurate and consistent information across your website and other trusted sources. However, AI platforms independently generate their answers, so changes cannot always be made directly or immediately."
    },
    {
      q: "Do I need GEO and BCO?",
      a: "Businesses seeking broader visibility across AI search may benefit from GEO. Businesses specifically focused on increasing brand mentions, recommendations and authority should include BCO within that strategy. For many businesses, the strongest approach combines both."
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Brand Citation Optimization Services | Orvelo" 
        description="Improve brand mentions, recommendations and citations across ChatGPT, Gemini and Perplexity with Orvelo’s Brand Citation Optimization services."
        ogTitle="Get Your Brand Mentioned and Recommended by AI"
        ogDescription="Build stronger brand visibility across ChatGPT, Gemini, Perplexity and other AI engines with Orvelo’s Brand Citation Optimization services."
        url="https://www.orvelo.ai/brand-citation-optimization"
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
          <span>Influence AI Recommendations</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-slate-900 leading-[1.05] mb-8 font-sans uppercase">
          Brand Citation Optimization <br />
          <span className="font-serif italic font-normal text-emerald-700 lowercase">Get Your Brand Mentioned and Recommended by AI</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-800 font-extrabold max-w-3xl mx-auto leading-relaxed mb-4">
          Become the brand AI platforms recognise, mention, and recommend
        </p>

        <p className="text-slate-500 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-12">
          Your customers are no longer relying only on Google to discover businesses. They are asking ChatGPT, Gemini, Perplexity, and Copilot. If your business is not mentioned, you never enter the shortlist.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={openModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 hover:shadow-xl active:scale-95 text-center"
          >
            Build Your AI Visibility
          </button>
        </div>
      </motion.div>

      {/* SECTION 2: THE SHIFT */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <SectionLabel>Search Is Changing</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              Your Customers Are Asking AI for Recommendations
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              Traditional search gives users a list of links. AI platforms provide a direct, summarized answer.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              Instead of visiting ten different websites, customers can now ask an AI engine to compare providers, recommend a solution, or shortlist the most capable companies.
            </p>
            <p className="text-slate-500 font-light leading-relaxed text-xs">
              The brands included in those answers gain immediate visibility and trust. The brands that are not mentioned may never enter the customer’s consideration process. BCO helps your business become part of these AI-generated conversations.
            </p>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_25px_rgba(15,23,42,0.01)]">
            <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-center border-b border-slate-100 pb-4">
              What Customers Ask AI
            </h3>
            <div className="space-y-3">
              {[
                "“Who are the best providers in my industry?”",
                "“Which company should I work with?”",
                "“What are the most trusted solutions available?”",
                "“Which brands specialise in solving this problem?”"
              ].map((query, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-100 font-mono text-xs text-slate-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#cb4b16] shrink-0" />
                  <p className="italic">"{query}"</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-6">
              BCO helps your business become the brand recommended in these answers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: IMMERSIVE DEFINITION */}
      <section className="relative py-20 px-6 md:px-20 z-10 bg-[#0F172A] text-white my-16 rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(49,232,251,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#31e8fb] font-extrabold mb-6">Definition</p>
          <h2 className="text-2xl md:text-4xl font-light leading-relaxed tracking-wide text-balance mb-8 font-sans">
            "BCO focuses on helping AI engines understand <br />
            <span className="font-semibold text-white">Who you are, What you do, and Why you are credible.</span>"
          </h2>
          <div className="h-px w-20 bg-white/10 mx-auto mb-8" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Brand Citation Optimization, or BCO, is the process of improving how frequently and accurately your brand appears in AI-generated answers across major platforms.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHAT IS BCO / AI CITATION DETAILS */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel className="justify-center">Core Pillars</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            What Is Brand Citation Optimization?
          </h2>
          <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
            BCO brings together brand positioning, content, website optimisation, digital authority and third-party mentions to make your business easier for AI engines to understand and cite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">1</span>
              Targeted AI Understanding
            </h3>
            <p className="text-slate-500 font-light text-xs leading-relaxed mb-4">
              It focuses on helping AI engines clearly identify and synthesize key parameters of your business entity:
            </p>
            <ul className="space-y-2">
              {[
                "Who your company is and what it offers",
                "Which target industries and locations you serve",
                "What core strengths your brand is known for",
                "Why your company should be considered credible",
                "Which third-party sources back up your authority"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm">
            <h3 className="text-xl font-bold text-[#cb4b16] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#cb4b16]/5 text-[#cb4b16] flex items-center justify-center text-sm font-bold">2</span>
              What Is an AI Brand Citation?
            </h3>
            <p className="text-slate-500 font-light text-xs leading-relaxed mb-4">
              An AI brand citation happens when an AI platform mentions, references, compares or recommends your business:
            </p>
            <ul className="space-y-2">
              {[
                "Mentioning your company as a qualified service provider",
                "Recommending your brand for a particular target need",
                "Including your business in a comparative shortlist",
                "Using details from your website in an AI reply",
                "Citing external articles, directories, or reviews naming your brand",
                "Comparing your firm with other market competitors"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#cb4b16] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: VISIBILITY GAP */}
      <section className="py-16 border-t border-slate-200/60 bg-slate-50/50 rounded-[3rem] px-8 my-12">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionLabel>Visibility Test</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              Is Your Brand Visible in AI Search?
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              Your website may rank on Google, but that does not automatically mean your company will appear in ChatGPT, Gemini, or Perplexity.
            </p>
            <p className="text-slate-500 font-light leading-relaxed text-xs">
              AI engines evaluate information across multiple independent sources. They look for clear, consistent, and highly credible signals that help them understand what a brand does and whether it should be recommended.
            </p>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h3 className="text-lg font-bold text-[#cb4b16] mb-6 uppercase tracking-wider">
              Where Your Brand May Be Overlooked
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Your brand positioning is unclear",
                "Your website does not explain your expertise clearly",
                "Your company lacks credible third-party mentions",
                "Your services are described differently across sites",
                "Your brand is absent from trusted industry lists",
                "Your content doesn't answer client questions asked to AI",
                "Competitors have stronger digital authority",
                "AI platforms have incomplete or outdated information"
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

      {/* SECTION 6: THE 9 BCO SERVICES */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">Our Services</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Brand Citation Optimization Services
          </h2>
          <p className="text-slate-500 font-light text-xs md:text-sm">
            We offer comprehensive, practical BCO capabilities that bridge the gap between your brand's digital presence and AI search recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bcoServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="bg-white border border-slate-200/50 rounded-[2.5rem] p-8 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:border-[#cb4b16]/30 hover:shadow-md transition-all duration-500 flex flex-col justify-between group"
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
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-slate-950 transition-colors">
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

      {/* SECTION 7: WHAT BCO CAN HELP IMPROVE */}
      <section className="py-20 border-t border-slate-200/60 bg-slate-900 text-white rounded-[3rem] px-8 md:px-16 my-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(203,75,22,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#cb4b16] bg-[#cb4b16]/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Outcomes
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              What BCO Can Help Improve
            </h2>
            <p className="text-slate-400 font-light text-xs md:text-sm">
              We help you build the structure, authority, and digital signals needed to grow your share of AI recommendations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {bcoImprovements.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                <span className="text-slate-100 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xs text-slate-400 mt-10 max-w-xl mx-auto leading-relaxed">
            *BCO does not guarantee that an AI platform will cite a brand for every question. It creates the content, clarity, credibility, and digital authority needed to improve the likelihood of relevant brand mentions.
          </p>
        </div>
      </section>

      {/* SECTION 8: THE BCO PROCESS */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">Our Blueprint</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Our BCO Process
          </h2>
          <p className="text-slate-500 font-light text-xs md:text-sm">
            A practical, sequential methodology to understand, optimise, and build AI recommendations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* SECTION 9: BCO FOR SMBS */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <SectionLabel>BCO for SMBs</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              You Do Not Need to Be the Biggest Brand to Be Visible
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              AI platforms do not recommend companies based only on business size.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              A smaller company with clear positioning, strong expertise, useful content and credible third-party validation may be more relevant to a specific question than a larger competitor.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6 text-xs">
              BCO helps small and medium businesses compete by building authority around the areas where they have genuine experience and value.
            </p>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4 text-center">
              Sectors We Support
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

      {/* SECTION 10: BCO VS GEO */}
      <section className="py-16 border-t border-slate-200/60 bg-slate-50/50 rounded-[3rem] px-8 my-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="justify-center">Differences</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">How Is Brand Citation Optimization Different from GEO?</h2>
            <p className="text-slate-500 font-light text-xs max-w-2xl mx-auto">
              Generative Engine Optimization is the broader practice of improving visibility across AI search and discovery platforms. Brand Citation Optimization is a more focused discipline within GEO.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200/60 rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                GEO Focuses On:
              </h3>
              <ul className="space-y-3">
                {[
                  "Making content discoverable by AI engines",
                  "Improving visibility for relevant questions",
                  "Structuring information for generative search",
                  "Increasing the likelihood of content being used in answers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white border border-[#cb4b16]/20 rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#cb4b16] mb-4 border-b border-[#cb4b16]/10 pb-2">
                BCO Focuses On:
              </h3>
              <ul className="space-y-3">
                {[
                  "Increasing brand mentions and direct brand citations",
                  "Improving brand recommendations & shortlist inclusion",
                  "Strengthening independent third-party citations",
                  "Building brand authority & entity clarity across platforms",
                  "Improving how AI describes the company",
                  "Tracking the brand’s share of AI-generated answers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cb4b16] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: WHY ORVELO */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">Why Orvelo?</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Strategy Before Optimization</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Strategy Before Optimization",
              desc: "We begin by understanding the business outcome behind your AI visibility goals. The objective is not to generate random mentions. It is to help your brand appear for the topics, services and customer questions that matter."
            },
            {
              title: "Built Around Your Business",
              desc: "Every BCO strategy is shaped around your industry, customers, competitors and commercial priorities. We do not apply the same citation plan to every company."
            },
            {
              title: "Content and Authority Together",
              desc: "Publishing website content alone may not be enough. We combine website optimisation, brand positioning, content development and third-party authority building into one connected approach."
            },
            {
              title: "Practical Execution",
              desc: "We do not stop with an audit or strategy document. Our team can help execute the website changes, content development, citation-building activities and ongoing monitoring required to move the strategy forward."
            },
            {
              title: "Clear Measurement",
              desc: "AI visibility is still an evolving area, but it can be tracked systematically. We establish a defined set of prompts, platforms, topics and competitors to measure changes in brand mentions and recommendation visibility."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-light text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 12: CALL TO ACTION */}
      <section className="py-20 border-t border-slate-200/60 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-[#cb4b16]/5 text-[#cb4b16] flex items-center justify-center mx-auto mb-8 border border-[#cb4b16]/10">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          Start With a Brand Citation Audit
        </h2>
        
        <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Before investing in a complete BCO programme, begin by understanding how AI engines currently see your business. You receive a practical roadmap showing where your brand stands and what to improve next.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://calendly.com/orvelo-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 text-center block"
          >
            Book a Brand Citation Audit
          </a>
          
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 transition-all duration-300 text-center"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* FAQ SECTION (SECTION 13) */}
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
