"use client";

import {
  Bot,
  Brain,
  ChartNoAxesCombined,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const aiCapabilities = [
  {
    icon: Brain,
    title: "AI Student Insights",
    description:
      "Understand student performance, attendance, and learning patterns to identify where students need more attention.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description:
      "Get personalized study recommendations based on student performance, weak areas, and learning progress.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "AI Reports & Analytics",
    description:
      "Turn institute data into meaningful insights with intelligent reports for students, batches, and overall performance.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Ask questions about students, batches, fees, and institute data using simple natural language.",
  },
];

export function AICapabilities() {
  return (
    <section
      id="ai-capabilities"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            AI-Powered
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            AI-Powered Learning &{" "}
            <span className="text-primary">Institute Management</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Turn everyday institute data into smarter decisions,
            personalized learning, and better student outcomes.
          </p>
        </div>

        {/* AI Capability Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {aiCapabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <div
                key={capability.title}
                className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold tracking-tight">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>

                {/* Learn more indicator */}
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}