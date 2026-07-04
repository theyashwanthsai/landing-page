import { Github, Twitter } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <span className="section-label">Contact</span>
      <h1 className="text-4xl font-extrabold sm:text-5xl">Talk to the lab</h1>
      <p className="mt-5 max-w-xl text-lg text-secondary">
        Collaborations, contributions, questions, or just curiosity. Email us, find us on
        socials, or book a 15-minute call below. No pitch, no commitment.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href="mailto:sai@turilabs.in" className="btn-primary">
          sai@turilabs.in
        </a>
        <a
          href="https://github.com/turi-labs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
        <a
          href="https://x.com/turilabs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <Twitter className="h-4 w-4" aria-hidden="true" />
          X
        </a>
      </div>

      <section id="book" className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Book a call</h2>
        <iframe
          src="https://cal.com/sai-yashwanth/15min?embed=true&theme=dark"
          title="Book a call with Turi Labs"
          className="w-full rounded-xl border-0"
          style={{ height: '700px' }}
        />
      </section>
    </div>
  );
}
