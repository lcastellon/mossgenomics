import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLink, PageHero, PendingBadge, Section } from "@/components/ui/primitives";
import { news, useNews } from "@/data/news";
import { useLocalized } from "@/lib/i18n";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = news.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Nota no disponible | Laboratorio 11" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.title} | Noticias — Laboratorio 11 CIBA-IPN` },
        { name: "description", content: item.excerpt },
        { property: "og:title", content: item.title },
        { property: "og:description", content: item.excerpt },
        { property: "og:url", content: `/news/${item.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/news/${item.slug}` }],
    };
  },
  component: NewsDetail,
  notFoundComponent: NewsNotFound,
});

const copy = {
  es: {
    notFound: "Nota no encontrada",
    all: "Ver todas las noticias",
    badge: "Nota de demostración",
    back: "Volver a noticias",
  },
  en: {
    notFound: "Note not found",
    all: "See all news",
    badge: "Demonstration entry",
    back: "Back to news",
  },
};

function NewsNotFound() {
  const t = useLocalized(copy);
  return (
    <Section>
      <h1 className="text-3xl">{t.notFound}</h1>
      <div className="mt-6">
        <ArrowLink to="/news">{t.all}</ArrowLink>
      </div>
    </Section>
  );
}

function NewsDetail() {
  const { item: fallback } = Route.useLoaderData();
  const t = useLocalized(copy);
  const localizedNews = useNews();
  const item = localizedNews.find((n) => n.slug === fallback.slug) ?? fallback;

  return (
    <>
      <PageHero eyebrow={`${item.category} · ${item.date}`} title={item.title}>
        {item.placeholder ? (
          <div className="mt-8">
            <PendingBadge label={t.badge} />
          </div>
        ) : null}
      </PageHero>
      <Section>
        <article className="max-w-2xl text-lg leading-relaxed text-foreground/80">
          {item.body}
        </article>
        <div className="mt-12">
          <ArrowLink to="/news">{t.back}</ArrowLink>
        </div>
      </Section>
    </>
  );
}
