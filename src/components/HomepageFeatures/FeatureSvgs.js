import React from 'react';

export const NotesSVG = (props) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="40" y="30" width="120" height="140" rx="8" fill="#2B3042" stroke="#7E8CE0" strokeWidth="3"/>
    <path d="M60 60H140" stroke="#AAB3F5" strokeWidth="3" strokeLinecap="round"/>
    <path d="M60 85H140" stroke="#5E6AD2" strokeWidth="3" strokeLinecap="round"/>
    <path d="M60 110H120" stroke="#5E6AD2" strokeWidth="3" strokeLinecap="round"/>
    <path d="M60 135H100" stroke="#5E6AD2" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="130" cy="135" r="15" stroke="#FF7F50" strokeWidth="3" fill="none"/>
    <path d="M130 125L130 145" stroke="#FF7F50" strokeWidth="2"/>
    <path d="M120 135L140 135" stroke="#FF7F50" strokeWidth="2"/>
    {/* Floating elements */}
    <circle cx="170" cy="50" r="5" fill="#AAB3F5" opacity="0.5"/>
    <rect x="20" y="150" width="10" height="10" stroke="#7E8CE0" transform="rotate(15)" opacity="0.5"/>
  </svg>
);

export const SimulationSVG = (props) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Atom orbits */}
    <ellipse cx="100" cy="100" rx="70" ry="25" stroke="#7E8CE0" strokeWidth="2" transform="rotate(45 100 100)"/>
    <ellipse cx="100" cy="100" rx="70" ry="25" stroke="#AAB3F5" strokeWidth="2" transform="rotate(-45 100 100)"/>
    {/* Nucleus */}
    <circle cx="100" cy="100" r="12" fill="#5E6AD2"/>
    {/* Electrons */}
    <circle cx="150" cy="50" r="6" fill="#FF7F50"/>
    <circle cx="50" cy="150" r="6" fill="#FF7F50"/>
    {/* Play button feel */}
    <path d="M180 170L190 175L180 180V170Z" fill="#AAB3F5"/>
  </svg>
);

export const QuizSVG = (props) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Background Card */}
    <rect x="30" y="40" width="140" height="120" rx="12" fill="#2B3042" stroke="#5E6AD2" strokeWidth="3"/>
    {/* Checkmarks */}
    <rect x="50" y="65" width="20" height="20" rx="4" stroke="#AAB3F5" strokeWidth="2"/>
    <path d="M55 75L60 80L75 60" stroke="#FF7F50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="50" y="100" width="20" height="20" rx="4" stroke="#5E6AD2" strokeWidth="2"/>
    <rect x="50" y="135" width="20" height="20" rx="4" stroke="#5E6AD2" strokeWidth="2"/>
    {/* Text Lines */}
    <path d="M85 75H150" stroke="#AAB3F5" strokeWidth="3" strokeLinecap="round"/>
    <path d="M85 110H140" stroke="#5E6AD2" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
    <path d="M85 145H130" stroke="#5E6AD2" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
  </svg>
);
