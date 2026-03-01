import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kacper Dula | Backend-focused Software Engineer",
  description:
    "Portfolio of Kacper Dula, a backend-focused junior software engineer building scalable systems and real-world applications.",
  keywords: [
    "Kacper Dula",
    "Software Engineer",
    "Backend Developer",
    "ASP.NET Core",
    "Spring Boot",
    "React",
    "Portfolio"
  ],
  openGraph: {
    title: "Kacper Dula | Backend-focused Software Engineer",
    description:
      "Portfolio showcasing backend systems, full-stack projects, and engineering experience.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
