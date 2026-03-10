import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Active Residency in Andorra",
  description:
    "Live and work in Andorra with an active residency permit. Ideal for entrepreneurs, freelancers, and professionals. Expert guidance from JH Corporate.",
};

function BenefitsSection() {
  const t = useTranslations("activeResidency");

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t("benefit1Title"),
      desc: t("benefit1Desc"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: t("benefit2Title"),
      desc: t("benefit2Desc"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t("benefit3Title"),
      desc: t("benefit3Desc"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
  const t = useTranslations("activeResidency");

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
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/andorra-office/600/500"
                alt="Working in Andorra"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent rounded-2xl" />
            </div>
            <div className="absolute bottom-6 right-6 bg-teal/90 backdrop-blur-md rounded-xl p-4 border border-teal-medium/30">
              <p className="text-white font-archivo font-bold text-lg">183 days</p>
              <p className="text-white/70 text-sm">Minimum annual presence</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
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
        </div>
      </div>
    </section>
  );
}

export default function ActiveResidencyPage() {
  const t = useTranslations("activeResidency");

  return (
    <>
      <ServiceHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        ctaText={t("heroCta")}
        imageSeed="andorra-work"
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
