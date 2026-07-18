import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { Calendar, Clock, ArrowRight, BookOpen, User } from 'lucide-react';

export const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories from posts dynamically
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Insights & Perspectives | Orvelo" 
        description="Explore Orvelo's latest research, frameworks, and strategic insights on Generative Engine Optimization (GEO), Brand Citation Optimization (BCO), and AI micro-applications."
        ogTitle="Orvelo Insights — AI & Search Advisory"
        ogDescription="Strategic guides, technical blueprints, and operational research for the AI-first digital landscape."
      />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-[10px] uppercase font-bold tracking-widest mx-auto">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Knowledge & Strategy</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6 font-sans uppercase">
          Orvelo <br />
          <span className="font-serif italic font-normal text-emerald-700 lowercase">Insights</span>
        </h1>
        
        <p className="text-slate-500 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Strategic research, expert frameworks, and execution blueprints for navigating Generative Engine Optimization, brand discovery, and practical corporate AI applications.
        </p>
      </motion.div>

      {/* CATEGORIES FILTER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2.5 mb-16 max-w-3xl mx-auto"
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                isActive
                  ? 'text-white'
                  : 'text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/60'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 bg-[#cb4b16] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </motion.div>

      {/* BLOG GRID */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, idx) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)", scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200/50 rounded-[2.5rem] p-8 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:border-[#cb4b16]/30 hover:shadow-md transition-all duration-500 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-6">
                  <span className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-600">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`} className="block group-hover:text-[#cb4b16] transition-colors">
                  <h2 className="text-xl md:text-22px font-bold text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-[#cb4b16] transition-colors font-sans">
                    {post.h1 || post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-slate-500 font-light text-xs leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6">
                <div className="flex justify-between items-center">
                  {/* Author */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-800 leading-tight">{post.author.name}</p>
                      <p className="text-[9px] text-slate-400 font-light">{post.publishedAt}</p>
                    </div>
                  </div>

                  {/* Read Link */}
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#cb4b16] hover:text-[#b33f11] transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
