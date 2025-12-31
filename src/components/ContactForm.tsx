'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-primary-navy dark:text-white">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-surface text-primary-gray dark:text-dark-text focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all text-base"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-primary-navy dark:text-white">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-surface text-primary-gray dark:text-dark-text focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all text-base"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-primary-navy dark:text-white">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-surface text-primary-gray dark:text-dark-text focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all text-base"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-2 text-primary-navy dark:text-white">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-surface text-primary-gray dark:text-dark-text focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all text-base"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-primary-navy dark:text-white">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-surface text-primary-gray dark:text-dark-text focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all resize-none text-base"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}
