import React from 'react';
import { ShieldCheck, Video, Sliders, Lock } from 'lucide-react';

const cards = [
  {
    title: 'Private by design',
    description:
      'Every frame is processed on the device itself. No cloud, no accounts, no footage leaving the room.',
    visual: (
      <div className="w-full h-full bg-[#111215] p-5 flex flex-col justify-between text-white select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Lock size={15} className="text-sortla-green" />
            <span className="text-xs font-mono font-medium">Local enclave sandbox</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-sortla-green animate-pulse-subtle" />
        </div>

        <div className="my-auto py-4 text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-sortla-green/10 border border-sortla-green/30 flex items-center justify-center text-sortla-green mb-3">
            <ShieldCheck size={30} />
          </div>
          <div className="font-sans font-bold text-base">Apple Neural Engine</div>
          <div className="text-xs text-white/60 mt-1 font-mono">Zero network requests</div>
        </div>

        <div className="bg-black/50 rounded-xl p-3 border border-white/5 flex justify-between text-[11px] font-mono text-white/70">
          <span>Cloud uploads</span>
          <span className="text-sortla-green font-bold">0 bytes</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Record & export',
    description:
      'Capture the live view with boxes and labels burned in, plus a CSV log of every detection.',
    visual: (
      <div className="w-full h-full bg-[#111215] p-5 flex flex-col justify-between text-white select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Video size={15} className="text-sortla-yellow" />
            <span className="text-xs font-mono font-medium">Telemetry &amp; overlay</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-mono font-bold">
            REC
          </span>
        </div>

        <div className="my-auto space-y-2 py-2">
          <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-[11px] font-mono flex items-center justify-between">
            <span className="text-white/80">Sortla_Overlay.mp4</span>
            <span className="text-sortla-yellow font-semibold">1080p</span>
          </div>
          <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-[11px] font-mono flex items-center justify-between">
            <span className="text-white/80">detections_log.csv</span>
            <span className="text-sortla-green font-semibold">Per frame</span>
          </div>
        </div>

        <div className="bg-black/50 rounded-xl p-3 border border-white/5 flex justify-between text-[11px] font-mono text-white/70">
          <span>Saved to</span>
          <span className="text-white font-bold">Files / Sortla</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Tunable, not locked',
    description:
      'Swap model weights, confidence and tracking right in Settings. No rebuild, no App Store update.',
    visual: (
      <div className="w-full h-full bg-[#111215] p-5 flex flex-col justify-between text-white select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Sliders size={15} className="text-blue-400" />
            <span className="text-xs font-mono font-medium">Core ML runtime tuner</span>
          </div>
          <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
            v3.6
          </span>
        </div>

        <div className="my-auto space-y-3 py-2">
          {[
            ['Confidence threshold', '0.45', 45],
            ['IoU association overlap', '0.50', 50],
          ].map(([label, value, pct]) => (
            <div key={label as string}>
              <div className="flex justify-between text-[11px] font-mono text-white/80 mb-1">
                <span>{label}</span>
                <span className="text-blue-400 font-bold">{value}</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full" style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black/50 rounded-xl p-3 border border-white/5 flex justify-between text-[11px] font-mono text-white/70">
          <span>Weights</span>
          <span className="text-blue-300 font-bold">bestv3.6</span>
        </div>
      </div>
    ),
  },
];

export const TechSection: React.FC = () => (
  <section id="tech" className="w-full bg-tech pt-16 pb-20 md:pt-[62px] md:pb-[96px]">
    <div className="shell">
      <h2 className="h-section text-black">Tech thingy?</h2>
      <p className="p-lede mt-3 text-sortla-body max-w-[880px]">
        Every throw becomes data. See generated versus misplaced waste, watch bins fill, and export
        it all as CSV for your sustainability report.
      </p>

      <div className="mt-10 md:mt-[52px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-12">
        {cards.map((card) => (
          <article key={card.title} className="flex flex-col">
            <div className="w-full aspect-[331/396] overflow-hidden bg-[#111215]">{card.visual}</div>
            <h3 className="h-card mt-5 text-[#181818]">{card.title}</h3>
            <p className="p-card mt-2 text-sortla-bodyAlt">{card.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
