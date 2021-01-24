"use strict";
class Dog {
    constructor(initName, initNick, initAge) {
        this.name = initName;
        this.nickName = initNick;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`私の名前は${this.name}です。${this.age}才です。`);
    }
}
const pochi = new Dog('pochi', 'poc', 12);
pochi.incrementAge();
pochi.greeting();
