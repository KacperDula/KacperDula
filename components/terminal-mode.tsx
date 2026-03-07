"use client";

import { useEffect, useMemo, useState } from "react";
import { personalInfo, projects } from "@/lib/data";

function buildTerminalLines() {
  const lines = [
    "$ whoami",
    personalInfo.name,
    "$ role --current",
    personalInfo.title,
    `$ location --base "${personalInfo.location}"`,
    "$ ls projects/"
  ];

  projects.forEach((project) => {
    lines.push(`- ${project.title}`);
  });

  lines.push("$ git status");
  lines.push("On branch career-growth");
  lines.push("Ready to build production software.");
  return lines;
}

export function TerminalMode() {
  const [open, setOpen] = useState(false);
  const lines = useMemo(buildTerminalLines, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed right-4 bottom-4 z-[70] rounded-full border border-cyan-300/45 bg-slate-950/88 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase shadow-[0_12px_30px_rgba(8,145,178,0.35)] backdrop-blur hover:bg-slate-900 md:right-6 md:bottom-6"
        aria-expanded={open}
        aria-controls="terminal-overlay"
      >
        {open ? "Close Terminal" : "Terminal Mode"}
      </button>

      {open && (
        <div className="fixed inset-0 z-[65] bg-slate-950/72 backdrop-blur-sm">
          <section
            id="terminal-overlay"
            className="mx-auto mt-16 w-[min(920px,92vw)] rounded-xl border border-cyan-300/40 bg-slate-950/95 shadow-[0_24px_80px_rgba(8,145,178,0.3)]"
            aria-label="Terminal mode summary"
          >
            <header className="flex items-center justify-between border-b border-cyan-300/20 px-4 py-3">
              <p className="font-mono text-sm text-cyan-200">kacper@portfolio:~</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded border border-cyan-300/35 px-2 py-1 text-xs text-cyan-200 hover:bg-cyan-300/10"
              >
                ESC
              </button>
            </header>
            <div className="max-h-[70vh] overflow-y-auto p-4 font-mono text-sm leading-7 text-cyan-100">
              {lines.map((line, index) => (
                <p key={`${line}-${index}`} className={line.startsWith("$") ? "text-cyan-300" : "text-cyan-100"}>
                  {line}
                </p>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
