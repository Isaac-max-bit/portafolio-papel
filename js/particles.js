// =====================================
// PARTICULAS
// =====================================

const particles = document.getElementById("particles-js");

for (let i = 0; i < 80; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDelay = Math.random() * 12 + "s";

    particle.style.animationDuration = 6 + Math.random() * 10 + "s";

    particle.style.width = particle.style.height =
        2 + Math.random() * 6 + "px";

    particles.appendChild(particle);

}