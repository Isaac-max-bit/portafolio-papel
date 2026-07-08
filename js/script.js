/*====================================================
    ISAAC GARCIA PORTFOLIO
    Version 1.0
=====================================================*/

"use strict";

/*====================================================
    SELECTORES
=====================================================*/

const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

/*====================================================
    HEADER SCROLL
=====================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

/*====================================================
    MENÚ RESPONSIVE
=====================================================*/

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

/*====================================================
    CERRAR MENÚ AL HACER CLICK
=====================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/*====================================================
    SCROLL SUAVE
=====================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const id = link.getAttribute("href");

        const section = document.querySelector(id);

        window.scrollTo({

            top: section.offsetTop - 70,

            behavior: "smooth"

        });

    });

});

/*====================================================
    AÑO AUTOMÁTICO
=====================================================*/

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}

/*====================================================
    REVEAL ANIMATION
=====================================================*/

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(item => observer.observe(item));

/*====================================================
    PRELOADER
=====================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.classList.add("loader-hidden");

    setTimeout(() => {

        loader.remove();

    }, 600);

});

/*====================================================
    CURSOR PERSONALIZADO
=====================================================*/

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    });

}

/*====================================================
    BOTÓN VOLVER ARRIBA
=====================================================*/

const backTop = document.querySelector(".back-top");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 700) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

console.log("%cIsaac Garcia Portfolio", "color:#2563eb;font-size:18px;font-weight:bold;");
console.log("%cFront-End Developer", "color:#64748b;font-size:14px;");