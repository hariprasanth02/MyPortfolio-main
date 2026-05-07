import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#certs", label: "Certs" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative inline-block">
            <span className="absolute -inset-0.5 bg-gradient-gold rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity" />
            <img
              src={profile.image}
              alt={profile.name}
              className="relative w-9 h-9 rounded-full object-cover border border-border"
            />
          </span>
          <span className="font-display text-base font-semibold tracking-tight hidden sm:inline">
            {profile.name}
            <span className="text-muted-foreground">.</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
        >
          Let’s talk →
        </a>
      </nav>
    </header>
  );
};