# Pen

继承 Rect。

## 属性

### id

唯一标识。

**数据类型：** string

**示例：**

```js
const pen = {id: 'le5le', ...};

// 查找指定id的pen
topology.find('le5le')
// return: [{id: 'le5le', ...}]
```

### tags

tag 标签。可用于唯一标记、群组标记等。

**数据类型：** string[]

**示例：**

```js
const pen1 = {tag:['a', 'b'], ...};
const pen2 = {tag:['a', 'c'], ...};
const pen3 = {tag:['b', 'c'], ...};

// 查找指定id的pen
topology.find('a')
// return: [pen1, pen2]
```

### parentId

父元素 id。

**数据类型：** string

**示例：**

```js
const parentPen = {id:'a' , ...};
const pen = {parentId: 'a', ...};

// 查找parent
topology.getParent(pen)
// return: [parentPen]
```

### type

pen 类型。0 - node；1 - line

**数据类型：**  
enum PenType {
Node,
Line,
}

**示例：**

```js
const node = {type: 0, ...};
const line = {type: 1, name: 'line', lineName:'curve', ...};
```

### name

pen 形状名称。例如：rectangle、circle、line...

【注意】连线 name 必须为 line。不同类型连线用 lineName 属性描述。例如： lineName:'curve'

**数据类型：** string

```js
const node = {name: 'myShape', ...};
const line = {type:1, name: 'line', lineName:'curve', ...};
```

### lineName

连线类型名称。默认有：curve、polyline、line、mind

【注意】仅当 type=1（name='line'）为连线时有效

**数据类型：** string

```js
const line = {type:1, name: 'line', lineName:'curve', ...};
```

### close

仅 name='line'时有效，type 不限，表示是否连线首尾相连组成封闭形状

**数据类型：** boolean

**示例：**

```js
const pen = {name: 'line', close: true, ...};
```

### anchors

锚点数组。锚点坐标为相对 pen 世界区域（绝对区域）（pen.calculative.worldRect）的百分比小数（小于 1 的小数表示百分比）。

当为连线（type == 1）时，锚点起点和终点分别为数组首尾两个元素。

**数据类型：** Point[]

**示例：**

```js
const node = {name: 'circle', anchors: [{0.1, 0.1}, {0.1, 1}], ...};

// line.from = {0.1, 0.1}
// line.to = {0.1, 1}
const line = {name: 'line', lineName:'curve', anchors: [{0.1, 0.1}, {0.1, 0.2}, {0.1, 0.5}, {0.1, 1}], ...};
```

### x,y,width,height

pen 在画布中的位置。**【注意】** 此位置仅为画布绘画的参考位置，缩放平移时，可能会变化，如果需要获取缩放平移时坐标不变的逻辑位置，用 topology.getPenRect(pen)获取。

当 pen 不为子节点时，为画布中的绝对位置；  
当 pen 为子节点时，为相对父元素的百分比小数相对位置。

- **通常：**  
  我们使用 topology.getPenRect(pen)获取逻辑位置；  
  使用 topology.setPenRect(pen,{x,y,width,height})设置逻辑位置

**数据类型：** number

**示例：**

```js
const pen = {x: 0, y: 0, width: 100, height: 100, ...};

// 缩放、平移后，getPenRect不变，但是 pen.x、pen.y等可能会变
topology.getPenRect(pen)
```

### rotate

pen 的旋转角度，单位度 °。

**数据类型：** number

**示例：**

```js
const pen = {rotate: 0, ...};
```

### visible

是否可见。仅当 visible===false 时，隐藏。

**数据类型：** boolean

**示例：**

```js
const pen = {visible: true, ...};
```

### locked

锁定状态。

**数据类型：**

```js
enum LockState {
  // 0 -未锁定
  None,
  // 1 - 禁止编辑，隐藏大小、缩放、选中编辑框；可选中、高亮、移动、触发事件等
  DisableEdit,
  // 2 - 禁止编辑 + 移动；可选中、高亮、触发事件等
  DisableMove,
  // 10 - 不触发任何操作和事件
  Disable = 10,
}

```

**示例：**

```js
const pen = {locked: 1, ...};
```

### length

连线长度。仅当 name='line'时，有效。自动计算得出

**数据类型：** number

**示例：**

```js
const pen = {name: 'line', length: 自动计算得出, ...};
```

### title

tooltip 提示框，支持 markdown 格式

**数据类型：** string

**示例：**

```js
const pen = {title: 'tooltip提示文字，支持markdown格式', ...};
```

### lineWidth

线宽

**数据类型：** number

**示例：**

```js
const pen = {lineWidth: 1, ...};
```

### globalAlpha

透明度。百分比小数（0-1 之间的小数）

**数据类型：** number

**示例：**

```js
const pen = {globalAlpha: 1, ...};
```

### lineDash

虚线设置，具体参考 canvas 的 lineDash 用法

**数据类型：** number[]

**示例：**

```js
const pen = {lineDash: [5,5], ...};
```

### lineDashOffset

虚线偏移量，具体参考 canvas 的 lineDashOffset 用法

**数据类型：** number

**示例：**

```js
const pen = {lineDashOffset: 5, ...};
```

### lineDashOffset

虚线偏移量，具体参考 canvas 的 lineDashOffset 用法

**数据类型：** number

**示例：**

```js
const pen = {lineDashOffset: 5, ...};
```

### color

画笔颜色，如果没特别设置，颜色包括：文字和边框

**数据类型：** string

**示例：**

```js
const pen = {color: '#222222', ...};
```

### background

画笔背景颜色

**数据类型：** string

**示例：**

```js
const pen = {background: '#ffffff', ...};
```

### activeColor

画笔选中颜色，如果没特别设置，颜色包括：文字和边框

**数据类型：** string

**示例：**

```js
const pen = {activeColor: '#1890ff', ...};
```

### activeBackground

画笔选中背景颜色

**数据类型：** string

**示例：**

```js
const pen = {activeBackground: '#f6f6f6', ...};
```

### hoverColor

画笔鼠标经过颜色

**数据类型：** string

**示例：**

```js
const pen = {hoverColor: '#f6f6f6', ...};
```

### hoverBackground

画笔鼠标经过背景颜色

**数据类型：** string

**示例：**

```js
const pen = {hoverBackground: '#f6f6f6', ...};
```

### anchorColor

画笔锚点颜色

**数据类型：** string

**示例：**

```js
const pen = {anchorColor: 'red', ...};
```

### text

画笔文本内容

**数据类型：** string

**示例：**

```js
const pen = {text: 'text', ...};
```

### calculative

画笔临时自动计算变量。例如：世界坐标、动画渐变等属性。保存文件时，会自动删除。

**数据类型：** object

**示例：**

```js
const rect = pen.calculative.worldRect;
```

### progress

进度值。百分比小数（0-1 之间的小数）

**数据类型：** number

**示例：**

```js
const pen = {progress: 0.8, ...};
```

### progressColor

进度颜色。

**数据类型：** string

**示例：**

```js
const pen = {progressColor: '#1890ff', ...};
```

### verticalProgress

是否垂直进度。默认水平

**数据类型：** boolean

**示例：**

```js
const pen = {verticalProgress: true, ...};
```

## 函数

这里的函数为相关函数，不属于 pen 对象。pen 为 json 对象，非 class

### randomId

重新随机分配 id，包括子节点。

**参数：**

- pen: Pen

**返回：**  
void

**示例：**

```js
import { randomId } from '@topology/core';

randomId(pen);
```

### getParent

获取父元素。

**参数：**

- pen: Pen  
  画笔

- root: boolean  
  是否获取祖...祖父节点

**返回：**  
Pen。如果没有父元素，返回 undefined

**示例：**

```js
import { getParent } from '@topology/core';

getParent(pen);
```

### getAllChildren

获取所有子元素或孙元素。

**参数：**

- pen: Pen  
  画笔

**返回：**  
Pen[]。如果没有子元素或孙元素，返回 []

**示例：**

```js
import { getAllChildren } from '@topology/core';

getAllChildren(pen);
```

### calcPenRect

根据世界坐标计算画布中相对[坐标](/api/pen#x-y-width-height) 。一般手动用于修改了画笔世界坐标位置后，更新相对坐标，以便保存。

**参数：**

- pen: Pen  
  画笔

**返回：**  
void

**示例：**

```js
import { calcPenRect } from '@topology/core';

calcPenRect(pen);
```

### scalePen

缩放画笔。仅仅修改世界坐标（临时绘画坐标，不影响原始数据），如果需要配套更新数据，需要调用 topology.canvas.dirtyPenRect(pen)。

**参数：**

- pen: Pen  
  画笔

- scale: number  
  缩放比例。例如：1.2 - 放大到当前的 120%；0.9 - 缩小到当前的 90%

- center: Point {x,y }  
  缩放中心点

**返回：**  
void

**示例：**

```js
import { scalePen } from '@topology/core';

// 相对自身中点缩放120%
scalePen(pen, 1.2, pen.calculative.worldRect.center);
```

### pushPenAnchor

添加锚点。一般用于 Node 类型

**参数：**

- pen: Pen  
  画笔

- pt: Point {x,y }  
  锚点。世界坐标（canvas 坐标）

**返回：**  
Point。世界坐标下的锚点

**示例：**

```js
import { pushPenAnchor } from '@topology/core';

// 这里的x,y仅为示例值
pushPenAnchor(pen, { x: 100, y: 100 });
```

### addLineAnchor

添加连线锚点。一般还需要调用 topology.canvas.initLineRect(line);重新计算连线长度、样式和区域

**参数：**

- pen: Pen  
  画笔

- pt: Point {x,y }  
  锚点。世界坐标（canvas 坐标）

- index: number  
  锚点位置

**返回：**  
Point。世界坐标下的锚点

**示例：**

```js
import { addLineAnchor } from '@topology/core';

// 这里的x,y仅为示例值
addLineAnchor(line, { x: 100, y: 100 }, 0);
topology.canvas.initLineRect(line);
```

### removePenAnchor

移除锚点。如果为 line 还需要调用 topology.canvas.initLineRect(line);重新计算连线长度、样式和区域

**参数：**

- pen: Pen  
  画笔

- pt: Point {id, x, y }  
  锚点。必须指定有效 id

**返回：**  
void

**示例：**

```js
import { removePenAnchor } from '@topology/core';

removePenAnchor(pen, { id: 'id' });
if (line.type) {
  topology.canvas.initLineRect(line);
}
```

### nearestAnchor

查找最近锚点

**参数：**

- pen: Pen  
  画笔

- pt: Point {x, y }  
  参考坐标

**返回：**  
Point：锚点

**示例：**

```js
import { nearestAnchor } from '@topology/core';

const pt = nearestAnchor(pen, { x: 100, y: 100 });
```

### facePen

查找当前点面向 pen 的上下左右哪个方向

**参数：**

- pt: Point {x, y }  
  点

- pen: Pen  
  画笔

**返回：**  
Direction：方向

```js
enum Direction {
  None = -1,
  Up,
  Right,
  Bottom,
  Left,
}
```

**示例：**

```js
import { facePen } from '@topology/core';

const direction = facePen({ x: 100, y: 100 }, pen);
```

### getAnchor

获取锚点

**参数：**

- pen: Pen  
  画笔

- anchorId: string
  瞄点 id

**返回：**  
Point: 锚点

**示例：**

```js
import { getAnchor } from '@topology/core';

const pt = getAnchor(pen, 'id');
```

### getFromAnchor

获取连线起点

**参数：**

- pen: Pen  
  画笔

**返回：**  
Point: 起点

**示例：**

```js
import { getFromAnchor } from '@topology/core';

const from = getFromAnchor(pen);
```

### getToAnchor

获取连线终点

**参数：**

- pen: Pen  
  画笔

**返回：**  
Point: 终点

**示例：**

```js
import { getToAnchor } from '@topology/core';

const to = getToAnchor(pen);
```

### setHover

设置 hover 状态

**参数：**

- pen: Pen  
  画笔

- hover: boolean  
  是否 hover，默认 true

**返回：**  
void

**示例：**

```js
import { setHover } from '@topology/core';

setHover(pen);
```
