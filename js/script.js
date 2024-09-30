// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active menu item
function setActiveMenuItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').slice(1) === section.getAttribute('id')) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveMenuItem);

// Handle projects dropdown
const projectsDropdown = document.querySelector('.projects-dropdown');
const dropdownContent = document.createElement('div');
dropdownContent.className = 'dropdown-content';
dropdownContent.innerHTML = `
    <a href="proyectos/el-organo.html">El órgano</a>
    <a href="proyectos/musica-y-liturgia.html">Música y liturgia</a>
    <a href="proyectos/publicaciones.html">Publicaciones</a>
`;
projectsDropdown.parentNode.appendChild(dropdownContent);

projectsDropdown.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
    if (!e.target.matches('.projects-dropdown')) {
        dropdownContent.classList.remove('show');
    }
});

// Fade in elements on scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Toggle Navigation Menu for Mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const body = document.body;

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('menu-open');
});

// Close the menu when a navigation link is clicked (optional)
const navItems = navLinks.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            menuIcon.classList.remove('active');
            navLinks.classList.remove('open');
            body.classList.remove('menu-open');
        }
    });
});
