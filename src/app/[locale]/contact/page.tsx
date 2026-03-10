import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact JH Corporate for expert advice on Andorran residency and company formation. Book your free consultation today.",
};

function ContactHero() {
  const t = useTranslations("contact");
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-navy pt-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/andorra-contact/1400/700"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
      </div>
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-teal-medium/15 rounded-full blur-3xl pointer-events-none" />
      <div className="container-max relative z-10 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-teal/30 border border-teal-medium/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan" />
            <span className="text-cyan text-xs font-medium font-archivo uppercase tracking-wider">Get in Touch</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">{t("heroTitle")}</h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">{t("heroSubtitle")}</p>
        </div>
      </div>
    </section>
  );
}

function ContactMain() {
  const t = useTranslations("contact");
  return (
    <section className="bg-teal-light py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-navy/10 shadow-sm">
              <h2 className="font-serif text-3xl text-navy mb-8">{t("formTitle")}</h2>
              <ContactForm />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-navy/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">{t("whatsappTitle")}</h3>
              <p className="text-navy/60 text-sm mb-4 leading-relaxed">{t("whatsappDesc")}</p>
              <a href="https://wa.me/376000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm w-full justify-center">
                {t("whatsappButton")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-serif text-xl text-navy mb-2">{t("phoneTitle")}</h3>
              <p className="text-navy/60 text-sm mb-1">{t("phoneDesc")}</p>
              <a href="tel:+376000000" className="text-teal font-semibold text-lg hover:text-teal-medium transition-colors block mb-2">+376 000 000</a>
              <p className="text-navy/40 text-xs">{t("officeHours")}</p>
            </div>
            <div className="bg-navy rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-serif text-xl text-white mb-2">Our Office</h3>
              <p className="text-white/60 text-sm leading-relaxed">Carrer Example 1<br />AD500 Andorra la Vella<br />Principality of Andorra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
    </>
  );
}
