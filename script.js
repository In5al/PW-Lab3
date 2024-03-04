function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function hideWelcomeSection() {
  document.getElementById('welcome-section').classList.add('hidden');
}

// Mascot Animation
const mascot = document.getElementById('mascot');
mascot.style.transition = 'transform 0.5s ease';

function rotateMascot() {
  mascot.style.transform = 'rotate(360deg)';
}

function tiltMascot() {
  mascot.style.transform = 'rotate(-15deg)';
}

function jumpMascot() {
  mascot.style.transform = 'translateY(-20px)';
}

function walkMascot() {
  mascot.style.transform = 'translateX(20px)';
}

// Hover Effect
mascot.addEventListener('mouseover', () => {
  mascot.style.transform = 'scale(1.2)';
});

mascot.addEventListener('mouseout', () => {
  mascot.style.transform = 'scale(1)';
});
