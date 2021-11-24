# 视频

topology 支持音视频。

```js
// 音频
const pen = {
  name: 'video',
  x: 100,
  y: 100,
  width: 100,
  height: 10,
  audio: 'https://down.ear0.com:3321/preview?soundid=37418&type=mp3',
  autoPlay: true,
};
topology.addPen(pen);
topology.inactive();
```

```js
// 视频
const pen = {
  name: 'video',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  video: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
  autoPlay: true,
};
topology.addPen(pen);
topology.inactive();
```
