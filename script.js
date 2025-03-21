const noButton = document.getElementById("noButton");
const container = document.querySelector(".container");
const yesButton = document.getElementById("yesButton");

noButton.addEventListener("mouseenter", () => {
    const containerRect = container.getBoundingClientRect();
    const x = Math.random() * (containerRect.width - noButton.clientWidth);
    const y = Math.random() * (containerRect.height - noButton.clientHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", () => {
    Swal.fire({
        title: "Yippieeeee.",
        imageUrl: "https://media.tenor.com/amZ5wxLGUEoAAAAi/hugging-heart-snoopy.gif",
    });
});

const accessibilityButton = document.getElementById("accessibilityButton");
const accessibilityPanel = document.getElementById("accessibilityPanel");
const closePanel = document.getElementById("closePanel");

const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");

// Mostrar/ocultar panel
accessibilityButton.addEventListener("click", () => {
    accessibilityPanel.style.display = "flex";
});

closePanel.addEventListener("click", () => {
    accessibilityPanel.style.display = "none";
});

// Cambiar colores en tiempo real
color1.addEventListener("input", () => {
    document.documentElement.style.setProperty("--bg-color", color1.value);
});

color2.addEventListener("input", () => {
    document.documentElement.style.setProperty("--text-color", color2.value);
});

color3.addEventListener("input", () => {
    document.documentElement.style.setProperty("--button-color", color3.value);
});

color4.addEventListener("input", () => {
    document.documentElement.style.setProperty("--button-color", color4.value);
});