webpackJsonp([130,366],{818:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(112),a(111)),o=t(p),c=a(1),e=t(c),u=a(2);t(u);n.exports={content:[["p","\u8ff7\u4f60\u7248\u7684\u6b65\u9aa4\u6761\uff0c\u901a\u8fc7\u8bbe\u7f6e ",["code",'<Steps size="small">']," \u542f\u7528."]],meta:{order:1,title:"\u8ff7\u4f60\u7248",filename:"components/steps/demo/small-size.md",id:"components-steps-demo-small-size"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> steps <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  status<span class="token punctuation" >:</span> <span class="token string" >\'finish\'</span><span class="token punctuation" >,</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5df2\u5b8c\u6210\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  status<span class="token punctuation" >:</span> <span class="token string" >\'process\'</span><span class="token punctuation" >,</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u8fdb\u884c\u4e2d\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  status<span class="token punctuation" >:</span> <span class="token string" >\'wait\'</span><span class="token punctuation" >,</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5f85\u8fd0\u884c\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  status<span class="token punctuation" >:</span> <span class="token string" >\'wait\'</span><span class="token punctuation" >,</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5f85\u8fd0\u884c\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>s<span class="token punctuation" >,</span> i<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>i<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>s<span class="token punctuation" >.</span>title<span class="token punctuation" >}</span></span> <span class="token attr-name" >description</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>s<span class="token punctuation" >.</span>description<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>steps<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].Step,s=[{status:"finish",title:"\u5df2\u5b8c\u6210"},{status:"process",title:"\u8fdb\u884c\u4e2d"},{status:"wait",title:"\u5f85\u8fd0\u884c"},{status:"wait",title:"\u5f85\u8fd0\u884c"}].map(function(s,a){return e["default"].createElement(n,{key:a,title:s.title,description:s.description})});return e["default"].createElement(o["default"],{size:"small",current:1},s)}}}});