#  TypeScript基础知识

## 1. 数据类型

### 1. 基本数据类型

```ts
//字符串类型
let str:string='hello world'
//数字类型
let num:number = 123
//布尔值
let b:boolean  = true
//undefined
let u:undefined = undefined
//null
let n:null = null
//bigint
let big:bigint = 100n;
symbol
let sym:symbol = Symbol('1')
```
**注意点**

> null和undefined是所有类型的子类型，非严格模式下可以把null和undefined赋值给其他类。
> tsconfig.json指定了"strictNullChecks":true 时表示开启严格模式，null 和 undefined 只能赋值给 void 和它们各自的类型。
### 2. 其它类型
1. object
```ts
let obj:object
obj = {name:typescript}
obj = 123             // error 不能将类型“123”分配给类型“object”
console.log(obj.name) // error 类型“object”上不存在属性“name”
```
2. array
```ts
let arr1:number[]=[1,2,3]
let arr2:Array<number>=[1,2,3]
```
3. tuple元组
元组可以看作是数组的扩展，它表示已知元素数量和类型的数组，特别适合用于实现多值返回。确切的说，就是已知数组中每一个位置上的元素的类型，可以通过元组的索引为元素赋值
```ts
let arr:[number,string,boolean]
arr = [1,'2',false]
arr[1]=997
```
4. function
```ts
//函数声明
function sum(x:number,y:number):number{
   return x+y
}

//函数表达式
let mySum:(x:number,y:number)=>number = function(x: number, y: number): number {
    return x + y;
};

//使用接口定义函数
interface sumFunc{
 (x:number,y:number):number
}
let getSum:sumFunc = (x:number,y:number)=>{
  return x+y
}

//可选参数
function getName(firstName:string,lastName?:string){
   if(lastName){
     return firstName+' ' +lastName
   }else{
     return firstname
   }
}

//参数默认值
function getNameDef(firstName:string,lastName:string='保国'){
     return firstName+' ' +lastName
}

//剩余参数
funnction push(arr:any[],...items:any[]){
     items.forEach(function(item){
       arr.push(item)
     ]);
}
```
5. any
```ts
//不清楚一个值是什么类型时可以使用any类型，可以绕过typescript的静态类型检测
let value:any
value=1
value= false
value = [1,2,3]
//需要注意，不要滥用any类型 typescript无法检测其属性是否存在，类型是否正确。
```
6. void
```ts
//void与any相反，any表示任意类型，void表示没有类型，一般在定义函数，函数没有返回值时用到
const consoleFnc = (txt:string):void=>{
  console.log(txt)
}
```
7. never
```ts
//never类型指永远不存在值的类型，它是那些总会抛出异常或根本不会有返回值的函数表达式的返回值类型，当变量被永不为真的类型保护所约束时，该变量也是 never 类型。
const errorFunc = (message: string): never => {
   throw new Error(message); 
};

let neverVariable = (() => {
   while (true) {} 
})();
neverVariable = 123; // error 不能将类型"number"分配给类型"never"   
//上面代码定义了一个立即执行函数，函数体是一个死循环，这个函数调用后的返回值类型为 never，所以赋值之后 neverVariable 的类型是 never 类型，当给neverVariable 赋值 123 时，就会报错，因为除它自身外任何类型都不能赋值给 never 类型。
```
8. unknown
```ts
//unknown 是TypeScript在3.0版本新增的类型，主要用来描述类型并不确定的变量。
//当指定值为unknown类型的时候，如果没有缩小类型范围的话，是不能对它进行任何操作的。总之，unknown类型的值不能随便操作。
//缩小类型的例子
let res:unknown
res = 100
if(typeof reesult==='number'）{
console.log(result.toFixed())
}

//任何类型的值都可以赋值给unknown类型，unknown不可以赋值给其它类型，只能赋值给unknown和any类型
```
9. enum
```ts
enum Colors {
red,
green,
blue
}
console.log(Colors.red) //0
console.log(Colors[1]) //green
//可以给枚举值赋值，
enum  Roles {
admin  = 2
user    //这样的话user的值就是3
````
## 2. 接口
在TypeScript中，我们使用接口(interface)定义对象的类型。

在面向对象语言中，**接口**（interface）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由**类**（class）去**实现**（implement）。

简单的例子
```ts
interface Person{
    redonly name:string,//只读属性
    age?:number//可选属性，可不存在
    [propName:string]:any//任意属性 
}
let person:Person = {
  name:'张三',
  age:20,
  id:1
}
//此处需要注意，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
//一个接口中只能定义一个任意属性，如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
interface IPerson {
    name: string;
    age?: number; // 这里真实的类型应该为：number | undefined
    [propName: string]: string | number | undefined;
}
let person1:IPerson = {
  name:'张三',
  age:20,
  id:1
}
```
## 3. 泛型

```typescript
function identity<T>(arg:T):T{
   return arg
}
```
上方代码中 **T**代表**Type**,在定义泛型时通常用作第一个类型变量名称。但实际上**T**可以使用任何有效名称替代。除了**T**之外，以下是常见泛型变量的代表的意思：

>  K（Key）：表示对象中的键类型；   
>  V（Value）：表示对象中的值类型； 
>  E（Element）：表示元素类型。

**泛型约束**

```typescript
function trace<T>(arg: T): T {
  console.log(arg.size); // Error: Property 'size doesn't exist on type 'T'
  return arg;
}
```
报错的原因在于 T 理论上是可以是任何类型的，不同于 any，你不管使用它的什么属性或者方法都会报错（除非这个属性和方法是所有集合共有的）。那么直观的想法是限定传给 trace 函数的参数类型应该有 size 类型，这样就不会报错了。

```typescript
interface Sizeable {
  size: number;
}
function trace<T extends Sizeable>(arg: T): T {
  console.log(arg.size);
  return arg;
}
```
**泛型工具类型**
1.  typeof
typeof 的主要用途是在类型上下文中获取变量或者属性的类型
```typescript
interface Person {
  name: string;
  age: number;
}
const sem: Person = { name: "semlinker", age: 30 };
type Sem = typeof sem; // type Sem = Person
可以使用type Sem
const lolo: Sem = { name: "lolo", age: 5 }
```

2. keyof
keyof操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
```typescript
interface Person {
  name: string;
  age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [x: string]: Person };  // string | number
```

3. in

```typescript
type Keys = "a" | "b" | "c"

type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }
```

4. infer
在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用。

```typescript
type ReturnType<T> = T extends (
  ...args: any[]
) => infer R ? R : any;
```
以上代码中 infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。
5. extends

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

