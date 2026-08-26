import React, { useEffect, useState } from 'react';
import { asset } from '../lib/asset';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

const links = [
  { id: 'smart-sorting', label: 'How it works' },
  { id: 'three-bins', label: '3 bins' },
  { id: 'stats', label: 'Stats' },
  { id: 'tech', label: 'Tech' },
  { id: 'faq', label: 'FAQ' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-page/90 backdrop-blur-md border-b border-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="shell flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={asset("/app-icon.png")}
            alt=""
            className="w-9 h-9 rounded-[10px] object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-sans font-semibold text-[19px] tracking-tight text-ink">
            Sortla
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollTo(l.id)}
              className="font-sans text-[15px] text-ink/70 hover:text-ink transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onOpenContact}
            className="font-sans text-[15px] font-medium text-white bg-ink hover:bg-black rounded-full px-5 py-2 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-ink p-2 rounded-lg bg-black/5 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-page border-b border-black/10 px-6 py-5 space-y-3 animate-fade-in">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollTo(l.id)}
              className="block w-full text-left font-sans text-[16px] text-ink py-1.5"
            >
              {l.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenContact();
            }}
            className="block w-full text-left font-sans text-[16px] font-semibold text-sortla-organic py-1.5"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
