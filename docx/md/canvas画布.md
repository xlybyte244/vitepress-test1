# canvas画布

HTML canvas标签用于通过脚本（通常是 JavaScript）动态绘制图形。 

Canvas 绘图 API 都没有定义在canvas元素本身上，而是定义在通过画布的 [getContext() 方法](https://www.w3school.com.cn/jsref/met_canvas_getcontext.asp)获得的一个“绘图环境”对象上，它使用的是路径表示法，有一系列的方法来定义，然后在对路径操作绘制

参考手册https://www.w3school.com.cn/tags/html_ref_canvas.asp

MDN：https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement

## canvas标签

```html
<canvas id="myCanvas" width="600" height="500">
抱歉，您的浏览器不支持canvas元素
（这里的内容将会在不支持<canvas>元素的浏览器或是禁用了JS的浏览器内渲染并展现）
</canvas>
```

标签属性

| 属性   | 值        | 描述                   |
| ------ | --------- | ---------------------- |
| width  | 数字，600 | 设置画布的宽，不带单位 |
| height | 数字，600 | 设置画布的高，不带单位 |

标签方法

## canvas对象

创建context对象方法

```javascript
let canvas = document.querySelector("canvas");
let cxt = canvas.getContext("2d");	//创建context对象,如果不支持则返回null
```

toDataURL方法

完整资料地址：https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL

```javascript
// canvas转base64语法
// toDataURL([type],[图片质量]); 图片格式(默认为 image/png)，图片质量(0-1，默认0.92)
var dataURL = canvas.toDataURL();	//得到的是base64字符串
//例如： data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
```

toBlob方法

```javascript
// canvas转文件对象语法
canvas.toBlob(function (blob) {
  // 这里的blob虽然不是文件对象，但相当于是文件对象，可以添加到FormData中上传
});
```





# context对象

Canvas没有绘图能力， 所以需要通过本对象来操作进行绘图

## 创建对象

```javascript
let canvas = document.querySelector("canvas");
let cxt = canvas.getContext("2d");	//创建context对象
```

## 样式设置

只记录了一些基本的常用设置

```javascript
cxt.strokeStyle = 'red';    //设置画笔颜色
cxt.fillStyle = 'orange';   // 设置填充颜色
cxt.lineWidth = 10;	//画笔粗细
```

渐变色创建

```javascript
// 创建渐变
var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// 用渐变填色
ctx.strokeStyle = gradient;
```



## 清除画板

有多种方式能达到清除的目的

方式1----重设画布宽高后，画布内容就会被清空

```javascript
var canvas = document.getElementById("myCanvas");  
var cxt = canvas.getContext("2d");  
canvas.height = canvas.height;  //重设高
```

方式2----clearRect方法

```javascript
cxt.clearRect(0, 0, 600, 600);   // 清除画版
```

方式3----填充方式

```javascript
//用图片对象填充画版方式
cxt.putImageData(imgData, 0, 0);
//填充颜色方式
cxt.fillStyle="#000000";  //设置填充颜色
cxt.beginPath();  //开始新的路径
cxt.fillRect(x,y,c.width,c.height);  //绘制“被填充”的矩形
cxt.closePath(); //创建路径
```



## 绘制

```javascript
cxt.beginPath();    //开始新的路径
// 这里写绘制代码
cxt.closePath();	//结束路径
```

```javascript
cxt.stroke(); //绘制已创建的路径
cxt.fill(); // 填充当前绘图路径
```

```javascript
cxt.save();	//保存当前环境状态，然后进入新的画布环境
// 然后可以进行一系列的操作画布，绘制依然是绘制到先前环境上
cxt.restore();	// 退出新的环境，回到原来保存的绘图环境
cxt.rotate(弧度);	//旋转当前画布，注意0度是从3点钟角度开始
//弧度公式：弧度 = 角度 * PI / 180
```

```javascript
cxt.translate(x,y);	//重新映射画布上的(0,0)位置,绘制圆的中心位置
```

## 写文本

```javascript
//与CSS字体连写格式一致
cxt.font = '30px Georgia';	//font : style weight size family;
cxt.strokeText('欲写出的文本', x, y);	//绘制文本
```



## 绘制线条

```javascript
cxt.beginPath();    //开始新的路径
cxt.moveTo(x,y);	//开始一条路径，并移动位置，不创建线条
cxt.lineTo(X, Y); //添加一个点,并创建线条，可创建多个，即可完成多条线
cxt.stroke(); //绘制已创建的路径
```

## 绘制矩形

```javascript
ctx.rect(20,20,150,100);	//绘制矩形路径
//参数：开始x,开始y,矩形宽,矩形高
```

## 绘制圆

```javascript
cxt.translate(x,y);	//重新映射画布上的(0,0)位置
cxt.arc(x, y, r, 0, 2 * Math.PI, false);   //创建绘图、弧、曲线、圆
//参数：圆中心x，圆中心y，半径，起始角，结束角，是否逆时针
// 起始角 和 结束角 使用的是弧度，弧度 = 角度 * Π / 180
```





# ImageData对象

读取画板图片

```javascript
imgData = cxt.getImageData(0, 0, 600, 600); // 保存当前画版
//参数：开始x,开始y,读取宽,读取高
```

设置画板图片

```javascript
cxt.putImageData(imgData, 0, 0);    // 用图片填充画版
//参数：imgData对象，图片开始x,图片开始y，画布x，画布y，绘制宽，绘制高
```

# Image对象

用于裁剪图片

```javascript
var img = new Image();	//实例化对象
img.src = './123.jpg';
// 绑定图片加载完毕事件，因为图片较大加载时间不一定
img.onload = function(){
	//截取400*400大小,并缩放成100*100，放到画布中间
	ctx.drawImage(img,0,0,400,400,50,50,100,100)
    //把裁剪后的图片，转base64格式
    var str = canvas.toDataURL('image/png')
    //也可以把图片转文件对象
    var fileObj = canvas.toBlob(function(blob){
        console.log(blob);	//得到的blob可以追加到FormData中，提交使用
    })
}

```

drawImage方法参数

| 参数   | 描述                                 |
| ------ | ------------------------------------ |
| img    | 要使用的图像，画布，或视频           |
| x      | 可选，开始截切 x 坐标                |
| y      | 可选，开始截切 y 坐标                |
| width  | 可选，被裁剪图像的宽度，(要裁剪多宽) |
| height | 可选，被裁剪图像的高度，(要裁剪多高) |
| x      | 可选，放在画布上的 x 坐标            |
| y      | 可选，放在画布上的 y 坐标            |
| width  | 可选，要使用的宽（放大或缩小图像）   |
| height | 可选，要使用的高（放大或缩小图像）   |

