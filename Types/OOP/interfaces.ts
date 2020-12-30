interface Phone{
    model: string;
    version: number;
    ring() : string;
}

class TraditionalPhone implements Phone
{
    constructor(
        public model : string,
        public version : number,
    )
    {    }
    ring(): string {
        return 'ring ring';
    }    
}

class ModernPhone implements Phone
{
    constructor(
        public model : string,
        public version : number,
    )
    {    }
    ring(): string {
        return 'ring tone';
    }    
}

let bellPhone = new TraditionalPhone("Bell", 1.1);
let iPhone = new ModernPhone("Iphone", 7);

let phones : Phone[] = [];
phones.push(bellPhone);
phones.push(iPhone);

for (var phone of phones)
{
    console.log(phone.ring());
}

//comment