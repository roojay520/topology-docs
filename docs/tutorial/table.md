# 表格

table 类型控件

- **数据**

1. 样式配置，table 字段下
   | 名称 | 类型 | 描述 |
   | ------------------------------- | -------- | -------------------------------- |
   | cellHight | number | 行高，默认 30 |
   | cellWidth | number | 列宽，默认 100 |
   | activeCellStyle | string | 选中框颜色 |
   | header | object |表头样式配置。可配置样式参考行样式配置 |
   | col | {<br/> name:string,//列名 <br/>width?:number//列宽 <br/>}[] |列配置，长度即为列的个数 |

2. 数据配置，data 字段下

   | 名称 | 类型               | 描述                                                                                                                                                 |
   | ---- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
   | data | object[]\| array[] | 为 object 时，可配置数据和样式，为 array 时，只能配置数据 。每个单元格数据有三种类型，基本数据类型、对象和数组，分别对应文本、单个子节点和多个子节点 |

3. 行样式配置
   | 名称 | 类型 | 描述 |
   | ------------------------------- | -------- | -------------------------------- |
   | background | number | 背景颜色 |
   | textColor | number | 文本颜色 |
   | fontWeight | number | 文本加粗 |
   | fontStyle | number | 文本风格 |
   | fontSize | number | 文字大小 |
   | fontFamily | number | 文本字体 |

- **使用**

```js
const table = {
  name: "table",
  x: 100,
  y: 100,
  height: 130,
  width: 250,
  table: {
    cellWidth: 150,
    cellHeight: 50,
    activeCellStyle: "#1890ff",
    col: [
      {
        width: 50,
        name: "序号",
      },
      {
        name: "列A",
      },
      {
        name: "列B",
      },
      {
        name: "列C",
      },
      {
        width: 130,
        name: "操作",
      },
    ],
    header: {
      fontWeight: "bold",
    },
  },
  data: [
    {
      height: 100,
      // 可配置行样式
      data: [
        "1",
        "第一行 第一列",
        "第一行 第二列",
        "第一行 第三列",
        [
          //添加多个子节点
          {
            name: "button",
            width: 50,
            height: 20,
            text: "提交",
            events: [
              {
                action: 5,
                name: "click",
                value: "console.log(pen.dataSet)",
              },
            ],
          },
          {
            name: "button",
            width: 50,
            height: 20,
            text: "提交",
            events: [
              {
                action: 5,
                name: "click",
                value: "console.log(pen.dataSet)",
              },
            ],
          },
        ],
      ],
    },
    {
      data: [
        "2",
        "第二行 第一列",
        "第二行 第二列",
        "第二行 第三列",
        {
          name: "button",
          width: 50,
          height: 20,
          text: "提交",
          events: [
            {
              action: 5,
              name: "click",
              value: "console.log(pen.dataSet)",
            },
          ],
        },
      ],
    },
    {
      data: [
        "3",
        "第三行 第一列",
        "第三行 第二列",
        "第三行 第三列",
        {
          //单个子节点
          name: "button",
          width: 50,
          height: 20,
          text: "提交",
          events: [
            {
              action: 5,
              name: "click",
              value: "console.log(pen.dataSet)",
            },
          ],
        },
      ],
    },
    {
      height: 100,
      data: [
        "4",
        "第四行 第一列",
        "第四行 第二列",
        "第四行 第三列",
        {
          name: "button",
          width: 50,
          height: 20,
          text: "提交",
          events: [
            {
              action: 5,
              name: "click",
              value: "console.log(pen.dataSet)",
            },
          ],
        },
      ],
    },
  ],
  events: [
    //默认配置事件
    {
      action: 5,
      name: "leave",
      value: `
              pen.calculative.canvas.parent.setValue({
                id:pen.id,
                mousePos:null,
              });
              `,
    },
  ],
  /*
  data: [
    [
      "1",
      "第一行 第一列",
      "第一行 第二列",
      "第一行 第三列",
      {
        name: "button",
        width: 50,
        height: 20,
        text: "提交",
      },
    ],
    ["2", "第二行 第一列", "第二行 第二列", "第二行 第三列"],
    [
      "3",
      "第三行 第一列",
      "第三行 第二列",
      "第三行 第三列",
      [
        {
          name: "button",
          width: 50,
          height: 20,
          text: "提交",
        },
        {
          name: "button",
          width: 50,
          height: 20,
          text: "提交",
        },
        {
          name: "button",
          width: 50,
          height: 20,
          text: "提交",
        },
      ],
    ],
  ],*/
};

topology.addPens([table]);
```

- **功能**

1. 双击编辑单元格;
2. 非文本单元格（即子节点）的 dataSet 字段下保存了改行的数据。
