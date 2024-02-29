document.addEventListener('DOMContentLoaded', function() {

//Definiendo las variables 
const botonUno = document.querySelector('#botonIncremento')
const botonDos = document.querySelector('#botonDecremento')
const botonReiniciar = document.querySelector('#botonReiniciar')
const numero = document.querySelector('#numero')
let pulsar = 0

//Llamando los eventos
eventos()

//Agrupa los eventos
function eventos() {
    botonUno.addEventListener('click', sumar)
    botonDos.addEventListener('click', restar)
    botonReiniciar.addEventListener('click', reiniciar)
    //Permite ver el numero del boton
    numero.innerHTML = `${pulsar}`
}

function sumar() {
    pulsar++
    if (pulsar == 1){
        botonDos.classList.remove('opacity-50', 'cursor-not-allowed')
        botonReiniciar.classList.remove('opacity-50', 'cursor-not-allowed')
    }
    console.log(pulsar)
    numero.innerHTML = `${pulsar}`
}

function restar(){
    pulsar--
    if (pulsar <= 0){
        alert('No se puede puede poner un numero menor que 0')
        botonDos.classList.add('opacity-50', 'cursor-not-allowed')
        return
    }

    console.log(pulsar)
    numero.innerHTML = `${pulsar}`
}

function reiniciar(){
    pulsar = 0
    if (pulsar == 0){
        botonReiniciar.classList.add('opacity-50', 'cursor-not-allowed')
    } 
    console.log(pulsar)
    numero.innerHTML = `${pulsar}`
}

});