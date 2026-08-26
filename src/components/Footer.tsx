import React from 'react';
import { asset } from '../lib/asset';

export const Footer: React.FC = () => (
  <footer className="w-full bg-cta border-t border-black/10 py-5">
    <div className="shell flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          src={asset("/logo.png")}
          alt=""
          className="w-[38px] h-[38px] object-contain"
        />
        <span className="font-sans font-normal text-[20px] text-black">Sortla</span>
      </div>

      <span className="font-sans text-[12px] text-[#3B463E]/60">
        © {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);
