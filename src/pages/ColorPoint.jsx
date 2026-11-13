import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

/* -------------------- DATA -------------------- */

const works = [
  asset("/colorpoint/colorpoint1.png"),
  asset("/colorpoint/colorpoint2.png"),
  asset("/colorpoint/colorpoint3.png"),
  asset("/colorpoint/colorpoint4.png"),
];

/* -------------------- COMPONENT -------------------- */

export default function ColorPoint() {
  return (
    <div className="min-h-screen bg-[#0F0F10] text-white font-sans">

      {/* BACK */}
      <div className="max-w-6xl mx-auto px-6 pt-24">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition group"
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

            <span className="text-sm uppercase tracking-widest text-yellow-400 font-semibold">
              Graphic Design • Branding • Print
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              ColorPoint
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-md">
              Création de supports visuels pour différents clients :
              identité graphique, cartes de visite et branding professionnel.
            </p>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <img
              src={asset("/colorpoint/colorpoint_logo.png")}
              alt="ColorPoint"
              className="rounded-[2.5rem] shadow-2xl w-full object-cover hover:scale-[1.02] transition duration-700"
            />

          </div>

        </div>
      </section>

      {/* APPROCHE */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold">Approche</h2>

          <p className="text-white/70 leading-relaxed text-lg">
            Ce projet m’a permis de travailler sur des identités visuelles
            pour des clients variés, en adaptant chaque design à leur univers
            et à leur positionnement.
          </p>

          <p className="text-white/70">
            L’objectif était de créer des visuels modernes, lisibles et impactants,
            capables de représenter une marque de manière professionnelle.
          </p>

        </div>
      </section>

      {/* WORK GRID */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          <h2 className="text-3xl font-bold">Travaux réalisés</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {works.map((img, i) => (
              <div
                key={i}
                className="rounded-[2rem] overflow-hidden shadow-xl hover:scale-[1.02] transition duration-700"
              >
                <img
                  src={img}
                  alt="work"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RESULTAT */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold">Résultat</h2>

          <p className="text-white/70 leading-relaxed">
            Ces créations ont permis aux clients d’avoir une image de marque
            plus professionnelle, cohérente et adaptée à leurs supports de communication.
          </p>

        </div>
      </section>

    </div>
  );
}