'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quick Start', href: '/docs/quick-start' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Idea Validation', href: '/docs/validation' },
    ],
  },
  {
    title: 'Core Concepts',
    links: [
      { title: 'Soulbound Tokens', href: '/docs/concepts/sbt' },
      { title: 'Credential Flow', href: '/docs/concepts/flow' },
      { title: 'Security Model', href: '/docs/concepts/security' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { title: 'For Candidates', href: '/docs/guides/candidates' },
      { title: 'For Employers', href: '/docs/guides/employers' },
      { title: 'Wallet Setup', href: '/docs/guides/wallet' },
    ],
  },
  {
    title: 'API Reference',
    links: [
      { title: 'Backend API', href: '/docs/api/backend' },
      { title: 'Smart Contracts', href: '/docs/api/contracts' },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      <Header showNavLinks={true} showCTAButtons={false} showWalletButton={false} />
      
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-24 space-y-8">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className={`block text-sm py-1 px-3 rounded-md transition-colors ${
                            pathname === link.href
                              ? 'bg-violet-100 text-violet-700 font-medium'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="prose prose-slate max-w-none">
              {children}
            </div>
          </main>

          {/* On This Page (Table of Contents) */}
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                On This Page
              </h3>
              <div className="text-sm text-slate-600 space-y-2">
                <p className="text-xs text-slate-500">
                  Links will appear here based on page headings
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
