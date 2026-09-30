import {
  BarChart3,
  BookOpen,
  Building2,
  CreditCard,
  GraduationCap,
  Users,
} from "lucide-react";

/*
 * Features Section
 * ----------------
 * Shows the core capabilities of the education platform.
 *
 * Design rule:
 * - Use semantic theme tokens.
 * - No hardcoded brand colors.
 * - Keep the component reusable.
 */

const features = [
  {
    icon: GraduationCap,
    title: "Student Management",
    description:
      "Manage student profiles, enrollment, batches, academic records and day-to-day activities from one place.",
  },
  {
    icon: Users,
    title: "Teacher & Staff Management",
    description:
      "Organize teachers, staff members, responsibilities and access permissions across your institute.",
  },
  {
    icon: Building2,
    title: "Institute & Branch Management",
    description:
      "Manage multiple institutes and branches with structured access and centralized administration.",
  },
  {
    icon: CreditCard,
    title: "Fees & Payments",
    description:
      "Track fees, payments, pending dues and financial records with a clear and organized workflow.",
  },
  {
    icon: BookOpen,
    title: "Learning & Assessments",
    description:
      "Manage learning materials, assignments, tests and academic activities for students and teachers.",
  },
  {
    icon: BarChart3,
    title: "Performance & Analytics",
    description:
      "Understand attendance, academic performance and institute-level insights through useful reports.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-border bg-muted/30"
    >
      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-28">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">
            PLATFORM FEATURES
          </p>

          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything your institute needs
          </h2>

          <p className="mt-4 text-pretty leading-7 text-muted-foreground">
            A unified platform to manage students, teachers, branches,
            learning, payments and performance without jumping between
            multiple systems.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="
                  group rounded-xl
                  border border-border
                  bg-card
                  p-6
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                {/* Feature icon */}
                <div
                  className="
                    flex size-11 items-center justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary
                    transition-colors
                    group-hover:bg-primary
                    group-hover:text-primary-foreground
                  "
                >
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}