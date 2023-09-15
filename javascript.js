
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
const decimal = document.querySelector('#decimal');

// Output Lines
const output = document.querySelector('#outputLine');
const history = document.querySelector('#historyLine');

let operator = '';
let operatorChosen = false;
let begin = true;
const symbols = ['+', '-', '*', '/'];
let answer = ''
let num1 = ''
let num2 = ''


function operatorFunction(entry){
    if(operator !== ''){
        history.innerHTML = output.innerHTML;
        operate();
        num2 = ''
        num1 = answer;
        output.innerHTML = output.innerHTML + ' ' + entry + ' ';
        operator = entry;
        return;
    }
    operator = entry;
    equationCreation(entry);
}



function equationCreation(input){
    if(begin == true){
        begin = false;
        output.innerHTML = input;
        num1 = input;
        return;
    }

    if(symbols.includes(input)){
        output.innerHTML = output.innerHTML + ' ' + input + ' ';
        return;
    }

    if(begin == false && !symbols.includes(operator)){
        output.innerHTML = output.innerHTML + input;
        num1 = num1 + input;
        return;
    }
    else if(begin == false && symbols.includes(operator)){
        output.innerHTML = output.innerHTML + input;
        num2 = num2 + input;
        return;
    }
}

function clearEverything(){
    output.innerHTML = 0;
    operatorChosen = false;
    history.innerHTML = '';
    operator = '';
    answer = '';
    begin = true;
    num1 = '';
    num2 = '';
}

//FIGURE OUT HOW WHY UNDEFINED IS GIVEN WHEN YOU PRESS ANOTHER OPERATOR AFTER YOU AN EQUATION

function operate(){
    if(num1 == undefined){
        history.innerHTML = output.innerHTML;
        return;
    }

    if(operator == '+'){
        answer = Number(num1) + Number(num2);
        history.innerHTML = output.innerHTML;
        output.innerHTML = answer;
    }
    else if(operator == '-'){
        answer = Number(num1) - Number(num2);
        history.innerHTML = output.innerHTML;
        output.innerHTML = answer;
    }
    else if(operator == '*'){
        answer = Number(num1) * Number(num2);
        history.innerHTML = output.innerHTML;
        output.innerHTML = answer; 
    }
    else if(operator == '/'){
        if(num2 == '0'){
            alert("You cannot divide by 0!");
            clearEverything();
            return;
        }
        answer = Number(num1) / Number(num2);
        history.innerHTML = output.innerHTML;
        output.innerHTML = answer; 
    }
}

