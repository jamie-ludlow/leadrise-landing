import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { SocialProof } from '@/components/sections/SocialProof';
import { Pricing } from '@/components/sections/Pricing';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FooterCTA />
      <Footer />
    </main>
  );
}
