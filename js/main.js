// ======================================
// PRELOADER
// ======================================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});


// ======================================
// MENU MOVIL
// ======================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ======================================
// CERRAR MENU
// ======================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ======================================
// NAVBAR SCROLL
// ======================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// ======================================
// BOTON ARRIBA
// ======================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    topButton.classList.toggle("show", window.scrollY > 500);

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});