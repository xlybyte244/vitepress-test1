

# HTML知识及标签

[^BY: 林忆]: 
[^2021.8.8]: 

## web

(Hyper Text Markup Language):超文本标记语言

**网页渲染引擎**

| 浏览器  | 内核           | 备注                               |
| ------- | -------------- | ---------------------------------- |
| IE      | Trident        | IE，大部分国内浏览器集成了该内核   |
| Firefox | Gecko          | 火狐浏览器内核                     |
| Safari  | webkit         | 苹果浏览器内核                     |
| chrome  | chromium/Blink | 谷歌浏览器                         |
| Opera   | Blink          | 欧朋浏览器/Blink早期是Webkit的分支 |

**web标准-三大标准**

```
结构标准：用于对网页元素进行整理和分类(HTML)
表现标准：用于设置网页元素的版式、颜色、大小等外观属性(CSS)
行为标准：用于对网页模型的定义及交互的编写(JavaScript)
```

web标准优点：易于维护(只需修改对应的文件)，页面响应块(html文件变小)

**「文档类型」**用来说明你用的XHTML或者HTML是什么版本。<!DOCTYPE html>告诉浏览器按照HTML5标准解析页面

**「页面语言」**html=lang指定该html标签内容所用的语言，charset=charset指定编码格式

**「meta viewport的用法」**

通常viewport是指视窗、视口。浏览器上(也可能是一个app中的webview)用来显示网页的那部分区域。在移动端和pc端视口是不同的，pc端的视口是浏览器窗口区域，而在移动端有三个不同的视口概念：布局视口、视觉视口、理想视口

meta有两个属性name 和 http-equiv

**name属性的取值**

- keywords(关键字) 告诉搜索引擎，该网页的关键字
- description(网站内容描述) 用于告诉搜索引擎，你网站的主要内容。
- viewport(移动端的窗口)
- robots(定义搜索引擎爬虫的索引方式) robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引
- author(作者)
- generator(网页制作软件）
- copyright(版权)

**HTML标签的语义化**

- 方便代码的阅读和维护，样式丢失的时候能让页面呈现清晰的结构。
- 有利于SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
- 方便其他设备解析，如盲人阅读器根据语义渲染网页

**扩展**  

base标签：规定页面上所有链接的默认 URL 和设置整体链接的打开状态

```js
<head>
    <base href="http://www.baidu.com" target="_blank">
    <base target="_self">
</head>
<body>
    <a href="">测试</a> 跳转到 百度
</body>
```



## 浏览器的渲染

**浏览器的渲染过程**

>1、将获取的html解析成dom树
>2、处理css，构成层叠样式表模型CSSOM
>3、将dom树和CSSOM合并为渲染树
>4、根据CSSOM将渲染树的节点布局计算
>5、将渲染树节点样式绘制到页面上
>
>// 注意
>在渲染的过程中是自上而下渲染，
>js会阻塞页面的渲染，优先等js执行完成(为什么js放底部)
>如果在渲染的过程中改变了样式，会造成回流需要重新渲染

**link和@import的区别**

>1、从属关系区别：
>link属于html标签，而@import是css提供的。
>2、加载顺序区别：
>页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载。
>3、兼容性区别：
>import只在IE5以上才能识别，而link是html标签，无兼容问题。
>4、dom可操作性区别：
>可以通过JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式
>5、权重区别：
>如果已经存在相同样式，@import引入的这个样式将被该 CSS 文件本身的样式层叠掉，表现出link方式的样式权重高于@import的权重这样的直观效果。
>（简而言之，link和@import，谁写在后面，谁的样式就被应用，后面的样式覆盖前面的样式。）

**src与href的区别**

>1、href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
>2、src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。



## HTML基本结构

```html
<!DOCTYPE html>		文档版本声明
<html> 		HTML文档
<head>				头部
    <title>Document</title>
</head>
<body>				主体
	123
</body>
</html>
```

head内部标签

| 内部标签 | 说明                                           |
| -------- | ---------------------------------------------- |
| title    | 网站标题                                       |
| meta     | 定义网页的基本信息(搜索引擎文字说明，视口标签) |
| style    | 定义css样式                                    |
| link     | 引入外部css文件或者js文件                      |
| script   | 定义js脚本                                     |
| base     | 设置页面所有链接的跳转方式                     |



## HTML常用标签



### 排版标签

- 标题标签h(h1~h6)，都有加粗，字体从从h1 → h6文字逐渐减小
- 段落标签p,可以把 HTML 文档分割为若干段落，有间隙
- 水平线hr
- 换行br
- div和span标签:是没有语义的,是我们网页布局最主要的2个盒子。

**文本格式化标签**

- b和strong加粗，i和em斜体，s和del删除线，u和ins下划线，sup上标，sub下标



### 媒体标签

embed标签

```html
<embed src="多媒体文件地址" width="播放界面的宽度" height="播放界面的高度"></embed>
<bgsound src="背景音乐的地址"/>
```

audio音频标签，video视频标签

```javascript
//audio音频标签，支持mp3,wav,ogg
<audio src="路径" controls autoplay loop></audio>
//controls 显示播放控件，autoplay自动播放(谷歌不支持)，loop循环播放
//video视频标签 mp4、webm、ogg
<video src="路径" controls autoplay loop muted></video>
//其它同音频标签，muted静音后autoplay可开启自动播放
```

| 属性         | 值                     | 描述                                              |
| ------------ | ---------------------- | ------------------------------------------------- |
| muted        | muted                  | 静音播放                                          |
| autoplay     | autoplay               | 自动播放，谷歌浏览器需要添加muted静音才能自动播放 |
| width,height | 像素                   | 设置播放器的宽，高                                |
| loop         | loop                   | 循环播放，loop=2播放两次                          |
| preload      | auto预加载，none不加载 | 是否预先加载视频，如果有autoplay则忽略该属性      |
| src          | url                    | 视频地址                                          |
| poster       | imgurl                 | 加载等待的画面图片                                |
| controls     | controls               | 显示播放控件                                      |

**img图片标签**

```html
<img src="图片地址" alt="图片描述（给搜索引擎看）" title="图片描述（给用户看）">
<img src="1.jpg" width="300" height="300" border="3" title="小蒲公英" />
```

### a链接标签

外部链接，内部链接，锚点链接（标签的ID）

```
<a href="链接地址" target="跳转方式">
_self	默认值，当前窗口打开
_blank	新窗口打开
_top	顶层框架打开
_parent	当前框架的上一层打开
```



## HTML语义化标签

| header  | 网页头部   |
| ------- | ---------- |
| nav     | 网页导航   |
| footer  | 网页底部   |
| aside   | 网页侧边栏 |
| section | 网页区块   |
| article | 网页文章   |

figure和figcaption标签



## HTML字符实体特殊符号

```
	空格		&nbsp;
<	小于号		&lt;
>	大于号		&gt;
&	和号		&amp;
©	版权		&copy;
®	商标		&reg;
```

## meta标签

```html
<!--可以让img标签预加载网络图片,并且可以解决403问题-->
<meta name="referrer" content="no-referrer" />
<!--声明文档编码方式-->
<meta charset="UTF-8">
```



## SEO

SEO（Search Engine Optimization）：搜索引擎优化

1.竞价排名

2.网页后缀html

3.标签语义化

**SEO三大标签**

1. title：网页标题标签
2. description：网页描述标签
3. keywords：网页关键词标签

```html
<title>小米商城 - 小米11 Ultra、Redmi K40 Pro、MIX FOLD，小米电视官方网站</title>
<meta name="description" content="小米官网直营小米公司旗下所有产品，包括小米手机系列小米11 Ultra、MIX FOLD，Redmi 红米系列" />
<meta name="keywords" content="小米,redmi,小米11,小米MIX Alpha,小米商城" />
```

**logo标志的 优化**

```
<div class="logo">
    <h1>
        <a href="#" title="某某网站">某某网站</a>
    </h1>
</div>
给A设置背景图片为logo图，在将文字隐藏
```



## ico图标设置

```html
<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
```



## 视口标签viewport

**视口标签**

历史性的问题

最初手机刚出来时，此时绝大部分网站只有PC版，手机屏幕没法看PC页面，所以增加了视口，为了能够查看PC页面，增加了视口

说明

手机浏览器多了一个可以缩放的视口，而且默认视口比较大。解决办法：重置视口宽度

移动端默认视口宽度为1000px左右，但是屏幕宽度才300-500px之间，所以需要将视口宽度重置为屏幕的宽度

重置方法

```
在<head>标签中加入：
<meta name = "viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0,minimum-scale=1.0, user-scalable=no">
```

meta：提供有关页面的元信息
viewport：视口
width = device-width ：让浏览器视口的宽度等于设备宽度（即屏幕的宽度）
initial-scale=1：视口的初始缩放比例为1
maximum-scale = 1.0 ：允许用户缩放的最大比例
minimum-scale = 1.0 ：允许用户缩放的最小比例
user-scalable = no/0 ：是否允许用户缩放页面

viewport-fit=cover"	覆盖

**多倍图**

```
CSS中的单位px是逻辑像素，并非物理像素
例如iphone6,物理像素750*1134，逻辑像素为375*667，相当于是2倍的关系
那么设计图尺寸用2倍图缩放显示，在手机上显示会比较清晰
```



## 模板标签

```html
内建的 template 元素用来存储 HTML 模板。浏览器将忽略它的内容，仅检查语法的有效性，但是我们可以在 JavaScript 中访问和使用它来创建其他元素。
<template id="templist">
  <tr>
    <td>Contents</td>
  </tr>
</template>
<script>
    let tl = document.querySelector("#templist").content // 通过content拿到的就是标签DOM对象
      let li = tl.querySelector('li').cloneNode(true)
      li.innerHTML = '6666'
    }
</script>
```

template 可能有兼容性问题，代替方案是使用script标签，但是这种方式不能使用DOM对象来解析，只能通过字符串的方式替换文本来生成HTML

```html
<script type="text/html">...</script>
<script type="text/x-template">...</script>
```



## table表格标签

表格属性

```
contenteditable="true"	//可编辑属性，加到标签上，该标签会变成可编辑状态
```



写到table开始标签中

| 属性名           | 属性值              | 描述                                   |
| ---------------- | ------------------- | -------------------------------------- |
| align            | left, center, right | 表格相对周围对齐方式，center在页面居中 |
| boder            | 1或空               | 空为无边框，1为边框粗细                |
| cellpadding      | 像素值              | 单元格边缘与内容的空白，默认1像素      |
| cellspacing      | 像素值              | 单元格之间的空白，默认2像素            |
| width            | 像素值或百分比      | 表格的宽度                             |
| clospan和rowspan | 要合并的数量        | 用来合并单元格                         |

单元格之间边框合并成一条，可用CSS实现

```
border-collapse: collapse;   /*边框合并，如果相邻，则共用一个边框*/
默认值separate，分开不合并
表格独有的属性。除了表格，在其他地方是用不上
```

**表格结构标签**

1. thead 用于定义表格的头部。 内部必须拥有  标签。 一般是第一行
2. tbody 用于定义表格的主体，主要用于放数据本体
3. tfoot 用于定义表格的底部
4. caption用于定义表格标题，写在table标签内
5. tr代表行，th表头，td单元格

**合并单元格**

- 跨行合并：rowspan="合并的个数"，垂直方向合并
- 跨列合并：colspan="合并的个数"，水平方向合并

## 列表标签

列表可以分为三大类：无序列表、有序列表和自定义列表。

1.无序列表ul

```javascript
<ul type="列表项符号">
	<li>列表项目1</li>
</ul>
```

**ul中只能嵌套li，li里面可以嵌套其它元素。**

2.有序列表ol

```javascript
<ol>
	<li>列表项1</li>	
</li>
```

>有序列表type属性
>
>1  数字
>
>a   小写字母
>
>A   大写字母

3.自定义列表dl

```javascript
<dl>
 <dt>标题名词1</dt>
 <dd>名词1解释1</dd>
 <dd>名词1解释2</dd>
</dl>
```

## iframe标签

可以使用a标签进行控制iframe标签跳转页面

```html
<div>
   <!-- target指定跳转方式，填写iframe的name属性 -->
   <a href="./index.html" target="fm">跳转首页</a>
   <a href="./login.html" target="fm">跳转登录页面</a>
   <iframe src="" name="fm" frameborder="0"></iframe>
</div>
```

子父框架操作由JS可以进行操作parent代码父

## 表单-input等标签

表单

一个完整的表单由form标签包含，这样submit和reset按钮才能对表单有效

```html
<form action="url地址" method="提交方式/post/get" name="表单名称">
  各种表单控件
</form>
```

### input标签

**input标签属性**

```html
<!--
属性名称		属性值		说明
name		起的名字	控件的名称
value		用户填写	控件中填写的值
size		数字		控件显示宽度
checked		checked		默认选中的项
maxlength	数字		允许用户输入最大字数
placeholder	提示信息	占位符，内容为空且失去焦点时显示的提示
autocomplete	off/no	文本框是否自动完成填写	
disabled	disabled	禁用元素
readonly	readonly	元素设置只读
pattern="^1[3456789]\d{9}$" 可设置表单校验规则，然后用css伪类设置样式input:valid{...}通过校验，:invalid不通过
-->
用户名:<input type="text"  name="username" value="请输入用户名"> 
```

- radio  如果是一组，我们必须给他们命名相同的名字 name  这样就可以多个选其中一个
- name在提交到后台是必须有的属性，相当于是某个值的名称，便于区分不同值

**type属性值：控件类型由type属性决定**

```
---------------常用的属性值--------------
text	单行文本框
password	密码框
radio	单选按钮
checkbox	复选框
button	普通按钮	无功能/配合JS实现功能
submit	提交表单按钮
reset	重置表单
image	图像形式提交按钮
file	文件域	multiple开启多文件选择

---------------新的属性值---------------
color	定义拾色器。
date	定义 date 控件（包括年、月、日，不包括时间）。
datetime	定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，基于 UTC 时区）。
datetime-local	定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，不带时区）。
email	定义用于 e-mail 地址的字段。
hidden	定义隐藏输入字段。
image	定义图像作为提交按钮。
month	定义 month 和 year 控件（不带时区）。
number	定义用于输入数字的字段。
range	定义用于精确值不重要的输入数字的控件（比如 slider 控件）。
search	定义用于输入搜索字符串的文本字段。
tel	定义用于输入电话号码的字段。
time	定义用于输入时间的控件（不带时区）。
url	定义用于输入 URL 的字段。
week	定义 week 和 year 控件（不带时区）。
```

### 文件选择框

```html
<input type="file" accept="image/png">   <!-- 所有图片 -->
<input type="file" accept="image/*">    <!-- 图片类型png -->
<!-- 其它属性
mulltiple	多选
accept="文件类型/扩展名"
-->
<input type="file" accept="video/*" onchange="fileChangeFn(this);">
<script>
function fileChangeFn (e){
    let url = URL.createObjectURL(e.files[0])
    console.log(url, e.files[0]);
}
</script>
```



**button按钮**

```
<button>按钮</button>
```

### select下拉框

```html
<!--也相当于是组合框，可以用来选择地区, selected代表当前选中项-->
<select name="">
        <option value="0" selected>子项名称1</option>
        <option value="1">子项名称2</option>
 </select>
```

**textarea文本域标签**

```
<textarea name="" id="" cols="30" rows="10"></textarea>
cols代表显示的列数=宽，rows显示的行数=高，也可以用于控制大小
在CSS中设置resize: none，即可禁止用户拖拽大小
```

**label标签**

用处：页面中点击label标签中的文字，即可让对应的输入框获得焦点，提升了用户体验

```
//用法1
// 绑定的方式，for和id使用同一个名称，即可绑定
<label for="myid">用户名:</label>
<input type="text" id="myid" />
```

```
// 用法2(推荐)
// 用label包含input标签即可
<label><input type="text"/>用户名:</label>
```

```
属性
for填写要绑定的控件id，accesskey代表快捷键，1的话，代表按alt+1即可定位，注意不要和浏览器冲突
<label for="" accesskey="1" ></label>  
```



### HTML5 新增的表单属性

IE9+才支持

| 属性         | 值        | 说明                                         |
| ------------ | --------- | -------------------------------------------- |
| requlred     | requlred  | 表示该项必填                                 |
| placeholder  | 提示文本  | 表单提示信息                                 |
| autofocus    | autofocus | 自动聚焦属性，页面加载完毕获得焦点           |
| autocomplete | off/on    | 默认开启，浏览器基于之前输入过的值，自动提示 |
| multiple     | multiple  | 文件域：多选文件提交                         |

```
可以通过以下设置方式修改placeholder里面的字体颜色：
input::placeholder {
 color: pink;
 }
```

标签上也可以写正则表达式