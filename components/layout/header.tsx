"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "EVENTS", href: "/events" },
  { label: "MEMBERS", href: "/members" },
  { label: "LINKS", href: "/links" },
  { label: "ABOUT", href: "/about" },
];

const SCROLL_THRESHOLD = 0;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <Link href="/" className="font-bold text-xl tracking-wide">
          SCP
        </Link>
        <nav className="flex items-center gap-8 text-sm font-semibold" aria-label="Primary">
          {NAV_ITEMS.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/90 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                key={item.label}
                className="text-foreground/90 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </span>
            ),
          )}
        </nav>
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
