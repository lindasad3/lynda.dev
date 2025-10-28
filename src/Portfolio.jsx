import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, ExternalLink, Play } from "lucide-react";
// If you use shadcn/ui, these paths should exist. Otherwise replace with your own Button/Badge components.
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import SiteChrome from "./components/navbar";

/**
 * Motion‑style single‑file portfolio page
 * ‑ React + Tailwind + Framer Motion + shadcn/ui + lucide‑react
 * ‑ Inspired by motion.dev aesthetics: bold gradients, glass, smooth micro‑interactions,
 *   scroll‑based reveals, and playful yet minimal UI.
 *
 * Drop this as a route (e.g., /) and ensure Tailwind + Framer Motion are installed.
 */

export default function Portfolio() {
  return (
    <main className="bg-white text-gray-900">
      <SiteChrome />
      <HeroSection />
      <MarqueeTech />
      <WorkShowcase />
      <AboutMe />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}

 

/**************
 *   HERO     *
 **************/
function HeroSection() {
  // Subtle parallax for background glow
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="relative overflow-hidden">
      {/* Gradient orbs */}
      <motion.div style={{ y }} aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl bg-linear-to-tr from-blue-400/30 to-purple-400/30"/>
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl bg-linear-to-tr from-purple-400/30 to-pink-400/30"/>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
              <Badge className="bg-linear-to-r from-blue-600 to-purple-600 text-white border-0">Web Developer • Designer • MERN</Badge>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
                Build fast. <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">Delight users</span>.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
                I craft performant, accessible, and animated web experiences with React, Tailwind, and Framer Motion. From MVPs to polished products.
              </p>
            </motion.div>

            <motion.div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.5}}>
            <a href="#work">
                <Button size="lg" className="px-7 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  See Projects <ArrowRight className="ml-2 h-5 w-5"/>
                </Button> 
                </a>
              
              <a href="#work">
                <Button size="lg" variant="outline" className="px-7 border-2">
                  Live Demos <Play className="ml-2 h-5 w-5"/>
                </Button>
              </a>
            </motion.div>

            <motion.div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}}>
              {["JavaScript", "HTML/CSS", "React", "TypeScript", "Node.js", "Express", "MongoDB", "SQL", "Framer Motion", "Tailwind"   ].map(t => (
                <Badge key={t} variant="outline" className="border-gray-300 text-gray-600">{t}</Badge>
              ))}
            </motion.div>
          </div>

           
        </div>
      </div>
    </section>
  );
}

/*******************
 *  MARQUEE / TECH *
 *******************/
function MarqueeTech() {
  return (
    <section aria-label="Tech stack" className="py-10 md:py-14 border-y border-gray-100 bg-linear-to-r from-white via-white to-white">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-10 whitespace-nowrap will-change-transform"
          initial={{ x: 0 }}
          animate={{ x: [0, -400, 0] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="text-gray-500">React • JavaScript • HTML/CSS • Tailwind • Framer Motion • TypeScript • Node • Express • MongoDB • Vite</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/*******************
 *   WORK GRID      *
 *******************/
// Remplace ton tableau existant par celui-ci
const PROJECTS = [
  {
    title: "Pinkify – K-Pop Concerts",
    desc: "MERN platform with artist pages, favorites, and an admin dashboard (JWT). MVP delivered in 3 days.",
    tags: ["React", "Express", "MongoDB", "JWT", "Tailwind"],
    href: "https://example.com/pinkify", // live ou démo (remplace)
  },
  {
    title: "Kuramono — Data QA Dashboard",
    desc: "Internal React tool for curators to validate/correct AI metadata with a clean, fast review flow.",
    tags: ["React", "Framer Motion", "Tailwind"],
    href: "https://example.com/kuramono-demo", // lien vidéo demo ou case study
  },
  {
    title: "Entreprise AZ — Vitrine (SEO local)",
    desc: "Local business website. First page on Google Maps for 'maçon Gisors' • +20% quote requests.",
    tags: ["Vite", "Tailwind", "SEO Local"],
    href: "https://example.com/entreprise-az", // URL du site si public
  },
  {
    title: "CodeWallet — Snippet Manager",
    desc: "Local snippet manager with instant search and dark mode to speed up daily dev work.",
    tags: ["Electron", "React"],
    href: "https://github.com/ton-user/codewallet", // repo ou page produit
  },
  {
    title: "Portfolio UI Kit — Tailwind",
    desc: "Reusable cards/sections/buttons to ship polished sites in 48h.",
    tags: ["Vite", "Tailwind", "shadcn/ui"],
    href: "https://example.com/portfolio-kit", // live ou repo
  },
  {
    title: "Landing SaaS — Starter",
    desc: "Conversion-first landing (hero, social proof, pricing, FAQ) with clean motion.",
    tags: ["Vite", "Tailwind", "Framer Motion"],
    href: "https://example.com/saas-landing", // live / démo / Figma public
  },
];


function WorkShowcase() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured work</h2>
          <p className="text-gray-600 mt-2">Selected projects that blend performance, design, and motion.</p>
        </div>
        <a href="#" className="hidden md:inline-flex items-center gap-2 text-blue-700 hover:underline">All projects <ExternalLink className="h-4 w-4"/></a>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PROJECTS.map((p, idx) => (
          <TiltCard key={p.title} index={idx} {...p} />
        ))}
      </div>
    </section>
  );
}

function TiltCard({ title, desc, tags, href, index }) {
  return (
    <motion.a
      href={href}
      className="group relative block rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-md p-6 shadow-sm hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      whileHover={{ y: -2 }}
    >
      <div className="aspect-[16/10] rounded-2xl bg-linear-to-tr from-gray-100 to-gray-200 grid place-items-center">
        <span className="text-gray-400">Preview</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-gray-600">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => (
          <Badge key={t} variant="outline" className="border-gray-300 text-gray-600">{t}</Badge>
        ))}
      </div>
    </motion.a>
  );
}

/*******************
 *    ABOUT ME      *
 *******************/
function AboutMe() {
  return (
    <section id="about" className="bg-linear-to-b from-white to-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div className="lg:col-span-6" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{ once: true }} transition={{duration:0.5}}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hi, I’m Lynda</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            MERN developer & designer based in Paris. I love building clean, animated interfaces and robust APIs.
            My sweet spot is where performance, UX, and business goals intersect.
          </p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Strong foundations in React, routing, state & data fetching</li>
            <li>• UI systems with Tailwind + shadcn/ui</li>
            <li>• Express + MongoDB backends, JWT auth, SQL</li>
            <li>• Animations & micro‑interactions with Framer Motion</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="mailto:hello@lynda.dev">
              <Button><Mail className="h-4 w-4 mr-2"/> Email me</Button>
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noreferrer">
              <Button variant="outline">Download CV</Button>
            </a>
          </div>
        </motion.div>
        <motion.div className="lg:col-span-6" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{ once: true }} transition={{duration:0.5, delay:0.1}}>
          <div className="rounded-3xl border border-gray-200 bg-white/60 backdrop-blur-xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold">What I’m great at</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                {k:"Frontend", v:"React, TS, Tailwind, motion"},
                {k:"Backend", v:"Node, Express, MongoDB"},
                {k:"UI", v:"Design systems, tokens"},
                {k:"DX", v:"Vite, ESLint, Vitest"},
              ].map((s)=> (
                <div key={s.k} className="rounded-2xl border border-gray-200 p-4 bg-white">
                  <div className="text-sm text-gray-500">{s.k}</div>
                  <div className="font-medium">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/*******************
 *   CONTACT CTA    *
 *******************/
function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 className="text-3xl md:text-4xl font-bold" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }}>
          Let’s build something delightful
        </motion.h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          I’m available for full‑time roles, freelance missions, and collaborations. Paris‑based, open to remote.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/Contact">
            <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">Contact me</Button>
          </Link>
          <a href="#work">
            <Button size="lg" variant="outline">See my work</Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/*******************
 *     FOOTER       *
 *******************/
function SiteFooter() {
  return (
    <footer className="border-t border-gray-200/70 py-10 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Lynda Sadoudi. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="mailto:hello@lynda.dev" className="text-sm text-gray-600 hover:text-blue-700">lynda.sadoudi2@gmail.com</a>
          <span className="text-gray-300">•</span>
          <a href="https://github.com/lindasad3" className="text-sm text-gray-600 hover:text-blue-700">GitHub</a>
          <span className="text-gray-300">•</span>
          <a href="https://www.linkedin.com/in/lynda-sadoudi-66008a167/" className="text-sm text-gray-600 hover:text-blue-700">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
