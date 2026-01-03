export const portfolio = {
  name: "Jad Obeid",
  title: "Software Developer",
  location: "Lebanon",
  email: "jad.4obeid@gmail.com",
  phone: "+961 71 643 826",
  links: {
    github: "https://github.com/Jad-Ob",
    linkedin: "https://www.linkedin.com/in/jad-obeid-748a642a0",
  },
  summary:
    "Computer Science graduate student building full-stack web apps and AI-assisted tools. Strong in React/Node, PHP/MySQL, and databases through internships and real projects.",
  highlights: [
    "Full-stack delivery (UI → API → DB)",
    "AI integrations (OpenAI API / NLP)",
    "Clean UX, performance, maintainability",
  ],
  projects: [
    {
      name: "SmartCart",
      featured: true,
      tagline: "AI shopping assistant with recommendations + wishlist + auth",
      description:
        "An AI-powered shopping assistant that helps users discover products, manage wishlists, and make smarter purchases.",
      bullets: [
        "AI-driven recommendations and natural-language product discovery (OpenAI API).",
        "Authentication + user accounts + wishlist flows.",
        "Backend structure designed for scalable search and product features.",
      ],
      meta: ["Auth", "AI", "API", "Database"],
      tech: ["Next.js", "Node.js", "OpenAI API", "MongoDB"],
      links: { live: "", code: "" },
      theme: "aurora",
    },
    {
      name: "VoteVision",
      featured: true,
      tagline: "Secure online voting system with real-time results",
      description:
        "An online voting platform with authentication, poll scheduling, and live results visualization.",
      bullets: [
        "Secure login and poll participation workflow.",
        "Poll timer/scheduling and clear results presentation.",
        "Admin-friendly structure for managing polls and voters.",
      ],
      meta: ["Auth", "Realtime", "Dashboard"],
      tech: ["Web App", "Auth", "Charts"],
      links: { live: "", code: "" },
      theme: "nebula",
    },
    {
      name: "AI Sentiment Analyzer",
      featured: false,
      tagline: "DistilBERT sentiment analysis with modern UI + history",
      description:
        "A sentiment analysis tool that classifies text using DistilBERT and stores recent analyses for comparison.",
      bullets: [
        "NLP model integration (DistilBERT) for sentiment classification.",
        "Clean UI for quick input + results.",
        "History saved for repeated analysis and review.",
      ],
      meta: ["NLP", "Model", "UI"],
      tech: ["Flask", "Svelte", "DistilBERT"],
      links: { live: "", code: "" },
      theme: "sunset",
    },
    {
      name: "Restaurant Menu App",
      featured: false,
      tagline: "Menu browsing + management backed by MySQL",
      description:
        "A database-backed web app for browsing and managing restaurant menu items with a simple management flow.",
      bullets: [
        "Express API with MySQL for structured data access.",
        "CRUD-like flow for managing menu content.",
        "Built for fast updates and simple operations.",
      ],
      meta: ["CRUD", "API", "MySQL"],
      tech: ["Node.js", "Express", "MySQL"],
      links: { live: "", code: "" },
      theme: "ocean",
    },
  ],
  skills: {
    Frontend: [
      "React",
      "Vue",
      "TypeScript",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
    ],
    Backend: ["Node.js", "Express", "PHP"],
    Databases: ["MySQL", "SQL", "MongoDB"],
    AI: ["OpenAI API", "DistilBERT"],
    Languages: ["Java", "Python", "C", "C++"],
    Tools: ["Git", "VS Code"],
  },
  experience: [
    {
      role: "Web Developer Intern",
      company: "CodiTech Solutions",
      points: [
        "Built responsive pages using HTML/CSS/JS + Bootstrap.",
        "Worked with PHP/MySQL to support dynamic features and data handling.",
        "Assisted with debugging and performance improvements.",
      ],
    },
    {
      role: "WordPress Developer Intern",
      company: "InternGrub",
      points: [
        "Designed websites with a focus on usability and layout.",
        "Customized themes and delivered client-ready pages.",
      ],
    },
    {
      role: "Junior Database Engineer Intern",
      company: "M365Connect",
      points: [
        "Wrote SQL queries for data extraction and reporting.",
        "Helped optimize and support data workflows/migrations.",
      ],
    },
  ],
  education: [
    { name: "MSc Computer Science", dates: "2025 — Present" },
    { name: "BSc Computer Science", dates: "2022 — 2025" },
  ],
};
