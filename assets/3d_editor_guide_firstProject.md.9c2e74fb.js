import{_ as e,c as a,o as i,a as l}from"./app.7a90af25.js";const f='{"title":"\u65B0\u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B0\u9879\u76EE","slug":"\u65B0\u9879\u76EE"},{"level":2,"title":"\u521B\u5EFA\u6A21\u578B","slug":"\u521B\u5EFA\u6A21\u578B"},{"level":2,"title":"\u7F16\u8F91\u6A21\u578B","slug":"\u7F16\u8F91\u6A21\u578B"},{"level":2,"title":"\u521B\u5EFA\u591A\u4E2A\u573A\u666F","slug":"\u521B\u5EFA\u591A\u4E2A\u573A\u666F"},{"level":2,"title":"\u521B\u5EFA\u89C6\u89D2","slug":"\u521B\u5EFA\u89C6\u89D2"},{"level":2,"title":"\u8FD0\u884C\u9879\u76EE","slug":"\u8FD0\u884C\u9879\u76EE"},{"level":2,"title":"\u4FDD\u5B58\u9879\u76EE","slug":"\u4FDD\u5B58\u9879\u76EE"},{"level":2,"title":"\u706F\u5149","slug":"\u706F\u5149"},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED"}],"relativePath":"3d/editor/guide/firstProject.md"}',t={},p=l('<p>\u5728\u672C\u7AE0\u5185\uFF0C\u60A8\u53EF\u4EE5\u4E86\u89E3\u5230\u5982\u4F55\u521B\u5EFA\u5E76\u8FD0\u884C\u4E00\u4E2A\u9879\u76EE\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u7B80\u5355\u7684\u573A\u666F\u64CD\u4F5C\u3002</p><h2 id="\u65B0\u9879\u76EE" tabindex="-1">\u65B0\u9879\u76EE <a class="header-anchor" href="#\u65B0\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u8FDB\u5165\u7F16\u8F91\u5668\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u9879\u76EE\u3002</p><p>\u9879\u76EE\u4F1A\u9ED8\u8BA4\u521B\u5EFA\u4E00\u4E2A\u573A\u666F\u3002\u573A\u666F\u4E2D\u81EA\u52A8\u5305\u542B\u4E0B\u5217\u5143\u7D20\uFF1A</p><ul><li>\u65CB\u8F6C\u76F8\u673A\u548C\u6F2B\u6E38\u76F8\u673A\u3002\u60A8\u53EF\u4EE5\u5728\u53F3\u4FA7\u5C5E\u6027\u680F - \u573A\u666F - \u76F8\u673A\u4E2D\u5207\u6362\u76F8\u673A\u7C7B\u578B\u3002</li><li>\u8F85\u52A9\u6C34\u5E73\u5730\u9762\u548C\u7F51\u683C\u3002\u5730\u9762\u7684\u4E2D\u5FC3\u70B9\u5750\u6807\u4E3A(0, 0, 0)\uFF0C\u9ED8\u8BA4\u4E00\u4E2A\u7F51\u683C\u4EE3\u8868\u4E00\u7C73\u3002\u60A8\u53EF\u4EE5\u5728\u53F3\u4FA7\u5C5E\u6027\u680F - \u573A\u666F - \u5355\u4F4D\u4E2D\u4FEE\u6539\u5F53\u524D\u573A\u666F\u7684\u5355\u4F4D\u548C\u5355\u4F4D\u503C\u3002</li><li>\u534A\u7403\u5149\uFF0C\u5373\u73AF\u5883\u5149\u3002</li></ul><p>\u5176\u4E2D\u65CB\u8F6C\u76F8\u673A\u3001\u6F2B\u6E38\u76F8\u673A\u3001\u8F85\u52A9\u5730\u9762\u548C\u7F51\u683C\u4E0D\u4F1A\u5728\u5DE6\u4FA7\u8D44\u6E90\u680F- \u7ED3\u6784\u4E2D\u663E\u793A\u3002</p><h2 id="\u521B\u5EFA\u6A21\u578B" tabindex="-1">\u521B\u5EFA\u6A21\u578B <a class="header-anchor" href="#\u521B\u5EFA\u6A21\u578B" aria-hidden="true">#</a></h2><p>\u7F16\u8F91\u5668\u652F\u6301\u62D6\u62FD\u751F\u6210\u6A21\u578B\u3002</p><p>\u7CFB\u7EDF\u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4E00\u4E9B\u57FA\u7840\u6A21\u578B\uFF0C\u60A8\u53EF\u4EE5\u5728\u5DE6\u4FA7\u8D44\u6E90\u680F - \u6A21\u578B - \u57FA\u7840\u6A21\u578B\u4E2D\uFF0C\u9F20\u6807\u5DE6\u952E\u6309\u4F4F\u7ACB\u65B9\u4F53\u7684\u56FE\u7247\uFF0C\u62D6\u62FD\u81F3\u753B\u5E03\u4E0A\u65B9\u677E\u5F00\u9F20\u6807\uFF0C\u5728\u9F20\u6807\u548C\u5730\u9762\u76F8\u4EA4\u7684\u5730\u65B9\u5C31\u4F1A\u751F\u6210\u4E00\u4E2A1 * 1 * 1\u7684\u7ACB\u65B9\u4F53\u6A21\u578B\u3002</p><h2 id="\u7F16\u8F91\u6A21\u578B" tabindex="-1">\u7F16\u8F91\u6A21\u578B <a class="header-anchor" href="#\u7F16\u8F91\u6A21\u578B" aria-hidden="true">#</a></h2><p>\u9009\u4E2D\u521A\u751F\u6210\u7684\u7ACB\u65B9\u4F53\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u5E26\u6709\u4E09\u4E2A\u7BAD\u5934\u548C\u4E09\u4E2A\u5E73\u9762\u7684\u4F4D\u7F6E\u64CD\u4F5C\u5668\u3002\u5176\u4E2D\uFF0C\u7EA2\u8272\u7BAD\u5934\u65B9\u5411\u6307\u5411X\u8F74\u6B63\u65B9\u5411\uFF0C\u84DD\u8272\u7BAD\u5934\u6307\u5411Z\u8F74\u6B63\u65B9\u5411\uFF0C\u7EFF\u8272\u7BAD\u5934\u6307\u5411Y\u8F74\u6B63\u65B9\u5411\uFF0C\u7EA2\u8272\u5E73\u9762\u4EE3\u8868YZ\u5E73\u9762\uFF0C\u84DD\u8272\u5E73\u9762\u4EE3\u8868XY\u5E73\u9762\uFF0C\u7EFF\u8272\u5E73\u9762\u4EE3\u8868XZ\u5E73\u9762\u3002\u62D6\u62FD\u7BAD\u5934\u53EF\u4EE5\u8BA9\u7ACB\u65B9\u4F53\u5728\u5BF9\u5E94\u8F74\u4E0A\u79FB\u52A8\uFF0C\u62D6\u62FD\u5E73\u9762\u53EF\u4EE5\u8BA9\u7ACB\u6CD5\u4F53\u5728\u5BF9\u5E94\u5E73\u9762\u4E0A\u79FB\u52A8\u3002</p><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>\u64CD\u4F5C\u5668\u7684\u5750\u6807\u4EC5\u8868\u793A\u6A21\u578B\u7684\u76F8\u5BF9\u5750\u6807\uFF0C\u4E0D\u8868\u793A\u4E16\u754C\u5750\u6807\u3002\u5982\u679C\u6A21\u578B\u88AB\u65CB\u8F6C\uFF0C\u64CD\u4F5C\u5668\u7684\u5750\u6807\u65B9\u5411\u4E0E\u4E16\u754C\u5750\u6807\u5E76\u4E0D\u4E00\u81F4\u3002</p></div><p>\u62D6\u62FD\u64CD\u4F5C\u5668\u6539\u53D8\u7ACB\u65B9\u4F53\u4F4D\u7F6E\u65F6\uFF0C\u53F3\u4FA7\u5C5E\u6027\u680F - \u4F4D\u7F6E\u5C5E\u6027\u4E2D\u5BF9\u5E94\u7684\u503C\u4F1A\u540C\u6B65\u6539\u53D8\u3002\u540C\u6837\u7684\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539\u53F3\u4FA7\u5C5E\u6027\u680F\u4E2D\u7684\u4F4D\u7F6E\u5C5E\u6027\u503C\uFF0C\u7ACB\u65B9\u4F53\u7684\u4F4D\u7F6E\u4E5F\u4F1A\u53D1\u751F\u6539\u53D8\u3002</p><h2 id="\u521B\u5EFA\u591A\u4E2A\u573A\u666F" tabindex="-1">\u521B\u5EFA\u591A\u4E2A\u573A\u666F <a class="header-anchor" href="#\u521B\u5EFA\u591A\u4E2A\u573A\u666F" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u6211\u4EEC\u7684\u9879\u76EE\u4E2D\u53EA\u6709\u4E00\u4E2A\u573A\u666F\uFF0C\u5B83\u6709\u4E24\u4E2A\u5143\u7D20\uFF1A\u4E00\u4E2A\u7ACB\u65B9\u4F53\u548C\u9ED8\u8BA4\u706F\u5149\u3002\u4F46\u662F\u968F\u7740\u6211\u4EEC\u4E0D\u65AD\u7684\u62D6\u5165\u65B0\u7684\u6A21\u578B\uFF0C\u5C24\u5176\u662F\u90A3\u4E9B\u590D\u6742\u7684\u6A21\u578B\uFF0C\u4F1A\u8BA9\u573A\u666F\u53D8\u5F97\u5F88\u5361\u987F\uFF08\u60A8\u53EF\u4EE5\u5728\u53F3\u4E0B\u89D2\u770B\u5230\u5F53\u524D\u573A\u666F\u7684\u5237\u65B0\u7387\uFF09\u3002\u8FD9\u65F6\uFF0C\u5982\u679C\u6211\u4EEC\u5C06\u4E00\u4E2A\u590D\u6742\u573A\u666F\u5206\u89E3\u4E3A\u51E0\u4E2A\u7B80\u5355\u573A\u666F\u2014\u2014\u4F8B\u5982\u5BA4\u5185\u573A\u666F\u548C\u5BA4\u5916\u573A\u666F\uFF0C\u6216\u8005\u4E00\u4E2A\u697C\u623F\u573A\u666F\u548C\u5404\u4E2A\u697C\u5C42\u7684\u573A\u666F\u2014\u2014\u8FD9\u6837\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u5355\u4E2A\u573A\u666F\u7684\u6A21\u578B\u6570\u91CF\uFF0C\u63D0\u9AD8\u6027\u80FD\u3002</p><p>\u6BCF\u4E2A\u65B0\u9879\u76EE\u4F1A\u81EA\u52A8\u521B\u5EFA\u4E00\u4E2A\u573A\u666F\uFF0C\u540D\u79F0\u9ED8\u8BA4\u4E3A\u201C\u65B0\u5EFA\u573A\u666F\u201D\u3002\u800C\u521B\u5EFA\u591A\u4E2A\u573A\u666F\u7684\u65B9\u6CD5\u4E5F\u5F88\u7B80\u5355\uFF0C\u9F20\u6807\u79FB\u81F3\u4E0A\u65B9\u5DE5\u5177\u680F - \u573A\u666F\u6309\u94AE\uFF0C\u5728\u4E0B\u62C9\u5217\u8868\u4E2D\u70B9\u51FB\u6DFB\u52A0\u573A\u666F\u6309\u94AE\uFF0C\u5728\u5F39\u7A97\u4E2D\u8F93\u5165\u573A\u666F\u540D\u79F0\uFF0C\u70B9\u51FB\u786E\u5B9A\uFF0C\u5373\u53EF\u521B\u5EFA\u5E76\u81EA\u52A8\u5207\u6362\u5230\u65B0\u573A\u666F\u3002</p><p>\u5982\u679C\u60A8\u60F3\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u573A\u666F\uFF0C\u53EA\u9700\u8981\u5728\u573A\u666F\u4E0B\u62C9\u5217\u8868\u4E2D\u70B9\u51FB\u7B2C\u4E00\u4E2A\u573A\u666F\u9009\u9879\uFF0C\u5C31\u53EF\u4EE5\u5207\u6362\u5230\u7B2C\u4E00\u4E2A\u573A\u666F\u3002</p><p>\u5982\u679C\u60A8\u60F3\u5220\u9664\u4E00\u4E2A\u573A\u666F\uFF0C\u53EF\u4EE5\u5728\u573A\u666F\u4E0B\u62C9\u5217\u8868\u4E2D\uFF0C\u70B9\u51FB\u5BF9\u5E94\u573A\u666F\u9009\u9879\u540E\u9762\u7684\u5220\u9664\u6309\u94AE\u3002</p><h2 id="\u521B\u5EFA\u89C6\u89D2" tabindex="-1">\u521B\u5EFA\u89C6\u89D2 <a class="header-anchor" href="#\u521B\u5EFA\u89C6\u89D2" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u5E0C\u671B\u5C06\u5F53\u524D\u89C2\u5BDF\u573A\u666F\u7684\u89C6\u89D2\u4FDD\u5B58\u4E0B\u6765\uFF0C\u5E76\u4E14\u53EF\u4EE5\u968F\u610F\u5207\u6362\uFF0C\u90A3\u4E48\u60A8\u5C31\u9700\u8981\u7528\u5230\u89C6\u89D2\u529F\u80FD\u3002</p><p>\u60A8\u53EF\u4EE5\u70B9\u51FB\u5DE5\u5177\u680F - \u89C6\u89D2 - \u4FDD\u5B58\u89C6\u89D2\u6309\u94AE\uFF0C\u5728\u5F39\u7A97\u4E2D\u8F93\u5165\u8BE5\u89C6\u89D2\u7684\u540D\u79F0\uFF0C\u70B9\u51FB\u786E\u5B9A\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u8BB0\u5F55\u4E0B\u5F53\u524D\u7684\u76F8\u673A\u89C6\u89D2\u3002</p><p>\u5F53\u60A8\u9009\u62E9\u89C6\u89D2\u4E0B\u62C9\u9009\u9879\u4E2D\u7684\u4EFB\u4E00\u89C6\u89D2\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5C06\u76F8\u673A\u79FB\u81F3\u5BF9\u5E94\u89C6\u89D2\uFF0C\u5982\u679C\u9009\u62E9\u7684\u89C6\u89D2\u4E0D\u5728\u5F53\u524D\u573A\u666F\u5185\uFF0C\u7CFB\u7EDF\u4E5F\u4F1A\u81EA\u52A8\u5207\u6362\u573A\u666F\u3002</p><p>\u60A8\u4E5F\u53EF\u4EE5\u70B9\u51FB\u89C6\u89D2\u9009\u9879\u540E\u7684\u5220\u9664\u6309\u94AE\uFF0C\u6765\u5220\u9664\u60A8\u4FDD\u5B58\u7684\u89C6\u89D2\u3002\u521D\u59CB\u89C6\u89D2\u662F\u7CFB\u7EDF\u9ED8\u8BA4\u7684\uFF0C\u65E0\u6CD5\u5220\u9664\u3002</p><h2 id="\u8FD0\u884C\u9879\u76EE" tabindex="-1">\u8FD0\u884C\u9879\u76EE <a class="header-anchor" href="#\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u5982\u679C\u60A8\u60F3\u67E5\u770B\u9879\u76EE\u7684\u5B9E\u9645\u5C55\u793A\u6548\u679C\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2 - \u8FD0\u884C\u6309\u94AE\u5C31\u53EF\u4EE5\u8FDB\u5165\u8FD0\u884C\u72B6\u6001\u3002</p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD0\u884C\u72B6\u6001\u4E0B\u4E0D\u4F1A\u663E\u793A\u8F85\u52A9\u5730\u9762\u548C\u7F51\u683C\uFF0C\u9879\u76EE\u4F1A\u8FDB\u5165\u7EAF\u5C55\u793A\u72B6\u6001\u3002</p><p>\u8FD0\u884C\u72B6\u6001\u4E0B\uFF0C\u4F1A\u9ED8\u8BA4\u5168\u5C4F\u663E\u793A\u3002\u70B9\u51FB\u53F3\u4E0A\u89D2\u9000\u51FA\u5168\u5C4F\u6309\u94AE\u53EF\u9000\u51FA\u5168\u5C4F\u72B6\u6001\u3002</p><p>\u70B9\u51FB\u53F3\u4E0A\u89D2\u9000\u51FA\u8FD0\u884C\u6309\u94AE\uFF0C\u53EF\u8FD4\u56DE\u7F16\u8F91\u72B6\u6001\u3002</p><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>\u5728\u8FD0\u884C\u72B6\u6001\u4E0B\u5BF9\u573A\u666F\u6240\u4F5C\u7684\u4EFB\u4F55\u4FEE\u6539\u90FD\u4E0D\u4F1A\u88AB\u4FDD\u5B58\u3002</p></div><h2 id="\u4FDD\u5B58\u9879\u76EE" tabindex="-1">\u4FDD\u5B58\u9879\u76EE <a class="header-anchor" href="#\u4FDD\u5B58\u9879\u76EE" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E86\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u9879\u76EE\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u628A\u5B83\u4F5C\u4E3A\u4E00\u4E2AJSON\u6587\u4EF6\u4FDD\u5B58\u5728\u672C\u5730\u3002</p><p>\u70B9\u51FB\u5DE5\u5177\u680F - \u9879\u76EE - \u4E0B\u8F7D\u9879\u76EEJSON\u6587\u4EF6\uFF0C\u7A0D\u5019\u6D4F\u89C8\u5668\u5C31\u4F1A\u81EA\u52A8\u628A\u8BE5\u6587\u4EF6\u4E0B\u8F7D\u5230\u60A8\u7684\u672C\u5730\u78C1\u76D8\u4E2D\u3002</p><p>\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5DE5\u5177\u680F - \u9879\u76EE - \u6253\u5F00\u9879\u76EEJSON\u6587\u4EF6\uFF0C\u6765\u6253\u5F00\u4E00\u4E2A\u672C\u5730\u7684\u9879\u76EE\u6587\u4EF6\u3002</p><h2 id="\u706F\u5149" tabindex="-1">\u706F\u5149 <a class="header-anchor" href="#\u706F\u5149" aria-hidden="true">#</a></h2><p>\u573A\u666F\u4F1A\u9ED8\u8BA4\u81EA\u5E26\u4E00\u4E2A\u534A\u7403\u5149\uFF0C\u5373\u73AF\u5883\u5149\u3002\u60A8\u4F1A\u770B\u5230\u8FD9\u4E2A\u7ACB\u65B9\u4F53\u9876\u90E8\u5448\u73B0\u767D\u8272\uFF0C\u4FA7\u9762\u5448\u73B0\u7070\u8272\uFF0C\u5E95\u90E8\u5448\u73B0\u9ED1\u8272\u3002\u8FD9\u662F\u56E0\u4E3A\u573A\u666F\u4E2D\u7684\u534A\u7403\u5149\u662F\u4ECE\u4E0A\u5F80\u4E0B\u7167\u5C04\u7684\uFF0C\u5E76\u4E14\u989C\u8272\u662F\u767D\u8272\u3002\u5F53\u6211\u4EEC\u8C03\u6574\u534A\u7403\u5149\u7684\u7167\u5C04\u65B9\u5411\u4EE5\u53CA\u989C\u8272\u65F6\uFF0C\u7ACB\u65B9\u4F53\u7684\u989C\u8272\u4E5F\u4F1A\u8DDF\u7740\u53D1\u751F\u53D8\u5316\u3002</p><p>\u5F53\u7136\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u81EA\u7531\u7684\u521B\u5EFA\u5176\u4ED6\u7C7B\u578B\u7684\u706F\u5149\u3002\u5728\u5DE6\u4FA7\u8D44\u6E90\u680F - \u6A21\u578B - \u57FA\u7840\u706F\u5149\u4E2D\u6211\u4EEC\u8FD8\u63D0\u4F9B\u4E86\u805A\u5149\u706F\u3001\u70B9\u5149\u6E90\u4EE5\u53CA\u5E73\u884C\u5149\u3002\u5B83\u4EEC\u7684\u533A\u522B\u5927\u81F4\u5982\u4E0B\uFF1A</p><ul><li>\u805A\u5149\u706F\uFF1A\u706F\u5149\u4EE5\u6240\u5728\u4F4D\u7F6E\u4E3A\u8D77\u70B9\uFF0C\u671D\u4E00\u4E2A\u6307\u5B9A\u7684\u65B9\u5411\u7167\u4EAE\u4E00\u5B9A\u8303\u56F4\u5185\u7684\u6247\u5F62\u533A\u57DF\u3002\u6A21\u578B\u8DDD\u706F\u5149\u8D8A\u8FDC\uFF0C\u706F\u5149\u7684\u5F3A\u5EA6\u8D8A\u5F31\u3002\u7C7B\u4F3C\u624B\u7535\u7B52\u3002</li><li>\u70B9\u5149\u6E90\uFF1A\u706F\u5149\u4EE5\u6240\u5728\u4F4D\u7F6E\u4E3A\u4E2D\u5FC3\uFF0C\u7167\u4EAE\u56DB\u5468\u4E00\u5B9A\u8303\u56F4\u5185\u7684\u533A\u57DF\u3002\u6A21\u578B\u8DDD\u706F\u5149\u8D8A\u8FDC\uFF0C\u706F\u5149\u7684\u5F3A\u5EA6\u8D8A\u5F31\u3002\u7C7B\u4F3C\u767D\u70BD\u706F\u6CE1\u3002</li><li>\u5E73\u884C\u5149\uFF1A\u706F\u5149\u4ECE\u4E00\u4E2A\u5F88\u8FDC\u7684\u5730\u65B9\u671D\u4E00\u4E2A\u65B9\u5411\u65E0\u9650\u7167\u5C04\uFF0C\u88AB\u7167\u5C04\u7684\u7269\u4F53\u671D\u5411\u706F\u5149\u7684\u4E00\u9762\u88AB\u7167\u4EAE\u3002\u7C7B\u4F3C\u592A\u9633\u5149\u3002</li><li>\u534A\u7403\u5149\uFF1A\u4E00\u822C\u7528\u4F5C\u573A\u666F\u7684\u73AF\u5883\u5149\uFF0C\u548C\u5E73\u884C\u5149\u7C7B\u4F3C\u3002</li></ul><p>\u548C\u521B\u5EFA\u6A21\u578B\u7684\u65B9\u6CD5\u4E00\u6837\uFF0C\u60A8\u53EF\u4EE5\u4ECE\u5DE6\u4FA7\u8D44\u6E90\u680F - \u6A21\u578B - \u57FA\u7840\u706F\u5149\u4E2D\u62D6\u62FD\u706F\u5149\u81F3\u753B\u5E03\u4E0A\u677E\u5F00\u9F20\u6807\uFF0C\u5373\u53EF\u751F\u6210\u4E00\u4E2A\u706F\u5149\u3002\u706F\u5149\u548C\u6A21\u578B\u4E00\u6837\u4E5F\u53EF\u5728\u53F3\u4FA7\u5C5E\u6027\u680F\u4E2D\u8FDB\u884C\u4FEE\u6539\u3002</p><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u73B0\u5728\uFF0C\u60A8\u53EA\u9700\u51C6\u5907\u597D\u6A21\u578B\uFF0C\u901A\u8FC7\u7B80\u5355\u7684\u62D6\u62FD\u53CA\u5C5E\u6027\u8BBE\u7F6E\uFF0C\u5C31\u5DF2\u7ECF\u53EF\u4EE5\u5236\u4F5C\u4E00\u4E2A\u7EAF\u9759\u6001\u573A\u666F\u4E86\u3002\u4F46\u662F\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u6211\u4EEC\u60F3\u5B9E\u73B0\u7684\u529F\u80FD\u8FDC\u4E0D\u6B62\u5982\u6B64\uFF0C\u4F8B\u5982\u7528\u6237\u4EA4\u4E92\u3001\u8BBE\u7F6E\u52A8\u753B\u3001\u6570\u636E\u5B9E\u65F6\u663E\u793A\u7B49\u7B49\u3002\u5728\u540E\u9762\uFF0C\u6211\u4EEC\u4F1A\u4E0E\u60A8\u4E00\u8D77\u901A\u8FC7\u4E00\u4E9B\u7B80\u5355\u7684\u6848\u4F8B\u6765\u4ECB\u7ECD\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u3002</p>',40),r=[p];function d(s,h,c,n,o,u){return i(),a("div",null,r)}var v=e(t,[["render",d]]);export{f as __pageData,v as default};
