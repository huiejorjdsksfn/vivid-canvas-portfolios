import { createFileRoute } from "@tanstack/react-router";
import ivyPortrait from "@/assets/ivy-portrait.jpg";
import { Monitor, Database, Network, Wrench, Mail, Phone, MapPin, ArrowRight, Camera, Server, Printer } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ivy Wanjiku — ICT Specialist & Systems Support" },
      { name: "description", content: "Portfolio of Ivy Wanjiku, ICT graduate specializing in systems support, network setup, and IT infrastructure based in Embu, Kenya." },
    ],
  }),
});

const services = [
  { icon: Monitor, title: "Systems Support", desc: "End-user IT support and computer system maintenance" },
  { icon: Network, title: "Network & CCTV", desc: "Installation and configuration of CCTV and network systems" },
  { icon: Database, title: "Database Management", desc: "Secure record management and system integration" },
  { icon: Wrench, title: "IT Infrastructure", desc: "Routine maintenance of IT equipment and infrastructure" },
];

const projects = [
  { icon: Camera, title: "CCTV Deployment", tag: "Security Systems", desc: "Installed and configured surveillance systems across hospital departments to enhance security monitoring." },
  { icon: Server, title: "Medboss Integration", tag: "System Integration", desc: "Linked hospital software with the central Medboss server, enabling unified data flow across departments." },
  { icon: Printer, title: "Peripherals Support", tag: "IT Support", desc: "Troubleshot printer and scanner connectivity issues across multiple departments and end-users." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-lg tracking-tight">
            Ivy<span className="text-primary">.</span>Wanjiku
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
            <li><a href="#projects" className="hover:text-foreground transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            Hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground font-display mb-4">Hello.</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-2">
              I'm Ivy,
            </h1>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-8">
              <span className="text-gradient">ICT Specialist</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
              A Diploma graduate in Information & Communication Technology from Jeremiah Nyagah National Polytechnic — building reliable systems, networks, and digital infrastructure.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                Get in touch <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition">
                My Work
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl glow-ring" />
            <img
              src={ivyPortrait}
              alt="Ivy Wanjiku, ICT Specialist"
              width={1024}
              height={1024}
              className="relative rounded-3xl w-full max-w-md object-cover aspect-square"
            />
          </div>
        </div>
        {/* Skills strip */}
        <div className="border-y border-border/50 bg-card/40">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-around gap-6 text-sm font-display tracking-widest text-muted-foreground uppercase">
            <span>HTML</span><span>Networking</span><span>CCTV</span><span>Database</span><span>MS Office</span><span>System Support</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="md:sticky md:top-24">
            <p className="text-primary font-medium mb-3">What I do</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Bringing technical skill and a proactive mindset to every project — from end-user support to system integration.
            </p>
          </div>
          <ul className="space-y-2">
            {services.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="group flex items-start gap-5 p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-primary/40 transition">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-card/40 border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-3">About me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">A hands-on technologist</h2>
            <p className="text-muted-foreground leading-relaxed">
              I hold a Diploma in Information & Communication Technology from Jeremiah Nyagah National Polytechnic. With a strong foundation in database management, network basics, system support, and secure record management, I'm passionate about applying ICT solutions to enhance data integrity and streamline operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "10+", label: "CCTV systems deployed" },
              { num: "3", label: "Months industrial attachment" },
              { num: "100%", label: "Commitment to integrity" },
            ].map((s) => (
              <div key={s.label} className="text-center p-8 rounded-2xl border border-border bg-background/60">
                <div className="text-5xl font-display font-bold text-primary mb-2">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Experience */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-primary font-medium mb-3">Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold">Work at Embu Level 5 Hospital</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Industrial attachment in the ICT Department — January to March 2026.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, title, tag, desc }) => (
            <article key={title} className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition" />
              <Icon className="h-8 w-8 text-primary mb-6" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{tag}</span>
              <h3 className="font-display font-semibold text-xl mt-2 mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative rounded-3xl border border-border bg-gradient-to-br from-card to-background p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's build something <span className="text-gradient">together</span>.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Open to internship and entry-level opportunities in ICT, systems support, and IT infrastructure.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background/60">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:wanjuriivy@gmail.com" className="text-sm hover:text-primary transition">wanjuriivy@gmail.com</a>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background/60">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+254790754191" className="text-sm hover:text-primary transition">+254 790 754 191</a>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background/60">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">P.O. Box 52, Embu, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 Ivy Wanjiku. All rights reserved.</span>
          <span>Crafted with care in Embu, Kenya.</span>
        </div>
      </footer>
    </div>
  );
}
