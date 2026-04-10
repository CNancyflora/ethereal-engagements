import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import HeroScene from "@/components/HeroScene";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <PageTransition className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <HeroScene />

    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />

    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
      >
        <span className="gradient-text">C Nancy</span>
        <br />
        Flora
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        AI &amp; Data Science student crafting intelligent solutions through
        machine learning, full-stack development, and data-driven innovation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-10"
      >
        <Button asChild variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/80 font-body">
          <Link to="/projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-accent/30 text-foreground hover:bg-accent/10 font-body">
          <a
            href="https://drive.google.com/file/d/10TA8iBnzq5n5H_1pd465VkhtN_PH0yr7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} className="mr-2" /> Download Resume
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-accent/30 text-foreground hover:bg-accent/10 font-body">
          <Link to="/contact">
            <Mail size={18} className="mr-2" /> Contact Me
          </Link>
        </Button>
      </motion.div>

      <SocialLinks className="justify-center" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={24} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </div>
  </PageTransition>
);

export default Hero;
