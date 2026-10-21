import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ActionLink, Eyebrow, PageHero, Section } from "@/components/ui/primitives";
import { useLab } from "@/data/lab";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/join")({
  staticData: { sitemap: true },
  component: JoinPage,
  head: () => ({
    meta: [
      { title: "Formación de estudiantes | Laboratorio 11 — CIBA-IPN" },
      {
        name: "description",
        content:
          "El Laboratorio 11 del CIBA-IPN forma estudiantes de licenciatura y posgrado en genómica funcional, biología molecular, fisiología vegetal, biotecnología y edición genética.",
      },
      { property: "og:title", content: "Haz ciencia con nosotros | Laboratorio 11" },
      {
        property: "og:description",
        content: "Servicio social, tesis, estancias, maestría, doctorado y colaboraciones académicas.",
      },
      { property: "og:url", content: "/join" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
});

const copy = {
  es: {
    eyebrow: "Formación",
    title: "Haz ciencia con nosotros",
    lede: (labNumber: string) =>
      `El ${labNumber} participa en la formación de estudiantes interesados en genómica funcional, biología molecular, fisiología vegetal, biotecnología y edición genética.`,
    areas: [
      {
        title: "Licenciatura",
        items: ["Servicio social", "Estancias", "Proyectos de investigación", "Tesis"],
      },
      {
        title: "Posgrado",
        items: ["Maestría", "Doctorado", "Estancias de investigación"],
      },
      {
        title: "Colaboración",
        items: [
          "Colaboraciones académicas",
          "Proyectos conjuntos",
          "Intercambio de estudiantes",
          "Estancias científicas",
        ],
      },
    ],
    ctaText:
      "Cuéntanos qué te interesa investigar y en qué etapa de tu formación te encuentras.",
    ctaLink: "Quiero integrarme al laboratorio",
  },
  en: {
    eyebrow: "Training",
    title: "Do science with us",
    lede: (labNumber: string) =>
      `${labNumber} takes part in training students interested in functional genomics, molecular biology, plant physiology, biotechnology and gene editing.`,
    areas: [
      {
        title: "Undergraduate",
        items: ["Social service", "Research stays", "Research projects", "Thesis"],
      },
      {
        title: "Graduate",
        items: ["Master's", "Doctorate", "Research stays"],
      },
      {
        title: "Collaboration",
        items: [
          "Academic collaborations",
          "Joint projects",
          "Student exchange",
          "Scientific stays",
        ],
      },
    ],
    ctaText: "Tell us what you would like to research and where you are in your training.",
    ctaLink: "I want to join the laboratory",
  },
};

function JoinPage() {
  const t = useLocalized(copy);
  const lab = useLab();

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede(lab.number)} />

      <Section>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {t.areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 90} className="bg-background">
              <article className="flex h-full flex-col p-8 md:p-10">
                <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                <h2 className="mt-4 text-2xl md:text-3xl">{a.title}</h2>
                <ul className="mt-6 space-y-3">
                  {a.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-verdant" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="max-w-2xl text-2xl leading-snug text-primary-foreground md:text-3xl">
            {t.ctaText}
          </p>
          <ActionLink to="/contact" tone="onDark">
            {t.ctaLink}
          </ActionLink>
        </Reveal>
      </Section>
    </>
  );
}
