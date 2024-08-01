# html的使用Scss

要在示例中引入SCSS，你需要按照以下步骤操作：

1、**安装Sass编译器：** 首先，你需要在你的开发环境中安装Sass编译器。你可以使用npm（如果你使用Node.js）或者其他适合你的包管理器来安装Sass。

```bash
npm install -g sass

```

2、**创建SCSS文件：** 在项目目录中创建一个SCSS文件，例如 `styles.scss`。

```css
/* styles.scss */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
```

3、**编译SCSS文件：** 使用Sass编译器将你的SCSS文件编译成CSS文件。

```bash
sass styles.scss styles.css
```

4、**在HTML中引入编译后的CSS文件：** 在HTML文件的`<head>`部分中引入编译后的CSS文件。

```js
<link rel="stylesheet" href="styles.css" />
```



## scss就自动转换css

1. 打开命令行工具（比如终端或命令提示符）。
2. 切换到你的项目目录。
3. 运行以下命令启动Sass的watch模式：

```bash
sass --watch styles.scss:styles.css
```

1. 这条命令告诉Sass监视`styles.scss`文件，并在它发生变化时自动将其编译为`styles.css`文件。
2. 现在，当你修改`styles.scss`文件时，Sass会自动将其编译为CSS文件，而你的页面将立即反映出这些变化。

你可以随时停止watch模式，只需在命令行中按下 `Ctrl + C` 即可。

## 修改html内容保存的时候，预览浏览器自动刷新更新

为在VS Code中实现HTML内容保存时自动刷新浏览器的功能，你可以使用一些插件。其中一个常用的插件是 "Live Server"。下面是如何设置和使用它的步骤：

1. **安装 "Live Server" 插件：** 在 VS Code 的扩展商店中搜索 "Live Server" 并安装它。
2. **打开 HTML 文件：** 在 VS Code 中打开你的 HTML 文件。
3. **右键点击 HTML 文件：** 在编辑器中右键点击 HTML 文件，然后选择 "Open with Live Server"。
4. **预览页面：** 这将自动在默认浏览器中打开你的 HTML 页面，并在右下角显示一个地址（通常是 http://127.0.0.1:5500/）。
5. **实时更新：** 当你修改并保存 HTML 文件时，Live Server 会自动检测到文件的更改并重新加载页面，这样你就可以立即看到修改后的效果。

这样，你就可以在 VS Code 中编辑 HTML 文件时享受到自动刷新浏览器的功能了。



## 初始化css样式

```css
/* Reset CSS */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}

body {
    line-height: 1;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

```

