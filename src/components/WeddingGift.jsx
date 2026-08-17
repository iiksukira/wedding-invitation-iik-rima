/** @format */

import { useState } from "react";

import logoBri from "../assets/BRI_2025.png";
import logoSeaBank from "../assets/seabank.jpg";

const giftAccounts = [
  {
    bank: "Bank BRI",
    owner: "Wanti Siti Rima Melati",
    number: "079301010908508 ",
    label: "No. Rekening",
    logo: logoBri,
  },
  {
    bank: "SeaBank",
    owner: "Iik Sukira",
    number: "901572554673",
    label: "No. Rekening",
    logo: logoSeaBank,
  },
];

export default function WeddingGift() {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);

      setTimeout(() => setCopied(""), 1500);
    } catch (error) {
      console.error("Gagal menyalin rekening:", error);
    }
  };

  return (
    <section id="gift" className="px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.35em] text-red-400">
            Wedding Gift
          </span>

          <h2 className="mt-6 text-4xl font-black leading-none text-white md:text-6xl">
            Kado Pernikahan
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {giftAccounts.map((account) => (
            <div
              key={account.bank}
              className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(17,17,17,0.98),_rgba(35,35,35,0.9))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              {/* Logo Bank */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                    Wedding Gift
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    {account.bank}
                  </p>
                </div>

                <div className="flex h-14 w-24 items-center justify-center rounded-xl bg-white px-3 py-2 shadow-md">
                  <img
                    src={account.logo}
                    alt={`Logo ${account.bank}`}
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-sm text-zinc-400">Atas Nama</p>

                  <p className="text-xl font-semibold text-white">
                    {account.owner}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-zinc-400">{account.label}</p>

                  <p className="text-lg font-semibold tracking-[0.12em] text-red-400">
                    {account.number}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(account.number, account.bank)}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
              >
                {copied === account.bank ? "Tersalin" : "Salin Nomor"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-black/25 p-6 text-center md:p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
            Doa & Keberkahan
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-200 md:text-lg">
            We would like to thank you for sharing in our wedding celebration.
            We are grateful for your presence, warm wishes, and your generous
            gift. We look forward to our future together and to making more
            memories with you.
          </p>
        </div>
      </div>
    </section>
  );
}
