import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLink,
  DataRow,
  PageHero,
  PendingBadge,
  Section,
} from "@/components/ui/primitives";
import { projects, useProjects } from "@/data/projects";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/projects/$slug")({
  staticData: { sitemap: false },
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Proyecto no disponible | Laboratorio 11" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} | Proyectos — Laboratorio 11 CIBA-IPN` },
        { name: "description", content: project.question },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.question },
        { property: "og:url", content: `/projects/${project.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: ProjectNotFound,
});

const copy = {
  es: {
    notFound: "Proyecto no encontrado",
    all: "Ver todos los proyectos",
    prefix: "Proyecto",
    badge: "Ficha de demostración",
    description: "Descripción",
    organism: "Organismo",
    genes: "Genes estudiados",
    methodology: "Metodología",
    researchers: "Investigadores",
    students: "Estudiantes",
    funding: "Financiamiento",
    period: "Periodo",
    publications: "Publicaciones relacionadas",
    noPublications: "[Pendiente] Sin registros asociados por el momento.",
    status: "Estado",
    back: "Volver a proyectos",
  },
  en: {
    notFound: "Project not found",
    all: "See all projects",
    prefix: "Project",
    badge: "Demonstration record",
    description: "Description",
    organism: "Organism",
    genes: "Genes studied",
    methodology: "Methodology",
    researchers: "Researchers",
    students: "Students",
    funding: "Funding",
    period: "Period",
    publications: "Related publications",
    noPublications: "[Pending] No associated records at this time.",
    status: "Status",
    back: "Back to projects",
  },
};

function ProjectNotFound() {
  const t = useLocalized(copy);
  return (
    <Section>
      <h1 className="text-3xl">{t.notFound}</h1>
      <div className="mt-6">
        <ArrowLink to="/projects">{t.all}</ArrowLink>
      </div>
    </Section>
  );
}

function ProjectDetail() {
  const { project: fallback } = Route.useLoaderData();
  const t = useLocalized(copy);
  const localizedProjects = useProjects();
  const project = localizedProjects.find((p) => p.slug === fallback.slug) ?? fallback;

  return (
    <>
      <PageHero
        eyebrow={`${t.prefix} · ${project.status}`}
        title={project.title}
        lede={project.question}
      >
        {project.placeholder ? (
          <div className="mt-8">
            <PendingBadge label={t.badge} />
          </div>
        ) : null}
      </PageHero>

      <Section>
        <dl className="max-w-4xl">
          <DataRow label={t.description} value={project.description} />
          <DataRow label={t.organism} value={<span className="species">{project.organism}</span>} />
          <DataRow label={t.genes} value={project.genes} />
          <DataRow label={t.methodology} value={project.methodology.join(" · ")} />
          <DataRow label={t.researchers} value={project.researchers.join(" · ")} />
          <DataRow label={t.students} value={project.students.join(" · ")} />
          <DataRow label={t.funding} value={project.funding} />
          <DataRow label={t.period} value={project.period} />
          <DataRow
            label={t.publications}
            value={
              project.publications.length ? project.publications.join(" · ") : t.noPublications
            }
          />
          <DataRow label={t.status} value={project.status} />
        </dl>
        <div className="mt-12">
          <ArrowLink to="/projects">{t.back}</ArrowLink>
        </div>
      </Section>
    </>
  );
}
