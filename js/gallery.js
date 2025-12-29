const testimonials = [
    { feedback: "Kashmir's Hidden Winter Wonderland", cardClass: 'card-1' },
    { feedback: 'Celebrating Diwali Through The Lens', cardClass: 'card-2' },
    { feedback: 'A Sunset Symphony in Gold', cardClass: 'card-3' },
    { feedback: 'realme Insider Event Kashmir', cardClass: 'card-4' },
    { feedback: 'Illuminate the Night with the P3 Pro', cardClass: 'card-5' },
    { feedback: 'Highlights from realme', cardClass: 'card-6' },
    { feedback: '14 Pro Series Launch Event Recap', cardClass: 'card-7' },
    { feedback: 'The mountains are calling me.', cardClass: 'card-8' }
];

const grid = document.getElementById('masonryGrid');

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