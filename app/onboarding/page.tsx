"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

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

export default function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    cityCountry: "",
    occupation: "",
    instagramHandle: "",
    emergencyContactName: "",
    emergencyContactPhone: "",

    primaryGoal: "",
    secondaryGoal: "",
    targetTimeline: "",
    motivation: "",

    trainingExperience: "",
    trainingDaysPerWeek: "",
    trainingLocation: "",
    injuriesOrLimitations: "",
    medicalConditions: "",
    medications: "",
    surgeryHistory: "",

    height: "",
    weight: "",
    goalWeight: "",
    sleepHours: "",
    stressLevel: "",
    activityLevel: "",

    dietStyle: "",
    allergies: "",
    foodsLiked: "",
    foodsDisliked: "",
    mealsPerDay: "",
    waterIntake: "",
    alcoholUse: "",

    coachingPlan: "",
    preferredCheckInDay: "",
    preferredContactMethod: "",
    whatsappNumber: "",

    readinessLevel: "",
    biggestObstacle: "",
    additionalNotes: "",

    healthConsent: false,
    policyConsent: false,
    communicationConsent: false,
    honestyConsent: false,
  });

  const updateField = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormValid =
    formData.fullName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.age.trim() &&
    formData.primaryGoal.trim() &&
    formData.trainingExperience.trim() &&
    formData.coachingPlan.trim() &&
    formData.preferredContactMethod.trim() &&
    formData.readinessLevel.trim() &&
    formData.healthConsent &&
    formData.policyConsent &&
    formData.communicationConsent &&
    formData.honestyConsent;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    setSubmitted(true);

    setTimeout(() => {
      const subject = encodeURIComponent(
        `New Shred With Jo Onboarding Form - ${formData.fullName}`
      );

      const body = encodeURIComponent(`
FULL NAME: ${formData.fullName}
EMAIL: ${formData.email}
PHONE: ${formData.phone}
AGE: ${formData.age}
GENDER: ${formData.gender}
CITY / COUNTRY: ${formData.cityCountry}
OCCUPATION: ${formData.occupation}
INSTAGRAM HANDLE: ${formData.instagramHandle}
EMERGENCY CONTACT NAME: ${formData.emergencyContactName}
EMERGENCY CONTACT PHONE: ${formData.emergencyContactPhone}

PRIMARY GOAL: ${formData.primaryGoal}
SECONDARY GOAL: ${formData.secondaryGoal}
TARGET TIMELINE: ${formData.targetTimeline}
MOTIVATION: ${formData.motivation}

TRAINING EXPERIENCE: ${formData.trainingExperience}
TRAINING DAYS PER WEEK: ${formData.trainingDaysPerWeek}
TRAINING LOCATION: ${formData.trainingLocation}
INJURIES OR LIMITATIONS: ${formData.injuriesOrLimitations}
MEDICAL CONDITIONS: ${formData.medicalConditions}
MEDICATIONS: ${formData.medications}
SURGERY HISTORY: ${formData.surgeryHistory}

HEIGHT: ${formData.height}
WEIGHT: ${formData.weight}
GOAL WEIGHT: ${formData.goalWeight}
SLEEP HOURS: ${formData.sleepHours}
STRESS LEVEL: ${formData.stressLevel}
ACTIVITY LEVEL: ${formData.activityLevel}

DIET STYLE: ${formData.dietStyle}
ALLERGIES: ${formData.allergies}
FOODS LIKED: ${formData.foodsLiked}
FOODS DISLIKED: ${formData.foodsDisliked}
MEALS PER DAY: ${formData.mealsPerDay}
WATER INTAKE: ${formData.waterIntake}
ALCOHOL USE: ${formData.alcoholUse}

COACHING PLAN: ${formData.coachingPlan}
PREFERRED CHECK-IN DAY: ${formData.preferredCheckInDay}
PREFERRED CONTACT METHOD: ${formData.preferredContactMethod}
WHATSAPP NUMBER: ${formData.whatsappNumber}

READINESS LEVEL: ${formData.readinessLevel}
BIGGEST OBSTACLE: ${formData.biggestObstacle}
ADDITIONAL NOTES: ${formData.additionalNotes}

CONSENTS:
Health Consent: ${formData.healthConsent ? "Yes" : "No"}
Policy Consent: ${formData.policyConsent ? "Yes" : "No"}
Communication Consent: ${formData.communicationConsent ? "Yes" : "No"}
Honesty Consent: ${formData.honestyConsent ? "Yes" : "No"}
      `);

      window.location.href = `mailto:shredwithjo@gmail.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="max-w-5xl mx-auto px-6 py-20 relative">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45 mb-5">
            Shred With Jo
          </p>

          <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.95]">
            Client
            <br />
            Onboarding Form
          </h1>

          <p className="mt-6 text-white/70 text-base md:text-lg max-w-3xl leading-relaxed">
            Welcome to Shred With Jo. Complete this onboarding form carefully so
            your coaching can be structured around your goals, lifestyle,
            training background, and current condition.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/50">
            <span className="border border-white/10 rounded-full px-4 py-2">
              Premium Coaching Intake
            </span>
            <span className="border border-white/10 rounded-full px-4 py-2">
              Goal Analysis
            </span>
            <span className="border border-white/10 rounded-full px-4 py-2">
              Lifestyle Review
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {submitted && (
            <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-bold">Almost Done</h2>
              <p className="mt-3 text-white/70 leading-relaxed">
                Your email app is opening with your completed onboarding form.
                Send the email to finish your submission.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Section 01
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                Personal Details
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                <Input
                  label="Full Name *"
                  value={formData.fullName}
                  onChange={(value) => updateField("fullName", value)}
                  placeholder="Enter your full name"
                />
                <Input
                  label="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={(value) => updateField("email", value)}
                  placeholder="Enter your email"
                />
                <Input
                  label="Phone Number *"
                  value={formData.phone}
                  onChange={(value) => updateField("phone", value)}
                  placeholder="Enter your phone number"
                />
                <Input
                  label="Age *"
                  value={formData.age}
                  onChange={(value) => updateField("age", value)}
                  placeholder="Enter your age"
                />
                <Input
                  label="Gender"
                  value={formData.gender}
                  onChange={(value) => updateField("gender", value)}
                  placeholder="Enter your gender"
                />
                <Input
                  label="City / Country"
                  value={formData.cityCountry}
                  onChange={(value) => updateField("cityCountry", value)}
                  placeholder="City / Country"
                />
                <Input
                  label="Occupation"
                  value={formData.occupation}
                  onChange={(value) => updateField("occupation", value)}
                  placeholder="Occupation"
                />
                <Input
                  label="Instagram Handle"
                  value={formData.instagramHandle}
                  onChange={(value) => updateField("instagramHandle", value)}
                  placeholder="@username"
                />
                <Input
                  label="Emergency Contact Name"
                  value={formData.emergencyContactName}
                  onChange={(value) =>
                    updateField("emergencyContactName", value)
                  }
                  placeholder="Emergency contact name"
                />
                <Input
                  label="Emergency Contact Phone"
                  value={formData.emergencyContactPhone}
                  onChange={(value) =>
                    updateField("emergencyContactPhone", value)
                  }
                  placeholder="Emergency contact phone"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Section 02
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                Goals & Motivation
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                <Input
                  label="Primary Goal *"
                  value={formData.primaryGoal}
                  onChange={(value) => updateField("primaryGoal", value)}
                  placeholder="Fat loss, muscle gain, recomposition, etc."
                />
                <Input
                  label="Secondary Goal"
                  value={formData.secondaryGoal}
                  onChange={(value) => updateField("secondaryGoal", value)}
                  placeholder="Secondary goal"
                />
                <Input
                  label="Target Timeline"
                  value={formData.targetTimeline}
                  onChange={(value) => updateField("targetTimeline", value)}
                  placeholder="Example: 3 months, 6 months"
                />
              </div>

              <div className="mt-5">
                <Textarea
                  label="Why is this goal important to you?"
                  value={formData.motivation}
                  onChange={(value) => updateField("motivation", value)}
                  placeholder="Tell me why this transformation matters to you"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Section 03
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                Training & Health Background
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                <Input
                  label="Training Experience *"
                  value={formData.trainingExperience}
                  onChange={(value) => updateField("trainingExperience", value)}
                  placeholder="Beginner, intermediate, advanced"
                />
                <Input
                  label="How many days can you train each week?"
                  value={formData.trainingDaysPerWeek}
                  onChange={(value) =>
                    updateField("trainingDaysPerWeek", value)
                  }
                  placeholder="Example: 3, 4, 5"
                />
                <Input
                  label="Where do you train?"
                  value={formData.trainingLocation}
                  onChange={(value) => updateField("trainingLocation", value)}
                  placeholder="Gym, home, both"
                />
                <Input
                  label="Surgery History"
                  value={formData.surgeryHistory}
                  onChange={(value) => updateField("surgeryHistory", value)}
                  placeholder="Any past surgeries"
                />
              </div>

              <div className="grid gap-5 mt-5">
                <Textarea
                  label="Current injuries, pain, or movement limitations"
                  value={formData.injuriesOrLimitations}
                  onChange={(value) =>
                    updateField("injuriesOrLimitations", value)
                  }
                  placeholder="Describe any injuries or limitations"
                />
                <Textarea
                  label="Medical conditions"
                  value={formData.medicalConditions}
                  onChange={(value) => updateField("medicalConditions", value)}
                  placeholder="List any relevant medical conditions"
                />
                <Textarea
                  label="Medications"
                  value={formData.medications}
                  onChange={(value) => updateField("medications", value)}
                  placeholder="List any medications you take"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Section 04
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                Body Stats & Lifestyle
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                <Input
                  label="Height"
                  value={formData.height}
                  onChange={(value) => updateField("height", value)}
                  placeholder="Example: 175 cm or 5'9"
                />
                <Input
                  label="Current Weight"
                  value={formData.weight}
                  onChange={(value) => updateField("weight", value)}
                  placeholder="Current weight"
                />
                <Input
                  label="Goal Weight"
                  value={formData.goalWeight}
                  onChange={(value) => updateField("goalWeight", value)}
                  placeholder="Goal weight"
                />
                <Input
                  label="Average Sleep Per Night"
                  value={formData.sleepHours}
                  onChange={(value) => updateField("sleepHours", value)}
                  placeholder="Example: 6 hours"
                />
                <Input
                  label="Stress Level"
                  value={formData.stressLevel}
                  onChange={(value) => updateField("stressLevel", value)}
                  placeholder="Low, moderate, high"
                />
                <Input
                  label="Daily Activity Level"
                  value={formData.activityLevel}
                  onChange={(value) => updateField("activityLevel", value)}
                  placeholder="Sedentary, active job, very active"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Section 05
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                Nutrition Details
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                <Input
                  label="Diet Style"
                  value={formData.dietStyle}
                  onChange={(value) => updateField("dietStyle", value)}
                  placeholder="No preference, vegetarian, halal, etc."
                />
                <Input
                  label="Food Allergies / Intolerances"
                  value={formData.allergies}
                  onChange={(value) => updateField("allergies", value)}
                  placeholder="List allergies or intolerances"
                />
                <Input
                  label="Meals Per Day"
                  value={formData.mealsPerDay}
                  onChange={(value) => updateField("mealsPerDay", value)}
                  placeholder="Example: 2, 3, 4"
                />
                <Input
                  label="Water Intake"
                  value={formData.waterIntake}
                  onChange={(value) => updateField("waterIntake", value)}
                  placeholder="Example: 2L daily"
                />
                <Input
                  label="Alcohol Use"
                  value={formData.alcoholUse}
                  onChange={(value) => updateField("alcoholUse", value)}
                  placeholder="Never, occasionally, regularly"
                />
              </div>

              <div className="grid gap-5 mt-5">
                <Textarea
                  label="Foods you enjoy"
                  value={formData.foodsLiked}
                  onChange={(value) => updateField("foodsLiked", value)}
                  placeholder="Foods you like eating"
                />
                <Textarea
                  label="Foods you dislike"
                  value={formData.foodsDisliked}
                  onChange={(value) => updateField("foodsDisliked", value)}
                  placeholder="Foods you do not like"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Section 06
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                Coaching Setup
              </h2>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                <Input
                  label="Selected Coaching Plan *"
                  value={formData.coachingPlan}
                  onChange={(value) => updateField("coachingPlan", value)}
                  placeholder="Transformation Coaching / Elite 1:1 Coaching"
                />
                <Input
                  label="Preferred Check-In Day"
                  value={formData.preferredCheckInDay}
                  onChange={(value) =>
                    updateField("preferredCheckInDay", value)
                  }
                  placeholder="Example: Sunday"
                />
                <Input
                  label="Preferred Contact Method *"
                  value={formData.preferredContactMethod}
                  onChange={(value) =>
                    updateField("preferredContactMethod", value)
                  }
                  placeholder="WhatsApp, email, Instagram"
                />
                <Input
                  label="WhatsApp Number"
                  value={formData.whatsappNumber}
                  onChange={(value) => updateField("whatsappNumber", value)}
                  placeholder="WhatsApp number"
                />
                <Input
                  label="Readiness Level *"
                  value={formData.readinessLevel}
                  onChange={(value) => updateField("readinessLevel", value)}
                  placeholder="Rate your commitment from 1 to 10"
                />
                <Input
                  label="Biggest Obstacle"
                  value={formData.biggestObstacle}
                  onChange={(value) => updateField("biggestObstacle", value)}
                  placeholder="Time, consistency, motivation, food, etc."
                />
              </div>

              <div className="mt-5">
                <Textarea
                  label="Anything else I should know?"
                  value={formData.additionalNotes}
                  onChange={(value) => updateField("additionalNotes", value)}
                  placeholder="Add anything important that will help your coaching"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Final Confirmation
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                Client Consents
              </h2>

              <div className="mt-8 space-y-4">
                <ConsentRow
                  checked={formData.healthConsent}
                  onChange={(checked) => updateField("healthConsent", checked)}
                  label="I understand that fitness coaching is not medical advice, and I should consult a qualified healthcare professional before starting if I have any medical concerns."
                />

                <ConsentRow
                  checked={formData.policyConsent}
                  onChange={(checked) => updateField("policyConsent", checked)}
                  label={
                    <>
                      I have read and agree to the{" "}
                      <Link
                        href="/privacy-policy"
                        className="underline underline-offset-4 hover:text-white"
                      >
                        Privacy Policy
                      </Link>
                      ,{" "}
                      <Link
                        href="/terms-and-conditions"
                        className="underline underline-offset-4 hover:text-white"
                      >
                        Terms & Conditions
                      </Link>
                      ,{" "}
                      <Link
                        href="/refund-policy"
                        className="underline underline-offset-4 hover:text-white"
                      >
                        Refund Policy
                      </Link>
                      , and{" "}
                      <Link
                        href="/client-agreement"
                        className="underline underline-offset-4 hover:text-white"
                      >
                        Client Agreement
                      </Link>
                      .
                    </>
                  }
                />

                <ConsentRow
                  checked={formData.communicationConsent}
                  onChange={(checked) =>
                    updateField("communicationConsent", checked)
                  }
                  label="I agree to be contacted by Shred With Jo regarding my coaching, onboarding, progress check-ins, and service-related communication."
                />

                <ConsentRow
                  checked={formData.honestyConsent}
                  onChange={(checked) => updateField("honestyConsent", checked)}
                  label="I confirm that the information I provided is accurate and honest to the best of my knowledge."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Submit Your Onboarding Form
                  </h2>
                  <p className="mt-3 text-white/65 max-w-2xl leading-relaxed">
                    Clicking submit will open your email app with the completed
                    onboarding form ready to send to{" "}
                    <span className="text-white font-medium">
                      shredwithjo@gmail.com
                    </span>
                    .
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`px-8 py-4 rounded-2xl font-semibold transition duration-300 ${
                    isFormValid
                      ? "bg-white text-black hover:opacity-90 hover:scale-[1.01]"
                      : "bg-white/20 text-white/35 cursor-not-allowed"
                  }`}
                >
                  Submit Onboarding Form
                </button>
              </div>

              <p className="mt-4 text-sm text-white/40">
                Fields marked with * are required.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-white/70 mb-3">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/25 outline-none focus:border-white/30 transition"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-white/70 mb-3">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/25 outline-none focus:border-white/30 transition resize-none"
      />
    </label>
  );
}

function ConsentRow({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
}) {
  return (
    <label className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/40 p-4 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 accent-white cursor-pointer"
      />
      <span className="text-white/75 leading-relaxed">{label}</span>
    </label>
  );
}