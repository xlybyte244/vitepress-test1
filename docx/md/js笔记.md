# JavaScript



>2021.8.20	BY: 林忆

**常用的js编辑工具**

sublime Text , visual studio,

**JS文件的引入方式**

1. 页头引入（head标签内）
2. 页中引入（body标签内）
3. 元素事件中引入（标签属性中引入）；
4. 引入外部JS文件

>一般在body标签内容的最底部引入，如果要在前面引入则需要添加判断页面是否加载完毕在执行JS

数据结构

一般包含：标识符，关键字，常量，变量，等

## 数据类型

JavaScript数据类型有2大分类：一是“基本数据类型”，二是“特殊数据类型”。

**基本数据类型**

```
1.数字型（Number型）：如整型84，浮点型3.14；进制数也可保存
2.字符串型（String型）：如"Hele ll"；
3.布尔型（Boolean型）：true或false；
// 数字型范围 Number.MAX_SAFE_INTEGER 可获取最大数 
// 范围为：-9007199254740991 到 9007199254740991 之间
```

特殊数据类型

```
1.空值 （null）			赋值为null，对象为空
2.未定义值 （undefined）	声明变量未赋值，变量为空
3.转义字符
4.objectu 对象类型，应该属于 （自定义类型，类）
```

Number数字型三个特殊值

```javascript
alert(Infinity); // Infinity 代表无穷大，大于任何数值
alert(-Infinity); // -Infinity 代表无穷小，小于任何数值
alert(NaN); // NaN  Not a number，代表一个非数值
```

判断变量是否非数字Number

```javascript
isNaN(变量)； // 返回值，false是数字，true不是数字
```

判断变量数据类型typeof

```javascript
console.log(typeof 1) // 结果 "number"
typeof(1)   // 返回的是"number"
typeof("js") // 返回的是"string"
```

判断是否为数组(转到 内置对象 数组对象 有写)

------

**String转义符**

```
（\r）回车，（\n）换行符，（\\）斜杠\，（\"）引号，（\t）TAB缩进，（\b）空格 是blank的意思
var title = "标题" + "\n" + "第二行";
```

**字符串模板**

```
拼接字符串的方法
console.log(`小明今年${age}岁`)	//age是变量，其中`反引号是键盘上tab上方的键(英文)
```



------

**数据类型转换**

类型检测在`运算符`类目下最后面

1.转换为字符串

```
var text = 123;
text.toString(); 
String(text);	 强制转换
text = text + "abc";  隐式转换，和字符串拼接后都变成字符串
```

2.转换为数字型（重要）

```javascript
var text = "12";
parseInt(text, [进制]);   //转整数数字型(开头是数字就能取出),例如12px,也能转换得到12
parseFloat(text); //转浮点数字型
Number(text);	  ///强制转换，转数字型(不能含有字母其它符号)
text = text * 1; //隐式转换，利用算术运算转换为数字型(+不能转换)
text = +text; //隐式转换
```

```
let num = 10
console.log( num +  +'11')	//输出 21		+号作为正号解析可以转换成number
```

3.转换为布尔型

```javascript
var text = "false";
Boolean(text);  //转换为布尔型
var bol = !!text;	//隐式转换
//-----------------------------
//*代表空，否定的值 会被转换为 false,如：0、''、NaN、null、undefined
//*其余值将被转换为 true, 如：1、菜鸟、abc、456
```



## 变量常量

**变量**

```javascript
let index,mask;	//同时声明两个变量
var str = "";	//声明变量
```

**const常量**

具有块级作用域的特征，常量不可变，声明的时候必须赋值

```javascript
const PI = 3.14;	//值类型的不可更改
```

```javascript
const arr = [91,25];
arr[0] = 12;	//复杂数据类型 可以修改其中的值
arr = [12,13];	//但是不能修改整个数据，因为会改动地址
```

**作用域**

> 全局作用域，var是函数作用域，let是块作用域。

> 对象是没有作用域的，所以对象里面使用变量需要加this

说明：

在函数中声明了var，整个函数内都是有效的，比如说在for循环内定义的一个var变量，实际上其在for循环以外也是可以访问的

而let由于是块作用域，所以如果在块作用域内定义的变量，比如说在for循环内，在其外面是不可被访问的，所以for循环推荐用let

如果未声明直接使用 的变量，则会提升为全局变量

var

```javascript
//var是函数作用域，在这里相当于是全局变量，当执行函数的时候，i已经变成了2，所以都是2
var arr = [];
for (var i = 0; i < 2; i++) {
    arr[i] = function () { console.log(i) };
}
arr[0]();   //调用	输出 2
arr[1]();   //调用	输出 2
```

let

```javascript
//let是块级作用域，循环了两次，相当于创建了两个块，每个块里面i是独立的，所以不受影响
var arr = [];
for (let i = 0; i < 2; i++) {
    arr[i] = function () { console.log(i) };
}
arr[0]();   //调用	输出 0
arr[1]();   //调用	输出 1
```



## 运算符

**算术运算符**

| 运算符     | 描述              | 例子                                            |
| ---------- | ----------------- | ----------------------------------------------- |
| +、-、*、/ | 加、减、乘、除    |                                                 |
| %          | 取余数(取模)      | 返回除法的余数 9 % 2 =1；                       |
| ++、--     | 自身 递增1、递减1 | i++、i--、（放前面在某些时候效果不同 ++i、--i） |

```
赋值运算符
var age = 10;
age += 5; //相等于age = age + 5;
age *= 10; //相等于age = age * 10;
age %= 5; //相等于age = age % 5; 得到0
```

**比较运算符**

比较比的是ASCII值，不要比较小数，因为有精度问题，NaN不等于本身

| 运算符       | 描述                              | 例子      | 结果  |
| :----------- | --------------------------------- | --------- | ----- |
| <、>、>=、<= | 小于，大于，大于等于，小于等于    |           |       |
| ==           | 判断值是否相等(会转型)            | 37==37    | true  |
| !=           | 不等于                            |           |       |
| ===、!==     | 全等,值和数据类型都一致、全不相等 | 37==="37" | false |

递增运算符（前置，后置 的差异）

```
------后置递增运算符差异： *先返回原值，后自加*
var num = 10;
alert(10 + num++);  //返回的是20
alert(num);  //返回的是11
------前置递增------------先自加，后返回
var num = 10;
alert(10 + ++num);  //返回的是21
alert(num);  //返回的是11
```

浮点数精度问题

```
var result = 0.1 + 0.2;   //结果不是0.3，而是0.30000000000000004
var result = 0.07 * 100;  //结果不是7，而是7.000000000000001
alert(result == 7) //返回 false
// 所以不能直接判断两个浮点数是否相等
```

**逻辑运算符**

常用于多个条件的判断，返回最后判断的值

```
let re = true && 10;	//返回的是10
let re = 0 && true;		//返回的是0
```

| &&   | 逻辑与，简称"与"，and       | true && false //返回 false  |
| ---- | --------------------------- | --------------------------- |
| \|\| | 逻辑或，简称"或"，or        | true \|\| false //返回 true |
| !    | 逻辑非，简称"非" not (取反) | !true //返回 false          |

```
|| 如果第一个条件为假，则返回第二项的值，否则返回第一项的值
&& 如果第一个条件为假，则返回第一项的值，否则返回第二项的值
```

**运算符优先级**

| 优先级 | 运算符     | 顺序               |
| ------ | ---------- | ------------------ |
| 1      | 小括号     | ()                 |
| 2      | 一元运算符 | i++，i--，(取反)!  |
| 3      | 算术运算符 | 先 *，/，%后 +，-  |
| 4      | 关系运算符 | '>，  >=，  <， <= |
| 5      | 相等运算符 | ==，!=，===，!==   |
| 6      | 逻辑运算符 | 先 && 后 \|\|      |
| 7      | 赋值运算符 | =                  |

位运算符

```
位与 &，位或 |
位非		~	真为假，假为真
异或		^	相同为假，不同为真
有符号左移	<<，有符号右移	>>
无符号左移	<<<，无符号右移	>>>
详情：https://segmentfault.com/a/1190000013607145
```

判断运算符

```javascript
consolo.log(obj instanceof Array); // 判断obj是不是数组
consolo.log(obj instanceof Obje); // 判断obj是不是对象
//instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上
//instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上
```

**类型检测**

类型检测优先使用 typeof。对象类型检测使用 instanceof。null 或 undefined 的检测使用 == null。

```javascript

typeof variable === 'string';	// 检测variable是否为string类型

typeof variable === 'number';	// number

typeof variable === 'boolean';	// boolean

typeof variable === 'function';	// Function

typeof variable === 'object';	// Object

variable instanceof RegExp;	// 是不是RegExp

variable instanceof Array;	// 是不是Array

variable === null;	;	// null

variable == null;	// null or undefined

typeof variable === 'undefined';	// undefined
```



## 流程控制 if

**if else 判断语句**

分支流程控制 if 判断语句

```js
var usrAge = prompt('请输入您的年龄：');
if(usrAge >= 18){
	alert('您的年龄合法，欢迎来天际网吧享受学习的乐趣！');
} else {
	alert('您的年龄太小');
}
```

```
if (age > 18) alert("ok");	简写形式
```

**if else if 语句（多分支）**

```javascript
var usrAge = prompt('请输入您的分数：');
if(usrAge >= 90){
	alert('优秀');
} else if (usrAge >= 60){
	alert('勉强及格');
}
```

**三元表达式**

>表达式 ？ 待选1 ：待选2;
>
>表达式 ？ 表达式1 ：表达式2;

```js
var age = 60;
alert(age < 60 ? "不及格" : "及格了");
```

```
m = m || 0	//如果m是undefined就相当于是false，那么就会返回第二项，此时m=0
```

**switch 语句**

switch 表达式的值会与结构中的 case 的值做比较

如果存在匹配全等(===) ，则与该 case 关联的代码块会被执行，并在遇到 break 时停止

如果所有的值都不匹配，则执行default

注意：执行case 里面的语句时，如果没有break，则会继续往下执行

```js
var age = 18;
switch(age) {
	case 1:
		//age=1时要执行的代码
		break; // 跳出
	case 2:
		//age=2时要执行的代码
		break;
	default:
		//表达式，不等于任何一个值时要执行的代码
}
// 如果不加 break跳出，那么当某个条件成立后，该条件后面的代码都会认为成立然后执行
```

**if 和 switch的区别**

>switch...case 一般处理 值比较确定的情况
>
>if...else 语句更灵活，常用语处理范围较大的情况
>
>switch 条件判断后直接执行对应语句，效率更高，而if..else需要判断到满足条件的地方

```
1.当分支比较少时，if… else语句的执行效率比 switch语句高
2.当分支比较多时，switch语句的执行效率比较高，而且结构更清晰
```

**if...in 的使用**

```
var man = {name: "小明", age: 18};
if("age" in man){
	console.log("man对象中存在age属性")
} else{ //不存在该属性 }
```



## 循环

在JS中，主要有三种（for循环，while循环，do...while循环）

**关键字continue，break**

```
continue （到循环尾）跳出本次循环，继续下一次循环
break  （跳出循环）跳出整个循环，结束循环
return 返回
```

**for循环**

1.初始化变量：只执行一次，一般用于初始化一个计数变量

2.条件表达式：如果为true则继续循环，否则退出循环

3.操作表达式：每次循环都要执行的表达式，此时第一轮结束，一般用于更新或自增计数变量

```js
for (初始变量; 条件表达式; 操作表达式) {
     //循环体
};
for (let i = 0; i < array.length; i++) {
     console.log(array[i]);
};
```

**while循环**

1.先执行条件表达式，如果为true，则执行循环体代码，如果为false，则退出循环

```js
while(条件表达式) {
	//循环体代码
}
```

**do...while循环**

1.先执行循环体，在对条件表达式进行判断，如果为true则继续循环

```js
do {
	//循环体代码
} while (条件表达式);
```

------

**for...in循环**

用于遍历对象属性 k 就是属性名，也可以遍历数组 k就是下标

```javascript
for (let 变量k in 待遍历的对象) {
	//在此执行代码
}
例：
for (var k in obj) {
	console.log(obj[k]); //k是属性名，obj[k]是属性值
    if(obj.hasOwnProperty(k)){
        //此方式可过滤掉原型中的属性
    };	
}
```

**for...of 循环**

ES6引入的新特性，循环出的是value，所以适合遍历数组



## 声明函数

声明函数

```
方式1：function 函数名(){};				命名函数
方式2：var getinfo = function(){};		  函数表达式
;(function(){})();	立即执行函数，上一行代码必须加分号;否则报错,或者加本行前面
;(function(){}());	立即执行函数
因为调用函数 函数名和括号 能换行，所以必须加分号
```

形参和实参

```
1.形参：函数定义时 传递的参数
function getinfo(形参1，形参2){};
2.实参：函数调用时，传递的参数，实参是传递给形参的
getinfo(实参1，实参2);
------------------------形参默认值------------------------
在js中，形参的默认值是undefined，也可以给定默认形参值
function getinfo(a=1，b=2){};
getinfo(undefined，b=2); //如果第一个参数要省略，需要填充undefined
```

函数返回值

```
如果函数没有 return，则返回值是undefined
```

**arguments获取参数**

> 当不确定有多少个参数传递时，可以用arguments获取，在js中arguments是一个内置函数，获取的结果是一个伪数组
>
> 1.具有length属性
>
> 2.按索引方式存储数据
>
> 3.不具有push，pop 等方法

```javascript
function getinfo () {
	for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
```

高阶函数=参数有函数的函数，回调函数=当做参数的函数

高阶函数=将函数当返回值返回

this

谁调用函数，this就指向谁

## 对象

>js中对象分三种：自定义对象，内置对象，浏览器对象api

在JS中，一切皆为对象，例如 字符串，数值，数组，函数

对象就是一组无序的 相关属性和方法的集合

**自定义对象**

1.利用字面量创建对象

```javascript
var star = {
	name: "张三",
    age: 18,
    say: function(){return "音乐唱歌";}
}
//star 也叫命名空间
//备注：类似自定义类型，也相当于一个类，也像C#中的结构
// 调用：
star.name;    //读取name
star['name']; //读取name，方式2
star.say();   //调用里面的方法
// 动态属性名
star = {
    // js表达式执行结果 当属性名
    [1>10 ? 'name' : 'age']: '属性值'
}
```

2.利用new Object创建对象

```javascript
var star = new Object();
star.name = "张三";
star.age = 18;
star.say = function(){return "音乐唱歌";};
// 注意大小写，格式：对象.属性 = 值;
```

3.利用构造函数创建对象

>构造函数约定 首字母大写，函数内的属性和方法前需添加 this，表示当前对象
>
>构造函数中不需要 return 返回结果，创建对象时，必须用new来调用构造函数

```js
function Getinfo(name,age){
	this.name = name;
    this.age = age;
    this.say = function(){};
}
//调用：
var bai = new Getinfo('大白',18); //返回的就是这个对象
console.log(bai.name);	//实例成员 只能通过实例化的对象来访问
//在构造函数身上添加的成员，就是静态成员
Getinfo.sex = 18;  console.log(Getinfo.sex);
```

删除属性

```
delete 对象名.属性名;
delete star.age;
```

**遍历对象属性**

利用for...in 语句可以对数组或者对象的属性进行循环操作，（在循环的章节里有）

```javascript
for (let 键名 in 待遍历对象){};
```

其它

```javascript
Object.assign(对象1, 对象2，，，，)  // 合并对象，返回新对象，同时对象1 也会被改变
Object.keys(obj); // 枚举出所有属性名，返回一个数组
Object.values(obj); // 枚举出所有属性值，返回一个数组
obj.hasOwnProperty('name');  // 判断自身是否具有某个属性
```





## 内置对象

js中自带的对象，提供了一些最基本的功能

例如：Math，Date，Array，String ，Error等

> MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript
>
> MDN:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects
>
> 其它：https://segmentfault.com/a/1190000011467723

### Math对象

Math不是构造函数，所以不用new，直接使用即可。具有数学常数和数学相关的运算方法(绝对值，取整，最大值)。

Math有8个常量

```javascript
Math.PI // 圆周率
```

Math共有18个静态函数。都涉及到number隐式转换，若超出则返回NaN

```javascript
Math.floor() // 向下取整
Math.ceil() // 向上取整
Math.round() // 四舍五入 就近取整 注意 -3.5 结果是 -3
Math.abs() // 绝对值
Math.max(数字1,数字2,数字3)/Math.min() //求一组数中最大和最小值
Math.max.apply(null,arr数组)	//取数组中最大值，通过apply改变this指向方法
Math.max(...arr数组)	//利用剩余参数展开数组传入max方法
Math.random() //返回0-1之间的随机数，0.93301024719719
Math.pow(x,y)	//求平方，x的y次方(次幂)
Math.sqrt(x)	//返回一个数的平方根 √￣
cos(x) 求余弦，sin(x) 求正弦
```

取指定范围内的整数随机数，包括两个数

```javascript
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

取随机字符串

```
console.log(Math.random().toString(16).slice(2)); // c21f331e6ce2b
```

**----------------Date对象----------------**

### Date对象

主要用来处理日期和时间

> 日期时间表示：YYYY-MM-DD hh:mm:ss

静态方法

```
Date.now() // 返回当前13位时间戳 1630758820861
Date.parse("2021-09-04") //用于解析日期字符串,失败返回NaN
Date.UTC(年,月,日,时,分,秒,毫秒) // 年月日时作为参数，返回距1970-1-1 00:00:00的毫秒数
```

实例方法

Date是个构造函数，需要实例化才能使用。

```js
//参数有多种时间格式，时间戳，字符串，多个整数
var now = new Date(); //获取客户端的当前系统时间
var now = new Date("2021-9-4"); // 创建自定义时间
console.log(now); //Sat Sep 04 2021 19:50:52 GMT+0800 (香港标准时间)
var date = new Date(yyyy, MM, dd, hh, mm, ss); //多个整数，创建自定义时间
```

get类方法

```js
now.getFullYear();	//取年份
getMonth()		//取月份(0-11)
getDate()		//取日
getDay()		//取星期(0-6)(周日0-周六6)
getHours()		//取小时(0-23)
getMinutes()	//取分钟(0-59)
getSeconds()	//取秒
getMilliseconds()	//取毫秒
valueOf()/getTime()	//取13位时间戳		简写：+new Date()
Date.now();  //H5中的方法，取13位时间戳
//-----给get后加UTC则取的是世界时钟 getUTCFullYear()
//-----将get换成set则是设置时间，星期不能设置
```

to类方法

```javascript
toString()   // Sat Sep 04 2021 20:24:04 GMT+0800 (香港标准时间)
toTimeString() //把时间部分转字符串
toDateString() //把日期部分转字符串
toLocaleString() //根据本地时间格式转字符串，2021/9/4 下午8:28:23
toLocaleTimeString() //根据本地时间格式，把时间转字符串
toLocaleDateString() //根据本地时间格式，把日期转字符串
```



**----------------Array数组对象----------------**

### Array对象

创建数组的两种方式

```javascript
字面量方式
var arr = []; //空数组
var arr = [1,3,6]; //创建含3个子元素的整数数组
实例化方式
var arr = new Array(); //空数组
var arr = new Array(20); //创建含20个子元素的数组
```

检测是否为数组

instanceof运算符，Array.isArray()  H5中的方法

```javascript
var arr = [1,23];
console.log(arr instanceof Array); //返回 true
console.log(Array.isArray(arr)); // 返回 true
```

Array属性

```
length	//数组长度
```

Array方法

> Array方法分类：1.可以改变原数组，2.不能改变原数组

会修改原数组的方法

| 方法名称                             | 说明                             | 返回值           |
| ------------------------------------ | -------------------------------- | ---------------- |
| push(参数1...)                       | 添加新元素到数组末尾             | 返回数组长度     |
| unshift(参数1...)                    | 添加新元素到数组前面             | 返回数组长度     |
| pop()                                | 删除数组最后一个元素             | 返回删除的元素值 |
| shift()                              | 删除数组第一个元素               | 返回删除的元素值 |
| reverse()                            | 颠倒数组元素顺序                 | 返回新数组       |
| sort()                               | 对数组元素排序,升序(细节在下方)  | 返回新数组       |
| splice(第几个开始,删除个数,插入的值) | 向/数组添加/删除项目(细节在下方) | 返回被删的项目   |

不会改变原数组的方法

```javascript
concat(待拼接数组2,待拼接数组3)  // 方法：连接两个或更多的数组，并返回新数组
join("分隔符")  // 将数组拼接成字符串返回，并用分隔符进行分隔,可用于取重复文本
slice(开始位置，结束位置) // 数组截取，结束位置空则到尾部，返回被截取的后的新数组
toString() // 把数组转成字符串，逗号分隔
toLocaleString()  // 把数组转换为本地字符串
valueOf() // 方法返回 Array 对象的原始值
includes('值') // 判断一个数组是否包含指定的值，包含返回true,否则返回false
```

数组索引方法

| indexOf()     | 查找给定的第一个索引   | 存在返回索引号，不存在返回-1 |
| ------------- | ---------------------- | ---------------------------- |
| lastIndexOf() | 在数组中的最后一个索引 | 存在返回索引号，不存在返回-1 |

数组排序sort

```javascript
var arr = [1,64,9,6];
arr.sort(function(a,b){
	return b-a; //降序
	// return a-b; //升序
})
//方法有一个可选参数，若未用参数，将按字母顺序对数组元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串
//如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字

//打乱数组思路
arr = arr.sort(function(a,b){ Math.random() - 0.5 });
```

splice方法

```javascript
splice(开始位置，删除个数，要插入的数据)
var arr = ["a","b","c"];
arr.splice(0,2)  // 删除数组前2项
arr.splice(0,0,"abc") //在数组前面插入元素
//返回的是被删除的元素组成的数组
//若只有开始位置，则后面的全部删除
```

伪数组转真数组

```
var arr = Array.from(伪数组);
```



forEach遍历数组循环

```javascript
var arr = [2, 5, 7];
arr.forEach(function (x, index, a) {
	console.log(x + "|" + index + "|" + a);
})
参数分别为：遍历的数组内容；对应的数组索引，数组本身
```

其它

> map()：映射，对数组中每一项运行给定函数，返回每次函数调用的结果组成的数组
>
> from(伪数组,函数): 将伪数组遍历转换为真正数组
>
> filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组
> every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true
> some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true
>
> 迭代数组 reduce() , reduceRight()

```javascript
//下面代码用reduce()实现数组求和，数组一开始加了一个初始值0
var arr = [2, 5, 3];
var sum = arr.reduce(function (prev, cur, index, array) { 
	return prev + cur; 
},0);
// 参数分别为：累计和，子元素，元素索引，数组本身
console.log(sum);
```



**----------------String字符串对象----------------**

### String对象

字符串是不可变的，也有像数组一样的下标

属性

```
length  //字符串中的字符个数
```

常用方法

```javascript
//查找文本----
indexOf(待找文本，[开始查找位置]) // 寻找文本，返回找到的首次位置，找不到则返回-1
lastIndexOf(待找文本,[开始查找位置])  // 倒找文本，从后往前找
match(正则表达式或待找文本) //找到返回数组，找不到返回null
//截取文本----
substr(开始位置,[取的个数])  // 取文本中间
slice(开始位置，[end结束位置])  // 取文本中间,end不包含，如果结束位置忽略则取到末尾
substring(开始位置,[end结束位置])  // 同上  
//分割文本----
split(分隔符或正则式,可选 返回数组最大长度)  // 分割文本，返回的是一个文本数组
//处理转换----
toUpperCase()  //到大写
toLowerCase()  //到小写
trim()       // 删首尾空格
//其它方法----
concat(str1,str2,,,) //连接多个字符串，等效  字符1 + 字符2
charAt(index)  // 返回指定索引的字符串
charCodeAt(index)  // 返回指定索引的字符串的ASCII码
str[index]  // 获取指定位置字符
includes("字符串")  //是否包含指定字符串，返回布尔值
startsWith("字符串") // 是否以指定字符串开头,返回布尔值
endsWith("字符串") // 是否以指定字符串结尾
新文本 = 原文本.replace('被替换文本', '要替换成的文本') // 替换一次
新文本 = 原文本.replaceAll('被替换文本', '要替换成的文本') // 全部替换
```

```
// 替换文本
replace(被替换的文本，要替换为的文本) // 文本替换，只能替换第一个
在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
参数1：正则表达式/字符串，必须，规定子字符串或要匹配的 RegExp 对象
参数2：replacement，必须，用于替换的字符串值
返回值：替换后的一个新字符串
var s = 'hello world hello';
console.log(s.replace('hello','hi')); //hi world hello
console.log(s.replace(/hello/,'hi')); //hi world hello
console.log(s.replace(/hello/g,'hi')); //hi world hi
如果 regexp 具有全局标志 g，那么 replace() 方法将替换所有匹配的子串。否则，它只替换第一个匹配子串
// 变量形式-----------------------------
let str = 'hello'
let reg = new RegExp(str, g)
console.log(s.replace(reg,'hi'))
// 函数形式---指定一个函数作为参数
s.replace(reg, (match) => match + '-' )  // match为匹配的子文本
```

```
//取重复文本1
var str = "a";
console.log(str.repeat(10));	//aaaaaaaaaa
//取重复文本2
function repeatStr(str,n){
	return new Array(n+1).join(str);
}
利用数组中的join连接字符串方法
```

模板字符串

```javascript
//使用反引号定义，可以解析变量，可以执行函数，可以换行
var name = "小米"
var str = `早上好啊${name}，吃饭了吗`	//
console.log(str);	//早上好啊小米，吃饭了吗
```



### Number对象

> 详情地址：https://www.cnblogs.com/WindrunnerMax/p/13744845.html

它有9个属性，12个方法

```
Number.valueOf()	//返回原始值
Number.isNaN()		//判断是否为NaN
Number.isInteger()	//判断是否为整数
Number.parseFloat()	//转换为浮点数
Number.parseInt()	//转换为整数
Number.toString()	//转换为字符串
valueOf() //返回原始值，公共方法所有对象
```

```
var num = 1.369;	//四舍五入，返回的是字符串
num.toFixed(2) //1.37 保留两位小数
num.toPrecision(6) //保留6位数

num.toLocaleString() //Number 对象转换为本地格式的字符串
```

数字范围

```js
Number.MAX_SAFE_INTEGER  // 可获取最大数 
// 数字型范围：-9007199254740991 到 9007199254740991 之间
```

### Global对象

属性

```
infinity	无穷大
NaN		非数字
undefined	未定义
```

方法

```javascript
//编码转换
encodeURI(URIString);	//编码,将字符串作为URI进行编码,和下方的编码范围不同
encodeURIComponent(URIString);	//编码,将字符串作为URI组件进行编码
decodeURI(URIstring)	//解码
decodeURIComponent(URIstring)	//解码

isFinite(number)	//是否是无穷大
isNaN(x)	//是否非数字

Number(object)	//转换为数字
parseFloat("1.23")	//转浮点数
parseInt()	//转整数
String(obj)	//转字符串
```

### JSON对象

对象和字符串互相转换，也可用于深拷贝对象

```javascript
//字符串转成对象
JSON.parse(JSON字符串)	//返回值为 对象，如果格式错误，则会报错
//对象转成JSON字符串
JSON.stringify(对象) //返回 JSON字符串,如果遇到转换不了的，则会丢弃
```

注意：如果有数字类型的并且数字超出了安全范围，则会丢失精度，可用json-bigint模块解决



### FileReader对象

>MDN: https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
>
>案例：https://www.cnblogs.com/LO-gin/p/6817319.html

```
<input type="file" accept="image/png" multiple> 
标签属性  
multiple 多选
accept="image/png"
accept="文件类型/扩展名"
```

属性

```
result	文件读取的结果存储在这里面，格式由读取方法决定
```

方法

```javascript
abort()		// 中断读取
readAsBinaryString(file)	// 将文件读取为二进制
readAsDataURL(file)		// 将文件读取为DataURL，BASE64
readAsText(file，encoding编码格式默认UTF8)	// 将文件读取为文本
```

事件

```
onabort	中断
onerror	出错
onload	文件读取成功完成
onloadend	文件读取完成
onloadstart	读取开始
onprogress	读取中
```

使用方法

```javascript
// 此代码用于将用户选择的文件展示在相应的位置
var file = document.querySelector('#file'); // 获取文件域type=file
var pic = document.querySelector('#pic'); //获取图片标签
// 当用户选择文件后触发
file.onchange = function() {
    // 输出文件对象
    console.dir(this)
    // 创建文件读取对象
    var reader = new FileReader();
    // 用户选择的文件列表 console.log(this.files);
    // 读取文件
    reader.readAsDataURL(this.files[0]); // 异步函数无法通过返回值获取结果
    // 监听onload事件
    reader.onload = function() {
        // reader.result能够获取图片显示的结果---一串路径字符串
        pic.src = reader.result;
    }
```

通过URL对象获得文件url

```javascript
var url = URL.createObjectURL(this.files[0]);	//得到文件临时url地址,关闭页面后失效
document.querySelector('img').src = url;	// 预览图片
formData.append('avatar',this.files[0]);	//添加表单对象，可用于上传文件
```

分片读取

```javascript
// 分片读取
let blob = files[0].slice(0,3145728) //文件对象就是一个blob对象 Blob.slice()
let reader = new FileReader();
reader.readAsText(blob);
reader.onload = function (e) {  console.log(reader.result ) }
// 读取后上传
```

读取后上传

```js
let reader = new FileReader()
reader.readAsBinaryString(file) // 读取为二进制
reader.onload = function (e) {
    let option = {
        headers: {'Content-Type': 'application/octet-stream' }  // 设置为二进制流类型
      }
    // reader.result 为读取的二进制结果
    axios.post('http://v0.api.upyun.com/demo-image', reader.result, option).then(res => {
    console.log(res);
     }).catch(err => {
        console.log(err);
     })
}
```





### RegExp对象

RegExp也就是JS中的正则表达式对象

1.通过对象的构造函数创建

```javascript
var reg = new RegExp(/表达式/, g);// 首个参数为常规字面量的构造函数
new RegExp('ab+c', 'g'); // 首个参数为字符串模式的构造函数
```

2.通过字面量创建

``` js
var 变量名 = /表达式/;
```

属性

```javascript
re.lastIndex = 15;	//该索引表示从哪里开始下一个匹配
```

方法

test方法(检测字符串是否符合规则)

```js
var re = /abc/;
re.test("abc123");	//只要包含abc,返回true
```

exec方法(匹配字符串返回结果数组)

```js
var re = /[0-9]{4,6}/;
var str = "小艺科技，您的验证码是89216，二次63124";
arr = re.exec(str);	//只会匹配一次，如要多次需循环匹配
console.log(arr);	//["89216"]
//获取全部结果
re.lastIndex = 0
while ((arr = re.exec(str)) !== null) {
	console.log(arr.index, arr[0]);
}
// 如果匹配项就一个，可以用字符串对象的match方法(可直接获取全部字符数组)
```

**正则表达式参数**

```js
//替换文本
//:  /表达式/switch参数:g全局匹配，i忽略大小写，m多行匹配，gi全局匹配+忽略大小写
var str = "abc123sdf";
str.replace(/123/g,"**");	//将123替换成**，g代表全部替换
//搜索文本
var n = str.search(/123/);
```

边界符

```js
var re = /^abc/;	// ^ 行文本以abc开头
var re = /abc$/;	// $ 行文本以abc结尾
```

字符类

```js
var re = /[abc]/;	// [] 只需包含其中任意一个字符，返回true
var re = /^[abc]$/;	// ^[]$ 只能包含其中任意一个字符，返回true，三选一
var re = /[a-z]/;	//只需包含26个英文字母中任意一个(小写)
var re = /[a-zA-Z0-9]/;	//只需包含26个英文字母中任意一个(大小写都行)或数字
. // 匹配除\n之外的任意单字符
```

字符类-取反

```js
var re = /[^a-z]/;	//[^]  方括号内加^代表 不能包含a-z的字母
```

量词符

```js
var re = /^[a-z]*$/;		// *   重复0次或多次
var re = /^[a-z]+$/;		// +   重复1次或多次
var re = /^[a-z]?$/;		// ?   重复0次或1次
var re = /^[a-z]{n}$/;		// {n}   重复n次
var re = /^[a-z]{n,}$/;		// {n,}  重复n次或多次
var re = /^[a-z]{n,m}$/;	// {n,m} 重复n到m次
```

小括号

```js
var re = /^abc{3}$/;		// 让c重复3次
var re = /^(abc){3}$/;		// 让abc重复3次
```

或 |

```js
var re = /^1[3]|[5][0-9]{9}$/; // 1开头，在跟着3或5，然后0-9的9位数字
```

预定义类

| 预定类 | 说明                                                |
| ------ | --------------------------------------------------- |
| \d     | 0-9之间任意一数字，相当于[0-9]                      |
| \D     | 0-9之间以外的字符，相当于[^0-9\]                    |
| \w     | 匹配任意的字母,数字,下划线，相当于[A-Za-z0-9_]      |
| \W     | 非,字幕,数字,下划线以外的字符，相当于[\^A-Za-z0-9_] |
| \s     | 匹配空格(换行符,制表符,空格符)，相当于[\t\r\n\v\f]  |
| \S     | 匹配非空格的字符，相当于[^\t\r\n\v\f\]              |

一些表达式

```js
var re = /^1[3|4|5|7|8][0-9]{9}$/;	//匹配手机号
var re = /[\u4e00-\u9fa5]/;	//匹配中文字符
var re = /[1-9][0-9]{4,}/;	//匹配QQ号
```

需要转义的字符

```js
* . ? + ^ $ | \ / [ ] ( ) { }
```

含义

```
$：匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 ‘\n' 或 ‘\r'。要匹配 $ 字符本身，请使用 \\$，其中第一个\是转义\的，然后两个合起来才是\字符，下面的\\也是如此，不在多余解释了 
( )：标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用\( 和 \) 
*：匹配前面的子表达式零次或多次 
+：匹配前面的子表达式一次或多次 
.：匹配除换行符 \n之外的任何单字符 
[ ]：标记一个中括号表达式的开始 
?：匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。 
\：将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。
/：要匹配 / 字符， 
^：匹配输入字符串的开始位置，除非在方括号表达式中使用，此时它表示不接受该字符集合。 
{ }：标记限定符表达式的开始。 
|：指明两项之间的一个选择。
```



# Window对象

window对象表示一个浏览器窗口或一个框架

## **属性方法事件**

属性

```javascript
innerHeight/innerWidth	//窗口的文档显示高，宽
outerHeight/outerWidth	//窗口的外部高，宽
length //设置或返回窗口中框架数量
pageXOffset/pageYOffset //页面相对窗口左上角的X,Y 位置
screenTop / screenLeft //窗口在屏幕上的坐标
```

**方法**

交互方法

```javascript
window.alert('msg')		//信息框
window.confirm('msg')	//信息框，带有确认取消按钮，确认返回true
window.prompt('提示msg','默认文本')	//输入框
//其它方法 在 DOM对象里面
```

```javascript
window.scroll(x,y) //滚动条滚动，不带单位
```

事件

```js
window.load	 // 页面加载完成事件(含图片，脚本，css等)
document.DOMContentLoaded	// DOM加载完成事件(不包含图片，css，flash)
resize		// 调整窗口大小事件
scroll		// 滚动条事件
window.addEventListener('scroll', scrollFn) // 监听 滚动条事件
```

监听标签页切换事件

当前标签隐藏，显示事件监听

```js
const handler = () => {
  // 也可以通过document.hidden属性（布尔类型）来判断
  // window.document.hidden (true/false)

  // document.visibilityState拥有两种字符串枚举值（'visible' 和 'hidden'）
  if (window.document.visibilityState === 'visible') {
    // 当页签处于可见状态，TODO
  } else {
    // 当页签处于不可见状态（hidden），TODO
  }
};
// 监听visibilitychange 事件
window.document.addEventListener('visibilitychange', handler);
```



## 其它方法

requestAnimationFrame事件

[摘录](https://github.com/Michael-lzg/my--article/blob/master/other/%E5%88%86%E4%BA%AB%E5%87%A0%E4%B8%AA%E5%AE%9E%E7%94%A8%E7%9A%84API.md)

会在浏览器下次渲染之前调用，可以将要做的事情推迟到下次渲染之前，保证流畅性

```js
// 每秒中计算一次网页的 FPS,刷新率
var lastTime = performance.now()
var frame = 0
var lastFameTime = performance.now()
var loop = function (time) {
  var now = performance.now()
  var fs = now - lastFameTime
  lastFameTime = now
  var fps = Math.round(1000 / fs)
  frame++
  if (now > 1000 + lastTime) {
    var fps = Math.round((frame * 1000) / (now - lastTime))
    frame = 0
    lastTime = now
  }
  window.requestAnimationFrame(loop)
}
loop()
```

MutationObserver 是一个可以监听 DOM 结构变化的接口

当 DOM 对象树发生任何变动时，MutationObserver 会得到通知。

MutationObserver 是一个构造器，接受一个 callback 参数，用来处理节点变化的回调函数，返回两个参数：

- mutations：节点变化记录列表`（sequence<MutationRecord>）`
- observer：构造 MutationObserver 对象。

MutationObserver 对象有三个方法，分别如下：

- observe：设置观察目标，接受两个参数，target：观察目标，options：通过对象成员来设置观察选项
- disconnect：阻止观察者观察任何改变
- takeRecords：清空记录队列并返回里面的内容

```js
//选择一个需要观察的节点
var targetNode = document.getElementById('root')

// 设置observer的配置选项
var config = { attributes: true, childList: true, subtree: true }

// 当节点发生变化时的需要执行的函数
var callback = function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      console.log('A child node has been added or removed.')
    } else if (mutation.type == 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.')
    }
  }
}

// 创建一个observer示例与回调函数相关联
var observer = new MutationObserver(callback)

//使用配置文件对目标节点进行观测
observer.observe(targetNode, config)

// 停止观测
observer.disconnect()
```

图片懒加载

```js
const imgs = document.querySelectorAll('img[data-src]')
const config = {
  rootMargin: '0px',
  threshold: 0
}
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target
      let src = img.dataset.src
      if (src) {
        img.src = src
        img.removeAttribute('data-src')
      }
      // 解除观察
      self.unobserve(entry.target)
    }
  })
}, config)

imgs.forEach((image) => {
  observer.observe(image)
})
```





## 定时器

```javascript
// 定时器 的最小时间据说是 4ms，也就是填1-4是一样的
//返回的标识就是一个数字，谷歌从1开始
var timer = setTimeout(调用函数,毫秒数);	//时间到就执行，只执行一次
clearTimeout(timer);	//清除定时
var timer = setInterval(调用函数,毫秒数);	//周期执行，每隔指定时间执行一次
clearInterval(timer);	//清除定时
```

打开窗口

```javascript
window.open(URL,name名称标记,Features,replace)	//打开一个新窗口
print()	//打印当前窗口内容
resizeBy():　　按照指定的像素调整窗口的大小
resizeTo():　　把窗口的大小调整到指定的宽度和高度
crollBy(x,y)	滚动条移动。会累加
scrollTo(x,y)	滚动到指定坐标
focus()		//获得焦点
blur()		//放弃焦点
```



## location/nav/his对象

**location对象**

操作浏览器页面地址信息

属性

```
location.href	页面URL(可读写)	//与JS文件路径无关，与引入所在html文件路径有关
location.host	域名
location.port	端口号
location.pathname	路径
location.search		参数
location.hash		#后面常见于锚点链接
```

方法

```
location.assign(url)	重定向页面(也可跳转页面)
location.replace(url)	替换当前页面(不记录历史，所以不能后退)
location.reload(false)	刷新页面(如为true则强制刷新) ctrl+f5
```

**navigator对象**

包含了浏览器型号相关信息

```js
navigator.userAgent;	//浏览器UA
```

```js
// 检测浏览器类型
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile | BlackBerry | IEMobile | MQQBrowser | JUC | Fennec | wOSBrowser | BrowserNG | WebOS | Symbian | Windows Phone)/i))) {
	window.location.href = ""; //跳转到手机地址
} else {
	window.location.href = ""; //电脑
}
```

**history对象**

浏览器访问的历史记录操作

```
back()		//后退
forward()	//前进
go(参数1)		//参数为1则是前进一次，-1为后退一次
```

**screen对象**

屏幕信息

```
screen.width //屏幕分辨率
screen.availWidth  //除任务栏的屏幕宽度
```



------

## 本地存储

Cookie

```
document.cookie = name+'='+value+';PATH=/ ; EXPIRES='+oDate.toGMTString();
```

window.sessionStorage

生命周期为关闭浏览器窗口后消失，不同页面不共享，以键值对形式存储，最大5M

```
window.sessionStorage.setItem(key,value)	//存储
window.sessionStorage.getItem(key)		//获取
window.sessionStorage.removeItem(key)	//删除
window.sessionStorage.clear()		//全部删除
```

window.localStorage

生命周期永久有效，同个网站共享，以键值对存储，最大20M

属性

```
localStorage.length;	//已存储的key数量
```

方法

```
window.localStorage.setItem(key,value)	//存储
window.localStorage.getItem(key)	//获取
window.localStorage.removeItem(key)		//删除
window.localStorage.clear()		//全部删除
window.localStorage.key(n)	//取第n个键名
```

```
//枚举所有的localStorage键值对
for (var i = 0; i < localStorage.length; i++) {
	var key = localStorage.key(i);
	var value = localStorage.getItem(key);
	console.log(key, value); //键值对
}
```



# DOM对象

文档：一个页面就是一个文档，DOM 中使用 document 表示
元素：页面中的所有标签都是元素，DOM 中使用 element 表示
节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM 中使用 node 表示

```javascript
console.log(text) // 打印内容
console.dir(obj) // 可以打印我们获取的元素对象，更好的查看对象里面的属性和方法

console.time("AA") //开始
// ....代码
console.timeEnd("AA") // 结束，并得到从开始到结束所消耗的毫秒数

document.write('<div>1</div>') // 写入文档,js代码写在哪里，则代表在哪里输出页面
document.write(`小明今年${age}岁`)	//age是变量
```

`父iframe`和`子iframe`

```
HTML代码
<iframe name="myFrame" src="child.html"></iframe> 
JS代码
父窗口调用子窗口：myFrame.window.子页面函数(); 
子窗口调用父窗口：parent.父页面函数();  // parent代表父窗口对象
```



## 节点操作

节点node，概述

```
一般情况节点至少有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）
nodeType=1元素，nodeType=2属性，nodeType=3（文本节点包含文字、空格、换行等）
nodeName //#text=文本节点，标签返回大写标签名
```

获取节点

```javascript
document.getElementById('id')		//通过元素ID获取
document.getElementsByTagName('标签名')	//通过标签名获取，返回数组
HTML5新增方法
document.getElementsByClassName('类名')	//通过类名获取，返回数组
document.querySelector('CSS选择器')			//通过选择器获取，返回第一个元素
document.querySelectorAll('CSS选择器')		//通过选择器获取，返回伪数组
```

```javascript
document.body		//获取body对象
document.documentElement	//获取html对象
```

节点层级

```js
父节点
node.parentNode		//获取父节点，或返回null
node.parentElement
子节点
node.childNodes	//获取子节点数组，包括元素节点，文本节点(不常用)
node.children		//获取子元素节点数组
node.firstChild	//获取第一个子节点(不常用)
node.lastChild	//获取最后一个子节点(不常用)
node.firstElementChild	//获取第一个子元素节点
node.lastElementChild	//获取最后一个子元素节点
兄弟节点
node.nextSibling	//获取当前元素下一个兄弟节点(不常用)
node.previousSibling	//获取当前元素上一个兄弟节点(不常用)
node.nextElementSibling	//获取当前元素下一个兄弟元素节点
node.previousElementSibling	//获取当前元素上一个兄弟元素节点3
```

创建节点

```javascript
 document.createElement('标签名')	//效率低
 elm.innerHTML = html文本	//通过写内容来创建	//效率高
 document.write()	//直接写入文档，会导致重绘页面
 
 elm.insertAdjacentText(插入位置，文本)
 elm.insertAdjacentHTML(插入位置，HTML文本)
 位置参数：'beforebegin'元素自身的前面，'afterbegin'元素内部第一个子节点之前，'beforeend'元素内部最后一个子节点之后，'afterend'元素自身的后面
```

添加节点

```javascript
node.appendChild(child)		//添加到内部子节点列表后面
node.insertBefore(child, 指定元素)		//添加到内部指定子节点前面
node.replaceChild(新节点, 要替换的旧节点);	//替换节点
```

删除节点

```javascript
node.removeChild(child)		//删除节点内部的指定子节点，返回被删除的节点
elm.remove()	//删除自身
```

复制(克隆)节点

```javascript
node.cloneNode(false)	//返回自身的一个副本，默认浅拷贝，true深拷贝(含子元素)
```



## 元素属性

元素标签属性

改节点、主要修改元素的属性，dom元素的内容，属性表单等值

1. 修改元素属性：src、href、title 等
2. 修改普通元素内容：innerHTML、innerText
3. 修改表单元素：value、type、disabled禁用元素等
4. 修改元素样式：style、className

```javascript
var elm = document.getElementById('app');
elm.style.width = "100px";	//修改元素宽度样式，(行内样式操作)
elm.className = "box";	//替换元素样式类名
element.innerHTML = "<em>abc</em>";	//修改元素HTML
```

**自定义属性**

主要用于方便存储一些临时的标记，数据等

```javascript
var elm = document.getElementById('app');
elm.setAttribute('属性','值')	//设置属性
elm.getAttribute('属性')		//获取属性值
elm.removeAttribute('属性')	//移除属性
----------------------
elm.attributes	//返回所有属性的集合(数组)
elm.attributes['class'].value	//返回指定属性值,等同elm.attributes[0].value
H5新增方法--ie11+------------
elm.dataset.index = '1' 或者 element.dataset[‘index’] ='1'
//效果：<div data-index="1"></div>  会带上data-前缀 
------------------
如果属性名是data-开头，则需要全部小写
```

```
数据绑定(2021.9.8暂时未研究透)
attributes的数据会同步到property上，然而property的更改不会改变attribute
```



## 偏移

元素偏移量 offset 系列

1.获得元素距离带有定位父元素的位置，2.获得元素的宽高，3.得到的数据不带单位

offset可以得到确切数字。style只能得到行内样式中的，但可以修改值

```javascript
element.offsetParent	//获得该元素带有定位的父元素，没有则返回body
element.offsetTop		//获得元素相对带有定位元素的上偏移，或距离文档位置
element.offsetLeft
element.offsetWidth		//获得宽度（内边距padding + 边框border + 内容区content）
element.offsetHeight
```

元素可视区 client 系列

常用于获取元素的大小，页面大小

```javascript
element.clientTop	//元素上边框大小(只读)
element.clientLeft
element.clientWidth		//元素宽度(padding + 内容区)不含边框
element.clientHeight
```

元素滚动 scroll 系列

可以通过该属性知道浏览器滚动条往上滚动了多少距离，然后让侧边栏显示

```javascript
element.scrollTop	// 元素被卷去的上侧距离(可读写)
scrollLeft
scrollWidth		// 元素宽度(padding+内容区+溢出区)不含边框，(只读)
scrollHeight
window.pageYOffset	// 页面被卷去的头部(Y轴),也可以利用元素的offsetTop得到
document.documentElement.scrollTop // 页面被卷去的头部Y轴
document.body.scrollTop// 页面被卷去的头部Y轴
// 有的浏览器是body 有的是html
```

`元素滚动`到浏览器窗口的`可见区`域

具体文档地址：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView

```js
element.scrollIntoView() // 不带参数
element.scrollIntoView({
	behavior: 'smooth' // 动画过度效果  auto 、smooth
})
```

getBoundingClientRect元素位置

```javascript
var box = document.getElementById('box');
// getBoundingClientRect 方法返回元素的大小及其相对于视口的位置
console.log(box.getBoundingClientRect().top);
console.log(box.getBoundingClientRect().right);
console.log(box.getBoundingClientRect().bottom);
console.log(box.getBoundingClientRect().left);
// 判断元素是否在可视区域内
function isElView(el) {
  var top = el.getBoundingClientRect().top // 元素顶端到可见区域顶端的距离
  var bottom = el.getBoundingClientRect().bottom // 元素底部端到可见区域顶端的距离
  var se = document.documentElement.clientHeight // 浏览器可见区域高度。
  if (top < se && bottom > 0) {
    return true
  } else if (top >= se || bottom <= 0) {
    // 不可见
  }
  return false
}
```

获取标签距离页面顶部的距离，穿透所有带定位的父元素

```js
// 原理：不断获取带定位的父元素，将所有的top累加得到最终top
var el = document.querySelector('.like-box')
console.log('top', getElementTop(el))
getElementTop (elem) {
    var elemTop = elem.offsetTop// 获得elem元素距相对定位的父元素的top
    elem = elem.offsetParent// 将elem换成带有相对定位的父元素
    while (elem != null) { // 只要还有相对定位的父元素
    // 获得父元素 距他父元素的top值,累加到结果中
    elemTop += elem.offsetTop
    // 再次将elem换成他相对定位的父元素上;
    elem = elem.offsetParent
    }
    return elemTop
}
```





## 元素样式操作

样式操作

```
elm.style.属性名 = 属性值
elm.style.text-align //需将-删除，把后面的a大写A
elm.style.textAlign
```

标签class类操作

```
elm.className = "box"
```

classList属性是H5新增的，返回元素类名，IE10+支持

```
elm.classList.add(class1,class2);	//添加类名或者多个
elm.classList.remove(class1,class2);	//移出一个或多个类名
elm.classList.toggle(class,true);	//切换类名：参数1 要添加或删除的类名，参2 true添加，false删除，该参数可不写则自动判断
elm.classList.contains(class1);//判断指定类名是否存在
elm.classList.item(index);	//根据索引返回类名，没有则返回null
elm.classList.length;	//数量
```



## 事件

事件源》事件类型》事件处理函数

绑定事件

```
1.传统注册方式		只能设置一个处理函数
var elm = document.getElementsByTagName("div")[0];
案例1：<div onclick="getinfo()">123</div>
案例2：elm.onclick = function(){代码;}
```

```
2.监听事件方式		可设置多个
格式：elm.addEventListener(type,listener,useCapture)
elm.addEventListener("click",事件处理函数,可选 是个布尔值 默认false)	//不带on
第三个参数，false=事件冒泡阶段调用，true=事件捕获阶段调用。
{once: true} 第三个参数如填写这个，则代表只触发一次
注意某些事件没有冒泡（onblur,onfocus,onmouseenter,onmouseleave）
elm.attachEvent("onclick",事件处理函数)	//带on，IE8独有命令
```

解绑事件

```
1.传统方式
elm.onclick = null;
```

```
2.监听方式
elm.removeEventListener("click",要解除的事件处理函数,false)
elm.datachEvent("onclick",要解除的事件处理函数)
```

事件对象

```
elm.addEventListener('click', function(event) {}）
event就是事件对象，包含属性和方法
例如：
e.target	//事件触发对象
e.type		//事件类型 click
e.bubbles	//true=支持冒泡，false=该事件不冒泡
e.preventDefault()	//阻止默认行为 例不让链接跳转
e.stopPropagation()	//阻止冒泡/流动
e.clientX/e.clienty	// 相对于浏览器可视区左上角坐标
e.pageX		// 相对于document文档左上角坐标
e.offsetX/e.offsetY	//相对于元素自身左上角的位置
e.screenX	// 相对于屏幕的左上角坐标
e.key	//按下的键值，e.keyCode //按下的键的ASCII码
e.button	//鼠标按下的键，0左,1中,2右(标准浏览器)，1左,4中,2右(IE)
e.altKey/e.ctrlKey/e.shiftKey //相应功能键是否按下
```

事件委托

事件冒泡的特性，有坏处，也有好处，需要灵活运用

```
<ul>
	<li>我是第1</li>
	<li>我是第2</li>
	<li>我是第3</li>
</ul>
//点击每个li都能弹出对话框，利用冒泡特性，只需要给ul注册事件即可
//然后判断事件对象,e.target.tagName = "LI"
e.target.localName = "li"
```

事件委托也称为事件代理，原理：给父元素设置事件监听，然后利用冒泡原理影响子元素 

只操作了一次DOM，提高了代码性能

**封装通用的事件箭头函数**

`事件监听函数`，类似jQuer的功能

```js
// 绑定的元素，绑定的事件，要触发的元素，回调函数
function bindEvent(elem, type, selector, fn){
    if(!fn) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type,function(e){
        if(selector){
            if(e.target.matches(selector)){  // matches方法可检查该选择器能否选中自己
                fn.call(e.target, e)  // 通过call来改变函数 this指向
            }
        } else { fn(e) }
    })
}
// 调用
div = document.querySelector('.box')
bindEvent(div, 'click', 'span', function(){
    console.log('被点击', this);  // this 指向 span
})
```



## 常用事件

部分事件

```
页面
load		//页面加载完毕事件
unload	//页面退出(关闭)事件
pageshow	//页面显示事件，给window添加
scroll	滚动条滚动触发，事件源document
部分
dblclick	//双击
change	//内容被改变
input		//文本框内容改变 实时
resize	//窗口或框架尺寸被调整
select	//文本被选定
```

鼠标事件

```
click	鼠标左键点击
dblclick	双击
mouseover	鼠标经过
mouseout	鼠标离开
mouseenter	鼠标经过(不会冒泡)
mouseleave	鼠标离开(不会冒泡)
focus	获得鼠标焦点
blur	失去鼠标焦点
mousemove	鼠标移动
mouseup	鼠标弹起
mousedown	鼠标按下
```

```
禁用鼠标右键菜单，利用菜单事件和事件对象
document.addEventListener('contextmenu', function (e) {
	e.preventDefault();
})
```

键盘事件

```
keydown		某键按下
keypress	某键按下，区分大小写(不识别功能键 ctrl,shift 箭头等)
keyup	某键弹起
```

## 移动端事件

触屏事件

```
touchstart		手指触摸到元素
touchmove		手指在元素上滑动
touchend		手指从元素移开
```

触摸事件对象TouchEvent

```
touches			正在触摸的所有手指列表
targetTouches	正在触摸当前元素的手指列表(重点)
changedTouches	手指状态发生了改变的列表，从无到有，从有到无变化
```

移动端拖动元素

1. 触摸元素 touchstart 获取手指初始坐标，同时获取盒子原先位置
2. 移动手指 touchmove 计算手指滑动距离，且移动盒子
3. 离开手指 touchend

```
手指移动也会触发滚动屏幕，所以需要阻止默认的屏幕滚动 e.preventDefault();
```

click事件延时解决方案

移动端点击事件会有300ms的延时，因为有双击屏幕缩放页面的功能

1.禁用缩放，浏览器禁用默认的双击缩放行为

```
<meta name="viewport" content="user-scalable=no">
```

2.利用touch事件自己封装

```
1.当手指触摸屏幕，记录触摸时间
2.手指离开屏幕，用离开时间减去触摸的时间
3.如果时间小于150ms,并且没有滑动屏幕，那我们就定义为点击
```

```javascript
//封装tap，解决click 300ms 延时
function tap(obj, callback) {
    var isMove = false;
    var startTime = 0; // 记录触摸时候的时间变量
    obj.addEventListener('touchstart', function (e) {
        startTime = Date.now(); // 记录触摸时间
    });
    obj.addEventListener('touchmove', function (e) {
        isMove = true; // 看看是否有滑动，有滑动算拖拽，不算点击
    });
    obj.addEventListener('touchend', function (e) {
        if (!isMove && (Date.now() - startTime) < 150) { // 如果手指触摸和离开时间小于150ms 算点击
            callback && callback(); // 执行回调函数
        }
        isMove = false; // 取反 重置
        startTime = 0;
    });
}
//调用
tap(div, function () { // 执行代码 });
```

3.使用插件，fastclick插件解决300ms延迟

```
fastclick插件 GitHub官网地址： https://github.com/ftlabs/fastclick
```

ios设备下需要设置css样式 cursor: pointer

## 模拟触发事件

通过执行JS代码来模拟触发事件

```javascript
例如，触发鼠标移入事件：
var onover = document.createEvent("MouseEvents"); //创建事件类型
onover.initMouseEvent("mouseover"); //初始化对应的事件信息
elm.dispatchEvent(onover); //触发该事件
```

# 其它

## JSDOC

JSDoc支持，给变量声明类型，让vscode能更好的智能提示

在JS文件中的变量前或者函数前输入` /**`

```js
/** @type {HTMLFrameElement} */
var dd = document.querySelector(".son");
dd.textContent = dd.clientHeight;
```



