/** @format */

import groomImage from "../assets/groom.png";
import brideImage from "../assets/bride.png";
import weddingData from "../data/weddingData";

export default function Couple() {
  const coupleCards = [
    {
      role: "The Groom",
      name: weddingData.groom,
      badge: "Groom",
      description:
        "Putra dari Bapak Ari Suhari & Ibu Fatimah. Pria yang lembut, penuh perhatian, dan selalu membawa rasa aman bagi orang-orang di sekitarnya.",
      accent: "from-red-600/80 via-red-500/25 to-transparent",
      ring: "ring-red-500/60",
      image: groomImage,
    },
    {
      role: "The Bride",
      name: weddingData.bride,
      badge: "Bride",
      description:
        "Putri dari Bapak Wawan Yudiantara (Alm) & Ibu Nia Kurniawati. Wanita yang hangat, lembut, dan penuh kasih, dengan senyuman yang menenangkan hati setiap orang.",
      accent: "from-rose-500/80 via-red-500/25 to-transparent",
      ring: "ring-rose-400/60",
      image: brideImage,
    },
  ];

  return (
    <section id="couple" className="relative px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.12),transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.45em] text-red-400">
            Storyline
          </p>
          <h2 className="font-[var(--font-title)] text-4xl text-white md:text-5xl">
            Groom &amp; Bride
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {coupleCards.map(
            ({ role, name, badge, description, accent, ring, image }) => (
              <article
                key={role}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212]/90 p-7 shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-transparent to-red-500/10" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-red-300">
                      {role}
                    </span>
                    <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                      {badge}
                    </span>
                  </div>

                  <div className="mx-auto mb-7 max-w-[20rem] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-2 shadow-[0_0_30px_rgba(229,9,20,0.12)]">
                    <div
                      className={`relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${accent}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_35%)]" />
                      <img
                        src={image}
                        alt={`Foto ${role.toLowerCase()}`}
                        className={`relative h-72 w-full object-cover grayscale-[0.08] contrast-125 ${ring} ring-4`}
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-[0.65rem] uppercase tracking-[0.45em] text-zinc-500">
                      Episode III
                    </p>
                    <h3 className="mt-4 font-[var(--font-title)] text-3xl text-white md:text-4xl">
                      {name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
