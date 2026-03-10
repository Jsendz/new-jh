import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const services = [
    { href: `/${locale}/passive-residency`, label: nav("passiveResidency") },
    { href: `/${locale}/active-residency`, label: nav("activeResidency") },
    { href: `/${locale}/company-formation`, label: nav("companyFormation") },
  ];

  const company = [
    { href: `/${locale}/about`, label: nav("about") },
    { href: `/${locale}/contact`, label: nav("contact") },
  ];

  return (
    <footer className="bg-navy-light border-t border-white/10">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <span className="text-cyan font-archivo font-bold text-xl tracking-tight">
                JH<span className="text-white"> Corporate</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            {/* Social / trust signals */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs text-white/40 bg-white/5 rounded-full px-3 py-1.5">
                <svg className="w-3 h-3 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Andorra Registered
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-archivo uppercase tracking-wider">
              {t("services")}
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-archivo uppercase tracking-wider">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/contact`} className="text-white/60 text-sm hover:text-cyan transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-white/60 text-sm hover:text-cyan transition-colors">
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">{t("rights")}</p>
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-medium inline-block"></span>
            Principality of Andorra
          </div>
        </div>
      </div>
    </footer>
  );
}
