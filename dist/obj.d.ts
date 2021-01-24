declare class Person {
    name: string;
    nickName: string;
    constructor(initName: string, initNick: string);
    greeting(): void;
}
declare const john: Person;
declare const anotherJohn: {
    name: string;
    anotherGreeting: () => void;
};
//# sourceMappingURL=obj.d.ts.map