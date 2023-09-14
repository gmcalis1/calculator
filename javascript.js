
// Number Buttons
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

// Operator Buttons
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');


// Function Buttons
const clear = document.querySelector('#clear');
const enter = document.querySelector('#enter');
const sign = document.querySelector('#sign');
const output = document.querySelector('#outputLine');

let operator;
let operatorChosen = false;
let begin = true;
const symbols = ['+', '-', '*', '/'];
let answer;
let num1;
let num2;

function operater(entry){
    if()
    operater = entry;
    num1 = output.innerHTML
    equationCreation(entry);
}



function equationCreation(input){

    if(symbols.includes(input) && operatorChosen == true){
        operate();
    }

    if(begin == true && !symbols.includes(input)){
        begin = false;
        output.innerHTML = input;
        return
    }

    if(symbols.includes(input)){
        output.innerHTML = output.innerHTML + " " + input + " ";
        return;
    }

    output.innerHTML = output.innerHTML + input;
}

function clearEverything(){
    output.innerHTML = 0;
    answer = null;
    begin = true;
}

function operate(){
    console.log(output.innerHTML); 
    console.log(output.innerHTML.length);
    let next = false;

    for(i = 0; i < output.innerHTML.length; i++){
        if(output.innerHTML.charAt(i) !== " "){
            num1 = num1 + output.innerHTML.charAt(i);
        }
        
        if(output.innerHTML.charAt(i+1) == " "){

        }
    }

}

