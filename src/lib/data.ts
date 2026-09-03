export const socials = {
  github: "https://github.com/shoaibaliarain3-ops",
};

export const contact = {
  email: "shoaibaliarain3@gmail.com",
  whatsapp: "+92 323 1556769",
  whatsappLink: "https://wa.me/923231556769",
  location: "Karachi, Pakistan",
};

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  imageGradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "AI Expense Tracker",
    description:
      "An intelligent expense tracking application powered by AI that automatically categorizes transactions, provides spending insights, and helps you manage your finances with smart recommendations.",
    technologies: ["Next.js", "TypeScript", "Supabase", "AI"],
    github: "https://github.com/shoaibaliarain3-ops",
    live: "#",
    imageGradient:
      "from-indigo-500 via-violet-500 to-purple-600",
    icon: "💳",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, animated developer portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features a sleek dark theme with glassmorphism, scroll animations, and a fully responsive design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/shoaibaliarain3-ops",
    live: "#",
    imageGradient:
      "from-cyan-500 via-blue-500 to-indigo-600",
    icon: "🚀",
  },
  {
    title: "AI-Powered Web Application",
    description:
      "A cutting-edge web application integrating Agentic AI capabilities to deliver intelligent, context-aware responses and automated workflows for real-world tasks.",
    technologies: ["Next.js", "React", "Python", "AI", "TypeScript"],
    github: "https://github.com/shoaibaliarain3-ops",
    live: "#",
    imageGradient:
      "from-emerald-500 via-teal-500 to-cyan-600",
    icon: "🤖",
  },
];

export interface WebApp {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  imageGradient: string;
  icon: string;
}

export const webApps: WebApp[] = [
  {
    title: "Task Manager",
    description:
      "A modern task management app with drag-and-drop boards, real-time collaboration, and smart prioritization using AI.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/shoaibaliarain3-ops",
    live: "#",
    imageGradient:
      "from-rose-500 via-pink-500 to-fuchsia-600",
    icon: "📋",
  },
  {
    title: "Weather Dashboard",
    description:
      "A sleek weather dashboard with real-time data, beautiful visualizations, and location-based forecasts.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/shoaibaliarain3-ops",
    live: "#",
    imageGradient:
      "from-amber-500 via-orange-500 to-red-600",
    icon: "🌤️",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with AI-powered smart replies, typing indicators, and a sleek modern interface.",
    technologies: ["Next.js", "React", "Supabase"],
    github: "https://github.com/shoaibaliarain3-ops",
    live: "#",
    imageGradient:
      "from-sky-500 via-blue-500 to-indigo-600",
    icon: "💬",
  },
];

export const skills = [
  {
    name: "HTML",
    icon: "🌐",
    level: 92,
  },
  {
    name: "CSS",
    icon: "🎨",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: "⚡",
    level: 88,
  },
  {
    name: "TypeScript",
    icon: "🔷",
    level: 85,
  },
  {
    name: "React",
    icon: "⚛️",
    level: 86,
  },
  {
    name: "Next.js",
    icon: "▲",
    level: 84,
  },
  {
    name: "Tailwind CSS",
    icon: "💨",
    level: 89,
  },
  {
    name: "Python",
    icon: "🐍",
    level: 82,
  },
  {
    name: "Git",
    icon: "🔀",
    level: 87,
  },
  {
    name: "GitHub",
    icon: "🐙",
    level: 88,
  },
  {
    name: "Supabase",
    icon: "⚡",
    level: 80,
  },
  {
    name: "Artificial Intelligence",
    icon: "🧠",
    level: 85,
  },
  {
    name: "Agentic AI",
    icon: "🤖",
    level: 83,
  },
];
