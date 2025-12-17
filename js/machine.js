// Intersection Observer for scroll animations
// const observerOptions = {
//     threshold: 0.15,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//             setTimeout(() => {
//                 entry.target.classList.add('animate');
//             }, index * 200);
//         }
//     });
// }, observerOptions);

// // Observe all equipment items
// document.addEventListener('DOMContentLoaded', () => {
//     const items = document.querySelectorAll('.equipment-item');
//     items.forEach(item => observer.observe(item));
// });