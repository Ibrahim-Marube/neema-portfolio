'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MoreAboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              More About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-teal to-primary-navy mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card bg-gradient-to-br from-primary-teal/5 to-primary-navy/5 dark:from-dark-teal/10 dark:to-primary-navy/10 border-l-4 border-primary-teal dark:border-dark-teal"
            >
              <p className="text-base sm:text-lg text-primary-gray dark:text-dark-text leading-relaxed mb-6">
                I am a blend of <span className="font-semibold text-primary-navy dark:text-white">choleric drive</span> and{' '}
                <span className="font-semibold text-primary-navy dark:text-white">melancholic reflection</span>—someone who is 
                ambitious, determined, and goal-oriented, yet thoughtful and introspective. This combination fuels my passion 
                for growth and learning.
              </p>

              <p className="text-base sm:text-lg text-primary-gray dark:text-dark-text leading-relaxed mb-6">
                I thrive on creating new connections, exploring new places, and diving into experiences that challenge my 
                perspective. Whether it's mastering a new skill, reading a mind-intriguing book, or immersing myself in a 
                different culture, I'm always seeking knowledge that expands my understanding of the world.
              </p>

              <div className="bg-white dark:bg-dark-surface rounded-lg p-6 border-2 border-primary-teal/20 dark:border-dark-teal/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-teal/20 dark:bg-dark-teal/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-teal dark:text-dark-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-navy dark:text-white mb-2">My Personal Motto</h3>
                    <p className="text-xl font-semibold text-primary-teal dark:text-dark-teal italic">
                      "Today, I strive to be better than I was yesterday."
                    </p>
                    <p className="text-sm text-primary-gray dark:text-dark-text mt-3">
                      It's this constant pursuit for improvement, both personally and professionally, that drives me to 
                      approach every challenge with curiosity, determination, and a sense of purpose.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
