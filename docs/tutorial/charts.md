# 图表

原生 topology 图表控件，更方便的支持原生交互事件和图层。包含：折线图、柱状图、饼图、仪表盘等，更多欢迎联系我们。

数据格式参考：echarts。

## lineChart 折线图

xxxx

- **数据**

当前支持的配置如下：
| 名称 | 类型 | 描述 |
| ---------- | -------- | ----------------------------------------- |
| color | string[] | 调色盘颜色列表 |
| xAxis.data | string[] | 横坐标值 |
| series[i].data | number[] | 纵坐标数据值 |
| series[i].smooth | boolean |折线图是否平滑 |

- **使用**

```js
const linechart = {
  name: "lineChart",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  lecharts: {
    option: {
      color: [
        "#1890ff",
        "#2FC25B",
        "#FACC14",
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
      ],
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      series: [
        {
          name: "Email",
          data: [1820, 1932, 1901, 1934, 1990, 1830, 1920],
          smooth: false,
        },
        {
          name: "Video Ads",
          data: [1710, 1932, 1901, 1834, 1700, 1830, 1720],
          smooth: true,
        },
      ],
    },
  },
};

topology.addPen(linechart);
```

## histogram 柱状图

xxxx

- **数据**

  当前支持的配置如下：
  | 名称 | 类型 | 描述 |
  | ---------- | -------- | ----------------------------------------- |
  | color | string[] | 调色盘颜色列表 |
  | xAxis.data | string[] | 横坐标值 |
  | series[i].data | number[] | 纵坐标数据值 |

- **使用**

```js
const histogram = {
  name: "histogram",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  lecharts: {
    option: {
      color: [
        "#1890ff",
        "#2FC25B",
        "#FACC14",
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
      ],
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
        },
        {
          data: [140, 250, 150, 80, 60, 10, 30],
        },
        {
          data: [40, 50, 180, 210, 60, 70, 30],
        },
      ],
    },
  },
};

topology.addPen(histogram);
```

## pieChart 饼图

xxxx

- **数据**

  当前支持的配置如下：
  | 名称 | 类型 | 描述 |
  | ------------------------------- | -------- | -------------------------------- |
  | color | string[] | 调色盘颜色列表 |
  | series[i].radius | string[] | 饼图的半径范围 |
  | series[i].itemStyle.borderColor | string | 饼图描边颜色 |
  | series[i].itemStyle.borderWidth | number | 描边线宽 |
  | series[i].label.show | boolean | 是否显示文本标签 |
  | series[i].label.position | number | 文本标签位置('outside'/'inside') |
  | series[i].labelLine.show | boolean | 文本标签引导线是否显示 |
  | series[i].data[j].name | string | 数据名 |
  | series[i].data[j].value | number | 数据值 |

- **使用**

```js
const pie = {
  name: "pieChart",
  x: 100,
  y: 300,
  width: 400,
  height: 200,
  lecharts: {
    option: {
      color: [
        "#1890ff",
        "#36CBCB",
        "#2FC25B",
        "#FACC14",
        "#F2637B",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc",
      ],
      series: [
        {
          radius: ["60%", "70%"],
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "outside",
          },
          labelLine: {
            show: true,
          },
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
        {
          radius: ["0%", "50%"],
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "inside",
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1548, name: "Search" },
            { value: 775, name: "Direct" },
            { value: 679, name: "Market" },
          ],
        },
      ],
    },
  },
};

topology.addPen(pie);
```

## gauge 仪表盘

xxxx

- **数据**

  series 的可用属性配置如下：
  | 名称 | 类型 | 描述 |
  | ------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ |
  | startAngle | number | 仪表盘起始角度。圆心 正右手侧为 0 度，正上方为 90 度，正左手侧为 180 度。默认 225。 |
  | endAngle | number | 仪表盘结束角度。默认-45。 |
  | min | number | 最大值，默认 100。 |
  | max | number | 最小值，默认 0。 |
  | splitNumber | number | 仪表盘刻度的分割段数。默认值为 10。 |
  | radius | number | 仪表盘半径相对于 min(width,hight)/2 的百分比，默认'75%'。 |
  | axisLine.show | boolean | 是否显示仪表盘轴线(包括了刻度线、分隔线、刻度标签的显示) |
  | axisLine.lineStyle.width | number | 仪表盘轴线宽度 |
  | axisLine.lineStyle.color | string[][] | 仪表盘的轴线分段比例及数值 |
  | pointer.itemStyle.color | string | 指针颜色，为'auto'时根据当前值所在轴线分段颜色确定。 |
  | pointer.show | boolean | 是否显示指针 |
  | pointer.length | string | 指针长度相对半径长度的百分比 |
  | pointer.width | number | 指针宽度 |
  | axisTick.distance | number | 刻度线与轴线的距离。 |
  | axisTick.length | number | 刻度线长度 |
  | axisTick.lineStyle.color | string | 刻度线长度 |
  | axisTick.lineStyle.width | number | 刻度线线宽 |
  | splitLine.distance | number | 分隔线与轴线的距离。 |
  | splitLine.length | number | 分隔线长度 |
  | splitLine.lineStyle.color | string | 分隔线长度 |
  | splitLine.lineStyle.width | number | 分隔线线宽 |
  | splitLine.distance | number | 分隔线与轴线的距离。 |
  | axisLabel.color | string | 刻度标签颜色 |
  | axisLabel.distance | number | 标签与刻度线的距离 |
  | axisLabel.fontSize | number | 刻度标签文字大小 |
  | detail.show | boolean | 是否显示细节 |
  | detail.formatter | string | 仪表盘详情，显示数据的格式。 |
  | detail.color | string | 显示数据的颜色，为'auto'时根据当前值所在轴线分段颜色确定。 |
  | detail.offsetCenter | string[] | 相对于仪表盘中心的偏移位置，数组第一项是水平方向相对半径的偏移百分比，第二项是垂直方向相对半径的偏移百分比。 |
  | data[j].value | number | 当前值 |

- **使用**

1. 阶段速度仪表盘

```js
const gauge = {
  name: "gauge",
  x: 100,
  y: 100,
  width: 400,
  height: 400,
  animateCycle: 1, //动画执行一次
  lecharts: {
    option: {
      series: [
        {
          type: "gauge",
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, "#67e0e3"],
                [0.7, "#37a2da"],
                [1, "#fd666d"],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: "auto",
            },
            show: true,
            length: "60%",
            width: 6,
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: "#fff",
              width: 4,
            },
          },
          axisLabel: {
            color: "auto",
            distance: 30,
            fontSize: 15,
          },
          detail: {
            formatter: "{value} km/h",
            color: "auto",
            offsetCenter: ["0%", "40%"],
          },
          data: [
            {
              value: 70,
            },
          ],
        },
      ],
    },
  },
};

topology.addPen(gauge);
```

2. 时钟

```js
const clock = {
  name: "gauge",
  x: 100,
  y: 100,
  width: 400,
  height: 400,
  animateCycle: 1,
  lechartsType: "clock", //时钟效果
  lecharts: {
    option: {
      series: [
        {
          name: "hour", //固定值
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          min: 0,
          max: 12,
          splitNumber: 12,
          axisLine: {
            lineStyle: {
              width: 15,
              color: [[1, "rgba(0,0,0,0.7)"]],
            },
          },
          pointer: {
            itemStyle: {
              color: "#C0911F",
            },
            show: true,
            length: "40%",
            width: 12,
          },
          axisTick: {
            distance: 10,
            length: 6,
            lineStyle: {
              color: "#63677A",
              width: 2,
            },
          },
          splitLine: {
            distance: 10,
            length: 10,
            lineStyle: {
              color: "#63677A",
              width: 4,
            },
          },
          axisLabel: {
            color: "auto",
            distance: 50,
            fontSize: 15,
          },
          detail: {
            show: false,
            formatter: "{value} km/h",
            color: "auto",
            offsetCenter: ["0%", "40%"],
          },
          data: [
            {
              value: 3,
            },
          ],
        },
        {
          name: "minute", //固定值
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          min: 0,
          max: 60,
          splitNumber: 12,
          axisLine: {
            show: false,
          },
          pointer: {
            itemStyle: {
              color: "#C0911F",
            },
            show: true,
            length: "70%",
            width: 8,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 30,
            },
          ],
        },
        {
          name: "second", //固定值
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          min: 0,
          max: 60,
          splitNumber: 12,
          axisLine: {
            show: false,
          },
          pointer: {
            itemStyle: {
              color: "#C0911F",
            },
            show: true,
            length: "90%",
            width: 4,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 3,
            },
          ],
        },
      ],
    },
  },
};

topology.addPen(clock);
```
