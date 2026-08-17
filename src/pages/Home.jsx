/** @format */

import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CommingSoon from "../components/ComingSoon";
import BreakingNews from "../components/BreakingNews";
import Couple from "../components/Couple";
import Event from "../components/Event";
import Gallery from "../components/Gallery";
import TrendingNow from "../components/TrendingNow";
import RSVP from "../components/RSVP";
import WeddingGift from "../components/WeddingGift";
import Footer from "../components/Footer";

import weddingMusic from "../assets/videoplayback.mp4";

export default function Home() {
  const audioRef = useRef(null);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [showMusicButton, setShowMusicButton] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowMusicButton(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenInvitation = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.7;

        if (audioRef.current.paused) {
          await audioRef.current.play();
        }

        setIsMusicOn(!audioRef.current.paused);
      }
    } catch (error) {
      console.error("Musik gagal diputar:", error);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        audio.volume = 0.7;
        await audio.play();
        setIsMusicOn(true);
      } catch (error) {
        console.error("Musik gagal diputar:", error);
      }
      return;
    }

    audio.pause();
    setIsMusicOn(false);
  };

  const renderSpeakerIcon = () => {
    if (isMusicOn) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <path
            d="M11 5 6 8H3v8h3l5 3V5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 9.5a4 4 0 0 1 0 5M18 7a7 7 0 0 1 0 10"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5 sm:h-6 sm:w-6"
      >
        <path
          d="M11 5 6 8H3v8h3l5 3V5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 9l5 6M21 9l-5 6" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <div className="bg-[#111111] pb-20 font-sans text-white md:pb-0">
      <audio ref={audioRef} src={weddingMusic} loop preload="auto" />

      <Navbar />

      <Hero onOpenInvitation={handleOpenInvitation} />

      <div className="fixed bottom-20 right-5 z-50 flex justify-center px-4 pb-4">
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isMusicOn ? "Matikan musik" : "Nyalakan musik"}
          className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-red-500/60 text-white shadow-lg backdrop-blur-sm transition duration-300 hover:bg-black/80 ${
            showMusicButton
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          }`}
        >
          {renderSpeakerIcon()}
        </button>
      </div>

      <CommingSoon />
      <BreakingNews />
      <Couple />
      <Event />
      <Gallery />
      <TrendingNow />
      <RSVP />
      <WeddingGift />
      <Footer />
    </div>
  );
}
