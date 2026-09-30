import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Users,
} from "lucide-react";

/*
 * Solutions Section
 * -----------------
 * Shows how the platform helps different users
 * within an educational organization.
 *
 * We keep this separate from Features because:
 * - Features = what the product provides
 * - Solutions = who benefits and how
 */

const solutions = [
  {
    icon: Building2,
    title: "For Institute Admins",
    description:
      "Manage branches, students, teachers, batches, fees, reports and daily operations from a centralized platform.",
  },
  {
    icon: Users,
    title: "For Teachers",
    description:
      "Manage batches, attendance, learning materials, assignments, tests and student performance efficiently.",
  },
  {
    icon: GraduationCap,
    title: "For Students",
    description:
      "Access learning resources, assignments, tests, attendance and personal academic performance in one place.",
  },
  {
    icon: HeartHandshake,
    title: "For Parents",
    description:
      "Stay connected with attendance, academic progress, fees and important updates about your child.",
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="border-t border-border bg-background"
    >
      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-28">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">
            BUILT FOR EVERYONE
          </p>

          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One platform for your entire education ecosystem
          </h2>

          <p className="mt-4 text-pretty leading-7 text-muted-foreground">
            Connect administrators, teachers, students and parents
            through one secure and organized platform.
          </p>
        </div>

        {/* Solution cards */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-border
                  bg-card
                  p-7
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {/* Subtle decorative background */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute -right-10 -top-10
                    size-32
                    rounded-full
                    bg-primary/5
                    blur-2xl
                  "
                />

                <div
                  className="
                    relative
                    flex size-12 items-center justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                    transition-colors
                    group-hover:bg-primary
                    group-hover:text-primary-foreground
                  "
                >
                  <Icon className="size-6" />
                </div>

                <h3 className="relative mt-6 text-xl font-semibold text-card-foreground">
                  {solution.title}
                </h3>

                <p className="relative mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  {solution.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}