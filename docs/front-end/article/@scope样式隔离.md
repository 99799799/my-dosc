# @scope

@scope 就是原生css 的样式隔离方案。

```css
@scope (scope root) to (scope limit) {
  rulesets
}
```



## 用法一

只用 第一个参数

*html代码:*

```html
<div class="box">
   <div class="red">这里是红色</div>
</div>
<div class="red">这里不是红色</div>

```

*css代码：*

```css
<style>
      @scope (.box) {
        .red {
          background-color: red;
        }
      }
 </style>
```

![2.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9894d1176494d47acbeb0803bd19caa~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=306&h=152&s=8790&e=jpg&b=fffefe)

我们可以看到， 类名为 .red 的只有在 scope 中才会显示为红色，说明样式隔离成功了



## 用法二

可以看到 还有个 to 包裹的类名，那他的含义是什么呢？

*HTML代码*

```html
 <div class="box">
      <div class="red">这里是红色</div>
      <div class="filter">
        <div class="red">这里不是红色，因为被过滤了</div>
        <div class="red-box">
          <div class="red">即使是子组件也不是红色，因为被过滤了</div>
        </div>
      </div>
      <div class="red">这里是红色</div>
    </div>
 <div class="red">这里不是红色</div>

```

*css代码*

```css
 <style>
      @scope (.box) to (.filter) {
        .red {
          background-color: red;
        }
      }
    </style>
```

*运行结果*

![3.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b82357ba0244766a84599e11058cfd3~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=322&h=130&s=26896&e=jpg&b=fdfaf9)

可以看到 to中的 .filter 下的所有的red 也不是红色 其实就是一种过滤效果，你也可以理解为这是一种`甜甜圈`的结构 只有.box 中和 .filter 以外的元素才能被选中 。

要注意 @scope 的用法是 @scope（空格）（元素类名）（空格）to（空格）（元素类名） to 后面的空格不要忘记了否则是不生效的

## 用法三

什么参数都不加 @sope

```html
    <div class="box">
      <style>
        @scope {
          .red {
            background-color: red;
          }
        }
      </style>
      <div class="red">这里是红色</div>
    </div>
    <div class="red">这里不是红色</div>

```

运行结果

![4.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0412778983545f89d6b83f0c5dc0811~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=190&h=77&s=7379&e=jpg&b=fefdfd)

作为包含在 HTML 元素中的内联样式，在这种情况下，前奏将被省略，并且包含的规则集会自动将范围限定为 `元素` 的封闭父元素 ，意思就是你写在了 html 结构中你就可以把 scope root给省略了，当然你加上也是没问题的。

# @container 容器查询

这个设计几乎可以改变我们对"响应式设计"含义的看法，以前我们都是使用 @media 媒体查询 通过viewport 来调整样式的，但是这种太过于宏观，现在出了 @container 你可以根据父容器大小来设置元素的样式。

```html
 <style>
      .demo {
        width: 200px;
        height: 200px;
        background: red;
        container-name: sidebar;
        container-type: inline-size;
      }

      @container sidebar (width > 300px) {
        a {
          background: green;
        }
      }
    </style>
  </head>
  <body>
    <div id="app">
      <div class="demo">
        <a>我的背景色会随着demo元素的宽度而变化</a>
      </div>
    </div>
  </body>

```

主要的用法就是 `  @container container-name (条件) { 样式表 }`

你可以给需要增加容器查询的元素增加 `container-name` 和 `container-type` 如果你的全局只有一个@container 那你就可以 省略`container-name` ，对于`container-type` 总共有以下几个属性：

- normal是默认值，表示不建立容器元素，

- size表示水平和垂直方向都建立，

- inline-size是只在水平方向建立，会给元素同时应用

- layout、style和inline-size容器状态。

  最后 `container-name` 和 `container-type` 还可以简写成 `container:sidebar /inline-size`,

  具体使用可以查看 [MDN](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FCSS%2F@container)



# :has :where :is

在css 中，我们正常想选择某些东西 我们基本上是用后代选择器

```css
div p{ clolor:red }
```

但是我们有时候想 从子选中父，就可以用`:has`

```css
div:has(p){ color:red }
```

上面的意思表示将所有的含有p 标签的div 标签的颜色变成红色

*应用场景：*

我们公司就有位同事 二次封装了 form 表单 但是对于插槽功能会有段这个结构