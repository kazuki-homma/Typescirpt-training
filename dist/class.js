"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 32;
        this.id = 31;
        this.name = 'hehh';
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`hello, I'm ${this.name}. I am ${this.age} years old.`);
    }
}
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
}
const teacher = new Teacher('Quill', 45, 'Math');
teacher.greeting();
//# sourceMappingURL=class.js.map