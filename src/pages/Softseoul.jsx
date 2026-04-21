import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- DATA -------------------- */

const posts = [
  { type: "image", src: "/post1.jpg" },
  { type: "video", src: "/video 2.mp4" },
  { type: "video", src: "/video 1.mp4" },
];

const strategyPoints = [
  "Positionnement basé sur la simplicité et la pédagogie produit",
  "Contenu orienté problème → solution",
  "Esthétique clean pour renforcer la confiance",
  "Ton accessible pour une audience jeune",
];

/* -------------------- COMPONENT -------------------- */

export default function Softseoul() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#4A3320] font-sans">

      {/* BACK */}
      <div className="max-w-6xl mx-auto px-6 pt-24">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition group"
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

      <span className="text-sm uppercase tracking-widest text-[#B89B72] font-bold">
        E-commerce • Branding • Social Media
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        SoftSeoul
      </h1>

      <p className="text-xl opacity-70 leading-relaxed">
        Création d’une identité visuelle et d’une communication digitale
        pour une boutique de skincare coréenne.
      </p>

    </div>

    {/* RIGHT */}
    <div className="relative">

      <img
        src="/public/Gemini_Generated_Image_b3arbqb3arbqb3ar.png"
        alt="SoftSeoul"
        className="rounded-[2.5rem] shadow-2xl"
      />

     

      <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#EADFD3] blur-[120px] rounded-full"></div>

    </div>

  </div>
</section>
      

      {/* MOODBOARD */}
      <section className="py-24 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <img
            src="/moodboard.png"
            alt="Moodboard"
            className="rounded-[2rem] shadow-xl"
          />

          {/* TEXTE */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Brand Moodboard</h2>

            <p className="opacity-70 leading-relaxed text-lg">
              SoftSeoul s’inspire de l’esthétique minimaliste coréenne :
              des tons doux, des textures naturelles et une approche sensorielle du skincare.
            </p>

            <p className="opacity-70">
              L’objectif était de créer une marque à la fois moderne,
              rassurante et accessible.
            </p>
          </div>

        </div>
      </section>

      {/* POSTS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          <h2 className="text-3xl font-bold">Social Media Content</h2>

          <p className="opacity-60 max-w-xl">
            Contenus pensés pour capter l’attention rapidement,
            éduquer et guider vers l’achat.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 bg-white"
              >
                {post.type === "image" ? (
                  <video
                    src={post.src}
                   autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={post.src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STRATEGY */}
      <section className="py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto space-y-8">

          <h2 className="text-3xl font-bold">Stratégie</h2>

          <ul className="space-y-4 text-lg opacity-70">
            {strategyPoints.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>

        </div>
      </section>

      {/* IMPACT */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">

          <h2 className="text-3xl font-bold">Résultats</h2>

          <p className="text-lg opacity-70 leading-relaxed">
            Ce projet démontre comment une identité forte et un contenu bien structuré
            permettent d’améliorer la perception de marque et la compréhension produit.
          </p>

        </div>
      </section>

    </div>
  );
}