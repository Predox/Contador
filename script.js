var number1 = 1;
var number2 = 2;
var number3 = 3;
let number = 0

function umMaisUm(){
    number = number + number1;
    mostrar1()
    if(number > 9){
        document.getElementById('contador-um').style.fontSize = "15vh"
    }
}

function umMaisDois(){
    number = number + number2;
    mostrar1()
    if(number > 9){
        document.getElementById('contador-um').style.fontSize = "15vh"
    }
}

function umMaisTres(){
    number = number + number3;
    mostrar1()
    if(number > 9){
        document.getElementById('contador-um').style.fontSize = "15vh"
    }
}

function umMenosUm(){
    number = number - number1;
    mostrar1()
    if(number > 9 & number < 0){
        document.getElementById('contador-um').style.fontSize = "15vh"
    }
    if(number < 10 & number > 0){
        document.getElementById('contador-um').style.fontSize = "30vh"
    }
    if(number < 0){
        number = number + number1;
        mostrar1()
    }
}

//=================================================================================//

var number11 = 1;
var number22 = 2;
var number33 = 3;
let number01 = 0

function doisMaisUm(){
    number01 = number01 + number11;
    mostrar2()
    if(number01 > 9){
        document.getElementById('contador-dois').style.fontSize = "15vh"
    }
}

function doisMaisDois(){
    number01 = number01 + number22;
    mostrar2()
    if(number01 > 9){
        document.getElementById('contador-dois').style.fontSize = "15vh"
    }
}

function doisMaisTres(){
    number01 = number01 + number33;
    mostrar2()
    if(number01 > 9){
        document.getElementById('contador-dois').style.fontSize = "15vh"
    }
}

function doisMenosUm(){
    number01 = number01 - number11;
    mostrar2()
    if(number01 > 9 & number01 > -9){
        document.getElementById('contador-dois').style.fontSize = "15vh"
    }
}

function doisMenosUm(){
    number01 = number01 - number11;
    mostrar2()
    if(number01 > 9 & number01 < 0){
        document.getElementById('contador-dois').style.fontSize = "15vh"
    }
    if(number01 < 10 & number01 > 0){
        document.getElementById('contador-dois').style.fontSize = "30vh"
    }
    if(number01 < 0){
        number01 = number01 + number11;
        mostrar2()
    }
}

//=================================================================================//

function mostrar1(){
    const valor = document.querySelector('#contador-um')
    valor.innerText = number
}

function mostrar2(){
    const valor = document.querySelector('#contador-dois')
    valor.innerText = number01
}

function resetar(){
    const valor = document.querySelector('#contador-um')
    const valor1 = document.querySelector('#contador-dois')
    valor.innerText = 0
    valor1.innerText = 0
    document.getElementById('contador-um').style.fontSize = "30vh"
    document.getElementById('contador-dois').style.fontSize = "30vh"
    number01 = 0
    number = 0
}