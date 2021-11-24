# 消息事件

topology 支持订阅和发送消息，使用(内置)：[mitt](https://github.com/developit/mitt)

很多交互操作，都通过 mitt 发送消息

## 发送数据/自定义消息

```js
// data 可以为任意数据
topology.emit('event', data);
```

## 监听消息（订阅）

```js
const fn = (event, data) => {};
topology.on('event', fn);
// 不用时，又不销毁topology实例，记得取消订阅。
```

## 取消监听

```js
const fn = (event, data) => {};
// 订阅
topology.on('event', fn);

// 取消订阅
topology.off('event', fn);
```

## 内置 API 消息

| **event（字符串）** | **data**     | **描述**                         |
| ------------------- | ------------ | -------------------------------- |
| opened              |              | 打开新文件                       |
| enter               | Pen          | 鼠标进入画笔                     |
| leave               | Pen          | 鼠标离开画笔                     |
| active              | Pen[]        | 选中一个/多个画笔                |
| inactive            | Pen[]        | 取消选中                         |
| add                 | Pen          | 添加一个画笔                     |
| update              | Pen[]        | 编辑画笔                         |
| delete              | Pen[]        | 删除画笔                         |
| scale               | number       | 缩放画布                         |
| translate           | Object: x, y | 平移画布                         |
| resizePens          | Pen[]        | 画笔大小改变                     |
| rotatePens          | Pen[]        | 画笔被旋转                       |
| translatePens       | Pen[]        | 移动画笔                         |
| click               | Point & Pen  | 点击，鼠标右键 up                |
| mousedown           | Point & Pen  | 鼠标右键 down                    |
| dblclick            | Point & Pen  | 双击                             |
| animateEnd          |              | 单个画笔动画播放完成             |
| mediaEnd            | Pen          | 视频/音频（audio/video）播放结束 |
| socket              | message      | 监听网络消息                     |
| undo                |              | 撤销后                           |
| redo                |              | 恢复后                           |
| clickInput          |              | 单击输入框                       |
| input               | pen & text   | 输入框键盘输入                   |
| valueUpdate         | pen          | 修改属性值                       |
| contextmenu         | e & bounding | 右键上下文菜单                   |
