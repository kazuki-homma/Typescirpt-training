class Dog {
    constructor(public readonly name: string, protected age: number) {
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Dog) {
        console.log(`私の名前は${this.name}です。${this.age}才です。`);
    }
}

class PetDog extends Dog{
    constructor(public name: string, protected age: number) {
        super(name, age);
    }

    greeting() {
        console.log(`私の名前は${this.name}です。このうちにきてから${this.age}年になります。`);
    }
}

