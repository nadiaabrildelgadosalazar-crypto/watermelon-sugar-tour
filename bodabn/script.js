const imagenes = [
    "banda1.jpg",
    "banda2.jpg",
    "banda3.jpg",
    "banda4.jpg"
];

let indice = 0;

const imagenCarrusel = document.getElementById("carousel-image");

const botonPrev = document.querySelector(".prev");
const botonNext = document.querySelector(".next");

botonNext.addEventListener("click", () => {

    indice++;

    if(indice >= imagenes.length){
        indice = 0;
    }

    imagenCarrusel.src = imagenes[indice];

});

console.log("Carrusel iniciado");

setInterval(function() {

    indice++;

    console.log(indice);

    if (indice >= imagenes.length) {
        indice = 0;
    }

    imagenCarrusel.src = imagenes[indice];

}, 1000);

const countdownBox = document.getElementById("countdown-box");

const fechaConcierto = new Date("November 15, 2026 00:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaConcierto - ahora;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    countdownBox.innerHTML =
        `
        ${dias} DAYS<br>
        ${horas} HOURS<br>
        ${minutos} MINUTES<br>
        ${segundos} SECONDS
        `;

}, 1000);

const enterBtn = document.getElementById("enterBtn");

const intro = document.getElementById("intro");

const contenido = document.getElementById("contenido");

enterBtn.addEventListener("click", () => {

    intro.style.display = "none";

    contenido.style.display = "block";

    window.scrollTo({
    top: 0,
    behavior: "smooth"
});

});

function crearSandia() {

    const sandia = document.createElement("div");

    sandia.innerHTML = "🍉";

    sandia.classList.add("sandia-js");

    sandia.style.left = Math.random() * 100 + "vw";

    sandia.style.fontSize =
        Math.random() * 20 + 20 + "px";

    document.body.appendChild(sandia);

    setTimeout(() => {

        sandia.remove();

    }, 6000);

}

setInterval(crearSandia, 1200);



function openTimeline(year){

    const popup =
    document.getElementById("timelinePopup");

    const popupYear =
    document.getElementById("popupYear");

    const popupTitle =
    document.getElementById("popupTitle");

    const popupText =
    document.getElementById("popupText");

    const popupImage =
    document.getElementById("popupImage");

    if(year === "1995"){

        popupYear.innerText = "1995";

        popupTitle.innerText =
        "THE DISCOVERY";

        popupImage.src =
        "band1995.jpg";

        popupText.innerText =
        "En 1995 comenzó una historia que nadie imaginó que podría cambiar el tiempo. Lo que parecía ser solamente un encuentro entre jóvenes apasionados por la música terminó convirtiéndose en el inicio de algo mucho más grande. Entre guitarras, sueños y melodías nació Watermelon Sugar. Fue una época de descubrimientos, amistades inolvidables y momentos que más tarde demostrarían que la música tiene el poder de unir destinos separados por años de distancia.";

    }

    if(year === "2023"){

        popupYear.innerText = "2023";

        popupTitle.innerText =
        "THE ADAPTATION";

        popupImage.src =
        "band2023.jpg";

        popupText.innerText =
        "Décadas después, el tiempo volvió a moverse de formas inesperadas. Nuevas generaciones, nuevos desafíos y un mundo completamente diferente obligaron a mirar hacia adelante sin olvidar el pasado. Adaptarse se convirtió en parte del viaje. Entre recuerdos, cambios y decisiones difíciles, la música siguió siendo el puente capaz de conectar historias separadas por el tiempo.";

    }

    if(year === "2026"){

        popupYear.innerText = "2026";

        popupTitle.innerText =
        "THE REUNION";

        popupImage.src =
        "band2026.jpg";

        popupText.innerText =
        "Algunas historias terminan. Otras simplemente esperan el momento perfecto para volver a comenzar. En 2026, Watermelon Sugar regresa para celebrar todo aquello que sobrevivió al paso del tiempo: la amistad, la música y los recuerdos que jamás dejaron de existir. La línea del tiempo vuelve a unirse y las voces que una vez cambiaron el destino regresan para escribir un nuevo capítulo.";

    }

    popup.style.display = "flex";

}

function closeTimeline(){

    document.getElementById(
        "timelinePopup"
    ).style.display = "none";

}