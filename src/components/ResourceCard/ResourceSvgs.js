import React from 'react';

const BaseSvg = ({ children, ...props }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {children}
  </svg>
);

export const TextbookSVG = (props) => (
  <BaseSvg {...props}>
    <rect x="50" y="40" width="100" height="120" rx="4" fill="#2B3042" stroke="#5E6AD2" strokeWidth="3"/>
    <path d="M60 40V160" stroke="#5E6AD2" strokeWidth="3"/>
    <path d="M75 60H130" stroke="#AAB3F5" strokeWidth="3" strokeLinecap="round"/>
    <path d="M75 80H130" stroke="#7E8CE0" strokeWidth="3" strokeLinecap="round"/>
    <path d="M75 100H110" stroke="#7E8CE0" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="100" cy="130" r="15" stroke="#FF7F50" strokeWidth="2"/>
    <path d="M100 120V140" stroke="#FF7F50" strokeWidth="2"/>
    <path d="M90 130H110" stroke="#FF7F50" strokeWidth="2"/>
  </BaseSvg>
);

export const AdvancedSVG = (props) => (
  <BaseSvg {...props}>
    <circle cx="100" cy="100" r="60" stroke="#2B3042" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M100 40L100 160" stroke="#5E6AD2" strokeWidth="2" opacity="0.5"/>
    <path d="M40 100L160 100" stroke="#5E6AD2" strokeWidth="2" opacity="0.5"/>
    {/* Integral symbol */}
    <path d="M85 80C85 70 95 70 95 60C95 50 85 50 85 50" stroke="#FF7F50" strokeWidth="3" strokeLinecap="round"/>
    <path d="M115 120C115 130 105 130 105 140C105 150 115 150 115 150" stroke="#FF7F50" strokeWidth="3" strokeLinecap="round"/>
    <path d="M95 60L105 140" stroke="#FF7F50" strokeWidth="3"/>
    <circle cx="140" cy="60" r="5" fill="#AAB3F5"/>
    <circle cx="60" cy="140" r="5" fill="#AAB3F5"/>
  </BaseSvg>
);

export const VideoSVG = (props) => (
  <BaseSvg {...props}>
    <rect x="30" y="50" width="140" height="100" rx="8" fill="#2B3042" stroke="#7E8CE0" strokeWidth="3"/>
    <path d="M90 85L120 100L90 115V85Z" fill="#FF7F50" stroke="#FF7F50" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M30 130H170" stroke="#5E6AD2" strokeWidth="3" opacity="0.5"/>
    <rect x="70" y="150" width="60" height="10" fill="#2B3042" stroke="#5E6AD2" strokeWidth="2"/>
  </BaseSvg>
);

export const ToolsSVG = (props) => (
  <BaseSvg {...props}>
    <circle cx="80" cy="80" r="35" stroke="#AAB3F5" strokeWidth="3"/>
    <circle cx="120" cy="120" r="35" stroke="#5E6AD2" strokeWidth="3"/>
    <path d="M55 55L105 105" stroke="#FF7F50" strokeWidth="3" strokeLinecap="round"/>
    <path d="M145 145L95 95" stroke="#FF7F50" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="100" cy="100" r="5" fill="#FF7F50"/>
  </BaseSvg>
);

export const ProblemSVG = (props) => (
  <BaseSvg {...props}>
    <rect x="60" y="40" width="80" height="80" rx="8" stroke="#5E6AD2" strokeWidth="3" transform="rotate(45 100 80)"/>
    <rect x="60" y="40" width="80" height="80" rx="8" stroke="#AAB3F5" strokeWidth="3" transform="rotate(45 100 120)"/>
    <text x="100" y="100" textAnchor="middle" fontSize="40" fill="#FF7F50" fontFamily="monospace" fontWeight="bold">?</text>
  </BaseSvg>
);

export const CodeSVG = (props) => (
  <BaseSvg {...props}>
    <rect x="30" y="40" width="140" height="120" rx="8" fill="#2B3042" stroke="#5E6AD2" strokeWidth="3"/>
    <circle cx="45" cy="55" r="3" fill="#FF7F50"/>
    <circle cx="55" cy="55" r="3" fill="#AAB3F5"/>
    <circle cx="65" cy="55" r="3" fill="#5E6AD2"/>
    <path d="M30 70H170" stroke="#5E6AD2" strokeWidth="1" opacity="0.5"/>
    <path d="M50 90H120" stroke="#AAB3F5" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 110H140" stroke="#7E8CE0" strokeWidth="3" strokeLinecap="round"/>
    <path d="M50 130H100" stroke="#5E6AD2" strokeWidth="3" strokeLinecap="round"/>
    <path d="M130 130L140 140L150 120" stroke="#FF7F50" strokeWidth="2" fill="none"/>
  </BaseSvg>
);
