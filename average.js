'use strict'
function average(numbers) {
    let total = 0;
    numbers.forEach(number => total += number);
    return total / numbers.length;

}


console.log(average([2, 4, 6, 8]));
