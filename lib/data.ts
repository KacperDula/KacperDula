export const personalInfo = {
  name: "Kacper Dula",
  title: "Backend-focused Software Engineer",
  subtitle: "Building scalable systems & real-world applications.",
  intro:
    "Junior Software Engineer with strong academic background and hands-on experience building backend, frontend, and full-stack applications.",
  location: "Athens, Greece",
  phone: "+30 694 525 8923",
  email: "kacper.dula.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/kacper-dula/",
  github: "https://github.com/KacperDula",
  militaryService: "Completed"
};

export const about = [
  "Junior Software Engineer with a strong academic background in Computer Science and hands-on experience building backend, frontend, and full-stack applications.",
  "Experienced with ASP.NET Core, Spring Boot, React, REST APIs, and relational databases, along with foundational machine learning workflows.",
  "Reliable, collaborative, and communication-focused, seeking a junior software development role with long-term growth opportunities."
];

export const experience = [
  {
    role: "One of Founders of Startup - Secret",
    company: "Stealth Startup",
    period: "Feb 2026 - Present",
    details: ["Secret for now, maybe new updates coming soon!"]
  },
  {
    role: "Hospitality Industry",
    company: "Athens, Greece",
    period: "Jun 2020 - Dec 2025",
    details: [
      "Worked in fast-paced environments while completing studies",
      "Developed teamwork, communication, and time management skills"
    ]
  }
];

export const skills = {
  Languages: ["C#", "Java", "Python", "PHP", "JavaScript", "TypeScript", "SQL", "C/C++"],
  Frameworks: ["ASP.NET Core", "Entity Framework Core", "Spring Boot", "React.js"],
  Databases: ["SQLite", "MySQL", "SQL Server"],
  Web: ["REST APIs", "HTML5", "CSS3", "Bootstrap"],
  "Data / ML": ["Pandas", "NumPy", "Scikit-Learn"],
  "Tools & Concepts": ["Git & GitHub", "OOP principles"]
};

export const projects = [
  {
    title: "GameStore Minimal API",
    description:
      "Lightweight REST API built with ASP.NET Core, EF Core, and SQLite. Demonstrates backend architecture patterns suitable for small storefront systems.",
    repo: "https://github.com/KacperDula/GameStore-Minimal-API",
    stack: ["ASP.NET Core", "EF Core", "SQLite", "REST API"]
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat using WebSockets (Ratchet), MySQL persistence, and email verification onboarding.",
    repo: "https://github.com/KacperDula/Chat-Application",
    stack: ["PHP", "Ratchet", "WebSockets", "MySQL"]
  },
  {
    title: "React Analytics Dashboard",
    description:
      "Responsive analytics dashboard with reusable React components and chart integrations.",
    repo: "https://github.com/KacperDula/React-Analytics-Dashboard",
    stack: ["React", "TypeScript", "Charting", "Responsive UI"]
  },
  {
    title: "Salary Prediction System",
    description:
      "Machine learning workflow including data analysis, training, and evaluation using Scikit-Learn.",
    repo: "https://github.com/KacperDula/SalaryPrediction-Python",
    stack: ["Python", "Pandas", "NumPy", "Scikit-Learn"]
  }
];

export const education = [
  {
    degree: "Professional Certification - IT Applications Developer",
    school: "Athens University of Economics and Business",
    period: "Feb 2026",
    points: [
      "Team-based labs using Spring Boot, React, and SQL Server",
      "Workshops in software architecture, REST API security, and UX/UI",
      "Enterprise-style development with Git/GitHub"
    ]
  },
  {
    degree: "BSc Computer Science",
    school: "University of Derby (Athens Campus)",
    period: "Jun 2025",
    points: [
      "Software engineering, algorithms, databases, AI, and web technologies",
      "Final-year project: ML-powered recommendation system"
    ]
  }
];

export const languages = ["Polish (Native)", "Greek (Native)", "English (Fluent)"];

export const sectionIds = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "languages",
  "contact"
] as const;
