import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { useModal } from '../context/ModalContext';
import { 
  Compass, 
  Target, 
  Lightbulb, 
  Map, 
  Settings2, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  MessageSquare,
  FileText,
  AlertTriangle,
  UserCheck,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Quote,
  TrendingUp,
  Clock,
  Briefcase,
  Layers,
  Search
} from 'lucide-react';

export const DiscoverySprint = () => {
  const { openModal } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const questions = [
    "Should you automate sales follow-ups?",
    "Should you build an AI chatbot?",
    "Should you improve reporting?",
    "Should you use AI for proposals, RFQs, content, support, or operations?",
    "Should you build a custom micro application?",
    "Should you train the team first?",
    "Should you fix the workflow before adding AI?"
  ];

  const whatWeDo = [
    {
      step: "01",
      title: "Business Workflow Review",
      desc: "We review how your business currently works across key areas such as sales, marketing, operations, customer support, reporting, documentation, and management.",
      items: [
        "How enquiries come in & how leads are handled",
        "How proposals are created & customer questions answered",
        "How reports are prepared & documents are managed",
        "Where bottlenecks, delays, and repetitions occur"
      ]
    },
    {
      step: "02",
      title: "Problem Identification",
      desc: "We identify the business problems that are slowing your team down. We do not begin with tools — we begin with the specific business challenge.",
      items: [
        "Identifying slow responses or missed follow-ups",
        "Pinpointing manual proposal/RFQ summary pain points",
        "Diagnosing scattered documentation or inconsistent messaging",
        "Evaluating lag in management updates or report latency"
      ]
    },
    {
      step: "03",
      title: "AI Opportunity Mapping",
      desc: "Once the problems are clear, we map where AI can help, scoring each opportunity based on value, effort, speed, and business impact.",
      items: [
        "Assessing AI proposal generation & RFQ summary feasibility",
        "Evaluating customer support and sales automation scope",
        "Mapping management report automation & content templates",
        "Developing internal knowledge assistants and SOP support"
      ]
    },
    {
      step: "04",
      title: "Solution Design",
      desc: "We convert the strongest opportunities into practical solution ideas. You get a clear direction on what should be built, why it matters, and how to execute.",
      items: [
        "AI micro applications tailored to your parameters",
        "Custom secure workflow & prompt integrations",
        "Document processing and internal dashboard structures",
        "SOP, training, and team onboarding protocols"
      ]
    },
    {
      step: "05",
      title: "Execution Roadmap",
      desc: "We prioritize the solutions into a practical, modular roadmap so you can move forward with confidence instead of experimenting randomly.",
      items: [
        "Identifying direct quick wins for immediate speed",
        "Defining phase one of your AI micro application",
        "Outlining tool selections, infrastructure setup, and training",
        "Specifying metrics for progress and long-term scalability"
      ]
    }
  ];

  const targetAudiences = [
    { title: "Small & Medium Businesses", desc: "For SMBs that need practical AI systems to reduce manual work, respond faster, improve reporting, and streamline daily operations." },
    { title: "Manufacturing Companies", desc: "For industrial manufacturers, component manufacturers, equipment companies, fabrication businesses, and RFQ-driven suppliers." },
    { title: "Education & Training", desc: "For preschools, enrichment academies, coaching centers, training companies, edtech brands, and skill development businesses." },
    { title: "Healthcare & Wellness", desc: "For clinics, wellness brands, healthcare service providers, therapy centers, and appointment-led businesses." },
    { title: "Retail & Ecommerce", desc: "For retail brands, ecommerce stores, Amazon sellers, product-led businesses, and distribution companies." },
    { title: "Restaurants & Hospitality", desc: "For restaurants, cloud kitchens, catering, and hospitality businesses managing orders, enquiries, menus, and customer communication." },
    { title: "Technology & SaaS", desc: "For software companies, SaaS products, digital platforms, IT service providers, and tech-enabled businesses." },
    { title: "RFQ-Driven & Service Businesses", desc: "For service companies with repeated manual workflows, long sales pipelines, and structured customer requirements." }
  ];

  const businessProblems = [
    {
      title: "Sales Response Delays",
      problem: "Your team receives enquiries, RFQs, or leads but takes too long to respond because information has to be collected manually.",
      solutions: ["AI Proposal Generator", "RFQ Summary Assistant", "Quote Follow-Up Assistant", "Lead Qualification Assistant"],
      outcome: "Faster responses, better consistency, and fewer missed opportunities."
    },
    {
      title: "Repeated Customer Questions",
      problem: "Customers keep asking the same questions about services, products, pricing process, availability, capabilities, or next steps.",
      solutions: ["Sales Chatbot", "Customer Support Assistant", "Website FAQ System", "Internal Sales Knowledge Assistant"],
      outcome: "Customers get faster answers and your team spends less time repeating the same responses."
    },
    {
      title: "Manual Proposal Creation",
      problem: "Sales proposals, quotations, and pitch documents take too much time to prepare.",
      solutions: ["AI Proposal Generator", "Proposal Template System", "Service Scope Generator", "Follow-Up Email Assistant"],
      outcome: "Your team can create better proposal drafts faster while keeping messaging consistent."
    },
    {
      title: "Poor RFQ or Enquiry Clarity",
      problem: "Customer requests come through emails, PDFs, forms, WhatsApp, and attachments, making it difficult to quickly understand requirements.",
      solutions: ["RFQ Summary Assistant", "Enquiry Classification Tool", "Missing Information Checklist", "Internal Review Assistant"],
      outcome: "Your team can understand requirements faster and ask the right questions before quoting."
    },
    {
      title: "Scattered Business Knowledge",
      problem: "Important information is spread across old documents, team memory, spreadsheets, emails, brochures, and presentations.",
      solutions: ["Internal Knowledge Assistant", "Sales Chatbot", "SOP Assistant", "Document Library Structuring", "FAQ Generator"],
      outcome: "Your team can access trusted business information faster and reduce dependency on a few key people."
    },
    {
      title: "Weak Reporting & Management Visibility",
      problem: "Business reports are manual, delayed, inconsistent, or difficult to review.",
      solutions: ["Management Report Assistant", "Weekly Report Generator", "Sales Pipeline Summary", "Operations Update Assistant"],
      outcome: "Leadership gets clearer updates and faster visibility across the business."
    },
    {
      title: "Content & Documentation Bottlenecks",
      problem: "Your team struggles to create datasheets, product pages, blogs, FAQs, case studies, or service documents consistently.",
      solutions: ["Datasheet Generator", "Product Page Generator", "FAQ Generator", "Case Study Generator", "GEO Content Workflow"],
      outcome: "Your business can create clearer documentation and improve sales, marketing, and AI search visibility."
    },
    {
      title: "Team Productivity Gaps",
      problem: "Your team spends too much time on repetitive admin, follow-ups, summaries, updates, and documentation.",
      solutions: ["Task Summary Assistant", "Email Drafting Assistant", "Meeting Notes Assistant", "CRM Update Assistant"],
      outcome: "Your team gets more time for high-value work."
    },
    {
      title: "No Clear AI Adoption Direction",
      problem: "You want to use AI, but you are unsure which tool to use, what to build, or where to start.",
      solutions: ["AI Opportunity Map", "Micro Application Roadmap", "Tool Selection Plan", "Team Training Plan"],
      outcome: "You get a clear, practical AI execution plan instead of random experimentation."
    }
  ];

  const sprintSteps = [
    {
      step: "Step 1",
      title: "Kickoff & Business Understanding",
      desc: "We start by understanding your business, your current goals, your team structure, and the areas where work feels slow, manual, or inconsistent. We focus on practical business outcomes, not AI buzzwords."
    },
    {
      step: "Step 2",
      title: "Workflow Mapping",
      desc: "We map the selected workflows in detail (e.g., enquiry handling, proposal creation, RFQ review, support, reporting, or internal operations) to identify delays and repeated tasks."
    },
    {
      step: "Step 3",
      title: "Problem Diagnosis",
      desc: "We identify the root causes behind the friction. For example, the problem may not be that your team needs a chatbot; it may be that your product information is scattered."
    },
    {
      step: "Step 4",
      title: "AI Use Case Mapping",
      desc: "We identify where AI can support the workflow. Each use case is evaluated based on business value, implementation effort, workflow fit, and risk level."
    },
    {
      step: "Step 5",
      title: "Solution Prioritization",
      desc: "We shortlist the highest-value opportunities and recommend what should be done first, from quick-win automations to custom AI micro applications."
    },
    {
      step: "Step 6",
      title: "Roadmap & Recommendations",
      desc: "We provide a clear execution roadmap showing what to build, what tools to use, what data is needed, what the first version should include, and how to measure success."
    }
  ];

  const deliverables = [
    "Detailed Workflow findings & bottlenecks",
    "Comprehensive Business problem summary",
    "High-impact AI opportunity map",
    "Recommended custom micro applications",
    "Prioritized high-value use cases",
    "Tool, platform & model recommendations",
    "Practical Implementation roadmap",
    "Immediate Quick-win opportunities",
    "Internal Data and documentation gaps",
    "Team readiness & training parameters",
    "Clear Next-step execution plan"
  ];

  const testimonials = [
    {
      quote: "The sprint helped us understand where AI could actually help our business. We had many ideas, but no clear direction. Orvelo helped us identify the workflows that mattered most and showed us which AI tools could create real value first.",
      author: "Founder",
      company: "Small Business Services Company"
    },
    {
      quote: "They did not start with tools. They started with our process. That made a big difference. The sprint helped us see why our enquiry handling and reporting were slowing down. The roadmap was practical and easy to act on.",
      author: "Operations Head",
      company: "Manufacturing Company"
    },
    {
      quote: "We came in thinking we needed a chatbot. We left with a better plan. Orvelo identified that our content, FAQs, and internal knowledge were not structured properly. The sprint helped us fix the foundation before building the chatbot.",
      author: "Marketing Head",
      company: "Healthcare & Wellness Brand"
    },
    {
      quote: "The best part was the clarity. We finally had a list of what to build first, what to avoid, and how AI could support sales, proposals, and follow-ups without complicating our process.",
      author: "CEO",
      company: "B2B Service Business"
    }
  ];

  const faqs = [
    {
      q: "What is The Discovery Sprint™?",
      a: "The Discovery Sprint™ is a structured AI discovery process where Orvelo reviews your business workflows, identifies problems, maps AI opportunities, and recommends practical, high-value solutions."
    },
    {
      q: "Is this only for companies that already use AI?",
      a: "No. The sprint is incredibly useful whether your organization is completely new to AI or is already experimenting with early AI tools and workflows."
    },
    {
      q: "What business areas can the sprint cover?",
      a: "The sprint can cover sales workflows, customer support, operations, reporting, structured documentation, marketing pipelines, management layers, RFQ handling, and internal team coordination."
    },
    {
      q: "Will you recommend specific AI tools?",
      a: "Yes. If needed, we recommend suitable tools, APIs, software platforms, micro applications, custom automations, or infrastructure based entirely on your specific business requirements."
    },
    {
      q: "Do we get a roadmap after the sprint?",
      a: "Yes. The main deliverable of the sprint is a practical execution roadmap that shows where to start, what to prioritize, and what to build first."
    },
    {
      q: "Can Orvelo implement the solutions after the sprint?",
      a: "Yes. Following the sprint, Orvelo can build and configure the recommended micro applications, workflows, chatbots, reporting assistants, custom content engines, or API infrastructure."
    },
    {
      q: "Is the sprint suitable for SMBs?",
      a: "Yes. The Discovery Sprint™ is explicitly designed for small and medium businesses that want to implement AI practically without large enterprise overhead, complexity, or costs."
    },
    {
      q: "Is the sprint suitable for manufacturing companies?",
      a: "Yes. It works exceptionally well for manufacturing companies facing challenges with manual RFQ handling, proposal creation, technical datasheets, sales follow-ups, and operations reporting."
    },
    {
      q: "What if we already know what we want to build?",
      a: "The sprint serves to validate your ideas, refine the scope, identify technical risks, map security guidelines, and create a far clearer, faster implementation plan."
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="The Discovery Sprint™ | AI Workflow Discovery | Orvelo" 
        description="Book Orvelo’s Discovery Sprint™ to identify practical AI opportunities, workflow gaps, business problems, and the right AI solutions for your SMB or manufacturing company."
      />

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#cb4b16]/10 bg-[#cb4b16]/5 text-[#cb4b16] text-[10px] uppercase font-bold tracking-widest mx-auto">
          <Compass className="w-3.5 h-3.5" />
          <span>The Discovery Sprint™</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8 font-sans">
          The Discovery <br />
          <span className="font-serif italic font-normal text-[#cb4b16]">Sprint™</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-800 font-extrabold max-w-2xl mx-auto leading-relaxed mb-4">
          Find the right AI opportunities before you invest in the wrong tools
        </p>

        <p className="text-base md:text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Most businesses know they should be using AI, but they are not always clear about where to start. The Discovery Sprint™ helps you map practical value inside your workflows.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://calendly.com/orvelo-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 text-center"
          >
            Book A Sprint
          </a>
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 transition-all duration-300 text-center"
          >
            Talk To Orvelo
          </Link>
        </div>
      </motion.div>

      {/* AMBIGUITY CHALLENGE SECTION */}
      <section className="py-16 border-t border-slate-200/60 bg-slate-50/50 rounded-[3rem] p-8 md:p-12 mb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-4">
            <AlertTriangle className="w-4 h-4 text-[#cb4b16]" />
            <span>Are you asking these questions?</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-tight">
            AI implementation is complex. We simplify the start.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {questions.map((q, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-700 font-medium">{q}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 font-light mt-8 leading-relaxed text-center">
            The Discovery Sprint™ is a focused strategy and workflow audit where Orvelo identifies where AI can create practical value inside your business, what problems should be solved first, and what solutions can be built.
          </p>
        </div>
      </section>

      {/* WHAT IS THE SPRINT */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionLabel>Core Philosophy</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-2">
              What is <br />
              The Discovery <br />
              <span className="font-serif italic font-normal text-[#cb4b16]">Sprint™?</span>
            </h2>
            <p className="text-slate-500 text-sm font-light leading-relaxed mt-6">
              It is not a generic consultation. It is not a long strategy project. It is not a tool recommendation session.
            </p>
            <p className="text-slate-500 text-sm font-light leading-relaxed mt-4">
              It is a structured, action-oriented sprint where we study your business workflows, identify friction points, map AI opportunities, and define practical solutions that can be executed quickly.
            </p>
            <div className="mt-8">
              <a 
                href="https://calendly.com/orvelo-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-full transition-all text-[11px] uppercase tracking-wider"
              >
                <span>Move to Action</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-slate-200/50 rounded-[2.5rem] shadow-[0_4px_20px_rgba(15,23,42,0.01)]">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#cb4b16]" />
              <span>By the end of the sprint, you will know:</span>
            </h3>
            <ul className="space-y-4">
              {[
                "Where AI can practically help your business",
                "Which specific workflows are slowing your team down",
                "Which problems should be solved first for max ROI",
                "Which tools, automations, or micro applications are needed",
                "What can be built quickly vs. what needs deeper implementation",
                "What your sequential, step-by-step AI execution roadmap looks like"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 font-light">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#cb4b16] animate-pulse"></div>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Goal: Move from curiosity to absolute tactical execution.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR? */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Target Profile</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Who is this for?</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            Built for business owners, founders, CEOs, COOs, sales leaders, operations heads, marketing heads, and department leaders seeking clear implementable system parameters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudiences.map((audience, idx) => (
            <div key={idx} className="bg-slate-50/50 hover:bg-white border border-slate-200/40 hover:border-slate-300 p-6 rounded-3xl transition-all duration-300">
              <h3 className="text-base font-bold text-slate-900 mb-2">{audience.title}</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">{audience.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO DURING THE SPRINT (1-5 Grid) */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">The Framework</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">What We Do During The Sprint</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            Five structured, repeatable milestones to extract, format, and prepare your business workflows for secure AI integrations.
          </p>
        </div>

        <div className="space-y-6">
          {whatWeDo.map((item, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-8 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_12px_rgba(15,23,42,0.01)] hover:border-slate-300 transition-all duration-300">
              <div className="lg:col-span-4 flex items-start gap-4">
                <span className="text-3xl font-black text-slate-300 font-mono">{item.step}</span>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-3">Key Focus Checkpoints:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {item.items.map((bullet, bidx) => (
                    <div key={bidx} className="flex items-start gap-2.5 text-xs text-slate-600 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#cb4b16] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPRINT PROCESS (STEPS 1-6) */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center font-extrabold">Step-by-Step Delivery</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Sprint Process</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            How we partner with your operators and leadership over a highly compressed engagement window.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sprintSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-extrabold px-3 py-1 bg-[#cb4b16]/5 text-[#cb4b16] rounded-full uppercase tracking-wider">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-4 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET (DELIVERABLES) */}
      <section className="py-20 border-t border-slate-200/60 bg-slate-900 text-white rounded-[3.5rem] p-8 md:p-16 mb-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-12 -translate-y-12">
          <Sparkles className="w-96 h-96 text-white" />
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#cb4b16] text-[10px] uppercase font-bold tracking-widest">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Structured Deliverables</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            What You Get From <span className="font-serif italic font-normal text-slate-300">The Sprint</span>
          </h2>
          <p className="text-slate-400 font-light text-sm max-w-2xl mb-12">
            The sprint gives you absolute analytical clarity and blueprints before implementation begins. You receive a fully complete package comprising:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS PROBLEMS WE IDENTIFY AND SOLVE */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Diagnostics Map</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Business Problems We Solve</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            Directly identifying core bottlenecks and layering targeted possible AI system structures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessProblems.map((bp, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{bp.title}</h3>
                <div className="bg-red-50/50 border border-red-100 p-3 rounded-2xl mb-4 text-left">
                  <h4 className="text-[9px] uppercase font-extrabold text-red-700 tracking-wider mb-1">Problem:</h4>
                  <p className="text-slate-600 text-xs font-light leading-relaxed">{bp.problem}</p>
                </div>
                
                <h4 className="text-[9px] uppercase font-extrabold text-[#cb4b16] tracking-wider mb-2">Possible Solutions:</h4>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {bp.solutions.map((sol, sidx) => (
                    <span key={sidx} className="text-[10px] bg-slate-50 border border-slate-100 font-medium px-2.5 py-1 rounded-full text-slate-600">
                      {sol}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 bg-emerald-50/30 p-3 rounded-2xl">
                <h4 className="text-[9px] uppercase font-extrabold text-emerald-800 tracking-wider mb-1">Outcome:</h4>
                <p className="text-slate-700 text-xs font-medium leading-relaxed">{bp.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY START WITH A SPRINT */}
      <section className="py-20 border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white rounded-[3rem] p-8 md:p-12 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel className="justify-center">Prevent Waste</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
            Why Start With A Sprint?
          </h2>
          <p className="text-slate-600 text-sm font-light leading-relaxed mb-8">
            AI implementation fails when businesses start with the tool before understanding the underlying workflow. The Discovery Sprint™ prevents that.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Avoid Mistooling", text: "Avoid investing in the wrong expensive SaaS platforms." },
              { title: "Prioritize Quick Wins", text: "Identify high-value use cases that launch in weeks." },
              { title: "Secure Alignment", text: "Bring operators and department heads into clear consensus." }
            ].map((reason, ridx) => (
              <div key={ridx} className="bg-white border border-slate-200/50 p-6 rounded-3xl text-center">
                <h4 className="text-sm font-bold text-slate-900 mb-2">{reason.title}</h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Validated Experience</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Testimonials</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            Hear from founders and department leads who discovered clarity via our workflow diagnostic audits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between relative group hover:border-[#cb4b16]/30 transition-all">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-[#cb4b16]/5 transition-colors" />
              <div>
                <p className="text-slate-600 font-light text-sm italic leading-relaxed mb-6 relative z-10">
                  “{t.quote}”
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#cb4b16]"></div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">{t.author}</h4>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDION */}
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
                      activeFaq === idx ? 'rotate-180 text-[#cb4b16]' : ''
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

      {/* FINAL BOOK A SPRINT CALL TO ACTION */}
      <section className="py-16 border-t border-slate-200/60 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-[#cb4b16]/5 text-[#cb4b16] flex items-center justify-center mx-auto mb-8 border border-[#cb4b16]/10">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          Start your AI journey with clarity
        </h2>
        
        <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Before you build an AI tool, automate a workflow, or invest in a platform, understand where AI can create real business value. The Discovery Sprint™ maps the right route.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://calendly.com/orvelo-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 text-center block"
          >
            Book A Sprint
          </a>
          
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 transition-all duration-300 text-center"
          >
            Talk To Orvelo
          </Link>
        </div>
      </section>
    </div>
  );
};
