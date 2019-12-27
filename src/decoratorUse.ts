
import "reflect-metadata";

/* 方法装饰器 */
function f() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
    console.log(target, propertyKey, descriptor)
    return target[propertyKey]
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
    return target[propertyKey]
  }
}

class C {
  @f()
  @g()
  method() { }
}

let newC = new C();
console.log(newC)


function configurable(value): Function {
  return function (target, key: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  }
}

function enumerable(value): Function {
  return function (target, key: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}
/* 访问器装饰器 */
(function a() {
  class Point {

    private _x: number;

    constructor(x: number) {
      this._x = x;
    }

    @configurable(false)
    get x() {
      console.log('invoke x get')
      return this._x;
    }

    set x(value) {
      this._x = value
    }

    /* y 不會被枚舉 */
    @enumerable(false)
    get y() {
      return this._x * this._x;
    }
  }

  let a = new Point(12)
  console.log(a, a.x)
  a.x = 222;
  console.log('2', a.x)
  for (const key in a) {
    console.log(a[key], key)
  }
})();
/* 属性装饰器 */
; (() => {
  /* import "reflect-metadata"; */

  const formatMetadataKey = Symbol("format");

  function formate(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString)
  }

  function getFormate(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey)
  }


  class Greeter {
    @formate('hello, %s')
    greeting: string;

    constructor(msg: string) {
      this.greeting = msg;
    }

    greet() {
      let formating = getFormate(this, 'greeting');
      return formating.replace('%s', this.greeting)
    }
  }

  const greeter = new Greeter('george')

  console.log(greeter.greet());
})()


// --------------------------------------
/* 函数重载 */
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any[] | number): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);

    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

/* 类的装饰器 重写constructor ,添加新的属性和重写属性,  */
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class MyClass extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter("world"));
export default {

};