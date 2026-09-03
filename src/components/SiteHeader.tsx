import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLab, useNav } from "@/data/lab";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors hover:border-verdant hover:text-foreground",
        className,
      )}
    >
      <span className={cn(language === "es" && "text-foreground")}>EN</span>
      <span className="text-muted-foreground/60" aria-hidden>
        /
      </span>
      <span className={cn(language === "en" && "text-foreground")}>ES</span>
    </button>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lab = useLab();
  const nav = useNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-xl"
          : "border-b border-transparent bg-background/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-3.5 md:px-10">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-foreground">
              {lab.number}
            </span>
            <span className="mt-1 text-[11px] tracking-wide text-muted-foreground">
              {lab.name}
            </span>
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-guinda uppercase lg:inline">
            {lab.shortInstitution}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3 py-2 text-[13px] transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className={cn(item.label === "Pseudocrossidium" && "species")}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden xl:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menú"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
          >
          <span className="flex flex-col gap-1">
            <span className={cn("block h-px w-4 bg-current transition", open && "translate-y-[3px] rotate-45")} />
            <span className={cn("block h-px w-4 bg-current transition", open && "-translate-y-[3px] -rotate-45")} />
          </span>
        </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-6 pb-6 xl:hidden">
          <div className="pt-4">
            <LanguageToggle />
          </div>
          <ul className="grid gap-1 pt-3 sm:grid-cols-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-md px-3 py-2.5 text-sm text-foreground/85 hover:bg-secondary"
                >
                  <span className={cn(item.label === "Pseudocrossidium" && "species")}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
