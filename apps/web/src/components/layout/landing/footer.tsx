"use client";

import { GithubIcon } from "@/assets/icons";
import { LINKS } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Create Invoice", href: LINKS.CREATE.INVOICE },
      { label: "Templates", href: LINKS.CREATE.INVOICE },
      { label: "Blog", href: LINKS.BLOGS },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: LINKS.BLOGS },
      { label: "Open Source", href: LINKS.SOCIALS.GITHUB },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: LINKS.HOME },
      { label: "Contact", href: "mailto:admin@legions.dev" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-dashed">
      <div className="flex flex-col gap-8 px-6 py-10 sm:flex-row sm:gap-16">
        {/* Brand column */}
        <div className="flex flex-col gap-3 sm:max-w-[260px]">
          <Link className="flex flex-row items-center gap-2" href={LINKS.HOME}>
            <Image src="/official/logo-icon.png" alt="logo" width={28} height={28} />
            <span className="instrument-serif text-lg font-semibold">Invoicely</span>
          </Link>
          <p className="jetbrains-mono text-muted-foreground text-xs leading-relaxed tracking-tight">
            Create beautiful and professional invoices in minutes. Free, unlimited, and open source.
          </p>
          <Link
            target="_blank"
            href={LINKS.SOCIALS.GITHUB}
            className="text-muted-foreground hover:text-foreground mt-1 transition-colors"
          >
            <GithubIcon className="size-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>

        {/* Link columns */}
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <span className="jetbrains-mono text-foreground text-xs font-semibold uppercase tracking-wider">
                {group.title}
              </span>
              <nav className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="jetbrains-mono text-muted-foreground hover:text-foreground text-xs tracking-tight transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center justify-between gap-2 border-t border-dashed px-6 py-4 sm:flex-row">
        <span className="jetbrains-mono text-muted-foreground text-[11px] tracking-tight">
          {new Date().getFullYear()} Invoicely. All rights reserved.
        </span>
        <span className="jetbrains-mono text-muted-foreground text-[11px] tracking-tight">
          Built by{" "}
          <span className="text-foreground font-medium">Imoogle Technology</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
