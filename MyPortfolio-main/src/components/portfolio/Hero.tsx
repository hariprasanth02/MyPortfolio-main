import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { profile } from "@/data/portfolio";
import { ArrowDown, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden grain">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="container relative z-10 pt-32 pb-20 grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-sm font-mono text-primary mb-8"
          >
            <span className="h-px w-10 bg-primary" />
            PORTFOLIO · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] font-light"
          >
            <span className="block text-gradient-bone italic font-extralight">Hello, I’m</span>
            <span className="block font-semibold">{profile.name}.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-6 py-3 rounded-full shadow-glow hover:scale-[1.02] transition-transform"
            >
              See my work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary transition-colors"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-2 text-sm text-muted-foreground font-mono"
          >
            <MapPin className="w-3.5 h-3.5" />
            {profile.location} · Available for new work
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative order-1 md:order-2 mx-auto md:mx-0"
        >
          <div className="absolute -inset-4 bg-gradient-gold blur-3xl opacity-20 rounded-full" />
          <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden border border-border shadow-card">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
              width={800}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-xs font-mono text-primary mb-1">CURRENTLY</div>
              <div className="text-sm">{profile.role}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};