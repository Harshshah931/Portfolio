export const profile = {
  name: "Harsh Shah",
  role: "AI/ML Engineer & Software Developer",
  tagline: "I build intelligent systems and clean, scalable software.",
  bio: "B.Tech AI/ML student at Thakur College of Engineering & Technology (TCET), Mumbai (Class of 2028). Passionate about building intelligent systems, full-stack web platforms, and scalable software solutions.",
  location: "Mumbai, India",
  email: "harshnshahbd@gmail.com",
  socials: {
    github: "https://github.com/Harshshah931",
    linkedin: "https://linkedin.com/in/harsh-shah-004249369",
  },
};

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image?: string;
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Chess AI",
    description:
      "A playable chess engine built with Next.js and TypeScript utilizing the Minimax decision algorithm with Alpha-Beta Pruning.",
    longDescription:
      "An interactive web-based chess application engineered with modern TypeScript and Next.js. Powered by a minimax game-tree search engine optimized with alpha-beta pruning, piece-square evaluation heuristics, and full move validation. Players can challenge the AI opponent across tactical search depths with real-time board evaluation.",
    features: [
      "Minimax algorithm with Alpha-Beta Pruning for tactical search tree optimization",
      "Piece-square positional tables and king safety heuristic evaluation",
      "Full FEN string notation support and real-time move legality validation",
      "Responsive, modern chess board interface deployed live on Vercel",
    ],
    tags: ["TypeScript", "Next.js", "Minimax", "AI", "Alpha-Beta Pruning"],
    link: "https://chess-ai-smoky.vercel.app/",
    repo: "https://github.com/Harshshah931/chess-ai",
    featured: true,
  },
  {
    title: "Online Banking System",
    description:
      "A web-based Online Banking System built with Java Servlets, JSP, and MySQL for secure account management and financial transactions.",
    longDescription:
      "A full-featured banking platform simulation built with Java Enterprise technologies (Servlets & JSP) and relational MySQL database storage. Provides secure account management, balance inquiries, funds transfer mechanisms, and role-based access for customers and bank administrators.",
    features: [
      "Secure transaction handling and balance updates using JDBC and MySQL",
      "Role-based authentication & privilege separation (Admin vs. Customer portals)",
      "Fund transfer simulation with validation checks and error handling",
      "Account statements and transactional audit logs",
    ],
    tags: ["Java", "JSP", "Servlets", "MySQL", "JDBC"],
    repo: "https://github.com/Harshshah931/OnlineBankingSystem",
    featured: true,
  },
  {
    title: "EduManage ERP",
    description:
      "A full-stack college management system with role-based Admin, Faculty, and Student portals for attendance, marks, and fee tracking.",
    longDescription:
      "A role-based academic management portal built from scratch — covering student/faculty/fee administration, guided attendance marking, exam and marks entry, and a 75% attendance-threshold visual warning system for students. Built with a Node.js/Express/TypeScript backend, Supabase (PostgreSQL + Auth) for data and authentication, and deployed across Netlify (frontend) and Railway (backend API).",
    features: [
      "Role-based access control for Admin, Faculty, and Student portals via Supabase Auth",
      "Guided attendance marking (Semester → Department → Subject) with 75% minimum-attendance visual warnings",
      "Exam creation, marks entry, and class-wise performance reporting for faculty",
      "Fee management and payment tracking with student-facing fee status view",
    ],
    tags: ["TypeScript", "Node.js", "Express", "Supabase", "Tailwind CSS"],
    link: "https://edumanage-erp.netlify.app",
    repo: "https://github.com/Harshshah931/student-erp",
    featured: true,
  },
  {
    title: "Co-workspace Booking Platform",
    description:
      "A web application designed for reserving flexible desks, dedicated meeting rooms, and collaborative workspaces.",
    longDescription:
      "A booking and space allocation web platform allowing members to browse available desks, schedule conference rooms, and manage workspace reservations with time slot selection and resource filtering.",
    features: [
      "Interactive workspace catalog and room availability filtering",
      "Date and time slot reservation workflow",
      "User booking history and schedule confirmation overview",
      "Clean, modern responsive UI for desktop and mobile",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Web App"],
    repo: "https://github.com/Harshshah931/coworkspace-booking-platform",
  },
];

export type Achievement = {
  title: string;
  description: string;
  date?: string;
  category?: string;
  highlight?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Software Engineer, Robotics and Rover Team",
    description:
      "Vyom Voyage — Collaborated on scalable software solutions with full SDLC involvement from ideation to deployment.",
    date: "Jul 2025 – Present",
    category: "Engineering",
    highlight: "Vyom Voyage",
  },
  {
    title: "Student Brand Ambassador",
    description:
      "Google — Engaged students, organized and ran Google Gemini AI campus events and hands-on workshops.",
    date: "Aug 2025 – Nov 2025",
    category: "Leadership",
    highlight: "Google",
  },
  {
    title: "Google Gemini Campus Ambassador",
    description:
      "Thakur College of Engineering & Technology (TCET) — Selected among student leaders to run AI workshops and hackathons on campus.",
    category: "Leadership",
    highlight: "TCET",
  },
  {
    title: "India AI Impact Buildathon",
    description:
      "Guvi / HCL GUVI certification for participating and building in the India AI Impact Buildathon.",
    date: "Feb 2026",
    category: "Hackathon / Certification",
    highlight: "Guvi / HCL",
  },
  {
    title: "Programming with JavaScript",
    description:
      "Meta certification via Coursera covering JavaScript fundamentals, DOM manipulation, and asynchronous programming.",
    date: "Jan 2026",
    category: "Certification",
    highlight: "Meta",
  },
  {
    title: "Introduction to Front-End Development",
    description:
      "Meta certification via Coursera covering modern web architecture, responsive design, and UI development.",
    date: "Jan 2026",
    category: "Certification",
    highlight: "Meta",
  },
  {
    title: "Java Programming for Beginners",
    description:
      "IBM certification via Coursera covering object-oriented programming concepts, core Java syntax, and data structures.",
    date: "Jan 2026",
    category: "Certification",
    highlight: "IBM",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    description:
      "Tata (via Forage) — Completed virtual job simulation leveraging Generative AI workflows for enterprise data analytics.",
    date: "Oct 2025",
    category: "Job Simulation",
    highlight: "Tata / Forage",
  },
  {
    title: "JavaScript Essentials 1 & 2",
    description:
      "Cisco Networking Academy — Comprehensive foundational and intermediate JavaScript programming certification.",
    category: "Certification",
    highlight: "Cisco",
  },
  {
    title: "Python Essentials 1 & 2",
    description:
      "Cisco Networking Academy — Core and intermediate Python programming certification covering procedural and OOP paradigms.",
    category: "Certification",
    highlight: "Cisco",
  },
  {
    title: "Gen AI Engineering Mastermind",
    description:
      "Outskill — Completed intensive program on designing, fine-tuning, and scaling AI-driven solutions.",
    category: "Certification",
    highlight: "Outskill",
  },
  {
    title: "Python 3.4.3 Training",
    description:
      "IIT Bombay Spoken Tutorial Project — Completed Python certification with an 85.71% score.",
    category: "Certification",
    highlight: "IIT Bombay (85.71%)",
  },
  {
    title: "Power BI: Business Intelligence (Beginner to Advanced)",
    description:
      "Udemy / Biztics Inc. — 46-hour comprehensive course on business intelligence, DAX calculations, and interactive dashboards.",
    category: "Certification",
    highlight: "46 Hours",
  },
  {
    title: "TEDxTCET 2025",
    description:
      "Participated and attended TEDxTCET 2025 ideas conference.",
    date: "2025",
    category: "Event",
    highlight: "TEDx",
  },
  {
    title: "ISTE Student Member",
    description:
      "Indian Society for Technical Education (ISTE) student member at TCET.",
    date: "2025 – 2029",
    category: "Membership",
    highlight: "ISTE TCET",
  },
  {
    title: "Rotaract Club of TCET — Member",
    description:
      "Active member participating in community service, leadership initiatives, and youth development programs.",
    date: "Jul 2025 – Present",
    category: "Community",
    highlight: "Rotaract",
  },
  {
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    description:
      "Thakur College of Engineering & Technology (TCET), Mumbai — Undergraduate degree specializing in AI, Machine Learning, and Computer Science.",
    date: "2024 – 2028",
    category: "Education",
    highlight: "TCET Mumbai",
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++", "HTML/CSS"] },
  { category: "AI/ML & Data", items: ["NLP", "Generative AI", "Scikit-learn", "Pandas", "NumPy", "Power BI"] },
  { category: "Web Dev", items: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "REST APIs", "Three.js"] },
  { category: "Databases", items: ["MySQL", "SQLite", "PostgreSQL"] },
  { category: "Tools & Platforms", items: ["Git/GitHub", "Vercel", "VS Code", "Linux", "Coursera", "Forage"] },
];
