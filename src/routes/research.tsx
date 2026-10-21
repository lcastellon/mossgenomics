import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  ActionLink,
  Eyebrow,
  PageHero,
  Section,
  SectionTitle,
  Sp,
} from "@/components/ui/primitives";
import { useLab } from "@/data/lab";
import { useGeneToPhenotype, useResearchAreas } from "@/data/researchAreas";
import { useLocalized } from "@/lib/i18n";
import { italicizeSpecies } from "@/lib/italicize-species";

export const Route = createFileRoute("/research")({
  staticData: { sitemap: true },
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: "Investigación | Laboratorio 11 — Genómica Funcional de Plantas" },
      {
        name: "description",
        content:
          "Líneas de investigación del Laboratorio 11 del CIBA-IPN: genómica funcional, respuesta a estrés abiótico, regulación de la expresión génica y edición genómica.",
      },
      { property: "og:title", content: "Investigación | Laboratorio 11 — CIBA-IPN" },
      {
        property: "og:description",
        content:
          "Cómo las plantas perciben, responden y se adaptan a su ambiente: cuatro líneas de investigación del Laboratorio 11.",
      },
      { property: "og:url", content: "/research" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
});

const copy = {
  es: {
    eyebrow: "Nuestra investigación",
    title: "Comprender cómo las plantas perciben, responden y se adaptan a su ambiente",
    ledeBefore: (labNumber: string) =>
      `El ${labNumber} estudia los mecanismos moleculares de la adaptación vegetal, con el musgo mexicano `,
    ledeAfter: " como principal modelo de estudio.",
    workflow: "Flujo de trabajo",
    workflowTitle: "Del gen al fenotipo",
    methodsTitle: "Metodologías y proyectos",
    technologies: "Cómo estudiamos la función de los genes",
    projects: "Proyectos de investigación",
  },
  en: {
    eyebrow: "Our research",
    title: "Understanding how plants sense, respond and adapt to their environment",
    ledeBefore: (labNumber: string) =>
      `${labNumber} studies the molecular mechanisms of plant adaptation, using the Mexican moss `,
    ledeAfter: " as its main study model.",
    workflow: "Workflow",
    workflowTitle: "From gene to phenotype",
    methodsTitle: "Methods and projects",
    technologies: "How we study gene function",
    projects: "Research projects",
  },
};

function ResearchPage() {
  const t = useLocalized(copy);
  const lab = useLab();
  const researchAreas = useResearchAreas();
  const geneToPhenotype = useGeneToPhenotype();

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lede={
          <>
            {t.ledeBefore(lab.number)}
            <Sp>Pseudocrossidium replicatum</Sp>
            {t.ledeAfter}
          </>
        }
      />

      <Section>
        <div className="grid gap-px bg-border">
          {researchAreas.map((area, i) => (
            <Reveal key={area.id} delay={i * 70} className="bg-background">
              <article className="grid gap-6 py-12 md:grid-cols-[120px_1fr_240px] md:gap-10">
                <span className="font-mono text-xs tracking-[0.2em] text-verdant">
                  {area.index}
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl">{area.title}</h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    {italicizeSpecies(area.summary)}
                  </p>
                </div>
                <ul className="space-y-1.5 md:text-right">
                  {area.keywords.map((k) => (
                    <li
                      key={k}
                      className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground"
                    >
                      {k}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <Reveal className="max-w-3xl">
          <Eyebrow className="text-primary-foreground/50">{t.workflow}</Eyebrow>
          <SectionTitle className="text-primary-foreground">{t.workflowTitle}</SectionTitle>
        </Reveal>
        <ol className="mt-14 grid gap-px bg-primary-foreground/15 md:grid-cols-6">
          {geneToPhenotype.map((s, i) => (
            <Reveal key={s.step} delay={i * 70} className="bg-primary">
              <li className="flex h-full flex-col gap-3 p-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-sprout">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg leading-tight text-primary-foreground">
                  {s.step}
                </span>
                <span className="text-xs leading-relaxed text-primary-foreground/55">
                  {s.note}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="paper" className="border-t border-border">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <SectionTitle className="mt-0">{t.methodsTitle}</SectionTitle>
          <div className="flex flex-wrap gap-3">
            <ActionLink to="/technologies" tone="outline">
              {t.technologies}
            </ActionLink>
            <ActionLink to="/projects">{t.projects}</ActionLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
