// Preview data
const previewData = {
    figma: {
        image: "images/other_images/LOGO2.png",
        title: "Siddhakali Medical Center",
        subtitle: "",
    },
    sketch: {
        image: "images/departments/lab3.webp",
        title: "100% Accurate Tests",
        subtitle: "Biology Lab",
    },
    adobe: {
        image: "images/other_images/uncle.jpg",
        title: "Blood pressure test",
        subtitle: "Physical Lab",
    },
};

// Elements
const previewCard = document.getElementById("previewCard");
const previewImage = document.getElementById("previewImage");
const previewTitle = document.getElementById("previewTitle");
const previewSubtitle = document.getElementById("previewSubtitle");
const hoverLinks = document.querySelectorAll(".hover-link");

let isVisible = false;

// Preload images
Object.values(previewData).forEach(data => {
    const img = new Image();
    img.src = data.image;
});

// Update card position
function updatePosition(e) {
    const cardWidth = 304;
    const cardHeight = 250;
    const offsetY = 20;

    let x = e.clientX - cardWidth / 2;
    let y = e.clientY - cardHeight - offsetY;

    if (x + cardWidth > window.innerWidth - 20)
        x = window.innerWidth - cardWidth - 20;

    if (x < 20) x = 20;

    if (y < 20) y = e.clientY + offsetY;

    previewCard.style.left = `${x}px`;
    previewCard.style.top = `${y}px`;
}

// Hover start
function handleHoverStart(e) {
    const key = e.target.getAttribute("data-preview");
    const data = previewData[key];

    if (data) {
        previewImage.src = data.image;
        previewTitle.textContent = data.title;
        previewSubtitle.textContent = data.subtitle;
        previewCard.classList.add("visible");
        isVisible = true;
        updatePosition(e);
    }
}

// Hover move
function handleHoverMove(e) {
    if (isVisible) updatePosition(e);
}

// Hover end
function handleHoverEnd() {
    previewCard.classList.remove("visible");
    isVisible = false;
}

// Add listeners
hoverLinks.forEach(link => {
    link.addEventListener("mouseenter", handleHoverStart);
    link.addEventListener("mousemove", handleHoverMove);
    link.addEventListener("mouseleave", handleHoverEnd);
});

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


