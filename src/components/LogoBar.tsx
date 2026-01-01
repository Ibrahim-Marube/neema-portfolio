'use client';

import Image from 'next/image';

export default function LogoBar() {
  const companies = [
    { name: 'KNH', logo: '/images/logos/knh.jpg' },
    { name: 'Multichoice Kenya', logo: '/images/logos/multichoice.svg' },
    { name: 'First Community Bank', logo: '/images/logos/first-community-bank.jpg' },
    { name: 'APA Insurance', logo: '/images/logos/apa-insurance.jpg' },
    { name: 'Digital 4 Africa', logo: '/images/logos/digital4africa.jpg' }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-primary-lightgray via-white to-primary-lightgray dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-primary-gray dark:text-dark-text mb-8 font-semibold text-sm sm:text-base">
          Worked with
        </p>
        
        <div className="relative">
          {/* Gradient overlays */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-dark-bg to-transparent z-10 pointer-events-none"></div>
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-dark-bg to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
            <div className="flex gap-8 sm:gap-12 py-4 px-1 animate-logo-scroll">
              {[...companies, ...companies].map((company, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-28 sm:w-36 h-12 sm:h-16 relative"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logo-scroll {
          animation: logo-scroll 25s linear infinite;
        }
        /* Hide scrollbar in WebKit */
        div[class*="overflow-x-auto"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
