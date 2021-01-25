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

function toUpperCase(x: string | number) {
    if (typeof x === 'string') {
      x.toUpperCase();
    }
    return '';
}

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
    if (pet instanceof Bird) {
        pet.fly();
    }
}

havePet(new Dog());
