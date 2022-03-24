# 版本发布记录

## 1.1.0 after (下个版本发布时归到下个版本号)

### Bug fixes

1. 父子画笔关系，子画笔最外层 x,y,width,height 属性一定是相对于父画笔的(之前存在绝对的情况，现已移除)。
即子最外层 width: 2， 实际宽度则是父画笔的两倍。[issue](https://github.com/le5le-com/topology.js/issues/22)
