'use strict';
function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function(location) {
        warningCounter += 1;
        let times = 'times';
        if (warningCounter === 1) {
            times = 'time';
        
        }
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`)
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`)

    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado in Area');
const floodWarning = hazardWarningCreator('High waters');


rocksWarning('Main and Pacific');
rocksWarning('South and Smith');
tornadoWarning('Main');