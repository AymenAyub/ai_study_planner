export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Student Results
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-3">
            Trusted by Top University Students
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-sm text-slate-300 leading-relaxed italic">
              &ldquo;StudyFlow completely eliminated the panic I usually experience before midterms. The spaced repetition algorithm felt like having a private tutor guide my focus.&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                SL
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Sarah Lin</h4>
                <p className="text-xs text-slate-400">Pre-Med @ Johns Hopkins</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-sm text-slate-300 leading-relaxed italic">
              &ldquo;I was juggling 5 difficult CS courses. The syllabus parser generated a schedule in 3 minutes that kept me 2 weeks ahead of all assignment deadlines.&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-cyan-600 flex items-center justify-center font-bold text-white text-xs">
                DK
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">David Kim</h4>
                <p className="text-xs text-slate-400">Computer Science @ UC Berkeley</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-sm text-slate-300 leading-relaxed italic">
              &ldquo;The exam readiness prediction was spot on. I knew exactly which legal precedents I had down cold and which ones needed another review before finals.&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white text-xs">
                ER
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Elena Rostova</h4>
                <p className="text-xs text-slate-400">Law Student @ Columbia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
