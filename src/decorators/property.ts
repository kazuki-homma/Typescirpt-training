// プロパティの上に要素をつけることによってその要素にデコレーションできる
// プロパティデコレーターは引数を二つとる
// クラスデコレーターよりも先に実行される

function LoggingProperty(target: any, propertyKey: string) {
  console.log('propertyLoggin');
  console.log(target);
  console.log(propertyKey);
}

class User4 {
    @LoggingProperty
    static name2 = "kkkx"
    name = "kkkx"
    constructor(public age: number) {
        console.log('谷保明日');
    }
}

const user4 = new User4(6);