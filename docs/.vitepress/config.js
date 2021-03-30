module.exports = {
  title: '乐吾乐 Topology',
  description: '乐吾乐 Topology文档中心',

  themeConfig: {
    logo: '/img/logo.png',

    algolia: {
      apiKey: '',
      indexName: 'le5le-topology',
    },

    nav: [
      { text: '教程', link: '/tutorial/start', activeMatch: '^/tutorial/' },
      { text: 'API', link: '/api/topology-data', activeMatch: '^/api/' },
      {
        text: '视频教程',
        link: '/videos/start',
        activeMatch: '^/videos/',
      },
      {
        text: '资源',
        link: '/resources/install',
        activeMatch: '^/resources/',
      },
      { text: '常见问题', link: '/faq/open-source', activeMatch: '^/faq/' },
      { text: '博客', link: '/blog/index', activeMatch: '^/blog/' },
      {
        text: '多语言',
        items: [
          {
            text: '中文',
            link: '/tutorial/start',
          },
          {
            text: 'English',
            link: '/en/tutorial/start',
          },
        ],
      },
      {
        text: '社区',
        activeMatch: '^/community/',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/le5le-com/topology',
          },
          {
            text: 'Issues',
            link: 'https://github.com/le5le-com/issues/issues',
          },
          {
            text: '技术交流群',
            link: '/community/wechat',
          },
          {
            text: '关于我们',
            link: '/community/us',
          },
        ],
      },
    ],

    sidebar: {
      '/tutorial/': getTutorialSidebar(),
      '/api/': getAPISidebar(),
      '/videos/': [
        {
          text: '视频教程',
          children: [
            {
              text: '入门使用',
              link: '/videos/start',
            },
            {
              text: '基础课程',
              link: '/videos/courses',
            },
            {
              text: '源码解析',
              link: '/videos/advanced',
            },
          ],
        },
      ],
      '/resources/': [
        {
          text: '资源',
          children: [
            {
              text: '部署试用',
              link: '/resources/install',
            },
            {
              text: '单机版',
              link: '/resources/pc',
            },
            {
              text: '开发者示例',
              link: '/awesome/index',
            },
          ],
        },
      ],
      '/faq/': getFaqSidebar(),
      '/community/': getCommunitySidebar(),
    },
  },
};

function getTutorialSidebar() {
  return [
    {
      text: '使用',
      children: [
        { text: 'Topology介绍', link: '/tutorial/introduction' },
        { text: '快速上手', link: '/tutorial/start' },
        { text: '部署使用', link: '/tutorial/install' },
        { text: 'Topology-Vue使用指南', link: '/tutorial/vue' },
        {
          text: '发布预览',
          children: [
            { text: '在ES5中使用', link: '/tutorial/es5' },
            { text: '在ES6中使用', link: '/tutorial/es6' },
            { text: '在Vue中使用', link: '/tutorial/vue' },
            { text: '在React中使用', link: '/tutorial/react' },
            { text: '在Angular中使用', link: '/tutorial/angular' },
          ],
        },
        { text: '如何使用企业组件', link: '/tutorial/commercial-components' },
        { text: '数据与接口文档', link: '/tutorial/data' },
      ],
    },
    {
      text: '架构',
      children: [
        { text: '概要', link: '/tutorial/architecture' },
        { text: '画布', link: '/tutorial/topology' },
        { text: '画布数据通信', link: '/tutorial/store' },
        {
          text: '事件',
          children: [
            { text: '画布事件', link: '/tutorial/topology-events' },
            { text: '画笔事件', link: '/tutorial/pen-events' },
            { text: '条件触发器', link: '/tutorial/trigger' },
          ],
        },
        {
          text: '远程消息通信',
          children: [
            { text: '标准格式通信', link: '/tutorial/topology-socket' },
            { text: '自定义格式通信', link: '/tutorial/custom-socket' },
          ],
        },
        { text: '动画', link: '/tutorial/animate' },
        { text: '视频', link: '/tutorial/video' },
        { text: '排版布局', link: '/tutorial/layout' },
        { text: '注意事项', link: '/tutorial/attention' },
      ],
    },
    {
      text: '进阶',
      children: [
        {
          text: '图形库',
          children: [
            { text: '图片', link: '/tutorial/image' },
            { text: '字体图标', link: '/tutorial/icon' },
            { text: '自定义图形库', link: '/tutorial/canvas-component' },
          ],
        },
        { text: '使用外部组件', link: '/tutorial/dom' },
        { text: '如何拖拽', link: '/tutorial/drag' },
        { text: '右键菜单', link: '/tutorial/right-menu' },
        { text: '实现编辑器', link: '/tutorial/editor' },
      ],
    },
    {
      text: '数据',
      children: [
        { text: '基础图形库', link: '/tutorial/components' },
        { text: 'echarts', link: '/tutorial/echarts' },
        { text: '容器/水池组件', link: '/tutorial/pool' },
        { text: '进度条', link: '/tutorial/progress' },
      ],
    },
  ];
}

function getAPISidebar() {
  return [
    {
      text: 'API',
      children: [
        {
          text: '画布',
          children: [
            { text: '数据', link: '/api/topology-data' },
            { text: '方法', link: '/api/topology-functions' },
            { text: '选项', link: '/api/topology-options' },
          ],
        },
        {
          text: '画笔',
          children: [
            { text: '公共基础', link: '/api/pen' },
            { text: '组件', link: '/api/node' },
            { text: '连线', link: '/api/line' },
          ],
        },
        { text: '位置区域', link: '/api/rect' },
        { text: '箭头', link: '/api/arrow' },
        {
          text: '点',
          children: [
            { text: '普通点', link: '/api/point' },
            { text: '锚点', link: '/api/anchor' },
            { text: '控制点', link: '/api/controller-point' },
          ],
        },
        {
          text: '图层',
          children: [
            { text: '基类', link: '/api/layer' },
            { text: '离屏层', link: '/api/offset-layer' },
            { text: '选中层', link: '/api/active-layer' },
            { text: '活动层', link: '/api/hover-layer' },
            { text: '动画层', link: '/api/animate-layer' },
            { text: '外部组件层', link: '/api/div-layer' },
          ],
        },
      ],
    },
  ];
}

function getFaqSidebar() {
  return [
    {
      text: '常见问题',
      children: [
        { text: '开源和企业版', link: '/faq/open-source' },
        { text: '如何编译源码', link: '/faq/source' },
        { text: '图标不显示', link: '/faq/icon' },
        { text: '修改数据不生效', link: '/faq/render' },
        { text: '修改连线name报错', link: '/faq/line' },
        { text: '选择子节点', link: '/faq/children' },
        { text: '修改动画不生效', link: '/faq/animate' },
        { text: 'MQTT一直重连', link: '/faq/mqtt' },
        { text: '节点位置错误', link: '/faq/position' },
        { text: '如何保存为svg', link: '/faq/svg' },
        { text: '常见商务问答', link: '/faq/business' },
      ],
    },
  ];
}

function getCommunitySidebar() {
  return [
    {
      text: '社区',
      children: [
        {
          text: 'Github',
          link: 'https://github.com/le5le-com/topology',
        },
        {
          text: 'Issues',
          link: 'https://github.com/le5le-com/issues/issues',
        },
        {
          text: '技术交流群',
          link: '/community/wechat',
        },
        {
          text: '关于我们',
          link: '/community/us',
        },
      ],
    },
  ];
}
