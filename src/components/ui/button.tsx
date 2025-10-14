import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonAsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
  variant?: 'solid' | 'outline';
  children: React.ReactNode;
}

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  onClick, 
  children, 
  variant = "solid",
  className,
  ...props 
}) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition-colors",
    variant === "solid"
      ? "bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800"
      : "bg-white border border-slate-300 text-slate-800 hover:bg-slate-50",
    className
  );

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={baseClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  // Otherwise, render as button
  return (
    <button
      type="button"
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={baseClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
