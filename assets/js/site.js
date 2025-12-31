// Mobile menu toggle
(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  }
})();

// Active nav link
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(link => {
    if (link.getAttribute("href") === path) link.classList.add("active");
  });
})();

// Lightbox (Portfolio)
(function () {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  const imgEl = lightbox.querySelector(".lightbox-img");
  const titleEl = lightbox.querySelector("[data-lightbox-title]");
  const closeBtn = lightbox.querySelector("[data-lightbox-close]");

  function openLightbox(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || "Preview";
    if (titleEl) titleEl.textContent = alt || "Preview";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    imgEl.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-thumb]").forEach(btn => {
    btn.addEventListener("click", () => {
      openLightbox(btn.getAttribute("data-full"), btn.getAttribute("data-alt"));
    });
  });

  closeBtn?.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
  });
})();
