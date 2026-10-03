"use client";

import { useState } from "react";

type FieldPreset = "stem" | "humanities" | "med";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<FieldPreset>("stem");

  const presets = {
    stem: {
      field: "Computer Science & Engineering",
      exam: "Algorithms Midterm in 9 Days",
      sessions: [
        { subject: "Dynamic Programming", time: "45 mins", difficulty: "High Priority", progress: "88% ready" },
        { subject: "Graph Traversal (Dijkstra/A*)", time: "30 mins", difficulty: "Review", progress: "94% ready" },
        { subject: "Complexity & Big-O Proofs", time: "25 mins", difficulty: "Quick Recall", progress: "100% ready" },
      ],
      aiNote: "Allocated extra focus to Dynamic Programming based on yesterday's quiz errors.",
    },
    med: {
      field: "Pre-Med / Biology",
      exam: "Human Physiology & MCAT Prep in 14 Days",
      sessions: [
        { subject: "Renal Function & Nephrons", time: "50 mins", difficulty: "High Priority", progress: "76% ready" },
        { subject: "Cardiac Action Potentials", time: "35 mins", difficulty: "Spaced Repetition", progress: "91% ready" },
        { subject: "Endocrine Feedback Loops", time: "25 mins", difficulty: "Active Recall", progress: "85% ready" },
      ],
      aiNote: "Swapped heavy anatomy recall to your morning 9:00 AM peak focus window.",
    },
    humanities: {
      field: "Law & Humanities",
      exam: "Constitutional Law Final in 12 Days",
      sessions: [
        { subject: "Fourteenth Amendment Jurisprudence", time: "40 mins", difficulty: "High Priority", progress: "80% ready" },
        { subject: "Commerce Clause Precedents", time: "35 mins", difficulty: "Case Synthesis", progress: "89% ready" },
        { subject: "Statutory Interpretation Methods", time: "20 mins", difficulty: "Quick Recall", progress: "95% ready" },
      ],
      aiNote: "Structured 2 case brief synthesis sessions interleaved with active recall checks.",
    },
  };

  const currentPreset = presets[activeTab];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Highlight Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-6 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span>AI-Driven Adaptive Spaced Repetition</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-semibold">Fall 2026 Ready</span>
        </div>

        {/* Main Title (Single H1) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]">
          Ace Every Exam Without the{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            Burnout and All-Nighters
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Upload your syllabus or course dates. StudyFlow AI builds an intelligent, day-by-day roadmap that automatically adjusts to your retention speed and daily energy.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Build My Study Plan</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-300 rounded-xl bg-slate-900/80 border border-slate-800 hover:bg-slate-800/80 hover:text-white transition-all"
          >
            <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>Explore Live Preview</span>
          </a>
        </div>

        {/* Social Proof Stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 border-t border-slate-800/80 pt-8 w-full max-w-3xl">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5 overflow-hidden">
              <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-indigo-500 text-[10px] font-bold text-white leading-6 text-center">A</span>
              <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-cyan-500 text-[10px] font-bold text-white leading-6 text-center">M</span>
              <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-violet-500 text-[10px] font-bold text-white leading-6 text-center">S</span>
              <span className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-950 bg-emerald-500 text-[10px] font-bold text-white leading-6 text-center">K</span>
            </div>
            <span className="font-medium text-slate-300">50,000+ active students</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400">
            <span className="font-bold">★ 4.9/5</span>
            <span className="text-slate-400 font-normal">from 2,400+ reviews</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Average GPA boost of +0.6</span>
          </div>
        </div>

        {/* Hero Visual Mockup: AI Study Planner Widget */}
        <div id="demo" className="mt-14 w-full max-w-4xl mx-auto">
          <div className="p-1 rounded-3xl bg-gradient-to-b from-indigo-500/30 via-slate-800/50 to-slate-900/20 shadow-2xl shadow-indigo-500/10">
            <div className="rounded-[22px] bg-slate-950/90 border border-slate-800/80 p-5 sm:p-7 backdrop-blur-xl text-left">
              {/* Mockup Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <h3 className="text-base font-semibold text-white">Today&apos;s Adaptive Schedule</h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Target: {currentPreset.exam}</p>
                </div>

                {/* Interactive field tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveTab("stem")}
                    className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                      activeTab === "stem" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    CS / STEM
                  </button>
                  <button
                    onClick={() => setActiveTab("med")}
                    className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                      activeTab === "med" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Pre-Med
                  </button>
                  <button
                    onClick={() => setActiveTab("humanities")}
                    className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                      activeTab === "humanities" ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Law
                  </button>
                </div>
              </div>

              {/* Session Queue */}
              <div className="mt-5 space-y-3">
                {currentPreset.sessions.map((session, index) => (
                  <div
                    key={session.subject}
                    className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      index === 0
                        ? "bg-indigo-950/20 border-indigo-500/40 shadow-sm"
                        : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === 0 ? "bg-indigo-500 text-white" : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">{session.subject}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-md font-medium border ${
                              index === 0
                                ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                                : "bg-slate-800 text-slate-400 border-slate-700"
                            }`}
                          >
                            {session.difficulty}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 block mt-0.5">Estimated Duration: {session.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:justify-end">
                      <div className="text-right">
                        <span className="text-xs font-mono text-emerald-400 font-medium">{session.progress}</span>
                        <span className="text-[10px] text-slate-500 block">Mastery Score</span>
                      </div>
                      <button className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-300 transition-colors border border-slate-700">
                        {index === 0 ? "Start Session" : "Review"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Dynamic Note */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="leading-relaxed">
                  <span className="font-semibold text-indigo-300">AI Scheduling Reason: </span>
                  {currentPreset.aiNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
