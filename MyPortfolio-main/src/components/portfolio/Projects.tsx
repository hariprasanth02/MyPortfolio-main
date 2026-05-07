import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => (
  <section id="work" className="py-32 bg-radial">
    <div className="container">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <div className="text-xs font-mono text-primary mb-4">02 / SELECTED WORK</div>
          <h2 className="font-display text-5xl md:text-6xl font-light">
            Things I’ve <span className="italic text-gradient-gold">built</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          A handful of recent projects. Each one taught me something new about shipping software for real people.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="group grid md:grid-cols-12 gap-8 p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all shadow-card"
          >
            <div className="md:col-span-7 relative overflow-hidden rounded-xl aspect-[16/10]">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={640}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="md:col-span-5 flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono text-xs text-primary mb-3">0{i + 1}</div>
                <h3 className="font-display text-3xl md:text-4xl font-medium mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground px-2 py-1 rounded border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-gold text-primary-foreground hover:scale-[1.02] transition-transform">
                    Live demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary transition-colors">
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);