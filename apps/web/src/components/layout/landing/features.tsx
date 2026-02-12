"use client";

import { motion } from "motion/react";
import React from "react";

interface Feature {
  title: string;
  description: string;
  tag: string;
}

const features: Feature[] = [
  {
    tag: "Design",
    title: "Beautiful Templates",
    description:
      "Professionally designed invoice templates that make your business look polished. Choose from multiple layouts tailored for different industries.",
  },
  {
    tag: "Pricing",
    title: "Free & Unlimited",
    description:
      "Create and export as many invoices as you need. No subscriptions, no hidden costs, no limits. Invoice freely, forever.",
  },
  {
    tag: "Security",
    title: "Privacy First",
    description:
      "Your data stays yours. We never track, sell, or share your information. Store everything locally or securely on our server.",
  },
  {
    tag: "Open Source",
    title: "Community Driven",
    description:
      "Built in the open with a transparent codebase. Contribute features, report issues, or fork it to make it your own.",
  },
  {
    tag: "Speed",
    title: "Lightning Fast",
    description:
      "Generate invoices in seconds with our optimized editor. Real-time preview, instant PDF export, and seamless performance.",
  },
  {
    tag: "Multi-Currency",
    title: "Global Ready",
    description:
      "Support for 100+ currencies out of the box. Send invoices to clients anywhere in the world with proper formatting.",
  },
];

const Features = () => {
  return (
    <section id="features" className="border-b border-dashed">
      <div className="flex flex-col items-center gap-3 border-b border-dashed py-8 text-center">
        <span className="jetbrains-mono text-primary bg-primary/10 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
          Features
        </span>
        <h2 className="instrument-serif text-balance px-6 text-3xl tracking-tight sm:text-4xl">
          Everything you need to bill professionally
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            className="group flex flex-col gap-2.5 border-b border-dashed p-6 transition-colors hover:bg-muted/30 sm:border-r sm:last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
          >
            <span className="jetbrains-mono bg-muted/50 text-muted-foreground w-fit rounded-md px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider transition-colors group-hover:bg-primary/10 group-hover:text-primary">
              {feature.tag}
            </span>
            <h3 className="jetbrains-mono text-foreground text-sm font-semibold tracking-tight">
              {feature.title}
            </h3>
            <p className="jetbrains-mono text-muted-foreground text-xs leading-relaxed tracking-tight">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
