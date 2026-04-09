// NEOSWAG v3 — minimal interactivity
(() => {
  const sky = document.querySelector(".sky__img");
  const stamp = document.querySelector(".stamp");
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (sky)
        sky.style.transform = `translate3d(0, ${y * -0.05}px, 0) scale(1.06)`;
      if (stamp) stamp.style.transform = `rotate(${18 + y * 0.02}deg)`;
    },
    { passive: true },
  );
})();
