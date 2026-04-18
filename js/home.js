(function () {
    const track = document.getElementById('track');
    const thumbs = Array.from(document.querySelectorAll('.thumb'));
    const bar = document.getElementById('bar');
    const counter = document.getElementById('counter');

    if (!track || !bar || !counter) {
        return;
    }

    if (window.__homeCarouselTimer) {
        clearInterval(window.__homeCarouselTimer);
    }

    const total = thumbs.length || track.children.length;
    let current = 0;

    function goTo(index) {
        current = (index + total) % total;
        track.style.left = `-${current * 100}%`;
        
        if (thumbs.length) {
            thumbs.forEach((thumb, thumbIndex) => {
                thumb.classList.toggle('active', thumbIndex === current);
            });
        }
        
        bar.style.width = `${((current + 1) / total) * 100}%`;
        counter.textContent = `0${current + 1} / 0${total}`;
    }

    function startAutoSlide() {
        window.__homeCarouselTimer = setInterval(function () {
            goTo(current + 1);
        }, 4500);
    }

    function restartAutoSlide() {
        clearInterval(window.__homeCarouselTimer);
        startAutoSlide();
    }

    document.querySelectorAll('[id^="next"]').forEach(button => {
        button.addEventListener('click', function () {
            goTo(current + 1);
            restartAutoSlide();
        });
    });

    document.querySelectorAll('[id^="prev"]').forEach(button => {
        button.addEventListener('click', function () {
            goTo(current - 1);
            restartAutoSlide();
        });
    });

    if (thumbs.length) {
        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', function () {
                goTo(index);
                restartAutoSlide();
            });
        });
    }

    goTo(0);
    startAutoSlide();
})();

// Testimonial Carousel Logic
(function () {
    const initCarousel = () => {
        const testimonialSection = document.getElementById('testimonials-section');
        if (!testimonialSection) return;

        const slides = testimonialSection.querySelectorAll('.testimonial-slide');
        const dots = testimonialSection.querySelectorAll('.dot');
        const prevBtn = document.getElementById('t-prev');
        const nextBtn = document.getElementById('t-next');
        
        if (!slides.length || !dots.length || !prevBtn || !nextBtn) {
            // Retry once if elements not found (just in case)
            setTimeout(initCarousel, 100);
            return;
        }
        
        let currentIndex = 0;

        function updateCarousel(index) {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;

            // Remove active classes
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.opacity = '0';
                slide.style.visibility = 'hidden';
            });
            dots.forEach(dot => dot.classList.remove('active'));

            // Set new active
            slides[index].classList.add('active');
            slides[index].style.opacity = '1';
            slides[index].style.visibility = 'visible';
            dots[index].classList.add('active');
            currentIndex = index;
        }

        // Button Listeners
        nextBtn.onclick = (e) => {
            e.preventDefault();
            updateCarousel(currentIndex + 1);
        };
        prevBtn.onclick = (e) => {
            e.preventDefault();
            updateCarousel(currentIndex - 1);
        };

        // Dot Listeners
        dots.forEach((dot, index) => {
            dot.onclick = (e) => {
                e.preventDefault();
                updateCarousel(index);
            };
        });

        // Auto-advance
        if (window.__testimonialInterval) clearInterval(window.__testimonialInterval);
        window.__testimonialInterval = setInterval(() => updateCarousel(currentIndex + 1), 6000);

        // Pause on hover
        testimonialSection.onmouseenter = () => clearInterval(window.__testimonialInterval);
        testimonialSection.onmouseleave = () => {
            window.__testimonialInterval = setInterval(() => updateCarousel(currentIndex + 1), 6000);
        };

        // Initial state
        updateCarousel(0);
    };

    // Run immediately
    initCarousel();
})();
