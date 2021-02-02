"use strict";
var even = [2, 4, 5];
var odd = [2, 4, 5];
var generateSomearray = function () {
    var _someArray = [];
    _someArray.push(123);
    _someArray.push("ABC");
    return _someArray;
};
var somearray = generateSomearray();
somearray.push(12);
console.log(somearray);
