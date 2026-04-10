// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Button Click Alert
const btn = document.querySelector(".hero button");
btn.addEventListener("click", () => {
    alert("Welcome! Let's get started 🚀");
});


// Mobile Menu Toggle
const menuBtn = document.createElement("button");
menuBtn.innerText = "☰";
menuBtn.style.fontSize = "20px";

const nav = document.querySelector("nav");
document.querySelector("header").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// Scroll Animation (Fade In)
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        } else {
            box.style.opacity = "0";
            box.style.transform = "translateY(50px)";
        }
    });
});