function multiply(num1 : number, num2: number) : number
{
    return num1 * num2;
}

let multiplyLambda = (num1: number, num2: number) => num1 * num2;

let lambdaFirst : (num: number) => void;

lambdaFirst = function (num: number) {
    console.log(num);
}

console.log(multiply(5,5))
console.log(multiplyLambda(5,5))
lambdaFirst(777);