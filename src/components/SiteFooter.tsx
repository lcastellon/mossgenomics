import { Link } from "@tanstack/react-router";
import { useLab } from "@/data/lab";
import { useFooterCopy, useFooterLinks } from "@/data/footer";

export function SiteFooter() {
  const lab = useLab();
  const copy = useFooterCopy();
  const footerLinks = useFooterLinks();
  return (
    <footer className="bg-primary px-6 py-16 text-primary-foreground md:px-10 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">{lab.number}</p>
          <p className="mt-1 text-sm text-primary-foreground/70">{lab.name}</p>
          <p className="mt-6 text-sm text-primary-foreground/90">{lab.lead.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
            {lab.center}
            <br />
            {lab.institution}
            <br />
            {lab.location}
          </p>
        </div>

        <nav>
          <p className="eyebrow text-primary-foreground/50">{copy.navigation}</p>
          <ul className="mt-5 space-y-2.5">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-primary-foreground/50">{copy.institutional}</p>
          <ul className="mt-5 space-y-2.5">
            {lab.institutionalLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary-foreground/80 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-6xl flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {lab.number} · {lab.name}
        </p>
        <p className="font-mono tracking-[0.18em] uppercase">
          Modelo de estudio · <span className="species tracking-normal normal-case">Pseudocrossidium replicatum</span>
        </p>
      </div>
    </footer>
  );
}
