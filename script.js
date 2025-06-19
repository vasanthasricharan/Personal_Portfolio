setTimeout(() => {
    const welcome = document.getElementById("welcome-content");
    const portfolio = document.getElementById("portfolio");

    welcome.style.display = "none";
    portfolio.style.display = "block";

    setTimeout(() => {
        portfolio.classList.add("visible");
    }, 50);
}, 5000);


const sentences = [
    "Electronics and Communication Student...",
    "VLSI Enthusiast"
];

let i = 0;
let j = 0;
let isDeleting = false;
const speed = 100;
const pause = 1000;

const textElement = document.getElementById("typewriter");

function type() {
    const current = sentences[i];

    if (!isDeleting) {
        textElement.textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, pause);
            return;
        }
    } else {
        textElement.textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % sentences.length;
        }
    }

    setTimeout(type, speed);
}

type();

// Scroll reveal logic
function revealOnScroll() {
    const reveals = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
            el.classList.remove('hidden');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

const sectionOrder = ['projects', 'certificates', 'techstack'];
let currentVisible = 'projects';

function showContent(targetId, event) {
    const buttons = document.querySelectorAll('.box-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const current = document.getElementById(currentVisible);
    const next = document.getElementById(targetId);

    if (targetId === currentVisible) {
        current.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
        void current.offsetWidth;
        current.classList.add('slide-out-left');
        return;
    }

    const isForward = sectionOrder.indexOf(targetId) > sectionOrder.indexOf(currentVisible);

    current.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
    next.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right', 'active');

    void current.offsetWidth;
    void next.offsetWidth;

    current.classList.add(isForward ? 'slide-out-left' : 'slide-out-right');
    current.classList.remove('active');

    next.style.opacity = 0;
    next.classList.add('active', isForward ? 'slide-in-right' : 'slide-in-left');

    currentVisible = targetId;
}

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sorry, this portfolio is not connected to a backend. Please Contact with Social media');
    form.reset();
});
