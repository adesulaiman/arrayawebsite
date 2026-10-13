# ARRAYA — PT Arraya Mitra Informatika

Company profile website: React (CRA) + Tailwind CSS + Framer Motion + Lenis, FastAPI backend, MongoDB. Bilingual (Indonesian default, English toggle).

## Menjalankan secara lokal

```bash
cd frontend && yarn start     # React dev server :3000
cd backend && uvicorn server:app --reload --port 8001
```

## Mengedit konten (WAJIB BACA)

Semua teks situs ada di dua file — tidak perlu menyentuh komponen:

- `frontend/src/i18n/id.json` — Bahasa Indonesia (default)
- `frontend/src/i18n/en.json` — English

Edit teks di kedua file agar toggle bahasa tetap sinkron.

### Placeholder yang harus diganti

Cari teks berikut di `id.json` / `en.json`:

| Placeholder | Lokasi |
|---|---|
| `[ISI TAHUN BERDIRI]` / `[INSERT FOUNDING YEAR]` | `about.story1` |
| `[ISI KOTA]` / `[INSERT CITY]` | `about.story1` |
| `[ISI ALAMAT KANTOR]` / `[INSERT OFFICE ADDRESS]` | `contact.info.address` |
| `[ISI EMAIL PERUSAHAAN]` / `[INSERT COMPANY EMAIL]` | `contact.info.email` |
| `[ISI NOMOR TELEPON]` / `[INSERT PHONE NUMBER]` | `contact.info.phone` |
| `https://wa.me/6200000000000` | `contact.info.waLink` — ganti dengan nomor WhatsApp asli, format `https://wa.me/628xxxxxxxxxx` |
| Angka statistik hero (`stats.items`) | Placeholder — sesuaikan `value`/`suffix`/`label` |
| Teks `[PLACEHOLDER]` di case study | `projects.items[].challenge/solution/result` |

## Mengganti gambar

Semua aset ada di `frontend/public/assets/`:

| File | Dipakai di |
|---|---|
| `logo-arraya.webp` | Navbar, footer |
| `jewelry-dashboard.webp` | Blok produk + halaman detail Jewelry |
| `loge-main.webp`, `loge-connectors.webp` | Blok produk + halaman detail Loge |
| `kusuma.webp` | Kartu portofolio Kusuma |
| `favicon-64.png`, `apple-touch-icon.png` | Ikon browser (dibuat dari ikon molekul logo) |

Timpa file dengan nama yang sama untuk mengganti gambar.

## Form kontak & email notifikasi

Form mengirim ke `POST /api/contact` → tersimpan di MongoDB (collection `contact_messages`) dan menampilkan toast sukses/gagal.

Untuk mengaktifkan email notifikasi ke pemilik situs, isi di `backend/.env`:

```
CONTACT_NOTIFY_EMAIL="email-anda@domain.com"
```

lalu restart backend. Kosong = email dilewati, pesan tetap tersimpan.

## SEO

`frontend/public/index.html` sudah berisi title, meta description, Open Graph, Twitter card, dan JSON-LD Organization. Setelah domain produksi final, tambahkan tag `canonical`, `og:url`, `og:image`, dan buat `public/sitemap.xml` (sengaja belum dibuat agar tidak mengarah ke domain sementara). `robots.txt` dan `llms.txt` sudah tersedia di `public/`.

## Struktur

```
frontend/src/
├── i18n/id.json, en.json      # SEMUA teks situs
├── context/LanguageContext.jsx
├── lib/scroll.js              # Lenis smooth scroll
├── components/                # Navbar, Footer, Logo, MoleculeCanvas, dll
├── sections/                  # Hero, Stats, About, Products, Projects, ...
└── pages/                     # HomePage, ProductPage (detail produk)
```
