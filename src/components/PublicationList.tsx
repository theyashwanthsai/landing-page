import { ArrowUpRight } from 'lucide-react';
import { Publication } from '../data/publications';

interface PublicationListProps {
  items: Publication[];
}

export function PublicationList({ items }: PublicationListProps) {
  return (
    <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
      {items.map((pub) => (
        <article key={pub.title} className="py-7 first:pt-0 last:pb-0">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="venue-tag">{pub.venue}</span>
            {pub.note && <span className="text-xs text-faint">{pub.note}</span>}
          </div>
          {pub.link ? (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-plain group inline-flex items-start gap-1.5 text-lg font-semibold leading-snug"
            >
              <span>{pub.title}</span>
              <ArrowUpRight
                className="mt-1.5 h-4 w-4 flex-shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </a>
          ) : (
            <h3 className="text-lg font-semibold leading-snug">{pub.title}</h3>
          )}
          <p className="mt-1 text-sm text-faint">{pub.authors}</p>
          <p className="mt-2 text-[0.9375rem] text-secondary max-w-2xl">{pub.description}</p>
        </article>
      ))}
    </div>
  );
}
