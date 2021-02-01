// デコレーターを使ってフレームワークを作成する
   // htmlのidに特定の文字を表示する
   // classのnameを引き出すにはconstructorが必要だがそれをするにはinstanceの生成が必要 { new(): object }と言う型で
   // さらにそのobjectの中のnameなどを使う場合、objectを{ name: string } などにしなくてはいけない
   // constructorに引数があるときはデコレーターの型のnew()にも同じものを入れる。
   // いろいろなクラスに適応する場合は...args: any[]のようにすることでどのconstructorにも対応
   // デコレーターはいくつか作るとしたから上に実行される
   // デコレーターファクトリーは先に実行される（上から)
function Component(template: string, selector: string) {
    return function(constructor: { new(...args: any[]): {name: string} }) {
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1')!.textContent = instance.name;
        }
    }
}



@Component('<h1>{{ name }}</h1>', '#app')
class User2 {
    name = 'QQQuill'
    constructor() {
        console.log('User was created!');
    }
}

const user2 = new User2();