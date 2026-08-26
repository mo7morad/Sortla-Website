import React from 'react';

const steps: {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  zoom?: string;
}[] = [
  {
    number: '01',
    title: 'Mount any iPhone or iPad',
    description:
      'Clip it above your bins, or plug in a USB-C webcam. The preview flips upside down for overheads.',
    image: '/ob-station.jpg',
    imageAlt: 'An iPad mounted above three labelled waste bins',
  },
  {
    number: '02',
    title: 'Sortla watches every item',
    description:
      'An on-device vision model segments each item in view, and an on-device language model handles the rest.',
    image: '/ob-ipad.jpg',
    imageAlt: 'The Sortla app running on an iPad above the bins, labelling each stream',
    // The iPad sits small in the frame — punch in so the running app reads as the subject
    zoom: 'scale-[1.75] origin-[50%_32%]',
  },
  {
    number: '03',
    title: 'People throw it right',
    description:
      'The matching bin lights up and a sound confirms every correct throw, gently flagging the misses.',
    image: '/ob-welcome.jpg',
    imageAlt: 'People dropping waste into the matching bin',
  },
];

export const HowItWorksSection: React.FC = () => (
  <section id="how-it-works" className="w-full bg-page pt-16 pb-20 md:pt-[60px] md:pb-[100px]">
    <div className="shell">
      <h2 className="h-section text-black">How it works</h2>
      <p className="p-lede mt-3 text-sortla-body max-w-[900px]">
        The sorting guide that never takes a day off. No rewiring and no signage nobody reads.
      </p>

      <div className="mt-10 md:mt-[52px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-12">
        {steps.map((step) => (
          <article key={step.number} className="flex flex-col">
            <div className="w-full aspect-[331/388] overflow-hidden bg-[#D9D9D9]">
              <img
                src={step.image}
                alt={step.imageAlt}
                loading="lazy"
                className={`w-full h-full object-cover object-center ${step.zoom ?? ''}`}
              />
            </div>

            <div className="mt-5 font-serif font-bold text-[38px] sm:text-[45px] leading-none text-black">
              {step.number}
            </div>

            <h3 className="h-card mt-3 text-[#181818]">{step.title}</h3>

            <p className="p-card mt-2.5 text-sortla-bodyAlt">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
