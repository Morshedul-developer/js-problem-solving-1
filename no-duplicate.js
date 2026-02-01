//* create a unique array 

function noDuplicate(arr) {
    const unique = [];
    for(const item of arr) {
        if(!unique.includes(item)){
            unique.push(item);
        }
    }
    return unique;
}

const numbers = [1,2,55,55,2,4,69,7,55,8,2,1,9,7,54,96];
const result = noDuplicate(numbers);
console.log(result);