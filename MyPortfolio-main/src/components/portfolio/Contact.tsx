import { profile, socials } from "@/data/portfolio";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="py-32 border-t border-border">
    <div className="container">
      <div className="text-xs font-mono text-primary mb-4">05 / CONTACT</div>
      <h2 className="font-display text-6xl md:text-8xl font-light leading-[0.95] mb-12">
        Let’s build <br />
        <span className="italic text-gradient-gold">something good.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <a href={`mailto:${profile.email}`} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors">
          <Mail className="w-5 h-5 text-primary mb-4" />
          <div className="text-xs font-mono text-muted-foreground mb-1">EMAIL</div>
          <div className="font-medium group-hover:text-primary transition-colors">{profile.email}</div>
        </a>
        <a href={`tel:${profile.phone}`} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors">
          <Phone className="w-5 h-5 text-primary mb-4" />
          <div className="text-xs font-mono text-muted-foreground mb-1">PHONE</div>
          <div className="font-medium group-hover:text-primary transition-colors">{profile.phone}</div>
        </a>
        <div className="p-6 rounded-2xl bg-card border border-border">
          <MapPin className="w-5 h-5 text-primary mb-4" />
          <div className="text-xs font-mono text-muted-foreground mb-1">LOCATION</div>
          <div className="font-medium">{profile.location}</div>
        </div>
      </div>

      <footer className="pt-10 border-t border-border flex flex-wrap items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} {profile.name}. Crafted with care.
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors">
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  </section>
);