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
import { lab } from "@/data/lab";
import { team, teamCategories } from "@/data/team";

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

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Nuestro equipo"
        lede="La ciencia es un trabajo colectivo."
      />

      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <Eyebrow>Responsable del laboratorio</Eyebrow>
            <div className="mt-6 flex aspect-[4/5] items-center justify-center rounded-sm border border-dashed border-border bg-secondary">
              <span className="px-6 text-center font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                Espacio para fotografía
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
                label="Semblanza"
                value={
                  <span className="flex flex-wrap items-center gap-3">
                    {lab.lead.bio} <PendingBadge />
                  </span>
                }
              />
              <DataRow label="Formación académica" value={lab.lead.education.join(" · ")} />
              <DataRow label="Líneas de investigación" value={lab.lead.researchLines.join(" · ")} />
              <DataRow
                label="Perfiles y contacto"
                value={
                  <span className="flex flex-wrap items-center gap-3">
                    ORCID · Google Scholar · ResearchGate · Correo institucional{" "}
                    <PendingBadge label="Por confirmar" />
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
                Ver perfil completo →
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        {teamCategories
          .filter((c) => c !== "Investigador responsable")
          .map((category) => {
            const members = team.filter((m) => m.category === category);
            return (
              <Reveal key={category} className="rule-top py-10 first:border-t-0 first:pt-0">
                <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                  <h2 className="font-display text-xl">{category}</h2>
                  {members.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      [Pendiente] Sin integrantes registrados en esta categoría.
                    </p>
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
                                Fotografía
                              </span>
                            </div>
                            <p className="font-display text-lg leading-tight">{m.name}</p>
                            <p className="mt-1 text-xs text-muted-foreground">{m.program}</p>
                            {m.worksWithSpecies ? (
                              <p className="mt-4 font-mono text-[10px] tracking-[0.12em] text-verdant uppercase">
                                Trabaja con <Sp>P. replicatum</Sp>
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
