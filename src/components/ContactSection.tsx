import { useEffect, useState } from "react";

import { PaperPlaneIconAlt, PaperTrail } from "./icons";
import SectionTitleSmall from "./sectionTitleSmall";

const grainTextureDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.22'/%3E%3C/svg%3E";

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
      setContactStatus("error");
      setContactError(
        "Endpoint Formspree manquant. Ajoutez VITE_FORMSPREE_ENDPOINT.",
      );
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
      className="mx-auto mt-28 max-w-6xl px-6 pt-6 max-[650px]:mt-16 max-[650px]:px-[14px] max-[400px]:px-0"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-[#fff5f7] via-white to-[#f5f8ff] p-[1px] shadow-[0_40px_80px_-50px_rgba(15,23,42,0.18)] max-[400px]:rounded-none max-[400px]:border-none">
        <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[220px]" />
        <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,230,240,0.95)_0%,rgba(255,200,215,0.45)_52%,rgba(255,255,255,0)_78%)]" />
        <div
          className="opacity-28 pointer-events-none absolute left-1/2 top-[-200px] h-[360px] w-[360px] -translate-x-1/2 rounded-full mix-blend-soft-light"
          style={{ backgroundImage: `url(${grainTextureDataUrl})` }}
        />
        <div className="bg-white/92 relative rounded-[42px] p-14 backdrop-blur-lg max-md:p-10 max-sm:px-5">
          <div
            className="absolute inset-x-10 -top-24 h-48 rounded-full bg-rose-500/10 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-sm">
              <SectionTitleSmall>Prennons contact</SectionTitleSmall>
            </div>
            <div className="relative mt-[30px] flex flex-col items-center gap-[10px]">
              <h2 className="relative text-[clamp(2.2rem,3vw,3.2rem)] font-semibold text-slate-900 max-[450px]:text-[30px]">
                Ouvert aux échanges
                <span className="pointer-events-none absolute -top-8 right-[calc(-7rem)] hidden h-11 w-11 origin-top-right rotate-[8deg] md:block">
                  <PaperTrail className="absolute right-[22px] top-[2px] h-[80px] w-[190px]" />
                  <PaperPlaneIconAlt className="absolute right-0 top-[-20px] h-10 w-10 text-[#111827]" />
                </span>
              </h2>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-600">
                Laissez-moi un message, je vous réponds rapidement.
              </p>
            </div>
          </div>

          <form
            className="relative mx-auto mt-14 grid max-w-3xl gap-6 text-left md:grid-cols-2"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="md:col-span-1">
              <label
                htmlFor="contact-name"
                className="text-sm font-semibold tracking-[0.08em] text-slate-900"
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
                className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300/40"
              />
            </div>
            <div className="md:col-span-1">
              <label
                htmlFor="contact-email"
                className="text-sm font-semibold tracking-[0.08em] text-slate-900"
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
                className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300/40"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="contact-subject"
                className="text-sm font-semibold tracking-[0.08em] text-slate-900"
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
                className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300/40"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="contact-message"
                className="text-sm font-semibold tracking-[0.08em] text-slate-900"
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
                className="mt-2 max-h-[300px] min-h-[80px] w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] outline-none transition focus:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-300/40"
              />
            </div>
            {contactError && (
              <p
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 md:col-span-2"
                role="alert"
              >
                {contactError}
              </p>
            )}
            {contactStatus === "success" && (
              <p
                className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 md:col-span-2"
                role="status"
              >
                Merci pour votre message ! Je vous réponds très vite.
              </p>
            )}
            {!formEndpoint && (
              <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600 md:col-span-2">
                Configurez
                <code className="rounded bg-slate-100 px-1 py-0.5 text-slate-700">
                  VITE_FORMSPREE_ENDPOINT
                </code>
                pour activer l'envoi via Formspree.
              </p>
            )}
            <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={contactStatus === "sending" || !formEndpoint}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-8 py-3 text-sm font-semibold tracking-[0.16em] text-slate-900 shadow-[0_14px_28px_-24px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-400 disabled:shadow-none"
              >
                {contactStatus === "sending" ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
