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