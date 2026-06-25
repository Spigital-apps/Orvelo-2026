import { motion } from 'motion/react';
import { CaseStudyTabs } from '../components/CaseStudyTabs';
import { SEO } from '../components/SEO';
import { useState } from 'react';

export const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Case Studies | Orvelo Strategy and Execution" 
        description="Explore how Orvelo has helped businesses across manufacturing, aviation, fuel retail, and more build scalable digital solutions."
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#cb4b16]/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#cb4b16]">
              Evidence
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Case <span className="font-serif italic font-normal text-emerald-700">Studies</span>
          </h1>
          <p className="text-slate-500 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            A practical look at how Orvelo helps businesses solve problems, bridge gaps, and build momentum.
          </p>
        </div>

        <CaseStudyTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </motion.div>
    </div>
  );
};
