function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multipily(a,b){
    return a* b;
}

function divide(a,b){
    return a/b;
}

let num;
let operator;
let num2;

function operate(num,operator,num2){
    if (operator == "add"){
        add(num,num2);
    }
    else if(operator =="subtract"){
        subtract(num,num2);
    }
    else if(operator == "multiply"){
        multipily(num,num2);
    }
    else{
        divide(num,num2);
    }
}

