"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { CircleOpenArrowRight } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/constants/links";
import React, { useRef } from "react";
import Link from "next/link";

const LiveInvoicePreview = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    rotateX.set((-mouseY / rect.height) * 8);
    rotateY.set((mouseX / rect.width) * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const today = new Date();
  const dueDate = new Date(today);
  dueDate.setDate(dueDate.getDate() + 30);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <section className="border-b border-dashed py-16">
      <div className="flex flex-col items-center gap-8 px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="jetbrains-mono text-primary bg-primary/10 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
            Interactive Preview
          </span>
          <h2 className="instrument-serif text-balance text-3xl tracking-tight sm:text-4xl">
            See your invoice come to life
          </h2>
          <p className="jetbrains-mono text-muted-foreground max-w-md text-xs leading-relaxed tracking-tight">
            Hover over the invoice to interact. Our templates are designed to look professional on any device.
          </p>
        </div>

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full max-w-lg"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
            className="bg-card w-full rounded-lg border p-6 shadow-lg sm:p-8"
          >
            {/* Invoice header */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <span className="instrument-serif text-foreground text-xl font-semibold">INVOICE</span>
                <span className="jetbrains-mono text-muted-foreground text-[10px]">#INV-2026-001</span>
              </div>
              <div className="bg-primary/10 text-primary jetbrains-mono rounded-md px-2.5 py-1 text-[10px] font-semibold">
                PENDING
              </div>
            </div>

            {/* Dates */}
            <div className="mt-5 flex gap-8">
              <div className="flex flex-col gap-0.5">
                <span className="jetbrains-mono text-muted-foreground text-[9px] uppercase tracking-wider">
                  Issued
                </span>
                <span className="jetbrains-mono text-foreground text-xs">{formatDate(today)}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="jetbrains-mono text-muted-foreground text-[9px] uppercase tracking-wider">
                  Due
                </span>
                <span className="jetbrains-mono text-foreground text-xs">{formatDate(dueDate)}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-border" />

            {/* Items */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="jetbrains-mono text-muted-foreground text-[9px] uppercase tracking-wider">
                  Description
                </span>
                <span className="jetbrains-mono text-muted-foreground text-[9px] uppercase tracking-wider">
                  Amount
                </span>
              </div>
              {[
                { desc: "Website Design", amount: "$2,400.00" },
                { desc: "Frontend Development", amount: "$4,800.00" },
                { desc: "API Integration", amount: "$1,200.00" },
              ].map((item) => (
                <motion.div
                  key={item.desc}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-muted/50"
                >
                  <span className="jetbrains-mono text-foreground text-xs">{item.desc}</span>
                  <span className="jetbrains-mono text-foreground text-xs font-medium">{item.amount}</span>
                </motion.div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-5 h-px w-full bg-border" />
            <div className="mt-4 flex items-center justify-between">
              <span className="jetbrains-mono text-foreground text-sm font-semibold">Total Due</span>
              <span className="instrument-serif text-primary text-2xl font-semibold">$8,400.00</span>
            </div>
          </motion.div>
        </div>

        <Link href={LINKS.CREATE.INVOICE}>
          <Button variant="secondary" size="sm">
            <span>Try it yourself</span>
            <CircleOpenArrowRight className="-rotate-45" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LiveInvoicePreview;
