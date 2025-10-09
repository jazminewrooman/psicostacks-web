import React from 'react';
import { COLORS } from '@/lib/colors';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 28 }) => (
  <a href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
    <svg width={size} height={size} viewBox="0 0 64 64" className="shrink-0" aria-label="PsicoStacks">
      {/* stacked layers */}
      <path d="M8 38l12 7 12-7-12-7-12 7zm12-15l12 7 12-7-12-7-12 7zm12 23l12 7 12-7-12-7-12 7z" fill={COLORS.lilacSoft} />
      {/* brain nodes */}
      <g fill="none" stroke={COLORS.lilacDark} strokeWidth="3" strokeLinecap="round">
        <circle cx="18" cy="18" r="2.5" fill={COLORS.lilacDark} />
        <circle cx="27" cy="12" r="2.5" fill={COLORS.lilacDark} />
        <circle cx="36" cy="15" r="2.5" fill={COLORS.lilacDark} />
        <circle cx="43" cy="22" r="2.5" fill={COLORS.lilacDark} />
        <circle cx="30" cy="24" r="2.5" fill={COLORS.lilacDark} />
        <path d="M18 18 L27 12 L36 15 L43 22 L30 24 L18 18" />
      </g>
    </svg>
    <span className="text-xl font-bold tracking-tight" style={{ color: COLORS.lilacDark }}>PsicoStacks</span>
  </a>
);
