import { BookOpen, Instagram, Linkedin, MessageSquare, Users } from "lucide-react";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="w-full border-t border-border py-8 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-foreground">
          <Link href="#" className="hover:text-primary transition-colors" aria-label="Discord">
            <MessageSquare className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="BullsConnect">
            <Users className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors" aria-label="Canvas Course">
            <BookOpen className="w-5 h-5" />
          </Link>
        </div>

        <div className="text-sm text-muted-foreground">
          <span className="block">University of South Florida (USF)</span>
          <span className="block">4202 E. Fowler Avenue</span>
          <span className="block">Tampa, FL 33620</span>
        </div>

        <div className="text-sm font-semibold">Society of Competitive Programmers</div>
      </div>
    </footer>
  );
};

export default Footer;
