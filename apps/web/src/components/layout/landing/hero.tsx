"use client";

import { CircleOpenArrowRight, GithubIcon, Star } from "@/assets/icons";
import { PostHogAnalytics } from "@/components/ui/posthog-analytics";
import { useGithubStars } from "@/hooks/use-github-stars";
import { Button } from "@/components/ui/button";
import NumberFlow from "@number-flow/react";
import { LINKS } from "@/constants/links";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { stars } = useGithubStars();

  return (
    <section className="relative flex min-h-[calc(100svh-64px-200px)] flex-col items-center justify-center overflow-hidden border-b border-dashed px-6 py-20 text-center">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 flex flex-col items-center gap-6"
      >
        {/* GitHub stars badge */}
        <div className="flex flex-row items-center gap-3">
          <div className="flex flex-row items-center">
            <div className="from-border h-px w-12 bg-gradient-to-l to-transparent sm:w-24" />
            <div className="bg-border h-1 w-1" />
          </div>
          <Link
            href={LINKS.SOCIALS.GITHUB}
            target="_blank"
            className="bg-muted/40 flex h-8 flex-row items-center gap-2 rounded-full border px-3 transition-colors hover:bg-muted/60"
          >
            <Star className="size-3.5 text-yellow-500" />
            <span className="jetbrains-mono text-foreground text-xs font-semibold">
              <NumberFlow value={stars} />
            </span>
            <span className="jetbrains-mono text-muted-foreground text-[10px]">stars</span>
          </Link>
          <div className="flex flex-row items-center">
            <div className="bg-border h-1 w-1" />
            <div className="from-border h-px w-12 bg-gradient-to-r to-transparent sm:w-24" />
          </div>
        </div>

        {/* Main headline */}
        <div className="flex flex-col gap-2">
          <h1 className="instrument-serif text-balance text-5xl leading-[1.1] tracking-tight sm:text-7xl">
            <span className="text-foreground">Create Beautiful</span>
            <br />
            <span className="text-muted-foreground/50">Invoices, Not</span>{" "}
            <span className="text-foreground">Ugly</span>{" "}
            <span className="text-muted-foreground/50">Ones</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="jetbrains-mono text-muted-foreground max-w-md text-xs leading-relaxed tracking-tight sm:text-sm">
          The open-source invoice generator that makes billing effortless.
          Professional templates, unlimited exports, zero cost.
        </p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-2 flex flex-row gap-3"
        >
          <Link href={LINKS.CREATE.INVOICE}>
            <Button size="lg">
              <span>Start Invoicing</span>
              <CircleOpenArrowRight className="-rotate-45" />
            </Button>
          </Link>
          <PostHogAnalytics
            analytics={{
              name: "github-open-source-click",
              group: "landing-page",
            }}
          >
            <Link target="_blank" href={LINKS.SOCIALS.GITHUB}>
              <Button variant="secondary" size="lg">
                <GithubIcon className="size-4" />
                <span>View Source</span>
              </Button>
            </Link>
          </PostHogAnalytics>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
