import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";
import { BookOpen, Code2, MessageSquare, Trophy, Users } from "lucide-react";

const NAV_ITEMS = [
  { label: "Identity", href: "#identity" },
  { label: "Mission", href: "#mission" },
  { label: "Activities", href: "#activities" },
  { label: "Benefits", href: "#benefits" },
  { label: "Our Team", href: "#team" },
  { label: "How to Join", href: "#join" },
];

const HIGHLIGHT =
  "underline underline-offset-4 decoration-primary/60 text-foreground/90";

const COMPETITIVE_PROGRAMMING_BULLETS = [
  "Solve puzzles with code (algorithms + data structures)",
  "Train for interviews (LeetCode-style problems)",
  "Compete and collaborate (ICPC + team practice)",
];

const MISSION_CARDS = [
  {
    title: "Make it fun",
    description: "Community-first and club-like, not a stressful course.",
  },
  {
    title: "Make it approachable",
    description: "Beginner-friendly and step-by-step, especially for newcomers.",
  },
  {
    title: "Make it practical",
    description: "Interview skills + real problem solving.",
  },
];

const MISSION_CARD_STYLES = [
  "group rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-sm transition-all hover:border-primary hover:bg-primary/5",
  "group rounded-2xl border-2 border-secondary/20 bg-card p-6 shadow-sm transition-all hover:border-secondary hover:bg-secondary/5",
  "group rounded-2xl border-2 border-accent/30 bg-card p-6 shadow-sm transition-all hover:border-accent hover:bg-accent/5",
];

const ACTIVITIES = [
  {
    title: "Weekly Hang Out & Learn (Discord)",
    description: "Casual practice + Q&A.",
    icon: MessageSquare,
  },
  {
    title: "Workshops & Problem Walkthroughs",
    description: "Topics led by tech leads (details pending).",
    icon: Code2,
  },
  {
    title: "Office Hours",
    description: "Help with problems, concepts, and study plans.",
    icon: BookOpen,
  },
  {
    title: "Competitive Building",
    description: "Challenge sprints; optional offline showcase/presentations.",
    icon: Users,
  },
  {
    title: "ICPC Preparation",
    description: "Practice + selection pathway for next year.",
    icon: Trophy,
  },
  {
    title: "SCP Website",
    description: "Club-built site; internal engineering + contributions welcome.",
    icon: Code2,
  },
];

const BENEFITS = [
  "Stronger problem-solving + DS&A fundamentals",
  "Interview confidence (LeetCode practice)",
  "Community + accountability",
  "Paths to compete (ICPC)",
  "Certificates for active participation (80% check-in via BullsConnect)",
];

const TEAM = [
  { role: "President", name: "Name" },
  { role: "Vice President", name: "Name" },
  { role: "Treasurer", name: "Name" },
  { role: "Outreach Chair", name: "Name" },
  { role: "Tech Leads", name: "Name" },
  { role: "Marketing Chair", name: "Name" },
];

type CtaVariant = "primary" | "secondary" | "outline";

const JOIN_STEPS = [
  {
    title: "Join Discord",
    detail: "[Discord link]",
    href: "https://discord.gg/eGBNqkEd",
    isLink: true,
  },
  {
    title: "Enroll on Canvas",
    detail: "[Canvas course link]",
    href: "#",
    isLink: true,
  },
  {
    title: "Check in on BullsConnect",
    detail: "Used for attendance + certificates.",
    href: "#",
    isLink: false,
  },
];

const CTA_STYLES: Record<CtaVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:shadow-lg",
  secondary: "bg-secondary text-secondary-foreground hover:shadow-lg",
  outline:
    "border border-border bg-card text-foreground hover:border-primary/40 hover:shadow-md",
};

const CTA_BUTTONS: Array<{ label: string; href: string; variant: CtaVariant }> = [
  { label: "Join Discord", href: "https://discord.gg/eGBNqkEd", variant: "primary" },
  { label: "View Canvas Course", href: "#", variant: "secondary" },
  { label: "Open BullsConnect", href: "#", variant: "outline" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background pb-20 lg:pb-0">
      <Header />
      <Hero
        title="About SCP"
        subtitle="come solve, learn, and level up together"
      />
      <main className="flex-1 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 pb-28 pt-6 sm:px-6 sm:pt-8 lg:pb-24">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            <nav
              className="hidden self-start lg:block lg:sticky lg:top-24"
              aria-label="About sections"
            >
              <div className="rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  On this page
                </p>
                <div className="mt-3 flex flex-wrap gap-2 sm:gap-3 lg:flex-col">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="whitespace-nowrap rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            <div className="space-y-16 sm:space-y-20">
              <section id="identity" className="scroll-mt-24">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Who We Are</h2>
                    <p className="text-base text-muted-foreground sm:text-lg">
                      SCP stands for{" "}
                      <span className={HIGHLIGHT}>
                        Society of Competitive Programmers
                      </span>
                      , a club for coding and algorithmic problem-solving with
                      a competitive programming mindset and a mind-sports vibe.
                    </p>
                    <p className="text-base text-muted-foreground sm:text-lg">
                      We are{" "}
                      <span className={HIGHLIGHT}>reviving the club</span> this
                      year and rebuilding the community from the ground up.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                    <h3 className="text-lg font-semibold">
                      What is competitive programming?
                    </h3>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground sm:text-base">
                      {COMPETITIVE_PROGRAMMING_BULLETS.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section id="mission" className="scroll-mt-24">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="text-base text-muted-foreground sm:text-lg">
                      We want to make{" "}
                      <span className={HIGHLIGHT}>coding fun for everyone</span>.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {MISSION_CARDS.map((card, index) => (
                      <div
                        key={card.title}
                        className={MISSION_CARD_STYLES[index % MISSION_CARD_STYLES.length]}
                      >
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="activities" className="scroll-mt-24">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold">What We Do</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {ACTIVITIES.map((activity) => {
                      const Icon = activity.icon;
                      return (
                        <div
                          key={activity.title}
                          className="group/activity rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md hover:scale-[1.02]"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/activity:bg-primary/15"
                            >
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold transition-colors group-hover/activity:text-primary">
                                {activity.title}
                              </h3>
                              <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover/activity:text-foreground/80">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Exact workshop topics will be announced soon.
                  </p>
                </div>
              </section>

              <section id="benefits" className="scroll-mt-24">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Why Join SCP</h2>
                    <p className="text-base text-muted-foreground sm:text-lg">
                      <span className={HIGHLIGHT}>LeetCode</span> is competitive
                      programming in disguise; SCP is a{" "}
                      <span className={HIGHLIGHT}>playground</span> to explore
                      this hiring skillset while having fun with mind sports and
                      improving job chances.
                    </p>
                    <p className="text-base text-muted-foreground sm:text-lg">
                      Our alumni have gone on to{" "}
                      <span className={HIGHLIGHT}>Two Sigma</span>,{" "}
                      <span className={HIGHLIGHT}>Palantir</span>, and similar
                      companies. <span className={HIGHLIGHT}>ICPC</span> is a
                      well-known contest and a strong resume signal; companies
                      like <span className={HIGHLIGHT}>Google</span>,{" "}
                      <span className={HIGHLIGHT}>Two Sigma</span>, and{" "}
                      <span className={HIGHLIGHT}>Microsoft</span> value it.
                    </p>
                  </div>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {BENEFITS.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                      >
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary/70" />
                        <span className="text-sm text-muted-foreground sm:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold">
                      New to this? You belong here.
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                      Competitive programming can be intimidating. We're
                      building a{" "}
                      <span className={HIGHLIGHT}>
                        beginner-friendly club culture
                      </span>
                      -learn, laugh, and improve together.
                    </p>
                  </div>
                </div>
              </section>

              <section id="team" className="scroll-mt-24">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">E-Board</h2>
                    <p className="text-sm text-muted-foreground">
                      Supported by{" "}
                      <span className={HIGHLIGHT}>Dr. Mauricio</span>.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {TEAM.map((member) => (
                      <div
                        key={member.role}
                        className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 shrink-0 rounded-full border border-border/60 bg-muted/60" />
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                              {member.role}
                            </p>
                            <p className="text-base font-semibold">
                              {member.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Want to help rebuild SCP? Leadership and contributor roles
                    are open.
                  </p>
                </div>
              </section>

              <section id="join" className="scroll-mt-24">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold">How to Join</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {JOIN_STEPS.map((step, index) => {
                      const isExternal = step.href.startsWith("http");
                      return (
                        <div
                          key={step.title}
                          className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                              Step {index + 1}
                            </span>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                              {index + 1}
                            </span>
                          </div>
                          <h3 className="mt-4 text-lg font-semibold">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {step.isLink ? (
                              <a
                                href={step.href}
                                className="font-semibold text-primary hover:underline"
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noreferrer" : undefined}
                              >
                                {step.detail}
                              </a>
                            ) : (
                              step.detail
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {CTA_BUTTONS.map((cta) => {
                      const isExternal = cta.href.startsWith("http");
                      return (
                        <a
                          key={cta.label}
                          href={cta.href}
                          className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02] sm:w-auto ${CTA_STYLES[cta.variant]}`}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                        >
                          {cta.label}
                        </a>
                      );
                    })}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Come for the puzzles. Stay for the people. Be part of the{" "}
                    <span className={HIGHLIGHT}>SCP revival</span>.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <nav
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden"
        aria-label="About sections"
      >
        <div className="border-t border-border/80 bg-background/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <Footer />
      <style>{"html { scroll-behavior: smooth; }"}</style>
    </div>
  );
}
