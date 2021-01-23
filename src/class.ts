class Person {
    readonly id: number = 32;
    constructor(public readonly name: string, protected age: number) {
        this.id = 31;
        this.name = 'hehh';
    }

    incrementAge() {
        this.age += 1;
    }

    greeting(this: Person) {
        console.log(`hello, I'm ${this.name}. I am ${this.age} years old.`);
    }
}

class Teacher extends Person {
  get subject(): string {
      if (!this._subject) {
          throw new Error('There is no subject.');
      }
      return this._subject;
  }
  set subject(value) {
      if (!value) {
          throw new Error('There is no subject.');
      }
      this._subject = value;
  }

  constructor(name: string, age: number, private _subject: string) {
      super(name, age);
  }
}

const teacher = new Teacher('Quill', 45, 'Math');
teacher.greeting();