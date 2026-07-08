// ======================================
// SCROLL REVEAL
// ======================================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ======================================
// PARALLAX HERO
// ======================================

window.addEventListener("scroll", () => {

    const heroImage = document.querySelector(".home-image img");

    if (heroImage) {

        heroImage.style.transform =
            `translateY(${window.scrollY * 0.15}px)`;

    }

});


// ======================================
// NAV LINK ACTIVO
// ======================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});