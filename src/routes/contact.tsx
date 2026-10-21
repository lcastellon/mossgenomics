import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, PageHero, PendingBadge, Section } from "@/components/ui/primitives";
import { submitContact } from "@/lib/contact.functions";
import { useLab } from "@/data/lab";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contacto | Laboratorio 11 — Genómica Funcional de Plantas CIBA-IPN" },
      {
        name: "description",
        content:
          "Contacta al Laboratorio 11 de Genómica Funcional de Plantas del CIBA-IPN en Tlaxcala, México, a cargo del Dr. Miguel Angel Villalobos López.",
      },
      { property: "og:title", content: "Conecta con nosotros | Laboratorio 11 — CIBA-IPN" },
      {
        property: "og:description",
        content: "Tesis, servicio social, posgrado, estancias y colaboración científica.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const copy = {
  es: {
    reasons: [
      "Quiero realizar tesis",
      "Servicio social",
      "Maestría",
      "Doctorado",
      "Estancia",
      "Colaboración científica",
      "Otro",
    ],
    eyebrow: "Contacto",
    title: "Conecta con nosotros",
    labData: "Datos del laboratorio",
    head: "Responsable",
    affiliation: "Adscripción",
    address: "Dirección",
    email: "Correo institucional",
    phone: "Teléfono",
    mapTitle: "Ubicación del CIBA-IPN en Tlaxcala",
    form: "Formulario",
    name: "Nombre",
    namePh: "Tu nombre",
    institution: "Institución",
    institutionPh: "Tu institución",
    mail: "Correo",
    mailPh: "correo@ejemplo.mx",
    reason: "Motivo del contacto",
    select: "Selecciona una opción",
    message: "Mensaje",
    messagePh: "Cuéntanos brevemente tu interés",
    sending: "Enviando...",
    send: "Enviar mensaje",
    success: "Gracias por escribir. Tu mensaje ha sido guardado y lo revisaremos pronto.",
    note: "Tu mensaje se guarda de forma segura en nuestro sistema.",
    genericError: "No se pudo enviar el mensaje.",
    unexpected: "Ocurrió un error inesperado. Intenta de nuevo más tarde.",
  },
  en: {
    reasons: [
      "I want to do a thesis",
      "Social service",
      "Master's",
      "Doctorate",
      "Research stay",
      "Scientific collaboration",
      "Other",
    ],
    eyebrow: "Contact",
    title: "Get in touch",
    labData: "Laboratory details",
    head: "Head",
    affiliation: "Affiliation",
    address: "Address",
    email: "Institutional email",
    phone: "Phone",
    mapTitle: "Location of CIBA-IPN in Tlaxcala",
    form: "Form",
    name: "Name",
    namePh: "Your name",
    institution: "Institution",
    institutionPh: "Your institution",
    mail: "Email",
    mailPh: "email@example.com",
    reason: "Reason for contact",
    select: "Select an option",
    message: "Message",
    messagePh: "Tell us briefly about your interest",
    sending: "Sending...",
    send: "Send message",
    success: "Thank you for writing. Your message has been saved and we will review it soon.",
    note: "Your message is stored securely in our system.",
    genericError: "The message could not be sent.",
    unexpected: "An unexpected error occurred. Please try again later.",
  },
};

const fieldClass =
  "mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-verdant";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const t = useLocalized(copy);
  const lab = useLab();
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const result = await submit({
        data: {
          name: String(formData.get("nombre") ?? ""),
          institution: String(formData.get("institucion") ?? ""),
          email: String(formData.get("correo") ?? ""),
          reason: String(formData.get("motivo") ?? ""),
          message: String(formData.get("mensaje") ?? ""),
        },
      });

      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || t.genericError);
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(t.unexpected);
    }
  };

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lede={`${lab.number} — ${lab.name}`}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>{t.labData}</Eyebrow>
            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="eyebrow">{t.head}</dt>
                <dd className="mt-1.5 font-display text-lg">{lab.lead.name}</dd>
              </div>
              <div>
                <dt className="eyebrow">{t.affiliation}</dt>
                <dd className="mt-1.5 leading-relaxed text-foreground/80">
                  {lab.center}
                  <br />
                  {lab.institution}
                  <br />
                  {lab.location}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">{t.address}</dt>
                <dd className="mt-1.5 flex flex-wrap items-center gap-3 text-foreground/70">
                  {lab.contact.address} <PendingBadge />
                </dd>
              </div>
              <div>
                <dt className="eyebrow">{t.email}</dt>
                <dd className="mt-1.5 flex flex-wrap items-center gap-3 text-foreground/70">
                  {lab.contact.email} <PendingBadge />
                </dd>
              </div>
              <div>
                <dt className="eyebrow">{t.phone}</dt>
                <dd className="mt-1.5 flex flex-wrap items-center gap-3 text-foreground/70">
                  {lab.contact.phone} <PendingBadge />
                </dd>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden rounded-sm border border-border">
              <iframe
                title={t.mapTitle}
                src={`https://www.google.com/maps?q=${encodeURIComponent(lab.contact.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>{t.form}</Eyebrow>
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="eyebrow">{t.name}</span>
                  <input required name="nombre" className={fieldClass} placeholder={t.namePh} />
                </label>
                <label className="block text-sm">
                  <span className="eyebrow">{t.institution}</span>
                  <input name="institucion" className={fieldClass} placeholder={t.institutionPh} />
                </label>
              </div>
              <label className="block text-sm">
                <span className="eyebrow">{t.mail}</span>
                <input
                  required
                  type="email"
                  name="correo"
                  className={fieldClass}
                  placeholder={t.mailPh}
                />
              </label>
              <label className="block text-sm">
                <span className="eyebrow">{t.reason}</span>
                <select required name="motivo" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    {t.select}
                  </option>
                  {t.reasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="eyebrow">{t.message}</span>
                <textarea
                  required
                  name="mensaje"
                  rows={6}
                  className={fieldClass}
                  placeholder={t.messagePh}
                />
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? t.sending : t.send}
              </button>

              {status === "success" && (
                <p className="text-sm text-verdant">
                  {t.success}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">{errorMessage}</p>
              )}
              {status === "idle" && (
                <p className="text-xs text-muted-foreground">
                  {t.note}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
