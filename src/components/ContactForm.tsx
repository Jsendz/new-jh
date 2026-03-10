"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-navy mb-2">Message Sent!</h3>
        <p className="text-navy/60">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-navy font-medium text-sm mb-2">
            {t("nameLabel")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t("namePlaceholder")}
            className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-teal-medium/40 focus:border-teal-medium transition-colors bg-white placeholder:text-navy/30"
          />
        </div>

        <div>
          <label className="block text-navy font-medium text-sm mb-2">
            {t("emailLabel")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t("emailPlaceholder")}
            className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-teal-medium/40 focus:border-teal-medium transition-colors bg-white placeholder:text-navy/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-navy font-medium text-sm mb-2">{t("phoneLabel")}</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("phonePlaceholder")}
            className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-teal-medium/40 focus:border-teal-medium transition-colors bg-white placeholder:text-navy/30"
          />
        </div>

        <div>
          <label className="block text-navy font-medium text-sm mb-2">{t("serviceLabel")}</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-teal-medium/40 focus:border-teal-medium transition-colors bg-white"
          >
            <option value="">{t("servicePlaceholder")}</option>
            <option value="passive">{t("service1")}</option>
            <option value="active">{t("service2")}</option>
            <option value="company">{t("service3")}</option>
            <option value="other">{t("service4")}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-navy font-medium text-sm mb-2">
          {t("messageLabel")} <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={t("messagePlaceholder")}
          className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-teal-medium/40 focus:border-teal-medium transition-colors bg-white placeholder:text-navy/30 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full btn-secondary justify-center py-4 text-base"
      >
        {t("submitButton")}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
    </form>
  );
}
