# NARA KITCHEN — ORDERIN V2

V2 menambahkan pondasi **admin online** dengan Supabase.

## Setup
1. Buat project Supabase.
2. Jalankan `supabase-schema.sql` di SQL Editor.
3. Buat akun admin di Authentication > Users.
4. Isi `js/supabase-config.js` dengan URL project dan anon/publishable key.
5. Deploy folder ke Vercel.
6. Buka `/admin/` untuk login.

## Fitur online
- Login admin
- Dashboard
- Produk online: tambah/edit/hapus
- Pesanan online
- Update status pesanan
- Checkout pelanggan dapat disimpan ke tabel orders (jika Supabase sudah dikonfigurasi)

## Penting
Jangan masukkan `service_role` key ke frontend. Gunakan anon/publishable key.
NARA KITCHEN, alamat, nomor WhatsApp, dan menu adalah data demo.
