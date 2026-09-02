window.dbReady = false;
window.db = null;
(function(){
  if(!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) return;
  const s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
  s.onload=function(){
    try{ window.db=window.supabase.createClient(window.SUPABASE_URL,window.SUPABASE_ANON_KEY); window.dbReady=true; window.dispatchEvent(new Event('supabase-ready')); }
    catch(e){ console.error(e); }
  };
  s.onerror=function(){ console.error('Supabase SDK gagal dimuat'); };
  document.head.appendChild(s);
})();
