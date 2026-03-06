"use client";

import { Command } from "cmdk";
import { useEffect, useMemo, useState } from "react";
import { personalInfo, sectionIds } from "@/lib/data";

type CommandItem = {
  id: string;
  label: string;
  run: () => void;
  keywords?: string[];
};

function scrollToSection(section: string) {
  const target = document.getElementById(section);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${section}`);
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isK = event.key.toLowerCase() === "k";
      if ((event.metaKey || event.ctrlKey) && isK) {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const items = useMemo<CommandItem[]>(
    () => [
      ...sectionIds.map((section) => ({
        id: section,
        label: `Go to ${section[0].toUpperCase()}${section.slice(1)}`,
        run: () => scrollToSection(section),
        keywords: ["section", "scroll", section]
      })),
      {
        id: "github",
        label: "Open GitHub",
        run: () => window.open(personalInfo.github, "_blank", "noopener,noreferrer"),
        keywords: ["repo", "projects", "code"]
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        run: () => window.open(personalInfo.linkedin, "_blank", "noopener,noreferrer")
      },
      {
        id: "email",
        label: "Email Kacper",
        run: () => window.open(`mailto:${personalInfo.email}`, "_self"),
        keywords: ["contact", "mail"]
      },
      {
        id: "top",
        label: "Back to top",
        run: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        keywords: ["hero"]
      }
    ],
    []
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-[70] rounded-full border border-cyan-300/45 bg-slate-950/88 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase shadow-[0_12px_30px_rgba(8,145,178,0.35)] backdrop-blur hover:bg-slate-900 md:bottom-6 md:left-6"
        aria-label="Open command palette"
      >
        Command K
      </button>
      {open && (
        <div className="fixed inset-0 z-[80] bg-slate-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <Command className="mx-auto mt-14 w-[min(700px,94vw)] overflow-hidden rounded-xl border border-cyan-300/30 bg-slate-950/95 shadow-[0_24px_80px_rgba(8,145,178,0.3)]">
            <div className="border-b border-cyan-300/20 px-4 py-3 text-xs text-cyan-300/80">
              Command Palette • Press <kbd className="rounded border border-cyan-300/35 px-1.5 py-0.5">Esc</kbd> to close
            </div>
            <Command.Input
              autoFocus
              placeholder="Type a command or section..."
              className="w-full border-b border-cyan-300/20 bg-transparent px-4 py-3 text-sm text-cyan-100 outline-none placeholder:text-cyan-300/40"
            />
            <Command.List className="max-h-[52vh] overflow-y-auto p-2">
              <Command.Empty className="px-3 py-2 text-sm text-cyan-300/60">No matches found.</Command.Empty>
              {items.map((item) => (
                <Command.Item
                  key={item.id}
                  keywords={item.keywords}
                  onSelect={() => {
                    item.run();
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm text-cyan-100 outline-none data-[selected=true]:bg-cyan-400/15"
                >
                  {item.label}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </div>
      )}
    </>
  );
}
