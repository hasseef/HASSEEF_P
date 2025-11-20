// Smooth scroll for nav links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.main-nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });

  // Language switch
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      document.body.classList.toggle("lang-en", lang === "en");
      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
