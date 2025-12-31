import { caseStudies } from '@/lib/caseStudies';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.id,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((s) => s.id === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/portfolio" 
          className="text-primary-teal dark:text-dark-teal hover:underline mb-8 inline-block"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
        <p className="text-xl text-primary-teal dark:text-dark-teal font-semibold mb-12">
          {caseStudy.role}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {caseStudy.metrics.map((metric, idx) => (
            <div key={idx} className="card text-center">
              <div className="text-4xl font-bold text-primary-teal dark:text-dark-teal mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-primary-gray dark:text-dark-text">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-primary-gray dark:text-dark-text">
            {caseStudy.challenge}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <ul className="space-y-3">
            {caseStudy.solution.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-primary-teal dark:text-dark-teal font-bold mr-3 text-xl">
                  {idx + 1}.
                </span>
                <span className="text-lg text-primary-gray dark:text-dark-text">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Results</h2>
          <ul className="space-y-3">
            {caseStudy.results.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <svg 
                  className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="text-lg text-primary-gray dark:text-dark-text">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.tools.map((tool, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-primary-teal/10 dark:bg-dark-teal/10 text-primary-teal dark:text-dark-teal rounded-lg font-semibold"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
