"use strict";
// udemy
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// デコレーターとはClassにつけられる関数のこと
// tsconfig.jsonのexperimental decolatorをtrueにする必要がある。(将来的にjsに実装されるため)
// クラスにデコレーションするかメソッドにデコレーションするかによって書く場所が変わる
// クラスデコレーターはインスタンスではなく、クラス定義時に実行される。
function Logging(constructor) {
    console.log('logging');
}
var User = /** @class */ (function () {
    function User() {
        this.name = 'Quill';
        console.log('User was created!');
    }
    User = __decorate([
        Logging
    ], User);
    return User;
}());
var user = new User();
// デコレーターを使ってフレームワークを作成する
// 複数のデコレーターを同時に使う
// 戻り値にクラスを指定して新しいClassを作る
// プロパティデコレーターを使う方法
// メソッドデコレータ & PropertyDescripter
// アクセサーデコレーター
// パラメータデコレーター
