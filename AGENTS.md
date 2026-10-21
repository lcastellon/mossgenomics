<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Sitemap
- Derive static sitemap URLs from router inventory and require an explicit `staticData.sitemap` decision on every route so new pages cannot silently bypass discoverability review.
- Exclude dynamic detail routes while their collections primarily contain demonstration or pending content; review verified records before enabling dynamic inclusion.
- Omit sitemap `lastmod` unless an authoritative page-specific significant-content timestamp is available; generated dates misrepresent content freshness.
