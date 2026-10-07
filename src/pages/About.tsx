import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container-page pt-20 pb-8 sm:pt-28">
      <span className="section-label">About</span>
      <h1 className="page-title max-w-3xl">
        A lab built on <span className="em-serif">curiosity, not credentials.</span>
      </h1>

      <div className="mt-8 max-w-2xl space-y-5 text-lg text-secondary">
        <p>
          Turi Labs started as one person building quirky, experimental AI projects. Friends
          wanted in, then friends of friends. Today it is a closed community of nine part-time
          researchers with six A* conference workshop accepts at NeurIPS, ICLR, and ICML.
        </p>
        <p>
          We all maintain full-time careers. Turi Labs is where our collective obsession with AI
          goes after hours: reinforcement learning, agentic systems, and benchmarks that measure
          what models actually do.
        </p>
        <p>
          We are not formally incorporated, and we like it that way. No publication cycles, no
          corporate roadmaps. We run on 80% exploration and 20% exploitation, and we value deep
          curiosity over credentials, first-principles thinking, and high-quality work over vague
          metrics.
        </p>
      </div>

      <img
        src="/images/team.png"
        alt="The Turi Labs team"
        className="mt-12 w-full max-w-2xl rounded-2xl border"
        style={{ borderColor: 'var(--border)' }}
      />

      <div className="mt-16 border-t pt-16 text-center" style={{ borderColor: 'var(--border)' }}>
        <p className="text-lg text-secondary">Want to collaborate or contribute?</p>
        <Link to="/contact" className="btn-primary mt-6 inline-flex">
          Get in touch
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
