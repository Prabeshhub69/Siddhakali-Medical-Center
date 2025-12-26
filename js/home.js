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
        el.style.backgroundPositionY = -(scrolled * 0.1) + "px";
    });
});

// ABOUT US HOMEPAGE JS

//acccordion js
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faqItem = button.parentElement;

            // Close others
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== faqItem) {
                item.classList.remove("active");
            }
        });

        // Toggle current
        faqItem.classList.toggle("active");
    });
});


