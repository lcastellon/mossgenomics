import { describe, expect, test } from "bun:test";
import { sitemapXML } from "./sitemap";

describe("sitemap XML", () => {
  test("uses the public domain and deduplicates pages", () => {
    const xml = sitemapXML("https://mossgenomics.lovable.app", [
      { path: "/" }, { path: "/research" }, { path: "/research" },
    ]);
    expect(xml.match(/<loc>/g)?.length).toBe(2);
    expect(xml).toContain("<loc>https://mossgenomics.lovable.app/research</loc>");
  });

  test("does not invent modification dates", () => {
    expect(sitemapXML("https://mossgenomics.lovable.app", [{ path: "/" }]))
      .not.toContain("<lastmod>");
  });

  test("rejects paths that could escape the public origin", () => {
    expect(() => sitemapXML("https://mossgenomics.lovable.app", [{ path: "//example.com" }]))
      .toThrow("Invalid sitemap path");
  });
});