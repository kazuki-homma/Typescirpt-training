"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggingProperty(target, propertyKey) {
    console.log('propertyLoggin');
    console.log(target);
    console.log(propertyKey);
}
var User4 = (function () {
    function User4(age) {
        this.age = age;
        this.name = "kkkx";
        console.log('谷保明日');
    }
    User4.name2 = "kkkx";
    __decorate([
        LoggingProperty
    ], User4, "name2", void 0);
    return User4;
}());
var user4 = new User4(6);
