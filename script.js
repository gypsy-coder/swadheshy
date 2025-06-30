function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Fade-in effect when sections enter the viewport
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('warrantyBanner');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                banner.classList.add('visible');
                observer.unobserve(banner);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(banner);
});
