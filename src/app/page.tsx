import Hero from '@/components/Hero';
import LogoBar from '@/components/LogoBar';
import CaseStudyCard from '@/components/CaseStudyCard';
import AboutSection from '@/components/AboutSection';
import InspirationSection from '@/components/InspirationSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import { caseStudies } from '@/lib/caseStudies';

export default function Home() {
  return (
    <>
      <Hero />
      
      <AboutSection />

      <InspirationSection />

      <FeaturedProjects />

      <LogoBar />
    </>
  );
}
