import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudyFlow AI — Intelligent Study Planner & Exam Mastery",
  description:
    "Generate adaptive study schedules from your syllabi, master topics with spaced repetition, and achieve top grades without burnout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
        {children}
      </body>
    </html>
  );
}
