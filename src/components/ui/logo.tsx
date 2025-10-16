import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 150 }) => (
  <a href="/" className="inline-flex items-center hover:opacity-80 transition-opacity">
    <Image
      src="/psicostackslogolila.png"
      alt="PsicoStacks"
      width={size}
      height={size * 0.4}
      className="shrink-0"
      priority
    />
  </a>
);
