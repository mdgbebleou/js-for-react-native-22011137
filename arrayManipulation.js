/**
 * processes an array with a number
 * @param {numbers []} numbers
 * @returns {numbers []} 
 */
function processArray(numbers) {
    return numbers.map(number => number % 2===0? number **2:number *3);
    
}
//example for testing 
console.log(processArray([1,4,7,10]));

function formatArrayStrings(strings, numbers){
    return strings.map((str, index) =>numbers[index] %2===0? str.toUpperCase():str.toLowerCase());
}

//example 1
const strings=["Dogbeda","is","a","girl"];
const processedNumbers= processArray([1,4,7,10]);
console.log(formatArrayStrings(strings, processedNumbers));