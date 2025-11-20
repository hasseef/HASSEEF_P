// ملف جافاسكربت بسيط للوظائف التفاعلية المستقبلية في صفحة حصيف
// حاليًا نضيف فقط تمرير سلس عند الضغط على عناصر القائمة العلوية

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
});
