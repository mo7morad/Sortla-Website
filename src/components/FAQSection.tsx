import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What do I need to run Sortla?',
    answer:
      'Any recent iPhone or iPad. Mount it on an overhead arm or tripod pointing at your bins, or connect a standard USB-C webcam. The preview supports a 180° flip for overhead kiosks.',
  },
  {
    id: 'faq-2',
    question: 'Does it need an internet connection?',
    answer:
      'No. Sortla runs entirely offline on the Apple Neural Engine via Core ML, so it works in basements, outdoor cafeterias and remote events with no Wi-Fi at all.',
  },
  {
    id: 'faq-3',
    question: 'What happens to the camera footage?',
    answer:
      'Frames are processed in memory and discarded immediately. Nothing is uploaded. When recording is switched on for an audit, the file is written locally to the Files app on the device.',
  },
  {
    id: 'faq-4',
    question: 'How does it know which bin is which?',
    answer:
      'Printable fiducial markers or colour-coded station strips sit behind the bins. The camera calibrates the position of Organic, Residual and Recyclable in seconds on first setup.',
  },
  {
    id: 'faq-5',
    question: 'Can it handle items the model has never seen?',
    answer:
      'Yes. Segmentation is combined with colour and texture priors and a belief engine. When certainty drops below the margin, Sortla routes the item to Residual or asks for a second look.',
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="w-full bg-page pt-14 pb-16 md:pt-[58px] md:pb-[72px]">
      <div className="shell">
        <h2 className="font-serif font-bold text-[46px] sm:text-[60px] md:text-[72px] leading-none text-black text-center">
          FAQ
        </h2>

        <div className="mt-9 md:mt-[44px] border-t border-sortla-hairLight">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-sortla-hairLight">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-[15px] flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="font-sans font-normal text-[16px] sm:text-[19px] leading-[1.5] text-[#181818]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    strokeWidth={2}
                    className={`shrink-0 text-[#181818] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="pb-6 pr-10 font-sans font-normal text-[15px] sm:text-[16px] leading-[1.7] text-sortla-bodyAlt animate-fade-in">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
