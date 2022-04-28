# 更新日志

## 1.1.8 next

### Bug fixes

- **measureTextWidth option 使用 ctx.measureText**

  代替原来的近似计算，现采用 ctx.measureText 来计算，可通过 options.measureTextWidth false 采用近似计算

### Features

## 1.1.8

### Bug fixes

- **showChild 不可更改 visible 属性，toPng 计算 showChild**

### Features

- **线连接线，按下 alt 键合并连线**

  原来不按快捷键也会合并连线，可能不是用户想要的，先按下 alt 键才会合并连线。

- **在线上锚点 hover，按下 s 快捷键 可切断成两条线**

## 1.1.7

### Bug fixes

- **maxRows 最小为1**

  之前未考虑到负数的情况。

- **movedActivePens 方法内，单独处理 dirtyLines**

  movedActivePens 方法内的 updateLines 执行的晚，导致 line 的 calculative 可能不正确，方法内再单独处理 dirtyLines 。

- **setValue, updateValue 更改坐标不再需要传 x,y,width,height 四个值**

  传入修改值即可，并且修复 bug [Github issue 47](https://github.com/le5le-com/topology.js/issues/47)

- **updateValue 若传入 width 与 rotate，先更改坐标再更改 rotate**

  修复[Github issue 324](https://github.com/le5le-com/topology/issues/324)

- **toComponent 生成可复用的组件图形，不可影响原画布数据**

  修复[Github issue 46](https://github.com/le5le-com/topology.js/issues/46)

- **getPenRect setPenRect 计算子节点不使用 origin 和 scale**

- **showChild 会改变 visible false or true**
  
### Features

- **highcharts 数据更新**

  参照 echarts 文档的中数据更新实现。@topology/chart-diagram 1.0.5

- **toPng 添加一个参数，下载图片中包含 bkImage**

  downloadPng 下载的图片中，包含背景图片。
  [Github issue 49](https://github.com/le5le-com/topology.js/issues/49)

## 1.1.6

### Features

- **cube 设置斜率**

  cube z 属性可以设置斜率， flowData offsetX 可设置斜率（需更新 flow-diagram 1.0.2 ）

## 1.1.5

### Bug fixes

- **createStore paths {}**

  创建 store 时，data 中的 path 需是空对象。

- **maxRows 最小为 1**

- **calcInView 可以计算子**

  两个组合节点，再组合成状态，未及时计算计算子 inView

- **toPng 不包含 visible == false 的画笔**

- **showChild 改变 visible 属性**

  使 showChild 不展示的子节点，不会出现在 toPng 中

- **移动的画笔 movingPens 不展示 inView == false 的画笔**

- **空白画布开缩略图，点击出现问题**

  修复[Github issue 33](https://github.com/le5le-com/topology.js/issues/33)

- **highChart 生成的 dom 绑定了 id**

  修改 id 后，需要更改对应的 dom id.

- **top 和 bottom 置顶置底修改自身以及子节点**

  不影响当前节点与子节点的顺序关系。

- **pushChildren 添加历史记录**

  pushChildren 添加历史记录，可回退。

### Features

- **beforeRemovePen 更改为 beforeRemovePens 并实现它**

  beforeRemovePens 移除前的生命周期，常用场景：可弹出对话框确认删除。

- **新增 beforeAddPens beforeAddAnchor beforeRemoveAnchor**

## 1.1.4


### Bug fixes

- **背景图片设置到最底层的 canvas**

  背景图片本来在中间层的 canvas 上，移动到底层 canvas dom 上。

- **globalStore.paths 移除**

  globalStore.paths 移除，使用 store.data.paths .


- **gif onValue**

  gif 图片 src 获取使用 getAttribute .

- **changePenId 修改父子 id 关系，修改连接线 id**

  修复：[Github issue 32](https://github.com/le5le-com/topology.js/issues/32)  


### Features

- **地图可视框**

  地图功能提供一个可视框，当前能看见的区域在蓝色框中。

## 1.1.3

### Bug fixes

- **缩放撤销**

  修复：[Github issue 11](https://github.com/le5le-com/topology.js/issues/11)  

- **disableAnchor 重构**
  
  原 disableAnchor 使 worldAnchors 成为空数组，现 disableAnchor 只是不绘制图形瞄点，不允许连线，不允许移动线锚点，不允许操作线手柄。  
  修复：[Github issue 23](https://github.com/le5le-com/topology.js/issues/23)

- **image canvas render**

  选择一个矩形节点，设置图片，随后清除图片，图片层画布更新不及时。 bug 已修复

- **不同的缩放比，复制粘贴**

  在不同的缩放比下，复制粘贴不改变 getPenRect 的结果。

- **下载 svg bug**

  修复：svg 可下载 icon
  
- **下载 png**
  
  若画布宽不合法，抛出一个错误。

- **图片 icon 互斥**

- **下载 png active 状态取消**

- **setPenRect 执行 onResize 生命周期**

  修复：[Github issue 26](https://github.com/le5le-com/topology.js/issues/26)

### Features

- **移动线锚点，连接另一条线**

  合并连线，使另一条线的瞄点归并到 active 的线上，成为一条连线，舍弃另一条线，其它状态例如颜色均采用 active 线值。

- **新增 lock 方法**

  调用会关闭钢笔铅笔。
  
## 1.1.2

### Bug fixes

- **slider图元**

  修复：通过topology.open()方式打开不显示问题

- **复制粘贴**

  修复：跨标签页复制粘贴 组合节点 问题

- **撤销 dom 类型画笔**

  修复：[Github issue 20](https://github.com/le5le-com/topology.js/issues/20)  

- **置顶置底图片节点**

  修复：当图片在同一层时，置顶置底未 render 图片层

- **图片水平垂直翻转**

  修复：图片水平垂直翻转

- **组合翻转**

  修复：翻转重构， flip 枚举变成了 flipX 和 flipY 属性，[Github issue 22](https://github.com/le5le-com/topology.js/issues/18)

- **组合旋转撤销**

  修复：组合旋转撤销

- **setValue rotate**

  通过 setValue 修改 rotate 属性，若是组合并且修改子节点属性。

- **setProps visible**

  通过事件更改属性 setProps 更改其它组合节点的 visible 属性，隐藏或显示。

- **moving 包含连线**

  移动包含连接线时，无需 translateLine .

- **combine status 组合为状态包含 dom**
  
  组合为状态包含 dom 类型节点时，切换状态，dom 节点也隐藏。

- **combine 子节点与父同样大它作为父**

  combine 子节点与父相同时，历史记录问题，已修复。

## 1.1.1

2022-03-24

### Bug fixes

- **父子坐标计算**

  修复 [Github issue 22](https://github.com/le5le-com/topology.js/issues/22)

- **页面切换动画显示**

  修复：页面切换到后台再切换到前台，动画闪烁

- **页面最小化动画显示**

  修复：页面最小化切换到后台再切换到前台，动画闪烁

- **连线动画**

  修复：页面切换到后台再切换到前台，动画闪烁

- **动画位置**

  修复：动画播放有位置变化时，移动画笔位置计算问题

### Features

- **移动节点新增更多显示细节**

  之前移动组合节点，只显示一个矩形；现在会显示具体的子节点。
