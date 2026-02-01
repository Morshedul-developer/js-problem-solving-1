/**
 * function takes an array as parameter
 * give me the average of the even numbers in the array
*/

function evenAverage(numbers) {
    let sum = 0;
    let count = 0;
    for(const number of numbers) {
        if (number % 2 === 0) {
            sum+=number;
            count++;
        }
    }
    const avg = sum / count;
    return avg;
}

const numbers = [1,2,3,4,5,6];
const average = evenAverage(numbers);
console.log("The average of the numbers is :", average);