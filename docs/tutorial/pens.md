# 默认图形库

topology 所有图形库都是动态扩展的，为了使用方便，引擎直接内置了一些基础图形库，提供了流程图相关的扩展库，按需导入使用即可。

## 基础图形

直接使用

| name        | 描述     |
| ----------- | -------- |
| rectangle   | 矩形     |
| circle      | 圆       |
| triangle    | 三角形   |
| diamond     | 菱形     |
| pentagon    | 五边形   |
| pentagram   | 五角星   |
| hexagon     | 六边形   |
| leftArrow   | 左箭头   |
| rightArrow  | 右箭头   |
| twowayArrow | 双向箭头 |
| message     | 消息框   |
| cloud       | 云       |
| file        | 文件     |
| cube        | 立方体   |
| people      | 人       |
| line        | 线       |
| iframe      | 网页     |
| video       | 音视频   |
| gif         | gif 动画 |
| svgPath     | svg path |

```js
const pen = {
  name: 'rectangle', // name 为上面表格中name
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};
topology.addPen(pen);
topology.inactive();
```

## 流程图

```js
import { flowPens } from '@topology/flow-diagram';

topology.register(flowPens());
```

| name                | 描述     |
| ------------------- | -------- |
| flowData            | 数据     |
| flowSubprocess      | 子流程   |
| flowDb              | 数据库   |
| flowDocument        | 文档     |
| flowInternalStorage | 内部存储 |
| flowQueue           | 队列     |
| flowManually        | 手动输入 |
| flowDisplay         | 展示     |
| flowParallel        | 并行模式 |
| flowComment         | 注释     |

## 活动图

```js
import { activityDiagram, activityDiagramByCtx } from '@topology/activity-diagram';

topology.register(activityDiagram());
// 原生canvas绘画的图库，支持逻辑复杂的需求
topology.registerCanvasDraw(activityDiagramByCtx());
```

| name          | 描述          |
| ------------- | ------------- |
| activityFinal | 结束          |
| swimlaneV     | 垂直泳道      |
| swimlaneH     | 水平泳道      |
| forkV         | 垂直分岔/汇合 |
| forkH         | 水平分岔/汇合 |

## 时序图

```js
import { sequencePens, sequencePensbyCtx } from '@topology/sequence-diagram';

topology.register(sequencePens());
topology.registerCanvasDraw(sequencePensbyCtx());
```

| name          | 描述   |
| ------------- | ------ |
| lifeline      | 生命线 |
| sequenceFocus | 激活   |

## 类图

```js
import { classPens } from '@topology/class-diagram';

topology.register(classPens());
```

| name           | 描述     |
| -------------- | -------- |
| simpleClass    | 简单类图 |
| interfaceClass | 普通类图 |
