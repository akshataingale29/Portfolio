import {
  Database,
  Network,
  Layers,
  Shield,
  Bot,
  MousePointer2,
  Plane,
  Sparkles,
  Binary,
  Boxes,
  GitMerge,
  Component,
  Lightbulb,
  Brain,
  LineChart,
  Filter,
  PieChart,
  Key,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

type Skill = {
  name: string;
  icon?: string;
  LucideIcon?: LucideIcon;
  color?: string;
};

type SkillCard = {
  id: string;
  title: string;
  skills: Skill[];
};

const skillCards: SkillCard[] = [
  {
    id: "languages-databases",
    title: "Programming Languages & Databases",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", color: "#ED8B00" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#FFD43B" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", color: "#00758F" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", color: "#A8B9CC" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", color: "#777BB4" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#4479A1" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#47A248" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", color: "#CC2927" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Technologies",
    skills: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", color: "#6DB33F" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61DAFB" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#339933" },
      { name: "JDBC", LucideIcon: Database, color: "#ED8B00" },
      { name: ".NET Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", color: "#512BD4" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#E34F26" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572B6" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
      { name: "REST API", LucideIcon: Network, color: "#0096D6" },
      { name: "MVC Architecture", LucideIcon: Layers, color: "#E34F26" },
      { name: "AES Encryption", LucideIcon: Shield, color: "#F89820" },
    ],
  },
  {
    id: "tools-cloud",
    title: "Tools, Cloud & Developer Platforms",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F05032" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", color: "#FFFFFF" },
      { name: "Eclipse IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg", color: "#9D69DA" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", color: "#007ACC" },
      { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg", color: "#5C2D91" },
      { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg", color: "#F37626" },
      { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg", color: "#C71A22" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg", color: "#D24939" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#FF9900" },
      { name: "Google Cloud Platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", color: "#FCC624" },
      { name: "ChatGPT", LucideIcon: Bot, color: "#10A37F" },
      { name: "Cursor AI", LucideIcon: MousePointer2, color: "#FFFFFF" },
      { name: "GitHub Copilot", LucideIcon: Plane, color: "#FFFFFF" },
      { name: "Gemini AI", LucideIcon: Sparkles, color: "#8E75B2" },
    ],
  },
  {
    id: "core-cs",
    title: "Core Computer Science",
    skills: [
      { name: "Data Structures & Algorithms", LucideIcon: Binary, color: "#007ACC" },
      { name: "Object Oriented Programming (OOP)", LucideIcon: Boxes, color: "#FFD43B" },
      { name: "DBMS", LucideIcon: Database, color: "#4479A1" },
      { name: "SDLC", LucideIcon: GitMerge, color: "#F05032" },
      { name: "System Design", LucideIcon: Component, color: "#4285F4" },
      { name: "Problem Solving", LucideIcon: Lightbulb, color: "#F7DF1E" },
      { name: "Authentication & Authorization", LucideIcon: Key, color: "#FF9900" },
    ],
  },
  {
    id: "ai-ml-ds",
    title: "AI, Machine Learning & Data Science",
    skills: [
      { name: "Machine Learning", LucideIcon: Brain, color: "#FF6F00" },
      { name: "Data Analysis", LucideIcon: LineChart, color: "#4285F4" },
      { name: "Data Cleaning", LucideIcon: Filter, color: "#06B6D4" },
      { name: "Data Visualization", LucideIcon: PieChart, color: "#F37626" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", color: "#4DABCF" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", color: "#E70488" },
      { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", color: "#FFD43B" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", color: "#F7931E" },
      { name: "Prompt Engineering", LucideIcon: Terminal, color: "#10A37F" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-pad relative bg-void overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grain opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,123,255,0.08),_transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-5 relative z-10">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My Technology Stack"
          description="A comprehensive toolkit of programming languages, frameworks, and tools used to build modern applications."
        />

        <div className="skills-grid grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {skillCards.map((card, ci) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: ci * 0.1 }}
              className={`flex ${ci < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${ci === 4 ? "sm:col-span-2" : ""}`}
            >
              <TiltCard className="skills-card glass group relative flex h-full w-full flex-col rounded-2xl p-6 md:p-8 border border-white/5 transition-all duration-500 hover:border-cyan/40 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(59,123,255,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-violet/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <h3 className="mb-8 text-xl font-semibold text-ink relative z-10 text-center flex items-center justify-center gap-2">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50"></span>
                  {card.title}
                  <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50"></span>
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 relative z-10">
                  {card.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-start gap-4 group/item"
                    >
                      <div 
                        className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover/item:scale-125 group-hover/item:-translate-y-2 group-hover/item:bg-white/10"
                        style={{ boxShadow: `0 0 0 rgba(0,0,0,0)`, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 10px 25px ${skill.color}40, 0 0 15px ${skill.color}60 inset`;
                          e.currentTarget.style.borderColor = `${skill.color}50`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                          e.currentTarget.style.borderColor = `rgba(255, 255, 255, 0.1)`;
                        }}
                      >
                        {skill.icon ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-[42px] h-[42px] object-contain drop-shadow-md filter transition-all duration-300"
                            loading="lazy"
                          />
                        ) : skill.LucideIcon ? (
                          <skill.LucideIcon 
                            className="w-[42px] h-[42px] transition-colors duration-300" 
                            style={{ color: skill.color || '#8B949E' }} 
                            strokeWidth={1.5}
                          />
                        ) : null}
                      </div>
                      <span 
                        className="text-center text-[13px] md:text-[14px] leading-tight transition-colors duration-300 font-semibold"
                        style={{ color: skill.color || '#E2E8F0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
