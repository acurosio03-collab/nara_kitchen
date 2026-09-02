window.dbReady=false; window.db=null;
(function(){
 const ok=window.SUPABASE_URL && window.SUPABASE_ANON_KEY &&
 !window.SUPABASE_URL.includes("YOUR-PROJECT") &&
 !window.SUPABASE_ANON_KEY.includes("YOUR_SUPABASE");
 if(!ok)return;
 const s=document.createElement("script");
 s.src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
 s.onload=()=>{window.db=supabase.createClient(window.SUPABASE_URL,window.SUPABASE_ANON_KEY);window.dbReady=true;};
 document.head.appendChild(s);
})();