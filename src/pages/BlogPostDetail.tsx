import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogPosts } from '../data/blogData';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  Sparkles,
  Bookmark
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useModal();
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-24 px-6 text-center max-w-xl mx-auto min-h-screen">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <p className="text-slate-500 mb-8">We couldn't find the insight article you are looking for.</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </Link>
      </div>
    );
  }

  // Robust lightweight markdown-to-react helper
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    let inList = false;
    let listItems: string[] = [];
    const elements: React.ReactNode[] = [];

    const flushList = (key: string) => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={key} className="space-y-3.5 my-6 list-disc pl-6 text-slate-600 font-light text-sm md:text-base">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed pl-1">{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith('* ')) {
        inList = true;
        listItems.push(line.replace('* ', ''));
        continue;
      } else {
        if (inList) {
          inList = false;
          flushList(`list-${i}`);
        }
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-4 font-sans uppercase border-b border-slate-100 pb-2">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-lg md:text-xl font-bold text-slate-900 tracking-tight mt-8 mb-3 font-sans">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={i} className="border-l-4 border-[#cb4b16] bg-slate-50/70 px-6 py-5 my-8 text-slate-700 italic font-medium text-sm md:text-base rounded-r-2xl font-sans">
            {line.replace('> ', '')}
          </blockquote>
        );
      } else if (line !== '') {
        elements.push(
          <p key={i} className="text-slate-600 font-light text-sm md:text-base leading-relaxed my-5">
            {line}
          </p>
        );
      }
    }

    if (inList) {
      flushList(`list-end`);
    }

    return elements;
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title={post.seo.title} 
        description={post.seo.description}
        ogTitle={post.seo.ogTitle}
        ogDescription={post.seo.ogDescription}
      />

      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 max-w-3xl mx-auto">
        <Link to="/blog" className="hover:text-slate-900 transition-colors">Insights</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
        <span className="text-slate-500 truncate">{post.category}</span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
        {/* Main Content */}
        <article className="lg:col-span-8 max-w-3xl">
          {/* Header metadata */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 rounded-full border border-[#cb4b16]/10 bg-[#cb4b16]/5 text-[#cb4b16] text-[10px] uppercase font-bold tracking-widest">
              <Bookmark className="w-3.5 h-3.5" />
              <span>{post.category}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6 font-sans uppercase">
              {post.h1 || post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest border-y border-slate-100 py-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <User className="w-3 h-3" />
                </div>
                <span className="text-slate-800 font-bold">{post.author.name}</span>
              </div>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-300" />
                <span>{post.publishedAt}</span>
              </div>
              <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-300" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Render parsed blog content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-slate max-w-none prose-headings:font-sans"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Tags */}
          <div className="border-t border-slate-100 mt-12 pt-8">
            <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400 mb-3.5">Keywords & Topics</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-lg text-xs font-light"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar / CTA card */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-8">
          <div className="bg-[#0F172A] text-white p-8 md:p-10 rounded-[2.5rem] overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(203,75,22,0.15)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[#cb4b16] bg-[#cb4b16]/10 px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-widest mb-6 inline-block">
                Advisory Call
              </span>
              <h3 className="text-xl font-bold mb-4 font-sans tracking-tight">Does ChatGPT or Gemini recommend your brand?</h3>
              <p className="text-slate-400 font-light text-xs leading-relaxed mb-8">
                Your customers are researching providers directly on AI platforms. Start with a Brand Citation Audit to benchmark your brand and define your path.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://calendly.com/orvelo-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all text-center block shadow-lg shadow-[#cb4b16]/10"
                >
                  Book a Fit Call
                </a>
                <button 
                  onClick={openModal}
                  className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-xs uppercase tracking-widest transition-all text-center block"
                >
                  Audit Your AI Presence
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
