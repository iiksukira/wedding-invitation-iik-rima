/** @format */
import Episode1Image from "../assets/episode1.png";
import Episode2Image from "../assets/episode2.png";
import Episode3Image from "../assets/episode3.png";

const stories = [
  {
    episode: "Episode 1",
    title: "Kejutan Lamaran datang ke Rumah",
    date: "Januari 2026",
    image: Episode1Image,
    description:
      "Dengan penuh rasa bahagia, kami mengumumkan bahwa kami telah resmi bertunangan. Momen ini menjadi awal dari perjalanan cinta kami yang indah, di mana kami berkomitmen untuk saling mendukung, mencintai, dan membangun masa depan bersama. Terima kasih atas doa dan dukungan dari keluarga, teman, dan semua yang telah menjadi bagian dari kisah cinta kami.",
  },
  {
    episode: "Episode 2",
    title: "Meminta Doa Restu Orang Tua & Keluarga",
    date: "Februari 2026",
    image: Episode2Image,
    description:
      "Dengan penuh rasa hormat, kami datang memohon doa restu kepada kedua orang tua & keluarga. Karena bagi kami, restu mereka adalah langkah awal yang menujukan jalan baru yang penuh berkah. Dengan haru dan bahagia, restu itu kami terima sebagai bekal untuk melangkah bersama dalam membangun keluarga yang sakinah, mawaddah, dan warahmah.",
  },
  {
    episode: "Episode 3",
    title: "Janji Suci",
    date: "Agustus 2026",
    image: Episode3Image,
    description:
      "Hari yang kami nantikan akhirnya tiba. Di hadapan keluarga dan orang-orang terdekat, kami mengikat janji suci untuk hidup bersama selamanya. Bukan hanya tentang hari yang indah, tetapi tentang komitmen untuk saling menjaga, mencintai, dan bertahan dalam setiap kondisi. Sebuah awal baru, untuk perjalanan seumur hidup, hingga maut memisahkan.",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="px-4 py-16 text-white md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 font-[var(--font-title)] text-4xl leading-none text-white md:text-6xl">
          Our Love Story
        </h2>

        <p className="mb-10 max-w-4xl text-lg italic text-zinc-300 md:text-2xl">
          &quot;True love doesn&apos;t come with fireworks, but with roots that
          grow deeper in silence.&quot;
        </p>

        <div className="space-y-12">
          {stories.map(
            ({ episode, title, date, image, description }, index) => {
              const isReverse = index % 2 !== 0;

              return (
                <article
                  key={episode}
                  className={`flex flex-col gap-5 md:flex-row md:items-center ${
                    isReverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#111111] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)] md:w-[42%]">
                    <img
                      src={image}
                      alt={title}
                      className="h-[18rem] w-full rounded-[1rem] object-cover md:h-[22rem]"
                    />
                  </div>

                  <div className="flex-1 px-1 md:px-2">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
                      {episode}
                    </p>
                    <h3 className="font-[var(--font-title)] text-2xl text-white md:text-4xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-base text-zinc-300 md:text-xl">
                      {date}
                    </p>
                    <p className="mt-4 max-w-xl text-base leading-8 text-zinc-200 md:text-lg">
                      {description}
                    </p>
                  </div>
                </article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}
