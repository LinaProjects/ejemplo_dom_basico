//selectores

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

//cambiar texto estilo HTML o Texto
h1.innerHTML = '<u>Manolo</u> Patroclo '
h1.innerText = '<u>Manolo</u> Patroclo '

//console.log(h1.getAttribute('class'))
//h1.setAttribute('class', 'Verde')

h1.classList.add('rojo')
h1.classList.remove('negro')

input.value = '456'

const img = document.createElement('img')
img.setAttribute('src', 'https://i.pinimg.com/originals/3f/cd/52/3fcd5214b7b4ae6bb5271bfbddd88bde.png')
console.log(img)

pid.innerHTML = ''
pid.append(img)
