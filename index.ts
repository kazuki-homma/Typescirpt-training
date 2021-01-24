// init
let hello: string = "hello";

// 型推論と型注釈
let hoge: string;

// オブジェクト
let initObj: {
    name: string;
    age: number;
} = {
    name: 'いにこ',
    age: 20
}

// 配列
let initArray: string[] = ['山芋', '菜葉', '大根'];

// 複数の型を持つ配列 
let severalArray: any[] = ['チョコレート', 45, true]; // or 型推論　or Union型

// Tupple
let tupple: [string, number, boolean] = ['マシュマロ', 12, true];

// Enum
enum CoffeeSize {
    SHORT = 'SSHORT',
    TALL = 'TALL',
    LARGE = 'LARGE',
    VENTI = 'VENTI',
}

let coffee = {
    name: 'coffee',
    hot: true,
    size: CoffeeSize.VENTI,
}

// Union
let union: string | number = 32;

let unionArray: (string | number | boolean)[] = [45, 'takaka', false, 54];

// literal
let literal: "literal" = "literal";
const conslitera = "conslitera";

// union + literal == Enum 
let iceCoffee: {
    name: string;
    hot: boolean;
    size: "SHORT" | "TALL" | "GRANDE" | "VENTI"
} = {
    name: 'iceCoffee',
    hot: false,
    size: "SHORT",
}

// Type Alias
type Alias = 'small' | 'medium' | 'large';

let alias: Alias = 'large';

// type function

function typeFunc(num1: number, num2: number): number {
    return num1 + num2;
}

function voidFunc(name: string, age: number) {
    console.log(name, age);
}

// func to let
let funcBox: (num1: number, num2: number) => number = typeFunc;

// callback
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNumber = cb(num*2);
    console.log(doubleNumber);
}

doubleAndHandle(2, doubleNum => {
    return doubleNum;
});

// unknown
let unknownInput: unknown;
let anyInput: any;
let text: string;

unknownInput = 'hello';
unknownInput = 23;
unknownInput = true;

text = anyInput;  // unknownInput Error

if (typeof unknownInput === 'string') {
  text = unknownInput 
}

// never
function error(message: string): never {
    throw new Error(message);
    // while (true) {

    // }
}
console.log('This is an error');


