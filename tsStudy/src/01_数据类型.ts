//布尔型
let a: boolean = true;
a = false;
//下面这种写法是错误的，new Boolean(0)是一个对象
//不能将类型“Boolean”分配给类型“boolean”。
//“boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。ts(2322)
//let b:boolean = new Boolean(0)
let b = Boolean(1)
console.log(a, b)

//数字类型
let a1: number = 0;
let b1: number = NaN
console.log(a1, b1)


//字符串类型

let a2: string = 'hello world'
console.log(a2)


//undefined和null

let u: undefined = undefined;
let n: null = null;
console.log(n, u)
//nudefined 和 null 都可以作为其他类型的子类型，把undefined和null赋值给其他变量。

let num1: number = null;

console.log(num1)

//数组类型
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3, 4, 5, 6]
console.log(arr1, arr2)

//元组类型
//在定义数组的时候，类型和数据的个数一开始就确定了
let arr3: [string, number] = ['0', 1]
console.log(arr3)

//枚举类型

enum Color {
    red,
    green,
    yellow,
    blue
}

let color: Color = Color.red;
console.log(Color[3])
console.log(color)

//any类型
let any1: any = 1;
any1 = 'abc';
any1 = [1, 2, 3]
console.log(any1)

//void类型
//该函数无返回值
function showMsg(): void {
    console.log('hello,world')
}

//object 类型
//参数和返回值都是object
function getObj(obj: object): object {
    console.log(obj)
    return {
        name: '张三',
        age: 40
    }
}
console.log(getObj({}))


//联合类型

function getString(str: string | number) {
    console.log(str)
    return str.toString()
}

//类型断言
function getStrLength(str: string | number) {
    if ((<string>str).length) {
        return (str as string).length
        // return (<string>str).length
        //或 return (str as string).length
    } else {
        return str.toString().length
    }
}

//类型推断
let txt = 100;
//txt = true 报错
console.log(txt)
//ts中变量一开始是什么类型，那么后期赋值时，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前变量的。

