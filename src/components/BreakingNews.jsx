/** @format */

import weddingData from "../data/weddingData";
import breakingnews from "../assets/episode2.png";

export default function BreakingNews() {
  const highlights = [
    "Pesta pernikahan paling dinantikan tahun ini",
    "Acara yang penuh makna, doa, dan kebahagiaan",
    "Berbagai momen spesial menunggu Anda di hari bahagia",
  ];

  return (
    <section
      id="breaking-news"
      className="relative overflow-hidden border-t border-white/10 bg-[#0d0d0d] px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(229,9,20,0.18),_transparent_28%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.32em] text-red-400">
            Breaking
          </span>
          <span className="text-xs uppercase tracking-[0.34em] text-zinc-500">
            News
          </span>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.3),_transparent_40%),_rgba(22,22,22,0.95)] shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
          <img
            src={breakingnews}
            alt="Thumbnail poster wedding"
            className="h-72 w-full object-cover brightness-75 contrast-125"
          />

          <div className="p-5">
            <div className="mb-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
              <span>Now Showing</span>
              <span className="rounded-full border border-red-500/40 bg-red-500/10 px-2 py-1 text-red-400">
                new
              </span>
            </div>

            <h3 className="text-3xl font-black uppercase leading-none text-white md:text-4xl">
              {weddingData.groomNickname}
              <span className="mx-2 inline-block text-red-500">&</span>
              {weddingData.brideNickname}
            </h3>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6 md:p-8 lg:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-red-400">
                Live from the wedding scene
              </p>

              <h2 className="max-w-xl text-3xl font-black uppercase leading-tight text-white md:text-5xl">
                The most awaited{" "}
                <span className="text-red-500">love story</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                Halo! Akhirnya saat yang ditunggu-tunggu datang juga. Kami ingin
                menginformasikan bahwa kami akan segera menikah.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                Kami dengan suka cita mengundang Bapak/Ibu/Saudara/i untuk hadir
                dalam acara pernikahan kami. Dalam momen ini, kami ingin berbagi
                kebahagiaan kami dengan anda semua.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                Semoga cinta dan kebahagiaan selalu mengisi hidup anda seperti
                yang kami rasakan saat ini.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                Kami harapkan sebaik-baiknya doa untuk kelancaran pernikahan dan
                hari -hari bahagia setelahnya. Kami tunggu kedatangannya di hari
                bahagia kami ya.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                Dengan penuh cinta dan rasa syukur,
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                {weddingData.groomNickname} & {weddingData.brideNickname}
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
                    <p className="text-sm text-zinc-200 md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
