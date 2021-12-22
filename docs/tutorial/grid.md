# 网格

画布背景网格

![乐吾乐topology网格](/topology-documents/img/grid.png)

在线体验： http://topology.le5le.com/workspace

示例：

```js
// 设置默认缺省网格属性
topology.store.options.grid = true; // 开启
topology.store.options.gridColor = 'eeeeee'; // 网格线条颜色
topology.store.options.gridSize = 10; // 格子大小

// 设置单个图纸的网格属性
topology.store.data.grid = true; // 开启
topology.store.data.gridColor = 'eeeeee'; // 网格线条颜色
topology.store.data.gridSize = 10; // 格子大小
```
