import{_ as e,c as a,o as t,a as r}from"./app.7a90af25.js";const f='{"title":"\u51C6\u5907\u6A21\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51C6\u5907\u6A21\u578B","slug":"\u51C6\u5907\u6A21\u578B"},{"level":2,"title":"\u8BBE\u7F6E\u95EA\u70C1\u52A8\u753B","slug":"\u8BBE\u7F6E\u95EA\u70C1\u52A8\u753B"},{"level":2,"title":"\u8BBE\u7F6E\u52A8\u753B\u5F00\u59CB\u4E8B\u4EF6","slug":"\u8BBE\u7F6E\u52A8\u753B\u5F00\u59CB\u4E8B\u4EF6"},{"level":2,"title":"\u8BBE\u7F6E\u52A8\u753B\u505C\u6B62\u4E8B\u4EF6","slug":"\u8BBE\u7F6E\u52A8\u753B\u505C\u6B62\u4E8B\u4EF6"},{"level":2,"title":"\u6267\u884C\u4E8B\u4EF6","slug":"\u6267\u884C\u4E8B\u4EF6"},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED"}],"relativePath":"3d/editor/guide/setAnimations.md"}',i={},p=r('<p>\u5176\u5B9E\uFF0C\u5728\u4E0A\u4E00\u7BC7\u201C\u8BBE\u7F6E\u4E8B\u4EF6\u201D\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u8FC7\u6E21\u52A8\u753B\u6548\u679C\uFF1A\u989C\u8272\u9010\u6E10\u53D8\u5316\u3002\u4F46\u662F\u8FD9\u79CD\u6548\u679C\u6BD4\u8F83\u7B80\u5355\uFF0C\u5B83\u53EA\u80FD\u5355\u4E00\u7684\u4ECE\u4E00\u79CD\u72B6\u6001\u8FC7\u6E21\u5230\u53E6\u4E00\u79CD\u72B6\u6001\uFF0C\u65E0\u6CD5\u6309\u5E27\u914D\u7F6E\uFF0C\u4E5F\u65E0\u6CD5\u624B\u52A8\u505C\u6B62\u3002\u6240\u5E78\uFF0C\u6211\u4EEC\u7684\u52A8\u753B\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u8FD9\u4E9B\u529F\u80FD\uFF0C\u4E0B\u9762\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684\u6848\u4F8B\u6765\u4ECB\u7ECD\u5982\u4F55\u4F7F\u573A\u666F\u5143\u7D20\u6309\u7167\u6211\u4EEC\u9884\u8BBE\u7684\u6548\u679C\u201C\u52A8\u8D77\u6765\u201D\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u8FD9\u6837\u4E00\u4E2A\u529F\u80FD\uFF1A\u5728\u573A\u666F\u4E2D\u6709\u4E24\u4E2A\u6309\u94AE\u548C\u4E00\u4E2A\u62A5\u8B66\u88C5\u7F6E\uFF0C\u70B9\u51FB\u5176\u4E2D\u4E00\u4E2A\u6309\u94AE\uFF0C\u8BA9\u62A5\u8B66\u88C5\u7F6E\u95EA\u70C1\uFF0C\u70B9\u51FB\u53E6\u4E00\u4E2A\u6309\u94AE\uFF0C\u8BA9\u62A5\u8B66\u88C5\u7F6E\u505C\u6B62\u95EA\u70C1\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u9010\u6B65\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\u3002</p><h2 id="\u51C6\u5907\u6A21\u578B" tabindex="-1">\u51C6\u5907\u6A21\u578B <a class="header-anchor" href="#\u51C6\u5907\u6A21\u578B" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5F80\u573A\u666F\u4E2D\u62D6\u5165\u4E24\u4E2A\u7ACB\u65B9\u4F53\u548C\u4E00\u4E2A\u7403\u4F53\u3002\u5176\u4E2D\uFF0C\u7403\u4F53\u5F53\u4F5C\u662F\u62A5\u8B66\u88C5\u7F6E\uFF0C\u4E24\u4E2A\u7ACB\u65B9\u4F53\u5206\u522B\u79F0\u4E3A\u7ACB\u65B9\u4F53A\u548C\u7ACB\u65B9\u4F53B\uFF0C\u5F53\u4F5C\u662F\u4E24\u4E2A\u6309\u94AE\uFF0C\u70B9\u51FB\u7ACB\u65B9\u4F53A\u65F6\u7403\u4F53\u95EA\u70C1\uFF0C\u70B9\u51FB\u7ACB\u65B9\u4F53B\u65F6\u7403\u4F53\u505C\u6B62\u95EA\u70C1\u3002\u4E3A\u4E86\u533A\u5206\u4E24\u4E2A\u7ACB\u65B9\u4F53\uFF0C\u6211\u4EEC\u5728\u53F3\u4FA7\u5C5E\u6027\u9762\u677F\u4E2D\u5C06\u4E24\u4E2A\u7ACB\u65B9\u4F53\u7684\u540D\u79F0\u5206\u522B\u4FEE\u6539\u4E3A\u201C\u7ACB\u65B9\u4F53A\u201D\u548C\u201C\u7ACB\u65B9\u4F53B\u201D\u3002</p><p>\u5F53\u7136\uFF0C\u53EA\u662F\u8FD9\u6837\u7684\u8BDD\u7403\u4F53\u662F\u65E0\u6CD5\u6539\u53D8\u989C\u8272\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u7ED9\u7403\u4F53\u8BBE\u7F6E\u4E00\u4E2A\u6750\u8D28\u3002\u9009\u4E2D\u7403\u4F53\uFF0C\u5728\u53F3\u4FA7\u5C5E\u6027\u9762\u677F\u4E2D\u5207\u6362\u5230\u6548\u679C\u9009\u9879\u5361\uFF0C\u5728\u6750\u8D28\u4E2D\u70B9\u51FB\u6DFB\u52A0\uFF0C\u7403\u4F53\u5C31\u4F1A\u7ED1\u5B9A\u4E00\u4E2A\u6807\u51C6\u6750\u8D28\u3002\u60A8\u53EF\u4EE5\u5C1D\u8BD5\u4E0B\u4FEE\u6539\u6750\u8D28\u7684\u989C\u8272\u5C5E\u6027\uFF0C\u53EF\u4EE5\u53D1\u73B0\u7403\u4F53\u8868\u9762\u7684\u989C\u8272\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u7136\u540E\u6211\u4EEC\u5C06\u7403\u4F53\u7684\u6750\u8D28\u989C\u8272\u6062\u590D\u4E3A\u767D\u8272\uFF0C\u8FD9\u6837\u6750\u8D28\u5C31\u8BBE\u7F6E\u597D\u4E86\u3002</p><h2 id="\u8BBE\u7F6E\u95EA\u70C1\u52A8\u753B" tabindex="-1">\u8BBE\u7F6E\u95EA\u70C1\u52A8\u753B <a class="header-anchor" href="#\u8BBE\u7F6E\u95EA\u70C1\u52A8\u753B" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u7ED9\u7403\u4F53\u8BBE\u7F6E\u4E00\u4E2A\u989C\u8272\u95EA\u70C1\u52A8\u753B\u3002</p><p>\u9009\u4E2D\u7403\u4F53\uFF0C\u5728\u53F3\u4FA7\u5C5E\u6027\u9762\u677F\u4E2D\u5207\u6362\u81F3\u52A8\u6548\u9009\u9879\u5361\uFF0C\u70B9\u51FB\u201C\u81EA\u5B9A\u4E49\u52A8\u753B\u201D\u540E\u9762\u7684\u201C+\u201D\u6309\u94AE\uFF0C\u4F1A\u5F39\u51FA\u52A8\u753B\u7F16\u8F91\u7A97\u53E3\u3002\u52A8\u753B\u540D\u79F0\u9ED8\u8BA4\u4E3A\u201Canimation\u201D\uFF0C\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u4FEE\u6539\u4E3A\u201C\u95EA\u70C1\u201D\u3002\u7136\u540E\u6211\u4EEC\u9700\u8981\u7F16\u8F91\u52A8\u753B\u5E27\u3002</p><p>\u8FD9\u91CC\u7B80\u5355\u4ECB\u7ECD\u4E0B\u52A8\u753B\u5E27\u7684\u6982\u5FF5\u3002\u6240\u8C13\u52A8\u753B\u5E27\uFF0C\u5373\u5728\u67D0\u4E2A\u65F6\u95F4\u70B9\u76EE\u6807\u7684\u5404\u4E2A\u5C5E\u6027\u663E\u793A\u72B6\u6001\u7684\u96C6\u5408\uFF0C\u800C\u52A8\u753B\u5E27\u4E2D\u7684\u65F6\u95F4\u8868\u793A\u4E86\u76EE\u6807\u7684\u5404\u4E2A\u5C5E\u6027\u7531\u524D\u4E00\u5E27\u7684\u503C\u53D8\u5316\u5230\u5F53\u524D\u5E27\u7684\u503C\u6240\u9700\u7684\u65F6\u95F4\u3002\u5F53\u52A8\u753B\u5F00\u59CB\u64AD\u653E\u7684\u4E00\u77AC\u95F4\uFF0C\u76EE\u6807\u7684\u5404\u4E2A\u5C5E\u6027\u7684\u503C\u7EC4\u6210\u4E86\u52A8\u753B\u7684\u5F00\u59CB\u5E27\uFF0C\u4E5F\u53EF\u4EE5\u79F0\u4E3A\u52A8\u753B\u5E270\uFF0C\u7136\u540E\u4E0D\u65AD\u7684\u8FC7\u6E21\u5230\u6211\u4EEC\u8BBE\u7F6E\u7684\u5404\u4E2A\u52A8\u753B\u5E27\uFF0C\u5F53\u8FC7\u6E21\u5230\u6700\u540E\u4E00\u4E2A\u52A8\u753B\u5E27\u65F6\uFF0C\u8FD9\u6BB5\u52A8\u753B\u5C31\u7ED3\u675F\u4E86\u3002\u5728\u4E8B\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u8FD9\u6BB5\u52A8\u753B\u91CD\u590D\u64AD\u653E\u7684\u6B21\u6570\uFF0C\u4EE5\u53CA\u64AD\u653E\u5B8C\u6BD5\u540E\u662F\u5426\u5C06\u76EE\u6807\u5C5E\u6027\u503C\u8FD8\u539F\u5230\u52A8\u753B\u5E270\u7684\u72B6\u6001\u3002</p><p>\u5BF9\u4E8E\u7403\u4F53\u7684\u989C\u8272\u95EA\u70C1\u52A8\u753B\uFF0C\u5B83\u5B9E\u9645\u662F\u7531\u4E0B\u5217\u6B65\u9AA4\u7EC4\u6210\u7684\uFF1A\u5F53\u52A8\u753B\u5F00\u59CB\u65F6\uFF0C\u7403\u4F53\u4E3A\u767D\u8272\uFF0C\u7ECF\u8FC71\u79D2\uFF0C\u7403\u4F53\u53D8\u4E3A\u7EA2\u8272\uFF0C\u518D\u7ECF\u8FC71\u79D2\uFF0C\u7403\u4F53\u53D8\u4E3A\u767D\u8272\uFF0C\u7136\u540E\u518D\u91CD\u590D\u4E0A\u8FF0\u8FC7\u7A0B\u3002\u56E0\u6B64\uFF0C\u52A0\u4E0A\u521D\u59CB\u7684\u52A8\u753B\u5E270\uFF0C\u6211\u4EEC\u4E00\u5171\u9700\u89813\u4E2A\u52A8\u753B\u5E27\uFF1A\u767D\u8272 -&gt; \u7EA2\u8272 -&gt; \u767D\u8272\u3002\u52A8\u753B\u5E270\u65E0\u9700\u8BBE\u7F6E\uFF0C\u56E0\u4E3A\u6211\u4EEC\u7684\u7403\u4F53\u6750\u8D28\u989C\u8272\u5DF2\u7ECF\u8BBE\u7F6E\u4E3A\u767D\u8272\uFF0C\u52A8\u753B\u81EA\u7136\u4F1A\u4ECE\u767D\u8272\u5F00\u59CB\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD8\u9700\u8981\u8BBE\u7F6E2\u4E2A\u52A8\u753B\u5E27\uFF1A\u7EA2\u8272\u3001\u767D\u8272\u3002</p><p>\u6211\u4EEC\u9996\u5148\u8BBE\u7F6E\u52A8\u753B\u5E271\uFF0C\u56E0\u4E3A\u9762\u677F\u5DF2\u7ECF\u9ED8\u8BA4\u6DFB\u52A0\u4E86\u52A8\u753B\u5E271\uFF0C\u6240\u4EE5\u6211\u4EEC\u76F4\u63A5\u7F16\u8F91\u5373\u53EF\u3002\u5728\u52A8\u753B\u7F16\u8F91\u9762\u677F\u4E2D\u6EDA\u52A8\u5230\u5C5E\u6027\u8BBE\u7F6E\u7684\u5E95\u90E8\uFF0C\u5C06\u6750\u8D28 - \u989C\u8272\u4FEE\u6539\u4E3A\u201Crgba(255, 0, 0, 1)\u201D\u6216\u8005\u201C#F00\u201D\uFF08\u6CE8\u610F\uFF0C\u5982\u679C\u6CA1\u6709\u5148\u7ED9\u7403\u4F53\u8BBE\u7F6E\u6750\u8D28\uFF0C\u8FD9\u91CC\u662F\u6CA1\u6709\u6750\u8D28\u76F8\u5173\u7684\u5C5E\u6027\u8BBE\u7F6E\u7684\uFF09\uFF0C\u8FC7\u6E21\u65F6\u95F4\u9ED8\u8BA4\u662F1\u79D2\u3002</p><p>\u7136\u540E\u70B9\u51FB\u52A8\u753B\u5E271\u540E\u9762\u7684\u201C+\u201D\u6309\u94AE\uFF0C\u6DFB\u52A0\u52A8\u753B\u5E272\uFF0C\u5C06\u5C06\u52A8\u753B\u5E272\u7684\u6750\u8D28 - \u989C\u8272\u4FEE\u6539\u4E3A\u201Crgba(255, 255, 255, 1)\u201D\u6216\u8005\u201C#FFF\u201D\uFF0C\u8FC7\u6E21\u65F6\u95F4\u9ED8\u8BA4\u662F1\u79D2\u3002</p><p>\u73B0\u5728\uFF0C\u52A8\u753B\u5DF2\u7ECF\u8BBE\u7F6E\u597D\u4E86\uFF0C\u540D\u79F0\u4E3A\u95EA\u70C1\uFF0C\u6709\u4E24\u4E2A\u52A8\u753B\u5E27\uFF0C\u52A8\u753B\u5E271\u65F6\u95F4\u4E3A1\u79D2\uFF0C\u989C\u8272\u4E3A\u7EA2\u8272\uFF0C\u52A8\u753B\u5E272\u65F6\u95F4\u4E3A1\u79D2\uFF0C\u989C\u8272\u4E3A\u767D\u8272\u3002\u70B9\u51FB\u786E\u5B9A\uFF0C\u53F3\u4FA7\u5C5E\u6027\u9762\u677F\u4E2D\u81EA\u5B9A\u4E49\u52A8\u753B\u5217\u8868\u4F1A\u589E\u52A0\u4E00\u6761\u52A8\u753B\u9879\u3002</p><h2 id="\u8BBE\u7F6E\u52A8\u753B\u5F00\u59CB\u4E8B\u4EF6" tabindex="-1">\u8BBE\u7F6E\u52A8\u753B\u5F00\u59CB\u4E8B\u4EF6 <a class="header-anchor" href="#\u8BBE\u7F6E\u52A8\u753B\u5F00\u59CB\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u52A8\u753B\u7684\u64AD\u653E\u548C\u505C\u6B62\u9700\u8981\u901A\u8FC7\u4E8B\u4EF6\u7684\u76F8\u5173\u52A8\u4F5C\u6765\u63A7\u5236\uFF0C\u4E0B\u9762\u6211\u4EEC\u5148\u914D\u7F6E\u7ACB\u65B9\u4F53A\u7684\u52A8\u753B\u5F00\u59CB\u4E8B\u4EF6\u3002</p><p>\u9009\u4E2D\u7ACB\u65B9\u4F53A\uFF0C\u53F3\u4FA7\u5C5E\u6027\u9762\u677F\u5207\u6362\u81F3\u4E8B\u4EF6\u9009\u9879\u5361\uFF0C\u9009\u62E9\u5E76\u6DFB\u52A0\u89E6\u53D1\u4E8B\u4EF6\u201C\u9F20\u6807\u5355\u51FB\u540E\u201D\uFF0C\u70B9\u51FB\u201C+ \u52A8\u4F5C\u201D\u6309\u94AE\uFF0C\u5F39\u51FA\u52A8\u4F5C\u7F16\u8F91\u5F39\u7A97\u3002\u5728\u4E0B\u62C9\u9879\u4E2D\u9009\u62E9\u52A8\u4F5C\u201C\u5F00\u59CB\u52A8\u753B\u201D\uFF0C\u4F1A\u51FA\u73B0\u5F00\u59CB\u52A8\u753B\u7684\u76F8\u5173\u53C2\u6570\u914D\u7F6E\u3002\u6211\u4EEC\u5C06\u201C\u76EE\u6807\u201D\u8BBE\u7F6E\u4E3A\u201C\u7403\u4F53\u201D\uFF0C\u9009\u62E9\u64AD\u653E\u201C\u95EA\u70C1\u201D\u52A8\u753B\uFF0C\u5FAA\u73AF\u6B21\u6570\u4E0D\u8BBE\u7F6E\u6216\u8005\u8BBE\u7F6E\u4E3A0\u8868\u793A\u65E0\u9650\u5FAA\u73AF\uFF0C\u70B9\u51FB\u786E\u5B9A\u5173\u95ED\u5F39\u7A97\u3002\u8FD9\u6837\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u201C\u5F00\u59CB\u52A8\u753B\u201D\u7684\u76F8\u5173\u63CF\u8FF0\uFF0C\u5F00\u59CB\u52A8\u753B\u4E8B\u4EF6\u5C31\u8BBE\u7F6E\u597D\u4E86\u3002</p><h2 id="\u8BBE\u7F6E\u52A8\u753B\u505C\u6B62\u4E8B\u4EF6" tabindex="-1">\u8BBE\u7F6E\u52A8\u753B\u505C\u6B62\u4E8B\u4EF6 <a class="header-anchor" href="#\u8BBE\u7F6E\u52A8\u753B\u505C\u6B62\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u914D\u7F6E\u7ACB\u65B9\u4F53B\u7684\u52A8\u753B\u7ED3\u675F\u4E8B\u4EF6\u3002</p><p>\u9009\u4E2D\u7ACB\u65B9\u4F53B\uFF0C\u53C2\u8003\u7ACB\u65B9\u4F53A\u7684\u52A8\u4F5C\u914D\u7F6E\u6B65\u9AA4\u6DFB\u52A0\u201C\u505C\u6B62\u52A8\u753B\u201D\uFF0C\u76EE\u6807\u4E5F\u662F\u201C\u7403\u4F53\u201D\uFF0C\u9009\u62E9\u505C\u6B62\u201C\u95EA\u70C1\u201D\u52A8\u753B\uFF0C\u70B9\u51FB\u786E\u5B9A\u3002\u8FD9\u6837\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u201C\u505C\u6B62\u52A8\u753B\u201D\u76F8\u5173\u63CF\u8FF0\uFF0C\u505C\u6B62\u52A8\u753B\u4E8B\u4EF6\u4E5F\u8BBE\u7F6E\u597D\u4E86\u3002</p><h2 id="\u6267\u884C\u4E8B\u4EF6" tabindex="-1">\u6267\u884C\u4E8B\u4EF6 <a class="header-anchor" href="#\u6267\u884C\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u603B\u7ED3\u4E0B\u4E4B\u524D\u7684\u6B65\u9AA4\uFF1A\u9996\u5148\u7ED9\u7403\u4F53\u589E\u52A0\u6750\u8D28\uFF0C\u989C\u8272\u8BBE\u7F6E\u4E3A\u767D\u8272\uFF0C\u7136\u540E\u7F16\u8F91\u7403\u4F53\u201C\u95EA\u70C1\u201D\u52A8\u753B\uFF0C\u7B2C\u4E00\u5E27\u4E3A\u7EA2\u8272\uFF0C\u7B2C\u4E8C\u5E27\u4E3A\u767D\u8272\uFF0C\u7136\u540E\u7ED9\u7ACB\u65B9\u4F53A\u8BBE\u7F6E\u64AD\u653E\u7403\u4F53\u7684\u95EA\u70C1\u52A8\u753B\u4E8B\u4EF6\uFF0C\u4EE5\u53CA\u7ED9\u7ACB\u65B9\u4F53B\u8BBE\u7F6E\u505C\u6B62\u7403\u4F53\u7684\u95EA\u70C1\u52A8\u753B\u4E8B\u4EF6\u3002\u6700\u540E\uFF0C\u4ECD\u7136\u8981\u70B9\u51FB\u201C\u8FD0\u884C\u201D\u6309\u94AE\u8FDB\u5165\u9879\u76EE\u7684\u8FD0\u884C\u72B6\u6001\u3002</p><p>\u70B9\u51FB\u7ACB\u65B9\u4F53A\uFF0C\u7403\u4F53\u7684\u989C\u8272\u5F00\u59CB\u95EA\u70C1\u5E76\u65E0\u9650\u5FAA\u73AF\u6267\u884C\uFF0C\u70B9\u51FB\u7ACB\u65B9\u4F53B\uFF0C\u7403\u4F53\u4F1A\u505C\u6B62\u95EA\u70C1\u52A8\u753B\u5E76\u6062\u590D\u4E3A\u767D\u8272\u3002\u8FD9\u6837\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u62A5\u8B66\u6848\u4F8B\u5C31\u5B8C\u6210\u4E86\u3002</p><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u52A8\u753B\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u590D\u6742\u7684\u52A8\u753B\uFF0C\u4F7F\u573A\u666F\u53D8\u5F97\u751F\u52A8\u6709\u8DA3\u3002\u4E0D\u540C\u7C7B\u578B\u7684\u76EE\u6807\u53EF\u914D\u7F6E\u7684\u52A8\u753B\u5C5E\u6027\u4E5F\u4E0D\u540C\uFF0C\u60F3\u8981\u4E86\u89E3\u66F4\u591A\uFF0C\u8BF7\u53C2\u9605\u6587\u6863<a href="https://www.yuque.com/u479944/afy6zg/ardrxwzn3dz16yel" target="_blank" rel="noopener noreferrer">\u52A8\u753B</a>\u3002</p>',25),d=[p];function n(h,s,l,o,c,_){return t(),a("div",null,d)}var g=e(i,[["render",n]]);export{f as __pageData,g as default};
