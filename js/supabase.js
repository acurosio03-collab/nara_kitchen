// Supabase loader
window.dbReady = false;
window.db = null;

(function () {
  const url = window.SUPABASE_URL;
  const key = window.SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.error("Supabase config belum diisi.");
    return;
  }

  const s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  s.onload = function () {
    try {
      window.db = window.supabase.createClient(url, key);
      window.dbReady = true;
      console.log("Supabase berhasil terhubung!");
      window.dispatchEvent(new Event("supabase-ready"));
    } catch (err) {
      console.error("Gagal membuat Supabase client:", err);
    }
  };
  s.onerror = function () {
    console.error("Supabase SDK gagal dimuat.");
  };
  document.head.appendChild(s);
})();
