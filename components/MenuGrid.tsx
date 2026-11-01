import type { MenuItem } from "@/lib/types";

function rupiah(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

export default function MenuGrid({
  menu,
  categories,
}: {
  menu: MenuItem[];
  categories: string[];
}) {
  return (
    <section id="menu" className="border-b border-[#E8E1D5] bg-[#FAF7F2] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header Seksi */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A8422B]">
            Daftar Hidangan
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#262220] sm:text-4xl">
            Menu Pilihan Dapur Bu Erni
          </h2>
          <p className="mt-3 text-base text-[#615852]">
            Semua dibuat fresh setiap pagi dengan resep dapur rumahan. Siap dipesan untuk camilan harian,
            konsumsi kantor, maupun snack box acara keluarga.
          </p>
        </div>

        {/* Menu per Kategori */}
        <div className="mt-14 space-y-14">
          {categories.map((cat) => {
            const categoryItems = menu.filter((m) => m.category === cat);
            if (categoryItems.length === 0) return null;

            return (
              <div key={cat} className="space-y-6">
                {/* Category Header Bar */}
                <div className="flex items-center gap-4">
                  <h3 className="font-display text-2xl font-bold text-[#262220]">
                    {cat}
                  </h3>
                  <div className="h-px flex-1 bg-[#E8E1D5]"></div>
                  <span className="text-xs font-medium text-[#8C827A]">
                    {categoryItems.length} pilihan
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryItems.map((item) => (
                    <article
                      key={item.id}
                      className="group flex flex-col justify-between rounded-2xl border border-[#E8E1D5] bg-white p-6 shadow-sm transition hover:border-[#A8422B]/40 hover:shadow-md"
                    >
                      <div>
                        {/* Top Meta: Category & Badge */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8C827A]">
                            {item.category}
                          </span>
                          {item.is_featured && (
                            <span className="rounded-full bg-[#F4EFE6] px-2.5 py-0.5 text-[11px] font-bold text-[#A8422B]">
                              Paling Favorit
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="font-display mt-3 text-xl font-bold text-[#262220] transition group-hover:text-[#A8422B]">
                          {item.name}
                        </h4>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-relaxed text-[#615852]">
                          {item.description || "Dibuat dari bahan segar pilihan dapur Bu Erni."}
                        </p>
                      </div>

                      {/* Bottom: Price & Quick Action */}
                      <div className="mt-6 flex items-center justify-between border-t border-[#F4EFE6] pt-4">
                        <div>
                          <span className="block text-[11px] text-[#8C827A]">Harga</span>
                          <span className="font-display text-lg font-bold text-[#A8422B]">
                            {rupiah(item.price_idr)}
                          </span>
                        </div>
                        <a
                          href="#pesan"
                          className="rounded-full border border-[#E8E1D5] bg-[#FAF7F2] px-4 py-2 text-xs font-semibold text-[#262220] transition hover:bg-[#A8422B] hover:text-white hover:border-[#A8422B]"
                        >
                          Pesan Ini
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
