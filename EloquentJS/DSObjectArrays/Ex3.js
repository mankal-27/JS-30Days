/* DeepEqual */

function deepEqual(val1, val2){
    if(val1 == val2){
        return true;
    }else{
        return false;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));