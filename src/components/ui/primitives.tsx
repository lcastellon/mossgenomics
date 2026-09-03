import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "paper" | "forest" | "muted";
}) {
  const tones = {
    default: "bg-background text-foreground",
    paper: "bg-card text-card-foreground",
    muted: "bg-secondary text-secondary-foreground",
    forest: "bg-primary text-primary-foreground",
  } as const;
  return (
    <section id={id} className={cn("px-6 py-20 md:px-10 md:py-28", tones[tone], className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("mt-4 text-3xl leading-[1.1] md:text-5xl", className)}>{children}</h2>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function Sp({ children }: { children: ReactNode }) {
  return <span className="species">{children}</span>;
}

export function Tag({ children, tone = "moss" }: { children: ReactNode; tone?: "moss" | "guinda" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide uppercase",
        tone === "moss"
          ? "border-border bg-secondary text-secondary-foreground"
          : "border-guinda/30 bg-guinda/8 text-guinda",
      )}
    >
      {children}
    </span>
  );
}

export function PendingBadge({ label = "Placeholder" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-guinda/25 bg-guinda/8 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.14em] uppercase text-guinda">
      <span className="size-1.5 rounded-full bg-guinda" aria-hidden />
      {label}
    </span>
  );
}

type ButtonTone = "solid" | "outline" | "ghost" | "onDark";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

const buttonTones: Record<ButtonTone, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-forest hover:shadow-[var(--shadow-soft)]",
  outline: "border border-primary/25 text-primary hover:border-primary hover:bg-primary/5",
  ghost: "text-primary hover:opacity-70",
  onDark:
    "border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10",
};

export function ActionLink({
  to,
  tone = "solid",
  children,
  className,
  ...rest
}: { to: string; tone?: ButtonTone; children: ReactNode; className?: string } & Omit<
  ComponentProps<typeof Link>,
  "to" | "className" | "children"
>) {
  return (
    <Link to={to} className={cn(buttonBase, buttonTones[tone], className)} {...rest}>
      {children}
    </Link>
  );
}

export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 border-b border-primary/25 pb-1 text-sm font-medium text-primary transition-colors hover:border-primary"
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border bg-card px-6 pt-36 pb-16 md:px-10 md:pt-44 md:pb-24">
      <div className="mx-auto w-full max-w-6xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lede}</p>
        ) : null}
        {children}
      </div>
    </header>
  );
}

export function DataRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-border py-4 md:grid-cols-[200px_1fr] md:gap-6">
      <dt className="eyebrow pt-1">{label}</dt>
      <dd className="text-sm leading-relaxed text-foreground/90">{value}</dd>
    </div>
  );
}
