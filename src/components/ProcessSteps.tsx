import { useTranslations } from "next-intl";

interface ProcessStepsProps {
  sectionTitle: string;
}

export default function ProcessSteps({ sectionTitle }: ProcessStepsProps) {
  const t = useTranslations("process");

  const steps = [
    { num: "01", title: t("step1Title"), desc: t("step1Desc") },
    { num: "02", title: t("step2Title"), desc: t("step2Desc") },
    { num: "03", title: t("step3Title"), desc: t("step3Desc") },
    { num: "04", title: t("step4Title"), desc: t("step4Desc") },
  ];

  return (
    <section className="bg-navy-light py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">{sectionTitle}</h2>
          <div className="w-16 h-0.5 bg-cyan mx-auto mt-6" />
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-medium/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative z-10 w-24 h-24 rounded-full bg-navy-light border-2 border-teal-medium/40 flex flex-col items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="text-teal-medium text-xs font-archivo font-semibold">{step.num}</span>
                  <span className="text-white text-xs mt-0.5 font-archivo">Step</span>
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
