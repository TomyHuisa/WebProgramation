// Declarar funciones

// funcion tradicional
/*
function myFuction() {
    return
}

*/

//funcion flecha o arrow function
/*
const myFunction = () => {

}

*/

let contador = 0

function increaseNumber() {
    //let number = document.getElementById('number').textContent;
    contador = contador + 1
    document.getElementById('number').textContent = contador;
    //console.log(counter)
}    

function decreaseNumber() {
    contador = contador - 1
    document.getElementById('number').textContent = contador;
}