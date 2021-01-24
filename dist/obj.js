"use strict";
class Person {
    constructor(initName, initNick) {
        this.name = initName;
        this.nickName = initNick;
    }
    greeting() {
        console.log(`私の名前は${this.name}です。`);
    }
}
const john = new Person('John', 'j');
john.greeting();
// thisの挙動
const anotherJohn = {
    name: 'anotherJohn',
    anotherGreeting: john.greeting,
};
anotherJohn.anotherGreeting(); // anotherJohn
