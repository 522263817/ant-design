webpackJsonp([53,366],{896:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(81),a(80)),o=t(p),c=(a(7),a(6)),u=t(c),e=(a(10),a(8)),l=t(e),i=a(1),k=t(i),r=a(2);t(r);n.exports={content:[["p","\u5bf9\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u3002"]],meta:{order:1,title:"\u4f20\u5165\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6",filename:"components/upload/demo/defaultFileList.md",id:"components-upload-demo-defaultFileList"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Upload<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> props <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  action<span class="token punctuation" >:</span> <span class="token string" >\'/upload.do\'</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>status <span class="token operator" >!==</span> <span class="token string" >\'uploading\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>fileList<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  defaultFileList<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    uid<span class="token punctuation" >:</span> <span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token string" >\'xxx.png\'</span><span class="token punctuation" >,</span>\n    status<span class="token punctuation" >:</span> <span class="token string" >\'done\'</span><span class="token punctuation" >,</span>\n    url<span class="token punctuation" >:</span> <span class="token string" >\'http://www.baidu.com/xxx.png\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n    uid<span class="token punctuation" >:</span> <span class="token operator" >-</span><span class="token number" >2</span><span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token string" >\'yyy.png\'</span><span class="token punctuation" >,</span>\n    status<span class="token punctuation" >:</span> <span class="token string" >\'done\'</span><span class="token punctuation" >,</span>\n    url<span class="token punctuation" >:</span> <span class="token string" >\'http://www.baidu.com/yyy.png\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token operator" >&lt;</span>Upload <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>upload<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span> \u70b9\u51fb\u4e0a\u4f20\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Upload</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={action:"/upload.do",onChange:function(n){"uploading"!==n.file.status&&(console.log(n.file),console.log(n.fileList))},defaultFileList:[{uid:-1,name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"},{uid:-2,name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"}]};return k["default"].createElement(o["default"],n,k["default"].createElement(u["default"],{type:"ghost"},k["default"].createElement(l["default"],{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20"))}}}});