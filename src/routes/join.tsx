import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ActionLink, Eyebrow, PageHero, Section } from "@/components/ui/primitives";
import { lab } from "@/data/lab";

export const Route = createFileRoute("/join")({
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

const areas = [
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
];

function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Formación"
        title="Haz ciencia con nosotros"
        lede={`El ${lab.number} participa en la formación de estudiantes interesados en genómica funcional, biología molecular, fisiología vegetal, biotecnología y edición genética.`}
      />

      <Section>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {areas.map((a, i) => (
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
            Cuéntanos qué te interesa investigar y en qué etapa de tu formación te encuentras.
          </p>
          <ActionLink to="/contact" tone="onDark">
            Quiero integrarme al laboratorio
          </ActionLink>
        </Reveal>
      </Section>
    </>
  );
}
