const DEFAULT_BUSINESS={name:"NARA KITCHEN",tagline:"Rasa premium, pesan lebih praktis.",phone:"6281234567890",address:"Cirebon, Jawa Barat, Indonesia",hours:"10.00–22.00"};
const DEFAULT_PRODUCTS=[
{id:1,name:"Truffle Gyudon",category:"Makanan",price:40000,emoji:"🍚",description:"Beef gyudon gurih dengan aroma truffle dan telur lembut."},
{id:2,name:"Nara Chicken Rice",category:"Makanan",price:32000,emoji:"🍗",description:"Ayam juicy berbumbu khas Nara dengan nasi hangat."},
{id:3,name:"Creamy Pasta",category:"Makanan",price:35000,emoji:"🍝",description:"Pasta creamy dengan saus gurih dan topping pilihan."},
{id:4,name:"Nara Signature Coffee",category:"Minuman",price:22000,emoji:"☕",description:"Kopi susu creamy dengan rasa seimbang."},
{id:5,name:"Yuzu Tea",category:"Minuman",price:18000,emoji:"🍋",description:"Teh citrus segar dengan aroma yuzu."},
{id:6,name:"Family Feast",category:"Paket",price:85000,emoji:"🍱",description:"Paket berbagi untuk 3–4 orang."},
{id:7,name:"Crispy Fries",category:"Snack",price:18000,emoji:"🍟",description:"Kentang renyah dengan bumbu khas Nara."},
{id:8,name:"Chocolate Toast",category:"Snack",price:20000,emoji:"🍞",description:"Roti panggang hangat dengan cokelat premium."}
];
function getProducts(){return JSON.parse(localStorage.getItem("orderin_products")||"null")||DEFAULT_PRODUCTS}
function saveProducts(p){localStorage.setItem("orderin_products",JSON.stringify(p))}
function getBusiness(){return JSON.parse(localStorage.getItem("orderin_business")||"null")||DEFAULT_BUSINESS}
function getCart(){return JSON.parse(localStorage.getItem("orderin_cart")||"[]")}
function saveCart(c){localStorage.setItem("orderin_cart",JSON.stringify(c))}
function getOrders(){return JSON.parse(localStorage.getItem("orderin_orders")||"[]")}
function saveOrders(o){localStorage.setItem("orderin_orders",JSON.stringify(o))}
function money(n){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(Number(n)||0)}
