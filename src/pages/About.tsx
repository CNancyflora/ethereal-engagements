import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const timeline = [
  { year: "2025", title: "AI Developer Intern – LinesOfTech", description: "Developed a Smart Healthcare Assistant using ML for predictive analysis. Built and trained models, performed EDA, and created advanced data visualisations." },
  { year: "2025", title: "Full Stack Developer Intern – Ones Infotech", description: "Developed responsive websites using full-stack technologies. Designed intuitive UIs and implemented backend functionalities with database integration." },
  { year: "2024", title: "Oracle Certifications", description: "Earned Oracle Certified Professional: Java SE 11 Developer and Oracle Database SQL Certified Specialist." },
  { year: "2023", title: "B.Tech – AI & Data Science", description: "Started B.Tech in AI & Data Science at SIMATS University (Saveetha Institute). Current CGPA: 8.5/10. Expected graduation: 2027." },
];

const certifications = [
  "Oracle Certified Professional: Java SE 11 Developer",
  "Oracle Database SQL Certified Specialist",
  "NPTEL – Introduction to Internet of Things",
];

const About = () => (
  <PageTransition className="min-h-screen pt-28 section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        About Me
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-8"
      >
        <span className="gradient-text">Who I Am</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed"
      >
        I'm C Nancy Flora — a results-driven B.Tech student specializing in Artificial Intelligence
        and Data Science, with strong skills in programming, data structures, and machine learning.
        Oracle-certified in Java and SQL, with hands-on experience in AI projects and full-stack development.
        A proactive learner seeking to contribute to innovative and growth-oriented organizations.
      </motion.p>

      {/* Timeline */}
      <div className="relative mb-16">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
            className={`relative flex items-start mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="hidden md:block md:w-1/2" />
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1.5 mt-2 z-10" />
            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
              <div className="glass-card p-6 hover:border-accent/30 transition-colors">
                <span className="text-accent font-display text-sm font-semibold">{item.year}</span>
                <h3 className="text-xl font-display font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <h2 className="text-2xl font-display font-bold mb-6 gradient-text">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="glass-card p-5 hover:border-accent/30 transition-colors"
            >
              <p className="text-sm text-foreground font-medium">{cert}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </PageTransition>
);

export default About;
