var person = {
    name: 'taketo',
    age: 13
};
var fruits = ['りんご', 'バナナ', 'ぶどう'];
var book = ['「吾輩は猫である」', 1200, true];
console.log(person.name + "\u306F" + person.age + "\u624D\u3067\u3059\u3002\u5F7C\u306F" + fruits[0] + "\u304C\u5927\u597D\u7269\u3067\u3059");
if (book[2]) {
    console.log("\u4ECA\u65E5" + book[0] + "\u3092" + book[1] + "\u5186\u3067\u8CB7\u3063\u305F\u305D\u3046\u3067\u3059");
}
else {
    console.log('今日は何も買いませんでした');
}
