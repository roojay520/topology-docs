# 自定义图形库

topology 图形库是一种可扩展、开放性的图形库，可以根据需求任意定制开发。

其中，图形库支持 Path2D 绘画和 CanvasRenderingContext2D 两种方式：  
简单基本图形推荐使用 Path2D，性能略高；  
复杂场景适合用 CanvasRenderingContext2D

## 自定义 Path2D 图形库

```js
// 1. 编写图形绘画函数
// 其中，calculative.worldRect为canvas的世界坐标。更多信息，参考 “架构” - “概要” 和 Pen 相关文档
export function triangle(pen: Pen, path?: CanvasRenderingContext2D | Path2D) {
  if (!path) {
    path = new Path2D();
  }
  path.moveTo(pen.calculative.worldRect.x + pen.calculative.worldRect.width / 2, pen.calculative.worldRect.y);
  path.lineTo(
    pen.calculative.worldRect.x + pen.calculative.worldRect.width,
    pen.calculative.worldRect.y + pen.calculative.worldRect.height
  );
  path.lineTo(pen.calculative.worldRect.x, pen.calculative.worldRect.y + pen.calculative.worldRect.height);
  path.lineTo(pen.calculative.worldRect.x + pen.calculative.worldRect.width / 2, pen.calculative.worldRect.y);

  path.closePath();

  return path;
}

// 2. 如果需要，编写锚点函数。通常，可以使用默认锚点，然后通过快捷键动态添加锚点
// 注意，锚点左边为相对宽高的百分比小数（0-1之间的小数）
export function triangleAnchors(pen: Pen) {
  const anchors: Point[] = [];
  anchors.push({
    id: '0',
    penId: pen.id,
    x: 0.5,
    y: 0,
  });

  anchors.push({
    id: '1',
    penId: pen.id,
    x: 1,
    y: 1,
  });

  anchors.push({
    id: '2',
    penId: pen.id,
    x: 0,
    y: 1,
  });
  pen.anchors = anchors;
}

// 3. 注册图形
// 参数 {key: fn}。key为图形唯一name，否则覆盖原来图形，fn为相关函数
topology.register({ triangle });
topology.registerAnchors({ triangle: triangleAnchors });

// 4. 开始使用
const pen = {
  name: 'triangle',
  text: '三角形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};
topology.addPen(pen);
topology.inactive();
```

## 自定义 Canvas Context2D 图形库

```js
// 1. 编写图形绘画函数
// 其中，calculative.worldRect为canvas的世界坐标。更多信息，参考 “架构” - “概要” 和 Pen 相关文档
export function triangle(ctx: CanvasRenderingContext2D, pen: Pen) {
  // 若在绘画函数中，配置了 ctx.strokeStyle or fillStyle ，那么画笔的 color or background 无法对它生效
  // ctx.strokeStyle = '#1890ff';
  ctx.moveTo(pen.calculative.worldRect.x + pen.calculative.worldRect.width / 2, pen.calculative.worldRect.y);
  ctx.lineTo(
    pen.calculative.worldRect.x + pen.calculative.worldRect.width,
    pen.calculative.worldRect.y + pen.calculative.worldRect.height
  );
  ctx.lineTo(pen.calculative.worldRect.x, pen.calculative.worldRect.y + pen.calculative.worldRect.height);
  ctx.lineTo(pen.calculative.worldRect.x + pen.calculative.worldRect.width / 2, pen.calculative.worldRect.y);

  ctx.closePath();
  ctx.stroke();
  // 若需要填充 ctx.fill();
}

// 2. 如果需要，编写锚点函数。通常，可以使用默认锚点，然后通过快捷键动态添加锚点
// 注意，锚点左边为相对宽高的百分比小数（0-1之间的小数）
export function triangleAnchors(pen: Pen) {
  const anchors: Point[] = [];
  anchors.push({
    id: '0',
    penId: pen.id,
    x: 0.5,
    y: 0,
  });

  anchors.push({
    id: '1',
    penId: pen.id,
    x: 1,
    y: 1,
  });

  anchors.push({
    id: '2',
    penId: pen.id,
    x: 0,
    y: 1,
  });
  pen.anchors = anchors;
}

// 3. 注册图形
// 参数 {key: fn}。key为图形唯一name，否则覆盖原来图形，fn为相关函数
topology.registerCanvasDraw({ triangle });
topology.registerAnchors({ triangle: triangleAnchors });

// 4. 开始使用
const pen = {
  name: 'triangle',
  text: '三角形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};
topology.addPen(pen);
topology.inactive();
```

## 其他

文字、颜色、大小、动画、事件等属性是通用继承的属性，默认不需要单独设置。具体可参考 [pen](../api/pen)
