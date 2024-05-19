/*! grapesjs-custom-code - 1.0.2 */
!function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports["grapesjs-custom-code"]=t():e["grapesjs-custom-code"]=t()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0})}},t={};e.r(t),e.d(t,{default:()=>d});var o='custom-code-plugin__code',n='custom-code',i='custom-code:open-modal',r=void 0&&(void 0).__assign||function(){return r=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};var s=void 0&&(void 0).__assign||function(){return s=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};var a=void 0&&(void 0).__assign||function(){return a=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)};var c=void 0&&(void 0).__assign||function(){return c=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var i in t=arguments[o])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)};const d=function(e,t){void 0===t&&(t={});var d=c({blockCustomCode:{},propsCustomCode:{},toolbarBtnCustomCode:{},placeholderScript:"<div style=\"pointer-events: none; padding: 10px;\">\n      <svg viewBox=\"0 0 24 24\" style=\"height: 30px; vertical-align: middle;\">\n        <path d=\"M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z\"></path>\n        </svg>\n      Custom code with <i>&lt;script&gt;</i> can't be rendered on the canvas\n    </div>",modalTitle:'Insert your code',codeViewOptions:{},buttonLabel:'Save',commandCustomCode:{}},t);!function(e,t){void 0===t&&(t={});var r,s=e.Components,c=t.toolbarBtnCustomCode;s.addType('script',{view:{onRender:function(){var e=this.model,t=this.el;e.closestType(n)&&(t.innerHTML='')}}}),s.addType(n,{model:{defaults:a({name:'Custom Code',editable:!0,components:{tagName:'span',components:{type:'textnode',content:'Insert here your custom code'}}},t.propsCustomCode),init:function(){this.on("change:".concat(o),this.onCustomCodeChange);var e=this.get(o);!this.components().length&&this.components(e);var t=this.get('toolbar'),n='custom-code';c&&!t.filter((function(e){return e.id===n})).length&&t.unshift(a({id:n,command:i,label:"<svg viewBox=\"0 0 24 24\">\n              <path d=\"M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z\"></path>\n            </svg>"},c))},onCustomCodeChange:function(){this.components(this.get(o))}},view:{events:{dblclick:'onActive'},init:function(){this.listenTo(this.model.components(),'add remove reset',this.onComponentsChange),this.onComponentsChange()},onComponentsChange:function(){var e=this;r&&clearInterval(r),r=setTimeout((function(){var n=e,i=n.model,r=n.el,s=!0;(i.get(o)||'').indexOf('<script')>=0&&t.placeholderScript&&(r.innerHTML=t.placeholderScript,s=!1),i.set({droppable:s})}),0)},onActive:function(){var e=this.model;this.em.get('Commands').run(i,{target:e})}}})}(e,d),function(e,t){var o=(void 0===t?{}:t).blockCustomCode,i=e.Blocks;o&&i.add(n,r({label:'Custom Code',media:"\n      <svg viewBox=\"0 0 24 24\">\n        <path d=\"M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z\"></path>\n      </svg>\n    ",category:'Extra',activate:!0,select:!0,content:{type:n}},o))}(e,d),function(e,t){void 0===t&&(t={});var n=t.modalTitle,r=t.codeViewOptions,a=t.commandCustomCode,c=function(e,t){t instanceof HTMLElement?e.appendChild(t):t&&e.insertAdjacentHTML('beforeend',t)};e.Commands.add(i,s({keyCustomCode:o,target:null,codeViewer:null,run:function(e,t,o){void 0===o&&(o={});var n=o.target||e.getSelected();this.target=n,(null==n?void 0:n.get('editable'))&&this.showCustomCode(n,o)},stop:function(e){e.Modal.close()},showCustomCode:function(t,r){var s=r.title||n,a=t.get(o)||'',c=this.getContent();e.Modal.open({title:s,content:c}).onceClose((function(){return e.stopCommand(i)})),this.getCodeViewer().setContent(a)},getPreContent:function(){},getPostContent:function(){},getContent:function(){var t=this.getCodeViewer(),o=document.createElement('div'),n=e.getConfig('stylePrefix');return o.className="".concat(n,"custom-code"),c(o,this.getPreContent()),o.appendChild(t.getElement()),c(o,this.getPostContent()),c(o,this.getContentActions()),t.refresh(),setTimeout((function(){return t.focus()}),0),o},getContentActions:function(){var o=this,n=document.createElement('button');n.setAttribute('type','button');var i=e.getConfig('stylePrefix');return n.innerHTML=t.buttonLabel,n.className="".concat(i,"btn-prim ").concat(i,"btn-import__custom-code"),n.onclick=function(){return o.handleSave()},n},handleSave:function(){var t=this.target,n=this.getCodeViewer().getContent();null==t||t.set(o,n),e.Modal.close()},getCodeViewer:function(){return this.codeViewer||(this.codeViewer=e.CodeManager.createViewer(s({codeName:'htmlmixed',theme:'hopscotch',readOnly:0},r))),this.codeViewer}},a))}(e,d)};return t})()));
//# sourceMappingURL=index.js.map