"use strict";
class Score {
}
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('food--active');
    }
}
class Foods {
    constructor() {
        this.elements = document.getElementsByClassName('food');
        const foods = Array.from(this.elements);
        foods.forEach(element => {
            new Food(element);
        });
    }
}
const foods = new Foods();
console.log(foods.elements);
