import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden border-t py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border bg-card px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16 lg:px-16">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Smarter Institute Management
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to transform the way you{" "}
            <span className="text-primary">manage your institute?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Bring students, teachers, parents, and institute operations
            together on one simple, powerful platform.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              <Link href="/register">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>

          {/* Small supporting text */}
          <p className="mt-5 text-xs text-muted-foreground">
            Simple setup • Modern tools • AI-powered capabilities
          </p>
        </div>
      </div>
    </section>
  );
}
