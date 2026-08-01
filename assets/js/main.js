/* =====================================================
   Kundan Portfolio
   main.js
===================================================== */

/* ============================
   Initialize AOS
============================ */

AOS.init({
    duration: 900,
    once: true,
    easing: "ease-in-out"
});

/* ============================
   Typing Effect
============================ */

const roles = [
    "Staff Software Engineer",
    "Java Backend Architect",
    "Microservices Specialist",
    "AI / RAG Engineer",
    "Distributed Systems Enthusiast"
];

const typingElement = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;
        }
    }

    setTimeout(typeRole, deleting ? 40 : 90);
}

typeRole();

/* ============================
   Dark Mode
============================ */

const toggle = document.getElementById("theme-toggle");

const body = document.body;

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {

    body.classList.add("light-mode");

    toggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}

toggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {

        toggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem("theme", "light");

    } else {

        toggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        localStorage.setItem("theme", "dark");
    }

});

/* ============================
   Active Navigation
============================ */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

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

/* ============================
   Navbar Shadow
============================ */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 15px 35px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";
    }

});

/* ============================
   Scroll Progress Bar
============================ */

const progress = document.createElement("div");

progress.id = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.body.scrollHeight -
        window.innerHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

/* ============================
   Hero Fade
============================ */

const hero = document.querySelector("#hero");

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    hero.style.opacity = 1 - value / 700;

});

/* ============================
   Skill Hover Animation
============================ */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px) scale(1.04)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";
    });

});

/* ============================
   Project Card Animation
============================ */

const projects =
    document.querySelectorAll(".project-card");

projects.forEach(project => {

    project.addEventListener("mousemove", (e) => {

        const rect =
            project.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        project.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(56,189,248,.18),
            #182233)`;

    });

    project.addEventListener("mouseleave", () => {

        project.style.background = "#182233";

    });

});

/* ============================
   Reveal Timeline
============================ */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(".timeline-item")
    .forEach(item => {

        observer.observe(item);

    });

/* ============================
   Smooth Scroll
============================ */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector(
                this.getAttribute("href")
            ).scrollIntoView({

                behavior: "smooth"

            });

        });

    });

/* ============================
   Footer Year
============================ */

const footer =
    document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        "© " + new Date().getFullYear() +
        " Kundan Kr. Thakur • Built with ❤️ using HTML, CSS & JavaScript";
}

console.log("%cWelcome Recruiter 👋",
    "color:#38bdf8;font-size:22px;font-weight:bold");

console.log("Portfolio designed by Kundan Kr. Thakur");
