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

export type CaseStudySection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image?: string;
  images?: string[];
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
  tagline?: string;
  caseStudy?: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "chess-ai",
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
    caseStudy: [
      {
        heading: "The Problem",
        body: "Most beginner chess engines online are either too weak to be interesting or too opaque to learn from — a black box that just makes moves. I wanted to build one from the ground up where the decision-making logic was actually mine, not a wrapped third-party engine.",
      },
      {
        heading: "Why I Built It",
        body: "Chess is a classic testbed for AI game-tree search, and I wanted hands-on experience implementing minimax and alpha-beta pruning myself rather than just studying them theoretically. Building a full playable interface on top of it also meant tackling real move validation, board state management, and UI responsiveness — not just the algorithm in isolation.",
      },
      {
        heading: "What It Does",
        body: "A fully playable chess board in the browser where you play against an AI opponent. The engine evaluates positions using piece-square tables and king safety heuristics, searches the game tree with minimax, and prunes irrelevant branches with alpha-beta pruning to keep response times fast even at deeper search levels.",
      },
      {
        heading: "Engineering Highlights",
        body: "Full FEN notation support for board state representation, real-time legal move validation to prevent illegal plays, and a search algorithm that balances look-ahead depth against response time. Built with Next.js and TypeScript, and deployed live on Vercel.",
      },
    ],
    tags: ["TypeScript", "Next.js", "Minimax", "AI", "Alpha-Beta Pruning"],
    images: ["/Portfolio/projects/chess-ai/1.png"],
    link: "https://chess-ai-smoky.vercel.app/",
    repo: "https://github.com/Harshshah931/chess-ai",
    featured: true,
  },
  {
    slug: "online-banking-system",
    title: "Online Banking System",
    description:
      "A secure web-based banking platform built with Java Servlets, JSP, and MySQL — featuring authentication, transactions, and an admin panel.",
    longDescription:
      "A full digital banking simulation built on Java EE technologies with an MVC architecture. Users can register, log in, and perform deposits, withdrawals, and fund transfers — all protected by SHA-256 password hashing, 4-digit transaction PINs, and session-based authentication with automatic timeout.",
    features: [
      "SHA-256 password hashing with 4-digit transaction PIN verification on every financial operation",
      "ACID-compliant transactions using JDBC with rollback support — failed operations never leave the database in an inconsistent state",
      "Servlet Filter-based session management with automatic 30-minute timeout and redirect protection on all sensitive pages",
      "Admin panel with real-time stats: total users, total balance held, and the 50 most recent transactions across the system",
      "Transaction history with dynamic filtering by type and date range, using parameterized SQL to prevent injection",
    ],
    caseStudy: [
      {
        heading: "The Problem",
        body: "Banking systems are among the most security-sensitive applications that exist — they're an ideal case study for exploring secure password storage, session management, ACID-compliant transactions, and layered architecture done properly, rather than the simplified versions most student projects settle for.",
      },
      {
        heading: "Why I Built It",
        body: "I wanted to go deep on Java EE fundamentals — Servlets, JSP, and JDBC — rather than defaulting to a JavaScript framework for everything, and to practice the specific discipline that security-sensitive systems demand: validating every input server-side, hashing every password, and making sure a failed transaction never corrupts the database.",
      },
      {
        heading: "What It Does",
        body: "Users register with an auto-generated account number and set a 4-digit transaction PIN required for every deposit, withdrawal, or transfer. Balances update through SQL transactions with rollback support, so a failure mid-operation never leaves partial data behind. An admin panel gives a full system overview: total users, total balance held, and recent transaction activity.",
      },
      {
        heading: "Engineering Highlights",
        body: "Built on the MVC pattern with a clean separation between Model (DAOs), View (JSP), and Controller (Servlets) layers, plus a Service layer enforcing business rules before any database write. Security is layered: SHA-256 password hashing, PIN verification per transaction, and a Servlet Filter that protects every sensitive page with session-timeout enforcement.",
      },
    ],
    tags: ["Java", "JSP", "Servlets", "MySQL", "JDBC"],
    images: [
      "/Portfolio/projects/online-banking-system/1.jpeg",
      "/Portfolio/projects/online-banking-system/2.jpeg",
      "/Portfolio/projects/online-banking-system/3.jpeg",
      "/Portfolio/projects/online-banking-system/4.jpeg",
      "/Portfolio/projects/online-banking-system/5.jpeg",
    ],
    repo: "https://github.com/Harshshah931/OnlineBankingSystem",
    featured: true,
  },
  {
    slug: "edumanage-erp",
    title: "EduManage ERP",
    description:
      "A full-stack college management system with role-based Admin, Faculty, and Student portals for attendance, marks, and fee tracking.",
    tagline: "Smart India Hackathon 2025 · Problem SIH25103",
    caseStudy: [
      {
        heading: "The Problem",
        body: "College administration at most institutions relies on fragmented systems: attendance on paper, marks in spreadsheets, fee tracking in separate tools. There was no unified, role-aware platform where admins could manage the institution, faculty could take attendance and enter marks, and students could view their own academic records — all in one place.",
      },
      {
        heading: "Why We Built It",
        body: "This project started as our SIH 2025 submission — but the problem felt real and worth solving properly. We wanted to build something that wasn't just a demo, but an actual working system with real auth, real role separation, and real data flows. The goal was to design it the way a product team would — thinking about each user type's needs before writing a single line of code.",
      },
      {
        heading: "What It Does",
        body: "Admin Portal: institutional overview dashboard, manage students & faculty, fee records, and announcements. Faculty Portal: guided attendance marking, exam creation and marks entry, class-wise performance reports. Student Portal: view marks and attendance with a 75% minimum-attendance warning, and fee status tracking — each portal built specifically around what that role actually needs day to day.",
      },
      {
        heading: "Engineering Highlights",
        body: "Role-based access control enforced via Supabase Auth, with distinct permission boundaries between Admin, Faculty, and Student portals. The backend uses Node.js, Express, and TypeScript with Zod for request validation, deployed separately on Railway, while the frontend is deployed on Netlify — a real split-service architecture rather than a single monolith.",
      },
    ],
    tags: ["TypeScript", "Node.js", "Express", "Supabase", "Tailwind CSS"],
    link: "https://edumanage-erp.netlify.app",
    repo: "https://github.com/Harshshah931/student-erp",
    featured: true,
    images: [
      "/Portfolio/projects/edumanage-erp/1.jpeg",
      "/Portfolio/projects/edumanage-erp/2.jpeg",
      "/Portfolio/projects/edumanage-erp/3.jpeg",
      "/Portfolio/projects/edumanage-erp/4.jpeg",
      "/Portfolio/projects/edumanage-erp/5.jpeg",
      "/Portfolio/projects/edumanage-erp/6.jpeg",
      "/Portfolio/projects/edumanage-erp/7.jpeg",
      "/Portfolio/projects/edumanage-erp/8.jpeg",
    ],
  },
  {
    slug: "coworkspace-booking-platform",
    title: "Co-workspace Booking Platform",
    description:
      "A full-stack workspace booking platform with a customer-facing browse/booking flow and a complete admin portal for managing spaces, seats, and bookings.",
    longDescription:
      "CoWorkSpace is a two-sided booking platform: members can browse available coworking spaces, view pricing and seat availability, and book a desk for specific dates — while admins get a full dashboard to manage spaces, add seat units, and monitor every booking made across the platform in real time.",
    features: [
      "Admin dashboard with live metrics: total spaces, total seat units, and total bookings at a glance",
      "Manage Spaces module for creating and removing coworking locations with pricing and seat capacity",
      "Manage Seats module for adding individual desk or cabin units to any existing space",
      "All Bookings view showing every reservation platform-wide with user, dates, price, and confirmation status",
      "Customer-facing browse and search flow with location filtering and one-click 'View Availability'",
    ],
    caseStudy: [
      {
        heading: "The Problem",
        body: "Coworking spaces need a way for members to see real-time availability and book a desk without emails or phone calls back and forth — and the business side needs an equally simple way to manage which spaces and seats exist and track every booking made.",
      },
      {
        heading: "Why I Built It",
        body: "I wanted to build a complete two-sided platform end-to-end — not just a booking form, but the full admin tooling behind it. Reservation systems show up constantly in real products, and building both the customer flow and the admin management layer together meant thinking carefully about how the two sides stay in sync.",
      },
      {
        heading: "What It Does",
        body: "On the admin side: create and manage coworking spaces, add individual desk/cabin seat units to any space, and view every booking made across the platform with user, dates, and status. On the member side: browse available spaces by location, see pricing and seat availability, and book directly through a clean, self-serve flow.",
      },
      {
        heading: "Engineering Highlights",
        body: "A relational data model connecting spaces, seat units, and bookings so admin changes (like adding a new desk) immediately reflect in what members can book. The admin dashboard aggregates live counts across all three entities, and the booking table tracks status (confirmed/pending) per reservation for accountability.",
      },
    ],
    tags: ["HTML", "CSS", "JavaScript", "Web App"],
    images: [
      "/Portfolio/projects/coworkspace-booking-platform/1.png",
      "/Portfolio/projects/coworkspace-booking-platform/2.png",
      "/Portfolio/projects/coworkspace-booking-platform/3.png",
      "/Portfolio/projects/coworkspace-booking-platform/4.png",
      "/Portfolio/projects/coworkspace-booking-platform/5.png",
      "/Portfolio/projects/coworkspace-booking-platform/6.png",
    ],
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
