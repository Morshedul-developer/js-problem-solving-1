/* We know, 12 inches is equals to 1 feet */

function inchToFeet(inches) {
    const feet = inches / 12;
    const feetNum = parseInt(feet);
    const inchRemaining = inches % 12;
    const result = feetNum + " Feet " + inchRemaining + " inches ";
    return result;
}

const nijhumHeight = inchToFeet(68.5);
console.log(nijhumHeight);