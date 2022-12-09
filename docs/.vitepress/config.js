module.exports = {
  title: "乐吾乐",
  description: "乐吾乐文档中心",

  base: "/",

  themeConfig: {
    logo: "/newlogo.jpg",

    algolia: {
      appId: "3UU73GDKU1",
      apiKey: "4d05a9750de2dd2ecdc6611ce62e545e",
      indexName: "le5le-meta2d",
      placeholder: "搜索后，请刷新",
      transformItems(items) {
        for (const item of items) {
          item.objectID.replace("meta2d-documents/", "");
          item.url.replace("meta2d-documents/", "");
        }
        return items;
      },
    },

    nav: [
      {
        text: "教程",
        link: "/tutorial/introduction",
        // activeMatch: '^/tutorial/'
      },
      { text: "API", link: "/api/core", activeMatch: "^/api/" },
      // {
      //   text: '视频教程',
      //   link: '/videos/home',
      //   activeMatch: '^/videos/',
      // },
      { text: "3D", link: "/3d/index", activeMatch: "^/3d/" },
      {
        text: "资源",
        link: "/awesome/home",
        activeMatch: "^/awesome/",
      },
      {
        text: "产品",
        items: [
          {
            text: "乐吾乐 2D可视化",
            link: "https://2ds.le5le.com/",
          },
          // {
          //   text: 'Meta2d 2D 企业版',
          //   link: 'tutorial/commercial',
          // },
          {
            text: "乐吾乐 3D 预览版",
            link: "http://111.172.231.243:7800/",
          },
          {
            text: "物联平台",
            link: "http://iot.demo.le5le.com/",
          },
          // {
          //   text: "Meta2d 0.5.x",
          //   link: "https://www.yuque.com/alsmile/meta2d",
          // },
        ],
      },
      {
        text: "企业版",
        link: "/tutorial/commercial",
        // activeMatch: '^/tutorial/',
      },
      // { text: '关于我们', link: '/about/us', activeMatch: '^/community/' },
      // { text: '博客', link: '/blog/index', activeMatch: '^/blog/' },
      {
        text: "关于我们",
        activeMatch: "^/about/",
        items: [
          {
            text: "关于我们",
            link: "/about/us",
          },
          {
            text: "加入我们",
            link: "/about/join",
          },
        ],
      },
      {
        text: "社区",
        activeMatch: "^/community/",
        items: [
          {
            text: "Github",
            link: "https://github.com/le5le-com",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/le5le",
          },
          {
            text: "技术交流群",
            link: "/community/wechat",
          },
          // {
          //   text: '关于我们',
          //   link: '/about/us',
          // },
          // {
          //   text: '加入我们',
          //   link: '/about/join',
          // },
          {
            text: "常见问题",
            link: "/tutorial/faq",
          },
        ],
      },
      // {
      //   text: '多语言',
      //   items: [
      //     {
      //       text: '中文',
      //       link: '/tutorial/start',
      //     },
      //     {
      //       text: 'English',
      //       link: '/en/tutorial/start',
      //     },
      //   ],
      // },
    ],

    sidebar: {
      "/tutorial/": getTutorialSidebar(),
      "/api/": getAPISidebar(),
      "/3d/": get3DSidebar(),
      "/videos/": [
        {
          text: "视频教程",
          link: "/videos/home",
        },
      ],
      "/awesome/": [
        {
          text: "资源",
          link: "/awesome/home",
        },
      ],
      "/faq/": getFaqSidebar(),
      "/about/": getAboutSidebar(),
      "/community/": getCommunitySidebar(),
    },
  },
};

function getTutorialSidebar() {
  return [
    {
      text: "使用",
      children: [
        { text: "Meta2d介绍", link: "/tutorial/introduction" },
        {
          text: "快速上手",
          link: "/tutorial/start",
        },
        {
          text: "用户使用手册",
          link: "/instruction/home",
        },
        {
          text: "企业版",
          link: "/tutorial/commercial",
          // children: [
          //   {
          //     text: '对比其他产品',
          //     link: '/tutorial/comparison',
          //   },
          // {
          //   text: 'API接口文档',
          //   link: '/tutorial/commercial-api',
          // },
          // {
          //   text: '部署试用',
          //   link: '/tutorial/commercial-trial',
          // },
          // ],
        },
        {
          text: "图形库",
          // link: "/instruction/home.html#_8-图形库",
          link: "/tutorial/tuxingku",
        },
        {
          text: "API接口文档",
          link: "/tutorial/commercial-api",
        },
        {
          text: "部署试用",
          link: "/tutorial/commercial-trial",
        },
        {
          text: "更新日志",
          link: "/tutorial/changelog",
        },
        {
          text: "升级变动",
          link: "/tutorial/updatelog",
        },
        {
          text: "常见问题",
          link: "/tutorial/faq",
        },
      ],
    },
    {
      text: "架构",
      children: [
        { text: "概要", link: "/tutorial/architecture" },
        { text: "画布", link: "/tutorial/meta2d" },
        { text: "画笔", link: "/tutorial/pen" },
        { text: "生命周期", link: "/tutorial/lifecycle" },
        { text: "实时数据监听", link: "/tutorial/data" },
        { text: "消息事件", link: "/tutorial/events" },
        { text: "动画", link: "/tutorial/animate" },
        { text: "进度条", link: "/tutorial/progress" },
        { text: "视频", link: "/tutorial/video" },
        { text: "排版算法", link: "/tutorial/layout" },
        { text: "注意事项", link: "/tutorial/attention" },
      ],
    },
    {
      text: "亮点功能",
      children: [
        { text: "拖拽", link: "/tutorial/drag" },
        { text: "钢笔", link: "/tutorial/pen-draw" },
        { text: "铅笔", link: "/tutorial/pencil" },
        { text: "自动锚点", link: "/tutorial/auto-anchor" },
        { text: "网格", link: "/tutorial/grid" },
        { text: "标尺", link: "/tutorial/rule" },
        { text: "右键菜单", link: "/tutorial/right-menu" },
        { text: "鹰眼地图", link: "/tutorial/map" },
        { text: "放大镜", link: "/tutorial/magnifier" },
        { text: "快捷键", link: "/tutorial/keyboards" },
        { text: "数据", link: "/tutorial/service-data" },
      ],
    },
    {
      text: "图形库",
      children: [
        { text: "默认图形库", link: "/tutorial/pens" },
        { text: "SVG", link: "/tutorial/svg-to-combine" },
        { text: "字体图形库", link: "/tutorial/icons" },
        { text: "自定义图形库", link: "/tutorial/make-component" },
        { text: "自定义连线算法", link: "/tutorial/line-ai" },
        {
          text: "企业图形库",
          children: [
            { text: "表单", link: "/tutorial/forms" },
            { text: "表格", link: "/tutorial/table" },
            { text: "图表", link: "/tutorial/charts" },
          ],
        },
      ],
    },
  ];
}

function getAboutSidebar() {
  return [
    {
      text: "关于我们",
      children: [
        {
          text: "关于我们",
          link: "/about/us",
        },
        {
          text: "加入我们",
          link: "/about/join",
        },
      ],
    },
  ];
}
function getAPISidebar() {
  return [
    {
      text: "API",
      children: [
        { text: "Core", link: "/api/core" },
        { text: "Canvas", link: "/api/canvas" },
        { text: "Pen", link: "/api/pen" },
        { text: "Rect", link: "/api/rect" },
        { text: "Point", link: "/api/point" },
        { text: "Layout", link: "/api/layout" },
        { text: "Utils", link: "/api/utils" },
      ],
    },
  ];
}

function get3DSidebar() {
  return [
    {
      text: "可视化平台",
      children: [
        {
          text: '指引',
          children: [
            { text: '介绍', link: '/3d/editor/guide/introduction' },
            { text: '第一个项目', link: '/3d/editor/guide/firstProject' },
            { text: '设置事件', link: '/3d/editor/guide/setEvents' },
            { text: '设置动画', link: '/3d/editor/guide/setAnimations' },
            { text: '设置动态数据', link: '/3d/editor/guide/setDynamicDatas' },
            { text: '设置自定义数据', link: '/3d/editor/guide/setCustomDatas' },
          ]
        },
        {
          text: '深入', children: [
            { text: '项目', link: '/3d/editor/deep-dive/project' },
          ]
        },
      ],
    },
    {
      text: "核心库",
      link: '/3d/meta3d/index',
      children: [
      ],
    },
  ];
}

function getFaqSidebar() {
  return [
    {
      text: "常见问题",
      link: "/tutorial/faq",
    },
  ];
}

function getCommunitySidebar() {
  return [
    {
      text: "社区",
      children: [
        {
          text: "Github",
          link: "/community/github",
        },
        {
          text: "Gitee",
          link: "/community/gitee",
        },
        {
          text: "技术交流群",
          link: "/community/wechat",
        },
        {
          text: "常见问题",
          link: "/tutorial/faq",
        },
        // {
        //   text: '关于我们',
        //   link: '/about/us',
        // },
        // {
        //   text: '加入我们',
        //   link: '/about/join',
        // },
      ],
    },
  ];
}
