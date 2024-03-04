let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElememto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;   
    return; 
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario == numeroSecreto){
        asignarTextoElememto('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElememto('p', 'El numero secreto es menor');
            } else {
                asignarTextoElememto('p', 'El numero secreto es mayor');
            }
    }
    intentos++;
    limpiarCaja();
    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos lo numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElememto('p', 'Ya se sortearon todos los números posibles');
    } else {
        // si el num generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){    
    asignarTextoElememto('h1', 'Juego del numero secreto'); 
    asignarTextoElememto('p', `Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


