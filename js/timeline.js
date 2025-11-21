const events = document.querySelectorAll(".event");
const line = document.querySelector(".timeline-line");
const container = document.querySelector(".timeline-container");

let points = [];

function createPoints() {
    // remove any existing points
    document.querySelectorAll('.timeline-point').forEach(p => p.remove());
    points = [];

    events.forEach((event, index) => {
        const p = document.createElement('div');
        p.className = 'timeline-point';
        p.dataset.index = index;
        container.appendChild(p);
        points.push(p);
    });
}

function positionPoints() {
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const containerTopDoc = containerRect.top + window.scrollY;
    const lineRect = line.getBoundingClientRect();
    const lineLeftRelative = lineRect.left - containerRect.left;

    events.forEach((event, i) => {
        const rect = event.getBoundingClientRect();
        const eventCenterDoc = rect.top + window.scrollY + rect.height / 2;
        const topRel = eventCenterDoc - containerTopDoc;
        const p = points[i];
        if (!p) return;
        p.style.top = topRel + 'px';
        p.style.left = lineLeftRelative + 'px';
    });
}

function updateTimeline() {
    // center of the viewport (used to decide which event is active)
    const scrollPos = window.scrollY + window.innerHeight / 2;

    let activeIndex = 0;

    events.forEach((event, index) => {
        const rect = event.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const center = top + rect.height / 2;

        if (scrollPos >= center) {
            activeIndex = index;
        }
    });

    // If scrolled to (or very near) the bottom of the page, ensure the last event becomes active
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        activeIndex = events.length - 1;
    }

    const targetEvent = events[activeIndex];
    const targetRect = targetEvent.getBoundingClientRect();

    // The line is `position: fixed` with `top: 100px`, so its height should be
    // the distance from that fixed top to the target event's center in the viewport.
    const targetCenterInViewport = targetRect.top + targetRect.height / 2;
    const lineTop = 100; // matches `.timeline-line { top: 100px }` in CSS
    const lineHeight = Math.max(0, targetCenterInViewport - lineTop);

    line.style.height = lineHeight + "px";

    events.forEach((e, i) => {
        e.classList.toggle("active", i === activeIndex);
    });

    // toggle point active class
    points.forEach((p, i) => {
        p.classList.toggle('active', i === activeIndex);
    });
}

// create points and position them initially
createPoints();
positionPoints();

window.addEventListener("scroll", updateTimeline);
window.addEventListener("resize", () => {
    positionPoints();
    updateTimeline();
});
window.addEventListener('load', () => {
    positionPoints();
    updateTimeline();
});

// If images or other content change size later, re-position points once images load
document.querySelectorAll('img').forEach(img => {
    if (!img.complete) img.addEventListener('load', () => {
        positionPoints();
        updateTimeline();
    });
});

// initial call
updateTimeline();
