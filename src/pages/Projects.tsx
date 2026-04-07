import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const projects = [
  {
    title: "Smart Healthcare Assistant",
    description: "ML-powered predictive analysis tool with EDA, heatmaps, scatter plots, and model optimization for healthcare datasets.",
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    color: "#c8a96e",
  },
  {
    title: "Smart UV Protection Wearable",
    description: "Wearable system using SVM (92% accuracy) and CNN (88% accuracy) for UV exposure prediction with IoT sensors.",
    tech: ["Python", "SVM", "CNN", "IoT Sensors"],
    color: "#a08050",
  },
  {
    title: "Full Stack Website",
    description: "Responsive and dynamic website with intuitive UI, server-side logic, and database integration built during internship.",
    tech: ["React", "Node.js", "Database", "REST API"],
    color: "#e8dcc8",
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
              <a href="https://github.com/CNancyflora" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
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
