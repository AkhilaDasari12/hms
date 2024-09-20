function isArmstrongNumber(num) {
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
}

function printArmstrongNumbers(range) {
    console.log(`Armstrong numbers between 1 and ${range}:`);
    for (let i = 1; i <= range; i++) {
        if (isArmstrongNumber(i)) {
            console.log(i);
        }
    }
}

// Example: Print Armstrong numbers from 1 to 1000
printArmstrongNumbers(1000);