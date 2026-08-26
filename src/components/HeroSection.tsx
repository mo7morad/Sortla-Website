import React from 'react';
import { asset } from '../lib/asset';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToExplore = () =>
    document.getElementById('smart-sorting')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="w-full bg-cta pt-32 pb-16 md:pt-[150px] md:pb-[90px]">
      <div className="shell grid grid-cols-1 lg:grid-cols-[minmax(0,520fr)_minmax(0,470fr)] gap-10 lg:gap-[60px] items-center">
        <div>
          <h1 className="font-serif font-bold text-[38px] sm:text-[50px] md:text-[58px] leading-[1.08] tracking-[-0.015em] text-ink">
            Point a camera at trash. Get the right bin.
          </h1>

          <p className="p-lede mt-5 text-[#2C3A30] max-w-[520px]">
            Sortla watches your bins and shows people exactly where each item belongs. Everything
            runs on the device in the room — no cloud, no accounts, no rewiring.
          </p>

          <button
            type="button"
            onClick={scrollToExplore}
            className="mt-8 h-[56px] px-8 rounded-full bg-ink hover:bg-black text-white font-sans font-medium text-[17px] inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
          >
            <span>Let&rsquo;s explore</span>
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>

        <div className="relative">
          <img
            src={asset("/ob-welcome.jpg")}
            alt="People dropping waste into the organic, residual and inorganic bins"
            className="w-full h-auto mix-blend-multiply select-none"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};
