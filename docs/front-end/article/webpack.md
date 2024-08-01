# webpack

##  初始化package.json

```bash
npm init -y
```

 初始化一下package.json

然后可以安装一下

```bash
npm install jquery -S
```

 安装一下JQ 

-D是只在开发阶段生效

-S是开发阶段将来上线

要安装两个包 webpack webpack—cli

然后开始安装

```bash
npm i webpack@5.42.1 webpack-cli@4.9.0 -D 
```



然后开始处理文件 要创建 src文件 ->index.html ->index.js 

外面要有一个webpack.config.js

```js
const path = require('path') //导入 node.js 中专门操作路径的模块

// 使用node.js 中导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  entry:path.join(__dirname,'./src/index.js'), // 打包入口文件的路径
  // 代表 webpack 运行的模式，可选值有两个 development （开发时候用） 和 production （开发完了要上线的时候用）
  mode: 'development',
  output:{
    path:path.join(__dirname,'./dist'), // 输出文件的存放路径
    filename: 'bundle.js' // 输出文件的名称
  }
}
```

然后需要注意的地方是

我们每一次

打包一份 npm run dev 都需要重新来一遍，太麻烦了

安装个插件

```bash
npm i webpack-dev-server@3.11.2 -D
```

脚本package.json

```json
"scripts": {
    "dev": "webpack serve"
  },
```

需要注意的地方

我们引用这个 webpack-dev-ser 打包热加载的插件 ，他会在我们内存建立一个引用的

```js
<script src="/bundle.js"></script>
// 而不能直接用
<!-- <script src="../dist/bundle.js"></script> -->
```

还有一个就是我们调用

```bash
npm run dev
// 执行的时候我们可以看见
// 生成一个http://localhost:8080/ 的链接地址
// 可是不是直接显示index.html
// 还得在点击scr目录
// 很麻烦
// 使用我们需要一个插件来实现

npm install html-webpack-plugin@5.3.2 -D

```

需要在webpack.config.js里进行填写信息跟配置

```js
const path = require('path') //导入 node.js 中专门操作路径的模块

// 1、导入 html-webpack-plugin 这个插件、得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2、new 构造函数、创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  // 指定要复制哪个页面
  template:'./src/index.html',
  // 指定复制出来的文件名和存放路径
  filename:"./index.html"
})

// 使用node.js 中导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  entry:path.join(__dirname,'./src/index.js'), // 打包入口文件的路径
  // 代表 webpack 运行的模式，可选值有两个 development （开发时候用） 和 production （开发完了要上线的时候用）
  mode: 'development',
  output:{
    path:path.join(__dirname,'./dist'), // 输出文件的存放路径
    filename: 'bundle.js' // 输出文件的名称
  },
  plugins:[htmlPlugin], // 3.通过 plugins 节点，使 htmlPlugin 插件生效
}
```



```bash
html-webpack-plugin
```

会复制html页面，也到内存中显示

这个插件还会帮我们添加一个新的srcipt脚本 自动添加内存的路径

![image-20220613141340790](C:\Users\64964\AppData\Roaming\Typora\typora-user-images\image-20220613141340790.png)



## devServer

```js
const path = require('path') //导入 node.js 中专门操作路径的模块

// 1、导入 html-webpack-plugin 这个插件、得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2、new 构造函数、创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  // 指定要复制哪个页面
  template: './src/index.html',
  // 指定复制出来的文件名和存放路径
  filename: "./index.html"
})

// 使用node.js 中导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
  // 代表 webpack 运行的模式，可选值有两个 development （开发时候用） 和 production （开发完了要上线的时候用）
  mode: 'development',
  output: {
    path: path.join(__dirname, './dist'), // 输出文件的存放路径
    filename: 'bundle.js' // 输出文件的名称
  },
  plugins: [htmlPlugin], // 3.通过 plugins 节点，使 htmlPlugin 插件生效
  devServer: {
    // 首次打包成功后，自动打开浏览器
    open: true,
    // 实时打包所使用的主机地址
    host: '127.0.0.1',
    // http协议中，如果端口号是80，则可以被省略
    port: 90
  }
}
```



## 学习怎么让webpack处理打包文件

### 处理css文件

```bash
npm i style-loader@3.0.0 css-loader@5.2.6 -D
```

在webpack.config.js 的 module -> rules 数组中，添加loader 规则如下：

```js
// 处理文件
  module: {
    rules: [
      // 定义了不同模块对应的 loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
```

在js文件上

```js
import "../public/css/index.css";
```

![c11f36be1249440e8daa2cc351f7541](C:\Users\64964\AppData\Local\Temp\WeChat Files\c11f36be1249440e8daa2cc351f7541.jpg)

从右--》左方向进行

### 处理less文件

```bash
npm i less-loader@10.0.1 less@4.1.1 -D
```

```js
// 处理文件
  module: {
    rules: [
      // 定义了不同模块对应的 loader
      {
        test: /\.css$/, use: ['style-loader', 'css-loader']
      },
      {
        test:/\.less$/, use:['style-loader', 'css-loader','less-loader']
      }
    ]
  }
```

### 处理images、url文件

```bash
npm i url-loader@4.1.1 file-loader@6.2.0 -D 
```

```js
module: {
    rules: [
      // 定义了不同模块对应的 loader
      {
        test:/\.jpg|png|gif$/, use:'url-loader?limit=22229'
      }
    ]
  }
```

其中 ？ 之后的是loader的参数项：

limit 用来指定图片的大小，单位是字节（byte）

大于 limit 的图片会变成

```
http://127.0.0.1:90/650554b5dde1b05480e825cc8a37e4b5.jpg
有路径的图片
```

只有《= limit大小的图片，才会被转为base64格式的图片

js导入

```js
import logn from './assets/images/1.jpg'

// 导入图片，得到图片文件
$('.box').attr('src', logn)
```

在使用

```
import ES6导入语法的时候
使用 from 接收到成员为 undefined，则没必要进行接收
```

### base64 小图可以，大图不需要转



### 打包处理js文件中的高级语法

### ![ef5250d472ae52e1d03d279ae7b02fd](C:\Users\64964\AppData\Local\Temp\WeChat Files\ef5250d472ae52e1d03d279ae7b02fd.jpg)

```bash
npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
```

```
module: {
    rules: [
      // 使用 babel-loader 处理高级的 js 语法  exclude排除项 把第三方的包排除掉，只需要把自己的代码进行转换即可
      {
        test:/\.js$/, use:'babel-loader',exclude: /node_modules/
      }
    ]
  }
```

#### 配置babel-loader

跟webpack.config.js 同根目录下



在项目根目录下，创建 **babel.config.js** 的配置文件，定义 **Babeld** 的配置项如下:

```js
module.exports = {
  // 声明 babel 可用的插件
  plugins: [
    ['@babel/plugin-proposal-decorators', {
      legacy: true
    }]
  ]
}
```



## 打包发布

配置 webpack 的打包发布

在 **package.json** 文件的 **scripts** 节点下，新增 build 命令如下：

```
"scripts": {
    "dev": "webpack serve",
    "build": "webpack --mode production" // 项目发布时， 运行 build 命令
  },
```

**--model** 是一个参数项，用来指定 webpack 的运行模式。**production** 代表生产环境，

之所以要这么操作是因为

咱们webpack.config.js 里面不是有加了一个

```
mode: 'development',
```

而现在项目要打包 npm run build

会发现执行的是 还是development

但我们不想改变webpack.config.js里的 mode: 'development',

因为npm run dev 也是会执行这一串

所以咱们可用直接在build 多指定一个参数



![image-20220614141343447](C:\Users\64964\AppData\Roaming\Typora\typora-user-images\image-20220614141343447.png)

我们会发现这看起来很不舒服

### 把 js 文件整理到一起

![image-20220614141430441](C:\Users\64964\AppData\Roaming\Typora\typora-user-images\image-20220614141430441.png)



### 把图片文件统一生成到 image 目录中

修改 webpack.config.js 中的 **url-loader** 配置项，新增 **outputPath** 选项即可指定图片文件的输出路径

```js
// 在配置 url-loader 的时候，多个参数之间,使用 & 符号进行分隔
      {
        test:/\.jpg|png|gif$/, use:'url-loader?limit=30410&outputPath=images'
      },
```



### 自动清理 dist 目录下的旧文件

为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可用安装并配置 clean-webpack-plugin 插件

```bash
// 1. 安装清理 dist 目录的 webpack 插件 不用加版本也行
npm install clean-webpack-plugin@3.0.0 -D


//在webpack.config.js 上面添加
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// 在plugins 上new 声明构造函数
plugins: [htmlPlugin,new CleanWebpackPlugin()],

```



## Source Map

什么是 Source Map

就是一个**信息文件**，**里面储存着位置信息**。也就是说，Source Map 文件中存储着压缩混淆后的代码，所对应的**转换前的位置**。

有了它，出错的时候，除错工具将**直接显示原始代码**，而不是**转换后的代码**，能够极大的方便后期的调试。



开发环境下默认生成的Source Map，记录的是生成后的代码的位置。会导致运行时报错的行数与源代码的行数不一致的问题。

简单说就是咱们代码出错了，浏览器报的错误是已经打包过的内存中的报错位置对应不上

### 解决默认Source Map的问题

开发环境下，推荐在 **webpack.config.js** 中添加如下的配置，即可保证**运行时报错的行数**与**源代码的行数**保持一致：

```js
mode: 'development',
  // eval-source-map 仅限在“开发模式”下使用，不建议在“生产模式”下使用
  // 此选项生成的 Source Map 能够保证“运行时报错的行数”与“源代码的行数”保持一致
  devtool:'eval-source-map',
```

在开发阶段咱们可用加 source map 看清代码哪里报错

但上线的时候，咱们要把 devtool 选项 给关闭，防止原始代码通过Source map 的形式暴露给别有所图之人

### npm run build 的时候一定要把 devtool 注释掉



### 还有一种只显示定位行数不暴露源码

在生产环境下，如果**只想定位报错的具体行数**，且**不想暴露源码**。此时可用将 devtool 的值设置为 **nosources-source-map**。实际效果如图所示：

```js
// eval-source-map 仅限在“开发模式”下使用，不建议在“生产模式”下使用
  // 此选项生成的 Source Map 能够保证“运行时报错的行数”与“源代码的行数”保持一致
  // devtool:'eval-source-map',
  // 在实际发布的时候，建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 Source Map
  devtool:'nosources-source-map',
```



```
// 可以看见代码位置，又暴露源码  不推荐！！
devtool:'source-map',
```



### 开发环境下

建议把 devtool 的值设置为 **eval-source-map**

好吃：可以精准定位到具体的错误行

### 生成环境下：

建议**关闭 Source Map** 或将 devtool 的值设置为 **nosources-source-map**

好吃：防止源码泄露，提高网站的安全性



```js
import msg from '../../msg'

// 这种方法不好  咱们使用 @ 表示 src 源代码目录，从外往里查找； 不要使用 ../ 从里往外查找

// @/msg.js
```

在webpack.config.js  module.exports中添加

```js
resolve: {
    // 告诉 webpack，程序员写的代码中， @ 符号表示 src 这一层目录
    alias: {
      '@': path.join(__dirname, './src/')
    }
  }
```



## webpack.config.js最终的样子

```js
const path = require('path') //导入 node.js 中专门操作路径的模块

// 1、导入 html-webpack-plugin 这个插件、得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2、new 构造函数、创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  // 指定要复制哪个页面
  template: './src/index.html',
  // 指定复制出来的文件名和存放路径
  filename: "./index.html"
})

// 左边 {} 是解构赋值
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

// 使用node.js 中导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
  // 代表 webpack 运行的模式，可选值有两个 development （开发时候用） 和 production （开发完了要上线的时候用）
  mode: 'development',
  // eval-source-map 仅限在“开发模式”下使用，不建议在“生产模式”下使用
  // 此选项生成的 Source Map 能够保证“运行时报错的行数”与“源代码的行数”保持一致
  // devtool:'eval-source-map',
  // 在实际发布的时候，建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 Source Map
  devtool: 'nosources-source-map',

  output: {
    path: path.join(__dirname, './dist'), // 输出文件的存放路径
    filename: 'js/bundle.js' // 输出文件的名称
  },
  plugins: [htmlPlugin, new CleanWebpackPlugin()], // 3.通过 plugins 节点，使 htmlPlugin 插件生效
  devServer: {
    // 首次打包成功后，自动打开浏览器
    open: true,
    // 实时打包所使用的主机地址
    host: '127.0.0.1',
    // http协议中，如果端口号是80，则可以被省略
    port: 90
  },
  // 处理文件
  module: {
    rules: [
      // 定义了不同模块对应的 loader 
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // 如果需要调用的 loader 只有一个，则只传递字符串
      // 在配置 url-loader 的时候，多个参数之间,使用 & 符号进行分隔
      {
        test: /\.jpg|png|gif$/,
        use: 'url-loader?limit=30410&outputPath=images'
      },
      // 使用 babel-loader 处理高级的 js 语法  exclude排除项
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    // 告诉 webpack，程序员写的代码中， @ 符号表示 src 这一层目录
    alias: {
      '@': path.join(__dirname, './src/')
    }
  }
}
```



## webpack打包html中img,打包资源成功，图片引用错误，不能显示问题

```bash
npm i html-withimg-loader -D
```

```json
{
  test: /\.html$/,
  //处理html文件中img图片，负责引入img，被url-loaer处理,下载npm i html-withimg-loader -D
  loader: "html-withimg-loader"
}

```

