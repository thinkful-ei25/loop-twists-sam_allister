'use strict';
let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let arr = input.split(' ');
const reducer = function(accumulator, element) {
    if(element.length === 3){
        return accumulator += ' ';
    }
    return accumulator += element[element.length-1].toUpperCase();
};
console.log(arr.reduce(reducer,''));