import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { 
  Sparkles, 
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
  Mail, 
  Layers, 
  FileText, 
  Star,
  Laptop,
  ExternalLink,
  Users,
  Target,
  Zap,
  Globe,
  Check,
  Send,
  UserCheck,
  TrendingUp,
  FileCheck2,
  Workflow
} from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/orvelo-info/30min";

export const WebinarProposals2026 = () => {
  // Video player state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Registration Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    designation: '',
    automationGoals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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
          subject: "New Webinar Registration: Automated Proposal & Lead Generation with AI",
          name: formData.name,
          email: formData.email,
          companyName: formData.companyName,
          websiteUrl: formData.websiteUrl,
          designation: formData.designation,
          automationGoals: formData.automationGoals,
          webinarDate: "Friday, November 27, 2026 | 9:30 AM CST",
          message: `Webinar Registration: Automated Proposal & Lead Generation with AI\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.companyName}\nWebsite: ${formData.websiteUrl}\nDesignation: ${formData.designation}\nAutomation Goals: ${formData.automationGoals || 'Not specified'}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(result.message || "Failed to submit registration. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError("Network error. Please try again or register directly via Calendly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const scrollToRegistration = () => {
    const el = document.getElementById('registration-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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
      title: "Business Owners & Founders",
      desc: "Build a more efficient, scalable sales process that identifies target accounts without adding heavy headcount.",
      icon: Briefcase,
      badge: "Founders & Owners"
    },
    {
      title: "Sales & Business Development Teams",
      desc: "Find relevant prospects, research accounts in minutes, and prepare structured proposals significantly faster.",
      icon: Target,
      badge: "Sales & BDR Teams"
    },
    {
      title: "Manufacturers & Industrial Suppliers",
      desc: "Identify potential engineering and procurement buyers across vertical markets and generate technical RFQ proposals.",
      icon: Building2,
      badge: "Industrial & Manufacturing"
    },
    {
      title: "B2B Service Providers",
      desc: "Create bespoke, personalized proposals for prospective clients using standardized rate cards and project templates.",
      icon: FileText,
      badge: "B2B Service Firms"
    },
    {
      title: "Marketing Professionals",
      desc: "Build smarter lead generation, ICP enrichment, and hyper-personalized account-based outreach campaigns.",
      icon: Zap,
      badge: "Marketing Leaders"
    }
  ];

  const curriculum = [
    {
      number: "01",
      title: "Find Potential Customers Using AI",
      desc: "Learn how to use AI to research industries, identify target companies, and build relevant prospect lists based on your ideal customer profile (ICP).",
      icon: Search,
      tag: "Target Prospect Discovery"
    },
    {
      number: "02",
      title: "Automate Prospect Research",
      desc: "Discover how AI can help research potential customers, understand their business challenges, identify relevant decision-makers, and uncover sales triggers.",
      icon: UserCheck,
      tag: "Account Intelligence"
    },
    {
      number: "03",
      title: "Personalize Sales Outreach With AI",
      desc: "Learn how to create relevant, personalized sales emails and LinkedIn messages based on a prospect's actual business needs, rather than relying on tired templates.",
      icon: Mail,
      tag: "Contextual Outreach"
    },
    {
      number: "04",
      title: "Automate Lead Generation and Follow-Ups",
      desc: "Explore how AI-powered workflows can help manage prospecting, schedule follow-ups, track responses, and notify your sales team when human action is required.",
      icon: Bot,
      tag: "Follow-Up Sequences"
    },
    {
      number: "05",
      title: "Create Professional Business Proposals Using AI",
      desc: "Discover how to turn customer requirements, meeting notes, product information, and pricing details into structured, personalized business proposals in minutes.",
      icon: FileCheck2,
      tag: "Proposal Generation"
    },
    {
      number: "06",
      title: "Build Your Own AI-Powered Sales Workflow",
      desc: "Understand how to connect lead generation, prospect research, outreach, and proposal creation into a repeatable, automated sales process for your business.",
      icon: Workflow,
      tag: "End-to-End Architecture"
    }
  ];

  const testimonials = [
    {
      quote: "Preparing industrial equipment proposals used to take our sales engineers 4-6 hours per RFQ. Muthu's AI workflow templates reduced that to 20 minutes while dramatically improving technical clarity and scope detail.",
      name: "Greg Thornton",
      designation: "VP of Sales & Estimating",
      company: "Midwest Machinery Systems",
      badge: "Verified Business Participant"
    },
    {
      quote: "The prospect research module alone saved our BDR team hundreds of hours. Instead of generic spam emails, our outreach cites specific initiatives from the prospect's public disclosures. Reply rates jumped 3x.",
      name: "Sonia Patel",
      designation: "Head of Business Development",
      company: "Envision Logistics Group",
      badge: "Verified Business Participant"
    },
    {
      quote: "Muthu demonstrates technology with the clarity that only someone with 20+ years of engineering experience can. Zero fluff. He showed how to take rough Zoom notes and turn them into a signed statement of work.",
      name: "Daniel Reyes",
      designation: "Managing Partner",
      company: "Apex Advisory & Tech Partners",
      badge: "Verified Business Participant"
    }
  ];

  const faqs = [
    {
      q: "Do I need technical or programming knowledge?",
      a: "No. This webinar is designed for business owners, sales professionals, and non-technical teams. Every workflow is demonstrated using accessible AI prompts, everyday tools, and no-code automation platforms."
    },
    {
      q: "Can AI help me find new customers for my manufacturing business?",
      a: "Yes. AI can assist with industry research, company identification, prospect qualification, and personalized outreach based on your target market, facility specifications, and target buyer personas."
    },
    {
      q: "Can AI create proposals using my existing company information?",
      a: "Yes. AI can use your approved company information, service offerings, product details, pricing rules, and proposal templates to prepare customized proposal drafts that stay 100% compliant with your brand guidelines."
    },
    {
      q: "Can I automate email and LinkedIn outreach using AI?",
      a: "AI can help research prospects, personalize messages, and manage outreach workflows through compatible tools. Implementation must follow platform policies and applicable communication laws, ensuring respect and authenticity."
    },
    {
      q: "Will this webinar include practical demonstrations?",
      a: "Yes. The session will focus on practical lead generation and proposal automation workflows that businesses can explore and implement immediately, followed by an interactive live Q&A session with Muthu."
    },
    {
      q: "Is this webinar suitable for small businesses?",
      a: "Absolutely. The webinar is specifically designed to help small and mid-sized businesses adopt AI without requiring large technical teams or six-figure enterprise software licenses."
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Automated Proposal & Lead Generation with AI | Live Webinar | Orvelo" 
        description="Discover how AI can help your business identify potential customers, automate sales outreach, and prepare personalized business proposals. Live webinar on Friday, November 27, 2026 at 9:30 AM CST."
      />

      {/* Hero Badge Pill */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-white/10 text-[#cb4b16] font-mono text-xs uppercase tracking-widest font-extrabold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#cb4b16] animate-ping" />
          <span>Live Online Webinar • Friday, November 27, 2026</span>
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
          src="/assets/aistudio/AI-Powered_Proposal___Lead_Generation_ecb14d61.png" 
          alt="Automated Proposal & Lead Generation with AI - Live Webinar with Muthu" 
          className="w-full h-auto object-cover max-h-[580px] select-none"
        />
        
        {/* Subtle gradient overlay at bottom for smooth contrast */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Floating Quick Action overlay on desktop banner */}
        <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 z-10">
          <button 
            onClick={scrollToRegistration}
            className="px-6 py-3 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 inline-flex items-center gap-2"
          >
            <span>Register Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={scrollToVideo}
            className="px-6 py-3 bg-black/80 hover:bg-black text-white border border-white/20 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 inline-flex items-center gap-2 backdrop-blur-md"
          >
            <Play className="w-3.5 h-3.5 text-[#cb4b16] fill-[#cb4b16]" />
            <span>Watch Demonstration</span>
          </button>
        </div>
      </motion.div>

      {/* Hero Content Block */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6 uppercase">
          Automated Proposal &amp; <br className="hidden sm:inline" />
          <span className="text-[#cb4b16]">Lead Generation with AI</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 tracking-tight mb-4">
          Find New Customers. Create Proposals Faster. Win More Opportunities.
        </p>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Discover how AI can help your business identify potential customers, automate sales outreach, and prepare personalized business proposals.
        </p>

        {/* Meta Schedule Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Date</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Nov 27, 2026</div>
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
          <button 
            onClick={scrollToRegistration}
            className="w-full sm:w-auto px-10 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#cb4b16]/25 active:scale-95 inline-flex items-center justify-center gap-3"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            onClick={scrollToVideo}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 inline-flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 text-[#cb4b16] fill-[#cb4b16]" />
            <span>Watch Demonstration</span>
          </button>
        </div>
      </div>

      {/* SECTION 2: Problem & Solution Card */}
      <section className="mb-20">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#cb4b16]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <SectionLabel>Sales Productivity</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase text-white leading-tight">
              What If Your Sales Team Could <br />
              <span className="text-[#cb4b16]">Spend More Time Selling?</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              Finding potential customers, researching companies, writing personalized emails, and preparing proposals can take hours of your sales team&apos;s time.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
              What if AI could help handle much of this groundwork? In this practical webinar, learn how to use AI to simplify lead generation, personalize sales outreach, and create professional business proposals in less time.
            </p>

            <div className="inline-block p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
                &ldquo;Less time on repetitive tasks. More time on customer conversations.&rdquo;
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 text-left max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-red-950/25 border border-red-500/20 text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>The Manual Sales Bottleneck</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Hours wasted manually searching LinkedIn and Google for target company contacts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Generic copy-paste email templates that get ignored or flagged as spam.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Days spent formatting bespoke proposals from scratch for each lead.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-950/25 border border-emerald-500/20 text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>The AI-Automated Pipeline</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>AI discovers qualified company accounts matching your exact ICP in seconds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Hyper-personalized email and LinkedIn messages tailored to company news and pain points.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Automated proposal drafts generated from meeting notes and product pricing logic.</span>
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
            This webinar is designed for businesses looking to improve their sales productivity and generate new business opportunities.
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
            Six practical, step-by-step capabilities to build a modern, AI-powered pipeline from account discovery to signed deal.
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

        <div className="mt-10 text-center">
          <div className="inline-block p-4 px-6 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold">
            ✨ See practical AI workflows that your business can start implementing immediately.
          </div>
        </div>
      </section>

      {/* SECTION 5: See AI-Powered Sales Automation in Action */}
      <section id="video-demo-section" className="mb-20 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white shadow-2xl border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel>Live Demonstration</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              See AI-Powered Sales Automation in Action
            </h2>
            <p className="text-lg font-bold text-[#cb4b16] mb-3">
              From Finding a Prospect to Preparing a Proposal
            </p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Watch how an AI-powered sales workflow identifies potential clients, enriches account context, and compiles personalized proposals seamlessly.
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
                <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/16] shadow-inner flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src="/assets/aistudio/Webianr_fff21c3e.mp4"
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={toggleVideoPlayback}
                  />

                  {/* Play Overlay if paused */}
                  {!isPlaying && (
                    <div 
                      onClick={toggleVideoPlayback}
                      className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center cursor-pointer group"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#cb4b16] group-hover:bg-[#b33f11] text-white flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                        <Play className="w-7 h-7 fill-white translate-x-0.5" />
                      </div>
                      <div className="mt-4 text-xs font-bold uppercase tracking-wider text-white px-4 py-1.5 rounded-full bg-black/60 border border-white/10">
                        Click to Play Demo
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
                        Muthu • Demonstration
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

            {/* Right: Step-by-Step Breakdown Cards */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#cb4b16] mb-1">
                  Step 01 • Prospect Identification
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Identify a potential customer
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  AI scans target vertical registries and market signals to extract qualified target companies matching your ideal customer profile.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Step 02 • Deep Account Research
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Research their company and requirements
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Autonomous agents digest public company filings, website updates, and news triggers to identify relevant decision-makers and current pain points.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Step 03 • Hyper-Personalized Outreach
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Prepare personalized outreach
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Craft compelling, 1-to-1 emails and LinkedIn touchpoints speaking directly to the buyer&apos;s specific challenges rather than generic boilerplate.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Step 04 • Smart Nurture &amp; Follow-Up
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Follow up with interested prospects
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Automate context-aware follow-ups, answer initial questions, and notify your sales team as soon as positive engagement is detected.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-1">
                  Step 05 • Instant Custom Proposals
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Create a customized business proposal for review
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Turn recorded discovery call transcripts and pricing rules into a beautifully structured proposal ready for executive review.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-center">
                <p className="text-xs sm:text-sm font-black text-white">
                  &ldquo;Let AI handle the groundwork. Let your sales team build the relationship.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Meet Your Webinar Host */}
      <section className="mb-20">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-white border border-slate-200/80 shadow-xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Host Avatar & Details */}
            <div className="md:col-span-5 text-center md:text-left">
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden bg-slate-950 border-4 border-white shadow-2xl mx-auto md:mx-0 group">
                  <img 
                    src="/assets/aistudio/AI-Powered_Proposal___Lead_Generation_ecb14d61.png" 
                    alt="Muthu - Technology Development & AI Solutions"
                    className="w-full h-full object-cover object-[55%_35%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-3.5 py-1 rounded-full bg-[#cb4b16] text-white font-mono text-[10px] uppercase font-black tracking-wider shadow-lg border-2 border-white">
                  Webinar Host
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-1">
                Muthu
              </h3>
              <p className="text-xs font-bold text-[#cb4b16] uppercase tracking-wider mb-2">
                Technology Development &amp; AI Solutions
              </p>
              <p className="text-xs font-mono text-slate-500">
                20+ Years of Experience
              </p>
            </div>

            {/* Host Bio */}
            <div className="md:col-span-7 space-y-4">
              <SectionLabel>Meet Your Webinar Host</SectionLabel>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Practical engineering for business revenue.
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With over 20 years of experience in technology development, Muthu brings a practical understanding of how technology can solve business challenges and improve organizational efficiency.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In this webinar, he will demonstrate how businesses can leverage AI to automate repetitive sales activities, identify new opportunities, and accelerate proposal creation.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-bold text-slate-800">
                  His core focus: <span className="text-[#cb4b16] font-black uppercase">Making technology accessible, practical, and relevant to everyday business needs.</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ 20+ Years Tech Engineering
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ B2B Sales Automation
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ Live Interactive Q&amp;A
                </span>
              </div>
            </div>
          </div>
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
            Practical AI Learning. Real Business Applications.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our webinar series helps business owners understand how AI can be applied to everyday business challenges through practical examples and demonstrations.
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
            Everything you need to know about AI-powered lead generation, proposals, and session details.
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

      {/* SECTION 9: Register for the Webinar */}
      <section id="registration-section" className="mb-24 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-white/10 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cb4b16]/20 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel>Registration</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white mb-3">
                Register for the Webinar
              </h2>
              <p className="text-lg font-bold text-[#cb4b16] mb-4">
                Make AI Part of Your Sales Team in 2027.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Discover how AI can help you find new customers, automate repetitive sales tasks, and prepare better proposals faster. Free live access with practical workflows and live interactive Q&amp;A.
              </p>

              {/* Event snapshot card */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#cb4b16]" />
                  <strong className="text-white">Friday, November 27, 2026</strong>
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

            {/* Registration Form / Success State */}
            {isSubmitted ? (
              <div className="max-w-xl mx-auto p-8 rounded-3xl bg-white/10 border border-white/20 text-center backdrop-blur-md">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  You&apos;re Registered!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  Thank you for registering for <strong>Automated Proposal &amp; Lead Generation with AI</strong>. We have sent the confirmation and calendar credentials to your email.
                </p>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300 mb-6">
                  Friday, November 27, 2026 • 9:30 AM CST • Live Online
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Add to Calendar / Book Discussion</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Email *
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Name *
                      </label>
                      <input 
                        type="text" 
                        name="companyName" 
                        required 
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Acme Global Solutions"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Website
                      </label>
                      <input 
                        type="text" 
                        name="websiteUrl" 
                        value={formData.websiteUrl}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Role / Designation
                    </label>
                    <input 
                      type="text" 
                      name="designation" 
                      value={formData.designation}
                      onChange={handleInputChange}
                      placeholder="Founder, VP Sales, Business Development Director, etc."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      What would you like to automate in your sales process? (Optional)
                    </label>
                    <textarea 
                      name="automationGoals" 
                      rows={2}
                      value={formData.automationGoals}
                      onChange={handleInputChange}
                      placeholder="e.g. Account research, proposal drafting, RFP response, follow-up sequencing..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                      {submitError}
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-10 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#cb4b16]/30 active:scale-95 inline-flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Registering...</span>
                      ) : (
                        <>
                          <span>Register Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-center sm:text-right">
                      <span className="text-[11px] text-slate-400 block">Prefer to register through Calendly?</span>
                      <a 
                        href={CALENDLY_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-[#cb4b16] hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <span>Register via Calendly</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 10: Final CTA Banner */}
      <section className="mb-12">
        <div className="p-8 sm:p-14 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white text-center shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#cb4b16]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              Smarter Prospecting. <br className="hidden sm:inline" />
              <span className="text-[#cb4b16]">Faster Proposals. Better Sales.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-4">
              Stop letting manual administrative work steal your sales team&apos;s selling hours.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Discover how AI can help you identify target accounts, personalize outreach, and generate custom business proposals in a fraction of the time.
            </p>

            <div className="mb-8">
              <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white font-mono text-xs uppercase font-extrabold tracking-wider border border-white/10">
                November 27, 2026 | 9:30 AM CST
              </span>
            </div>

            <button 
              onClick={scrollToRegistration}
              className="px-10 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#cb4b16]/30 active:scale-95 inline-flex items-center gap-3"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

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
