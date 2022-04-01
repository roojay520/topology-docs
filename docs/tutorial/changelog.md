# 更新日志

## 1.1.2 next

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
  
## 1.1.1 next

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
