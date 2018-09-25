'use strict';
function max(num){
    if(num.length===0){
        return 'null';
      }
    let i=0;
    let max = num[0];
    while(i<num.length){
        if(max<num[i]){
            max = num[i];
        }
        i++;
    }
    return max;
}

function min(num){
  if(num.length===0){
    return 'null';
  }
  let i=0;
  let min = num[0];
  while(i<num.length){
    if(min>num[i]){
     min = num[i];
        }
        i++;
    }
    return min;
}

console.log(max([1,2,3,4,5]));
console.log(min([1,2,3,4,5]));