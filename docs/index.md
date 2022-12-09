---
home: true
title: 开发者中心
pageClass: le5le-home
# heroImage: /img/home.png
heroAlt: Le5le Meta2d
heroText: 乐吾乐 Meta2d
tagline: 全新web可视化引擎
actionText: 开始上手
actionLink: /tutorial/start
features:
  - title: 高效、卓越
    details: 数据为核心、数据驱动显示，数据+ 算法 + 风格 = 栩栩如生；多状态呈现，进度、动效多角度动态展示；支持1万+以上节点、1000+动画
  - title: 实时监听、交互响应
    details: 实时动态数据监听；画笔全生命周期事件（创建、更新、销毁）；鼠标进入、移出、单击、选中等事件；移动、缩放、旋转等事件；网络消息事件；动画、视频播放事件；文本输入事件
  - title: 可扩展、丰富场景
    details: 可定制化开发图形库；支持自动算法、业务算法等中间件扩展；架构拓扑图、UML图、脑图，电力能源、水利，物联网、工业互联网，智慧城市、智慧医疗、智慧农业，大屏展示、IT运维等多场景支持

footer: Copyright © 2020-present le5le.com
---

```bash
# Install meta2d
yarn add -D @meta2d/core
...

# Register
import { Meta2d } from '@meta2d/core';
import { register as registerMyDiagram } from 'my-diagram';

# <div id="meta2d"></div>
new Meta2d('meta2d');

registerMyDiagram();

# Open a json
meta2d.open(json);

```
