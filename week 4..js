// Activity 1


const helloCodenation = () => {
    console.log("Hello Codenation");
};const logFiveTimes = (fn) => {
    for (let i= 0; i < 5; i++) {
        fn();
    }
};

logFiveTimes(helloCodenation);

// Activity 2

const numbersArr = [1, 2, 3, 4, 5];

const multiplyByThree = (array) => {
    return array.map((item) => {
        return item * 3;
    });
};

console.log(multiplyByThree(numbersArr));


// Activity 3


const add = (num1, num2) => {
    return num1 + num2;
};
const subtract = (num1, num2) => {
    return num1 - num2;
};
const multiply = (num1, num2) => {
    return num1 * num2;
};
const divide = (num1, num2) => {
    num1 / num2;
};

const doMaths = (num1) => {
    return(num2, fn) => {
        return fn(num1, num2);
    };
};
console.log(doMaths(4)(3, multiply));