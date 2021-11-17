# 快速上手

## 在 ES5 中使用

1. 获取 topology.js

```shell
npm install topology --save
```

2. 拷贝 node_modules/topology/topology.js 到静态资源目录（比例 index.html 所在目录）

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
var topology = new Topology('topology');
// Get the json data
// ...
// Open the json
topology.open(json);
```

**参考例子：** https://github.com/le5le-com/topology.js/tree/master/examples/es5

## 在 Vue 中使用

1. 获取 @topology/core 等库

```js
npm install @topology/core --save

// Option
npm install @topology/activity-diagram --save
npm install @topology/flow-diagram --save
npm install @topology/class-diagram --save
npm install @topology/sequence-diagram --save
// ...
npm install @topology/layout --save

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

```js
<script lang="ts">
import { Options, Topology } from '@topology/core';
import { flowPens } from '@topology/flow-diagram';
import { activityDiagram } from '@topology/activity-diagram';
import { classPens } from '@topology/class-diagram';
import { sequencePens, sequencePensbyCtx } from '@topology/sequence-diagram';
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

declare const window: any;
declare const topology: Topology;

export default defineComponent({
  name: 'TopologyCanvas',
  components: {  },
  setup() {
    const topologyOptions: Options = {};

    onMounted(() => {
      new Topology('topology', topologyOptions);
      topology.register(flowPens());
      topology.register(activityDiagram());
      topology.register(classPens());
      topology.register(sequencePens());
      topology.registerCanvasDraw(sequencePensbyCtx());

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
});
</script>
```

**参考例子：** https://github.com/le5le-com/topology.js/tree/master/examples/vue

## 在 React 中使用

1. 获取 @topology/core 等库

```shell
npm install @topology/core --save

// Option
npm install @topology/activity-diagram --save
npm install @topology/flow-diagram --save
npm install @topology/class-diagram --save
npm install @topology/sequence-diagram --save
// ...
npm install @topology/layout --save

```

2. 编写 React jsx

```js
import React, { useEffect } from 'react';
import { Options, Topology } from '@topology/core';
import { flowPens } from '@topology/flow-diagram';
import { activityDiagram } from '@topology/activity-diagram';
import { classPens } from '@topology/class-diagram';
import { sequencePens, sequencePensbyCtx } from '@topology/sequence-diagram';

const TopologyContainer = () => {
  useEffect(() => {
    window.topology = new Topology('topology');

    topology.register(flowPens());
    topology.register(activityDiagram());
    topology.register(classPens());
    topology.register(sequencePens());
    topology.registerCanvasDraw(sequencePensbyCtx());

    // 打开文件
    topology.open(json);
  }, []);

  return (
    <div className='main'>
      <div className='topology' id='topology'></div>
    </div>
  );
};

export default TopologyContainer;
```

**参考例子：** https://github.com/le5le-com/topology.js/tree/master/examples/react
