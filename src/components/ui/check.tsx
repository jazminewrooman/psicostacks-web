import React from 'react';

interface CheckProps extends React.SVGProps<SVGSVGElement> {}

export const Check: React.FC<CheckProps> = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
