/* 可选参数和 默认参数 */
// function foo(name: string, age?: number): string {
//   return name + age
// }
// 默认参数
// function fooA(name: string, age = 0) {
// }

// 剩余参数
// function restArgumentFunc(number: number, ...args: any[] | string[]) {
// }

// noImplicitThis
// interface Card {
//   suit: string;
//   card: number;
// }

// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card // 制定this 是某个 Dect 对象上调用
// }

// let deck: Deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker() {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);
//       const card: Card = { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//       return card
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// let pickedCard1 = cardPicker();
// console.log(pickedCard)
// console.log(pickedCard1)

/* interface 会自动合并,但不建议这么做 */
// interface Card {
//   suit: string;
// }

// interface Card {
//   card: number;
// }
// let card: Card = {
//   suit: '222',
//   card: 22
// }

// interface UIElement {
//   /* onclick 作为参数传入 */
//   /* this 为void 意味着 addClickListener 希望 onclick 是一个不需要this 的函数 另外注释你的调用代码*/
//   addClickListener(onclick: (this: void, event: Event) => void): void
// }

// // class Handler {
// //   info: string;
// //   onClickBad(this: Handler, e: Event) {
// //     // oops, used this here. using this callback would crash at runtime
// //     this.info = e.type;
// //   }
// // }

// let uiElement: UIElement = {
//   addClickListener(onclick: (this: void, event: Event) => void) {
//     return
//   }
// };
// // let h = new Handler();
// // uiElement.addClickListener(h.onClickBad) /* error */

// class Handler {
//   info: string;
//   onClickGood(this: void, e: Event) {
//     // can't use this here because it's of type void!
//     console.log('clicked!');
//   }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood)

// 因为onClickGood指定了this类型为void，因此传递addClickListener是合法的。 
// 当然了，这也意味着不能使用 this.info. 如果你两者都想要，你不得不使用箭头函数了
// class Handler {
//   info: string;
//   onClickGood = (e: Event) => { this.info = e.type }
// }

/* 函数重载 */
// let suits = ["hearts", "spades", "clubs", "diamonds"]
// function pickCard(x: { suit: string; card: number }[]): number;
// function pickCard(x: number): { suit: string; card: number };
// function pickCard(x): any {
//   // Check to see if we're working with an object/array
//   // if so, they gave us the deck and we'll pick the card
//   if (typeof x == "object") {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   }
//   // Otherwise just let them pick the card
//   else if (typeof x == "number") {
//     let pickedSuit = Math.floor(x / 13);
//     return { suit: suits[pickedSuit], card: x % 13 };
//   }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);