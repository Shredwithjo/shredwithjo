"use client";

import { useEffect, useState } from "react";

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

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [agreedToPolicies, setAgreedToPolicies] = useState(false);
  const [selectedPlanLink, setSelectedPlanLink] = useState("");
  const [selectedPlanName, setSelectedPlanName] = useState("");

  useEffect(() => {
    setLoaded(true);
  }, []);

  const calendlyLink = "https://calendly.com/shredwithjo/30min";
  const transformationPlanLink =
    "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0AB36958U01027707NHEY2MY";
  const elitePlanLink =
    "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0EA97291R5377261KNHEZCDA";

  const fadeUp = (delay = "") =>
    `transition-all duration-1000 ease-out ${delay} ${
      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  const openPolicyModal = (planName: string, planLink: string) => {
    setSelectedPlanName(planName);
    setSelectedPlanLink(planLink);
    setAgreedToPolicies(false);
    setShowPolicyModal(true);
  };

  const handleContinueToPayment = () => {
    if (!agreedToPolicies || !selectedPlanLink) return;
    window.open(selectedPlanLink, "_blank", "noopener,noreferrer");
    setShowPolicyModal(false);
  };

  return (
    <>
      <main className="min-h-screen bg-black text-white scroll-smooth">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03),transparent)]" />

          <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
            <div className="text-center lg:text-left">
              <div className={fadeUp("")}>
                <p className="text-sm uppercase tracking-[0.35em] text-white/45 mb-5">
                  Online Fitness Coaching + Nutrition Support
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
                  Premium body transformation coaching designed to help you lose
                  fat, build muscle, improve body composition, and stay
                  accountable with a structured plan built around your lifestyle.
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
                  href="#services"
                  className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
                >
                  View Services
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
                <span>Nutrition Support</span>
                <span>High Accountability</span>
              </div>
            </div>

            <div
              className={`${fadeUp(
                "delay-300"
              )} flex justify-center lg:justify-end`}
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

        {/* TRUST STRIP */}
        <section className="px-6 py-6 border-t border-b border-white/10">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-xs md:text-sm uppercase tracking-[0.25em] text-white/40 text-center">
            <span>Online Fitness Coaching</span>
            <span>Transformation Focused</span>
            <span>Nutrition Support</span>
            <span>Premium Coaching Experience</span>
          </div>
        </section>

        {/* VALUE */}
        <section className="px-6 py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase">
              Built For Real Results
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Everything is designed to make your transformation structured,
              realistic, and results-driven.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-12 text-left">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-lg font-semibold">Custom Training</h3>
                <p className="mt-3 text-white/60">
                  Programs built around your body, recovery, schedule, and
                  goals.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-lg font-semibold">Nutrition Guidance</h3>
                <p className="mt-3 text-white/60">
                  Structured support for better eating habits and long-term
                  consistency.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-lg font-semibold">Accountability</h3>
                <p className="mt-3 text-white/60">
                  Check-ins, support, and clear next steps so you stay on track.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-lg font-semibold">Premium Experience</h3>
                <p className="mt-3 text-white/60">
                  A more personalized coaching path for serious transformation.
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
              Shred With Jo is built for people who want a leaner, stronger,
              healthier body through training, accountability, and structured
              support. Whether your goal is fat loss, muscle gain, or body
              recomposition, the coaching process is designed to simplify your
              path and keep you progressing.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="px-6 py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
              Services
            </h2>
            <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
              Choose the level of support that fits your goal, your current
              stage, and the type of transformation you want.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">Fitness Coaching</h3>
                <p className="mt-3 text-white/60">
                  Personalized training guidance, structure, accountability, and
                  support for body transformation.
                </p>
                <ul className="mt-6 space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Custom workout plan
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Progress tracking
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Accountability support
                  </li>
                </ul>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">Nutrition Support</h3>
                <p className="mt-3 text-white/60">
                  Nutrition support is being expanded and will later include a
                  dedicated qualified professional on the team.
                </p>
                <ul className="mt-6 space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Nutrition habit guidance
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Meal structure support
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Future specialist integration
                  </li>
                </ul>
              </div>

              <div className="border border-white rounded-2xl p-8 bg-white text-black hover:scale-[1.02] transition duration-300 shadow-2xl shadow-white/5">
                <p className="text-sm font-semibold uppercase tracking-widest">
                  Most Complete Option
                </p>
                <h3 className="text-2xl font-bold mt-3">
                  Premium Transformation
                </h3>
                <p className="mt-3 text-black/70">
                  A premium path combining fitness coaching, accountability, and
                  nutrition-focused support for a more complete transformation.
                </p>
                <ul className="mt-6 space-y-3 text-black/80">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Training + accountability
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Nutrition-focused direction
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Priority support path
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM / NUTRITIONIST PLACEHOLDER */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
              Meet The Team
            </h2>
            <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
              Your coaching experience is being built to include both training
              and nutrition support under one transformation brand.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  Founder
                </p>
                <h3 className="text-2xl font-bold mt-3">Jo</h3>
                <p className="mt-3 text-white/60">
                  Founder of Shred With Jo, focused on body transformation,
                  discipline, structure, and helping clients build a leaner,
                  stronger physique.
                </p>
              </div>

              <div className="border border-dashed border-white/20 rounded-2xl p-8 bg-white/[0.02]">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  Coming Soon
                </p>
                <h3 className="text-2xl font-bold mt-3">
                  Nutrition Professional
                </h3>
                <p className="mt-3 text-white/60">
                  This section is reserved for your future nutrition specialist.
                  Their qualifications, bio, service scope, and booking path can
                  be added later.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM PATHS */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
              Transformation Paths
            </h2>
            <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
              Choose the path that best matches your current goal.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">Fat Loss</h3>
                <p className="mt-3 text-white/60">
                  Drop body fat, tighten your physique, and build consistency.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">Muscle Gain</h3>
                <p className="mt-3 text-white/60">
                  Build size, strength, confidence, and a stronger body.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">Body Recomposition</h3>
                <p className="mt-3 text-white/60">
                  Build muscle while getting leaner with a structured approach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING / SUBSCRIPTIONS */}
        <section id="pricing" className="px-6 py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
              Coaching Plans
            </h2>
            <p className="mt-4 text-white/60 text-center max-w-2xl mx-auto">
              Start with a free coaching call or subscribe directly to a
              coaching plan that fits your current goal.
            </p>

            <div className="mt-10 max-w-3xl mx-auto border border-white/10 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-sm md:text-base text-white/70 text-center leading-relaxed">
                Paid plans require policy review before checkout. When a client
                clicks a paid plan, a mandatory review popup appears before
                payment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">Free Coaching Call</h3>
                <p className="mt-3 text-white/60">
                  A free strategy call to understand your goal, identify what is
                  missing, and recommend the best path.
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
                    Direction and recommendations
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    Best next-step plan
                  </li>
                </ul>

                <a
                  href={calendlyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
                >
                  Book Call
                  <ArrowIcon />
                </a>
              </div>

              <div className="border border-white rounded-2xl p-8 bg-white text-black hover:scale-[1.02] transition duration-300 shadow-2xl shadow-white/5">
                <p className="text-sm font-semibold uppercase tracking-widest">
                  Popular
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

                <button
                  type="button"
                  onClick={() =>
                    openPolicyModal(
                      "Transformation Coaching",
                      transformationPlanLink
                    )
                  }
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition duration-300"
                >
                  Subscribe Now
                  <ArrowIcon />
                </button>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-white/25 hover:-translate-y-1 transition duration-300">
                <h3 className="text-2xl font-bold">Elite 1:1 Coaching</h3>
                <p className="mt-3 text-white/60">
                  Premium coaching with deeper customization, closer support,
                  and a higher-touch experience.
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

                <button
                  type="button"
                  onClick={() =>
                    openPolicyModal("Elite 1:1 Coaching", elitePlanLink)
                  }
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-300"
                >
                  Subscribe Elite
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-sm text-white/40 tracking-[0.2em] uppercase">
                  Step 01
                </p>
                <h3 className="text-xl font-semibold mt-3">
                  Book Or Subscribe
                </h3>
                <p className="mt-3 text-white/60">
                  Start with a free call or subscribe to the plan that suits
                  your current goal.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-sm text-white/40 tracking-[0.2em] uppercase">
                  Step 02
                </p>
                <h3 className="text-xl font-semibold mt-3">Complete Intake</h3>
                <p className="mt-3 text-white/60">
                  Share your goals, training background, lifestyle, and
                  important health details before starting.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-sm text-white/40 tracking-[0.2em] uppercase">
                  Step 03
                </p>
                <h3 className="text-xl font-semibold mt-3">
                  Start Transforming
                </h3>
                <p className="mt-3 text-white/60">
                  Follow your plan with accountability, support, and progress
                  tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS PLACEHOLDER */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase">
              Client Results
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">
              Transformation stories, testimonials, and progress updates will be
              featured here as the brand grows.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Fat Loss Results</h3>
                <p className="mt-3 text-white/60">
                  Leaner physiques, stronger habits, and better consistency.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Muscle Gain Results</h3>
                <p className="mt-3 text-white/60">
                  More size, more strength, and a stronger presence.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Body Recomp Results</h3>
                <p className="mt-3 text-white/60">
                  Structured transformation for a leaner, stronger physique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
              Frequently Asked Questions
            </h2>

            <div className="mt-12 space-y-6">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">
                  Is the coaching personalized?
                </h3>
                <p className="mt-3 text-white/60">
                  Yes. Your coaching is based on your goals, experience level,
                  lifestyle, and progress.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Can beginners join?</h3>
                <p className="mt-3 text-white/60">
                  Yes. Programs can be adjusted for complete beginners as well
                  as more experienced clients.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Is nutrition included?</h3>
                <p className="mt-3 text-white/60">
                  Nutrition guidance is included at the coaching level described
                  on the site. A dedicated nutrition professional can be added
                  later as the team expands.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">
                  How do I get started?
                </h3>
                <p className="mt-3 text-white/60">
                  Book a free coaching call or subscribe to one of the available
                  plans to begin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REFUND POLICY */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
              Refund Policy
            </h2>
            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
              Due to the nature of digital coaching, planning, and time
              allocation, coaching services are generally non-refundable once
              services have started or coaching materials have been delivered.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">
                  Refunds May Be Considered
                </h3>
                <ul className="mt-4 space-y-3 text-white/60">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    If a billing error occurred
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    If the service has not yet started
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    If duplicate payment was made by mistake
                  </li>
                </ul>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">
                  Refunds Will Not Be Issued
                </h3>
                <ul className="mt-4 space-y-3 text-white/60">
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    For change of mind after service begins
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    For lack of results caused by non-compliance
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon />
                    For failure to follow the plan
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-white/55">
              To request a refund review, clients should email{" "}
              <a
                href="mailto:shredwithjo@gmail.com"
                className="underline underline-offset-4"
              >
                shredwithjo@gmail.com
              </a>{" "}
              with their name, payment date, and reason for the request.
            </p>
          </div>
        </section>

        {/* TERMS + AGREEMENT SUMMARY */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center uppercase">
              Terms, Conditions & Client Agreement
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Website Terms</h3>
                <p className="mt-3 text-white/60 leading-relaxed">
                  By using this website or purchasing services, you agree that
                  all coaching content is for educational purposes, results are
                  not guaranteed, and you remain responsible for your own
                  health, choices, and participation.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Client Agreement</h3>
                <p className="mt-3 text-white/60 leading-relaxed">
                  By paying for coaching, booking, or proceeding with services,
                  the client agrees to the coaching terms, payment terms, refund
                  policy, and participation disclaimer.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Health Disclaimer</h3>
                <p className="mt-3 text-white/60 leading-relaxed">
                  Clients should consult a qualified healthcare professional
                  before starting any fitness or nutrition-related program,
                  especially if they have injuries, medical concerns, or
                  existing conditions.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-semibold">Content Ownership</h3>
                <p className="mt-3 text-white/60 leading-relaxed">
                  All programs, plans, materials, and coaching resources remain
                  the property of Shred With Jo and may not be copied, shared,
                  or resold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-center">
              Online Fitness Coaching
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
              Shred With Jo provides online fitness coaching for people who want
              to lose fat, build muscle, improve body composition, and follow a
              clear transformation system with structure and accountability.
            </p>

            <h2 className="mt-12 text-2xl md:text-4xl font-bold uppercase text-center">
              Fitness Coaching In Toronto And Online
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
              Based in Toronto, Shred With Jo supports clients online with body
              transformation coaching, fitness structure, nutrition support, and
              premium guidance for sustainable progress.
            </p>

            <h2 className="mt-12 text-2xl md:text-4xl font-bold uppercase text-center">
              Fat Loss, Muscle Gain, And Body Recomposition Support
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
              Whether your goal is fat loss coaching, muscle gain coaching,
              beginner fitness coaching, body recomposition, or online personal
              training support, the process is designed to be structured,
              practical, and easy to follow.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase">
              Ready To Start Your Transformation?
            </h2>
            <p className="mt-4 text-white/60">
              Book your free coaching call or subscribe to a plan and take the
              first serious step toward your transformation.
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
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 font-semibold hover:bg-white hover:text-black transition duration-300"
              >
                View Plans
              </a>
            </div>
          </div>
        </section>

        {/* FOLLOW */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase">
              Follow The Journey
            </h2>
            <p className="mt-4 text-white/60">
              Follow @shredwithjo for fitness tips, training content, and
              transformation updates.
            </p>

            <a
              href="https://www.instagram.com/shredwithjo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-xl border border-white/20 font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              <InstagramIcon />
              Follow On Instagram
            </a>
          </div>
        </section>
      </main>

      {/* POLICY / PAYMENT MODAL */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowPolicyModal(false)}
          />

          <div className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b0b0b] p-8 shadow-2xl shadow-black/60">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] pointer-events-none" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Before Continuing
              </p>

              <h3 className="mt-3 text-2xl md:text-3xl font-bold">
                Review And Accept Before Payment
              </h3>

              <p className="mt-4 text-white/65 leading-relaxed">
                You are about to continue with{" "}
                <span className="text-white font-semibold">
                  {selectedPlanName}
                </span>
                . Please review the policies below and confirm your agreement
                before proceeding to payment.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="/privacy-policy"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-white/25 hover:bg-white/[0.06] transition duration-300"
                >
                  <span>Privacy Policy</span>
                  <ArrowIcon />
                </a>

                <a
                  href="/terms-and-conditions"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-white/25 hover:bg-white/[0.06] transition duration-300"
                >
                  <span>Terms & Conditions</span>
                  <ArrowIcon />
                </a>

                <a
                  href="/refund-policy"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-white/25 hover:bg-white/[0.06] transition duration-300"
                >
                  <span>Refund Policy</span>
                  <ArrowIcon />
                </a>

                <a
                  href="/client-agreement"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-white/25 hover:bg-white/[0.06] transition duration-300"
                >
                  <span>Client Agreement</span>
                  <ArrowIcon />
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="modal-policy-agreement"
                    checked={agreedToPolicies}
                    onChange={(e) => setAgreedToPolicies(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-white cursor-pointer"
                  />
                  <label
                    htmlFor="modal-policy-agreement"
                    className="text-sm md:text-base text-white/75 leading-relaxed cursor-pointer"
                  >
                    I have read and agree to the Privacy Policy, Terms &
                    Conditions, Refund Policy, and Client Agreement before
                    proceeding with payment.
                  </label>
                </div>
              </div>

              <div className="mt-4 text-sm text-white/45">
                You must check the agreement box before continuing.
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleContinueToPayment}
                  disabled={!agreedToPolicies}
                  className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
                    agreedToPolicies
                      ? "bg-white text-black hover:opacity-90"
                      : "bg-white/20 text-white/40 cursor-not-allowed"
                  }`}
                >
                  Continue To Payment
                </button>

                <button
                  type="button"
                  onClick={() => setShowPolicyModal(false)}
                  className="px-6 py-3 rounded-xl border border-white/20 text-center hover:bg-white hover:text-black transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}