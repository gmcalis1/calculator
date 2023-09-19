
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
let num1Dec = false;
let num2Dec = false;


//KNOWN BUGS  
//Sign button will produce multiple negative signs even without a number present




function operatorFunction(entry){
    if(operator !== ''){
        history.innerHTML = output.innerHTML;
        operate();
        num2 = ''
        num1 = answer;
        num2Dec = false;
        output.innerHTML = output.innerHTML + ' ' + entry + ' ';
        operator = entry;
        return;
    }
    operator = entry;
    equationCreation(entry);
}

function changeSign(){
    

    debugger
    if(answer !== '' && answer > 0){
        answer = '-' + answer;
        output.innerHTML = '-' + answer;
        return;
    }else if(answer !== '' && answer < 0){
        output.innerHTML = '+' + answer.substring(1,answer.length);
        return;
    }
    
    if(operator == ''){
        if(num1 < 0){
            num1 = num1.substring(1, num1.length);
            output.innerHTML = num1;
            return;
        }
        num1 = '-' + num1;
        output.innerHTML = num1;
        return;
    }
    else{
        if(num2 < 0){
            num2 = num2.substring(1, num2.length);
            output.innerHTML = num1 + ' ' + operator + ' ' + num2;
            return;
        }
        num2 = '-' + num2;
        output.innerHTML = num1 + ' ' + operator + ' ' + num2;
    }
}

function equationCreation(input){

    if(begin == true && input !== '.'){
        begin = false;
        output.innerHTML = input;
        num1 = input;
        return;
    }
    if(symbols.includes(input)){
        output.innerHTML = output.innerHTML + ' ' + input + ' ';
        answer = '';
        return;
    }
    if(!symbols.includes(operator)){
        if(input == '.' && num1Dec == false){
            begin = false;
            num1Dec = true;
            output.innerHTML = output.innerHTML + input;
            num1 = num1 + input;
            answer = '';
            return;
        }
        else if(input == '.' && num1Dec == true){
            alert("Cannot have multiple decimals")
            return;
        }
        begin = false;
        output.innerHTML = output.innerHTML + input;
        num1 = num1.toString() + input;
        answer = '';
        return;
    }
    else if(symbols.includes(operator)){
        if(input == '.' && num2Dec == false){
            begin = false;
            num2Dec = true;
            output.innerHTML = output.innerHTML + input;
            num2 = num2 + input;
            answer = '';
            return;
        }
        else if(input == '.' && num2Dec == true){
            alert("Cannot have multiple decimals")
            return;
        }
        begin = false;
        output.innerHTML = output.innerHTML + input;
        num2 = num2 + input;
        answer = '';
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

function operate(){
    if(num1 == undefined){
        history.innerHTML = output.innerHTML;
        return;
    }

    if(operator == '+'){
        answer = Number(num1) + Number(num2);
        history.innerHTML = output.innerHTML;
        if(Number.isInteger(answer)){
            output.innerHTML = answer;
            return;
        }
        output.innerHTML = answer.toFixed(2);
    }
    else if(operator == '-'){
        answer = Number(num1) - Number(num2);
        history.innerHTML = output.innerHTML;
        if(Number.isInteger(answer)){
            output.innerHTML = answer;
            return;
        }
        output.innerHTML = answer.toFixed(2);
    }
    else if(operator == '*'){
        answer = Number(num1) * Number(num2);
        history.innerHTML = output.innerHTML;
        if(Number.isInteger(answer)){
            output.innerHTML = answer;
            return;
        }
        output.innerHTML = answer.toFixed(2);
    }
    else if(operator == '/'){
        if(num2 == '0'){
            alert("You cannot divide by 0!");
            clearEverything();
            return;
        }
        answer = Number(num1) / Number(num2);
        history.innerHTML = output.innerHTML;
        if(Number.isInteger(answer)){
            output.innerHTML = answer;
            return;
        }
        output.innerHTML = answer.toFixed(2);
    }
}

