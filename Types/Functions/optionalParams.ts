function add(
    num1 : number,
    num2 : number,
    num3? : number
) : number
{
    let total = num1 + num2;
    if (num3 != undefined)
    {
        total += num3;
    }
    return total;
}

let answer = add(5, 5, 5);
console.log(answer);

answer = add(5, 5);
console.log(answer);