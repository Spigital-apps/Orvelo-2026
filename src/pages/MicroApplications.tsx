import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { 
  Cpu, 
  Bot, 
  Zap, 
  Layers, 
  FileCheck, 
  MessageSquare, 
  BarChart, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  Users, 
  Settings, 
  ChevronRight, 
  GitMerge, 
  Code, 
  Terminal, 
  Cloud, 
  Target, 
  ShieldAlert,
  Play
} from 'lucide-react';

export const MicroApplications = () => {
  const { openModal } = useModal();

  // Core 5 applications we build
  const coreApps = [
    {
      title: "AI Proposal Generator",
      tagline: "Turn requirements and notes into proposals in minutes",
      desc: "Helps your sales team create structured first drafts for customer proposals, quotations, capability presentations, and follow-up documents.",
      bullets: [
        "Company introduction & capabilities summary",
        "Technical solution & product/service scope",
        "Commercial notes and recommended solution",
        "Next-step email draft generated instantly"
      ],
      fit: "RFQ-driven manufacturers, industrial equipment companies, fabricators, and engineering-led sales teams.",
      icon: FileText
    },
    {
      title: "RFQ Summary Assistant",
      tagline: "Read customer RFQs faster and identify what matters",
      desc: "Reads customer inquiries from long emails, PDFs, drawings, and spreadsheets to extract key requirements and flags.",
      bullets: [
        "Automatically summarizes quantities, materials, and tolerances",
        "Identifies certifications and compliance specifications",
        "Lists delivery expectations and commercial terms",
        "Generates list of questions and missing info to ask client"
      ],
      fit: "RFQ-heavy businesses, component manufacturers, OEM suppliers, and technical sales/estimation teams.",
      icon: FileCheck
    },
    {
      title: "Datasheet Generator",
      tagline: "Create structured product datasheets from raw files",
      desc: "Converts technical parameters, engineering sheets, older catalog files, and design notes into clean, standardized datasheet drafts.",
      bullets: [
        "Standardizes product descriptions & custom dimensions",
        "Creates application, performance, and material tables",
        "Generates compliance, installation, and usage notes",
        "Prepares download-ready structured web content"
      ],
      fit: "Industrial product, rubber, metal, HVAC, valve, pump, machinery, and electrical component suppliers.",
      icon: Layers
    },
    {
      title: "Sales Chatbot",
      tagline: "Answer buyer and customer questions using custom knowledge",
      desc: "Built around your website information, capability documents, and RFQ procedures to answer specific questions.",
      bullets: [
        "Explains product range and customization capabilities",
        "Details served industries, materials handled, and lead times",
        "Guides buyers on what info is needed for an RFQ submission",
        "Acts as a private assistant for internal sales representatives"
      ],
      fit: "Manufacturing websites, distributor support systems, internal sales training, and buyer qualifying workflows.",
      icon: MessageSquare
    },
    {
      title: "Management Report Assistant",
      tagline: "Convert raw updates into polished leadership reviews",
      desc: "Transforms CRM exports, production logs, email updates, or spreadsheets into structured summaries for executive leadership.",
      bullets: [
        "Produces daily, weekly, and monthly summaries",
        "Highlights RFQ pipeline updates and production progress",
        "Tracks team exceptions, targets met, and outstanding priorities",
        "Outputs clean, leadership-ready executive dashboards"
      ],
      fit: "CEOs, department heads, department leaders, plant managers, sales directors, and business owners.",
      icon: BarChart
    }
  ];

  // Other Micro Applications lists
  const otherApps = [
    "Quote Follow-Up Assistant",
    "Technical FAQ Generator",
    "SOP Assistant",
    "Product Page Generator",
    "Distributor Email Assistant",
    "Customer Support Assistant",
    "AI Search Visibility Checker",
    "Competitor Summary Assistant",
    "Lead Qualification Assistant",
    "Internal Knowledge Assistant",
    "Meeting Notes Summarizer",
    "Vendor Comparison Assistant",
    "Training Content Generator",
    "Document Classification Assistant",
    "CRM Update Assistant"
  ];

  // Platforms we build on
  const platforms = [
    {
      title: "Claude Code",
      desc: "Used for agentic development workflows where AI helps write, edit, debug, and improve codebase files at rapid velocity. Best for custom-coded AI applications, internal tools, API-connected systems, and structured document processing engines.",
      icon: Terminal,
      accent: "border-[#cb4b16]/20 bg-[#cb4b16]/5 text-[#cb4b16]"
    },
    {
      title: "Google Antigravity",
      desc: "Supports agent-first development setups where multiple agents participate in planning, editing, testing, and verifying application progress. Perfect for rapid prototyping, developer acceleration, and exploring generative software paradigms.",
      icon: Bot,
      accent: "border-emerald-100 bg-emerald-50/50 text-emerald-700"
    },
    {
      title: "Replit",
      desc: "Enables lightning-fast development, testing, and deployment of lightweight web apps, interactive forms, and internal dashboards. Ideal for companies seeking working proof-of-concepts, simple shared utilities, and rapid feedback loops.",
      icon: Code,
      accent: "border-blue-100 bg-blue-50/30 text-blue-600"
    }
  ];

  const additionalPlatforms = [
    "OpenAI API", "Claude API", "Gemini API", "Node.js & Python Stacks",
    "Supabase & Firebase", "Airtable & Zapier", "Make & n8n Automation", "Google Workspace & Office 365"
  ];

  // Engagement Models (1-3)
  const models = [
    {
      num: "1",
      title: "We Build It for You",
      desc: "The complete 'Done-for-You' path. Best when you want a completed, production-ready internal tool without managing technical execution.",
      bullets: [
        "Workflow discovery & business scoping",
        "Prompt architecture & document parsing setup",
        "Visual design, deployment, and testing",
        "Staff training, handoff, and iterative tuning"
      ]
    },
    {
      num: "2",
      title: "We Build With Your Team",
      desc: "Collaborative development. Best if you have internal IT, marketing, operations, or digital resources who want to participate in the process.",
      bullets: [
        "Joint definition of use cases and boundaries",
        "Co-creation of initial logic and workflows",
        "Pair-programming or collaborative configuration",
        "Training your internal team during the build itself"
      ]
    },
    {
      num: "3",
      title: "We Set Up Your Infrastructure",
      desc: "For organizations wanting to build internally. We configure your developer workspace, guidelines, templates, and guardrails.",
      bullets: [
        "Development workspaces (Claude Code, Replit, VS Code)",
        "Prompt libraries, database structures, and reusable UI templates",
        "API keys, hosting, domains, and environment configurations",
        "Security, testing checklists, and governance blueprints"
      ]
    }
  ];

  // Process Steps
  const processSteps = [
    { num: "01", title: "Identify Workflow", desc: "Isolate the manual, high-friction, repeated task and clarify inputs & outputs." },
    { num: "02", title: "Define Use Case", desc: "Draft clear app boundaries, output formatting guidelines, and success metrics." },
    { num: "03", title: "Map the Data", desc: "Pinpoint files, sheets, email trails, or catalogs the application must access." },
    { num: "04", title: "Design the Output", desc: "Model what the final format looks like (proposal draft, table, report, or Q&A)." },
    { num: "05", title: "Build First Version", desc: "Construct the initial working container on the selected low-code or custom stack." },
    { num: "06", title: "Test with Real Inputs", desc: "Feed real-world RFQs, technical files, or sales notes into the app." },
    { num: "07", title: "Refine & Improve", desc: "Iterate on prompt architecture, validation steps, edge cases, and layout." },
    { num: "08", title: "Launch & Train", desc: "Deploy the app to users and conduct focused training workshops." },
    { num: "09", title: "Monitor & Upgrade", desc: "Review user logs, output quality, and update parameters as business changes." }
  ];

  const infrastructureDeliverables = [
    { title: "Development Environment", desc: "Selection and layout of toolchains (Claude Code, Antigravity, Replit) customized to your technical maturity." },
    { title: "Reusable App Templates", desc: "Pre-built templates for form inputs, multi-document summarizers, and interactive chat dashboards." },
    { title: "Prompt & Knowledge Libraries", desc: "Curated prompts, business rules, and guidelines to ensure consistent outputs." },
    { title: "Hosting & CI/CD Pipelines", desc: "Secure deployment structures, domain mappings, and standard environment variable security." },
    { title: "Data & Integration Maps", desc: "Pipelines to securely pipe data to spreadsheets, CRMs, emails, and internal directories." },
    { title: "Access Controls & Governance", desc: "Role-based views and security profiles so only authorized staff can trigger tools." }
  ];

  return (
    <div className="pt-32 pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="AI Micro Applications for Manufacturing Companies | Orvelo" 
        description="Build small, highly-focused AI tools that solve specific business problems in your sales, RFQ, engineering, and operations workflows."
      />

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 text-center max-w-5xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-700 text-[10px] uppercase font-bold tracking-widest mx-auto">
          <Cpu className="w-3.5 h-3.5" />
          <span>Practical AI Execution</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-[5rem] font-black tracking-tight text-slate-900 leading-[1.05] mb-8 font-sans">
          AI Micro Applications <br />
          <span className="font-serif italic font-normal text-emerald-700">for Manufacturing Companies</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mb-12">
          Build small, highly-focused AI tools that solve specific business problems, automate painful documentation, and speed up client-facing workflows.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 hover:shadow-xl active:scale-95 text-center"
          >
            Build Your First AI Micro Application
          </Link>
        </div>
      </motion.div>

      {/* SECTION: INTRODUCTION */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <SectionLabel>What are Micro Applications?</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Build small AI tools that solve specific business problems.
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Not every AI project needs to be a multi-year, multi-million dollar transformation. Often, the highest and fastest business value comes from a small, purpose-built application that automates one single painful workflow.
            </p>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              AI Micro Applications are not generic chats. They are practical tools built specifically around your website files, sales history, engineering specifications, compliance papers, and exact business rules.
            </p>
          </div>
          
          <div className="md:col-span-6 bg-slate-50/50 border border-slate-200/50 rounded-[2.5rem] p-8 md:p-10">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-3">
              Focused Workflow Examples
            </h3>
            <div className="space-y-4">
              {[
                { title: "Proposal Drafts", desc: "Helps sales teams respond with accurate, formatted proposals in minutes" },
                { title: "RFQ Summaries", desc: "Reads customer requirements and instantly highlights material/lead time checks" },
                { title: "Product Datasheets", desc: "Standardizes technical parameters into structured catalog formats" },
                { title: "FAQ & Capability Chats", desc: "Handles buyer queries on manufacturing tolerances and materials" },
                { title: "Executive Updates", desc: "Synthesizes pipeline performance files for leadership review" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY NEED MICRO APPS SECTION */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel className="justify-center">The Mandate</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Why Manufacturing Companies Need Micro Applications
          </h2>
          <p className="text-slate-500 font-light text-base leading-relaxed">
            Industrial businesses run on information-heavy processes—specification files, pricing sheets, emails, certifications, and drawings. Relying on manual updates creates delays, missed parameters, inconsistent responses, and bottlenecks on key personnel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Reduce Repetitive Friction",
              desc: "Automate hours of daily copy-pasting, formatting, and file digging, letting engineers focus on technical estimation and buyers focus on deals."
            },
            {
              title: "Accelerate Customer Responsetimes",
              desc: "First drafts of proposal pitches, RFQ summary checklists, and parameter documents are available instantly, shortening the sales cycle."
            },
            {
              title: "Preserve Business Intelligence",
              desc: "Code your company's quoting logic, certification standards, and material rules directly into custom prompts, keeping processes standardized."
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm hover:border-emerald-600/30 transition-all duration-300">
              <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full mb-6 inline-block">
                Benefit 0{idx + 1}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE MICRO APPLICATIONS LIST */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">Our Catalog</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            AI Micro Applications We Build
          </h2>
          <p className="text-slate-500 font-light">
            We map, prompt, and engineer specific microapplications around key functional teams.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {coreApps.map((app, idx) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-slate-200/50 rounded-[2.5rem] p-8 md:p-10 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-md transition-all duration-500 grid md:grid-cols-12 gap-8 items-center group"
              >
                <div className="md:col-span-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#cb4b16]/5 group-hover:text-[#cb4b16] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-slate-950 transition-colors">
                        {app.title}
                      </h3>
                      <p className="text-xs text-[#cb4b16] font-semibold uppercase tracking-widest mt-0.5">{app.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
                    {app.desc}
                  </p>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-xs text-slate-700 font-light">
                      <span className="font-bold text-slate-800">Best Suited For: </span>
                      {app.fit}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center">
                  <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400 mb-4">Functional Scope Includes</h4>
                  <ul className="space-y-3">
                    {app.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2.5 text-xs text-slate-600 font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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

      {/* INTERACTIVE COMPONENT: OTHER TOOLS GRID */}
      <section className="py-16 border-t border-slate-200/60 bg-slate-50/50 rounded-[3rem] px-8 md:px-12 my-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionLabel className="justify-center">Custom Possibilities</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Other Micro Applications We Can Build
          </h2>
          <p className="text-slate-500 text-xs font-light mt-2">
            Every business has unique process gaps. We build custom logic to automate your exact bottleneck.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {otherApps.map((tool, idx) => (
            <div key={idx} className="bg-white border border-slate-200/40 p-4 rounded-xl flex items-center gap-3 shadow-sm hover:border-[#cb4b16]/20 hover:shadow-sm transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-[#cb4b16] shrink-0" />
              <p className="text-xs font-medium text-slate-700">{tool}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORMS WE BUILD ON */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">Tech Stack</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Platforms We Can Build On
          </h2>
          <p className="text-slate-500 font-light">
            We adapt tool selections to match your data privacy, hosting standards, internal budget, and future technical plans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((plat, idx) => {
            const Icon = plat.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/50 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 ${plat.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{plat.title}</h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">{plat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(49,232,251,0.05)_0%,transparent_60%)] pointer-events-none" />
          <h4 className="text-[#31e8fb] font-bold uppercase tracking-widest text-xs mb-6 text-center">Other Build Options Available</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalPlatforms.map((plat, idx) => (
              <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-slate-200">
                {plat}
              </span>
            ))}
          </div>
          <p className="text-slate-400 text-[11px] text-center mt-6 max-w-xl mx-auto font-light">
            The platform is carefully chosen based on security, document handling parameters, CRM or enterprise database connections, and licensing targets.
          </p>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">Collaboration</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Build, Launch, or Self-Manage
          </h2>
          <p className="text-slate-500 font-light">
            Whether you want a finished, done-for-you solution, or want us to help set up the framework for your team to build, we support your model.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-[2rem] p-8 shadow-sm hover:border-emerald-600/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full mb-6 inline-block">
                  Option 0{model.num}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{model.title}</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">{model.desc}</p>
                
                <ul className="space-y-2 border-t border-slate-100 pt-6">
                  {model.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW INFRASTRUCTURE DELIVERABLES SHOWCASE */}
      <section className="py-20 border-t border-slate-200/60 bg-slate-900 text-white rounded-[3rem] px-8 md:px-16 my-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(203,75,22,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#cb4b16] bg-[#cb4b16]/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Infrastructure Setup
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              What the Infrastructure Setup Includes
            </h2>
            <p className="text-slate-400 font-light">
              We bootstrap the tools, rules, and structures your organization needs to build AI microapps repeatedly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {infrastructureDeliverables.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MICRO APPS WORK BETTER */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <SectionLabel>The Contrast</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              Micro Applications Work Better Than Generic AI Adoption
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Many companies start with AI by giving employee accounts on generic web chats. But general AI requires staff to know exactly how to prompt, what background context is safe to upload, and how to verify correctness.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              Micro apps isolate this complexity. By pinning fixed form fields, embedding custom libraries, and pre-loading schema standards, we remove the guesswork.
            </p>
          </div>
          
          <div className="md:col-span-7 space-y-4">
            <div className="p-6 bg-[#cb4b16]/5 border border-[#cb4b16]/20 rounded-2xl">
              <h4 className="font-bold text-[#cb4b16] text-sm mb-1">✕ The Old Way: Generic Chats</h4>
              <p className="text-slate-600 text-xs font-light">Employees copy-paste raw data, guess the prompt formats, risk exporting sensitive documents, and get back inconsistent outputs that need manual rewriting.</p>
            </div>
            
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <h4 className="font-bold text-emerald-700 text-sm mb-1">✓ The Orvelo Way: Micro Apps</h4>
              <p className="text-slate-600 text-xs font-light">Employees enter specific variables into secure fields. The app handles the parsing, uses tested company prompts, maps the data safely, and renders formatted, professional documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS BLUEPRINT */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="justify-center">Methodology</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Our Micro Application Process
          </h2>
          <p className="text-slate-500 font-light">
            A practical, step-by-step roadmap from isolating the manual workflow friction to launch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 p-6 rounded-[2rem] shadow-[0_4px_15px_rgba(15,23,42,0.01)] hover:border-emerald-600/30 hover:shadow-md transition-all duration-300">
              <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full mb-4 inline-block">
                Step {step.num}
              </span>
              <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
              <p className="text-slate-500 text-xs font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTORS WE SERVE */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <SectionLabel>Client Fit</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6">
              Who Is This Service For?
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Our AI microapplications are engineered specifically for manufacturing companies where teams waste valuable hours doing repetitive admin, copying parameters, writing boilerplate follow-ups, and compiling raw logs.
            </p>
            <p className="text-slate-500 font-light leading-relaxed">
              We work closely with industrial equipment teams, custom fabrication shops, parts suppliers, and RFQ-driven manufacturers.
            </p>
          </div>
          
          <div className="md:col-span-7 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-4 text-center">
              Manufacturing Segments We Serve
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "US Manufacturing Companies",
                "RFQ-Driven Industrial Businesses",
                "Industrial Equipment Manufacturers",
                "Metal Fabrication Companies",
                "Machinery Manufacturers",
                "Component & Part Manufacturers",
                "Pump & Valve Manufacturers",
                "HVAC Component Manufacturers",
                "Electrical and Automation Companies",
                "Rubber Product Manufacturers",
                "Custom Engineering Businesses",
                "Distributor-Led Industrial Companies"
              ].map((sector, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-700 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Answering Questions</SectionLabel>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              q: "What is an AI Micro Application?",
              a: "An AI Micro Application is a small, focused AI tool built to complete one specific business task. Unlike large enterprise integrations, a microapp resolves exactly one painful workflow—such as drafting proposals, summarizing RFQs, making product datasheets, or compiling reports."
            },
            {
              q: "How is a micro application different from a general chatbot like ChatGPT?",
              a: "A general chatbot requires the user to write their own prompts, paste raw text, and manually format outcomes. A micro application features custom form fields, pre-loaded business rules, dedicated data integrations, and tested prompt pipelines that produce standardized outputs every time."
            },
            {
              q: "Can the RFQ Summary Assistant parse PDF drawings and document attachments?",
              a: "Yes. Depending on system setups, file configurations, and technical scopes, the application can be engineered to parse raw text layers inside RFQ packages, spreadsheets, PDFs, and drawing packages."
            },
            {
              q: "Can these applications be deployed as private, internal-only utilities?",
              a: "Absolutely. We build and deploy internal tools with secured access controls, role authorizations, and isolated backend parameters, ensuring your proprietary specifications, catalogs, and client details remain safe."
            },
            {
              q: "Can Orvelo train our internal team to build micro applications ourselves?",
              a: "Yes, this is one of our key offerings (Engagement Model #3). We set up the workspaces (Claude Code, Replit), reusable templates, API keys, and prompt catalogs, and then train your operations or marketing teams to develop tools."
            },
            {
              q: "How long does it take to deploy a typical micro application?",
              a: "A simple working prototype can be configured and tested in a few weeks. Standard production tools with CRM pipelines, secure document uploads, and validation chains typically take 4 to 8 weeks depending on the technical complexity."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 p-6 md:p-8 rounded-[2rem] shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#cb4b16] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 border-t border-slate-200/60 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-[#cb4b16]/5 text-[#cb4b16] flex items-center justify-center mx-auto mb-8 border border-[#cb4b16]/10">
          <Zap className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          Ready to build your first AI micro application?
        </h2>
        
        <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Stop asking your team to guess how to use AI. Give them structured, secure, and highly focused tools that accelerate daily quoting, reporting, and documentation workflows.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 text-center"
          >
            Build Your First AI Micro Application
          </Link>
          
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 transition-all duration-300 text-center"
          >
            Set Up Your Internal Micro App Infrastructure
          </Link>
        </div>
      </section>
    </div>
  );
};
