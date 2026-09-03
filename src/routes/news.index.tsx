import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, PendingBadge, Section } from "@/components/ui/primitives";
import { useNews } from "@/data/news";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/news/")({
  component: NewsPage,
  head: () => ({
    meta: [
      { title: "Noticias | Laboratorio 11 — Genómica Funcional de Plantas CIBA-IPN" },
      {
        name: "description",
        content:
          "Noticias del Laboratorio 11 del CIBA-IPN: publicaciones, congresos, defensas de tesis, premios, estancias y colaboraciones científicas.",
      },
      { property: "og:title", content: "Noticias del laboratorio | Laboratorio 11" },
      { property: "og:description", content: "Actividad académica del Laboratorio 11, CIBA-IPN." },
      { property: "og:url", content: "/news" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
});

const copy = {
  es: {
    eyebrow: "Actualidad",
    title: "Noticias del laboratorio",
    lede: "Publicaciones, congresos, defensas de tesis, premios, estancias y colaboraciones.",
    badge: "Notas de demostración",
    read: "Leer nota",
  },
  en: {
    eyebrow: "Latest",
    title: "Laboratory news",
    lede: "Publications, conferences, thesis defenses, awards, research stays and collaborations.",
    badge: "Demonstration entries",
    read: "Read note",
  },
};

function NewsPage() {
  const t = useLocalized(copy);
  const news = useNews();
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} lede={t.lede}>
        <div className="mt-8">
          <PendingBadge label={t.badge} />
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2">
          {news.map((n, i) => (
            <Reveal key={n.slug} delay={i * 70} className="bg-background">
              <Link
                to="/news/$slug"
                params={{ slug: n.slug }}
                className="group flex h-full flex-col gap-3 p-8 transition-colors hover:bg-secondary md:p-10"
              >
                <span className="eyebrow">
                  {n.category} · {n.date}
                </span>
                <h2 className="text-2xl leading-snug">{n.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
                <span className="mt-auto pt-6 text-sm text-primary">
                  {t.read}{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
