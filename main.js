// NEOSWAG — transmission glitches
(() => {
  const title = document.querySelector(".title");
  const flash = document.querySelector(".flash");
  const drift = document.querySelector(".ascii-drift");

  // ---- random hard-glitch bursts on the title ----
  const burst = () => {
    title.classList.add("glitch");
    setTimeout(
      () => title.classList.remove("glitch"),
      120 + Math.random() * 180,
    );
  };
  const loop = () => {
    burst();
    setTimeout(loop, 1800 + Math.random() * 4200);
  };
  setTimeout(loop, 2200);

  // ---- desktop hover intensifies ----
  title.addEventListener("mouseenter", () => title.classList.add("glitch"));
  title.addEventListener("mouseleave", () => title.classList.remove("glitch"));

  // ---- tap anywhere -> full page flash ----
  const doFlash = () => {
    flash.classList.remove("on");
    // reflow to restart animation
    void flash.offsetWidth;
    flash.classList.add("on");
    burst();
  };
  window.addEventListener("pointerdown", doFlash, { passive: true });

  // ---- ascii drift background ----
  const chars = "░▒▓█▌▐▄▀■□◆◇◈◉○●◐◑◒◓╳╱╲┃━┏┓┗┛╋≡≠≈∆∇∎∞※⟁⟁⌁⌬";
  let cols = 42;
  let rows = 48;
  const sizeDrift = () => {
    const cs = getComputedStyle(drift);
    const fs = parseFloat(cs.fontSize) || 12;
    // monospace char width ≈ 0.6em, line-height 1.15
    cols = Math.ceil(window.innerWidth / (fs * 0.6)) + 2;
    rows = Math.ceil(window.innerHeight / (fs * 1.15)) + 2;
  };
  sizeDrift();
  window.addEventListener("resize", sizeDrift);
  const render = () => {
    let out = "";
    for (let y = 0; y < rows; y++) {
      let line = "";
      for (let x = 0; x < cols; x++) {
        line +=
          Math.random() < 0.18
            ? chars[(Math.random() * chars.length) | 0]
            : " ";
      }
      out += line + "\n";
    }
    drift.textContent = out;
  };
  render();
  setInterval(render, 240);

  // ---- keep it one viewport: swallow scroll/zoom gestures ----
  window.addEventListener("wheel", (e) => e.preventDefault(), {
    passive: false,
  });
  window.addEventListener(
    "touchmove",
    (e) => {
      if (e.scale && e.scale !== 1) return;
      e.preventDefault();
    },
    { passive: false },
  );
})();
