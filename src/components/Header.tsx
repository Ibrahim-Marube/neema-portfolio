'use client';

import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import AvailableBadge from './AvailableBadge';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-teal to-primary-navy dark:from-primary-navy dark:to-primary-teal backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            NK
          </Link>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-white/90 hover:text-white transition text-sm lg:text-base font-medium">
              Home
            </Link>
            <Link href="/professional-expertise" className="text-white/90 hover:text-white transition text-sm lg:text-base font-medium">
              Expertise
            </Link>
            <Link href="/portfolio" className="text-white/90 hover:text-white transition text-sm lg:text-base font-medium">
              Portfolio
            </Link>
            <Link href="/insights" className="text-white/90 hover:text-white transition text-sm lg:text-base font-medium">
              Insights
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-white transition text-sm lg:text-base font-medium">
              Contact
            </Link>
            <AvailableBadge />
            <DarkModeToggle />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <DarkModeToggle />
            <button
              className="text-white p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/20">
            <AvailableBadge />
            <Link 
              href="/" 
              className="block text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/professional-expertise" 
              className="block text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link 
              href="/portfolio" 
              className="block text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/insights" 
              className="block text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <Link 
              href="/contact" 
              className="block text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
