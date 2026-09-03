import { createFileRoute } from "@tanstack/react-router";
import heroMoss from "@/assets/hero-moss.jpg";
import mossDetail from "@/assets/moss-detail.jpg";
import petri from "@/assets/culture-petri.jpg";
import protonema from "@/assets/protonema.jpg";
import { Reveal } from "@/components/Reveal";
import {
  ActionLink,
  ArrowLink,
  DataRow,
  Eyebrow,
  Lede,
  PendingBadge,
  Section,
  SectionTitle,
  Sp,
  Tag,
} from "@/components/ui/primitives";
import { useLab } from "@/data/lab";
import { useGeneToPhenotype, useResearchAreas } from "@/data/researchAreas";
import { useSpecies } from "@/data/pseudocrossidium";
import { useNews } from "@/data/news";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Laboratorio de Genómica Funcional de Plantas | CIBA-IPN" },
      {
        name: "description",
        content:
          "Laboratorio 11 de Genómica Funcional de Plantas del CIBA-IPN, dirigido por el Dr. Miguel Angel Villalobos López. Investigación en genómica funcional, biología molecular y respuestas al estrés utilizando el musgo mexicano Pseudocrossidium replicatum como modelo de estudio.",
      },
      {
        property: "og:title",
        content: "Laboratorio de Genómica Funcional de Plantas | CIBA-IPN",
      },
      {
        property: "og:description",
        content:
          "Investigación en genómica funcional, biología molecular y respuestas al estrés con el musgo mexicano Pseudocrossidium replicatum.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});


const copy = {
  es: {
    heroAlt: "Fotografía macro de una colonia de musgo creciendo sobre sustrato rocoso",
    model: "Modelo de estudio · ",
    h1: "Biología Molecular y Genómica funcional de plantas",
    heroLede: "Explorando los mecanismos moleculares de adaptación de un musgo mexicano.",
    ctaResearch: "Conoce nuestra investigación",
    labEyebrow: "El laboratorio",
    labTitle: "De los genes a la adaptación vegetal",
    labLink: "Conocer al laboratorio",
    labP1: (n: string, name: string, center: string, inst: string, lead: string) =>
      `El ${n} de ${name} del ${center} del ${inst}, bajo la dirección del ${lead}, estudia los mecanismos moleculares que participan en la respuesta y adaptación de las plantas frente a diferentes condiciones ambientales.`,
    labP2a: "Una de sus principales líneas de investigación se centra en el musgo mexicano ",
    labP2b: ", utilizado como modelo para investigar procesos relacionados con genómica funcional, regulación génica, fisiología vegetal y respuestas a estrés.",
    labP3: "Mediante herramientas de biología molecular, cultivo de tejidos, análisis genético y aproximaciones de edición genómica, el laboratorio busca comprender la función de genes involucrados en procesos fundamentales para la adaptación vegetal.",
    mossAlt: "Detalle macro de gametófitos de musgo mostrando la textura de sus filidios",
    figcapA: "[Placeholder fotográfico] Sustituir por imagen propia de ",
    whatIsIt: "¿Qué es?",
    whyMoss: "¿Por qué estudiar un musgo?",
    whatWeStudy: "¿Qué estudiamos?",
    ctaModel: "Conocer nuestro modelo de estudio",
    linesEyebrow: "Líneas de trabajo",
    researchTitle: "Nuestra investigación",
    researchLede: "Comprender cómo las plantas perciben, responden y se adaptan a su ambiente.",
    exploreLines: "Explorar líneas de investigación",
    workflow: "Flujo de trabajo",
    workflowTitle: "Del gen al fenotipo",
    workflowLede: "Una aproximación experimental que conecta la señal ambiental con la función génica y su efecto observable.",
    gallery: "Galería",
    galleryTitle: "Dentro del laboratorio",
    galleryLede: "Cultivos, microscopía y trabajo experimental. Los espacios fotográficos se sustituirán por imágenes reales del laboratorio.",
    refImages: "Imágenes de referencia",
    petriAlt: "Cultivo in vitro de musgo en caja de Petri sobre medio de cultivo",
    petriCap: "Cultivo in vitro · [placeholder]",
    protoAlt: "Micrografía de filamentos de protonema de musgo",
    protoCap: "Protonema · [placeholder]",
    lead: "\n",
    photoSlot: "Espacio para fotografía",
    bio: "Semblanza",
    lines: "Líneas de investigación",
    profiles: "Perfiles académicos",
    profilesValue: "ORCID · Google Scholar · ResearchGate",
    pending: "Por confirmar",
    seeTeam: "Ver perfil y equipo",
    newsEyebrow: "Actualidad",
    newsTitle: "Noticias del laboratorio",
    allNews: "Todas las noticias",
    trainingEyebrow: "Formación",
    trainingTitle: "Haz ciencia con nosotros",
    trainingP: (n: string) =>
      `El ${n} participa en la formación de estudiantes interesados en genómica funcional, biología molecular, fisiología vegetal, biotecnología y edición genética.`,
    joinCta: "Quiero integrarme al laboratorio",
  },
  en: {
    heroAlt: "Macro photograph of a moss colony growing on a rocky substrate",
    model: "Study model · ",
    h1: "Molecular Biology and Functional Genomics of Plants",
    heroLede: "Exploring the molecular mechanisms of adaptation in a Mexican moss.",
    ctaResearch: "Discover our research",
    labEyebrow: "The laboratory",
    labTitle: "From genes to plant adaptation",
    labLink: "About the laboratory",
    labP1: (n: string, name: string, center: string, inst: string, lead: string) =>
      `${n} of ${name} at ${center}, ${inst}, led by ${lead}, studies the molecular mechanisms involved in how plants respond and adapt to different environmental conditions.`,
    labP2a: "One of its main research lines focuses on the Mexican moss ",
    labP2b: ", used as a model to investigate processes related to functional genomics, gene regulation, plant physiology and stress responses.",
    labP3: "Using molecular biology tools, tissue culture, genetic analysis and genome-editing approaches, the laboratory seeks to understand the function of genes involved in processes that are fundamental to plant adaptation.",
    mossAlt: "Macro detail of moss gametophytes showing the texture of their phyllids",
    figcapA: "[Photographic placeholder] To be replaced by our own image of ",
    whatIsIt: "What is it?",
    whyMoss: "Why study a moss?",
    whatWeStudy: "What do we study?",
    ctaModel: "Discover our study model",
    linesEyebrow: "Lines of work",
    researchTitle: "Our research",
    researchLede: "Understanding how plants sense, respond and adapt to their environment.",
    exploreLines: "Explore our research lines",
    workflow: "Workflow",
    workflowTitle: "From gene to phenotype",
    workflowLede: "An experimental approach that links the environmental signal with gene function and its observable effect.",
    gallery: "Gallery",
    galleryTitle: "Inside the laboratory",
    galleryLede: "Cultures, microscopy and experimental work. The photographic placeholders will be replaced with real images of the laboratory.",
    refImages: "Reference images",
    petriAlt: "In vitro moss culture in a Petri dish on culture medium",
    petriCap: "In vitro culture · [placeholder]",
    protoAlt: "Micrograph of moss protonema filaments",
    protoCap: "Protonema · [placeholder]",
    lead: "Laboratory head",
    photoSlot: "Space for photograph",
    bio: "Biography",
    lines: "Research lines",
    profiles: "Academic profiles",
    profilesValue: "ORCID · Google Scholar · ResearchGate",
    pending: "To be confirmed",
    seeTeam: "View profile and team",
    newsEyebrow: "Latest",
    newsTitle: "Laboratory news",
    allNews: "All news",
    trainingEyebrow: "Training",
    trainingTitle: "Do science with us",
    trainingP: (n: string) =>
      `${n} takes part in training students interested in functional genomics, molecular biology, plant physiology, biotechnology and gene editing.`,
    joinCta: "I want to join the laboratory",
  },
};

function Hero() {
  const t = useLocalized(copy);
  const lab = useLab();

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-primary">
      <img
        src={heroMoss}
        alt={t.heroAlt}
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/25"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-40 pb-20 text-primary-foreground md:px-10 md:pb-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span className="size-1.5 rounded-full bg-sprout" aria-hidden />
            {t.model}<Sp>Pseudocrossidium replicatum</Sp>
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 max-w-4xl text-[2.6rem] leading-[1.02] md:text-7xl">
            {t.h1}
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-2xl text-xl leading-snug text-primary-foreground/85 md:text-2xl">{t.heroLede}</p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-col gap-6 border-t border-primary-foreground/20 pt-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary-foreground/60">
                {lab.number} · {lab.shortInstitution}
              </p>
              <p className="mt-3 font-display text-lg">{lab.lead.name}</p>
              <p className="text-sm text-primary-foreground/60">{"\n"}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ActionLink
                to="/research"
                className="bg-ivory text-primary hover:bg-sprout"
                tone="ghost"
              >
                {t.ctaResearch}
              </ActionLink>
              <ActionLink to="/pseudocrossidium-replicatum" tone="onDark">
                <Sp>Pseudocrossidium replicatum</Sp>
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  const t = useLocalized(copy);
  const lab = useLab();
  const species = useSpecies();
  const researchAreas = useResearchAreas();
  const geneToPhenotype = useGeneToPhenotype();
  const news = useNews();

  return (
    <>
      <Hero />

      {/* EL LABORATORIO */}
      <Section tone="paper" id="laboratorio">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>{t.labEyebrow}</Eyebrow>
            <SectionTitle>{t.labTitle}</SectionTitle>
            <div className="mt-8">
              <ArrowLink to="/research">{t.labLink}</ArrowLink>
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p>{t.labP1(lab.number, lab.name, lab.center, lab.institution, lab.lead.name)}</p>
            <p>
              {t.labP2a}
              <Sp>Pseudocrossidium replicatum</Sp>
              {t.labP2b}
            </p>
            <p>{t.labP3}</p>
          </Reveal>
        </div>
      </Section>

      {/* PSEUDOCROSSIDIUM */}
      <Section id="modelo" className="border-t border-border">
        <Reveal className="max-w-3xl">
          <Eyebrow>{species.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
            <Sp>Pseudocrossidium replicatum</Sp>
          </h2>
          <Lede>{species.subtitle}</Lede>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <figure>
            <img
              src={mossDetail}
              alt={t.mossAlt}
              loading="lazy"
              width={1408}
              height={1600}
              className="h-[52vh] w-full rounded-sm object-cover md:h-[70vh]"
            />
            <figcaption className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground">
              {t.figcapA}
              <span className="species">Pseudocrossidium replicatum</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h3 className="text-2xl">{t.whatIsIt}</h3>
            <p className="mt-4 leading-relaxed text-foreground/80">{species.whatIsIt}</p>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="text-2xl">{t.whyMoss}</h3>
            <p className="mt-4 leading-relaxed text-foreground/80">{species.whyMoss}</p>
          </Reveal>
        </div>

        <Reveal className="mt-16 rule-top pt-10">
          <h3 className="text-2xl">{t.whatWeStudy}</h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {species.topics.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-10">
            <ActionLink to="/pseudocrossidium-replicatum">
              {t.ctaModel}
            </ActionLink>
          </div>
        </Reveal>
      </Section>

      {/* INVESTIGACIÓN */}
      <Section tone="paper" className="border-t border-border">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t.linesEyebrow}</Eyebrow>
          <SectionTitle>{t.researchTitle}</SectionTitle>
          <Lede>{t.researchLede}</Lede>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
          {researchAreas.map((area, i) => (
            <Reveal key={area.id} delay={i * 90} className="bg-card">
              <article className="h-full p-8 transition-colors duration-500 hover:bg-secondary md:p-10">
                <span className="font-mono text-xs tracking-[0.2em] text-verdant">
                  {area.index}
                </span>
                <h3 className="mt-5 text-2xl md:text-3xl">{area.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {area.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {area.keywords.map((k) => (
                    <span
                      key={k}
                      className="font-mono text-[10px] tracking-[0.14em] uppercase text-verdant"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <ActionLink to="/research" tone="outline">
            {t.exploreLines}
          </ActionLink>
        </Reveal>
      </Section>

      {/* DEL GEN AL FENOTIPO */}
      <Section tone="forest">
        <Reveal className="max-w-3xl">
          <Eyebrow className="text-primary-foreground/50">{t.workflow}</Eyebrow>
          <SectionTitle className="text-primary-foreground">{t.workflowTitle}</SectionTitle>
          <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/70">{t.workflowLede}</p>
        </Reveal>

        <ol className="mt-16 grid gap-px bg-primary-foreground/15 md:grid-cols-6">
          {geneToPhenotype.map((s, i) => (
            <Reveal key={s.step} delay={i * 80} className="bg-primary">
              <li className="relative flex h-full flex-col gap-3 p-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-sprout">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg leading-tight text-primary-foreground">
                  {s.step}
                </span>
                <span className="text-xs leading-relaxed text-primary-foreground/55">
                  {s.note}
                </span>
                <span
                  className="mt-auto pt-4 text-sprout/70 md:hidden"
                  aria-hidden
                >
                  ↓
                </span>
                <span
                  className="mt-auto hidden pt-4 text-sprout/70 md:block"
                  aria-hidden
                >
                  {i < geneToPhenotype.length - 1 ? "→" : "●"}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* GALERÍA */}
      <Section className="border-t border-border">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>{t.gallery}</Eyebrow>
            <SectionTitle>{t.galleryTitle}</SectionTitle>
            <Lede>{t.galleryLede}</Lede>
          </div>
          <PendingBadge label={t.refImages} />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <img
              src={petri}
              alt={t.petriAlt}
              loading="lazy"
              width={1408}
              height={1008}
              className="h-72 w-full rounded-sm object-cover md:h-[26rem]"
            />
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              {t.petriCap}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={protonema}
              alt={t.protoAlt}
              loading="lazy"
              width={1408}
              height={1008}
              className="h-72 w-full rounded-sm object-cover md:h-[26rem]"
            />
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              {t.protoCap}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* RESPONSABLE */}
      <Section tone="paper" className="border-t border-border">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>{t.lead}</Eyebrow>
            <div className="mt-6 flex aspect-[4/5] items-center justify-center rounded-sm border border-dashed border-border bg-secondary">
              <span className="px-6 text-center font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                {t.photoSlot}
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
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
              <DataRow
                label={t.lines}
                value={lab.lead.researchLines.join(" · ")}
              />
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
              <ArrowLink to="/team">{t.seeTeam}</ArrowLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* NOTICIAS */}
      <Section className="border-t border-border">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{t.newsEyebrow}</Eyebrow>
            <SectionTitle>{t.newsTitle}</SectionTitle>
          </div>
          <ArrowLink to="/news">{t.allNews}</ArrowLink>
        </Reveal>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {news.slice(0, 3).map((n, i) => (
            <Reveal key={n.slug} delay={i * 90} className="bg-background">
              <article className="flex h-full flex-col gap-3 p-8">
                <span className="eyebrow">
                  {n.category} · {n.date}
                </span>
                <h3 className="text-xl leading-snug">{n.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
                <div className="mt-auto pt-5">
                  <PendingBadge />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA ESTUDIANTES */}
      <Section tone="forest">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow className="text-primary-foreground/50">{t.trainingEyebrow}</Eyebrow>
            <SectionTitle className="text-primary-foreground">{t.trainingTitle}</SectionTitle>
            <p className="mt-5 leading-relaxed text-primary-foreground/70">{t.trainingP(lab.number)}</p>
          </div>
          <ActionLink to="/join" tone="onDark">
            {t.joinCta}
          </ActionLink>
        </Reveal>
      </Section>
    </>
  );
}
