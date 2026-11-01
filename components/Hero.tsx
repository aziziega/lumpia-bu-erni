interface HeroProps {
  featuredNames: string[];
}

export default function Hero({ featuredNames }: HeroProps) {
  const favoriteText = featuredNames.length > 0 ? featuredNames.join(", ") : "Lumpia Spesial Bu Erni";

  return (
    <section className="relative border-b border-[#E8E1D5] bg-[#FAF7F2] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Sisi Kiri: Narasi & CTA */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8E1D5] bg-[#F4EFE6] px-3.5 py-1 text-xs font-semibold tracking-wide text-[#A8422B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A8422B]"></span>
              RESEP RUMAHAN OTENTIK • DIGORENG FRESH TIAP HARI
            </div>

            <h1 className="font-display mt-5 text-3xl font-bold tracking-tight text-[#262220] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Kulit Ekstra Renyah, Isian Rebung & Ayam Gurih Alami.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#615852] sm:text-lg">
              Resep asli olahan Bu Erni yang dimasak setiap pagi dari dapur rumahan. 
              Menggunakan rebung segar yang diolah teliti tanpa bau langu, dibalut kulit tipis 
              renyah keemasan, dan disajikan dengan saus cocolan pedas-manis racikan sendiri.
            </p>

            {/* Poin Kualitas / Sensory points */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs font-medium text-[#615852]">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#A8422B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Rebung segar pilihan, bersih & tanpa bau</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#A8422B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tersedia varian Goreng, Basah, & Frozen</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#A8422B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Saus kental gurih + cabai rawit hijau</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#A8422B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Melayani pesanan snack box & arisan</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pesan"
                className="rounded-full bg-[#A8422B] px-7 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#913621]"
              >
                Pesan Sekarang
              </a>
              <a
                href="#menu"
                className="rounded-full border border-[#E8E1D5] bg-white px-7 py-3 text-sm font-semibold text-[#262220] transition hover:bg-[#F4EFE6]"
              >
                Lihat Daftar Menu
              </a>
            </div>

            <p className="mt-4 text-xs text-[#8C827A]">
              Favorit pelanggan: <strong className="font-semibold text-[#615852]">{favoriteText}</strong>
            </p>
          </div>

          {/* Sisi Kanan: Kartu Editorial Showcase Produk */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl border border-[#E8E1D5] bg-white p-6 shadow-sm sm:p-8">
              {/* Header Kartu */}
              <div className="flex items-start justify-between border-b border-[#F4EFE6] pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A8422B]">
                    Signature Dish
                  </span>
                  <h3 className="font-display mt-0.5 text-2xl font-bold text-[#262220]">
                    Lumpia Spesial Bu Erni
                  </h3>
                </div>
                <span className="rounded-full bg-[#F4EFE6] px-3 py-1 font-display text-sm font-bold text-[#A8422B]">
                  Rp 8.000 / pcs
                </span>
              </div>

              {/* Anatomi Rasa */}
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3 rounded-xl bg-[#FAF7F2] p-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#A8422B]/10 text-[#A8422B] font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#262220]">Kulit Tipis Renyah</h4>
                    <p className="mt-0.5 text-xs text-[#615852]">
                      Digoreng dengan minyak baru bertemperatur pas, renyah tahan lama tanpa minyak berlebih.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#FAF7F2] p-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#A8422B]/10 text-[#A8422B] font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#262220]">Isian Rebung, Telur & Ayam</h4>
                    <p className="mt-0.5 text-xs text-[#615852]">
                      Dimasak perlahan dengan rempah pilihan hingga meresap gurih dan manis alami.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#FAF7F2] p-3.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#A8422B]/10 text-[#A8422B] font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#262220]">Sambal Cocolan Khas</h4>
                    <p className="mt-0.5 text-xs text-[#615852]">
                      Saus kental racikan gula kelapa, bawang, dan bumbu rempah plus cabai rawit petik.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Kartu */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#F4EFE6] text-xs">
                <div className="flex items-center gap-1.5 text-[#615852]">
                  <span className="font-semibold text-[#262220]">4.9 / 5.0</span>
                  <span className="text-[#8C827A]">• Ratusan ulasan positif</span>
                </div>
                <a
                  href="#pesan"
                  className="font-semibold text-[#A8422B] transition hover:text-[#913621]"
                >
                  Pesan Porsi Ini →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
