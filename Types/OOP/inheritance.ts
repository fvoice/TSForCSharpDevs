class Person2
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

class Student extends Person2{
    constructor(
        lastName: string,
        name: string,
        email: string,
        age: number,
        private grade: string
    )
    {
        super(lastName, name, email, age);
    }

    greetMe(){
        super.greetMe();
        console.log(`I'm in the ${this.grade} grade`);
    }
}

let s = new Student("Petrov", "Petr", "petr@mail.ru", 34, "6th");
s.greetMe();