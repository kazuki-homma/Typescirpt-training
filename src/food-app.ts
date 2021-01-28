class Score { }
class Food {
    constructor(public element: Element) {
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('food--active');
    }
 }
class Foods {
    elements = document.getElementsByClassName('food');
    constructor() {
        const foods = Array.from(this.elements);
        foods.forEach(element => {
            new Food(element);
        });
    }
}

const foods = new Foods();
console.log(foods.elements);
