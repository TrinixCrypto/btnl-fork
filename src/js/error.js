// entry animation sir
window.addEventListener("load", () => {
    const card = document.querySelector(".error-card");
    card.style.transform = "translateY(12px)";
    card.style.opacity = "0";

    requestAnimationFrame(() => {
        card.style.transition = "0.8s cubic-bezier(0.2,0.8,0.2,1)";
        card.style.transform = "translateY(0)";
        card.style.opacity = "1";
    });
});
