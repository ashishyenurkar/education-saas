
import Link from "next/link";

/*
 * Marketing Hero
 * --------------
 * Main introduction section of the public landing page.
 *
 * The Hero communicates:
 * - What the platform is
 * - Who it is for
 * - The main value proposition
 * - Primary actions
 *
 * We use semantic design tokens instead of hardcoded colors
 * so the section automatically supports Light/Dark themes.
 */

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* =================================================
          Background Decoration
          -------------------------------------------------
          Subtle brand-colored glow.
          This is decorative only and does not affect layout.
          ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* =================================================
          Hero Content
          ================================================= */}

      <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">

          {/* -------------------------------------------------
              Badge
              ------------------------------------------------- */}

          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            AI-powered education management platform
          </div>

          {/* -------------------------------------------------
              Main Heading
              ------------------------------------------------- */}

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Manage your coaching institute smarter
          </h1>

          {/* -------------------------------------------------
              Supporting Description
              ------------------------------------------------- */}

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Manage students, teachers, batches, attendance, fees,
            learning and performance from one modern platform —
            built for coaching institutes and educational organizations.
          </p>

          {/* -------------------------------------------------
              Primary Actions
              ------------------------------------------------- */}

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Primary CTA */}
            <Link
              href="/login"
              className="
                inline-flex h-11 items-center justify-center
                rounded-md
                bg-primary
                px-6
                text-sm font-semibold
                text-primary-foreground
                shadow-sm
                transition-colors
                hover:bg-primary/90
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              Get Started
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#features"
              className="
                inline-flex h-11 items-center justify-center
                rounded-md
                border border-border
                bg-background
                px-6
                text-sm font-semibold
                text-foreground
                shadow-sm
                transition-colors
                hover:bg-muted
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              Explore Platform
            </Link>
          </div>

          {/* -------------------------------------------------
              Trust / Audience Message
              -------------------------------------------------
              Instead of fake customer logos or fake numbers,
              we communicate the actual platform audience.
              ------------------------------------------------- */}

          <p className="mt-6 text-sm text-muted-foreground">
            Built for institutes, teachers, students and parents.
          </p>
        </div>

        {/* =================================================
            Product Preview
            -------------------------------------------------
            Temporary dashboard visual.

            Later this will become a proper reusable
            DashboardPreview component or product screenshot.
            ================================================= */}

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">

            {/* Browser-style header */}
            <div className="flex h-10 items-center gap-2 border-b border-border bg-muted/50 px-4">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-warning/70" />
              <span className="size-2.5 rounded-full bg-success/70" />

              <div className="ml-3 h-5 flex-1 rounded-md bg-background" />
            </div>

            {/* Dashboard preview */}
            <div className="grid min-h-[320px] grid-cols-1 md:grid-cols-[180px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-border bg-muted/30 p-4 md:block">
                <div className="mb-6 h-7 w-24 rounded-md bg-primary/15" />

                <div className="space-y-3">
                  <div className="h-8 rounded-md bg-primary/10" />
                  <div className="h-8 rounded-md bg-muted" />
                  <div className="h-8 rounded-md bg-muted" />
                  <div className="h-8 rounded-md bg-muted" />
                  <div className="h-8 rounded-md bg-muted" />
                </div>
              </aside>

              {/* Main dashboard area */}
              <div className="p-5 sm:p-7">

                <div className="mb-6">
                  <div className="h-6 w-40 rounded-md bg-foreground/10" />
                  <div className="mt-2 h-4 w-64 rounded-md bg-muted" />
                </div>

                {/* Stats */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="h-24 rounded-lg border border-border bg-background p-4">
                    <div className="h-3 w-16 rounded bg-muted" />
                    <div className="mt-4 h-6 w-20 rounded bg-primary/20" />
                  </div>

                  <div className="h-24 rounded-lg border border-border bg-background p-4">
                    <div className="h-3 w-16 rounded bg-muted" />
                    <div className="mt-4 h-6 w-20 rounded bg-accent" />
                  </div>

                  <div className="h-24 rounded-lg border border-border bg-background p-4">
                    <div className="h-3 w-16 rounded bg-muted" />
                    <div className="mt-4 h-6 w-20 rounded bg-success/20" />
                  </div>

                  <div className="h-24 rounded-lg border border-border bg-background p-4">
                    <div className="h-3 w-16 rounded bg-muted" />
                    <div className="mt-4 h-6 w-20 rounded bg-warning/20" />
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="mt-5 h-32 rounded-lg border border-border bg-background p-4">
                  <div className="h-3 w-28 rounded bg-muted" />

                  <div className="mt-6 flex h-16 items-end gap-2">
                    <div className="h-8 flex-1 rounded-sm bg-primary/20" />
                    <div className="h-12 flex-1 rounded-sm bg-primary/30" />
                    <div className="h-10 flex-1 rounded-sm bg-primary/40" />
                    <div className="h-16 flex-1 rounded-sm bg-primary/50" />
                    <div className="h-14 flex-1 rounded-sm bg-primary/40" />
                    <div className="h-20 flex-1 rounded-sm bg-primary/60" />
                    <div className="h-16 flex-1 rounded-sm bg-primary/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

