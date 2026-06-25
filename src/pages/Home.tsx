import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Code, 
  Workflow, 
  Clock, 
  CheckCircle2,
  Calendar,
  MessageSquare,
  HelpCircle,
  Inbox,
  FileText,
  TrendingUp,
  Award
} from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { SEO } from '../components/SEO';

import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

import { CaseStudyTabs } from '../components/CaseStudyTabs';
import { CASE_STUDIES } from '../CaseStudyData';
import { useState, useRef } from 'react';

export const Home = () => {
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredStudies = activeCategory === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(study => study.category === activeCategory);

  const carouselStudies = filteredStudies;
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SEO 
        title="Orvelo | Fractional AI & Leadership for Growing Businesses" 
        description="We find the manual processes eating your week, automate them at a fixed price, and prove it with a money-back guarantee based on a metric you track."
      />
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-24 pt-24 pb-16 sm:pt-40 sm:pb-24 z-10 overflow-hidden">
        
        <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Tagline pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cb4b16]/5 border border-[#cb4b16]/10 text-[#cb4b16] font-bold text-[10px] uppercase tracking-wider sm:tracking-widest mb-6 sm:mb-8 text-center max-w-full"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Fractional AI & Automation for SMBs</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-[2.25rem] xs:text-[2.75rem] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.05] text-balance mb-6 sm:mb-8 font-sans">
              AI that pays for itself, <br className="hidden sm:inline" />{" "}
              <span className="font-serif italic font-normal text-emerald-700">or you don’t pay.</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
              We find the manual work eating your week, automate one process at a fixed price, and prove it with a number you already track. Backed by a full money-back guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
              <a 
                href="https://calendly.com/orvelo-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2.5 text-sm tracking-wider uppercase"
              >
                Book a fit call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#who"
                className="w-full sm:w-auto px-8 py-4 bg-white/60 hover:bg-white text-slate-700 rounded-full font-bold border border-slate-200 transition-all flex items-center justify-center gap-2.5 text-sm"
              >
                How it works
              </a>
            </div>
          </motion.div>

          {/* Premium Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-16 w-full max-w-5xl rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-2xl relative bg-white group flex flex-col md:block"
          >
            <img 
              src="/orvelopilot.png" 
              alt="Orvelo serenity cloud workspace illustration" 
              className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video md:aspect-[21/9] transition-transform duration-1000 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="relative md:absolute md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-slate-100 max-w-lg text-left shadow-xl m-4 md:m-0">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#cb4b16] block mb-2">The Orvelo Promise</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">Fixed-price AI pilots for US small businesses. Scoped in writing before we start.</h3>
              <p className="text-xs md:text-sm text-slate-500 font-light">We take the risk out of adoption. No hourly consulting creep, no perpetual whiteboard audits. Just custom integrations built to hit a specific metric in weeks.</p>
            </div>
          </motion.div>

          {/* Tech stack logo bar */}
          <div className="mt-24 w-full overflow-hidden relative max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-extrabold mb-8 text-center">No rip-and-replace. We build on top of your existing tools.</p>
            <div className="relative w-full overflow-hidden py-4">
              {/* Fade masks */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F4F7FB] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F4F7FB] to-transparent z-10 pointer-events-none" />
              
              <motion.div 
                className="flex gap-16 whitespace-nowrap w-max opacity-40 hover:opacity-70 transition-opacity"
                animate={{
                  x: [0, -960]
                }}
                transition={{
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity,
                }}
              >
                {[
                  "QuickBooks", "HubSpot", "Shopify", "Slack", "Gmail", "Salesforce", "Stripe", "Zapier",
                  "QuickBooks", "HubSpot", "Shopify", "Slack", "Gmail", "Salesforce", "Stripe", "Zapier",
                  "QuickBooks", "HubSpot", "Shopify", "Slack", "Gmail", "Salesforce", "Stripe", "Zapier"
                ].map((logo, idx) => (
                  <span key={`${logo}-${idx}`} className="font-sans font-black text-base md:text-lg tracking-tight text-slate-700 inline-block">{logo}</span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE BENTO VALUE GRID */}
      <section id="who" className="relative w-full py-16 md:py-32 px-4 sm:px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <SectionLabel>What We Stand For</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 mt-4 leading-tight font-sans text-balance">
            One process. Fixed price. <br className="hidden sm:inline" />
            Working proof in weeks.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg md:text-xl font-light mt-4 leading-relaxed">
            We don’t write thick consulting slide decks. We look at where you lose hours, build custom integrations to automate them, and back the work with a full guarantee.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: The Discovery Sprint (Large Left Card) */}
          <div className="md:col-span-6 bg-white border border-slate-200/60 rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:border-[#cb4b16]/30 hover:shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform" />
            <div className="relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#cb4b16] bg-[#cb4b16]/5 px-3 py-1 rounded-full inline-block">Core Offer</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-6 mb-4 leading-tight">The Discovery Sprint™</h3>
              <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed mb-8">
                A single process mapped, integrated, and fully automated inside your business at a one-time fixed price. We agree on a target metric (like reducing response times to minutes) and implement it end-to-end.
              </p>
            </div>
            <div className="relative z-10">
              <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">Time to build</div>
                  <div className="text-base sm:text-lg font-bold text-slate-800">4-6 Weeks</div>
                </div>
                <Link 
                  to="/the-discovery-sprint"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-[#cb4b16] text-white font-bold rounded-full text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 self-start sm:self-auto"
                >
                  See details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Fractional leadership (Right upper card) */}
          <div className="md:col-span-6 bg-blue-600 text-white border border-transparent rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:scale-110 transition-transform" />
            <div className="relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-100 bg-white/10 px-3 py-1 rounded-full inline-block">Fractional Advisory</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-6 mb-4 leading-tight">Fractional CTO & AI Advisory</h3>
              <p className="text-blue-100 text-sm sm:text-base font-light leading-relaxed mb-8">
                Guidance before software. Get senior technology strategy from Beta, Karthikeyan, Muthu, or Senthil fractionally. Direction, scoping, and process architecture without the cost of a full-time hire.
              </p>
            </div>
            <div className="relative z-10">
              <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-blue-200 font-bold mb-1">Our Experts</div>
                  <div className="text-sm font-bold text-white">4 Leadership Partners</div>
                </div>
                <a 
                  href="#leadership"
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-[10px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 self-start sm:self-auto"
                >
                  Meet leadership
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Revenue automation (Bottom Left) */}
          <div className="md:col-span-4 bg-sky-50 border border-slate-200/50 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500 group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-sky-600 shadow-sm border border-slate-100">
                <Workflow className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mt-5 mb-2">Revenue Automation</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                Leads answered before they cool. Dynamic response, follow-up, and personalized custom proposal drafts that run 24/7 in your unique voice.
              </p>
            </div>
          </div>

          {/* Card 4: The Guarantee (Bottom Center) */}
          <div className="md:col-span-4 bg-emerald-50/70 border border-slate-200/50 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500 group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm border border-slate-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mt-5 mb-2">Money-Back Guarantee</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                Written into every engagement contract. If our pilot automation fails to hit its agreed target in 30 days, we refund your investment in full. No asterisks.
              </p>
            </div>
          </div>

          {/* Card 5: Your Stack Kept (Bottom Right) */}
          <div className="md:col-span-4 bg-white border border-slate-200/60 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-500 group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#F4F7FB] flex items-center justify-center text-slate-600 shadow-sm border border-slate-200/30">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mt-5 mb-2">Your Stack, Kept</h4>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                No new dashboard logins. We bridge your current systems—CRM, QuickBooks, calendars, and inbox—keeping your existing workflow clean.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: WHERE YOUR WEEK ACTUALLY GOES */}
      <section id="where" className="relative w-full py-16 md:py-32 px-4 sm:px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-slate-200/60">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionLabel>Process Friction</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mt-4 leading-tight">
              Where your week <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-slate-500">actually goes.</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-light mt-6 leading-relaxed max-w-md">
              Owners tell us "we should look at AI." What they actually mean is they want to solve one of these manual bottlenecks. Each represents a standard automation pattern we deploy.
            </p>
            
            <div className="mt-8 p-6 bg-slate-100/60 rounded-3xl border border-slate-200/40 hidden lg:block">
              <div className="flex gap-4 items-start">
                <Clock className="w-5 h-5 text-[#cb4b16] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">Our Rule of Thumb</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">If a task takes more than 4 hours a week, is highly repetitive, and relies on structured business files, it can likely be automated in a single Discovery Sprint.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {[
              {
                num: "01",
                category: "Service Businesses",
                title: "The 7pm inquiry gets a real answer.",
                desc: "An AI responder qualified on your price lists and service criteria, drafted in your specific communication voice, scheduling client booking calendar links directly."
              },
              {
                num: "02",
                category: "Operations & Billing",
                title: "Receivables chased without awkward emails.",
                desc: "Personalized follow-ups pulling invoice statuses from QuickBooks, addressing payment friction automatically, and logging responses without manual nagging."
              },
              {
                num: "03",
                category: "Agencies & Consultancies",
                title: "Custom proposal drafts ready in minutes.",
                desc: "Never start with a blank page. Transform raw client consult notes and audio transcripts into custom-fit statement-of-work templates aligned with your rates."
              },
              {
                num: "04",
                category: "Retail & E-commerce",
                title: "The same 40 questions, answered instantly.",
                desc: "Automatic tracking resolution, delivery updates, returns facilitation, and common product FAQs cleared from the support desk without human agents."
              },
              {
                num: "05",
                category: "Leadership & Reporting",
                title: "Weekly performance numbers, ready Monday.",
                desc: "Automatic reports that digest Stripe, CRM data, and payroll inputs into high-level strategic takeaways delivered directly to your inbox."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.08
                }}
                className="bg-white border border-slate-200/50 p-6 sm:p-8 rounded-3xl shadow-[0_4px_15px_rgba(15,23,42,0.01)] hover:border-[#cb4b16]/30 hover:shadow-md transition-all duration-500 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 text-xs font-mono font-bold text-slate-400 group-hover:bg-[#cb4b16]/5 group-hover:text-[#cb4b16] transition-colors duration-500">
                  {item.num}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 block mb-1">{item.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: THE ADVISORY CONTRAST DIVIDER (Dark Accent) */}
      <section className="relative w-full py-24 px-4 sm:px-6 md:px-24 z-10 bg-[#0F172A] text-white my-16 rounded-[2.5rem] sm:rounded-[3.5rem] max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#31e8fb] font-extrabold mb-6">Reality Check</p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-light leading-relaxed tracking-wide text-balance mb-10 font-sans">
            "Sixty-one percent of small businesses have tried AI. <br className="hidden sm:inline" />{" "}
            <span className="font-semibold text-white">Only one in four</span> saw a result they could point to."
          </h2>
          <div className="h-px w-20 bg-slate-700 mx-auto mb-10" />
          <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            The problem was never the technology. It was expensive advice from agencies with no skin in the game. That’s why we put ours in writing: a fixed price, one measurable target, and a refund if we miss.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW THE SPRINT WORKS */}
      <section id="sprint" className="relative w-full py-16 md:py-32 px-4 sm:px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel>Our Method</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 mt-4 leading-tight">
            How the Discovery Sprint™ works.
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light mt-4">
            Four simple phases backed end-to-end by our money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Trace the Process",
              desc: "We host a deep-dive call to trace your manual workflow, identifying exactly where data leaks or friction eats your time."
            },
            {
              step: "02",
              title: "Agree on One Metric",
              desc: "We state a single, measurable target in writing before building (e.g. reduction in lead time or dispute tracking)."
            },
            {
              step: "03",
              title: "Integrate & Build",
              desc: "Our engineering partners build custom integrations and AI agents to execute the workflow inside your existing apps."
            },
            {
              step: "04",
              title: "Prove or Refund",
              desc: "We track the live pilot results for 30 days. If the automation fails to meet our agreed-upon target, you get a full refund."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200/60 p-6 sm:p-8 rounded-3xl shadow-[0_4px_15px_rgba(15,23,42,0.01)] hover:border-[#cb4b16]/30 transition-all duration-500 relative"
            >
              <div className="text-4xl font-black font-serif italic text-slate-200 mb-6 group-hover:text-[#cb4b16]/20 transition-colors">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6: LEADERSHIP */}
      <section id="leadership" className="relative w-full py-16 md:py-32 px-4 sm:px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-slate-200/60">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel>Leadership Advisory</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 mt-4 leading-tight">
            Guidance before automation.
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light mt-4">
            Meet the extended technology leadership partners orchestrating your strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              role: "Your Extended CAIO",
              name: "Beta Mahatvaraj",
              credentials: "AI Strategy & Implementation",
              bio: "Helping businesses and founders understand AI opportunities, audit operations, and prioritize high-value automation sprints.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Beta.png",
              seed: "beta"
            },
            {
              role: "Your Extended CAIO",
              name: "Kharthickeyen KS",
              credentials: "AI Strategist & Coach",
              bio: "Bridging the gap between theory and execution, helping founders deploy AI guardrails and structured data compliance.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Karthikeyan.png",
              seed: "karthikeyan"
            },
            {
              role: "Your Extended CTO",
              name: "Muthuraman",
              credentials: "Systems Architecture",
              bio: "Expert in deep integrations, database schemas, and connecting legacy business platforms with modern API hubs.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Muthu.png",
              seed: "muthu"
            },
            {
              role: "Your Extended CMO",
              name: "Senthil Anand",
              credentials: "Growth & Digital Strategy",
              bio: "Deploying automated marketing responder systems, customer acquisition lead engines, and performance growth loops.",
              imagePath: "https://marketing.indiatx.com/wp-content/uploads/2026/05/Senthil.png",
              seed: "senthil"
            }
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200/60 rounded-[2rem] overflow-hidden shadow-[0_4px_15px_rgba(15,23,42,0.01)] hover:-translate-y-1.5 hover:border-[#cb4b16]/30 hover:shadow-md transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-50 border-b border-slate-100">
                  <img 
                    src={leader.imagePath} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${leader.name}&backgroundColor=f1f5f9&baseColor=14b8a6`;
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/50">
                    <div className="text-[#cb4b16] text-[8px] uppercase tracking-widest font-extrabold mb-0.5">{leader.role}</div>
                    <h3 className="text-base font-bold text-slate-900">{leader.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 text-[9px] uppercase tracking-wider mb-3 font-semibold italic">{leader.credentials}</p>
                  <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 7: CASE STUDIES */}
      <section id="case-studies" className="relative w-full py-16 md:py-32 px-4 sm:px-6 md:px-24 z-10 max-w-7xl mx-auto border-t border-slate-200/60 bg-white rounded-[3rem] my-12 shadow-[0_10px_40px_rgba(15,23,42,0.02)] border border-slate-200/50">
        <div className="mb-16">
          <SectionLabel className="text-brand-blue border-blue-200 bg-blue-50/50">Our Evidence</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-950 mt-4 leading-tight">What this looks like in practice.</h2>
          <p className="text-slate-500 text-base md:text-lg font-light mt-4 mb-12">
            Real pilots we built. Real metrics we committed to.
          </p>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between mb-12 gap-6">
            <CaseStudyTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} showContent={false} theme="light" />
            
            <div className="flex gap-3 self-end lg:self-auto">
              <button 
                onClick={() => scrollRef.current?.scrollBy({ left: -432, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-colors text-slate-600"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button 
                onClick={() => scrollRef.current?.scrollBy({ left: 432, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-colors text-slate-600"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-6 snap-x no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carouselStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
                className="min-w-[280px] xs:min-w-[320px] sm:min-w-[430px] snap-start"
              >
                <Link 
                  to={`/case-studies/${study.slug}`}
                  className="bg-slate-50 p-6 sm:p-8 rounded-[2rem] border border-slate-200/50 hover:border-[#cb4b16]/30 hover:bg-white hover:shadow-lg transition-all duration-500 h-[380px] flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-[#cb4b16] font-bold mb-4">{study.category}</div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-[#cb4b16] transition-colors leading-snug text-slate-900">{study.title}</h3>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-4 font-light">{study.outcome}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/40">
                    <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold group-hover:text-[#cb4b16] transition-colors">Read Case Study</span>
                    <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#cb4b16] group-hover:border-[#cb4b16] group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/case-studies"
              className="group inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-blue hover:text-slate-950 transition-all"
            >
              Explore all {CASE_STUDIES.length} case studies
              <div className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-400 transition-all">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="relative w-full py-16 md:py-32 px-4 sm:px-6 md:px-24 z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(203,75,22,0.04)_0%,transparent_70%)] pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-slate-900 leading-tight">
            Thirty minutes. No deck. <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-emerald-700">Just questions about your week.</span>
          </h2>
          
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We’ll study your bottlenecks, scope out what can be automated, and name the exact metric we’ll commit to in writing. If we don’t hit the target, you get a full refund.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-10">
            <a 
              href="https://calendly.com/orvelo-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-[#cb4b16] hover:bg-[#b33f11] text-white font-extrabold rounded-full transition-all flex items-center justify-center gap-3 shadow-md uppercase tracking-wider text-xs active:scale-95 text-center"
            >
              <Calendar className="w-4 h-4" />
              Book a Strategy Call
            </a>
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 border border-slate-200 font-extrabold rounded-full transition-all flex items-center justify-center gap-3 text-slate-700 text-xs uppercase tracking-wider text-center"
            >
              <MessageSquare className="w-4 h-4" />
              Start a Conversation
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};
