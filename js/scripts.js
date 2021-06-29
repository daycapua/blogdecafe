//querySelector: Va a retornar ya sea un elemento o ninguno

const heading = document.querySelector('.header__texto h2') // Retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading' ;
console.log(heading) ;

//querySelectorAll: Retorna de 0 a todos los elementos que tiene

const enlases = document.querySelectorAll('.navegacion a');
console.log(enlases[0]) ;

enlases[0].textContent = 'Nuevo texto para Enlace' ;
enlases[0].classList.add('Nueva-clase') ;
//enlases[0].classList.remove('navegacion_enlace') ;

//getEloementById

const heading2 = document.getElementById('heading') ;
console.log(heading2) ;

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')
//Agregar el href
nuevoEnlace.href ='nuevo-enlace.html' ;
//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual' ;
//Agregar la clase
nuevoEnlace.classList.add('navegacion_enlace') ;
//Agregarlo al documento
const navegacion = document.querySelector('.navegacion') ;
navegacion.appendChild(nuevoEnlace) ;

console.log(nuevoEnlace) ;

//Eventos
/*
console.log(1) ;

window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependan del HTML entén listos
    console.log(2) ;
}) ;


window.onload = function(){
    console.log(3) ;
}

document.addEventListener('DOMContentLoaded', function(){ //Espera solamente que se cargue el HTML, no espera el CSS
    console.log(4) ;
})

console.log(5) ;

*/
/*
window.onscroll = function(evento) {
    console.log(evento)  // Scroll en la página
}
*/

//Seleccionar elementos y asociarle un enevento

//const btnEnviar = document.querySelector('.boton--primario') ;
//btnEnviar.addEventListener('click', function(evento){
    //console.log(evento) ;
    //evento.preventDefault() ;  //Validar un formulario
    //console.log('enviando formulario') ;
//}) ;

//Eventos de los imput y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: '' 
}

const nombre = document.querySelector('#nombre') ;
const email = document.querySelector('#email') ;
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario') ;

nombre.addEventListener('input', leerTexto) ;

email.addEventListener('input', leerTexto) ;

mensaje.addEventListener('input', leerTexto) ;

//Eventos del Submit

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault() ;
   
    //Validar el formulario

    const {nombre, email, mensaje} = datos ;
    
    if (nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta('Todos los campos son obligatorios', true) ;

        return ; // Corta la ejecucion del código
    }

    //Enviar el formulario
    mostrarAlerta('Su formulario se envió correctamente') ;
})

function leerTexto(e){
    //console.log(e.target.value)

    datos[e.target.id] = e.target.value ;

    //console.log(datos) ;
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P') ;
    alerta.textContent = mensaje ; 

    if (error) {
        alerta.classList.add('error') ;
    }else{
        alerta.classList.add('correcto') ;
    }
    formulario.appendChild(alerta) ;
    
    setTimeout(() => {
        alerta.remove() ;
    }, 3000);
}