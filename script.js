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
    if ( b === 0){
        alert("Illegal move");
        return  a + " ÷ " + b;
    }else{
        return a/b;     
    }
}



function operate(num,operator,num2){
    num = Number(num);
    num2 = Number(num2);
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

function roundTo(num){
    if (Number.isInteger(num) || num.includes("÷")){
        return num;
    }
    else{
        // round to six decimal places if the number a decimal
       num =  num * 100000;
       num = Math.round(num);
       num = num/100000;
       return num;
    }
}

const display = document.querySelector(".display");
let calculation = null;

const buttons = Array.from(document.querySelectorAll(".num"));
buttons.forEach(function(btn){
    btn.onclick = function (){
        display.textContent = display.textContent + btn.textContent;
}})

const symbols = Array.from(document.querySelectorAll(".symbol"));
symbols.forEach(function(symbol){
    symbol.onclick = function(){
        let arr = display.textContent.split(" ");
        if (arr.length === 3){
            display.textContent = arr.includes("")? display.textContent:roundTo(operate(arr[0], arr[1], arr[2])); 
        }
        display.textContent = display.textContent + " " + symbol.textContent + " ";
    }
})

const equal = document.querySelector(".equal");
equal.onclick = function(){
    let arr = display.textContent.split(" ");
    if (arr.length === 3){
        display.textContent = arr.includes("")? display.textContent: roundTo(operate(arr[0], arr[1], arr[2])); 
    }
    
}

const del = document.querySelector(".delete");
del.addEventListener("click", function clear(){
    display.textContent = "";
});


