import React from 'react';
import { asset } from '../lib/asset';

const cards = [
  {
    title: 'Private by design',
    description:
      'Every frame is processed on the device itself. No cloud, no accounts, no footage leaving the room.',
    image: '/tech-private.jpg',
    imageAlt: 'A phone showing its privacy settings, lit only by the screen',
  },
  {
    title: 'Custom Trained',
    description:
      'We can custom train the model for your specific case, to make the system even more reliable.',
    image: '/tech-custom-trained.jpg',
    imageAlt: 'Someone reading charts on a tablet',
  },
];

export const TechSection: React.FC = () => (
  <section id="tech" className="w-full bg-tech pt-16 pb-20 md:pt-[60px] md:pb-[80px]">
    <div className="shell">
      <h2 className="h-section md:text-[52px] text-center text-black">How the tech can help you</h2>

      <div className="mt-10 md:mt-[64px] mx-auto max-w-[730px] grid grid-cols-1 sm:grid-cols-2 gap-x-[98px] gap-y-12">
        {cards.map((card) => (
          <article key={card.title} className="flex flex-col">
            <div className="w-full aspect-[316/403] overflow-hidden bg-[#D9D9D9]">
              <img
                src={asset(card.image)}
                alt={card.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <h3 className="h-card mt-5 text-[#181818]">{card.title}</h3>
            <p className="p-card mt-2 text-sortla-bodyAlt">{card.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
