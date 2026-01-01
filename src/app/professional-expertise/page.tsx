'use client';

import { HiOutlineChartBar, HiOutlineLightBulb, HiOutlineGlobeAlt } from 'react-icons/hi';
import { FiCpu, FiUsers, FiTrendingUp, FiCheckCircle, FiBarChart2 } from 'react-icons/fi';
import { BsPeople, BsGraphUp, BsLightning } from 'react-icons/bs';
import { MdOutlineAnalytics, MdOutlineDesignServices, MdBarChart, MdShowChart } from 'react-icons/md';
import SectionFadeIn from '@/components/SectionFadeIn';

export default function ProfessionalExpertise() {
  const coreExpertise = [
    {
      title: 'Information Systems Management',
      description: 'Optimizing systems to drive efficiency and growth.',
      icon: <FiCpu className="w-6 h-6" />
    },
    {
      title: 'Business Analysis',
      description: 'Translating complex business needs into actionable solutions.',
      icon: <MdOutlineAnalytics className="w-6 h-6" />
    },
    {
      title: 'Digital & Global Marketing Strategy',
      description: 'Leveraging data-driven marketing across international markets.',
      icon: <HiOutlineGlobeAlt className="w-6 h-6" />
    },
    {
      title: 'Digital Transformation Leadership',
      description: 'Guiding organizations through process and technology change.',
      icon: <BsLightning className="w-6 h-6" />
    },
    {
      title: 'Project Management & Delivery',
      description: 'Leading initiatives from planning to successful execution.',
      icon: <FiCheckCircle className="w-6 h-6" />
    },
    {
      title: 'Monitoring & Evaluation',
      description: 'Tracking outcomes, performance, and impact.',
      icon: <BsGraphUp className="w-6 h-6" />
    }
  ];

  const skills = [
    {
      title: 'Data Analysis & Insights',
      description: 'Interpreting data to inform strategic decisions.',
      icon: <HiOutlineChartBar className="w-6 h-6" />
    },
    {
      title: 'Power BI & Data Visualization',
      description: 'Creating interactive dashboards and clear visual reporting tools.',
      icon: <MdOutlineDesignServices className="w-6 h-6" />
    },
    {
      title: 'Business Process Reengineering (BPR)',
      description: 'Streamlining operations and improving workflows.',
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      title: 'Stakeholder Engagement',
      description: 'Building relationships and facilitating collaboration.',
      icon: <BsPeople className="w-6 h-6" />
    },
    {
      title: 'Strategy Development & Alignment',
      description: 'Linking systems, processes, and business objectives.',
      icon: <HiOutlineLightBulb className="w-6 h-6" />
    },
    {
      title: 'Problem Solving & Decision Support',
      description: 'Identifying challenges and implementing practical solutions.',
      icon: <FiUsers className="w-6 h-6" />
    }
  ];

  const tools = [
    { name: 'Power BI', category: 'Data Visualization', icon: <MdBarChart className="w-8 h-8" /> },
    { name: 'Google Analytics', category: 'Analytics', icon: <MdShowChart className="w-8 h-8" /> },
    { name: 'MS Excel', category: 'Data Analysis', icon: <HiOutlineChartBar className="w-8 h-8" /> },
    { name: 'SPSS', category: 'Statistics', icon: <FiBarChart2 className="w-8 h-8" /> },
    { name: 'Asana', category: 'Project Management', icon: <FiCheckCircle className="w-8 h-8" /> },
    { name: 'MS Project', category: 'Project Management', icon: <FiCpu className="w-8 h-8" /> },
    { name: 'Hootsuite', category: 'Marketing', icon: <HiOutlineGlobeAlt className="w-8 h-8" /> },
    { name: 'Sprout Social', category: 'Marketing', icon: <BsGraphUp className="w-8 h-8" /> },
  ];

  return (
    <div className="relative bg-white dark:bg-dark-bg min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-navy rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <SectionFadeIn>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-teal to-primary-navy mb-6">
                <HiOutlineLightBulb className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary-navy dark:text-white">
                Professional Expertise
              </h1>
              
              <div className="h-1 w-20 bg-gradient-to-r from-primary-teal to-primary-navy rounded-full mx-auto mb-6"></div>
              
              <p className="text-base sm:text-lg text-primary-gray dark:text-dark-text max-w-3xl mx-auto leading-relaxed">
                With 8+ years of experience in digital transformation and business analysis, 
                I bring a strategic, data-driven approach to solving complex organizational challenges 
                and delivering measurable results.
              </p>
            </div>
          </SectionFadeIn>

          {/* Core Expertise */}
          <SectionFadeIn>
            <section className="mb-16 sm:mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-primary-navy dark:text-white">
                  Core Expertise
                </h2>
                <p className="text-base text-primary-gray dark:text-dark-text max-w-2xl mx-auto">
                  Strategic capabilities that drive organizational transformation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreExpertise.map((item, idx) => (
                  <div
                    key={idx}
                    className="group card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white mb-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-primary-gray dark:text-dark-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </SectionFadeIn>

          {/* Skills & Capabilities */}
          <SectionFadeIn>
            <section className="mb-16 sm:mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-primary-navy dark:text-white">
                  Skills & Capabilities
                </h2>
                <p className="text-base text-primary-gray dark:text-dark-text max-w-2xl mx-auto">
                  Technical and analytical skills that enable practical solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((item, idx) => (
                  <div
                    key={idx}
                    className="group card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white mb-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-primary-gray dark:text-dark-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </SectionFadeIn>

          {/* Tools & Technologies - Horizontal Scroll */}
          <SectionFadeIn>
            <section className="mb-16 sm:mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-primary-navy dark:text-white">
                  Tools & Technologies
                </h2>
                <p className="text-base text-primary-gray dark:text-dark-text max-w-2xl mx-auto">
                  Platforms and software I use to deliver results
                </p>
              </div>
              
              <div className="relative">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-dark-bg to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-dark-bg to-transparent z-10 pointer-events-none"></div>
                
                {/* Scrolling container */}
                <div className="overflow-hidden">
                  <div className="flex animate-scroll">
                    {/* Duplicate the array for seamless loop */}
                    {[...tools, ...tools].map((tool, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 mx-4 group"
                      >
                        <div className="card w-40 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal group-hover:scale-110 transition-transform">
                            {tool.icon}
                          </div>
                          <p className="font-bold text-primary-navy dark:text-white mb-1 text-sm">
                            {tool.name}
                          </p>
                          <p className="text-xs text-primary-gray dark:text-dark-text">
                            {tool.category}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </SectionFadeIn>

          {/* Languages */}
          <SectionFadeIn>
            <section className="mb-16 sm:mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-primary-navy dark:text-white">
                  Languages
                </h2>
                <p className="text-base text-primary-gray dark:text-dark-text max-w-2xl mx-auto">
                  Enabling effective communication across global teams
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="card text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal mx-auto mb-3">
                    <HiOutlineGlobeAlt className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-1">Swahili</h3>
                  <p className="text-primary-teal dark:text-dark-teal font-medium">Native</p>
                </div>
                <div className="card text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal mx-auto mb-3">
                    <HiOutlineGlobeAlt className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-1">English</h3>
                  <p className="text-primary-teal dark:text-dark-teal font-medium">Native</p>
                </div>
                <div className="card text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal mx-auto mb-3">
                    <HiOutlineGlobeAlt className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-1">German</h3>
                  <p className="text-primary-teal dark:text-dark-teal font-medium">B1 (Improving)</p>
                </div>
              </div>
            </section>
          </SectionFadeIn>

          {/* Education & Certifications */}
          <SectionFadeIn>
            <section className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-primary-navy dark:text-white">
                  Education & Certifications
                </h2>
                <p className="text-base text-primary-gray dark:text-dark-text max-w-2xl mx-auto">
                  Academic foundation and professional credentials
                </p>
              </div>
              
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="card hover:shadow-lg transition-all duration-300 border-l-4 border-primary-teal">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal font-bold">
                      BSc
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white mb-2">
                        International Business Administration - Information Systems Management
                      </h3>
                      <p className="text-primary-teal dark:text-dark-teal font-medium">
                        United States International University
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card hover:shadow-lg transition-all duration-300 border-l-4 border-primary-teal">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal font-bold">
                      MBA
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white mb-2">
                        Strategic Management
                      </h3>
                      <p className="text-primary-teal dark:text-dark-teal font-medium">
                        United States International University
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card hover:shadow-lg transition-all duration-300 border-l-4 border-primary-teal">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-teal/10 dark:bg-dark-teal/10 flex items-center justify-center text-primary-teal dark:text-dark-teal font-bold">
                      MA
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white mb-2">
                        International Marketing & Media Management
                      </h3>
                      <p className="text-primary-teal dark:text-dark-teal font-medium">
                        Media University of Applied Science Berlin, Germany
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card hover:shadow-lg transition-all duration-300 bg-primary-navy/5 dark:bg-dark-surface/50">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-navy dark:text-white mb-4 flex items-center gap-2">
                    <FiCheckCircle className="w-6 h-6 text-primary-teal" />
                    Professional Certifications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-teal mt-2"></span>
                      <div>
                        <p className="font-semibold text-primary-navy dark:text-white">Digital Marketing (CDMP)</p>
                        <p className="text-sm text-primary-gray dark:text-dark-text">Digital Marketing Institute, Ireland</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-teal mt-2"></span>
                      <div>
                        <p className="font-semibold text-primary-navy dark:text-white">Professional Marketing in Digital Strategy (ACIM)</p>
                        <p className="text-sm text-primary-gray dark:text-dark-text">Chartered Institute of Marketing, UK</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-teal mt-2"></span>
                      <div>
                        <p className="font-semibold text-primary-navy dark:text-white">Business Intelligence with Power BI</p>
                        <p className="text-sm text-primary-gray dark:text-dark-text">Strathmore University, Kenya</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </SectionFadeIn>

          {/* CTA Section */}
          <SectionFadeIn>
            <div className="text-center py-12 px-6 rounded-2xl bg-gradient-to-br from-primary-teal/10 to-primary-navy/10 dark:from-dark-teal/10 dark:to-primary-navy/20 border border-primary-teal/20 dark:border-dark-teal/20">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-navy dark:text-white">
                Let's Work Together
              </h3>
              <p className="text-base sm:text-lg text-primary-gray dark:text-dark-text mb-6 max-w-2xl mx-auto">
                Ready to transform your organization with data-driven strategies and digital solutions?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-teal hover:bg-primary-teal/90 text-white rounded-lg font-semibold transition-all hover:shadow-lg"
                >
                  Get In Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://calendly.com/neemakemunto/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white dark:bg-dark-surface border-2 border-primary-teal text-primary-teal hover:bg-primary-teal/5 rounded-lg font-semibold transition-all"
                >
                  Schedule a Call
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
