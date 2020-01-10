(() => {
  /* 类 */
  /* 继承 */
  // class Animal {
  //   feet: number;
  // }
  // class Dog extends Animal {
  //   bark(): void {
  //     this.feet = 4
  //     console.log("woof", this.feet)
  //   }
  // }
  // let husky: Dog = new Dog()
  // husky.bark();

  // ----------------------------------------------------------
  /* extends 继承  super 调用超类的方法 */
  // class Animal {
  //   name: string;
  //   total: number = 0;
  //   constructor(tName: string) {
  //     this.name = tName;
  //   }
  //   move(distance: number): void {
  //     this.total += distance;
  //   }
  // }

  // class Snake extends Animal {
  //   constructor(name: string) {
  //     super(name)
  //   }
  //   move(distance: number = 10) {
  //     super.move(distance)
  //   }
  // }

  // let s = new Snake('Jack');
  // s.move(20)
  // s.move(10)
  // console.log(s.total)

  /* public private protect */
  // class Animal {
  //   public name: string;
  //   public total: number = 0;
  //   public constructor(name: string) {
  //     this.name = name;
  //   }
  //   public move(distance: number) {
  //     this.total += distance;
  //   }
  // }

  // class Animal {
  //   private name = "animal"
  //   constructor(name) {
  //     this.name = name;
  //   }
  // }

  // class Tiger extends Animal {
  //   constructor(name: string) {
  //     super(name);
  //     // this.name = 'tiger';/* error 不允许修改*/
  //   }
  // }

  // let animal = new Animal('tiger')
  // animal.name = 'cat' // error 不允许修改

  // class Animal {
  //   private name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }
  // }

  // class Tiger extends Animal {
  //   constructor() {
  //     super('Tiger')
  //   }
  // }

  // class Cat {
  //   private name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }
  // }

  // let animal = new Animal('Snake')
  // let tiger = new Tiger()
  // let cat = new Cat('jacky')
  // animal = tiger;
  // animal = cat;/* error Animal 与 Cat 不兼容. */


  /* protected */
  // class Person {
  //   protected name: string;
  //   constructor(name: string) {
  //     this.name = name;
  //   }
  // }

  // class Employee extends Person {
  //   private department: string;
  //   constructor(name: string, department: string) {
  //     super(name)
  //     this.department = department;
  //   }

  //   public getElevatorPitch() {
  //     return 'name:' + this.name + " | dep:" + this.department;
  //   }
  // }

  // let georage = new Employee('georage', 'engineer')
  // console.log(georage.getElevatorPitch())
  // 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。
  // console.log(georage.name); // 错误 属性“name”受保护，只能在类“Person”及其子类中访问。

  // 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。

  // class Person {
  //   protected name: string;
  //   protected constructor(theName: string) { this.name = theName; }
  // }

  // // Employee 能够继承 Person
  // class Employee extends Person {
  //   private department: string;

  //   constructor(name: string, department: string) {
  //     super(name);
  //     this.department = department;
  //   }

  //   public getElevatorPitch() {
  //     return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  //   }
  // }

  // let howard = new Employee("Howard", "Sales");
  // let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的

  //  readonly修饰符
  // 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
  // class Option {
  //   readonly name: string = 'name';
  //   readonly number: number = 80;
  //   constructor(number: number) {
  //     this.number = number
  //   }
  // }

  // let option = new Option(22);
  // option.name = "333" // Cannot assign to 'name' because it is a read-only property


  /* setter getter */
  // let passcode = "secret passcode";

  // class Employee {
  //   private _fullName: string;

  //   get fullName(): string {
  //     return this._fullName;
  //   }

  //   set fullName(newName: string) {
  //     if (passcode && passcode == "secret passcode") {
  //       this._fullName = newName;
  //     }
  //     else {
  //       console.log("Error: Unauthorized update of employee!");
  //     }
  //   }
  // }

  // let employee = new Employee();
  // employee.fullName = "Bob Smith";
  // if (employee.fullName) {
  //   alert(employee.fullName);
  // }


  /* 静态属性 */
  // 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
  // 在这个例子里，我们使用 static定义 origin，因为它是所有网格都会用到的属性。
  // 每个实例想要访问这个属性的时候，都要在 origin前面加上类名。 
  // 如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。
  // class Grid {
  //   static origin = { x: 0, y: 0 }
  //   public scale: number = 1;
  //   calculateDistanceFromOrigin(point: { x: number, y: number }) {
  //     let xDist = (point.x - Grid.origin.x);
  //     let yDist = (point.y - Grid.origin.y);
  //     return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)) / this.scale;
  //   }
  //   constructor(scale) {
  //     this.scale = scale;
  //   }
  // }
  // console.log(Grid.origin)

  // let grid1 = new Grid(1.0);  // 1x scale
  // let grid2 = new Grid(5.0);  // 5x scale

  // console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
  // console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

  /* 抽象类 */
  // abstract class Animal {
  //   abstract makeSound(): void;
  //   move(): void {
  //     console.log('move to...')
  //   }
  // }
  // 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
  // 抽象方法的语法与接口方法相似。 
  // 两者都是定义方法签名但不包含方法体。 
  // 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
  // abstract class Department {
  //   constructor(public name: string) {
  //   }
  //   printName(): void {
  //     console.log(this.name);
  //   }

  //   abstract printMeeting(): void;
  // }
  // class AccountingDepartment extends Department {
  //   constructor() {
  //     super('account') // 在派生类中必须调用super()
  //   }

  //   printMeeting() {
  //     console.log(this.name)
  //   }

  //   generateRepo(): void {
  //     console.log('reporting ...')
  //   }
  // }

  // let department: Department;
  // // department = new Department();// 错误: 不能创建一个抽象类的实例
  // department = new AccountingDepartment()// 允许对一个抽象子类进行实例化和赋值

  // department.printName();
  // department.printMeeting();
  // // department.generateRepo(); // 错误: 方法在声明的抽象类中不存在 由 let department : Department; 决定了

  


})()