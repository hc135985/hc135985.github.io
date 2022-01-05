import{_ as n,c as a,o as s,d as t}from"./app.58b68d53.js";const h='{"title":"\u62D6\u62FD\u548C\u70B9\u51FB\u4E0A\u4F20\u7B80\u5386","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5148\u770B\u6700\u7EC8\u6210\u679C","slug":"\u5148\u770B\u6700\u7EC8\u6210\u679C"},{"level":3,"title":"\u5B9E\u73B0\u4EE3\u7801","slug":"\u5B9E\u73B0\u4EE3\u7801"}],"relativePath":"pages/upload.md","lastUpdated":1638872745304}',p={},o=t(`<h1 id="\u62D6\u62FD\u548C\u70B9\u51FB\u4E0A\u4F20\u7B80\u5386" tabindex="-1">\u62D6\u62FD\u548C\u70B9\u51FB\u4E0A\u4F20\u7B80\u5386 <a class="header-anchor" href="#\u62D6\u62FD\u548C\u70B9\u51FB\u4E0A\u4F20\u7B80\u5386" aria-hidden="true">#</a></h1><h3 id="\u5148\u770B\u6700\u7EC8\u6210\u679C" tabindex="-1">\u5148\u770B\u6700\u7EC8\u6210\u679C <a class="header-anchor" href="#\u5148\u770B\u6700\u7EC8\u6210\u679C" aria-hidden="true">#</a></h3><h4 id="upload" tabindex="-1">upload <a class="header-anchor" href="#upload" aria-hidden="true">#</a></h4><p><img src="https://s2.loli.net/2021/12/07/TLEYUARVu5Jfpnd.png" alt="ZRNLaGCamz.png">;</p><h4 id="uploading" tabindex="-1">uploading <a class="header-anchor" href="#uploading" aria-hidden="true">#</a></h4><p><img src="https://s2.loli.net/2021/12/07/xYjH9wRbgqfcrIv.png" alt="JvZvNuhcgc.png"></p><h4 id="uploaderror" tabindex="-1">uploadError <a class="header-anchor" href="#uploaderror" aria-hidden="true">#</a></h4><p><img src="https://s2.loli.net/2021/12/07/BlEe5kmK67QTx9d.png" alt="EkNfYV3NhU.png"></p><h4 id="uploadsuccess" tabindex="-1">uploadSuccess <a class="header-anchor" href="#uploadsuccess" aria-hidden="true">#</a></h4><p><img src="https://s2.loli.net/2021/12/07/XDmi8vodW6ZEFKx.png" alt="dTurZNXRSn.png"></p><h3 id="\u5B9E\u73B0\u4EE3\u7801" tabindex="-1">\u5B9E\u73B0\u4EE3\u7801 <a class="header-anchor" href="#\u5B9E\u73B0\u4EE3\u7801" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u529F\u80FD\u7684\u4E3B\u8981\u7684\u96BE\u70B9\u5728\u62D6\u62FD\u8FD9\u4E00\u5757\uFF0C\u6CA1\u505A\u8FC7\u7C7B\u4F3C\u529F\u80FD\u7684\u80AF\u5B9A\u8FD8\u662F\u6709\u70B9\u61F5\u903C\u7684\u3002</p><p>\u8981\u76D1\u542C\u6211\u4EEC\u4E0A\u4F20\u8303\u56F4\u5185\u7684\u6587\u4EF6\u62D6\u5165\u3001\u62D6\u51FA\u3001\u677E\u5F00\u5DE6\u952E\u3001\u6ED1\u52A8\u4E8B\u4EF6\u3002</p><p>\u4E0Dbb\uFF0C\u4E0A\u4EE3\u7801</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u6587\u4EF6\u62D6\u62FD\u4E0A\u4F20
 * @param {Number} count \u5355\u6B21\u4E0A\u4F20\u4E2A\u6570  defaultValue =&gt; 1
 * @param {Function} btnEnter \u5212\u5165\u56DE\u8C03 
 * @param {Function} btnLeave \u5212\u51FA/\u677E\u5F00\u9F20\u6807\u56DE\u8C03
 * @param {Function} onUpload \u4E0A\u4F20\u56DE\u8C03 \u53C2\u6570 =&gt; FileList
 * @returns
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">FilesDragAndDrop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    btnEnter<span class="token punctuation">,</span>
    btnLeave<span class="token punctuation">,</span>
    onUpload<span class="token punctuation">,</span>
    children
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> drop <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleDragOver</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    btnLeave <span class="token operator">&amp;&amp;</span> <span class="token function">btnEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleDrop</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files<span class="token punctuation">]</span><span class="token punctuation">;</span>
    btnLeave <span class="token operator">&amp;&amp;</span> <span class="token function">btnLeave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&amp;&amp;</span> count <span class="token operator">&lt;</span> files<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Message<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u62B1\u6B49\uFF0C\u6BCF\u6B21\u6700\u591A\u53EA\u80FD\u4E0A\u4F20</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u6587\u4EF6\u3002</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">onUpload</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span>
    btnLeave <span class="token operator">&amp;&amp;</span> <span class="token function">btnLeave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleDragEnter</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    btnEnter <span class="token operator">&amp;&amp;</span> <span class="token function">btnEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleDragLeave</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    e<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    btnLeave <span class="token operator">&amp;&amp;</span> <span class="token function">btnLeave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    drop<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragover&#39;</span><span class="token punctuation">,</span> handleDragOver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    drop<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;drop&#39;</span><span class="token punctuation">,</span> handleDrop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    drop<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragenter&#39;</span><span class="token punctuation">,</span> handleDragEnter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    drop<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragleave&#39;</span><span class="token punctuation">,</span> handleDragLeave<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      drop<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragover&#39;</span><span class="token punctuation">,</span> handleDragOver<span class="token punctuation">)</span><span class="token punctuation">;</span>
      drop<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;drop&#39;</span><span class="token punctuation">,</span> handleDrop<span class="token punctuation">)</span><span class="token punctuation">;</span>
      drop<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragenter&#39;</span><span class="token punctuation">,</span> handleDragEnter<span class="token punctuation">)</span><span class="token punctuation">;</span>
      drop<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;dragleave&#39;</span><span class="token punctuation">,</span> handleDragLeave<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>drop<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span>classList<span class="token punctuation">.</span>FilesDragAndDrop<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u7B80\u5355\u7684\u8C03\u7528</span>
<span class="token operator">&lt;</span>FilesDragAndDrop
  onUpload<span class="token operator">=</span><span class="token punctuation">{</span>onUpload<span class="token punctuation">}</span>
  btnLeave<span class="token operator">=</span><span class="token punctuation">{</span>btnLeave<span class="token punctuation">}</span>
  btnEnter<span class="token operator">=</span><span class="token punctuation">{</span>btnEnter<span class="token punctuation">}</span>
<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>uploadTitle<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u5C06\u4F60\u7684\u7B80\u5386\u62D6\u62FD\u5230\u6B64\u5904\u81EA\u52A8\u89E3\u6790<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div
    className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>uploadBtn<span class="token punctuation">}</span>
    onMouseLeave<span class="token operator">=</span><span class="token punctuation">{</span>btnLeave<span class="token punctuation">}</span>
    onMouseEnter<span class="token operator">=</span><span class="token punctuation">{</span>btnEnter<span class="token punctuation">}</span>
  <span class="token operator">&gt;</span>
    \u9009\u62E9\u6587\u4EF6
    <span class="token operator">&lt;</span>input
      onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span>
      title<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u652F\u6301</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">ALLOW_EXT_TEXT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u683C\u5F0F\u6587\u4EF6\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC7</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>maxSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">M</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span>
      size<span class="token operator">=</span><span class="token string">&quot;3&quot;</span>
      name<span class="token operator">=</span><span class="token string">&quot;newResume&quot;</span>
      type<span class="token operator">=</span><span class="token string">&quot;file&quot;</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>uploadText<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    \u652F\u6301word\u3001pdf\u3001ppt\u3001txt\u3001wps\u683C\u5F0F\u6587\u4EF6\uFF0C\u6587\u4EF6\u5927\u5C0F\u63A7\u5236\u5728<span class="token number">10</span>M\u4EE5\u5185
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>FilesDragAndDrop<span class="token operator">&gt;</span>
</code></pre></div><p>\u7136\u540E\u5C31\u662F\u4E00\u4E9B\u4E0A\u4F20\u5931\u8D25\u6210\u529F\u7684\u6E32\u67D3\u5904\u7406\u4E86,\u5206\u6210\u4E00\u4E2A\u4E00\u4E2A\u5C0F\u7EC4\u4EF6\uFF0C\u66F4\u65B9\u4FBF\u7BA1\u7406</p><div class="language-js"><pre><code><span class="token punctuation">{</span>status <span class="token operator">===</span> <span class="token string">&#39;upload&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Upload btnEnter<span class="token operator">=</span><span class="token punctuation">{</span>btnEnter<span class="token punctuation">}</span> btnLeave<span class="token operator">=</span><span class="token punctuation">{</span>btnLeave<span class="token punctuation">}</span> onUpload<span class="token operator">=</span><span class="token punctuation">{</span>onUpload<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>status <span class="token operator">===</span> <span class="token string">&#39;uploading&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Uploading
    clearBtn<span class="token operator">=</span><span class="token punctuation">{</span>clearBtn<span class="token punctuation">}</span>
    clearChange<span class="token operator">=</span><span class="token punctuation">{</span>clearChange<span class="token punctuation">}</span>
    uploadChange<span class="token operator">=</span><span class="token punctuation">{</span>uploadChange<span class="token punctuation">}</span>
    err<span class="token operator">=</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>status <span class="token operator">===</span> <span class="token string">&#39;uploadSuccess&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>UploadSuccess
    resume<span class="token operator">=</span><span class="token punctuation">{</span>resume<span class="token punctuation">}</span>
    setResumeData<span class="token operator">=</span><span class="token punctuation">{</span>setResumeData<span class="token punctuation">}</span>
    onUpload<span class="token operator">=</span><span class="token punctuation">{</span>onUpload<span class="token punctuation">}</span>
    delResume<span class="token operator">=</span><span class="token punctuation">{</span>delResume<span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div><p>\u4EE3\u7801\u903B\u8F91\u6BD4\u8F83\u7B80\u5355\uFF0C\u4E0D\u591A\u89E3\u91CA\u4E86\uFF0C\u5199\u6210\u6587\u6863\u65B9\u4FBF\u4EE5\u540E\u81EA\u5DF1\u76F4\u63A5cv\uFF5E</p>`,18),e=[o];function c(u,l,r,i,k,d){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
