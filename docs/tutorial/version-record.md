# 版本发布记录

## 1.1.0 next (下个版本发布时归到下个版本号)

### Bug fixes    

<br>

#### 父子画笔关系

父子画笔关系，子画笔最外层 x,y,width,height 属性一定是相对于父画笔的(之前存在绝对的情况，现已移除)。
即子最外层 width: 2， 实际宽度则是父画笔的两倍。[issue](https://github.com/le5le-com/topology.js/issues/22)

#### movingPens contain combine

在之前的版本中，若移动的是组合节点，移动路径中只会显示一个矩形，此次修改修复了该问题，即组合节点会显示具体的子节点。  
图片节点存在性能重绘问题，目前在移动中仍旧将其变成一个矩形。

