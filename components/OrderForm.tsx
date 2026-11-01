"use client";

import { useState } from "react";
import type { MenuItem } from "@/lib/types";

function rupiah(n: number) {
  return "Rp " + n.toLocaleString("id-ID");
}

export const WA_NUMBER = "6281234567890"; // Nomor Bu Erni

export default function OrderForm({ menu }: { menu: MenuItem[] }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [deliveryType, setDeliveryType] = useState("antar");
  const [variantNote, setVariantNote] = useState("Goreng Renyah");
  const [extraNote, setExtraNote] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [lastOrderId, setLastOrderId] = useState("");
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

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price_idr * i.qty, 0);

  const fullNote = [
    `Metode: ${deliveryType === "antar" ? "Kirim via Kurir" : "Ambil di Dapur"}`,
    `Varian Pilihan: ${variantNote}`,
    extraNote.trim() ? `Catatan: ${extraNote.trim()}` : null,
  ]
    .filter(Boolean)
    .join(" | ");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (items.length === 0) {
      setError("Silakan pilih minimal satu menu terlebih dahulu.");
      return;
    }

    if (!name.trim() || !wa.trim()) {
      setError("Mohon lengkapi nama dan nomor WhatsApp Anda.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name.trim(),
          whatsapp: wa.trim(),
          note: fullNote,
          items: items.map((i) => ({
            menu_item_id: i.id,
            item_name: i.name,
            qty: i.qty,
            price_idr: i.price_idr,
          })),
          total_idr: total,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Terjadi kesalahan pada server");
      }

      const resData = await res.json();
      setLastOrderId(resData.order_id || "");
      setDone(true);
    } catch {
      setError("Gagal mengirim pesanan. Silakan coba kembali atau gunakan tombol pesan langsung via WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  // Generate WA Link with pre-filled message
  const waOrderText = encodeURIComponent(
    `Halo Bu Erni, saya mau pesan:\n` +
      items.map((i) => `- ${i.name} (${i.qty}x) = ${rupiah(i.price_idr * i.qty)}`).join("\n") +
      `\n\nTotal: ${rupiah(total)} (${totalQty} item)\n` +
      `Varian: ${variantNote}\n` +
      `Metode: ${deliveryType === "antar" ? "Kirim Kurir" : "Ambil Sendiri"}\n` +
      `Nama: ${name || "-"}\n` +
      (extraNote ? `Catatan: ${extraNote}\n` : "")
  );

  if (done) {
    return (
      <section id="pesan" className="border-b border-[#E8E1D5] bg-[#FAF7F2] py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="rounded-3xl border border-[#E8E1D5] bg-white p-8 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF7F2] text-[#A8422B] border border-[#E8E1D5]">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <h2 className="font-display mt-5 text-2xl font-bold text-[#262220] sm:text-3xl">
              Pesanan Berhasil Dikirim
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#615852]">
              Terima kasih, <strong>{name}</strong>! Pesanan Anda telah tercatat di sistem dapur Bu Erni.
              Kami akan segera menghubungi nomor WhatsApp <strong>{wa}</strong> untuk konfirmasi total dan estimasi waktu penyiapan.
            </p>

            {lastOrderId && (
              <div className="mt-4 inline-block rounded-lg bg-[#FAF7F2] px-3.5 py-1 text-xs font-mono text-[#8C827A] border border-[#E8E1D5]">
                ID Pesanan: {lastOrderId.slice(0, 8)}...
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waOrderText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F7A43] px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-[#165c32]"
              >
                Konfirmasi Cepat via WhatsApp
              </a>
              <button
                onClick={() => {
                  setDone(false);
                  setCart({});
                  setName("");
                  setWa("");
                  setExtraNote("");
                }}
                className="rounded-full border border-[#E8E1D5] bg-white px-6 py-2.5 text-xs font-semibold text-[#262220] transition hover:bg-[#FAF7F2]"
              >
                Buat Pesanan Baru
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pesan" className="border-b border-[#E8E1D5] bg-[#FAF7F2] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A8422B]">
            Formulir Pemesanan
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[#262220] sm:text-4xl">
            Pesan Lumpia Dari Dapur
          </h2>
          <p className="mt-3 text-base text-[#615852]">
            Tentukan jumlah menu yang diinginkan, lengkapi identitas pemesan, dan kami akan langsung menyiapkan pesanan Anda.
          </p>
        </div>

        {/* Main Box */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#E8E1D5] bg-white shadow-sm">
          <form onSubmit={submit} className="p-6 sm:p-10">
            {/* Step 1: Pilih Menu */}
            <div>
              <div className="flex items-center justify-between border-b border-[#F4EFE6] pb-3">
                <h3 className="font-display text-lg font-bold text-[#262220]">
                  1. Pilih Menu & Jumlah
                </h3>
                <span className="text-xs text-[#8C827A]">
                  {totalQty} item dipilih
                </span>
              </div>

              <div className="mt-4 divide-y divide-[#F4EFE6]">
                {menu.map((m) => {
                  const qty = cart[m.id] ?? 0;
                  return (
                    <div
                      key={m.id}
                      className={`flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between transition ${
                        qty > 0 ? "bg-[#FAF7F2]/50 px-3 rounded-xl" : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-[#262220]">
                            {m.name}
                          </h4>
                          {m.is_featured && (
                            <span className="rounded bg-[#F4EFE6] px-2 py-0.5 text-[10px] font-bold text-[#A8422B]">
                              Favorit
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-[#615852] line-clamp-1">
                          {m.description || "Olahan resep dapur Bu Erni."}
                        </p>
                        <div className="mt-1 font-display text-xs font-bold text-[#A8422B]">
                          {rupiah(m.price_idr)}
                        </div>
                      </div>

                      {/* Stepper Button */}
                      <div className="flex items-center gap-3 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => add(m.id, -1)}
                          disabled={qty === 0}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E1D5] bg-white text-sm font-bold text-[#615852] transition hover:bg-[#FAF7F2] disabled:opacity-30 disabled:hover:bg-white"
                          aria-label={`Kurangi ${m.name}`}
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-mono text-sm font-bold text-[#262220]">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => add(m.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A8422B] text-sm font-bold text-white transition hover:bg-[#913621]"
                          aria-label={`Tambah ${m.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Varian & Pengambilan */}
            <div className="mt-8 border-t border-[#F4EFE6] pt-6">
              <h3 className="font-display text-lg font-bold text-[#262220]">
                2. Varian Sajian & Metode
              </h3>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#615852] mb-1.5">
                    Varian Lumpia
                  </label>
                  <select
                    value={variantNote}
                    onChange={(e) => setVariantNote(e.target.value)}
                    className="w-full rounded-xl border border-[#E8E1D5] bg-[#FAF7F2] px-3.5 py-2.5 text-sm text-[#262220] focus:border-[#A8422B] focus:bg-white focus:outline-none"
                  >
                    <option value="Goreng Renyah">Goreng Renyah (Siap Santap)</option>
                    <option value="Basah / Kukus">Basah / Kukus Tradisional</option>
                    <option value="Frozen (Bisa digoreng sendiri)">Frozen (Bisa digoreng sendiri di rumah)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#615852] mb-1.5">
                    Metode Pengambilan
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType("antar")}
                      className={`flex-1 rounded-xl border py-2.5 text-xs font-semibold transition ${
                        deliveryType === "antar"
                          ? "border-[#A8422B] bg-[#F4EFE6] text-[#A8422B]"
                          : "border-[#E8E1D5] bg-[#FAF7F2] text-[#615852]"
                      }`}
                    >
                      Kirim via Kurir
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType("ambil")}
                      className={`flex-1 rounded-xl border py-2.5 text-xs font-semibold transition ${
                        deliveryType === "ambil"
                          ? "border-[#A8422B] bg-[#F4EFE6] text-[#A8422B]"
                          : "border-[#E8E1D5] bg-[#FAF7F2] text-[#615852]"
                      }`}
                    >
                      Ambil di Dapur
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Identitas Pemesan */}
            <div className="mt-8 border-t border-[#F4EFE6] pt-6">
              <h3 className="font-display text-lg font-bold text-[#262220]">
                3. Identitas Pemesan
              </h3>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#615852] mb-1.5">
                    Nama Pemesan <span className="text-[#A8422B]">*</span>
                  </label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Ibu Rina"
                    className="w-full rounded-xl border border-[#E8E1D5] bg-[#FAF7F2] px-3.5 py-2.5 text-sm text-[#262220] placeholder-[#8C827A] focus:border-[#A8422B] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#615852] mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-[#A8422B]">*</span>
                  </label>
                  <input
                    required
                    value={wa}
                    onChange={(e) => setWa(e.target.value)}
                    placeholder="0812xxxxxxxx"
                    inputMode="tel"
                    className="w-full rounded-xl border border-[#E8E1D5] bg-[#FAF7F2] px-3.5 py-2.5 text-sm text-[#262220] placeholder-[#8C827A] focus:border-[#A8422B] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#615852] mb-1.5">
                    Catatan Khusus (Opsional)
                  </label>
                  <textarea
                    value={extraNote}
                    onChange={(e) => setExtraNote(e.target.value)}
                    placeholder="Contoh: Sambal dipisah, minta cabai rawit agak banyak, atau antar jam 3 sore."
                    rows={2}
                    className="w-full rounded-xl border border-[#E8E1D5] bg-[#FAF7F2] px-3.5 py-2.5 text-sm text-[#262220] placeholder-[#8C827A] focus:border-[#A8422B] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                {error}
              </div>
            )}

            {/* Step 4: Summary & Submit */}
            <div className="mt-8 border-t border-[#E8E1D5] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-xs text-[#8C827A]">
                  Total Pembayaran ({totalQty} item):
                </div>
                <div className="font-display text-2xl font-bold text-[#262220]">
                  {rupiah(total)}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                {items.length > 0 && (
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${waOrderText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#E8E1D5] bg-white px-5 py-3 text-xs font-semibold text-[#262220] transition hover:bg-[#FAF7F2]"
                  >
                    Pesan Cepat via WA
                  </a>
                )}
                <button
                  type="submit"
                  disabled={sending || items.length === 0}
                  className="inline-flex items-center justify-center rounded-full bg-[#A8422B] px-8 py-3 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#913621] disabled:opacity-50"
                >
                  {sending ? "Mengirim Pesanan..." : "Kirim Pesanan Sekarang"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
