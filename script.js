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
    if (operator == "+"){
        return "" + add(num,num2);
    }
    else if(operator =="−"){
        return "" + subtract(num,num2);
    }
    else if(operator == "×"){
        return "" + multipily(num,num2);
    }
    else{
        return "" + divide(num,num2);
    }
}

const display = document.querySelector(".display");

const buttons = Array.from(document.querySelectorAll(".num"));
buttons.forEach(function(btn){
    btn.onclick = function (){
        display.textContent = display.textContent + btn.textContent;
}})

const symbols = Array.from(document.querySelectorAll(".symbol"));
symbols.forEach(function(symbol){
    symbol.onclick = function(){
        display.textContent = display.textContent + " " + symbol.textContent + " ";
    }
})

const equal = document.querySelector(".equal");
equal.onclick = function(){
    let arr = display.textContent.split(" ");
    display.textContent = operate(arr[0], arr[1], arr[2]); 
}

const del = document.querySelector(".delete");
del.addEventListener("click", function clear(){
    display.textContent = "";
});


