export default function BookLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-80 h-80 drop-shadow-2xl">
      <defs>
        <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path 
        d="M60,50 L60,150 Q60,160 70,160 L95,160 L100,155 L100,45 L95,50 L70,50 Q60,50 60,50 Z" 
        fill="url(#bookGradient)" 
        stroke="white" 
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path 
        d="M140,50 L140,150 Q140,160 130,160 L105,160 L100,155 L100,45 L105,50 L130,50 Q140,50 140,50 Z" 
        fill="url(#bookGradient)" 
        stroke="white" 
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <line x1="70" y1="80" x2="92" y2="80" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <line x1="70" y1="100" x2="88" y2="100" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <line x1="70" y1="120" x2="92" y2="120" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <line x1="108" y1="80" x2="130" y2="80" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <line x1="108" y1="100" x2="125" y2="100" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <line x1="108" y1="120" x2="130" y2="120" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <path 
        d="M100,45 L100,155" 
        stroke="white" 
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}
