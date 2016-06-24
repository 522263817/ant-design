webpackJsonp([116,366],{833:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(28),a(27)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:[["p","\u5f53\u8868\u683c\u5185\u5bb9\u8f83\u591a\u4e0d\u80fd\u4e00\u6b21\u6027\u5b8c\u5168\u5c55\u793a\u65f6\u3002"]],meta:{order:12,title:"\u53ef\u5c55\u5f00",filename:"components/table/demo/expand.md",id:"components-table-demo-expand"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u4f4f\u5740\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u64cd\u4f5c\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'x\'</span><span class="token punctuation" >,</span> render<span class="token punctuation" >:</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5220\u9664<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u658c\'</span><span class="token punctuation" >,</span> age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span> address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span> description<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662f\u80e1\u5f66\u658c\uff0c\u4eca\u5e7432\u5c81\uff0c\u4f4f\u5728\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u3002\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'\u5434\u5f66\u7956\'</span><span class="token punctuation" >,</span> age<span class="token punctuation" >:</span> <span class="token number" >42</span><span class="token punctuation" >,</span> address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed2\u53f7\'</span><span class="token punctuation" >,</span> description<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662f\u5434\u5f66\u7956\uff0c\u4eca\u5e7442\u5c81\uff0c\u4f4f\u5728\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed2\u53f7\u3002\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >3</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'\u674e\u5927\u5634\'</span><span class="token punctuation" >,</span> age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span> address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed3\u53f7\'</span><span class="token punctuation" >,</span> description<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u662f\u674e\u5927\u5634\uff0c\u4eca\u5e7432\u5c81\uff0c\u4f4f\u5728\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed3\u53f7\u3002\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >expandedRowRender</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>record <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>record<span class="token punctuation" >.</span>description<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>table<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u4f4f\u5740",dataIndex:"address",key:"address"},{title:"\u64cd\u4f5c",dataIndex:"",key:"x",render:function(){return c["default"].createElement("a",{href:"#"},"\u5220\u9664")}}],s=[{key:1,name:"\u80e1\u5f66\u658c",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",description:"\u6211\u662f\u80e1\u5f66\u658c\uff0c\u4eca\u5e7432\u5c81\uff0c\u4f4f\u5728\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\u3002"},{key:2,name:"\u5434\u5f66\u7956",age:42,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed2\u53f7",description:"\u6211\u662f\u5434\u5f66\u7956\uff0c\u4eca\u5e7442\u5c81\uff0c\u4f4f\u5728\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed2\u53f7\u3002"},{key:3,name:"\u674e\u5927\u5634",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed3\u53f7",description:"\u6211\u662f\u674e\u5927\u5634\uff0c\u4eca\u5e7432\u5c81\uff0c\u4f4f\u5728\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed3\u53f7\u3002"}];return c["default"].createElement(o["default"],{columns:n,expandedRowRender:function(n){return c["default"].createElement("p",null,n.description)},dataSource:s,className:"table"})}}}});