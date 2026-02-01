//* Leap year

function leapYear(year) {
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

const year = leapYear(2100);
const year2 = leapYear(2400);
const year3 = leapYear(1900);
const year4 = leapYear(2052);
console.log(year, year2, year3, year4);