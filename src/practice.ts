class Dog {
    constructor(private name: string, private breed: string) {
    }
    introduction(this: Dog) {
        console.log(`うちの${this.name}です。よろしくお願いします。犬種は${this.breed}です。`);
    }
}

const pochi = new Dog('ぽち', '柴犬');
pochi.introduction();