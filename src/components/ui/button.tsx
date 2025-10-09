import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  onClick, 
  children, 
  variant = "solid",
  className,
  ...props 
}) => (
  <a
    href={href}
    onClick={onClick}
    className={cn(
      "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition-colors",
      variant === "solid"
        ? "bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800"
        : "bg-white border border-slate-300 text-slate-800 hover:bg-slate-50",
      className
    )}
    {...props}
  >
    {children}
  </a>
);
