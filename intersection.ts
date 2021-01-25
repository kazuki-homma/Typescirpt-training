interface Engineer {
    name: string;
    role: string;
}

interface Blogger {
    name: string;
    follower: number;
}

// type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {

}

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'FrontEnd',
    follower: 1000,
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function tooUpperCase(x: string): string;
function tooUpperCase(x: number): number;

function tooUpperCase(x: string | number): string | number{
    if (typeof x === 'string') {
      x.toUpperCase();
    }
    return '';
}
const upperHello = tooUpperCase('hello');

type NomadWorker = Engineer | Blogger;
function describeNomadWorkerProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
      console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
      console.log(nomadWorker.follower);
  }
}

class Dog {
    kind: 'dog' = 'dog';
    speak() {
        console.log('bow-wow');
    }
}

class Bird {
    kind: 'bird' = 'bird';
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch(pet.kind) {
        case 'bird': 
          pet.fly();
        case 'dog':
          
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}

havePet(new Dog());

// const input = <HTMLInputElement>document.getElementById('input');
// const input = document.getElementById('input') as HTMLInputElement;
// input.value = 'initial input value';

// (document.getElementById('input') as HTMLInputElement).value = 'initial input value';

const input = <HTMLInputElement>document.getElementById('input')!;


interface Designer {
    name: string;
    [index: string]: string;
}
const designer: Designer = {
    name:'QUill',
    role: 'afa',
    fafa: 'fafa',
}
