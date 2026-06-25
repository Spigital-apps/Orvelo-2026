import { ReactNode } from 'react';

export const SectionLabel = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`flex items-center gap-3 mb-6 ${className}`}>
    <div className={`h-px w-10 ${className.includes('text-') ? 'bg-current opacity-30' : 'bg-[#cb4b16]/30'}`} />
    <span className={`text-[10px] uppercase tracking-[0.4em] font-bold ${className.includes('text-') ? 'text-current' : 'text-[#cb4b16]'}`}>
      {children}
    </span>
  </div>
);
