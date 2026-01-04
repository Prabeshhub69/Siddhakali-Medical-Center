// Wait for DOM to be ready
function initGallery() {
    const grid = document.getElementById('masonryGrid');
    
    if (!grid) {
        // Grid not ready yet, try again
        setTimeout(initGallery, 50);
        return;
    }

    const testimonials = [
        { feedback: "Biological lab", cardClass: 'card-1' },
        { feedback: 'Our docotr performing video x-ray', cardClass: 'card-2' },
        { feedback: 'Nurse carefully doing test on HPLC machine', cardClass: 'card-3' },
        { feedback: 'Physical Lab', cardClass: 'card-4' },
        { feedback: 'Siddhakali Medical Center', cardClass: 'card-5' },
        { feedback: 'Blood Grouping', cardClass: 'card-6' },
        { feedback: 'Inside X-ray room', cardClass: 'card-7' },
        { feedback: 'Performing X-ray', cardClass: 'card-8' }
    ];

    testimonials.forEach((item, index) => {
        const delay = index * 0.1;
        const html = `
            <div class="masonry-item" style="animation-delay: ${delay}s">
                <div class="card ${item.cardClass}">
                    <div class="card-overlay"></div>
                    <div class="card-content">
                        <p class="card-feedback">${item.feedback}</p>
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += html;
    });
}

// Start initialization
initGallery();