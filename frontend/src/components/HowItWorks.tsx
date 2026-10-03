export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 border-t border-slate-800/80 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Simple 3-Step Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-4">
            How StudyFlow Works
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Turn an intimidating syllabus into bite-sized daily victories without manual calendar math.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center font-bold text-lg mb-5">
              01
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Upload or Input Topics</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Drop your syllabus PDF, link your digital notes, or pick key chapters. The AI extracts deadlines and material volume automatically.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-bold text-lg mb-5">
              02
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Receive Your Dynamic Roadmap</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              The algorithm sequences topics based on cognitive load, spaced repetition intervals, and your realistic daily study bandwidth.
            </p>
          </div>

          <div className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 flex items-center justify-center font-bold text-lg mb-5">
              03
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Execute & Adapt In Real-Time</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Life happens. If you skip a day or struggle with a concept, StudyFlow silently recalculates future sessions without guilt or chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
