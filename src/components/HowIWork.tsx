'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionFadeIn from './SectionFadeIn';

const steps = [
  {
    number: '01',
    title: 'Analyze',
    description:
      'Deep-dive into your business challenges, data, and processes to identify root causes and opportunities.',
  },
  {
    number: '02',
    title: 'Strategize',
    description:
      'Develop data-driven strategies aligned with your goals, stakeholders, and organizational capacity.',
  },
  {
    number: '03',
    title: 'Transform',
    description:
      'Implement solutions with clear roadmaps, change management, and cross-functional collaboration.',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'Monitor performance, measure impact, and continuously refine processes for sustained growth.',
  },
];

const stepVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i, ease: 'easeOut' },
  }),
};

export default function HowIWorkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <SectionFadeIn className="relative bg-gradient-to-br from-primary-lightgray via-white to-primary-lightgray dark:from-dark-surface dark:via-dark-bg dark:to-dark-surface py-12 sm:py-16 lg:py-20">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy dark:text-white mb-3">
            How I Work
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A proven 4-step approach to delivering transformation that sticks
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-primary-teal to-primary-navy rounded-full mx-auto mt-6" />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariant}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={index}
              className="relative group"
            >
              <div className="rounded-xl border border-gray-100 dark:border-white/10 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm hover:shadow-md transition-all h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary-teal to-primary-navy flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <div className="pl-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-navy dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (hidden on last item in each column on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-full left-8 w-0.5 h-8 bg-gradient-to-b from-primary-teal/50 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFadeIn>
  );
}
