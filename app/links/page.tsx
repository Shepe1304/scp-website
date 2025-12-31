import Header from "@/components/layout/header";
import Link from "next/link";
import {
  BookOpen,
  Instagram,
  Linkedin,
  MessageSquare,
  Users,
} from "lucide-react";

const LINKS = [
  { label: "Discord", href: "https://discord.gg/eGBNqkEd", icon: MessageSquare },
  { label: "Instagram", href: "https://www.instagram.com/usf_scp/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/society-of-competitive-programmers/", icon: Linkedin },
  { label: "BullsConnect", href: "#", icon: Users },
  { label: "Canvas Course", href: "#", icon: BookOpen },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <Header />

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28 pb-16 sm:pt-32">
        <div className="w-full max-w-md flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-foreground">
            SCP LINKS
          </h1>

          <div className="w-full flex flex-col gap-3 sm:gap-4">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="group w-full rounded-full p-[2px] shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg visited:text-foreground hover:bg-[conic-gradient(from_180deg,theme(colors.secondary.DEFAULT),theme(colors.primary.DEFAULT),theme(colors.accent.DEFAULT),theme(colors.secondary.DEFAULT))]"
              >
                <span className="relative z-10 w-full rounded-full bg-card text-foreground border border-foreground/10 px-6 py-3 sm:py-4 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold tracking-wide uppercase transition-colors duration-300 group-hover:border-transparent">
                  <span>{label}</span>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
