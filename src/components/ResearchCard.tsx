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
}



export function ResearchCard({ title, description, image, link, authors }: ResearchCardProps) {
  const temp = "/images/temp.jpg"
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col h-[32rem] research-card-bg 
      rounded-2xl overflow-hidden backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all
       duration-300 hover:transform hover:-translate-y-2 border border-gray-800">
        <div className="relative h-64 border-b border-gray-200">
          <img src={image || temp} alt={title} className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
        <div className="p-6 flex flex-col flex-1 border-t-0">
          <h3 className="text-2xl font-semibold mb-3 text-primary line-clamp-2 min-h-[4rem]">{title}</h3>
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
