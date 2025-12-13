document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    if (fullName.value && email.value && subject.value && message.value) {
        alert("Thank you for your message! We will get back to you soon.");
        this.reset();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const mapSection = document.querySelector('.map-section');
    mapSection.style.opacity = '0';
    mapSection.style.transform = 'translateY(20px)';

    setTimeout(() => {
        mapSection.style.transition = 'all 0.6s ease';
        mapSection.style.opacity = '1';
        mapSection.style.transform = 'translateY(0)';
    }, 100);
});

document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iframe.style.opacity = '0';
                setTimeout(() => {
                    iframe.style.transition = 'opacity 0.5s ease';
                    iframe.style.opacity = '1';
                }, 100);
                observer.unobserve(iframe);
            }
        });
    });
    observer.observe(iframe);
});
