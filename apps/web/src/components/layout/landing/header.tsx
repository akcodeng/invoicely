"use client";

import ThemeSwitch from "@/components/table-columns/theme-switch";
import { Button } from "@/components/ui/button";
import { CircleOpenArrowRight } from "@/assets/icons";
import { LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Blog", href: LINKS.BLOGS },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-dashed bg-background/80 px-6 backdrop-blur-md">
      <Link className="flex flex-row items-center gap-2.5" href={LINKS.HOME}>
        <Image src="/official/logo-icon.png" alt="logo" width={28} height={28} />
        <span className="instrument-serif text-xl font-semibold tracking-tight">Invoicely</span>
      </Link>

      <nav className="hidden flex-row items-center gap-6 sm:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="jetbrains-mono text-muted-foreground hover:text-foreground text-xs tracking-tight transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-row items-center gap-3">
        <ThemeSwitch />
        <Link href={LINKS.CREATE.INVOICE}>
          <Button size="sm">
            <span>Get Started</span>
            <CircleOpenArrowRight className="-rotate-45" />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
