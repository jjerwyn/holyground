import React from 'react';

export default function HolyGroundLogo({ size = 36, color = '#D97706', glow = true }) {
  return (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      filter: glow ? `drop-shadow(0 4px 12px ${color}35)` : 'none'
    }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Holy Ground Curve / Base */}
        <path
          d="M 6 38 C 16 33, 32 33, 42 38"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 12 42 C 20 39, 28 39, 36 42"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />

        {/* Sacred Flame / Presence Rays */}
        <path
          d="M 24 8 C 24 8, 16 20, 16 27 C 16 31.4 19.6 35 24 35 C 28.4 35 32 31.4 32 27 C 32 20, 24 8, 24 8 Z"
          fill={`url(#flameGrad-${size})`}
        />
        <path
          d="M 24 16 C 24 16, 20 23, 20 27.5 C 20 29.7 21.8 31.5 24 31.5 C 26.2 31.5 28 29.7 28 27.5 C 28 23, 24 16, 24 16 Z"
          fill="#FFF7ED"
          fillOpacity="0.9"
        />

        {/* Radiating Light Rays */}
        <circle cx="24" cy="6" r="2" fill={color} />
        <path d="M 14 12 L 11 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />
        <path d="M 34 12 L 37 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7" />

        <defs>
          <linearGradient id={`flameGrad-${size}`} x1="24" y1="8" x2="24" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#C2410C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
