/** @format */

import weddingData from "../data/weddingData";
import comingsoon from "../assets/coming-soon.png";
import logo from "../assets/logo-hero.webp";
export default function ComingSoon() {
  const timeline = [
    { label: "#documenter" },
    { label: "#lovestory" },
    { label: "#getmarried" },
    { label: "#weddinginvitation" },
    { label: "#wedding" },
  ];

  return (
    <section
      id="coming-soon"
      className="relative overflow-hidden border-t border-white/10 bg-[#111111] px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(229,9,20,0.16),_transparent_34%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-red-400">
            Coming Soon
          </span>
          <span className="text-xs uppercase tracking-[0.28em] text-zinc-500">
            new
          </span>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-red-600/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(17,17,17,0.98),_rgba(34,34,34,0.9))] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <div className="relative">
              <img
                src={comingsoon}
                alt="Thumbnail poster wedding"
                className="h-[420px] w-full object-cover brightness-75 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="space-y-6 px-6 pb-8 pt-5">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.32em] text-zinc-400">
                <span>Nikahfix</span>
                <span className="rounded-full border border-red-500/40 bg-red-500/10 px-2 py-1 text-red-400">
                  New
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                  New Chapter
                </p>
                <h3 className="text-3xl font-black leading-none text-white md:text-4xl">
                  {weddingData.groomNickname}
                  <span className="mx-2 inline-block text-red-500">&</span>
                  {weddingData.brideNickname}
                  <span className="mx-2 inline-block text-red-500">:</span>
                  New Chapter, New Journey, New Life
                </h3>
              </div>

              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
                {weddingData.location}
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mt-10 mb-4 text-sm uppercase tracking-[0.4em] text-zinc-400">
              Episode Spesial
            </p>
            <img
              src={logo}
              alt="Nikahfix Logo"
              className="h-20 w-30 object-contain"
            />{" "}
            <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
              Wedding <span className="text-red-500">Event</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
              Kami menantikan kehadiran Anda dalam momen istimewa yang akan
              segera tiba. Bersama kami, merayakan kebahagiaan dan awal baru
              dalam kehidupan kami.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-red-300 md:text-lg">
              وََمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ
              تَذَكَّرُوْنَ
            </p>
            <p className="text-red-300 md:text-lg">
              “Segala sesuatu Kami ciptakan berpasang-pasang agar anda mengingat
              (Kebesaran Allah)” (Q.S Az-Zariyat: 49)
            </p>
            <div className="mt-8 flex flex-wrap gap-1 text-sm text-zinc-300">
              {timeline.map((item) => (
                <div
                  key={item.label}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-extrasm text-zinc-200 backdrop-blur-sm"
                >
                  <span className="mr-2 text-zinc-400">{item.label}</span>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4 text-zinc-300">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                {weddingData.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
