import { readFileSync, writeFileSync } from 'fs';

const filePath = 'apps/web/src/app/globals.css';
let content = readFileSync(filePath, 'utf8');

// Light theme replacements
const lightReplacements = [
  ['--background: oklch(0.985 0.002 240)', '--background: oklch(0.985 0.002 210)'],
  ['--foreground: oklch(0.13 0.02 260)', '--foreground: oklch(0.13 0.028 261)'],
  ['--card: oklch(0.97 0.003 240)', '--card: oklch(1 0 0)'],
  ['--card-foreground: oklch(0.13 0.02 260)', '--card-foreground: oklch(0.13 0.028 261)'],
  ['--popover: oklch(0.985 0.002 240)', '--popover: oklch(1 0 0)'],
  ['--popover-foreground: oklch(0.13 0.02 260)', '--popover-foreground: oklch(0.13 0.028 261)'],
  ['--primary: oklch(0.45 0.18 250)', '--primary: oklch(0.55 0.17 168)'],
  ['--light-primary: oklch(0.65 0.14 250)', '--light-primary: oklch(0.72 0.12 168)'],
  ['--dark-primary: oklch(0.35 0.2 250)', '--dark-primary: oklch(0.42 0.15 168)'],
  ['--secondary: oklch(0.955 0.008 240)', '--secondary: oklch(0.965 0.005 210)'],
  ['--secondary-foreground: oklch(0.2 0.02 260)', '--secondary-foreground: oklch(0.18 0.02 261)'],
  ['--muted: oklch(0.94 0.008 240)', '--muted: oklch(0.955 0.008 210)'],
  ['--muted-foreground: oklch(0.5 0.02 260)', '--muted-foreground: oklch(0.50 0.02 261)'],
  ['--accent: oklch(0.94 0.015 250)', '--accent: oklch(0.955 0.02 168)'],
  ['--accent-foreground: oklch(0.2 0.02 260)', '--accent-foreground: oklch(0.18 0.02 261)'],
  ['--border: oklch(0.9 0.01 240)', '--border: oklch(0.91 0.008 210)'],
  ['--input: oklch(0.9 0.01 240)', '--input: oklch(0.91 0.008 210)'],
  ['--ring: oklch(0.45 0.18 250)', '--ring: oklch(0.55 0.17 168)'],
  ['--chart-1: oklch(0.646 0.222 41.116)', '--chart-1: oklch(0.55 0.17 168)'],
  ['--sidebar: oklch(0.97 0.003 240)', '--sidebar: oklch(1 0 0)'],
  ['--sidebar-foreground: oklch(0.13 0.02 260)', '--sidebar-foreground: oklch(0.13 0.028 261)'],
  ['--sidebar-primary: oklch(0.45 0.18 250)', '--sidebar-primary: oklch(0.55 0.17 168)'],
  ['--sidebar-accent: oklch(0.94 0.008 240)', '--sidebar-accent: oklch(0.955 0.02 168)'],
  ['--sidebar-accent-foreground: oklch(0.2 0.02 260)', '--sidebar-accent-foreground: oklch(0.18 0.02 261)'],
  ['--sidebar-border: oklch(0.9 0.01 240)', '--sidebar-border: oklch(0.91 0.008 210)'],
  ['--sidebar-ring: oklch(0.45 0.18 250)', '--sidebar-ring: oklch(0.55 0.17 168)'],
  ['--primary-foreground: oklch(0.98 0 0)', '--primary-foreground: oklch(0.99 0 0)'],
  ['--sidebar-primary-foreground: oklch(0.98 0 0)', '--sidebar-primary-foreground: oklch(0.99 0 0)'],
];

// Dark theme replacements
const darkReplacements = [
  ['--background: oklch(0.12 0.015 260)', '--background: oklch(0.12 0.02 261)'],
  ['--foreground: oklch(0.95 0.005 240)', '--foreground: oklch(0.97 0.005 210)'],
  ['--card: oklch(0.18 0.015 260)', '--card: oklch(0.17 0.02 261)'],
  ['--card-foreground: oklch(0.95 0.005 240)', '--card-foreground: oklch(0.97 0.005 210)'],
  ['--popover: oklch(0.18 0.015 260)', '--popover: oklch(0.17 0.02 261)'],
  ['--popover-foreground: oklch(0.95 0.005 240)', '--popover-foreground: oklch(0.97 0.005 210)'],
  ['--primary: oklch(0.6 0.18 250)', '--primary: oklch(0.62 0.17 168)'],
  ['--light-primary: oklch(0.72 0.14 250)', '--light-primary: oklch(0.72 0.12 168)'],
  ['--dark-primary: oklch(0.45 0.2 250)', '--dark-primary: oklch(0.48 0.15 168)'],
  ['--secondary: oklch(0.22 0.015 260)', '--secondary: oklch(0.22 0.02 261)'],
  ['--secondary-foreground: oklch(0.95 0.005 240)', '--secondary-foreground: oklch(0.97 0.005 210)'],
  ['--muted: oklch(0.22 0.015 260)', '--muted: oklch(0.22 0.02 261)'],
  ['--muted-foreground: oklch(0.55 0.02 260)', '--muted-foreground: oklch(0.55 0.02 210)'],
  ['--accent: oklch(0.22 0.02 250)', '--accent: oklch(0.22 0.04 168)'],
  ['--accent-foreground: oklch(0.95 0.005 240)', '--accent-foreground: oklch(0.97 0.005 210)'],
  ['--ring: oklch(0.6 0.18 250)', '--ring: oklch(0.62 0.17 168)'],
  ['--chart-1: oklch(0.488 0.243 264.376)', '--chart-1: oklch(0.62 0.17 168)'],
  ['--sidebar: oklch(0.18 0.015 260)', '--sidebar: oklch(0.17 0.02 261)'],
  ['--sidebar-foreground: oklch(0.95 0.005 240)', '--sidebar-foreground: oklch(0.97 0.005 210)'],
  ['--sidebar-primary: oklch(0.6 0.18 250)', '--sidebar-primary: oklch(0.62 0.17 168)'],
  ['--sidebar-accent: oklch(0.22 0.015 260)', '--sidebar-accent: oklch(0.22 0.04 168)'],
  ['--sidebar-accent-foreground: oklch(0.95 0.005 240)', '--sidebar-accent-foreground: oklch(0.97 0.005 210)'],
  ['--sidebar-ring: oklch(0.6 0.18 250)', '--sidebar-ring: oklch(0.62 0.17 168)'],
];

for (const [from, to] of lightReplacements) {
  content = content.replace(from, to);
}
for (const [from, to] of darkReplacements) {
  content = content.replace(from, to);
}

writeFileSync(filePath, content, 'utf8');
console.log('Theme updated successfully!');
