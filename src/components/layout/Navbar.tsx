import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/designs', label: '3D Printing & Designs' },
  { path: '/collection', label: 'Jewellery Collection' },
  { path: '/contact', label: 'Contact Us' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">

       <Link
  to="/"
  className="site-logo"
  onClick={() => setOpen(false)}
>
  <img
    src="/assets/branding/lotus_logo_1.png"
    alt="Kanchi Kamakshi"
    className="site-logo-icon"
  />

  <span className="site-logo-text">
    <span className="site-logo-title">
      KANCHI KAMAKSHI
    </span>

    <span className="site-logo-subtitle">
      3D JEWELLERY WORKS
    </span>
  </span>
</Link>


        {/* Desktop Navigation */}
        <nav
          className="site-nav"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `border-b-2 pb-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                  isActive
                    ? 'border-[#d7b86e] text-[#d7b86e]'
                    : 'border-transparent text-[#f6f1e7]/70 hover:text-[#d7b86e]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>


        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Enquire */}
          <Link
            to="/contact"
            className="site-enquire"
            onClick={() => setOpen(false)}
          >
            Enquire
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="site-menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>


      {/* Mobile Navigation */}
      {open && (
        <nav
          className="site-mobile-nav"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
  key={item.path}
  to={item.path}
  end={item.path === '/'}
  onClick={() => setOpen(false)}
  className={({ isActive }) =>
    `block w-fit py-3 text-xs uppercase tracking-[0.12em] transition ${
      isActive
        ? 'border-b-2 border-[#d7b86e] text-[#d7b86e]'
        : 'border-b-2 border-transparent text-[#f6f1e7]/80 hover:text-[#d7b86e]'
    }`
  }
>
  {item.label}
</NavLink>
          ))}
        </nav>
      )}

    </header>
  );
};