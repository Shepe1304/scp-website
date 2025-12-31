"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/80 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="font-bold text-xl tracking-wide">
          SCP
        </Link>
        <nav
          className="min-w-0 hidden md:flex flex-wrap items-center justify-center gap-8 text-sm font-semibold justify-self-center"
          aria-label="Primary"
        >
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
        <div className="flex justify-end items-center gap-2">
          <div className="hidden md:flex">
            <ThemeSwitcher />
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-border bg-background/80 px-3 py-2 text-foreground transition-colors hover:text-primary"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-4 px-6 py-5 text-sm font-semibold">
            {NAV_ITEMS.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground/90 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
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
            <div className="pt-2">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
