import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Construction, Code2 } from "lucide-react";

const projects = [
  {
    title: "Project Coming Soon",
    desc: "An exciting project is in the works. Stay tuned!",
    stack: ["React", "TypeScript"],
    icon: Rocket,
  },
  {
    title: "Currently Building",
    desc: "Actively developing something awesome right now.",
    stack: ["JavaScript", "CSS"],
    icon: Construction,
  },
  {
    title: "Portfolio Website",
    desc: "This very website — my personal showcase.",
    stack: ["React", "Framer Motion", "Tailwind"],
    icon: Code2,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-tech text-sm uppercase tracking-[0.3em] text-accent mb-2">My work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Projects</h2>
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass-card p-8 group hover:glow-red transition-all duration-500 cursor-default"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-tech px-3 py-1 rounded-full border border-accent/30 text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
