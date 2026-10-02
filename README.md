# LUMPIA BU ERNI — Landing Page

> ⚠️ **STATUS: PROJECT TESTER / POC** — bukan usaha asli.
> Project ini dibuat untuk **menguji workflow fullstack-deploy Hermes Agent (Muthi-Bot)**: dari satu prompt chat Telegram → scaffold Next.js → deploy Vercel → create+push GitHub — semuanya dijalankan otomatis oleh bot di home server, tanpa campur tangan manusia.

**Live:** https://lumpia-bu-erni.vercel.app

## Untuk apa project ini?

Test case pipeline **fullstack-deploy** (Hermes Agent di home LXC server):

- **Build**: Next.js 16 (App Router) + Tailwind CSS 4
- **Database**: Supabase (auto-RLS ON; schema di `supabase-schema.sql`)
- **Hosting**: Vercel Hobby (deploy via CLI + API token)
- **Repo**: GitHub fine-grained PAT (repo ini dibuat via API oleh bot)
- **Secrets**: hanya di server, tidak pernah masuk repo/chat

## Fitur (untuk skenario test FnB)

- 🥟 Hero + menu grid dari Supabase (fallback data bila DB kosong)
- ⭐ Testimoni pelanggan (tabel `testimonials`)
- 📝 Form pesanan → tabel `orders` + `order_items` (RLS: insert-only publik)
- 💬 Tombol WhatsApp (nomor placeholder)
- ⚡ ISR 60 detik — konten CMS ter-update otomatis

## Yang belum dikerjakan (sesuai status tester)

- [ ] Schema SQL belum dijalankan di Supabase → situs masih menampilkan fallback data
- [ ] Nomor WhatsApp & info toko masih placeholder
- [ ] GitHub→Vercel auto-deploy belum dikoneksikan (deploy pertama via CLI)
- [ ] Halaman admin CMS `/admin`

## Setup lokal (kalau mau fork/coba)

1. `npm install`
2. Copy env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (+ `SUPABASE_SERVICE_ROLE_KEY` server-side only)
3. Jalankan `supabase-schema.sql` di SQL Editor Supabase
4. `npm run dev`

## Pelajaran pipeline yang tercatat dari project ini

Dokumentasi lengkap ada di skill `fullstack-deploy` (sisi server). Highlight:

- Fine-grained PAT: **Administration R/W** untuk create repo; **Contents R/W untuk push** (dua-duanya wajib)
- Mengedit izin token = token lama langsung regenerasi (3× rotasi selama setup)
- Supabase direct `db.<ref>.supabase.co` = IPv6-only → pakai pooler
- Vercel env vars via REST API lebih reliable daripada CLI stdin

---
*Kode di repo ini identik dengan yang di-deploy live. Semua data yang dikirim via form pesanan masuk ke Supabase project tester (region SG), bukan produksi.*