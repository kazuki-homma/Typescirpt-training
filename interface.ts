// type addFunc = (num1: number, num2:number) => number;
interface addFunc {
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

type Namable = {
    name: string;
    nickName?: string;
}

const namable: Namable = {
    name: 'Quill',
    nickName: 'QUila',
}

interface Human extends Namable{
    age: number;
    greeting(message: string): void;
}

class Developer implements Human{
    hairStyle?: string;
    constructor(public name: string, public age: number, public experience: number, initHair?: string) {
        if (initHair) {
            this.hairStyle = initHair;
        }
    }
    greeting(message?: string) {
        if (message) {
            console.log(message);
        }
        console.log('Hello');
    }
}

const user: Human = new Developer('Quill', 38, 3);