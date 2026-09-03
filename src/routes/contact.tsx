import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, PageHero, PendingBadge, Section } from "@/components/ui/primitives";
import { submitContact } from "@/lib/contact.functions";
import { lab } from "@/data/lab";

export const Route = createFileRoute("/contact")({
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

const reasons = [
  "Quiero realizar tesis",
  "Servicio social",
  "Maestría",
  "Doctorado",
  "Estancia",
  "Colaboración científica",
  "Otro",
];

const fieldClass =
  "mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-verdant";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Conecta con nosotros"
        lede={`${lab.number} — ${lab.name}`}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Datos del laboratorio</Eyebrow>
            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className="eyebrow">Responsable</dt>
                <dd className="mt-1.5 font-display text-lg">{lab.lead.name}</dd>
              </div>
              <div>
                <dt className="eyebrow">Adscripción</dt>
                <dd className="mt-1.5 leading-relaxed text-foreground/80">
                  {lab.center}
                  <br />
                  {lab.institution}
                  <br />
                  {lab.location}
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Dirección</dt>
                <dd className="mt-1.5 flex flex-wrap items-center gap-3 text-foreground/70">
                  {lab.contact.address} <PendingBadge />
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Correo institucional</dt>
                <dd className="mt-1.5 flex flex-wrap items-center gap-3 text-foreground/70">
                  {lab.contact.email} <PendingBadge />
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Teléfono</dt>
                <dd className="mt-1.5 flex flex-wrap items-center gap-3 text-foreground/70">
                  {lab.contact.phone} <PendingBadge />
                </dd>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Ubicación del CIBA-IPN en Tlaxcala"
                src={`https://www.google.com/maps?q=${encodeURIComponent(lab.contact.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Formulario</Eyebrow>
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="eyebrow">Nombre</span>
                  <input required name="nombre" className={fieldClass} placeholder="Tu nombre" />
                </label>
                <label className="block text-sm">
                  <span className="eyebrow">Institución</span>
                  <input name="institucion" className={fieldClass} placeholder="Tu institución" />
                </label>
              </div>
              <label className="block text-sm">
                <span className="eyebrow">Correo</span>
                <input
                  required
                  type="email"
                  name="correo"
                  className={fieldClass}
                  placeholder="correo@ejemplo.mx"
                />
              </label>
              <label className="block text-sm">
                <span className="eyebrow">Motivo del contacto</span>
                <select required name="motivo" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {reasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="eyebrow">Mensaje</span>
                <textarea
                  required
                  name="mensaje"
                  rows={6}
                  className={fieldClass}
                  placeholder="Cuéntanos brevemente tu interés"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Enviar mensaje
              </button>

              {sent ? (
                <p className="text-sm text-verdant">
                  Gracias por escribir. El envío de correos aún no está conectado: se habilitará
                  junto con el correo institucional del laboratorio.
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">
                  El formulario todavía no envía correos. Se conectará cuando se confirme el
                  correo institucional del laboratorio.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
