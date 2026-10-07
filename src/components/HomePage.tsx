import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PublicationList } from './PublicationList';
import { publications } from '../data/publications';

const stats = [
  { value: '6', label: 'A* conference workshop accepts' },
  { value: '3', label: 'A* conferences: NeurIPS, ICLR, ICML' },
  { value: '9', label: 'Part-time researchers' },
  { value: '100%', label: 'Independent and self-funded' },
];

const news = [
  {
    date: 'July 2026',
    text: 'Three papers accepted for poster presentation at ICML 2026 workshops: RLRank, Executable Ground Truth, and Compositional Skill Acquisition.',
  },
  {
    date: 'February 2026',
    text: 'Two papers accepted at ICLR 2026 workshops, on floating-point noise in GPU matrix multiplication and logical reasoning inconsistencies in local LLMs.',
  },
  {
    date: 'October 2025',
    text: 'Our first paper, on strategic reasoning in competitive Pokémon battles, accepted at the NeurIPS 2025 ER workshop.',
  },
];

const focusAreas = [
  {
    title: 'Reinforcement Learning',
    description:
      'Training small models with RL to close the gap with much larger ones: document reranking, agentic tasks, and skill acquisition.',
  },
  {
    title: 'Agentic Systems',
    description:
      'Frameworks, training methods, and evaluations for agents that plan, act, and repair real systems instead of just talking about them.',
  },
  {
    title: 'Evaluation & Benchmarks',
    description:
      'Closed-loop, execution-grounded benchmarks that measure what models actually do, not what they say they can do.',
  },
];

const steps = [
  {
    title: 'Explore',
    description:
      'Every project starts as a curiosity, not a grant proposal. We chase questions that are interesting before they are fashionable.',
  },
  {
    title: 'Experiment',
    description:
      'Small, controlled experiments with clear hypotheses. Most die quickly. The ones that survive earn more attention and compute.',
  },
  {
    title: 'Build',
    description:
      'Reproducible code, open benchmarks, and frameworks others can use. If it only runs on one laptop, it is not done.',
  },
  {
    title: 'Publish',
    description:
      'Findings become papers, posters, and blog posts. Six have landed as A* conference workshop accepts at NeurIPS, ICLR, and ICML so far.',
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="container-page pt-20 pb-16 text-center sm:pt-28">
        <h1 className="mx-auto max-w-5xl text-[clamp(2.25rem,5.4vw,4.25rem)] font-semibold">
          Independent AI research, <span className="em-serif">published where it counts.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg text-secondary">
          Turi Labs is an indie AI research lab working on reinforcement learning, agents,
          and evaluation. Six A* conference workshop accepts at NeurIPS, ICLR, and ICML so far.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/research" className="btn-primary">
            Read the research
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/contact" className="btn-ghost">
            Work with us
          </Link>
        </div>

        <figure className="mx-auto mt-16 max-w-lg">
          <img
            src="/images/game_of_life_smaller.gif"
            alt="Conway's Game of Life simulation"
            className="w-full rounded-2xl border"
            style={{ borderColor: 'var(--border)' }}
          />
          <figcaption className="mx-auto mt-4 max-w-xl text-xs text-faint">
            Conway's Game of Life. Simple rules, emergent complexity: the kind of pattern that
            inspires how we pick research problems.
          </figcaption>
        </figure>

        <dl className="grid-hairline mt-16 grid-cols-2 text-left md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6">
              <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
              <dt className="mt-1 text-sm text-faint">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* News */}
      <section className="container-page py-16 sm:py-20">
        <span className="section-label">News</span>
        <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
          {news.map((item) => (
            <div key={item.date} className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:flex-row sm:gap-8">
              <span className="w-36 flex-shrink-0 text-sm font-medium text-faint">{item.date}</span>
              <p className="text-[0.9375rem] text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest publications */}
      <section className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-page py-16 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="section-label">Publications</span>
              <h2 className="text-3xl font-semibold sm:text-4xl">Latest work</h2>
            </div>
            <Link to="/research" className="link-underline hidden text-sm sm:block">
              View all publications
            </Link>
          </div>
          <PublicationList items={publications.slice(0, 2)} />
          <Link to="/research" className="btn-ghost mt-10 inline-flex">
            View all publications
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-page py-16 sm:py-20">
          <span className="section-label">Focus</span>
          <h2 className="mb-10 text-3xl font-semibold sm:text-4xl">What we work on</h2>
          <div className="grid-hairline md:grid-cols-3">
            {focusAreas.map((area, i) => (
              <div key={area.title} className="p-8">
                <span className="text-sm font-semibold text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-secondary">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pullquote */}
      <section>
        <div className="container-page py-16 sm:py-20">
          <blockquote
            className="mx-auto max-w-3xl text-center text-2xl font-medium leading-snug tracking-tight sm:text-4xl"
          >
            What started as one person building quirky side projects is now a community of
            researchers publishing at <span className="em-serif">the world's top AI venues.</span>
          </blockquote>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-page py-16 sm:py-20">
          <span className="section-label">Method</span>
          <h2 className="mb-12 text-3xl font-semibold sm:text-4xl">How we work</h2>
          <div className="grid gap-10 sm:grid-cols-2">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-page py-20 text-center sm:py-24">
          <span className="section-label">Get in touch</span>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-5xl">
            Research with us
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-secondary">
            We collaborate with researchers, engineers, and supporters who care about
            high-signal, independent AI research. No pitch, no commitment, 15 minutes.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book a call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="mailto:sai@turilabs.in" className="btn-ghost">
              sai@turilabs.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
