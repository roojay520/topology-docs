# API接口文档

注意：下面是官方topology自己的服务接口。自己开发的接口与topology-vue组件依赖的格式不一定完全相同，请根据实际情况转换为所需要的数据格式。
​

**默认**：所有接口调用失败时，返回{ error: '错误原因'}。正确时，直接返回所需数据，不再需要error字段。故所有接口返回通过返回是否有error字段判断。
​

# 接口列表

#### [GET] /api/tools 系统组件

获取“系统组件“图形库列表
**返回：**

```json
[
  {
    "id": "5e634a93a5a7bfc82d0af610",
    "name": "正方形",
    "icon": "t-icon t-rect",
    "data": { 
      "icon": "",
      "iconColor": "#2f54eb",
      "iconFamily": "topology",
      "name": "square",
      "paddingBottom": 10,
      "paddingLeft": 10,
      "paddingRight": 10,
      "paddingTop": 10,
      "rect": {
        "height": 100,
        "width": 100
      },
      "text": "Topology"
    },
    "class": "架构拓扑图",
    "subClassId": "183bf0d2",
    "subClassName": "基本形状",
    "sort": "a001",
    "raw": false,
    "state": 1,
    "userId": "",
    "userName": "",
    "editorId": "",
    "editorName": "",
    "createdAt": "0001-01-01T00:00:00Z",
    "updatedAt": "0001-01-01T00:00:00Z",
    "deletedAt": "0001-01-01T00:00:00Z"
  }
]
```

其中： data字段是画布所需的pen对象。

#### [GET] /images 图片类型的系统组件

获取图片类型“系统组件“ 图形库列表
**返回：**

```json
[
  {
    "name": "分组名称（文件夹名称）",
    "dir": true,
    "list": [{ 
      "name": "名称",
      "url": "图片地址"
    }, { 
      "name": "名称",
      "url": "图片地址"
    }]
  }
]
```

说明：此接口就是一个文件服务器存放文件的目录资源列表。企业版代码中已经包含把此接口格式转成系统组件代码。

#### [GET] /api/user/folder 获取用户所有文件夹

**返回：**

```json
{
  "id": "6048e1fde0bd6d38c0d73721",
  "topology": [
    "aaa",
    "bbb"
  ],
  "system": [],
  "user": [
    "abc",
    "123"
  ],
  "userId": "system",
  "username": "乐乐",
  "createdAt": "2021-03-10T23:13:01.087+08:00",
  "deletedAt": "0001-01-01T00:00:00Z"
}
```

topology数组 - “图纸”文件夹
user数组 - “我创建的”文件夹

#### [POST] /api/user/folder 设置/新增/修改用户文件夹

**body 参数：**

```json
// 新增 topolgy 图纸文件夹
{
  type: 'topology',
  name
}

// 修改 user ”我创建的“文件夹
{
  type: 'user',
  name,
  oldName
}

```

#### [POST] /api/user/folder/delete 删除用户文件夹

**body 参数：**

```json
// 删除 topolgy 图纸文件夹
{
  type: 'topology',
  name
}
```

#### [POST] /api/image 上传图片

**formdata参数：**
path:  文件服务器路径，或唯一标识。例如： /topology/thumb.png
randomName:  文件重名时，是否随机重命名。 例如：1
public:  是否公共可见， 例如： true
file: (binary)，文件二进制内容

**返回：**

```json
{"url":"/image/topology/thumb_f04cfc67ac85f8a9.png"}
```

#### [GET]  /api/user/topologies 获取当前用户的图纸或自定义组件

**参数**
[query] pageIndex - 当前第几页
[query] pageCount - 每页显示个数
[query] count - 0，表示不统计总数，返回count为0
[query] component - 是否获取用户自定义组件列表
[query] folder - 所属文件夹名
[query] name - 搜索name
[query] desc - 搜索desc
[query] text - 搜索name和desc
[query] createdStart
[query] createdEnd
[query] updatedStart
[query] updatedEnd
[query] deleted - 查询已删除
[query] sort - 排序
​

**返回**

```json
{
  "count": 13,
  "list": [
    {
      "id": "604248bbe0bd6df843c9fd59",
      "name": "空白文件",
      "desc": "",
      "image": "/image/topology/thumb_0dc82df17768828f.png",
      "class": "架构拓扑图",
      "component": false,
      "folder": "",
      "userId": "system",
      "username": "乐乐",
      "editorId": "system",
      "editorName": "乐乐",
      "shared": false,
      "star": 0,
      "view": 5,
      "recommend": 0,
      "tags": [],
      "createdAt": "2021-03-05T23:05:31.862+08:00",
      "updatedAt": "2021-03-09T22:14:47.825+08:00",
      "deletedAt": "0001-01-01T00:00:00Z"
    }
  ]
}  
```

#### [POST] /api/user/topology 保存图纸或自定义组件

**body：图纸json，画布data**

```json
// 保存 图纸
// topology.pureData()内容
{
  component: false
  folder: "123"
  fromArrow: ""
  image: "/image/topology/...."     // 缩略图
  lineName: "curve"
  locked: 0
  mqttOptions: {clientId: "c5061f"}
  mqttUrl: ""
  name: "2222"
  pens: […]
  scale: 1
  toArrow: "triangleSolid"
  websocket: ""
}

// 保存 自定义组件
{
  component: true
  componentData: {imageRatio: true,…}
  folder: "a-12"
  fromArrow: ""
	image: "/image/topology/...."     // 缩略图
  lineName: "curve"
  locked: 0
  mqttOptions: {clientId: "1a3044f9"}
  mqttUrl: ""
  name: "topology.2021/3/11上午1:29:57"
  pens: [,…]
  scale: 1
  toArrow: "triangleSolid"
  websocket: ""
}
```

#### [GET] /api/topology/:id 获取图纸数据

返回图纸json

```json
{
  "id": "60490215e0bd6d451be9cbf0",
  "name": "topology.2021/3/11上午1:29:57",
  "desc": "",
  "image": "",
  "class": "",
  "pens": [...],
  "component": true,  // true表示当前为组件；false为图纸
  "componentData": {...},  // 仅当component=true，为组件时，此属性为组合节点的json对象（topology.toComponent()所生成）
  "folder": "a-12",
  "userId": "system",
  "username": "乐乐",
  "editorId": "system",
  "editorName": "乐乐",
  "shared": false,
  "tags": []
}
```

#### [GET] /api/topologies 获取图纸

**Query参数：**
pageIndex - 当前第几页，起始为1
pageCount - 当前页个数
component - 'all' 查询所有的； '' - 只查询图纸； '非空' - 查组件
text - 搜索name或desc
name - 搜索name
desc - 搜索desc
createdStart - 创建时间查找起始时间，int64，秒
createdEnd - 创建时间查找结束时间
updatedStart - 修改时间查找起始时间，int64，秒
updatedEnd - 修改时间查找结束时间
sort - 排序

**返回**

```json
{
  "count": 13,
  "list": [
    {
      "id": "604248bbe0bd6df843c9fd59",
      "name": "空白文件",
      "desc": "",
      "image": "/image/topology/thumb_0dc82df17768828f.png",
      "class": "架构拓扑图",
      "component": false,
      "folder": "",
      "userId": "system",
      "username": "乐乐",
      "editorId": "system",
      "editorName": "乐乐",
      "shared": false,
      "star": 0,
      "view": 5,
      "recommend": 0,
      "tags": [],
      "createdAt": "2021-03-05T23:05:31.862+08:00",
      "updatedAt": "2021-03-09T22:14:47.825+08:00",
      "deletedAt": "0001-01-01T00:00:00Z"
    }
  ]
}  
```

#### [POST] /api/user/component/image 新增图片组件

**body参数：**
folder: "所属文件夹名"
image: "/image/a.jpeg"
​

#### [GET] /api/user/component/images 获取图片组件

**Query参数：**
pageIndex - 当前第几页，起始为1
pageCount - 当前页个数

```json
{
  "count": 1,
  "list": [
    {
      "id": "6051b386e138235f2698e126",
      "image": "/image/p.gif",
      "folder": "组件分类1",
      "userId": "system",
      "username": "乐乐",
      "createdAt": "2021-03-17T15:45:10.282+08:00",
      "deletedAt": "0001-01-01T00:00:00Z"
    }
  ]
}
```

#### [POST] /api/user/component/image/delete 删除图片组件

**body参数：**
folder: "所属文件夹名"
image: "/image/a.jpeg"
​

#### [GET] /api/tools/count 图形库分组数量（非必须，纯官方业务辅助）

```json
[
  {
    "_id":"4e0df5d5",   // 标识是哪个分组
    "count":5     // 该组图形库的数量
  },
  {
    "count": 24,
		"_id": "183bf0d2"
  }
]
```

​

#### [GET] /api/cms 获取分类名（非必须，纯官方业务辅助）

**Query参数：**
types: "classes"

```json
[{
	"id": "5e5f2a76a5a7bfc82d0a419d",
	"type": "classes",
	"data": {
		"list": [{
			"children": [{
				"id": "183bf0d2",   // 标识前面 count 接口中的 id
				"name": "基本形状",  // 分类名
				"nameEn": "basic"
			}, {
				"id": "f955205",
				"name": "箭头",
				"nameEn": "arrows"
			}, {
				"id": "6cd3b234",
				"name": "拓扑图未分类"
			}],
			"img": "http://topology.le5le.com/image/topology/thumb_f6f5aef54fadb4d3.png",
			"name": "架构拓扑图"
		}, {
			"children": [{
				"id": "4d45c86",
				"name": "流程图",
				"nameEn": "flow"
			}, {
				"id": "2ff994d",
				"name": "活动图",
				"nameEn": "activity"
			}, {
				"id": "53c1df",
				"name": "时序图和类图",
				"nameEn": "sequence and class"
			}],
			"img": "http://topology.le5le.com/image/topology/thumb_80f5ef23b0fc1355.png",
			"name": "UML图"
		}]
	},
	"editorId": "5ff283bfcd9a3a6437d4b678",
	"editorName": "17671654517",
	"createdAt": "0001-01-01T00:00:00Z",
	"updatedAt": "2021-02-19T06:55:14.977Z",
	"deletedAt": "0001-01-01T00:00:00Z"
}]
```

#### [GET] /api/user/profile 获取登录信息

**headers参数：**
Authorization -  自动读取cookie为token的值给Authorization，可用于登录/身份认证
​

返回：

```json
{
  "id":"6046e48214785", 		
  "username":"灵魂中锋"
}
```

# 数据库结构说明

数据库表主要涉及：
tools（图形库）
topologies（图纸、“我创建的”组件【一种特殊图纸】）
folders（文件夹）
files（上传的图片）
class（分类。主要用于我们官网区分不同行业，一般具体项目可忽略）
imageComponents(图片组件，主要维护图片和folder的关系即可，参考 获取图片组件接口)

user （自行维护）

#### mongodb

一般直接前端传什么，后端保存什么即可。
具体格式可参考 ： 配套部署安装包[https://gitee.com/le5le/downloads](https://gitee.com/le5le/downloads) 中的tools.json，以及接口列表中的代码示例。
​

#### msql

表结构和示例数据参考： [https://gitee.com/le5le/downloads/tree/master/db](https://gitee.com/le5le/downloads/tree/master/db)  中的topology.sql
​

# 后端模块

| 模块/微服务 | 功能模块 | 描述 |
| --- | --- | --- |
| topology微服务 | 图纸检索 | 图纸列表、搜索、授权分享等
图纸类型复合组件管理列表 |
|  | 单图纸 | 增删改查 |
|  | 文件夹 | 图纸文件夹、组件文件夹等分类管理图纸/组件模块 |
|  | 系统组件 | 系统组件管理（增删改查） |
|  | 租户系统 | 租户系统等不同数据管理 |
|  | 图片管理 | 图片作为组件等一种进行归类管理 |
| 文件微服务 | 文件上传 | 文件/图片上传 |
|  | 文件预览 | 文件/图片下载预览 |
|  | 租户权限 | 文件查看、修改权限 |
| 账户系统（可以替换用户自己的） | 用户注册/登陆 |  |
|  | 账号安全 | 忘记密码等 |
|  | 第三方登录 | 微信、微博、GitHub等 |
| Mongodb数据库 | 主业务数据库 | 所有服务数据基本在这里 |
| redis数据库 | 缓存数据库 | 临时查询缓存 |
