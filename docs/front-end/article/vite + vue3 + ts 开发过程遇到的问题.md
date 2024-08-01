

# vite + vue3 + ts 开发过程遇到的问题

## mock相关事项

mock 开发上线的时候，记得

```js
routeListTwo: () => api.get('/page', {
    baseURL: '/mock/',
}),
routeListThree: () => api.get('/page/list2', {
    baseURL: '/mock/',
}),
```

这种情况是获取不到routeListThree的数据的，具体原因，还没有查找，但我觉得可能找不到子路径，所以默认都是page路径，只能获取到page里面的数据，从而导致上线的时候，咱们获取到本地mock数据都出现问题！



## 图片打包上线相关

然后打包上线的时候

```
pnpm run build
```

图片资源出现混乱，获取不到图片资源，这是因为vite静态资源处理

官网地址：

https://cn.vitejs.dev/guide/assets.html

在处理的时候，我们可以使用

utils里面去封装一个pubUse.ts

```js
// 获取assets静态资源
function getAssetsFile(url: string) {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}
function getIconsFile(url: string) {
  return new URL(`../assets/icons/${url}`, import.meta.url).href
}

export default {
  getAssetsFile,
  getIconsFile,
}

```

在使用

假设是index.vue

```js
import pubUse from '@/utils/pubUse'

const arr = [
	{
		img: `${pubUse.getAssetsFile('1.png')}`
	}
]
```

 简单一点的话，咱们就直接把图片资源放在public根目录下，图片就可以直接访问，但路径要更改下/assets



mock 又会导致 element的上传图片出错

后面简单点就 通过 新建ts 然后

```js
const options = [
	
]
export default options

// 引入的话就直接
import options from '@/'

// 数据多的话
const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  // 添加更多元素
];

const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export { options, day };

import { options } from '@/xxx';
import { day } from '@/xxx';
```



修改FTP链接模式，page参数的传值

promise

```js
if (res.success) {
  const arr = await apiUser.getuserinfo(res.data);

  // 使用 Promise 包装 storage.local.set
  const storagePromise = new Promise((resolve) => {
    storage.local.set('account', arr.data.userName, () => {
      resolve();
    });
  });

  // 等待存储操作完成后再执行路由跳转
  await storagePromise;

  // 执行路由跳转
  router.push('/index');
}

```

```js
if (res.success) {
  const arr = await apiUser.getuserinfo(res.data);

  // 使用 Promise 包装 storage.local.set
  const tokenStoragePromise = new Promise((resolve) => {
    storage.local.set('token', res.data, () => {
      resolve();
    });
  });

  const accountStoragePromise = new Promise((resolve) => {
    storage.local.set('account', arr.data.userName, () => {
      resolve();
    });
  });

  // 使用 Promise.all 等待两个存储操作完成
  await Promise.all([tokenStoragePromise, accountStoragePromise]);

  // 执行路由跳转
  router.push('/index');
}

```

```js
if (res.success) {
  const arr = await apiUser.getuserinfo(res.data);
  
  // 使用 Promise.all 包装存储操作和路由跳转
  await Promise.all([
    new Promise((resolve) => {
      storage.local.set('token', res.data, () => {
        resolve();
      });
    }),
    new Promise((resolve) => {
      storage.local.set('account', arr.data.userName, () => {
        resolve();
      });
    }),
    router.push('/index')
  ]);
}

```

```
if (res.success) {
        const arr: any = await apiUser.getuserinfo(res.data)
        token.value = res.data
        account.value = res.data.userName

        // storage.local.set('token', res.data)
        // storage.local.set('account', arr.data.userName)
        const tokenStoragePromise = new Promise((resolve) => {
          resolve(storage.local.set('token', res.data))
        })
        const accountStoragePromise = new Promise((resolve) => {
          resolve(storage.local.set('account', arr.data.userName))
        })
        await Promise.all([tokenStoragePromise, accountStoragePromise])
        setTimeout(() => {
          router.push('/index')
        }, 1000)
      }
```



身份证号, 支持1/2代(15位/18位数字)

```
/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
```

密码

```
/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
```

标准模块

![image-20231013095759709](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20231013095759709.png)



今天遇到啥了，命名规范，componet组件路径名一定要把.vue加上去

## el-row 弹性布局 声明显示五列方法

```vue
<el-row :gutter="12">
    <el-col :xs="24" :sm="12" :lg="48">
        
	</el-col>
	<el-col :xs="24" :sm="12" :lg="48">
        
	</el-col>
</el-row>
// 自定义大小
<style scoped>
@media only screen and (width >= 1200px) {
  :deep(.el-col-lg-48) {
    width: 20%;
    flex: 0 0 20%;
  }
}
</style>
```



添加选中选check，判断当前是否被选中，选中后，有多少子节点也被选中，选中后要去重，



2023/10/24 

tailwindcss了解 [地址就在](https://www.tailwindcss.cn/)

只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。

把操作指南文档化，使用飞书文档，[微蜂智能](https://cxicupttf8r.feishu.cn/docx/I8yAd6fTAoAYblxNcZjcM2J2nWh)



## defineOptions 

使用了`defineOptions`来定义一个全局选项，允许我们在`setup`内部使用`defineProps`来接收组件的属性，并在`setup`中使用这些属性。这使得`initialCount` 可以在 `setup` 内部访问，从而影响组件的行为。

```vue
<template>
  <div>
    <p>Counter: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, defineOptions } from 'vue';

// 定义一个全局选项
defineOptions(() => {
  // 使用 defineProps
  const props = defineProps(['initialCount']);
  
  // 可以在 setup 内部使用 props
  const count = ref(props.initialCount || 0);

  const increment = () => {
    count.value++;
  };

  return {
    count,
    increment,
  };
});
</script>

```

## defineProps  父传子

ChildComponent.vue:

```vue
<template>
  <div>
    <p>prop1: {{ prop1 }}</p>
    <p>prop2: {{ prop2 }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// 使用 defineProps 定义和接收属性
const { prop1, prop2 } = defineProps({
  prop1: String,
  prop2: Number,
});
</script>

```

接下来，在父组件中，你可以通过传递属性来设置子组件的 `prop1` 和 `prop2` 值：

ParentComponent.vue:

```vue
<template>
  <div>
    <!-- 使用子组件，并传递 prop1 和 prop2 -->
    <ChildComponent :prop1="value1" :prop2="value2" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      value1: 'Hello',
      value2: 42,
    };
  },
};
</script>

```

## emit子传父

**事件传递**：子组件可以通过触发自定义事件来向父组件传递数据。父组件可以监听这些事件，并在事件处理程序中接收数据。这是一种允许子组件与父组件通信的方法。

子组件：

```vue
<template>
  <button @click="sendData">发送数据到父组件</button>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { emit } = defineEmits();

const sendData = () => {
  emit('custom-event', '一些数据');
};
</script>

```

父组件：

```vue
<template>
  <div>
    <ChildComponent @custom-event="handleCustomEvent" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const handleCustomEvent = (data) => {
  // 处理从子组件传递的数据
  console.log(data);
};
</script>

```

## **Provide/Inject**

通过`provide`和`inject`可以在祖先组件和后代组件之间建立一个依赖关系，允许祖先组件向后代组件传递数据。

祖先组件：

```vue
<template>
  <div>
    <child-component />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';

const sharedData = ref('这是共享的数据');
provide('sharedData', sharedData);
</script>

```

后代组件：

```vue
<template>
  <div>
    <p>{{ sharedData }}</p>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';

const sharedData = inject('sharedData', ref('默认值'));
</script>

```

## 兄弟组件

**通过共同父组件传递数据**：

如果你有两个兄弟组件，可以通过它们的共同父组件来传递数据。在父组件中接收一个兄弟组件的数据，然后将其作为属性传递给另一个兄弟组件。

```vue
<template>
  <div>
    <ChildA :dataFromParent="dataForChildA" />
    <ChildB :dataFromParent="dataForChildB" />
  </div>
</template>

<script setup>
// 父组件中设置数据
const dataForChildA = ref('数据1');
const dataForChildB = ref('数据2');
</script>

```

1. 在上面的例子中，`ChildA` 和 `ChildB` 是兄弟组件，它们都从共同父组件接收不同的数据。

2. **使用 Vuex**：

   Vuex 是 Vue.js 的状态管理库，可以在整个应用程序中共享状态。你可以使用 Vuex 存储来在兄弟组件之间共享数据。

   首先，安装和设置 Vuex。然后，在你的兄弟组件中可以使用 Vuex 来读取和更新共享的状态。

```vue
<!-- 在组件中读取数据 -->
<template>
  <div>
    <p>数据：{{ $store.state.sharedData }}</p>
  </div>
</template>

<script setup>
// 在组件中访问 Vuex 数据
const sharedData = computed(() => $store.state.sharedData);
</script>

```

1. 在上面的示例中，兄弟组件都可以通过 Vuex 访问共享的状态，因为 Vuex 的状态是全局可访问的。

这些方法都可以用于 Vue 3 中的 setup 语法糖，具体的选择取决于你的项目需求和组件之间的通信复杂性。在大多数情况下，通过共同父组件传递数据是一种更简单和直接的方法，而使用 Vuex 则适用于需要在整个应用程序中共享状态的情况。



## defineExpose

`defineExpose` 是 Vue 3 中的一个特殊函数，它用于在 `setup` 函数中暴露一些属性或方法，以便它们可以被父组件或外部访问。这对于在使用 Composition API 构建的组件中向外部暴露特定功能非常有用。

通常，`defineExpose` 在子组件的 `setup` 函数中使用，它允许子组件明确指定哪些属性或方法应该被公开，从而提供更明确的 API。

以下是一个简单的示例，演示如何在子组件中使用 `defineExpose`：

```vue
<template>
  <div>
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

// 使用 defineExpose 暴露 increment 方法
defineExpose({
  increment,
});
</script>

```

在这个示例中，我们定义了一个名为 `increment` 的方法，并使用 `defineExpose` 将它暴露出去，以便父组件或其他组件可以访问到它。

父组件可以像这样访问 `increment` 方法：

```vue
<template>
  <ChildComponent />
  <button @click="childIncrement">Increment in Child</button>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const childIncrement = () => {
  ChildComponent.exposed.increment();
};
</script>

```

这个示例中，父组件通过 `ChildComponent.exposed.increment()` 来调用子组件的 `increment` 方法，因为子组件使用 `defineExpose` 暴露了这个方法。

## defineEmits

`defineEmits` 是 Vue 3 Composition API 中的一个函数，用于在组件中定义并暴露可以被父组件监听的自定义事件。这允许子组件发出事件并将其传递给父组件以实现组件之间的通信。

使用 `defineEmits`，你可以将组件中定义的事件封装并使其可用于模板中的事件处理程序，以便触发这些事件。

以下是一个示例，演示了如何在组件中使用 `defineEmits`：

```vue
<template>
  <button @click="emitCustomEvent">触发自定义事件</button>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits();

const emitCustomEvent = () => {
  // 发出自定义事件，可以被父组件监听
  emit('custom-event', '事件参数');
};
</script>

```

在这个示例中，我们首先使用 `defineEmits` 函数来定义 `emit` 函数，它允许我们在组件中触发自定义事件。然后，在 `emitCustomEvent` 函数中，我们使用 `emit` 来触发一个名为 `custom-event` 的自定义事件，并传递了一个事件参数。父组件可以通过监听这个事件来获取事件参数并执行相应的逻辑。

在父组件中，你可以像下面这样监听自定义事件：

```vue
<template>
  <ChildComponent @custom-event="handleCustomEvent" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const handleCustomEvent = (eventData) => {
  // 处理自定义事件，eventData 是传递的事件参数
  console.log('自定义事件触发了，参数是', eventData);
};
</script>

```

这样，子组件和父组件之间可以通过自定义事件进行通信，使组件更加灵活和可重用。



## pnpm 报错的时候

一般情况重启导致的，node_modules 文件损坏了， 得去查E:\.pnpm-store\v3\files文件是不是损坏，损坏的情况我们就得进行修复，可以试一下使用

![image-20231106101654281](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20231106101654281.png)

扫描修复驱动器

或者使用

### Pnpm

#### 1、缓存路径

要查看pnpm的缓存路径，可以执行以下命令：

```javascript
pnpm store path
```

#### 2、清除缓存

要清除pnpm的缓存，可以执行以下命令：

```javascript
pnpm store prune
```



## el-button 好用方法 

```vue
<el-button
          v-for="status in ['全部', '未绑定', '已绑定', '无效']"
          :key="status"
          :type="currentStatus === status ? 'primary' : 'default'"
          @click="onCreate(status)"
        >
          {{ status }}
        </el-button>
```

```vue
<el-button :type="scope.row.status === 1 ? 'success' : ''" size="small" round>
              {{ scope.row.status === 1 ? '已绑定' : '未激活' }}
            </el-button>
```

```vue
<el-button :type="scope.row.activeState === 0 ? 'danger' : (scope.row.activeState === 1 ? 'success' : 'info')" size="small" round @click="onSycnActivate(scope.row.openUserId, scope.row.activeState)">
              {{ scope.row.activeState === 0 ? '未激活' : (scope.row.activeState === 1 ? '已激活' : '过期了') }}
            </el-button>
```



制作激活码，商品排期，各式弹窗



创建vite

```
# 使用 npm
npm create vite@latest
# 使用 yarn
yarn create vite
# 使用 pnpm
pnpm create vite
```

## 创建拖拽组件

```
npm install vuedraggable

```

安装less

```
npm install -g less
```



## 快速精确地获取location.search中的各个参数值

1、通过location.search去获取参数字符串，再进行截取转化获取。

以 http://localhost:9090/mobile/login/register?id=2f63398&mark=577962 为例

```js
let search = window.location.search.slice(1);
let params = search.split('&');
let [id, mark] = ['', '']
if (params[0].includes('id')) {
   id = params[0].split('=')[1]
   mark = params[1].split('=')[1]
 } else {
   id = params[1].split('=')[1]
   mark = params[0].split('=')[1]
 }
 console.log(id) // 2f63398
 console.log(mark) // 577962

```

这个方法是能获取到search中的参数，但是有点麻烦。

2、通过 new URL()

以 http://localhost:9090/mobile/login/register?id=2f63398&mark=577962 为例

```js
let params = new URL(location.href).searchParams;
let [id, mark] = [params.get('id'), params.get('mark')];
console.log(id) // 2f63398
console.log(mark) // 577962

```

第二种方法和第一种方法对比，简洁了很多，也方便了很多，想获取哪个参数，直接get(参数名)。

3、通过 new URLSearchParams()

以 http://localhost:9090/mobile/login/register?id=2f63398&mark=577962 为例

```js
let params = new URLSearchParams(location.search);
let [id, mark] = [params.get('id'), params.get('mark')];
console.log(id) // 2f63398
console.log(mark) // 577962

```

https://www.samanthaming.com/tidbits/?filter=JS#2

```
window.location.origin   → 'https://www.samanthaming.com'
               .protocol → 'https:'
               .host     → 'www.samanthaming.com'
               .hostname → 'www.samanthaming.com'
               .port     → ''
               .pathname → '/tidbits/'
               .search   → '?filter=JS'
               .hash     → '#2'
               .href     → 'https://www.samanthaming.com/tidbits/?filter=JS#2'
————————————————
```

## 拖拽实现左右宽度

```vue
<template>
  <div class="container">
    <el-col :lg="4" :xs="24" ref="sidebar" class="sidebar" :style="{ width: sidebarWidth + 'px' }" @mousedown="startResizing">
      <!-- 左侧菜单内容 -->
      <!-- 可以在这里放置菜单项等 -->
    </el-col>
    <div class="resizer" @mousedown="startResizing"></div>
    <div class="content">
      <!-- 右侧 iframe -->
      <iframe src="https://example.com" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sidebarWidth = ref(200);

const startResizing = (event: MouseEvent) => {
  document.addEventListener('mousemove', handleResizing);
  document.addEventListener('mouseup', stopResizing);
};

const handleResizing = (event: MouseEvent) => {
  // 计算新的宽度
  const newWidth = event.clientX;

  // 限制宽度不超过 4 栅格列
  const maxAllowedWidth = 4 * /* 每个栅格列的宽度 */ 60;
  sidebarWidth.value = Math.min(newWidth, maxAllowedWidth);
};

const stopResizing = () => {
  document.removeEventListener('mousemove', handleResizing);
  document.removeEventListener('mouseup', stopResizing);
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  overflow: hidden;
  transition: width 0.2s;
}

.resizer {
  width: 10px;
  cursor: ew-resize;
  background-color: #ddd;
}

.content {
  flex: 1;
  overflow: auto;
}
</style>
```



## 实现白天黑夜的皮肤切换

```vue
<template>
  <div>
    <button class="button" @click="toggleTheme" :data-theme="theme">切换主题</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'day', // 初始主题为白天
    };
  },
  methods: {
    toggleTheme() {
      // 切换主题
      this.theme = this.theme === 'day' ? 'night' : 'day';
    },
  },
};
</script>

<style lang="scss" scoped>
// 定义白天和黑夜的颜色变量
$day-background-color: #fff;
$night-background-color: #333;
$day-text-color: #000;
$night-text-color: #fff;

// 定义切换按钮的样式
.button {
  background-color: $day-background-color;
  color: $day-text-color;
  border: 1px solid $day-text-color;
  padding: 8px 16px;
  cursor: pointer;

  // 切换到黑夜模式时修改样式
  &[data-theme='night'] {
    background-color: $night-background-color;
    color: $night-text-color;
    border-color: $night-text-color;
  }
}
</style>
```

在 SCSS 中，变量是在编译时解析的，而不是在运行时。这意味着一旦 SCSS 文件编译成 CSS，变量的值就固定了，不能在运行时动态修改。

融合 把条件提取出来

```scss
// 定义深色模式的混合
@mixin dark-mode-styles {
  &[data-font-color='dark'] {
    color: $dark-font-color;
    border-color: $dark-border-color;
  } 
}

// 使用混合
.button {
  @include dark-mode-styles;
}

.other-element {
  @include dark-mode-styles;
}
```

替换.replace("T", "-")

.match(/^\d{4}-\d{2}-\d{2}/)[0]只获取年月日



## 导航选项按钮

```vue
function handleCheck(value: string) {
  selectNum.value = []
  const arr = num.value
  if (ischecked(value)) {
    findAndExtractIds(value)
    // const uniqueArray = arr.filter((value: any, index: any, self: any) => self.indexOf(value) === self.lastIndexOf(value))
    const uniqueArray = arr.filter((value: any) => !selectNum.value.includes(value))
    num.value = uniqueArray
    form.value.auths = uniqueArray
    checkedCities.value = Number.parseInt(value) ? num.value : []
    // const handleCheck = (arrayToAdd: string[]) => {
    //   const index: number = arrayToAdd.findIndex((items) => {
    //     return items === value
    //   })
    //   arr.splice(index, 1)
    //   form.value.auths = arr
    // }
    // handleCheck(arr)
  }
  else {
    findAndExtractIds(value)
    num.value = [...new Set(arr)]
    form.value.auths = [...new Set(arr)]
    checkedCities.value = Number.parseInt(value) ? num.value : []
  }
}
```



请求列表接口，对应参数进行额外的请求 渲染el-table

```
function getDataList() {
  data.value.loading = true
  const { page, size } = getParams()
  const params = {
    ...(data.value.search.title && { title: data.value.search.title }),
  }
  api.list({ page, size, ...params }).then(async (res: any) => {
    // 获取所有的 owner 参数
    const owners = res.data.data.map((item: any) => item.owner)
    // 使用 Promise.all 等待所有额外的请求完成
    const additionalDataList = await Promise.all(owners.map((owner: string) => fetchAdditionalData(owner)))
    // 将额外请求的数据存储到 data.value.dataList 中
    data.value.dataList = res.data.data.map((item: any, index: any) => ({
      ...item,
      additionalData: additionalDataList[index], // 将额外的数据存储在 additionalData 字段中
    }))
    data.value.loading = false
    // data.value.dataList = res.data.data
    pagination.value.total = Number.parseInt(res.data.totalCount)
  })
}

// 异步函数，用于获取额外的数据
async function fetchAdditionalData(owner: string) {
  const response = await apiWecom.syncUserNickName({ userId: owner })
  return response.data
}
```

## 三元表达式多条件得多熟悉

```vue
const subMenuCollapseLastStatus = ref(menuSwitch.value === '' ? settingsDefault.menu.subMenuCollapse : (JSON.parse(menuSwitch.value) ? !settingsDefault.menu.subMenuCollapse : settingsDefault.menu.subMenuCollapse))
```



# 创建vite + ts + vue3 + vant 项目

## 安装vite

```ts
npm init vite@latest
```

地址：https://www.vitejs.net/guide/#scaffolding-your-first-vite-project



## 安装@types/node 扩展指令

```ts
npm i @types/node
```

在vite.config.ts里进行配置

```ts
import path from 'node:path'

export default defineConfig({
	resolve: {
    alias: {
      // 配置路径别名@
      "@": path.resolve(__dirname, "src"),
    },
  },
})
```



## 安装pinia   

Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。

地址：https://pinia.web3doc.top/getting-started.html#%E5%AE%89%E8%A3%85

```ts
npm install pinia
```

在main.ts 里配置

```ts
import pinia from './store'

const app = createApp(App)
app.use(pinia)
app.mount('#app')
```

创建store下 index.ts  modules下user.ts

```ts
const pinia = createPinia()

export default pinia
```

user.ts

```ts
import apiUser from '@/api/modules/user'

const useUserStore = defineStore(
  // 唯一ID
  'user',
  () => {
    const userInfo = ref(localStorage.userInfo ?? '')
    // 登陆
    async function login(data: {
      account: string
      password: string
    }) {
      const res = await apiUser.login(data)
      localStorage.setItem('userInfo', res.data)
      userInfo.value = res.data
    }
    // 退出登陆
    async function logout() {
      localStorage.removeItem('userInfo')
    }
    return {
      login,
      logout,
    }
  }

)

export default useUserStore

```

引用的时候

```ts
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()

userStore.logout()
```



## 安装路由 vue-router

```ts
npm install vue-router -S
```

main.ts配置

```ts
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

创建router下 新建index.ts和routes.ts

```ts
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes
})
// router.beforeEach(async (to, from, next) => {

// })

// 跳转完成后，将滚动条位置重置
router.afterEach(to => {
  window.scrollTo(0, 0);
});

export default router

```

routes.ts

```ts
import type { RouteRecordRaw } from 'vue-router'
// 固定路由（默认路由）
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component:() => import('@/views/index.vue'),
    meta:{
      title: '首页',
    },
    children: [
    ]
  },
  {
      name: 'logo',
      path: '/logo',
      component: () => import('@/views/logo.vue'),
      meta:{
        title: '登陆',
      }
  },
  {
      name: 'page',
      path: '/page',
      component: () => import('@/views/page.vue')
  },
];
// 系统路由
// const systemRoutes: RouteRecordRaw[] = [

// ]

export default routes

```



## 安装axios

```ts
npm i axios
```

创建api文件下 index.ts 跟 modules 文件

```ts
import axios from "axios";

import { showSuccessToast, showFailToast } from 'vant';

const api = axios.create({
  baseURL: "https://xxx.cn/",
  timeout: 1000 * 60,
  responseType: "json",
});

api.interceptors.request.use((request) => {
  // 是否将 POST 请求参数进行字符串化处理
  if (request.method === "post") {
  }
  return request;
});

api.interceptors.request.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    let message = error.message;
    if (message === "Network Error") {
      message = "后端网络故障";
    } else if (message.includes("timeout")) {
      message = "接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = `接口${message.substr(message.length - 3)}异常`;
    }
    document.title = message
    showFailToast(message)
    return Promise.reject(error)
  },
);

export default api

```

modules下如user.ts

```ts
import api from '../index'

export default {
  // 登录
  login: (data: {
    account: string
    password: string
  }) => api.post('user/login', data, {
    baseURL: '/mock/',
  }),
}

```

安装unplugin-auto-import插件

```
npm i unplugin-auto-import -D
```

它主要用于自动导入（Auto Import）Vue、React 和 TypeScript 文件中的模块。这个插件能够根据代码中的导入语句自动添加相应的导入语句，无需手动添加。

vite.config.ts

```ts
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia"
        // 其他需要自动导入的库
      ],
    })
  ],
})
```

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ],
    },
  },
  // 配置
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue","./auto-imports.d.ts",],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```



## 配置@文件路径

vite.config.ts

```ts
export default defineConfig({
	resolve: {
    alias: {
      // 配置路径别名@
      "@": path.resolve(__dirname, "src"),
    },
  },
})
```

tsconfig.json

```json
{
	"compilerOptions": {
		"baseUrl": "./",
    	"paths": {
      		"@/*": [
        	"src/*"
      		],
    	},
	}
}
```



## 安装vant ui

```
npm i vant
```

地址：https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart

main.ts配置

```ts
import { setupVant } from './plugins/vant'

const app = createApp(App)
setupVant(app)
app.mount('#app')
```

src下创建plugins 下 vant.ts

统一管理vant公用的组件

```ts
// src/plugins/vant.ts

import { App } from 'vue';
import 'vant/lib/index.css'; // 引入 Vant 样式
import {
  Button,
  Cell,
  CellGroup,
  // 其他你需要使用的组件
} from 'vant';

const vantComponents = [Button, Cell, CellGroup /* 其他组件 */];

export function setupVant(app: App): void {
  vantComponents.forEach((component) => {
    app.component(component.name, component);
  });
}

```



## 可考虑要不要安装postcss-pxtorem插件

```
npm install postcss-pxtorem -D // 用来把px转rem
npm install amfe-flexible -D // 用来修改根元素字体大小

```

main.ts配置

```
import 'amfe-flexible'
```

vite.config.ts

```ts
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig({
    css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 75,
          // 自适应，px>rem转换
          // rootValue: 16,
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['.van-'], // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
        }),
      ],
    },
  },
})
```



## 安装dayjs日期

在utils文件新建dayjs.ts文件

```ts
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export default dayjs

```

在使用的页面上index.ts上

```ts
import dayjs from '@/utils/dayjs'

const startTime = dayjs().format('YYYY-MM-DD 00:00:00')		// 今天开始时间
const endTimeOld = dayjs().format('YYYY-MM-DD 23:59:59')	 // 今天结束时间

const startTime1 = dayjs().subtract(1, 'day').format('YYYY-MM-DD 00:00:00')		  // 昨天时间
const endTime1 = dayjs().subtract(1, 'day').format('YYYY-MM-DD 23:59:59')		// 昨天结束时间

const endTime2 = dayjs().subtract(6, 'day').format('YYYY-MM-DD 00:00:00')		// 近七天

const startDate = dayjs().startOf('month').format('YYYY-MM-DD 00:00:00')		// 本月
const endDate1 = dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD 23:59:59')		  // 上个月

const startTimeLast30Days = dayjs().subtract(29, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss');		// 近30天
const startTimeLast59Days = dayjs().subtract(59, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss');		//  近60天
const startTimeLast6Months = dayjs().subtract(6, 'months').startOf('day').format('YYYY-MM-DD HH:mm:ss');		// 近半年
const startTimeLastYear = dayjs().subtract(1, 'year').startOf('day').format('YYYY-MM-DD HH:mm:ss');			// 新一年
```



## 安装 file-saver、xlsx 

```ts
npm install --save xlsx file-saver
```

在要用的组件上

```ts
import FileSaver from 'file-saver'
import * as XLSX from 'xlsx'

function getDownXlsx() {
  const wb = XLSX.utils.table_to_book(document.querySelector('#my-table'))// 关联dom节点
  /* get binary string as output */
  const wbout = XLSX.write(wb, {
    bookType: 'xlsx',
    bookSST: true,
    type: 'array',
  })
  try {
    FileSaver.saveAs(new Blob([wbout], {
      type: 'application/octet-stream',
    }), `${timeDataNum.value}产品报表.xlsx`)
  }
  catch (e) {
    // eslint-disable-next-line max-statements-per-line, no-console
    if (typeof console !== 'undefined') { console.log(e, wbout) }
  }
  return wbout
}
<template>
	<el-table id="my-table"> // 声明个id
     <el-button type="warning" :icon="Download" title="xlsx格式" @click="getDownXlsx">
              导出数据
     </el-button>
</template>
```

地址：https://blog.csdn.net/qq_62799214/article/details/132344448

import FileSaver from 'file-saver'可能会报红

这时候就要去声明个custom.d.ts文件

```ts
declare module 'file-saver'
```

tsconfig.json里去查看 include

```
"include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue"
  ],
```



时间戳

![image-20240105155256337](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20240105155256337.png)





如果遇到切换空白的情况前往

https://fantastic-admin.gitee.io/guide/q-a.html#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98

**页面切换后显示空白**[](https://fantastic-admin.gitee.io/guide/q-a.html#页面切换后显示空白)

因为路由切换有使用到 `<transition>` 动画，而 `<transition>` 组件无法处理多个根节点的组件，所以请检查路由对应所有的页面文件的根节点是否均为单个。

```vue
<template>
  <!-- 需要注意，注释也会被视为一个节点 -->
  <h1>text h1</h1>
  <h2>text h2</h2>
</template>

<template>
  没有节点也是不行的
</template>
```

正确示例：

```vue
<template>
  <div>
    <h1>text h1</h1>
    <h2>text h2</h2>
  </div>
</template>

<template>
  <div>
    这样就没问题啦
  <div>
</template>
```



# ts对象成员设置初始值为空赋值为number

我们经常会使用到下拉选择器，对于选择器value的值一般为string或number类型，此次是为number类型的问题

### 解决方案：

1.对对象进行类型说明，赋为any类型，为number类型的成员可不赋初值。但是该方法就无法对其进行类型校验，也就失去了ts的意义。

```ts
const [batchMes, setbatchMes] = useState<any>({
    batchName: '',
    batchNum: '',
    batchMeasure: 0,
    breedFlag: 1,
    description: '',
    batchTime: ["2020-10-01", "2020-11-01"],

  })

```

2.对对象内成员进行类型说明，同时那些初值为空赋值为number类型的成员设为可选，不赋初值即可。

```ts
interface batchMesState {
  batchName: string,
  batchNum: string,
  batchMeasure: number,
  breedFlag: number,
  // enabledFlag: number,
  description?: string,
  batchTime: Object,
  varietyId?: number,
  landId?: number,
  breedBatchId?: number,
  objectVersionNumber?: number
}
const [batchMes, setbatchMes] = useState<batchMesState>({
    batchName: '',
    batchNum: '',
    batchMeasure: 0,
    breedFlag: 1,
    description: '',
    batchTime: ["2020-10-01", "2020-11-01"],

  })

```



判断两个数组,有符合的参数返回true或false

```vue
const arr = Number.parseInt(advertiseMentRules.value.scenes)
const validValues = [3, 4, 5]
is_type.value = validValues.includes(arr)
```



经典案例

```ts
function getSelectProduct(event: any) {
  const arr = options1.value
  const result = [] as any
  event.forEach((item: any) => {
    const matchingItem = arr.find((items: any) => items.itemId === item)
    if (matchingItem) {
      result.push({
        id: matchingItem.itemId,
        name: matchingItem.itemTitle,
      })
    }
  })
  productId.value = result
}
```

提取数据

```ts
const extractedData = b.map(item => {
  return {
    id: item.id,
    name: item.name
  };
});
```



# OpenLayers 入门指南：从零开始的地图应用开发

https://juejin.cn/post/7278244755824246821?searchId=2024012215062532E0BAF9AB64EBEAA799

```
相加
const momey = res.data.reduce((acc: any, obj: any) => acc + obj.totalAmount, 0)
```



element-plus: 2.3.7