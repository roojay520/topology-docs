# 表格

table 类型控件(table改为table2)

- **数据**

1. data 字段

  存储数据，二维数组，每个单元格数据为基本数据类型(symbol、bigInt除外)，配置子节点用"{}"代替。

2. styles

  样式配置。

   | 名称   | 类型                 | 描述   |
   | ------ | -------------------- | ------ |
   | row    | number               | 第几行 |
   | col    | number               | 第几列 |
   | height | number               | 行高(配置row,col不允许配置)   |
   | width  | number               | 列宽(配置col,row不允许配置)   |
   | color  | string               | 文字颜色(针对单元格，row和col都需要配置)   |
   | background  | string               | 背景颜色(针对单元格，row和col都需要配置)   |
   | wheres | {<br/>&nbsp;&nbsp;comparison: string;//条件<br/>&nbsp;&nbsp;value:string;//比较值<br/>}[]   | 样式成立条件(针对单元格，row和col都需要配置)          |
   | pens       | [Pen](./pen)[] | 子节点数据(对应数据(data)列为'{}',col配置,row不允许配置) |

3. 其他配置

   | 名称      | 类型   | 描述            |
   | --------- | ------ | --------------- |
   | colWidth  | number | 列宽（默认150） |
   | rowHeight | number | 行高（默认40）  |


- **使用**

```js
  const table = {
    name: 'table2',
    x:100,
    y:100,
    width: 0,
    height: 0,
    disableAnchor: true,
    colWidth: 150,
    rowHeight: 40,
    data: [
      ['设备 ID', '设备名称', '数据协议', '状态', '操作'],
      ['1', '200', 'MQTT', '正在运行', {}],
      ['2', '湿度传感器', 'MQTT', '正在运行', {}],
      ['3', '物联网设备', 'MQTT', '正在运行', {}],
      ['4', '物联网设备/智能家居/智慧城市', 'MQTT', '正在运行', {}],
    ],
    styles: [
      {
        row: 1,
        col: 1,
        color: '#ff0000',
        background: '#ffff00',
        wheres: [
          //触发条件 成立后才允许配置样式
          {
            comparison: '<=',
            value: '123',
          },
        ],
      },
      {
        row: 0,
        height: 60,
      },
      {
        col: 4,
        width: 200, //为该列设置额外的节点
        pens: [
          {
            name: 'rectangle',
            width: 50,
            height: 20,
            text: '编辑',
            fontSize: 0.6,
            disableAnchor: true,
            activeBackground: '#40a9ff',
            activeColor: '#40a9ff',
            background: '#1890ff',
            color: '#1890ff',
            hoverBackground: '#40a9ff',
            hoverColor: '#40a9ff',
            textColor: '#ffffff',
            hoverTextColor: '#ffffff',
            activeTextColor: '#ffffff',
            events: [
              {
                action: 5,
                name: 'click',
                value: 'alert("点击了编辑")',
              },
            ],
          },
          {
            name: 'rectangle',
            width: 80,
            height: 20,
            text: '实时数据',
            fontSize: 0.6,
            disableAnchor: true,
            activeBackground: '#40a9ff',
            activeColor: '#40a9ff',
            background: '#1890ff',
            color: '#1890ff',
            hoverBackground: '#40a9ff',
            hoverColor: '#40a9ff',
            textColor: '#ffffff',
            hoverTextColor: '#ffffff',
            activeTextColor: '#ffffff',
            events: [
              {
                action: 5,
                name: 'click',
                value: 'alert("点击了实时数据")',
              },
            ],
          },
        ],
      },
    ],
  };
  topology.addPen(table);
```


- **数据更新**

更新一个单元格数据。提供如下规则：

```js
topology.setValue({
    id:'table.id',//表格id
    row:1,//第几行
    col:1,//第几列
    value:200 //新值
  });
```

除此之外，可以直接更新data(数据)和styles(样式),这种方式会导致子节点的销毁和重新创建;
