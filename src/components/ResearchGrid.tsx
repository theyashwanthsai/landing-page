import React from 'react';
import { ResearchCard } from './ResearchCard';

// Define the type for research data items
interface ResearchItem {
  image: string;
  title: string;
  description: string;
  category: string;
  link: string;
  authors: string;
}

// Define props interface for ResearchGrid
interface ResearchGridProps {
  limit?: number;  // Make it optional with ?
}

const researchData: ResearchItem[] = [
  {
    image: "/images/pokemon_llm.png",
    title: "LLM Pokemon League",
    description: "A Pokemon League where LLMs battle each other to become the best Pokemon trainer.",
    category: "AI Experimental",
    link: "https://arxiv.org/abs/2508.01623",
    authors: "Sai Yashwanth, Dhatri C"
  },
  {
    image: "",
    title: "Yet Another Agentic Framework",
    description: "Our Inhouse Framework to create custom AI Agents with ease and zero coupling. Uses Openai assistants under the hood",
    category: "Agentic Framework",
    link: "https://github.com/Turi-Labs/YAAF",
    authors: "Sai Yashwanth, Vijayant"
  },
  {
    image: "",
    title: "MREB",
    description: "An open source benchmark for small language models.",
    category: "AI Experimental",
    link: "#",
    authors: "Sai Yashwanth, Dhatri C"
  },
  {
    image: "",
    title: "Newsletter Agents",
    description: "Official team of agents which run the turilabs newsletter",
    category: "AI Experimental",
    link: "#",
    authors: "Sai Yashwanth"
  },
  {
    image: "",
    title: "Devyan",
    description: "Building a Software Dev Team. Experimental Project to orchestrate a team of agents to solve programming tasks.",
    category: "Multi Agent System",
    link: "https://github.com/Turi-Labs/Devyan",
    authors: "Sai Yashwanth"
  },
];


export const ResearchGrid: React.FC<ResearchGridProps> = ({ limit }) => {
  // If limit is provided, slice the array, otherwise use the full array
  const displayData = limit ? researchData.slice(0, limit) : researchData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {displayData.map((research, index) => (
        <div className="max-w-sm mx-auto w-full">
          <ResearchCard key={index} {...research} />
        </div>
      ))}
    </div>
  );
};
