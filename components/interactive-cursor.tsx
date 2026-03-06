"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function InteractiveCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.2 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.2 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) return;
    setEnabled(true);

    const targets = Array.from(document.querySelectorAll<HTMLElement>("a, button"));

    const moveCursor = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);
    };

    const leavePage = () => setVisible(false);

    const moveMagnetic = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      target.style.transform = `translate(${dx * 0.14}px, ${dy * 0.14}px)`;
    };

    const resetMagnetic = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      target.style.transform = "";
    };

    targets.forEach((target) => {
      target.classList.add("magnetic-target");
      target.addEventListener("mousemove", moveMagnetic);
      target.addEventListener("mouseleave", resetMagnetic);
    });

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", leavePage);

    return () => {
      targets.forEach((target) => {
        target.classList.remove("magnetic-target");
        target.removeEventListener("mousemove", moveMagnetic);
        target.removeEventListener("mouseleave", resetMagnetic);
        target.style.transform = "";
      });
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", leavePage);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300"
        style={{ x: smoothX, y: smoothY, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[89] h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-md"
        style={{ x: smoothX, y: smoothY, opacity: visible ? 0.95 : 0 }}
      />
    </>
  );
}
