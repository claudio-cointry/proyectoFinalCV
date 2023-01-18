
let elemento;
let posicion;

function coordenada(elem) {
    let caja = elem.getBoundingClientRect();
  
    return caja.top + window.pageYOffset - 110;
  }

document.getElementById('botonDatosPersonales').onclick = function(){
    window.scroll(0,0);
}

document.getElementById('botonExperiencia').onclick = function(){
    elemento = document.getElementById('experiencia');
    posicion = coordenada(elemento);
    window.scroll(0,posicion);
}

document.getElementById('botonAcademica').onclick = function(){
    elemento = document.getElementById('academica');
    posicion = coordenada(elemento);
    window.scroll(0,posicion);
}

document.getElementById('botonLaboral').onclick = function(){
    elemento = document.getElementById('laboral');
    posicion = coordenada(elemento);
    window.scroll(0,posicion);
}

document.getElementById('botonHabilidades').onclick = function(){
    elemento = document.getElementById('habYForm');
    posicion = coordenada(elemento);
    window.scroll(0,posicion);
}

document.getElementById('botonArq').onclick = function(){
    elemento = document.getElementById('arq');
    posicion = coordenada(elemento);
    window.scroll(0,posicion);
}

document.getElementById('botonProg').onclick = function(){
    elemento = document.getElementById('prog');
    posicion = coordenada(elemento);
    window.scroll(0,posicion);
}

document.getElementById('botonOtros').onclick = function(){
    elemento = document.getElementById('otros');
    posicion = coordenada(elemento);
    window.scroll(0,posicion);
}

document.getElementById('botonPortfolio').onclick = function(){
    elemento = document.getElementById('portfolio');
    posicion = coordenada(elemento);
    window.scroll(0,posicion);
}

document.getElementById('footer-irArriba').onclick = function(){
    window.scroll(0,0);
}

const imagenTotal = document.querySelector('.imagenTotal')
const flecha1 = document.getElementById('flecha1')
const flecha2 = document.getElementById('flecha2')
const contadorVisual = document.getElementById('contadorCarrusel')

let imagenMostrada = 1;

flecha1.onclick = function() {
    if (imagenMostrada == 4) {
        imagenMostrada--;
        imagenTotal.style.transform = 'translateX(-50%)';
    } else if (imagenMostrada ==3) {
        imagenMostrada--;
        imagenTotal.style.transform = 'translateX(-25%)';
      }  else if (imagenMostrada ==2) {
            imagenMostrada--;
            imagenTotal.style.transform = 'translateX(0%)';
      }
      contadorVisual.innerHTML = imagenMostrada+"/4";
}

flecha2.onclick = function() {
    if (imagenMostrada == 1) {
        imagenMostrada++;
        imagenTotal.style.transform = 'translateX(-25%)';
    } else if (imagenMostrada ==2) {
        imagenMostrada++;
        imagenTotal.style.transform = 'translateX(-50%)';
      }  else if (imagenMostrada ==3) {
            imagenMostrada++;
            imagenTotal.style.transform = 'translateX(-75%)';
      }
      contadorVisual.innerHTML = imagenMostrada+"/4";
}