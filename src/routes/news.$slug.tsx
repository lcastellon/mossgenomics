import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLink, PageHero, PendingBadge, Section } from "@/components/ui/primitives";
import { news } from "@/data/news";

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

function NewsNotFound() {
  return (
    <Section>
      <h1 className="text-3xl">Nota no encontrada</h1>
      <div className="mt-6">
        <ArrowLink to="/news">Ver todas las noticias</ArrowLink>
      </div>
    </Section>
  );
}

function NewsDetail() {
  const { item } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow={`${item.category} · ${item.date}`} title={item.title}>
        {item.placeholder ? (
          <div className="mt-8">
            <PendingBadge label="Nota de demostración" />
          </div>
        ) : null}
      </PageHero>
      <Section>
        <article className="max-w-2xl text-lg leading-relaxed text-foreground/80">
          {item.body}
        </article>
        <div className="mt-12">
          <ArrowLink to="/news">Volver a noticias</ArrowLink>
        </div>
      </Section>
    </>
  );
}
