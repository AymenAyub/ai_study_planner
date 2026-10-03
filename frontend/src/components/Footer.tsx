export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                S
              </div>
              <span className="font-bold text-white text-base tracking-tight">StudyFlow AI</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
              The smart academic planning companion that converts coursework, syllabi, and test deadlines into manageable, high-retention study roadmaps.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>All AI planning engines operational</span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Product</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Syllabus Parser</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Spaced Repetition</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Planner</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Mastery Analytics</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Resources</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Study Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Active Recall Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MCAT & LSAT Prep</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Community</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} StudyFlow AI, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
            <a href="#" className="hover:text-slate-400 transition-colors">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
