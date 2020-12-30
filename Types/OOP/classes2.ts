class Person21
{
    constructor(
        public lastName : string,
        public name : string,
        public email : string,
        private age : number
    )
    {
    }

    greetMe(){
        console.log(`Hello ${this.lastName} ${this.name}!`);
    }
}

let p2 = new Person21("Ivanov", "Ivan", "ivan@mail.ru", 23);
p2.greetMe();