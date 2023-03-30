import{_ as n,c as a,o as s,a as t}from"./app.7a90af25.js";const _='{"title":"\u5F00\u53D1\u8005\u4E2D\u5FC3","description":"","frontmatter":{"home":true,"title":"\u5F00\u53D1\u8005\u4E2D\u5FC3","pageClass":"le5le-home","heroAlt":"Le5le Meta2d","heroText":"\u4E50\u543E\u4E50 \u53EF\u89C6\u5316","tagline":"\u5168\u65B0web\u53EF\u89C6\u5316\u5F15\u64CE","actionText":"\u5F00\u59CB\u4E0A\u624B","actionLink":"/tutorial/start","features":[{"title":"\u9AD8\u6548\u3001\u5353\u8D8A","details":"\u6570\u636E\u4E3A\u6838\u5FC3\u3001\u6570\u636E\u9A71\u52A8\u663E\u793A\uFF0C\u6570\u636E+ \u7B97\u6CD5 + \u98CE\u683C = \u6829\u6829\u5982\u751F\uFF1B\u591A\u72B6\u6001\u5448\u73B0\uFF0C\u8FDB\u5EA6\u3001\u52A8\u6548\u591A\u89D2\u5EA6\u52A8\u6001\u5C55\u793A\uFF1B\u652F\u63011\u4E07+\u4EE5\u4E0A\u8282\u70B9\u30011000+\u52A8\u753B"},{"title":"\u5B9E\u65F6\u76D1\u542C\u3001\u4EA4\u4E92\u54CD\u5E94","details":"\u5B9E\u65F6\u52A8\u6001\u6570\u636E\u76D1\u542C\uFF1B\u753B\u7B14\u5168\u751F\u547D\u5468\u671F\u4E8B\u4EF6\uFF08\u521B\u5EFA\u3001\u66F4\u65B0\u3001\u9500\u6BC1\uFF09\uFF1B\u9F20\u6807\u8FDB\u5165\u3001\u79FB\u51FA\u3001\u5355\u51FB\u3001\u9009\u4E2D\u7B49\u4E8B\u4EF6\uFF1B\u79FB\u52A8\u3001\u7F29\u653E\u3001\u65CB\u8F6C\u7B49\u4E8B\u4EF6\uFF1B\u7F51\u7EDC\u6D88\u606F\u4E8B\u4EF6\uFF1B\u52A8\u753B\u3001\u89C6\u9891\u64AD\u653E\u4E8B\u4EF6\uFF1B\u6587\u672C\u8F93\u5165\u4E8B\u4EF6"},{"title":"\u53EF\u6269\u5C55\u3001\u4E30\u5BCC\u573A\u666F","details":"\u53EF\u5B9A\u5236\u5316\u5F00\u53D1\u56FE\u5F62\u5E93\uFF1B\u652F\u6301\u81EA\u52A8\u7B97\u6CD5\u3001\u4E1A\u52A1\u7B97\u6CD5\u7B49\u4E2D\u95F4\u4EF6\u6269\u5C55\uFF1B\u67B6\u6784\u62D3\u6251\u56FE\u3001UML\u56FE\u3001\u8111\u56FE\uFF0C\u7535\u529B\u80FD\u6E90\u3001\u6C34\u5229\uFF0C\u7269\u8054\u7F51\u3001\u5DE5\u4E1A\u4E92\u8054\u7F51\uFF0C\u667A\u6167\u57CE\u5E02\u3001\u667A\u6167\u533B\u7597\u3001\u667A\u6167\u519C\u4E1A\uFF0C\u5927\u5C4F\u5C55\u793A\u3001IT\u8FD0\u7EF4\u7B49\u591A\u573A\u666F\u652F\u6301"}],"footer":"Copyright \xA9 2020-present le5le.com"},"headers":[],"relativePath":"home.md"}',e={},o=t(`<div class="language-bash"><pre><code><span class="token comment"># Install meta2d</span>
<span class="token function">yarn</span> <span class="token function">add</span> -D @meta2d/core
<span class="token punctuation">..</span>.

<span class="token comment"># Register</span>
<span class="token function">import</span> <span class="token punctuation">{</span> Meta2d <span class="token punctuation">}</span> from <span class="token string">&#39;@meta2d/core&#39;</span><span class="token punctuation">;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> register as registerMyDiagram <span class="token punctuation">}</span> from <span class="token string">&#39;my-diagram&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># &lt;div id=&quot;meta2d&quot;&gt;&lt;/div&gt;</span>
new Meta2d<span class="token punctuation">(</span><span class="token string">&#39;meta2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

registerMyDiagram<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># Open a json</span>
meta2d.open<span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>`,1),p=[o];function c(i,l,r,u,d,m){return s(),a("div",null,p)}var g=n(e,[["render",c]]);export{_ as __pageData,g as default};
