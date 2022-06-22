# 快速上手

## 如何学习

1. 跟着[快速上手](./start)做一遍，先有个总体认知

2. 看一遍我们的[视频教程](../awesome/home.html#视频教程)，有个全面认识

3. 多学习[官方示例](../awesome/home.html#官方示例)教程、示例等

<br>

::: tip 提示  
初始化引擎后，会在 window 下注入 topology 对象（即 window.topology）。

默认任何相关文档提到的 topology 均指 window.topology（实例化引擎对象）。
:::

::: tip 划重点
所有标准 js 语法均可打开 [topology 官网编辑器](http://t.le5le.com) ，在浏览器控制台直接运行查看效果
:::

例如，在[topology 官网编辑器](http://t.le5le.com/) 页面的控制台运行：

```js
// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

topology.addPen(pen);
```

需要编译和依赖环境的代码除外，比如：

```js
import { Topology } from "@topology/core";

new Topology();
```

本教程下列代码不可在 topology 官网编辑器运行。其他页面教程的标准 js 语法大多可以。

---

## 在 ES5 中使用

1. 获取 topology.js

```shell
npm install topology.js --save
```

2. 拷贝 node_modules/topology.js/topology.js 到静态资源目录（比例 index.html 所在目录）

3. 编写 index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title i18n>乐吾乐 Topology</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="topology"></div>
    <script src="topology.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

4. 编写 index.js 加载 topology.js

```js
var topology = new Topology("topology");
registerCommonDiagram(); //注册图形库
// Get the json data
// ...
// Open the json
topology.open(json);
```

**参考例子：** https://github.com/le5le-com/topology.js/tree/master/examples/es5

## 在 Vue3 中使用

1. 获取 @topology/core 等库

```shell
npm install @topology/core --save

// Option
npm install @topology/activity-diagram --save
npm install @topology/chart-diagram --save
npm install @topology/class-diagram --save
npm install @topology/flow-diagram --save
npm install @topology/sequence-diagram --save
// ...
# 新版本尚未发布，待
# npm install @topology/layout --save

```

2. 编写 Vue HTML Element

```html
<template>
  <div class="main">
    <div id="topology"></div>
  </div>
</template>
```

3. 编写 js 加载 topology

```ts
    import {
        Options,
        Topology
    } from '@topology/core';
import {
    flowPens
} from '@topology/flow-diagram';
import {
    activityDiagram
} from '@topology/activity-diagram';
import {
    classPens
} from '@topology/class-diagram';
import {
    sequencePens,
    sequencePensbyCtx
} from '@topology/sequence-diagram';
import {
    defineComponent,
    onMounted,
    onUnmounted,
    ref
} from 'vue';
import { formPens } from '@topology/form-diagram';

declare const window: any;
declare const topology: Topology;

export default defineComponent({
    name: 'TopologyCanvas',
    components: {},
    setup() {
        const topologyOptions: Options = {};

        onMounted(() => {
            new Topology('topology', topologyOptions);
            topology.register(flowPens());
            topology.register(activityDiagram());
            topology.register(classPens());
            topology.register(sequencePens());
            topology.registerCanvasDraw(sequencePensbyCtx());
            topology.registerCanvasDraw(formPens());

            // 监听消息事件
            topology.on('contextmenu', contextmenu);
            topology.on('click', click);

            // 打开文件
            topology.open(json);
        });
        onUnmounted(() => {
            if (topology) {
                topology.off('contextmenu', contextmenu);
                topology.off('click', click);
                topology.destroy();
            }
        });

        const contextMenuVisible = ref(false);

        function contextmenu() {
            contextMenuVisible.value = true;
        }

        function click() {
            contextMenuVisible.value = false;
        }

        return {
            contextMenuVisible,
        };
    },
}); <
```

**参考例子：** https://github.com/le5le-com/topology.js/tree/master/examples/vue

## 在 React 中使用

1. 获取 @topology/core 等库

```shell
npm install @topology/core --save

// Option
npm install @topology/activity-diagram --save
npm install @topology/chart-diagram --save
npm install @topology/class-diagram --save
npm install @topology/flow-diagram --save
npm install @topology/sequence-diagram --save
// ...
# 新版本尚未发布，待
# npm install @topology/layout --save

```

2. 编写 React jsx

```tsx
import React, { useEffect } from "react";
import { Options, Topology } from "@topology/core";
import { flowPens } from "@topology/flow-diagram";
import { activityDiagram } from "@topology/activity-diagram";
import { classPens } from "@topology/class-diagram";
import { sequencePens, sequencePensbyCtx } from "@topology/sequence-diagram";
import { formPens } from "@topology/form-diagram";

const TopologyContainer = () => {
  useEffect(() => {
    window.topology = new Topology("topology");

    topology.register(flowPens());
    topology.register(activityDiagram());
    topology.register(classPens());
    topology.register(sequencePens());
    topology.registerCanvasDraw(sequencePensbyCtx());
    topology.registerCanvasDraw(formPens());

    // 打开文件
    topology.open(json);
  }, []);

  return (
    <div className="main">
      <div className="topology" id="topology"></div>
    </div>
  );
};

export default TopologyContainer;
```

**参考例子：** https://github.com/le5le-com/topology.js/tree/master/examples/react
