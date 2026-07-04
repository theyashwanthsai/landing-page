import { PublicationList } from '../components/PublicationList';
import { publications } from '../data/publications';

export function ResearchPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <span className="section-label">Research</span>
      <h1 className="text-4xl font-extrabold sm:text-5xl">Our work</h1>
      <p className="mt-5 max-w-2xl text-lg text-secondary">
        We pursue ideas driven by curiosity rather than profit. Our work spans reinforcement
        learning, agentic systems, evaluation, and benchmarking, with six A* conference workshop
        accepts at NeurIPS, ICLR, and ICML.
      </p>

      <section className="mt-16">
        <PublicationList items={publications} />
      </section>
    </div>
  );
}
