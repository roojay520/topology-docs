# 数据

单画笔属性面板，数据 Tab 下的数据折叠面板。  
它可用来配置业务数据属性，特定画笔所需要的特殊属性等。  

## 业务属性  

业务属性用来做特定属性的存储，并不更改画布上视图的操作。  
仅仅作为画笔下的一个业务属性使用而已。  
控制台查看  

```js
topology.store.active[0].devName     // 确保选中，并且配置的属性名叫 devName
```

![业务属性](/img/serviceData.gif)

## 特定画笔所需特殊属性  

自定义图形，存在特殊的图元需要某些非 Pen 类型属性来控制图元样式。  
这些属性是在自定义图形库绘制函数中用到的特殊属性。   
例如：基本形状 - 立方体 - backgroundFront 等属性。

![特殊属性](/img/backgroundFront.gif)