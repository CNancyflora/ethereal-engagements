import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "#c8a96e",
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard powered by machine learning, featuring real-time data visualization.",
    tech: ["Next.js", "Python", "TensorFlow", "D3.js"],
    color: "#a08050",
  },
  {
    title: "Social Media App",
    description: "A modern social platform with real-time messaging, stories, and content sharing.",
    tech: ["React Native", "Firebase", "GraphQL"],
    color: "#e8dcc8",
  },
  {
    title: "3D Portfolio",
    description: "An immersive portfolio experience built with Three.js and WebGL shaders.",
    tech: ["Three.js", "GLSL", "React", "Framer Motion"],
    color: "#8a7040",
  },
  {
    title: "Task Management",
    description: "Collaborative project management tool with drag-and-drop, timelines, and team features.",
    tech: ["Vue.js", "Supabase", "Tailwind"],
    color: "#d4c4a0",
  },
  {
    title: "Music Streaming",
    description: "A sleek music player with playlist management, audio visualization, and social features.",
    tech: ["React", "Web Audio API", "Node.js"],
    color: "#b09060",
  },
];

const Projects = () => (
  <PageTransition className="min-h-screen pt-28 section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        My Work
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-16"
      >
        <span className="gradient-text">Projects</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card p-6 group cursor-pointer hover:border-accent/30 transition-all duration-300"
          >
            {/* Color accent bar */}
            <div
              className="w-full h-1 rounded-full mb-5 opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
            />
            <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageTransition>
);

export default Projects;
