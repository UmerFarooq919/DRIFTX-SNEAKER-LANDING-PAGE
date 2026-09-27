document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("nav-menu-btn");
  const closeBtn = document.getElementById("nav-close-btn");
  const drawer = document.getElementById("mobile-nav-drawer");
  const overlay = document.getElementById("nav-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  function openNav() {
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.remove("opacity-0"), 10);
    drawer.classList.remove("translate-x-full");
    document.body.classList.add("overflow-hidden");
  }

  function closeNav() {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("opacity-0");
    setTimeout(() => overlay.classList.add("hidden"), 300);
    document.body.classList.remove("overflow-hidden");
  }

  if (menuBtn) menuBtn.addEventListener("click", openNav);
  if (closeBtn) closeBtn.addEventListener("click", closeNav);
  if (overlay) overlay.addEventListener("click", closeNav);

  mobileLinks.forEach(link => {
    link.addEventListener("click", closeNav);
  });
});
// Featured Sneakers Mock Data
const sneakerProducts = [
  {
    id: "nike-air-max-270",
    name: "Nike Air Max 270",
    category: "Running / Lifestyle",
    price: 159.99,
    tag: "New",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "jordan-1-retro-high",
    name: "Jordan 1 Retro High OG",
    category: "Lifestyle / Streetwear",
    price: 179.99,
    tag: null,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "new-balance-550",
    name: "New Balance 550",
    category: "Lifestyle / Classic",
    price: 109.99,
    tag: null,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "adidas-forum-low",
    name: "Adidas Forum Low",
    category: "Lifestyle / Casual",
    price: 99.99,
    tag: null,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80"
  }
];
// Render Featured Grid Cards
function renderFeaturedProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  container.innerHTML = sneakerProducts.map(item => `
    <div class="group relative bg-[#0E121B] border border-neutral-800/80 hover:border-neutral-700 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
      
      <!-- Card Top: Tag & Favorite Heart -->
      <div class="flex items-center justify-between z-10">
        <div>
          ${item.tag ? `
            <span class="px-2.5 py-1 rounded-full bg-orange-600/20 text-orange-500 border border-orange-500/30 text-[10px] font-black uppercase tracking-wider">
              ${item.tag}
            </span>
          ` : '<span></span>'}
        </div>

        <button 
          class="p-2 rounded-full bg-neutral-900/80 text-neutral-400 hover:text-red-500 hover:bg-neutral-800 transition" 
          aria-label="Add to wishlist"
          onclick="this.classList.toggle('text-red-500')"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <!-- Sneaker Visual Preview -->
      <div class="relative py-6 flex items-center justify-center overflow-hidden">
        <div class="absolute w-32 h-32 bg-[#CCFF00]/5 rounded-full blur-2xl group-hover:bg-[#CCFF00]/15 transition duration-500"></div>
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-full h-44 object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.7)] transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition duration-500"
        />
      </div>

      <!-- Card Details & Cart Button -->
      <div class="pt-4 border-t border-neutral-800/80 flex items-end justify-between gap-3">
        <div>
          <h3 class="text-sm font-bold text-white group-hover:text-[#CCFF00] transition line-clamp-1">
            ${item.name}
          </h3>
          <p class="text-[11px] text-neutral-400 mt-0.5">
            ${item.category}
          </p>
          <p class="text-base font-extrabold text-white mt-2">
            $${item.price.toFixed(2)}
          </p>
        </div>

        <!-- Add To Cart Quick Action -->
        <button 
          onclick="handleAddToCart('${item.id}')"
          class="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] text-neutral-300 group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-sm"
          title="Add to cart"
        >
          <svg class="w-4 h-4 font-bold" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

    </div>
  `).join('');
}
// Dummy handler for Cart trigger
function handleAddToCart(id) {
  const item = sneakerProducts.find(p => p.id === id);
  console.log("Added to cart:", item.name);
  // Jab cart drawer code karenge, tab yeh direct cart state update karega!
}

// Call on page load
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProducts();
});