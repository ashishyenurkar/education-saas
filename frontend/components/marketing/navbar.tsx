
"use client";

/*
 * Marketing Navbar
 * ----------------
 * Public-facing navigation used by:
 * - Landing page
 * - Features
 * - Solutions
 * - Pricing
 *
 * Design System:
 * ---------------
 * This component does NOT use hardcoded colors.
 * It uses semantic shadcn/theme tokens such as:
 *
 * bg-background
 * text-foreground
 * text-muted-foreground
 * bg-primary
 * text-primary-foreground
 * border-border
 *
 * This keeps the navbar consistent with the global
 * Light/Dark theme and allows branding changes from
 * globals.css without modifying this component.
 */

import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50 w-full
        border-b border-border
        bg-background/95
        backdrop-blur
        supports-[backdrop-filter]:bg-background/60
      "
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* =================================================
            Brand
            -------------------------------------------------
            Primary brand color comes from our global
            design token instead of a hardcoded color.
            ================================================= */}

        <Link
          href="/"
          className="flex items-center gap-2 font-semibold"
          aria-label="Education SaaS home"
        >
          {/* Temporary logo mark.
              Final branding/logo can be replaced later. */}
          <div
            className="
              flex size-8 items-center justify-center
              rounded-lg
              bg-primary
              text-sm font-bold
              text-primary-foreground
            "
          >
            E
          </div>

          {/* Application name */}
          <span className="text-lg text-foreground">
            EduSaaS
          </span>
        </Link>

        {/* =================================================
            Desktop Navigation
            -------------------------------------------------
            Hidden on smaller screens.
            Mobile navigation will be added separately.
            ================================================= */}

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          <Link
            href="#features"
            className="
              text-sm font-medium
              text-muted-foreground
              transition-colors
              hover:text-foreground
            "
          >
            Features
          </Link>

          <Link
            href="#solutions"
            className="
              text-sm font-medium
              text-muted-foreground
              transition-colors
              hover:text-foreground
            "
          >
            Solutions
          </Link>

          <Link
            href="#pricing"
            className="
              text-sm font-medium
              text-muted-foreground
              transition-colors
              hover:text-foreground
            "
          >
            Pricing
          </Link>
        </nav>

        {/* =================================================
            Right-side Actions
            ================================================= */}

        <div className="flex items-center gap-2">

          {/* Light / Dark / System theme selector */}
          <ThemeToggle />

          {/* Login CTA
              Uses the global primary brand token. */}
          <Link
            href="/login"
            className="
              inline-flex h-9 items-center justify-center
              rounded-md
              bg-primary
              px-4
              text-sm font-medium
              text-primary-foreground
              shadow-xs
              transition-colors
              hover:bg-primary/90
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
              focus-visible:ring-offset-2
              focus-visible:ring-offset-background
            "
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

