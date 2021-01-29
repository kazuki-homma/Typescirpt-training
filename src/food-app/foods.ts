import { Foodsable } from './interfaces.js';
import { Food } from './food.js';

export class Foods implements Foodsable{
  private static instance: Foods = Foods.getInstance();
  elements = document.getElementsByClassName('food');
  private _activeElements: Element[] = [];
  private _activeElementsScore: number[] = [];

  get activeElements() {
    this._activeElements = [];
    const foods = Array.from(this.elements);
    foods.forEach(element => {
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element);
      }
    })
    return this._activeElements;
  }

  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    })
    return this._activeElementsScore;
  }

  private constructor() {
    const foods = Array.from(this.elements);
    foods.forEach(element => {
      new Food(element);
    });
  }

  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
}