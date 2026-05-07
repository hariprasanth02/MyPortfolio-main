import { motion } from "framer-motion";
import { resume } from "@/data/portfolio";
import { Download, Eye, FileText } from "lucide-react";
import { useState } from "react";

export const Resume = () => {
  const [hover, setHover] = useState(false);
  return (
    <section id="resume" className="py-32 bg-radial">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs font-mono text-primary mb-4">04 / CV</div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
            My <span className="italic text-gradient-gold">resume</span>, in one page.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A concise summary of my experience, education, and the technologies I’ve shipped.
            Hover the card to preview, or download the full PDF.
          </p>
          <div className="flex gap-3">
            <a
              href={resume.file}
              download
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-medium px-6 py-3 rounded-full shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            <a
              href={resume.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Eye className="w-4 h-4" />
              Open in new tab
            </a>
          </div>
        </div>

        <motion.a
          href={resume.file}
          download
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto block w-full max-w-sm aspect-[8.5/11] rounded-2xl overflow-hidden border border-border shadow-card group"
        >
          <img
            src={resume.preview}
            alt="Resume preview"
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 ${hover ? "scale-[1.03] blur-[1px] brightness-50" : ""}`}
          />
          <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`}>
            <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow">
              <Download className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-sm font-medium">Click to download</div>
          </div>
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-mono">
            <FileText className="w-3 h-3" /> resume.pdf
          </div>
        </motion.a>
      </div>
    </section>
  );
};