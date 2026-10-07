import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import { publications } from '../data/publications';

const conferences = ['ICML', 'ICLR', 'NeurIPS'] as const;
type Filter = 'All' | (typeof conferences)[number];

const stats = [
  { value: '6', label: 'Peer-reviewed accepts' },
  { value: '3', label: 'A* venues' },
  { value: '9', label: 'Contributing researchers' },
  { value: '0', label: 'External funding' },
];

export function ResearchPage() {
  const [filter, setFilter] = useState<Filter>('All');

  const filters = useMemo(
    () => [
      { key: 'All' as Filter, count: publications.length },
      ...conferences.map((c) => ({
        key: c as Filter,
        count: publications.filter((p) => p.conference === c).length,
      })),
    ],
    []
  );

  const groups = useMemo(() => {
    const visible =
      filter === 'All' ? publications : publications.filter((p) => p.conference === filter);
    const years = Array.from(new Set(visible.map((p) => p.year))).sort((a, b) => b - a);
    return years.map((year) => ({ year, items: visible.filter((p) => p.year === year) }));
  }, [filter]);

  return (
    <div>
      {/* Hero */}
      <section className="container-page pt-20 pb-12 sm:pt-28">
        <span className="section-label">Research</span>
        <h1 className="page-title max-w-4xl">
          Work we publish <span className="em-serif">in the open.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-secondary">
          We pursue ideas driven by curiosity rather than profit. Our work spans reinforcement
          learning, agentic systems, evaluation, and benchmarking, with six A* conference workshop
          accepts at NeurIPS, ICLR, and ICML.
        </p>

        <dl
          className="grid-hairline mt-12 grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-6">
              <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
              <dt className="mt-1 text-sm text-faint">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Publications */}
      <section className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-page py-12 sm:py-16">
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {filters.map(({ key, count }) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`filter-pill${filter === key ? ' filter-pill-active' : ''}`}
              >
                {key === 'All' ? 'All papers' : key}
                <span className="text-xs opacity-60">{count}</span>
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {groups.map(({ year, items }) => (
              <div key={year} className="grid gap-6 lg:grid-cols-[6rem_1fr] lg:gap-10">
                <div className="lg:pt-1">
                  <h2
                    className="text-sm font-semibold uppercase tracking-[0.14em] text-faint lg:sticky lg:top-24"
                  >
                    {year}
                  </h2>
                </div>

                <div className="space-y-4">
                  {items.map((pub) => (
                    <article key={pub.title} className="pub-card">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="venue-tag">{pub.venue}</span>
                        {pub.note && <span className="text-xs text-faint">{pub.note}</span>}
                      </div>

                      <h3 className="mt-3 text-lg font-semibold leading-snug sm:text-xl">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-plain group inline-flex items-start gap-1.5"
                        >
                          <span>{pub.title}</span>
                          <ArrowUpRight
                            className="mt-1.5 h-4 w-4 flex-shrink-0 opacity-40 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </a>
                      </h3>

                      <p className="mt-2 text-sm text-faint">{pub.authors}</p>
                      <p className="mt-3 text-[0.9375rem] text-secondary">{pub.description}</p>

                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        {pub.topics.map((topic) => (
                          <span key={topic} className="tag">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div
                        className="mt-5 flex flex-wrap items-center gap-5 border-t pt-4"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline inline-flex items-center gap-1.5 text-sm"
                        >
                          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                          Read the paper
                        </a>
                        {pub.arxiv && (
                          <a
                            href={pub.arxiv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex items-center gap-1.5 text-sm"
                          >
                            arXiv
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="container-page py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl">
            Working on something adjacent?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-secondary">
            We collaborate with researchers and engineers who care about high-signal, independent
            work. Send us a paper, a benchmark, or a half-formed idea.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/blogs" className="btn-ghost">
              Read the blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
