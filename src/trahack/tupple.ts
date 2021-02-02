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