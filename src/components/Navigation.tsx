"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const localeNames: Record<string, string> = {
  en: "EN",
  es: "ES",
  ca: "CA",
  fr: "FR",
};

const locales = ["en", "es", "ca", "fr"];

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Build the path for a different locale
  function getLocalePath(newLocale: string) {
    // Remove current locale prefix and replace with new
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || "/";
  }

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/passive-residency`, label: t("passiveResidency") },
    { href: `/${locale}/active-residency`, label: t("activeResidency") },
    { href: `/${locale}/company-formation`, label: t("companyFormation") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-cyan font-archivo font-bold text-xl tracking-tight">
              JH<span className="text-white"> Corporate</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-cyan ${
                  pathname === link.href ? "text-cyan" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: lang switcher + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
              >
                {localeNames[locale]}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-navy-light border border-white/10 rounded-xl overflow-hidden shadow-xl">
                  {locales.map((loc) => (
                    <Link
                      key={loc}
                      href={getLocalePath(loc)}
                      onClick={() => setLangOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                        loc === locale ? "text-cyan" : "text-white/80"
                      }`}
                    >
                      {localeNames[loc]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t("cta")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-navy-light border-t border-white/10 pb-6">
            <nav className="flex flex-col pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium transition-colors hover:text-cyan border-b border-white/5 ${
                    pathname === link.href ? "text-cyan" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 flex items-center gap-3">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={getLocalePath(loc)}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium ${loc === locale ? "text-cyan" : "text-white/50"}`}
                  >
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>
              <div className="px-4 pt-4">
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  {t("cta")}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
