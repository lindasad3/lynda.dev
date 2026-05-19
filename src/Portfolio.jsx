import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Sparkles,
  Palette,
  Megaphone,
  PenSquare,
  Globe,
  LayoutGrid,
  ChevronRight,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- DATA -------------------- */

const PROJECTS = [
  {
    title: "SoftSeoul",
    category: "E-commerce & Branding",
    subtitle: "L’autorité par l’éducation",
    description:
      "Création d’une marque K-Beauty avec une stratégie de contenu pensée pour éduquer avant de vendre : pédagogie produit, positionnement anti-trend et funnel de confiance.",
    impact:
      "Mise en place d’un parcours contenu : attirer, construire la confiance, puis introduire l’offre produit.",
    tags: ["Branding", "Content Strategy", "Social Commerce"],
    image: "/gemini softseoul.webp",
    link: "/softseoul",
  },
  {
    title: "Kuramono",
    category: "UX Writing & Tech",
    subtitle: "Vulgariser l’invisible",
    description:
      "Travail d’UX writing et de design d’interface pour rendre une plateforme liée à l’IA plus lisible, plus rassurante et plus simple à comprendre.",
    impact:
      "Clarification du parcours utilisateur et réduction de la friction cognitive.",
    tags: ["UX Writing", "Product Design", "AI"],
    image: "/kura1.jpg",
    link: "/kuramono",
  },
  {
    title: "ColorPoint Istanbul",
    category: "Creative Strategy",
    subtitle: "Le B2B n’est pas ennuyeux",
    description:
      "Création de supports visuels et marketing pour rendre des services techniques plus compréhensibles, plus attractifs et plus faciles à présenter.",
    impact:
      "Alignement entre identité visuelle, clarté commerciale et perception professionnelle.",
    tags: ["B2B", "Graphic Design", "Communication"],
    image: "/Gemini_Generated_Image_qawic6qawic6qawi.png",
    link: "/colorpoint",
  },
];

const SKILLS = [
  {
    title: "Psychologie & UX",
    icon: Brain,
    items: [
      "Comprendre ce qui rassure",
      "Identifier les points de friction",
      "Rendre l’action plus naturelle",
    ],
  },
  {
    title: "Analyse & Performance",
    icon: Megaphone,
    items: [
      "Lire les signaux",
      "Structurer les priorités",
      "Chercher les leviers d’amélioration",
    ],
  },
  {
    title: "Brand Identity",
    icon: Palette,
    items: [
      "Systèmes visuels cohérents",
      "Perception de valeur",
      "Confiance de marque",
    ],
  },
  {
    title: "Growth Design",
    icon: LayoutGrid,
    items: [
      "Contenu comme point de contact",
      "Pages orientées clarté",
      "Expérience qui guide l’utilisateur",
    ],
  },
];

const METHOD = [
  {
    title: "Clarté",
    text: "Transformer un message complexe en contenu compréhensible, lisible et mémorisable.",
  },
  {
    title: "Confiance",
    text: "Construire une perception crédible grâce à la pédagogie, la cohérence visuelle et le bon niveau d’information.",
  },
  {
    title: "Désir",
    text: "Rendre une offre plus attractive sans la sur-vendre, en travaillant son storytelling et sa valeur perçue.",
  },
  {
    title: "Action",
    text: "Créer des parcours qui réduisent la friction et rendent le passage à l’action plus naturel.",
  },
];

const EXPERIENCE = [
  {
    title: "Elara Beautyyi",
    role: "Growth Marketer & SEO",
    meta: "Mai 2026 — Présent",
    description:
      "Optimisation SEO technique et sémantique sur Shopify, amélioration de la visibilité organique et participation à des tests A/B orientés conversion.",
  },
  {
    title: "SoftSeoul",
    role: "Fondatrice & E-commerce Manager",
    meta: "Depuis 2024",
    description:
      "Création d’une marque de K-Beauty : branding, sourcing, social media, stratégie inbound et réflexion autour de la confiance de marque.",
  },
  {
    title: "Kuramono",
    role: "UI/UX Designer",
    meta: "Berlin · 2025",
    description:
      "Conception d’interfaces pour une plateforme d’art génératif IA, création du design system et prototypage utilisateur.",
  },
  {
    title: "Entreprise AZ",
    role: "Webmaster & Consultante SEO",
    meta: "2024",
    description:
      "Développement du site vitrine et optimisation SEO locale afin d’améliorer la visibilité et la génération de leads.",
  },
  {
    title: "Color Point",
    role: "Designer Graphique",
    meta: "Istanbul · 2023",
    description:
      "Création d’identités visuelles et supports marketing digitaux et print pour améliorer la lisibilité des offres.",
  },
];

const EDUCATION = [
  "Master Responsable Marketing Digital — Nexa Digital School",
  "Bootcamp Web Development MERN — Ironhack Paris",
  "Bachelor 2 Design Graphique & UX/UI — L’École Multimédia",
  "L2 Mathématiques Appliquées — Université Paris Cité",
];

/* -------------------- MAIN -------------------- */

export default function Portfolio() {
  return (
    <main className="bg-[#F7F7FB] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <PortfolioNavbar />
      <HeroSection />
      <MethodSection />
      <ExpertiseRibbon />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

/* -------------------- NAVBAR -------------------- */

function PortfolioNavbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-sm font-black uppercase tracking-[0.25em] text-indigo-600 no-underline"
        >
          Lynda Sadoudi
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#portfolio-home" className="no-underline transition-colors hover:text-indigo-600">
            Accueil
          </a>

          <a href="#projects" className="no-underline transition-colors hover:text-indigo-600">
            Case Studies
          </a>

          <a href="#expertise" className="no-underline transition-colors hover:text-indigo-600">
            Expertise
          </a>

          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-5 py-2.5 font-semibold text-white no-underline transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

/* -------------------- HERO -------------------- */

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <section
      id="portfolio-home"
      className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-28 md:pt-40"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-[-10%] h-[26rem] w-[26rem] rounded-full bg-indigo-200/35 blur-[110px]" />
        <div className="absolute bottom-[-8%] right-[-5%] h-[24rem] w-[24rem] rounded-full bg-fuchsia-200/20 blur-[110px]" />
        <div className="absolute left-[35%] top-[12%] h-[12rem] w-[12rem] rounded-full bg-sky-100/40 blur-[70px]" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-indigo-600 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Alternance en Septembre 2026
          </div>

          <h1 className="text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-7xl xl:text-[5.6rem] xl:leading-[0.95]">
            Je ne crée pas juste du contenu.
            <br />
            <span className="italic text-indigo-600 font-serif font-medium">
              Je crée de la clarté.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            J’aide les marques à rendre leur message plus visible, plus
            compréhensible et plus engageant grâce à une approche qui relie
            marketing digital, UX/UI et stratégie de contenu.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-bold text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            >
              Découvrir mon approche
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full border border-white/70 bg-white p-3 text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:text-indigo-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:lynda.sadoudi2@gmail.com"
                aria-label="Email"
                className="rounded-full border border-white/70 bg-white p-3 text-slate-500 shadow-sm transition-all hover:-translate-y-0.5 hover:text-indigo-600"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "SEO",
              "Content Strategy",
              "E-commerce",
              "UX/UI",
              "CRO",
              "React",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[32rem]"
        >
          <div className="absolute -left-8 top-8 hidden h-[88%] w-full rounded-[2.5rem] bg-white/60 shadow-2xl lg:block" />
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-300/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] lg:rotate-[3deg]">
            <div className="overflow-hidden rounded-[2rem] bg-slate-200">
              <img
                src="/profile.png"
                alt="Lynda Sadoudi"
                className="aspect-[4/4.8] w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 right-4 max-w-[16rem] rounded-[1.7rem] border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-indigo-500">
              Profil hybride
            </p>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Data-driven creativity : analyse, design et marketing au service
              d’expériences plus claires.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- METHOD -------------------- */

function MethodSection() {
  return (
    <section className="border-y border-slate-100 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-indigo-500">
            Mon approche
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
            Je relie analyse, design et marketing.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Ma formation en mathématiques m’a donné une logique structurée.
            Mon parcours en design et UX/UI m’a appris à rendre les idées
            visibles, lisibles et désirables. Aujourd’hui, j’utilise cette
            double approche pour construire des expériences digitales plus
            claires et plus orientées action.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {METHOD.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-slate-100 bg-slate-50 p-7"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-indigo-100 p-3 text-indigo-600">
                <Brain className="h-5 w-5" />
              </div>

              <h3 className="text-2xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- RIBBON -------------------- */

function ExpertiseRibbon() {
  const items = [
    "SEO",
    "Content Strategy",
    "E-commerce",
    "CRO",
    "Social Ads",
    "UX/UI",
    "Branding",
    "React",
    "Shopify",
    "GA4",
  ];

  return (
    <section className="overflow-hidden border-y border-slate-100 bg-[#F7F7FB] py-8">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {items.map((item) => (
              <div key={`${item}-${i}`} className="flex items-center gap-8">
                <span className="text-xl font-serif italic text-slate-300 md:text-2xl">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */

function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-indigo-500">
              Case Studies
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
              Ici, je ne montre pas seulement des visuels.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Je montre comment le contenu, le design et la stratégie peuvent
            rendre une marque plus claire, plus crédible et plus engageante.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              to={project.link}
              className="group no-underline"
              onClick={() => window.scrollTo(0, 0)}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 shadow-sm">
                    {project.category}
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/4.6] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold italic text-indigo-600">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                      Intention stratégique
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {project.impact}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-transform group-hover:translate-x-1">
                    Voir le projet
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SKILLS -------------------- */

function SkillsSection() {
  return (
    <section id="expertise" className="bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-indigo-300">
              Mes leviers
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
              Un mix de marketing digital, design et réflexion utilisateur.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Je pense chaque contenu, page ou interface comme un point de
              contact qui peut clarifier, rassurer et guider l’utilisateur.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {SKILLS.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-indigo-500/15 p-3 text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-xl font-bold">{skill.title}</h3>
                  </div>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                    {skill.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */

function ExperienceSection() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-indigo-500">
            Parcours
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
            Des expériences qui m’ont appris à relier acquisition, contenu et expérience utilisateur.
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((item) => (
            <div
              key={item.title}
              className="grid gap-6 rounded-[2rem] border border-slate-100 bg-slate-50 p-7 md:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-indigo-600">
                  {item.role}
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="text-left text-[11px] font-black uppercase tracking-[0.22em] text-slate-400 md:text-right">
                {item.meta}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">Formation</h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
              {EDUCATION.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">Langues & outils</h3>

            <div className="mt-5 flex items-start gap-4 text-sm leading-6 text-slate-600">
              <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-600">
                <Globe className="h-5 w-5" />
              </div>

              <p>
                Français langue maternelle, anglais B2. Outils : Figma, Adobe Suite,
                React, Tailwind, MERN, Shopify, WordPress, Google Ads et GA4.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-white to-indigo-50 p-10 text-center shadow-[0_30px_80px_rgba(99,102,241,0.08)] md:p-16">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-indigo-500">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
          Construisons des expériences digitales plus claires et plus mémorables.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
          Ouverte aux opportunités en marketing digital, contenu, branding,
          UX/UI et e-commerce — notamment en alternance à partir de septembre 2026.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:lynda.sadoudi2@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-bold text-white no-underline transition-all hover:bg-slate-800 hover:shadow-xl"
          >
            <Mail className="h-4 w-4" />
            M’écrire par email
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-900 no-underline transition-all hover:border-indigo-200 hover:text-indigo-600 hover:shadow-lg"
          >
            <Linkedin className="h-4 w-4" />
            Voir mon LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-900">
            Lynda Sadoudi
          </p>

          <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
            Marketing Digital · SEO · UX/UI · E-commerce
          </p>
        </div>

        <p className="text-xs text-slate-400">© 2026 — Portfolio</p>
      </div>
    </footer>
  );
}