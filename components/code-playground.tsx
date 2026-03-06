"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type PlayfulSnippet = {
  line: string;
  source: string;
  left: string;
  top: string;
};

const playfulSnippets: PlayfulSnippet[] = [
  { line: 'printf("hello, world\\n");', source: "C", left: "6%", top: "16%" },
  { line: 'print("Hello, World!")', source: "Python", left: "69%", top: "14%" },
  { line: "10 PRINT \"HELLO, WORLD!\"", source: "BASIC", left: "18%", top: "44%" },
  { line: "GOTO 10", source: "BASIC", left: "79%", top: "46%" },
  { line: "public static void main(String[] args)", source: "Java", left: "34%", top: "70%" },
  { line: "console.log('Hello, world');", source: "JavaScript", left: "57%", top: "66%" },
  { line: "SELECT * FROM users;", source: "SQL", left: "9%", top: "76%" },
  { line: "for(;;) { /* ... */ }", source: "C/C++", left: "76%", top: "80%" }
];

export function CodePlayground() {
  const boundsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div ref={boundsRef} className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {playfulSnippets.map((snippet, index) => {
        const mobileHidden = index > 3 ? "hidden md:block" : "";
        return (
          <motion.div
            key={`${snippet.source}-${snippet.line}`}
            className={`pointer-events-auto absolute ${mobileHidden}`}
            style={{ left: snippet.left, top: snippet.top }}
            drag
            dragElastic={0.12}
            dragMomentum
            dragConstraints={boundsRef}
            whileDrag={{ scale: 1.06, rotate: 0, cursor: "grabbing" }}
            initial={{ opacity: 0, y: 10 }}
            animate={reduceMotion ? { opacity: 0.9, y: 0 } : { opacity: [0.62, 0.92, 0.7], y: [0, -4, 0], rotate: [-1, 1, -1] }}
            transition={reduceMotion ? { duration: 0.2, delay: index * 0.04 } : { duration: 5.2 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="max-w-[230px] cursor-grab rounded-lg border border-cyan-200/35 bg-slate-950/82 px-3 py-2 text-cyan-100 shadow-[0_12px_30px_rgba(8,145,178,0.35)] backdrop-blur">
              <code className="block text-[11px] leading-5">{snippet.line}</code>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300/95">{snippet.source}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
