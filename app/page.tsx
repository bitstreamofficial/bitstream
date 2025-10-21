import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { ProjectsSection } from '@/components/sections/projects';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
