import { portfolio } from "./data/portfolio";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "hover-lift rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

function ProjectCover({ theme, title }: { theme: string; title: string }) {
  const themeClass =
    theme === "aurora"
      ? "from-emerald-400/20 via-cyan-400/10 to-fuchsia-400/20"
      : theme === "nebula"
      ? "from-violet-400/20 via-sky-400/10 to-rose-400/20"
      : theme === "sunset"
      ? "from-amber-400/20 via-orange-400/10 to-fuchsia-400/20"
      : "from-sky-400/20 via-teal-400/10 to-indigo-400/20";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]">
      <div className={cn("absolute inset-0 bg-gradient-to-br", themeClass)} />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
      <div className="relative p-6">
        <div className="text-xs text-white/70">Featured Project</div>
        <div className="mt-1 text-lg font-semibold tracking-tight">{title}</div>
        <div className="mt-3 grid grid-cols-3 gap-2 opacity-70">
          <div className="h-10 rounded-xl bg-white/5" />
          <div className="h-10 rounded-xl bg-white/5" />
          <div className="h-10 rounded-xl bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const featured = portfolio.projects.filter((p) => p.featured);
  const others = portfolio.projects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#070a14] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-200px] top-[220px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute left-[-200px] top-[520px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#070a14]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight">{portfolio.name}</div>

          <nav className="hidden gap-5 text-sm text-white/70 sm:flex">
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#070a14] hover:opacity-90"
            href="/CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-2">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for internships / junior roles
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              {portfolio.name}
              <span className="block text-white/70">{portfolio.title}</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              {portfolio.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-[#070a14] hover:opacity-90"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                href={`mailto:${portfolio.email}`}
              >
                Contact Me
              </a>
              <a
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span>{portfolio.location}</span>
              <span className="text-white/30">•</span>
              <span>{portfolio.email}</span>
              <span className="text-white/30">•</span>
              <span>{portfolio.phone}</span>
            </div>
          </div>

          <Card className="fade-up">
            <h2 className="text-lg font-semibold">What I bring</h2>
            <p className="mt-2 text-white/70">
              Focused on shipping clean, reliable software.
            </p>
            <div className="mt-5 grid gap-3">
              {portfolio.highlights.map((h) => (
                <div
                  key={h}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                >
                  {h}
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs text-white/50"></div>
          </Card>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="text-sm text-white/60">Selected work</div>
          </div>

          {/* Featured */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {featured.map((p) => (
              <Card key={p.name} className="fade-up">
                <ProjectCover theme={p.theme} title={p.name} />
                <div className="mt-5">
                  <div className="text-sm text-white/60">{p.tagline}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {p.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.meta?.map((m) => (
                      <Pill key={m}>{m}</Pill>
                    ))}
                  </div>

                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links.live ? (
                      <a
                        className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#070a14]"
                        href={p.links.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                    ) : (
                      <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                        Live (soon)
                      </span>
                    )}

                    {p.links.code ? (
                      <a
                        className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                        href={p.links.code}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                    ) : (
                      <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                        Code (soon)
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other projects */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <Card key={p.name} className="fade-up">
                <div className="text-lg font-semibold">{p.name}</div>
                <div className="mt-1 text-sm text-white/60">{p.tagline}</div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.meta?.map((m) => (
                    <Pill key={m}>{m}</Pill>
                  ))}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {p.description}
                </p>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.live ? (
                    <a
                      className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#070a14]"
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  ) : (
                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                      Live (soon)
                    </span>
                  )}

                  {p.links.code ? (
                    <a
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                      href={p.links.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  ) : (
                    <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                      Code (soon)
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {Object.entries(portfolio.skills).map(([group, items]) => (
              <Card key={group} className="fade-up">
                <div className="text-sm font-medium text-white/80">{group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(items as string[]).map((x) => (
                    <Pill key={x}>{x}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience + Education */}
        <section id="experience" className="mt-16 grid gap-6 lg:grid-cols-2">
          <Card className="fade-up">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-5 grid gap-5">
              {portfolio.experience.map((e) => (
                <div
                  key={e.role}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="font-medium">
                    {e.role} <span className="text-white/50">•</span>{" "}
                    <span className="text-white/80">{e.company}</span>
                  </div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card className="fade-up">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-5 space-y-3">
              {portfolio.education.map((ed) => (
                <div
                  key={ed.name}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="font-medium">{ed.name}</div>
                  <div className="text-sm text-white/60">{ed.dates}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16">
          <Card className="fade-up">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2 text-white/70">
              Want to collaborate or discuss a role? Reach out.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-[#070a14] hover:opacity-90"
                href={`mailto:${portfolio.email}`}
              >
                Email Me
              </a>
              <a
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Card>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/60">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span>
              © {new Date().getFullYear()} {portfolio.name}
            </span>
            <span>Next.js + Tailwind • Ready for Vercel</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
