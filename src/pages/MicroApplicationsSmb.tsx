import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { useModal } from '../context/ModalContext';
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
  Code, 
  Terminal, 
  Cloud, 
  Target, 
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Briefcase,
  TrendingUp,
  Boxes,
  Workflow,
  Compass,
  Laptop
} from 'lucide-react';

export const MicroApplicationsSmb = () => {
  const { openModal } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const sampleApps = [
    {
      title: "AI Proposal Generator",
      desc: "Create proposal drafts faster from customer requirements, sales notes, enquiry details, and service information. Helps sales teams respond faster while keeping proposal quality consistent.",
      bullets: [
        "Company introduction & capabilities",
        "Customer requirement summary",
        "Recommended solution & scope",
        "Timeline, commercial notes & next-step email"
      ],
      fits: ["Service businesses", "Agencies & Consultants", "B2B suppliers", "Interior & Construction", "Event & Catering", "Healthcare"],
      icon: FileText
    },
    {
      title: "RFQ Summary Assistant",
      desc: "Review customer RFQs and enquiries faster. Extract customer requirements, scope, specifications, delivery expectations, and missing parameters instantly from long emails, forms, or PDFs.",
      bullets: [
        "Customer details & requirement summary",
        "Quantity, scope, specifications & budget",
        "Missing information flag checklist",
        "Draft follow-up questions & next steps"
      ],
      fits: ["RFQ-driven businesses", "B2B service companies", "Manufacturers & Distributors", "IT service providers", "Custom product teams"],
      icon: FileCheck
    },
    {
      title: "Datasheet Generator",
      desc: "Turn product or service information into structured documents. Convert scattered parameters across catalog drafts, brochures, older PDFs, and spreadsheets into clean, standardized sheets.",
      bullets: [
        "Product description & service overview",
        "Key features, specifications & benefits",
        "Applications & customization options",
        "Download-ready structured web content"
      ],
      fits: ["Product businesses", "Manufacturers & Distributors", "Technology companies", "Equipment suppliers", "Professional service firms"],
      icon: Layers
    },
    {
      title: "Sales Chatbot",
      desc: "Answer customer questions using your exact business knowledge. Unlike generic chatbots, Orvelo builds sales chatbots structured on your products, availability, and pricing guidelines.",
      bullets: [
        "Explains services, packages, and pricing steps",
        "Guides buyers on what info is needed for a quote",
        "Directs users to book consultations or submit RFQs",
        "Serves as a private assistant for internal sales teams"
      ],
      fits: ["SMB websites", "B2B service companies", "Agencies & Consultants", "Training businesses", "Real estate", "Customer support teams"],
      icon: MessageSquare
    },
    {
      title: "Management Report Assistant",
      desc: "Convert business updates into clear reports. Translate raw CRM exports, spreadsheets, emails, forms, or production logs into structured dashboards for leadership visibility.",
      bullets: [
        "Daily, weekly, and monthly summaries",
        "Pipeline, lead, and operational status",
        "Exceptions, progress hurdles, and prioritize checklists",
        "Pre-formatted management action items"
      ],
      fits: ["Business owners & Founders", "CEOs & COOs", "Operations & Sales heads", "Admin teams", "Department & branch leaders"],
      icon: BarChart
    }
  ];

  const secondaryApps = [
    "Quote Follow-Up Assistant",
    "Customer Support Assistant",
    "Lead Qualification Assistant",
    "Invoice Summary Assistant",
    "Meeting Notes Summarizer",
    "HR Screening Assistant",
    "SOP Assistant",
    "Training Content Generator",
    "Product Page Generator",
    "Social Media Content Assistant",
    "FAQ Generator",
    "Competitor Summary Assistant",
    "CRM Update Assistant",
    "Document Classification Assistant",
    "Internal Knowledge Assistant"
  ];

  const buildPlatforms = [
    {
      title: "Claude Code",
      desc: "Can be used for custom AI application development where AI helps build, edit, debug, and improve code faster.",
      useCases: ["Custom AI tools", "Internal business applications", "Document processing tools", "Workflow applications", "API-connected systems"],
      color: "from-amber-50 to-orange-50/40"
    },
    {
      title: "Google Antigravity",
      desc: "Supports agent-first development workflows where AI agents assist with planning, building, testing, and improving applications.",
      useCases: ["Prototype development", "Agent-based app building", "Internal productivity tools", "Rapid experimentation"],
      color: "from-blue-50 to-indigo-50/50"
    },
    {
      title: "Replit",
      desc: "To quickly build, test, and deploy lightweight web applications, dashboards, prototypes, and internal tools without long development cycles.",
      useCases: ["Micro app prototypes", "Simple internal tools", "Dashboards", "AI form-based tools", "Proof-of-concept apps"],
      color: "from-emerald-50 to-teal-50/50"
    }
  ];

  const deliveryModels = [
    {
      step: "01",
      title: "We Build It for You",
      desc: "Best when you want a working AI micro application without managing any technical layers.",
      items: [
        "Workflow discovery & use case scope",
        "Prompt architecture & UI design",
        "Development, secure APIs & deployment",
        "User training, documentation & iteration"
      ]
    },
    {
      step: "02",
      title: "We Build With Your Team",
      desc: "Best when you already have an internal team (marketing, IT, ops) that wants to learn.",
      items: [
        "Define the use case & design variables",
        "Construct workflow logic collaboratively",
        "Configure environments, test real data",
        "Train internal users, map roadmap guides"
      ]
    },
    {
      step: "03",
      title: "We Set Up Your Micro App Infrastructure",
      desc: "For SMBs that want to develop and launch AI micro applications themselves on an ongoing basis.",
      items: [
        "AI tool selection & workspace licensing setup",
        "Claude Code & Google Antigravity onboarding",
        "Replit workspace & GitHub repository templates",
        "Database, API key structures, hosting guides"
      ]
    }
  ];

  const infraItems = [
    { title: "Development Environment", desc: "We help your team choose and configure the right development environment based on your team’s comfort level. This may include Claude Code, Antigravity, Replit, VS Code, GitHub, or other tools." },
    { title: "App Templates", desc: "We create reusable templates for common micro applications such as chatbots, report generators, proposal generators, document summarizers, and form-based AI tools." },
    { title: "Prompt and Knowledge System", desc: "We structure reusable prompts, business rules, knowledge files, and reference documents so your team can create consistent AI outputs." },
    { title: "Hosting and Deployment", desc: "We help set up hosting, domains, environments, and deployment workflows so micro apps can be launched properly." },
    { title: "Data and Integration Layer", desc: "We help connect micro apps to approved sources such as spreadsheets, CRMs, documents, emails, forms, and internal databases." },
    { title: "Access and Security", desc: "We define who can use, edit, test, and deploy micro applications inside your company." },
    { title: "Documentation and Training", desc: "We train your team to use the infrastructure, build basic tools, test outputs, and manage improvements." }
  ];

  const appProcess = [
    { step: "Step 1", title: "Identify the Workflow", desc: "We identify the repeated task, the team involved, the input required, and the output expected." },
    { step: "Step 2", title: "Define the Use Case", desc: "We convert the workflow into a clear micro application scope with boundaries, rules, and success criteria." },
    { step: "Step 3", title: "Map the Data", desc: "We identify the documents, files, forms, spreadsheets, emails, or knowledge sources the application needs." },
    { step: "Step 4", title: "Design the Output", desc: "We define what the application should produce: a proposal, summary, report, datasheet, answer, checklist, or dashboard." },
    { step: "Step 5", title: "Build the First Version", desc: "We create the first working version using the right platform and development approach." },
    { step: "Step 6", title: "Test With Real Inputs", desc: "We test the application using real enquiries, reports, product details, customer questions, or business data." },
    { step: "Step 7", title: "Improve the Logic", desc: "We refine prompts, workflows, rules, fields, formatting, and output quality." },
    { step: "Step 8", title: "Launch and Train", desc: "We deploy the application and train your team to use it properly." },
    { step: "Step 9", title: "Monitor and Improve", desc: "We review usage, errors, feedback, and new requirements so the application keeps improving." }
  ];

  const useCasesList = [
    { role: "Sales Team", text: "Use AI to summarize enquiries, draft proposals, prepare follow-ups, answer buyer questions, and qualify leads." },
    { role: "Customer Support", text: "Use AI to answer common questions, explain services, guide customers, and reduce repeated manual responses." },
    { role: "Marketing Team", text: "Use AI to create product pages, FAQs, blogs, campaign drafts, social content, and sales documents." },
    { role: "Operations Team", text: "Use AI to summarize tasks, classify documents, prepare updates, and support internal workflows." },
    { role: "Management Team", text: "Use AI to summarize reports, track weekly updates, identify exceptions, and prepare review notes." },
    { role: "Admin Team", text: "Use AI to organize documents, draft responses, summarize forms, and reduce repetitive documentation work." }
  ];

  const audiences = [
    "Service businesses", "B2B companies", "Agencies", "Consultants", "Manufacturers", "Distributors", 
    "Training companies", "Healthcare and wellness businesses", "Construction companies", "Interior firms", 
    "Event businesses", "Real estate businesses", "IT service providers", "Professional service firms", 
    "Local businesses with growth teams"
  ];

  const faqs = [
    {
      q: "What is an AI Micro Application?",
      a: "An AI Micro Application is a small, focused AI tool built to complete one specific business task. It may summarize enquiries, generate proposals, create datasheets, answer customer questions, or prepare management reports."
    },
    {
      q: "How is a micro application different from a chatbot?",
      a: "A chatbot is usually conversational. A micro application is workflow-specific. It may include forms, document uploads, structured outputs, templates, business rules, integrations, and approval steps."
    },
    {
      q: "Can Orvelo build custom AI micro applications for SMBs?",
      a: "Yes. Orvelo builds AI micro applications for sales, customer support, documentation, reporting, marketing, operations, admin, and management workflows."
    },
    {
      q: "What platforms can Orvelo build on?",
      a: "Orvelo can build using Claude Code, Google Antigravity, Replit, OpenAI API, Claude API, Gemini API, Node.js, Python, Supabase, Firebase, Airtable, Make, Zapier, n8n, Google Workspace, Microsoft 365, cloud hosting, or custom VPS infrastructure."
    },
    {
      q: "Can you build an AI Proposal Generator for our business?",
      a: "Yes. We can build an AI Proposal Generator using your company profile, service details, product information, pricing structure, proposal format, and customer enquiry inputs."
    },
    {
      q: "Can the RFQ Summary Assistant read PDFs and attachments?",
      a: "Yes, it can be designed to process RFQ documents, PDFs, emails, spreadsheets, and structured inputs depending on the file type, system access, and workflow requirements."
    },
    {
      q: "Can we use these tools internally only?",
      a: "Yes. Micro applications can be built as private internal tools with controlled team access."
    },
    {
      q: "Can Orvelo set up infrastructure so our team can build micro apps ourselves?",
      a: "Yes. Orvelo can set up the development environment, AI tools, app templates, hosting, documentation, workflows, and training required for your team to build and launch micro applications internally."
    },
    {
      q: "Do we need a technical team to start?",
      a: "No. Orvelo can build the first application for you. If you want to build internally later, we can gradually train your team and set up the right infrastructure."
    },
    {
      q: "Does Orvelo provide ongoing support?",
      a: "Yes. Orvelo can support testing, improvements, new features, additional micro applications, team training, reporting, and infrastructure management."
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="AI Micro Applications for SMBs | Orvelo" 
        description="Orvelo builds AI micro applications for SMBs, including proposal generators, RFQ summary assistants, datasheet generators, sales chatbots, and management report assistants."
      />

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold tracking-widest mx-auto">
          <Cpu className="w-3.5 h-3.5" />
          <span>Practical Automation</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8 font-sans uppercase">
          AI Micro Applications <br />
          <span className="font-serif italic font-normal text-emerald-700 lowercase">for SMBs</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-800 font-extrabold max-w-2xl mx-auto leading-relaxed mb-4">
          Build small AI tools that solve real business problems
        </p>

        <p className="text-base md:text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          AI does not have to start with a large transformation project. For most small and mid-sized businesses, the best starting point is a focused AI tool that solves one repeated problem. Small tools. Clear use cases. Faster execution.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 text-center"
          >
            Build Your First AI Micro Application
          </Link>
        </div>
      </motion.div>

      {/* INTRODUCTION CHALLENGE SECTION */}
      <section className="py-16 border-t border-slate-200/60 bg-slate-50/50 rounded-[3rem] p-8 md:p-12 mb-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Targeted Value</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
            What are AI Micro Applications?
          </h2>
          <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
            AI Micro Applications are small, purpose-built AI tools designed to complete one specific business task. They are not generic chatbots. They are not complex enterprise software. They are not experimental AI demos.
          </p>
          <p className="text-sm text-slate-600 font-light leading-relaxed mb-8">
            They are focused applications built around your workflow, your documents, your business rules, and your team’s daily tasks.
          </p>

          <h3 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">For SMBs, micro applications support:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {["Sales", "Customer support", "Operations", "Admin", "Marketing", "Reporting", "Documentation", "HR", "Finance", "Management"].map((area, idx) => (
              <div key={idx} className="bg-white px-4 py-2 rounded-xl border border-slate-200/40 text-center text-xs font-semibold text-slate-700 shadow-sm">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SMBs NEED THEM */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionLabel>Process Focus</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mt-2">
              Why SMBs Need <br />
              AI Micro <br />
              <span className="font-serif italic font-normal text-emerald-700">Applications</span>
            </h2>
            <p className="text-slate-500 text-sm font-light leading-relaxed mt-6">
              Most small and mid-sized businesses run on repeated manual work. Teams prepare proposals, sales reps respond to enquiries, managers manually update spreadsheets, and customer support answers the same questions repeatedly.
            </p>
            <p className="text-slate-500 text-sm font-light leading-relaxed mt-4">
              AI micro applications help convert these repeated tasks into guided, structured workflows. Instead of asking your team to “use AI,” Orvelo builds AI directly into the task.
            </p>
          </div>
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-slate-200/50 rounded-[2.5rem] shadow-sm">
            <h3 className="text-sm uppercase font-extrabold text-slate-400 tracking-wider mb-6">Repeated Tasks We Help Structure:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Proposal Drafting", text: "Stop copying old templates manually." },
                { title: "RFQ Reading", text: "Read specifications and PDFs in seconds." },
                { title: "Standard FAQ Responses", text: "Instantly fetch correct specifications." },
                { title: "Business Report Assembly", text: "Consolidate raw inputs for management updates." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-extrabold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-[11px] font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE APPLICATIONS WE BUILD */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Core Catalog</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">AI Micro Applications We Build</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            Five key structural applications that fit directly into small and medium business work models.
          </p>
        </div>

        <div className="space-y-12">
          {sampleApps.map((app, idx) => {
            const IconComponent = app.icon;
            return (
              <div key={idx} className="grid lg:grid-cols-12 gap-8 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_12px_rgba(15,23,42,0.01)] hover:border-slate-300 transition-all duration-300">
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 border border-emerald-100">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{app.title}</h3>
                    <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">{app.desc}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <h4 className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider mb-2">Best Suited For:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {app.fits.map((f, fidx) => (
                        <span key={fidx} className="text-[10px] bg-slate-50 border border-slate-100 font-medium px-2.5 py-1 rounded-full text-slate-600">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col justify-center">
                  <h4 className="text-[10px] uppercase font-extrabold text-[#cb4b16] tracking-wider mb-4">Core Capability Features:</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {app.bullets.map((bullet, bidx) => (
                      <div key={bidx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-700 font-medium leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* OTHER APPLICATIONS LIST */}
      <section className="py-20 border-t border-slate-200/60 bg-gradient-to-r from-slate-50 to-white rounded-[3rem] p-8 md:p-12 mb-24">
        <div className="max-w-4xl mx-auto">
          <SectionLabel className="justify-center">Custom Capability Scope</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-4">
            Other AI Micro Applications We Can Build
          </h2>
          <p className="text-slate-500 text-xs font-light text-center mb-10 max-w-xl mx-auto">
            Every micro application starts with one question: Which repeated task is slowing your team down? We design and construct custom endpoints around your target workflows.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {secondaryApps.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/40 p-3 rounded-2xl flex items-center gap-2 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[10px] text-slate-700 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS WE CAN BUILD ON */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Development Stacks</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Platforms We Can Build On</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            Orvelo builds using modern AI stacks, low-code tools, automation engines, and custom application setups. The stack depends entirely on your budget, logic density, and workflow integrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {buildPlatforms.map((p, idx) => (
            <div key={idx} className={`bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all duration-300`}>
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{p.title}</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">{p.desc}</p>
                
                <h4 className="text-[10px] uppercase font-extrabold text-[#cb4b16] tracking-wider mb-3">Best for:</h4>
                <ul className="space-y-2">
                  {p.useCases.map((uc, uidx) => (
                    <li key={uidx} className="flex items-center gap-2 text-[11px] text-slate-600 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/50">
          <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4 text-center">Other Build Options:</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "OpenAI API", "Claude API", "Gemini API", "Node.js", "Python", "Supabase", "Firebase", 
              "Airtable", "Google Sheets", "Make", "Zapier", "n8n", "Google Workspace", "Microsoft 365"
            ].map((tech, idx) => (
              <span key={idx} className="bg-white border border-slate-200/40 text-[10px] font-mono px-3.5 py-1.5 rounded-full text-slate-600 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Flexibility</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Build, Launch, or Self-Manage</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            Three highly flexible engagement models tailored to small and medium business comfort requirements.
          </p>
        </div>

        <div className="space-y-6">
          {deliveryModels.map((item, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-8 bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
              <div className="lg:col-span-5 flex items-start gap-4">
                <span className="text-3xl font-black text-slate-300 font-mono">{item.step}</span>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-3">Key Focus Checkpoints:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {item.items.map((bullet, bidx) => (
                    <div key={bidx} className="flex items-start gap-2 text-xs text-slate-600 font-light">
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

      {/* WHAT THE INFRASTRUCTURE SETUP CAN INCLUDE */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Infrastructure Blueprint</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">What the Infrastructure Setup Includes</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            If you choose to set up your internal infrastructure, Orvelo provides the complete repeatable system your team needs to build, test, and manage micro applications internally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infraItems.map((item, idx) => (
            <div key={idx} className="bg-slate-50/50 hover:bg-white border border-slate-200/40 hover:border-slate-300 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-[11px] font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE 9-STEP PROCESS */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Step-by-Step Delivery</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Micro Application Process</h2>
          <p className="text-slate-500 text-sm font-light mt-4">
            A precise, logical execution cycle from initial workflow discovery to launching and training your operators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appProcess.map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 p-8 rounded-[2rem] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-extrabold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full uppercase tracking-wider">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-4 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VS GENERIC ADOPTION COMPARISON */}
      <section className="py-16 border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white rounded-[3rem] p-8 md:p-12 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel className="justify-center">Smarter Adoption</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
            Micro Applications vs. Generic AI Adoption
          </h2>
          <p className="text-slate-600 text-sm font-light leading-relaxed mb-8">
            Many SMBs start by giving employees access to ChatGPT or another generic AI tool. While useful, it does not create a structured business system. Generic AI depends on individuals knowing what to ask and how to verify. 
          </p>
          <p className="text-slate-600 text-sm font-extrabold leading-relaxed mb-8 uppercase text-emerald-700 tracking-wider">
            Micro Applications solve this. They provide:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Interfaces", text: "Structured input boxes, specific forms, and clear upload targets." },
              { title: "Knowledge Rules", text: "Approved documents, product guidelines, and pricing charts." },
              { title: "Repeatable Output", text: "Pre-formatted proposals or reports that do not change randomly." }
            ].map((reason, ridx) => (
              <div key={ridx} className="bg-white border border-slate-200/50 p-6 rounded-3xl text-center">
                <h4 className="text-sm font-bold text-slate-900 mb-2">{reason.title}</h4>
                <p className="text-slate-500 text-xs font-light leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR AND WHY ORVELO */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* WHO */}
          <div className="bg-white border border-slate-200/60 rounded-[3rem] p-8 md:p-12">
            <SectionLabel>Target Profile</SectionLabel>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-2 mb-6">
              Who This Service Is For
            </h3>
            <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">
              Orvelo’s AI Micro Applications service is built for SMBs that want practical AI implementation without large enterprise complexity.
            </p>
            <div className="flex flex-wrap gap-2">
              {audiences.map((audience, idx) => (
                <span key={idx} className="bg-slate-50 border border-slate-200/30 text-[10px] font-medium px-3 py-1.5 rounded-full text-slate-600">
                  {audience}
                </span>
              ))}
            </div>
          </div>

          {/* WHY */}
          <div className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <SectionLabel className="text-white/80">Value Proposition</SectionLabel>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-2 mb-6">
                Why Orvelo?
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "We build around real workflows", text: "We do not start with tools. We start with the repeated task that needs to be improved." },
                  { title: "Practical implementation focus", text: "We help you go from idea to working application, not just AI strategy." },
                  { title: "Build small before scaling big", text: "We start with focused micro applications that solve one specific business problem." },
                  { title: "Done-for-you and self-build support", text: "We can build the applications for you or set up the infrastructure so your team can build them internally." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#cb4b16] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">✓</div>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-100">{item.title}</h4>
                      <p className="text-slate-400 text-[11px] font-light mt-0.5">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE USE CASES ROLES */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center">Operator Impacts</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Example Use Cases</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCasesList.map((uc, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-3xl">
              <h3 className="text-base font-extrabold text-[#cb4b16] mb-2">{uc.role}</h3>
              <p className="text-slate-600 text-xs font-light leading-relaxed">{uc.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* START WITH ONE CTA */}
      <section className="py-20 border-t border-slate-200/60 bg-slate-900 text-white rounded-[3.5rem] p-8 md:p-16 mb-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#cb4b16] text-[10px] uppercase font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeted Progress</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Start With One Micro Application
          </h2>
          <p className="text-slate-300 font-light text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
            You do not need to automate the whole business at once. Start with one repeated task. Build one focused AI micro application. Test it with real users, improve it, then expand. Orvelo helps SMBs move from curiosity to execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg text-center"
            >
              Build Your First AI Micro Application
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 text-center"
            >
              Set Up Your Internal Infrastructure
            </Link>
          </div>
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
