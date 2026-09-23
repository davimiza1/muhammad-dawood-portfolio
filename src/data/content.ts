import {
  Globe,
  Bot,
  ShoppingBag,
  Rocket,
  Code2,
  Database,
  Webhook,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const BRAND = {
  name: "Muhammad Dawood",
  initials: "MD",
  role: "Custom Web Apps, Software & AI Automation Expert",
  tagline: "I design and build the software your business runs on.",
  bio: "I build production web applications, e-commerce platforms and AI-driven automations for businesses that need more than a template. Four years in, still shipping.",
  email: "dawoodtvoxel@gmail.com",
  github: "https://github.com/davimiza1",
  cv: "/muhammad-dawood-cv.pdf",
  location: "Sargodha, Pakistan · Remote",
};

export const STATS = [
  { value: 4, suffix: "+", label: "years building" },
  { value: 50, suffix: "+", label: "client projects" },
  { value: 20, suffix: "+", label: "public repositories" },
  { value: 8, suffix: "+", label: "live product demos" },
];

export type Project = {
  key: string;
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  live?: string;
  github?: string;
  flagship?: boolean;
  metric: { value: string; label: string };
};

export const FLAGSHIP: Project = {
  key: "leadiq",
  title: "LeadIQ AI",
  tag: "Flagship SaaS · Real Estate",
  desc:
    "A real-estate lead intelligence workspace that scores purchase intent from raw CSV data, classifies opportunities and turns a spreadsheet into a working sales pipeline. Built with real authentication and a real database, not a mockup.",
  stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  live: "https://leadiq-ai.vercel.app",
  github: "https://github.com/davimiza1/leadiq-ai",
  metric: { value: "94", label: "AI lead score, live demo" },
};

export const GITHUB_PROJECTS: Project[] = [
  {
    key: "supportflow",
    title: "SupportFlow AI",
    tag: "AI Product",
    desc: "An AI-assisted customer support command center: a unified queue, service health analytics, and drafting help for high-priority conversations.",
    stack: ["Next.js", "React", "TypeScript"],
    live: "https://supportflow-ai.vercel.app",
    github: "https://github.com/davimiza1/supportflow-ai",
    metric: { value: "92%", label: "support health, live demo" },
  },
  {
    key: "dental",
    title: "Dental Lead-to-Patient System",
    tag: "CRM Automation",
    desc: "A GoHighLevel acquisition workflow that captures dental leads, qualifies replies, routes prospects to a booking calendar, and follows up safely on silence.",
    stack: ["GoHighLevel", "CRM Architecture", "SMS Automation"],
    github: "https://github.com/davimiza1/ghl-dental-lead-to-patient-system",
    metric: { value: "8", label: "stage automated pipeline" },
  },
  {
    key: "flowboard",
    title: "Flowboard",
    tag: "Productivity SaaS",
    desc: "A project workspace with a responsive Kanban board, live filtering, progress metrics and accessible task creation.",
    stack: ["Next.js", "TypeScript", "React"],
    live: "https://flowboard-saas.vercel.app",
    github: "https://github.com/davimiza1/flowboard-saas",
    metric: { value: "Live", label: "filters & progress tracking" },
  },
  {
    key: "aster",
    title: "Aster & Vale",
    tag: "Shopify Storefront",
    desc: "An editorial Shopify 2.0 jewelry storefront: original brand direction, a full custom Liquid theme, and a responsive product catalog.",
    stack: ["Shopify 2.0", "Liquid", "JavaScript"],
    github: "https://github.com/davimiza1/aster-vale-shopify-theme",
    metric: { value: "0", label: "Theme Check errors" },
  },
];

export const RECENT_PLATFORMS: Project[] = [
  {
    key: "tvoxel-school",
    title: "Tvoxel School Suite",
    tag: "Client Platform · Education",
    desc: "A school management platform pitch site: an interactive module explorer, a live parent app preview, and a rollout timeline, matched to a real client proposal.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    live: "https://tvoxel-school-suite.vercel.app",
    metric: { value: "7", label: "interactive modules" },
  },
  {
    key: "zaiqa",
    title: "Zaiqa",
    tag: "Client Platform · Food & Delivery",
    desc: "A restaurant ordering platform with a live commission-savings calculator, a working cart and order tracker, and a synced customer-to-kitchen admin demo.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    live: "https://zaiqa-lyart.vercel.app",
    metric: { value: "2-way", label: "live order sync demo" },
  },
  {
    key: "shifa",
    title: "Shifa",
    tag: "Client Platform · Healthcare",
    desc: "A clinic and hospital management pitch site: a no-show cost calculator, live appointment booking against real time slots, and a five-tab clinic dashboard.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    live: "https://shifa-nine.vercel.app",
    metric: { value: "5", label: "dashboard modules" },
  },
];

export const CAPABILITIES: { icon: LucideIcon; title: string; text: string; tools: string }[] = [
  { icon: Code2, title: "Web products", text: "Responsive React and Next.js applications with real interactions, APIs, authentication and deployment.", tools: "React · Next.js · TypeScript · Supabase" },
  { icon: Bot, title: "AI automation", text: "Lead scoring, CRM synchronization, AI-assisted responses and workflow safeguards that hold up under real traffic.", tools: "GoHighLevel · n8n · REST APIs · Webhooks" },
  { icon: ShoppingBag, title: "Commerce engineering", text: "Shopify and WooCommerce storefronts, custom themes and plugins, and production support after launch.", tools: "Liquid · Shopify 2.0 · PHP · WooCommerce" },
  { icon: Rocket, title: "Launch & delivery", text: "Requirements to deployment: source control, hosting, DNS, testing, documentation and handoff.", tools: "GitHub · Vercel · Cloudflare · cPanel" },
];

export const EXPERIENCE = [
  { period: "2024 — Present", role: "WordPress Developer", org: "Tvoxel Technologies Pvt Ltd" },
  { period: "2024 — Present", role: "Web Development Instructor", org: "Bano Qabil" },
  { period: "2020 — Present", role: "Freelance Developer & Automation Builder", org: "Remote · International clients" },
];

export { Globe, Database, Webhook, Sparkles };
