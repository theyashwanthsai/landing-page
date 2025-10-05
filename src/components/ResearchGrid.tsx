import React from 'react';
import { ResearchCard } from './ResearchCard';

// Define the type for research data items
interface ResearchItem {
  image: string;
  title: string;
  description: string;
  link: string;
  authors: string;
  badge?: string; // Optional badge for special recognition
}

// Define props interface for ResearchGrid
interface ResearchGridProps {
  limit?: number;  // Make it optional with ?
}

const researchData: ResearchItem[] = [
  {
    image: "/images/pokemon_llm.png",
    title: "A Multi-Agent Pokemon Tournament for Evaluating Strategic Reasoning of Large Language Models",
    description: "A Pokemon tournament where LLMs battle each other to come out on top.",
    link: "https://arxiv.org/abs/2508.01623",
    authors: "Sai Yashwanth, Dhatri C",
    badge: "NeurIPS 2025 Workshop"
  },
  {
    image: "/images/yaaf.png",
    title: "YaAF: Yet Another Agentic Framework",
    description: "Our framework to create custom AI Agents with ease. Built to be lean and has zero coupling. Benchmarked against industry standars like Crewai",
    link: "https://github.com/Turi-Labs/YAAF",
    authors: "Sai Yashwanth, Vijayant",
    badge: "Currently in Progress"
  },
  {
    image: "",
    title: "A Probabilistic Model of Floating-Point Noise Propagation and Prediction Divergence in Transformer Inference",
    description: "",
    link: "#",
    authors: "Sai Yashwanth",
    badge: "Currently in Progress"
  },
  {
    image: "",
    title: "MREB",
    description: "An open source benchmark for small language models.",
    link: "#",
    authors: "Sai Yashwanth, Dhatri C",
    badge: "Currently in Progress"
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
