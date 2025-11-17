export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-50">
        Terms &amp; Conditions
      </h1>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
        These are placeholder terms for Scheddy. Replace this content with your
        real legal copy before going live.
      </p>
      <p className="text-slate-400 text-xs">
        Last updated: {new Date().getFullYear()}
      </p>
    </main>
  );
}

