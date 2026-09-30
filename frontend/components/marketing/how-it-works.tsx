import {
  Building2,
  UsersRound,
  LayoutDashboard,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Create Your Institute",
    description:
      "Set up your institute and configure the basic details in just a few simple steps.",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "Set Up Your Team",
    description:
      "Add branches, teachers, staff, and define roles and permissions for your institute.",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Manage Everything",
    description:
      "Manage students, batches, attendance, fees, and daily institute operations from one place.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track & Grow",
    description:
      "Use reports, analytics, and AI-powered insights to make smarter decisions and improve outcomes.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t bg-muted/30 py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simple setup.{" "}
            <span className="text-primary">Powerful management.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Get your institute up and running with a simple workflow designed
            for modern education management.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-14 max-w-6xl lg:mt-20">
          {/* Connecting Line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-border lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >
                  {/* Step Icon */}
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border bg-background shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-md">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Step Number */}
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border bg-background text-xs font-bold text-primary shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="mx-auto mt-8 hidden h-5 w-5 text-muted-foreground/50 sm:block lg:hidden"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}