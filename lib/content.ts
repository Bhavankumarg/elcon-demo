/**
 * Single source of truth for homepage content.
 *
 * AUTHENTICITY RULES
 * - `verified: true`  → taken from the client's supplied materials (existing ELCON project files).
 * - `TBC` / placeholder → not supplied. Rendered with a visible placeholder tag. Replace before launch.
 * - Nothing here claims certifications, awards, IT/GCC specialisation, testimonials or named projects.
 */

export const TBC = "To be confirmed";

export const company = {
  name: "ELCON Infrastructure",
  disciplines: ["Interior", "MEP", "Civil"], // as printed on the supplied logo
  email: "support@elconinterior.com", // from client's existing project data – confirm
  phone: "+91 95431 01405", // from client's existing project data – confirm
  phoneHref: "+919543101405",
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Workspaces Designed for the Way Businesses Move Forward.",
  copy: "We design and deliver thoughtful workplace environments that bring together people, performance and purpose.",
};

export const intro = {
  eyebrow: "About ELCON",
  heading: "One accountable team, from the first sketch to the final handover.",
  body: [
    "ELCON Infrastructure brings interior design, MEP and civil works together under one roof, so the people who imagine a workplace are the same people who build it.",
    "That continuity keeps budgets honest, schedules realistic and detailing true to the original idea.",
  ],
};

// Verified service list (client's existing project data). `area` maps each to the three disciplines on the logo.
export const services = [
  { title: "Turnkey Interior", area: "Interior", desc: "Concept to handover under one roof, with one team accountable for the result." },
  { title: "Interior Design & Build", area: "Interior", desc: "Design and execution in one workflow, so budgets and timelines stay aligned." },
  { title: "MEP & Civil Works", area: "MEP · Civil", desc: "Electrical, HVAC, plumbing, fire safety and civil works, delivered in-house." },
  { title: "Renovation & Refurbishment", area: "Interior · Civil", desc: "Refresh existing workplaces with minimal downtime and maximum impact." },
  { title: "Green Interiors", area: "Interior", desc: "Sustainable materials and processes aimed at LEED certification." },
  { title: "Structural Steel & PEB", area: "Civil", desc: "Pre-engineered buildings and structural steel for industrial and commercial needs." },
  { title: "Project Management", area: "All disciplines", desc: "Independent PMC, scheduling and quality control from kickoff to closure." },
  { title: "Quantity Surveying", area: "All disciplines", desc: "Transparent BOQs, cost consultancy and measurement you can audit." },
];

// Photographs supplied by ELCON. Names/locations/clients were not supplied → placeholders.
export const projects = [
  { src: "/images/turnkey-office.jpg", alt: "Open-plan workspace with a planted central seating island and ring pendant lighting", kind: "Open-plan workplace", className: "lg:col-span-7 lg:row-span-2", ratio: "aspect-[4/3] lg:aspect-auto", pos: "50% 55%" },
  { src: "/images/washroom.jpg", alt: "Washroom with arched mirrors and a continuous solid-surface vanity", kind: "Washroom & amenities", className: "lg:col-span-5 lg:row-span-1", ratio: "aspect-[4/3] lg:aspect-auto", pos: "50% 38%" },
  { src: "/images/coworking-cafeteria.jpg", alt: "Cafeteria with timber ceiling, pendant lights and a deep blue feature wall", kind: "Cafeteria & collaboration", className: "lg:col-span-5 lg:row-span-1", ratio: "aspect-[4/3] lg:aspect-auto", pos: "50% 50%" },
  { src: "/images/training-room.jpg", alt: "Training room with tiered desks, ring pendants and a curved ceiling", kind: "Training & meeting rooms", className: "lg:col-span-5", ratio: "aspect-[4/3]", pos: "50% 50%" },
  { src: "/images/pantry-office.jpg", alt: "Pantry with deep navy joinery, high bar table and planting", kind: "Pantry & breakout", className: "lg:col-span-7", ratio: "aspect-[16/10]", pos: "50% 55%" },
];

export const approach = {
  eyebrow: "Our approach",
  heading: "Workplaces that adapt as the business does.",
  lead: "A good workplace is never finished. It is planned so that teams, technology and ways of working can change without starting again.",
  principles: [
    { title: "Flexible", text: "Layouts and services planned to be reconfigured, not rebuilt, as teams grow and settle." },
    { title: "Human-centred", text: "Light, acoustics, circulation and comfort considered first, because people set the pace of the business." },
    { title: "Inclusive", text: "Spaces that work for different people, abilities and ways of working, from arrival to every room." },
    { title: "Sustainable", text: "Responsible materials and processes, with green interiors available as a dedicated service." },
    { title: "Adaptable", text: "Coordinated interior, MEP and civil design that leaves room for what the business needs next." },
  ],
};

// Figures taken from the client's existing project data. CONFIRM before launch.
export const stats = [
  { value: 22, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "", label: "Integrated disciplines" },
];

export const proofPoints = [
  { title: "Interior, MEP and Civil in one team", text: "One point of accountability instead of several contractors to coordinate." },
  { title: "Design and build, aligned", text: "Cost and buildability are tested while the design is still developing." },
  { title: "Transparent cost and measurement", text: "Quantity surveying and auditable BOQs are part of the service." },
];

// Logos supplied by ELCON (existing site). Confirm client permission before launch.
export const clients = [
  { src: "/images/clients/c1.webp", name: "LifeCell" },
  { src: "/images/clients/c6.webp", name: "Reliance Industries" },
  { src: "/images/clients/c12.webp", name: "Johnson Controls" },
  { src: "/images/clients/c14.webp", name: "FLSmidth" },
  { src: "/images/clients/c15.webp", name: "Jio" },
  { src: "/images/clients/c17.webp", name: "Trimble" },
  { src: "/images/clients/c19.webp", name: "Omega Healthcare" },
  { src: "/images/clients/c20.webp", name: "Coronis" },
  { src: "/images/clients/c23.webp", name: "Intellect" },
  { src: "/images/clients/c26.webp", name: "Delta Electronics" },
  { src: "/images/clients/c27.webp", name: "JSW" },
  { src: "/images/clients/c30.webp", name: "Fujitsu" },
];

// No articles were supplied. These are labelled placeholders so the layout is ready for real content.
export const insights = [
  { src: "/images/office-renovation.jpg", alt: "Training room interior", topic: "Workplace design" },
  { src: "/images/coworking-cafeteria.jpg", alt: "Cafeteria interior", topic: "Sustainable interiors" },
  { src: "/images/pantry-office.jpg", alt: "Pantry interior", topic: "MEP & delivery" },
];

export const cta = {
  heading: "Planning a new workplace, or renewing one?",
  copy: "Tell us about the space, the team and the timeline. We will come back with how we would approach it.",
};

export const offices = [
  {
    label: "Chennai",
    lines: ["#51, First Floor, Mosque Street", "West Saidapet, Chennai", "Tamil Nadu 600015, India"], // from client's existing project data – confirm
    placeholder: false,
  },
  { label: "Office 2", lines: ["City and address to be supplied by ELCON"], placeholder: true },
  { label: "Office 3", lines: ["City and address to be supplied by ELCON"], placeholder: true },
];
