import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

type Skill = { name: string; iconUrl: string };

const skillCategories: Array<{ title: string; skills: Skill[] }> = [
  {
    title: "Programming",
    skills: [
      { name: "Python", iconUrl: "https://cdn.simpleicons.org/python" },
      { name: "Java", iconUrl: "https://cdn.simpleicons.org/java" },
      { name: "C++", iconUrl: "https://cdn.simpleicons.org/cplusplus" },
    ],
  },
  {
    title: "AI & Data Science",
    skills: [
      { name: "Machine Learning", iconUrl: "https://cdn.simpleicons.org/scikitlearn" },
      { name: "Deep Learning", iconUrl: "https://cdn.simpleicons.org/pytorch" },
      { name: "Data Analysis", iconUrl: "https://cdn.simpleicons.org/pandas" },
      { name: "Data Visualisation", iconUrl: "https://cdn.simpleicons.org/plotly" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "TensorFlow", iconUrl: "https://cdn.simpleicons.org/tensorflow" },
      { name: "Scikit-learn", iconUrl: "https://cdn.simpleicons.org/scikitlearn" },
      { name: "NumPy", iconUrl: "https://cdn.simpleicons.org/numpy" },
      { name: "Pandas", iconUrl: "https://cdn.simpleicons.org/pandas" },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Git", iconUrl: "https://cdn.simpleicons.org/git" },
      { name: "VS Code", iconUrl: "https://cdn.simpleicons.org/visualstudiocode" },
      { name: "DSA", iconUrl: "https://cdn.simpleicons.org/leetcode" },
      { name: "DBMS / SQL", iconUrl: "https://cdn.simpleicons.org/mysql" },
    ],
  },
];

const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-center gap-3 rounded-xl border border-border/50 bg-secondary/20 px-4 py-3 hover:border-accent/30 hover:bg-secondary/30 transition-colors"
  >
    <div className="h-10 w-10 rounded-lg bg-background/60 border border-border/50 flex items-center justify-center overflow-hidden">
      <img src={skill.iconUrl} alt={`${skill.name} logo`} className="h-6 w-6" loading="lazy" />
    </div>
    <div className="text-sm font-body text-foreground">{skill.name}</div>
  </motion.div>
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
            <div className="grid sm:grid-cols-2 gap-3">
              {cat.skills.map((skill, si) => (
                <SkillCard key={skill.name} skill={skill} delay={0.6 + ci * 0.15 + si * 0.08} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageTransition>
);

export default Skills;
