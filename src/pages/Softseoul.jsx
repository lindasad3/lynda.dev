import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  TrendingUp,
  Sparkles,
  Brain,
  ShoppingBag,
} from "lucide-react";
import { asset } from "../lib/asset";

/* -------------------- DATA -------------------- */

const reels = [
  {
    type: "video",
    src: asset("/video education.mp4"),
    label: "Éducation : Routine K-Beauty",
  },
  {
    type: "video",
    src: asset("/comparaison.mp4"),
    label: "Autorité : Corée vs Viral",
  },
  {
    type: "video",
    src: asset("/video 3.mp4"),
    label: "Conversion : Focus Produit",
  },
];

const strategySteps = [
  {
    title: "Phase 1 : Éducation & Notoriété",
    desc: "Créer des contenus accessibles autour des routines skincare coréennes afin de transformer une niche perçue comme complexe en habitude simple et désirable.",
    icon: <Sparkles className="w-5 h-5" />,
    term: "TOFU • Brand Awareness",
  },
  {
    title: "Phase 2 : Autorité & Positionnement",
    desc: "Comparer les produits viraux aux produits réellement utilisés en Corée pour installer une crédibilité forte et différencier SoftSeoul des contenus tendance classiques.",
    icon: <Brain className="w-5 h-5" />,
    term: "Trust-Based Marketing",
  },
  {
    title: "Phase 3 : Conversion & Désir Produit",
    desc: "Introduire les contenus produits seulement après avoir installé une relation de confiance avec l’audience.",
    icon: <Target className="w-5 h-5" />,
    term: "Social Commerce",
  },
];

const tags = [
  "Pédagogie Produit",
  "Trust-Based Marketing",
  "Anti-Trend Positioning",
  "Social Commerce",
];

/* -------------------- COMPONENT -------------------- */

export default function Softseoul() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#4A3320] font-sans selection:bg-[#F2D8D8] selection:text-[#4A3320]">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#F8F5F0]/90 backdrop-blur-sm border-b border-[#4A3320]/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>

          <div className="text-[10px] font-black uppercase tracking-[0.3em] bg-[#4A3320] text-white px-3 py-1 rounded-full">
            Case Study
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2D8D8] text-[#4A3320] text-[10px] font-bold uppercase tracking-widest">
              <ShoppingBag className="w-3 h-3" />
              Branding & Content Strategy
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              Soft
              <span className="text-[#B28A8A]">Seoul</span>
            </h1>

            <p className="text-xl text-[#4A3320]/75 leading-relaxed max-w-xl font-medium">
              Comment utiliser la{" "}
              <span className="underline decoration-[#F2D8D8] decoration-4 underline-offset-4">
                pédagogie produit
              </span>{" "}
              pour transformer une audience curieuse en communauté confiante.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {tags.map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full bg-white border border-[#4A3320]/10 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">

              <div className="bg-white rounded-2xl shadow-sm border border-[#4A3320]/5 p-6">
                <p className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-2">
                  Expertise
                </p>

                <p className="font-bold leading-relaxed">
                  Analyse du marché skincare coréen
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-[#4A3320]/5 p-6">
                <p className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-2">
                  Approche
                </p>

                <p className="font-bold leading-relaxed">
                  Construire la confiance avant la conversion
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative group">

            <div className="absolute -inset-4 bg-[#F2D8D8]/40 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

            <img
              src={asset("/softseoul-thumb.jpg")}
              alt="SoftSeoul"
              className="relative rounded-[2.5rem] shadow-2xl border border-white"
            />

          </div>

        </div>
      </section>

      {/* STRATEGY */}
      <section className="py-24 px-6 bg-[#4A3320] text-[#F8F5F0]">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="text-[#F2D8D8] w-6 h-6" />

            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-[#F2D8D8]">
              Content Funnel
            </h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 max-w-3xl leading-tight">
            Construire l’autorité avant de pousser le produit.
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {strategySteps.map((step, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition duration-500 group"
              >

                <div className="w-12 h-12 rounded-2xl bg-[#F2D8D8] text-[#4A3320] flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  {step.icon}
                </div>

                <div className="text-[10px] font-black uppercase tracking-widest text-[#F2D8D8] mb-3">
                  {step.term}
                </div>

                <h4 className="text-2xl font-bold mb-4 leading-tight">
                  {step.title}
                </h4>

                <p className="text-sm text-[#F8F5F0]/70 leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">

            <div className="max-w-2xl">

              <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                Le contenu comme levier de confiance
              </h3>

              <p className="text-[#4A3320]/60 mt-5 text-lg leading-relaxed font-medium italic">
                “Ne pas vendre immédiatement. Installer d’abord une perception
                crédible et experte.”
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              {[
                "Routine Education",
                "Authority Building",
                "Product Positioning",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full bg-white border border-[#4A3320]/10 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* VIDEOS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {reels.map((reel, i) => (
              <div key={i} className="space-y-5">

                <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">

                  <video
                    src={reel.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-700"
                  />

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Step {i + 1}
                  </div>

                </div>

                <div className="space-y-2">

                  <p className="font-bold text-sm uppercase tracking-widest text-[#B28A8A]">
                    {reel.label}
                  </p>

                  <p className="text-[#4A3320]/65 leading-relaxed text-sm">
                    {i === 0 &&
                      "Créer une entrée accessible dans l’univers skincare coréen."}

                    {i === 1 &&
                      "Renforcer la crédibilité avec un positionnement anti-trend."}

                    {i === 2 &&
                      "Introduire le produit après avoir construit la confiance."}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TAKEAWAY */}
      <section className="py-24 px-6 bg-white border-t border-[#4A3320]/5">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="relative">

            <img
              src={asset("/moodboard.png")}
              alt="Moodboard"
              className="rounded-[3rem] shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-[#F2D8D8] p-8 rounded-[2rem] shadow-xl">

              <Brain className="w-8 h-8 text-[#4A3320] mb-4" />

              <p className="font-black text-xl uppercase tracking-tighter leading-none">
                Trust
                <br />
                First
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <div>

              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#B28A8A] mb-4">
                Strategic Takeaway
              </p>

              <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                Le vrai enjeu n’était pas de vendre.
              </h3>

            </div>

            <p className="text-[#4A3320]/75 text-lg leading-relaxed font-medium">
              SoftSeoul a été pensé comme une marque capable d’éduquer avant de
              convertir. L’objectif était de construire une perception experte,
              rassurante et premium dans un marché saturé de tendances rapides.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}