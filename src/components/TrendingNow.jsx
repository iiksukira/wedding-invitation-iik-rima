/** @format */

import comingSoonImage from "../assets/coming-soon.png";
import episode2Image from "../assets/episode2.png";
import episode3Image from "../assets/episode3.png";
import trend1Image from "../assets/trend1.jpg";
import trend2Image from "../assets/trend2.png";
import trend3Image from "../assets/trend3.png";

const posters = [
  {
    label: "NIKAHFIX",
    title: "JATUH CINTA\nSEPERTI DI\nFILM-FILM",
    subtitle: "STAY TUNE",
    image: comingSoonImage,
  },
  {
    label: "NIKAHFIX",
    title: "On Your\nWedding Day",
    subtitle: "LOVE STORY",
    image: episode2Image,
  },
  {
    label: "NIKAHFIX",
    title: "The\nPerfect Date",
    subtitle: "FOREVER",
    image: episode3Image,
  },
  {
    label: "NIKAHFIX",
    title: "NIKAH\nYUK!",
    subtitle: "READY",
    image: trend1Image,
  },
  {
    label: "NIKAHFIX",
    title: "Crushology\n10",
    subtitle: "ROMANCE",
    image: trend2Image,
  },
  {
    label: "NIKAHFIX",
    title: "When Life\nGives You\nTangerines",
    subtitle: "SERIES",
    image: trend3Image,
  },
];

export default function TrendingNow() {
  return (
    <section
      id="trending-now"
      className="relative overflow-hidden bg-[#111111] px-4 py-16 md:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-8 font-[var(--font-title)] text-4xl leading-none text-white md:text-6xl">
          Trending Now
        </h2>

        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {posters.map(({ label, title, subtitle, image }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-black shadow-[0_18px_38px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <img
                src={image}
                alt={title}
                className="h-[16rem] w-full object-cover brightness-[0.75] transition duration-300 group-hover:scale-105 group-hover:brightness-100 sm:h-[22rem] md:h-[25rem]"
              />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-2 pt-2 text-[0.45rem] font-semibold uppercase tracking-[0.15em] text-white/80 sm:px-3 sm:pt-3 sm:text-[0.55rem]">
                <span>{label}</span>

                <span className="rounded-full bg-red-600 px-2 py-1 text-[0.4rem] text-white sm:text-[0.45rem]">
                  NEW
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4">
                <p className="whitespace-pre-line text-sm font-black leading-[0.95] tracking-tight text-white sm:text-xl md:text-2xl">
                  {title}
                </p>

                <p className="mt-2 text-[0.45rem] uppercase tracking-[0.15em] text-zinc-300 sm:mt-3 sm:text-[0.62rem]">
                  {subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
