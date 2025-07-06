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


const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');

const productDetails = {
    hdpe: {
        title: 'HDPE Pipes',
        desc: `
<p style="line-height: 1.3rem">We manufacture HDPE pipes ranging from 16 mm to 315 mm in diameter (up to 110 mm OD coil/roll), suitable for a variety of demanding applications including:</p>

                    <ul class="client-list">
                        <li>Borewells and Deep Well Installations</li>
                        <li>Potable Water Supply Systems</li>
                        <li>Sewage and Drainage Networks</li>
                        <li>House Service Connections</li>
                        <li>Water Treatment Plants</li>
                        <li>Plantation and Drip Irrigation Systems</li>
                        <li>Industrial Use for Corrosive Fluids and Chemicals</li>
                    </ul>
                     <img src="images/HD.webp" alt="HDPE Pipe">`

    },
    ldpe: {
        title: 'LDPE Pipes',
        desc: `
<p style="line-height: 1.3rem"><b>Swadheshy Polymers</b> offers premium quality LDPE (Low-Density Polyethylene) pipes, designed for flexibility, durability, and performance in agricultural and fluid transportation systems. Our LDPE pipes are manufactured using top-grade raw materials and are ideal for medium to low-pressure applications across a wide range of environments.</p>

                    <ul class="client-list">
                        <li>Agricultural Irrigation Systems (Drip and Sprinkler)</li>
                        <li>Plantation and Nursery Watering</li>
                        <li>Rural and Urban Water Distribution</li>
                        <li>Garden and Greenhouse Piping</li>
                        <li>Wastewater and Slurry Disposal</li>
                        <li>Chemical and Fertilizer Transport</li>
                        <li>Temporary Fluid Conveyance at Construction Sites</li>
                    </ul>
                     <img src="images/LD.png" alt="LDPE Pipe ROLL">`
    },
    agri: {
        title: 'Agri Pipes',
        desc: `
<p style="line-height: 1.3rem"><b>Swadheshy Polymers</b> offers durable and efficient Agri Pipes specially designed to meet the unique needs of Indian agriculture. Our Agri pipes are manufactured using high-quality HDPE and LDPE materials, ensuring high performance and long-lasting usage in tough rural and farm environments.</p>

                    <ul class="client-list">
                        <li>Drip and Sprinkler Irrigation Systems</li>
                        <li>Canal and Well Water Distribution</li>
                        <li>Pump and Motor Delivery Lines</li>
                        <li>Field Watering and Plantation Systems</li>
                        <li>Wastewater and Slurry Disposal</li>
                        <li>Fertilizer and Pesticide Transport</li>
                    </ul>
                     <img src="images/LD.png" alt="Agri Pipe ROLL">`
    },
    // Add more products as needed
};

document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-product');
        if (productDetails[key]) {
            modalTitle.textContent = productDetails[key].title;
            modalDesc.innerHTML = productDetails[key].desc;
        }
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
