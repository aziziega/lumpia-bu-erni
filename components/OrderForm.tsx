"use client";

import { useState } from "react";
import type { MenuItem } from "@/lib/types";

function rupiah(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

export default function OrderForm({ menu }: { menu: MenuItem[] }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [note, setNote] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const add = (id: string, delta: number) => {
    setCart((c) => {
      const q = (c[id] ?? 0) + delta;
      if (q <= 0) {
        const { [id]: _, ...rest } = c;
        return rest;
      }
      return { ...c, [id]: q };
    });
  };

  const items = Object.entries(cart).map(([id, qty]) => {
    const m = menu.find((x) => x.id === id)!;
    return { ...m, qty };
  });
  const total = items.reduce((s, i) => s + i.price_idr * i.qty, 0);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (items.length === 0) {
      setError("Pilih minimal 1 menu dulu ya 😊");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          whatsapp: wa,
          note,
          items: items.map((i) => ({ menu_item_id: i.id, item_name: i.name, qty: i.qty, price_idr: i.price_idr })),
          total_idr: total,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setDone(true);
      setCart({});
    } catch (err) {
      setError("Gagal mengirim pesanan. Coba lagi ya — atau pesan langsung via WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <section id="pesan" className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="rounded-3xl bg-white p-10 shadow-lg">
          <div className="text-5xl">🥟</div>
          <h2 className="font-display mt-4 text-2xl font-bold">Terima kasih! Pesanan terkirim ✅</h2>
          <p className="mt-2 text-stone-600">
            Bu Erni akan menghubungi kamu via WhatsApp untuk konfirmasi.
          </p>
          <button
            onClick={() => setDone(false)}
            className="mt-6 rounded-full bg-orange-700 px-6 py-2 font-medium text-white hover:bg-orange-800"
          >
            Pesan lagi
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="pesan" className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="font-display text-center text-3xl font-bold">Pesan Sekarang</h2>
      <p className="mt-2 text-center text-stone-600">Pilih menu, isi nama & WhatsApp — sisanya kami yang hubungi.</p>

      <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg sm:p-8">
        {/* pilih menu (chips) */}
        <div className="flex flex-wrap gap-2">
          {menu.map((m) => {
            const q = cart[m.id] ?? 0;
            return (
              <div
                key={m.id}
                className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${q > 0 ? "border-orange-700 bg-orange-50 font-medium" : "border-stone-200"}`}
              >
                <span>{m.name}</span>
                <span className="text-stone-500">{rupiah(m.price_idr)}</span>
                <button onClick={() => add(m.id, -1)} className="h-5 w-5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200" aria-label={`kurang ${m.name}`}>−</button>
                <span className="w-5 text-center font-semibold">{q}</span>
                <button onClick={() => add(m.id, 1)} className="h-5 w-5 rounded-full bg-orange-700 text-white hover:bg-orange-800" aria-label={`tambah ${m.name}`}>+</button>
              </div>
            );
          })}
        </div>

        <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama kamu"
            className="rounded-xl border border-stone-300 px-4 py-2.5 focus:border-orange-700 focus:outline-none"
          />
          <input
            required
            value={wa}
            onChange={(e) => setWa(e.target.value)}
            placeholder="No. WhatsApp (08xx)"
            inputMode="tel"
            className="rounded-xl border border-stone-300 px-4 py-2.5 focus:border-orange-700 focus:outline-none"
          />
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Catatan (misal: pedas level 2, antar jam 4 sore)"
            rows={2}
            className="rounded-xl border border-stone-300 px-4 py-2.5 focus:border-orange-700 focus:outline-none sm:col-span-2"
          />
        </form>

        <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
          <div>
            <div className="text-sm text-stone-500">Total: {items.reduce((s, i) => s + i.qty, 0)} item</div>
            <div className="font-display text-2xl font-bold">{rupiah(total)}</div>
          </div>
          <button
            disabled={sending}
            className="rounded-full bg-orange-700 px-8 py-3 font-semibold text-white transition hover:bg-orange-800 disabled:opacity-50"
          >
            {sending ? "Mengirim…" : "Kirim Pesanan"}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </div>
    </section>
  );
}