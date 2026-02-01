// const today = new Date();
// console.log(today.toString());
// console.log(today.toLocaleString());

// const date = new Date('2062-10-19');
// console.log(date);
// console.log(date.getMonth());
// console.log(date.getDate());

const specificDate = new Date(2091, 0, 26);
// console.log(specificDate);
specificDate.setMonth(10);
// console.log(specificDate);
console.log(specificDate.toLocaleString()); // Output: 11/26/2091, 12:00:00 AM
console.log(specificDate.toLocaleString('en-GB')); // Output: 26/11/2091, 00:00:00




//? What is Unix Epoch?

//! Unix epoch is a fixed starting point for time in computers.

//! 🕛 It starts at:
//! January 1, 1970, 00:00:00 UTC

//! From that moment, time is counted as the number of seconds !that have passed.