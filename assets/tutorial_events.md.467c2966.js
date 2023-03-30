import{_ as a,c as s,o as l,a as t,b as n}from"./app.7a90af25.js";var e="/img/event_select_node.png",p="/img/event_add_event.png",o="/img/event_condition_success.gif",u="/img/event_click_add_trigger.png",c="/img/event_add_trigger.png",i="/img/event_trigger_success.gif",r="/img/userdefinedMessage_event.png",d="/img/userDefinedMessage.gif";const S='{"title":"\u6D88\u606F\u4E8B\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D1\u9001\u6570\u636E/\u81EA\u5B9A\u4E49\u6D88\u606F","slug":"\u53D1\u9001\u6570\u636E-\u81EA\u5B9A\u4E49\u6D88\u606F"},{"level":2,"title":"\u76D1\u542C\u6D88\u606F\uFF08\u8BA2\u9605\uFF09","slug":"\u76D1\u542C\u6D88\u606F\uFF08\u8BA2\u9605\uFF09"},{"level":2,"title":"\u53D6\u6D88\u76D1\u542C","slug":"\u53D6\u6D88\u76D1\u542C"},{"level":2,"title":"\u5185\u7F6E API \u6D88\u606F","slug":"\u5185\u7F6E-api-\u6D88\u606F"},{"level":2,"title":"\u4E8B\u4EF6\u53CA\u89E6\u53D1\u5668","slug":"\u4E8B\u4EF6\u53CA\u89E6\u53D1\u5668"}],"relativePath":"tutorial/events.md"}',k={},m=t(`<h1 id="\u6D88\u606F\u4E8B\u4EF6" tabindex="-1">\u6D88\u606F\u4E8B\u4EF6 <a class="header-anchor" href="#\u6D88\u606F\u4E8B\u4EF6" aria-hidden="true">#</a></h1><p>meta2d \u652F\u6301\u8BA2\u9605\u548C\u53D1\u9001\u6D88\u606F\uFF0C\u4F7F\u7528(\u5185\u7F6E)\uFF1A<a href="https://github.com/developit/mitt" target="_blank" rel="noopener noreferrer">mitt</a></p><p>\u5F88\u591A\u4EA4\u4E92\u64CD\u4F5C\uFF0C\u90FD\u901A\u8FC7 mitt \u53D1\u9001\u6D88\u606F</p><h2 id="\u53D1\u9001\u6570\u636E-\u81EA\u5B9A\u4E49\u6D88\u606F" tabindex="-1">\u53D1\u9001\u6570\u636E/\u81EA\u5B9A\u4E49\u6D88\u606F <a class="header-anchor" href="#\u53D1\u9001\u6570\u636E-\u81EA\u5B9A\u4E49\u6D88\u606F" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// data \u53EF\u4EE5\u4E3A\u4EFB\u610F\u6570\u636E</span>
meta2d<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u76D1\u542C\u6D88\u606F\uFF08\u8BA2\u9605\uFF09" tabindex="-1">\u76D1\u542C\u6D88\u606F\uFF08\u8BA2\u9605\uFF09 <a class="header-anchor" href="#\u76D1\u542C\u6D88\u606F\uFF08\u8BA2\u9605\uFF09" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E0D\u7528\u65F6\uFF0C\u53C8\u4E0D\u9500\u6BC1meta2d\u5B9E\u4F8B\uFF0C\u8BB0\u5F97\u53D6\u6D88\u8BA2\u9605\u3002</span>

<span class="token comment">// \u76D1\u542C\u5168\u90E8\u6D88\u606F</span>
meta2d<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53D6\u6D88\u76D1\u542C" tabindex="-1">\u53D6\u6D88\u76D1\u542C <a class="header-anchor" href="#\u53D6\u6D88\u76D1\u542C" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BA2\u9605</span>
meta2d<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53D6\u6D88\u8BA2\u9605</span>
meta2d<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5185\u7F6E-api-\u6D88\u606F" tabindex="-1">\u5185\u7F6E API \u6D88\u606F <a class="header-anchor" href="#\u5185\u7F6E-api-\u6D88\u606F" aria-hidden="true">#</a></h2>`,10),_=n("table",null,[n("thead",null,[n("tr",null,[n("th",null,[n("strong",null,"event\uFF08\u5B57\u7B26\u4E32\uFF09")]),n("th",null,[n("strong",null,"data")]),n("th",null,[n("strong",null,"\u63CF\u8FF0")])])]),n("tbody",null,[n("tr",null,[n("td",null,"opened"),n("td"),n("td",null,"\u6253\u5F00\u65B0\u6587\u4EF6")]),n("tr",null,[n("td",null,"enter"),n("td",null,"Pen"),n("td",null,"\u9F20\u6807\u8FDB\u5165\u753B\u7B14")]),n("tr",null,[n("td",null,"leave"),n("td",null,"Pen"),n("td",null,"\u9F20\u6807\u79BB\u5F00\u753B\u7B14")]),n("tr",null,[n("td",null,"active"),n("td",null,"Pen[]"),n("td",null,"\u9009\u4E2D\u4E00\u4E2A/\u591A\u4E2A\u753B\u7B14")]),n("tr",null,[n("td",null,"inactive"),n("td",null,"Pen[]"),n("td",null,"\u53D6\u6D88\u9009\u4E2D")]),n("tr",null,[n("td",null,"add"),n("td",null,"Pen[]"),n("td",null,"\u6DFB\u52A0\u4E00\u4E2A/\u591A\u4E2A\u753B\u7B14")]),n("tr",null,[n("td",null,"update"),n("td",{"previous:":"","Pen[],":"","current:":"","Pen[]":""}),n("td",null,"\u7F16\u8F91\u753B\u7B14")]),n("tr",null,[n("td",null,"delete"),n("td",null,"Pen[]"),n("td",null,"\u5220\u9664\u753B\u7B14")]),n("tr",null,[n("td",null,"scale"),n("td",null,"number"),n("td",null,"\u7F29\u653E\u753B\u5E03")]),n("tr",null,[n("td",null,"translate"),n("td",null,"Object: x, y"),n("td",null,"\u5E73\u79FB\u753B\u5E03")]),n("tr",null,[n("td",null,"resizePens"),n("td",null,"Pen[]"),n("td",null,"\u753B\u7B14\u5927\u5C0F\u6539\u53D8")]),n("tr",null,[n("td",null,"rotatePens"),n("td",null,"Pen[]"),n("td",null,"\u753B\u7B14\u88AB\u65CB\u8F6C")]),n("tr",null,[n("td",null,"translatePens"),n("td",null,"Pen[]"),n("td",null,"\u79FB\u52A8\u753B\u7B14\u7ED3\u675F")]),n("tr",null,[n("td",null,"translatingPens"),n("td",null,"Pen[]"),n("td",null,"\u79FB\u52A8\u753B\u7B14\u4E2D")]),n("tr",null,[n("td",null,"click"),n("td",null,"Point & Pen"),n("td",null,"\u70B9\u51FB\uFF0C\u9F20\u6807\u5DE6\u51FB up")]),n("tr",null,[n("td",null,"mousedown"),n("td",null,"Point & Pen"),n("td",null,"\u9F20\u6807 down")]),n("tr",null,[n("td",null,"dblclick"),n("td",null,"Point & Pen"),n("td",null,"\u53CC\u51FB")]),n("tr",null,[n("td",null,"animateEnd"),n("td"),n("td",null,"\u5355\u4E2A\u753B\u7B14\u52A8\u753B\u64AD\u653E\u5B8C\u6210")]),n("tr",null,[n("td",null,"mediaEnd"),n("td",null,"Pen"),n("td",null,"\u89C6\u9891/\u97F3\u9891\uFF08audio/video\uFF09\u64AD\u653E\u7ED3\u675F")]),n("tr",null,[n("td",null,"socket"),n("td",null,"message"),n("td",null,"\u76D1\u542C\u7F51\u7EDC\u6D88\u606F")]),n("tr",null,[n("td",null,"undo"),n("td"),n("td",null,"\u64A4\u9500\u540E")]),n("tr",null,[n("td",null,"redo"),n("td"),n("td",null,"\u6062\u590D\u540E")]),n("tr",null,[n("td",null,"clickInput"),n("td"),n("td",null,"\u5355\u51FB\u8F93\u5165\u6846")]),n("tr",null,[n("td",null,"input"),n("td",null,"pen & text"),n("td",null,"\u8F93\u5165\u6846\u952E\u76D8\u8F93\u5165")]),n("tr",null,[n("td",null,"valueUpdate"),n("td",null,"pen"),n("td",null,"\u4FEE\u6539\u5C5E\u6027\u503C")]),n("tr",null,[n("td",null,"contextmenu"),n("td",null,"e & bounding"),n("td",null,"\u53F3\u952E\u4E0A\u4E0B\u6587\u83DC\u5355")])])],-1),g=t('<h2 id="\u4E8B\u4EF6\u53CA\u89E6\u53D1\u5668" tabindex="-1">\u4E8B\u4EF6\u53CA\u89E6\u53D1\u5668 <a class="header-anchor" href="#\u4E8B\u4EF6\u53CA\u89E6\u53D1\u5668" aria-hidden="true">#</a></h2><p><em>\u6CE8\u610F</em>\uFF1A\u4E8B\u4EF6\u6216\u8005\u89E6\u53D1\u5668\u90FD\u5FC5\u987B\u5728\u753B\u5E03\u9501\u5B9A\u7684\u60C5\u51B5\u4E0B\u624D\u4F1A\u6267\u884C\u3002\u8BE6\u89C1 <a href="./../api/core.html#setvalue">setValue</a></p><ul><li><strong>\u4E8B\u4EF6</strong></li></ul><ol><li>\u9009\u4E2D\u8282\u70B9\uFF0C\u70B9\u51FB\u4E8B\u4EF6\u9762\u677F\u3002</li></ol><p><img src="'+e+'" alt=""></p><ol start="2"><li>\u70B9\u51FB\u6DFB\u52A0\u4E8B\u4EF6\uFF0C\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B\u548C\u884C\u4E3A\u3002</li></ol><p><img src="'+p+'" alt=""></p><ol start="3"><li>\u9501\u5B9A\u753B\u5E03\uFF0C\u89E6\u53D1\u4E8B\u4EF6\u3002</li></ol><p><img src="'+o+'" alt=""></p><ul><li><strong>\u89E6\u53D1\u5668</strong></li></ul><p>\u6F14\u793A\u89C6\u9891\u3010\u6761\u4EF6\u53D8\u5316\u89E6\u53D1\u5B9E\u65F6\u544A\u8B66\u3011\uFF1A<a href="https://www.bilibili.com/video/BV1dT4y1U7V1?spm_id_from=333.999.0.0" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1dT4y1U7V1?spm_id_from=333.999.0.0</a></p><ol><li>\u70B9\u51FB&quot;\u6DFB\u52A0\u4E8B\u4EF6&quot;,\u70B9\u51FB&quot;\u8BBE\u7F6E\u89E6\u53D1\u6761\u4EF6&quot;\uFF1B</li></ol><p><img src="'+u+'" alt=""></p><ol start="2"><li>\u8BBE\u7F6E\u89E6\u53D1\u6761\u4EF6\u4EE5\u53CA\u89E6\u53D1\u6761\u4EF6\u6210\u7ACB\u540E\u7684\u4E8B\u4EF6\uFF1B</li></ol><p><img src="'+c+'" alt=""></p><ul><li>\u5982\u679C\u9700\u8981\u89E6\u53D1\u6761\u4EF6\u6210\u7ACB\u540E\u76F4\u63A5\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u7C7B\u578B\u53EF\u9009\u62E9\u201C\u503C\u53D8\u5316\u201D\u3002</li></ul><ol><li>\u89E6\u53D1\u6761\u4EF6\u6210\u7ACB\uFF0C\u6267\u884C\u4E8B\u4EF6\u3002</li></ol><p><img src="'+i+`" alt=""></p><ul><li>\u89E6\u53D1\u6761\u4EF6\u4E2D\u7684JavaScript\u4F18\u5148\u7EA7\u9AD8\u4E8E\u4E0A\u65B9\u7684\u201C\u5C5E\u6027\u540D+\u6761\u4EF6+\u5C5E\u6027\u503C\u201D\u7EC4\u5408\u3002</li><li>\u89E6\u53D1\u6761\u4EF6\u4E2D\u7684JavaScript\u80FD\u591F\u76F4\u63A5\u83B7\u53D6\u5230pen\u53C2\u6570\uFF0C\u9700\u8FD4\u56DE\u3002</li></ul><p>\u5355\u4E2A\u6761\u4EF6</p><div class="language-"><pre><code> \u5C5E\u6027\u540D: text
 \u6761\u4EF6: &gt;=
 \u5C5E\u6027\u503C: 100
 \u7B49\u4EF7\u4E8E
 JavaScript\u8F93\u5165 return pen.text&gt;=100
</code></pre></div><p>\u591A\u4E2A\u6761\u4EF6</p><div class="language-"><pre><code>\u9AD8\u4F18\u5148\u7EA7 JavaScript \u8F93\u5165 return pen.text &gt;= 100 &amp;&amp; pen.text &lt;= 200;
</code></pre></div><ul><li><strong>\u81EA\u5B9A\u4E49\u6D88\u606F(\u5F39\u6846\u793A\u4F8B)</strong></li></ul><ol><li>\u4E3A\u8282\u70B9\u914D\u7F6E\u81EA\u5B9A\u4E49\u6D88\u606F\u4E8B\u4EF6</li></ol><p>\u53C2\u8003\u4E0A\u65B9\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u884C\u4E3A\u9009\u62E9\u201C\u81EA\u5B9A\u4E49\u6D88\u606F\u201D\uFF0C\u914D\u7F6E\u6D88\u606F\u540D\u548C\u53C2\u6570\u3002 <img src="`+r+`" alt=""></p><ol start="2"><li>\u76D1\u542C\u81EA\u5B9A\u4E49\u6D88\u606F</li></ol><div class="language-js"><pre><code><span class="token comment">// import { message } from &#39;ant-design-vue&#39;;</span>

meta2d<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;userDefindMessage&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pen <span class="token operator">=</span> e<span class="token punctuation">.</span>pen<span class="token punctuation">;</span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> e<span class="token punctuation">.</span>params<span class="token punctuation">;</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>name <span class="token operator">+</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// message.info(pen.name + params);</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6F14\u793A\u89C6\u9891\u3010\u70B9\u51FB\u7EC4\u4EF6\uFF0C\u663E\u793A\u5F39\u6846\u3011<a href="https://www.bilibili.com/video/BV1634y1v7Yz?spm_id_from=333.999.0.0" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1634y1v7Yz?spm_id_from=333.999.0.0</a></p><ol start="3"><li>\u89E6\u53D1\u4E8B\u4EF6</li></ol><p><img src="`+d+'" alt=""></p>',31),v=[m,_,g];function h(f,P,b,w,x,T){return l(),s("div",null,v)}var y=a(k,[["render",h]]);export{S as __pageData,y as default};
