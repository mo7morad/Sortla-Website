import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { asset } from '../lib/asset';

export const SmartSortingSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsTap, setNeedsTap] = useState(false);

  const start = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari only autoplays a video it can see is muted, and React sets `muted`
    // as a property rather than an attribute — so set both before asking to play.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');

    video
      .play()
      .then(() => setNeedsTap(false))
      // Low Power Mode and similar policies refuse outright: offer a tap instead.
      .catch(() => setNeedsTap(true));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;

    start();
    video.addEventListener('loadeddata', start);

    // Some browsers defer playback until the element is actually on screen.
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && start()),
      { threshold: 0.2 },
    );
    observer.observe(video);

    return () => {
      video.removeEventListener('loadeddata', start);
      observer.disconnect();
    };
  }, [start]);

  return (
    <section id="smart-sorting" className="w-full bg-page pt-16 pb-20 md:pt-[60px] md:pb-[70px]">
      <div className="shell">
        <h2 className="h-section text-black">Smart sorting made simple</h2>
        <p className="p-lede mt-3 text-sortla-body">
          An adaptable camera system designed to fit standard waste setups and streamline proper
          disposal automatically
        </p>

        <div className="relative mt-6 md:mt-7 mx-auto w-full max-w-[556px] aspect-square overflow-hidden rounded-[14px] bg-[#D9D9D9]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={asset('/hero-video-poster.jpg')}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            // Restart by hand if the browser drops the loop
            onEnded={start}
            aria-label="A camera mounted above three labelled bins, watching items being sorted into organic, residual and inorganic"
          >
            <source src={asset('/hero-video.mp4')} type="video/mp4" />
          </video>

          {needsTap && (
            <button
              type="button"
              onClick={start}
              className="absolute inset-0 flex items-center justify-center bg-black/25 cursor-pointer"
              aria-label="Play the video"
            >
              <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                <Play size={24} className="text-black translate-x-[2px]" fill="currentColor" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
