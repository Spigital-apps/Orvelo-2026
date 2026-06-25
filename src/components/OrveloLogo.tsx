interface OrveloLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export const OrveloLogo = ({ theme = 'light', className = '' }: OrveloLogoProps) => {
  return (
    <svg 
      viewBox="0 0 350 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Orbit Ring */}
      <path 
        d="M 28,55 A 24,24 0 1,1 60,23" 
        stroke={theme === 'dark' ? '#E2E8F0' : '#8A99AD'} 
        strokeWidth="5" 
        strokeLinecap="round"
      />
      {/* Orbit Velocity Slash */}
      <line 
        x1="48" y1="35" 
        x2="68" y2="15" 
        stroke="#31e8fb" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      
      {/* Brand Text */}
      <text 
        x="80" 
        y="42" 
        fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
        fontWeight="800" 
        fontSize="34" 
        letterSpacing="-0.04em"
      >
        <tspan fill={theme === 'dark' ? '#FFFFFF' : '#0F172A'}>orvelo</tspan>
        <tspan fill="#31e8fb">.ai</tspan>
      </text>
      
      {/* Tagline */}
      <text 
        x="81" 
        y="60" 
        fill={theme === 'dark' ? '#94A3B8' : '#64748B'} 
        fontFamily="'Inter', system-ui, -apple-system, sans-serif" 
        fontWeight="600" 
        fontSize="7.5" 
        letterSpacing="0.25em"
      >
        ENGINEERED FOR ORBITAL VELOCITY
      </text>
    </svg>
  );
};
