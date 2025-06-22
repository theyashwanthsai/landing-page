import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ResearchCardProps {
  // image: string; // Removed image prop
  title: string;
  description: string;
  category: string;
  link: string;
}

export function ResearchCard({ title, description, category, link }: ResearchCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-gray-900 rounded-xl overflow-hidden group hover:bg-gray-800 transition-all duration-300 p-6"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-2.5 py-0.5 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-md">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <span className="text-blue-400 group-hover:text-purple-300 flex items-center gap-1.5 text-sm font-medium">
          Learn more
          <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}
