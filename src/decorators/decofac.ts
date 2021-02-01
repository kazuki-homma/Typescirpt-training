// デコレーターファクトリ-
   // デコレータによってパラメータの数が決まっている.それを操作するためにdecolator factoryを作る。
   // 関数の中に無名関数でデコレータを入れる。
function Llogging(message: string) {
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor);
    }
}

@Llogging('Logging user')
class User1 {
    name = 'QQuill'
    constructor() {
        console.log('User1 was created!');
    }
}

const user1 = new User1();