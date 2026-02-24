import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const hobbies = [
  { emoji: "♟", title: "Chess", desc: "Strategic thinking & decision making", color: "primary" },
  { emoji: "🧊", title: "Rubik's Cube", desc: "Logical problem solving & speed", color: "accent" },
  { emoji: "💻", title: "Coding", desc: "Building, experimenting, improving", color: "primary" },
];

const HobbiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hobbies" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-tech text-sm uppercase tracking-[0.3em] text-accent mb-2">Beyond the code</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Hobbies & Mindset</h2>
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className={`glass-card p-8 text-center group cursor-default transition-all duration-500 ${
                h.color === "accent" ? "hover:glow-gold" : "hover:glow-red"
              }`}
            >
              <span className="text-5xl mb-4 block">{h.emoji}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
