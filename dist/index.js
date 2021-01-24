"use strict";
// init
let hello = "hello";
// 型推論と型注釈
let hoge;
// オブジェクト
let initObj = {
    name: 'いにこ',
    age: 20
};
// 配列
let initArray = ['山芋', '菜葉', '大根'];
// 複数の型を持つ配列 
let severalArray = ['チョコレート', 45, true]; // or 型推論　or Union型
// Tupple
let tupple = ['マシュマロ', 12, true];
// Enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SSHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["LARGE"] = "LARGE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
let coffee = {
    name: 'coffee',
    hot: true,
    size: CoffeeSize.VENTI,
};
// Union
let union = 32;
let unionArray = [45, 'takaka', false, 54];
// literal
let literal = "literal";
const conslitera = "conslitera";
// union + literal == Enum 
let iceCoffee = {
    name: 'iceCoffee',
    hot: false,
    size: "SHORT",
};
let alias = 'large';
// type function
function typeFunc(num1, num2) {
    return num1 + num2;
}
function voidFunc(name, age) {
    console.log(name, age);
}
// func to let
let funcBox = typeFunc;
// callback
function doubleAndHandle(num, cb) {
    const doubleNumber = cb(num * 2);
    console.log(doubleNumber);
}
doubleAndHandle(2, doubleNum => {
    return doubleNum;
});
// unknown
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 23;
unknownInput = true;
text = anyInput; // unknownInput Error
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never
function error(message) {
    throw new Error(message);
    // while (true) {
    // }
}
console.log('This is an error');
