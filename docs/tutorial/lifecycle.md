# 生命周期

画笔的添加和删除前，引擎会执行全局生命周期函数，返回 true 继续，否则终止操作。

同时，画笔添加后，添加和销毁会执行画笔的 onAdd 和 onDestroy 相关函数。

## 全局生命周期函数

默认无。可以如下设置即可：

```js
topolog.beforeAddPen = (pen: Pen) => {
  console.log('addPen', pen);
  // 返回 true 允许add
  return true;
};

topolog.beforeRemovePen = (pen: Pen) => {
  console.log('removePen', pen);
  // 返回 true 允许remove
  return true;
};

topolog.beforeAddAnchor = (pen: Pen) => {
  console.log('addAnchor', pen);
  // 返回 true 允许add
  return true;
};

topolog.beforeRemoveAnchor = (pen: Pen) => {
  console.log('removeAnchor', pen);
  // 返回 true 允许remove
  return true;
};

// 定义一个pen，矩形
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  tag: ['aaa'],
};
topology.addPen(pen);
// print: addPen, pen
```

## 画笔相关函数

默认无。可以在自定义图形库的时候设置，或临时设置。生命周期函数类型均为：(pen: Pen) => void

- onAdd 画笔添加到画布后
- onDestroy 画笔被删除后

其他相关函数：

- onValue 属性值发生修改
- onMove 被移动拖拽
- onResize 修改大小
- onRotate 旋转
- onClick 单击
- onMouseDown 鼠标按下
- onMouseMove 鼠标经过
- onMouseUp 鼠标抬起

临时设置函数：

```js
const onAddPen = (pen: Pen) => {
  console.log('onAddPen', pen);
};

// 定义一个pen，矩形
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  onAdd: onAddPen,
};
topology.addPen(pen);
// print: onAddPen, pen
```

自定义图形库设置 onAdd 相关函数，参考：[自定义图形库示例](https://github.com/le5le-com/topology.js/blob/master/packages/chart-diagram/src/echarts.ts)
