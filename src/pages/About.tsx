import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const team = [
  { name: 'Sai Yashwanth', role: 'Founder', link: 'https://saiyashwanth.tech' },
  { name: 'Vijayant', role: 'Researcher', link: 'https://www.linkedin.com/in/vijayant-raj-singh-raghav/' },
  { name: 'Dhatri C', role: 'Researcher', link: 'https://www.linkedin.com/in/dhatri-c-5b1b20297/' },
  { name: 'Mayank Kashyap', role: 'Researcher', link: 'https://www.linkedin.com/in/mayank-kashyap-402065232/' },
  { name: 'Siddharth Prakash', role: 'Researcher', link: 'https://www.linkedin.com/in/siddharth-prakash-771596241/' },
  { name: 'Supratik', role: 'Researcher', link: 'https://www.linkedin.com/in/supratik-kar-99a99522b/' },
  { name: 'Sagnik P', role: 'Researcher', link: '' },
  { name: 'Srinivas', role: 'Researcher', link: '' },
  { name: 'Akshay Kumar', role: 'Researcher', link: '' },
];

export function AboutPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <span className="section-label">About</span>
      <h1 className="text-4xl font-extrabold sm:text-5xl">
        A lab built on <em className="em-serif">curiosity, not credentials.</em>
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
        className="mt-12 w-full max-w-2xl rounded-xl border"
        style={{ borderColor: 'var(--border)' }}
      />

      <section className="mt-16 border-t pt-16" style={{ borderColor: 'var(--border)' }}>
        <h2 className="mb-8 text-2xl font-bold">The team</h2>
        <div
          className="grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderColor: 'var(--border)', background: 'var(--border)' }}
        >
          {team.map((member) => (
            <div key={member.name} className="p-6" style={{ background: 'var(--bg)' }}>
              {member.link ? (
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-plain font-semibold"
                >
                  {member.name}
                </a>
              ) : (
                <span className="font-semibold">{member.name}</span>
              )}
              <p className="mt-1 text-sm text-faint">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

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
