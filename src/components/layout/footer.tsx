import React from 'react';
import { Logo } from '@/components/ui/logo';

export const Footer: React.FC = () => (
  <footer className="border-t border-slate-100">
    <div className="mx-auto max-w-7xl px-6 py-10 text-xs text-slate-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <Logo />
        <div className="flex items-center gap-4">
          <a href="#how" className="hover:text-slate-700 transition-colors">How it works</a>
          <a href="#privacy" className="hover:text-slate-700 transition-colors">Privacy</a>
          <a href="#cta" className="hover:text-slate-700 transition-colors">Get started</a>
          <a href="/docs" className="hover:text-slate-700 transition-colors">Docs</a>
        </div>
      </div>
      <p className="mt-4">© {new Date().getFullYear()} PsicoStacks · No PII on-chain · Made with ❤️ from 🇲🇽</p>
    </div>
  </footer>
);
