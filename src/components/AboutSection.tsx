'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineChartBar, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FiCpu } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import SectionFadeIn from './SectionFadeIn';

type AboutItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type StatItem = {
  label: string;
  value: string;
  icon: ReactNode;
  numericValue: number;
};

const aboutItems: AboutItem[] = [
  {
    title: 'Digital transformation leadership',
    description:
      'Bringing structure, clarity, and ownership to complex change so teams can deliver confidently and sustainably.',
    icon: <HiOutlineLightBulb className="w-6 h-6" />,
  },
  {
    title: 'Data‑driven decision making',
    description:
      'Designing reporting and insight flows that help leaders see the right information at the right time.',
    icon: <HiOutlineChartBar className="w-6 h-6" />,
  },
  {
    title: 'Systems thinking',
    description:
      'Looking across processes, teams, and platforms to avoid silos and create end‑to‑end experiences.',
    icon: <FiCpu className="w-6 h-6" />,
  },
  {
    title: 'Global collaboration',
    description:
      'Working with cross‑functional, distributed teams and stakeholders to co‑create solutions that stick.',
    icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
  },
];

const stats: StatItem[] = [
  {
    label: 'Years in transformation',
    value: '8+',
    numericValue: 8,
    icon: <HiOutlineChartBar className="w-5 h-5" />,
  },
  {
    label: 'Teams enabled',
    value: '50+',
    numericValue: 50,
    icon: <BsPeople className="w-5 h-5" />,
  },
  {
    label: 'Projects delivered',
    value: '25+',
    numericValue: 25,
    icon: <FiCpu className="w-5 h-5" />,
  },
];

function CountUpNumber({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const textVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * i, ease: 'easeOut' },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: 0.1 * i, ease: 'easeOut' },
  }),
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <SectionFadeIn className="relative bg-white dark:bg-dark-surface py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={textVariant}
          custom={0}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-navy dark:text-white mb-3">
            About Me
          </h2>

          <p className="text-sm sm:text-base text-primary-teal font-medium mb-4">
            Information Systems & Digital Transformation Manager
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-primary-teal to-primary-navy rounded-full mx-auto" />
        </motion.div>

        {/* Centered content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Quote + intro */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariant}
            custom={1}
            className="space-y-6"
          >
            <blockquote className="relative pl-4 sm:pl-5 border-l-2 border-primary-teal/70 dark:border-dark-teal/70">
              <span className="absolute -top-3 left-1 text-4xl text-primary-teal/20 select-none">
                "
              </span>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                Technology is only successful when people understand it, trust it, and can use it to make better decisions every day.
              </p>
            </blockquote>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Neema works at the intersection of business, technology, and people, helping organizations translate strategy into practical digital solutions.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {aboutItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={index}
              >
                <div className="group rounded-xl border border-gray-100 dark:border-white/10 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-primary-navy dark:text-white mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={cardVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={aboutItems.length + index}
                className="rounded-xl border border-gray-100 dark:border-white/10 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm p-4 sm:p-5 flex items-center gap-3"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white leading-tight">
                    <CountUpNumber end={stat.numericValue} suffix="+" />
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionFadeIn>
  );
}
