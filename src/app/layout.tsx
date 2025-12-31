import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Neema Kemunto | Digital Transformation & Business Analysis',
  description: 'Information Systems & Digital Transformation Manager specializing in business analysis, digital transformation, and data-driven solutions.',
  keywords: 'Business Analyst, Digital Transformation, Information Systems, Data Analysis, Power BI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
