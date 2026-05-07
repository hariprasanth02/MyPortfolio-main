import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Nav />
    <Hero />
    <About />
    <Projects />
    <Certifications />
    <Resume />
    <Contact />
  </main>
);

export default Index;
