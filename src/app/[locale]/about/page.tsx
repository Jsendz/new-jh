import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About JH Corporate",
  description:
    "Learn about JH Corporate, the Andorran residency and company formation specialists. Our mission, values, and expert team.",
};

function HeroSection() {
  const t = useTranslations("about");

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy pt-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/andorra-valley/1400/800"
          alt="Andorra valley"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-medium/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal/30 border border-teal-medium/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-cyan text-xs font-medium font-archivo uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            {t("heroTitle")}
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
            {t("heroSubtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const t = useTranslations("about");

  return (
    <section className="bg-teal-light py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
              Purpose
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">{t("missionTitle")}</h2>
            <div className="w-16 h-0.5 bg-teal-medium mb-8" />
            <p className="text-navy/70 text-lg leading-relaxed">
              {t("missionText")}
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/andorra-team/600/450"
                alt="JH Corporate team"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const t = useTranslations("about");

  const values = [
    {
      icon: "🔍",
      title: t("value1Title"),
      desc: t("value1Desc"),
    },
    {
      icon: "🎯",
      title: t("value2Title"),
      desc: t("value2Desc"),
    },
    {
      icon: "🤝",
      title: t("value3Title"),
      desc: t("value3Desc"),
    },
    {
      icon: "✅",
      title: t("value4Title"),
      desc: t("value4Desc"),
    },
  ];

  return (
    <section className="bg-navy py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
            What Drives Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">{t("valuesTitle")}</h2>
          <div className="w-16 h-0.5 bg-cyan mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <div key={i} className="bg-navy-light rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-5">{value.icon}</div>
              <h3 className="font-serif text-xl text-white mb-3">{value.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const t = useTranslations("about");

  const team = [
    {
      name: "James H.",
      role: "Founder & Managing Director",
      image: "https://picsum.photos/seed/person1/300/300",
      bio: "10+ years of experience in Andorran corporate law and residency processes.",
    },
    {
      name: "María C.",
      role: "Head of Residency Applications",
      image: "https://picsum.photos/seed/person2/300/300",
      bio: "Specialist in passive and active residency, with hundreds of successful applications.",
    },
    {
      name: "Pierre D.",
      role: "Company Formation Specialist",
      image: "https://picsum.photos/seed/person3/300/300",
      bio: "Expert in Andorran commercial law and cross-border corporate structures.",
    },
  ];

  return (
    <section className="bg-teal-light py-24">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-teal-medium font-archivo font-semibold text-sm uppercase tracking-wider mb-3">
            The Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">{t("teamTitle")}</h2>
          <div className="w-16 h-0.5 bg-teal-medium mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-navy/10 hover:shadow-xl transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy mb-1">{member.name}</h3>
                <p className="text-teal-medium text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-navy/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "500+", label: "Clients Helped" },
    { value: "10+", label: "Years in Andorra" },
    { value: "98%", label: "Approval Rate" },
    { value: "4", label: "Languages Spoken" },
  ];

  return (
    <section className="bg-teal py-16">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-archivo font-bold text-4xl text-cyan mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CtaBanner
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
        buttonText={t("ctaButton")}
      />
    </>
  );
}
