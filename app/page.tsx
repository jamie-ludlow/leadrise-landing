import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ROICalculator } from '@/components/sections/ROICalculator';
import { SocialProof } from '@/components/sections/SocialProof';
import { HowItsDifferent } from '@/components/sections/HowItsDifferent';
import { LiveDemoCTA } from '@/components/sections/LiveDemoCTA';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ROICalculator />
      <SocialProof />
      <HowItsDifferent />
      <LiveDemoCTA />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
