import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { CASE_STUDIES } from '../CaseStudyData';
import { useModal } from '../context/ModalContext';
import { 
  Building2, 
  Factory, 
  GraduationCap, 
  HeartPulse, 
  ShoppingBag, 
  Utensils, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Briefcase,
  ArrowRight
} from 'lucide-react';

export const Industries = () => {
  const { openModal } = useModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive logic for carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalStudies = CASE_STUDIES.length;
  const maxIndex = Math.max(0, totalStudies - visibleCount);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Ensure index remains in bounds if visibility changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, maxIndex, currentIndex]);

  const industrySectors = [
    {
      title: "Small & Medium Businesses",
      desc: "For SMBs that need practical AI systems to reduce manual work, respond faster, improve reporting, and streamline daily operations.",
      icon: Briefcase,
      color: "from-blue-50 to-indigo-50/50",
      accent: "text-blue-600 bg-blue-50 border-blue-100",
      bullets: [
        { text: "Automated operational checklists & reports" },
        { text: "Streamlined CRM workflows and pipeline updates" },
        { text: "Fast, AI-driven daily communication tools" }
      ]
    },
    {
      title: "Manufacturing",
      desc: "For industrial manufacturers, component manufacturers, equipment companies, fabrication businesses, and RFQ-driven suppliers.",
      icon: Factory,
      color: "from-[#cb4b16]/5 to-amber-50/20",
      accent: "text-[#cb4b16] bg-[#cb4b16]/5 border-[#cb4b16]/10",
      bullets: [
        { text: "Business Visibility on AI Engines", link: "/geo-services" },
        { text: "Micro Application Development support", link: "/ai-micro-applications-for-manufacturing-companies" },
        { text: "Customized application development" }
      ]
    },
    {
      title: "Education and Training",
      desc: "For preschools, enrichment academies, coaching centers, training companies, edtech brands, and skill development businesses.",
      icon: GraduationCap,
      color: "from-emerald-50 to-teal-50/50",
      accent: "text-emerald-700 bg-emerald-50 border-emerald-100",
      bullets: [
        { text: "Interactive student engagement maps" },
        { text: "Automated FAQ generation and support" },
        { text: "Course outline templates and learner nudges" }
      ]
    },
    {
      title: "Healthcare and Wellness",
      desc: "For clinics, wellness brands, healthcare service providers, therapy centers, and appointment-led businesses.",
      icon: HeartPulse,
      color: "from-rose-50 to-red-50/30",
      accent: "text-rose-600 bg-rose-50 border-rose-100",
      bullets: [
        { text: "Secure patient FAQ assistants" },
        { text: "Intake data pre-check and categorization" },
        { text: "Appointment flow optimizations" }
      ]
    },
    {
      title: "Retail and Ecommerce",
      desc: "For retail brands, ecommerce stores, Amazon sellers, product-led businesses, and distribution companies.",
      icon: ShoppingBag,
      color: "from-amber-50 to-yellow-50/30",
      accent: "text-amber-700 bg-amber-50 border-amber-100",
      bullets: [
        { text: "AI-assisted product recommendations" },
        { text: "Generative description formatting" },
        { text: "Multi-channel listing configurations" }
      ]
    },
    {
      title: "Restaurants",
      desc: "For restaurants, cloud kitchens, catering businesses, food service brands, and hospitality businesses managing orders, enquiries, menus, and customer communication.",
      icon: Utensils,
      color: "from-orange-50 to-amber-50/40",
      accent: "text-orange-600 bg-orange-50 border-orange-100",
      bullets: [
        { text: "Auto-response for reservation & inquiry lines" },
        { text: "Structured feedback analysis and alerts" },
        { text: "Menu descriptions & promotional text creation" }
      ]
    },
    {
      title: "Technology & SaaS",
      desc: "For software companies, SaaS products, digital platforms, IT service providers, and tech-enabled businesses.",
      icon: Layers,
      color: "from-purple-50 to-fuchsia-50/30",
      accent: "text-purple-600 bg-purple-50 border-purple-100",
      bullets: [
        { text: "Anonymous visitor intelligence pipelines" },
        { text: "AI-powered social intent campaigns" },
        { text: "Automatic lead scoring & outreach drafting" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Industries We Serve | Orvelo AI Solutions" 
        description="Orvelo builds practical AI solutions for growing businesses in Manufacturing, SMBs, Healthcare, Education, E-commerce, Restaurants, and SaaS."
      />

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold tracking-widest mx-auto">
          <Building2 className="w-3.5 h-3.5" />
          <span>Sectors & Credibility</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8 font-sans">
          Industries <br />
          <span className="font-serif italic font-normal text-emerald-700">we serve</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Orvelo works with growing businesses that want to use AI to improve sales, operations, customer communication, documentation, reporting, and internal workflows.
        </p>

        <div className="flex justify-center">
          <Link 
            to="/contact"
            className="px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 text-center"
          >
            Request a fit call
          </Link>
        </div>
      </motion.div>

      {/* SECTORS GRID */}
      <section className="py-16 border-t border-slate-200/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="justify-center font-extrabold">Enterprise & Growth Fit</SectionLabel>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900">Where we focus our systems</h2>
          <p className="text-slate-400 text-xs mt-2">Tailored prompt-chains, secure compliance maps, and specialized workflows built for your category.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className={`bg-gradient-to-b ${sector.color} border border-slate-200/50 rounded-[2.5rem] p-8 shadow-[0_4px_12px_rgba(15,23,42,0.01)] hover:shadow-md hover:border-slate-300/80 transition-all duration-500 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 ${sector.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{sector.title}</h3>
                  <p className="text-slate-500 text-xs font-light leading-relaxed mb-6">{sector.desc}</p>
                </div>

                <div className="border-t border-slate-200/40 pt-4 mt-2">
                  <h4 className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-3">Key Solutions Include</h4>
                  <ul className="space-y-2">
                    {sector.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start gap-2 text-[11px] text-slate-600 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        {bullet.link ? (
                          <Link to={bullet.link} className="hover:text-[#cb4b16] hover:underline transition-colors font-medium inline-flex items-center gap-0.5 text-left">
                            <span>{bullet.text}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-60 shrink-0" />
                          </Link>
                        ) : (
                          <span>{bullet.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CASE STUDIES CAROUSEL */}
      <section className="py-20 border-t border-slate-200/60">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <SectionLabel>Real Evidence</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-2">
              Case <span className="font-serif italic font-normal text-emerald-700">Studies</span>
            </h2>
            <p className="text-slate-500 text-sm font-light mt-2 max-w-xl">
              Swipe or slide through our direct client engagements across multiple operational models.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-700 hover:bg-[#cb4b16] hover:border-[#cb4b16] hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono font-bold text-slate-400">
              {currentIndex + 1} / {maxIndex + 1}
            </span>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                currentIndex === maxIndex
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-700 hover:bg-[#cb4b16] hover:border-[#cb4b16] hover:text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-hidden py-4 -mx-4 px-4">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 24 / visibleCount}px)` }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            style={{ width: `${(totalStudies / visibleCount) * 100}%` }}
          >
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                style={{ width: `calc(${100 / totalStudies}% - 16px)` }}
                className="shrink-0 group"
              >
                <Link to={`/case-studies/${study.slug}`} className="block h-full">
                  <div className="bg-white h-full p-8 rounded-[2.5rem] border border-slate-200/50 group-hover:border-[#cb4b16]/40 hover:bg-white group-hover:shadow-lg transition-all duration-500 flex flex-col justify-between min-h-[340px]">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest font-extrabold text-[#cb4b16] mb-4">
                        {study.category}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#cb4b16] transition-colors line-clamp-4">
                        {study.title}
                      </h3>
                      <p className="text-slate-400 font-light text-xs mt-4 line-clamp-3">
                        {study.clientContext}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-[#cb4b16] transition-colors">
                        View Case Study
                      </span>
                      <div className="w-9 h-9 rounded-full border border-slate-200/70 flex items-center justify-center group-hover:bg-[#cb4b16] group-hover:border-[#cb4b16] group-hover:text-white transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-16 border-t border-slate-200/60 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-[#cb4b16]/5 text-[#cb4b16] flex items-center justify-center mx-auto mb-8 border border-[#cb4b16]/10">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          Launch a customized AI system for your industry
        </h2>
        
        <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          We understand operational nuances, client communication expectations, and compliance standards specific to your industry sector.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cb4b16]/10 text-center"
          >
            Start Industry Consult
          </Link>
          
          <Link 
            to="/case-studies" 
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <span>Explore All Evidence</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </section>
    </div>
  );
};
