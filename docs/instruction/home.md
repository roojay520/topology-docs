# 用户使用手册

## 1 基本知识

### 1.1 画布

画布即绘画区域  

![le5le topology 画布](/img/huabu.png)

### 1.2 图形

绘画对象，分为节点和连线2种

#### 1.2.1 节点

节点是可以通过线连接到其他节点的零部件

![le5le topology 节点](/img/jiedian.png)

#### 1.2.2 连线

连线是用于绘画的线条，也可以是连接任意2个画笔对象的虚拟关系，用户可以连接任意2个节点绘制连线，也可以选择钢笔工具绘制连线

![le5le topology 连线](/img/lianxian2.gif)

### 1.3 菜单栏

顶部菜单导航，可设置Logo、公司名称、文件编辑、钢笔、铅笔、放大镜、地图、连线起点、连线终点、连线线宽、视图比例、自动锚点、锁定/解锁、预览、分享、帮助中心、语言、登录

![le5le topology 菜单栏](/img/caidanlan.png)

### 1.4 组件库

组件库功能：搜索、图纸、系统组件、我的组件、图形库管理

![le5le topology 组件库](/img/zujianku.png)

### 1.5 属性面板

<br/> 

#### 1.5.1 文件属性面板

![le5le topology 文件属性面板](/img/wenjianshuxingmianban.png)

#### 1.5.2 图形属性面板

![le5le topology 图形属性面板](/img/tuxingshuxingmianban.png)

#### 1.5.2 多选属性面板

![le5le topology 多选属性面板](/img/duoxuanshuxingmianban.png)

![le5le topology 多选对齐](/img/duoxuanduiqi.gif)

### 1.6 右键菜单

功能：置顶、置底、上一个图层、下一个图层、组合/取消组合、锁定、删除、撤销、恢复、剪切、复制、粘贴

![le5le topology 右键菜单](/img/youjiancaidan.png)

## 2 基本操作

### 2.1 文件

文件：文件的新建、打开、导入、保存、另存为、下载JOSN文件、下载ZIP打包文件、导出为HTML、下载为PNG、下载为SVG

![le5le topology 文件](/img/wenjian.png)

#### 2.1.1 新建文件

![le5le topology 新建文件](/img/xinjianwenjian.png)

#### 2.1.2 编辑文件

 编辑：添加/删除锚点（A）、添加手柄（H）、删除手柄（D）、切换手柄类型（Shift）

     切换手柄类型（Shift）可切换三种类型：①两端手柄完全对称 ②一端手柄可以任意伸缩长度 ③一端手柄可以任意伸缩长度和变换角度

节点（包括图形、图片等）和连线都可以添加/删除锚点

![le5le topology 编辑文件](/img/bianji.gif)

![le5le topology 添加锚点](/img/tianjiamaodian.gif)

#### 2.1.3 保存文件

![le5le topology 保存文件](/img/baocun.png)

#### 2.1.4 文件下载

![le5le topology 文件下载](/img/xiazai.gif)

#### 2.1.5 文件属性设置

<br/> 

##### 2.1.5.1 设置文件名  

![le5le topology 设置文件名](/img/shezhiwenjianming.png)

##### 2.1.5.2 设置画布属性

锁：无、禁止编辑、禁止移动、禁用

![le5le topology 设置画布属性](/img/shezhihuabushuxing.png)

背景颜色

![le5le topology 背景颜色](/img/beijingyanse.png)

背景网格、网格颜色、网格大小

![le5le topology 背景网格](/img/beijingwangge.png)

标尺、标尺颜色

![le5le topology 标尺](/img/biaochi.png)

##### 2.1.5.3 设置文件通信

支持websocket或MQTT协议，能够“0代码”实现消息通信、数据实时修改和触发事件交互。

![le5le topology 设置文件通信](/img/tongxin.png)

##### 2.1.5.4 设置文件布局

​画布和组合组件的排版布局

![le5le topology 设置文件布局](/img/buju.gif)

##### 2.1.5.5 设置文件结构

可编辑：可以编辑属性事件  
被锁定：可以执行事件和交互  
被禁用 ：不能选中，完全不出发任何事件，可以当背景底图 

![le5le topology 设置文件结构](/img/jiegou.gif)

### 2.2 拖拽编辑

可拖拽任意节点到画布

![le5le topology 拖拽编辑](/img/tuozhuai.gif)

也可以单击选定节点，再单击画布放置节点

![le5le topology 拖拽编辑](/img/tuozhuai03.gif)

### 2.3 连线

曲线

![le5le topology 连线](/img/lianxian.gif)

线段

![le5le topology 线段](/img/xianduan.png)

直线

![le5le topology 直线](/img/zhixian.png)

脑图曲线

![le5le topology 脑图曲线](/img/naotuquxian.gif)

起点样式

![le5le topology 起点样式](/img/qidian.png)

终点样式

![le5le topology 终点样式](/img/zhongdian.png)

线宽

![le5le topology 线宽](/img/xiankuan.png)

### 2.4 外观设置

<br/> 

#### 2.4.1 位置和大小

设置节点的外观样式

角度：设置尖角与圆角，值的范围：0~1

旋转：设置图形的旋转角度

进度：任意封闭图形，都可以当进度条：矩形、圆、svg、封闭连线、或其他任意封闭图形，值的范围：0~1

![le5le topology 位置和大小](/img/weizhidaxiao.png)

案例：“全民”进度条

![le5le topology 进度条](/img/jindutiao.png)

#### 2.4.2 样式

设置连线的外观样式

![le5le topology 连线外观](/img/lianxianwaiguan01.gif)

案例：用连线丰富的外观属性，绘制武地铁线路图demo

![le5le topology 连线案例](/img/wuhanditie.png)

#### 2.4.3 文字

![le5le topology 文字外观](/img/wenziwaiguan.gif)

#### 2.4.3 图片

![le5le topology 图片外观](/img/tupianwaiguan.gif)

#### 2.4.4 字体图标

![le5le topology 字体图标外观](/img/aliziti.gif)

## 3 事件

添加相应事件，即可实现相应的事件行为

事件类型：鼠标移入、鼠标移出、选中、取消选中、鼠标按下、鼠标弹起、单击、双击

事件行为：打开链接、更改属性、执行动画、暂停动画、停止动画、执行JavaStript、执行Window函数、自定义消息

条件触发器：根据数据触发报警

![le5le topology 事件](/img/shijian.gif)

## 4 动画

### **4.1 节点动画**

给节点添加动画、鼠标提示，设置动画时长、动画效果、循环次数、下个动画tag、是否自动播放、是否保持动画状态

动画效果：无、上下跳动、左右跳动、心跳、成功、警告、错误、炫耀、自定义

![le5le topology 节点动画](/img/donghua.gif)

自定义动画：

![le5le topology 自定义动画](/img/zidingyidonghua02.gif)

![le5le topology 自定义动画](/img/zidingyidonghua03.gif)

### **4.2 连线动画**

给连线添加动画、鼠标提示，设置动画效果、动画颜色、动画速度、正反流动方向、循环次数、下个动画tag、是否自动播放、是否保持动画状态

动画效果：水流、水珠流动、圆点

![le5le topology 连线动画](/img/lianxiandonghua.gif)

案例：连线动画常常用于展示管道水流/能源等流动方向

![le5le topology 连线动画案例](/img/lianxiandonghuaanli.gif)

### **4.3 鼠标提示**

参考Markdown语法编写鼠标提示

![le5le topology 鼠标提示](/img/shubiaotishi.gif)

### **4.4 视频video**

video标签支持MP4、WebM、Ogg 三种格式

![le5le topology 视频video](/img/shipin.gif)

### **4.5 网页iframe**

![le5le topology 网页iframe](/img/wangye.gif)

## 5 消息通信

### **5.1 mqtt通信**

参考：[开发教程 - 实时数据通讯](../tutorial/data#mqtt)

### **5.2 websocket通信**

参考：[开发教程 - 实时数据通讯](../tutorial/data#websocket)

## 6 常用菜单基本命令

### **6.1 钢笔**

开始：单击左键

暂停：单击右键   或   enter

结束：esc

闭合/取消闭合：enter

![le5le topology 钢笔](/img/gangbi.gif)

### **6.2 铅笔**

开始：连续拖动左键

暂停：释放左键

结束：esc

闭合/取消闭合：enter

![le5le topology 铅笔](/img/qianbi.gif)

### **6.3 放大镜**

![le5le topology 放大镜](/img/fangdajing.gif)

### **6.4 地图**

![le5le topology 地图](/img/ditu.gif)

### **6.5 自动锚点**

​开启时自动选择2个最近锚点，关闭时可自由选择锚点

![le5le topology 自动锚点](/img/zidongmaodian.gif)

## 7 组件库

### 7.1 图纸

新建文件夹、新建图纸、删除文件夹、删除图纸

![le5le topology 图纸](/img/tuzhi.gif)

### 7.2 系统组件

搜索：输入关键词可以搜索相应的系统组件
取消搜索：删除关键词，回车

![le5le topology 搜索组件](/img/sousuozujian.gif)

图形库管理：不常用的图形可以取消勾选，提升加载速度

![le5le topology 系统组件](/img/xitongzujian.gif)

### 7.3 我的组件

新建文件夹、上传图片、创建组件、删除文件夹、删除我的组件

![le5le topology 我的组件](/img/wodezujian.gif)

## 8 图形库

乐吾乐图形库一共分为三大类：基础图形库、电力图形库、物联网图形库，总共约3700个图元，能满足大部分行业的基本需求。
格式有三种：原生代码（JS）、阿里字体（iconfont）、图片（svg、gif），企业版已经写好固定的逻辑，支持良好。
​

点击查看：[http://t.le5le.com/](http://t.le5le.com/)

![le5le topology 图形库](/img/tuxingku.png)

### 8.1 基础图形库

| 序号 | 类别         | 格式 | 数量 |
| ---- | ------------ | ---- | ---- |
| 1    | 基本形状     | js   | 24   |
| 2    | 脑图         | js   | 2    |
| 3    | 箭头         | js   | 34   |
| 4    | 流程图       | js   | 16   |
| 5    | 活动图       | js   | 8    |
| 6    | 时序图和类图 | js   | 4    |
| 7    | 拓扑图未分类 | js   | 54   |
| 8    | Echarts图表  | js   | 4    |
| 合计 |              |      | 146  |

### 8.2 电力图形库

| 序号 | 类别                   | 格式     | 数量 |
| ---- | ---------------------- | -------- | ---- |
| 1    | 逻辑门电路             | js       | 27   |
| 2    | 电阻                   | js       | 23   |
| 3    | 电容                   | js       | 16   |
| 4    | 电感                   | js       | 39   |
| 5    | 开关、转换器           | js       | 46   |
| 6    | 二极管                 | js       | 13   |
| 7    | 信号源                 | js       | 29   |
| 8    | 晶体管                 | js       | 72   |
| 9    | 仪表                   | js       | 5    |
| 10   | 电子显示设备           | js       | 15   |
| 11   | 真空电子管             | js       | 7    |
| 12   | 电子波形               | js       | 23   |
| 13   | 转动与机械设备         | js       | 15   |
| 14   | 电子逻辑计算器         | js       | 10   |
| 15   | 电子传输/传播          | js       | 17   |
| 16   | 电子未分类             | js       | 147  |
| 17   | 液压符号               | js       | 245  |
| 18   | 电气工程常用字母和符号 | iconfont | 578  |
| 19   | 国家电网图元规范       | iconfont | 344  |
| 合计 |                        |          | 1671 |

### 8.3  物联网图形库

| 序号 | 类别                                  | 格式     | 数量 |
| ---- | ------------------------------------- | -------- | ---- |
| 1    | 云                                    | js       | 313  |
| 2    | 工业物联网                            | js       | 2    |
| 3    | 网络设备                              | js       | 81   |
| 4    | 电子产品                              | js       | 147  |
| 5    | 楼宇                                  | js       | 37   |
| 6    | 物联网未分类                          | js       | 35   |
| 7    | Iot-MNMS（移动网管域）                | svg      | 6    |
| 8    | City（城市）                          | svg      | 21   |
| 9    | Iot-pump（泵）                        | svg、gif | 40   |
| 10   | Iot-HVAC（暖通空调）                  | svg、gif | 35   |
| 11   | Iot-waste water treatment（废水处理） | svg、gif | 129  |
| 12   | Iot-Boilers（锅炉）                   | svg      | 21   |
| 13   | Iot-process heating（制程加热）       | svg      | 20   |
| 14   | Weather（天气）                       | svg      | 51   |
| 15   | Iot-Labortory（实验室）               | svg      | 19   |
| 16   | 鞋子专属定制                          | svg      | 9    |
| 17   | 2.5D Room（2.5D房间）                 | svg      | 16   |
| 18   | Iot-logistics（物流）                 | svg      | 35   |
| 19   | Iot-water tank（水槽）                | svg      | 95   |
| 20   | Iot-Food（食品）                      | svg      | 60   |
| 21   | Iot-building（建筑）                  | svg      | 9    |
| 22   | Iot-machining（机器）                 | svg      | 60   |
| 23   | Iot-CONTAINERS（容器）                | svg      | 14   |
| 24   | Iot-light（灯）                       | svg      | 18   |
| 25   | Iot-PIPES（管道）                     | svg      | 21   |
| 26   | Iot-valve symbols（阀门符号）         | svg      | 32   |
| 27   | Iot-WIRE（电线电缆）                  | svg      | 13   |
| 28   | Iot-Material Handing（物料运输）      | svg      | 55   |
| 29   | Iot-Flow Meters（流量计）             | svg      | 24   |
| 30   | Iot-buttom（按钮）                    | svg      | 40   |
| 31   | Iot-MIXERS（搅拌器）                  | svg      | 21   |
| 32   | Iot-process cooling（制程冷却）       | svg      | 22   |
| 33   | Iot-SAFETY（安全）                    | svg      | 27   |
| 34   | Iot-Chemical（化学）                  | svg      | 36   |
| 35   | Iot-power（电源）                     | svg      | 58   |
| 36   | Iot-valve（阀门）                     | svg      | 20   |
| 37   | Iot-Plant Facilities（工厂设施）      | svg      | 36   |
| 38   | Iot-Meter（仪表）                     | svg      | 12   |
| 39   | Iot-Motors（发动机）                  | svg      | 18   |
| 40   | Iot-Computer Keys（电脑按键）         | svg      | 94   |
| 41   | Iot-Blowers（鼓风机）                 | svg、gif | 18   |
| 42   | 大屏可视化                            | svg      | 19   |
| 合计 |                                       |          | 1839 |
