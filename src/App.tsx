import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { CaseStudiesPage } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { GeoServices } from './pages/GeoServices';
import { GeoServicesSmb } from './pages/GeoServicesSmb';
import { MicroApplications } from './pages/MicroApplications';
import { MicroApplicationsSmb } from './pages/MicroApplicationsSmb';
import { Industries } from './pages/Industries';
import { DiscoverySprint } from './pages/DiscoverySprint';
import { Contact } from './pages/Contact';
import { ModalProvider, useModal } from './context/ModalContext';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { OrveloLogo } from './components/OrveloLogo';

// --- Shared Components ---

const Navbar = () => {
  const location = useLocation();
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownHovered(false);
  }, [location]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 px-5 py-1.5 md:py-2 bg-black border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] rounded-full flex justify-between items-center text-white">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer pl-2">
          <OrveloLogo theme="dark" className="h-11 md:h-12 w-auto object-contain" />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center text-[11px] uppercase tracking-widest font-bold text-slate-300">
        <div 
          className="relative py-2"
          onMouseEnter={() => setIsDropdownHovered(true)}
          onMouseLeave={() => setIsDropdownHovered(false)}
        >
          <button className="hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none uppercase">
            WHAT WE DO <ChevronDown className="w-3 h-3 opacity-60" />
          </button>
          
          <AnimatePresence>
            {isDropdownHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl z-[100] text-center animate-none"
              >
                <Link 
                  to="/#who" 
                  className="block px-4 py-2.5 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider text-center"
                >
                  Overview
                </Link>
                <Link 
                  to="/geo-services-for-smbs" 
                  className="block px-4 py-2.5 hover:bg-white/5 rounded-xl text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider text-center border-t border-white/5"
                >
                  GEO (SMBs)
                </Link>
                <Link 
                  to="/ai-micro-applications-for-smbs" 
                  className="block px-4 py-2.5 hover:bg-[#cb4b16]/10 rounded-xl text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider text-center border-t border-white/5"
                >
                  AI Micro Apps (SMBs)
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link to="/industries" className={`hover:text-white transition-colors ${location.pathname.startsWith('/industries') ? 'text-[#cb4b16] font-extrabold' : ''}`}>Industries</Link>
        <Link to="/the-discovery-sprint" className={`hover:text-white transition-colors ${location.pathname === '/the-discovery-sprint' ? 'text-[#cb4b16] font-extrabold' : ''}`}>The Sprint</Link>
        <Link to="/#leadership" className="hover:text-white transition-colors">Leadership</Link>
        <Link to="/case-studies" className={`hover:text-white transition-colors ${location.pathname.startsWith('/case-studies') ? 'text-[#cb4b16] font-extrabold' : ''}`}>Case Studies</Link>
        <Link to="/contact" className={`hover:text-white transition-colors ${location.pathname === '/contact' ? 'text-[#cb4b16] font-extrabold' : ''}`}>Contact</Link>
      </div>

      <div className="hidden md:block">
        <a 
          href="https://calendly.com/orvelo-info/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full transition-all font-bold active:scale-95 text-[10px] uppercase tracking-wider shadow-sm shadow-[#cb4b16]/10 text-center"
        >
          Book a fit call
        </a>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center pr-1">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Pill */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col gap-4 text-center z-50 md:hidden text-white"
          >
            <div className="flex flex-col gap-2 py-1 border-b border-white/5">
              <Link to="/#who" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white py-1 font-semibold text-sm tracking-wide uppercase">What we do</Link>
              <Link to="/geo-services-for-smbs" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-[#cb4b16] py-1 text-xs font-bold tracking-widest uppercase">
                └ GEO (SMBs)
              </Link>
              <Link to="/ai-micro-applications-for-smbs" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-[#cb4b16] py-1 text-xs font-bold tracking-widest uppercase">
                └ AI Micro Apps (SMBs)
              </Link>
            </div>
            <Link to="/industries" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white py-1.5 font-semibold text-sm tracking-wide">Industries</Link>
            <Link to="/the-discovery-sprint" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white py-1.5 font-semibold text-sm tracking-wide">The Sprint</Link>
            <Link to="/#leadership" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white py-1.5 font-semibold text-sm tracking-wide">Leadership</Link>
            <Link to="/case-studies" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white py-1.5 font-semibold text-sm tracking-wide">Case Studies</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white py-1.5 font-semibold text-sm tracking-wide">Contact Us</Link>
            <a 
              href="https://calendly.com/orvelo-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full py-3 bg-[#cb4b16] hover:bg-[#b33f11] text-white rounded-full font-bold text-xs uppercase tracking-wider text-center block"
            >
              Book a fit call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const OrbitalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#F4F7FB]">
      {/* Ambient color blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-100/40 blur-[150px] rounded-full" />
      <div className="absolute bottom-[10%] left-[-10%] w-[45vw] h-[45vw] bg-[#31e8fb]/5 blur-[150px] rounded-full" />
      <div className="absolute top-[35%] left-[25%] w-[40vw] h-[40vw] bg-amber-50/40 blur-[130px] rounded-full" />
      
      {/* Decorative clean line coordinates */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw]">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="orbital-path left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: `${i * 30}%`,
              height: `${i * 30}%`,
              opacity: 0.15 / i,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 80 + i * 30, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="relative py-16 px-6 md:px-24 z-10 border-t border-white/5 max-w-7xl mx-auto w-full text-slate-400 bg-[#0F172A] rounded-[3rem] mb-12 shadow-2xl">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <Link to="/">
          <OrveloLogo theme="dark" className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity" />
        </Link>
      </div>
      <div className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-medium text-center md:text-left">
        © 2026 Orvelo Consulting Group. Precision in Motion.
      </div>
      <div className="flex gap-8 text-[11px] text-slate-400 uppercase tracking-widest font-bold">
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="https://www.linkedin.com/company/orvelo-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const ScrollToAnchor = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <div className="relative font-sans selection:bg-brand-teal/20 overflow-x-hidden min-h-screen flex flex-col bg-[#F4F7FB] text-slate-900">
          <ScrollToAnchor />
          <ScrollToTop />
          <Navbar />
          <OrbitalBackground />
          
          <main className="flex-grow z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="/geo-services" element={<GeoServices />} />
              <Route path="/geo-services-for-smbs" element={<GeoServicesSmb />} />
              <Route path="/ai-micro-applications-for-manufacturing-companies" element={<MicroApplications />} />
              <Route path="/ai-micro-applications-for-smbs" element={<MicroApplicationsSmb />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/the-discovery-sprint" element={<DiscoverySprint />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
}
