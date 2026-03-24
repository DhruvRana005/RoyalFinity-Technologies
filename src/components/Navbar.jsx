import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full right-0 z-50 bg-zinc-950 text-white border-b border-zinc-800 shadow-lg shadow-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
            <div className="leading-tight">
              <h1 className="text-sm sm:text-lg md:text-xl font-semibold text-white">
                Royalfinity Technologies
              </h1>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (<NavLink key={item.path} to={item.path} className={({ isActive }) => `relative text-sm font-medium transition-colors duration-300 hover:text-yellow-400 ${isActive ? 'text-yellow-400' : 'text-zinc-300'
              }`
            }> {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
            </NavLink>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 space-y-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={({ isActive }) => `block rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-yellow-400/10 text-yellow-400' : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'}`}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;