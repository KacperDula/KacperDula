"use client";

import { useEffect } from "react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void | Promise<void>) => { finished: Promise<void> };
};

export function ViewTransitions() {
  useEffect(() => {
    const doc = document as ViewTransitionDocument;
    if (!doc.startViewTransition) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href.length <= 1) return;

      const sectionId = href.slice(1);
      const section = document.getElementById(sectionId);
      if (!section) return;

      event.preventDefault();
      doc.startViewTransition(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${sectionId}`);
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
