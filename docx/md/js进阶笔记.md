# ES6与高级

> 2021.9.11

## class类的使用

类的本质就是function函数

在ES6中声明类用class关键字

1. ES6中类没有变量提升，所以必须先定义类，才能实例化对象
2. 类里面的共有属性和方法在内部调用，一定要加this使用
3. constructor构造函数的this指向实例对象，方法里的this指向方法调用者(下面有案例)

创建类

```javascript
//创建一个类的格式
class 类名 {
    //constructor是构造函数，即使不写，也会自动创建
	constructor(user,age){
        //共用的属性放这里
		this.user = user;	//this必须加，指向的是创建的实例对象
		this.age = age
	}
    //类中的方法
	方法1(){} 	//实例对象访问
	方法2(){}
    // 静态属性，只能由构造函数访问(类名)
    lang = "abc"
    // 静态方法
    static 方法3(){}
}
//调用类
var ldh = new 类名('李得还',18);
ldh.方法1();
类名.方法3();
```

继承类

```javascript
class Father {}	//父类
class Son extends Father{}	//子类，extends为关键字，代表Son继承Father
```

super关键字调用父类的函数，构造函数

```js
//父类
class Father {
	say(){
		return '父类'
	}
}
//子类继承父类
class Son extends Father {
    say(){
        return super.say();	//调用父类的方法，将super当对象调用
    }
}
//继承中，优先执行子类的方法，先看子类是否有该方法，如果没有则去执行父类中的该方法
```

super关键字调用父类的构造函数

```javascript
//父类
class Father {
    constructor(x,y){
		this.x = x;
        this.y = y;
    }
    sum(){
    	console.log(this.x + this.y);
    }
}
//子类继承父类
class Son extends Father {
	constructor(x,y){
		super(x,y)	//，参数传入父类构造函数，调用了父类中的构造函数，将super当方法用
	}
    say(){
        return super.say();	//调用父类的方法，将super当对象调用
    }
}
```

子类继承父类的方法，同时拥有自己的方法

```javascript
//父类
class Father {
    constructor(x,y){
		this.x = x;
        this.y = y;
    }
    sum(){
    	console.log(this.x + this.y);//必须加this.
    }
}
//子类继承父类
class Son extends Father {
	constructor(x,y){
        //利用super 调用父类的构造函数
		super(x,y);	//super 必须先调用父类构造方法，在使用子类构造方法
        //相当于 先有父类，在有子类
        this.x = x;
        this.y = y;
	}
    subtract(){
        console.log(this.x - this.y)
    }
}
```

constructor构造函数的this指向实例对象，方法里的this指向方法调用者

```html
<button>点击</button>
<script>
    class Father {
        constructor(user) {
            this.user = user;
            this.btn = document.querySelector('button');
            this.btn.onclick = this.sing;//绑定点击事件
        }
        sing(){
            //当点击按钮后，这里的this指向的是btn按钮
            console.log(this);
            console.log(this.user); //btn按钮中没有该属性，所以会报错，无法输出abc
        }
         dance(){
             //这里的this指向的是实例对象 ldh，因为是ldh调用了这个方法
            console.log(this.user);
        }
    }
    var ldh = new Father('abc');
    ldh.dance()
</script>
```



## 原型对象

**构造函数原型 prototype**

构造函数通过分配的函数是所有对象所共享的

js规定，每一个构造函数都有一个prototype属性，指向另一个对象，这个prototype就是个对象，这个对象的所有属性和方法都会被构造函数拥有

可以把那些不变的方法，直接定义在prototype对象上，这样所有对象的实例都可以共享这些方法，也节省了内存空间

```js
function Star(uname,age){
    this.uname = uname;
    this.age = age;
    //this.sing = function(){ console.log("哈哈哈") }
}
//将方法放到prototype对象上，节省空间
Star.prototype.sing = function(){  console.log("哈哈哈123") }
//初始化实例对象
let ldh = new Star('ddd', 18);
let adh = new Star('aaa', 18);
console.log(ldh.sing == adh.sing);	//true,比较的是地址
console.log(Star.prototype); //构造函数对象
console.log(ldh.__proto__); //实例化对象
```

**实例对象原型proto**

```
实例化的对象都会有一个__proto__对象，对象原型对象__proto__指向构造函数的prototype原型对象
意义在于为对象的查找机制提供一个方向，实际开发中不使用这个属性(目前浏览器已不显示)
```

静态成员：在构造函数上添加的成员为静态成员，只能由构造函数本省来访问

实例成员：在构造函数内部创建的成员为实例成员，只能由实例化的对象来访问

js的成员查找机制

```
1.当访问一个对象属性(方法)时，先查找对象自身是否有该属性
2.如果没有就查找它的原型，也就是__proto__指向的prototype原型对象
```

**constructor构造函数**

```
对象原型(__proto__)和构造函数(prototype)原型对象里面都有个属性constructor属性，称为构造函数，因为它指向构造函数本身
constructor主要记录对象引用于哪个构造函数，可以让原型对象指向原来的构造函数
```

```javascript
function Star(uname, age) {
	this.uname = uname;
	this.age = age;
}
//将方法放到prototype对象上
Star.prototype.sing = function () {
	console.log("哈哈哈123" + this.uname);
}
var ldh = new Star('ddd', 18);
console.log(Star.prototype.constructor); //输出的就是构造函数
console.log(ldh.__proto__.constructor); //输出的就是构造函数
```

有些情况下，需要手动将constructor属性指向原来的构造函数

```javascript
//将方法放到prototype对象上
//对象的写法，相当于覆盖了原先的prototype对象
Star.prototype = {
    //覆盖了，所以需要重新指向原来的构造函数
	constructor: Star,
    // 声明的静态方法
	sing: function(){
		console.log("唱歌");
	},
	movie: function(){
		console.log("演电影");
	}
}
```

**构造函数，实例，原型对象三者之间的关系**

```
Star构造函数 》 Star原型对象prototype 》 Star构造函数
Star构造函数 》 ldh对象实例 》 Star原型对象prototype 》 Star构造函数
```

**原型链**

> 成员查找机制，实现继承

```
实例对象__proto__指向
Star构造函数 》 ldh对象实例 》 Star原型对象prototype 》 Object原型对象 》 null
```



## 扩展内置方法

通过原型对象的原理，可以给内置对象增加自定义方法

// 给Array对象添加个求和方法

```
//给Array内置对象添加求和方法
Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}
// 调用添加的求和方法
let arr = [10, 20, 30];
console.log(arr.sum()); //60
```

内置的方法都存在原型对象上



## 继承

借用构造函数继承父类型属性

```javascript
 // 父构造函数
function Father(uname,age){
	this.uname = uname;
	this.age = age;
}
// 子构造函数
function Son(uname,age){
	 // this 指向子构造函数的对象实例
	 Father.call(this,uname,age);	//调用父构造函数,并将父构造函数的this指向Son，并将两个属性传递进去，此时Son已经拥有这两个属性了,也就是继承
}
var son = new Son('ldh',18);
console.log(son)
```

借用构造函数继承父类型方法(原型继承)

```javascript
// 父构造函数
function Father(uname, age) {
    this.uname = uname;
    this.age = age;
}
//添加到原型上的方法
Father.prototype.money = function () {
    console.log(10000);
}
// 子构造函数
function Son(uname, age) {
    // this 指向子构造函数的对象实例
    Father.call(this, uname, age);	//调用父构造函数,并将父构造函数的this指向Son，并将两个属性传递进去，此时Son已经拥有这两个属性了,也就是继承
}
// 继承父构造函数原型对象的方法
// 将子原型对象指向 父元素原型对象，这样可以继承到父原型对象的方法，但是会有问题，子会影响父
// Son.prototype = Father.prototype;
// 解决方法，
// 创建一个实例对象，赋值给Son原型对象，这样就继承了父原型对象的方法
// 因为是一个新的实例对象，所以不会影响父原型对象
Son.prototype = new Father();
// 如果利用对象的形式修改覆盖了原型对象，需要用constructor指回自己构造函数
Son.prototype.constructor = Son;
Son.prototype.exam = function () {
    console.log("子元素考试");
}
var son = new Son('ldh', 18);
console.log(son)
console.log(Father.prototype);
console.log(Son.prototype.constructor);
```

## new操作符

js的new操作符做了哪些事情

new操作符新建了一个空对象，这个对象原型指向构造函数的prototype，执行构造函数后返回这个对象

1、创建一个空的对象
2、链接到原型prototype
3、绑定this指向，执行构造函数
4、返回的是该实例对象 

```js
var Func = function(){};
var func = new Func ();  // new操作符做了哪些事情
```

new共经过了4个阶段

```js
var obj = new Object();  // 创建了一个空对象
obj.__proto__= Func.prototype;  // 设置原型链，指向构造函数的原型对象
var result = Func.call(obj);  // 让Func中的this指向obj，并执行Func的函数体
// 判断Func的返回值类型 如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象
if (typeof (result) == "object"){
  func = result;
} else {
    func = obj;
}
```









## 预解析

代码先解析

```javascript
var str;	//声明变量
function add(){};	//声明函数
```

只声明，不会赋值

```javascript
var sud = function(){};	//这种属于变量，只会预解析变量声明，后面的函数并不会解析
```

预解析优先级

```javascript
//先解析的函数
console.log(a);	//输出 函数体a
function a (){
	console.log("aa")
}
var a = 1;	//此时1值将函数a给覆盖了，所以此时a=1
console.log(a);	//输出 变量a的值  1

```

let的预解析

```
let 定义的变量
1.也会预解析，但是必须先初始化赋值，才能使用(其它语言也是遵循此规则)
var则 可以先使用，在初始化
```



## 解构赋值

ES6中允许从数组中提取值，按对应位置，对变量赋值，对象也可以解构

数组解构

```javascript
let arrs = [12, 52, 32]
let [a1, a2, a3] = arrs;  //从数组按顺序提取数据存到变量
console.log(a1, a2, a3);	//输出 12 52 32
// 按需取值
let [a,,b] = arrs;	//用逗号占位即可
console.log(a,b);	//a=12,b=32
```

多维数组

```javascript
let arrs = ["A", "B", "C", ["A1", "A2", "A3"]];
let [,a,,[,b]] = arrs;
console.log(a,b);	a 是"A" ,b是 "A2"
```

对象解构

```javascript
let person = {name: "小丁", age: 18};

let { name, age } = person; //方式1
console.log(name, age);

let { name: mname } = person;   //方式2
console.log(mname);
```

对象多层结构

```javascript
let obj = {
	uname:"哈哈哈",
	dog: {
		uname: "aaa"
	}
}
let {dog:{uname}} = obj;	取对象中的对象中的uname
```



## 对象键值简写

在ES6中，对象里面，如果key和value的名称一样，则可以简写

```javascript
uname = "aaa";
age = 18;
let obj = { uname = uname, age = age };  // 以前的完整写法,属性名=值
// 简写形式
let obj = {
	uname,	//在ES6中 如果属性名和变量名一样，则可以省略属性名
	age
}
```

```js
// 函数也是可以简写的，哈哈哈 
let obj = {
    add(){
        console.log('add');
    },
    sub(){
        console.log('sub');
    }
}
// 调用
obj.add();
```



## 剩余参数与扩展运算符

ES6中的剩余参数和扩展运算符

**剩余参数**

区别：arguments是一个伪数组，剩余参数是一个真数组(Array),具有全部方法

但是在箭头函数中没有arguments，只能用剩余参数，就是3个点`...`

剩余参数语法允许将一个不定数量的参数表示为一个数组

```javascript
function sum(first, ...args) {
    console.log(first); // 10
    console.log(args);  // [20, 30] 数组形式
}
sum(10, 20, 30);
```

剩余参数和解构配合使用

```javascript
let students = ['wangwu', 'zhangsan', 'lisi'];
let [s1, ...s2] = students;
console.log(s1); // 'wangwu'
console.log(s2); // ['zhangsan', 'lisi']
```

**扩展运算符**

将数组转为用逗号分割的参数序列

```javascript
let ary = [1, 2, 3];
...ary // 用逗号分割的结果是 1, 2, 3
console.log(...ary); // 1 2 3	这里逗号相当于console.log(1, 2, 3)
```

用于合并数组

```javascript
// 方法一
let ary1 = [1, 2, 3];
let ary2 = [3, 4, 5];
let ary3 = [...ary1, ...ary2];	//合并
// 方法二
ary1.push(...ary2);	//添加方式合并
```

将伪数组转真数组

```javascript
let divs = document.getElementsByTagName('div');
divs = [...divs];
//利用数组方法转换
let arr = Array.from(divs);
```



## Set 数据结构

它类似于数组，但是成员的值都是唯一的，没有重复的值

```javascript
// 初始化实例对象
var s = new Set();
```

```javascript
// 数组去重
var s = new Set([2,3,4,5,4]);	// 也可以接收数组作为参数来初始化
console.log(s); //Set {2, 3, 4, 5}  重复的4没有了
s = Array.from(s)
// 此时 s 已经变回数组
```

实例方法

> add(value)	添加某个数据，返回Set结构本身
>
> delete(value)	删除某个数据，返回布尔值，表示删除是否成功
>
> has(value)	查询数据，存在返回true
>
> clear()	清除结构中所有成员

遍历，与数组一样，拥有forEach方法

```javascript
s.forEach(value => console.log(value))
```

## ES6模块化

能够在JS文件中引用其它文件，能够避免不同JS文件中变量的命名冲突，复用性好

在ES6模块化规范诞生之前，JS社区提出了AMD，CMD，CommonJS等规范

- AMD 和 CMD 适用于浏览器端的 Javascript 模块化
- CommonJS 适用于服务器端的 Javascript

但是这么多规范就存在了差异性，增加了学习难度和开发成本，因此ES6模块化规范诞生了

**ES6模块化规范**

- 每个js文件就是一个独立的模块
- 导出模块成员使用`export`关键字
- 导入其它模块使用`import`关键字

默认导出

```javascript
export default 导出的成员     // 导出，该语法，只能写在代码最后一行，且只能写一次
import 接收名称 from '模块路径'   // 导入
//导出什么接收什么， 导出的是对象，那么接收的也是对象
```

按需导出、导入

```javascript
// 按需导出，能够导出多次，以下导出了变量，和方法
export const a = 10;
export const b = 20;
export const function fn (){ /*方法体代码*/ }
// 按需导入，用{}括号接收 接收的名称必须按导出的名称保持一致
inport { a, b, fn } from './xxx.js'
console.log(a); // a = 10
// 按需导入，导入后修改名称，使用 as 关键字
inport { a, b, fn as fnn } from './xxx.js'
fnn();  // 使用修改后的名称调用
```

无导出，有导入

```javascript
import './xxx.js';  // 导入，
// 导入后 会立即执行一次 该模块中的代码，所以被导入的模块无需导出
```

导入在导出

```js
export * from '@/api/alert.js'  // 将某js文件导入，在导出
```

默认导入，在按需导出

```js
// 默认导入，在as 起名称 后在 按需导出--------其它的中转方式
export { default as Swiper } from './components/Swiper.vue'
```





## Promise

前言：

- 异步操作是JS中的麻烦事，Promise就是ES6新出的一种解决方案，用来解决回调地狱，也就是在一个回调函数里面，执行另外一个异步任务，一直往里面嵌套，导致可读性非常差，不便于维护

- 异步任务有：事件，定时器，Ajax请求，文件操作，数据库操作。异步任务只能由回调函数接收结果

```javascript
// 回调地狱，案例
// 异步操作什么时候返回结果是不可控的，如果要按顺序来请求，那么就只能将这些操作嵌套起来
$.get(url,function(res){
    $.get(url,function(res){
    	$.get(url,function(res){
    		console.log(res);  // 拿到最终结果
		})
	})
})
// 下面有 回调地狱 解决案例代码
```

介绍

- Promise是异步编程的一种解决方案，从语法上看，它是一个对象，使用时需要new

- Promise 可以理解为一个容器，里面可以编写异步代码。
- new Promise 和 new 其它对象一样，是同步任务。
- 获取结果的时候，调用 resolve 触发then方法时 是异步的，成功的结果给resolve，失败给reject

创建Promise对象和使用

```javascript
// 创建Promise对象
// 其中 传入的函数会自动执行，并且会立即执行，属于同步任务
let p = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'http://123.57.109.30:3000/api/categoryFirst',
        success(res) {
            resolve(res); //成功调用 resolve方法
        },
        error(err) {
            reject(err); //失败调用 reject方法
        }
    })
})
// 调用 方式1
p.then(function (res) {
    console.log(res);  // 获取成功的结果
}).catch(function (err) {
    console.log(err);  // 失败的结果
})
// 调用 方式2
p.then(成功回调函数, 失败回调函数);
p.then(function(res){}, function(err){}); //语法
```

### Promise三种状态

对象的状态不受外界影响，返回的promise对象代表一个异步操作，有三种状态

一旦状态改变，就不会再变，任何时候都可以得到这个结果

```javascript
// 封装函数，返回Promise对象
function myAjax(url) {  
  return new Promise(function (resolve, reject) {
     $.ajax({ url: url,success(res){ resolve(res) }, error(err){ reject(err) }})
    })
} 
let p = myAjax("http://xxx.com/api/getbook");
console.log(p);  // 得到的Promise对象代表能得到异步操作状态
// Pending（进行中），此时Promise的结果为undefined
// Resolved（已完成，又称Fulfilled），此时Promise的结果为 传递给 resolve 函数的值
// Rejected（已失败）。此时 Promise的结果为 传递给 reject 函数的值
```

then()方法中，返回非Promise对象值，值会传给下一个then里使用

```javascript
// then()方法中，返回非Promise对象值,值会传给下一个then里使用
// 如果返回的是Promise对象，则会代替then默认返回的那个Promise对象，传给下一个then里
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1秒执行完毕')
        console.log('就算执行了resolve，这后面的代码依然会执行')
    }, 1000);
})
// then执行后 会得到一个全新的Promise对象，newP存的就是新的
let newP = p.then(res => {
    console.log(res); // 执行完毕
    return 1212;  // 返回给下一个Promise对象使用, 打印 "1秒执行完毕"
})
// 链式调用
newP.then(function (res) {
    console.log(res);  // 得到上一个Promise对象的返回值, 打印 1212
})
```

### Promise方法

.then() 方法

该方法中可以拿到`成功的结果`，如果上一个then方法返回的是新的Promise对象，则可以通过下一个then方法继续处理，通过 .then() 方法的链式调用

```js
.then(res=>{
    //....
}).then(res=>{
    //....
})
```

.catch() 方法

如果在Promise中的链式操作内的方法发生了`错误`，则可以通过catch方法来进行`捕获和处理`

```js
.then(res=>{
    //....成功的结果
}).catch(err=>{
    //....失败的结果
})
```

```js
// 如果不希望前面的错误，导致后面的then 无法正常执行，则可以将 catch 调用放前面去
thenFs.readFile('./1.txt','utf8').catch(err=>{ /*错误处理*/ })
.then(r1=>{ /*成功结果*/ }).then(r1=>{ /*成功结果*/ })
```

all() 方法

该方法会发起并行的异步操作，等所有异步操作全部结束后才会执行下一步的 then 操作

```js
// 定义一个数组，存放3个 返回为Promise对象的 异步操作方法
let promiseArr = [  // 数组的顺序，就是最终结果的顺序
    thenFs.readFile('./1.txt','utf8'),
    thenFs.readFile('./2.txt','utf8'),
    thenFs.readFile('./3.txt','utf8'),
];
// 将Promise 的数组，作为参数
Promise.all(promiseArr)
  .then(([r1,r2,r3]) => {
    console.log(r1, r2, r3);   // 此时所有文件读取完毕，并且是按数组顺序读取
}).catch(err=>{
    console.log(err.message);  //捕获失败的结果
})

```

race() 方法

Promise.race() 方法会发起并行的 Promise 异步操作，只要任何一个异步操作完成，就立即执行下一步的 .then 操作（赛跑机制）

- 相当于只会得到`最先执行完毕`的任务的`结果`



### 回调地狱方案1

```javascript
// 如果返回的是Promise对象，则会代替then原地返回的新Promise对象
function myAjax(url) {  // 封装函数，返回Promise对象
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            success(res){ resolve(res) },
            error(err){ reject(err) }
        })
    })
} //-----------------------下面的代码也可以省略接收步骤，直接链式写法
// 获取1级分类数据
let p = myAjax('http://123.57.109.30:3000/api/categoryFirst'); // 返回Promise对象
let newP = p.then(function(res){
    console.log(res);  // 得到1级分类的数据
    // 获取2级分类数据，并返回Promise对象
    return myAjax('http://123.57.109.30:3000/api/categorySecond?firstId=' + res.list[8].firstId);
})
let newPP = newP.then(function(res){
    console.log(res);  // 得到2级分类的数据
    // 获取3级分类，并返回Promise对象
    return myAjax('http://123.57.109.30:3000/api/categoryThird?secondId=' + res.list[2].secondId);
})
newPP.then(function(res){
    console.log(res);  // 得到3级分类的数据
})
```

### async 和 await

async 和 await 是 ES2017 中提出来的，它们的出现简化了Promise的使用

- `async 用于修饰一个 function` ，修饰的函数总是返回一个Promise对象

- `await 只能出现在 async 修饰的函数内`，await会等待直到返回结果，否则会一直等待下去，但不会影响函数体外面的代码。
- async 方法内，第一个 await 之前的代码会同步执行，而之后的代码会异步执行(也就是方法外的代码会先执行)

**最终解决方案**

```js
// async 和 await 使用，最终完美的解决方案
console.log("执行顺序----1")
async function getAjax(){
    console.log("执行顺序----2")
    // 获取1级分类数据，  myAjax方法和 上面的方案1中的一样
    let res = await myAjax('http://123.57.109.30:3000/api/categoryFirst'); 
    // 获取2级分类数据
    res = await myAjax('http://123.57.109.30:3000/api/categorySecond?firstId=' + res.list[8].firstId);
    // 获取3级分类
    res = await myAjax('http://123.57.109.30:3000/api/categoryThird?secondId=' + res.list[2].secondId);
    console.log(res);  // 得到最终结果
    console.log("执行顺序----4")
}
getAjax();  // 调用 async标识的函数
console.log("执行顺序----3")
// 打印顺序为 1 2 3 4 
```

### await异常处理

可以在嵌套一层来处理异常，将异常和成功的结果都放到一个返回值中

永远记得：`await 在等一个 Promise 的结果`

awaitTo方法

```js
// awaitTo方法
// 封装函数，将成功、失败的结果放到一个数组中并返回，成员1为失败结果，成员2为成功结果
function to(promise) {
  return promise.then(res => [null, res]).catch((err) => [err, null]);
}
// 使用
async function send() {
  let [err, res] = await to(axios.get("http://xxx.com/api/getbooks"));
  if (err) {
    console.log("请求出错", err);
  } else {
    console.log("请求成功", res);
  }
}
```

await+catch方法

```js
async function send() {
  let res = await axios.get("http://xxx.com/api/getbooks").catch(err=>{
      console.log("请求出错", err);
  })
  console.log("请求成功", res);
}
```





### 利用Promise推迟执行

```js
// 微任务方式
Promise.resolve().then(()=>{
  console.log(this.$refs.myp.innerHTML); // 将会在宏任务执行完毕后在执行
})
// 宏任务方式
setTimeout(()=>{
  console.log(this.$refs.myp.innerHTML);
},0)
```





# ES5新增方法



## 数组方法

用法：https://www.cnblogs.com/amujoe/p/11376940.html

迭代方法：forEach()、map()、filter()、some()、every()，find(),findIndex()

arr.forEach	迭代(遍历)数组

```javascript
// arr.forEach(回调函数)
var arr = [1, 2, 3];
arr.forEach(function (value, index, array) {
	console.log('每个数组元素 ' + value);
	console.log('每个数组元素索引 ' + index);
	cosole.log('数组本身 ' + array)
})
```

arr.filter	筛选数组

```javascript
// arr.filter(回调函数)
var arr = [12, 77, 56, 1, 8, 20];
var newArr = arr.filter(function (value, index, array) {
    return value >= 20;//找出大于20的数字
})
console.log(newArr); // 返回数组，包含所有满足条件的元素
```

arr.some 查找是否有满足条件的元素

```javascript
var arr = [12, 35, 9];
//如果找到了,则立即停止迭代
var flag = arr.some(function (value, index) { return value == 35; });
console.log(flag); // true ,如果找到了则返回true
```

其它迭代方法

```javascript
arr.find();	//遍历数组，查找满足条件的第一个成员并返回，不存在则返回undefined
arr.findIndex()//遍历数组，查找满足条件的第一个成员，并返回该索引值，不存在则返回-1
arr.some()	//	查找满足条件的成员，如果找到 则立即停止遍历，然后返回true
arr.every() // 查找满足条件的元素，所有元素都满足 返回true, 有一个不满足则立马返回false
```

map 

```javascript
// 遍历数组，给每个成员处理，然后得到处理后的新数组
let arr = [1, 3, 2, 4, 5, 6, 7, 8]
let newArr= arr.map(function (value, index) {
    return value * 2; //每个元素乘2
})
console.log(newArr); // [2, 6, 4, 8, 10, 12, 14, 16]
```

reduce

```javascript
//reduce()遍历数组，将结果汇总为单个返回值
arr.reduce(回调函数,[初始值])	//未提供初值则会跳过第0次循环，从1开始
//回调函数有4个参数
accumulator(累计器acc) 第一次遍历 该值是初始值
currentValue(当前值cur)
[index](当前值索引)
[array](源数组)

//能实现的功能----------------------------
取字符出现次数，数组去重，多维转1维，数组求和
// 取字符出现次数
str = "aabcabcacbabacba";
let s = str.split("").reduce(function (prev, k) {
	return (prev[k]++ || (prev[k] = 1), prev)
}, {});
console.log(s);   // {a: 7, b: 5, c: 4}
// 数组求和
var arr = [10,11,15,16]
var sum = arr.reduce((prev, cur) => prev + cur);
```

Array.from() 遍历数组，可将伪数组转换真数组

```javascript
let arr = {
    "0": 1,
    "1": 2,
    "length": 2
}
let newarr = Array.from(arr, item => tiem)
```

方法

includes()方法，查找数组是否包含某给值，返回布尔值

```javascript
var arr = ["abc", "dd", "ee"];
arr.includes("dd"); // true
```



## 对象方法

Object.values()	获取所有属性值

Object.keys() 	用于获取对象自身的所有属性名

```javascript
var obj = {
    id: 1,
    pname: '小米',
    price: 1999
}
var arr = Object.keys(obj); //得到属性名的数组
console.log(arr); //["id", "pname", "price"]
```

Object.defineProperties 定义新属性或者修改原有属性

Object.defineProperties(obj对象,prop属性名,descriptor对象形式参数)

```javascript
// 定义新属性 或修改原有的属性
Object.defineProperties(obj, 'num', {
    value: 9.9, //定义或修改原属性值
    writable: false, //值是否可重写true 默认false
    enumerable: false, //属性是否可被枚举(遍历) true 默认false
    configurable: false //属性是否可被删除或修改特性 true 默认false
})
```

# 函数



> 所有函数都是Function的实例(对象)

判断的对象 instanceof 用于比较的对象

定义函数的方式

```
// 带名字的函数
function fn(){};
```

```
// 匿名函数
let fn = function(){};
```

```javascript
//实例化函数写法
let fn = new Function('参数1','参数2','函数体');
// 例如
let fun = new Function('a','b','console.log(a + b)');
fun(1,2);  //调用
```

## 函数形参默认值

```javascript
// 函数的参数的默认值，在没有传参的时候，会使用默认值
function getInfo(a=0,b=2){
	return a + b;
}
getInfo(undefined,2);	//第一个参数留空要写 undefined填充，
```



## 函数内this指向

| 调用方式     | this指向                                     |
| ------------ | -------------------------------------------- |
| 普通函数调用 | window                                       |
| 构造函数调用 | 实例化的对象，原型对象里的方法也指向实例对象 |
| 对象方法调用 | 该方法所属对象                               |
| 事件绑定方法 | 绑定事件的对象                               |
| 定时器函数   | window                                       |
| 立即执行函数 | window                                       |

**改变函数内this指向**

三种方法，call()  apply()  bind()

Call改变this的指向，常用语继承

```javascript
function fn(){
    console.log("哈哈哈");
    console.log(this);	//第一次window, 第二次o
}
fn.call();	// 调用方法
//声明对象
let o = {
    name: 'andy'
}
//第一个参数就是要this指向的 对象
fn.call(o);	 //call可以改变this指向

```

apply改变this的指向

```javascript
// 用法 fun.apply(thisArg指向的对象,[argsArray]伪数组)
var o = { name: 'andy' };
function fn (arr){ console.log(this);console.log(arr) };
fn.apply(o,['pink']); //伪数组
//可用于Math.Max()传递数组来取最大值
//自己使用需要arguments来获取数组每个元素
```

bind 改变this的指向

但是不调用函数，返回改变this之后的新函数

可用于回调函数，方便指向this 

```javascript
var o = { name: 'andy' };
function fn (arr){ console.log(this);console.log(arr) };
var f = fn.bind(o);	//不会调用，返回改变this之后的新函数
f();
```

```javascript
// 改变函数内this指向，但是不会立即执行
var btn = document.querySelector('button');
btn.onclick = function(){
	this.disabled = true; 点击后禁止按钮
	// 启动临时定时器，3秒后执行
	setTimeout(function(){
		this.disabled = false;//3秒后解开按钮
	}.bind(btn),3000)  // bind改变函数内的this指向
}
```



## 箭头函数

声明函数

```js
//正常的写法
function sum(s1, s2) { return s1 + s2 };
//箭头函数写法
const sum = (s1, s2) => { return s1 + s2 };

//简写，当函数体只有一句代码，且执行结果就是返回值，可以省略大括号,和return
const sum = (s1, s2) => s1 + s2;
```

```javascript
function fn(a) { return a; }
//如果形参只有一个，可以省略小括号
const fn = a => a;
fn(12);
```

箭头函数不绑定this关键字，箭头函数中的this指向 函数定义位置的上级作用域this

也不能用call修改this

```javascript
//作用域this
let obj = {
    age: 18,
    say: () => {
        alert(this.age); // 输出undefined
        // 因为上级作用域是window,window下没有age变量
    },
    hel: function(){
        console.log(this) //输出obj，调用者
    }
}
obj.say();
obj.hel();
```

箭头函数中的this指向位置

```
function get() {
	say = () => {
		console.log(this);	//输出 window对象
		// 上级作用域是get(),get()的this是window
	}
	say();
}
get();
```

# 其它

## 严格模式

代表在严格的条件下运行JS代码

消除了js语法的一些不合理，不严谨之处，和不安全之处，提高编译器效率

禁用了一些未来可能出现的语法关键字比如，class,enum,export,extends,import,super 不能用做变量名

变量必须声明 才能使用，不能使用delete删除已经定义的变量

开启严格模式

```
<script>
	'use strict'
	//后面的代码都将执行严格模式
</script>
```

开启严格模式-给函数开启

```
function(){
	'use strict'
	//这里面的代码将执行严格模式
}
```

严格指向的问题

```
1.以前在全局作用域函数中的 this 指向 window 对象。
2.严格模式下全局作用域中函数中的 this 是 undefined。
3.以前构造函数时不加 new也可以 调用,当普通函数，this 指向全局对象
4.严格模式下,如果 构造函数不加new调用, this 指向的是undefined 如果给他赋值则 会报错
5.new 实例化的构造函数指向创建的对象实例。
6.定时器 this 还是指向 window 。
7.事件、对象还是指向调用者。

8.不允许在if for 里面声明函数
```

## 高阶函数

高阶函数是 对其它函数进行操作的函数

参数形参是函数的就是高阶函数，返回值是函数的也属于高阶函数

```
function(fn){	//形参里有函数，高阶函数的特征
	fn();
}
function fn(){
	console.log("123");
}
```

## 闭包

衍伸了变量的作用范围，可以在外面访问内部作用域的局部变量

Scope 里面会有两个参数（global 全局作用域、local 局部作用域）。浏览器的Scope里面多一个Closure参数，这就说明产生了闭包

```
function fn(){
	var num = 10;
	return function(){ console.log(num) };
}
var f = fn();
f()	执行了局部作用域的函数 和变量
```

```
// 闭包的简单例子,2秒后打印所以的li标签
var li = document.querySelectorAll("li");
for (var i = 0; i < li.length; i++) {
    // i是变动的，等到事件执行的时候i已经变成4了，所以需要闭包
    // 创建一个立即执行函数，将i传递进去，此时a变量会一直保存到事件执行完毕
    (function(a){
        setTimeout(function () {
        console.log(li[a].innerHTML);
    }, 2000)
    })(i)
}
```

## 递归

函数调用自身来达到循环执行的目的

```
var i = 0;
function prote(){
    i++;
    console.log(i); // 会输出6次，然后停止
    if(i>=6) return;
    prote()
}
prote();
```

## 浅拷贝深拷贝

浅拷贝=只拷贝第一层数据，深层次拷贝的是引用地址，深拷贝=复制数据到新的内存空间地址

Object.assign() 拷贝属于浅拷贝，不能拷贝深层次的对象数据。如果属性名`相同会覆盖`

```javascript
Object.assign(存放的对象，要拷贝的对象);
```

```javascript
// 深拷贝对象(保存的变量，待拷贝对象)
function lstrcpy(paste, oringe) {
    for (const k in oringe) {
    	// 必须先判断数组，因为数组也是对象
        if (oringe[k] instanceof Array) {
            paste[k] = []; //设置成空数组
            lstrcpy(paste[k], oringe[k])
        } else if (oringe[k] instanceof Object) {
            paste[k] = {}; // 设置成空对象
            lstrcpy(paste[k], oringe[k])
        } else {
            paste[k] = oringe[k];
        }
    }
}
```

```javascript
var obj = JSON.parse(JSON.stringify(待拷贝对象)); //转换方式深拷贝
```

## 异常捕获处理

用于处理运行中可能会发生错误的代码，进行捕获处理后 程序就不会中断 就能继续往下执行

只能捕获到同步的异常，不能捕获语法和异步的异常

try...catch异常捕获

```javascript
//接管代码错误处理
try {
    // 用try包裹可能发生错误的代码
    p = document.querySelectorAll("p");
    p.style.color = "red";
} catch (error) {
    // 用catch写当发生错误时要如何处理
    console.log(error, error.message); // 输出错误信息
}
// 即使前面代码抛出异常了，由于处理了异常，所以程序还能正常执行
document.querySelector("p").style.backgroundColor = "blue"
```

throw抛出错误，Error错误对象

```javascript
function getinfo(x, y) {
    if (x == undefined || y == undefined) {
        throw new Error("getinfo参数不能为空"); //抛出错误
    }
    return x + y;
}
// throw抛出异常后，程序将会停止执行
//new Error("错误提示信息"); 错误对象
```

## rAF渲染

告诉浏览器——你希望执行一个动画，并且要求浏览器在`下次重绘之前`调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

requestAnimationFrame和setTimeout很相识，只是不需要设置间隔，会在下次重绘时调用

```javascript
window.requestAnimationFrame(回调函数); 
```

在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量

requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销

## 禁止调试代码

```javascript
setInterval(function () {
    check()
}, 4000);
var check = function () {
    function doCheck(a) {
        if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
            (function () { }
            ["constructor"]("debugger")())
        } else {
            (function () { }
            ["constructor"]("debugger")())
        }
        doCheck(++a)
    }
    try {
        doCheck(0)
    } catch (err) { }
};
check();
```

## 防抖、节流

防抖：如果事件被频繁触发，`防抖`能保证`只有最后一次触发生效`！前面 N 多次的触发都会被忽略！

节流：如果事件被频繁触发，`节流`能够`减少事件触发的频率`，一段时间只执行一次，因此，节流是有选择性地执行一部分事件！



**防抖**

- `防抖策略`（debounce）是当事件被触发后，`延迟 n 秒`后再真正`执行回调`

- 如果在这` n 秒内事件又被触发，则重新计时`。`否则`则真正执行回调。

应用场景

- 浏览器窗口缩放，resize事件，页面适配时候使用
- search搜索框输入时，需要在用户输入最后一个后，在发送ajax请求，防止频繁发送

```html
<input type="text" name="search" id="search">
<script>
    let search = document.getElementById('search')
    // 防抖
    // 当输入内容时，input会频繁触发，但只需执行最后一次的事件
    let timer = null;
    search.addEventListener('input', function () {
        clearTimeout(timer)  // 清除之前的定时器
        timer = setTimeout(() => {
            console.log(search.value);  // 执行代码，得到用户最终的输入内容
        }, 1000);
    })
</script>
```

**节流**

- 如果持续的触发同一个事件，每间隔一段时间，只会执行一次该事件，稀释事件的执行频率

场景

- 根据滚动条位置来改变元素的位置，由于滚动会频繁触发scroll事件

```html
<script>
    // 节流策略
    // 一段时间内，只执行一次代码，防止频繁执行
    let timer = null;
    window.addEventListener('scroll', function () {
        if (timer) return;  // 防止短时间内执行多次，
        timer = setTimeout(() => {
            //这里代码 0.5秒执行一次,防止短时间频繁执行，节约性能
            console.log(document.documentElement.scrollTop);
            timer = null;
        }, 500);
    })
</script>
```

## 宏任务、微任务

JavaScript是单线程的，也就是说，同一个时刻，JavaScript只能执行一个任务，其他任务只能排队等待，为了防止耗时间的任务导致程序假死，所以有了异步任务

`同步异步`

- 同步：立即执行，并执行完才会执行下一行代码，例如console.log()
- 异步：需要过一段时间才能看到结果，例如 setTimeout，Ajax请求

`事件循环（Event Loop）`

- 它是一个在 JavaScript 引擎等待任务，执行任务和进入休眠状态等待更多任务这几个状态 之间转换的无限循环

`任务队列（task queue）`

- 事件循环是通过任务队列的机制来进行协调的
- 一个 Event Loop 中，可以有一个或者多个任务队列(task queue)
- 一个任务队列便是一系列有序任务(task)的集合

事件循环和任务队列

`一次循环的关键步骤`如下，以下为一次循环，`主线程重复执行`下述步骤

1. 执行最先进入队列的任务(oldest task) ，如果有则执行(一次)
2. 检查是否有 微任务（Microtasks），如果有则不停地执行，直至清空 微任务队列（Microtasks Queue）
3. 更新 render（DOM渲染）

上面循环所需了解

- JS分为同步任务和异步任务
- 同步任务都在主线程上执行，形成一个执行栈
- 主线程之外，宿主环境管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件
- 一旦执行栈中的所有同步任务执行完毕（此时JS引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中 ，开始执行

**宏任务**

(macro)task，可以理解是每次执行栈执行的代码就是一个宏任务。

`宏任务有`： `script标签整体代码`(每个script标签内JS代码是一个单独的宏任务)，`定时器`(每个定时器是单独的一个宏任务)，UI交互事件，Ajax，读写文件(I/O)，setlmmediate(nodejs环境)

- 主线程上的执行栈中的代码
- 每次从事件队列中获取一个事件回调并放到执行栈中执行

**微任务**

微任务（microtask）是宏任务中的一个部分，它的执行时机是在同步代码执行之后，下一个宏任务执行之前

`微任务有`：Promise.then，.catch，process.nextTick ( node.js环境 ) 

**总结**

- 在主线程中，`一般情况`下，`先执行宏任务`，`在执行微任务`，`在GUI渲染`

- 如果在执行微任务的时候又在创建微任务，则会一直执行，直到执行完，执行不完会卡住主线程
- 微任务的执行会因为JS堆栈情况有所不同

1. 执行一个宏任务（执行栈中没有就从事件队列中获取）
2. 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
3. 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
4. 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
5. 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

**宏任务、微任务案例题**

```js
<body>
    <button>button</button>
    <script>
        const btn = document.querySelector("button")
        btn.addEventListener("click", () => {
            Promise.resolve().then(() => console.log("1")) // 微任务
            console.log("2");  // 宏任务
        })
        btn.addEventListener("click", () => {
            Promise.resolve().then(() => console.log("3"))
            console.log("4");
        })
        // 手动点击按钮，打印的顺序是：2 1 4 3 ---------------
        // 点击后会将任务添加到任务队列，之后又发现一个任务，又添加到任务队列。所以这2个是独立的任务
        // 主线程去任务队列拿一个任务，事件中的代码都是同步任务，所以先执行宏任务，输出2，此时该任务的宏任务已经执行完毕，然后执行微任务，输出1
        // 接着又拿了一个任务，同上，先执行宏，输出4，在执行微，输出3
        
        btn.click()
        // 代码模拟点击触发click事件，打印的顺序是：2 4 1 3 -------------------
        // 相当于是调用了click方法，由于函数内都是同步任务，那么就需要等待这两个函数执行完毕才会返回，之后才能向下执行，那么就相当于上面的代码是同一个任务，并且都已经在主线程
        // 所以先执行宏任务，按照顺序 先输出2，在输出4。此时宏任务已经执行完，在执行微任务，按顺序 先输出1，在输出3
        // 返回后 相当于宏任务已经执行完毕
    </script>
</body>
```

文章介绍：https://mp.weixin.qq.com/s/ymla1LAP2LRHXyO9iKZWVA

**利用微任务推迟执行代码**

```js
// 微任务方式
Promise.resolve().then(()=>{
  console.log(this.$refs.myp.innerHTML); // 将会在宏任务执行完毕后在执行
})
// 宏任务方式
setTimeout(()=>{
  console.log(this.$refs.myp.innerHTML);
},0)
```



