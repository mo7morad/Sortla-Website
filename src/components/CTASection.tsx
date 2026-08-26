import React from 'react';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => (
  <section className="w-full bg-cta pt-16 pb-14 md:pt-[74px] md:pb-[62px]">
    <div className="shell flex flex-col items-center text-center">
      <h2 className="h-section text-black">Bring Sortla to your place</h2>

      <p className="p-lede mt-4 max-w-[700px] text-[#1B1B1B]">
        Whether it's one café counter or a campus of bins, we'd love to show you what your waste
        stream looks like.
      </p>

      <button
        type="button"
        onClick={onOpenContact}
        className="mt-8 h-[58px] w-full max-w-[330px] rounded-full bg-[#F8F8F8] hover:bg-white font-sans font-bold text-[17px] sm:text-[18px] text-black shadow-[0_6px_18px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-[0_10px_26px_-10px_rgba(0,0,0,0.45)] active:scale-[0.98] cursor-pointer"
      >
        Contact US
      </button>
    </div>
  </section>
);
