/** @format */

import { useEffect, useState } from "react";
import weddingData from "../data/weddingData";
import AkadImage from "../assets/Akad.png";
import ResepsiImage from "../assets/Resepsi.png";

const padTime = (value) => String(value).padStart(2, "0");

const getTimeRemaining = (targetDate) => {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: padTime(days),
    hours: padTime(hours),
    minutes: padTime(minutes),
    seconds: padTime(seconds),
  };
};

export default function Event() {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeRemaining(weddingData.countdownTarget),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeRemaining(weddingData.countdownTarget));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeline = weddingData.timeline.map((item) => ({
    ...item,
    image:
      item.title === "Akad Nikah"
        ? AkadImage
        : item.title === "Resepsi"
          ? ResepsiImage
          : item.image,
  }));

  const countdown = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section id="event" className="px-5 py-16 text-white md:px-6 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-[var(--font-title)] text-4xl text-white md:text-5xl">
            Timeline &amp; Location
          </h2>
        </div>

        <div className="space-y-6">
          {timeline.map(
            ({ title, dateLabel, time, timezone, image, location, maps }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-[#0f0f0f] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:flex-row md:items-center md:gap-5 md:p-4"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-[1.1rem] border border-white/10 md:w-[18rem]">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 flex justify-start p-3">
                    <span className="rounded-md bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                      {title}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold text-white">
                        {dateLabel}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex min-w-[4.5rem] items-center justify-center rounded-full bg-zinc-700 px-3 py-1 text-lg font-semibold text-white">
                      {time}
                    </span>
                    {timezone ? (
                      <span className="rounded-full bg-zinc-700 px-3 py-1 text-sm font-medium text-white">
                        {timezone}
                      </span>
                    ) : null}
                  </div>

                  <p className="max-w-3xl text-base leading-7 text-zinc-200 md:text-lg">
                    Bertempat di {location}
                  </p>

                  <a
                    href={maps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center text-base font-semibold text-red-400 transition hover:text-red-300"
                  >
                    Buka Google Maps &gt;&gt;
                  </a>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {countdown.map(({ label, value }) => (
            <div
              key={label}
              className="flex h-20 flex-col items-center justify-center rounded-[1rem] bg-red-600 text-white shadow-[0_15px_30px_rgba(229,9,20,0.3)]"
            >
              <span className="text-3xl font-bold leading-none">{value}</span>
              <span className="mt-2 text-sm uppercase tracking-[0.12em] text-red-100">
                {label}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full rounded-[1rem] bg-red-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-500">
          Save the Date
        </button>
      </div>
    </section>
  );
}
