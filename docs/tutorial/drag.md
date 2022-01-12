# 拖拽

topology 支持从工具栏拖拽图标到画布。

工具栏需要自定义实现，支持 drag 相关属性；引擎已支持 drop 功能。

**1. 创建图形库工具栏**  
创建图形库工具栏 html 元素，绑定拖拽事件或 touch 事件

```html
<div class="tools">
  <div
    class="icon"
    draggable="true"
    ondragstart="onDragstart($event, menu)"
    onclick="onTouchstart($event, menu)"
    ontouchstart="onTouchstart($event, menu)"
  >
    <img src="xxx" />
    <div>Rectangle</div>
  </div>
</div>
```

**2. 传递数据**  
在工具栏相应事件函数中，给 topology 传递 pen 对象数据即可

```js
const pen = {
  name: 'rectangle',
  text: '矩形',
  width: 100,
  height: 100,
};

onDragstart = (e) => {
  e.dataTransfer.setData('Text', JSON.stringify(pen));
};

// 支持鼠标单击添加图形
import { deepClone } from '@topology/core';
onTouchstart = (e) => {
  topology.canvas.addCaches = deepClone([pen]);
};
```

参考示例： https://github.com/le5le-com/topology.js/tree/master/examples
