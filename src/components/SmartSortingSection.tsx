import React, { useEffect, useRef } from 'react';
import { asset } from '../lib/asset';

export const SmartSortingSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Honour reduced-motion: hold the loop on its first frame instead of playing it
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      if (query.matches) {
        video.pause();
        video.currentTime = 0;
      } else {
        void video.play().catch(() => undefined);
      }
    };

    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  return (
    <section id="smart-sorting" className="w-full bg-page pt-16 pb-20 md:pt-[60px] md:pb-[70px]">
      <div className="shell">
        <h2 className="h-section text-black">Smart sorting made simple</h2>
        <p className="p-lede mt-3 text-sortla-body">
          An adaptable camera system designed to fit standard waste setups and streamline proper
          disposal automatically
        </p>

        <div className="mt-6 md:mt-7 mx-auto w-full max-w-[556px] aspect-square overflow-hidden rounded-[14px] bg-[#D9D9D9]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={asset("/hero-video.mp4")}
            poster={asset("/hero-video-poster.jpg")}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="A camera mounted above three labelled bins, watching items being sorted into organic, residual and inorganic"
          />
        </div>
      </div>
    </section>
  );
};
