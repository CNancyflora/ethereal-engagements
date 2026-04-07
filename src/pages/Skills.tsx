import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 98 },
      { name: "Python", level: 80 },
      { name: "Rust", level: 45 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 80 },
      { name: "AWS", level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-body text-foreground">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
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

      <div className="grid md:grid-cols-3 gap-8">
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
