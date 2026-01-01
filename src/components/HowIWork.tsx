'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiOutlineSearchCircle, HiOutlineLightBulb, HiOutlineCog, HiOutlineChartBar } from 'react-icons/hi';

export default function HowIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const process = [
    {
      step: '01',
      title: 'Analyze',
      description: 'Deep-dive into your business challenges, data, and processes to identify root causes and opportunities.',
      icon: <HiOutlineSearchCircle className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '02',
      title: 'Strategize',
      description: 'Develop data-driven strategies aligned with your goals, stakeholders, and organizational capacity.',
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '03',
      title: 'Transform',
      description: 'Implement solutions with clear roadmaps, change management, and cross-functional collaboration.',
      icon: <HiOutlineCog className="w-8 h-8" />,
      color: 'from-primary-teal to-teal-700'
    },
    {
      step: '04',
      title: 'Optimize',
      description: 'Monitor performance, measure impact, and continuously refine processes for sustained growth.',
      icon: <HiOutlineChartBar className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section ref={ref} className="relative section-padding bg-white dark:bg-dark-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-navy rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-teal to-primary-navy mb-6"
            >
              <HiOutlineCog className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary-navy dark:text-white">
              How I Work
            </h2>
            
            <div className="h-1 w-20 bg-gradient-to-r from-primary-teal to-primary-navy rounded-full mx-auto mb-4"></div>

            <p className="text-base sm:text-lg text-primary-gray dark:text-dark-text max-w-2xl mx-auto">
              A proven 4-step approach to delivering transformation that sticks
            </p>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-primary-teal to-green-500 opacity-20" style={{ top: '80px' }}></div>

            {process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                className="relative"
              >
                <div className="card hover:shadow-xl transition-all duration-300 group relative z-10">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary-teal to-primary-navy flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-3 text-center">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-primary-gray dark:text-dark-text leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on mobile) */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 text-primary-teal/30 dark:text-dark-teal/30 z-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-base sm:text-lg text-primary-gray dark:text-dark-text mb-6">
              Ready to transform your organization?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="btn-primary">
                Let's Talk
              </a>
              <a 
                href="https://calendly.com/neemakemunto/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
