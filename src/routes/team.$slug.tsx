import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLink,
  DataRow,
  PageHero,
  PendingBadge,
  Section,
} from "@/components/ui/primitives";
import { lab } from "@/data/lab";
import { team } from "@/data/team";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const member = team.find((m) => m.slug === params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Perfil no disponible | Laboratorio 11" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { member } = loaderData;
    const description = `${member.name} — ${member.category} en el Laboratorio 11 de Genómica Funcional de Plantas, CIBA-IPN.`;
    return {
      meta: [
        { title: `${member.name} | Equipo — Laboratorio 11 CIBA-IPN` },
        { name: "description", content: description },
        { property: "og:title", content: member.name },
        { property: "og:description", content: description },
        { property: "og:url", content: `/team/${member.slug}` },
        { property: "og:type", content: "profile" },
      ],
      links: [{ rel: "canonical", href: `/team/${member.slug}` }],
    };
  },
  component: MemberDetail,
  notFoundComponent: MemberNotFound,
});

function MemberNotFound() {
  return (
    <Section>
      <h1 className="text-3xl">Perfil no encontrado</h1>
      <div className="mt-6">
        <ArrowLink to="/team">Ver el equipo</ArrowLink>
      </div>
    </Section>
  );
}

function MemberDetail() {
  const { member } = Route.useLoaderData();
  const isLead = member.slug === lab.lead.slug;

  return (
    <>
      <PageHero eyebrow={member.category} title={member.name} lede={member.topic}>
        {member.placeholder ? (
          <div className="mt-8">
            <PendingBadge label="Perfil de demostración" />
          </div>
        ) : null}
      </PageHero>

      <Section>
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div className="flex aspect-[4/5] items-center justify-center rounded-sm border border-dashed border-border bg-secondary">
            <span className="px-6 text-center font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              Espacio para fotografía
            </span>
          </div>
          <dl>
            {isLead ? (
              <>
                <DataRow label="Cargo" value={lab.lead.role} />
                <DataRow label="Institución" value={`${lab.center} · ${lab.institution}`} />
                <DataRow label="Semblanza" value={lab.lead.bio} />
                <DataRow label="Formación académica" value={lab.lead.education.join(" · ")} />
                <DataRow
                  label="Líneas de investigación"
                  value={lab.lead.researchLines.join(" · ")}
                />
              </>
            ) : (
              <>
                <DataRow label="Programa académico" value={member.program} />
                <DataRow label="Grado" value={member.degree} />
                <DataRow label="Proyecto" value={member.project} />
                <DataRow label="Tema de investigación" value={member.topic} />
              </>
            )}
            <DataRow
              label="Organismo de estudio"
              value={<span className="species">{member.organism}</span>}
            />
            <DataRow label="Correo" value={member.email ?? "[Pendiente] Por confirmar."} />
            <DataRow label="ORCID" value={member.orcid ?? "[Pendiente] Por confirmar."} />
            <DataRow
              label="Google Scholar"
              value={member.scholar ?? "[Pendiente] Por confirmar."}
            />
          </dl>
        </div>
        <div className="mt-12">
          <ArrowLink to="/team">Volver al equipo</ArrowLink>
        </div>
      </Section>
    </>
  );
}
