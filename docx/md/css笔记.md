

# CSS基本 #

> 2021.8.6 BY：林忆

----------

## 选择器

选择器优先级在“CSS三大特性里面"

**基础选择器：**

> 标签，类，ID，通配符

| 选择器名称 | 选择器格式 |
| ---------- | ---------- |
| 标签       | div{}      |
| 类         | .box       |
| ID         | #id{}      |
| 通配符     | *{}        |

**复合选择器：**

> 中间空格隔开
>
> 后代选择器，父标签 子元素，div span
>
> 子代选择器，父标签 > 子元素，div > span
>
> 交集选择器，标签.类名，div.box，	中间紧紧挨着
>
> 并集选择器，选择器1，选择器2，用逗号隔开



**结构伪类选择器**

| 选择器结构             | 说明                                         |
| ---------------------- | -------------------------------------------- |
| li:**first**-child{}   | 匹配父元素中第一个子元素，且是li元素         |
| li:**last**-child{}    | 匹配父元素中最后一个子元素，且是li元素       |
| li:nth-child(n){}      | 匹配父元素中第n个子元素，从1开始，且是li元素 |
| li:nth-last-child(n){} | 匹配父元素中倒数第n个子元素，且是li元素      |
| li:nth-of-type(n){}    | 匹配父元素中同类型li子元素的数量，匹配第n个  |

n的注意点：

1. n可以为：0，1，2，3，...
2. 通过n可以组成常见公式，n必须写在前面

| 功能        | 公式                                |
| ----------- | ----------------------------------- |
| 偶数        | even，2n，倍数(5n)选中第5，10的意思 |
| 奇数        | odd，2n+1，2n-1                     |
| 前5个       | -n+5                                |
| 从第5个往后 | n+5                                 |

**属性选择器**

```
例如：
<div attr="val-nav-blu"></div>
使用
div[attr]			选择带有attr属性的 div元素
div[attr="val"]		选择div标签且有attr属性且属性值是val的元素
div[attr^="val"]	选择属性值val开头的元素
div[attr$="blu"]	选择属性attr值 以blu结尾的元素
div[attr*="nav"]	选择属性attr值 包含nav的元素
div[attr~=value]	选取attr属性值中包含指定词汇的元素
*[attr|="en"]		选择attr属性值以 en开头 或者等于en的元素

div:not([style*='display: none;'])   选择不包含 :not 里面属性的标签
```

兄弟选择器

```
.father~p{}
下的所有元素，也就是P都被选中
<div>
   <div class="father"></div>
   <p></p>
   <p></p>
</div>
```

相邻选择器

```
.father+p{}
下一个元素被选中，第一个p
```

伪类选择器

```css
p:has(span) {
  /* 选择p标签且包含span子标签的p标签。*/
}
```





------

**链接伪类选择器**

有时候没生效需要检查权重，所以需要按照下列顺序来写

>a:link 未访问过
>
>a:visited 访问后的状态
>
>**a:hover 鼠标悬停时的状态**	使用最多的，可以定义任何元素经过样式
>
>a:active 鼠标按下

**焦点伪类选择器**

用于选中元素获得焦点时的状态，用于表单控件

```
input:focus {
 background-color:skyblue;
}
// 还能选择更多样式的例如，input:checked选中的复选框
```

input文本框获得焦点时默认会显示外部轮廓线



## CSS三大特性 ##

**1.继承性**

可以继承的常见属性：

- color
- font系列
- text-indext,text-align
- line-height
- **list-style 清除li的默认样式**

**特殊**

- a不能继承颜色，因为有默认是蓝色样式
- h系列不能继承字体大小，因为有默认大小

**2.层叠性**

>样式冲突，也就是相同的样式重复了，则采取就近原则
>
>多个样式重叠到一起

**3.优先级**

>- 标签选择器     0，0，0，1
>- 类的选择器     0，0，1，0      伪类选择器也是1，0
>- ID的选择器     0，1，0，0
>- 行内样式表     1，0，0，0
>- !important    最大的无限大

继承 < 通配符选择器 < 标签选择器 < 类选择器/伪类选择器 < id选择器 < 行内样式 <  !important

使用复合选择器时权重会叠加，每个位数会叠加，但是不会进位，例如叠加后是0，0，0，10

a:hover 伪类选择器也是 0，0，1，0，相当于类的权重



## 字体/文本/样式 ##

**字体连写 font**

```javascript
/*字体之间用逗号隔开，第一个没找到则用第二个，都不在则用默认字体*/
font : style weight size family;
/*顺序要求 swsf （稍微舒服）*/
font: italic 700 50px/line-height 楷体,"Microsoft YaHei",small-caps;
```

**字体大小 font-size: 28px**

```
取值：数字 + px。谷歌浏览器默认文字大小是16px
```

**字体粗细 font-weight**

| 正常        | 加粗          | 备注          |
| ------------- |:-------------:|:-------------:|
| normal      | bold | 关键字表示 |
| 400      | 700      | 数字表示，100-900的整百数，400正常，700加粗      |

**字体样式 font-style**

```javascript
    /* 字体样式 italic 倾斜 , normal 正常 */
    font-style: normal;
    /* fs+回车 倾斜 */
    /* fsn+回车  不倾斜 */
    font-style: italic;
```

**字体类型 font-family**

无衬线字体（sans-serif）

1. 特点：文字笔画粗细均匀，并且首尾无装饰
2. 场景：网页中大多采用无衬线字体
3. 常见该系列字体：黑体、Arial

Ø 衬线字体（serif）

1. 特点：文字笔画粗细不均，并且首尾有笔锋装饰
2. 场景：报刊书籍中应用广泛
3. 常见该系列字体：宋体、Times New Roman

Ø 等宽字体（monospace）

1. 特点：每个字母或文字的宽度相等
2. 场景：一般用于程序代码编写，有利于代码的阅读和编写
3. 常见该系列字体：Consolas、fira code


----------

**文本样式**

**文本颜色 color**

**首行缩进 text-indent**

```js
/* 首行缩进 */
 /* ti+回车 */
 /* text-indent: -20px;  可以使用负值*/
 text-indent: 32px;
 /* em单位，相对当前文字的大小来计算，1em相当于一个字 */
 text-indent: 2em;
 /* 注意
  1.只能对独占一行的标签使用该属性，才能生效
```

----------
**文本对齐 text-align**

给父元素加本属性。文本水平对齐和图片水平对齐。vertical-align可以让图片垂直对齐(详见常用属性装饰)

```javascript
 /* 文本水平对齐方式 */
  /* 属性值 left，center，right */
  text-align: center;
  /* 注意
   只能给独占一行的父元素设置
	让里面的子元素居中显示
   子元素可以是
   文本，span标签，a标签，input标签，img标签
   ---
   /*text-align：justify 向两侧对齐，最后一行无效
```

**文本修饰 text-decoration**

可以去除超链接默认带有的下划线

```javascript
/* 添加下划线 tdu*/
  text-decoration: underline; /* tkst代课瑞伸  安 的 来 嗯 */
/* 清除下划线 tdn*/
  text-decoration: none;
/* 添加上划线 */
  text-decoration: overline;
/* 添加删除线 */
  text-decoration: line-through;
```

**行高 line-height**

> 取值，行高 = 上间距 + 字体大小 + 下间距

- 数字+px
- 倍数（当前标签font-size的倍数）

1. 让单行文本垂直居中可以设置 line-height : 文字父元素高度
2. 网页精准布局时，会设置 line-height : 1 可以取消上下间距，
3. **(有很多行内标签有默认行高，转换成block好像没有默认行高)**

------

**单行文本溢出省略号显示**

``` css
white-space: normal;/* 默认值。文字显示不开，自动换行 */
/*------------------------*/
white-space: nowrap;		/* 文字显示不开，强制一行显示 */
overflow: hidden;			/* 溢出的部分隐藏 */
text-overflow: ellipsis;	/* 溢出部分用省略号代替 */
```

**多行文本溢出省略号显示**

```css
/* 多行文本溢出显示...省略号显示，有兼容性问题 */
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;   /* 弹性伸缩盒子模型显示 */
-webkit-line-clamp: 2;  /* 限制一个块元素显示的文本行数, 只是在第2行显示省略号 */
-webkit-box-orient: vertical;  /* 设置或检索伸缩盒对象的子元素排列方式 */
/* 只是在第2行显示省略号，第三行依然会显示文字(如果超出)，所以需要设置盒子高度来隐藏超出的行 *
```

强制换行

```css
/* 如果一段文本，中间没有 汉字，空格，只有数字，这种情况 浏览器不会进行换行，所以需要强制换行 */
width: 200px;
white-space: normal;
word-break: break-all;
```

多情况写法

```css
white-space: normal;  /* 设置元素内部空白的处理方式，normal自动换行 */
word-break: break-all;   /* 非CJK字符超出宽度应如何断行，break-all表示单词过长强制换行 */
word-wrap: break-word;   /* 也是控制非CJK字符换行 */
overflow-wrap: break-word;   /* 也是控制非CJK换行，兼容性好 */  
-o-text-overflow: ellipsis;   /* 控制溢出文本应如何显示，ellipsis显示省略号 */
text-overflow: ellipsis;   /* 同上 */
overflow: hidden;   /* */
display: -webkit-box;   /* 布局方式很老的方式 */
-webkit-line-clamp: 3;   /* 控制3行显示 */
-webkit-box-orient: vertical;   /* 排列方向为垂直 */
```


文本左右排列改为上下排列显示

```css
.test {
    display: inline-block;
    background-color: #ccc;
    writing-mode: vertical-lr; /* 让文字上下排列 */
    padding-block: 10px; /* 上下内边距 */
}





其它属性

| 属性名         | 说明                                                       |
| -------------- | ---------------------------------------------------------- |
| text-transform | none无，uppercase大写，lowercase小写，capitalize首字母大写 |
| font-varient   | 将英文文本转换为“小型”大写字母                             |
| letter-spacing | 文字间距，单位像素                                         |
| word-spacing   | 词距                                                       |









## 背景相关属性 ##

完整连写：

```
background: color image repeat position/size;
```

**背景颜色 background-color （bgc）**

- 背景颜色默认值是透明： rgba(0,0,0,0) 、transparent
- 背景颜色不会影响盒子大小，并且还能看清盒子的大小和位置，一般在布局中会习惯先给盒子设置背景颜色

**背景图片 background-image:url()**

- 背景图片中的url中的图片路径可以省略引号，图片默认是平铺的

**背景平铺 background-repeat**

| 取值        	| 效果          |
| ------------- |:-------------:|
| repeat    	| 默认值(水平垂直方向都平铺) |
| no-repeat  	| 不平铺      |
| repeat-x 		| 沿着水平X方向平铺      |
| repeat-x		| 沿着垂直Y方向平铺      |

**背景图片位置 background-position**

- 背景位置 默认值 left top |0 0 
- 方位名词 最多只能表示9个位置
- 数字+px（坐标） x y 

**背景图片尺寸 background-size**

```
background-size: 400px 300px;第一个是宽，第二个是高(也可以设置auto)
background-size: 100% 100%;  可能会拉伸变形 相对的是盒子宽高
background-size: contain; 	等比例缩放，直到有一边贴着盒子边缘，不超出盒子,可能有空白
background-size: cover; 	等比例缩放，覆盖整个盒子，多出去的部分被切除
```

**背景附着 background-attachment**

设置背景图像是否随内容而滚动

- scroll(背景滚动)
- fixed(背景固定)



------

**opacity:0.5 透明效果**

## input控件样式

**input文本框样式**

>placeholder占位符的文字颜色修改，类似伪元素

```css
input::placeholder {
    color: #bfbfbf;
}
```

>去掉轮廓线（获得焦点时的边框）

```css
outline: none;
```

------

**列表li样式list-style**

对一类资源进行编号，如新闻列表，博客列表，商品列表等等，有的需要进行阿拉伯编号，有的需要字母编号，这时候如果自己手写的话就麻烦了。没错，不要忘记list-style这个属性，它的功能还是蛮强大

list-style-type样式

```
list-style-type：none		无样式
list-style-type：disc		实心圆(默认值)
list-style-type：circle		空心圆
list-style-type：square		实心方块
list-style-type：decimal		阿拉伯数字    1
list-style-type：lower-alpha	小写英文字母   a
list-style-type：upper-alpha	大写英文字母   A
等等还有很多
```

list-style-position标记样式显示位置

```
outside :　 默认值。列表项目标记放置在文本以外，且环绕文本不根据标记对齐
inside :　 列表项目标记放置在文本以内，且环绕文本根据标记对齐
```

list-style-image标记的图像

自定义列表项符号

```
none :　 默认值。不指定图像
url ( url ) :　使用绝对或相对url地址指定图像，若图片不能显示那么list-style-type将会作用
```

------

**table表格样式**

表格边框合并border-collapse

```
border-collapse: collapse;   /*边框合并，如果相邻，则共用一个边框*/
默认值separate，分开不合并
表格独有的属性。除了表格，在其他地方是用不上
```

表格边框间距border-spacing

```
border-spacing:5px 10px; 单元格之间水平方向的间距为5px，垂直方向的间距为10px
```

表格标题位置caption-side

```
caption-side: top;   默认值，标题在顶部
			  bottom 底部
一般情况下我们都在caption元素中设置
```

img图片样式

MDN：https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit

```css
object-fit: cover;  /*图片显示方式，平铺，或者沾满*/
/*
contain   按比例缩放，空白区域使用黑色填充
cover    按比例缩放，铺满盒子，超出区域将被裁剪
fill	铺满盒子，拉伸方式
none	保持原有尺寸
scale-down	内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些
*/
```



# CSS装饰属性

常用属性

```
widht宽,height高,color颜色,border边框,padding内边距,margin外边距,float浮动，background背景
```

颜色

```
红red，橙orange，，黄yellow，绿green，青cyan，蓝blue，紫purple，灰gray，粉pink，黑black，白white，棕brown
```

**overflow** 属性，当内容溢出元素框时如何显示

```
值	描述
visible	默认值。内容不会被修剪，会呈现在元素框之外。
hidden	内容会被修剪，并且其余内容是不可见的。
scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
inherit	规定应该从父元素继承 overflow 属性的值。
可以解决浮动无法撑开父元素高度的问题，会去寻找父元素的边界
```

```javascript
// 隐藏overflow:auto 的滚动条
ul::-webkit-scrollbar {
	display: none;
}
```



**vertical-align**：设置元素垂直对齐方式

本属性不简单，详见-BUG-案例中有例子

```
baseline	默认，基线对齐
top		顶部对齐
middle 	中间对齐
bottom 	底部对齐
sub 	下标对齐
super 	上标对齐
text-top
不同情况下基线位置也不一样，详情地址
https://www.cnblogs.com/starof/p/4512284.html
```

能解决的问题
1.文本框和表单按钮无法对齐
2.input控件和img图片无法对齐
3.div中的文本框不能贴顶的问题
4.图片的底部缝隙，div不设置高度由img撑开，此时img底部有间隙的问题
5.使用line-height无法让img图片垂直居中的问题，可让图片垂直居中

*可以解决行内快，行内元素 对齐方式的问题，不能用于块级元素*

------

**cursor：鼠标样式**，设置鼠标移到对象区域时鼠标样式

```
default	默认（一般箭头）
pointer	小手
move	十字箭头，移动
text	工字形，文本可选
not-allowed	禁止
```

**边框圆角**

border-radius

属性值：数字+px，百分比

```
画一个圆
设置边框圆角为盒子高度的一半，盒子必须是正方形，border-radius:50%;
```

border-radius: 左上角  右上角  右下角 左下角；

没有赋值的看对角；

**元素显示和隐藏**

| 隐藏               | 显示                            | 说明                         |
| ------------------ | ------------------------------- | ---------------------------- |
| visibility: hidden | visible显示，其它属性都可以显示 | 隐藏元素本身，在网页占位置   |
| display: none      | display: block                  | 隐藏元素本身，在网页不占位置 |
| opacity: 0         | opacity: 1                      | 通过设置透明来达到效果       |

**元素整体透明度**

属性名称：opacity

属性值：0-1之间的数字，0=完全透明，1=不透明

opacity会让元素整体透明，包含 文字 子元素。

**（扩展）边框合并**

```
让表格单元格相邻边框进行合并，得到细线边框效果
border-collapse: collapse
```

**（扩展）利用边框画三角形**

在网页中除了用图片外，还可以使用代码完成

盒子边框border的对接处是个斜边，所以可以利用这个斜边来调整三角形

```css
.box {
	width: 0;
	height: 0;
	border: 10px solid transparent; /*将4个边设置透明*/
	border-top-color: #000; /*给需要的那一边设置颜色*/
  }
通过调整边框的粗细可以实现不同的三角形
```

## 阴影/过度

**文字阴影**

```
text-shadow: 水平偏移 垂直偏移 模糊度 颜色；
text-shadow: 0px 0px 10px #000;
可以多个阴影，逗号隔开
```

**盒子阴影**

```
box-shadow:h-shadow v-shadow blur spread color inset
box-shadow:水平偏移   垂直偏移  模糊度 阴影扩大 阴影颜色 内阴影；
box-shadow: 0px 0px 10px 5px #000 inset;
```

**过度**

过度需要默认状态和hover状态样式不同，才有效果

给需要过度的元素本身加

```
transition： 参与过度的属性   过度时间  过度曲线 延迟时间；
transition: all 2s; all代表全部支持过度的属性
transition: all 2s cubic-bezier(1, -0.48, 0, 1.93)
贝塞尔曲线
运动曲线：     https://cubic-bezier.com/#1,-0.48,0,1.93
css3参考手册： http://caibaojian.com/css3/properties/layout/index.htm
```

 给滚动条加过度效果，加到需要过度的滚动条所在元素身上

```css
scroll-behavior: smooth;
```





------

## 元素显示模式 ##
- 块级元素 display:block
- 行内块元素 display: inline-block
- 行内元素 display: inline

**HTML嵌套规范**

- 块级元素一般作为大容器，可以嵌套：文本，块元素，行内元素，行内块元素等
- 但是：P标签不要嵌套div,p,h等块级元素
- a标签内部可以嵌套任意元素,如果嵌套了有宽高的元素，那么a需要转为块元素防止出现未知的怪异问题
- 但是：a标签不能嵌套a标签



**无边框窗口开启拖动**

在Electron笔记中有详细记载

当使用Electron编写桌面应用的时候，想让元素具有拖动拖拽整个窗口的功能

https://www.jianshu.com/p/96327b044e85

```css
-webkit-app-region: drag;  /* 开启拖动 */
```

设置后，该元素即可拖动，但是该元素的所有鼠标事件都会失效

我们可以在title上给定[一个](https://www.jb51.cc/tag/yige/)类似于导航栏一样的长条，这块区域内设置-webkit-app-region: drag;在配置自己[加上](https://www.jb51.cc/tag/jiashang/)最大化，最小化，[关闭](https://www.jb51.cc/tag/guanbi/)事件，最大的简化并个性化自己的程序。



# 盒子模型

## 盒子模型,内容,边框,内外边距 ##
**盒子模型一共有4个部分组成**

1. 内容区域：content
2. 边框区域：border
3. 内边距区域：padding
4. 外边距区域：margin

> 元素的width和height是针对 content内容区而言的

> 盒子实际大小组成： 内容  +   border（边框）+  padding （内边距）

**盒子边框 border**

| 属性名       | 作用           | 属性值  |
| -------------|:--------------| :-----|
| border-color | 边框颜色 | 颜色取值 |
| border-style | 边框样式 |实线solid,  虚线dashed，点线dotted |
| border-width | 边框粗细 |    数字+px |
| border-collapse | (表格)边框线合并 | collapse |

边框属性连写 border: 1px solid #FFF

**边框图片border-image**

```css
/*使用图片来作为边框样式
* 通过裁剪边框的4个角，裁剪后相当于九宫格，每个角对应边框的每个角的背景图，其余自动填充
*/
/*开启边框 必写*/
border: 1px solid #CCC
/* 设置边框图片 */
border-image-source: url('border.jpg');
/* 裁剪边框图片 （上,右,下,左，要裁剪的像素，不带单位） */
border-image-slice: 165 165 165 165;
/* 设置边框图片拉伸效果(stretched 默认拉伸，repeat 平铺，round 环绕铺满) */
border-image-repeat: round;
/* 设置边框图片的宽度，不写则默认边框宽度 */
border-image-width: 20px 20px 20px 20px;
```



**CSS3盒模型（自动内减）**

给盒子设置border或padding时，盒子会被撑大

1.可以自己手动从内容中减去

2.或者给盒子设置属性 box-sizing : border-box ; 即可自动内减

**IE5盒子模型与W3C盒子模型**

       /* box-sizing: content-box; */
       /* 在IE-5里面 盒子模型的内容区content域包含了padding+border */
       /* 在新的W3C里面内容区content不包含padding+border */
          box-sizing: border-box;

**不会撑大盒子的情况**

1. 块级盒子，在没有写widht宽度的情况下，不会撑宽
2. 写px或者100%也会撑大

**外边距 margin**

>CSS允许给外边距属性指定负数值 , 可以产生盒子的重叠效果

**外边距折叠现象 – ① 合并现象**

	水平布局，左右的margin正常，无影响
	最终两者距离为左右的和

-合并现象

    场景：垂直布局 的 块级元素，上下的margin会合并
    结果：最终两者距离为margin的最大值
    解决：只给其中一个盒子设置margin即可

**外边距折叠现象 – ② 塌陷现象**

    场景：*互相嵌套* 的 *块级元素*，子元素的margin-top会作用在父元素上
    结果：导致父元素往下移动
    解决：
    	1.给父元素设置边框或者内边距(目的与子元素分离开)
    	2.给父元素设置overflow: hidden
    	3.转换成行内块元素
    	4.设置成浮动
    	---------------------
    （清除浮动）双伪元素清除法，也能解决该问题

**行内元素的margin和padding无效情况**

    场景：给行内元素设置margin和padding时
    结果：
    	1.水平方向的margin和padding有效果
    	2.垂直方向的内外边距无效

## 伪元素

1. 由CSS模拟出的元素，在谷歌内可以看见(IE内html结构看不见，效果一样)
2. 必须设置content:"";属性才能生效
3. 伪元素默认是行内元素

```js
//father父元素内的*内容*之前，所以只能给双标签添加
//加到前面
.father::before {
      content: 'before加载前面的内容';
}
//加到后面
.father::after {
      content: 'after加到后面的内容';
}
```

链接伪类在（选择器类目下）



## 标准流

> 标准流：又称文档流，是浏览器在渲染显示网页内容时默认采用的一套排版规则，规定了应该以何种方式排列元素
>
> 1.块级元素：从上往下，垂直布局，独占一行
>
> 2.行内元素 或 行内块元素：从左往右，水平布局，空间不够自动折行



## 浮动

**添加浮动**

>1. 早期的作用：图文环绕，文字环绕浮动的图片，不能压住文字和图片
>2. 现在的作用：网页布局

```javascript
//左浮动  float: left;
//右浮动  float: right;
```

特点

1. 浮动的元素会脱标，不占标准流的位置，飘起来了
2. 浮动元素比标准流高一点，可以盖住标准流的元素
3. 浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右浮动
4. 浮动元素会受到前面元素的边界影响位置
5. 一行可以显示多个，可以设置宽高
6. 浮动的元素不能通过，text-align:center 或 marign:0 auto 给自己本身居中

**清除浮动**

在CSS中，清除浮动都是在设置左浮动或者右浮动之后的元素设置

| clear属性值 | **说明**         |
| ----------- | ---------------- |
| left        | 清除左浮动       |
| right       | 清除右浮动       |
| both        | 左右浮动一起清除 |

清除的方法

>给父盒子设置高度，适用于可以设置高度的场合

```
height: 600px;  但是有时候内容高度不知道，需要由内容撑开，此时则不适合本方法
```

> 额外标签法

```html
<style>
	/* 额外标签法，清除浮动 */
	/* 方式：找到最后一个浮动的元素，在他后面添加一个块元素标签，设置样式 clear:both; */
	/* 缺点：增加无意义标签，每处用到浮动的地方要清除都要加 */
	.clear{
        clear: both;
        }
</style>
<div class="father">
    <div class="box">01</div>
    <div class="box">02</div>
    <div class="clear"></div>   <--!额外添加的标签-->
</div>
```

> 单伪元素方法

```html
<style>
     /* 单伪元素标签法 */
     /* 找到浮动元素的父元素，给父元素调用本类，clearfix */
        .clearfix::after {
            content: '';    	/* 伪元素必须的属性 */
            display: block;	 	/* 转换成块元素，伪元素默认是行内 */
            height: 0;			/* 设置高度0 */
            line-height: 0;		/* 防止继承行高 */
            visibility: hidden;	/* 隐藏元素 */
            clear: both;		/* 清除浮动必须的属性 */
        }
</style>
<div class="father clearfix">
        <div class="box">01</div>
        <div class="box">02</div>
</div>
```

> 双伪元素清除法

```html
<style>
/* 双伪元素标签法 */
/* 找到浮动元素的父元素，给父元素调用本类，clearfix */
 	.clearfix::before,
    .clearfix::after {
        content: "";
        display: table;
     }
    .clearfix::after{
         clear: both;
     }
/* 本类还能解决 外边距塌陷的问题 */
</style>

```

>给父元素设置样式 overflow:hidden

```
/*设置效果是改成了BFC盒子*/
overflow: hidden;
```

## BFC盒子

是web页面可视CSS渲染的一部分，是块盒子布局过程发生的区域，也是浮动元素与其他元素交互的区域。

创建BFC方法

- html是BFC盒子
- 浮动元素是BFC盒子
- 行内块元素是BFC盒子
- overflow属性不取值为visible，如auto，hidden

BFC盒常见特点

1. BFC盒子会默认包裹住内部子元素(标准流，浮动) 》》清除浮动
2. BFC盒子与子元素之间不存在margin塌陷现象》》解决margin塌陷



## 定位

1. 定位后的元素层级最高，可以层叠在其它盒子上面
2. 可以让盒子固定在屏幕中的某个位置，**脱标**的盒子需要由-**内容撑开**-或者-**设置宽高**-
3. 元素层级关系：**标准流 < 浮动 < 定位**

**设置定位**

属性名称：position

```
静态定位	static		(默认值=标准流=没有定位，不能通过方位移动)
相对定位	relative	不脱标，相对于自身之前的位置进行移动
绝对定位	absolute	脱标，不占位置，相对于有定位的父元素进行定位移动，没找到则以浏览器边界移动
固定定位	fixed		脱标，不占位置，相对于浏览器进行定位移动(让盒子固定在页面的某个位置)
粘性定位	sticky		它的表现就像 relative和 fixed的合体，下方有案例
```

**设置方位偏移值 (定位位置)**

```
水平方向	left左边距离，right右边距离
垂直方向	top顶部距离，bottom下边的距离
1.单位为px,如果为%则是相对于父元素有定位的盒子
2.水平和垂直 根据需要各选择一个方位即可
```

**子绝父相**

让子元素相对于父元素进行自由移动，如果父元素已经有定位了，则只需要给子元素加定位

好处：父元素是相对定位，则对网页布局影响最小

**子绝父相-子元素水平居中**

```css
position: absolute;
left: 50%;  /* 先让盒子往右移动父盒子的一半 */
transform: translateX(-50%); /* 在让子盒子往左移动自己的一半 */
```

垂直居中原理一样，top:50%,    translateY(-50%)

```css
/*垂直居中，水平居中*/
position: absolute;
top: 50%;  /* 垂直居中 */
left: 50%;  /* 水平居中 */
transform: translateX(-50%) translateY(-50%);
```

margin自适应水平垂直居中

```
.ss{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
   margin: auto;
}
设置靠左，又设置靠右，这时margin:auto 就可以居中了
不设置margin居中的话，默认是以 left,top优先
```

**修改定位元素的层级**

1. 相对，绝对，固定，定位的层级相同
2. 写在HTML下面的元素会覆盖上面的元素

z-index 设置元素层级

```
z-index:1;
数字越大，层级越高
```

**粘性定位**

sticky 这是一个结合了 `position:relative` 和 `position:fixed` 两种定位功能于一体的特殊定位，适用于一些特殊场景

需要指定top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效

例如

有一个表头，开始的时候是正常的元素，当页面滚动到一定距离的时候，需要让它固定在页面顶部，之前的做法是用JS监听scroll事件，来进行判断。

而使用sticky粘性定位，则可以非常简单的实现，只需给该盒子设置属性

```css
position: sticky;	/* 开启粘性定位 */
top: 0;		/* 设置阈值，当盒子顶部到达该位置时，将变成固定定位的效果 */
```



## CSS书写顺序

| 1    | 布局类型 | display转换,position定位,float浮动 |
| ---- | -------- | ---------------------------------- |
| 2    | 盒子模型 | 宽高，内外边距，边框               |
| 3    | 内容     | 对齐方式，行高，字体               |
| 4    | 装饰     | 盒子阴影，颜色                     |



# CSS进阶



## 字体图标

> 字体图标本质是字体

字体声明并调用字体文件

```css
@font-face {
  font-family: 'iconfont'; /*字体名称自己起名*/
  src: url('iconfont.woff2?t=1623202871024') format('woff2'),
       url('iconfont.woff?t=1623202871024') format('woff'),
       url('iconfont.ttf?t=1623202871024') format('truetype');
    /*由于不同浏览器支持字体格式不同，所以加载多个字体文件*/
}
```

定义CSS样式

```css
.iconfont {
    /*调用的字体名称*/
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

调用显示出字体

```
<span class="iconfont">&#x33;</span>
```



## 2D转换

**2D转换transform属性，可以实现位移，旋转，缩放**

对`行内标签没有效果`，有X,Y轴

移动translate

```
X轴移动100像素，如果用的%单位，则是相对于自身大小的百分比
transform: translateX(100px) translateY(100px)
```

旋转rotate

```
X轴旋转180度，顺时针为正数，逆时针为负数，默认旋转的中心点是元素的中心
transform: rotateX(180deg)	
```

缩放scale

```
transform：scale(2)  放大两倍，默认以中心点放大,小于1则缩小
```

倾斜skew

```
transform: skewX(30deg) skewY(30deg);
```

连写

>transform: translate() rotate() scale()
>
>一般是先移动，在旋转，(因为旋转会改变X,Y轴的方向，在移动的话方向就错了)



**转换中心点 transform-origin**

```
transform-origin: x y;
```

x和y中间空格隔开

x y 默认转换中心点是(50%,50%) 50%代表元素自身的一半

还可以给x y 设置像素或者方位名词（top  bottom  left  right  center）

**实现水平居中方法**

```
left:50%   往右走父盒子一半
transform: translateX(-50%)  往左走自身的一半
垂直居中方法一样设置Y轴即可
```



## CSS3动画

animation 是CSS3中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常 用来实现复杂的动画效果

相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。

1. 先定义动画
2. 在使用（调用）动画

```
1.用keyframes 定义动画（类似定义类选择器）

@keyframes 动画名称 {
 0%{
 	width:100px;
 }
 100%{
 	width:200px;
 }
}

0% 是动画的开始，100% 是动画的完成
用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。
**每个百分比处的动画都是相对于元素最初始的位置
```

```
2.调用动画

div {
 /* 调用动画 */
 animation-name: 动画名称;
 /* 持续时间 */
 animation-duration: 持续时间;
 }
 连写
 animation：动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态;
 animation：name 2s
 *通过改变持续时间，开始时间，可以让同一个动画不同元素运动效果不同
```

 简写属性里面不包含 animation-play-state 

暂停动画：animation-play-state: puased; 经常和鼠标经过等其他配合使用

想要动画走回来 ，而不是直接跳回来：animation-direction ： alternate

盒子动画结束后，停在结束位置： animation-fill-mode ： forwards

**动画常用属性**

| @keyframes                | 声明动画                                                     |
| ------------------------- | ------------------------------------------------------------ |
| animation                 | 动画连写，除了animation-play-state属性                       |
| animation-name            | 动画名称,不能用关键字                                        |
| animation-duration        | 动画完成一个周期所花时间，单位s                              |
| animation-timing-function | 动画运动曲线，默认ease从快到慢，linear匀速，steps(步数)      |
| animation-delay           | 动画何时开始，默认0                                          |
| animation-iteration-count | 动画播放次数，默认1，infinite无限                            |
| animation-direction       | 动画是否下一周期逆向播放，默认normal, alternate，reverse逆向 |
| animation-play-state      | 设置动画运行或是暂停，默认running运行,  paused暂停           |
| animation-fill-mode       | 动画结束后状态，forwards保持，backwards回到起点              |

**动画运动曲线**

| linear  | 匀速，从头到尾速度相同               | steps(5)    | 指定动画间隔数(步长) |
| ------- | ------------------------------------ | ----------- | -------------------- |
| ease    | 默认值，低速开始，加快，在结束前变慢 | ease-in-out | 动画以低速开始和结束 |
| ease-in | 动画低速开始                         | ease-out    | 动画低速结束         |

> 贝塞尔曲线（https://cubic-bezier.com/）



## 3D转换

必须先移动，后旋转,，因为旋转会改变x,y轴的方向

三维坐标系

```
x轴：水平向右		x右边是正值，左边是负值
y轴：垂直向下		y下面是正值，上面是负值
z轴：垂直屏幕		(屏幕)外面是正值，里面是负值，近大远小，Z轴不能用%百分数
```

**透视 perspective**

```
透视写在被观察元素的父盒子上
perspective: 1000px;
```

在2D平面产生近大远小视觉立体，但是只是效果二维的

- 模拟人的视觉位置，相当于眼睛到物品的距离
- 透视也称为视距：视距就是人的眼睛到屏幕的距离
- 距离越近，成像越大，越远则看到的越小

Z轴越大，相当于距离我们越近，看到的物体也就越大

**3D移动 translate3d**

3D移动在2D移动的基础上多加了一个可以移动的方向，就是z轴方向

```
transform: translateX(100px)：仅仅是在x轴上移动
transform: translateY(100px)：仅仅是在Y轴上移动
transform: translateZ(100px)：仅仅是在Z轴上移动（注意：translateZ一般用px单位）
transform: translate3d(x,y,z)：其中 x、y、z 分别指要移动的轴的方向的距离 ，3个值都不能省略
```

因为z轴是垂直屏幕，由里指向外面，所以默认是看不到元素在z轴的方向上移动

**3D旋转 rotate3d**

顺时针正数，逆时针为负数

```
沿着自定义轴旋转
transform: rotate3d(x,y,z,deg)：xyz值0-1之间，deg为角度
单独写
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: rotateZ(45deg);
```

**空间缩放scale3D **

```
transform: scaleX(倍数);
transform: scaleY(倍数);
transform: scaleZ(倍数);
transform: scale3D(x,y,z);倍数
```

```
transform: scaleZ(2) translateZ(200px);
沿着Z轴放大两倍，要先放大在位移才有效果
```



**3D立体呈现 transfrom-style**

- 控制子元素是否开启三维立体环境 (开启了才能看到3D效果)
- transform-style: flat 子元素不开启3d立体空间 默认的
- transform-style: preserve-3d; 子元素开启立体空间
- 代码写给父级，但是影响的是子盒子

想要实现`3D效果`，必须`开启立体空间`，必须`添加透视`

## CSS绘制各种形状

clip-path属性，可以绘制各种形状，圆形，菱形，梯形

参考笔记：https://www.jianshu.com/p/4ad54e6fcf56

在线生成clip-path路径工具：

中文站点：https://www.html.cn/tool/css-clip-path/

英文站点：https://bennettfeely.com/clippy/

gitHub: https://github.com/bennettfeely/Clippy

绘制箭头

```css
-webkit-clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
```

绘制梯形

```css
clip-path: polygon(0 0, 80% 0, 100% 100%, 20% 100%);
```

正八边形

```css
clip-path: polygon(0 0, 80% 0, 100% 100%, 20% 100%);
```





## CSS3函数/滤镜filter/渐变

filter CSS属性将模糊或颜色偏移等图形效果应用于元素。

```
 filter: 函数(); 例如： filter: blur(5px); blur模糊处理 数值越大越模糊
```

CSS3 calc 函数:

```
width: calc(100% - 80px);
此CSS函数让你在声明CSS属性值时执行一些计算
```

------

**背景色渐变**

```
需要加浏览器私有前缀webkit
-webkit-linear-gradient(方向,颜色1,颜色2，，)
手机端可放心使用，PC端不建议使用，兼容性不好

// 线性渐变
方向写法to，在谷歌下不用加私有前缀
background-image: linear-gradient(to bottom,red,pink); 
// 径向渐变
background-image: radial-gradient(at 30px 30px,pink,orange);
```

属性

```
background-image: ;    简写: background: ;
```

属性值

```
线性渐变
background-image：linear-gradient(方向,颜色1,颜色2，，)
background-image：linear-gradient(top left,颜色1,颜色2，，)
```

```
径向渐变
background-image: radial-gradient(渐变的中心点,渐变的形状,颜色1 ,颜色2....);
渐变的中心点默认为宽高的一半，可以设置top、 tight、 left、 bottom
渐变的形状默认为椭圆，可以设置为circle
```



# 布局

> 2021.8.20

流式布局就是百分比100%，flex布局(也称弹性布局，伸缩布局)，rem布局和vw/vh单位



## flex布局

手机传统布局太麻烦，于是2009年，W3C提出的一种新的布局方案

比较新(IE9-不支持)，支持自适应(适应不同屏幕开发首选布局)

display：flex；

> 原理：通过给父盒子添加flex属性，来控制子盒 子的位置和排列方式
>
> 自适应不同屏幕，非常适用于移动端

```
父元素加,子元素就都可以设置宽高了
display：flex;
//flex布局后，子元素的float浮动，vertical-align将无效
```

**给父元素添加的属性**

- flex-direction：设置主轴方向，默认值row从左至右X轴行，column上至下Y轴列

```
row				从左到右X轴（默认值）
row-reverse		从右到左
column			从上到下Y轴
column-reverse	从下到上
```

- justify-content：设置主轴上的子元素排列方式，flex-start默认值，从左至右

```
flex-start		从前往后（默认值）
flex-end		从后往前
center			居中对齐
space-around	平分剩余空间
space-between	先两边贴边，在平分剩余空间(重要)
space-evenly    平分剩余空间/所有空白缝隙相等
```

- flex-wrap：设置子元素是否换行 ，默认值nowrap不换行，wrap换行

```
nowrap		不换行（默认值）
wrap		换行
```

- align-items：设置侧轴上的子元素的排列方式（单行有效）

```
flex-start		从上到下/从前往后
flex-end		从下到上/从后往前
center			挤在一起居中
stretch			拉伸（默认值）/元素未设置高时 侧轴拉伸铺满父盒子
```

- align-content：设置侧轴上的子元素排列方式（多行有效）

```
flex-start		从前往后（默认值）
flex-end		从后往前
center			居中对齐
space-around	平分剩余空间
space-between	先两边贴边，在平分剩余空间
space-evenly    平分剩余空间/所有空白缝隙相等
stretch			(拉伸)子项元素高度平分父元素高度，/元素未设置高时 侧轴拉伸铺满父盒子
```

- flex-flow：复合属性，相当于同时设置了 flex-direction主轴方向 和 flex-wrap换行

```
flex-flow:row wrap;
```

------

**给子元素添加的属性**

-  flex 属性

```css
/* 设置所占主轴方向的大小 */
/* 属性定义子项目分配剩余空间，用flex来表示占多少份数 */
flex:  /* 默认值为空，不会放大，会缩小 */
flex: 1; /* 等比例 */
flex: auto; /* 可以放大或缩小，占满剩余空间 */
flex: none; /* 不能缩放 */
flex-shrink: 0; /* 不能缩放 */
```

- align-self 控制子项自己在侧轴上的排列方式

```
可覆盖父元素 align-items 属性，属性值可参考前面
align-self: flex-end;
```

- order 属性定义项目的排列顺序

数值越小，排列越靠前，默认为0。和 z-index 不一样，刚好相反

```
order: 0;
```



## rem布局+媒体查询/vw布局

**rem布局和vw的区别**

1.rem单位的兼容性：几乎所有浏览器都支持

```
1. 需要不断修改html文字大小font-size
2. 需要使用 flexible.js来控制html的font-size 或 媒体查询 来控制
```

2.vw/vh 的兼容性：99%手机都支持，但pc端浏览器很多不支持

```
直接使用，非常方便
```

------

**rem布局+媒体查询**

> 第一步：书写媒体查询并设置相应的html的font-size值

```
@media (min-width: 320px) and (max-width: 375px) {
	html {
		font-size: 32px;
	}
}
@media (min-width: 375px) and (max-width: 480px) {
	html {
		font-size: 37.5px;
	}
}
```

>第二步：在下面的rem布局原理中

------

**单位px，em，rem，vw的区别**

1.px，绝对单位，相对于屏幕分辨率

2.em，相对单位，相对于当前元素的font-size，未设置则基础父元素的值

```
h1 {
	/*如果当前元素没有font-size，则会继承父元素的font-size值*/
    font-size: 20px;
    height: 1em;
}
那么1em,等于20px
```

3.rem 相对于html根元素的font-size

4.vw单位 ，1vw = 1%视口宽度，相当于屏幕分了100份

**rem布局原理**

```
rem全称font size of the root element
rem是css3新增的一个相对长度单位
-------------------
例：
1.设计稿宽750px,声明了是2倍设计稿，750/2=375px，将屏幕分10等份，375/10=37.5px
2.将html的font-size设置为37.5px
此时如果盒子宽为100px，换算关系为 100/37.5=2.666rem
解释：
每份37.5px, 盒子宽100px,需要占100px/37.5px=2.666份

1rem 则等于 10% 的视口宽度
```

------

**媒体查询@media**

作用：根据屏幕的不同，应用不同的CSS样式

```css
style语法
@media 设备类型 and （设备特性) {
	/*CSS代码*/
}
例：大于320px 且 小于460px的时候执行
@media screen and (min-width: 320px) and (max-width: 460px) {
   html {font-size: 32px;}
}
```

```
link语法
<link rel="stylesheet" media="设备类型 and (设备特性)" href="xxx.css">
符合条件才会载入该CSS文件
```

**参数**

```
设备类型有：print(打印机)，screen(屏幕)
多条件：	and 且，not 非，only 仅
设备特性有：
	设备宽度 width/max-width/min-width
	设备高度 height
	设备方向 portrait(竖屏模式)  landscape(横屏模式)
```

------

**单位vw，vh布局**

```
vw : 1vw = 1%视口宽度
vh : 1vh = 1%视口高度 （注意：由于在实现元素宽度、高度、字体大小等自适应时，都是依据视口
的宽度，所以一般只会使用vw，很少使用vh）
例：
1.设计稿宽750px,声明了是2倍设计稿，750/2=375px，将屏幕分100等份，375/100=3.75px
此时如果盒子宽为100px，换算关系为 100/3.75=26.66vw
解释：
每份3.75px, 盒子宽100px,需要占100px/3.75px=2.666份
```

## 其它

```css
/* 实验功能 纵横比CSS属性为方框设置一个首选的纵横比，它将用于计算自动大小和一些其他布局功能。*/
aspect-ratio: 3/1; /* 例如宽高比例为 3:1 */
```





# CSS变量

官方文档：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties

在css中，可以定义变量，变量以 --开头，例如：--变量名

```css
html {
  --main-color: #fff;  /* 定义变量，在html下定义的，只能在html标签后代标签内使用*/
}
.box1 {
   color: var(--main-color);  /* 使用变量，用 var() 方法包裹变量名称即可调用 */
}
```



# 其它

通过`vw`和`calc`实现`rem`计算`font-size`

```css
html {
  font-size: calc(100vw / 7.5); /* 这样就不用写js去计算html标签的fontsize了 */
}
```

获取标签自定义属性`data-*`的内容，通过attr()获取

```css
div:after{
  content: attr(data-msg); /* 读取自定义属性 */
} /* 场景：提示框，dialog弹窗提示 */
```

使用pointer-events禁用事件触发

```css
div{ pointer-events: none; }  /* 标签的默认事件，鼠标，键盘，都会失效 */
```

背景渐变色动画变化

```css
.gradient-bg {
	background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400% 400%;
	animation: move 10s infinite;
}
@keyframes move {
  50% {	background-position-x: right;}
	100% {	background-position-x: left;}
}

```

文本渐变色动画变化

```css
.gradient-text {
	background-image: linear-gradient(90deg, #f66, #f90); /* 设置渐变色 */
	background-clip: text;  /* 对背景进行文字裁切 */
	animation: hue 5s linear infinite;
}
@keyframes hue {
	from {filter: hue-rotate(0);}
	to {filter: hue-rotate(-1turn);}
}
```

绘制饼图

```css
.pie {
  background-image: conic-gradient(#f66 0 25%, #66f 25% 30%, #f90 30% 55%, #09f 55% 70%, #3c9 70% 100%);
} /* 通过调整百分比来控制 */
```

