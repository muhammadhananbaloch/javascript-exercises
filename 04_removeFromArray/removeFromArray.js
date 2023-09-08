const removeFromArray = function(array, ...elementToRemove) {
    for(i=0; i<elementToRemove.length; i++){
        let indexOfElementToRemove = array.indexOf(elementToRemove[i]);    
        let deletedElement = array.splice(indexOfElementToRemove, 1);
        
    }
return array;
};
// Do not edit below this line
module.exports = removeFromArray;
