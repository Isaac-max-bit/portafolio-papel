const words = [

    "Software Developer",

    "Frontend Developer",

    "Backend Developer",

    "Java Developer",

    "Python Developer",

    "React Developer",

    "Full Stack Developer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, letterIndex++);

        if (letterIndex > current.length) {

            deleting = true;

            setTimeout(type, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, letterIndex--);

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)

                wordIndex = 0;

        }

    }

    setTimeout(type, deleting ? 60 : 120);

}

type();