import{_ as n,c as s,o as a,a as t}from"./app.7a90af25.js";const m='{"title":"Utils","description":"","frontmatter":{},"headers":[{"level":2,"title":"formatPadding","slug":"formatpadding"},{"level":2,"title":"deepClone","slug":"deepclone"},{"level":2,"title":"s8","slug":"s8"},{"level":2,"title":"rgba","slug":"rgba"}],"relativePath":"api/utils.md"}',p={},e=t(`<h1 id="utils" tabindex="-1">Utils <a class="header-anchor" href="#utils" aria-hidden="true">#</a></h1><h2 id="formatpadding" tabindex="-1">formatPadding <a class="header-anchor" href="#formatpadding" aria-hidden="true">#</a></h2><p>\u5C06 padding \u8F6C\u6362\u6210\u6570\u7EC4\u683C\u5F0F [top, right, bottom, left]<br> padding \u89C4\u5219\u4E0E css padding \u76F8\u540C</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li>padding: Padding</li></ul><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Padding</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u8FD4\u56DE\uFF1A</strong><br> number[]</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-ts"><pre><code><span class="token function">formatPadding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// [5, 5, 5, 5]</span>
<span class="token function">formatPadding</span><span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// [5, 5, 5, 5]</span>
<span class="token function">formatPadding</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [3, 5, 3, 5]</span>
<span class="token function">formatPadding</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [3, 4, 5, 4]</span>
<span class="token function">formatPadding</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [3, 4, 5, 6]</span>
</code></pre></div><h2 id="deepclone" tabindex="-1">deepClone <a class="header-anchor" href="#deepclone" aria-hidden="true">#</a></h2><p>\u6DF1\u62F7\u8D1D\uFF0C\u9002\u7528\u4E8E \u753B\u7B14<br> \u76F4\u63A5\u901A\u8FC7 JSON.parse(JSON.stringify(pens)) \u4F1A\u62A5\u9519\uFF0C\u63A8\u8350\u4F7F\u7528\u8BE5\u65B9\u6CD5\u8FDB\u884C\u6DF1\u62F7\u8D1D</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>o: any</p></li><li><p>keepCalc: boolean = false<br> \u4FDD\u7559\u8BA1\u7B97\u5C5E\u6027</p><ul><li>false \u65F6 calculative \u4E0D\u4FDD\u7559</li><li>true \u65F6 calculative \u4FDD\u7559\uFF0C\u4F46 calculative.canvas \u5C5E\u6027\u4E22\u5931\uFF0C\u4ECD\u9700\u8981\u91CD\u65B0\u8D4B\u503C\uFF0C\u65E0\u6CD5\u62F7\u8D1D\u7684\u503C\u4E5F\u4F1A\u4E22\u5931\uFF0C\u4F8B\u5982: calculative.img</li></ul></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> any</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-ts"><pre><code><span class="token function">deepClone</span><span class="token punctuation">(</span>pens<span class="token punctuation">)</span>
<span class="token function">deepClone</span><span class="token punctuation">(</span>pens<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="s8" tabindex="-1">s8 <a class="header-anchor" href="#s8" aria-hidden="true">#</a></h2><p>\u751F\u6210\u968F\u673A\u6570\uFF0C\u901A\u5E38\u7528\u4E8E\u751F\u6210\u753B\u7B14 id</p><p><strong>\u8FD4\u56DE\uFF1A</strong><br> string</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-ts"><pre><code><span class="token function">s8</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 54344dfa</span>
</code></pre></div><h2 id="rgba" tabindex="-1">rgba <a class="header-anchor" href="#rgba" aria-hidden="true">#</a></h2><p>\u751F\u6210\u5177\u6709\u900F\u660E\u5EA6\u7684\u989C\u8272\uFF0C\u901A\u5E38\u7528\u4E8E\u751F\u6210\u5F53\u524D\u8272\u7684\u6D45\u8272</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li>c: string<br> \u4E0D\u5E26\u900F\u660E\u5EA6\u7684\u5341\u516D\u8FDB\u5236\u989C\u8272\uFF0C\u5982\uFF1A#1890ff</li><li>p: number<br> \u900F\u660E\u5EA6\uFF0C0-1</li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> string</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-ts"><pre><code><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token string">&#39;#f40&#39;</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;rgba(255,68,0,0.1)&#39;</span>
</code></pre></div>`,28),o=[e];function c(l,i,r,u,d,k){return a(),s("div",null,o)}var b=n(p,[["render",c]]);export{m as __pageData,b as default};
