import React, { useState } from 'react';
import { WasteItem } from '../types';

type BinKey = 'organic' | 'residual' | 'recyclable';

const bins: {
  key: BinKey;
  label: string;
  pill: string;
  glow: string;
  items: string[];
}[] = [
  {
    key: 'organic',
    label: 'ORGANIC',
    pill: 'bg-sortla-organic',
    glow: 'border-sortla-green/45 shadow-[0_0_26px_-6px_rgba(46,181,81,0.5)]',
    items: ['Food scraps & peels', 'Coffee grounds & tea', 'Garden & plant matter'],
  },
  {
    key: 'residual',
    label: 'RESIDUAL',
    pill: 'bg-sortla-residual',
    glow: 'border-[#9A9A9A]/55 shadow-[0_0_26px_-6px_rgba(200,200,200,0.35)]',
    items: ['Tissues & napkins', 'Wrappers & soft film', 'Styrofoam, mixed, mystery'],
  },
  {
    key: 'recyclable',
    label: 'RECYCLABLE',
    pill: 'bg-sortla-recyclable',
    glow: 'border-sortla-yellow/45 shadow-[0_0_26px_-6px_rgba(228,186,0,0.45)]',
    items: ['Empty bottles & cans', 'Glass jars & bottles', 'Clean paper & cardboard'],
  },
];

const items: WasteItem[] = [
  {
    id: 'banana-peel',
    name: 'Banana Peel',
    emoji: '🍌',
    bin: 'organic',
    defaultClass: 'organic',
    confidence: 96,
    rationale: 'Compostable food waste — it breaks straight back down into soil.',
  },
  {
    id: 'empty-bottle',
    name: 'Empty Bottle',
    emoji: '🍼',
    bin: 'recyclable',
    defaultClass: 'clean_inorganic',
    confidence: 94,
    rationale: 'A clean, dry plastic container. Fully recyclable in the inorganic stream.',
  },
  {
    id: 'coffee-grounds',
    name: 'Coffee grounds',
    emoji: '☕',
    bin: 'organic',
    defaultClass: 'organic',
    confidence: 98,
    rationale: 'A rich nitrogen source for compost. Straight into the organic bin.',
  },
  {
    id: 'used-cups',
    name: 'Used cups',
    emoji: '🥤',
    bin: 'residual',
    defaultClass: 'dirty_recyclable',
    confidence: 88,
    rationale: 'Still holding liquid. Rinse it and it becomes recyclable — otherwise it is residual.',
    isDirtyRecyclableSave: true,
  },
  {
    id: 'food-wrapper',
    name: 'Food wrapper',
    emoji: '🍫',
    bin: 'residual',
    defaultClass: 'residual',
    confidence: 92,
    rationale: 'Multi-layer composite film and grease foil cannot be mechanically recycled.',
  },
  {
    id: 'wet-wipes',
    name: 'Wet wipes',
    emoji: '🧻',
    bin: 'residual',
    defaultClass: 'residual',
    confidence: 95,
    rationale: 'A synthetic non-woven blend. It does not compost, so it goes to residual.',
  },
];

const chipActive: Record<BinKey, string> = {
  organic: 'bg-sortla-green text-white',
  residual: 'bg-[#D6D6D6] text-black',
  recyclable: 'bg-sortla-yellow text-black',
};

export const ThreeBinsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState('banana-peel');
  const active = items.find((i) => i.id === selectedId) ?? items[0];

  return (
    <div className="shell pt-16 md:pt-[56px]">
      <h2 className="h-section text-white">Something about 3 bins</h2>
      <p className="p-lede mt-3 text-white/80 max-w-[760px]">
        Tap an item. The bar lights up exactly the way it does at a Sortla station.
      </p>

      {/* Bin columns — the label sits inside a dark card, the contents list below it */}
      <div className="mt-9 md:mt-[44px] grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-8">
        {bins.map((bin) => {
          const lit = active.bin === bin.key;
          return (
            <div key={bin.key} className="flex flex-col">
              <div
                className={`rounded-[18px] border bg-sortla-cardDark p-[18px] transition-all duration-300 ${
                  lit ? bin.glow : 'border-sortla-hairDark'
                }`}
              >
                <div
                  className={`h-[60px] rounded-[12px] flex items-center justify-center transition-transform duration-300 ${
                    bin.pill
                  } ${lit ? 'scale-[1.015]' : ''}`}
                >
                  <span className="font-sans font-bold text-[22px] sm:text-[26px] md:text-[28px] tracking-[0.01em] text-white">
                    {bin.label}
                  </span>
                </div>
              </div>

              <ul className="mt-[14px] pl-2 space-y-[3px]">
                {bin.items.map((line) => (
                  <li
                    key={line}
                    className="font-sans font-normal text-[15px] sm:text-[16px] leading-[1.55] text-white/90"
                  >
                    <span className="mr-2 text-white/55">&bull;</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Item chips */}
      <div className="mt-11 md:mt-[52px] mx-auto w-full max-w-[810px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {items.map((item) => {
          const isActive = item.id === selectedId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedId(item.id)}
              aria-pressed={isActive}
              className={`h-[56px] rounded-full flex items-center justify-center gap-2.5 px-5 transition-all duration-300 cursor-pointer ${
                isActive
                  ? `${chipActive[item.bin as BinKey]} shadow-lg`
                  : 'bg-sortla-cream text-[#212121] hover:bg-white'
              }`}
            >
              <span className="text-[18px] leading-none">{item.emoji}</span>
              <span className="font-sans font-normal text-[16px] sm:text-[17px]">{item.name}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-12 md:mt-[56px] border-t border-sortla-hairDark" />
    </div>
  );
};
