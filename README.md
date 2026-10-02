# LUMPIA BU ERNI — Landing Page

Landing page + order form untuk usaha FnB lumpia rumahan. Next.js 16 (App Router) + Tailwind + Supabase.

**Live:** https://lumpia-bu-erni.vercel.app

## Fitur
- 🥟 Hero + menu grid dari Supabase (fallback data bawaan bila DB kosong)
- ⭐ Testimoni pelanggan dari Supabase
- 📝 Form pesanan → tersimpan ke tabel `orders` + `order_items` (RLS: insert-only publik)
- 💬 Tombol WhatsApp langsung
- ISR 60 detik — konten CMS ter-update otomatis

## Setup
1. Copy `.env.local.example` → `.env.local`, isi kredensial Supabase
2. `npm install && npm run dev`

## Database
Schema & seed ada di `supabase-schema.sql` — jalankan di SQL Editor Supabase (atau psql). Auto-RLS aktif; policy sudah termasuk: publik baca menu/testimoni, publik insert pesanan, admin (authenticated) CRUD.

## TODO sebelum dipakai sungguhan
- Ganti nomor WhatsApp di `components/Footer.tsx` (`WA_NUMBER`)
- Nama/alamat/jam buka di `components/InfoSection.tsx`
- Login admin (Supabase Auth) untuk halaman CMS `/admin`