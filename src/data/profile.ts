export const profile = {
  name: "Akshata Ingale",
  title: "Java Full Stack Developer",
  tagline: "Software Development",
  location: "Pune, Maharashtra, India",
  phone: "+91 8208667887",
  email: "akshataingale2003@gmail.com",
  linkedin: "https://linkedin.com/in/akshata-ingale-dev",
  github: "https://github.com/akshataingale29",
  heroSummary:
    "Passionate Computer Science graduate with a strong foundation in software development and problem-solving. Dedicated to building secure, scalable, and user-focused applications while continuously learning modern technologies. Enthusiastic about creating impactful digital solutions through innovation, collaboration, and clean development practices.",
  summary:
    "Computer Science graduate (CGPA 9.43/10) with 1+ year of combined internship experience in Java backend development, secure desktop applications, and real-world web solutions. Developed 10+ RESTful APIs, implemented AES-based encryption, optimized SQL queries, and contributed to live business website modules and service platforms.",
  objective:
    "Seeking a Software Developer / Java Full Stack Developer role where I can contribute through clean code, secure architecture, and scalable software solutions.",
  resumeFile: "/assets/resume/Akshata_Ingale_CV_new.pdf",
};

export const stats = [
  { label: "CGPA", value: "9.43", suffix: "/10" },
  { label: "REST APIs shipped", value: "10", suffix: "+" },
  { label: "Internships", value: "3", suffix: "" },
  { label: "Years experience", value: "1", suffix: "+" },
];

export type SkillCategory = {
  id: string;
  title: string;
  eyebrow: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    eyebrow: "01",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 78 },
      { name: "JavaScript", level: 82 },
      { name: "SQL", level: 85 },
      { name: "C", level: 70 },
      { name: "C++", level: 68 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    eyebrow: "02",
    skills: [
      { name: "React.js", level: 82 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    eyebrow: "03",
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "JDBC", level: 82 },
      { name: "Node.js", level: 68 },
      { name: ".NET Framework", level: 60 },
      { name: "PHP", level: 72 },
    ],
  },
  {
    id: "database",
    title: "Database",
    eyebrow: "04",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 70 },
      { name: "SQL Server", level: 65 },
      { name: "Query Optimization", level: 80 },
      { name: "Indexing & Joins", level: 82 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Core CS",
    eyebrow: "05",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "OOP", level: 90 },
      { name: "DBMS", level: 84 },
      { name: "System Design", level: 70 },
      { name: "SDLC", level: 78 },
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    eyebrow: "06",
    skills: [
      { name: "Prompt Engineering", level: 85 },
      { name: "ChatGPT", level: 88 },
      { name: "GitHub Copilot", level: 82 },
      { name: "Cursor", level: 80 },
      { name: "Gemini", level: 78 },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning",
    eyebrow: "07",
    skills: [
      { name: "Supervised Learning", level: 75 },
      { name: "Unsupervised Learning", level: 68 },
      { name: "Classification & Regression", level: 74 },
      { name: "Data Cleaning & Analysis", level: 80 },
      { name: "NumPy / Pandas / Scikit-learn", level: 76 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    eyebrow: "08",
    skills: [
      { name: "AWS (Basics)", level: 55 },
      { name: "Google Cloud (Basics)", level: 52 },
      { name: "CI/CD & Jenkins", level: 58 },
      { name: "Linux Basics", level: 65 },
      { name: "Maven", level: 70 },
    ],
  },
  {
    id: "vcs",
    title: "Version Control & Tools",
    eyebrow: "09",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Eclipse / VS Code", level: 88 },
      { name: "Visual Studio", level: 70 },
      { name: "Jupyter Notebook", level: 75 },
    ],
  },
  {
    id: "security",
    title: "Security & Authentication",
    eyebrow: "10",
    skills: [
      { name: "AES Encryption", level: 82 },
      { name: "Authentication & Authorization", level: 80 },
      { name: "Role-based Access Control", level: 78 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "secure-data-transmission",
    title: "Secure Data Transmission System",
    description:
      "A secure file-sharing system built with Java, MySQL and AES encryption, designed to protect data in storage and in transit.",
    tech: ["Java", "JDBC", "MySQL", "AES"],
    features: [
      "AES-based encryption for files at rest and in transit",
      "User authentication for safe, authorized access",
      "JDBC-driven persistence layer with MySQL",
    ],
    github: "https://github.com/akshataingale29",
  },
  {
    id: "job-portal",
    title: "Job Portal Application",
    description:
      "A desktop job portal supporting Admin, Employer and Job Seeker roles, built on Java with an MVC architecture for maintainable data flow.",
    tech: ["Java", "MySQL", "MVC"],
    features: [
      "Role-based dashboards for Admin, Employer and Job Seeker",
      "MVC architecture for clean separation of concerns",
      "Efficient MySQL-backed data management",
    ],
    github: "https://github.com/akshataingale29",
  },
  {
    id: "cybeorch-labs",
    title: "CYBEORCH Labs Website",
    description:
      "Responsive business website pages built with PHP, JavaScript and Bootstrap, with a focus on reusable, SEO-friendly service modules.",
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    features: [
      "Responsive, mobile-first business pages",
      "Reusable service modules for faster iteration",
      "SEO-oriented structure and improved UX",
    ],
    github: "https://github.com/akshataingale29",
  },
  {
    id: "doctor-appointment",
    title: "Doctor Appointment System",
    description:
      "An ML-based doctor recommendation system that manages patient records and appointment scheduling with improved prediction accuracy.",
    tech: ["Python", "Machine Learning", "MySQL"],
    features: [
      "ML-driven doctor recommendation engine",
      "Patient record and appointment management",
      "Improved scheduling accuracy through data-driven predictions",
    ],
    github: "https://github.com/akshataingale29",
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    id: "mithra",
    company: "Mithra Enterprises, Pune",
    role: "Software Developer Intern",
    duration: "May 2026 – Jul 2026",
    points: [
      "Contributed to live company website and service platform development for real-world business use cases.",
      "Built and updated responsive sections for AI Automation, Web Development, Corporate Services, and Blockchain & Web3 pages using PHP, HTML, CSS, JavaScript and Bootstrap/Tailwind CSS.",
      "Used AI-assisted development tools such as ChatGPT, Cursor, GitHub Copilot and Gemini to accelerate UI development, debugging, content refinement and implementation productivity.",
      "Worked on reusable website modules, service page layouts and content-driven sections to improve maintainability, presentation quality and SEO-oriented page structuring.",
    ],
  },
  {
    id: "zidio",
    company: "Zidio Development Pvt. Ltd., Pune",
    role: "Java Full Stack Developer Intern",
    duration: "Aug 2025 – Dec 2025",
    points: [
      "Built 10+ RESTful APIs using Spring Boot, directly supporting the company's scalable backend infrastructure.",
      "Reduced SQL query execution time by optimizing joins and indexing, improving data retrieval speed for high-traffic endpoints.",
      "Implemented role-based authentication and session management, ensuring secure multi-user access control.",
      "Integrated frontend (React.js/HTML) with Spring Boot backend, achieving seamless end-to-end data flow across modules.",
    ],
  },
  {
    id: "mrnd",
    company: "MRND Lab Pvt. Ltd., Pune",
    role: "JavaFX Developer Intern",
    duration: "Jan 2025 – Jun 2025",
    points: [
      "Delivered a secure desktop application with AES encryption for data storage and transmission, meeting security compliance requirements.",
      "Designed modular components using OOP principles, reducing code duplication and improving maintainability.",
      "Performed systematic debugging and performance tuning, increasing application stability for end users.",
    ],
  },
];

export type EducationItem = {
  id: string;
  degree: string;
  institute: string;
  duration: string;
  score: string;
};

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science and Engineering",
    institute: "MIT College of Railway Engineering & Research, Barshi",
    duration: "2022 – 2025",
    score: "CGPA: 9.43 / 10",
  },
  {
    id: "diploma",
    degree: "Diploma in Computer Science Engineering",
    institute: "Shri Siddheshwar Women's Polytechnic, Solapur",
    duration: "2019 – 2022",
    score: "81.71%",
  },
];

export const certifications = [
  "Core Java Programming Certification",
  "Java Full Stack Development Certification",
  "SQL and Database Management Certification",
  "Data Structures and Algorithms Certification",
];

export const additional = [
  "Consistent problem-solver — participated in coding competitions and hackathons; comfortable with algorithmic challenges.",
  "Strong Git-based collaboration workflow: branching, pull requests, code reviews.",
  "Clear communicator with experience presenting technical demos to cross-functional teams.",
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
