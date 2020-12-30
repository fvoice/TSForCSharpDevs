function person(name: string) : string;
function person(age: number) : string;
function person(isMarried: boolean) : string;
function person(value: boolean | number | string) : string
{
    switch (typeof value){
        case "string":
            return `my name is ${value}`;
        case "number":
            return `my age is ${value}`;
        case "boolean":
            return value ? "I'm married" : "I'm not married";
    }
}

console.log(person("Jhon"));
console.log(person("88"));
console.log(person(true));