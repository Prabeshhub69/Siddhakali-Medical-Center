let ticking = false;
const speed = 0.25;

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      document.querySelectorAll(".parallax").forEach(el => {
        el.style.backgroundPositionY = `${-(scrolled * speed)}px`;
      });
      ticking = false;
    });
    ticking = true;
  }
});
