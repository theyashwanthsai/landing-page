import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ResearchCardProps {
  // image: string; // Removed image prop
  title: string;
  description: string;
  category: string;
  link: string;
  image: string;
  authors: string;
  badge?: string; // Optional badge for special recognition
}



export function ResearchCard({ title, description, image, link, authors, badge }: ResearchCardProps) {
  const temp = "/images/temp.jpg"
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="flex flex-col h-[32rem] research-card-bg 
      rounded-2xl overflow-hidden backdrop-blur-sm shadow-md hover:shadow-lg transition-all
       duration-500 ease-out group-hover:translate-y-[-4px] border border-gray-200 hover:border-gray-300">
        <div className="relative h-64 border-b border-gray-200">
          <img src={image || temp} alt={title} className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          {badge && (
            <div className="absolute top-4 right-4 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-200 rounded-lg blur-sm opacity-75"></div>
                <span className="relative inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold bg-pink-500 text-white shadow-xl border border-white/20 backdrop-blur-sm">
                  <span className="mr-1.5 text-yellow-300">🏆</span>
                  {badge}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1 border-t-0">
          <h3 className="text-2xl font-semibold mb-3 text-primary line-clamp-none">{title}</h3>
          <p className="text-muted text-base mb-4 line-clamp-4 flex-1">{description}</p>
          {authors && (
            <div className="text-sm text-blue-700 mt-auto border-t border-gray-100 pt-2">
              Contributors: {authors}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
