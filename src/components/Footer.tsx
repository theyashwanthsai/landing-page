import { Link } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-page py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/images/favicon.png" className="h-7 w-7" alt="Turi Labs logo" />
            <span className="font-bold tracking-tight">Turi Labs</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <Link to="/research" className="nav-link">Research</Link>
            <Link to="/blogs" className="nav-link">Blog</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/turi-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/turilabs"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              aria-label="X"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-10 text-sm text-faint">
          © 2026 Turi Labs. An independent AI research lab.
        </p>
      </div>
    </footer>
  );
}
