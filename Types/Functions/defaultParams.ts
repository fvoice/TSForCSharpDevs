function defaultParams(
    num1 : number,
    num2 : number,
    num3 : number = 0
) : number
{
    let total = num1 + num2 + num3;
    return total;
}

let answer2 = defaultParams(5, 5, 5);
console.log(answer2);

answer2 = defaultParams(5, 5);
console.log(answer2);