const DEFAULT_BUSINESS={
name:"NARA KITCHEN",
tagline:"Rasa Indonesia, dibuat lebih modern.",
phone:"6281234567890",
address:"Jl. Tuparev No. 88, Cirebon, Jawa Barat",
hours:"10.00–22.00",
city:"Cirebon",
story:"NARA KITCHEN menyajikan comfort food Indonesia dengan sentuhan modern. Kami memilih bahan segar, meracik sambal setiap hari, dan menjaga setiap pesanan tetap hangat sampai di meja.",
promo:"Gratis Es Teh untuk minimal pembelian Rp75.000",
instagram:"@narakitchen.id"
};
const DEFAULT_PRODUCTS=[
{id:1,name:"Nasi Ayam Sambal Matah",category:"Nasi",price:28000,emoji:"🍗",description:"Ayam juicy, nasi hangat, sambal matah segar, dan lalapan.",variants:["Tidak pedas","Sedang","Pedas"],available:true,bestseller:true},
{id:2,name:"Beef Rice Bowl",category:"Nasi",price:35000,emoji:"🥩",description:"Irisan beef gurih dengan saus khas NARA dan telur.",variants:["Original","Extra Sauce"],available:true,bestseller:true},
{id:3,name:"Nasi Goreng Kampung",category:"Nasi",price:26000,emoji:"🍳",description:"Nasi goreng smoky dengan telur, ayam suwir, dan acar.",variants:["Tidak pedas","Sedang","Pedas"],available:true},
{id:4,name:"Mie Chili Oil",category:"Mie",price:24000,emoji:"🍜",description:"Mie kenyal dengan chili oil, ayam cincang, dan daun bawang.",variants:["Sedang","Pedas","Extra Pedas"],available:true,bestseller:true},
{id:5,name:"Mie Ayam NARA",category:"Mie",price:23000,emoji:"🍜",description:"Mie lembut, ayam gurih, pangsit, dan kuah hangat.",variants:["Original","Extra Ayam"],available:true},
{id:6,name:"Kentang Sambal Kecombrang",category:"Snack",price:18000,emoji:"🍟",description:"Kentang crispy dengan sambal kecombrang aromatik.",variants:["Original","Extra Sambal"],available:true},
{id:7,name:"Chicken Wings NARA",category:"Snack",price:26000,emoji:"🍗",description:"Sayap ayam crispy dengan pilihan saus favorit.",variants:["BBQ","Spicy","Honey"],available:true},
{id:8,name:"Es Kopi NARA",category:"Minuman",price:18000,emoji:"☕",description:"Espresso, susu creamy, dan gula aren.",variants:["Less Ice","Normal Ice"],available:true},
{id:9,name:"Lychee Tea",category:"Minuman",price:17000,emoji:"🧋",description:"Teh dingin dengan lychee dan aroma floral.",variants:["Less Sweet","Normal"],available:true},
{id:10,name:"Es Teh Manis",category:"Minuman",price:8000,emoji:"🫖",description:"Teh manis dingin yang ringan dan menyegarkan.",variants:["Less Sweet","Normal"],available:true},
{id:11,name:"Pisang Bakar NARA",category:"Dessert",price:20000,emoji:"🍌",description:"Pisang bakar hangat dengan cokelat, keju, dan susu.",variants:["Cokelat","Keju","Cokelat + Keju"],available:true},
{id:12,name:"NARA Brownie",category:"Dessert",price:22000,emoji:"🍫",description:"Brownie fudgy dengan saus cokelat dan vanilla cream.",variants:["Original","Extra Chocolate"],available:true}
];
function getProducts(){return JSON.parse(localStorage.getItem("orderin_products")||"null")||DEFAULT_PRODUCTS}
function saveProducts(p){localStorage.setItem("orderin_products",JSON.stringify(p))}
function getBusiness(){return JSON.parse(localStorage.getItem("orderin_business")||"null")||DEFAULT_BUSINESS}
function getCart(){return JSON.parse(localStorage.getItem("orderin_cart")||"[]")}
function saveCart(c){localStorage.setItem("orderin_cart",JSON.stringify(c))}
function getOrders(){return JSON.parse(localStorage.getItem("orderin_orders")||"[]")}
function saveOrders(o){localStorage.setItem("orderin_orders",JSON.stringify(o))}
function money(n){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n)}
