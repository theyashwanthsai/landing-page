import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResearchItem {
  title: string;
  description: string;
  link: string;
  authors: string;
  venue: string;
}

interface ResearchGridProps {
  limit?: number;
}

const researchData: ResearchItem[] = [
  {
    title: "Reasoning Under Pressure: LLMs in Competitive Pokémon Battles",
    description: "A multi-agent Pokémon tournament where LLMs compete against each other to evaluate strategic reasoning under pressure.",
    link: "https://arxiv.org/abs/2508.01623",
    authors: "Sai Yashwanth, Dhatri C",
    venue: "NeurIPS ER 2025 Workshop"
  },
  {
    title: "On the Structure of Floating-Point Noise in Batch-Invariant GPU Matrix Multiplication",
    description: "We challenge the common assumption that GPU floating-point errors behave as random noise.",
    link: "https://arxiv.org/abs/2511.00025",
    authors: "Sai Yashwanth",
    venue: "ICLR Sci4DL 2026 Workshop"
  },
  {
    title: "Benchmarking Logical Reasoning Inconsistencies in Local Large Language Models: Evidence from Multi-Domain Evaluation",
    description: "An open-source benchmark evaluating logical reasoning consistency of local LLMs across multiple domains.",
    link: "",
    authors: "Sai Yashwanth, Dhatri C",
    venue: "ICLR 2026 Workshop on Logical Reasoning"
  },
  {
    title: "YaAF: Yet Another Agentic Framework",
    description: "A lean agentic framework with zero coupling for building custom AI agents. Benchmarked against industry standards like CrewAI.",
    link: "",
    authors: "Vijayant, Sai Yashwanth",
    venue: "In Progress"
  },
  {
    title: "Neural Nexus: Evaluating Strategic Reasoning in Large Language Models Through Competitive Board Games",
    description: "Evaluating LLM strategic reasoning through competitive board game environments.",
    link: "",
    authors: "Siddharth Prakash",
    venue: "In Progress"
  },
  {
    title: "RL-Guided Reranking: Training Small Language Models to Outperform Neural Rerankers",
    description: "Can reinforcement learning close the gap between small and large models on retrieval reranking? We train SLMs with RL to challenge SOTA neural rerankers.",
    link: "",
    authors: "Sagnik, Sai Yashwanth",
    venue: "Upcoming"
  },
  {
    title: "Diagnosing Failures: Benchmarking Root Cause Analysis in State-of-the-Art LLMs",
    description: "A systematic evaluation of whether frontier LLMs can reliably identify root causes across software, systems, and reasoning failure scenarios.",
    link: "",
    authors: "Dhatri C, Sai Yashwanth",
    venue: "Upcoming"
  },
  {
    title: "Emergent Organization: Self-Forming and Self-Evolving Multi-Agent Teams",
    description: "Exploring agent teams that autonomously organize their structure and evolve their coordination strategies without human-defined roles.",
    link: "",
    authors: "Srinivas, Sai Yashwanth",
    venue: "Upcoming"
  },
  {
    title: "TrulyAgent: Can Post-Trained Small Language Models Compete at Agentic Tasks?",
    description: "We investigate whether targeted post-training is enough for SLMs to rival SOTA models on complex agentic benchmarks.",
    link: "",
    authors: "Akshay, Sai Yashwanth",
    venue: "Upcoming"
  },
];

const venueColor = (venue: string) => {
  if (venue === "Upcoming") return "text-muted-foreground";
  if (venue === "In Progress") return "text-muted-foreground";
  if (venue.startsWith("ICLR")) return "text-green-500";
  if (venue.startsWith("NeurIPS")) return "text-blue-500";
  return "text-purple-500";
};

export const ResearchGrid: React.FC<ResearchGridProps> = ({ limit }) => {
  const displayData = limit ? researchData.slice(0, limit) : researchData;

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200/10">
      {displayData.map((research, index) => (
        <div key={index} className="py-6 first:pt-0 last:pb-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-1">
              <span className={`text-xs font-semibold uppercase tracking-wider ${venueColor(research.venue)}`}>
                {research.venue}
              </span>
              {research.link ? (
                <a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-semibold leading-snug hover:text-blue-400 transition-colors"
                >
                  {research.title}
                </a>
              ) : (
                <p className="text-base font-semibold leading-snug text-primary/80">
                  {research.title}
                </p>
              )}
              <p className="text-sm text-muted-foreground">{research.authors}</p>
              {research.description && (
                <p className="text-sm text-secondary pt-1">{research.description}</p>
              )}
            </div>
            {research.link && (
              <a
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mt-1 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Open paper"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
