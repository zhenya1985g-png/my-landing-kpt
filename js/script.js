// Lightweight fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section").forEach((el) => {
        el.style.opacity = 0;
        el.style.transition = "opacity 1s ease";
        setTimeout(() => { el.style.opacity = 1; }, 200);
    });
});
