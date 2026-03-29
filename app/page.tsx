"use client";

import { useEffect, useState } from "react";

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const fadeUp = (delay: string) =>
    `transition-all duration-1000 ease-out ${delay} ${
      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <div className={fadeUp("")}>
            <img
              src="/logo.png"
              alt="Shred With Jo logo"
              className="w-52 md:w-64 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            />
          </div>

          <div className={fadeUp("delay-100")}>
            <h1 className="text-5xl md:text-7xl font-black tracking-wide uppercase">
              Shred With Jo
            </h1>
          </div>

          <div className={fadeUp("delay-200")}>
            <p className="mt-5 text-white/65 text-base md:text-lg max-w-2xl mx-auto leading-loose">
              Built for those ready to rise above average. <br />
              Discipline. Strength. Proven transformation. <br />
              Wherever you start — we build something powerful.
            </p>
          </div>

          <div
            className={`${fadeUp(
              "delay-300"
            )} mt-10 flex flex-col sm:flex-row items-center justify-center gap-4`}
          >
            <a
              href="https://www.instagram.com/shredwithjo"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
            >
              Instagram
            </a>

            <a
              href="#pricing"
              className="px-7 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 hover:scale-[1.02] transition duration-300"
            >
              Start Program
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">About</h2>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At Shred With Jo, we help clients transform their physique through
            structured training, smart nutrition, accountability, and proven
            systems that actually work. Whether your goal is fat loss, muscle
            gain, or body recomposition, the focus is always the same: building
            a stronger body, a sharper mindset, and lasting discipline.
          </p>
        </div>
      </section>

      <section id="programs" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
            Programs
          </h2>
          <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
            Choose the transformation path that matches your goal.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Fat Loss</h3>
              <p className="mt-3 text-white/60">
                Burn body fat, improve conditioning, and build lasting
                discipline.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Muscle Gain</h3>
              <p className="mt-3 text-white/60">
                Build size, strength, confidence, and a more powerful physique.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Body Recomp</h3>
              <p className="mt-3 text-white/60">
                Get leaner while building muscle with a structured
                transformation plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
            Start Your Transformation
          </h2>
          <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
            Start with a free consultation, try the system, and choose the
            coaching level that fits your goal.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Free Consultation</h3>
              <p className="mt-3 text-white/60">
                A free call to understand your goals, current level, and best
                next step.
              </p>
              <p className="mt-6 text-4xl font-black">Free</p>
              <p className="text-white/50 mt-1">one-time</p>

              <ul className="mt-6 space-y-3 text-white/70">
                <li>Goal assessment</li>
                <li>Fitness roadmap</li>
                <li>Program recommendation</li>
              </ul>

              <a
                href="tel:+14374235777"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                <PhoneIcon />
                Book Call
              </a>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">7-Day Free Trial</h3>
              <p className="mt-3 text-white/60">
                Experience the structure, coaching style, and system before
                committing.
              </p>
              <p className="mt-6 text-4xl font-black">Free</p>
              <p className="text-white/50 mt-1">for 7 days</p>

              <ul className="mt-6 space-y-3 text-white/70">
                <li>Starter training plan</li>
                <li>Basic nutrition guidance</li>
                <li>Trial support</li>
              </ul>

              <a
                href="https://www.instagram.com/shredwithjo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                <InstagramIcon />
                Start Trial
              </a>
            </div>

            <div className="border border-white rounded-2xl p-8 bg-white text-black hover:scale-[1.02] transition duration-300 shadow-2xl shadow-white/5">
              <p className="text-sm font-semibold uppercase tracking-widest">
                Most Popular
              </p>
              <h3 className="text-2xl font-bold mt-3">
                Transformation Coaching
              </h3>
              <p className="mt-3 text-black/70">
                Ideal for clients who want structure, accountability, and
                visible progress.
              </p>
              <p className="mt-6 text-4xl font-black">$59</p>
              <p className="text-black/60 mt-1">per month</p>

              <ul className="mt-6 space-y-3 text-black/80">
                <li>Custom workout plan</li>
                <li>Nutrition guidance</li>
                <li>Check-ins and support</li>
                <li>Progress adjustments</li>
              </ul>

              <a
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0AB36958U01027707NHEY2MY"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition duration-300"
              >
                Get Started
              </a>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Elite 1:1 Coaching</h3>
              <p className="mt-3 text-white/60">
                Premium coaching with higher support, deeper customization, and
                closer accountability.
              </p>
              <p className="mt-6 text-4xl font-black">$119</p>
              <p className="text-white/50 mt-1">per month</p>

              <ul className="mt-6 space-y-3 text-white/70">
                <li>Fully customized training</li>
                <li>Personalized nutrition plan</li>
                <li>Priority support</li>
                <li>Weekly feedback</li>
              </ul>

              <a
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0EA97291R5377261KNHEZCDA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                Go Elite
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Why Work With Jo
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold">Custom Plan</h3>
              <p className="mt-3 text-white/60">
                Training and nutrition tailored to your body, schedule, and
                goal.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold">Accountability</h3>
              <p className="mt-3 text-white/60">
                Stay consistent with structure, check-ins, and direct support.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold">Real Results</h3>
              <p className="mt-3 text-white/60">
                Built for visible transformation through proven methods and
                consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Ready to Become Unstoppable?
          </h2>
          <p className="mt-4 text-white/60">
            Message me on Instagram to book your free consultation or begin your
            transformation today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+14374235777"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 hover:scale-[1.02] transition duration-300"
            >
              <PhoneIcon />
              Book Free Consultation
            </a>

            <a
              href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0AB36958U01027707NHEY2MY"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Start Coaching
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase">Contact</h2>
          <p className="mt-4 text-white/55">
            Reach out and start your transformation.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href="tel:+14374235777"
              className="flex items-center justify-center gap-3 border border-white/10 rounded-2xl px-6 py-5 text-white/80 hover:bg-white hover:text-black hover:border-white transition duration-300"
            >
              <PhoneIcon />
              <span>+1 437 423 5777</span>
            </a>

            <a
              href="mailto:shredwithjo@gmail.com"
              className="flex items-center justify-center gap-3 border border-white/10 rounded-2xl px-6 py-5 text-white/80 hover:bg-white hover:text-black hover:border-white transition duration-300"
            >
              <MailIcon />
              <span>shredwithjo@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/shredwithjo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 border border-white/10 rounded-2xl px-6 py-5 text-white/80 hover:bg-white hover:text-black hover:border-white transition duration-300"
            >
              <InstagramIcon />
              <span>@shredwithjo</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}