webpackJsonp([176,366],{771:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(98),a(97)),o=t(p),c=(a(7),a(6)),e=t(c),u=a(1),l=t(u),k=a(2);t(k);n.exports={content:[["p","\u573a\u666f\u91cc\u6709\u589e\u52a0\u6216\u5220\u9664\u6761\u76ee\u65f6\u4e5f\u4f1a\u89e6\u53d1\u52a8\u753b\u3002"]],meta:{order:5,title:"\u6dfb\u52a0\u4e0e\u5220\u9664",filename:"components/queue-anim/demo/change.md",id:"components-queue-anim-demo-change"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> QueueAnim<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      show<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      items<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      show<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>show<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onAdd</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> items <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>items<span class="token punctuation" >;</span>\n    items<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Date<span class="token punctuation" >.</span><span class="token function" >now</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      show<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      items<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onRemove</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> items <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>items<span class="token punctuation" >;</span>\n    items<span class="token punctuation" >.</span><span class="token function" >splice</span><span class="token punctuation" >(</span>items<span class="token punctuation" >.</span>length <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >,</span> <span class="token number" >1</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      show<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      items<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>buttons<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5207\u6362<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onAdd<span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6dfb\u52a0<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onRemove<span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5220\u9664<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-content<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-listBox<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>b<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-list<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>QueueAnim</span> <span class="token attr-name" >component</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ul<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'right\'</span><span class="token punctuation" >,</span> <span class="token string" >\'left\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n                <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>show <span class="token operator" >?</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>items <span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >}</span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>QueueAnim</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].createClass({displayName:"Test",getInitialState:function(){return{show:!0,items:[l["default"].createElement("li",{key:"0"}),l["default"].createElement("li",{key:"1"}),l["default"].createElement("li",{key:"2"})]}},onClick:function(){this.setState({show:!this.state.show})},onAdd:function(){var n=this.state.items;n.push(l["default"].createElement("li",{key:Date.now()})),this.setState({show:!0,items:n})},onRemove:function(){var n=this.state.items;n.splice(n.length-1,1),this.setState({show:!0,items:n})},render:function(){return l["default"].createElement("div",null,l["default"].createElement("p",{className:"buttons"},l["default"].createElement(e["default"],{type:"primary",onClick:this.onClick},"\u5207\u6362"),l["default"].createElement(e["default"],{onClick:this.onAdd,style:{marginLeft:10}},"\u6dfb\u52a0"),l["default"].createElement(e["default"],{onClick:this.onRemove,style:{marginLeft:10}},"\u5220\u9664")),l["default"].createElement("div",{className:"demo-content"},l["default"].createElement("div",{className:"demo-listBox",key:"b"},l["default"].createElement("div",{className:"demo-list"},l["default"].createElement("div",{className:"title"}),l["default"].createElement(o["default"],{component:"ul",type:["right","left"]},this.state.show?this.state.items:null)))))}});return l["default"].createElement(n,null)}}}});