import { createFileRoute } from "@tanstack/react-router";
import {
  Monitor,
  Database,
  Network,
  Wrench,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Server,
  Printer,
  FileText,
  Users,
  ClipboardList,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ivy Wanjiku — ICT Specialist & Administrative Support" },
      {
        name: "description",
        content:
          "Portfolio of Ivy Wanjiku — ICT specialist with hands-on experience in systems support, networks, CCTV and secretarial/administrative work based in Embu, Kenya.",
      },
    ],
  }),
});

const services = [
  {
    icon: Monitor,
    title: "Systems Support",
    desc: "End-user IT support, troubleshooting and routine maintenance of computer systems.",
  },
  {
    icon: Network,
    title: "Networks & CCTV",
    desc: "Installation and configuration of network equipment and surveillance systems.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Secure record management, data entry and integration across departments.",
  },
  {
    icon: ClipboardList,
    title: "Administrative Support",
    desc: "Secretarial duties, document handling, scheduling and front-office coordination.",
  },
];

const projects = [
  {
    icon: Camera,
    no: "01",
    tag: "Security Systems",
    title: "CCTV Deployment",
    desc: "Installed and configured surveillance systems across hospital departments to strengthen security monitoring and incident review.",
  },
  {
    icon: Server,
    no: "02",
    tag: "System Integration",
    title: "Medboss Integration",
    desc: "Linked departmental software with the central Medboss server, enabling unified data flow and reliable record exchange.",
  },
  {
    icon: Printer,
    no: "03",
    tag: "IT Support",
    title: "Peripherals & Connectivity",
    desc: "Resolved printer, scanner and connectivity issues across multiple departments, keeping daily operations uninterrupted.",
  },
  {
    icon: FileText,
    no: "04",
    tag: "Administrative",
    title: "Records & Front-Office",
    desc: "Supported secretarial workflows — document filing, correspondence, scheduling and reception — alongside ICT duties.",
  },
];

const skills = [
  "Systems Support",
  "Networking",
  "CCTV Installation",
  "Database Management",
  "Hardware Troubleshooting",
  "MS Office Suite",
  "Data Entry & Records",
  "Secretarial Duties",
  "Front-Office Reception",
  "Document Management",
  "Scheduling & Coordination",
  "HTML Basics",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <a href="#" className="font-display font-semibold tracking-tight text-base">
            Ivy Wanjiku<span className="text-primary">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
            <li><a href="#work" className="hover:text-foreground transition">Work</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm hover:border-primary hover:text-primary transition"
          >
            Available for work
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
          </a>
        </nav>
      </header>

      {/* Hero — editorial, asymmetric */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/3 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-40">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
            <span className="h-px w-10 bg-primary" />
            <span>ICT Specialist · Administrative Support · Embu, Kenya</span>
          </div>
          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight max-w-5xl">
            Building reliable <span className="text-gradient italic font-normal">digital systems</span> and running smooth <span className="italic text-muted-foreground">day-to-day operations</span>.
          </h1>
          <div className="mt-14 grid md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm Ivy — an ICT specialist with hands-on experience in systems support, networking, CCTV and database management. I've also served in secretarial and assistant roles, so I'm equally comfortable behind a workstation or at the front desk keeping operations on track.
            </p>
            <div className="md:col-span-6 flex md:justify-end gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm hover:bg-secondary transition"
              >
                Selected work
              </a>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="border-y border-border/40 bg-card/30 overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-primary">●</span>
            <span>Systems Support</span>
            <span className="text-primary">●</span>
            <span>Networking</span>
            <span className="text-primary">●</span>
            <span>CCTV</span>
            <span className="text-primary">●</span>
            <span>Database</span>
            <span className="text-primary">●</span>
            <span>Secretarial</span>
            <span className="text-primary">●</span>
            <span>Front-Office</span>
            <span className="text-primary">●</span>
            <span>MS Office</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">[ 01 ] About</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">
              A versatile professional bridging IT and administration.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-foreground text-lg">
              I combine technical skill with strong organisational and people skills — comfortable troubleshooting a network one hour and managing front-office tasks the next.
            </p>
            <p>
              My professional experience covers ICT operations — systems support, network and CCTV deployment, hardware troubleshooting and database management — alongside secretarial and assistant duties: handling correspondence, filing, scheduling, reception and day-to-day office coordination.
            </p>
            <p>
              I bring integrity, attention to detail and a proactive mindset to every role, whether that means keeping systems running reliably or making sure the office runs smoothly.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/40">
              {[
                { num: "10+", label: "CCTV systems deployed" },
                { num: "Dual", label: "ICT + Admin background" },
                { num: "100%", label: "Reliability & integrity" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-display font-medium text-foreground">{s.num}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-border/40 bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">[ 02 ] Services</p>
              <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight max-w-2xl">
                What I do, end to end.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              A blend of technical and administrative capability — engineered to keep both systems and operations running.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-px bg-border/40 rounded-3xl overflow-hidden border border-border/40">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <li
                key={title}
                className="group relative bg-background p-10 hover:bg-card transition"
              >
                <div className="flex items-start justify-between mb-12">
                  <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">[ 03 ] Capabilities</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">
              Professional skills.
            </h2>
            <p className="text-muted-foreground text-sm mt-5 max-w-xs leading-relaxed">
              A practical toolkit covering both ICT and administrative work.
            </p>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/40 px-4 py-2 text-sm hover:border-primary hover:text-primary transition"
              >
                <Sparkles className="h-3 w-3 text-primary/70" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Experience */}
      <section id="work" className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">[ 04 ] Selected Work</p>
              <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight max-w-2xl">
                Recent projects & responsibilities.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              ICT Department, Embu Level 5 Hospital — combined technical and administrative duties.
            </p>
          </div>
          <div className="divide-y divide-border/40 border-y border-border/40">
            {projects.map(({ icon: Icon, no, tag, title, desc }) => (
              <article
                key={title}
                className="group grid md:grid-cols-12 gap-6 py-8 md:py-10 items-center hover:bg-card/30 transition px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
              >
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground">{no}</div>
                <div className="md:col-span-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-medium">{title}</h3>
                </div>
                <div className="md:col-span-2 text-xs uppercase tracking-widest text-muted-foreground">{tag}</div>
                <p className="md:col-span-5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <ArrowUpRight className="hidden md:block md:col-span-1 h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="border-t border-border/40 bg-card/20">
        <div className="mx-auto max-w-6xl px-6 py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">[ 05 ] Roles</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">
              Where I add value.
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Wrench,
                title: "ICT Support Officer",
                desc: "Systems support, network and CCTV maintenance, database management and end-user troubleshooting.",
              },
              {
                icon: Users,
                title: "Secretary / Assistant",
                desc: "Reception, scheduling, correspondence, filing and office coordination — keeping operations efficient.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl border border-border/60 bg-background">
                <Icon className="h-5 w-5 text-primary mb-6" />
                <h3 className="font-display text-lg font-medium mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
        <div className="relative rounded-[2rem] border border-border/60 bg-gradient-to-br from-card to-background p-10 md:p-20 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">[ 06 ] Contact</p>
            <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] max-w-3xl mb-10">
              Let's work <span className="italic text-gradient">together</span>.
            </h2>
            <p className="text-muted-foreground max-w-lg mb-12 leading-relaxed">
              Open to ICT, administrative and assistant roles. Reach out — I'd love to hear about the opportunity.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="mailto:wanjuriivy@gmail.com"
                className="group flex items-start gap-4 p-6 rounded-2xl border border-border/60 bg-background/60 hover:border-primary transition"
              >
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                  <div className="text-sm group-hover:text-primary transition">wanjuriivy@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+254790754191"
                className="group flex items-start gap-4 p-6 rounded-2xl border border-border/60 bg-background/60 hover:border-primary transition"
              >
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                  <div className="text-sm group-hover:text-primary transition">+254 790 754 191</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-6 rounded-2xl border border-border/60 bg-background/60">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</div>
                  <div className="text-sm">P.O. Box 52, Embu, Kenya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 Ivy Wanjiku — All rights reserved.</span>
          <span>Designed & built with care · Embu, Kenya</span>
        </div>
      </footer>
    </div>
  );
}
