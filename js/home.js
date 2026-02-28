const track = document.getElementById('track');
const thumbs = document.querySelectorAll('.thumb');
const bar = document.getElementById('bar');
const counter = document.getElementById('counter');
const total = thumbs.length;
let current = 0;
let timer;

// slide labels
const labels = [
    { title: 'State-of-the-Art Facility', sub: 'Modern medical environment' },
    { title: 'Expert Medical Team', sub: 'Certified doctors & specialists' },
    { title: 'Comprehensive Services', sub: 'Visa medicals & health checks' },
];

function goTo(i) {
    current = (i + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    thumbs.forEach((t, idx) => t.classList.toggle('active', idx === current));
    bar.style.width = `${((current + 1) / total) * 100}%`;
    counter.textContent = `0${current + 1} / 0${total}`;
}

// all prev/next buttons (inside slides + any extra)
document.querySelectorAll('[id^="next"]').forEach(btn =>
    btn.addEventListener('click', () => { goTo(current + 1); restart(); })
);
document.querySelectorAll('[id^="prev"]').forEach(btn =>
    btn.addEventListener('click', () => { goTo(current - 1); restart(); })
);

thumbs.forEach((t, i) => t.addEventListener('click', () => { goTo(i); restart(); }));

function restart() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4500);
}

restart();