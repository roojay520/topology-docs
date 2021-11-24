# Utils

## formatPadding

将 padding 转换成数组格式 [top, right, bottom, left]  
padding 规则与 css padding 相同

**参数：**  
padding: Padding
```ts
type Padding = number | string | number[];
```

**返回：**  
number[]

**示例：**

```ts
formatPadding(5)
// [5, 5, 5, 5]
formatPadding('5')
// [5, 5, 5, 5]
formatPadding([3, 5])
// [3, 5, 3, 5]
formatPadding([3, 4, 5])
// [3, 4, 5, 4]
formatPadding([3, 4, 5, 6])
// [3, 4, 5, 6]
```

## deepClone

深拷贝，适用于 画笔  
直接通过 JSON.parse(JSON.stringify(pens)) 会报错，推荐使用该方法进行深拷贝

**参数：**  
o: any

**返回：**  
any

**示例：**

```ts
deepClone(pens)
```
