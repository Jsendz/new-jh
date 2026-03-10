import Link from "next/link";
import { useLocale } from "next-intl";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  imageSeed?: string;
}

export default function ServiceHero({ title, subtitle, ctaText, imageSeed = "andorra" }: ServiceHeroProps) {
  const locale = useLocale();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={`https://picsum.photos/seed/${imageSeed}/1400/900`}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-medium/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-teal/30 border border-teal-medium/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-cyan text-xs font-medium font-archivo uppercase tracking-wider">
              JH Corporate
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/${locale}/contact`} className="btn-primary text-base px-8 py-4">
              {ctaText}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-10 pt-10 border-t border-white/10">
            <div className="text-center">
              <div className="text-cyan font-archivo font-bold text-2xl">500+</div>
              <div className="text-white/50 text-xs mt-0.5">Clients Helped</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-cyan font-archivo font-bold text-2xl">10+</div>
              <div className="text-white/50 text-xs mt-0.5">Years Experience</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-cyan font-archivo font-bold text-2xl">98%</div>
              <div className="text-white/50 text-xs mt-0.5">Approval Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
