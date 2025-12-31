import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const Hero = ({ title, subtitle, className }: HeroProps) => {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl pointer-events-none sm:h-64 sm:w-64"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none sm:h-80 sm:w-80"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex min-h-[40vh] w-full max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center sm:min-h-[48vh] sm:pb-20 sm:pt-32">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
