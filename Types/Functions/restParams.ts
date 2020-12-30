function restParams(
    num1: number,
    num2: number,
    ...nums: number[]) : number
{
    var result = num1 + num2;
    nums.forEach(element => {
        result += element;
    });

    return result;
}

let result = restParams(1,2,3,4);
console.log(result);