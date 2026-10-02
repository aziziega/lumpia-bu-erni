import type { MenuItem } from "@/lib/types";

function rupiah(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

const EMOJI: Record<string, string> = {
  Lumpia: "🥟",
  Gorengan: "🍤",
  Minuman: "🥤",
  Sosis: "🌭",
};

export default function MenuGrid({ menu, categories }: { menu: MenuItem[]; categories: string[] }) {
  return (
    <section id="menu" className="mx-auto max-w-5xl px-4 py-20">
      <h2 className="font-display text-center text-3xl font-bold">Menu Kami</h2>
      <p className="mt-2 text-center text-stone-600">Semua dibuat fresh setiap hari di dapur rumahan.</p>

      {categories.map((cat) => (
        <div key={cat} className="mt-10">
          <h3 className="font-display mb-4 flex items-center gap-2 text-xl font-semibold text-orange-900">
            <span>{EMOJI[cat] ?? "🍽️"}</span> {cat}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {menu
              .filter((m) => m.category === cat)
              .map((m) => (
                <div
                  key={m.id}
                  className="group rounded-2xl bg-white p-5 shadow transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold">{m.name}</h4>
                    {m.is_featured && (
                      <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800">
                        Favorit ⭐
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-stone-600">{m.description}</p>
                  <div className="mt-3 font-display text-lg font-bold text-orange-800">
                    {rupiah(m.price_idr)}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}