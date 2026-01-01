'use client';

import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import AvailableBadge from './AvailableBadge';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-teal to-primary-navy dark:from-primary-navy dark:to-primary-teal backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-tight">
            NK
          </Link>

          {/* Desktop nav */}
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

          {/* Mobile actions */}
          <div className="flex items-center gap-3 md:hidden">
            <DarkModeToggle />
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/60 transition-all hover:bg-white/10"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {/* Hamburger icon */}
              <span className="sr-only">Toggle navigation</span>
              <span className="relative flex flex-col justify-center items-center w-5 h-5">
                {/* Top line */}
                <span
                  className={`absolute block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-out
                  ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
                ></span>
                {/* Middle line */}
                <span
                  className={`absolute block h-[2px] w-4 rounded-full bg-white transition-all duration-200 ease-out
                  ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
                ></span>
                {/* Bottom line */}
                <span
                  className={`absolute block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ease-out
                  ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
                ></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden origin-top transition-all duration-300 ease-out ${
            isMenuOpen
              ? 'max-h-[420px] opacity-100 scale-y-100'
              : 'max-h-0 opacity-0 scale-y-95 pointer-events-none'
          }`}
        >
          <div className="py-4 space-y-4 border-t border-white/20 bg-gradient-to-b from-primary-navy/95 to-primary-teal/95 backdrop-blur-xl rounded-b-2xl px-1">
            <div className="px-3">
              <AvailableBadge />
            </div>
            <Link
              href="/"
              className="block px-3 text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/professional-expertise"
              className="block px-3 text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Expertise
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/insights"
              className="block px-3 text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="block px-3 text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
