export default function Features() {
  const features = [
    {
      title: "Instant Syllabus Parser",
      description: "Upload your course syllabus PDF or paste exam dates. AI parses topics, weights, and milestones in seconds.",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      badge: "Automation",
    },
    {
      title: "Adaptive Spaced Repetition",
      description: "Mathematical review curves schedule your review sessions right when forgetting starts, cementing memory.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      badge: "Science-Backed",
    },
    {
      title: "Burnout & Cram Prevention",
      description: "Evenly balances workload across your available weeks so you never need panic-fueled 3 AM all-nighters.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      badge: "Wellness",
    },
    {
      title: "Energy-Aware Scheduling",
      description: "Aligns challenging math and logic problems with your peak biological focus hours, saving light reading for lulls.",
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      badge: "Smart Rhythm",
    },
    {
      title: "Active Recall Flashcards",
      description: "Automatically converts complex lecture slides and notes into high-yield question prompts for self-testing.",
      icon: (
        <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      badge: "AI Generation",
    },
    {
      title: "Exam Readiness Score",
      description: "Real-time probabilistic mastery scores across every topic so you always know exactly which areas need attention.",
      icon: (
        <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: "Analytics",
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-4">
            Engineered for High-Stakes Exam Mastery
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Everything you need to master difficult material and retain knowledge for finals and board exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/60">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
