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

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const calendlyLink = "https://calendly.com/shredwithjo/30min";

  const fadeUp = (delay = "") =>
    `transition-all duration-1000 ease-out ${delay} ${
      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-center lg:text-left">
            <div className={fadeUp("")}>
              <p className="text-sm uppercase tracking-[0.35em] text-white/45 mb-5">
                Elite Body Transformation Coaching
              </p>
            </div>

            <div className={fadeUp("delay-100")}>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-[0.95]">
                Shred
                <br />
                With Jo
              </h1>
            </div>

            <div className={fadeUp("delay-200")}>
              <p className="mt-6 text-white/70 text-base md:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Elite transformation coaching for serious individuals ready to
                lose fat, build muscle, and create a physique that reflects
                discipline, strength, and higher standards.
              </p>
            </div>

            <div
              className={`${fadeUp(
                "delay-300"
              )} mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4`}
            >
              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 hover:scale-[1.02] transition duration-300 shadow-2xl shadow-white/10"
              >
                Book Free Strategy Call
              </a>

              <a
                href="#pricing"
                className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                View Programs
              </a>
            </div>

            <div
              className={`${fadeUp(
                "delay-500"
              )} mt-8 flex flex-wrap gap-6 text-sm text-white/50 justify-center lg:justify-start`}
            >
              <span>Custom Coaching</span>
              <span>Fat Loss</span>
              <span>Muscle Gain</span>
              <span>High Accountability</span>
            </div>
          </div>

          <div
            className={`${fadeUp("delay-300")} flex justify-center lg:justify-end`}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-white/5 blur-3xl rounded-full" />
              <div className="relative border border-white/10 bg-white/[0.03] rounded-[2rem] p-6 md:p-8 backdrop-blur-sm shadow-2xl shadow-black/50">
                <img
                  src="/logo.png"
                  alt="Shred With Jo logo"
                  className="w-72 md:w-80 mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Built For Real Results
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Everything is built to make your transformation structured,
            realistic, and results-driven.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12 text-left">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold">Custom Training</h3>
              <p className="mt-3 text-white/60">
                Training built around your body, schedule, recovery, and goals.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold">Nutrition Guidance</h3>
              <p className="mt-3 text-white/60">
                Simple, structured nutrition to support fat loss and muscle
                growth.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold">Accountability</h3>
              <p className="mt-3 text-white/60">
                Check-ins, structure, and support that keep you consistent.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold">Proven System</h3>
              <p className="mt-3 text-white/60">
                Built for visible, lasting transformation — not random workouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">About</h2>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At Shred With Jo, the goal is simple: help serious individuals build
            elite physiques through structure, discipline, and proven coaching.
            Whether your goal is fat loss, muscle gain, or body recomposition,
            you get a system built to create real results — not guesswork.
          </p>
        </div>
      </section>

      <section id="programs" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
            Transformation Paths
          </h2>
          <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
            Choose the path that fits your current goal and build from there.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Fat Loss</h3>
              <p className="mt-3 text-white/60">
                Drop body fat, tighten your physique, and build consistent
                habits that last.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Muscle Gain</h3>
              <p className="mt-3 text-white/60">
                Build size, strength, confidence, and a more powerful body.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Body Recomp</h3>
              <p className="mt-3 text-white/60">
                Build muscle while getting leaner with a structured balanced
                approach.
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
            Start with a strategy call, see the system, and choose the coaching
            level that fits your goal.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Free Consultation</h3>
              <p className="mt-3 text-white/60">
                A free strategy call to assess your goal, identify what’s
                missing, and map out your best next step.
              </p>
              <p className="mt-6 text-4xl font-black">Free</p>
              <p className="text-white/50 mt-1">30 minutes</p>

              <ul className="mt-6 space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Goal analysis
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Personalized direction
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Best program recommendation
                </li>
              </ul>

              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                Book Call
              </a>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Free Trial</h3>
              <p className="mt-3 text-white/60">
                Book a free strategy session and see exactly how the coaching
                process works before committing.
              </p>
              <p className="mt-6 text-4xl font-black">Free</p>
              <p className="text-white/50 mt-1">strategy session</p>

              <ul className="mt-6 space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Learn the coaching system
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Ask direct questions
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Book with serious intent
                </li>
              </ul>

              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                Book Free Session
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
                Structured coaching for clients who want visible progress,
                accountability, and consistency.
              </p>
              <p className="mt-6 text-4xl font-black">$59</p>
              <p className="text-black/60 mt-1">per month</p>

              <ul className="mt-6 space-y-3 text-black/80">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Custom workout plan
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Nutrition guidance
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Check-ins and support
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Progress adjustments
                </li>
              </ul>

              <a
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0AB36958U01027707NHEY2MY"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition duration-300"
              >
                Join Now
              </a>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Elite 1:1 Coaching</h3>
              <p className="mt-3 text-white/60">
                Premium coaching with deeper customization, closer support, and
                faster transformation.
              </p>
              <p className="mt-6 text-4xl font-black">$119</p>
              <p className="text-white/50 mt-1">per month</p>

              <ul className="mt-6 space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Fully customized training
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Personalized nutrition plan
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Priority support
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Weekly feedback
                </li>
              </ul>

              <a
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0EA97291R5377261KNHEZCDA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                Apply for Elite
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
            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold">Custom Plan</h3>
              <p className="mt-3 text-white/60">
                Training and nutrition tailored to your body, your schedule, and
                your exact goal.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold">Accountability</h3>
              <p className="mt-3 text-white/60">
                Stay consistent with direct support, structure, and clear
                expectations.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold">Real Results</h3>
              <p className="mt-3 text-white/60">
                Built for people who want visible transformation, not average
                effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Client Results
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Transformation stories and results will be featured here as the
            brand grows.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 transition duration-300">
              <h3 className="text-xl font-semibold">Fat Loss Results</h3>
              <p className="mt-3 text-white/60">
                Leaner physiques, stronger habits, and better consistency.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 transition duration-300">
              <h3 className="text-xl font-semibold">Muscle Gain Results</h3>
              <p className="mt-3 text-white/60">
                More size, more strength, and a more powerful presence.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 transition duration-300">
              <h3 className="text-xl font-semibold">Body Recomp Results</h3>
              <p className="mt-3 text-white/60">
                Build muscle while getting leaner with a clear structured
                approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Ready To Build An Elite Physique?
          </h2>
          <p className="mt-4 text-white/60">
            Book your free strategy call and take the first serious step toward
            your transformation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 hover:scale-[1.02] transition duration-300"
            >
              Book Free Strategy Call
            </a>

            <a
              href="tel:+14374235777"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              <PhoneIcon />
              Call Now
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