interface Scorable {
  readonly totalScore: number;
  render(): void;
}

interface Foodable {
  element: Element;
  clickEventHandler(): void;
}

interface Foodsable {
  elements: HTMLCollectionOf<Element>;
  readonly activeElements: Element[];
  readonly activeElementsScore: number[];
}