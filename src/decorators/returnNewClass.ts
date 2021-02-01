
function NewClass<T extends{ new(...args: any[]): {name: string}}>(constructor: T) {
    return class extends constructor{
        constructor(...args: any[]) {
            super(...args);
        }
    }
}


@NewClass
class User3 {
    name = "Kz";
    constructor(public age: number) {
        console.log('User wa created');
    }
}

const user3 = new User3(42);