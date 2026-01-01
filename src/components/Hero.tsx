'use client';

import { motion } from 'framer-motion';
import CTAButtons from './CTAButtons';
import TypingText from './TypingText';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 pb-12 sm:pb-14 md:pb-16 bg-gradient-to-br from-primary-lightgray to-white dark:from-dark-bg dark:to-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-teal/10 dark:bg-dark-teal/10 text-primary-teal dark:text-dark-teal rounded-full text-sm sm:text-base font-medium">
                <span className="text-xl">•</span>
                <span>Hello, Welcome!</span>
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary-navy dark:text-white">
              I&apos;m Neema Kemunto
              <span className="block text-sm sm:text-base md:text-lg font-normal mt-3 text-primary-gray dark:text-dark-text">
                <TypingText text="MBA, ACIM, CDMP" speed={100} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-primary-navy dark:text-white font-semibold mb-4"
            >
              Information Systems &amp; Digital Transformation Manager
            </motion.p>

            {/* Smaller tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-base sm:text-lg md:text-xl font-semibold text-primary-teal dark:text-dark-teal mb-4"
            >
              Turning business challenges into data-driven, actionable solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-base sm:text-lg text-primary-gray dark:text-dark-text mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I help organizations optimize processes, implement digital transformation initiatives,
              and make informed decisions through data analysis. With expertise spanning business
              intelligence, strategic planning, and systems management, I deliver solutions that
              create measurable impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <CTAButtons />
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0 order-first lg:order-last"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-teal to-primary-navy rounded-full opacity-10 blur-3xl scale-110" />
              <Image
                src="/images/neema-kemunto.jpg"
                alt="Neema Kemunto - Information Systems Digital Transformation Manager"
                width={480}
                height={480}
                className="rounded-full object-cover shadow-2xl ring-6 sm:ring-8 ring-white/50 dark:ring-gray-800/50 relative z-10 w-full h-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Centered bouncing mouse scroll indicator (desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:flex absolute bottom-3 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5"
      >
        <div className="w-6 h-10 border-2 border-primary-teal/40 dark:border-dark-teal/40 rounded-full p-1 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-primary-teal dark:bg-dark-teal rounded-full"
          />
        </div>
        <p className="text-xs text-primary-gray dark:text-dark-text font-medium">Scroll</p>
      </motion.div>
    </section>
  );
}
