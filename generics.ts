function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T{
    value[key];
    return value;
}

console.log(copy({ name: 'Quill', age: 38}, 'age'));
type K = keyof { name: string; age: number}

class LightDatabase<T extends string | number | boolean > {
    private data: T[] = [];
    add(item: T) {
      this.data.push(item);
    }
    remove(item: T) {
      this.data.splice(this.data.indexOf(item), 1)
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Apple');
console.log(stringLightDatabase.get());

interface TmpDatabace<T> {// type
    id: number;
    data: number[];
}

const tmpDatabace: TmpDatabace<number> = {
    id: 3,
    data: [32, 433, 443 ],
}

interface Todo {
    title: string;
    text: string;
}

type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
})
fetchData.then(data => {
    data.toUpperCase();
})

const vegetables: Array<string> = ['Tomato', 'Broccoly', 'Asparagas'];

interface ResponseData<T extends { message: string} = any> {
    data: T,
    status: number;
}

let tmp: ResponseData;

