import {
  Building2,
  GraduationCap,
  UsersRound,
  UserRoundCheck,
  ArrowUpRight,
} from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Institute Admin",
    description:
      "Manage your institute, branches, staff, students, fees, and daily operations from one central platform.",
  },
  {
    icon: UsersRound,
    title: "Teachers",
    description:
      "Manage batches, track student progress, record attendance, and stay focused on teaching.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Access learning information, track progress, view schedules, and stay connected with your institute.",
  },
  {
    icon: UserRoundCheck,
    title: "Parents",
    description:
      "Stay informed about attendance, academic progress, fees, and important updates from the institute.",
  },
];

export function BuiltForEveryone() {
  return (
    <section
      id="built-for-everyone"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Built for Everyone
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            One Platform.{" "}
            <span className="text-primary">Everyone Connected.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Give every person in your institute the tools they need to manage,
            teach, learn, and stay connected.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <div
                key={audience.title}
                className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {audience.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex h-8 w-8 items-center justify-center rounded-full border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}