// NEOSWAG — metro live tiles
(() => {
  const flippers = document.querySelectorAll(".tile .tile__flip");
  const tiles = [...flippers].map((f) => f.closest(".tile"));

  const flip = (tile) => {
    tile.classList.add("flipped");
    setTimeout(() => tile.classList.remove("flipped"), 3600);
  };

  // stagger flips, loop forever
  tiles.forEach((tile, i) => {
    const schedule = () => {
      flip(tile);
      setTimeout(schedule, 5500 + Math.random() * 4000);
    };
    setTimeout(schedule, 3200 + i * 1800);
  });

  // signal percent jitter
  const num = document.querySelector(".tile__num");
  if (num) {
    const base = 41;
    setInterval(() => {
      const n = base + Math.floor(Math.random() * 4) - 1;
      num.firstChild.nodeValue = n;
    }, 1400);
  }
})();
