'use strict';
let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let filteredSteps = turtleSteps.filter(step => {
    return step[0] >= 0 && step[1] >= 0;
});
let mappedSteps = filteredSteps.map(step => step[0] +step[1]);

let caseSteps = filteredSteps.forEach(item => {
    console.log('Turtle took ' + item[0] + ' steps forward');
    console.log('Turtle took ' + item[1] + ' steps left');
});
console.log(filteredSteps);
console.log(mappedSteps);
