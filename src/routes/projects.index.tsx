import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, PageHero, PendingBadge, Section } from "@/components/ui/primitives";
import { useProjects } from "@/data/projects";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/projects/")({
  staticData: { sitemap: true },
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Proyectos de investigación | Laboratorio 11 — CIBA-IPN" },
      {
        name: "description",
        content:
          "Proyectos de investigación del Laboratorio 11 de Genómica Funcional de Plantas del CIBA-IPN, con el musgo Pseudocrossidium replicatum como modelo de estudio.",
      },
      { property: "og:title", content: "Proyectos de investigación | Laboratorio 11" },
      {
        property: "og:description",
        content: "Estructura de proyectos del Laboratorio 11 de Genómica Funcional de Plantas.",
      },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const copy = {
  es: {
    eyebrow: "Proyectos",
    title: "Proyectos de investigación",
    lede: "Cada ficha reúne la pregunta de investigación, el organismo de estudio, la metodología, el equipo participante y el estado del proyecto.",
    badge: "Fichas de demostración",
    cta: "Ver ficha del proyecto",
    organism: "Organismo",
    period: "Periodo",
    funding: "Financiamiento",
  },
  en: {
    eyebrow: "Projects",
    title: "Research projects",
    lede: "Each record brings together the research question, study organism, methodology, participating team and project status.",
    badge: "Demonstration records",
    cta: "View project record",
    organism: "Organism",
    period: "Period",
    funding: "Funding",
  },
};

function ProjectsPage() {
  const t = useLocalized(copy);
  const projects = useProjects();
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede}>
        <div className="mt-8">
          <PendingBadge label={t.badge} />
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-px bg-border">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="bg-background">
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group grid gap-6 py-12 transition-opacity md:grid-cols-[1.4fr_1fr] md:gap-12"
              >
                <div>
                  <Eyebrow>{p.status}</Eyebrow>
                  <h2 className="mt-4 text-2xl leading-snug md:text-4xl">{p.title}</h2>
                  <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                    {p.question}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 border-b border-primary/25 pb-1 text-sm text-primary">
                    {t.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
                <dl className="space-y-3 text-sm md:pt-12">
                  <div>
                    <dt className="eyebrow">{t.organism}</dt>
                    <dd className="species mt-1 text-foreground/85">{p.organism}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">{t.period}</dt>
                    <dd className="mt-1 text-foreground/70">{p.period}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">{t.funding}</dt>
                    <dd className="mt-1 text-foreground/70">{p.funding}</dd>
                  </div>
                </dl>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
