import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className="border-t border-[#d7b86e]/20 bg-[#0b0a08] text-[#f6f1e7]">
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
      <div>
        <Link to="/" className="font-cinzel text-sm tracking-[0.16em]">KANCHI KAMAKSHI</Link>
        <p className="mt-1 text-[9px] tracking-[0.28em] text-[#d7b86e]">3D JEWELLERY WORKS</p>
        <p className="mt-3 max-w-sm text-xs leading-5 text-[#f6f1e7]/50">Where Traditional Craft Meets 3D Precision</p>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.12em] text-[#f6f1e7]/60">
        <Link to="/about" className="hover:text-[#d7b86e]">About</Link><Link to="/services" className="hover:text-[#d7b86e]">Services</Link><Link to="/gallery" className="hover:text-[#d7b86e]">Our Work</Link><Link to="/designs" className="hover:text-[#d7b86e]">3D Designs</Link><Link to="/collection" className="hover:text-[#d7b86e]">Collection</Link><Link to="/contact" className="hover:text-[#d7b86e]">Contact</Link>
      </div>
    </div>
  </footer>
);
