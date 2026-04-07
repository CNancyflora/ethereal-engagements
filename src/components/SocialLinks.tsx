import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/CNancyflora", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nancy-flora-69a69330a", label: "LinkedIn" },
  { icon: Globe, href: "https://nancy-portfolio.web.app", label: "Portfolio" },
];

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex gap-4 ${className}`}>
    {socials.map((s, i) => (
      <motion.a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 + i * 0.1 }}
        whileHover={{ scale: 1.2, y: -2 }}
        className="p-3 glass-card hover:border-accent/40 transition-colors"
        aria-label={s.label}
      >
        <s.icon size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
