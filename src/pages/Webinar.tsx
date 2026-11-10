import { useState, useRef } from 'react';
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
  Video, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Briefcase, 
  ChevronDown, 
  Building2, 
  Wand2, 
  Film, 
  Type, 
  Share2, 
  Repeat, 
  Star,
  Award,
  Laptop,
  ExternalLink
} from 'lucide-react';

const CALENDLY_WEBINAR_URL = "https://calendly.com/mail-orvelo/learn-ai-video-editing-claude";

export const Webinar = () => {
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

  const targetAudience = [
    {
      title: "Small Business Owners & Founders",
      desc: "Create high-converting videos to promote your products, services, and brand without relying on expensive agencies or full-time editors.",
      icon: Briefcase,
      badge: "Founders & SMBs"
    },
    {
      title: "Marketing Teams",
      desc: "Produce daily social media reels, promotional teasers, customer story cuts, and campaign content significantly faster with prompt automation.",
      icon: Film,
      badge: "Marketing Teams"
    },
    {
      title: "Sales & Business Development Teams",
      desc: "Turn raw product demonstrations, recorded Zoom calls, and client case study interviews into engaging, shareable video assets that close deals.",
      icon: Video,
      badge: "Sales Teams"
    },
    {
      title: "B2B Manufacturers & Service Providers",
      desc: "Showcase shop floor capabilities, precision machinery, product tolerances, engineering workflows, and team expertise through crisp video.",
      icon: Building2,
      badge: "B2B & Industrial"
    }
  ];

  const curriculum = [
    {
      number: "01",
      title: "Edit Videos Using Simple AI Prompts",
      desc: "Learn how to describe the cuts, pacing, and visual changes you want in everyday English, instructing Claude to orchestrate the entire editing workflow.",
      icon: Wand2,
      tag: "Prompt Architecture"
    },
    {
      number: "02",
      title: "Turn Raw Footage Into Engaging Videos",
      desc: "Discover how to organize rough video recordings, identify the most impactful soundbites, slice out dead pauses, and craft a cohesive narrative arc.",
      icon: Film,
      tag: "Story & Pacing"
    },
    {
      number: "03",
      title: "Add Captions, Titles & Visual Elements",
      desc: "Learn how AI-assisted video pipelines prepare synced subtitles, animated kinetic text overlays, brand typography, and dynamic transitions automatically.",
      icon: Type,
      tag: "Graphics & Subtitles"
    },
    {
      number: "04",
      title: "Create Videos for Different Platforms",
      desc: "Understand how to adapt and repurpose your business video into optimal aspect ratios and pacing for LinkedIn, YouTube, Instagram Reels, and your website.",
      icon: Share2,
      tag: "Omnichannel Repurposing"
    },
    {
      number: "05",
      title: "Build a Repeatable Video Creation Workflow",
      desc: "Walk away with a tested, repeatable operating procedure your team can reuse week after week to output consistent business videos without starting from scratch.",
      icon: Repeat,
      tag: "Standard Operating Procedure"
    }
  ];

  const testimonials = [
    {
      quote: "Before Lenin's session, producing a single 60-second product demo for our industrial valve line took us 3 weeks with an external editor. Learning to direct the cuts via prompts cut our cycle to one afternoon.",
      name: "Marcus Vance",
      designation: "VP of Product Marketing",
      company: "Apex Precision Components",
      badge: "Verified Business Participant"
    },
    {
      quote: "The contrast between theoretical AI talk and this webinar is night and day. Lenin showed real raw footage, typed the prompts, and watched the video render right in front of us. Super practical.",
      name: "Deepa Narayan",
      designation: "Founder & Managing Director",
      company: "Clarion Media Group",
      badge: "Verified Business Participant"
    },
    {
      quote: "We don't have a video editing team on staff. This workflow showed our sales engineers how to take Zoom customer interviews and turn them into LinkedIn clips with professional subtitles effortlessly.",
      name: "David H. Miller",
      designation: "Director of Business Development",
      company: "Houston Flow Solutions",
      badge: "Verified Business Participant"
    }
  ];

  const faqs = [
    {
      q: "Do I need video editing experience?",
      a: "No. This webinar is specifically designed for beginners, business owners, and non-technical professionals who have never used complex NLE software like Premiere Pro, DaVinci Resolve, or Final Cut. You will learn to guide video edits using natural English prompts."
    },
    {
      q: "Do I need technical or programming knowledge?",
      a: "No programming background is required to understand the core workflow. We demonstrate how Claude translates everyday instructions into video editing actions. For teams interested in automated programmatic rendering (e.g. Remotion/Claude Code), we cover how technical teams can deploy it easily."
    },
    {
      q: "Can Claude edit my existing business videos?",
      a: "Claude plans the edits, transcribes dialogue, structures scenes, and directs compatible video editing engines through prompts. The webinar showcases how you pair Claude's intelligence with modern video generation and editing tools."
    },
    {
      q: "What kinds of business videos can I create?",
      a: "You can explore workflows for product demonstrations, founder updates, customer case study clips, trade show recaps, social media updates, B2B capability showcases, and internal onboarding clips."
    },
    {
      q: "Will there be a practical demonstration?",
      a: "Yes. The entire session is centered around a live, practical demonstration using unedited camera footage, showing the exact prompts and resulting video render, followed by a live interactive Q&A session."
    }
  ];

  const scrollToVideo = () => {
    const el = document.getElementById('video-demo-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 md:pt-28 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="How to Edit Videos with Claude | Live Webinar | Orvelo" 
        description="Learn how to create professional-quality business videos using AI prompts with Claude. Live online webinar on Friday, November 13, 2026 at 9:30 AM CST."
      />

      {/* Hero Badge Pill */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-white/10 text-[#cb4b16] font-mono text-xs uppercase tracking-widest font-extrabold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#cb4b16] animate-ping" />
          <span>Live Online Webinar • Friday, November 13, 2026</span>
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
          src="/assets/aistudio/AI_Video_Editing_Webinar_with_Lenin_7de0c5f1.png" 
          alt="How to Edit Videos with Claude - Live Webinar with Lenin" 
          className="w-full h-auto object-cover max-h-[580px] select-none"
        />
        
        {/* Subtle gradient overlay at bottom for smooth contrast */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Floating Quick Action overlay on desktop banner */}
        <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 z-10">
          <a 
            href={CALENDLY_WEBINAR_URL}
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
          How to Edit Videos with <span className="text-[#cb4b16]">Claude</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 tracking-tight mb-4">
          No Video Editor? No Editing Skills? No Problem.
        </p>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Learn to create professional-quality business videos using AI prompts. Discover how Claude can plan, cut, subtitle, and render your footage into polished company assets.
        </p>

        {/* Meta Schedule Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Date</div>
              <div className="text-xs font-black text-slate-900">Friday, Nov 13, 2026</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Time</div>
              <div className="text-xs font-black text-slate-900">9:30 AM CST</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Format</div>
              <div className="text-xs font-black text-slate-900">Live Online Stream</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Access</div>
              <div className="text-xs font-black text-slate-900">100% Free / Online</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={CALENDLY_WEBINAR_URL}
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
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#cb4b16]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <SectionLabel>The Problem &amp; The AI Solution</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase text-white leading-tight">
              Create Better Business Videos. <br />
              <span className="text-[#cb4b16]">Without Learning Complicated Editing Software.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              Want to publish product videos, customer testimonials, business updates, or social media content but don&apos;t have a dedicated video editor?
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
              AI is changing how businesses create and edit video content. In this practical webinar, discover how to use Claude to plan and guide video edits through simple prompts and compatible editing tools, without needing years of editing experience.
            </p>

            <div className="inline-block p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <p className="text-xl sm:text-2xl font-black text-white tracking-tight">
                &ldquo;You focus on your message. Let AI help with the editing.&rdquo;
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
              <div className="p-5 rounded-xl bg-red-950/30 border border-red-500/20 text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">The Traditional Challenge</div>
                <ul className="text-xs space-y-1.5 text-slate-400 list-disc list-inside">
                  <li>Complex timeline software with steep learning curves</li>
                  <li>Days spent slicing pauses, formatting captions, and rendering</li>
                  <li>High agency fees or long internal team queues</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-slate-300">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">The Claude AI Approach</div>
                <ul className="text-xs space-y-1.5 text-slate-300 list-disc list-inside">
                  <li>Direct edits in conversational plain English prompts</li>
                  <li>Automated subtitle alignment, transitions, and highlights</li>
                  <li>Turn raw phone/webcam recordings into social-ready cuts fast</li>
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
            This session is designed for business professionals who want to create more video content without depending entirely on professional video editors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <span>No prior video editing experience required</span>
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
            Five practical, battle-tested techniques to transform your video creation process from a bottleneck into a repeatable growth engine.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {curriculum.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-[#cb4b16]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-[#cb4b16] font-mono text-xl font-black flex items-center justify-center shadow-md">
                    {item.number}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#cb4b16]/10 text-[#cb4b16] flex items-center justify-center sm:hidden">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#cb4b16]">
            <Sparkles className="w-4 h-4" />
            <span>See the workflow in action through a practical demonstration</span>
          </div>
        </div>
      </section>

      {/* SECTION 5: Video Demonstration */}
      <section id="video-demo-section" className="mb-24 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-slate-950 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#cb4b16]/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <SectionLabel>Practical Demonstration</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white mb-4">
              Watch What You Can Create with AI
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#cb4b16] mb-3">
              From a Simple Business Video to a Polished, Ready-to-Share Clip.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              See how Claude can help turn your editing instructions into a structured workflow, using compatible video tools to produce and refine the final result.
            </p>
          </div>

          {/* Embedded Video Showcase */}
          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10 max-w-5xl mx-auto">
            {/* Left: Interactive Vertical Video Player Container */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[2.5rem] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-4 border-slate-700 shadow-2xl shadow-black/80">
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
                        Click to Play Intro Video
                      </div>
                    </div>
                  )}

                  {/* Bottom Controls Bar */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-2 z-20">
                    {/* Scrubber Progress Bar */}
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
                        Lenin • Intro Video
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

            {/* Right: Video Breakdown Highlights */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#cb4b16] mb-1">
                  Step 01 • The Raw Footage
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Unedited Camera Recording
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Notice the unpolished, natural recording without any manual editing. Claude analyzes the transcript, detects bad takes, and isolates key messages automatically.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Step 02 • Claude Code + Toolkit
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Prompt-Driven Timeline Execution
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  With prompt instructions, Claude sets up cuts every 1-2 seconds, generates dynamic captions, inserts motion graphics, and arranges pacing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Step 03 • Render &amp; Human Review
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  Complete Ready-to-Publish Video
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The video renders automatically via prompts. You simply review cuts, check captions, approve the motion, and export for LinkedIn, Instagram, and YouTube.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href={CALENDLY_WEBINAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 inline-flex items-center justify-center gap-2"
                >
                  <span>Register Free on Calendly</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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
                    src="/assets/aistudio/lenin_smiling.jpg" 
                    alt="Lenin - AI Technology Specialist and Webinar Host"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 px-3.5 py-1 rounded-full bg-[#cb4b16] text-white font-mono text-[10px] uppercase font-black tracking-wider shadow-lg border-2 border-white">
                  Webinar Host
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-1">
                Lenin
              </h3>
              <p className="text-xs font-bold text-[#cb4b16] uppercase tracking-wider mb-2">
                AI Technology Specialist | 8+ Years Experience
              </p>
              <p className="text-xs font-mono text-slate-400">
                @buildwithlenin
              </p>
            </div>

            {/* Host Bio */}
            <div className="md:col-span-7 space-y-4">
              <SectionLabel>Meet Your Webinar Host</SectionLabel>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Hands-on AI systems, stripped of the hype.
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lenin has over eight years of experience building AI technology and developing practical solutions for business applications.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Through this webinar, he brings a hands-on approach to helping business owners understand how AI can simplify everyday tasks, improve productivity, and make technology more accessible.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-bold text-slate-800">
                  His core focus is simple: <span className="text-[#cb4b16] font-black uppercase">Less theory. More practical implementation.</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ 8+ Years in AI Engineering
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ Real-time Demo (No Pre-recorded Slides)
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  ✓ Live Audience Q&amp;A
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
            Practical AI Learning for Real Business Challenges
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            We believe the best way to learn AI is to see it working on problems you recognize.
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

      {/* SECTION 8: Reserve Your Spot (Calendly Registration) */}
      <section id="registration-section" className="mb-24 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl border border-white/10 max-w-4xl mx-auto relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cb4b16]/20 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionLabel>Registration</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white mb-3">
                Reserve Your Spot
              </h2>
              <p className="text-lg font-bold text-[#cb4b16] mb-4">
                Start Creating Better Business Videos with AI
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Join us for a practical introduction to editing business videos with Claude. Free live access with full live demonstration, workflow templates, and interactive Q&amp;A.
              </p>

              {/* Event snapshot card */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#cb4b16]" />
                  <strong className="text-white">Friday, November 13, 2026</strong>
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
                Select your spot on Calendly to receive your automatic calendar invite with direct Zoom / Stream joining credentials.
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
                  <span>Live Q&amp;A directly with Lenin (@buildwithlenin)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No credit card or software installation required</span>
                </div>
              </div>

              <a 
                href={CALENDLY_WEBINAR_URL}
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

      {/* SECTION 9: Frequently Asked Questions */}
      <section className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionLabel>Got Questions?</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Everything you need to know about the session, required tools, and what to expect.
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

      {/* SECTION 10: Final CTA Banner */}
      <section className="mb-12">
        <div className="p-8 sm:p-14 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white text-center shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#cb4b16]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              Don&apos;t Let Video Editing Hold Back <br className="hidden sm:inline" />
              <span className="text-[#cb4b16]">Your Business Content.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-4">
              You already have ideas worth sharing.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto">
              Learn how Claude and AI-powered workflows can help you turn those ideas into professional-looking business videos.
            </p>

            <div className="mb-8">
              <span className="inline-block px-5 py-2 rounded-full bg-white/10 text-white font-mono text-xs uppercase font-extrabold tracking-wider border border-white/10">
                November 13, 2026 | 9:30 AM CST
              </span>
            </div>

            <a 
              href={CALENDLY_WEBINAR_URL}
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
