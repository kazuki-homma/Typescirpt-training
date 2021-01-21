var person = {
    name: 'taketo',
    age: 13
};
var fruits = ['りんご', 'バナナ', 'ぶどう'];
var book = ['「吾輩は猫である」', 1200, true];
console.log(person.name + "\u306F" + person.age + "\u624D\u3067\u3059\u3002\u5F7C\u306F" + fruits[0] + "\u304C\u5927\u597D\u7269\u3067\u3059");
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.VENTI;
if (book[2]) {
    coffee.hot ?
        console.log("\u4ECA\u65E5" + book[0] + "\u3092" + book[1] + "\u5186\u3067\u8CB7\u3063\u305F\u305D\u3046\u3067\u3059\u3002\u307E\u305F\u30B9\u30BF\u30D0\u3067" + coffee.size + "\u30B5\u30A4\u30BA\u306E\u30B3\u30FC\u30D2\u30FC\u3092\u98F2\u3093\u3060\u305D\u3046\u3067\u3059\u3002")
        : console.log("\u4ECA\u65E5" + book[0] + "\u3092" + book[1] + "\u5186\u3067\u8CB7\u3063\u305F\u305D\u3046\u3067\u3059\u3002");
}
else {
    console.log('今日は何も買いませんでした');
}
