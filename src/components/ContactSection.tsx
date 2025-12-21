import { useEffect, useState } from "react";

import SectionTitleSmall from "./sectionTitleSmall";
import SectionTitleBig from "./sectionTitleBig";

export type ContactSectionProps = {
  onSuccess?: () => void;
};

export default function ContactSection({ onSuccess }: ContactSectionProps) {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [contactError, setContactError] = useState<string | null>(null);
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "";
  const fallbackEmail = "contact@samuelprigent.com";

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      contactStatus !== "success" &&
      contactStatus !== "error" &&
      !contactError
    ) {
      return;
    }

    const hideTimeout = window.setTimeout(() => {
      setContactStatus((status) =>
        status === "success" || status === "error" ? "idle" : status,
      );
      setContactError(null);
    }, 7000);

    return () => window.clearTimeout(hideTimeout);
  }, [contactStatus, contactError]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !contactForm.name ||
      !contactForm.email ||
      !contactForm.subject ||
      !contactForm.message
    ) {
      setContactStatus("error");
      setContactError("Merci de renseigner tous les champs requis.");
      return;
    }

    if (!formEndpoint) {
      const mailSubject = `Portfolio - ${contactForm.subject}`;
      const mailBody = `Nom: ${contactForm.name}\nEmail: ${contactForm.email}\n\n${contactForm.message}`;
      const mailto = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
        mailSubject,
      )}&body=${encodeURIComponent(mailBody)}`;

      setContactStatus("success");
      setContactForm({ name: "", email: "", subject: "", message: "" });
      onSuccess?.();
      window.location.href = mailto;
      return;
    }

    try {
      setContactStatus("sending");
      setContactError(null);

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          subject: `Portfolio message - ${contactForm.subject}`,
          rawSubject: contactForm.subject,
          message: contactForm.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          (data && (data.error || data.message)) ||
          "Une erreur est survenue lors de l'envoi.";
        setContactStatus("error");
        setContactError(message);
        return;
      }

      setContactStatus("success");
      setContactForm({ name: "", email: "", subject: "", message: "" });
      onSuccess?.();
    } catch (error) {
      console.error(error);
      setContactStatus("error");
      setContactError(
        "Impossible d'envoyer le message. Merci de réessayer plus tard.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto mb-3 mt-16 max-w-6xl px-6 pt-20 max-[650px]:mt-16 max-[650px]:px-[14px]"
    >
      <div className="text-left">
        <SectionTitleSmall>Contact</SectionTitleSmall>
        <SectionTitleBig>Ouvert aux échanges</SectionTitleBig>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">
          Laissez-moi un message, je vous réponds rapidement.
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-lg border border-gray-100 bg-white/90 p-10 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.25)] max-md:p-8 max-sm:p-5">
        <form
          className="relative grid gap-6 text-left md:grid-cols-2"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="md:col-span-1">
            <label
              htmlFor="contact-name"
              className="text-sm font-semibold text-slate-900"
            >
              Nom complet
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={contactForm.name}
              onChange={handleChange}
              type="text"
              placeholder="Entrez votre nom"
              required
              className="mt-2 w-full rounded-lg border border-slate-200/80 bg-white/80 px-3 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300/40"
            />
          </div>
          <div className="md:col-span-1">
            <label
              htmlFor="contact-email"
              className="text-sm font-semibold  text-slate-900"
            >
              Votre email
            </label>
            <input
              id="contact-email"
              name="email"
              autoComplete="email"
              value={contactForm.email}
              onChange={handleChange}
              type="email"
              placeholder="exemple@domaine.com"
              required
              className="mt-2 w-full rounded-lg border border-slate-200/80 bg-white/80 px-3 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300/40"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="contact-subject"
              className="text-sm font-semibold  text-slate-900"
            >
              Sujet
            </label>
            <input
              id="contact-subject"
              name="subject"
              value={contactForm.subject}
              onChange={handleChange}
              type="text"
              placeholder="Sujet du message"
              required
              className="mt-2 w-full rounded-lg border border-slate-200/80 bg-white/80 px-3 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300/40"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="contact-message"
              className="text-sm font-semibold  text-slate-900"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={contactForm.message}
              onChange={handleChange}
              rows={6}
              placeholder="Entrez un message"
              required
              className="mt-2 max-h-[300px] min-h-[80px] w-full rounded-lg border border-slate-200/80 bg-white/80 px-3 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300/40"
            />
          </div>
          {contactError && (
            <p
              className="rounded-lg text-sm text-red-600 md:col-span-2"
              role="alert"
            >
              {contactError}
            </p>
          )}
          {contactStatus === "success" && (
            <p
              className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 md:col-span-2"
              role="status"
            >
              Merci pour votre message ! Je vous réponds très vite.
            </p>
          )}
          <div className="relative flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              disabled={contactStatus === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-[0_14px_28px_-24px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-400 disabled:shadow-none"
            >
              {contactStatus === "sending"
                ? "Envoi..."
                : formEndpoint
                  ? "Envoyer"
                  : "Envoyer par email"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
