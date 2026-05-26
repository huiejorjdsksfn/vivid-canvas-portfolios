import { createFileRoute } from "@tanstack/react-router";
import {
  Monitor,
  Database,
  Network,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Camera,
  Server,
  Printer,
  FileText,
  ClipboardList,
  CheckCircle2,
  Quote,
  Linkedin,
  Download,
  Briefcase,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ivy Wanjiku — ICT Specialist & Administrative Professional" },
      {
        name: "description",
        content:
          "Ivy Wanjiku — ICT specialist and administrative professional. Systems support, networks, CCTV, database management and secretarial expertise. Based in Embu, Kenya. Open to opportunities.",
      },
    ],
  }),
});

const capabilities = [
  {
    icon: Monitor,
    title: "Systems Support",
    points: ["End-user IT support", "Hardware troubleshooting", "Preventive maintenance"],
  },
  {
    icon: Network,
    title: "Networks & CCTV",
    points: ["LAN setup & configuration", "CCTV installation", "Connectivity diagnostics"],
  },
  {
    icon: Database,
    title: "Data & Records",
    points: ["Database management", "Secure record handling", "System integration"],
  },
  {
    icon: ClipboardList,
    title: "Administrative Support",
    points: ["Secretarial duties", "Front-office coordination", "Scheduling & correspondence"],
  },
];

const experience = [
  {
    period: "Jan – Mar 2026",
    role: "ICT & Administrative Attaché",
    org: "Embu Level 5 Hospital — ICT Department",
    bullets: [
      "Deployed and configured 10+ CCTV units across hospital departments to strengthen security monitoring.",
      "Integrated departmental software with the central Medboss server for unified records.",
      "Provided daily end-user support — printers, peripherals, network and account issues.",
      "Supported secretarial workflows: document handling, filing, scheduling and reception duties.",
    ],
  },
];

const projects = [
  { icon: Camera, no: "01", tag: "Security Systems", title: "Hospital-Wide CCTV Deployment", metric: "10+ units", desc: "Installed, configured and commissioned surveillance across departments to enhance monitoring and incident review." },
  { icon: Server, no: "02", tag: "Systems Integration", title: "Medboss Server Integration", metric: "Cross-dept", desc: "Linked departmental applications with the central Medboss platform, enabling reliable, unified data flow." },
  { icon: Printer, no: "03", tag: "IT Support", title: "Peripherals & Connectivity", metric: "Daily ops", desc: "Resolved printer, scanner and network issues across multiple departments, keeping operations uninterrupted." },
  { icon: FileText, no: "04", tag: "Administration", title: "Records & Front-Office", metric: "End-to-end", desc: "Managed correspondence, document filing, scheduling and reception alongside ICT responsibilities." },
];

const skillGroups = [
  { label: "Technical", items: ["Systems Support", "Networking (LAN)", "CCTV Installation", "Database Management", "Hardware Troubleshooting", "System Integration", "HTML Basics"] },
  { label: "Administrative", items: ["Secretarial Duties", "Front-Office Reception", "Document Management", "Scheduling & Coordination", "Correspondence", "MS Office Suite", "Data Entry"] },
  { label: "Professional", items: ["Integrity & Confidentiality", "Attention to Detail", "Communication", "Team Collaboration", "Problem-Solving", "Reliability", "Adaptability"] },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm">IW</span>
            <span className="font-display text-base tracking-tight">Ivy Wanjiku</span>
          </a>
          <ul className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="#capabilities" className="hover:text-foreground transition">Capabilities</a></li>
            <li><a href="#experience" className="hover:text-foreground transition">Experience</a></li>
            <li><a href="#testimonial" className="hover:text-foreground transition">References</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Hire me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-10">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            <span>Available for full-time & internship opportunities</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display font-normal text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] tracking-tight text-ink">
                ICT specialist with a <em className="text-accent not-italic font-medium">dual</em> strength in <span className="italic">administrative</span> operations.
              </h1>
              <p className="mt-10 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I help organisations keep both their technology and their day-to-day operations running smoothly — combining hands-on ICT support with experience in secretarial and front-office work.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:wanjuriivy@gmail.com?subject=CV%20Request"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm hover:border-primary transition"
                >
                  <Download className="h-4 w-4" />
                  Request CV
                </a>
              </div>
            </div>

            {/* Profile card */}
            <aside className="lg:col-span-4 rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Profile</span>
                <ShieldCheck className="h-4 w-4 text-accent" />
              </div>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between gap-4 pb-3 border-b border-border">
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="font-medium text-right">ICT & Admin Professional</dd>
                </div>
                <div className="flex justify-between gap-4 pb-3 border-b border-border">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium text-right">Embu, Kenya</dd>
                </div>
                <div className="flex justify-between gap-4 pb-3 border-b border-border">
                  <dt className="text-muted-foreground">Availability</dt>
                  <dd className="font-medium text-right text-accent">Immediate</dd>
                </div>
                <div className="flex justify-between gap-4 pb-3 border-b border-border">
                  <dt className="text-muted-foreground">Languages</dt>
                  <dd className="font-medium text-right">English, Swahili</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Open to</dt>
                  <dd className="font-medium text-right">On-site · Hybrid</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { num: "10+", label: "CCTV systems deployed" },
              { num: "3 mo", label: "Industrial attachment" },
              { num: "2", label: "Professional disciplines" },
              { num: "100%", label: "Reliability & integrity" },
            ].map((s, i) => (
              <div key={s.label} className={`py-8 ${i === 0 ? "pl-0 pr-6" : "px-6"}`}>
                <div className="font-display text-3xl md:text-4xl text-ink">{s.num}</div>
                <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5">01 — About</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              A versatile professional, ready to contribute from day one.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-foreground text-lg">
              I bring a rare combination of <span className="text-accent">technical ICT expertise</span> and <span className="text-accent">administrative capability</span> — equally comfortable troubleshooting a network and managing front-office operations.
            </p>
            <p>
              My recent attachment at Embu Level 5 Hospital saw me deploy surveillance systems, integrate departmental software with the Medboss platform, support end-users on a daily basis, and assist with secretarial workflows including correspondence, filing and scheduling.
            </p>
            <p>
              Recruiters and managers describe me as dependable, detail-oriented and quick to learn. I take ownership of my work, communicate clearly, and uphold confidentiality and integrity at every step.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 pt-6">
              {[
                "Strong work ethic & punctuality",
                "Confidentiality & professionalism",
                "Cross-functional collaboration",
                "Clear written & verbal communication",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5">02 — Capabilities</p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
                Two disciplines. One reliable professional.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              A practical, business-ready skill set covering both information technology and administrative operations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {capabilities.map(({ icon: Icon, title, points }, i) => (
              <div key={title} className="bg-card p-8 hover:bg-background transition group">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition" />
                </div>
                <h3 className="font-display text-xl mb-4">{title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section id="experience" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5">03 — Experience</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Recent professional experience.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground text-sm leading-relaxed self-end">
            Hands-on responsibilities across ICT and administrative functions in a public healthcare environment.
          </p>
        </div>

        <div className="space-y-10">
          {experience.map((e) => (
            <article key={e.role} className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-8 border-t border-border">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5" />
                  {e.period}
                </span>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl mb-1">{e.role}</h3>
                <p className="text-sm text-accent mb-6">{e.org}</p>
                <ul className="space-y-3">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-1 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-20">
          <h3 className="font-display text-2xl mb-8">Selected projects</h3>
          <div className="divide-y divide-border border-y border-border">
            {projects.map(({ icon: Icon, no, tag, title, metric, desc }) => (
              <article
                key={title}
                className="group grid md:grid-cols-12 gap-4 md:gap-6 py-7 items-center hover:bg-surface/60 transition px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
              >
                <div className="md:col-span-1 font-mono text-xs text-muted-foreground">{no}</div>
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h4 className="font-display text-lg">{title}</h4>
                </div>
                <div className="md:col-span-2 text-xs uppercase tracking-widest text-muted-foreground">{tag}</div>
                <p className="md:col-span-4 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="md:col-span-1 text-right text-xs font-mono text-accent">{metric}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5">04 — Skills</p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight">
                Skills at a glance.
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {skillGroups.map((g) => (
              <div key={g.label} className="bg-card p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <h3 className="font-display text-lg">{g.label}</h3>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {g.items.map((s) => (
                    <li key={s} className="flex items-center justify-between border-b border-border/60 pb-2.5 last:border-0">
                      <span>{s}</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent/60" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonial" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5">05 — Reference</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-3xl mb-14">
          What supervisors say.
        </h2>
        <figure className="grid lg:grid-cols-12 gap-10 items-start">
          <Quote className="hidden lg:block lg:col-span-1 h-12 w-12 text-accent" />
          <div className="lg:col-span-11">
            <blockquote className="font-display text-2xl md:text-4xl leading-[1.25] text-ink">
              "Ivy demonstrated strong technical aptitude, professionalism and a willingness to take on responsibility across both ICT and administrative tasks. She is dependable, detail-oriented, and a valuable addition to any team."
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 text-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display">EL</span>
              <div>
                <div className="font-medium text-foreground">Embu Level 5 Hospital</div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest mt-0.5">ICT Department — Reference letter on file</div>
              </div>
            </figcaption>
          </div>
        </figure>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5">06 — Contact</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6 text-primary-foreground">
                Let's discuss the opportunity.
              </h2>
              <p className="text-primary-foreground/70 max-w-xl leading-relaxed mb-8">
                I'm actively pursuing roles in ICT support, administration and combined ICT/admin positions. Reach out and I'll respond within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:wanjuriivy@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition"
                >
                  <Mail className="h-4 w-4" />
                  wanjuriivy@gmail.com
                </a>
                <a
                  href="tel:+254790754191"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3.5 text-sm hover:bg-primary-foreground/10 transition"
                >
                  <Phone className="h-4 w-4" />
                  +254 790 754 191
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
              <h3 className="font-display text-lg mb-6 text-primary-foreground">Direct contact</h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <Mail className="h-4 w-4 text-accent mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-1">Email</div>
                    <a href="mailto:wanjuriivy@gmail.com" className="hover:text-accent transition">wanjuriivy@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="h-4 w-4 text-accent mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-1">Phone</div>
                    <span>+254 790 754 191</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="h-4 w-4 text-accent mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-1">Location</div>
                    <span>P.O. Box 52, Embu, Kenya</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Linkedin className="h-4 w-4 text-accent mt-0.5" />
                  <div>
                    <div className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-1">LinkedIn</div>
                    <span className="text-primary-foreground/60">Available on request</span>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 Ivy Wanjiku · ICT & Administrative Professional</span>
          <span>Embu, Kenya</span>
        </div>
      </footer>
    </div>
  );
}
