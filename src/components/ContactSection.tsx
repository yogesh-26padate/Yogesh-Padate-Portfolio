import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, Instagram, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto as fallback
    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`mailto:yogeshpadate547@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-tech text-sm uppercase tracking-[0.3em] text-accent mb-2">Let's connect</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Contact Me</h2>
          <div className="gold-divider max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-tech text-muted-foreground mb-1 uppercase tracking-wider">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-muted-foreground mb-1 uppercase tracking-wider">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-tech text-muted-foreground mb-1 uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-tech uppercase tracking-wider text-sm hover:glow-red transition-all duration-300"
            >
              <Send size={18} />
              {sent ? "Message Opened!" : "Send Message"}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="glass-card p-6 flex items-center gap-4 hover:glow-gold transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-tech text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <a href="mailto:yogeshpadate547@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  yogeshpadate547@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4 hover:glow-gold transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-tech text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
                <a href="tel:+919112306578" className="text-foreground hover:text-primary transition-colors">
                  +91 9112306578
                </a>
              </div>
            </div>

            <a
              href="mailto:yogeshpadate547@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-tech uppercase tracking-wider text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Mail size={18} />
              Mail Me
            </a>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/yogeshp_26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-red transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/yogesh-padate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-red transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-glass-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-red transition-all duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
