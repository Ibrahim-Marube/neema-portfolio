import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4">Let's Connect</h1>
        <p className="text-base sm:text-lg lg:text-xl text-center text-primary-gray dark:text-dark-text mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto">
          Have a project in mind or want to discuss how I can help your organization? 
          I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
            <ContactForm />
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Schedule a Call</h2>
              <div className="card">
                <p className="text-sm sm:text-base text-primary-gray dark:text-dark-text mb-4">
                  Prefer to talk? Book a 15-minute call to discuss your needs.
                </p>
                <a 
                  href="https://calendly.com/neemakemunto/15min" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Book a Call
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Connect on LinkedIn</h2>
              <div className="card">
                <p className="text-sm sm:text-base text-primary-gray dark:text-dark-text mb-4">
                  Let's connect professionally on LinkedIn.
                </p>
                <a 
                  href="https://linkedin.com/in/neemakemunto" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
