# 画布

画布是 topology 的核心，所有展示和交互都在画布上呈现。

## 创建画布

1. 指定 html 的父 Element

```html
// 提前设置好css样式，特别是大小位置
<div id="topology"></div>
```

2. 在 js 中创建实例

```js
// 'topology'为id或Element实例；options可选
var topology = new Topology('topology', options);

// 核心库将自动添加
// window.topology = topology;
```

3. 根据业务，调用 topology api 开始使用

```js
// 例如：打开一个topology格式文件
topology.open(json);

// 获取文件数据
const json = topology.data();
```

## 拖拽图形库

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
onTouchstart = (e) => {
  topology.canvas.addCaches = [pen];
};
```

## Options 选项

| 名称                | 类型        | 描述                                               |
| ------------------- | ----------- | -------------------------------------------------- |
| color               | string      | 画笔默认颜色，如果没特别设置，颜色包括：文字和边框 |
| activeColor         | string      | 画笔选中颜色                                       |
| activeBackground    | string      | 画笔选中背景颜色                                   |
| hoverColor          | string      | 鼠标移动到画笔上的颜色                             |
| hoverBackground     | string      | 鼠标移动到画笔上的背景颜色                         |
| anchorColor         | string      | 锚点颜色                                           |
| anchorRadius        | number      | 锚点半径                                           |
| anchorBackground    | string      | 锚点背景颜色                                       |
| dockColor           | string      | 辅助线颜色                                         |
| dragColor           | string      | 鼠标框选多个节点时，边框颜色                       |
| animateColor        | string      | 连线动画颜色                                       |
| textColor           | string      | 文字颜色                                           |
| fontFamily          | string      | 文字字体                                           |
| fontSize            | number      | 文字大小                                           |
| lineHeight          | number      | 文字行高                                           |
| textAlign           | string      | 文字水平对齐方式                                   |
| textBaseline        | string      | 文字垂直对齐方式                                   |
| rotateCursor        | string      | 旋转控制点的鼠标样式                               |
| hoverCursor         | string      | 鼠标经过画笔的样式                                 |
| disableInput        | boolean     | 禁用双击弹出输入框                                 |
| disableRotate       | boolean     | 禁止旋转                                           |
| disableAnchor       | boolean     | 禁止设置锚点                                       |
| alwaysAnchor        | boolean     | 默认显示锚点                                       |
| autoAnchor          | boolean     | 连线时，自动选中节点锚点                           |
| disableEmptyLine    | boolean     | 禁止存在两端关联缺少的连线                         |
| disableRepeatLine   | boolean     | 禁止存在关联重复的连线                             |
| disableScale        | boolean     | 禁止画布缩放                                       |
| disableTranslate    | boolean     | 禁止画布移动                                       |
| disableDockLine     | boolean     | 取消辅助线                                         |
| rightMouseTranslate | boolean     | 禁止右键拖拽画布                                   |
| minScale            | number      | 画布最小缩放比例                                   |
| maxScale            | number      | 画布最大缩放比例                                   |
| keydown             | KeydownType | 快捷键监听对象，默认 canvas                        |
| grid                | boolean     | 是否显示网格                                       |
| gridColor           | string      | 网格颜色                                           |
| gridSize            | number      | 网格大小                                           |
| rule                | boolean     | 是否显示标尺                                       |
| ruleColor           | string      | 标尺颜色                                           |
| drawingLineName     | string      | 默认连线类型名称                                   |
| fromArrow           | string      | 默认连线起始箭头                                   |
| toArrow             | string      | 默认连线终点箭头                                   |
| autoPolyline        | boolean     | 是否自动计算多线段锚点                             |
| interval            | number      | 绘画帧时长                                         |
| animateInterval     | number      | 动画帧时长                                         |
| dragAllIn           | boolean     | 框选画笔时，是否需要全部在框选区域内               |
| scroll              | boolean     | 默认是否显示滚动条。与默认缩放互斥                 |

## 文件数据

通过 topology.data()函数获取，返回数据格式如下：

| 名称             | 类型                                            | 描述                                               |
| ---------------- | ----------------------------------------------- | -------------------------------------------------- |
| color            | string                                          | 画笔默认颜色，如果没特别设置，颜色包括：文字和边框 |
| activeColor      | string                                          | 画笔选中颜色                                       |
| activeBackground | string                                          | 画笔选中背景颜色                                   |
| pens             | [Pen[]](/topology-documents/tutorial/pen)       | 画笔数组                                           |
| x                | number                                          | 画布 x 偏移                                        |
| y                | number                                          | 画布 y 偏移                                        |
| scale            | number                                          | 画布缩放比例                                       |
| origin           | Point                                           | 画布原点                                           |
| center           | Point                                           | 画布缩放中心点                                     |
| locked           | [LockState](/topology-documents/api/pen#locked) | 画布锁定                                           |
| websocket        | string                                          | websocket 通信地址                                 |
| mqtt             | string                                          | mqtt 通信地址                                      |
| mqttTopics       | string                                          | mqtt 订阅主题                                      |
| background       | string                                          | 画布背景颜色                                       |
| socketCbJs       | string                                          | 消息通信回调函数 js 代码                           |
| socketCbFn       | Function                                        | 消息通信回调函数名                                 |
| initJs           | string                                          | 打开图纸后，执行的初始脚本                         |
| grid             | boolean                                         | 是否显示网格                                       |
| gridColor        | string                                          | 网格颜色                                           |
| gridSize         | number                                          | 网格大小                                           |
| rule             | boolean                                         | 是否显示标尺                                       |
| ruleColor        | string                                          | 标尺颜色                                           |
| fromArrow        | string                                          | 默认起始箭头                                       |
| toArrow          | string                                          | 默认终点箭头                                       |
| lineWidth        | number                                          | 默认线宽                                           |

## 成员属性

| 名称       | 类型                                     | 描述                                      |
| ---------- | ---------------------------------------- | ----------------------------------------- |
| canvas     | [Canvas](/topology-documents/api/canvas) | 绘画画板                                  |
| store      | [TopologyStore](#topologystore)          | 绘画数据。包括文件数据和各种状态数据等    |
| websocket  | WebSocket                                | 原生 WebSocket 客户端。仅连接成功才有实例 |
| mqttClient | Mqtt.Client                              | mqtt.js 通信客户端                        |

### TopologyStore

| 名称         | 类型                     | 描述                                              |
| ------------ | ------------------------ | ------------------------------------------------- |
| id           | string                   | 当前引擎实例 id。一个页面可以有多个可视化引擎实例 |
| data         | TopologyData             | 绘画（图纸）数据。包含自动计算的临时变量          |
| pens         | Object（id: pen）        | 画笔 map。方便检索 pen                            |
| active       | Pen[]                    | 选中的画笔。数组                                  |
| hover        | Pen                      | 鼠标经过活动的画笔。单 Pen                        |
| activeAnchor | Point                    | 选中的锚点                                        |
| hoverAnchor  | Point                    | 鼠标经过活动的锚点                                |
| animates     | Set                      | 正在播放动画的 pen                                |
| dpiRatio     | number                   | 高清屏比例。一般用户不用修改此值                  |
| clipboard    | Pen[]                    | 剪贴板内容                                        |
| histories    | EditAction[]             | 撤消重做内容                                      |
| historyIndex | number                   | 撤消重做游标                                      |
| options      | [Options](#options-选项) | 可视化引擎选项                                    |

## Function 函数

| 名称                                                                    | 描述                                |
| ----------------------------------------------------------------------- | ----------------------------------- |
| [constructor](/topology-documents/api/core#constructor)                 | 可视化引擎构造函数                  |
| [setOptions](/topology-documents/api/core#setOptions)                   | 设置引擎选项                        |
| [getOptions](/topology-documents/api/core#getOptions)                   | 获取引擎选项                        |
| [resize](/topology-documents/api/core#resize)                           | 重置画布大小                        |
| [addPen](/topology-documents/api/core#addPen)                           | 添加单个画笔                        |
| [addPens](/topology-documents/api/core#addPens)                         | 批量添加画笔                        |
| [render](/topology-documents/api/core#render)                           | 渲染（重绘）                        |
| [open](/topology-documents/api/core#open)                               | 打开图纸                            |
| [connectSocket](/topology-documents/api/core#connectSocket)             | 消息通信重连（默认自动连接）        |
| [drawLine](/topology-documents/api/core#drawLine)                       | 开始钢笔绘画                        |
| [drawingPencil](/topology-documents/api/core#drawingPencil)             | 开始铅笔绘画                        |
| [finishDrawLine](/topology-documents/api/core#finishDrawLine)           | 完成钢笔绘画                        |
| [finishPencil](/topology-documents/api/core#finishPencil)               | 完成铅笔绘画                        |
| [updateLineType](/topology-documents/api/core#updateLineType)           | 修改连线类型                        |
| [addDrawLineFn](/topology-documents/api/core#addDrawLineFn)             | 添加自定义连线绘画函数              |
| [removeDrawLineFn](/topology-documents/api/core#removeDrawLineFn)       | 移除自定义连线绘画函数              |
| [showMagnifier](/topology-documents/api/core#showMagnifier)             | 显示放大镜                          |
| [hideMagnifier](/topology-documents/api/core#hideMagnifier)             | 隐藏放大镜                          |
| [toggleMagnifier](/topology-documents/api/core#toggleMagnifier)         | 显示或隐藏放大镜                    |
| [clear](/topology-documents/api/core#clear)                             | 清空画布资源。打开空白图纸用 open() |
| [emit](/topology-documents/api/core#emit)                               | 发送自定义消息                      |
| [on](/topology-documents/api/core#on)                                   | 监听消息                            |
| [off](/topology-documents/api/core#off)                                 | 取消监听消息                        |
| [register](/topology-documents/api/core#register)                       | 注册画笔(Path2D 类型)               |
| [registerCanvasDraw](/topology-documents/api/core#registerCanvasDraw)   | 注册原生 canvas 上下文画笔          |
| [registerAnchors](/topology-documents/api/core#registerAnchors)         | 注册画笔锚点函数                    |
| [registerDock](/topology-documents/api/core#registerDock)               | 注册辅助线算法                      |
| [find](/topology-documents/api/core#find)                               | 查找画笔                            |
| [getPenRect](/topology-documents/api/core#getPenRect)                   | 获取画笔区域位置                    |
| [setPenRect](/topology-documents/api/core#setPenRect)                   | 设置画笔区域位置                    |
| [startAnimate](/topology-documents/api/core#startAnimate)               | 开始播放动画                        |
| [pauseAnimate](/topology-documents/api/core#pauseAnimate)               | 暂停动画                            |
| [stopAnimate](/topology-documents/api/core#stopAnimate)                 | 结束动画                            |
| [calcAnimateDuration](/topology-documents/api/core#calcAnimateDuration) | 计算动画时长                        |
| [combine](/topology-documents/api/core#combine)                         | 组合                                |
| [uncombine](/topology-documents/api/core#uncombine)                     | 取消组合                            |
| [active](/topology-documents/api/core#active)                           | 高亮选中画笔                        |
| [inactive](/topology-documents/api/core#inactive)                       | 取消高亮选中画笔                    |
| [delete](/topology-documents/api/core#delete)                           | 删除画笔                            |
| [scale](/topology-documents/api/core#scale)                             | 缩放画布                            |
| [translate](/topology-documents/api/core#translate)                     | 平移画布                            |
| [translatePens](/topology-documents/api/core#translatePens)             | 平移画笔                            |
| [getParent](/topology-documents/api/core#getParent)                     | 获取画笔父对象                      |
| [data](/topology-documents/api/core#data)                               | 图纸数据                            |
| [copy](/topology-documents/api/core#copy)                               | 复制                                |
| [cut](/topology-documents/api/core#cut)                                 | 剪切                                |
| [paste](/topology-documents/api/core#paste)                             | 粘贴                                |
| [undo](/topology-documents/api/core#undo)                               | 撤消                                |
| [redo](/topology-documents/api/core#redo)                               | 恢复                                |
| [connectWebsocket](/topology-documents/api/core#connectWebsocket)       | 手动连接 websocket。默认自动连接    |
| [closeWebsocket](/topology-documents/api/core#closeWebsocket)           | 关闭 websocket 连接                 |
| [connectMqtt](/topology-documents/api/core#connectMqtt)                 | 手动连接 mqtt 。默认自动连接        |
| [closeMqtt](/topology-documents/api/core#closeMqtt)                     | 关闭 mqtt 连接                      |
| [setValue](/topology-documents/api/core#setValue)                       | 设置修改画笔数据                    |
| [pushHistory](/topology-documents/api/core#pushHistory)                 | 添加一个编辑历史到队列              |
| [showInput](/topology-documents/api/core#showInput)                     | 显示文字输入框                      |
| [hideInput](/topology-documents/api/core#hideInput)                     | 隐藏文字输入框                      |
| [clearDropdownList](/topology-documents/api/core#clearDropdownList)     | 清除画笔下拉列表选项                |
| [pushChildren](/topology-documents/api/core#pushChildren)               | 给画笔添加子对象                    |
| [toPng](/topology-documents/api/core#toPng)                             | 生成 png 图像                       |
| [downloadPng](/topology-documents/api/core#downloadPng)                 | 下载 png                            |
| [getRect](/topology-documents/api/core#getRect)                         | 获取图纸区域                        |
| [fitView](/topology-documents/api/core#fitView)                         | 自适应屏幕显示                      |
| [gotoView](/topology-documents/api/core#gotoView)                       | 定位画笔到屏幕中心显示              |
| [centerView](/topology-documents/api/core#centerView)                   | 居中显示可视区域                    |
| [hasView](/topology-documents/api/core#hasView)                         | 画布是否有内容                      |
| [alignNodes](/topology-documents/api/core#alignNodes)                   | 节点对齐                            |
| [spaceBetween](/topology-documents/api/core#spaceBetween)               | 水平等分对齐                        |
| [spaceBetweenColumn](/topology-documents/api/core#spaceBetweenColumn)   | 垂直等分对齐                        |
| [layout](/topology-documents/api/core#layout)                           | 均匀分布排版                        |
| [showMap](/topology-documents/api/core#showMap)                         | 显示鹰眼地图                        |
| [hideMap](/topology-documents/api/core#hideMap)                         | 隐藏鹰眼地图                        |
| [toggleAnchorMode](/topology-documents/api/core#toggleAnchorMode)       | 切换锚点模式                        |
| [addAnchorHand](/topology-documents/api/core#addAnchorHand)             | 添加锚点手柄                        |
| [removeAnchorHand](/topology-documents/api/core#removeAnchorHand)       | 移除锚点手柄                        |
| [toggleAnchorHand](/topology-documents/api/core#toggleAnchorHand)       | 添加或移除锚点手柄                  |
| [top](/topology-documents/api/core#top)                                 | 置顶画笔                            |
| [bottom](/topology-documents/api/core#bottom)                           | 置底画笔                            |
| [up](/topology-documents/api/core#up)                                   | 向上移动画笔图层                    |
| [down](/topology-documents/api/core#down)                               | 向下移动画笔图层                    |
| [setLayer](/topology-documents/api/core#setLayer)                       | 指定画笔图层                        |
| [changePenId](/topology-documents/api/core#changePenId)                 | 修改画笔 id                         |
| [getLines](/topology-documents/api/core#getLines)                       | 获取关联连线                        |
| [nextNode](/topology-documents/api/core#nextNode)                       | 获取下一个节点                      |
| [previousNode](/topology-documents/api/core#previousNode)               | 获取前一个节点                      |
| [toComponent](/topology-documents/api/core#toComponent)                 | 生成自定义组件                      |
| [destroy](/topology-documents/api/core#destroy)                         | 销毁画布，清理资源内存。推荐调用    |
