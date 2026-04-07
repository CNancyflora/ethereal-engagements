import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const timeline = [
  { year: "2024", title: "Senior Developer", description: "Leading frontend architecture at a tech startup, building scalable applications." },
  { year: "2023", title: "Full Stack Developer", description: "Developed end-to-end solutions using React, Node.js, and cloud services." },
  { year: "2022", title: "Frontend Developer", description: "Created responsive, accessible web apps with modern frameworks." },
  { year: "2021", title: "CS Degree", description: "Graduated with honors in Computer Science, focusing on software engineering." },
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
        I'm a passionate developer with a love for creating beautiful, 
        performant web experiences. With expertise spanning frontend development, 
        3D graphics, and UI/UX design, I bring ideas to life through code.
      </motion.p>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
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
    </div>
  </PageTransition>
);

export default About;
