
function mostrar(id) {

    
    const pantallas = document.querySelectorAll(".pantalla");

    
    pantallas.forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    
    const nuevaPantalla = document.getElementById(id);

   
    if (nuevaPantalla) {
        nuevaPantalla.classList.add("activa");
    }

    
    crearCorazones();
}




function reiniciar() {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    document.getElementById("inicio").classList.add("activa");

    crearCorazones();
}




function crearCorazon() {

    const container =
        document.getElementById("hearts-container");

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    
    const simbolos = [
        "♡",
        "♥",
        "❤",
        "♡",
        "♥"
    ];

    heart.innerHTML =
        simbolos[
            Math.floor(
                Math.random() * simbolos.length
            )
        ];

    
    heart.style.left =
        Math.random() * 100 + "%";

   
    heart.style.fontSize =
        (12 + Math.random() * 18) + "px";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    container.appendChild(heart);

    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}




function crearCorazones() {

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {
            crearCorazon();
        }, i * 150);
    }
}




setInterval(() => {

    crearCorazon();

}, 1800);




document.addEventListener("DOMContentLoaded", () => {

    crearCorazones();

});
function abrirSpotify() {

    const cancion =
        "https://open.spotify.com/intl-es/track/7KA4W4McWYRpgf0fWsJZWB?si=51b9ed7dc5be45a8";

    window.open(cancion, "_blank");

}