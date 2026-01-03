import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Code2, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-48 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl text-center space-y-8 relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight">
            <span className="text-secondary">S</span>
            <span className="text-primary">C</span>
            <span className="text-accent">P</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground/90">
            Society of Competitive Programmers
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master algorithms, compete in contests, and sharpen your problem-solving skills. Join USF's most active competitive programming community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              Join Our Discord
            </button>
            <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
              Upcoming Events
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Everything you need to become a competitive programming champion</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all bg-card">
              <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Weekly Contests</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sharpen your skills with practice contests every week while preparing for ICPC and other competitions.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border-2 border-secondary/20 hover:border-secondary hover:bg-secondary/5 transition-all bg-card">
              <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Workshops & Events</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn from the best. Our workshops cover everything from basic algorithms to advanced competitive programming techniques.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border-2 border-accent/30 hover:border-accent hover:bg-accent/5 transition-all bg-card">
              <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Engaging Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join a network of passionate coders. Get help, share knowledge, and make friends who love solving problems as much as you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link href="/events" className="text-secondary hover:underline font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold">JAN</span>
                  <span className="text-lg font-bold">15</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Weekly Contest #12</h3>
                  <p className="text-sm text-muted-foreground mb-2">MSC 3301 • 6:00 PM - 8:00 PM</p>
                  <p className="text-sm">Practice problems focusing on dynamic programming and graph algorithms.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary text-secondary-foreground flex flex-col items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold">JAN</span>
                  <span className="text-lg font-bold">22</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Algorithm Workshop: Trees</h3>
                  <p className="text-sm text-muted-foreground mb-2">MSC 3301 • 6:00 PM - 7:30 PM</p>
                  <p className="text-sm">Deep dive into tree data structures and common tree algorithms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Contests Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Active</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// import { DeployButton } from "@/components/deploy-button";
// import { EnvVarWarning } from "@/components/env-var-warning";
// import { AuthButton } from "@/components/auth-button";
// import { Hero } from "@/components/hero";
// import { ThemeSwitcher } from "@/components/theme-switcher";
// import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
// import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
// import { hasEnvVars } from "@/lib/utils";
// import Link from "next/link";
// import { Suspense } from "react";

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center">
//       <div className="flex-1 w-full flex flex-col gap-20 items-center">
//         <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
//           <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
//             <div className="flex gap-5 items-center font-semibold">
//               <Link href={"/"}>Next.js Supabase Starter</Link>
//               <div className="flex items-center gap-2">
//                 <DeployButton />
//               </div>
//             </div>
//             {!hasEnvVars ? (
//               <EnvVarWarning />
//             ) : (
//               <Suspense>
//                 <AuthButton />
//               </Suspense>
//             )}
//           </div>
//         </nav>
//         <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
//           <Hero />
//           <main className="flex-1 flex flex-col gap-6 px-4">
//             <h2 className="font-medium text-xl mb-4">Next steps</h2>
//             {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
//           </main>
//         </div>

//         <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
//           <p>
//             Powered by{" "}
//             <a
//               href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
//               target="_blank"
//               className="font-bold hover:underline"
//               rel="noreferrer"
//             >
//               Supabase
//             </a>
//           </p>
//           <ThemeSwitcher />
//         </footer>
//       </div>
//     </main>
//   );
// }
