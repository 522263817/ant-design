webpackJsonp([187,366],{760:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(151),s(176)),o=t(p),e=(s(7),s(6)),c=t(e),l=s(1),u=t(l),k=s(2);t(k);n.exports={content:[["p","\u9f20\u6807\u79fb\u5165\u3001\u805a\u96c6\u3001\u70b9\u51fb\u3002"]],meta:{order:2,title:"\u4e09\u79cd\u89e6\u53d1\u65b9\u5f0f",filename:"components/popover/demo/triggerType.md",id:"components-popover-demo-triggerType"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Popover<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> content <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popover</span> <span class="token attr-name" >content</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>content<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6807\u9898<span class="token punctuation" >"</span></span> <span class="token attr-name" >trigger</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>hover<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u79fb\u5165<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popover</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popover</span> <span class="token attr-name" >content</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>content<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6807\u9898<span class="token punctuation" >"</span></span> <span class="token attr-name" >trigger</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>focus<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u805a\u7126<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popover</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popover</span> <span class="token attr-name" >content</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>content<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6807\u9898<span class="token punctuation" >"</span></span> <span class="token attr-name" >trigger</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>click<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u70b9\u51fb<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popover</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createElement("div",null,u["default"].createElement("p",null,"\u5185\u5bb9"),u["default"].createElement("p",null,"\u5185\u5bb9"));return u["default"].createElement("div",null,u["default"].createElement(o["default"],{content:n,title:"\u6807\u9898",trigger:"hover"},u["default"].createElement(c["default"],null,"\u79fb\u5165")),u["default"].createElement(o["default"],{content:n,title:"\u6807\u9898",trigger:"focus"},u["default"].createElement(c["default"],null,"\u805a\u7126")),u["default"].createElement(o["default"],{content:n,title:"\u6807\u9898",trigger:"click"},u["default"].createElement(c["default"],null,"\u70b9\u51fb")))}}}});