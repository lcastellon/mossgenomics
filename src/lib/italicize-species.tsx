import { Fragment, type ReactNode } from "react";

const SPECIES = "Pseudocrossidium replicatum";

export function italicizeSpecies(text: string): ReactNode {
  if (!text.includes(SPECIES)) return text;

  const nodes: ReactNode[] = [];
  let remainder = text;
  let index = remainder.indexOf(SPECIES);
  let key = 0;

  while (index !== -1) {
    if (index > 0) {
      nodes.push(<Fragment key={key++}>{remainder.slice(0, index)}</Fragment>);
    }
    nodes.push(<em key={key++}>{SPECIES}</em>);
    remainder = remainder.slice(index + SPECIES.length);
    index = remainder.indexOf(SPECIES);
  }

  if (remainder) {
    nodes.push(<Fragment key={key++}>{remainder}</Fragment>);
  }

  return nodes;
}
