export interface Publication {
  title: string;
  description: string;
  link: string;
  authors: string;
  venue: string;
  status: 'accepted' | 'in-progress';
  note?: string;
}

export const publications: Publication[] = [
  {
    title: 'RLRank: Distilling Offline Oracles into Online Policies for Document Reranking',
    description:
      'Distilling expensive offline reranking oracles into fast online policies. We train small models with reinforcement learning to rerank documents at a fraction of the cost.',
    link: '',
    authors: 'Sagnik P, Sai Yashwanth',
    venue: 'ICML 2026 Workshop',
    status: 'accepted',
    note: 'Poster',
  },
  {
    title:
      'Executable Ground Truth: A Closed-Loop Benchmark for Evaluating LLM Agents on Microservice Incident Remediation',
    description:
      'A closed-loop benchmark where LLM agents must remediate live microservice incidents, with fixes verified by execution rather than text similarity.',
    link: '',
    authors: 'Dhatri C, Sai Yashwanth',
    venue: 'ICML 2026 Workshop',
    status: 'accepted',
    note: 'Poster',
  },
  {
    title:
      'Compositional Skill Acquisition in Agentic Pipelines via Reinforcement Learning and Knowledge Distillation',
    description:
      'Combining reinforcement learning and knowledge distillation so that small models in agentic pipelines can acquire and compose new skills.',
    link: '',
    authors: 'Akshay Kumar, Sai Yashwanth',
    venue: 'ICML 2026 Workshop',
    status: 'accepted',
    note: 'Poster',
  },
  {
    title: 'On the Structure of Floating-Point Noise in Batch-Invariant GPU Matrix Multiplication',
    description:
      'We challenge the common assumption that GPU floating-point errors behave as random noise.',
    link: 'https://arxiv.org/abs/2511.00025',
    authors: 'Sai Yashwanth',
    venue: 'ICLR 2026 Sci4DL Workshop',
    status: 'accepted',
  },
  {
    title:
      'Benchmarking Logical Reasoning Inconsistencies in Local Large Language Models: Evidence from Multi-Domain Evaluation',
    description:
      'An open-source benchmark evaluating logical reasoning consistency of local LLMs across multiple domains.',
    link: '',
    authors: 'Sai Yashwanth, Dhatri C',
    venue: 'ICLR 2026 Logical Reasoning Workshop',
    status: 'accepted',
  },
  {
    title: 'Reasoning Under Pressure: LLMs in Competitive Pokémon Battles',
    description:
      'A multi-agent Pokémon tournament where LLMs compete against each other to evaluate strategic reasoning under pressure.',
    link: 'https://arxiv.org/abs/2508.01623',
    authors: 'Sai Yashwanth, Dhatri C',
    venue: 'NeurIPS 2025 ER Workshop',
    status: 'accepted',
  },
  {
    title: 'YaAF: Yet Another Agentic Framework',
    description:
      'A lean agentic framework with zero coupling for building custom AI agents. Benchmarked against industry standards like CrewAI.',
    link: '',
    authors: 'Vijayant, Sai Yashwanth',
    venue: 'In progress',
    status: 'in-progress',
  },
  {
    title:
      'Neural Nexus: Evaluating Strategic Reasoning in Large Language Models Through Competitive Board Games',
    description: 'Evaluating LLM strategic reasoning through competitive board game environments.',
    link: '',
    authors: 'Siddharth Prakash',
    venue: 'In progress',
    status: 'in-progress',
  },
  {
    title: 'Emergent Organization: Self-Forming and Self-Evolving Multi-Agent Teams',
    description:
      'Exploring agent teams that autonomously organize their structure and evolve their coordination strategies without human-defined roles.',
    link: '',
    authors: 'Srinivas, Sai Yashwanth',
    venue: 'In progress',
    status: 'in-progress',
  },
];

export const acceptedPublications = publications.filter((p) => p.status === 'accepted');
export const inProgressPublications = publications.filter((p) => p.status === 'in-progress');
