interface OrveloLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export const OrveloLogo = ({ theme = 'light', className = '' }: OrveloLogoProps) => {
  return (
    <img 
      src="/Orvelo.png" 
      alt="Orvelo Logo" 
      className={className} 
      referrerPolicy="no-referrer"
      onError={(e) => {
        const img = e.currentTarget;
        if (img.src.includes('Orvelo.png')) {
          img.src = '/orvelo.png';
        }
      }}
    />
  );
};
