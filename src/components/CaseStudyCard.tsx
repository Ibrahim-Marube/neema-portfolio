'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CaseStudy } from '@/lib/types';

interface Props {
  caseStudy: CaseStudy;
}

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.1 * i, ease: 'easeOut' },
  }),
};

export default function CaseStudyCard({ caseStudy }: Props) {
  return (
    <Link href={`/portfolio/${caseStudy.id}`}>
      <motion.div
        className="card h-full cursor-pointer group"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.h3
          className="text-2xl font-bold mb-3 text-primary-navy dark:text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {caseStudy.title}
        </motion.h3>
        
        <motion.p
          className="text-primary-teal dark:text-dark-teal font-semibold mb-4"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
        >
          {caseStudy.role}
        </motion.p>
        
        <motion.p
          className="text-primary-gray dark:text-dark-text mb-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          {caseStudy.challenge}
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
        >
          {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
            <div
              key={idx}
              className="bg-primary-teal/10 dark:bg-dark-teal/10 px-4 py-2 rounded-lg group-hover:shadow-md transition-shadow"
            >
              <div className="text-2xl font-bold text-primary-teal dark:text-dark-teal">
                {metric.value}
              </div>
              <div className="text-xs text-primary-gray dark:text-dark-text">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Link>
  );
}
