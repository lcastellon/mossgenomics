import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, PageHero, PendingBadge, Section } from "@/components/ui/primitives";
import { usePublicationFilters, usePublications } from "@/data/publications";
import { useLocalized } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/publications")({
  staticData: { sitemap: true },
  component: PublicationsPage,
  head: () => ({
    meta: [
      { title: "Publicaciones | Laboratorio 11 — Genómica Funcional de Plantas CIBA-IPN" },
      {
        name: "description",
        content:
          "Publicaciones científicas del Laboratorio 11 del CIBA-IPN en genómica funcional, estrés abiótico, edición genómica y biología molecular vegetal.",
      },
      { property: "og:title", content: "Publicaciones | Laboratorio 11 — CIBA-IPN" },
      {
        property: "og:description",
        content: "Registro de publicaciones del Laboratorio 11 de Genómica Funcional de Plantas.",
      },
      { property: "og:url", content: "/publications" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/publications" }],
  }),
});

const copy = {
  es: {
    eyebrow: "Producción científica",
    title: "Publicaciones",
    lede: "Registro de los trabajos publicados por el laboratorio. La arquitectura está preparada para integrarse posteriormente con ORCID y Crossref.",
    demo: "Registros de demostración",
    featured: "Publicación destacada",
    pending: "[pendiente]",
    link: "Enlace ↗",
    linkPending: "Enlace: [pendiente]",
    project: "Proyecto",
    organismPending: "Organismo: [pendiente]",
    empty: "No hay registros para este filtro todavía.",
  },
  en: {
    eyebrow: "Scientific output",
    title: "Publications",
    lede: "Record of the works published by the laboratory. The architecture is ready to integrate with ORCID and Crossref later on.",
    demo: "Demo records",
    featured: "Featured publication",
    pending: "[pending]",
    link: "Link ↗",
    linkPending: "Link: [pending]",
    project: "Project",
    organismPending: "Organism: [pending]",
    empty: "There are no records for this filter yet.",
  },
};

function PublicationsPage() {
  const t = useLocalized(copy);
  const filters = usePublicationFilters();
  const publications = usePublications();
  const [filterIndex, setFilterIndex] = useState(0);

  const list = useMemo(() => {
    if (filterIndex === 0) return publications;
    const active = filters[filterIndex];
    return publications.filter((p) => (p.tags as string[]).includes(active as string));
  }, [filterIndex, filters, publications]);

  const featured = publications.find((p) => p.featured);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede}>
        <div className="mt-8">
          <PendingBadge label={t.demo} />
        </div>
      </PageHero>

      {featured ? (
        <Section tone="forest">
          <Reveal>
            <Eyebrow className="text-primary-foreground/50">{t.featured}</Eyebrow>
            <h2 className="mt-5 max-w-4xl text-2xl leading-snug text-primary-foreground md:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-6 text-primary-foreground/70">{featured.authors}</p>
            <p className="mt-1 font-mono text-xs tracking-[0.14em] text-sprout uppercase">
              {featured.journal} · {featured.year}
            </p>
          </Reveal>
        </Section>
      ) : null}

      <Section className="border-t border-border">
        <div className="flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilterIndex(i)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors",
                filterIndex === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-verdant hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  f === "Pseudocrossidium replicatum" && "species tracking-normal normal-case",
                )}
              >
                {f}
              </span>
            </button>
          ))}
        </div>

        <ul className="mt-12 grid gap-px bg-border">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 60} className="bg-background">
              <li className="grid gap-4 py-9 md:grid-cols-[110px_1fr_150px] md:gap-8">
                <span className="font-mono text-sm text-verdant">{p.year}</span>
                <div>
                  <h3 className="text-xl leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.authors}</p>
                  <p className="mt-1 text-sm italic text-foreground/70">{p.journal}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      DOI: {p.doi ?? t.pending}
                    </span>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[11px] text-guinda underline-offset-4 hover:underline"
                      >
                        {t.link}
                      </a>
                    ) : (
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {t.linkPending}
                      </span>
                    )}
                    {p.placeholder ? <PendingBadge /> : null}
                  </div>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground md:text-right">
                  <p>
                    {t.project}: {p.project ?? t.pending}
                  </p>
                  <p className={p.organism ? "species text-foreground/70" : undefined}>
                    {p.organism ?? t.organismPending}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        {list.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">{t.empty}</p>
        ) : null}
      </Section>
    </>
  );
}
