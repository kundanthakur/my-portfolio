// ===============================
// Portfolio Main JavaScript
// ===============================

// Typing Effect
const typingText = document.getElementById("typing-text");

const roles = [
    "Staff Software Engineer",
    "Java Backend Engineer",
    "Microservices Specialist",
    "AI / RAG Engineer",
    "System Design Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const current = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent = current.substring(0, charIndex);
        charIndex++;

        if (charIndex > current.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

            charIndex = 0;
        }

    }

    setTimeout(typeEffect, isDeleting ? 45 : 90);

}

typeEffect();


// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// =======================================
// Active Navigation
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =======================================
// Navbar Shadow
// =======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});


// =======================================
// Scroll Progress Bar
// =======================================

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.left = "0";
progressBar.style.top = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.zIndex = "99999";
progressBar.style.background = "#38bdf8";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


// =======================================
// Reveal Animation
// =======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".timeline-item,.skill-card,.project-card")
.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".6s";

    observer.observe(item);

});


// =======================================
// Footer Year
// =======================================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Kundan Kr. Thakur`;

}


// =======================================
// Console Message
// =======================================

console.log(
    "%cWelcome 👋",
    "font-size:22px;color:#38bdf8;font-weight:bold"
);

console.log("Portfolio built by Kundan Kr. Thakur");
