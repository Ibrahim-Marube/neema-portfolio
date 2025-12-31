'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-navy dark:bg-dark-surface text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Neema Kemunto</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 max-w-md">
                Information Systems & Digital Transformation Manager
              </p>
              <p className="text-sm text-gray-400 mb-6 max-w-md">
                Turning business challenges into data-driven, actionable solutions through strategic planning and digital innovation.
              </p>
              
              {/* Social Links with Icons */}
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/neemakemunto" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-teal flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Email */}
                <a 
                  href="mailto:kemuntomecheo@gmail.com" 
                  className="group w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-teal flex items-center justify-center transition-all duration-300"
                  aria-label="Email"
                  title="kemuntomecheo@gmail.com"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                {/* Calendly */}
                <a 
                  href="https://calendly.com/neemakemunto/15min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-teal flex items-center justify-center transition-all duration-300"
                  aria-label="Schedule a call"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-white text-sm sm:text-base uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm sm:text-base text-gray-300 hover:text-primary-teal transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/professional-expertise" className="text-sm sm:text-base text-gray-300 hover:text-primary-teal transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Professional Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-sm sm:text-base text-gray-300 hover:text-primary-teal transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="text-sm sm:text-base text-gray-300 hover:text-primary-teal transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Insights & Thoughts
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm sm:text-base text-gray-300 hover:text-primary-teal transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary-teal opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="font-bold mb-4 text-white text-sm sm:text-base uppercase tracking-wider">Get in Touch</h4>
              <div className="space-y-4">
                <a 
                  href="https://calendly.com/neemakemunto/15min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-primary-teal transition-colors group"
                >
                  <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a 15-min Call
                </a>

                <div className="pt-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-green-400">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Neema Kemunto. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-primary-teal transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-primary-teal transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
