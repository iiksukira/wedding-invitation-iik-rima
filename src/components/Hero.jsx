/** @format */

import { useEffect, useMemo } from "react";
import logoHero from "../assets/logo-hero.webp";
import backgroundImage from "../assets/coming-soon.png";
import weddingData from "../data/weddingData";

export default function Hero({ onOpenInvitation }) {
  const guestName = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");

    return name ? name.trim() : "Tamu Undangan";
  }, []);

  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleOpenInvitation = () => {
    document.body.style.overflow = "auto";
    onOpenInvitation?.();
  };

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#111111]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.16),_transparent_30%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 md:px-10">
        <div className="w-full max-w-5xl">
          <div className="relative z-20 mb-6 flex justify-center">
            <img
              src={logoHero}
              alt="Logo undangan pernikahan"
              className="h-20 w-auto drop-shadow-[0_0_20px_rgba(229,9,20,0.45)] md:h-28"
            />
          </div>

          <div className="relative mx-auto max-w-[720px] rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)] backdrop-blur-md md:p-12">
            <div className="mb-8 flex flex-col items-center gap-3 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.4em] text-red-400">
                Wedding Invitation
              </span>

              <p className="text-sm uppercase tracking-[0.24em] text-zinc-300">
                the wedding of
              </p>
              <p className="text-2xl font-bold text-white md:text-3xl">
                {weddingData.groomNickname} <br /> & <br />{" "}
                {weddingData.brideNickname}
              </p>
            </div>

            <div className="mt-6 text-center text-zinc-200">
              <p>For You:</p>

              <p className="text-lg uppercase font-extrabold text-red-500 md:text-xl">
                {guestName}
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#coming-soon"
                onClick={handleOpenInvitation}
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Lihat Undangan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
