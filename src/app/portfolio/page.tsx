import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudies } from '@/lib/caseStudies';

export default function Portfolio() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">Portfolio</h1>
        <p className="text-xl text-center text-primary-gray dark:text-dark-text mb-16 max-w-3xl mx-auto">
          Explore my case studies showcasing data-driven solutions, process optimization, 
          and digital transformation initiatives that deliver measurable business impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>
      </div>
    </div>
  );
}
