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

enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.VENTI;

if (book[2]) {
    coffee.hot ? 
      console.log(`今日${book[0]}を${book[1]}円で買ったそうです。またスタバで${coffee.size}サイズのコーヒーを飲んだそうです。`)
    : console.log(`今日${book[0]}を${book[1]}円で買ったそうです。`);
} else {
    console.log('今日は何も買いませんでした');
}