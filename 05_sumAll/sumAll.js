const sumAll = function(num1, num2) {
    let total= 0;
    if(num1 < 0|| num2 < 0){
        return "ERROR"
    }
    else if (num2 < num1){
        for(let i=num2; i<=num1; i++){
        total +=i;
    }
    return total;
    }else{
        for(let i=num1; i<=num2; i++){
        total +=i;
    }
    return total;
    }

};

// Do not edit below this line
module.exports = sumAll;
