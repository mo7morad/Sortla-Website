import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

const links = [
  { id: 'how-it-works', label: 'How it works' },
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
          ? 'bg-dark/85 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="shell flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/app-icon.png"
            alt=""
            className="w-9 h-9 rounded-[10px] object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-sans font-semibold text-[19px] tracking-tight text-white">
            Sortla
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollTo(l.id)}
              className="font-sans text-[15px] text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onOpenContact}
            className="font-sans text-[15px] font-medium text-black bg-[#F8F8F8] hover:bg-white rounded-full px-5 py-2 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 rounded-lg bg-black/40 backdrop-blur-sm"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark border-b border-white/10 px-6 py-5 space-y-3 animate-fade-in">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollTo(l.id)}
              className="block w-full text-left font-sans text-[16px] text-white py-1.5"
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
            className="block w-full text-left font-sans text-[16px] font-semibold text-sortla-green py-1.5"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
