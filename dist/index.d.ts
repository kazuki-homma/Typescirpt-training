declare let hello: string;
declare let hoge: string;
declare let initObj: {
    name: string;
    age: number;
};
declare let initArray: string[];
declare let severalArray: any[];
declare let tupple: [string, number, boolean];
declare enum CoffeeSize {
    SHORT = "SSHORT",
    TALL = "TALL",
    LARGE = "LARGE",
    VENTI = "VENTI"
}
declare let coffee: {
    name: string;
    hot: boolean;
    size: CoffeeSize;
};
declare let union: string | number;
declare let unionArray: (string | number | boolean)[];
declare let literal: "literal";
declare const conslitera = "conslitera";
declare let iceCoffee: {
    name: string;
    hot: boolean;
    size: "SHORT" | "TALL" | "GRANDE" | "VENTI";
};
declare type Alias = 'small' | 'medium' | 'large';
declare let alias: Alias;
declare function typeFunc(num1: number, num2: number): number;
declare function voidFunc(name: string, age: number): void;
declare let funcBox: (num1: number, num2: number) => number;
declare function doubleAndHandle(num: number, cb: (num: number) => number): void;
declare let unknownInput: unknown;
declare let anyInput: any;
declare let text: string;
declare function error(message: string): never;
//# sourceMappingURL=index.d.ts.map