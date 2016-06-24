webpackJsonp([246,366],{699:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n,s){var a={};for(var t in n)s.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a}var o=(a(7),a(6)),c=t(o),e=(a(17),a(24)),u=t(e),l=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},k=a(1),i=t(k),r=a(2),h=(t(r),a(5)),d=t(h);n.exports={content:[["p","\u5e26\u6709\u641c\u7d22\u6309\u94ae\u7684\u8f93\u5165\u6846\u3002"]],meta:{order:4,title:"\u641c\u7d22\u6846",filename:"components/input/demo/search-input.md",id:"components-input-demo-search-input"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Input<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> classNames <span class="token keyword" >from</span> <span class="token string" >\'classnames\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> InputGroup <span class="token operator" >=</span> Input<span class="token punctuation" >.</span>Group<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> SearchInput <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >,</span>\n      focus<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleInputChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>value<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleFocusBlur</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      focus<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>target <span class="token operator" >===</span> document<span class="token punctuation" >.</span>activeElement<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleSearch</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>onSearch<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span><span class="token function" >onSearch</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> style<span class="token punctuation" >,</span> size<span class="token punctuation" >,</span> <span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>restProps <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> btnCls <span class="token operator" >=</span> <span class="token function" >classNames</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      <span class="token string" >\'ant-search-btn\'</span><span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      <span class="token string" >\'ant-search-btn-noempty\'</span><span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >.</span><span class="token function" >trim</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> searchCls <span class="token operator" >=</span> <span class="token function" >classNames</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      <span class="token string" >\'ant-search-input\'</span><span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n      <span class="token string" >\'ant-search-input-focus\'</span><span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>focus<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-search-input-wrapper<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>style<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputGroup</span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>searchCls<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>restProps<span class="token punctuation" >}</span> value<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value<span class="token punctuation" >}</span> onChange<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleInputChange<span class="token punctuation" >}</span>\n            onFocus<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleFocusBlur<span class="token punctuation" >}</span> onBlur<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleFocusBlur<span class="token punctuation" >}</span> onPressEnter<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleSearch<span class="token punctuation" >}</span>\n          <span class="token operator" >/</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-input-group-wrap<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >icon</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token attr-name" >className</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>btnCls<span class="token punctuation" >}</span></span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>size<span class="token punctuation" >}</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleSearch<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>InputGroup</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SearchInput</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>input</span> <span class="token attr-name" >search</span> <span class="token attr-name" >text"</span>\n    <span class="token attr-name" >onSearch</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>value <span class="token operator" >=</span><span class="token operator" >></span> console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].Group,s=i["default"].createClass({displayName:"SearchInput",getInitialState:function(){return{value:"",focus:!1}},handleInputChange:function(n){this.setState({value:n.target.value})},handleFocusBlur:function(n){this.setState({focus:n.target===document.activeElement})},handleSearch:function(){this.props.onSearch&&this.props.onSearch(this.state.value)},render:function(){var s=this.props,a=s.style,t=s.size,o=p(s,["style","size"]),e=(0,d["default"])({"ant-search-btn":!0,"ant-search-btn-noempty":!!this.state.value.trim()}),k=(0,d["default"])({"ant-search-input":!0,"ant-search-input-focus":this.state.focus});return i["default"].createElement("div",{className:"ant-search-input-wrapper",style:a},i["default"].createElement(n,{className:k},i["default"].createElement(u["default"],l({},o,{value:this.state.value,onChange:this.handleInputChange,onFocus:this.handleFocusBlur,onBlur:this.handleFocusBlur,onPressEnter:this.handleSearch})),i["default"].createElement("div",{className:"ant-input-group-wrap"},i["default"].createElement(c["default"],{icon:"search",className:e,size:t,onClick:this.handleSearch}))))}});return i["default"].createElement(s,{placeholder:"input search text",onSearch:function(n){return console.log(n)},style:{width:200}})}}}});