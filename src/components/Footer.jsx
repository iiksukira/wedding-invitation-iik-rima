/** @format */

import weddingData from "../data/weddingData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-center">
      <p className="text-sm text-zinc-400">
        &copy; 2026 {weddingData.groom} & {weddingData.bride}. Hak cipta
        dilindungi.
      </p>
    </footer>
  );
}
