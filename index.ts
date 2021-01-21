const person: {
    name: string;
    age: number;
} = {
    name: 'taketo',
    age: 13
}

const fruits: string[] = ['りんご', 'バナナ', 'ぶどう'];

const book: [string, number, boolean] = ['「吾輩は猫である」', 1200, true];

console.log(`${person.name}は${person.age}才です。彼は${fruits[0]}が大好物です`);

if (book[2]) {
    console.log(`今日${book[0]}を${book[1]}円で買ったそうです`);
} else {
    console.log('今日は何も買いませんでした');
}