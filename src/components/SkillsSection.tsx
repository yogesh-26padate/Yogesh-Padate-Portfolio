import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Palette, FileCode, Atom, Coffee, GitBranch } from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2, accent: "primary", desc: "Markup & Structure" },
  { name: "CSS", icon: Palette, accent: "accent", desc: "Styling & Layouts" },
  { name: "JavaScript", icon: FileCode, accent: "accent", desc: "Logic & Interactivity" },
  { name: "React", icon: Atom, accent: "primary", desc: "Component Architecture" },
  { name: "Java", icon: Coffee, accent: "primary", desc: "OOP & Backend" },
  { name: "Git & GitHub", icon: GitBranch, accent: "accent", desc: "Version Control" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-tech text-sm uppercase tracking-[0.3em] text-accent mb-2">My arsenal</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Skills</h2>
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7 max-w-4xl mx-auto">
          {skills.map((skill, i) => {
            const isPrimary = skill.accent === "primary";
            const isHovered = hoveredIdx === i;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group cursor-default"
              >
                {/* Glow border effect */}
                <div
                  className={`absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px] ${
                    isPrimary
                      ? "bg-gradient-to-br from-primary/60 via-primary/20 to-transparent"
                      : "bg-gradient-to-br from-accent/60 via-accent/20 to-transparent"
                  }`}
                />

                <div className="relative glass-card rounded-xl p-6 sm:p-8 text-center transition-all duration-500 overflow-hidden">
                  {/* Subtle corner accent */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      isPrimary
                        ? "bg-gradient-to-bl from-primary/20 to-transparent"
                        : "bg-gradient-to-bl from-accent/20 to-transparent"
                    }`}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl mb-4 border ${
                      isPrimary
                        ? "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary/20 group-hover:border-primary/40"
                        : "bg-accent/10 border-accent/20 text-accent group-hover:bg-accent/20 group-hover:border-accent/40"
                    } transition-all duration-300`}
                  >
                    <skill.icon size={28} strokeWidth={1.5} />
                  </motion.div>

                  {/* Name */}
                  <h3 className="font-display text-sm sm:text-base font-semibold text-foreground mb-1">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="font-tech text-xs text-muted-foreground tracking-wide">
                    {skill.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500 ${
                      isPrimary ? "bg-primary/60" : "bg-accent/60"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
