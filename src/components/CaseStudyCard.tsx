import Link from 'next/link';
import { CaseStudy } from '@/lib/types';

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: Props) {
  return (
    <Link href={`/portfolio/${caseStudy.id}`}>
      <div className="card h-full cursor-pointer">
        <h3 className="text-2xl font-bold mb-3 text-primary-navy dark:text-white">
          {caseStudy.title}
        </h3>
        <p className="text-primary-teal dark:text-dark-teal font-semibold mb-4">
          {caseStudy.role}
        </p>
        <p className="text-primary-gray dark:text-dark-text mb-6">
          {caseStudy.challenge}
        </p>
        <div className="flex flex-wrap gap-2">
          {caseStudy.metrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="bg-primary-teal/10 dark:bg-dark-teal/10 px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold text-primary-teal dark:text-dark-teal">
                {metric.value}
              </div>
              <div className="text-xs text-primary-gray dark:text-dark-text">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
