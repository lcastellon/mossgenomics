import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, PendingBadge, Section } from "@/components/ui/primitives";
import { useTechniqueGroups, useTechniques } from "@/data/techniques";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/technologies")({
  component: TechnologiesPage,
  head: () => ({
    meta: [
      { title: "Tecnologías y metodologías | Laboratorio 11 — CIBA-IPN" },
      {
        name: "description",
        content:
          "Metodologías de trabajo del Laboratorio 11 del CIBA-IPN: cultivo in vitro, extracción de ácidos nucleicos, qPCR, análisis de expresión génica, edición genómica CRISPR-Cas, bioinformática y microscopía.",
      },
      { property: "og:title", content: "Cómo estudiamos la función de los genes" },
      {
        property: "og:description",
        content: "Capacidades experimentales del Laboratorio 11 de Genómica Funcional de Plantas.",
      },
      { property: "og:url", content: "/technologies" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
});

const copy = {
  es: {
    eyebrow: "Tecnologías y metodologías",
    title: "Cómo estudiamos la función de los genes",
    lede: "Listado editable de aproximaciones experimentales. Las capacidades se marcarán como confirmadas una vez validadas por el laboratorio.",
    badge: "Disponibilidad por confirmar",
    confirmed: "Confirmada",
    pending: "Por confirmar",
  },
  en: {
    eyebrow: "Technologies and methods",
    title: "How we study gene function",
    lede: "Editable list of experimental approaches. Capabilities will be marked as confirmed once validated by the laboratory.",
    badge: "Availability to be confirmed",
    confirmed: "Confirmed",
    pending: "To be confirmed",
  },
};

function TechnologiesPage() {
  const t = useLocalized(copy);
  const techniqueGroups = useTechniqueGroups();
  const techniques = useTechniques();

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede}>
        <div className="mt-8">
          <PendingBadge label={t.badge} />
        </div>
      </PageHero>

      <Section>
        {techniqueGroups.map((group) => (
          <Reveal key={group} className="rule-top py-10 first:border-t-0 first:pt-0">
            <div className="grid gap-8 md:grid-cols-[220px_1fr]">
              <h2 className="font-display text-xl">{group}</h2>
              <ul className="grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-3">
                {techniques
                  .filter((tech) => tech.group === group)
                  .map((tech) => (
                    <li key={tech.id} className="bg-background p-5">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-medium">{tech.name}</p>
                        <span
                          className={
                            tech.confirmed
                              ? "mt-1 size-1.5 shrink-0 rounded-full bg-verdant"
                              : "mt-1 size-1.5 shrink-0 rounded-full bg-border"
                          }
                          aria-hidden
                        />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {tech.note}
                      </p>
                      <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
                        {tech.confirmed ? t.confirmed : t.pending}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </Section>
    </>
  );
}
