import { BlogsSection } from '../components/BlogsSection';

export function BlogsPage() {
  return (
    <div className="container-page pt-20 pb-8 sm:pt-28">
      <span className="section-label">Blog</span>
      <h1 className="page-title">Notes from the lab</h1>
      <p className="mt-5 max-w-xl text-lg text-secondary">
        Insights, mental models, and milestones from our research journey.
      </p>

      <div className="mt-14">
        <BlogsSection />
      </div>
    </div>
  );
}
