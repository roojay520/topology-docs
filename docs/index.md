---
home: true
heroImage: /img/logo.png
heroAlt: Le5le Topology
heroText: 乐吾乐Topology
tagline: 新一代智能可视化引擎
actionText: 开始上手
actionLink: /tutorial/start
features:
  - title: 动态智能
    details: 集动态交互、丰富展示、数据管理等一体的全功能可视化引擎，为物联网、工业互联网、电力能力、水利工程、智慧农业、智能医疗、智慧城市等智能可视化场景而生。
  - title: 开箱即用
    details: 提供快速本地部署安装包、桌面版，无需开发，快速体验；Topology-vue组件一键导入，方便快捷；一分钟快速上手指南、丰富的Github代码示例等，快速上手开发。
  - title: 定制扩展
    details: 引擎提供了丰富的接口，支持不同场景应用开发；画笔、图元、连线等自由定制、插件式扩展，实现绚丽多变的视觉呈现；动画、数据管理、自动算法等皆可自主设计，提供更多可能。

footer: Copyright © 2020-present le5le.com
---

### As Easy as 1, 2, 3

```bash
# install topology
yarn add -D @topology/core
...

# register
import { Topology } from '@topology/core';
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
import { register as registerChart } from '@topology/chart-diagram';
...

# create a topology on: <div id="topology"></div>
registerFlow();
registerActivity()
...
new Topology('topology');

# open a json
topology.open(json);

```
