import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Passive Residency in Andorra",
  description:
    "Obtain passive residency in Andorra and benefit from Europe's lowest tax rates. Expert guidance for investors, retirees, and digital nomads.",
};

function BenefitsSection() {
  const t = useTranslations("passiveResidency");

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t("benefit1Title"),
      desc: t("benefit1Desc"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t("benefit2Title"),
      desc: t("benefit2Desc"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: t("benefit3Title"),
      desc: t("benefit3Desc"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t("benefit4Title"),
      desc: t("benefit4Desc"),
    },
  ];

  return (
    <section className="bg-teal-light py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
            Advantages
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">{t("benefitsTitle")}</h2>
          <div className="w-16 h-0.5 bg-teal-medium mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-navy/10 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-5">
                {benefit.icon}
              </div>
              <h3 className="font-serif text-xl text-navy mb-3">{benefit.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequirementsSection() {
  const t = useTranslations("passiveResidency");

  const reqs = [
    t("req1"),
    t("req2"),
    t("req3"),
    t("req4"),
    t("req5"),
  ];

  return (
    <section className="bg-navy py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
              What you need
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              {t("requirementsTitle")}
            </h2>
            <div className="w-16 h-0.5 bg-cyan mb-10" />

            <ul className="space-y-4">
              {reqs.map((req, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-medium/20 border border-teal-medium/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/75 leading-relaxed">{req}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/andorra-town/600/500"
                alt="Andorra la Vella"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent rounded-2xl" />
            </div>
            {/* Floating card */}
            <div className="absolute bottom-6 left-6 bg-teal/90 backdrop-blur-md rounded-xl p-4 border border-teal-medium/30">
              <p className="text-white font-archivo font-bold text-lg">90 days</p>
              <p className="text-white/70 text-sm">Minimum annual presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PassiveResidencyPage() {
  const t = useTranslations("passiveResidency");

  return (
    <>
      <ServiceHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        ctaText={t("heroCta")}
        imageSeed="andorra-ski"
      />
      <BenefitsSection />
      <RequirementsSection />
      <ProcessSteps sectionTitle={t("processTitle")} />
      <CtaBanner
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonText={t("ctaButton")}
      />
    </>
  );
}
