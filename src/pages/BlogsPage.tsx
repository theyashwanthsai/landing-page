import { BlogsSection } from '../components/BlogsSection';

export function BlogsPage() {
  return (
    <div className="container-page py-16 sm:py-20">
      <span className="section-label">Blog</span>
      <h1 className="text-4xl font-extrabold sm:text-5xl">Notes from the lab</h1>
      <p className="mt-5 max-w-xl text-lg text-secondary">
        Insights, mental models, and milestones from our research journey.
      </p>

      <div className="mt-14">
        <BlogsSection />
      </div>
    </div>
  );
}
