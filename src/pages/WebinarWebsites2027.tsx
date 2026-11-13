import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Briefcase, 
  ChevronDown, 
  Building2, 
  Search, 
  Bot, 
  Layers, 
  FileText, 
  Star,
  Laptop,
  ExternalLink,
  Users,
  Target,
  Zap,
  Globe
} from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/mail-orvelo/generate-leads-website-2027";

export const WebinarWebsites2027 = () => {
  // Video player state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setVideoProgress(progress || 0);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const scrollToVideo = () => {
    const el = document.getElementById('video-demo-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const targetAudience = [
    {
      title: "Small & Mid-Sized Business Owners",
      desc: "Transform your website from a passive digital business card into an active, 24/7 lead capture and qualification engine.",
      icon: Briefcase,
      badge: "SMB Founders"
    },
    {
      title: "Manufacturing & Industrial Leaders",
      desc: "Capture high-value RFQs, engineering drawing uploads, and technical specification inquiries with zero drop-off.",
      icon: Building2,
      badge: "Industrial & Manufacturing"
    },
    {
      title: "B2B Service Providers & Distributors",
      desc: "Enable instant qualification and follow-up for complex catalog inquiries, distributor applications, and wholesale requests.",
      icon: Layers,
      badge: "B2B & Distribution"
    },
    {
      title: "Marketing & Sales Leaders",
      desc: "Shorten sales cycles by automatically qualifying inbound visitors before they even book a call with your sales reps.",
      icon: Target,
      badge: "Marketing & Sales"
    },
    {
      title: "Business Development Professionals",
      desc: "Never let another warm lead go cold over the weekend. Put automated AI conversational follow-ups to work immediately.",
      icon: Zap,
      badge: "Business Development"
    },
    {
      title: "Businesses Planning a Website Redesign",
      desc: "Avoid building a legacy 2018-style brochure website. Learn the essential architecture of high-converting 2027 websites.",
      icon: Globe,
      badge: "Website Redesign"
    }
  ];

  const curriculum = [
    {
      number: "01",
      title: "Build a Website That Generates Leads",
      desc: "Understand what makes a modern business website effective at turning visitors into potential customers with conversion-focused layouts, clear CTAs, and frictionless user flows.",
      icon: Target,
      tag: "Lead Generation Architecture"
    },
    {
      number: "02",
      title: "Get Discovered on Google and AI Search Engines",
      desc: "Learn how to improve your website's discoverability on Google, ChatGPT, Perplexity, and other AI-powered answer engines using Brand Citation Optimization (BCO) and structured schemas.",
      icon: Search,
      tag: "AI Search & SEO"
    },
    {
      number: "03",
      title: "Capture Leads Across 8+ Touchpoints",
      desc: "Explore how contact forms, instant quotation requests, spec sheet downloads, interactive calculators, chatbots, and click-to-call interactions convert passive traffic into qualified contacts.",
      icon: Layers,
      tag: "Omnichannel Lead Capture"
    },
    {
      number: "04",
      title: "Automate Lead Follow-Ups With AI",
      desc: "See how custom AI agents respond to new enquiries within 60 seconds, ask intelligent qualifying questions, send personalised follow-up emails, and notify your sales team instantly.",
      icon: Bot,
      tag: "Autonomous Follow-Up"
    },
    {
      number: "05",
      title: "Manage All Your Website Leads in One Place",
      desc: "Discover how a connected CRM and unified dashboard helps your team track enquiries, conversation histories, customer intent, and follow-up timelines without manual data entry.",
      icon: Briefcase,
      tag: "Connected CRM & Pipelines"
    },
    {
      number: "06",
      title: "Automate Quotation Generation",
      desc: "Learn how AI-assisted workflows can collect exact customer requirements, parse project specs, and prepare draft quotations using your proprietary product catalogs and pricing logic.",
      icon: FileText,
      tag: "Instant AI Quotations"
    }
  ];

  const testimonials = [
    {
      quote: "Our manufacturing company used to wait 24 to 48 hours to reply to RFQs. After implementing the 2027 website framework Anand & Kevin shared, our AI agent responds within 2 minutes, collects CAD specs, and books qualified calls on autopilot.",
      name: "Arthur Pendelton",
      designation: "Managing Director",
      company: "Vanguard Precision Machining",
      badge: "Verified Business Participant"
    },
    {
      quote: "Most webinars are just vague theory. Anand and Kevin actually opened up a live website, submitted a contact form, and showed the AI agent qualifying the budget and syncing to the CRM live on screen. Brilliant session.",
      name: "Rachel Chen",
      designation: "Head of Digital Growth",
      company: "Apex Distribution Global",
      badge: "Verified Business Participant"
    },
    {
      quote: "We were just about to spend $25k on a traditional WordPress redesign that would have looked pretty but generated zero leads. This session completely rewired how we think about our 2027 digital front door.",
      name: "Siddharth Rao",
      designation: "Founder & CEO",
      company: "Novus Industrial Systems",
      badge: "Verified Business Participant"
    }
  ];

  const faqs = [
    {
      q: "Do I need technical or programming experience?",
      a: "No technical or programming background is required. This session is specifically designed for business owners, managing directors, marketing executives, and sales leaders who want practical business outcomes rather than complex coding tutorials."
    },
    {
      q: "How do AI lead follow-up agents work on a business website?",
      a: "When a visitor submits an enquiry or engages with an interactive widget, an AI agent instantly evaluates their input against your business rules. It sends an immediate, context-aware reply, asks qualifying questions (e.g. project timeline, order quantity, material specifications), and flags high-priority deals for your sales team."
    },
    {
      q: "Can these AI workflows connect with our existing CRM or email system?",
      a: "Yes. Modern AI agents connect seamlessly with HubSpot, Salesforce, Zoho, Google Workspace, Microsoft Outlook, and standard webhooks so your sales reps receive all enriched lead details right in their existing workflow."
    },
    {
      q: "What if our current website is already built on WordPress, Shopify, or Webflow?",
      a: "The principles and automation layers demonstrated in this webinar can either be retrofitted into your existing website architecture or deployed as a clean, high-performance modernization sprint."
    },
    {
      q: "Will there be a live demonstration and recording available?",
      a: "Yes. Anand and Kevin will run a live, end-to-end demonstration showing an incoming website lead being qualified and followed up in real-time, followed by an open Q&A session. Registered attendees will also receive access to the session summary and resource checklist."
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Make Your Website Generate Leads for You in 2027 | Live Webinar | Orvelo" 
        description="Learn how to turn your business website into a 24/7 lead generation engine with built-in AI lead follow-up agents. Live webinar on Friday, November 20, 2026 at 9:30 AM CST."
      />

      {/* Hero Badge Pill */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-white/10 text-[#cb4b16] font-mono text-xs uppercase tracking-widest font-extrabold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#cb4b16] animate-ping" />
          <span>Live Online Webinar • Friday, November 20, 2026</span>
        </span>
      </div>

      {/* Hero Section Banner Image */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl mb-12 bg-slate-900 group"
      >
        <img 
          src="/assets/aistudio/Polished_Webinar_Banner_with_Website_Preview_32dcdea2.png" 
          alt="Make Your Website Generate Leads for You in 2027 - Live Webinar with Anand & Kevin" 
          className="w-full h-auto object-cover max-h-[580px] select-none"
        />
        
        {/* Subtle gradient overlay at bottom for smooth contrast */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Floating Quick Action overlay on desktop banner */}
        <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 z-10">
          <a 
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 inline-flex items-center gap-2"
          >
            <span>Register Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button 
            onClick={scrollToVideo}
            className="px-6 py-3 bg-black/80 hover:bg-black text-white border border-white/20 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 inline-flex items-center gap-2 backdrop-blur-md"
          >
            <Play className="w-3.5 h-3.5 text-[#cb4b16] fill-[#cb4b16]" />
            <span>Watch Intro Video</span>
          </button>
        </div>
      </motion.div>

      {/* Hero Content Block */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6 uppercase">
          Make Your Website Generate <br className="hidden sm:inline" />
          <span className="text-[#cb4b16]">Leads for You in 2027</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 tracking-tight mb-4">
          A Modern Business Website With Built-In AI Lead Follow-Up Agents
        </p>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Your website shouldn&apos;t just showcase your business. It should help attract customers, capture enquiries, and follow up with leads automatically. Discover how to turn your website into a smarter lead generation and sales tool using AI.
        </p>

        {/* Meta Schedule Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Date</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Nov 20, 2026</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Time</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">9:30 AM CST</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Platform</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Live Online</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Access</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-600">100% Free</div>
            </div>
          </div>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#cb4b16]/25 active:scale-95 inline-flex items-center justify-center gap-3"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button 
            onClick={scrollToVideo}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 inline-flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 text-[#cb4b16] fill-[#cb4b16]" />
            <span>Watch Intro Video</span>
          </button>
        </div>
      </div>

      {/* SECTION 2: Problem & Solution Card */}
      <section className="mb-20">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#cb4b16]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <SectionLabel>The 2027 Shift</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase text-white leading-tight">
              Is Your Website Generating <br />
              <span className="text-[#cb4b16]">Enough Leads for Your Business?</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              You&apos;ve invested in a website. But is it really working for your business?
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
              AI has made it possible for small businesses to build smarter websites that do much more than display static information. Join us for a practical webinar to learn how your website can attract potential customers, capture enquiries, and automate lead follow-ups.
            </p>

            <div className="inline-block p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
                &ldquo;A better website. More opportunities. Less manual work.&rdquo;
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 text-left max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-red-950/25 border border-red-500/20 text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>The Legacy Website Problem</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Static brochure with buried contact forms and slow 24-48 hour reply times.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Invisible to ChatGPT, Perplexity, and modern AI answer engines.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Visitors leave without taking action, and sales teams miss weekend prospects.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-950/25 border border-emerald-500/20 text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>The 2027 AI-Powered Website</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Instant contextual email response and qualification within 60 seconds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>8+ capture touchpoints with automatic quotation drafting and CRM sync.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Optimized for Google Discover, GEO, and conversational search citations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who Is This Webinar For? */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel>Target Audience</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            Who Is This Webinar For?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Designed for forward-thinking business owners and growth leaders who want their website to actively generate revenue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((audience, idx) => {
            const Icon = audience.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {audience.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    {audience.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {audience.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>No technical or programming experience required</span>
          </span>
        </div>
      </section>

      {/* SECTION 4: What Will You Learn? */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>Webinar Curriculum</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            What Will You Learn?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Six practical modules designed to turn your website into a high-performance lead generator and sales engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {curriculum.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-[#cb4b16]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-[#cb4b16] font-mono text-lg font-black flex items-center justify-center shadow-md">
                      {item.number}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: See AI-Powered Lead Follow-Ups in Action (Video Demo) */}
      <section id="video-demo-section" className="mb-20 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white shadow-2xl border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel>Live Demonstration</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              See AI-Powered Lead Follow-Ups in Action
            </h2>
            <p className="text-lg font-bold text-[#cb4b16] mb-3">
              What happens after a potential customer submits an enquiry on your website?
            </p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Watch a practical demonstration of how an AI-powered website captures, qualifies, and automates next steps seamlessly.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            {/* Left: Video Player Phone/Applet Wrapper */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs rounded-[2.5rem] p-3 bg-gradient-to-b from-slate-800 to-slate-950 border-4 border-slate-700 shadow-2xl shadow-black/80">
                {/* Speaker pill notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/60 rounded-full z-20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-800 mr-2" />
                  <div className="w-8 h-1.5 bg-slate-800 rounded-full" />
                </div>

                {/* Video Container */}
                <div className="relative rounded-[2rem] overflow-hidden bg-slate-950 aspect-[9/16] shadow-inner">
                  <video
                    ref={videoRef}
                    src="/assets/aistudio/webinar_website_web.mp4"
                    poster="/assets/aistudio/webinar_website_poster.jpg"
                    playsInline
                    preload="auto"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full h-full object-cover cursor-pointer block"
                    onClick={toggleVideoPlayback}
                  />

                  {/* Play Overlay if paused */}
                  {!isPlaying && (
                    <div 
                      onClick={toggleVideoPlayback}
                      className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center cursor-pointer group"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#cb4b16] group-hover:bg-[#b33f11] text-white flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </div>
                      <div className="mt-4 text-xs font-bold uppercase tracking-wider text-white px-4 py-1.5 rounded-full bg-black/70 border border-white/15">
                        Click to Play Intro Video
                      </div>
                    </div>
                  )}

                  {/* Bottom Controls Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-2 z-20">
                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#cb4b16] h-full transition-all duration-100"
                        style={{ width: `${videoProgress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-white text-xs pt-1">
                      <button 
                        onClick={toggleVideoPlayback}
                        className="p-1 hover:text-[#cb4b16] transition-colors"
                        title={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                      </button>

                      <span className="text-[10px] font-mono text-slate-300">
                        Intro Video
                      </span>

                      <div className="flex items-center gap-2">
                        <button 
                          onClick={toggleMute}
                          className="p-1 hover:text-[#cb4b16] transition-colors"
                          title={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <button 
                          onClick={handleFullscreen}
                          className="p-1 hover:text-[#cb4b16] transition-colors"
                          title="Fullscreen"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Step-by-Step Workflow Cards */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#cb4b16] mb-1">
                  Step 01 • Immediate Capture
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Capture a new customer enquiry
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The visitor submits an enquiry via contact form, quick RFQ modal, or brochure gate. The data is parsed instantaneously with full metadata.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Step 02 • Instant Response
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Send an instant email response within 60 seconds
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No generic canned auto-responder. An AI agent acknowledges their specific request with context-aware answers and relevant technical attachments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Step 03 • Autonomous Qualification
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Ask relevant qualifying questions &amp; follow up automatically
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The agent checks budget, timeline, technical tolerances, or decision-maker status. If they don&apos;t reply, a respectful automated follow-up goes out on day 2.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Step 04 • Sales Handoff
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Notify your sales team when the lead needs human attention
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  As soon as the prospect confirms interest or requests a call, your team receives a detailed briefing with the complete conversation thread and calendar link.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-center">
                <p className="text-sm font-black text-white">
                  &ldquo;Your website starts the conversation. Your sales team takes it forward.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Meet Your Webinar Hosts */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel>Webinar Instructors</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            Meet Your Webinar Hosts
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Decades of web engineering experience paired with deep AI automation expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {/* Host 1: Anand */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center font-black text-2xl border-2 border-[#cb4b16] shadow-md">
                  A
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Anand
                  </h3>
                  <div className="text-xs font-bold text-[#cb4b16] uppercase tracking-wider">
                    Website Development &amp; Digital Strategy
                  </div>
                  <div className="text-xs font-mono text-slate-500 mt-0.5">
                    18+ Years of Experience
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Anand brings over 18 years of experience in building business websites and helping companies establish a stronger digital presence.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                He will share practical insights into building modern, lead generation-focused business websites and what businesses should consider when upgrading their websites for 2027.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                ✓ 18+ Years Web Architecture
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                ✓ Conversion Strategy
              </span>
            </div>
          </div>

          {/* Host 2: Kevin */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0F172A] text-white flex items-center justify-center font-black text-2xl border-2 border-cyan-500 shadow-md">
                  K
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Kevin
                  </h3>
                  <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                    AI Automation Specialist
                  </div>
                  <div className="text-xs font-mono text-slate-500 mt-0.5">
                    3+ Years of Experience
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Kevin has over three years of experience developing AI-powered automation solutions and custom conversational workflows for high-growth businesses.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                He will demonstrate how AI agents can automate lead responses, follow-ups, enquiry qualification, and repetitive sales processes seamlessly.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                ✓ Autonomous AI Agents
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                ✓ CRM &amp; Workflow Integration
              </span>
            </div>
          </div>
        </div>

        {/* Synergy Note Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white max-w-5xl mx-auto text-center border border-white/10">
          <p className="text-sm sm:text-base font-semibold text-slate-200">
            Together, Anand and Kevin will show you how modern website development and practical AI automation can support business growth.
          </p>
        </div>
      </section>

      {/* SECTION 7: What Our Learners Say */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>Verified Reviews</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            What Our Learners Say
          </h2>
          <p className="text-lg font-bold text-[#cb4b16] mb-2">
            Practical AI Learning for Real Business Challenges
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Discover how business leaders are using AI to upgrade their digital presence and eliminate manual follow-up overhead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-900">{item.name}</div>
                <div className="text-xs text-slate-500">{item.designation}</div>
                <div className="text-xs font-semibold text-[#cb4b16] mt-0.5">{item.company}</div>
                <div className="mt-2 text-[10px] uppercase font-mono text-emerald-600 font-bold">
                  ✓ {item.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: Frequently Asked Questions */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel>Got Questions?</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Everything you need to know about the session, AI lead agents, and what to expect.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="text-[#cb4b16] font-mono text-xs font-black">0{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#cb4b16]' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: Reserve Your Spot / Registration */}
      <section id="registration-section" className="mb-24 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-white/10 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cb4b16]/20 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel>Registration</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white mb-3">
                Reserve Your Spot
              </h2>
              <p className="text-lg font-bold text-[#cb4b16] mb-4">
                Start Generating More Qualified Leads from Your Website
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Join us for a practical walkthrough on building 2027-ready business websites with built-in AI lead follow-up agents. Free live access with full demonstration and interactive Q&amp;A.
              </p>

              {/* Event snapshot card */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#cb4b16]" />
                  <strong className="text-white">Friday, November 20, 2026</strong>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#cb4b16]" />
                  <strong className="text-white">9:30 AM CST</strong>
                </span>
                <span className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#cb4b16]" />
                  <strong className="text-white">Live Online Webinar</strong>
                </span>
              </div>
            </div>

            {/* Calendly Registration Card */}
            <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-[#cb4b16]/20 border border-[#cb4b16]/30 text-[#cb4b16] flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
                Register Instantly via Calendly
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed max-w-md mx-auto">
                Reserve your spot on Calendly to receive your automatic calendar invite with direct joining credentials.
              </p>

              <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Free Live Online Access</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant Calendar Invite (Google, Outlook, Apple)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live Q&amp;A directly with Anand &amp; Kevin</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No technical or programming experience required</span>
                </div>
              </div>

              <a 
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-black text-xs uppercase tracking-wider transition-all shadow-2xl shadow-[#cb4b16]/40 active:scale-95 group"
              >
                <span>Register Now on Calendly</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="mt-5 text-[11px] text-slate-400 font-mono flex items-center justify-center gap-1.5">
                <ExternalLink className="w-3 h-3 text-slate-400" />
                <span>Opens registration at calendly.com/mail-orvelo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Final CTA Banner */}
      <section className="mb-12">
        <div className="p-8 sm:p-14 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white text-center shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#cb4b16]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              Built for your business. <br className="hidden sm:inline" />
              <span className="text-[#cb4b16]">Ready for 2027.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-4">
              Your website shouldn&apos;t just be a digital brochure.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Discover how AI-powered lead capture, automated qualification, and connected CRMs can turn your website into an active sales machine.
            </p>

            <div className="mb-8">
              <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white font-mono text-xs uppercase font-extrabold tracking-wider border border-white/10">
                November 20, 2026 | 9:30 AM CST
              </span>
            </div>

            <a 
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#cb4b16]/30 active:scale-95 inline-flex items-center gap-3"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <span className="font-mono tracking-wider font-semibold text-slate-400">
                Orvelo.ai | Engineered for Orbital Velocity
              </span>
              <span className="flex items-center gap-2">
                <span>Free Registration • Live Interactive Q&amp;A</span>
                <span className="text-slate-600">•</span>
                <Link to="/privacy" className="text-slate-400 hover:text-white underline">
                  Privacy Policy
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
