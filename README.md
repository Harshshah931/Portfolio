# Harsh Shah — Portfolio

**Live site:** [harshshah931.github.io/Portfolio](https://harshshah931.github.io/Portfolio/)

A personal portfolio built to showcase my work as an AI/ML Engineer & Software Developer — featuring an interactive 3D hero scene, animated project case studies, and a live achievements timeline.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![Built with React](https://img.shields.io/badge/built%20with-React-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/bundler-Vite-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/language-TypeScript-3178C6?logo=typescript&logoColor=white)

---

## ✨ Features

- **Interactive 3D hero** — a distorted, mouse-reactive core built with React Three Fiber, with ambient particles and glowing accents
- **Cinematic animations** — scroll-triggered reveals and smooth page transitions powered by Framer Motion and Lenis
- **Project case studies** — click any project card to open a detailed modal with a full write-up, key engineering highlights, tech stack, and links to the live demo / GitHub repo
- **Achievements timeline** — a running record of certifications, leadership roles, and milestones
- **Fully responsive** — dark, glass-morphic design that adapts cleanly from mobile to desktop

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Framework | React 19, Vite, TypeScript |
| Styling | Tailwind CSS v4 |
| 3D / Graphics | Three.js, React Three Fiber, @react-three/drei |
| Animation | Framer Motion, Lenis (smooth scroll) |
| Icons | React Icons |
| Deployment | GitHub Actions → GitHub Pages |

## 📂 Project Structure

```
src/
├── assets/          # Images and static media
├── components/      # Reusable UI components (Navbar, ProjectCard, ProjectModal)
├── data/            # Centralized content (profile, projects, skills, achievements)
├── hooks/           # Custom React hooks
├── sections/        # Page sections (Hero, About, Projects, Skills, Achievements, Contact)
└── three/           # React Three Fiber scene components
```

## 🚀 Running Locally

```bash
git clone https://github.com/Harshshah931/Portfolio.git
cd Portfolio
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

## 📬 Contact

- **Email:** [harshnshahbd@gmail.com](mailto:harshnshahbd@gmail.com)
- **LinkedIn:** [linkedin.com/in/harsh-shah-004249369](https://linkedin.com/in/harsh-shah-004249369)
- **GitHub:** [@Harshshah931](https://github.com/Harshshah931)

---

*Designed and built by Harsh Shah — B.Tech AI/ML, Thakur College of Engineering & Technology (TCET), Mumbai.*
