const removeFromArray = function(array, ...elementToRemove) {
    for(i=0; i<elementToRemove.length; i++){
        let indexOfElement = array.indexOf(elementToRemove[i]);    
        let newArray = array.splice(indexOfElement, 1);
        
    }
return array;
};
// Do not edit below this line
module.exports = removeFromArray;
