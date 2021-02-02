//　以下二つの型定義方法は同義
const even: Array<number> = [2, 4, 5];
const odd: number[] = [2, 4 , 5 ];

const generateSomearray = () => {
    const _someArray = [];
    _someArray.push(123);
    _someArray.push("ABC");
    return _someArray;// union型になっている
}

const somearray = generateSomearray();
somearray.push(12);
//somearray.push(true); error

console.log(somearray);

// immutable tupple
const commands: readonly string[] = ["git add", "git commit", "git push" ];

const numbers : ReadonlyArray<number> = [1, 2, 3];
const names: Readonly<string[]> = ["ttt", "ppp"];