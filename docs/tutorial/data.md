# 实时数据监听

topology 支持 mqtt、websocket 和 http 轮询 3 种方式进行实时数据监听。

<font color=#fa541c >如果配置过 mqtt 或 websocket，下次打开时，会自动连接。</font>

## MQTT

1. 设置 mqtt 连接

```js
const params = {
  mqtt: 'url',
  mqttTopics: 'topic1/#,topoc2', // 多个主题用,分割
  mqttOptions: {
      clientId: 'string';
      username: 'string';
      password: 'string';
      // 如果clientId不为空，默认会随机重新生成一个clientId，避免连接冲突
      // 如果设置customClientId=true，不随机生成，使用用户自定义的固定的clientId
      customClientId: false;
    }
};

// 方式1
topology.connectMqtt(params);

// 方式2
topology.store.data.mqtt = params.mqtt;
topology.store.data.mqttTopics = params.mqttTopics;
topology.store.data.mqttOptions = params.mqttOptions;
topology.connectMqtt();
```

2. 自动监听 mqtt 数据

topology 引擎会自动监听数据并实时刷新。只需要按照 [Pen](/api/pen) 数据格式发送数据即可。

<font color=#fa541c >注意：仅需要传递 id 或 tag（查找定位 Pen）及需要更新的属性。</font>

```js
// 修改text
{
  id: 'pen1',
  text: 'new text'
}

// 修改所有tag为'tag'的颜色
{
  tag: 'tag',
  color: 'red'
}

// 批量修改
[{
  id: 'pen1',
  text: 'new text'
},{
  tag: 'tag',
  color: 'red'
}]
```

在线体验：http://topology.le5le.com/workspace?id=5d4d72356025d7704b11323c

## Websocket

1. 设置 websocket 连接

```js
const url = 'url';

// 方式1
topology.connectWebsocket(url);

// 方式2
topology.store.data.websocket = url;
topology.connectWebsocket();
```

2. 自动监听 websocket 数据

topology 引擎会自动监听数据并实时刷新。只需要按照 [Pen](/api/pen) 数据格式发送数据即可。

<font color=#fa541c >注意：仅需要传递 id 或 tag（查找定位 Pen）及需要更新的属性。</font>

```js
// 修改text
{
  id: 'pen1',
  text: 'new text'
}

// 修改所有tag为'tag'的颜色
{
  tag: 'tag',
  color: 'red'
}

// 批量修改
[{
  id: 'pen1',
  text: 'new text'
},{
  tag: 'tag',
  color: 'red'
}]
```

本地搭建 node 测试服务器：https://github.com/le5le-com/websocket-test-node  
先 npm install，再运行：node index.js

## http 轮询

http 轮询需要执行请求 http 数据，然后调用 topology.setValue(pen)更新数据

```js
setInterval(() => {
  fetch('url')
    .then((response) => response.json())
    .then((data) => {
      const pen = data;
      topology.setValue(pen);
    });
}, 1000);
```

## 解析自定义数据格式

当数据格式不是引擎可识别的 [Pen](/api/pen) 数据格式，支持自定义函数解析

```js
// 方式1：直接设置socket回调函数
topology.socketFn = (message) => {
  // Do sth

  topology.setValue(pen);
};

// 方式2：socket回调函数js保存到图纸数据
// data = {...}
data.socketCbJs = `
  // params: e - the message
  constole.log(e);
  // Do sth.
  topology.setValue(pen);
`;
// 自动监听
topology.open(data);

// 或
topology.store.data.socketCbJs = `
  // params: e - the message
  constole.log(e);
  // Do sth.
  topology.setValue(pen);
`;
// 手动监听
topology.listenSocket();
```

## 发送数据

当连接成功后，可以获取 [mqtt.js](https://github.com/mqttjs/MQTT.js) client 或 websocket 客户端

```js
// 仅连接成功后有效

topology.mqttClient.publish('event', 'data');

topology.websocket.send('data');
```
