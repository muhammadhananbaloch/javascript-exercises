const removeFromArray = function(array, ...elementToRemove) {
    
    for(const element of elementToRemove){
        const index = array.indexOf(element);
        if(index !== -1){
           array.splice(index, 1);
        }
    }
    return array;      
};
// Do not edit below this line
module.exports = removeFromArray;
