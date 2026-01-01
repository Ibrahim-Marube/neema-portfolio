import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import HowIWork from '@/components/HowIWork';
import FeaturedProjects from '@/components/FeaturedProjects';
import InspirationSection from '@/components/InspirationSection';
import LogoBar from '@/components/LogoBar';

export default function Home() {
  return (
    <>
      <Hero />
      
      <AboutSection />

      <HowIWork />

      <FeaturedProjects />

      <InspirationSection />

      <LogoBar />
    </>
  );
}
