import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { CASE_STUDIES } from '../CaseStudyData';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { useModal } from '../context/ModalContext';
import { SEO } from '../components/SEO';

export const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = CASE_STUDIES.find(s => s.slug === slug);
  const { openModal } = useModal();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400 bg-[#F4F7FB]">
        <SEO title="Case Study Not Found | Orvelo" />
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4 text-slate-800">Case study not found</h2>
          <Link to="/case-studies" className="text-[#cb4b16] hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to all case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#F4F7FB]">
      <SEO 
        title={`${study.title} | Orvelo`} 
        description={study.clientContext}
      />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#cb4b16] origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="pt-36 pb-32 px-6 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link 
            to="/case-studies" 
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-[10px] uppercase font-bold tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-24 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#cb4b16] px-4 py-1.5 border border-[#cb4b16]/15 bg-[#cb4b16]/5 rounded-full">
                {study.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
              {study.title}
            </h1>
          </div>

          <div className="grid gap-16 md:gap-32">
            {/* Split View Content */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-6 border-l-2 border-[#cb4b16] pl-4">
                  The Problem
                </h2>
                <div className="text-slate-500 text-sm font-light leading-relaxed">
                  Understanding the starting point and the friction that was holding the business back.
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg md:text-xl font-light text-slate-600 leading-relaxed max-w-3xl">
                  {study.clientContext}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-6 border-l-2 border-[#cb4b16] pl-4">
                  The Audit
                </h2>
                <div className="text-slate-500 text-sm font-light leading-relaxed">
                  How Orvelo’s leadership team identified the root causes and determined the right direction.
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="glass p-10 md:p-12 rounded-[2.5rem] border border-slate-200/50 bg-white relative overflow-hidden group shadow-[0_4px_25px_rgba(15,23,42,0.02)]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 blur-[80px] rounded-full -translate-y-32 translate-x-32 group-hover:bg-emerald-100/50 transition-all duration-1000" />
                  <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic relative z-10 font-serif">
                    "{study.auditSolution}"
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-6 border-l-2 border-[#cb4b16] pl-4 text-balance">
                  The Execution
                </h2>
                <div className="text-slate-500 text-sm font-light leading-relaxed">
                  The practical steps taken to build systems, tools, and processes for scale.
                </div>
              </div>
              <div className="lg:col-span-8 bg-white border border-slate-200/50 p-10 md:p-16 rounded-[3rem] shadow-[0_4px_20px_rgba(15,23,42,0.01)]">
                <p className="text-lg md:text-xl font-light text-slate-600 leading-relaxed mb-12">
                  {study.execution}
                </p>
                <div className="flex flex-wrap gap-3">
                  {["System Architecture", "AI Integration", "Workflow Automation", "Process Governance", "Strategic Planning"].map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-bold text-slate-500 bg-[#F4F7FB] px-5 py-2.5 border border-slate-200/50 rounded-full hover:border-[#cb4b16]/30 hover:text-[#cb4b16] transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-4">
                <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#cb4b16] mb-6 border-l-2 border-[#cb4b16] pl-4">
                  The Outcome
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="border-t border-slate-200/60 pt-12">
                  <div className="flex items-start gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="space-y-4">
                      <p className="text-2xl md:text-4xl font-bold text-slate-800 leading-tight">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA / Navigation */}
          <div className="mt-32 pt-24 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-12">
            <Link 
              to="/case-studies" 
              className="text-slate-400 hover:text-[#cb4b16] transition-colors flex items-center gap-3 font-bold uppercase tracking-widest text-xs"
            >
              See other solutions <ChevronRight className="w-4 h-4" />
            </Link>
            
            <button 
              onClick={openModal}
              className="px-10 py-5 bg-[#cb4b16] hover:bg-[#b33f11] text-white font-bold rounded-full transition-all shadow-md flex items-center gap-3 uppercase tracking-wider text-xs active:scale-95"
            >
              Discuss your challenge
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
