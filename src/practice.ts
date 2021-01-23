class Person {
    constructor(private name: string) {

    }
    greeting(this: Person) {
        console.log(`今日は私の名前は${this.name}です。`)
    }
}

const takashi = new Person('隆', '山本');