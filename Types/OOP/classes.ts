class Person{
    public lastName: string;
    public name : string;
    public email : string;

    private age: number;

    constructor(ln: string, name : string, email: string, age: number){
        this.lastName = ln;
        this.name = name;
        this.email = email;
        this.age = age;
    }

    greetMe(){
        console.log(`Hello ${this.lastName} ${this.name}!`);
    }
}

let p = new Person("Ivanov", "Ivan", "ivan@mail.ru", 23);
p.greetMe();