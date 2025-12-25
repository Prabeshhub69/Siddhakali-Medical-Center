document.addEventListener('DOMContentLoaded', function () {
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                entry.target.dataset.counted = 'true';
                const finalValue = entry.target.textContent;
                entry.target.textContent = '0';

                const hasPlus = finalValue.includes('+');
                const numValue = parseInt(finalValue.replace(/\D/g, ''));

                let current = 0;
                const increment = numValue / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numValue) {
                        entry.target.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current) + (hasPlus ? '+' : '');
                    }
                }, 40);
            }
        });
    };

    const observer = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });

    statNumbers.forEach(stat => observer.observe(stat));
});