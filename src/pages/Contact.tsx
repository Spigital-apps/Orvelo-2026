import { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { SectionLabel } from '../components/SectionLabel';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Building2, 
  User, 
  FileText,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        message: ''
      });
    }, 1200);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-32 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <SEO 
        title="Contact Us | Orvelo" 
        description="Get in touch with Orvelo Consulting Group. Contact our team to request a visibility audit, ask about our GEO services, or schedule a strategic consultation."
      />

      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* Left column: Contact info and Address */}
        <div className="lg:col-span-5">
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 font-sans uppercase">
            Let’s start <br />
            <span className="font-serif italic font-normal text-emerald-700 lowercase text-3xl md:text-5xl">a conversation.</span>
          </h1>
          
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mb-12">
            Have a question about our Generative Engine Optimization (GEO) services, or want to discuss a custom AI micro-application for your business? Drop us a line, and we’ll get back to you within 24 business hours.
          </p>

          {/* Address & Direct Channels */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#cb4b16]/5 border border-[#cb4b16]/10 flex items-center justify-center text-[#cb4b16] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Our Office</h4>
                <p className="text-slate-800 text-sm font-medium leading-relaxed">
                  Orvelo Consulting Group
                </p>
                <p className="text-slate-500 font-light text-xs leading-relaxed">
                  2617, South Main<br />
                  Stafford, Texas 77477
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#cb4b16]/5 border border-[#cb4b16]/10 flex items-center justify-center text-[#cb4b16] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Direct Email</h4>
                <a href="mailto:info@orvelo.ai" className="text-slate-800 text-sm font-semibold hover:text-[#cb4b16] transition-colors select-all">
                  info@orvelo.ai
                </a>
                <p className="text-slate-400 font-light text-[11px]">For general and client inquiries</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#cb4b16]/5 border border-[#cb4b16]/10 flex items-center justify-center text-[#cb4b16] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Phone Number</h4>
                <a href="tel:+17139995352" className="text-slate-800 text-sm font-semibold hover:text-[#cb4b16] transition-colors">
                  (713) 999 5352
                </a>
                <p className="text-slate-400 font-light text-[11px]">Mon–Fri, 9am–5pm CST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Lead Capture Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200/60 rounded-[3rem] p-8 md:p-12 shadow-[0_4px_30px_rgba(15,23,42,0.02)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(203,75,22,0.02)_0%,transparent_50%)] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-4 h-4 text-[#cb4b16]" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold">Submit a Request</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 tracking-tight">
                    Tell us about your project or business needs
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          Full Name *
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <User className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#cb4b16] focus:bg-white focus:outline-none rounded-2xl text-xs font-light text-slate-800 transition-all placeholder:text-slate-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          Business Email *
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#cb4b16] focus:bg-white focus:outline-none rounded-2xl text-xs font-light text-slate-800 transition-all placeholder:text-slate-300"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          Phone Number
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#cb4b16] focus:bg-white focus:outline-none rounded-2xl text-xs font-light text-slate-800 transition-all placeholder:text-slate-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                          Company Name
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Building2 className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#cb4b16] focus:bg-white focus:outline-none rounded-2xl text-xs font-light text-slate-800 transition-all placeholder:text-slate-300"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                        Your Message *
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4 text-slate-400">
                          <FileText className="w-4 h-4" />
                        </span>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your business, what services you're interested in, and how we can assist you..."
                          className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 focus:border-[#cb4b16] focus:bg-white focus:outline-none rounded-2xl text-xs font-light text-slate-800 transition-all placeholder:text-slate-300 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#cb4b16] hover:bg-[#b33f11] disabled:bg-slate-300 text-white font-extrabold rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#cb4b16]/10 text-xs uppercase tracking-widest active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Lead Form</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-600">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    Inquiry Received
                  </h3>
                  
                  <p className="text-slate-500 font-light text-sm max-w-md mx-auto leading-relaxed mb-10">
                    Thank you for reaching out to Orvelo. Our leadership team has been notified, and we will review your parameters thoroughly before responding within 24 business hours.
                  </p>
                  
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3.5 border border-slate-200 hover:border-[#cb4b16] hover:text-[#cb4b16] text-slate-500 font-bold rounded-full text-xs uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Submit another inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
