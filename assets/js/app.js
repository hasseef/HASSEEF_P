
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".sidebar-nav").forEach(function(nav) {
    nav.addEventListener("click", function(e) {
      if (e.target.matches("button[data-section]")) {
        const btn = e.target;
        const container = btn.closest(".account-inner");
        const sectionId = btn.getAttribute("data-section");
        nav.querySelectorAll("button").forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        container.querySelectorAll(".account-section").forEach(function(sec) {
          sec.style.display = (sec.id === sectionId ? "block" : "none");
        });
      }
    });
  });

  document.querySelectorAll(".account-inner").forEach(function(container) {
    const firstBtn = container.querySelector(".sidebar-nav button[data-section]");
    if (firstBtn) {
      firstBtn.click();
    }
  });
});
