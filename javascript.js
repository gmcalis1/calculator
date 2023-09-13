const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const clear = document.querySelector('#clear');

const enter = document.querySelector('#enter');
const sign = document.querySelector('#sign');
const output = document.querySelector('#outputLine');

let begin = true;
const symbols = ['+', '-', '*', '/'];

function equationCreation(input){
    console.log(symbols.includes(input))
    if(begin == true){
        begin = false;
        output.innerHTML = input;
        return
    }else if(symbols.includes(input) == "true" && begin == "true"){
        alert("You must input a number other than 0 before you add an operator");
        return
    }

    output.innerHTML = output.innerHTML + " " + input;
}

function clearEverything(){
    output.innerHTML = 0;
    begin = true;
}

function operate(){

}

