# 表单

表单控件包含：按钮、单选框、多选框、开关、滑动输入条、输入框和选择器。

## button 按钮

- **数据**

按钮本质上和 rectangle 一样，但为了达到按钮的效果，我们需要配置一些样式属性。

- **使用**

```js
const button = {
  name: "button",
  x: 100,
  y: 100,
  width: 50,
  height: 30,
  borderRadius: 0.2,
  text: "按钮",
  background: "#1890ff",
  color: "#1890ff",
  textColor: "#ffffff",
  activeBackground: "#40a9ff", //选中
  activeColor: "#40a9ff",
  activeTextColor: "#ffffff",
  hoverBackground: "#40a9ff", //鼠标经过
  hoverColor: "#40a9ff",
  hoverTextColor: "#ffffff",
};

topology.addPen(button);
```

## radio 单选框

- **数据**

| 名称       | 类型                 | 描述                                          |
| ---------- | -------------------- | --------------------------------------------- |
| direction  | string               | 单选框的排列方向('vertical'\|'horizontal')    |
| interval   | number               | 单选框选项间的间距（默认 20，仅针对垂直分布） |
| options    | string[] \| object[] | 选项值                                        |
| selection  | string               | 选中值                                        |
| forbiddens | string[]             | 禁用选项                                      |

- **使用**

```js
const radio = {
  name: "radio",
  x: 100,
  y: 100,
  width: 150,
  height: 100,
  direction: "vertical",
  options: ["水果", "蔬菜", "谷物"],
  /*
  options: [
    { text: "水果", background: "#ff0000" },
    { text: "蔬菜", background: "#00ff00" },
    { text: "谷物", background: "#0000ff" },
  ],*/
  selection: "水果",
  forbiddens: ["蔬菜"],
};

topology.addPens([radio]);
```

## checkbox 复选框

- **数据**

| 名称       | 类型                | 描述                                          |
| ---------- | ------------------- | --------------------------------------------- |
| direction  | string              | 复选框的排列方向('vertical'\|'horizontal')    |
| interval   | number              | 复选框选项间的间距（默认 20，仅针对垂直分布） |
| options    | string[]\| object[] | 选项值                                        |
| selections | string[]            | 选中选项                                      |
| forbiddens | string[]            | 禁用选项                                      |

- **使用**

```js
const checkbox = {
  name: "checkbox",
  x: 100,
  y: 100,
  width: 150,
  height: 100,
  direction: "vertical",
  // options: ["水果", "蔬菜", "谷物"],
  options: [
    { text: "水果", background: "#ff0000" },
    { text: "蔬菜", background: "#00ff00" },
    { text: "谷物", background: "#0000ff" },
  ],
  selections: ["蔬菜"],
  forbiddens: ["水果"],
};

topology.addPens([checkbox]);
```

## switch 开关

- **数据**

| 名称           | 类型    | 描述               |
| -------------- | ------- | ------------------ |
| isOpen         | boolean | 是否打开           |
| offColor       | string  | 关闭时背景颜色     |
| onColor        | string  | 打开时背景颜色     |
| isForbidden    | boolean | 是否禁用           |
| forbidOffColor | string  | 关闭时禁用背景颜色 |
| forbidOnColor  | string  | 打开时禁用背景颜色 |

- **使用**

```js
const lSwitch = {
  name: "switch",
  x: 100,
  y: 100,
  height: 30,
  width: 60,
  isOpen: false,
  offColor: "#BFBFBF",
  onColor: "#1890ff",
  forbidOffColor: "#E5E5E5",
  forbidOnColor: "#A3D3FF",
  //isForbidden: true,
};

topology.addPen(lSwitch);
```

## slider 滑动输入条

【注意】当滑动条禁止移动时(locked=1)，才允许拖动滑块。

- **数据**

| 名称        | 类型    | 描述                                       |
| ----------- | ------- | ------------------------------------------ |
| sliderRadio | number  | 滑动条占整个图元宽度的比例(靠左对齐)       |
| inputRadio  | number  | 文字输入部分占整个图元宽度的比例(靠右对齐) |
| min         | number  | 最小值                                     |
| max         | number  | 最大值                                     |
| unit        | string  | 单位                                       |
| slider      | boolean | 是否正在执行滑动操作                       |

- **使用**

```js
const slider = {
  name: "slider",
  x: 100,
  y: 100,
  height: 30,
  text: "10%",
  width: 300,
  sliderRadio: 0.7,
  inputRadio: 0.2,
  min: 0,
  max: 100,
  textLeft: 240, //根据属性inputRadio计算
  background: "#69c0ff", //横条填充颜色
  color: "#1890ff", //小圆圈滑块线条颜色
  textColor: "#000000",
  hoverTextColor: "#000000", //用于屏蔽全局鼠标经过和选中的文字颜色
  activeTextColor: "#000000",
  unit: "%",
  slider: false,
};

topology.addPen(slider);
```

## 输入框

- **使用**

```js
const input = {
  x: 100,
  y: 100,
  height: 50,
  width: 200,
  input: true,
  name: "rectangle",
  borderRadius: 0.05,
  ellipsis: true,
  text: "输入数据",
  textAlign: "left",
  color: "#D9D9D9FF",
  textColor: "#000000FF",
  hoverTextColor: "#000000FF",
  activeTextColor: "#000000FF",
  textLeft: 10,
};

topology.addPen(input);
```

## 选择器

- **使用**

```js
const select = {
  x: 100,
  y: 100,
  height: 50,
  width: 200,
  name: "rectangle",
  borderRadius: 0.05,
  ellipsis: true,
  text: "选项1",
  textAlign: "left",
  color: "#D9D9D9FF",
  textColor: "#000000FF",
  hoverTextColor: "#000000FF",
  activeTextColor: "#000000FF",
  textLeft: 10,
  // dropdownList: ["选项1", "选项2", "选项3"],
  dropdownList: [
    { text: "选项1", background: "#ff0000" },
    { text: "选项2", background: "#00ff00" },
    { text: "选项3", background: "#0000ff" },
  ],
};

topology.addPen(select);
```
