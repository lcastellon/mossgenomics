import { createFileRoute } from "@tanstack/react-router";
import mossDetail from "@/assets/moss-detail.jpg";
import petri from "@/assets/culture-petri.jpg";
import protonema from "@/assets/protonema.jpg";
import { Reveal } from "@/components/Reveal";
import {
  ActionLink,
  Eyebrow,
  PendingBadge,
  Section,
  Sp,
  Tag,
} from "@/components/ui/primitives";
import { useSpecies, useSpeciesSections } from "@/data/pseudocrossidium";
import { useLocalized } from "@/lib/i18n";

const copy = {
  es: {
    whatIsIt: "¿Qué es?",
    whyMoss: "¿Por qué estudiar un musgo?",
    whatWeStudy: "¿Qué estudiamos?",
    resource: "Recurso académico",
    sheet: "Ficha de la especie",
    sheetLede:
      "Estructura preparada para incorporar información científica verificada. Los apartados marcados esperan contenido proporcionado por el laboratorio.",
    pending: "Contenido por confirmar",
    photos: "Fotografías",
    gallery: "Galería de la especie",
    galleryLede:
      "Imágenes de referencia. Se sustituirán por fotografías propias de la especie y de su cultivo en el laboratorio.",
    cap1: "Cultivo in vitro · [placeholder]",
    cap2: "Protonema · [placeholder]",
    cap3: "Gametófitos · [placeholder]",
    alt1: "Cultivo de musgo en caja de Petri",
    alt2: "Micrografía de protonema",
    alt3: "Gametófitos de musgo",
    heroAlt: "Detalle macro de gametófitos de musgo",
    cta: "¿Tienes información, fotografías o datos sobre esta especie? Esta página está pensada para crecer como recurso académico.",
    write: "Escríbenos",
  },
  en: {
    whatIsIt: "What is it?",
    whyMoss: "Why study a moss?",
    whatWeStudy: "What do we study?",
    resource: "Academic resource",
    sheet: "Species profile",
    sheetLede:
      "A structure ready to hold verified scientific information. The marked sections await content provided by the laboratory.",
    pending: "Content to be confirmed",
    photos: "Photographs",
    gallery: "Species gallery",
    galleryLede:
      "Reference images. They will be replaced with our own photographs of the species and its laboratory culture.",
    cap1: "In vitro culture · [placeholder]",
    cap2: "Protonema · [placeholder]",
    cap3: "Gametophytes · [placeholder]",
    alt1: "Moss culture in a Petri dish",
    alt2: "Protonema micrograph",
    alt3: "Moss gametophytes",
    heroAlt: "Macro detail of moss gametophytes",
    cta: "Do you have information, photographs or data about this species? This page is meant to grow as an academic resource.",
    write: "Write to us",
  },
};

export const Route = createFileRoute("/pseudocrossidium-replicatum")({
  component: SpeciesPage,
  head: () => ({
    meta: [
      { title: "Pseudocrossidium replicatum | Modelo de estudio del Laboratorio 11 CIBA-IPN" },
      {
        name: "description",
        content:
          "Pseudocrossidium replicatum, musgo mexicano utilizado como modelo de estudio por el Laboratorio 11 de Genómica Funcional de Plantas del CIBA-IPN para investigar adaptación vegetal, regulación génica y respuestas a estrés.",
      },
      { property: "og:title", content: "Pseudocrossidium replicatum — Modelo de estudio" },
      {
        property: "og:description",
        content:
          "Un musgo mexicano para estudiar los mecanismos moleculares de adaptación vegetal. Recurso académico del Laboratorio 11, CIBA-IPN.",
      },
      { property: "og:url", content: "/pseudocrossidium-replicatum" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/pseudocrossidium-replicatum" }],
  }),
});

function SpeciesPage() {
  const t = useLocalized(copy);
  const species = useSpecies();
  const speciesSections = useSpeciesSections();

  return (
    <>
      <header className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-primary">
        <img
          src={mossDetail}
          alt={t.heroAlt}
          width={1408}
          height={1600}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/30"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-36 pb-16 text-primary-foreground md:px-10 md:pb-24">
          <Reveal>
            <Eyebrow className="text-primary-foreground/60">{species.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.03] md:text-7xl">
              <Sp>Pseudocrossidium replicatum</Sp>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              {species.subtitle}
            </p>
          </Reveal>
        </div>
      </header>

      <Section tone="paper">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl">{t.whatIsIt}</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">{italicizeSpecies(species.whatIsIt)}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-2xl">{t.whyMoss}</h2>
            <p className="mt-4 leading-relaxed text-foreground/80">{italicizeSpecies(species.whyMoss)}</p>
          </Reveal>
        </div>
        <Reveal className="mt-14 rule-top pt-10">
          <Eyebrow>{t.whatWeStudy}</Eyebrow>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {species.topics.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-border">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>{t.resource}</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl">{t.sheet}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t.sheetLede}</p>
          </div>
          <PendingBadge label={t.pending} />
        </Reveal>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {speciesSections.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 80} className="bg-background">
              <article id={s.id} className="flex h-full flex-col gap-3 p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl">{s.title}</h3>
                  {s.pending ? <PendingBadge /> : null}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper" className="border-t border-border">
        <Reveal>
          <Eyebrow>{t.photos}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl">{t.gallery}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{t.galleryLede}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { src: petri, caption: t.cap1, alt: t.alt1 },
            { src: protonema, caption: t.cap2, alt: t.alt2 },
            { src: mossDetail, caption: t.cap3, alt: t.alt3 },
          ].map((img, i) => (
            <Reveal key={img.caption} delay={i * 90}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-64 w-full rounded-sm object-cover md:h-80"
              />
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">{img.caption}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="max-w-2xl text-2xl leading-snug text-primary-foreground md:text-3xl">{t.cta}</p>
          <ActionLink to="/contact" tone="onDark">
            {t.write}
          </ActionLink>
        </Reveal>
      </Section>
    </>
  );
}
