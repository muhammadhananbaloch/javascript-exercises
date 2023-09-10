const removeFromArray = function(array, ...elementToRemove) {

    for(const element of elementToRemove){    //since the elementToRemove argument accepts optional parameter as an array. the for ...of 
        const index = array.indexOf(element); //loop stores each passed parameter to remove one by one and checks whether the index is -1
        if(index !== -1){                     //or not. if the condition is true it splices the passed array from the index number of the 
           array.splice(index, 1);            //element to remove to one and the for of loop continues until all the elementsToRemove are
        }                                     //removed.After the loops breaks it returns the array after all the elementToRemove are splices. 
    }
    return array;      
};
// Do not edit below this line
module.exports = removeFromArray;
