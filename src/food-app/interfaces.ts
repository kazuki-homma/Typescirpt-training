export interface Scorable {
  readonly totalScore: number;
  render(): void;
}

export interface Foodable {
  element: Element;
  clickEventHandler(): void;
}

export interface Foodsable {
  elements: HTMLCollectionOf<Element>;
  readonly activeElements: Element[];
  readonly activeElementsScore: number[];
}