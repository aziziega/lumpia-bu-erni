export default function InfoSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 text-center shadow">
          <div className="text-3xl">🏠</div>
          <h3 className="font-display mt-2 font-semibold">Dapur Rumahan</h3>
          <p className="mt-1 text-sm text-stone-600">
            Dibuat langsung oleh Bu Erni, resep asli tanpa pengawet.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 text-center shadow">
          <div className="text-3xl">🕑</div>
          <h3 className="font-display mt-2 font-semibold">Jam Buka</h3>
          <p className="mt-1 text-sm text-stone-600">
            Setiap hari, 08.00–17.00 WIB.
            <br />
            Pesanan besar min. 1 hari sebelumnya.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 text-center shadow">
          <div className="text-3xl">🛵</div>
          <h3 className="font-display mt-2 font-semibold">Ambil Sendiri / Antar</h3>
          <p className="mt-1 text-sm text-stone-600">
            Bisa ambil di rumah, atau diantar radius 5 km (biaya menyesuaikan).
          </p>
        </div>
      </div>
    </section>
  );
}