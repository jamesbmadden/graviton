!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"/**\n * This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/.\n */\n.panel-title {\n  position: relative;\n  height: 3rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  cursor: pointer;\n}\n.panel-body {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n}\n.panel {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: calc(100% - 32px);\n  margin: 0px auto;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: margin 0.2s cubic-bezier(0.4, 0, 0.2, 1), width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: margin 0.2s cubic-bezier(0.4, 0, 0.2, 1), width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 1;\n  background: #fff;\n}\n.panel:not([expanded]) > .panel-title:hover {\n  background: #e3e3e3;\n}\n@media (prefers-color-scheme: dark) {\n  .panel:not([expanded]) > .panel-title:hover {\n    background-color: #444;\n  }\n}\n.panel[expanded] {\n  margin: 1rem auto;\n  width: 100%;\n}\n.panel[expanded] .panel-body {\n  height: auto;\n}\n.panel[expanded] .drop-icon {\n  -webkit-transform: rotate(200grad);\n          transform: rotate(200grad);\n}\n@media (prefers-color-scheme: dark) {\n  .panel {\n    background-color: #333;\n    color: white;\n  }\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n.drop-icon {\n  position: absolute;\n  font-size: 1.5rem;\n  right: 0.25rem;\n  pointer-events: none;\n  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: -webkit-transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.panel-title-value {\n  margin-left: 1rem;\n  color: #444;\n}\n@media (prefers-color-scheme: dark) {\n  .panel-title-value {\n    color: #e3e3e3;\n  }\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var i=(o=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"});return[n].concat(r).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(s[r]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,i=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{let s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,h=new RegExp(`${c}|${d}`),p="$lit$";class u{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+p,a=t.getAttribute(o).split(h);this.parts.push({type:"attribute",index:n,name:r,strings:a}),t.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(h),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],s+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(f(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],s=g.exec(e);t+=s?e.substr(0,s.index)+s[1]+s[2]+p+s[3]+c:e+d}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class b{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const n=new y(t,e.processor,this.options),s=n._clone();n.update(e.values),this._commitNode(s),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends b{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends S{}let N=!1;try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class A{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=k(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new A(e,t.slice(1),s.eventContext)]:"?"===i?[new x(e,t.slice(1),n)]:new b(e,t,n).parts}handleTextExpression(e){return new w(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function E(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(c);return void 0===(n=t.keyString.get(s))&&(n=new u(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const O=(e,...t)=>new _(e,t,"html",T),M=133;function R(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,M,null,!1);let r=U(s),o=s[r],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,o=s[r=U(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,M,null,!1);for(;n.nextNode();)t++;return t},U=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const L=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),q=!1);const $=e=>t=>{const n=L(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(n,e),i=new u(t,n),s.keyString.set(r,i)}return s.stringsArray.set(t.strings,i),i},F=["html","svg"],I=new Set,B=(e,t,n)=>{I.add(n);const s=e.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{F.forEach(t=>{const n=V.get(L(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),R(e,n)})})})(n),function(e,t,n=null){const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,M,null,!1);let o=U(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=j(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=U(i,o);return}o=U(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),R(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((e,t)=>e);const H={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:W},D=Promise.resolve(!0),Y=1,G=4,K=8,Q=16,X=32;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this.requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=W){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||H,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||H.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=J){const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|K,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~K}}_attributeToProperty(e,t){if(this._updateState&K)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||J;this._updateState=this._updateState|Q,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Q}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const s=this.constructor,i=s._classProperties.get(e)||J;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&Q||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|G;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&Y}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&Y||(this._updateState=this._updateState|Y,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Z.finalized=!0;ne((e,t)=>e.querySelector(t)),ne((e,t)=>e.querySelectorAll(t));const ee=(e,t,n)=>{Object.defineProperty(t,n,e)},te=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ne(e){return t=>(n,s)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==s?ee(i,n,s):te(i,n)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol();class re{constructor(e,t){if(t!==ie)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const oe=(e,...t)=>{const n=t.reduce((t,n,s)=>t+(e=>{if(e instanceof re)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[s+1],e[0]);return new re(n,ie)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ae=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class le extends Z{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ae(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}le.finalized=!0,le.render=((e,t,n)=>{const s=n.scopeName,i=z.has(t),r=t instanceof ShadowRoot&&q&&e instanceof _,a=r&&!I.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=z.get(t);void 0===s&&(o(t,t.firstChild),z.set(t,s=new w(Object.assign({templateFactory:E},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:$(s)},n)),a){const e=z.get(l);z.delete(l),e.value instanceof y&&B(l,e.value.template,s),o(t,t.firstChild),t.appendChild(l),z.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)});var ce=n(0),de=n.n(ce);customElements.define("gvt-panel",class extends le{static get properties(){return{expanded:{type:Boolean},value:{type:String}}}static get styles(){return oe([de.a.toString()])}constructor(){super(),this.expanded=!1}render(){return O`
      <style>${de.a.toString()}</style>
      <div class="panel" ?expanded=${this.expanded}>
        <div class="panel-title" @click=${()=>{this.expanded=!this.expanded}}>
          <slot name="title"></slot><p class="panel-title-value">${"undefined"!==this.value?this.value:""}</p>
          <i class="material-icons drop-icon">arrow_drop_down</i>
        </div>
        <div class="panel-body">
          <slot name="body"></slot>
        </div>
      </div>
    `}})}]);