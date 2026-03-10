import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import ServiceHero from "@/components/ServiceHero";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Company Formation in Andorra",
  description:
    "Incorporate your company in Andorra with a 10% corporate tax rate. Full legal support for SL and SA company formation. JH Corporate.",
};

function BenefitsSection() {
  const t = useTranslations("companyFormation");

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t("benefit1Title"),
      desc: t("benefit1Desc"),
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
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
            Why Andorra
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

function CompanyTypesSection() {
  const t = useTranslations("companyFormation");

  return (
    <section className="bg-navy py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
            Structures
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">{t("typesTitle")}</h2>
          <div className="w-16 h-0.5 bg-cyan mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { title: t("type1Title"), desc: t("type1Desc"), recommended: true },
            { title: t("type2Title"), desc: t("type2Desc"), recommended: false },
          ].map((type, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 border ${
                type.recommended
                  ? "bg-teal border-teal-medium/50"
                  : "bg-navy-light border-white/10"
              }`}
            >
              {type.recommended && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-cyan text-navy text-xs font-archivo font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="font-serif text-2xl text-white mb-4">{type.title}</h3>
              <p className="text-white/70 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequirementsSection() {
  const t = useTranslations("companyFormation");

  const reqs = [
    t("req1"),
    t("req2"),
    t("req3"),
    t("req4"),
    t("req5"),
  ];

  return (
    <section className="bg-teal-light py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
              What you need
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
              {t("requirementsTitle")}
            </h2>
            <div className="w-16 h-0.5 bg-teal-medium mb-10" />

            <ul className="space-y-4">
              {reqs.map((req, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal/20 border border-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-navy/75 leading-relaxed">{req}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/andorra-business/600/500"
                alt="Business in Andorra"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-navy/90 backdrop-blur-md rounded-xl p-4 border border-teal-medium/30">
              <p className="text-cyan font-archivo font-bold text-lg">€3,000</p>
              <p className="text-white/70 text-sm">Minimum SL share capital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CompanyFormationPage() {
  const t = useTranslations("companyFormation");

  return (
    <>
      <ServiceHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        ctaText={t("heroCta")}
        imageSeed="andorra-corporate"
      />
      <BenefitsSection />
      <CompanyTypesSection />
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
