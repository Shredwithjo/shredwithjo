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
      aria-hidden="true"
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
      aria-hidden="true"
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
      aria-hidden="true"
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
      aria-hidden="true"
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
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-center lg:text-left">
            <div className={fadeUp("")}>
              <p className="text-sm uppercase tracking-[0.35em] text-white/45 mb-5">
                Online Fitness Coaching
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
                Online fitness coaching for fat loss, muscle gain, and body
                recomposition. Shred With Jo helps beginners and serious lifters
                build a leaner, stronger physique with structured training,
                nutrition guidance, and accountability.
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
                Book Free Coaching Call
              </a>

              <a
                href="#coaching"
                className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                View Coaching
              </a>
            </div>

            <div
              className={`${fadeUp(
                "delay-500"
              )} mt-8 flex flex-wrap gap-6 text-sm text-white/50 justify-center lg:justify-start`}
            >
              <span>Online Fitness Coach</span>
              <span>Fat Loss Coaching</span>
              <span>Muscle Gain Coaching</span>
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
                  alt="Shred With Jo online fitness coaching logo"
                  className="w-72 md:w-80 mx-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Built For Real Results
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Everything is designed to make your fitness transformation
            structured, realistic, and results-driven.
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
                Simple, structured nutrition support for fat loss, muscle gain,
                and better consistency.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold">Accountability</h3>
              <p className="mt-3 text-white/60">
                Check-ins, structure, and support to keep you on track.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-lg font-semibold">Proven System</h3>
              <p className="mt-3 text-white/60">
                Built for visible, lasting transformation instead of random
                workouts and guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            About Shred With Jo
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Shred With Jo is an online fitness coaching brand focused on helping
            people lose fat, build muscle, and improve body composition through
            clear structure, disciplined habits, and coaching that fits real
            life. Whether your goal is beginner fat loss, muscle building, or
            body recomposition, the process is designed to be practical,
            supportive, and effective.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
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
              <h3 className="text-2xl font-bold">Fat Loss Coaching</h3>
              <p className="mt-3 text-white/60">
                Drop body fat, tighten your physique, and build consistent
                habits that last.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Muscle Gain Coaching</h3>
              <p className="mt-3 text-white/60">
                Build size, strength, confidence, and a more powerful body.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Body Recomposition</h3>
              <p className="mt-3 text-white/60">
                Build muscle while getting leaner with a structured balanced
                approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COACHING */}
      <section id="coaching" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
            Start Your Transformation
          </h2>
          <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
            Start with a free coaching call to understand your goal, your
            current situation, and the best next step for your fitness journey.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
            <div className="border border-white rounded-2xl p-8 bg-white text-black hover:scale-[1.02] transition duration-300 shadow-2xl shadow-white/5">
              <p className="text-sm font-semibold uppercase tracking-widest">
                Best Place To Start
              </p>
              <h3 className="text-2xl font-bold mt-3">Free Coaching Call</h3>
              <p className="mt-3 text-black/70">
                A focused call to assess your goal, identify what is holding you
                back, and map out your next best move.
              </p>

              <ul className="mt-6 space-y-3 text-black/80">
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
                  Coaching recommendation
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  30-minute call
                </li>
              </ul>

              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition duration-300"
              >
                Book Call
              </a>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">Online Coaching</h3>
              <p className="mt-3 text-white/60">
                Personalized support for people who want structure,
                accountability, and a clear training direction.
              </p>

              <ul className="mt-6 space-y-3 text-white/70">
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
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                Learn More
              </a>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
              <h3 className="text-2xl font-bold">1:1 Fitness Coaching</h3>
              <p className="mt-3 text-white/60">
                A more direct coaching experience with deeper customization and
                closer support.
              </p>

              <ul className="mt-6 space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Fully customized training
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Personalized nutrition support
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Priority guidance
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon />
                  Weekly feedback
                </li>
              </ul>

              <a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH JO */}
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

      {/* RESULTS */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Client Results
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Transformation stories and progress updates will be featured here as
            the brand grows.
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

      {/* SEO CONTENT - visible, natural, useful */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-center">
            Online Fitness Coaching
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
            Shred With Jo provides online fitness coaching for people who want
            to lose fat, build muscle, and improve body composition with a clear
            training structure. The coaching process is designed for beginners,
            intermediate lifters, and busy people who need a practical system
            for fitness, nutrition, and accountability.
          </p>

          <h2 className="mt-12 text-2xl md:text-4xl font-bold uppercase text-center">
            Fitness Coaching In Toronto And Online
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
            Based in Toronto, Shred With Jo offers online personal training and
            fitness coaching for clients locally and remotely. Whether your goal
            is weight loss, muscle building, strength improvement, or body
            recomposition, the focus is on sustainable results and consistent
            progress.
          </p>

          <h2 className="mt-12 text-2xl md:text-4xl font-bold uppercase text-center">
            Personal Training For Fat Loss, Muscle Gain, And Body Recomposition
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
            This coaching is built for common fitness goals including fat loss,
            muscle gain, beginner gym coaching, online personal training,
            nutrition guidance, and accountability coaching. Instead of generic
            plans, each client gets a more structured path based on their
            current level, lifestyle, and transformation target.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase">
            Ready To Start Your Fitness Transformation?
          </h2>
          <p className="mt-4 text-white/60">
            Book your free coaching call and take the first serious step toward
            a leaner, stronger body.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 hover:scale-[1.02] transition duration-300"
            >
              Book Free Coaching Call
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

      {/* FOOTER */}
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