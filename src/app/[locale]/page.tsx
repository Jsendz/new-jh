import type { Metadata } from "next";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import CtaBanner from "@/components/CtaBanner";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "Andorran Residency & Company Formation Experts",
};

function HeroSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex overflow-hidden pt-20">
      {/* Background gradient: navy → light teal-blue */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #05141a 0%, #0a2d3d 40%, #0d4255 65%, #0f5068 100%)",
        }}
      />
      {/* Subtle radial glow in center-left */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-medium/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left content panel — capped at 1280px total width, text sits in left ~58% */}
      <div className="relative z-10 w-full flex items-center py-20">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="lg:w-[58%] max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-cyan text-xs font-medium font-archivo uppercase tracking-wider">
              Andorra Specialists
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
            {t("heroTitle")}
          </h1>

          <p className="text-white/65 text-lg leading-relaxed mb-10">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href={`/${locale}/contact`}
              className="btn-primary text-base px-8 py-4 shadow-lg shadow-cyan/20"
            >
              {t("heroCta")}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href={`/${locale}/about`} className="btn-outline text-base px-8 py-4">
              {t("heroSecondary")}
            </Link>
          </div>

          {/* Social proof row — avatars + stars */}
          <div className="flex items-center gap-4">
            {/* Overlapping avatars */}
            <div className="flex -space-x-2">
              {["1","2","3","4"].map((seed) => (
                <img
                  key={seed}
                  src={`https://picsum.photos/seed/avatar${seed}/40/40`}
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-[#0a2d3d] object-cover"
                />
              ))}
            </div>
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white font-semibold text-sm ml-1">4.9/5</span>
              </div>
              <p className="text-white/50 text-xs">500+ Satisfied Clients</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Right image panel — full-bleed, no card wrapper */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[44%]">
        <img
          src="/hero-home.jpg"
          alt="Andorra la Vella"
          className="w-full h-full object-cover"
        />
        {/* Subtle left-edge fade so it blends into the gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d4255] via-transparent to-transparent" />
      </div>
    </section>
  );
}

function ServicesSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  const services = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: t("service1Title"),
      desc: t("service1Desc"),
      href: `/${locale}/passive-residency`,
      tag: "For Investors & Retirees",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t("service2Title"),
      desc: t("service2Desc"),
      href: `/${locale}/active-residency`,
      tag: "For Entrepreneurs",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t("service3Title"),
      desc: t("service3Desc"),
      href: `/${locale}/company-formation`,
      tag: "For Businesses",
    },
  ];

  return (
    <section className="bg-teal-light py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
            {t("servicesTitle")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
            {t("servicesSubtitle")}
          </h2>
          <div className="w-16 h-0.5 bg-teal-medium mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={i}
              href={service.href}
              className="group bg-white rounded-2xl p-8 border border-navy/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6 group-hover:bg-teal group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <div className="inline-flex mb-3">
                <span className="text-xs font-archivo font-semibold text-teal-medium bg-teal/10 rounded-full px-3 py-1">
                  {service.tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-navy mb-3">{service.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed mb-6">{service.desc}</p>
              <div className="flex items-center gap-2 text-teal font-semibold text-sm group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAndorraSection() {
  const t = useTranslations("home");

  const reasons = [
    {
      icon: "💶",
      title: t("why1Title"),
      desc: t("why1Desc"),
    },
    {
      icon: "🗺️",
      title: t("why2Title"),
      desc: t("why2Desc"),
    },
    {
      icon: "⛰️",
      title: t("why3Title"),
      desc: t("why3Desc"),
    },
    {
      icon: "🛡️",
      title: t("why4Title"),
      desc: t("why4Desc"),
    },
  ];

  return (
    <section className=" bg-navy-light py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/andorra-landscape/700/500"
                alt="Andorra landscape"
                className="w-full h-80 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent rounded-2xl" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-teal rounded-2xl p-6 border border-teal-medium/30 shadow-xl">
              <div className="text-cyan font-archivo font-bold text-3xl">€0</div>
              <div className="text-white/70 text-sm mt-1">Capital Gains Tax</div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
              {t("whyTitle")}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
              {t("whySubtitle")}
            </h2>
            <div className="w-16 h-0.5 bg-cyan mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) => (
                <div key={i} className="bg-navy-light rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl mb-4">{reason.icon}</div>
                  <h3 className="font-serif text-lg text-white mb-2">{reason.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const t = useTranslations("home");

  const testimonials = [
    {
      name: "Marco R.",
      role: "Digital Entrepreneur",
      flag: "🇮🇹",
      text: "JH Corporate made our move to Andorra seamless. From paperwork to our residency card in under 4 months. Incredible service.",
    },
    {
      name: "Sophie M.",
      role: "Investor & Retiree",
      flag: "🇫🇷",
      text: "The team handled everything — apostilles, translations, the government meetings. I just showed up and signed. Highly recommend.",
    },
    {
      name: "David K.",
      role: "Tech Founder",
      flag: "🇬🇧",
      text: "Company formation in Andorra with JH Corporate was fast and professional. We were operational in 6 weeks. Amazing result.",
    },
  ];

  return (
    <section className="bg-teal-light py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
            {t("testimonialsTitle")}
          </h2>
          <div className="w-16 h-0.5 bg-teal-medium mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-navy/10 shadow-sm">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-navy/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-xl">
                  {testimonial.flag}
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-navy/50 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyAndorraSection />
      <ProcessSteps sectionTitle={t("processTitle")} />
      <TestimonialsSection />
      <CtaBanner
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonText={t("ctaButton")}
      />
    </>
  );
}
