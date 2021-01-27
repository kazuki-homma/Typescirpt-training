function Logging(message: string) {
    return function (constructor: Function) {
        console.log( message)
        console.log(constructor);
    }
}

function Component(template: string, selector: string) {
    return function <T extends { new(...args: any[]): {name: string}}>(constructor: T) {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1')!.textContent = instance.name;
                }
            }
        }
    }
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('PropertyLoggin');
  console.log(target);
  console.log(propertyKey);

}

function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('MethodLoggin');
    console.log(target);
    console.log(propertyKey);
    console.log(propertyKey);
}

function enumerable(isEnumerable: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      return {
          enumerable: isEnumerable
      }
  }
}

function AccesorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('MethodLoggin');
    console.log(target);
    console.log(propertyKey);
    console.log(propertyKey);
}

@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging User')
class User {
    @PropertyLogging
    static name2 = 'QQQ';
    name = "Quill";
    constructor(private _age: number) {
        console.log('User was created!');
    }
    @AccesorLogging
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    @enumerable(false)
    @MethodLogging
    greeting() {
        console.log('hello');
    }
}

const user1 = new User(32);
