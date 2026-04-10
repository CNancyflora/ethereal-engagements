import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C++", level: 75 },
    ],
  },
  {
    title: "AI & Data Science",
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 75 },
      { name: "Data Analysis", level: 85 },
      { name: "Data Visualisation", level: 82 },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "TensorFlow", level: 78 },
      { name: "Scikit-learn", level: 85 },
      { name: "NumPy / Pandas", level: 90 },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Git", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "DSA", level: 82 },
      { name: "DBMS / SQL", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-5">
    <div className="mb-2 text-sm font-body text-foreground">{name}</div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ delay, duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: "var(--gradient-beige)" }}
      />
    </div>
  </div>
);

const Skills = () => (
  <PageTransition className="min-h-screen pt-28 section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        Expertise
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-16"
      >
        <span className="gradient-text">Skills</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + ci * 0.15 }}
            className="glass-card p-6"
          >
            <h2 className="font-display text-xl font-bold mb-6 text-accent">{cat.title}</h2>
            {cat.skills.map((skill, si) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={0.6 + ci * 0.15 + si * 0.1}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </PageTransition>
);

export default Skills;
