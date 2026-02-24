import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Lightbulb, TrendingUp } from "lucide-react";

const traits = [
  { icon: Brain, label: "Logical Thinker", desc: "Analytical mind for solving complex problems" },
  { icon: Lightbulb, label: "Creative Developer", desc: "Bringing innovative ideas to life through code" },
  { icon: TrendingUp, label: "Consistent Learner", desc: "Always evolving, always improving" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-tech text-sm uppercase tracking-[0.3em] text-accent mb-2">Get to know me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">About Me</h2>
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-16"
        >
          I am a B.Tech Information Technology student passionate about web development and problem-solving.
          Inspired by technology and creativity, I aim to become a full stack developer and build impactful
          real-world applications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {traits.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="glass-card p-8 text-center group hover:glow-red transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <t.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t.label}</h3>
              <p className="text-muted-foreground text-sm">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
