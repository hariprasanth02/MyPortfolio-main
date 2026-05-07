import { motion } from "framer-motion";
import { profile, skills, socials } from "@/data/portfolio";
import {
  Linkedin, Github, Code2, Terminal, Trophy, Twitter, Dribbble, Feather,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin, github: Github, code2: Code2, terminal: Terminal,
  trophy: Trophy, twitter: Twitter, dribbble: Dribbble, feather: Feather,
};

export const About = () => (
  <section id="about" className="py-32 relative">
    <div className="container grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <div className="sticky top-32">
          <div className="text-xs font-mono text-primary mb-4">01 / ABOUT</div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            A short <span className="italic text-gradient-gold">story</span>
          </h2>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-7 space-y-10"
      >
        <p className="text-xl md:text-2xl font-display font-light leading-relaxed text-foreground/90">
          {profile.summary}
        </p>

        <div>
          <div className="text-xs font-mono text-muted-foreground mb-4">TOOLKIT</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full text-sm border border-border bg-card hover:border-primary hover:text-primary transition-colors"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-mono text-muted-foreground mb-4">FIND ME ON</div>
          <div className="grid sm:grid-cols-2 gap-3">
            {socials.map((s) => {
              const Icon = iconMap[s.icon] ?? Github;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary transition-all hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-gradient-gold transition-colors">
                    <Icon className="w-4 h-4 group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{s.label}</div>
                    <div className="text-xs text-muted-foreground truncate">{s.handle}</div>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">↗</span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);