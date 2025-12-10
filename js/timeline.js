function initTimeline() {
    const events = document.querySelectorAll(".event");
    const line = document.querySelector(".timeline-line");
    const container = document.querySelector(".timeline-container");

    if (!events.length || !line || !container) return;

    let points = [];

    function createPoints() {
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
        const scrollPos = window.scrollY + window.innerHeight / 1.6;
        let activeIndex = 0;

        events.forEach((event, index) => {
            const rect = event.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const center = top + rect.height / 2;
            if (scrollPos >= center) activeIndex = index;
        });

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            activeIndex = events.length - 1;
        }

        const targetEvent = events[activeIndex];
        const targetRect = targetEvent.getBoundingClientRect();
        const lineTop = 100;
        const lineHeight = Math.max(0, targetRect.top + targetRect.height / 2 - lineTop);
        line.style.height = lineHeight + "px";

        events.forEach((e, i) => e.classList.toggle("active", i === activeIndex));
        points.forEach((p, i) => p.classList.toggle('active', i === activeIndex));
    }

    // Initialize
    createPoints();
    positionPoints();
    updateTimeline();

    window.addEventListener("scroll", updateTimeline);
    window.addEventListener("resize", () => { positionPoints(); updateTimeline(); });

    // Reposition when images load
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) img.addEventListener('load', () => { positionPoints(); updateTimeline(); });
    });
}

// Run timeline after page HTML is loaded dynamically
initTimeline();


