(() => {

  function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

  /* readonly */
  interface ReadonlyPerson {
    readonly name: string;
  }
  const person: ReadonlyPerson = {
    name: "George"
  }

  /* error */
  // person.name = 222;


  /* ReadonlyArray<T> */
  const readonlyArr: number[] = [1, 55, 5];
  const readonlyArrExp: ReadonlyArray<number> = readonlyArr;
  /* error */
  // readonlyArrExp[1] = 1


  /* 额外的属性检查 */
  // interface SquareConfig {
  //   color?: string;
  //   width?: number;
  // }

  // function createSquare(config: SquareConfig): { color: string; area: number } {
  //   // ...
  // }

  // let mySquare = createSquare({ colour: "red", width: 100 }); // 不能给一个目标类型没有的属性

  // 最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。 
  // 如果 SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：
  // interface SquareConfig {
  //   width?: number;
  //   color?: string;
  //   [propName: string]: any // 带有任意数量的其他属性
  // }

  // const config: SquareConfig = {
  //   a: 2,
  //   color: '#555',
  //   width: 222,
  // }

  /* 下面这种情况编译器不会报错 */
  // interface SquareConfig {
  //   color?: string;
  //   width?: number;
  // }

  // function createSquare(config: SquareConfig): { color: string; area: number } {
  //   // ...
  // }
  // let squareOptions = { colour: "red", width: 100 };
  // let mySquare = createSquare(squareOptions);


  /* 函数类型声明 */
  // interface ISearchFunc {
  //   (source: string, subString: string): boolean
  // }

  // const search: ISearchFunc = function (source: string, subString: string): boolean { // 参数类型如果加上类型,就会检测
  //   let result = source.search(subString);
  //   return result > -1;
  // }

  /* 可索引的类型 */
  // interface StringArray {
  //   [index: number]: string;
  // }
  // let arr: StringArray = [555]/* error */
  // let arr: StringArray = ['George']/* right */
  // let str: number = arr[0] /* error */
  // let str: string = arr[0] /* right */

  // class Animal {
  //   name: string;
  // }

  // class Dog extends Animal {
  //   breed: string;
  // }
  // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
  // interface NotOkay {
  //   [x: number]: Animal;/* error */
  //   [x: string]: Dog
  // }

  // interface NumberDictionary {
  //   [index: string]: number;
  //   length: number; // 可以，length是number类型
  //   name: number; // 可以，length是number类型
  //   // name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
  // }

  // interface ReadonlyStringArray {
  //   readonly [index: number]: string;
  // }
  // let myArray: ReadonlyStringArray = ["Alice", "Bob"];
  // myArray[2] = "Mallory"; // error! 不能设置myArray[2]，因为索引签名是只读的。


  /* 类类型 */
  interface IClock {
    currentTime: Date;
    setTime(time: Date): Date
  }

  class Clock implements IClock {

    currentTime: Date;

    setTime(time: Date): Date {
      this.currentTime = time;
      return time;
    };

    constructor() {
      this.currentTime = new Date()
    }
  }

})()

export default {}