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
import { lab } from "@/data/lab";
import { geneToPhenotype, researchAreas } from "@/data/researchAreas";
import { species } from "@/data/pseudocrossidium";
import { news } from "@/data/news";

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

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-primary">
      <img
        src={heroMoss}
        alt="Fotografía macro de una colonia de musgo creciendo sobre sustrato rocoso"
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
            Modelo de estudio · <Sp>Pseudocrossidium replicatum</Sp>
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-8 max-w-4xl text-[2.6rem] leading-[1.02] md:text-7xl">
            Genómica funcional de plantas
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-2xl text-xl leading-snug text-primary-foreground/85 md:text-2xl">
            Explorando los mecanismos moleculares de adaptación de un musgo mexicano.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-col gap-6 border-t border-primary-foreground/20 pt-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary-foreground/60">
                {lab.number} · {lab.shortInstitution}
              </p>
              <p className="mt-3 font-display text-lg">{lab.lead.name}</p>
              <p className="text-sm text-primary-foreground/60">Responsable del laboratorio</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ActionLink
                to="/research"
                className="bg-ivory text-primary hover:bg-sprout"
                tone="ghost"
              >
                Conoce nuestra investigación
              </ActionLink>
              <ActionLink to="/pseudocrossidium-replicatum" tone="onDark">
                Descubre <Sp>Pseudocrossidium replicatum</Sp>
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />

      {/* EL LABORATORIO */}
      <Section tone="paper" id="laboratorio">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>El laboratorio</Eyebrow>
            <SectionTitle>De los genes a la adaptación vegetal</SectionTitle>
            <div className="mt-8">
              <ArrowLink to="/research">Conocer al laboratorio</ArrowLink>
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-foreground/80">
            <p>
              El {lab.number} de {lab.name} del {lab.center} del {lab.institution}, bajo la
              dirección del {lab.lead.name}, estudia los mecanismos moleculares que participan en
              la respuesta y adaptación de las plantas frente a diferentes condiciones
              ambientales.
            </p>
            <p>
              Una de sus principales líneas de investigación se centra en el musgo mexicano{" "}
              <Sp>Pseudocrossidium replicatum</Sp>, utilizado como modelo para investigar procesos
              relacionados con genómica funcional, regulación génica, fisiología vegetal y
              respuestas a estrés.
            </p>
            <p>
              Mediante herramientas de biología molecular, cultivo de tejidos, análisis genético y
              aproximaciones de edición genómica, el laboratorio busca comprender la función de
              genes involucrados en procesos fundamentales para la adaptación vegetal.
            </p>
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
              alt="Detalle macro de gametófitos de musgo mostrando la textura de sus filidios"
              loading="lazy"
              width={1408}
              height={1600}
              className="h-[52vh] w-full rounded-sm object-cover md:h-[70vh]"
            />
            <figcaption className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground">
              [Placeholder fotográfico] Sustituir por imagen propia de{" "}
              <span className="species">Pseudocrossidium replicatum</span>.
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <Reveal>
            <h3 className="text-2xl">¿Qué es?</h3>
            <p className="mt-4 leading-relaxed text-foreground/80">{species.whatIsIt}</p>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="text-2xl">¿Por qué estudiar un musgo?</h3>
            <p className="mt-4 leading-relaxed text-foreground/80">{species.whyMoss}</p>
          </Reveal>
        </div>

        <Reveal className="mt-16 rule-top pt-10">
          <h3 className="text-2xl">¿Qué estudiamos?</h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {species.topics.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-10">
            <ActionLink to="/pseudocrossidium-replicatum">
              Conocer nuestro modelo de estudio
            </ActionLink>
          </div>
        </Reveal>
      </Section>

      {/* INVESTIGACIÓN */}
      <Section tone="paper" className="border-t border-border">
        <Reveal className="max-w-3xl">
          <Eyebrow>Líneas de trabajo</Eyebrow>
          <SectionTitle>Nuestra investigación</SectionTitle>
          <Lede>
            Comprender cómo las plantas perciben, responden y se adaptan a su ambiente.
          </Lede>
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
            Explorar líneas de investigación
          </ActionLink>
        </Reveal>
      </Section>

      {/* DEL GEN AL FENOTIPO */}
      <Section tone="forest">
        <Reveal className="max-w-3xl">
          <Eyebrow className="text-primary-foreground/50">Flujo de trabajo</Eyebrow>
          <SectionTitle className="text-primary-foreground">Del gen al fenotipo</SectionTitle>
          <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/70">
            Una aproximación experimental que conecta la señal ambiental con la función génica y
            su efecto observable.
          </p>
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
            <Eyebrow>Galería</Eyebrow>
            <SectionTitle>Dentro del laboratorio</SectionTitle>
            <Lede>
              Cultivos, microscopía y trabajo experimental. Los espacios fotográficos se
              sustituirán por imágenes reales del laboratorio.
            </Lede>
          </div>
          <PendingBadge label="Imágenes de referencia" />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <img
              src={petri}
              alt="Cultivo in vitro de musgo en caja de Petri sobre medio de cultivo"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-72 w-full rounded-sm object-cover md:h-[26rem]"
            />
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              Cultivo in vitro · [placeholder]
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={protonema}
              alt="Micrografía de filamentos de protonema de musgo"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-72 w-full rounded-sm object-cover md:h-[26rem]"
            />
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              Protonema · [placeholder]
            </p>
          </Reveal>
        </div>
      </Section>

      {/* RESPONSABLE */}
      <Section tone="paper" className="border-t border-border">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Responsable del laboratorio</Eyebrow>
            <div className="mt-6 flex aspect-[4/5] items-center justify-center rounded-sm border border-dashed border-border bg-secondary">
              <span className="px-6 text-center font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                Espacio para fotografía
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
                label="Semblanza"
                value={
                  <span className="flex flex-wrap items-center gap-3">
                    {lab.lead.bio} <PendingBadge />
                  </span>
                }
              />
              <DataRow
                label="Líneas de investigación"
                value={lab.lead.researchLines.join(" · ")}
              />
              <DataRow
                label="Perfiles académicos"
                value={
                  <span className="flex flex-wrap items-center gap-3">
                    ORCID · Google Scholar · ResearchGate <PendingBadge label="Por confirmar" />
                  </span>
                }
              />
            </dl>
            <div className="mt-8">
              <ArrowLink to="/team">Ver perfil y equipo</ArrowLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* NOTICIAS */}
      <Section className="border-t border-border">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Actualidad</Eyebrow>
            <SectionTitle>Noticias del laboratorio</SectionTitle>
          </div>
          <ArrowLink to="/news">Todas las noticias</ArrowLink>
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
            <Eyebrow className="text-primary-foreground/50">Formación</Eyebrow>
            <SectionTitle className="text-primary-foreground">Haz ciencia con nosotros</SectionTitle>
            <p className="mt-5 leading-relaxed text-primary-foreground/70">
              El {lab.number} participa en la formación de estudiantes interesados en genómica
              funcional, biología molecular, fisiología vegetal, biotecnología y edición genética.
            </p>
          </div>
          <ActionLink to="/join" tone="onDark">
            Quiero integrarme al laboratorio
          </ActionLink>
        </Reveal>
      </Section>
    </>
  );
}
