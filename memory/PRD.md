# PRD — Website Company Profile PT Arraya Mitra Informatika (ARRAYA)

## Problem Statement (ringkasan)
Membangun company profile premium, modern, fully responsive untuk PT Arraya Mitra Informatika (brand: ARRAYA), perusahaan software & IT solutions Indonesia. Bilingual (ID default, EN toggle), React + Tailwind + Framer Motion + Lucide, warna brand mengikuti logo (biru #1E88E5, cyan #4FC3F7, merah aksen #D32F2F, navy #1F3A5F), motif molekul, form kontak ke backend, semua teks di file i18n, placeholder jelas untuk fakta yang belum diberikan.

## Arsitektur
- Frontend: React (CRA/craco) + Tailwind CSS + Framer Motion + Lenis + Sonner. i18n via `src/i18n/id.json` & `en.json` + LanguageContext. Routes: `/`, `/products/jewelry-management`, `/products/loge-knowledge-ai`.
- Backend: FastAPI — `POST /api/contact` (validasi Pydantic + EmailStr), simpan ke MongoDB `contact_messages`, kirim email notifikasi via Emergent managed Resend proxy (guardrail gate `_assert_safe_email`) ke `CONTACT_NOTIFY_EMAIL`.
- DB: MongoDB via MONGO_URL/DB_NAME env.
- Aset: `frontend/public/assets/` — logo, screenshot Jewelry/Loge/Kusuma (dari upload user), favicon dari ikon molekul logo.
- SEO: static head (title/description/OG/Twitter/JSON-LD Organization), robots.txt, llms.txt, favicon. Sitemap + canonical ditunda sampai domain produksi final.

## Persona
- Calon klien enterprise/pemerintah Indonesia yang mengevaluasi vendor IT (baca ID, sebagian EN).
- Pemilik situs (non-teknis) yang mengedit konten via file JSON.

## Yang sudah diimplementasikan (13 Okt 2026)
- Navbar sticky blur + toggle ID/EN + hamburger mobile + CTA merah.
- Hero: masked line-by-line reveal, canvas jaringan molekul interaktif (mouse repulsion), 3 glass card floating + parallax scroll.
- Stats strip counter animasi (angka placeholder), About (visi/misi/4 nilai), Products (2 blok alternating, frame browser tilted + dark device frame), Projects (Kusuma & Sampang + modal Case Study), Services 6 kartu, Why ARRAYA (section navy), Process timeline 5 langkah, Tech stack marquee lambat, CTA band gradient, Contact (form validasi + toast + info + map placeholder), footer navy + tombol WhatsApp floating.
- Halaman detail produk Jewelry & Loge (fitur lengkap, highlights, CTA).
- Backend kontak: tersimpan di MongoDB, email notifikasi terverifikasi bekerja (email_sent: true saat diuji ke alamat tes).
- Semua teks terpusat di id.json/en.json; placeholder [ISI ...] untuk fakta yang belum diberikan.

## Backlog
- P0: Isi `CONTACT_NOTIFY_EMAIL` di backend/.env dengan email asli pemilik (email notifikasi aktif setelah itu).
- P0: Ganti placeholder konten (tahun berdiri, alamat, email, telepon, nomor WA, statistik, teks case study).
- P1: Embed Google Maps asli di section kontak.
- P1: Canonical/og:url/og:image + sitemap.xml setelah domain produksi final; aktifkan toggle prerender saat deploy.
- P2: Halaman blog/insight bilingual; versi putih logo untuk footer; ganti foto About (Unsplash) dengan foto tim asli.

## Next tasks
1. Minta email notifikasi + data kontak asli ke user.
2. Embed Google Maps.
3. Finalisasi SEO absolut saat domain produksi tersedia.
