import React from 'react';
import { ResearchCard } from './ResearchCard';

// Define the type for research data items
interface ResearchItem {
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
}

// Define props interface for ResearchGrid
interface ResearchGridProps {
  limit?: number;  // Make it optional with ?
}

const researchData: ResearchItem[] = [
  {
    image: "/images/yaaf.jpeg",
    title: "Yet Another Agentic Framework",
    description: "Our Inhouse Framework to create custom AI Agents with ease and zero coupling. Uses Openai assistants under the hood",
    category: "Agentic Framework",
    link: "https://github.com/Turi-Labs/YAAF"
  },
  {
    image: "/images/devyan.jpeg",
    title: "Devyan",
    description: "Building a Software Dev Team. Experimental Project to orchestrate a team of agents to solve programming tasks.",
    category: "Multi Agent System",
    link: "https://github.com/Turi-Labs/Devyan"
  },
  {
    image: "/images/pokemon-league.jpeg",
    title: "LLM Pokemon League",
    description: "A Pokemon League where LLMs battle each other to become the best Pokemon trainer.",
    category: "AI Experimental",
    link: "#"
  },
  {
    image: "/images/mreb.jpeg",
    title: "MREB",
    description: "An open source benchmark for small language models.",
    category: "AI Experimental",
    link: "#"
  },
  {
    image: "/images/newsletter-agents.jpeg",
    title: "Ambient Newsletter Agents",
    description: "Official team of agents which run the turilabs newsletter",
    category: "AI Experimental",
    link: "#"
  },
  {
    image: "/images/ai-pet.jpeg",
    title: "AI Pet",
    description: "Coming Soon...",
    category: "AI Experimental",
    link: "#"
  }
];


export const ResearchGrid: React.FC<ResearchGridProps> = ({ limit }) => {
  // If limit is provided, slice the array, otherwise use the full array
  const displayData = limit ? researchData.slice(0, limit) : researchData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {displayData.map((research, index) => (
        <ResearchCard key={index} {...research} />
      ))}
    </div>
  );
};
