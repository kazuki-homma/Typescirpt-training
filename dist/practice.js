"use strict";
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    introduction() {
        console.log(`うちの${this.name}です。よろしくお願いします。犬種は${this.breed}です。`);
    }
}
const pochi = new Dog('ぽち', '柴犬');
pochi.introduction();
//# sourceMappingURL=practice.js.map