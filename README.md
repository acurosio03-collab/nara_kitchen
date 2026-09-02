# ORDERIN_NARA_V2

NARA KITCHEN demo built from ORDERIN V1 + Google Stitch checkout design + Supabase admin login/dashboard.

## Struktur
- Customer: index.html, products.html, product-detail.html, cart.html, checkout.html, order-success.html
- Admin: /admin/ (login) -> dashboard.html
- Supabase config: js/supabase-config.js
- Supabase loader: js/supabase.js

## Catatan
Checkout menggunakan desain Google Stitch dan tetap mempertahankan alur ORDERIN V1: keranjang -> checkout -> simpan order -> WhatsApp -> success.
Admin membaca data dari Supabase. Pastikan tabel products/orders sesuai schema project Supabase kamu.
