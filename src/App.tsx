import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ThreeBinsSection } from './components/ThreeBinsSection';
import { StatsDashboardSection } from './components/StatsDashboardSection';
import { TechSection } from './components/TechSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-page text-ink">
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />

        {/* Bins and stats share one continuous dark block, split by a hairline */}
        <section id="three-bins" className="w-full bg-dark text-white">
          <ThreeBinsSection />
          <StatsDashboardSection />
        </section>

        <TechSection />
        <FAQSection />
        <CTASection onOpenContact={() => setContactModalOpen(true)} />
      </main>

      <Footer />

      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
};

export default App;
