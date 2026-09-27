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
