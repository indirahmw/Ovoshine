// Toggle menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form kontak — kirim ke WhatsApp Ovoshine
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = contactForm.querySelector('input[type="text"]').value;
    const wa = contactForm.querySelector('input[type="tel"]').value;
    const kebutuhan = contactForm.querySelector('select').value;
    const pesan = contactForm.querySelector('textarea').value;

    // ✅ Ganti dengan nomor WhatsApp Ovoshine
    const nomorWA = '6281234567890';

    const text = `Halo Ovoshine,%0A%0A` +
        `Nama: ${nama}%0A` +
        `No. WA: ${wa}%0A` +
        `Kebutuhan: ${kebutuhan}%0A` +
        `Pesan: ${pesan}`;

    window.open(`https://wa.me/${nomorWA}?text=${text}`, '_blank');
    contactForm.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active');
        }
    });
});