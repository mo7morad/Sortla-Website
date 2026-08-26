import React, { useState } from 'react';

const GREEN = '#2EB551';
const YELLOW = '#E4BA00';
const WHITE = '#FFFFFF';

/* ------------------------------------------------------------------ */
/*  Connector rail                                                     */
/* ------------------------------------------------------------------ */

type Cap = { color: string; downTo?: string; upFrom?: string };

const Connector: React.FC<{ side: 'left' | 'right'; cap: Cap }> = ({ side, cap }) => {
  const outer = side === 'left' ? 'left-0' : 'right-0';
  const inner = side === 'left' ? 'left-[5px] right-0' : 'right-[5px] left-0';
  const stem = side === 'left' ? 'left-[5px]' : 'right-[5px]';

  return (
    <div className="relative w-[52px] lg:w-[68px] shrink-0">
      <span
        className={`absolute top-1/2 ${inner} h-[2px] -translate-y-1/2`}
        style={{ background: cap.color }}
      />
      <span
        className={`absolute top-1/2 ${outer} h-[11px] w-[11px] -translate-y-1/2 rounded-full`}
        style={{ background: cap.color }}
      />
      {cap.downTo && (
        <span
          className={`absolute ${stem} top-1/2 -bottom-[34px] w-[2px] -translate-x-1/2`}
          style={{ background: cap.downTo }}
        />
      )}
      {cap.upFrom && (
        <span
          className={`absolute ${stem} bottom-1/2 -top-[34px] w-[2px] -translate-x-1/2`}
          style={{ background: cap.upFrom }}
        />
      )}
    </div>
  );
};

const RailRow: React.FC<{
  left: Cap;
  right: Cap;
  children: React.ReactNode;
}> = ({ left, right, children }) => (
  <div className="relative flex items-stretch mb-[34px] last:mb-0">
    <Connector side="left" cap={left} />
    <div className="flex-1 min-w-0">{children}</div>
    <Connector side="right" cap={right} />
  </div>
);

/* ------------------------------------------------------------------ */
/*  Dashboard mock                                                     */
/* ------------------------------------------------------------------ */

const TABS = ['Daily', 'Weekly', 'Monthly', 'Yearly'] as const;

const DATA: Record<
  (typeof TABS)[number],
  { total: number; fill: [number, number, number]; bins: [number, number, number]; accuracy: number }
> = {
  Daily: { total: 142, fill: [0.3, 0.46, 0.24], bins: [4, 6, 3], accuracy: 67 },
  Weekly: { total: 918, fill: [0.52, 0.61, 0.38], bins: [9, 11, 7], accuracy: 74 },
  Monthly: { total: 3860, fill: [0.68, 0.74, 0.55], bins: [12, 14, 10], accuracy: 71 },
  Yearly: { total: 41250, fill: [0.81, 0.88, 0.66], bins: [15, 16, 13], accuracy: 78 },
};

const STREAMS: { name: string; color: string; glyph: string }[] = [
  { name: 'Organic', color: GREEN, glyph: '🥬' },
  { name: 'Residual', color: '#101010', glyph: '🗑' },
  { name: 'Recyclable', color: YELLOW, glyph: '♻️' },
];

const FillBar: React.FC<{ color: string; ratio: number; glyph: string }> = ({
  color,
  ratio,
  glyph,
}) => (
  <div className="relative w-[26px] sm:w-[30px] h-[104px] rounded-full bg-[#E2E8E4] overflow-hidden">
    <div
      className="absolute inset-x-0 bottom-0 rounded-full flex items-end justify-center pb-1"
      style={{ height: `${Math.round(ratio * 100)}%`, background: color }}
    >
      <span className="text-[10px] leading-none opacity-90">{glyph}</span>
    </div>
  </div>
);

const AccuracyChart: React.FC<{ accuracy: number }> = ({ accuracy }) => (
  <div className="relative w-full">
    <svg viewBox="0 0 420 120" className="w-full h-[112px]" role="img" aria-label="Correct versus misplaced throws over time">
      {[24, 48, 72, 96].map((y) => (
        <line key={y} x1="26" y1={y} x2="330" y2={y} stroke="#E1E7E3" strokeWidth="1" />
      ))}
      {['80', '60', '40', '20', '0'].map((label, i) => (
        <text key={label} x="20" y={26 + i * 18} textAnchor="end" fontSize="7" fill="#9AA69F">
          {label}
        </text>
      ))}
      <path
        d="M30,78 C60,74 78,84 104,86 C132,88 148,66 176,54 C204,42 222,30 252,26 C278,23 292,26 306,36"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M30,104 C60,101 78,104 104,102 C132,100 148,88 176,80 C204,72 222,62 252,60 C278,58 292,64 306,72"
        fill="none"
        stroke="#EF4444"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 6"
      />
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
        <text key={d} x={34 + i * 68} y="116" fontSize="7" fill="#9AA69F">
          {d}
        </text>
      ))}
      <line x1="344" y1="96" x2="364" y2="96" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
      <text x="370" y="99" fontSize="7" fill="#6B776F">Correct bin</text>
      <line x1="344" y1="107" x2="364" y2="107" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="1 5" strokeLinecap="round" />
      <text x="370" y="110" fontSize="7" fill="#6B776F">Misplaced bin</text>
    </svg>

    <div className="absolute right-2 top-3 text-right">
      <div className="text-[9px] font-medium text-[#6B776F]">Accuracy rate</div>
      <div className="font-sans font-bold text-[22px] leading-tight text-[#101010]">{accuracy}%</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Daily');
  const d = DATA[tab];

  return (
    <div className="w-full rounded-[24px] bg-sortla-panel border border-black/5 p-[14px] sm:p-[18px] shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-sans font-bold text-[13px] sm:text-[15px] text-[#101010] leading-snug">
          Waste Stats | Apple Developer Academy Bali
        </h3>
        <span className="mt-[2px] h-[13px] w-[13px] rounded-full border-[1.5px] border-[#9AA69F] shrink-0" />
      </div>

      {/* Segmented range control */}
      <div className="mt-3 flex rounded-full bg-[#D2DDD5] p-[3px]">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`flex-1 rounded-full py-[5px] text-[10px] sm:text-[11px] font-medium transition-colors cursor-pointer ${
              tab === t ? 'bg-white text-[#101010] shadow-sm' : 'text-[#5E6A63] hover:text-[#101010]'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Generated waste + fill gauges */}
        <div className="rounded-[14px] bg-sortla-panelCard p-3">
          <div className="text-[10px] font-medium text-[#6B776F]">Generated waste</div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <div className="font-sans font-bold text-[26px] leading-tight text-[#101010]">
                {d.total.toLocaleString()}
                <span className="ml-1 align-baseline text-[10px] font-medium text-[#6B776F]">pcs</span>
              </div>
              <ul className="mt-4 space-y-[6px]">
                {STREAMS.map((s) => (
                  <li key={s.name} className="flex items-center gap-2 text-[9px] text-[#6B776F]">
                    <span className="h-[7px] w-[7px] rounded-[2px]" style={{ background: s.color }} />
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-end gap-2">
              {STREAMS.map((s, i) => (
                <FillBar key={s.name} color={s.color} ratio={d.fill[i]} glyph={s.glyph} />
              ))}
            </div>
          </div>
        </div>

        {/* Bins filled */}
        <div className="rounded-[14px] bg-sortla-panelCard p-3">
          <div className="text-[10px] font-medium text-[#6B776F]">Bins filled</div>
          <ul className="mt-2">
            {STREAMS.map((s, i) => (
              <li
                key={s.name}
                className="flex items-center justify-between gap-3 border-b border-[#E6EBE8] last:border-0 py-[9px]"
              >
                <span className="flex items-center gap-2 text-[11px] text-[#3C463F]">
                  <span
                    className="h-[15px] w-[15px] rounded-[4px] flex items-center justify-center text-[8px]"
                    style={{ background: s.color }}
                  >
                    {s.glyph}
                  </span>
                  {s.name}
                </span>
                <span className="text-[11px] font-semibold text-[#101010]">{d.bins[i]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 rounded-[14px] bg-sortla-panelCard p-2 pb-1">
        <AccuracyChart accuracy={d.accuracy} />
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export const StatsDashboardSection: React.FC = () => (
  <div id="stats" className="shell pt-14 md:pt-[58px] pb-16 md:pb-[92px]">
    <h2 className="h-section text-white">Check your waste stream (stats)</h2>
    <p className="p-lede mt-3 text-white/80 max-w-[905px]">
      Every throw becomes data. See generated versus misplaced waste, watch bins fill, and export it
      all as CSV for your sustainability report.
    </p>

    <div className="mt-10 md:mt-[46px] grid grid-cols-1 lg:grid-cols-[minmax(0,554fr)_minmax(0,446fr)] gap-10 lg:gap-[42px] items-center">
      {/* Left: annotated rail */}
      <div>
        <RailRow left={{ color: GREEN }} right={{ color: GREEN, downTo: GREEN }}>
          <div className="rounded-[14px] bg-sortla-green px-6 py-4 text-white font-sans text-[15px] sm:text-[16px] leading-[1.5]">
            1. Counting is automatic: one item, one count, no double-taps.
          </div>
        </RailRow>

        <RailRow
          left={{ color: WHITE, downTo: YELLOW }}
          right={{ color: WHITE, upFrom: GREEN }}
        >
          <div className="rounded-[14px] border-[1.5px] border-white px-6 py-4 text-white text-center font-sans text-[15px] sm:text-[16px] leading-[1.5]">
            2. Misplaced-waste tracking. Wrong-bin throws are flagged, so you know what to fix.
          </div>
        </RailRow>

        <RailRow left={{ color: YELLOW, upFrom: YELLOW }} right={{ color: YELLOW }}>
          <div className="rounded-[14px] bg-sortla-yellow px-6 py-4 text-white font-sans text-[15px] sm:text-[16px] leading-[1.5]">
            3. A clean CSV of every detection, straight from the Files app.
          </div>
        </RailRow>
      </div>

      {/* Right: dashboard */}
      <Dashboard />
    </div>
  </div>
);
