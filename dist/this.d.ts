declare class Dog {
    name: string;
    nickName: string;
    age: number;
    constructor(initName: string, initNick: string, initAge: number);
    incrementAge(): void;
    greeting(this: Dog): void;
}
declare const pochi: Dog;
//# sourceMappingURL=this.d.ts.map