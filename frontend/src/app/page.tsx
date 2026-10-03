import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function StudyPlannerLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Lighting Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full" />
      </div>

      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
