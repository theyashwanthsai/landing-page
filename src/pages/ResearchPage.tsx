import { PublicationList } from '../components/PublicationList';
import { acceptedPublications, inProgressPublications } from '../data/publications';

export function ResearchPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <span className="section-label">Research</span>
      <h1 className="text-4xl font-extrabold sm:text-5xl">Our work</h1>
      <p className="mt-5 max-w-2xl text-lg text-secondary">
        We pursue ideas driven by curiosity rather than profit. Our work spans reinforcement
        learning, agentic systems, evaluation, and benchmarking, with six papers accepted at
        NeurIPS, ICLR, and ICML workshops.
      </p>

      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold">Accepted publications</h2>
        <PublicationList items={acceptedPublications} />
      </section>

      <section className="mt-16 border-t pt-16" style={{ borderColor: 'var(--border)' }}>
        <h2 className="mb-8 text-2xl font-bold">In progress</h2>
        <PublicationList items={inProgressPublications} />
      </section>
    </div>
  );
}
