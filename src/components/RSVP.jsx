/** @format */

import { useEffect, useState } from "react";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwyWI5Dm0TsOXSwa4NWMwUVteB_BVFnXKero0or5_RmUGo_ewncrX2qv410aUvsnw2z/exec";

export default function RSVP() {
  const [comments, setComments] = useState([]);

  const [form, setForm] = useState({
    name: "",
    status: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  // =========================
  // GET DATA DARI GOOGLE SHEETS
  // =========================
  const fetchComments = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Gagal mengambil data ucapan");
      }

      setComments(result.data || []);
    } catch (error) {
      console.error("Gagal mengambil ucapan:", error);
    } finally {
      setLoading(false);
    }
  };

  // Ambil data saat component pertama kali dibuka
  useEffect(() => {
    fetchComments();
  }, []);

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =========================
  // SUBMIT RSVP
  // =========================
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validasi
    if (!form.name.trim()) {
      alert("Silakan masukkan nama.");
      return;
    }

    if (!form.status) {
      alert("Silakan pilih kehadiran.");
      return;
    }

    if (!form.message.trim()) {
      alert("Silakan tuliskan ucapan.");
      return;
    }

    try {
      setSending(true);

      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          name: form.name.trim(),
          status: form.status,
          message: form.message.trim(),
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Gagal mengirim ucapan");
      }

      alert("Ucapan berhasil dikirim. Terima kasih! ❤️");

      // Kosongkan form
      setForm({
        name: "",
        status: "",
        message: "",
      });

      // Ambil data terbaru dari Google Sheets
      await fetchComments();
    } catch (error) {
      console.error("Gagal mengirim RSVP:", error);
      alert("Maaf, ucapan gagal dikirim. Silakan coba lagi.");
    } finally {
      setSending(false);
    }
  };

  // =========================
  // AVATAR
  // =========================
  const getInitials = (name) => {
    if (!name) return "?";

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }

    return (
      words[0].charAt(0) + words[words.length - 1].charAt(0)
    ).toUpperCase();
  };

  // Warna avatar berdasarkan nama
  const getAvatarColor = (name) => {
    const colors = [
      "bg-[#d94f4f] text-white",
      "bg-[#5b9de8] text-white",
      "bg-[#8b5cf6] text-white",
      "bg-[#10b981] text-white",
      "bg-[#f59e0b] text-white",
      "bg-[#ec4899] text-white",
    ];

    if (!name) return colors[0];

    const index =
      name.split("").reduce((total, char) => total + char.charCodeAt(0), 0) %
      colors.length;

    return colors[index];
  };

  // =========================
  // FORMAT TIMESTAMP
  // =========================
  const formatTime = (timestamp) => {
    if (!timestamp) return "";

    const date = new Date(timestamp);

    if (Number.isNaN(date.getTime())) {
      return timestamp;
    }

    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  };

  return (
    <section id="rsvp" className="px-4 py-16 text-white md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-4xl font-black leading-none text-white md:text-6xl">
          Kirim Ucapan
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nama */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-lg font-medium text-white"
            >
              Nama
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama"
              disabled={sending}
              className="w-full rounded-[1rem] border border-white/10 bg-[#f7f7f7] px-5 py-4 text-lg text-black outline-none ring-0 placeholder:text-zinc-500 focus:border-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          {/* Kehadiran */}
          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-lg font-medium text-white"
            >
              Kehadiran
            </label>

            <div className="relative">
              <select
                id="status"
                name="status"
                value={form.status}
                onChange={handleChange}
                disabled={sending}
                className="w-full appearance-none rounded-[1rem] border border-white/10 bg-[#f7f7f7] px-5 py-4 pr-12 text-lg text-black outline-none focus:border-red-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <option value="">Kehadiran</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>

              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-zinc-500">
                ▾
              </span>
            </div>
          </div>

          {/* Ucapan */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-lg font-medium text-white"
            >
              Komentar atau Ucapan
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Komentar atau Ucapan"
              disabled={sending}
              className="w-full resize-none rounded-[1rem] border border-white/10 bg-[#f7f7f7] px-5 py-4 text-lg text-black outline-none placeholder:text-zinc-500 focus:border-red-500 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-[1rem] bg-red-600 px-6 py-4 text-2xl font-bold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Mengirim..." : "Kirim"}
          </button>
        </form>
        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="max-h-[28rem] overflow-y-auto pr-2">
            {loading ? (
              <div className="py-10 text-center text-zinc-400">
                Memuat ucapan...
              </div>
            ) : comments.length === 0 ? (
              <div className="py-10 text-center text-zinc-400">
                Belum ada ucapan.
              </div>
            ) : (
              comments.map((comment, index) => {
                const { name, status, message, timestamp } = comment;

                return (
                  <div
                    key={`${name}-${timestamp}-${index}`}
                    className="mb-5 flex items-start gap-3 rounded-[1rem] border border-white/10 bg-[#f1f1f1] p-4 text-black shadow-[0_10px_22px_rgba(0,0,0,0.15)]"
                  >
                    {/* Avatar */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${getAvatarColor(
                        name,
                      )}`}
                    >
                      {getInitials(name)}
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* Nama + Status */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xl font-bold text-black">
                          {name}
                        </span>

                        <span
                          className={`rounded-full px-2 py-1 text-xs font-semibold text-white ${
                            status === "Hadir" ? "bg-green-600" : "bg-zinc-500"
                          }`}
                        >
                          {status}
                        </span>
                      </div>

                      {/* Ucapan */}
                      <p className="mt-2 whitespace-pre-line text-lg leading-7 text-black">
                        {message}
                      </p>

                      {/* Timestamp */}
                      <p className="mt-2 text-sm text-zinc-600">
                        {formatTime(timestamp)}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
