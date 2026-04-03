export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black uppercase">
          Terms & Conditions
        </h1>

        <div className="mt-10 space-y-6 text-white/70 leading-8">
          <p>
            By using this website and purchasing services, you agree to these
            terms.
          </p>

          <p>
            Coaching is for educational purposes only and is not medical advice.
          </p>

          <p>
            Results are not guaranteed and depend on your effort and consistency.
          </p>

          <p>
            You are responsible for your own health and must consult a doctor
            before starting any program.
          </p>

          <p>
            All content belongs to Shred With Jo and cannot be copied or shared.
          </p>
        </div>
      </div>
    </main>
  );
}