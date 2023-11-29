const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculadora1')
const input2 = document.querySelector('#calculadora2')
const button = document.querySelector('#btncalcular')
const result = document.querySelector('#result')

// button.addEventListener('sumit', sumarInputs);
// //addEventListener pone los parentesis por s mismo

// function sumarInputs(event) {
//     // console.log(event);
//     event.preventDefault();
//     const sumaInputs = input1.value+input2.value;
//     result.innerText = 'Resultado: ' + sumaInputs;
// }

//En form el ultimo boton lo pone automaticamente en "submit" y recarga la pagina

button.addEventListener('sumit', sumarInputs);

function sumarInputs(event) {
    // console.log(event);
    // event.preventDefault();
    const sumaInputs = input1.value+input2.value;
    result.innerText = 'Resultado: ' + sumaInputs;
}