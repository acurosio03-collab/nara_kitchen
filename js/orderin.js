(function(){
  const CART_KEY='orderin_cart';
  const money=n=>'Rp '+Number(n||0).toLocaleString('id-ID');
  function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}catch(e){return[]}}
  function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c)); updateBadges();}
  function updateBadges(){const n=getCart().reduce((a,i)=>a+Number(i.qty||0),0);document.querySelectorAll('[data-cart-count]').forEach(x=>{x.textContent=n;x.style.display=n?'flex':'none'});}
  function itemFromCard(card){
    const name=(card.querySelector('h3')||{}).textContent?.trim()||'Menu Nara Kitchen';
    const priceText=(card.querySelector('.text-primary')||{}).textContent||'0';
    const price=Number(priceText.replace(/[^0-9]/g,''))||0;
    const img=card.querySelector('img')?.src||'';
    return {id:name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),name,price,img,qty:1};
  }
  function addFromButton(btn){
    const card=btn.closest('.group')||btn.closest('.border')||btn.parentElement?.parentElement?.parentElement;
    if(!card)return;
    const item=itemFromCard(card); const c=getCart(); const old=c.find(x=>x.id===item.id); if(old)old.qty++; else c.push(item); saveCart(c);
  }
  window.toggleQty=function(btn){addFromButton(btn);btn.classList.add('hidden');const controls=btn.nextElementSibling;if(controls){controls.classList.remove('hidden');controls.classList.add('flex');} };
  window.updateQty=function(btn,change){const controls=btn.parentElement;const card=btn.closest('.group')||controls.closest('.border');const name=(card?.querySelector('h3')||{}).textContent?.trim();const c=getCart();const item=c.find(x=>x.name===name);if(item){item.qty+=change;if(item.qty<=0)c.splice(c.indexOf(item),1);saveCart(c);}let span=controls.querySelector('.font-mono-data');if(span&&item)span.textContent=item.qty;if(item&&item.qty<=0){controls.classList.add('hidden');controls.classList.remove('flex');controls.previousElementSibling?.classList.remove('hidden');}}
  window.addToCart=addFromButton;
  function wire(){
    updateBadges();
    document.querySelectorAll('a[href="#"]').forEach(a=>{const t=a.textContent.trim().toLowerCase();if(t==='menu')a.href='index.html';else if(t==='pesanan')a.href='order-status.html';});
    document.querySelectorAll('button').forEach(b=>{const txt=b.textContent.trim().toLowerCase();if(txt.includes('shopping_cart')||txt==='keranjang')b.onclick=()=>location.href='cart.html';});
    document.querySelectorAll('img[alt="Nasi Goreng Kampung"],img[alt="Sop Buntut Nara"],img[alt="Es Teh Sereh"],img[alt="Sate Ayam Madura"]').forEach(img=>{const card=img.closest('.group');const add=card?.querySelector('button[onclick*="toggleQty"]');if(add)add.onclick=()=>window.toggleQty(add);});
  }
  document.addEventListener('DOMContentLoaded',wire);
  window.addEventListener('storage',updateBadges);
  window.Orderin={getCart,saveCart,money,updateBadges};
})();
