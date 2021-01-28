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
        this._activeElements = [];
        this._activeElementsScore = [];
        const foods = Array.from(this.elements);
        foods.forEach(element => {
            new Food(element);
        });
    }
    get activeElements() {
        this._activeElements = [];
        const foods = Array.from(this.elements);
        foods.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
}
const foods = new Foods();
