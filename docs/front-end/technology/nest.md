# 学习Nest

## [先决条件](https://docs.nestjs.cn/10/firststeps?id=先决条件)

请确保您的操作系统上安装了 [Node.js](http://nodejs.cn/download/)**（>= 12, v13 版本除外）**。

**一分钟安装 node.js** （支持 X86 ARM MIPS 等架构，需要版本管理或者系统为 Raspbian 请直接看 NVM）

windows

1. [点击下载 Node.js](https://npmmirror.com/mirrors/node/v16.18.1/node-v16.18.1-x64.msi)

1. 安装 Node.js

Powershell/CMD 可以打印出这个说明安装成功。（部分系统需要重启后环境变量才生效，如果不会配置环境变量请直接默认安装）

```
解释$node -v
v16.18.1
$ npm -v
7.x.xCopy to clipboardErrorCopied
```

linux

MacOS

Snap

## [起步](https://docs.nestjs.cn/10/firststeps?id=起步)

使用 [Nest CLI](https://docs.nestjs.cn/8/cli?id=overview) 建立新项目非常简单。 在安装好 npm 后，您可以使用下面命令在您的 OS 终端中创建 Nest 项目：

```
$ npm i -g @nestjs/cli
$ nest new project-nameCopy to clipboardErrorCopied
```

要创建启用 TypeScript `strict`模式的新项目，请将 `--strict` 标志传递给 `nest new` 命令

将会创建 `project-name` 目录， 安装 node_modules 和一些其他样板文件，并将创建一个 `src` 目录，目录中包含几个核心文件。

```
解释src
 ├── app.controller.spec.ts
 ├── app.controller.ts
 ├── app.module.ts
 ├── app.service.ts
 └── main.tsCopy to clipboardErrorCopied
```

以下是这些核心文件的简要概述：

|                        |                                                              |
| :--------------------- | ------------------------------------------------------------ |
| app.controller.ts      | 带有单个路由的基本控制器示例。                               |
| app.controller.spec.ts | 对于基本控制器的单元测试样例                                 |
| app.module.ts          | 应用程序的根模块。                                           |
| app.service.ts         | 带有单个方法的基本服务                                       |
| main.ts                | 应用程序入口文件。它使用 `NestFactory` 用来创建 Nest 应用实例。 |

`main.ts` 包含一个异步函数，它负责**引导**我们的应用程序：

> main.ts

```typescript
解释import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();Copy to clipboardErrorCopied
```

要创建一个 Nest 应用实例，我们使用了 `NestFactory` 核心类。`NestFactory` 暴露了一些静态方法用于创建应用实例。 `create()` 方法返回一个实现 `INestApplication` 接口的对象。该对象提供了一组可用的方法，我们会在后面的章节中对这些方法进行详细描述。 在上面的 `main.ts` 示例中，我们只是启动 HTTP 服务，让应用程序等待 HTTP 请求。

请注意，使用 Nest CLI 搭建的项目会创建一个初始项目结构，我们鼓励开发人员将每个模块保存在自己的专用目录中。

默认情况下，如果在创建应用程序时发生了任何错误，你的应用程序会退出并返回错误代码 `1`。如果你想让它抛出错误，请禁用 `abortOnError` 选项(例如，`NestFactory.create(AppModule, { abortOnError: false })`)。

## [平台](https://docs.nestjs.cn/10/firststeps?id=平台)

Nest 旨在成为一个与平台无关的框架。 由于平台无关性，我们以创建可重用的逻辑组件，开发人员可以跨越多种不同类型的应用程序来使用这些组件。 从技术上讲，创建了适配器以后，Nest 可以与任何 node.js 的 HTTP 框架一起工作。有两个支持开箱即用的 HTTP 平台：[express](https://expressjs.com/) 和 [fastify](https://www.fastify.io/)。您可以选择最适合您需求的产品。

|                  |                                                              |
| :--------------- | :----------------------------------------------------------- |
| platform-express | [Express](https://expressjs.com/) 是一个众所周知的 node.js 简约 Web 框架。 这是一个经过实战考验，适用于生产的库，拥有大量社区资源。 默认情况下使用 `@nestjs/platform-express` 包。 许多用户都可以使用 Express ，并且无需采取任何操作即可启用它。 |
| platform-fastify | [Fastify](https://www.fastify.io/) 是一个高性能，低开销的框架，专注于提供最高的效率和速度。 在[这里](https://docs.nestjs.cn/8/techniques?id=性能（fastify）)阅读如何使用它。 |

无论使用哪种平台，它都会暴露自己的 API。 它们分别是 `NestExpressApplication` 和 `NestFastifyApplication`。

将类型传递给 NestFactory.create() 函数时，如下例所示，app 对象将具有专用于该特定平台的函数。 但是，请注意，除非您确实要访问底层平台 API，否则无需指定类型。

```typescript
const app = await NestFactory.create<NestExpressApplication>(AppModule);Copy to clipboardErrorCopied
```

## [运行应用程序](https://docs.nestjs.cn/10/firststeps?id=运行应用程序)

安装过程完成后，您可以在系统命令行工具中运行以下命令，以启动应用程序：

```
$ npm run startCopy to clipboardErrorCopied
```

此命令启动 HTTP 服务监听定义在 `src/main.ts` 文件中定义的端口号。在应用程序运行后, 打开浏览器并访问 `http://localhost:3000/`。 你应该看到 `Hello world!` 信息。

要监听文件中的更改，您可以运行以下命令来启动应用程序：

```
$ npm run start:devCopy to clipboardErrorCopied
```

此命令将监听您的文件，自动重新编译并重新加载服务器。



# [控制器](https://docs.nestjs.cn/10/controllers?id=控制器)

控制器负责处理传入的**请求**和向客户端返回**响应**。

![img](https://docs.nestjs.com/assets/Controllers_1.png)

控制器的目的是接收应用的特定请求。**路由**机制控制哪个控制器接收哪些请求。通常，每个控制器有多个路由，不同的路由可以执行不同的操作。

为了创建一个基本的控制器，我们使用类和`装饰器`。装饰器将类与所需的元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）。



# 个人学习

