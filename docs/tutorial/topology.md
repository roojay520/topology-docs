# 画布

画布是 topology 的核心，所有展示和交互都在画布上呈现。

**默认，会在 window 全局对象下注入 topology 对象，表示当前 topology 实例。**

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
```

## Options 选项

| 名称                 | 类型        | 描述                                               |
| -------------------- | ----------- | -------------------------------------------------- |
| color                | string      | 画笔默认颜色，如果没特别设置，颜色包括：文字和边框 |
| activeColor          | string      | 画笔选中颜色                                       |
| activeBackground     | string      | 画笔选中背景颜色                                   |
| hoverColor           | string      |                                                    |
| hoverBackground      | string      |                                                    |
| anchorColor          | string      |                                                    |
| anchorRadius         | number      |                                                    |
| anchorBackground     | string      |                                                    |
| dockColor            | string      |                                                    |
| dockBackground       | string      |                                                    |
| dragColor            | string      |                                                    |
| animateColor         | string      |                                                    |
| textColor            | string      |                                                    |
| fontFamily           | string      |                                                    |
| fontSize             | number      |                                                    |
| lineHeight           | number      |                                                    |
| textAlign            | string      |                                                    |
| textBaseline         | string      |                                                    |
| rotateCursor         | string      |                                                    |
| hoverCursor          | string      |                                                    |
| disableInput         | boolean     |                                                    |
| disableRotate        | boolean     |                                                    |
| disableSize          | boolean     |                                                    |
| disableAnchor        | boolean     |                                                    |
| disableWidth         | boolean     |                                                    |
| disableHeight        | boolean     |                                                    |
| alwaysAnchor         | boolean     |                                                    |
| autoAnchor           | boolean     |                                                    |
| disableEmptyLine     | boolean     |                                                    |
| disableRepeatLine    | boolean     |                                                    |
| disableScale         | boolean     |                                                    |
| disableTranslate     | boolean     |                                                    |
| disableMoveOutParent | boolean     |                                                    |
| disableDockLine      | boolean     |                                                    |
| playIcon             | string      |                                                    |
| pauseIcon            | string      |                                                    |
| fullScreenIcon       | string      |                                                    |
| loopIcon             | string      |                                                    |
| rightMouseTranslate  | boolean     |                                                    |
| minScale             | number      |                                                    |
| maxScale             | number      |                                                    |
| keydown              | KeydownType |                                                    |
| viewPadding          | Padding     |                                                    |
| background           | string      |                                                    |
| grid                 | boolean     |                                                    |
| gridColor            | string      |                                                    |
| gridSize             | number      |                                                    |
| rule                 | boolean     |                                                    |
| ruleColor            | string      |                                                    |
| drawingLineName      | string      |                                                    |
| fromArrow            | string      |                                                    |
| toArrow              | string      |                                                    |
| autoPolyline         | boolean     |                                                    |
| interval             | number      |                                                    |
| animateInterval      | number      |                                                    |
| dragAllIn            | boolean     |                                                    |
| scroll               | boolean     |                                                    |

## Function 函数

| 名称                                                 | 描述                                               |
| ---------------------------------------------------- | -------------------------------------------------- |
| [constructor](/api/core#constructor)                 | 画笔默认颜色，如果没特别设置，颜色包括：文字和边框 |
| [setOptions](/api/core#setOptions)                   |                                                    |
| [getOptions](/api/core#getOptions)                   |                                                    |
| [initEventFns](/api/core#initEventFns)               |                                                    |
| [resize](/api/core#resize)                           |                                                    |
| [addPen](/api/core#addPen)                           |                                                    |
| [addPens](/api/core#addPens)                         |                                                    |
| [render](/api/core#render)                           |                                                    |
| [open](/api/core#open)                               |                                                    |
| [connectSocket](/api/core#connectSocket)             |                                                    |
| [drawLine](/api/core#drawLine)                       |                                                    |
| [drawingPencil](/api/core#drawingPencil)             |                                                    |
| [finishDrawLine](/api/core#finishDrawLine)           |                                                    |
| [finishPencil](/api/core#finishPencil)               |                                                    |
| [updateLineType](/api/core#updateLineType)           |                                                    |
| [addDrawLineFn](/api/core#addDrawLineFn)             |                                                    |
| [removeDrawLineFn](/api/core#removeDrawLineFn)       |                                                    |
| [showMagnifier](/api/core#showMagnifier)             |                                                    |
| [hideMagnifier](/api/core#hideMagnifier)             |                                                    |
| [toggleMagnifier](/api/core#toggleMagnifier)         |                                                    |
| [clear](/api/core#clear)                             |                                                    |
| [emit](/api/core#emit)                               |                                                    |
| [on](/api/core#on)                                   |                                                    |
| [off](/api/core#off)                                 |                                                    |
| [register](/api/core#register)                       |                                                    |
| [registerCanvasDraw](/api/core#registerCanvasDraw)   |                                                    |
| [registerAnchors](/api/core#registerAnchors)         |                                                    |
| [registerDock](/api/core#registerDock)               |                                                    |
| [find](/api/core#find)                               |                                                    |
| [getPenRect](/api/core#getPenRect)                   |                                                    |
| [setPenRect](/api/core#setPenRect)                   |                                                    |
| [startAnimate](/api/core#startAnimate)               |                                                    |
| [pauseAnimate](/api/core#pauseAnimate)               |                                                    |
| [stopAnimate](/api/core#stopAnimate)                 |                                                    |
| [calcAnimateDuration](/api/core#calcAnimateDuration) |                                                    |
| [combine](/api/core#combine)                         |                                                    |
| [uncombine](/api/core#uncombine)                     |                                                    |
| [active](/api/core#active)                           |                                                    |
| [inactive](/api/core#inactive)                       |                                                    |
| [delete](/api/core#delete)                           |                                                    |
| [scale](/api/core#scale)                             |                                                    |
| [translate](/api/core#translate)                     |                                                    |
| [translatePens](/api/core#translatePens)             |                                                    |
| [getParent](/api/core#getParent)                     |                                                    |
| [data](/api/core#data)                               |                                                    |
| [copy](/api/core#copy)                               |                                                    |
| [cut](/api/core#cut)                                 |                                                    |
| [paste](/api/core#paste)                             |                                                    |
| [undo](/api/core#undo)                               |                                                    |
| [redo](/api/core#redo)                               |                                                    |
| [listenSocket](/api/core#listenSocket)               |                                                    |
| [connectWebsocket](/api/core#connectWebsocket)       |                                                    |
| [closeWebsocket](/api/core#closeWebsocket)           |                                                    |
| [connectMqtt](/api/core#connectMqtt)                 |                                                    |
| [closeMqtt](/api/core#closeMqtt)                     |                                                    |
| [doSocket](/api/core#doSocket)                       |                                                    |
| [closeMqtt](/api/core#closeMqtt)                     |                                                    |
| [doSocket](/api/core#doSocket)                       |                                                    |
| [setValue](/api/core#setValue)                       |                                                    |
| [pushHistory](/api/core#pushHistory)                 |                                                    |
| [showInput](/api/core#showInput)                     |                                                    |
| [hideInput](/api/core#hideInput)                     |                                                    |
| [clearDropdownList](/api/core#clearDropdownList)     |                                                    |
| [pushChildren](/api/core#pushChildren)               |                                                    |
| [renderPenRaw](/api/core#renderPenRaw)               |                                                    |
| [toPng](/api/core#toPng)                             |                                                    |
| [downloadPng](/api/core#downloadPng)                 |                                                    |
| [getRect](/api/core#getRect)                         |                                                    |
| [fitView](/api/core#fitView)                         |                                                    |
| [alignNodes](/api/core#alignNodes)                   |                                                    |
| [spaceBetween](/api/core#spaceBetween)               |                                                    |
| [spaceBetweenColumn](/api/core#spaceBetweenColumn)   |                                                    |
| [layout](/api/core#layout)                           |                                                    |
| [showMap](/api/core#showMap)                         |                                                    |
| [hideMap](/api/core#hideMap)                         |                                                    |
| [onSizeUpdate](/api/core#onSizeUpdate)               |                                                    |
| [toggleAnchorMode](/api/core#toggleAnchorMode)       |                                                    |
| [addAnchorHand](/api/core#addAnchorHand)             |                                                    |
| [removeAnchorHand](/api/core#removeAnchorHand)       |                                                    |
| [toggleAnchorHand](/api/core#toggleAnchorHand)       |                                                    |
| [top](/api/core#top)                                 |                                                    |
| [bottom](/api/core#bottom)                           |                                                    |
| [up](/api/core#up)                                   |                                                    |
| [down](/api/core#down)                               |                                                    |
| [setLayer](/api/core#setLayer)                       |                                                    |
| [changePenId](/api/core#changePenId)                 |                                                    |
| [getLines](/api/core#getLines)                       |                                                    |
| [nextNode](/api/core#nextNode)                       |                                                    |
| [previousNode](/api/core#previousNode)               |                                                    |
| [destroy](/api/core#destroy)                         |                                                    |




## Data 数据

| 名称             | 类型      | 描述                                               |
| ---------------- | --------- | -------------------------------------------------- |
| color            | string    | 画笔默认颜色，如果没特别设置，颜色包括：文字和边框 |
| activeColor      | string    | 画笔选中颜色                                       |
| activeBackground | string    | 画笔选中背景颜色                                   |
| pens             | Pen       |                                                    |
| x                | number    |                                                    |
| y                | number    |                                                    |
| scale            | number    |                                                    |
| origin           | Point     |                                                    |
| center           | Point     |                                                    |
| locked           | LockState |                                                    |
| websocket        | string    |                                                    |
| mqtt             | string    |                                                    |
| mqttTopics       | string    |                                                    |
| background       | string    |                                                    |
| socketCbJs       | string    |                                                    |
| socketCbFn       | Function  |                                                    |
| initJs           | string    |                                                    |
| grid             | boolean   |                                                    |
| ruleColor        | string    |                                                    |
| fromArrow        | string    |                                                    |
| toArrow          | string    |                                                    |
| lineWidth        | number    |                                                    |