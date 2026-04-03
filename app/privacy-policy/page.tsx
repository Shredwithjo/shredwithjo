export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black uppercase">
          Privacy Policy
        </h1>

        <div className="mt-10 space-y-6 text-white/70 leading-8">
          <p>
            We collect basic information such as name, email, and fitness-related
            details to provide coaching services.
          </p>

          <p>
            Your data is used only for communication, coaching delivery, and
            improving your experience.
          </p>

          <p>
            Payments are processed securely via third-party providers. We do not
            store sensitive payment information.
          </p>

          <p>
            Your data will never be sold. We may update this policy at any time.
          </p>

          <p>Contact: shredwithjo@gmail.com</p>
        </div>
      </div>
    </main>
  );
}