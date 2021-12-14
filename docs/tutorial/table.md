# 表格

table 类型控件

- **数据**
  | 名称 | 类型 | 描述 |
  | ------------------------------- | -------- | -------------------------------- |
  | rowCount | number | 行数，默认 5 |
  | colCount | number | 列数，默认 5 |
  | cellHight | number | 行高，默认 30 |
  | cellWidth | number | 列宽，默认 100 |
  | activeCellStyle | string | 选中框颜色 |
  |buttonInterval|number | 操作列按钮之间的间距，button 为 Array 时有效 |
  | button | object\|Array |操作列按钮配置。为 object 时按钮居中显示。可参考[Pen](/api/pen) \(pen.name ='button'\) |
  | header | object |表头样式配置。可参考[Pen](/api/pen) \(pen.name = 'rectangle'\) |
  | col | {<br/> name:string,//列名 <br/>key:string,//列关键字，序号列和操作列内置 key 分别为'index'、'operation' <br/>width:number//列宽 <br/>}[] |列配置 |
  | row | { <br/> 列名 n:'数据值 n', <br/> ...行样式配置<br/> }[] |每一行数据及样式配置，样式配置可参考[Pen](/api/pen) \(pen.name = 'rectangle'\) |

- **使用**

```js
const table = {
  name: "table",
  x: 100,
  y: 100,
  height: 130,
  width: 250,
  hoverColor: "#00000000", //配置table的线条样式
  activeColor: "#00000000",
  color: "#000000",
  table: {
    rowCount: 10,
    colCount: 5,
    cellWidth: 150,
    activeCellStyle: "#1890ff",
    button: [
      {
        width: 50,
        height: 20,
        text: "提交",
        events: [
          {
            action: 5,
            name: "click",
            value: "console.log(pen.dataSet)", //dataSet字段提供给用户可操作的数据
          },
        ],
      },
      {
        width: 50,
        height: 20,
        text: "删除",
        events: [
          {
            action: 5,
            name: "click",
            value: `
                       let tablePen = topology.find(pen.dataSet.tableId)[0];
                       console.log(tablePen)
                       tablePen.data.splice(pen.dataSet.index,1);
                       topology.setValue(tablePen);
                    `,
          },
        ],
      },
    ],
    col: [
      {
        width: 50,
        name: "序号",
        key: "index", //内置列关键字
      },
      {
        name: "列A",
        key: "colA",
      },
      {
        name: "列B",
        key: "colB",
      },
      {
        name: "列C",
        key: "colC",
      },
      {
        width: 130,
        name: "操作",
        key: "operation", //内置列关键字
      },
    ],
    header: {
      fontWeight: "bold",
    },
  },
  data: [
    {
      colA: "第一行 第一列",
      colB: "第一行 第二列",
      colC: "第一行 第三列",
    },
    {
      colA: "第二行 第一列",
      colB: "第二行 第二列",
      colC: "第二行 第三列",
    },
    {
      colA: "第三行 第一列",
      colB: "第三行 第二列",
      colC: "第三行 第三列",
    },
    {
      colA: "第四行 第一列",
      colB: "第四行 第二列",
      colC: "第四行 第三列",
      textColor: "#ff0000",
      height: 50,
      hoverTextColor: "#ff0000",
      activeTextColor: "#ff0000",
    },
  ],
};

topology.addPens([table]);
```

- **功能**

1. 编辑模式下操作视图可以直接引起数据的更新;
2. 操作列的按钮点击事件可以直接获取该行数据。

【注意】table 控件行数和列数配置后就不能再次修改。缩放画布后不要对 table 操作。
