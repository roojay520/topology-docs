# 画笔

画笔是 topology 的绘画单元。详情可参考： [Pen API](/api/pen)

## 类型 type

画笔分为节点 Node 和连线 Line 两种。  
用 **pen.type** 区分:  
0 - Node（默认，可为空）  
1 - Line

Node：通常是由边框形状（特有绘画函数） + 锚点 anchors 组成。锚点用于关联连线；  
Line：通常是由锚点 anchors 组成。锚点用于连线。

## 名称 name

pen.name 用于区分图形形状的不同。例如正方形、圆、三角形等

**其中**：name='line'时，表示连线画笔。通常，连线的 type=1。  
但是 name='line'时，type 也可以 = 0，用于表示“连线形状”的节点。例如，用钢笔可以表示多端曲线，可以表示画了一个自定义图形。  
虽然他们形状相同，但逻辑不完全相同，特别是动画。

```js
// 我是一个node属性的pen，形状是line
const node = {type: 0, name: 'line', anchors:[...], ...};

// 我是一个line属性的pen，形状是line
const line = {type: 1, name: 'line', anchors:[...], ...};
```

## 创建

符合画笔格式的 json 数据即画笔。例如：

**以下代码，均可直接在 topology.le5le.com 官网在线编辑器或 topology 实例页面的控制台执行**

```js
// 定义一个pen，矩形
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

// 方式一：open加载，将清除之前数据
topology.open({ pens: [pen] });

// 方式二：添加到画布，并选中，会触发生命周期函数beforeAddPen
topology.addPen(pen);

// 方式三：仅添加画笔，不选中，不触发生命周期函数，不重绘（不立刻显示），可用于批量添加后，一次重绘
topology.canvas.makePen(pen);

// 选中高亮
topology.active([pen]);
// 重绘显示
topology.render();
```

## 查找

```js
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

// 查找方式一：id查找，返回的是数组
const pens1 = topology.find(pen.id);

// 查找方式二：tag查找，返回的是数组
const pens2 = topology.find('aaa');
```

## 更新

```js
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

// 查找id = pen.id的画笔，
topology.setValue({
  id: pen.id,
  text: 'le5le',
});

// 查找id = pen.id的画笔，修改id为111
topology.setValue({
  id: pen.id,
  newId: '111',
});
```

## 删除

```js
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

// 删除
topology.delete(topology.find(pen.id));
```

## 选中高亮

```js
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

// 高亮
topology.active(topology.find(pen.id));

// 清空高亮。如果需要取消部分高亮，直接调用active()赋最新值即可
topology.inactive();
```

## 是否选中高亮

```js
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

// 打印是否选中高亮
console.log(pen.calculative.active);
```
