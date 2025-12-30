import { Metadata } from "next";
import { Footer } from "@/components/footer";

// Placeholder component while FeatureUpdatesTimeline is unavailable
const FeatureUpdatesTimeline = () => (
  <div className="container mx-auto px-4 py-16 text-center text-slate-500">
    <p>Feature updates timeline coming soon…</p>
  </div>
);

export const metadata: Metadata = {
  title: "Product Updates - Cydenti",
  description: "Stay up to date with the latest features, improvements, and announcements from Cydenti.",
};

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Section */}
      <section className="bg-white border-b border-slate-100 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-700">Changelog</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            What&apos;s New in Cydenti
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover the latest updates, features, and improvements we&apos;ve made to help you secure your identity infrastructure.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="flex-1">
        <FeatureUpdatesTimeline />
      </section>

      {/* Newsletter / CTA (Optional) */}
      <section className="bg-white border-t border-slate-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Never miss an update</h2>
          <p className="text-slate-600 mb-8">Subscribe to our newsletter to get the latest product news directly in your inbox.</p>
          
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            <button className="px-6 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
