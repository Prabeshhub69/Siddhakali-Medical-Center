initScrollAnimations(); // 👈 CALL IT DIRECTLY

function initScrollAnimations() {
    const items = document.querySelectorAll(".equipment-item");

    if (!items.length) return;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    items.forEach(item => observer.observe(item));
    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});
}
