import { createFileRoute, notFound } from "@tanstack/react-router";
import {
  ArrowLink,
  DataRow,
  PageHero,
  PendingBadge,
  Section,
} from "@/components/ui/primitives";
import { useLab, lab as labEs } from "@/data/lab";
import { team, useTeam } from "@/data/team";
import { useLocalized } from "@/lib/i18n";

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

const copy = {
  es: {
    notFound: "Perfil no encontrado",
    seeTeam: "Ver el equipo",
    demo: "Perfil de demostración",
    photoSlot: "Espacio para fotografía",
    role: "Cargo",
    institution: "Institución",
    bio: "Semblanza",
    education: "Formación académica",
    lines: "Líneas de investigación",
    program: "Programa académico",
    degree: "Grado",
    project: "Proyecto",
    topic: "Tema de investigación",
    organism: "Organismo de estudio",
    email: "Correo",
    orcid: "ORCID",
    scholar: "Google Scholar",
    pending: "[Pendiente] Por confirmar.",
    back: "Volver al equipo",
  },
  en: {
    notFound: "Profile not found",
    seeTeam: "View the team",
    demo: "Demo profile",
    photoSlot: "Space for photograph",
    role: "Position",
    institution: "Institution",
    bio: "Biography",
    education: "Academic background",
    lines: "Research lines",
    program: "Academic program",
    degree: "Degree",
    project: "Project",
    topic: "Research topic",
    organism: "Study organism",
    email: "Email",
    orcid: "ORCID",
    scholar: "Google Scholar",
    pending: "[Pending] To be confirmed.",
    back: "Back to the team",
  },
};

function MemberNotFound() {
  const t = useLocalized(copy);
  return (
    <Section>
      <h1 className="text-3xl">{t.notFound}</h1>
      <div className="mt-6">
        <ArrowLink to="/team">{t.seeTeam}</ArrowLink>
      </div>
    </Section>
  );
}

function MemberDetail() {
  const { member: staticMember } = Route.useLoaderData();
  const t = useLocalized(copy);
  const lab = useLab();
  const team = useTeam();
  const member = team.find((m) => m.slug === staticMember.slug) ?? staticMember;
  const isLead = member.slug === labEs.lead.slug;

  return (
    <>
      <PageHero eyebrow={member.category} title={member.name} lede={member.topic}>
        {member.placeholder ? (
          <div className="mt-8">
            <PendingBadge label={t.demo} />
          </div>
        ) : null}
      </PageHero>

      <Section>
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div className="flex aspect-[4/5] items-center justify-center rounded-sm border border-dashed border-border bg-secondary">
            <span className="px-6 text-center font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              {t.photoSlot}
            </span>
          </div>
          <dl>
            {isLead ? (
              <>
                <DataRow label={t.role} value={lab.lead.role} />
                <DataRow label={t.institution} value={`${lab.center} · ${lab.institution}`} />
                <DataRow label={t.bio} value={lab.lead.bio} />
                <DataRow label={t.education} value={lab.lead.education.join(" · ")} />
                <DataRow label={t.lines} value={lab.lead.researchLines.join(" · ")} />
              </>
            ) : (
              <>
                <DataRow label={t.program} value={member.program} />
                <DataRow label={t.degree} value={member.degree} />
                <DataRow label={t.project} value={member.project} />
                <DataRow label={t.topic} value={member.topic} />
              </>
            )}
            <DataRow
              label={t.organism}
              value={<span className="species">{member.organism}</span>}
            />
            <DataRow label={t.email} value={member.email ?? t.pending} />
            <DataRow label={t.orcid} value={member.orcid ?? t.pending} />
            <DataRow label={t.scholar} value={member.scholar ?? t.pending} />
          </dl>
        </div>
        <div className="mt-12">
          <ArrowLink to="/team">{t.back}</ArrowLink>
        </div>
      </Section>
    </>
  );
}
