declare class Dog {
    name: string;
    nickName: string;
    constructor(initName: string, initNick: string);
    greeting(this: {
        name: string;
    }): void;
}
declare const pochi: Dog;
declare const anotherPochi: {
    name: string;
    anotherGreeting: (this: {
        name: string;
    }) => void;
};
//# sourceMappingURL=this.d.ts.map