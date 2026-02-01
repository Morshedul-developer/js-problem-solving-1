//* Task-1:
//? Write a function to convert temperature from Celsius to Fahrenheit.

// solution

// function celsiusToFahrenheit(celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// console.log(celsiusToFahrenheit(25));

//* Task-2:
//? You are given an array of numbers. Count how many times a given number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5];

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// solution

// function find(numbers, num) {
//     let sum = 0;
//     for(const number of numbers) {
//         if(number === num) {
//             sum++;
//         }
//     }
//     return sum;
// }

// const numbers = [5, 6, 11, 12, 98, 5, 5, 5];
// const result = find(numbers,5);
// const result = find(numbers,98);
// const result = find(numbers,988);
// console.log(result);


//* Task-3:
//? Write a function to count the number of vowels in a string.

// solution

// function vowelCounter(str) {
//     let sum = 0;
//     for(const char of str.toLowerCase()) {
//         if (char === 'a'){
//             sum++;
//         }
//         else if(char === 'e'){
//             sum++;
//         }
//         else if(char === 'i'){
//             sum++;
//         }
//         else if(char === 'o'){
//             sum++;
//         }
//         else if(char === 'u'){
//             sum++;
//         }
//     }
//     return sum;
// }

// const str = "Hello, I'm very excited to learn JS eeeeeeeeee.";
// const str = "aeiouaaiiuoeaio";
// const str = "Nth cnd fr th tst.";
// const result = vowelCounter(str);
// console.log(result);


//* Task-4:
//? Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// solution

//! I did this one
// function longestWord(str) {
//     const words = str.split(' ');
//     const arr = [];
//     for(const word of words) {
//         arr.push(word.length);
//     }
//     const maxLen = Math.max(...arr);
//     for(const word of words) {
//         if(maxLen === word.length){
//             return word;
//         }
//     }
// }

//? another way
function longestWord(str) {
    let longest = "";

    for(const word of str.split(" ")){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

const str = "I am learning Programming to become a programmer";
const result = longestWord(str);
console.log(result);