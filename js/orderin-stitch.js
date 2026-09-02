(function(){
  const CART_KEY='orderin_cart';
  const getCart=()=>JSON.parse(localStorage.getItem(CART_KEY)||'[]');
  const saveCart=c=>localStorage.setItem(CART_KEY,JSON.stringify(c));
  const rupiah=n=>'Rp '+Number(n||0).toLocaleString('id-ID');
  function syncBadge(){
    const n=getCart().reduce((a,x)=>a+Number(x.qty||1),0);
    document.querySelectorAll('[data-orderin-cart-badge]').forEach(e=>e.textContent=n);
  }
  function wireMenu(){
    document.querySelectorAll('article').forEach((card,i)=>{
      const title=card.querySelector('h2,h3'); const price=card.querySelector('.font-mono-data');
      const add=card.querySelector('button[onclick*="toggleQty"]');
      if(!title||!add) return;
      const name=title.textContent.trim();
      const p=Number((price?.textContent||'').replace(/[^0-9]/g,''))||0;
      add.removeAttribute('onclick'); add.addEventListener('click',()=>addItem({id:'stitch-'+i,name,price:p,emoji:'🍽️'}));
      card.dataset.orderinProduct='1'; card.dataset.orderinName=name;
    });
    document.querySelectorAll('a').forEach(a=>{
      const t=a.textContent.trim().toLowerCase();
      if(t==='pesanan') a.href='checkout.html';
      if(t==='menu') a.href='index.html';
    });
    syncBadge();
  }
  function addItem(p){
    const c=getCart(); const x=c.find(x=>x.id===p.id);
    if(x)x.qty=(x.qty||1)+1; else c.push({...p,qty:1}); saveCart(c); syncBadge();
    alert(p.name+' ditambahkan ke pesanan');
  }
  function wireCheckout(){
    const btn=[...document.querySelectorAll('button')].find(b=>/place order|pesan|buat pesanan|konfirmasi/i.test(b.textContent));
    if(!btn)return;
    btn.addEventListener('click',async function(ev){
      ev.preventDefault(); const c=getCart(); if(!c.length){alert('Keranjang masih kosong.');return;}
      const inputs=[...document.querySelectorAll('input,textarea')];
      const val=(rx)=>{const x=inputs.find(e=>rx.test((e.name||'')+' '+(e.placeholder||'')));return x?.value||''};
      const customer={name:val(/nama|name/i)||'Customer',phone:val(/phone|telepon|wa|whatsapp/i),address:val(/alamat|address/i),note:val(/catatan|note/i)};
      const total=c.reduce((a,x)=>a+Number(x.price||0)*Number(x.qty||1),0);
      const order={id:'ORD-'+Date.now(),customer_name:customer.name,customer_phone:customer.phone,customer_address:customer.address,customer_note:customer.note,items:c,total,status:'Baru'};
      try{ if(window.dbReady&&window.db){const r=await window.db.from('orders').insert(order); if(r.error)throw r.error;} else {const os=JSON.parse(localStorage.getItem('orderin_orders')||'[]');os.push({...order,createdAt:new Date().toISOString(),customer});localStorage.setItem('orderin_orders',JSON.stringify(os));} localStorage.removeItem(CART_KEY); location.href='order-success.html'; }
      catch(e){alert('Pesanan gagal disimpan: '+e.message)}
    });
  }
  function wireAdmin(){
    if(!document.body.closest('html'))return;
    const guard=()=>{if(!window.dbReady||!window.db)return;window.db.auth.getSession().then(r=>{if(!r.data.session)location.href='login.html';});};
    if(window.dbReady)guard(); else window.addEventListener('supabase-ready',guard,{once:true});
    document.querySelectorAll('a').forEach(a=>{const t=a.textContent.trim().toLowerCase();if(t==='dashboard')a.href='dashboard.html';if(t==='analytics')a.href='analytics.html';if(t==='orders')a.href='orders.html';if(t==='menu')a.href='products.html';if(t==='logout')a.addEventListener('click',e=>{e.preventDefault();window.db?.auth.signOut().finally(()=>location.href='login.html');});});
  }
  document.addEventListener('DOMContentLoaded',()=>{
    if(/(index|products|menu-mobile)\.html$/.test(location.pathname)||location.pathname.endsWith('/'))wireMenu();
    if(location.pathname.endsWith('/checkout.html'))wireCheckout();
    if(location.pathname.includes('/admin/'))wireAdmin();
    syncBadge();
  });
})();
