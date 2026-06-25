import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES } from '../CaseStudyData';
import { CATEGORIES, Category } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyTabsProps {
  activeCategory: string;
  setActiveCategory: (category: any) => void;
  showContent?: boolean;
  theme?: 'dark' | 'light';
}

export const CaseStudyTabs = ({ activeCategory, setActiveCategory, showContent = true, theme = 'light' }: CaseStudyTabsProps) => {
  const filteredStudies = CASE_STUDIES.filter(study => study.category === activeCategory || activeCategory === 'All');
  const isDark = theme === 'dark';

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className={`flex flex-wrap gap-2 mb-12 border-b pb-6 ${isDark ? 'border-white/5' : 'border-slate-200/60'}`}>
        {['All', ...CATEGORIES].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 relative ${
              activeCategory === category 
                ? 'text-[#cb4b16] bg-[#cb4b16]/5' 
                : isDark 
                  ? 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
                  : 'text-slate-400 hover:text-slate-800 hover:bg-slate-100/50'
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div 
                layoutId="activeTab"
                className="absolute inset-0 border border-[#cb4b16]/30 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      {showContent && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <Link to={`/case-studies/${study.slug}`} className="block h-full">
                  <div className="glass h-full p-8 rounded-[2rem] border border-slate-200/50 group-hover:border-[#cb4b16]/40 hover:bg-white group-hover:shadow-md transition-all duration-500 flex flex-col justify-between">
                    <div>
                      <div className="text-[9px] uppercase tracking-widest font-bold text-[#cb4b16] mb-4">{study.category}</div>
                      <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-[#cb4b16] transition-colors">
                        {study.title}
                      </h3>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-[#cb4b16] transition-colors">View Case Study</span>
                      <div className="w-10 h-10 rounded-full border border-slate-200/70 flex items-center justify-center group-hover:bg-[#cb4b16] group-hover:border-[#cb4b16] group-hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
