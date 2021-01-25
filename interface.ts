type Namable = {
    name: string;
}


interface Human extends Namable{
    age: number;
    greeting(message: string): void;
}

class Developer implements Human{
    constructor(public name: string, public age: number, public experience: number) {

    }
    greeting(message: string) {
        console.log('Hello');
    }
}

const user: Human = new Developer('Quill', 38, 3);