import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <g fill="currentColor">
        {/* Left Pillar */}
        <polygon points="26,90 38,90 38,32 26,10" />
        {/* Right Pillar */}
        <polygon points="62,90 74,90 74,10 62,32" />
      </g>
    </svg>
  );
};
