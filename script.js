
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function watchVision() {
    alert("Video feature coming soon.");
}

function toggleMenu() {
    const nav = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');
    nav.classList.toggle('show');
    overlay.classList.toggle('active');
}

function closeMenu() {
    document.getElementById('navMenu').classList.remove('show');
    document.getElementById('overlay').classList.remove('active');
}
