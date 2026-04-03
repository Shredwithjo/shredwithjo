export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-white/40">
          Legal
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-black uppercase">
          Terms & Conditions
        </h1>
        <p className="mt-6 text-white/60 leading-relaxed">
          Effective date: March 31, 2026
        </p>

        <div className="mt-12 space-y-10 text-white/75 leading-8">
          <section>
            <h2 className="text-2xl font-bold text-white">1. Acceptance</h2>
            <p className="mt-3">
              By accessing this website, booking services, or purchasing
              coaching from Shred With Jo, you agree to these Terms &
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">2. Services</h2>
            <p className="mt-3">
              Shred With Jo provides online fitness coaching, educational
              guidance, accountability support, and related services. Any future
              nutrition support will be described according to the assigned
              professional’s qualifications and scope.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              3. No Medical Advice
            </h2>
            <p className="mt-3">
              Content on this website and within coaching services is for
              educational purposes only and is not medical advice, diagnosis, or
              treatment. You should consult a qualified healthcare professional
              before beginning any exercise or nutrition program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              4. Client Responsibility
            </h2>
            <p className="mt-3">By using our services, you agree that:</p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>You participate voluntarily</li>
              <li>You are responsible for your own health and safety</li>
              <li>You will disclose relevant injuries or medical concerns</li>
              <li>You understand results depend on your own consistency and effort</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              5. Results Disclaimer
            </h2>
            <p className="mt-3">
              Results are not guaranteed. Individual outcomes vary based on
              effort, adherence, health status, and other personal factors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">6. Payments</h2>
            <p className="mt-3">
              Payments for services, subscriptions, and coaching plans must be
              made according to the pricing listed at the time of purchase. By
              purchasing, you authorize the selected payment provider to process
              your payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">7. Refunds</h2>
            <p className="mt-3">
              Refunds are governed by our Refund Policy. By purchasing services,
              you also agree to that policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              8. Intellectual Property
            </h2>
            <p className="mt-3">
              All coaching materials, workout plans, branding, content, and
              resources remain the intellectual property of Shred With Jo and
              may not be copied, redistributed, sold, or shared without
              written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              9. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Shred With Jo is not
              liable for injuries, losses, damages, health complications, or
              other claims arising from participation in coaching or use of this
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">10. Termination</h2>
            <p className="mt-3">
              We reserve the right to refuse, suspend, or terminate services at
              our discretion where appropriate, including misuse of services,
              abuse, or breach of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">11. Updates</h2>
            <p className="mt-3">
              These Terms & Conditions may be updated from time to time. The
              latest version will appear on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">12. Contact</h2>
            <p className="mt-3">
              Questions may be sent to{" "}
              <a
                href="mailto:shredwithjo@gmail.com"
                className="underline underline-offset-4"
              >
                shredwithjo@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}