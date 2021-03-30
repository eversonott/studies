let foto = document.getElementById("foto");

function altera() {
    foto.src = 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg'
    console.log(foto.src);
}

foto.addEventListener("mouseover", altera);