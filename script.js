// Fade-up observer
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry, i) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.classList.add('visible');
				}, i * 80);
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.12 },
);
document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// Scroll Spy: Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
	let current = '';
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset >= sectionTop - 120) {
			current = section.getAttribute('id');
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove('active');
		if (link.getAttribute('href') === `#${current}`) {
			link.classList.add('active');
		}
	});
});

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navOverlay = document.querySelector('.nav-overlay');
const body = document.body;

function openMenu() {
	body.classList.add('menu-open');
}
function closeMenu() {
	body.classList.remove('menu-open');
}

if (navToggle) {
	navToggle.addEventListener('click', () => {
		body.classList.contains('menu-open') ? closeMenu() : openMenu();
	});
}

// Click on the overlay to close
if (navOverlay) {
	navOverlay.addEventListener('click', closeMenu);
}

// Close on nav link click
navLinks.forEach((link) => {
	link.addEventListener('click', closeMenu);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && body.classList.contains('menu-open')) {
		closeMenu();
	}
});
