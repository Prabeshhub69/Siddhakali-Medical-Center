const parallax = document.querySelector('.parallax');
const media = document.querySelector('.parallax-media');
const speed = 0.3;

window.addEventListener('scroll', () => {
  const rect = parallax.getBoundingClientRect();
  const offset = rect.top * speed;
  media.style.transform = `translateY(${offset}px)`;
});
