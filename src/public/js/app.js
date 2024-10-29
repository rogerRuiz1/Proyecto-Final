// Menú lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible == false){ 
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    const facebookLink = document.querySelector('.fa-facebook-f').parentElement;
    const instagramLink = document.querySelector('.fa-square-instagram').parentElement;
    const linkedinLink = document.querySelector('.fa-linkedin-in').parentElement;

    facebookLink.href = 'https://www.facebook.com/roger.ruizromanet?mibextid=ZbWKwL';
    instagramLink.href = 'https://www.instagram.com/roger_ez/';
    linkedinLink.href = 'https://www.linkedin.com/in/roger-ruiz-romanet-344453268/';

    facebookLink.target = '_blank';
    instagramLink.target = '_blank';
    linkedinLink.target = '_blank';
});

function crearBarra(id_barra){
    for(let i = 0; i <= 16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let Cpp = document.getElementById("C++");
crearBarra(Cpp);
let contadores = [-1, -1, -1, -1, -1, -1];

let entro = false;
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300 && entro == false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 10, 1, intervalJavascript);
        }, 100);
        const intervalCpp = setInterval(function(){
            pintarBarra(Cpp, 11, 2, intervalCpp);
        }, 100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    let x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval);
    }
}

window.onscroll = function(){
    efectoHabilidades();
}
