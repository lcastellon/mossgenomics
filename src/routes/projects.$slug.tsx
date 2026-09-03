import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLink,
  DataRow,
  PageHero,
  PendingBadge,
  Section,
} from "@/components/ui/primitives";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
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

function ProjectNotFound() {
  return (
    <Section>
      <h1 className="text-3xl">Proyecto no encontrado</h1>
      <div className="mt-6">
        <ArrowLink to="/projects">Ver todos los proyectos</ArrowLink>
      </div>
    </Section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={`Proyecto · ${project.status}`} title={project.title} lede={project.question}>
        {project.placeholder ? (
          <div className="mt-8">
            <PendingBadge label="Ficha de demostración" />
          </div>
        ) : null}
      </PageHero>

      <Section>
        <dl className="max-w-4xl">
          <DataRow label="Descripción" value={project.description} />
          <DataRow label="Organismo" value={<span className="species">{project.organism}</span>} />
          <DataRow label="Genes estudiados" value={project.genes} />
          <DataRow label="Metodología" value={project.methodology.join(" · ")} />
          <DataRow label="Investigadores" value={project.researchers.join(" · ")} />
          <DataRow label="Estudiantes" value={project.students.join(" · ")} />
          <DataRow label="Financiamiento" value={project.funding} />
          <DataRow label="Periodo" value={project.period} />
          <DataRow
            label="Publicaciones relacionadas"
            value={
              project.publications.length
                ? project.publications.join(" · ")
                : "[Pendiente] Sin registros asociados por el momento."
            }
          />
          <DataRow label="Estado" value={project.status} />
        </dl>
        <div className="mt-12">
          <ArrowLink to="/projects">Volver a proyectos</ArrowLink>
        </div>
      </Section>
    </>
  );
}
