import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- DATA -------------------- */

const visuals = [
  "/kura2.jpg",
  "/kura3.jpg",
  "/kura4.jpg",
];

const steps = [
  {
    title: "Problème",
    text: "L’IA générative est perçue comme complexe et intimidante pour les utilisateurs non techniques.",
  },
  {
    title: "Approche",
    text: "Simplifier l’expérience avec un design clair et un UX Writing pédagogique.",
  },
  {
    title: "Solution",
    text: "Création d’un parcours guidé avec des microcopies rassurantes.",
  },
  {
    title: "Résultat",
    text: "Une meilleure compréhension et une adoption plus rapide de l’outil.",
  },
];

/* -------------------- COMPONENT -------------------- */

export default function Kuramono() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#2B3344] font-sans">

      {/* BACK */}
      <div className="max-w-6xl mx-auto px-6 pt-24">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#A88E6A] transition group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition" />
          Retour au portfolio
        </Link>
      </div>

      {/* HERO */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6">

            <span className="text-sm uppercase tracking-widest text-[#A88E6A] font-bold">
              UX Writing • IA • Design
            </span>

            <h1 className="font-serif text-5xl md:text-7xl italic">
              Kuramono
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              Simplifier l’accès à l’intelligence artificielle en transformant
              des interfaces complexes en expériences claires et guidées.
            </p>

          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="/kura1.jpg"
              alt="Kuramono"
              className="rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition duration-700"
            />
          </div>

        </div>
      </section>

      {/* UX FLOW */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-12">

          <h2 className="font-serif text-4xl">Démarche UX</h2>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">

                <div className="w-10 h-10 flex items-center justify-center bg-[#A88E6A]/10 text-[#A88E6A] font-bold rounded-full">
                  {i + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-500">{step.text}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VISUALS */}
      <section className="py-24 px-6 bg-[#F6F5F2]">
        <div className="max-w-6xl mx-auto space-y-12">

          <h2 className="font-serif text-4xl">Interface & Design</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {visuals.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-2xl shadow-lg hover:scale-[1.02] transition duration-700"
              />
            ))}
          </div>

        </div>
      </section>

      {/* BRAND TOUCH */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          <p className="font-serif italic text-2xl text-[#A88E6A]">
            “Stop Typing.”
          </p>

          <p className="text-gray-400 uppercase tracking-widest text-xs">
            Strategic UX Copywriting
          </p>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24 px-6 text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto space-y-6">

          <h2 className="font-serif text-4xl">Impact</h2>

          <p className="text-gray-500 leading-relaxed text-lg">
            Ce projet démontre comment le design et les mots peuvent réduire
            la complexité et rendre une technologie avancée accessible.
          </p>

        </div>
      </section>

    </div>
  );
}