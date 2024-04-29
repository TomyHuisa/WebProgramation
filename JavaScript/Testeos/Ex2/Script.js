// Las funciones siempre deben de tener un valor de retorno

let resultado = 0;

function number1(){
    const number1 =document.getElementById('number1').value
    return parseInt(number1);
}

function number2(){
    const number2 =document.getElementById('number2').value
    return parseInt(number2);
}

function calculate(){
    resultado = number1() + number2(); //Los parentesis son importantes
    //console.log(resultado)
    document.getElementById('calculate').textContent = resultado.toString();
}