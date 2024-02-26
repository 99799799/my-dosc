# typescript学习

## ts 数组类型

数组类型的写法有两种：

1. 在类型后面加上 []，例如 **number[]**

```ts
let num: number[] = [1, 2, 3, 4]

```

1. 使用数组泛型 <>，例如 **Array**

```ts
let num: Array<number> = [1, 2, 3, 4]
```

推荐使用第一种写法。

**注意：**

1. 如果我们定义了一个number类型的数组，此时数组的项中就不能出现其它的类型。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7b1e6f9132f4decb81fb1b892286ddd~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=599&h=142&s=9115&e=png&b=1f1f1f)

2. 如果我们希望数组中既有number类型，又有string类型，此时我们可以用联合类型来写（关于联合类型，后面会详细讲到）。

```ts
let arr: (number | string)[] = [1, 'a', 2, 'b']
```

上面的代码，表示的是，定义一个arr数组，这个数组中可以出现 number 或者 string 类型的元素。

```ts
let arr1: number | string[] = 123
let arr2: number | string[] = ['a', 'b', 'c']

```

上面的代码，arr1 和 arr2 都表示即可以是number类型，又可以是string[]，加了小括号和不加小括号，含义不同。

##### 单独指定参数、返回值的类型

```ts
// 函数声明写法
function sum(num1: number, num2: number): number {
  return num1 + num2
}
// 函数表达式写法
const sum1 = (num1: number, num2: number): number => {
  return num1 + num2
}

console.log(sum(10, 20))  // 30
console.log(sum1(10, 20)) // 30

```

##### 同时指定参数、返回值的类型

```ts
const sum: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}

console.log(sum(10, 20)) // 30

```

注意：不要把ES6中的 => 和 TypeScript 中的 =>混淆了。

在ES6中，=>叫做箭头函数。而在 TypeScript 的类型定义中，=>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。



##### 函数没有返回值

如果函数没有返回值，那么，函数返回值类型为：**void**。

```ts
function greet(name: string): void {
  console.log("Hello, ", name);
}

greet("Echo")

```

##### 可选参数

使用函数实现某个功能时，参数可以传也可以不传，这种情况下，在给函数参数指定类型时，就用到**可选参数**了。

可选参数使用问号（ **?** ）标记，表示该参数可以省略。

```ts
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("Echo")) // "Hello, Echo!"
console.log(greet("Echo", "Hi")) // "Hi, Echo!"

```

上面的代码中，我们在第二个参数 greeting 的后面加了个问号，表示在调用 greet() 函数时，该参数可传可不传。

注意：**可选参数只能出现在参数列表的最后面，也就是说，可选参数后面不能再出现必选参数。**

错误演示：下面代码中，我们把第一个参数改为可选的，第二个参数改为必选的，然后将鼠标移到必选参数上面，可以看到错误提示：“必选参数不能位于可选参数后”。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf25c8ffbc2148b0b560ce384fce1db6~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=832&h=336&s=79655&e=png&b=1e1e1e)

##### 参数默认值

在ES6中，允许给函数的参数添加默认值，而TypeScript会将添加了默认值的参数识别为可选参数。

默认参数使用等号（**=**）赋予默认值。

```ts
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}

console.log(buildName('Tom', 'Cat')) // Tom Cat
console.log(buildName('Tom')) // Tom Cat

```

注意：与可选参数不同的是，**带默认值的参数不需要放在必选参数的后面**。如果带默认值的参数出现在必选参数的前面，我们在调用函数时，必须明确的传入 **undefined** 值来获得默认值。

```ts
function buildName(firstName = "Echo", lastName: string) {
    return firstName + " " + lastName;
}

console.log(buildName("james"))           // 报错，未提供“lastName”自变量
console.log(buildName("Jerk", "Lose"))    // Jerk Lose
console.log(buildName(undefined, "Deno")) // Echo Deno

```

##### 剩余参数

使用三个点（ **...** ）前缀和参数名来定义剩余参数。

剩余参数允许我们将不确定数量的参数表示为一个数组。

```ts
function sum(x: number, ...rest: number[]): number {
  let result = x;
  for (let num of rest) {
    result += num;
  }
  return result;
}


console.log(sum(1, 2, 3, 4, 5)) // 15
console.log(sum(1, 2, 3))       // 6

```

注意：**剩余参数必须是函数参数列表中的最后一个参数**。

##### 函数重载

函数重载允许我们为同一个函数提供多个函数类型定义，以便在不同的参数类型或返回值类型下进行不同的处理。

例如，我们现在需要实现一个函数，需求是：输入数字123，输出反转的数字321，输入字符串"hello"，输出反转的字符串"olleh"。

利用联合类型，我们可以这么实现：

```ts
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

console.log(reverse(123))     // 321
console.log(reverse("hello")) // olleh

```

然后这样会有一个问题，就是输出的类型不能准确的知道，我们想输入为数字的时候，输出的类型应该也为数值类型，输入为字符串的时候，输出类型应该也为字符串类型。

这时，我们可以用**重载**定义多个reserve的函数类型：

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

console.log(reverse(123), typeof reverse(123))     // 321 number
console.log(reverse("hello"), typeof reverse("hello")) // olleh string

```

上述代码中，第1-2行是函数定义，第3-9行是函数实现。第11行代码，我们调用reverse函数，并传入数值123，使用typeof检测类型为number，第12行代码，我们调用reverse函数，并传入字符串"hello"，使用typeof检测类型为string，这样我们利用函数重载就实现了输入为什么类型，输出应该也是什么类型。

#### 对象类型

JS中的对象是由属性和方法构成的，而TS中对象的类型就是在描述对象的结构（有什么类型的属性和方法）。

##### 定义对象类型

- 使用花括号（ **{}** ）来定义对象类型，属性采用 **属性名: 类型** 的形式；方法采用 **方法名(): 返回值类型** 的形式。
- 如果方法有参数，就在方法名后面的小括号中指定参数类型（比如：greet(name: string): void）。
- 在一行代码中指定对象的多个属性类型时，使用分号（ **;** ）来分隔。
- 如果一行代码只指定一个属性类型（通过换行来分隔多个属性类型），可以去掉分号（ **;** ）。
- 方法的类型也可以使用箭头函数形式，比如：{ sayHi: () => void }。

```ts
let person: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
  name: 'John',
  age: 25,
  sayHi() {},
  greet(name) {}
}

```

上面的代码，也可以写成下面这种形式：

```ts
let person: {
  name: string
  age: number
  // sayHi(): void
  sayHi: () => void
	// greet(name: string): void
  greet: (name: string) => void
} = {
  name: 'John',
  age: 25,
  sayHi() {},
  greet(name) {}
}

```

##### 对象可选属性

对象类型中的属性或方法可以是可选的，使用问号（ **?** ）标记。

可选属性表示该属性可以存在，也可以不存在。

比如，我们在使用axios({...})时，如果发送GET请求，method属性就可以省略。

```ts
function myAxios(config: { url: string; method?: string}) {
  console.log(config)
}

myAxios({ url: 'http://localhost:3000' })

```

##### 对象只读属性

对象的属性也可以是只读的，使用 **readonly** 关键字标记。

只读属性表示该属性的值在创建后就不能被修改。

```typescript
let person: {
  name: string
  age: number
	readonly id: number
} = {
  name: 'John',
  age: 25,
	id: 1
}

```

## 2. 元组（Tuple）

### 2.1. 元组的定义

​	

在 TypeScript 中，**元组（Tuple）是一种特殊的数组类型，它允许** **存储具有固定数量和特定类型顺序的元素。**

声明一个元组的语法是在类型注解中使用方括号 **[]** ，并使用逗号分隔元素的类型。

例如，下面是一个包含两个元素的元组：

```ts
let tuple: [string, number];
tuple = ["Echo", 26];

```

在上述示例中，我们声明了一个名为 tuple 的变量，它被注解为一个元组类型 [string, number]。我们可以将一个包含两个元素的数组赋值给 tuple，其中第一个元素是一个字符串，第二个元素是一个数字。

### 2.2. 元组的特点

1. 元组可以包含多个不同类型的元素，但每个元素的类型和顺序是固定的。
2. 元组的长度是固定的，在创建元组时必须指定元素的数量。
3. 可以通过索引访问元组中的元素，索引从 0 开始。
4. 元组中的每个元素可以具有不同的类型注解。
5. 当访问元组中的元素时，会根据其类型注解提供相关的类型检查和智能提示。

下面是一些操作元组的示例：

```ts
// 声明一个 tuple 变量，它的类型注解为：[string, number, boolean]，然后把一个包含3个元素的数组赋值给 tuple，其中，数组的第一个元素为字符串类型，第二个元素为数值类型，第三个元素为布尔值类型
let tuple: [string, number, boolean] = ["Echo", 26, true];

// 通过索引访问元组中的元素，索引从 0 开始
console.log(tuple[0]); // 输出：Echo
console.log(tuple[1]); // 输出：26
console.log(tuple[2]); // 输出：true

// 可以通过索引重新赋值，赋值的类型需要跟类型注解中的固定位置的类型一样
tuple[0] = "june";
tuple[1] = 28;

console.log(tuple); // 输出：["june", 28, true]

// 下面的代码会报错：不能将类型 "[string, number, boolean, string]" 分配给类型 "[string, number, boolean]"，源具有 4 个元素，但目标仅允许3个
tuple = ["Echo", 26, true, "hhhh"]

// 下面的代码也会报错，因为元组的第一个元素类型要求为字符串类型，不能将 number 类型分配给 string 类型。
tuple = [1, 28, true]

```

注意：**当访问元组中的元素以及进行元素的赋值时，要确保索引和类型注解的一致性，否则可能会导致类型错误。**

### 2.3.元件类型的解构赋值

在 TypeScript 中，可以使用解构赋值语法来从元组中提取和赋值元素。

下面是一个简单的示例，展示了如何使用解构赋值从元组中获取各个元素：

```ts
let tuple: [string, number] = ["Echo", 26];

let [str, num] = tuple;

console.log(str); // 输出：Echo
console.log(num); // 输出：26

```

在上述示例中，我们首先声明了一个元组 tuple，其中包含一个字符串类型的元素和一个数值类型的元素。接着，我们使用解构赋值语法将元组中的元素分别赋值给变量 str 和 num。

通过解构赋值，我们可以直接使用对应位置的变量来获取元组中的元素值，而不需要通过索引访问。这样可以以一种简洁、语义明确的方式从元组中解构得到各个元素。

**解构赋值还支持忽略某些元素，或者只提取部分元素。**

例如，如果只想获取元组中的第一个元素，可以使用以下方式：

```ts
let tuple: [string, number] = ["Echo", 26];

let [str] = tuple;

console.log(str); // 输出：Echo

```

在上述示例中，我们只声明了一个变量 str，而忽略了后面的元素。通过解构赋值只获取所需元素，可以简化代码并提高可读性。

另外，**解构赋值还支持使用默认值。**

当从元组中解构一个不存在的元素时，可以提供一个默认值作为备选值。例如：

```ts
let tuple: [string, number?] = ["Echo"];

let [str, num = 26] = tuple;

console.log(str); // 输出：Echo
console.log(num); // 输出：26

```

在上述示例中，我们声明了一个带有可选的数字元素的元组 tuple，但是没有给出对应的数字值。在解构赋值时，如果元组中缺少对应的元素，就会使用默认值 undefined，这里我们将默认值设置为 26。

总而言之，使用解构赋值可以轻松地从元组中提取和赋值元素，使得代码更加简洁和可读。它是一种方便的语法，特别适用于处理具有固定结构的数据。

注意：**在解构赋值时，如果解构数组元素的个数超过元组中元素的个数，会出现错误。**

```ts
let tuple: [string, number] = ["Echo", 26];

let [str, num, sex] = tuple;

```

在上述示例中，我们解构时新增了一个 sex 变量，但元组的长度为 2，在索引 "2" 处没有元素。

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0765393931a14756a38e983cff79c316~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1070&h=254&s=50285&e=png&b=1f1f1f)

### 2.4. 元组类型的可选元素

在 TypeScript 中，可以使用问号 **?** 来将元素定义为可选的，以表示元组中某些位置的元素是可选的。

```ts
let tuple: [string, number?] = ["Echo"];

console.log(tuple);   // 输出 [ 'Echo', undefined ]

tuple = ["june", 26];

console.log(tuple);  // 输出 [ 'june', 26 ]

```

在上述示例中，我们定义了一个元组 tuple，该元组有两个元素，第一个是一个字符串类型的元素，而第二个是一个可选的数值类型的元素。当我们只提供第一个元素时，第二个元素会被默认设置为 undefined。然后，我们更新了元组的值，提供了第二个元素的值。此时，元组中的两个元素都有具体的值。

注意，**当一个元组中包含一个可选元素时，该元素可以存在或不存在，但是顺序必须与元组类型定义一致。在解构赋值时，可以使用默认值来处理可选元素的缺失情况。**

```ts
let tuple: [string, number?] = ["Echo"];

let [str, num = 26] = tuple;

console.log(str); // 输出：Echo
console.log(num); // 输出：26
```

在上述示例中，我们使用解构赋值将元组中的元素分别赋值给变量 str 和 num。由于元组只提供了一个元素，没有提供可选的第二个元素，所以 num 的值将使用默认值 26。

通过使用可选元素，可以更灵活地定义元组类型，允许元组中特定位置的元素是可选的。这样，我们可以在处理数据时更好地适应不完整或可变的情况。

### 2.5. 元组类型的剩余元素

在 TypeScript 中，可以使用剩余元素（Rest Elements）来表示元组中剩余的元素，即将剩余的元素放入一个数组中。

```ts
let tuple: [string, number, ...boolean[]] = ["Echo", 26, true, true, false];

console.log(tuple); // 输出：[ 'Echo', 26, true, true, false ]

```

在上述示例中，我们定义了一个元组 tuple，包含一个字符串元素、一个数字元素，以及剩余元素使用剩余元素语法 **...** 定义的布尔类型数组。在创建元组时，我们提供了多个布尔类型的元素，它们会被放入一个数组并作为剩余元素。这样，元组中除了前两个元素以外的其他元素都会被放入数组中，并以数组的形式表示。

```ts
let tuple: [string, number, ...boolean[]] = ["Echo", 26, true, true, false];

let [str, num, ...boolArr] = tuple;

console.log(str);      // 输出：Echo
console.log(num);      // 输出：26
console.log(boolArr);  // 输出：[true, true, false]

```

在上述示例中，我们使用解构赋值从元组中提取出各个元素。通过使用 ...boolArr，我们将剩余的布尔类型元素提取到名为 boolArr 的数组中。

使用剩余元素可以处理元组中数量不确定的元素，可以更灵活地处理和操作这些元素。它提供了一种方便的方式来处理由不固定数量的元素组成的结构数据。

### 2.6. 只读的元组类型

在 TypeScript 中，可以使用 **readonly** 修饰符来创建只读的元组类型，即元组中的元素不可被修改。

```ts
let tuple: readonly [string, number] = ["Echo", 26];

console.log(tuple);    // 输出：[ 'Echo', 26 ]

tuple[0] = "world";    // 编译错误：无法为“0”赋值，因为它是只读属性
tuple.push('abc');     // 编译错误：类型 "readonly [string, number]" 上不存在 "push"

```

在上述示例中，我们使用 readonly 修饰符将 tuple 声明为只读的元组类型。这意味着在运行时，我们无法修改元组中的元素的值。

尝试对 tuple 进行赋值或调用修改元素的方法（如 push）时，TypeScript 编译器会报错，因为元组被声明为只读，无法被修改。

只读的元组类型在某些场景下非常有用，特别是当希望确保元组中的数据不会被意外修改时。它提供了一种强制保护元组数据不可变性的机制。

## 3. 字面量类型

当我们在 TypeScript 中使用字面量类型，我们可以明确指定变量只能取特定的字面量值，而不是其他可能性。这样可以在编译时捕获潜在的错误，并提供更好的类型推断和类型检查支持。

在 TypeScript 中，可以使用多种类型的字面量进行类型定义，包括字符串字面量类型、数字字面量类型、布尔字面量类型和符号字面量类型。

### 3.1. 字符串字面量类型

使用字符串字面量表示的类型，只能取特定的字符串值。

```ts
let direction: "Up" | "Right" | "Down" | "Left";

direction = "Right";   // 合法
direction = "none";    // 错误，只能取值为 "Up" | "Right" | "Down" | "Left"

```

### 3.2. 数字字面量类型

使用数字字面量表示的类型，只能取特定的数字值。

```ts
let num: 1 | 2 | 3;
num = 2; // 合法
num = 4; // 错误，只能取值为 1、2 或 3

```

### 3.3. 布尔字面量类型

使用布尔字面量表示的类型，只能取特定的布尔值。

```ts
let isShow: true | false;
isShow = true;  // 合法
isShow = false; // 合法
isShow = 1;     // 错误，只能取值为 true 或 false
```

### 3.4. 符号字面量类型

使用符号字面量表示的类型，只能取特定的符号值。

```ts
const apple: unique symbol = Symbol("apple");
const orange: unique symbol = Symbol("orange");

let fruit: typeof apple | typeof orange;

fruit = apple;           // 合法
fruit = orange;          // 合法
fruit = Symbol("apple"); // 错误，只能取预定义的 apple 或 orange

```

字面量类型不仅可以用于变量的定义，还可以用于**函数的参数、返回值、对象属性**等地方。通过使用字面量类型，我们可以在编写代码时明确指定特定的取值范围，提高代码的可读性和可维护性。

需要注意的是，字面量类型具有一个特殊的用途，即与联合类型结合使用，以实现更精确的类型约束。例如，联合类型 string | number 表示可以是字符串或数字类型的值，而字面量类型 "success" | "error" 表示只能是字符串 "success" 或 "error"，它们可以一起使用来实现更精确的类型定义。

```ts
let result: "success" | "error" | number;
result = "success"; // 合法
result = 42;        // 合法
result = true;      // 错误，只能取值为 "success"、"error" 或 number 类型

```

### 3.5. 函数参数中的字面量类型

```ts
function move(direction: "up" | "right" | "down" | "left"): void {
  console.log(direction);
}

move("up");    // 合法
move("left");  // 合法
move(10);      // 错误，只能取值为 "up" 或 "right" 或 "down" 或 "left"

```

在上述示例中，函数 move 的参数 direction 的类型被指定为 "up" | "right" | "down" | "left"，这意味着参数 direction 只能接受这四个特定的值。

### 3.6. 函数返回值中的字面量类型

```ts
function getMove(direction: string): "up" | "right" | "down" | "left" {
  if (direction === 'W') {
    return "up";
  } else if (direction === 'D') {
    return "right";
  } else if (direction === 'S') {
    return "down";
  } else {
    return "left";
  }
}

```

在上述示例中，函数 getMove 的返回值被指定为 "up" | "right" | "down" | "left"，这表示函数的返回值只能是这四个特定的值之一。

### 3.7. 对象属性中的字面量类型

```ts
interface Options {
  mode: "light" | "dark";
  size: "small" | "medium" | "large";
}

let config: Options = {
  mode: "light",
  size: "medium"
};

```

在上述示例中，Options 接口中的 mode 属性的类型被指定为 "light" | "dark"，size 属性的类型被指定为 "small" | "medium" | "large"，这意味着对象 config 的 mode 属性只能是其中一个值，size 属性也只能是其中一个值。

### 3.8. let 和 const 分析

#### 3.8.1 let 声明的字面量类型

```ts
let direction: "Up" | "Right" | "Down" | "Left";

direction = "Right";   // 合法
direction = "none";    // 错误，只能取值为 "Up" | "Right" | "Down" | "Left"

```

在上述示例中，我们使用 let 关键字声明了变量 direction，并将其类型指定为 "Up" | "Right" | "Down" | "Left"，因此 direction 只能取值为 "Up" 或 "Right" 或 "Down" 或 "Left" 这四个特定值中的其中一个。



#### 3.8.2 const 声明的字面量类型

```ts
const size: "small" | "medium" | "large" = "medium";

```

在上述示例中，我们使用 const 关键字声明了常量 size，并将其类型指定为 "small" | "medium" | "large"。由于使用了 const，size 是一个只读的常量，且初始值为 "medium"。因此，size 的值将永远是 "medium"，不能被重新赋值。

使用 let 和 const 关键字来声明变量和常量时，可以配合字面量类型提供更具体和可靠的类型约束。

注意：**const 声明的常量在声明时必须被初始化，并且一旦初始化后，其值将不能被修改。而 let 声明的变量可以在后续代码中被重新赋值。**

## 4. 枚举（Enum）

枚举（Enum）是一种用于定义一组命名常量的数据结构。

### 4.1. 基本枚举

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Up;
console.log(dir); // 输出: 0

```

在上述示例中，我们定义了一个名为 Direction 的枚举，其中列出了 Up、Down、Left 和 Right 四个枚举成员。默认情况下，枚举成员的值从 0 开始自动递增，因此 Direction.Up 的值为 0。我们可以使用枚举成员来声明变量，并进行比较、打印等操作。

### 4.2. 数字枚举

在默认情况下，数字枚举的成员从 0 开始自动递增。

#### 4.2.1. 默认递增的数字枚举

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up);     // 输出: 0
console.log(Direction.Down);   // 输出: 1
console.log(Direction.Left);   // 输出: 2
console.log(Direction.Right);  // 输出: 3

```

在上述示例中，我们定义了一个名为 Direction 的枚举，其中列出了 Up、Down、Left 和 Right 四个枚举成员。默认情况下，枚举成员的值从 0 开始自动递增，因此 Direction.Up 的值是 0，Direction.Down 的值是 1，Direction.Left 的值是 2，Direction.Right 的值是 3。

#### 4.2.2. 手动赋值的数字枚举

在手动赋值的数字枚举中，可以为每个枚举成员手动指定一个特定的值。手动赋值的数字枚举可以使用任意合法的数字作为成员的值。

```ts
enum Direction {
  Up = 2,
  Down = 4,
  Left = 6,
  Right = 8
}

console.log(Direction.Up);     // 输出: 2
console.log(Direction.Down);   // 输出: 4
console.log(Direction.Left);   // 输出: 6
console.log(Direction.Right);  // 输出: 8

```

在上述示例中，Direction.Up 被赋值为 2，Direction.Down 被赋值为 4，Direction.Left 被赋值为 6，Direction.Right 被赋值为 8。

#### 4.2.3. 计算成员的数字枚举

在数字枚举中，可以使用计算表达式作为成员的值。

```ts
enum Calculation {
  Addition = 2 + 3,
  Subtraction = 10 - 5,
  Multiplication = 6 * 2,
  Division = 20 / 4
}

console.log(Calculation.Addition);        // 输出: 5
console.log(Calculation.Subtraction);     // 输出: 5
console.log(Calculation.Multiplication);  // 输出: 12
console.log(Calculation.Division);        // 输出: 5

```

在上述示例中，我们使用加法、减法、乘法和除法运算符来计算成员的值。在编译时，这些计算表达式会被求值为结果值并成为实际的枚举成员的值。

### 4.3. 常量枚举

常量枚举（const enum）是一种特殊类型的枚举，它在编译时被删除，并且只保留枚举成员的值作为常量。常量枚举提供了一种更轻量级的方式来使用枚举，可以用于在编译期间替换枚举成员的值。

#### 4.3.1. 常量枚举的定义

在定义常量枚举时，需要使用 **const** 关键字和 **enum** 关键字的组合。**常量枚举不能有计算成员。**

```ts
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

```

#### 4.3.2. 常量枚举的使用

```ts
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up);     // 输出: 0
console.log(Direction.Down);   // 输出: 1
console.log(Direction.Left);   // 输出: 2
console.log(Direction.Right);  // 输出: 3

```

#### 4.3.3. 常量枚举会在编译阶段被删除

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1356b8c906ee43f182729c2349c61ed6~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1956&h=510&s=212242&e=png&b=ffffff)

### 4.4. 字符串枚举

在 TypeScript 中，字符串枚举是一种特殊类型的枚举，其中每个成员都用字符串字面量进行初始化。

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up)     // 输出 UP
console.log(Direction.Down)   // 输出 DOWN
console.log(Direction.Left)   // 输出 LEFT
console.log(Direction.Right)  // 输出 RIGHT

```

在上述示例中，我们定义了一个名为 Direction 的字符串枚举。其中的成员 Up 使用字符串字面量 "UP" 进行初始化，成员 Down 使用字符串字面量 "DOWN" 进行初始化，成员 Left 使用字符串字面量 "LEFT" 进行初始化，成员 Right 使用字符串字面量 "RIGHT" 进行初始化。我们可以通过直接访问枚举成员来获得其对应的字符串值。

字符串枚举的特点：

- 明确的字符串值：每个字符串枚举成员都具有明确的字符串值，可更好地描述其含义和用途。
- 代码可读性：由于成员的值直接使用字符串字面量，因此代码更加清晰、易读。
- 保留字符串字面量：使用字符串枚举可以在编译后保留字符串字面量，而不是转换为数值或其他类型。
- 可用于反向映射：字符串枚举可以支持从枚举值到枚举名的反向映射。

### 4.5. 外部枚举

外部枚举（ambient enum）是一种定义在外部代码（如声明文件）中的枚举。外部枚举通常用于描述已存在的枚举类型的形状，而不是为了创建一个具体的 JavaScript 对象。

**外部枚举的定义不会在编译时生成任何实际的 JavaScript 代码，它只用于类型检查。**

```ts
declare enum HttpStatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  NotFound = 404
}

let code: HttpStatusCode = HttpStatusCode.OK;
console.log(code);                        // 输出: 200
console.log(HttpStatusCode.BadRequest);   // 输出: 400
console.log(HttpStatusCode.Unauthorized); // 输出: 401 (自动递增)
console.log(HttpStatusCode.NotFound);     // 输出: 404

```

在上述示例中，我们使用 declare 关键字来定义了一个外部枚举 HttpStatusCode。它描述了一些常见的 HTTP 状态码。其中的成员 OK 和 BadRequest 和 NotFound 指定了具体的数值，分别为 200，400 和 404，成员 Unauthorized 没有显式指定值，它会根据前一个成员的值自动递增，因此值为 401。

在使用外部枚举时，我们可以像使用普通枚举一样，访问它的成员并获得相应的值。在上述示例中，我们将 HttpStatusCode.OK 赋值给变量 code，然后将变量 code 的值打印出来，得到的结果是 200。

注意：当使用外部枚举时，我们必须使用 **declare** 来声明它，以告诉 TypeScript 编译器这是一个外部定义的枚举。此外，外部枚举的定义通常是在一个声明文件中（以 .d.ts 结尾），以便在与现有 JavaScript 库或框架进行交互时提供类型信息。

总结起来，外部枚举是 TypeScript 中一种在外部代码中定义的枚举，用于描述已存在的枚举类型的形状。外部枚举的定义通常只用于类型检查，并不会生成实际的 JavaScript 代码。它在与现有 JavaScript 库或框架进行交互时提供类型信息。

### 4.6. 异构枚举

异构枚举（heterogeneous enum）是一种允许枚举成员的值具有不同类型的枚举。

通常情况下，枚举中的成员的值应该是相同类型的。但是异构枚举允许在同一个枚举中使用不同类型的值，包括字符串、数字和其他类型。

```ts
enum Status {
  Active = 1,
  Pending,
  Inactive = "inactive",
  OnHold = "on hold"
}

console.log(Status.Active);   // 输出: 1
console.log(Status.Pending);  // 输出: 2 (自动递增)
console.log(Status.Inactive); // 输出: "inactive"
console.log(Status.OnHold);   // 输出: "on hold"

```

在上述示例中，我们定义了一个名为 Status 的异构枚举。其中的成员 Active 的值是一个数字，值为 1。成员 Pending 没有显式指定值，它的值会根据前一个成员的值自动递增，因此值为 2。成员 Inactive 的值是一个字符串，值为 "inactive"。成员 OnHold 的值是一个字符串，值为 "on hold"。

在访问异构枚举的成员时，将得到其对应的值。在上述示例中，我们分别打印了每个异构枚举成员的值，并相应地获得了不同类型的结果。

异构枚举的优势在于允许在一组相关的枚举中使用不同类型的值。这在某些特定情况下可能很有用，例如需要表示不同种类的状态或类型时。

注意：**在异构枚举中，具有数字字面量值的成员会根据前一个成员的值自动递增，而具有字符串字面量值的成员不会自动递增。同时，在异构枚举中，没有初始化值的成员会根据前一个成员的值自动递增。**

### 4.7. 反向映射

反向映射（reverse mapping）是指**枚举成员不仅可以通过名称访问值，而且可以通过值访问名称。** 这意味着可以根据枚举的值获取到对应的枚举成员名称。

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

let rightValue = Direction.Right;
let rightName = Direction[rightValue];

console.log(rightValue);  // 输出: 4
console.log(rightName);   // 输出: Right

```

在上述示例中，我们定义了一个名为 Direction 的枚举，其中的成员分别使用数字进行初始化。我们将 Direction.Right 的值赋给变量 rightValue，然后使用 Direction[rightValue] 获取到对应的枚举成员名称，将结果赋给变量 rightName。

在打印出变量 rightValue 和 rightName 的值后，我们得到的结果是 4 和 Right。这就是反向映射的效果，根据枚举的值可以获取到对应的枚举成员名称。

注意：**反向映射只在数字枚举中有效，而不适用于字符串枚举。** 字符串枚举的成员值虽然可以是字符串字面量，但在 JavaScript 中无法实现反向映射。



### 4.8. 运行时的枚举

运行时的枚举（runtime enum）是指在 JavaScript 运行时可访问和操作的枚举。

TypeScript 编译器在编译过程中，会将枚举类型转换为实际的 JavaScript 对象。这些对象在运行时仍然保留了枚举的结构和值，以便能够通过它们来进行运行时的枚举操作。

```ts
enum Fruit {
  Apple,
  Orange,
  Banana
}

function getFruitName(fruit: Fruit): string {
  switch (fruit) {
    case Fruit.Apple:
      return "Apple";
    case Fruit.Orange:
      return "Orange";
    case Fruit.Banana:
      return "Banana";
    default:
      throw new Error("Invalid fruit");
  }
}

console.log(getFruitName(Fruit.Apple));  // 输出: Apple
console.log(getFruitName(Fruit.Orange)); // 输出: Orange
console.log(getFruitName(Fruit.Banana)); // 输出: Banana

```

