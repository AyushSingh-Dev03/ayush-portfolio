// Header scroll animation and active navigation tracking
const header = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');

function updateHeader() {
	if (window.scrollY > 24) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
}

const sectionObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			const id = entry.target.id;
			const link = document.querySelector(`.nav-links a[href="#${id}"]`);
			if (entry.isIntersecting) {
				navLinks.forEach((item) => item.classList.remove('active'));
				if (link) link.classList.add('active');
			}
		});
	},
	{ rootMargin: '-35% 0px -55% 0px', threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
