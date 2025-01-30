// Dynamic Greeting
document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning! ☀️";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon! 🌞";
    } else {
        greeting.textContent = "Good Evening! 🌙";
    }
});

// Scroll Animation for Skills
window.addEventListener("scroll", () => {
    const skills = document.querySelectorAll(".skill");
    const triggerHeight = window.innerHeight / 1.2;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;

        if (skillTop < triggerHeight) {
            skill.style.transform = "scale(1.1)";
        } else {
            skill.style.transform = "scale(1)";
        }
    });
});