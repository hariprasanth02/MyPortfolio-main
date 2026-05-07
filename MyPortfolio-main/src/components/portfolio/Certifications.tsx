import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export const Certifications = () => (
  <section id="certs" className="py-32">
    <div className="container">
      <div className="mb-16">
        <div className="text-xs font-mono text-primary mb-4">03 / CREDENTIALS</div>
        <h2 className="font-display text-5xl md:text-6xl font-light">
          Certifications & <span className="italic text-gradient-gold">honors</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all overflow-hidden"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl font-medium mb-1">{c.title}</h3>
                <div className="text-sm text-muted-foreground">
                  {c.issuer} · <span className="font-mono">{c.year}</span>
                </div>
              </div>
            </div>

            {/* Hover preview */}
            <div className="pointer-events-none absolute -bottom-4 right-4 w-56 aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-card opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
              <img src={c.image} alt={`${c.title} preview`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);