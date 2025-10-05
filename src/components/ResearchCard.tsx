import React from 'react';
import { ChevronRight, FileText, Calendar, ExternalLink } from 'lucide-react';

interface ResearchCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  authors: string;
  badge?: string; // Optional badge for special recognition
}

export function ResearchCard({ title, description, image, link, authors, badge }: ResearchCardProps) {
  const temp = "/images/temp.jpg"
  
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group h-full">
      <div className="border-2 hover:border-pink-500/50 transition-all hover:shadow-xl group overflow-hidden rounded-lg bg-card h-full flex flex-col"
           style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="overflow-hidden">
          <img 
            src={image || temp} 
            alt={title}
            className="w-full h-full object-scale-down group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6 space-y-3 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl leading-tight group-hover:text-primary transition-colors font-semibold">
                {title}
              </h3>
            </div>
            <FileText className="h-5 w-5 text-primary flex-shrink-0" />
          </div>
          
          {badge && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="font-semibold text-primary">{badge}</span>
            </div>
          )}
          
          {authors && (
            <div className="text-sm text-muted-foreground">
              {authors}
            </div>
          )}
          
          <div className="flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="mt-auto pt-4">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/btn">
              Read Paper
              <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
