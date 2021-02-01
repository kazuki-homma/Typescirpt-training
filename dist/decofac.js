"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// デコレーターファクトリ-
// デコレータによってパラメータの数が決まっている.それを操作するためにdecolator factoryを作る。
// 関数の中に無名関数でデコレータを入れる。
function Llogging(message) {
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
var User1 = /** @class */ (function () {
    function User1() {
        this.name = 'QQuill';
        console.log('User1 was created!');
    }
    User1 = __decorate([
        Llogging('Logging user')
    ], User1);
    return User1;
}());
var user1 = new User1();
