# jQuery

**jQuery 库可以通过一行简单的标记被添加到网页中。**

## jQuery 库 - 特性

jQuery 是一个 JavaScript 函数库。

jQuery 库包含以下特性：

- HTML 元素选取
- HTML 元素操作
- CSS 操作
- HTML 事件函数
- JavaScript 特效和动画
- HTML DOM 遍历和修改
- AJAX
- Utilities

## 向您的页面添加 jQuery 库

jQuery 库位于一个 JavaScript 文件中，其中包含了所有的 jQuery 函数。

可以通过下面的标记把 jQuery 添加到网页中：

```
<head>
<script type="text/javascript" src="jquery.js"></script>
</head>
```

请注意，<script> 标签应该位于页面的 <head> 部分。

## jQuery 语法

- $(this).hide() - 隐藏当前元素

- $("p").hide() - 隐藏所有 <p> 元素

- $("p.test").hide() - 隐藏所有 class="test" 的 <p> 元素

- $("#test").hide() - 隐藏 id="test" 的元素

  

```js
$(document).ready(function(){    // 开始写 jQuery 代码...  });
```



## jQuery 选择器

jQuery 选择器允许您对 HTML 元素组或单个元素进行操作。

jQuery 选择器基于元素的 id、类、类型、属性、属性值等"查找"（或选择）HTML 元素。 它基于已经存在的 [CSS 选择器](https://www.runoob.com/cssref/css-selectors.html)，除此之外，它还有一些自定义的选择器。

jQuery 中所有选择器都以美元符号开头：$()。

### 元素选择器

jQuery 元素选择器基于元素名选取元素。

在页面中选取所有 <p> 元素:

$("p")

### #id 选择器

jQuery #id 选择器通过 HTML 元素的 id 属性选取指定的元素。

页面中元素的 id 应该是唯一的，所以您要在页面中选取唯一的元素需要通过 #id 选择器。

通过 id 选取元素语法如下：

$("#test")

### .class 选择器

jQuery 类选择器可以通过指定的 class 查找元素。

语法如下：

$(".test")

| $("*")                   | 选取所有元素                                            | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_all2) |
| ------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ |
| $(this)                  | 选取当前 HTML 元素                                      | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_this) |
| $("p.intro")             | 选取 class 为 intro 的 <p> 元素                         | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_pclass) |
| $("p:first")             | 选取第一个 <p> 元素                                     | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_pfirst) |
| $("ul li:first")         | 选取第一个 <ul> 元素的第一个 <li> 元素                  | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_ullifirst) |
| $("ul li:first-child")   | 选取每个 <ul> 元素的第一个 <li> 元素                    | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_ullifirstchild) |
| $("[href]")              | 选取带有 href 属性的元素                                | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_hrefattr) |
| $("a[target='_blank']")  | 选取所有 target 属性值等于 "_blank" 的 <a> 元素         | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_hrefattrblank) |
| $("a[target!='_blank']") | 选取所有 target 属性值不等于 "_blank" 的 <a> 元素       | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_hrefattrnotblank) |
| $(":button")             | 选取所有 type="button" 的 <input> 元素 和 <button> 元素 | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_button2) |
| $("tr:even")             | 选取偶数位置的 <tr> 元素                                | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_even) |
| $("tr:odd")              | 选取奇数位置的 <tr> 元素                                | [在线实例](https://www.runoob.com/try/try.php?filename=tryjquery_sel_odd) |



## jQuery 事件

### 什么是事件？

页面对不同访问者的响应叫做事件。

事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。

实例：

- 在元素上移动鼠标。
- 选取单选按钮
- 点击元素

在事件中经常使用术语"触发"（或"激发"）例如： "当您按下按键时触发 keypress 事件"。

常见 DOM 事件：

| 鼠标事件                                                     | 键盘事件                                                     | 表单事件                                                  | 文档/窗口事件                                             |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :-------------------------------------------------------- | :-------------------------------------------------------- |
| [click](https://www.runoob.com/jquery/event-click.html)      | [keypress](https://www.runoob.com/jquery/event-keypress.html) | [submit](https://www.runoob.com/jquery/event-submit.html) | [load](https://www.runoob.com/jquery/event-load.html)     |
| [dblclick](https://www.runoob.com/jquery/event-dblclick.html) | [keydown](https://www.runoob.com/jquery/event-keydown.html)  | [change](https://www.runoob.com/jquery/event-change.html) | [resize](https://www.runoob.com/jquery/event-resize.html) |
| [mouseenter](https://www.runoob.com/jquery/event-mouseenter.html) | [keyup](https://www.runoob.com/jquery/event-keyup.html)      | [focus](https://www.runoob.com/jquery/event-focus.html)   | [scroll](https://www.runoob.com/jquery/event-scroll.html) |
| [mouseleave](https://www.runoob.com/jquery/event-mouseleave.html) |                                                              | [blur](https://www.runoob.com/jquery/event-blur.html)     | [unload](https://www.runoob.com/jquery/event-unload.html) |
| [hover](https://www.runoob.com/jquery/event-hover.html)      |                                                              |                                                           |                                                           |

### jQuery dblclick() 事件

双击 <p> 元素时警报文本：

```js
$("p").dblclick(function(){    alert("这个段落被双击。"); });
```



#### 语法

触发被选元素的 dblclick 事件：

$(*selector*).dblclick()[尝试一下](https://www.runoob.com/try/try.php?filename=tryjquery_event_dblclick_trigger)

添加函数到 dblclick 事件：

$(*selector*).dblclick(*function*)

### jQuery mouseenter() 方法

当鼠标指针进入 <p> 元素时，设置背景色为黄色：

```js
$("p").mouseenter(function(){    $("p").css("background-color","yellow"); });
```



#### 定义和用法

当鼠标指针穿过（进入）被选元素时，会发生 mouseenter 事件。

mouseenter() 方法触发 mouseenter 事件，或添加当发生 mouseenter 事件时运行的函数。

**注意：**与 [mouseover](https://www.runoob.com/jquery/event-mouseover.html) 事件不同，mouseenter 事件只有在鼠标指针进入被选元素时被触发，mouseover 事件在鼠标指针进入任意子元素时也会被触发。参见页面底部演示实例。

**提示：**该事件通常与 [mouseleave](https://www.runoob.com/jquery/event-mouseleave.html) 事件一起使用。

触发被选元素的 mouseenter 事件：

$(*selector*).mouseenter()[尝试一下](https://www.runoob.com/try/try.php?filename=tryjquery_event_menter_mleave_trigger)

添加函数到 mouseenter 事件：

$(*selector*).mouseenter(*function*)

### jQuery hover() 方法

当鼠标指针悬停在上面时，改变 <p> 元素的背景颜色：

```js
$("p").hover(function(){    $("p").css("background-color","yellow"); },function(){    $("p").css("background-color","pink"); });
```



#### 定义和用法

hover() 方法规定当鼠标指针悬停在被选元素上时要运行的两个函数。

方法触发 [mouseenter](https://www.runoob.com/jquery/event-mouseenter.html) 和 [mouseleave](https://www.runoob.com/jquery/event-mouseleave.html) 事件。

**注意:** 如果只指定一个函数，则 mouseenter 和 mouseleave 都执行它。

### jQuery keypress() 方法

计算在 <input> 字段内的按键次数：

```js
$("input").keypress(function(){    $("span").text(i+=1); });
```



#### 定义和用法

与 keypress 事件相关的事件顺序：

1. [keydown](https://www.runoob.com/jquery/event-keydown.html) - 键按下的过程
2. keypress - 键被按下
3. [keyup](https://www.runoob.com/jquery/event-keyup.html) - 键被松开

keypress() 方法触发 keypress 事件，或规定当发生 keypress 事件时运行的函数。

keypress 事件与 keydown 事件类似。当按钮被按下时发生该事件。

然而，keypress 事件不会触发所有的键（比如 ALT、CTRL、SHIFT、ESC）。请使用 keydown() 方法来检查这些键。

### jQuery submit() 方法

当提交表单时，显示警告框：

$("form").submit(function(){
  alert("提交");
});

#### 定义和用法

当提交表单时，会发生 submit 事件。

该事件只适用于 <form> 元素。

submit() 方法触发 submit 事件，或规定当发生 submit 事件时运行的函数。

### jQuery change() 方法

当 <input> 字段改变时警报文本：

```js
$("input").change(function(){
  alert("文本已被修改");
});
```



#### 定义和用法

当元素的值改变时发生 change 事件（仅适用于表单字段）。

change() 方法触发 change 事件，或规定当发生 change 事件时运行的函数。

**注意：**当用于 select 元素时，change 事件会在选择某个选项时发生。当用于 text field 或 text area 时，change 事件会在元素失去焦点时发生。

### jQuery focus() 方法

添加函数到 focus 事件。当 <input> 字段获得焦点时发生 focus 事件：

```js
$("input").focus(function(){    $("span").css("display","inline").fadeOut(2000); });
```



#### 定义和用法

当元素获得焦点时（当通过鼠标点击选中元素或通过 tab 键定位到元素时），发生 focus 事件。

focus() 方法触发 focus 事件，或规定当发生 focus 事件时运行的函数。

**提示：**该方法通常与 [blur()](https://www.runoob.com/jquery/event-blur.html) 方法一起使用。

### jQuery blur() 方法

添加函数到 blur 事件。当 <input> 字段失去焦点时发生 blur 事件：

```js
$("input").blur(function(){
  alert("输入框失去了焦点");
});
```



#### 定义和用法

当元素失去焦点时发生 blur 事件。

blur() 方法触发 blur 事件，或规定当发生 blur 事件时运行的函数。

**提示：**该方法常与 [focus()](https://www.runoob.com/jquery/event-focus.html) 方法一起使用。

### jQuery load() 方法

当图像全部加载时警报文本：

```js
$("img").load(function(){
  alert("图片已载入");
});
```



#### 定义和用法

load() 方法在 jQuery 版本 1.8 中[已废弃](https://www.runoob.com/jquery/NewWindow('deprecated.htm'))。

load() 方法添加事件处理程序到 load 事件。

当指定的元素已加载时，会发生 load 事件。

该事件适用于任何带有 URL 的元素（比如图像、脚本、框架、内联框架）以及 window 对象。

根据不同的浏览器（Firefox 和 IE），如果图像已被缓存，则也许不会触发 load 事件。

**注意：**还存在一个名为 load() 的 jQuery [AJAX](https://www.runoob.com/jquery/jquery-ref-ajax.html) 方法。根据不同的参数决定调用哪个方法。

### jQuery resize() 方法

对浏览器窗口调整大小进行计数：

```js
$(window).resize(function(){    $('span').text(x+=1); });
```



#### 定义和用法

当调整浏览器窗口大小时，发生 resize 事件。

resize() 方法触发 resize 事件，或规定当发生 resize 事件时运行的函数。

### jQuery scroll() 方法

对元素滚动的次数进行计数：

```js
$("div").scroll(function(){    $("span").text(x+=1); });
```



#### 定义和用法

当用户滚动指定的元素时，会发生 scroll 事件。

scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。

scroll() 方法触发 scroll 事件，或规定当发生 scroll 事件时运行的函数。

###  jQuery unload() 方法

当离开页面时，显示提示消息：

$(window).unload(function(){
  alert("Goodbye!");
});

#### 定义和用法

unload() 方法在 jQuery 版本 1.8 中[被废弃](https://www.runoob.com/jquery/NewWindow('deprecated.htm'))，在 3.0 版本被移除。

Firefox 与 Chrome 会阻止弹窗，所以没办法看到效果。

当用户离开页面时，会发生 unload 事件。

当发生以下情况下，会触发 unload 事件：

- 点击某个离开页面的链接
- 在地址栏中键入了新的 URL
- 使用前进或后退按钮
- 关闭浏览器窗口
- 重新加载页面

unload() 方法规定当 unload 事件发生时会发生什么。

unload() 方法只应用于 window 对象。

**注意：**unload 事件在不同浏览器中效果不一样，请确保使用前在所有浏览器测试该方法。



## 常用的 jQuery 事件方法

### $(document).ready()

$(document).ready() 方法允许我们在文档完全加载完后执行函数。该事件方法在 [jQuery 语法](https://www.runoob.com/jquery/jquery-syntax.html) 章节中已经提到过。

### click()

click() 方法是当按钮点击事件被触发时会调用一个函数。

该函数在用户点击 HTML 元素时执行。

在下面的实例中，当点击事件在某个 <p> 元素上触发时，隐藏当前的 <p> 元素：

$("p").click(function(){  $(this).hide(); });

https://www.runoob.com/jquery/jquery-events.html



## 效果- 隐藏和显示

```js
$("#hide").click(function(){  $("p").hide(); });  $("#show").click(function(){  $("p").show(); });
```

可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

下面的例子演示了带有 speed 参数的 hide() 方法：

```js
$("button").click(function(){  $("p").hide(1000); });
```

下面的例子演示了带有 speed 参数的 hide() 方法，并使用回调函数：

```javascript
$(document).ready(function(){  $(".hidebtn").click(function(){    $("div").hide(1000,"linear",function(){      alert("Hide() 方法已完成!");    });  }); });
```

第二个参数是一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery自身提供"linear" 和 "swing"，其他可以使用相关的插件）。

### jQuery toggle()

通过 jQuery，您可以使用 toggle() 方法来切换 hide() 和 show() 方法。

显示被隐藏的元素，并隐藏已显示的元素：

```javascript
$("button").click(function(){  $("p").toggle(); });
```



## 效果 - 淡入淡出

[jQuery fadeIn()](https://www.runoob.com/try/try.php?filename=tryjquery_fadein)
演示 jQuery fadeIn() 方法。

[jQuery fadeOut()](https://www.runoob.com/try/try.php?filename=tryjquery_fadeout)
演示 jQuery fadeOut() 方法。

[jQuery fadeToggle()](https://www.runoob.com/try/try.php?filename=tryjquery_fadetoggle)
演示 jQuery fadeToggle() 方法。

[jQuery fadeTo()](https://www.runoob.com/try/try.php?filename=tryjquery_fadeto)
演示 jQuery fadeTo() 方法。

### jQuery Fading 方法

通过 jQuery，您可以实现元素的淡入淡出效果。

jQuery 拥有下面四种 fade 方法：

- fadeIn()
- fadeOut()
- fadeToggle()
- fadeTo()

### Query fadeIn() 方法

jQuery fadeIn() 用于淡入已隐藏的元素。

**语法:**

$(*selector*).fadeIn(*speed,callback*);

可选的 speed 参数规定效果的时长。它可以取以下值：**"slow"、"fast"** 或毫秒。.

可选的 callback 参数是 fading 完成后所执行的函数名称。

下面的例子演示了带有不同参数的 fadeIn() 方法：

```javascript
$("button").click(function(){  $("#div1").fadeIn();  $("#div2").fadeIn("slow");  $("#div3").fadeIn(3000); });
```



### jQuery fadeOut() 方法

jQuery fadeOut() 方法用于淡出可见元素。

**语法:**

$(*selector*).fadeOut(*speed,callback*);

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是 fading 完成后所执行的函数名称。

下面的例子演示了带有不同参数的 fadeOut() 方法：

```javascript
$("button").click(function(){  $("#div1").fadeOut();  $("#div2").fadeOut("slow");  $("#div3").fadeOut(3000); });
```



### jQuery fadeToggle() 方法

jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。

如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。

如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。

### jQuery fadeTo() 方法

jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。

必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。

```javascript
$("button").click(function(){  $("#div1").fadeTo("slow",0.15);  $("#div2").fadeTo("slow",0.4);  $("#div3").fadeTo("slow",0.7); });
```



## 效果 - 滑动

[jQuery slideDown()](https://www.runoob.com/try/try.php?filename=tryjquery_slide_down)
演示 jQuery slideDown() 方法。

[jQuery slideUp()](https://www.runoob.com/try/try.php?filename=tryjquery_slide_up)
演示 jQuery slideUp() 方法。

[jQuery slideToggle()](https://www.runoob.com/try/try.php?filename=tryjquery_slide_toggle)
演示 jQuery slideToggle() 方法。

### jQuery 滑动方法

通过 jQuery，您可以在元素上创建滑动效果。

jQuery 拥有以下滑动方法：

- slideDown()  下拉
- slideUp()   上拉
- slideToggle()  切换



## 效果- 动画

 jQuery 动画 - animate() 方法

jQuery animate() 方法用于创建自定义动画。

必需的 params 参数定义形成动画的 CSS 属性。

可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是动画完成后所执行的函数名称。

下面的例子演示 animate() 方法的简单应用。它把 <div> 元素往右边移动了 250 像素：

```javascript
$("button").click(function(){  $("div").animate({left:'250px'}); });
```



### jQuery animate() - 操作多个属性

```javascript
$("button").click(function(){  $("div").animate({    left:'250px',    opacity:'0.5',    height:'150px',    width:'150px'  }); });
```



### jQuery animate() - 使用相对值

也可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 **+=** 或 **-=**：

```javascript
$("button").click(function(){  $("div").animate({    left:'250px',    height:'+=150px',    width:'+=150px'  }); });
```



### jQuery animate() - 使用预定义的值

您甚至可以把属性的动画值设置为 "**show**"、"**hide**" 或 "**toggle**"：

```javascript
$("button").click(function(){  $("div").animate({    height:'toggle'  }); });
```



### jQuery animate() - 使用队列功能

默认地，jQuery 提供针对动画的队列功能。

这意味着如果您在彼此之后编写多个 animate() 调用，jQuery 会创建包含这些方法调用的"内部"队列。然后逐一运行这些 animate 调用。

```javascript
$("button").click(function(){  var div=$("div");  div.animate({height:'300px',opacity:'0.4'},"slow");  div.animate({width:'300px',opacity:'0.8'},"slow");  div.animate({height:'100px',opacity:'0.4'},"slow");  div.animate({width:'100px',opacity:'0.8'},"slow"); });
```





## 停止动画

jQuery stop() 方法用于在动画或效果完成前对它们进行**停止**。

[jQuery stop() 滑动](https://www.runoob.com/try/try.php?filename=tryjquery_stop_slide)
演示 jQuery stop() 方法。

[jQuery stop() 动画(带参数)](https://www.runoob.com/try/try.php?filename=tryjquery_stop_params)
演示 jQuery stop() 方法

### jQuery stop() 方法

jQuery stop() 方法用于停止动画或效果，在它们完成之前。

stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。

可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。

可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

因此，默认地，stop() 会清除在被选元素上指定的当前动画。

```javascript
$("#stop").click(function(){  $("#panel").stop(); });
```





## Callback 方法

Callback 函数在当前动画 100% 完成之后执行。

### jQuery 动画的问题

许多 jQuery 函数涉及动画。这些函数也许会将 *speed* 或 *duration* 作为可选参数。

例子：*$("p").hide("slow")*

*speed* 或 *duration* 参数可以设置许多不同的值，比如 "slow", "fast", "normal" 或毫秒。

以下实例在隐藏效果完全实现后回调函数:

```javascript
$("button").click(function(){  $("p").hide("slow",function(){    alert("段落现在被隐藏了");  }); });
```

 ！！！

以下实例没有回调函数，警告框会在隐藏效果完成前弹出：

```javascript
$("button").click(function(){  $("p").hide(1000);  alert("段落现在被隐藏了"); });
```





## 链(Chaining)

通过 jQuery，可以把动作/方法链接在一起。

Chaining 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）。

### jQuery 方法链接

直到现在，我们都是一次写一条 jQuery 语句（一条接着另一条）。

不过，有一种名为链接（chaining）的技术，允许我们在相同的元素上运行多条 jQuery 命令，一条接着另一条。

**提示：** 这样的话，浏览器就不必多次查找相同的元素。

如需链接一个动作，您只需简单地把该动作追加到之前的动作上。

下面的例子把 css()、slideUp() 和 slideDown() 链接在一起。"p1" 元素首先会变为红色，然后向上滑动，再然后向下滑动：

```javascript
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```

如果需要，我们也可以添加多个方法调用。

**提示：**当进行链接时，代码行会变得很长。不过，jQuery 语法不是很严格；您可以按照希望的格式来写，包含换行和缩进。

如下书写也可以很好地运行：

```javascript
$("#p1").css("color","red")  .slideUp(2000)  .slideDown(2000);
```



##  

## 获取内容和属性

jQuery 拥有可操作 HTML 元素和属性的强大方法。

### 获得内容 - text()、html() 以及 val()

三个简单实用的用于 DOM 操作的 jQuery 方法：

- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值

下面的例子演示如何通过 jQuery text() 和 html() 方法来获得内容：

```javascript
$("#btn1").click(function(){  alert("Text: " + $("#test").text()); }); $("#btn2").click(function(){  alert("HTML: " + $("#test").html()); });
```

下面的例子演示如何通过 jQuery val() 方法获得输入字段的值：

```javascript
$("#btn1").click(function(){  alert("值为: " + $("#test").val()); });
```

### 获取属性 - attr()

jQuery attr() 方法用于获取属性值。

下面的例子演示如何获得链接中 href 属性的值：

```js
$("button").click(function(){  alert($("#runoob").attr("href")); });
```



## 设置内容和属性

下面的例子演示如何通过 text()、html() 以及 val() 方法来设置内容：

```js
$("#btn1").click(function(){    $("#test1").text("Hello world!"); }); $("#btn2").click(function(){    $("#test2").html("<b>Hello world!</b>"); }); $("#btn3").click(function(){    $("#test3").val("RUNOOB"); });
```

### text()、html() 以及 val() 的回调函数

上面的三个 jQuery 方法：text()、html() 以及 val()，同样拥有回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

下面的例子演示带有回调函数的 text() 和 html()：

```js
$("#btn1").click(function(){    $("#test1").text(function(i,origText){        return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")";     }); });  $("#btn2").click(function(){    $("#test2").html(function(i,origText){        return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")";     }); });
```

### 设置属性 - attr()

jQuery attr() 方法也用于设置/改变属性值。

下面的例子演示如何改变（设置）链接中 href 属性的值：

```js
$("button").click(function(){  $("#runoob").attr("href","http://www.runoob.com/jquery"); });
```

下面的例子演示如何同时设置 href 和 title 属性：

```js
$("button").click(function(){    $("#runoob").attr({        "href" : "http://www.runoob.com/jquery",        "title" : "jQuery 教程"    }); });
```

### attr() 的回调函数

jQuery 方法 attr()，也提供回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

下面的例子演示带有回调函数的 attr() 方法：

```js
$("button").click(function(){  $("#runoob").attr("href", function(i,origValue){    return origValue + "/jquery";   }); });
```



## 添加元素

通过 jQuery，可以很容易地添加新元素/内容。

### 添加新的 HTML 内容

我们将学习用于添加新内容的四个 jQuery 方法：

- append() - 在被选元素的**结尾**插入内容
- prepend() - 在被选元素的**开头**插入内容
- after() - 在被选元素**之后**插入内容
- before() - 在被选元素**之前**插入内容

### jQuery append() 方法

jQuery append() 方法在被选元素的结尾插入内容（仍然在该元素的内部）。

```js
$("p").append("追加文本");
```

### jQuery prepend() 方法

jQuery prepend() 方法在被选元素的开头插入内容。

```js
$("p").prepend("在开头追加文本");
```

### 通过 append() 和 prepend() 方法添加若干新元素

在上面的例子中，我们只在被选元素的开头/结尾插入文本/HTML。

不过，append() 和 prepend() 方法能够通过参数接收无限数量的新元素。可以通过 jQuery 来生成文本/HTML（就像上面的例子那样），或者通过 JavaScript 代码和 DOM 元素。

在下面的例子中，我们创建若干个新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 append() 方法把这些新元素追加到文本中（对 prepend() 同样有效）：

```js
function appendText(){
    var txt1="<p>文本-1。</p>";              // 使用 HTML 标签创建文本
    var txt2=$("<p></p>").text("文本-2。");  // 使用 jQuery 创建文本
    var txt3=document.createElement("p");
    txt3.innerHTML="文本-3。";               // 使用 DOM 创建文本 text with DOM
    $("body").append(txt1,txt2,txt3);        // 追加新元素
}
```

### jQuery after() 和 before() 方法

jQuery after() 方法在被选元素之后插入内容。

jQuery before() 方法在被选元素之前插入内容。

```js
$("img").after("在后面添加文本");
 
$("img").before("在前面添加文本");
```

### 通过 after() 和 before() 方法添加若干新元素

after() 和 before() 方法能够通过参数接收无限数量的新元素。可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建新元素。

在下面的例子中，我们创建若干新元素。这些元素可以通过 text/HTML、jQuery 或者 JavaScript/DOM 来创建。然后我们通过 after() 方法把这些新元素插到文本中（对 before() 同样有效）：

```js
function afterText()
{
    var txt1="<b>I </b>";                    // 使用 HTML 创建元素
    var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
    var txt3=document.createElement("big");  // 使用 DOM 创建元素
    txt3.innerHTML="jQuery!";
    $("img").after(txt1,txt2,txt3);          // 在图片后添加文本
}
```



## 删除元素

通过 jQuery，可以很容易地删除已有的 HTML 元素。

### 删除元素/内容

如需删除元素和内容，一般可使用以下两个 jQuery 方法：

- remove() - 删除被选元素（及其子元素）
- empty() - 从被选元素中删除子元素

### jQuery remove() 方法

jQuery remove() 方法删除被选元素及其子元素。

```js
$("#div1").remove();
```

### jQuery empty() 方法

jQuery empty() 方法删除被选元素的子元素。

```js
$("#div1").empty();
```

### 过滤被删除的元素

jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。

该参数可以是任何 jQuery 选择器的语法。

下面的例子删除 class="italic" 的所有 <p> 元素：

```js
$("p").remove(".italic");
```



## 获取并设置 CSS 类

通过 jQuery，可以很容易地对 CSS 元素进行操作。

### jQuery 操作 CSS

jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：

- addClass() - 向被选元素添加一个或多个类
- removeClass() - 从被选元素删除一个或多个类
- toggleClass() - 对被选元素进行添加/删除类的切换操作
- css() - 设置或返回样式属性

### jQuery addClass() 方法

下面的例子展示如何向不同的元素添加 class 属性。当然，在添加类时，您也可以选取多个元素：

```js
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});
```

您也可以在 addClass() 方法中规定多个类：

```js
$("button").click(function(){
  $("body div:first").addClass("important blue");
});
```

### jQuery removeClass() 方法

下面的例子演示如何在不同的元素中删除指定的 class 属性：

```js
$("button").click(function(){
  $("h1,h2,p").removeClass("blue");
});
```

### jQuery toggleClass() 方法

下面的例子将展示如何使用 jQuery toggleClass() 方法。该方法对被选元素进行添加/删除类的切换操作：

```js
$("button").click(function(){
  $("h1,h2,p").toggleClass("blue");
});
```



## css() 方法

### jQuery css() 方法

css() 方法设置或返回被选元素的一个或多个样式属性。

### 返回 CSS 属性

如需返回指定的 CSS 属性的值，请使用如下语法：

```js
$("p").css("background-color");
```

### 设置 CSS 属性

如需设置指定的 CSS 属性，请使用如下语法：

下面的例子将为所有匹配元素设置 background-color 值：

```js
$("p").css("background-color","yellow");
```

### 设置多个 CSS 属性

如需设置多个 CSS 属性，请使用如下语法：

下面的例子将为所有匹配元素设置 background-color 和 font-size：

```js
$("p").css({"background-color":"yellow","font-size":"200%"});
```



## 尺寸

### jQuery 尺寸方法

jQuery 提供多个处理尺寸的重要方法：

- width()
- height()
- innerWidth()
- innerHeight()
- outerWidth()
- outerHeight()

### jQuery 尺寸

## ![jQuery Dimensions](https://www.runoob.com/images/img_jquerydim.gif)

### jQuery width() 和 height() 方法

width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。

height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。

下面的例子返回指定的 <div> 元素的宽度和高度：

```js
$("button").click(function(){
  var txt="";
  txt+="div 的宽度是: " + $("#div1").width() + "</br>";
  txt+="div 的高度是: " + $("#div1").height();
  $("#div1").html(txt);
});
```

### jQuery innerWidth() 和 innerHeight() 方法

innerWidth() 方法返回元素的宽度（包括内边距）。

innerHeight() 方法返回元素的高度（包括内边距）。

下面的例子返回指定的 <div> 元素的 inner-width/height：

### jQuery outerWidth() 和 outerHeight() 方法

outerWidth() 方法返回元素的宽度（包括内边距和边框）。

outerHeight() 方法返回元素的高度（包括内边距和边框）。

下面的例子返回指定的 <div> 元素的 outer-width/height：

```js
$("button").click(function(){
  var txt="";
  txt+="div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "</br>";
  txt+="div 高度，包含内边距和边框: " + $("#div1").outerHeight();
  $("#div1").html(txt);
});
```



## 遍历

### 什么是遍历？

jQuery 遍历，意为"移动"，用于根据其相对于其他元素的关系来"查找"（或选取）HTML 元素。以某项选择开始，并沿着这个选择移动，直到抵达您期望的元素为止。

下图展示了一个家族树。通过 jQuery 遍历，您能够从被选（当前的）元素开始，轻松地在家族树中向上移动（祖先），向下移动（子孙），水平移动（同胞）。这种移动被称为对 DOM 进行遍历。

![jQuery Dimensions](https://www.runoob.com/images/img_travtree.png)

图示解析：

- <div> 元素是 <ul> 的父元素，同时是其中所有内容的祖先。

- <ul> 元素是 <li> 元素的父元素，同时是 <div> 的子元素

- 左边的 <li> 元素是 <span> 的父元素，<ul> 的子元素，同时是 <div> 的后代。

- <span> 元素是 <li> 的子元素，同时是 <ul> 和 <div> 的后代。

- 两个 <li> 元素是同胞（拥有相同的父元素）。

- 右边的 <li> 元素是 <b> 的父元素，<ul> 的子元素，同时是 <div> 的后代。

- <b> 元素是右边的 <li> 的子元素，同时是 <ul> 和 <div> 的后代。

### 遍历 - 祖先

祖先是父、祖父或曾祖父等等。

通过 jQuery，您能够向上遍历 DOM 树，以查找元素的祖先。

### 向上遍历 DOM 树

这些 jQuery 方法很有用，它们用于向上遍历 DOM 树：

- parent()
- parents()
- parentsUntil()

### jQuery parent() 方法

parent() 方法返回被选元素的直接父元素。

该方法只会向上一级对 DOM 树进行遍历。

下面的例子返回每个 <span> 元素的直接**父元素**：

```js
$(document).ready(function(){
  $("span").parent();
});
```

### jQuery parents() 方法

parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。

下面的例子返回所有 <span> 元素的**所有祖先**：

```js
$(document).ready(function(){
  $("span").parents();
});
```

您也可以使用可选参数来过滤对祖先元素的搜索。

下面的例子返回所有 <span> 元素的所有祖先，并且它是 <ul> 元素： **指定**的元素

```js
$(document).ready(function(){
  $("span").parents("ul");
});
```

### jQuery parentsUntil() 方法

parentsUntil() 方法返回介于**两个**给定**元素之间**的所有祖先元素。

下面的例子返回介于 <span> 与 <div> 元素之间的所有祖先元素：

```js
$(document).ready(function(){
  $("span").parentsUntil("div");
});
```



## 遍历 - 后代

后代是子、孙、曾孙等等。

通过 jQuery，您能够向下遍历 DOM 树，以查找元素的后代。

### 向下遍历 DOM 树

下面是两个用于向下遍历 DOM 树的 jQuery 方法：

- children()
- find()

### jQuery children() 方法

children() 方法返回**被选**元素的**所有**直接**子元素**。

该方法只会向下一级对 DOM 树进行遍历。

下面的例子返回每个 <div> 元素的所有直接子元素：

```js
$(document).ready(function(){
  $("div").children();
});
```

您也可以使用可选参数来**过滤**对子元素的搜索。

下面的例子返回类名为 "1" 的所有 <p> 元素，并且它们是 <div> 的直接子元素：

```js
$(document).ready(function(){
  $("div").children("p.1");
});
```

### jQuery find() 方法

find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。

下面的例子返回属于 <div> 后代的**所有** <span> 元素：

```js
$(document).ready(function(){
  $("div").find("span");
});
```

下面的例子返回 <div> 的**所有后代**：

```js
$(document).ready(function(){
  $("div").find("*");
});
```



## 遍历 - 同胞(siblings)

同胞拥有相同的父元素。

通过 jQuery，您能够在 DOM 树中遍历元素的同胞元素。

### 在 DOM 树中水平遍历

有许多有用的方法让我们在 DOM 树进行水平遍历：

- siblings()
- next()
- nextAll()
- nextUntil()
- prev()
- prevAll()
- prevUntil()

### jQuery siblings() 方法

siblings() 方法返回被选元素的所有同胞元素。

下面的例子返回 <h2> 的**所有同胞元素**：

```js
$(document).ready(function(){
  $("h2").siblings();
});
```

您也可以使用可选参数来**过滤**对同胞元素的搜索。

下面的例子返回属于 <h2> 的同胞元素的所有 <p> 元素：

```js
$(document).ready(function(){
  $("h2").siblings("p");
});
```

### jQuery next() 方法

next() 方法返回被选元素的**下一个**同胞元素。

该方法只返回**一个**元素。

下面的例子返回 <h2> 的下一个同胞元素：

```js
$(document).ready(function(){
  $("h2").next();
});
```

### jQuery nextAll() 方法

nextAll() 方法返回被选元素的所有跟随的同胞元素。  说白了就是选中元素后面所有的同胞

下面的例子返回 <h2> 的**所有跟随**的同胞元素：

```js
$(document).ready(function(){
  $("h2").nextAll();
});
```

### jQuery nextUntil() 方法

nextUntil() 方法返回介于**两个**给定**参数之间**的所有跟随的同胞元素。

下面的例子返回介于 <h2> 与 <h6> 元素之间的所有同胞元素：

```js
$(document).ready(function(){
  $("h2").nextUntil("h6");
});
```

### jQuery prev(), prevAll() & prevUntil() 方法

prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：它们返回的是前面的同胞元素（在 DOM 树中沿着同胞之前元素遍历，而不是之后元素遍历）。



## 遍历- 过滤

### 缩小搜索元素的范围

三个最基本的过滤方法是：first(), last() 和 eq()，它们允许您基于其在一组元素中的位置来选择一个特定的元素。

其他过滤方法，比如 filter() 和 not() 允许您选取匹配或不匹配某项指定标准的元素。

### jQuery first() 方法

first() 方法返回被选元素的首个元素。

下面的例子选取首个 <div> 元素内部的**第一个** <p> 元素：

```js
$(document).ready(function(){
  $("div p").first();
});
```

### jQuery last() 方法

last() 方法返回被选元素的最后一个元素。

下面的例子选择最后一个 <div> 元素中的**最后一个** <p> 元素：

```js
$(document).ready(function(){
  $("div p").last();
});
```

### jQuery eq() 方法

eq() 方法返回被选元素中带有**指定索引**号的元素。

索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。下面的例子选取第二个 <p> 元素（索引号 1）：

```js
$(document).ready(function(){
  $("p").eq(1);
});
```

### jQuery filter() 方法

filter() 方法允许您规定一个标准。**不匹配**这个标准的元素会被从集合中**删除**，匹配的元素会被返回。

下面的例子返回带有类名 "url" 的所有 <p> 元素：

```js
$(document).ready(function(){
  $("p").filter(".url");
});
```

### jQuery not() 方法

not() 方法返回不匹配标准的所有元素。

提示：not() 方法与 filter() 相反。

下面的例子返回不带有类名 "url" 的所有 <p> 元素：

```js
$(document).ready(function(){
  $("p").not(".url");
});
```



## jQuery - AJAX 简介

AJAX 是与服务器交换数据的技术，它在不重载全部页面的情况下，实现了对部分网页的更新。

### 什么是 AJAX？

AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。

简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。

使用 AJAX 的应用程序案例：谷歌地图、腾讯微博、优酷视频、人人网等等。

您可以在我们的 [jQuery Ajax 参考手册](https://www.runoob.com/jquery/ajax-ajax.html)学会 jQuery Ajax 的具体应用。

您可以在我们的 [AJAX 教程](https://www.runoob.com/ajax/)中学到更多有关 AJAX 的知识。

### 关于 jQuery 与 AJAX

jQuery 提供多个与 AJAX 有关的方法。

通过 jQuery AJAX 方法，您能够使用 HTTP Get 和 HTTP Post 从远程服务器上请求文本、HTML、XML 或 JSON - 同时您能够把这些外部数据直接载入网页的被选元素中。



### 原生AJAX - 向服务器发送请求

XMLHttpRequest 对象用于和服务器交换数据。

#### 向服务器发送请求

如需将请求发送到服务器，我们使用 **XMLHttpRequest** 对象的 **open()** 和 **send()** 方法：

```js
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```

| 方法                         | 描述                                                         |
| :--------------------------- | :----------------------------------------------------------- |
| open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。*method*：请求的类型；GET 或 POST*url*：文件在服务器上的位置*async*：true（异步）或 false（同步） |
| send(*string*)               | 将请求发送到服务器。*string*：仅用于 POST 请求               |

#### GET 还是 POST？

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

然而，在以下情况中，请使用 POST 请求：

- 不愿使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

#### GET 请求

一个简单的 GET 请求：

```js
xmlhttp.open("GET","/try/ajax/demo_get.php",true);
xmlhttp.send();
```

在上面的例子中，您可能得到的是缓存的结果。

为了避免这种情况，请向 URL 添加一个唯一的 ID：

```js
xmlhttp.open("GET","/try/ajax/demo_get.php?t=" + Math.random(),true);
xmlhttp.send();
```

如果您希望通过 GET 方法发送信息，请向 URL 添加信息：

```js
xmlhttp.open("GET","/try/ajax/demo_get2.php?fname=Henry&lname=Ford",true);
xmlhttp.send();
```

#### POST 请求

一个简单 POST 请求：

```js
xmlhttp.open("POST","/try/ajax/demo_post.php",true);
xmlhttp.send();
```

如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：

```js
xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Henry&lname=Ford");
```

| 方法                             | 描述                                                         |
| :------------------------------- | :----------------------------------------------------------- |
| setRequestHeader(*header,value*) | 向请求添加 HTTP 头。*header*: 规定头的名称*value*: 规定头的值 |

#### AJAX - 服务器 响应

如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。

| 属性         | 描述                       |
| :----------- | :------------------------- |
| responseText | 获得字符串形式的响应数据。 |
| responseXML  | 获得 XML 形式的响应数据。  |

#### responseText 属性

如果来自服务器的响应并非 XML，请使用 responseText 属性。

responseText 属性返回字符串形式的响应，因此您可以这样使用：

```js
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```

#### responseXML 属性

如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性：

```js
xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
{
    txt=txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("myDiv").innerHTML=txt;
```

### jQuery - AJAX load() 方法

## jQuery load() 方法

jQuery load() 方法是简单但强大的 AJAX 方法。

load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

**语法:**

```js
$(selector).load(URL,data,callback);
```

必需的 *URL* 参数规定您希望加载的 URL。

可选的 *data* 参数规定与请求一同发送的查询字符串键/值对集合。

可选的 *callback* 参数是 load() 方法完成后所执行的函数名称。

也可以把 jQuery 选择器添加到 URL 参数。

下面的例子把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素中：

```js
$("#div1").load("demo_test.txt #p1");
```

可选的 callback 参数规定当 load() 方法完成后所要允许的回调函数。回调函数可以设置不同的参数：

- *responseTxt* - 包含调用成功时的结果内容
- *statusTXT* - 包含调用的状态
- *xhr* - 包含 XMLHttpRequest 对象

下面的例子会在 load() 方法完成后显示一个提示框。如果 load() 方法已成功，则显示"外部内容加载成功！"，而如果失败，则显示错误消息：

```js
$("button").click(function(){
  $("#div1").load("demo_test.txt",function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success")
      alert("外部内容加载成功!");
    if(statusTxt=="error")
      alert("Error: "+xhr.status+": "+xhr.statusText);
  });
});
```

## jQuery - AJAX get() 和 post() 方法

jQuery get() 和 post() 方法用于通过 HTTP GET 或 POST 请求从服务器请求数据。

------

## HTTP 请求：GET vs. POST

两种在客户端和服务器端进行请求-响应的常用方法是：GET 和 POST。

- *GET* - 从指定的资源请求数据
- *POST* - 向指定的资源提交要处理的数据

GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。

POST 也可用于从服务器获取数据。不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。

如需学习更多有关 GET 和 POST 以及两方法差异的知识，请阅读我们的 [HTTP 方法 - GET 对比 POST](https://www.runoob.com/tags/html-httpmethods.html)。

### jQuery $.get() 方法

$.get() 方法通过 HTTP GET 请求从服务器上请求数据。

```
$.get(URL,callback);
```

必需的 *URL* 参数规定您希望请求的 URL。

可选的 *callback* 参数是请求成功后所执行的函数名。

下面的例子使用 $.get() 方法从服务器上的一个文件中取回数据：

```js
$("button").click(function(){
  $.get("demo_test.php",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });
});
```

### jQuery $.post() 方法

$.post() 方法通过 HTTP POST 请求向服务器提交数据。

**语法:**

```
$.post(URL,data,callback);
```

必需的 *URL* 参数规定您希望请求的 URL。

可选的 *data* 参数规定连同请求发送的数据。

可选的 *callback* 参数是请求成功后所执行的函数名。

下面的例子使用 $.post() 连同请求一起发送数据：

```js
$("button").click(function(){
    $.post("/try/ajax/demo_test_post.php",
    {
        name:"菜鸟教程",
        url:"http://www.runoob.com"
    },
    function(data,status){
        alert("数据: \n" + data + "\n状态: " + status);
    });
});
```

$.post() 的第一个参数是我们希望请求的 URL ("demo_test_post.php")。

然后我们连同请求（name 和 url）一起发送数据。

"demo_test_post.php" 中的 PHP 脚本读取这些参数，对它们进行处理，然后返回结果。

第三个参数是回调函数。第一个回调参数存有被请求页面的内容，而第二个参数存有请求的状态。

## jQuery - noConflict() 方法

如何在页面上同时使用 jQuery 和其他框架？

------

### jQuery 和其他 JavaScript 框架

正如您已经了解到的，jQuery 使用 $ 符号作为 jQuery 的简写。

**如果其他 JavaScript 框架也使用 $ 符号作为简写怎么办？**

其他一些 JavaScript 框架包括：MooTools、Backbone、Sammy、Cappuccino、Knockout、JavaScript MVC、Google Web Toolkit、Google Closure、Ember、Batman 以及 Ext JS。

其中某些框架也使用 $ 符号作为简写（就像 jQuery），如果您在用的两种不同的框架正在使用相同的简写符号，有可能导致脚本停止运行。

jQuery 的团队考虑到了这个问题，并实现了 noConflict() 方法。

### jQuery noConflict() 方法

noConflict() 方法会释放对 $ 标识符的控制，这样其他脚本就可以使用它了。

当然，您仍然可以通过全名替代简写的方式来使用 jQuery：

```js
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery 仍然在工作!");
  });
});

```

您也可以创建自己的简写。noConflict() 可返回对 jQuery 的引用，您可以把它存入变量，以供稍后使用。请看这个例子：

```js
var jq = $.noConflict();
jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("jQuery 仍然在工作!");
  });
});
```

如果你的 jQuery 代码块使用 $ 简写，并且您不愿意改变这个快捷方式，那么您可以把 $ 符号作为变量传递给 ready 方法。这样就可以在函数内使用 $ 符号了 - 而在函数外，依旧不得不使用 "jQuery"：

```js
$.noConflict();
jQuery(document).ready(function($){
  $("button").click(function(){
    $("p").text("jQuery 仍然在工作!");
  });
});
```

## JSONP 教程

JSON: **J**ava**S**cript **O**bject **N**otation(JavaScript 对象表示法)

JSON 是存储和交换文本信息的语法，类似 XML。

JSON 比 XML 更小、更快，更易解析。

### 什么是 JSON ？

- JSON 指的是 JavaScript 对象表示法（**J**ava**S**cript **O**bject **N**otation）
- JSON 是轻量级的文本数据交换格式
- JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。
- JSON 具有自我描述性，更易理解

### 与 XML 相同之处

- JSON 是纯文本
- JSON 具有"自我描述性"（人类可读）
- JSON 具有层级结构（值中存在值）
- JSON 可通过 JavaScript 进行解析
- JSON 数据可使用 AJAX 进行传输

------

### 与 XML 不同之处

- 没有结束标签
- 更短
- 读写的速度更快
- 能够使用内建的 JavaScript eval() 方法进行解析
- 使用数组
- 不使用保留字

------

### 为什么使用 JSON？

对于 AJAX 应用程序来说，JSON 比 XML 更快更易使用：

#### 使用 XML

- 读取 XML 文档
- 使用 XML DOM 来循环遍历文档
- 读取值并存储在变量中

#### 使用 JSON

- 读取 JSON 字符串
- 用 eval() 处理 JSON 字符串

### JSON.parse()

JSON 通常用于与服务端交换数据。

在接收服务器数据时一般是字符串。

我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

```js
JSON.parse(text[, reviver])
```

**参数说明：**

- **text:**必需， 一个有效的 JSON 字符串。
- **reviver:** 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。

例如我们从服务器接收了以下数据：

```js
{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }
```

我们使用 JSON.parse() 方法处理以上数据，将其转换为 JavaScript 对象：

```js
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
```

### JSON.stringify()

JSON 通常用于与服务端交换数据。

在向服务器发送数据时一般是字符串。

我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。

```json
JSON.stringify(value[, replacer[, space]])
```

**参数说明：**

- value:

  必需， 要转换的 JavaScript 值（通常为对象或数组）。

- replacer:

  可选。用于转换结果的函数或数组。

  如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。

  如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。

- space:

  可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t。



## jQuery 选择器

| 选择器                                                       | 实例                          | 选取                                                         |
| :----------------------------------------------------------- | :---------------------------- | :----------------------------------------------------------- |
| [*](https://www.runoob.com/jquery/jq-sel-all.html)           | $("*")                        | 所有元素                                                     |
| [#*id*](https://www.runoob.com/jquery/jq-sel-id.html)        | $("#lastname")                | id="lastname" 的元素                                         |
| [.*class*](https://www.runoob.com/jquery/jq-sel-class.html)  | $(".intro")                   | class="intro" 的所有元素                                     |
| [.*class,*.*class*](https://www.runoob.com/jquery/sel-multiple-classes.html) | $(".intro,.demo")             | class 为 "intro" 或 "demo" 的所有元素                        |
| [*element*](https://www.runoob.com/jquery/jq-sel-element.html) | $("p")                        | 所有 <p> 元素                                                |
| [*el1*,*el2*,*el3*](https://www.runoob.com/jquery/sel-multiple-elements.html) | $("h1,div,p")                 | 所有 <h1>、<div> 和 <p> 元素                                 |
|                                                              |                               |                                                              |
| [:first](https://www.runoob.com/jquery/sel-first.html)       | $("p:first")                  | 第一个 <p> 元素                                              |
| [:last](https://www.runoob.com/jquery/sel-last.html)         | $("p:last")                   | 最后一个 <p> 元素                                            |
| [:even](https://www.runoob.com/jquery/sel-even.html)         | $("tr:even")                  | 所有偶数 <tr> 元素，索引值从 0 开始，第一个元素是偶数 (0)，第二个元素是奇数 (1)，以此类推。 |
| [:odd](https://www.runoob.com/jquery/sel-odd.html)           | $("tr:odd")                   | 所有奇数 <tr> 元素，索引值从 0 开始，第一个元素是偶数 (0)，第二个元素是奇数 (1)，以此类推。 |
|                                                              |                               |                                                              |
| [:first-child](https://www.runoob.com/jquery/jq-sel-firstchild.html) | $("p:first-child")            | 属于其父元素的第一个子元素的所有 <p> 元素                    |
| [:first-of-type](https://www.runoob.com/jquery/sel-firstoftype.html) | $("p:first-of-type")          | 属于其父元素的第一个 <p> 元素的所有 <p> 元素                 |
| [:last-child](https://www.runoob.com/jquery/sel-lastchild.html) | $("p:last-child")             | 属于其父元素的最后一个子元素的所有 <p> 元素                  |
| [:last-of-type](https://www.runoob.com/jquery/sel-lastoftype.html) | $("p:last-of-type")           | 属于其父元素的最后一个 <p> 元素的所有 <p> 元素               |
| [:nth-child(*n*)](https://www.runoob.com/jquery/sel-nthchild.html) | $("p:nth-child(2)")           | 属于其父元素的第二个子元素的所有 <p> 元素                    |
| [:nth-last-child(*n*)](https://www.runoob.com/jquery/sel-nthlastchild.html) | $("p:nth-last-child(2)")      | 属于其父元素的第二个子元素的所有 <p> 元素，从最后一个子元素开始计数 |
| [:nth-of-type(*n*)](https://www.runoob.com/jquery/sel-nthoftype.html) | $("p:nth-of-type(2)")         | 属于其父元素的第二个 <p> 元素的所有 <p> 元素                 |
| [:nth-last-of-type(*n*)](https://www.runoob.com/jquery/sel-nthlastoftype.html) | $("p:nth-last-of-type(2)")    | 属于其父元素的第二个 <p> 元素的所有 <p> 元素，从最后一个子元素开始计数 |
| [:only-child](https://www.runoob.com/jquery/sel-onlychild.html) | $("p:only-child")             | 属于其父元素的唯一子元素的所有 <p> 元素                      |
| [:only-of-type](https://www.runoob.com/jquery/sel-onlyoftype.html) | $("p:only-of-type")           | 属于其父元素的特定类型的唯一子元素的所有 <p> 元素            |
|                                                              |                               |                                                              |
| [parent > child](https://www.runoob.com/jquery/sel-parent-child.html) | $("div > p")                  | <div> 元素的直接子元素的所有 <p> 元素                        |
| [parent descendant](https://www.runoob.com/jquery/sel-parent-descendant.html) | $("div p")                    | <div> 元素的后代的所有 <p> 元素                              |
| [element + next](https://www.runoob.com/jquery/sel-previous-next.html) | $("div + p")                  | 每个 <div> 元素相邻的下一个 <p> 元素                         |
| [element ~ siblings](https://www.runoob.com/jquery/sel-previous-siblings.html) | $("div ~ p")                  | <div> 元素同级的所有 <p> 元素                                |
|                                                              |                               |                                                              |
| [:eq(*index*)](https://www.runoob.com/jquery/sel-eq.html)    | $("ul li:eq(3)")              | 列表中的第四个元素（index 值从 0 开始）                      |
| [:gt(*no*)](https://www.runoob.com/jquery/sel-gt.html)       | $("ul li:gt(3)")              | 列举 index 大于 3 的元素                                     |
| [:lt(*no*)](https://www.runoob.com/jquery/sel-lt.html)       | $("ul li:lt(3)")              | 列举 index 小于 3 的元素                                     |
| [:not(*selector*)](https://www.runoob.com/jquery/jq-sel-not.html) | $("input:not(:empty)")        | 所有不为空的输入元素                                         |
|                                                              |                               |                                                              |
| [:header](https://www.runoob.com/jquery/sel-header.html)     | $(":header")                  | 所有标题元素 <h1>, <h2> ...                                  |
| [:animated](https://www.runoob.com/jquery/sel-animated.html) | $(":animated")                | 所有动画元素                                                 |
| [:focus](https://www.runoob.com/jquery/jq-sel-focus.html)    | $(":focus")                   | 当前具有焦点的元素                                           |
| [:contains(*text*)](https://www.runoob.com/jquery/sel-contains.html) | $(":contains('Hello')")       | 所有包含文本 "Hello" 的元素                                  |
| [:has(*selector*)](https://www.runoob.com/jquery/sel-has.html) | $("div:has(p)")               | 所有包含有 <p> 元素在其内的 <div> 元素                       |
| [:empty](https://www.runoob.com/jquery/jq-sel-empty.html)    | $(":empty")                   | 所有空元素                                                   |
| [:parent](https://www.runoob.com/jquery/sel-parent.html)     | $(":parent")                  | 匹配所有含有子元素或者文本的父元素。                         |
| [:hidden](https://www.runoob.com/jquery/sel-hidden.html)     | $("p:hidden")                 | 所有隐藏的 <p> 元素                                          |
| [:visible](https://www.runoob.com/jquery/sel-visible.html)   | $("table:visible")            | 所有可见的表格                                               |
| [:root](https://www.runoob.com/jquery/jq-sel-root.html)      | $(":root")                    | 文档的根元素                                                 |
| [:lang(*language*)](https://www.runoob.com/jquery/jq-sel-lang.html) | $("p:lang(de)")               | 所有 lang 属性值为 "de" 的 <p> 元素                          |
|                                                              |                               |                                                              |
| [[*attribute*\]](https://www.runoob.com/jquery/jq-sel-attribute.html) | $("[href]")                   | 所有带有 href 属性的元素                                     |
| [[*attribute*=*value*\]](https://www.runoob.com/jquery/sel-attribute-equal-value.html) | $("[href='default.htm']")     | 所有带有 href 属性且值等于 "default.htm" 的元素              |
| [[*attribute*!=*value*\]](https://www.runoob.com/jquery/sel-attribute-notequal-value.html) | $("[href!='default.htm']")    | 所有带有 href 属性且值不等于 "default.htm" 的元素            |
| [[*attribute*$=*value*\]](https://www.runoob.com/jquery/sel-attribute-end-value.html) | $("[href$='.jpg']")           | 所有带有 href 属性且值以 ".jpg" 结尾的元素                   |
| [[*attribute*\|=*value*\]](https://www.runoob.com/jquery/sel-attribute-prefix-value.html) | $("[title\|='Tomorrow']")     | 所有带有 title 属性且值等于 'Tomorrow' 或者以 'Tomorrow' 后跟连接符作为开头的字符串 |
| [[*attribute*^=*value*\]](https://www.runoob.com/jquery/sel-attribute-beginning-value.html) | $("[title^='Tom']")           | 所有带有 title 属性且值以 "Tom" 开头的元素                   |
| [[*attribute*~=*value*\]](https://www.runoob.com/jquery/sel-attribute-contains-value.html) | $("[title~='hello']")         | 所有带有 title 属性且值包含单词 "hello" 的元素               |
| [[*attribute**=*value*\]](https://www.runoob.com/jquery/sel-attribute-contains-string-value.html) | $("[title*='hello']")         | 所有带有 title 属性且值包含字符串 "hello" 的元素             |
| [[*name*=*value*\][*name2*=*value2*]](https://www.runoob.com/jquery/sel-multipleattribute-equal-value.html) | $( "input[id][name$='man']" ) | 带有 id 属性，并且 name 属性以 man 结尾的输入框              |
|                                                              |                               |                                                              |
| [:input](https://www.runoob.com/jquery/sel-input.html)       | $(":input")                   | 所有 input 元素                                              |
| [:text](https://www.runoob.com/jquery/sel-input-text.html)   | $(":text")                    | 所有带有 type="text" 的 input 元素                           |
| [:password](https://www.runoob.com/jquery/sel-input-password.html) | $(":password")                | 所有带有 type="password" 的 input 元素                       |
| [:radio](https://www.runoob.com/jquery/sel-input-radio.html) | $(":radio")                   | 所有带有 type="radio" 的 input 元素                          |
| [:checkbox](https://www.runoob.com/jquery/sel-input-checkbox.html) | $(":checkbox")                | 所有带有 type="checkbox" 的 input 元素                       |
| [:submit](https://www.runoob.com/jquery/sel-input-submit.html) | $(":submit")                  | 所有带有 type="submit" 的 input 元素                         |
| [:reset](https://www.runoob.com/jquery/sel-input-reset.html) | $(":reset")                   | 所有带有 type="reset" 的 input 元素                          |
| [:button](https://www.runoob.com/jquery/sel-input-button.html) | $(":button")                  | 所有带有 type="button" 的 input 元素                         |
| [:image](https://www.runoob.com/jquery/sel-input-image.html) | $(":image")                   | 所有带有 type="image" 的 input 元素                          |
| [:file](https://www.runoob.com/jquery/sel-input-file.html)   | $(":file")                    | 所有带有 type="file" 的 input 元素                           |
| [:enabled](https://www.runoob.com/jquery/sel-input-enabled.html) | $(":enabled")                 | 所有启用的元素                                               |
| [:disabled](https://www.runoob.com/jquery/sel-input-disabled.html) | $(":disabled")                | 所有禁用的元素                                               |
| [:selected](https://www.runoob.com/jquery/sel-input-selected.html) | $(":selected")                | 所有选定的下拉列表元素                                       |
| [:checked](https://www.runoob.com/jquery/sel-input-checked.html) | $(":checked")                 | 所有选中的复选框选项                                         |
| .selector                                                    | $(selector).selector          | 在jQuery 1.7中已经不被赞成使用。返回传给jQuery()的原始选择器 |
| [:target](https://www.runoob.com/jquery/jq-sel-target.html)  | $( "p:target" )               | 选择器将选中ID和URI中一个格式化的标识符相匹配的<p>元素       |

## jQuery 事件 方法

事件方法触发器或添加一个函数到被选元素的事件处理程序。

下面的表格列出了所有用于处理事件的 jQuery 方法。

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [bind()](https://www.runoob.com/jquery/event-bind.html)      | 向元素添加事件处理程序                                       |
| [blur()](https://www.runoob.com/jquery/event-blur.html)      | 添加/触发失去焦点事件                                        |
| [change()](https://www.runoob.com/jquery/event-change.html)  | 添加/触发 change 事件                                        |
| [click()](https://www.runoob.com/jquery/event-click.html)    | 添加/触发 click 事件                                         |
| [dblclick()](https://www.runoob.com/jquery/event-dblclick.html) | 添加/触发 double click 事件                                  |
| [delegate()](https://www.runoob.com/jquery/event-delegate.html) | 向匹配元素的当前或未来的子元素添加处理程序                   |
| [die()](https://www.runoob.com/jquery/event-die.html)        | 在版本 1.9 中被移除。移除所有通过 live() 方法添加的事件处理程序 |
| [error()](https://www.runoob.com/jquery/event-error.html)    | 在版本 1.8 中被废弃。添加/触发 error 事件                    |
| [event.currentTarget](https://www.runoob.com/jquery/jq-event-currenttarget.html) | 在事件冒泡阶段内的当前 DOM 元素                              |
| [event.data](https://www.runoob.com/jquery/event-data.html)  | 包含当前执行的处理程序被绑定时传递到事件方法的可选数据       |
| [event.delegateTarget](https://www.runoob.com/jquery/event-delegatetarget.html) | 返回当前调用的 jQuery 事件处理程序所添加的元素               |
| [event.isDefaultPrevented()](https://www.runoob.com/jquery/event-isdefaultprevented.html) | 返回指定的 event 对象上是否调用了 event.preventDefault()     |
| [event.isImmediatePropagationStopped()](https://www.runoob.com/jquery/event-isimmediatepropagationstopped.html) | 返回指定的 event 对象上是否调用了 event.stopImmediatePropagation() |
| [event.isPropagationStopped()](https://www.runoob.com/jquery/event-ispropagationstopped.html) | 返回指定的 event 对象上是否调用了 event.stopPropagation()    |
| [event.namespace](https://www.runoob.com/jquery/event-namespace.html) | 返回当事件被触发时指定的命名空间                             |
| [event.pageX](https://www.runoob.com/jquery/event-pagex.html) | 返回相对于文档左边缘的鼠标位置                               |
| [event.pageY](https://www.runoob.com/jquery/event-pagey.html) | 返回相对于文档上边缘的鼠标位置                               |
| [event.preventDefault()](https://www.runoob.com/jquery/event-preventdefault.html) | 阻止事件的默认行为                                           |
| [event.relatedTarget](https://www.runoob.com/jquery/jq-event-relatedtarget.html) | 返回当鼠标移动时哪个元素进入或退出                           |
| [event.result](https://www.runoob.com/jquery/event-result.html) | 包含由被指定事件触发的事件处理程序返回的最后一个值           |
| [event.stopImmediatePropagation()](https://www.runoob.com/jquery/event-stopimmediatepropagation.html) | 阻止其他事件处理程序被调用                                   |
| [event.stopPropagation()](https://www.runoob.com/jquery/event-stoppropagation.html) | 阻止事件向上冒泡到 DOM 树，阻止任何父处理程序被事件通知      |
| [event.target](https://www.runoob.com/jquery/jq-event-target.html) | 返回哪个 DOM 元素触发事件                                    |
| [event.timeStamp](https://www.runoob.com/jquery/jq-event-timestamp.html) | 返回从 1970 年 1 月 1 日到事件被触发时的毫秒数               |
| [event.type](https://www.runoob.com/jquery/jq-event-type.html) | 返回哪种事件类型被触发                                       |
| [event.which](https://www.runoob.com/jquery/event-which.html) | 返回指定事件上哪个键盘键或鼠标按钮被按下                     |
| [event.metaKey](https://www.runoob.com/jquery/event_metakey.html) | 事件触发时 META 键是否被按下                                 |
| [focus()](https://www.runoob.com/jquery/event-focus.html)    | 添加/触发 focus 事件                                         |
| [focusin()](https://www.runoob.com/jquery/event-focusin.html) | 添加事件处理程序到 focusin 事件                              |
| [focusout()](https://www.runoob.com/jquery/event-focusout.html) | 添加事件处理程序到 focusout 事件                             |
| [hover()](https://www.runoob.com/jquery/event-hover.html)    | 添加两个事件处理程序到 hover 事件                            |
| [keydown()](https://www.runoob.com/jquery/event-keydown.html) | 添加/触发 keydown 事件                                       |
| [keypress()](https://www.runoob.com/jquery/event-keypress.html) | 添加/触发 keypress 事件                                      |
| [keyup()](https://www.runoob.com/jquery/event-keyup.html)    | 添加/触发 keyup 事件                                         |
| [live()](https://www.runoob.com/jquery/event-live.html)      | 在版本 1.9 中被移除。添加一个或多个事件处理程序到当前或未来的被选元素 |
| [load()](https://www.runoob.com/jquery/event-load.html)      | 在版本 1.8 中被废弃。添加一个事件处理程序到 load 事件        |
| [mousedown()](https://www.runoob.com/jquery/event-mousedown.html) | 添加/触发 mousedown 事件                                     |
| [mouseenter()](https://www.runoob.com/jquery/event-mouseenter.html) | 添加/触发 mouseenter 事件                                    |
| [mouseleave()](https://www.runoob.com/jquery/event-mouseleave.html) | 添加/触发 mouseleave 事件                                    |
| [mousemove()](https://www.runoob.com/jquery/event-mousemove.html) | 添加/触发 mousemove 事件                                     |
| [mouseout()](https://www.runoob.com/jquery/event-mouseout.html) | 添加/触发 mouseout 事件                                      |
| [mouseover()](https://www.runoob.com/jquery/event-mouseover.html) | 添加/触发 mouseover 事件                                     |
| [mouseup()](https://www.runoob.com/jquery/event-mouseup.html) | 添加/触发 mouseup 事件                                       |
| [off()](https://www.runoob.com/jquery/event-off.html)        | 移除通过 on() 方法添加的事件处理程序                         |
| [on()](https://www.runoob.com/jquery/event-on.html)          | 向元素添加事件处理程序                                       |
| [one()](https://www.runoob.com/jquery/event-one.html)        | 向被选元素添加一个或多个事件处理程序。该处理程序只能被每个元素触发一次 |
| [$.proxy()](https://www.runoob.com/jquery/event-proxy.html)  | 接受一个已有的函数，并返回一个带特定上下文的新的函数         |
| [ready()](https://www.runoob.com/jquery/event-ready.html)    | 规定当 DOM 完全加载时要执行的函数                            |
| [resize()](https://www.runoob.com/jquery/event-resize.html)  | 添加/触发 resize 事件                                        |
| [scroll()](https://www.runoob.com/jquery/event-scroll.html)  | 添加/触发 scroll 事件                                        |
| [select()](https://www.runoob.com/jquery/event-select.html)  | 添加/触发 select 事件                                        |
| [submit()](https://www.runoob.com/jquery/event-submit.html)  | 添加/触发 submit 事件                                        |
| [toggle()](https://www.runoob.com/jquery/event-toggle.html)  | 在版本 1.9 中被移除。添加 click 事件之间要切换的两个或多个函数 |
| [trigger()](https://www.runoob.com/jquery/event-trigger.html) | 触发绑定到被选元素的所有事件                                 |
| [triggerHandler()](https://www.runoob.com/jquery/event-triggerhandler.html) | 触发绑定到被选元素的指定事件上的所有函数                     |
| [unbind()](https://www.runoob.com/jquery/event-unbind.html)  | 从被选元素上移除添加的事件处理程序                           |
| [undelegate()](https://www.runoob.com/jquery/event-undelegate.html) | 从现在或未来的被选元素上移除事件处理程序                     |
| [unload()](https://www.runoob.com/jquery/event-unload.html)  | 在版本 1.8 中被废弃。添加事件处理程序到 unload 事件          |
| [contextmenu()](https://www.runoob.com/jquery/event-contextmenu.html) | 添加事件处理程序到 contextmenu 事件                          |
| [$.holdReady()](https://www.runoob.com/jquery/event-holdready.html) | 用于暂停或恢复.ready() 事件的执行                            |



## jQuery 效果 方法

下面的表格列出了所有用于创建动画效果的 jQuery 方法。

| 方法                                                         | 描述                                         |
| :----------------------------------------------------------- | :------------------------------------------- |
| [animate()](https://www.runoob.com/jquery/eff-animate.html)  | 对被选元素应用"自定义"的动画                 |
| [clearQueue()](https://www.runoob.com/jquery/eff-clearqueue.html) | 对被选元素移除所有排队函数（仍未运行的）     |
| [delay()](https://www.runoob.com/jquery/eff-delay.html)      | 对被选元素的所有排队函数（仍未运行）设置延迟 |
| [dequeue()](https://www.runoob.com/jquery/eff-dequeue.html)  | 移除下一个排队函数，然后执行函数             |
| [fadeIn()](https://www.runoob.com/jquery/eff-fadein.html)    | 逐渐改变被选元素的不透明度，从隐藏到可见     |
| [fadeOut()](https://www.runoob.com/jquery/eff-fadeout.html)  | 逐渐改变被选元素的不透明度，从可见到隐藏     |
| [fadeTo()](https://www.runoob.com/jquery/eff-fadeto.html)    | 把被选元素逐渐改变至给定的不透明度           |
| [fadeToggle()](https://www.runoob.com/jquery/eff-fadetoggle.html) | 在 fadeIn() 和 fadeOut() 方法之间进行切换    |
| [finish()](https://www.runoob.com/jquery/eff-finish.html)    | 对被选元素停止、移除并完成所有排队动画       |
| [hide()](https://www.runoob.com/jquery/eff-hide.html)        | 隐藏被选元素                                 |
| [queue()](https://www.runoob.com/jquery/eff-queue.html)      | 显示被选元素的排队函数                       |
| [show()](https://www.runoob.com/jquery/eff-show.html)        | 显示被选元素                                 |
| [slideDown()](https://www.runoob.com/jquery/eff-slidedown.html) | 通过调整高度来滑动显示被选元素               |
| [slideToggle()](https://www.runoob.com/jquery/eff-slidetoggle.html) | slideUp() 和 slideDown() 方法之间的切换      |
| [slideUp()](https://www.runoob.com/jquery/eff-slideup.html)  | 通过调整高度来滑动隐藏被选元素               |
| [stop()](https://www.runoob.com/jquery/eff-stop.html)        | 停止被选元素上当前正在运行的动画             |
| [toggle()](https://www.runoob.com/jquery/eff-toggle.html)    | hide() 和 show() 方法之间的切换              |



## jQuery HTML / CSS 方法

下面的表格列出了所有用于处理 HTML 和 CSS 的 jQuery 方法。

下面的方法适用于 HTML 和 XML 文档。除了：html() 方法。

| 方法                                                         | 描述                                              |
| :----------------------------------------------------------- | :------------------------------------------------ |
| [addClass()](https://www.runoob.com/jquery/html-addclass.html) | 向被选元素添加一个或多个类名                      |
| [after()](https://www.runoob.com/jquery/html-after.html)     | 在被选元素后插入内容                              |
| [append()](https://www.runoob.com/jquery/html-append.html)   | 在被选元素的结尾插入内容                          |
| [appendTo()](https://www.runoob.com/jquery/html-appendto.html) | 在被选元素的结尾插入 HTML 元素                    |
| [attr()](https://www.runoob.com/jquery/html-attr.html)       | 设置或返回被选元素的属性/值                       |
| [before()](https://www.runoob.com/jquery/html-before.html)   | 在被选元素前插入内容                              |
| [clone()](https://www.runoob.com/jquery/html-clone.html)     | 生成被选元素的副本                                |
| [css()](https://www.runoob.com/jquery/css-css.html)          | 为被选元素设置或返回一个或多个样式属性            |
| [detach()](https://www.runoob.com/jquery/html-detach.html)   | 移除被选元素（保留数据和事件）                    |
| [empty()](https://www.runoob.com/jquery/html-empty.html)     | 从被选元素移除所有子节点和内容                    |
| [hasClass()](https://www.runoob.com/jquery/html-hasclass.html) | 检查被选元素是否包含指定的 class 名称             |
| [height()](https://www.runoob.com/jquery/css-height.html)    | 设置或返回被选元素的高度                          |
| [html()](https://www.runoob.com/jquery/html-html.html)       | 设置或返回被选元素的内容                          |
| [innerHeight()](https://www.runoob.com/jquery/html-innerheight.html) | 返回元素的高度（包含 padding，不包含 border）     |
| [innerWidth()](https://www.runoob.com/jquery/html-innerwidth.html) | 返回元素的宽度（包含 padding，不包含 border）     |
| [insertAfter()](https://www.runoob.com/jquery/html-insertafter.html) | 在被选元素后插入 HTML 元素                        |
| [insertBefore()](https://www.runoob.com/jquery/html-insertbefore.html) | 在被选元素前插入 HTML 元素                        |
| [offset()](https://www.runoob.com/jquery/css-offset.html)    | 设置或返回被选元素的偏移坐标（相对于文档）        |
| [offsetParent()](https://www.runoob.com/jquery/css-offsetparent.html) | 返回第一个定位的祖先元素                          |
| [outerHeight()](https://www.runoob.com/jquery/html-outerheight.html) | 返回元素的高度（包含 padding 和 border）          |
| [outerWidth()](https://www.runoob.com/jquery/html-outerwidth.html) | 返回元素的宽度（包含 padding 和 border）          |
| [position()](https://www.runoob.com/jquery/css-position.html) | 返回元素的位置（相对于父元素）                    |
| [prepend()](https://www.runoob.com/jquery/html-prepend.html) | 在被选元素的开头插入内容                          |
| [prependTo()](https://www.runoob.com/jquery/html-prependto.html) | 在被选元素的开头插入 HTML 元素                    |
| [prop()](https://www.runoob.com/jquery/html-prop.html)       | 设置或返回被选元素的属性/值                       |
| [remove()](https://www.runoob.com/jquery/html-remove.html)   | 移除被选元素（包含数据和事件）                    |
| [removeAttr()](https://www.runoob.com/jquery/html-removeattr.html) | 从被选元素移除一个或多个属性                      |
| [removeClass()](https://www.runoob.com/jquery/html-removeclass.html) | 从被选元素移除一个或多个类                        |
| [removeProp()](https://www.runoob.com/jquery/html-removeprop.html) | 移除通过 prop() 方法设置的属性                    |
| [replaceAll()](https://www.runoob.com/jquery/html-replaceall.html) | 把被选元素替换为新的 HTML 元素                    |
| [replaceWith()](https://www.runoob.com/jquery/html-replacewith.html) | 把被选元素替换为新的内容                          |
| [scrollLeft()](https://www.runoob.com/jquery/css-scrollleft.html) | 设置或返回被选元素的水平滚动条位置                |
| [scrollTop()](https://www.runoob.com/jquery/css-scrolltop.html) | 设置或返回被选元素的垂直滚动条位置                |
| [text()](https://www.runoob.com/jquery/html-text.html)       | 设置或返回被选元素的文本内容                      |
| [toggleClass()](https://www.runoob.com/jquery/html-toggleclass.html) | 在被选元素中添加/移除一个或多个类之间切换         |
| [unwrap()](https://www.runoob.com/jquery/html-unwrap.html)   | 移除被选元素的父元素                              |
| [val()](https://www.runoob.com/jquery/html-val.html)         | 设置或返回被选元素的属性值（针对表单元素）        |
| [width()](https://www.runoob.com/jquery/css-width.html)      | 设置或返回被选元素的宽度                          |
| [wrap()](https://www.runoob.com/jquery/html-wrap.html)       | 在每个被选元素的周围用 HTML 元素包裹起来          |
| [wrapAll()](https://www.runoob.com/jquery/html-wrapall.html) | 在所有被选元素的周围用 HTML 元素包裹起来          |
| [wrapInner()](https://www.runoob.com/jquery/html-wrapinner.html) | 在每个被选元素的内容周围用 HTML 元素包裹起来      |
| [$.escapeSelector()](https://www.runoob.com/jquery/html-escapeSelector.html) | 转义CSS选择器中有特殊意义的字符或字符串           |
| [$.cssHooks](https://www.runoob.com/jquery/html-csshooks.html) | 提供了一种方法通过定义函数来获取和设置特定的CSS值 |



## jQuery 遍历 方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [add()](https://www.runoob.com/jquery/traversing-add.html)   | 把元素添加到匹配元素的集合中                                 |
| addBack()                                                    | 把之前的元素集添加到当前集合中                               |
| andSelf()                                                    | 在版本 1.8 中被废弃。addBack() 的别名                        |
| [children()](https://www.runoob.com/jquery/traversing-children.html) | 返回被选元素的所有直接子元素                                 |
| [closest()](https://www.runoob.com/jquery/traversing-closest.html) | 返回被选元素的第一个祖先元素                                 |
| [contents()](https://www.runoob.com/jquery/traversing-contents.html) | 返回被选元素的所有直接子元素（包含文本和注释节点）           |
| [each()](https://www.runoob.com/jquery/traversing-each.html) | 为每个匹配元素执行函数                                       |
| end()                                                        | 结束当前链中最近的一次筛选操作，并把匹配元素集合返回到前一次的状态 |
| [eq()](https://www.runoob.com/jquery/traversing-eq.html)     | 返回带有被选元素的指定索引号的元素                           |
| [filter()](https://www.runoob.com/jquery/traversing-filter.html) | 把匹配元素集合缩减为匹配选择器或匹配函数返回值的新元素       |
| [find()](https://www.runoob.com/jquery/traversing-find.html) | 返回被选元素的后代元素                                       |
| [first()](https://www.runoob.com/jquery/traversing-first.html) | 返回被选元素的第一个元素                                     |
| [has()](https://www.runoob.com/jquery/traversing-has.html)   | 返回拥有一个或多个元素在其内的所有元素                       |
| [is()](https://www.runoob.com/jquery/traversing-is.html)     | 根据选择器/元素/jQuery 对象检查匹配元素集合，如果存在至少一个匹配元素，则返回 true |
| [last()](https://www.runoob.com/jquery/traversing-last.html) | 返回被选元素的最后一个元素                                   |
| map()                                                        | 把当前匹配集合中的每个元素传递给函数，产生包含返回值的新 jQuery 对象 |
| [next()](https://www.runoob.com/jquery/traversing-next.html) | 返回被选元素的后一个同级元素                                 |
| [nextAll()](https://www.runoob.com/jquery/traversing-nextall.html) | 返回被选元素之后的所有同级元素                               |
| [nextUntil()](https://www.runoob.com/jquery/traversing-nextuntil.html) | 返回介于两个给定参数之间的每个元素之后的所有同级元素         |
| [not()](https://www.runoob.com/jquery/traversing-not.html)   | 从匹配元素集合中移除元素                                     |
| [offsetParent()](https://www.runoob.com/jquery/traversing-offsetparent.html) | 返回第一个定位的父元素                                       |
| [parent()](https://www.runoob.com/jquery/traversing-parent.html) | 返回被选元素的直接父元素                                     |
| [parents()](https://www.runoob.com/jquery/traversing-parents.html) | 返回被选元素的所有祖先元素                                   |
| [parentsUntil()](https://www.runoob.com/jquery/traversing-parentsuntil.html) | 返回介于两个给定参数之间的所有祖先元素                       |
| [prev()](https://www.runoob.com/jquery/traversing-prev.html) | 返回被选元素的前一个同级元素                                 |
| [prevAll()](https://www.runoob.com/jquery/traversing-prevall.html) | 返回被选元素之前的所有同级元素                               |
| [prevUntil()](https://www.runoob.com/jquery/traversing-prevuntil.html) | 返回介于两个给定参数之间的每个元素之前的所有同级元素         |
| [siblings()](https://www.runoob.com/jquery/traversing-siblings.html) | 返回被选元素的所有同级元素                                   |
| [slice()](https://www.runoob.com/jquery/traversing-slice.html) | 把匹配元素集合缩减为指定范围的子集                           |



## jQuery AJAX 方法

AJAX 是一种与服务器交换数据的技术，可以在不重新载入整个页面的情况下更新网页的一部分。

下面的表格列出了所有的 jQuery AJAX 方法：

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [$.ajax()](https://www.runoob.com/jquery/ajax-ajax.html)     | 执行异步 AJAX 请求                                           |
| $.ajaxPrefilter()                                            | 在每个请求发送之前且被 $.ajax() 处理之前，处理自定义 Ajax 选项或修改已存在选项 |
| [$.ajaxSetup()](https://www.runoob.com/jquery/ajax-ajaxsetup.html) | 为将来的 AJAX 请求设置默认值                                 |
| $.ajaxTransport()                                            | 创建处理 Ajax 数据实际传送的对象                             |
| [$.get()](https://www.runoob.com/jquery/ajax-get.html)       | 使用 AJAX 的 HTTP GET 请求从服务器加载数据                   |
| [$.getJSON()](https://www.runoob.com/jquery/ajax-getjson.html) | 使用 HTTP GET 请求从服务器加载 JSON 编码的数据               |
| [$.getScript()](https://www.runoob.com/jquery/ajax-getscript.html) | 使用 AJAX 的 HTTP GET 请求从服务器加载并执行 JavaScript      |
| [$.param()](https://www.runoob.com/jquery/ajax-param.html)   | 创建数组或对象的序列化表示形式（可用于 AJAX 请求的 URL 查询字符串） |
| [$.post()](https://www.runoob.com/jquery/ajax-post.html)     | 使用 AJAX 的 HTTP POST 请求从服务器加载数据                  |
| [ajaxComplete()](https://www.runoob.com/jquery/ajax-ajaxcomplete.html) | 规定 AJAX 请求完成时运行的函数                               |
| [ajaxError()](https://www.runoob.com/jquery/ajax-ajaxerror.html) | 规定 AJAX 请求失败时运行的函数                               |
| [ajaxSend()](https://www.runoob.com/jquery/ajax-ajaxsend.html) | 规定 AJAX 请求发送之前运行的函数                             |
| [ajaxStart()](https://www.runoob.com/jquery/ajax-ajaxstart.html) | 规定第一个 AJAX 请求开始时运行的函数                         |
| [ajaxStop()](https://www.runoob.com/jquery/ajax-ajaxstop.html) | 规定所有的 AJAX 请求完成时运行的函数                         |
| [ajaxSuccess()](https://www.runoob.com/jquery/ajax-ajaxsuccess.html) | 规定 AJAX 请求成功完成时运行的函数                           |
| [load()](https://www.runoob.com/jquery/ajax-load.html)       | 从服务器加载数据，并把返回的数据放置到指定的元素中           |
| [serialize()](https://www.runoob.com/jquery/ajax-serialize.html) | 编码表单元素集为字符串以便提交                               |
| [serializeArray()](https://www.runoob.com/jquery/ajax-serializearray.html) | 编码表单元素集为 names 和 values 的数组                      |

