import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/research', label: 'Research' },
  { to: '/blogs', label: 'Blog' },
  { to: '/about', label: 'About' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
      style={{ borderColor: 'var(--border)', background: 'rgba(250, 250, 250, 0.8)' }}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/images/favicon.png" className="h-8 w-8" alt="Turi Labs logo" />
          <span className="text-[1.0625rem] font-bold tracking-tight">Turi Labs</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav-link">
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary !py-2 !px-4 text-sm">
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t px-6 py-4 md:hidden"
          style={{ borderColor: 'var(--border)', background: 'rgba(250, 250, 250, 0.97)' }}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className="nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
