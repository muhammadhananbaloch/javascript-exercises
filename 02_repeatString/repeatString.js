const repeatString = function(string, number) {
    let empty = ""
    if(number < 0){
        return "ERROR";
    }
    for(let i = 0; i < number; i++){
        empty += string;
    }
    return empty;
};

// Do not edit below this line
module.exports = repeatString;
