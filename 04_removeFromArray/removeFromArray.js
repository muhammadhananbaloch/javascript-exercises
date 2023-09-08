const removeFromArray = function(array, elementToRemove) {
    let indexOfElement = array.indexOf(elementToRemove);
    let newArray = array.splice(indexOfElement, 1);
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
