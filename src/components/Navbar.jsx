/** @format */

const navItems = [
  {
    label: "Beranda",
    href: "#home",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Pasangan",
    href: "#couple",
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  },
  {
    label: "Acara",
    href: "#event",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    label: "Galeri",
    href: "#gallery",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

const rsvpItem = {
  label: "RSVP",
  href: "#rsvp",
  icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
};

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-white/10 bg-black/70 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-sm font-bold text-white shadow-lg shadow-red-500/30 ring-1 ring-red-400/30">
              <span className="font-[var(--font-title)]">I&R</span>
            </div>
            <div>
              <p className="font-[var(--font-title)] text-lg tracking-[0.06em] text-white">
                I & R
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-400">
                Invited
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-red-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#rsvp"
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              RSVP
            </a>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/85 backdrop-blur-xl shadow-[0_-12px_24px_rgba(0,0,0,0.5)] md:hidden">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 rounded-xl p-3 text-zinc-300 transition hover:bg-red-500/10 hover:text-red-500"
              title={item.label}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={item.icon} />
              </svg>
            </a>
          ))}
          <a
            href="#rsvp"
            className="flex flex-col items-center gap-1 rounded-xl p-3 text-zinc-300 transition hover:bg-red-500/10 hover:text-red-500"
            title={rsvpItem.label}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={rsvpItem.icon} />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}
