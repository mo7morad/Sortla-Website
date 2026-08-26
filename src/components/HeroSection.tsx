import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToExplore = () =>
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative w-full h-[620px] md:h-[720px] lg:h-[780px] overflow-hidden flex items-center justify-center bg-dark">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/ob-welcome.jpg')", filter: 'brightness(0.82)' }}
      />
      <div className="absolute inset-0 bg-[#262626]/55" />

      {/* Live classification readout */}
      <div className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20">
          <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse-subtle" />
          <span className="font-sans font-medium text-[11px] tracking-[0.12em] text-white/90">
            RESIDUAL
          </span>
          <span className="font-mono text-[11px] font-semibold text-slate-300">62%</span>
        </div>
      </div>

      {/* Tracking reticle */}
      <div className="relative z-20 w-[340px] sm:w-[440px] md:w-[500px] h-[320px] md:h-[360px]">
        <div className="absolute inset-0 rounded-2xl border-2 border-sortla-yellow shadow-[0_0_30px_rgba(228,186,0,0.25)] pointer-events-none">
          <span className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-white" />
          <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-white" />
          <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-white" />

          <span className="absolute -top-3.5 left-6 px-3 py-[3px] rounded-md bg-sortla-yellow text-black font-sans font-bold text-[11px] tracking-[0.06em]">
            RECYCLABLE 46%
          </span>

          <span className="absolute top-4 left-6 px-2 py-[3px] rounded bg-black/45 backdrop-blur-sm text-[10px] font-mono text-white/80 border border-white/10">
            track_id #082 · 30 fps
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="font-serif font-bold text-[30px] sm:text-[38px] md:text-[44px] leading-[1.12] tracking-[-0.01em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            Point a camera at trash.
            <br />
            Get the right bin.
          </h1>

          <button
            type="button"
            onClick={scrollToExplore}
            className="mt-7 h-[50px] px-7 rounded-full bg-[#F8F8F8] hover:bg-white text-black font-sans font-medium text-[16px] flex items-center gap-2 shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
          >
            <span>Let's explore</span>
            <ArrowDown size={17} className="transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 text-[11px] font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-sortla-green animate-pulse-subtle" />
        On-device inference · zero cloud latency
      </div>
    </section>
  );
};
