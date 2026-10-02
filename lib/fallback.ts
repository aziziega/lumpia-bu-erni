import type { MenuItem, Testimonial } from "./types";

// Fallback menu bila Supabase belum berisi data (schema belum di-apply).
// Supabase tetap sumber utama; fallback hanya agar situs tidak kosong.
export const FALLBACK_MENU: MenuItem[] = [
  { id: "fb-1", name: "Lumpia Bu Erni", description: "Lumpia specialty rumahan: isian rebung, telur, ayam cincang — kulit crispy, sambal pedas rumahan.", price_idr: 8000, category: "Gorengan", is_available: true, is_featured: true, sort_order: 0 },
  { id: "fb-2", name: "Lumpia Mini (isi 5)", description: "Ukuran mini, cocok buat camilan/reuni arisan.", price_idr: 15000, category: "Gorengan", is_available: true, is_featured: false, sort_order: 1 },
  { id: "fb-3", name: "Sosis Solo", description: "Sosis solo klasik daging cincang, kuah pedas khas.", price_idr: 10000, category: "Gorengan", is_available: true, is_featured: false, sort_order: 2 },
  { id: "fb-4", name: "Pisang Goreng Kipas", description: "Pisang kepok goreng crispy, taburan gula.", price_idr: 8000, category: "Gorengan", is_available: true, is_featured: false, sort_order: 3 },
  { id: "fb-5", name: "Es Teh Jumbo", description: "Es teh manis 650ml.", price_idr: 4000, category: "Minuman", is_available: true, is_featured: false, sort_order: 4 },
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  { id: "fbt-1", customer_name: "Ibu Rina", message: "Lumpianya crispy banget, sambalnya juara. Anak-anak doyan semua!", rating: 5 },
  { id: "fbt-2", customer_name: "Pak Dedi", message: "Langganan tiap jumat, sosis solo-nya enak, harga ramah kantong.", rating: 5 },
];