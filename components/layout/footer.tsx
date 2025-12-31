import { ThemeSwitcher } from "@/components/theme-switcher";
import { Code2 } from "lucide-react";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="w-full border-t border-border py-8 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">Society of Competitive Programmers</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link href="/discord" className="hover:text-foreground transition-colors">
            Discord
          </Link>
          <Link href="/github" className="hover:text-foreground transition-colors">
            GitHub
          </Link>
          <ThemeSwitcher />
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center text-xs text-muted-foreground mt-6">
        Ac 2025 SCP at USF. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
