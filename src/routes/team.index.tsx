import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  DataRow,
  Eyebrow,
  PageHero,
  PendingBadge,
  Section,
  Sp,
} from "@/components/ui/primitives";
import { useLab } from "@/data/lab";
import { useTeam, useTeamCategories } from "@/data/team";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/team/")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Equipo | Laboratorio 11 — Genómica Funcional de Plantas CIBA-IPN" },
      {
        name: "description",
        content:
          "Equipo del Laboratorio 11 del CIBA-IPN, encabezado por el Dr. Miguel Angel Villalobos López: investigadores, posgrado, licenciatura, técnicos y egresados.",
      },
      { property: "og:title", content: "Nuestro equipo | Laboratorio 11 — CIBA-IPN" },
      { property: "og:description", content: "La ciencia es un trabajo colectivo." },
      { property: "og:url", content: "/team" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
});

const copy = {
  es: {
    eyebrow: "Equipo",
    title: "Nuestro equipo",
    lede: "La ciencia es un trabajo colectivo.",
    lead: "Responsable del laboratorio",
    photoSlot: "Espacio para fotografía",
    photo: "Fotografía",
    bio: "Semblanza",
    education: "Formación académica",
    lines: "Líneas de investigación",
    profiles: "Perfiles y contacto",
    profilesValue: "ORCID · Google Scholar · ResearchGate · Correo institucional",
    pending: "Por confirmar",
    fullProfile: "Ver perfil completo →",
    leadCategory: "Investigador responsable",
    empty: "[Pendiente] Sin integrantes registrados en esta categoría.",
    worksWith: "Trabaja con ",
  },
  en: {
    eyebrow: "Team",
    title: "Our team",
    lede: "Science is collective work.",
    lead: "Laboratory head",
    photoSlot: "Space for photograph",
    photo: "Photograph",
    bio: "Biography",
    education: "Academic background",
    lines: "Research lines",
    profiles: "Profiles and contact",
    profilesValue: "ORCID · Google Scholar · ResearchGate · Institutional email",
    pending: "To be confirmed",
    fullProfile: "View full profile →",
    leadCategory: "Principal investigator",
    empty: "[Pending] No members registered in this category.",
    worksWith: "Works with ",
  },
};

function TeamPage() {
  const t = useLocalized(copy);
  const lab = useLab();
  const team = useTeam();
  const teamCategories = useTeamCategories();

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <Eyebrow>{t.lead}</Eyebrow>
            <div className="mt-6 flex aspect-[4/5] items-center justify-center rounded-sm border border-dashed border-border bg-secondary">
              <span className="px-6 text-center font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                {t.photoSlot}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl">{lab.lead.name}</h2>
            <p className="mt-3 text-muted-foreground">{lab.lead.role}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {lab.center} · {lab.institution}
            </p>
            <dl className="mt-10">
              <DataRow
                label={t.bio}
                value={
                  <span className="flex flex-wrap items-center gap-3">
                    {lab.lead.bio} <PendingBadge />
                  </span>
                }
              />
              <DataRow label={t.education} value={lab.lead.education.join(" · ")} />
              <DataRow label={t.lines} value={lab.lead.researchLines.join(" · ")} />
              <DataRow
                label={t.profiles}
                value={
                  <span className="flex flex-wrap items-center gap-3">
                    {t.profilesValue} <PendingBadge label={t.pending} />
                  </span>
                }
              />
            </dl>
            <div className="mt-8">
              <Link
                to="/team/$slug"
                params={{ slug: lab.lead.slug }}
                className="inline-flex items-center gap-2 border-b border-primary/25 pb-1 text-sm text-primary"
              >
                {t.fullProfile}
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        {teamCategories
          .filter((c) => c !== t.leadCategory)
          .map((category) => {
            const members = team.filter((m) => m.category === category);
            return (
              <Reveal key={category} className="rule-top py-10 first:border-t-0 first:pt-0">
                <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                  <h2 className="font-display text-xl">{category}</h2>
                  {members.length === 0 ? (
                    <p className="text-sm text-muted-foreground">{t.empty}</p>
                  ) : (
                    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {members.map((m) => (
                        <li key={m.slug}>
                          <Link
                            to="/team/$slug"
                            params={{ slug: m.slug }}
                            className="group flex h-full flex-col rounded-sm border border-border bg-card p-5 transition-colors hover:border-verdant"
                          >
                            <div className="mb-4 flex aspect-square items-center justify-center rounded-sm bg-secondary">
                              <span className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                                {t.photo}
                              </span>
                            </div>
                            <p className="font-display text-lg leading-tight">{m.name}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{m.program}</p>
                            {m.worksWithSpecies ? (
                              <p className="mt-4 font-mono text-[10px] tracking-[0.12em] text-verdant uppercase">
                                {t.worksWith}
                                <Sp>P. replicatum</Sp>
                              </p>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            );
          })}
      </Section>
    </>
  );
}
