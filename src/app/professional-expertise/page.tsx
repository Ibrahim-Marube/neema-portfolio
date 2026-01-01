export default function ProfessionalExpertise() {
  const coreExpertise = [
    {
      title: 'Information Systems Management',
      description: 'Optimizing systems to drive efficiency and growth.'
    },
    {
      title: 'Business Analysis',
      description: 'Translating complex business needs into actionable solutions.'
    },
    {
      title: 'Digital & Global Marketing Strategy',
      description: 'Leveraging data-driven marketing across international markets.'
    },
    {
      title: 'Digital Transformation Leadership',
      description: 'Guiding organizations through process and technology change.'
    },
    {
      title: 'Project Management & Delivery',
      description: 'Leading initiatives from planning to successful execution.'
    },
    {
      title: 'Monitoring & Evaluation',
      description: 'Tracking outcomes, performance, and impact.'
    }
  ];


  const skills = [
    {
      title: 'Data Analysis & Insights',
      description: 'Interpreting data to inform strategic decisions.'
    },
    {
      title: 'Power BI & Data Visualization',
      description: 'Creating interactive dashboards and clear visual reporting tools.'
    },
    {
      title: 'Business Process Reengineering (BPR)',
      description: 'Streamlining operations and improving workflows.'
    },
    {
      title: 'Stakeholder Engagement',
      description: 'Building relationships and facilitating collaboration.'
    },
    {
      title: 'Strategy Development & Alignment',
      description: 'Linking systems, processes, and business objectives.'
    },
    {
      title: 'Problem Solving & Decision Support',
      description: 'Identifying challenges and implementing practical solutions.'
    }
  ];


  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16">Professional Expertise</h1>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreExpertise.map((item, idx) => (
              <div key={idx} className="card">
                <h3 className="text-xl font-bold mb-2 text-primary-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="text-primary-gray dark:text-dark-text">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((item, idx) => (
              <div key={idx} className="card">
                <h3 className="text-xl font-bold mb-2 text-primary-navy dark:text-white">
                  {item.title}
                </h3>
                <p className="text-primary-gray dark:text-dark-text">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white">Swahili</h3>
              <p className="text-primary-gray dark:text-dark-text">Native</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white">English</h3>
              <p className="text-primary-gray dark:text-dark-text">Native</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white">German</h3>
              <p className="text-primary-gray dark:text-dark-text">B1 (Currently Improving)</p>
            </div>
          </div>
        </section>


        <section>
          <h2 className="text-3xl font-bold mb-8">Education & Certifications</h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">
                BSc | International Business Administration - Information Systems Management
              </h3>
              <p className="text-primary-teal dark:text-dark-teal">
                United States International University
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">
                Master of Business Administration | Strategic Management
              </h3>
              <p className="text-primary-teal dark:text-dark-teal">
                United States International University
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">
                Master of Arts | International Marketing & Media Management
              </h3>
              <p className="text-primary-teal dark:text-dark-teal">
                Media University of Applied Science Berlin, Germany
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-primary-navy dark:text-white mb-2">
                Certifications
              </h3>
              <ul className="list-disc list-inside text-primary-gray dark:text-dark-text space-y-2">
                <li>Digital Marketing (CDMP) - Digital Marketing Institute, Ireland</li>
                <li>Professional Marketing in Digital Strategy (ACIM) - Chartered Institute of Marketing, UK</li>
                <li>Business Intelligence with Power BI - Strathmore University, Kenya</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
