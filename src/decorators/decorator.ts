// udemy

// デコレーターとはClassにつけられる関数のこと
    // tsconfig.jsonのexperimental decolatorをtrueにする必要がある。(将来的にjsに実装されるため)
    // クラスにデコレーションするかメソッドにデコレーションするかによって書く場所が変わる
    // クラスデコレーターはインスタンスではなく、クラス定義時に実行される。
function Logging(constructor: Function) {
    console.log('logging');
}

@Logging
class User {
    name = 'Quill';
    constructor() {
        console.log('User was created!');
    }
}

const user = new User();

// 複数のデコレーターを同時に使う

// 戻り値にクラスを指定して新しいClassを作る

// プロパティデコレーターを使う方法

// メソッドデコレータ & PropertyDescripter

// アクセサーデコレーター

// パラメータデコレーター
