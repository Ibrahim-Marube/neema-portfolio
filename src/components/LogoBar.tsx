'use client';

export default function LogoBar() {
  const companies = [
    'KNH',
    'Multichoice Kenya',
    'First Community Bank',
    'APA Insurance',
    'Digital 4 Africa'
  ];

  return (
    <section className="py-12 bg-white dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-primary-gray dark:text-dark-text mb-8 font-semibold">
          Worked With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div 
              key={company}
              className="text-primary-navy dark:text-dark-text font-bold text-lg opacity-60 hover:opacity-100 transition"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
