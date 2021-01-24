"use strict";
class Dog {
    constructor(initName, initNick) {
        this.name = initName;
        this.nickName = initNick;
    }
    greeting() {
        console.log(`私の名前は${this.name}です。`);
    }
}
const pochi = new Dog('pochi', 'poc');
pochi.greeting();
// thisの挙動
const anotherPochi = {
    name: 'anotherPochi',
    anotherGreeting: pochi.greeting,
};
anotherPochi.anotherGreeting(); // anotherPochi
