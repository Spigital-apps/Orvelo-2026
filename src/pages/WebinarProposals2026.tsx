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
  FileText,
  Star,
  Laptop,
  ExternalLink,
  Users,
  Target,
  Check,
  FileCheck2,
  Workflow,
  ClipboardList,
  Wand2,
  ShieldCheck,
  SlidersHorizontal,
  Layers,
  MessageSquareQuote
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
    designation: '',
    websiteUrl: '',
    proposalTypes: ''
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
          subject: "New Workshop Registration: Creating Winning Business Proposals with Claude AI",
          name: formData.name,
          email: formData.email,
          companyName: formData.companyName,
          designation: formData.designation,
          websiteUrl: formData.websiteUrl,
          proposalTypes: formData.proposalTypes,
          workshopDate: "Friday, November 27, 2026 | 9:30 AM CST",
          message: `Workshop Registration: Creating Winning Business Proposals with Claude AI\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.companyName}\nRole / Designation: ${formData.designation || 'Not specified'}\nWebsite: ${formData.websiteUrl || 'Not specified'}\nProposal Types: ${formData.proposalTypes || 'Not specified'}`
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
      desc: "Create compelling proposals without spending hours writing them.",
      icon: Briefcase,
      badge: "Founders & Owners"
    },
    {
      title: "Sales & Business Development Teams",
      desc: "Respond to customer requirements and prepare personalized proposals faster.",
      icon: Target,
      badge: "Sales & BDR Teams"
    },
    {
      title: "Manufacturers & Industrial Suppliers",
      desc: "Create structured technical and commercial proposals.",
      icon: Building2,
      badge: "Industrial & Manufacturing"
    },
    {
      title: "Consultants & Professional Service Providers",
      desc: "Turn client requirements into clear scopes of work and service proposals.",
      icon: FileText,
      badge: "Consultants & Advisors"
    },
    {
      title: "Agencies & Technology Companies",
      desc: "Create consistent, professional proposals for different client requirements.",
      icon: Layers,
      badge: "Agencies & Tech"
    }
  ];

  const curriculum = [
    {
      number: "01",
      title: "Turn Customer Requirements Into a Structured Brief",
      desc: "Learn how to capture the essential information Claude needs to create a relevant and well-structured business proposal.",
      icon: ClipboardList,
      tag: "Structured Briefs"
    },
    {
      number: "02",
      title: "Create Proposals in Your Own Format and Style",
      desc: "Discover how to use your existing proposal templates, company information, and preferred writing style to create consistent, personalized proposals.",
      icon: FileText,
      tag: "Custom Format & Tone"
    },
    {
      number: "03",
      title: "Refine Your Proposals Using AI Prompts",
      desc: "Learn how to improve proposal tone, scope of work, deliverables, timelines, and pricing presentation using targeted prompts.",
      icon: Wand2,
      tag: "Prompt Refinement"
    },
    {
      number: "04",
      title: "Personalize Proposals for Different Customers",
      desc: "Understand how to adapt your proposals to different industries, customer requirements, and business objectives.",
      icon: SlidersHorizontal,
      tag: "Client Personalization"
    },
    {
      number: "05",
      title: "Review and Improve Proposals Before Sending",
      desc: "Use Claude to identify missing information, improve clarity, and strengthen key sections before you send them to your client.",
      icon: ShieldCheck,
      tag: "Quality & Review"
    },
    {
      number: "06",
      title: "Build a Repeatable Proposal Creation Workflow",
      desc: "Connect your customer briefs, templates, prompts, and review checks into a repeatable process your whole team can rely on.",
      icon: Workflow,
      tag: "Repeatable Workflow"
    }
  ];

  const takeaways = [
    {
      number: "01",
      title: "A 5-Input Proposal Brief Template",
      desc: "A clean structure for organizing client context, objectives, deliverables, timelines, and commercial terms so Claude drafts accurately from the start.",
      icon: ClipboardList,
      badge: "Ready-to-Use Template"
    },
    {
      number: "02",
      title: "7 Powerful AI Prompts",
      desc: "Copy-and-adapt prompts engineered for executive summaries, scope clarification, technical specifications, pricing framing, and tone matching.",
      icon: Sparkles,
      badge: "Prompt Playbook"
    },
    {
      number: "03",
      title: "A Smart Proposal Review Checklist",
      desc: "A practical pre-send review guide to spot ambiguities, verify client requirements, and ensure every proposal looks client-ready.",
      icon: FileCheck2,
      badge: "QA Checklist"
    }
  ];

  const demoSteps = [
    {
      step: "Step 01 • Brief Input",
      title: "Provide Claude with customer requirements",
      desc: "Feed meeting notes, RFQs, or your 5-input brief along with your approved company background and proposal structure.",
      color: "text-[#cb4b16]"
    },
    {
      step: "Step 02 • First Draft",
      title: "Generate a structured proposal",
      desc: "Watch Claude assemble a coherent executive summary, client objectives, and modular scope of work in seconds.",
      color: "text-cyan-400"
    },
    {
      step: "Step 03 • Brand Fit",
      title: "Customize the content and presentation",
      desc: "Align section order, language, and terminology with your company's exact format, tone, and style.",
      color: "text-amber-400"
    },
    {
      step: "Step 04 • Commercial Clarity",
      title: "Refine the scope, deliverables, and pricing",
      desc: "Use targeted prompts to sharpen milestones, clarify exclusions, and present your pricing structure clearly.",
      color: "text-emerald-400"
    },
    {
      step: "Step 05 • Final Polish",
      title: "Review the final proposal before sending",
      desc: "Run a quick AI-assisted check for gaps or inconsistencies before exporting your polished, client-ready document.",
      color: "text-purple-400"
    }
  ];

  const testimonials = [
    {
      quote: "Preparing industrial equipment proposals used to take our sales engineers 4–6 hours per RFQ. Using Muthu's structured brief and Claude prompt workflow cut our drafting time to under 20 minutes with sharper scope clarity.",
      name: "Greg Thornton",
      designation: "VP of Sales & Estimating",
      company: "Midwest Machinery Systems",
      badge: "Verified Business Participant"
    },
    {
      quote: "Having Claude match our exact proposal format and tone changed everything. Instead of generic AI prose, every section sounds like our senior partners wrote it—just ten times faster.",
      name: "Sonia Patel",
      designation: "Head of Business Development",
      company: "Envision Logistics Group",
      badge: "Verified Business Participant"
    },
    {
      quote: "Muthu teaches AI with the clarity of someone who has spent 20+ years building real systems. Zero theory—we walked out with a 5-input brief and prompts we used on a live client proposal that same afternoon.",
      name: "Daniel Reyes",
      designation: "Managing Partner",
      company: "Apex Advisory & Tech Partners",
      badge: "Verified Business Participant"
    }
  ];

  const faqs = [
    {
      q: "Do I need any experience using Claude AI?",
      a: "No prior experience is required. We start from the essentials and walk step by step through how to structure your brief, apply templates, and guide Claude effectively."
    },
    {
      q: "Do I need programming or technical knowledge?",
      a: "Not at all. Everything demonstrated in this workshop uses plain English prompts and everyday document workflows—zero coding or technical setup needed."
    },
    {
      q: "Can I use my existing proposal templates?",
      a: "Yes. You will learn specifically how to feed your existing proposal format, company profile, and preferred writing style into Claude so every draft matches your brand."
    },
    {
      q: "Can I create technical proposals for manufacturing businesses?",
      a: "Yes. The 5-input brief and prompt methods work especially well for technical specifications, bill-of-scope details, tolerance/compliance notes, and commercial RFQs."
    },
    {
      q: "Will Claude automatically calculate proposal pricing?",
      a: "You remain in full control of your pricing rules and unit numbers. Claude helps structure, format, and present your approved pricing, milestones, and payment terms clearly—while you verify every figure."
    },
    {
      q: "Will I receive the templates and prompts?",
      a: "Yes. Registered attendees receive the 5-Input Proposal Brief Template, the 7 AI Prompts, and the Smart Proposal Review Checklist to put to work immediately."
    },
    {
      q: "Is this a hands-on workshop?",
      a: "Yes. Beyond watching live step-by-step demonstrations, you are encouraged to bring a real proposal requirement and test how the templates and prompts work for your business."
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen">
      <SEO
        title="Creating Winning Business Proposals with Claude AI | Live Workshop | Orvelo"
        description="Discover how to turn a simple brief into a polished, client-ready business proposal using Claude AI. Live Online Workshop on Friday, November 27, 2026 at 9:30 AM CST."
      />

      {/* Hero Badge Pill */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-white/10 text-[#cb4b16] font-mono text-xs uppercase tracking-widest font-extrabold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#cb4b16] animate-ping" />
          <span>Live Online Workshop • Friday, November 27, 2026</span>
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
          src="/assets/aistudio/Claude_AI_Business_Proposal_Banner_6544e85b.png"
          alt="Create Winning Business Proposals with Claude AI - Live Online Workshop"
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
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToVideo}
            className="px-6 py-3 bg-black/80 hover:bg-black text-white border border-white/20 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl active:scale-95 inline-flex items-center gap-2 backdrop-blur-md"
          >
            <Play className="w-3.5 h-3.5 text-[#cb4b16] fill-[#cb4b16]" />
            <span>See Claude in Action</span>
          </button>
        </div>
      </motion.div>

      {/* Hero Content Block */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] mb-6 uppercase">
          Creating Winning Business Proposals{' '}
          <span className="text-[#cb4b16]">with Claude AI</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 tracking-tight mb-4">
          Less Time Drafting. More Time Winning Business.
        </p>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Discover how to turn a simple brief into a polished, client-ready business proposal using Claude AI.
        </p>

        {/* Meta Schedule Cards */}
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
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Format</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Live Online Workshop</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Host</div>
              <div className="text-xs sm:text-sm font-bold text-emerald-600">Orvelo.ai • Free</div>
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
            <span>See Claude in Action</span>
          </button>
        </div>
      </div>

      {/* SECTION 2: Problem & Solution Card */}
      <section className="mb-20">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#cb4b16]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <SectionLabel>Proposal Productivity</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase text-white leading-tight">
              Still Spending Hours Creating <br className="hidden sm:inline" />
              <span className="text-[#cb4b16]">Business Proposals?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-4">
              What if you could transform a simple brief into a polished, client-ready business proposal in the time it takes to enjoy a cup of coffee?
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-4">
              Every business proposal requires an understanding of customer requirements, a clear scope of work, well-defined deliverables, and compelling pricing. But creating one shouldn&apos;t take hours.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
              In this hands-on workshop, discover how to leverage Claude AI to create compelling business proposals in your own format, tone, and style, while saving hours of drafting and refinement.
            </p>

            <div className="inline-block p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
                &ldquo;Make AI your business proposal partner.&rdquo;
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 text-left max-w-3xl mx-auto">
              <div className="p-6 rounded-2xl bg-red-950/25 border border-red-500/20 text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Manual Proposal Drafting</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Hours spent stitching together old documents, call notes, and scope tables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Inconsistent tone, missing deliverables, or slow turnaround after discovery calls.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>Generic AI outputs that sound robotic and ignore your actual template structure.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-950/25 border border-emerald-500/20 text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>The Claude AI Workflow</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Structured 5-input brief turns raw client requirements into clean first drafts fast.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Proposals match your exact company format, preferred voice, and commercial rules.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span>Targeted review checks catch gaps before you send to the client.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who Is This Workshop For? */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel>Target Audience</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            Who Is This Workshop For?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            This workshop is designed for professionals who regularly create business proposals and want to make the process faster and more efficient.
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
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
          <SectionLabel>Workshop Curriculum</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            What Will You Learn?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Six practical steps to move from raw customer requirements to polished, tailored business proposals with Claude AI.
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
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-[#cb4b16] font-mono text-lg font-black flex items-center justify-center shadow-md">
                        {item.number}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
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

      {/* SECTION 5: What You Will Take Away */}
      <section className="mb-20">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-white border border-slate-200/80 shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel>Included Resources</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
              What You Will Take Away
            </h2>
            <p className="text-lg font-bold text-[#cb4b16]">
              Three Practical Resources You Can Use in Your Business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {takeaways.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-[#cb4b16]/40 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-[#cb4b16] flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-xs font-mono font-black text-[#cb4b16] uppercase tracking-wider mb-1">
                      Resource {item.number}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
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

          <div className="max-w-3xl mx-auto p-5 px-6 rounded-2xl bg-slate-900 text-white text-center shadow-lg">
            <p className="text-sm sm:text-base font-bold tracking-tight flex items-center justify-center gap-2.5">
              <MessageSquareQuote className="w-5 h-5 text-[#cb4b16] shrink-0" />
              <span>Don&apos;t just learn about AI. Walk away with resources you can put to work immediately.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: See Claude AI Create a Business Proposal in Action */}
      <section id="video-demo-section" className="mb-20 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white shadow-2xl border border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionLabel>Live Demonstration</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              See Claude AI Create a Business Proposal in Action
            </h2>
            <p className="text-lg font-bold text-[#cb4b16] mb-3">
              From a Simple Brief to a Client-Ready Proposal
            </p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Watch how Claude transforms basic customer requirements into a structured, personalized proposal tailored to your format, deliverables, and pricing.
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
                    src="/assets/aistudio/Webianr_fff21c3e.mp4"
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
                        Muthu • Intro Video
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
              {demoSteps.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className={`text-xs font-mono font-bold uppercase tracking-wider ${item.color} mb-1`}>
                    {item.step}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}

              <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-center">
                <p className="text-xs sm:text-sm font-black text-white">
                  &ldquo;Bring your own proposal requirements and explore how AI can help.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Meet Your Workshop Host */}
      <section className="mb-20">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-white border border-slate-200/80 shadow-xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Host Avatar & Details */}
            <div className="md:col-span-5 text-center md:text-left">
              <div className="relative inline-block mb-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl overflow-hidden bg-slate-950 border-4 border-white shadow-2xl mx-auto md:mx-0 group">
                  <img
                    src="/assets/aistudio/Claude_AI_Business_Proposal_Banner_6544e85b.png"
                    alt="Muthu - Technology Development Specialist & Workshop Host"
                    className="w-full h-full object-cover object-[80%_20%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-3.5 py-1 rounded-full bg-[#cb4b16] text-white font-mono text-[10px] uppercase font-black tracking-wider shadow-lg border-2 border-white">
                  Workshop Host
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-1">
                Muthu
              </h3>
              <p className="text-xs font-bold text-[#cb4b16] uppercase tracking-wider mb-2">
                Technology Development Specialist
              </p>
              <p className="text-xs font-mono text-slate-500">
                20+ Years of Experience
              </p>
            </div>

            {/* Host Bio */}
            <div className="md:col-span-7 space-y-4">
              <SectionLabel>Meet Your Workshop Host</SectionLabel>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Practical AI workflows built for real business teams.
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With over 20 years of experience in technology development, Muthu focuses on helping businesses adopt practical AI solutions without unnecessary technical complexity.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In this workshop, he will walk through step-by-step methods for using Claude AI to turn customer requirements into clear, structured, client-ready business proposals in a fraction of the usual time.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-bold text-slate-800">
                  His approach: <span className="text-[#cb4b16] font-black uppercase">Simple briefs, structured templates, and real-world proposal results.</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ 20+ Years Tech Experience
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ Claude AI Proposal Workflows
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ Hands-On Workshop
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: What Our Learners Say */}
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
            Orvelo&apos;s workshops are designed to help business owners move beyond AI theory and start applying AI to everyday business activities.
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

      {/* SECTION 9: Frequently Asked Questions */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel>Got Questions?</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Everything you need to know about creating business proposals with Claude AI, included resources, and how the live workshop runs.
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

      {/* SECTION 10: Register for the Live Workshop */}
      <section id="registration-section" className="mb-24 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-white/10 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cb4b16]/20 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel>Registration</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white mb-3">
                Register for the Live Workshop
              </h2>
              <p className="text-lg font-bold text-[#cb4b16] mb-4">
                Your Next Business Proposal Doesn&apos;t Have to Take Hours.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Learn how to create professional, personalized business proposals faster with Claude AI. Includes our 5-Input Brief Template, 7 AI Prompts, and Smart Proposal Review Checklist.
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
                  <strong className="text-white">Live Online Workshop</strong>
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
                  Thank you for registering for <strong>Creating Winning Business Proposals with Claude AI</strong>. We have sent the confirmation and joining instructions to your email.
                </p>
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono text-slate-300 mb-6">
                  Friday, November 27, 2026 • 9:30 AM CST • Live Online Workshop
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
                        Your Role / Designation
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="Founder, Sales Director, Consultant, etc."
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#cb4b16] transition-colors"
                      />
                    </div>
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

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      What kind of business proposals do you create? (Optional)
                    </label>
                    <textarea
                      name="proposalTypes"
                      rows={2}
                      value={formData.proposalTypes}
                      onChange={handleInputChange}
                      placeholder="e.g. Consulting retainers, industrial equipment RFQs, agency SOWs, software implementation quotes..."
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

      {/* SECTION 11: Final CTA Banner */}
      <section className="mb-12">
        <div className="p-8 sm:p-14 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white text-center shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#cb4b16]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              Less Time Drafting. <br className="hidden sm:inline" />
              <span className="text-[#cb4b16]">More Time Winning Business.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-4">
              Make AI work for your business. With Orvelo.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Walk away with the 5-Input Brief Template, 7 AI Prompts, and Smart Proposal Review Checklist so your next proposal takes minutes, not hours.
            </p>

            <div className="mb-8">
              <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white font-mono text-xs uppercase font-extrabold tracking-wider border border-white/10">
                Friday, November 27, 2026 | 9:30 AM CST
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
                Orvelo.ai | Live Online Workshop
              </span>
              <span className="flex items-center gap-2">
                <span>Free Registration • Hands-On Templates &amp; Q&amp;A</span>
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
