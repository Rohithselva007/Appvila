// =====================
// Sticky Header
// =====================

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 80) {
        header.classList.add("shadow");
    } else {
        header.classList.remove("shadow");
    }
});


// =====================
// Smooth Scroll
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =====================
// Active Navbar
// =====================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

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


// =====================
// Typing Effect
// =====================

const texts = [
    "A powerful app for your business.",
    "Build, Deploy and Monitor Apps.",
    "Trusted by Developers Worldwide.",
    "Scale Faster With Piqes."
];

const typingText = document.querySelector("#typing-text");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const current = texts[textIndex];

    if (!deleting) {

        typingText.textContent = current.substring(0, charIndex++);
    }
    else {

        typingText.textContent = current.substring(0, charIndex--);

    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex > current.length) {

        deleting = true;
        speed = 1500;

    }

    if (deleting && charIndex < 0) {

        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;

    }

    setTimeout(type, speed);

}

type();


// =====================
// Reveal Animation
// =====================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .2
});

cards.forEach(card => {

    observer.observe(card);

});


// =====================
// Counter Animation
// =====================

let started = false;

window.addEventListener("scroll", () => {

    const overview = document.querySelector(".overview");

    if (!started && window.scrollY > overview.offsetTop - 300) {

        started = true;

        document.querySelectorAll(".overview h1").forEach(counter => {

            let original = counter.innerText;

            let target = parseInt(original.replace(/\D/g, ""));

            let count = 0;

            let interval = setInterval(() => {

                count++;

                if (count >= target) {

                    count = target;
                    clearInterval(interval);

                }

                if (original.includes("%")) {

                    counter.innerText = count + "%";

                }
                else if (original.includes("K")) {

                    counter.innerText = count + "K";

                }

            }, 15);

        });

    }

});


// =====================
// Scroll Top Button
// =====================

const scrollTop = document.createElement("a");

scrollTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

scrollTop.classList.add("scroll-top");

document.body.appendChild(scrollTop);


scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("active");

    } else {

        scrollTop.classList.remove("active");

    }

});


// =====================
// Close Mobile Menu
// =====================

const navItems = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (navCollapse.classList.contains("show")) {

            new bootstrap.Collapse(navCollapse).hide();

        }

    });

});