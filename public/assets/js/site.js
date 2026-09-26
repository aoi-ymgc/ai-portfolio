(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!header || !toggle || !nav) return;

  const setMenu = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "メニューを閉じる" : "メニューを開く",
    );
  };

  toggle.addEventListener("click", () =>
    setMenu(!header.classList.contains("is-open")),
  );
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setMenu(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) setMenu(false);
  });
})();

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});
