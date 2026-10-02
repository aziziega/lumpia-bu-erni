export default function Hero({ featuredNames }: { featuredNames: string[] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-900 via-orange-800 to-orange-700 text-white">
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
        {/* logo emblem */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-50 text-5xl shadow-xl">
          🥟
        </div>
        <h1 className="font-display mt-6 text-4xl font-bold sm:text-6xl">
          LUMPIA BU ERNI
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-orange-100">
          Lumpia specialty rumahan — isian rebung, telur & ayam cincang,
          kulit crispy, dengan sambal pedas racikan rumahan.
        </p>
        <p className="mt-3 text-sm text-orange-200">
          ⭐ Favorit: {featuredNames.join(", ") || "Lumpia Bu Erni"}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#menu"
            className="rounded-full bg-amber-50 px-8 py-3 font-semibold text-orange-900 shadow transition hover:bg-white"
          >
            Lihat Menu
          </a>
          <a
            href="#pesan"
            className="rounded-full border border-orange-200 px-8 py-3 font-semibold text-orange-50 transition hover:bg-orange-800"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
      {/* gelombang bawah */}
      <svg viewBox="0 0 1440 60" className="block w-full text-amber-50" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,32 C360,64 1080,0 1440,32 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
}