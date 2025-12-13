// Feature data
const features = [
    {
        title: "Government-approved examination",
        description: "Certified facilities and doctors authorized to conduct health checkups required for foreign employment and immigration.",
        icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7l5 5l-5 5" /><path d="M12 19l7 0" />`
    },
    {
        title: "Fast & Hassle-Free Process",
        description: "Streamlined workflow designed to reduce waiting time and complete all tests in minimal steps.",
        icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v7z" /><path d="M12 16v.01" /><path d="M17 16v.01" /><path d="M7 16v.01" /><path d="M7 3v4" /><path d="M11 3v4" /><path d="M17 3v4" />`
    },
    {
        title: "Transparent Pricing",
        description: "Clear and standardized pricing for all tests without hidden charges.",
        icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" />`
    },
    {
        title: "Modern Diagnostic Laboratory",
        description: "Fully equipped lab for blood tests, X-rays, urine analysis, and other visa-related screenings.",
        icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />`
    },
    {
        title: "Infection Control & Safety Standards",
        description: "You can simply share passwords instead of buying new seats",
        icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" />`
    },
    {
        title: "Quick Result Turnaround",
        description: "Same-day or next-day reporting depending on test type.",
        icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 16v.01" /><path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />`
    },
    {
        title: "Guidance for First-Time Applicants",
        description: "Staff provide step-by-step guidance for new applicants about forms, requirements, and exam process.",
        icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" /><path d="M6 9h12" /><path d="M6 15h12" /><path d="M9 6v12" /><path d="M15 6v12" />`
    },
    {
        title: "High Data Privacy & Security",
        description: "Applicant information and health data remain confidential and securely stored.",
        icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />`
    }
];

// Create feature box
function createFeature(feature, index) {
    const div = document.createElement("div");
    div.className = "feature";

    const gradientClass = index < 4 ? "feature-gradient-top" : "feature-gradient-bottom";

    div.innerHTML = `
        <div class="${gradientClass}"></div>
        <div class="feature-icon">
            <svg viewBox="0 0 24 24">${feature.icon}</svg>
        </div>
        <div class="feature-title-wrapper">
            <div class="feature-bar"></div>
            <h3 class="feature-title">${feature.title}</h3>
        </div>
        <p class="feature-description">${feature.description}</p>
    `;

    return div;
}

// Render all
function renderFeatures() {
    const grid = document.getElementById("featuresGrid");
    features.forEach((feature, index) => {
        grid.appendChild(createFeature(feature, index));
    });
}

// Initialize

window.addEventListener("scroll", function () {
    let scrolled = window.pageYOffset;
    document.querySelectorAll(".parallax").forEach(el => {
        el.style.backgroundPositionY = -(scrolled * 0.5) + "px";
    });
});

// ABOUT US HOMEPAGE JS


//Service home page

