import Link from "next/link";
import { useLocale } from "next-intl";

interface CtaBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function CtaBanner({ title, subtitle, buttonText }: CtaBannerProps) {
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal via-teal-medium to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan/10 via-transparent to-transparent" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-max relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          {title}
        </h2>
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        <Link href={`/${locale}/contact`} className="btn-primary text-base px-10 py-4 shadow-lg shadow-cyan/20">
          {buttonText}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
