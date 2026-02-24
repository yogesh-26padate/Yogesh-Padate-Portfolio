import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FolderOpen, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const phrases = [
"I build powerful web experiences",
"Future Full Stack Developer",
"Code. Create. Conquer."];


const HeroSection = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }} />

      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) =>
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: Math.random() * 4 + 2 + "px",
          height: Math.random() * 4 + 2 + "px",
          left: Math.random() * 100 + "%",
          bottom: "-10px",
          background: i % 3 === 0 ?
          "hsl(45 90% 55%)" :
          "hsl(0 85% 50%)",
          animation: `float ${6 + Math.random() * 8}s linear infinite`,
          animationDelay: `${Math.random() * 6}s`,
          opacity: 0
        }} />

      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-tech text-sm uppercase tracking-[0.3em] text-accent mb-4">

          Welcome to my universe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-foreground mb-4 text-glow-red">

          Yogesh Padate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-tech text-lg text-muted-foreground mb-2">

          B.Tech IT Student | Aspiring Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-8 mb-10">

          <span className="font-body text-xl text-primary">
            {text}
          </span>
          <span className="typing-cursor ml-0.5">&nbsp;</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-tech uppercase tracking-wider text-sm hover:glow-red transition-all duration-300">

            <FolderOpen size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3 rounded-lg border border-accent text-accent font-tech uppercase tracking-wider text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300">

            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">

          
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;