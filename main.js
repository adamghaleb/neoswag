// NEOSWAG — Frutiger Metro panorama
(() => {
  // ---- signal percent jitter ----
  const num = document.querySelector(".t__num");
  if (num) {
    const base = 41;
    setInterval(() => {
      const n = base + Math.floor(Math.random() * 5) - 2;
      num.firstChild.nodeValue = n;
    }, 1500);
  }

  // ---- subtle parallax on panel label as you scroll ----
  const label = document.querySelector(".panel-label");
  const bg = document.querySelector(".bg__img");
  if (label || bg) {
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (label) label.style.transform = `translateX(${-y * 0.35}px)`;
        if (bg)
          bg.style.transform = `translate3d(${-y * 0.06}px, ${-y * 0.08}px, 0) scale(1.08)`;
      },
      { passive: true },
    );
  }
})();
