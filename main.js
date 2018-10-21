/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

/*************** custom ***************/

// gameId, 也是lotteryId
var LOTTERY_ID = 64; // 腾讯分分彩

// 每种game的wayId
var QIAN_SAN_WAY_ID = 16; // 前三组三
var ZHONG_SAN_WAY_ID = 150; // 中三组三
var HOU_SAN_WAY_ID = 49; // 后三组三

// wayId对应的文案
var QIAN_SAN_TITLE = '前三组三复式';
var ZHONG_SAN_TITLE = '中三组三复式';
var HOU_SAN_TITLE = '后三组三复式';

// 从文本获取wayId
var TEXT_TO_WAY_ID = {
  [QIAN_SAN_TITLE]: QIAN_SAN_WAY_ID,
  [ZHONG_SAN_TITLE]: ZHONG_SAN_WAY_ID,
  [HOU_SAN_TITLE]: HOU_SAN_WAY_ID
};

// wayId数组
var WAY_ID_ARR = [
  QIAN_SAN_WAY_ID,
  ZHONG_SAN_WAY_ID,
  HOU_SAN_WAY_ID
];

// 开奖状态
var ISSUE_STATUS = {
  NOT_OPEN: 0, // 未开奖
  NOT_WIN: 2, // 未中奖
  HAS_WIN: 3 // 已中奖
}

// 正常投注倍数
var BET_LIST = [
  { multiple: 1, money: 1.8, index: 1 },
  { multiple: 2, money: 3.6, index: 2 },
  { multiple: 3, money: 5.4, index: 3 },
  { multiple: 4, money: 7.2, index: 4 },
  { multiple: 6, money: 10.8, index: 5 },
  { multiple: 8, money: 14.4, index: 6 },
  { multiple: 12, money: 21.6, index: 7 },
  { multiple: 18, money: 32.4, index: 8 },
  { multiple: 26, money: 46.8, index: 9 },
  { multiple: 38, money: 68.4, index: 10 },
  { multiple: 54, money: 97.2, index: 11 },
  { multiple: 76, money: 136.8, index: 12 },
  { multiple: 109, money: 196.2, index: 13 },
  { multiple: 159, money: 286.2, index: 14 },
  { multiple: 234, money: 421.2, index: 15 },
  { multiple: 346, money: 622.8, index: 16 },
  { multiple: 515, money: 927, index: 17 },
  { multiple: 768, money: 1382.4, index: 18 },
  { multiple: 1145, money: 2061, index: 19 },
  { multiple: 1710, money: 3078, index: 20 },
  { multiple: 2556, money: 4600.8, index: 21 },
  { multiple: 3827, money: 6888.6, index: 22 }
];

// 默认公共投注参数数据
var BET_COMMON_PARAMS = {
  uuid: "",
  bet_source: "browser",
  isTrace: 0,
  is_encoded: 1,
  traceStopValue: 1, 
  traceWinStop: 1,
  ball: "0123456789", // 投注的数字, 全投注："0123456789"
  moneyunit: 0.01, // 投注的单位, 分
  onePrice: 2, // 投一注的价钱
  num: 90, // 一共投多少注, 全投注：90
  prize_group: 1960 // 奖金组
};

/*************** 用户选项和操作 ***************/
// 操作项
var betToggle = 0; // 投注开关，开：1，关：0
// 输入项
var preBetNum = 0; // 上一次投注数量, 需要用户自己输入，0就是重新开始
var stopAvailableMoney = 0; // 余额大于多少钱就停止所有的下注
var followBetExceedNum = -1; // 连续超过多少期未中开始跟投(-1表示马上开始)
var beiginBackTimes = 2556; // 跟到多少倍未中奖就开始返回(必须是表中的倍数)
var backToTimes = 38; // 返回到多少倍(必须是表中的倍数)

// 展示项
var curUserAvaliable = 0; // 当前用户的可用余额
var notWinDetail = { // 前中后分别有连续查过多少期没中奖了
  [QIAN_SAN_WAY_ID]: { times: -1 },
  [ZHONG_SAN_WAY_ID]: { times: -1 },
  [HOU_SAN_WAY_ID]: { times: -1 }
};
var curBetDetail = { // 当前前中后投注情况(跟投到多少倍了)
  issue: '', // 奖期
  [QIAN_SAN_WAY_ID]: { times: -1 },
  [ZHONG_SAN_WAY_ID]: { times: -1 },
  [HOU_SAN_WAY_ID]: { times: -1 }
};

// 存储数据用
var preResultData = [];
var nextIssueData = null;

/*************** 请求相关 ***************/
var token = '';
var apiDomain = 'https://api.chunqiu1.com'; // 接口域名
// apiDomain = ''; // TODO: 测试，删除

// 自定义错误类型
function CustomError(message) {
  this.message = message;
  this.name = 'CustomError';
  Error.captureStackTrace(this, CustomError) 
}
CustomError.prototype = new Error();
CustomError.prototype.constructor = CustomError;

// 在控制台输出错误信息
function printError(){
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    if (typeof(args[i]) === 'object') {
      console.log(args[i]);
    } else {
      console.log('%c' + args[i], 'color:blue');
    }
  }
}

// 请求重试
function retry(resolve, reject, method, url, data, retryAttempt) {
  Zepto.ajax({
    type: method,
    url:  url,
    dataType: 'json',
    data: data || {},
    headers: {
      Accept: 'application/vnd.chunqiu.v1+json',
      Authorization: 'Bearer ' + token
    },
    success: function (res) {
      resolve(res);
    },
    error: function () {
      if (retryAttempt < 3) {
        setTimeout(function(){
          retry(resolve, reject, method, url, data, ++retryAttempt);
        }, 300);
      } else {
        printError('下面的url请求异常:', url);
        reject(new CustomError('网络接口请求异常，请检查网络是否有问题'));
      }
    }
  });
}
function http(method, url, data) {
  return new Promise(function(resolve, reject){
    retry(resolve, reject, method, url, data, 1);
  });
}

// 判断前或中或后是否有相同数字
function hasSame(lotteryArr, way) {
  var index1 = 0;
  var index2 = 0;
  var index3 = 0;
  if (way === 1) {
    index1 = 0;
    index2 = 1;
    index3 = 2;
  } else if (way === 2) {
    index1 = 1;
    index2 = 2;
    index3 = 3;
  } else if (way === 3) {
    index1 = 2;
    index2 = 3;
    index3 = 4;
  }
  if (lotteryArr[index1] === lotteryArr[index2] || lotteryArr[index1] === lotteryArr[index3] || lotteryArr[index2] === lotteryArr[index3]) {
    return true;
  } else {
    return false;
  }
}

// 查询可用余额
function getAvailable() {
  return new Promise(function(resolve, reject){
    http('GET', apiDomain + '/users/available').then(function(res){
      if (res && res.isSuccess && res.data) {
        var available = Number(Number(res.data.available).toFixed(2));
        console.log('查询可用余额成功:', available);
        resolve(available);
      } else {
        reject(new CustomError('查询可用余额失败_1'));
      }
    }).catch(function(err){
      if (err.name === 'CustomError') {
        reject(err);
      } else {
        reject(new CustomError('查询可用余额失败_2'));
      }
    });
  });
};

// 获取可用余额
function getMoney() {
  return new Promise(function(resolve, reject){
    getAvailable().then(function(res){
      curUserAvaliable = res;
      setCurAvaliableDom(curUserAvaliable);
      resolve(curUserAvaliable);
    }).catch(function(err){
      if (err.name === 'CustomError') {
        reject(err);
      } else {
        reject(new CustomError('获取可用余额额失败'));
      }
    });
  });
}

// 获取上一次投注结果
function requestPreResult() {
  return new Promise(function(resolve, reject){
    if (preBetNum === 0) { // 重新开始，不获取上一次投注结果
      resolve([]);
      return;
    }
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    month = (month > 9 ? month : '0' + month);
    day = (day > 9 ? day : '0' + day);

    d.setTime(d.getTime() - 24*60*60*1000);
    var preYear = d.getFullYear();
    var preMonth = d.getMonth() + 1;
    var preDay = d.getDate();
    preMonth = (preMonth > 9 ? preMonth : '0' + preMonth);
    preDay = (preDay > 9 ? preDay : '0' + preDay);

    var params = `start=${preYear}-${preMonth}-${preDay} 00:00:00&end=${year}-${month}-${day} 23:59:59&lottery_id=0&page=1&page_size=20`;
    var num = 1;
    function requestProject() {
      http('GET', apiDomain + '/reports/project?' + params).then(function(res){
        console.log('查询投注结果[' + num + ']次');
        if (res && res.isSuccess && res.data && res.data.data && res.data.data.length >= preBetNum) {
          var dataArr = res.data.data;
          for (var i = 0; i < preBetNum; i++) {
            var curData = dataArr[i];
            // status 为开奖状态，0: 未开奖，2: 未中奖, 3: 已中奖
            if (curData.status === 0) { // 有未开奖
              if (i === 0) {
                setSoftExcuteStatusDom('正在等待投注开奖结果');
              }
              // 2秒钟查询一次开奖结果
              setTimeout(function(){
                if (betToggle === 1) {
                  num++;
                  requestProject();
                }
              }, 2000);
              return;
            }
          }
          getMoney(); // 结果出来后，查询更新一下余额
          console.log('投注结果已出');
          preResultData = dataArr.slice(0, preBetNum);
          resolve(preResultData); 
        } else {
          reject(new CustomError('查询投注结果失败_1'));
        }
      }).catch(function(err){
        if (err.name === 'CustomError') {
          reject(err);
        } else {
          reject(new CustomError('查询投注结果失败_2'));
        }
      });
    }
    // 开始请求
    requestProject();
  });
}

// 获取下一期数据
function requestNextIssue() {
  return new Promise(function(resolve, reject){
    http('POST', apiDomain + '/games/issue?enable=1&lotteryId='+LOTTERY_ID, {
      lottery_id: LOTTERY_ID
    }).then(function(res){
      if (res && res.isSuccess && res.data) {
        nextIssueData = res.data;
        resolve(nextIssueData);
      } else {
        reject(new CustomError('查询下一把投注奖期数据失败_1'));
      }
    }).catch(function(err){
      if (err.name === 'CustomError') {
        reject(err);
      } else {
        reject(new CustomError('查询下一把投注奖期数据失败_2'));
      }
    });
  });
}

// 获取前50条趋势分析数据中的未中奖情况
function requestTrends() {
  return new Promise(function(resolve, reject){
    var num = 1;
    function requestTrendsInnerFn() {
      http('POST', apiDomain + '/trends', {
        lottery_id: LOTTERY_ID,
        count: 50
      }).then(function(res){
        console.log('查询趋势结果[' + num + ']次');
        if (res && res.isSuccess && res.data) {
          var dataArr = res.data.original_data;
          var qianTimes = -1;
          var zhongTimes = -1;
          var houTimes = -1;
          for (var i = 0; i < dataArr.length; i++) {
            if (hasSame(dataArr[i].lottery, 1) && qianTimes === -1) {
              qianTimes = i;
              notWinDetail[QIAN_SAN_WAY_ID].times = i;
            }
            if (hasSame(dataArr[i].lottery, 2) && zhongTimes === -1) {
              zhongTimes = i;
              notWinDetail[ZHONG_SAN_WAY_ID].times = i;
            }
            if (hasSame(dataArr[i].lottery, 3) && houTimes === -1) {
              houTimes = i;
              notWinDetail[HOU_SAN_WAY_ID].times = i;
            }
          }
          // 更新连续多少期没中奖了的UI
          setQianNotWinIssueNumDom(notWinDetail[QIAN_SAN_WAY_ID].times);
          setZhongNotWinIssueNumDom(notWinDetail[ZHONG_SAN_WAY_ID].times);
          setHouNotWinIssueNumDom(notWinDetail[HOU_SAN_WAY_ID].times);
          
          // 是否存在超过设置的未开奖期数
          if (judgeIsExceedNum()) {
            resolve(notWinDetail);
          } else {
            setSoftExcuteStatusDom('正在监听是否有连续超过' + followBetExceedNum + '期还未中奖的数据');
            // 2秒钟查询一次趋势结果
            setTimeout(function(){
              if (betToggle === 1) {
                num++;
                requestTrendsInnerFn();
              }
            }, 2000);
          }
        } else {
          reject(new CustomError('查询趋势分析数据失败_1'));
        }
      }).catch(function(err){
        if (err.name === 'CustomError') {
          reject(err);
        } else {
          reject(new CustomError('查询趋势分析数据失败_2'));
        }
      });
    }
    requestTrendsInnerFn();
  });
}

// 设置当前投注情况，并更新UI
function setCurBetDetail(dataArr) {
  // 重置为默认
  for (var i = 0; i < WAY_ID_ARR.length; i++) {
    curBetDetail.issue = '';
    curBetDetail[WAY_ID_ARR[i]].times = -1;
  }
  // 根据投注数据设置
  for (var i = 0; i < dataArr.length; i++) {
    var curData = dataArr[i].balls[0];
    curBetDetail.issue = Object.keys(dataArr[i].orders)[0];
    curBetDetail[curData['wayId']].times = curData.multiple;
  }
  // 设置UI
  setCurBetIssueDom(curBetDetail.issue);
  if (curBetDetail[QIAN_SAN_WAY_ID].times > 0) {
    setQianCurBetTimesDom(curBetDetail[QIAN_SAN_WAY_ID].times);
  } else {
    setQianCurBetTimesDom('--')
  }
  if (curBetDetail[ZHONG_SAN_WAY_ID].times > 0) {
    setZhongCurBetTimesDom(curBetDetail[ZHONG_SAN_WAY_ID].times);
  } else {
    setZhongCurBetTimesDom('--');
  }
  if (curBetDetail[HOU_SAN_WAY_ID].times > 0) {
    setHouCurBetTimesDom(curBetDetail[HOU_SAN_WAY_ID].times);
  } else {
    setHouCurBetTimesDom('--');
  }
}

// 获取正常倍数的下一个倍数
function getNextTimesData(multiple) {
  for (var i = 0; i < BET_LIST.length; i++) {
    if (BET_LIST[i].multiple === multiple && BET_LIST[i+1]) {
      return BET_LIST[i+1].multiple;
    }
  }
  throw new CustomError('在表中找不到[' + multiple + ']的下一个倍数');
}

// 当前倍数是否存在
function timesIsInbetList(times) {
  for (var i = 0; i < BET_LIST.length; i++) {
    if (BET_LIST[i].multiple === times) {
      return true;
    }
  }
  return false;
}

// 投注API
function betAPI(index, dataArr, resolve, reject) {
  if (dataArr.length === 0) { // 没有可以投注的(没有超过规定倍数的数据)
    // 动态改变历史跟投数量
    preBetNum = dataArr.length;
    setPreNumInputDom(preBetNum);

    // 设置当前投注情况
    setCurBetDetail(dataArr);

    resolve();

    // 2秒后进入下一轮监听
    setTimeout(function() {
      if (betToggle === 1) {
        getDataAndBet();
      }
    }, 2000);
    return;
  }
  var data = dataArr[index];
  var encryptObj = CryptoJS.AES.encrypt(JSON.stringify(data.balls), CryptoJS.enc.Utf8.parse("C194V1RBJG8MJPEL"), {
    iv: CryptoJS.enc.Utf8.parse("ARC49SBQE76B8QZT"),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  http('POST', apiDomain + '/games/bet', Object.assign({}, data, { 
    balls: encryptObj.toString() 
  })).then(function(res){
    if (res && res.isSuccess) {
      console.log('第[' + (index+1) + ']条投注成功');
      index++;
      if (index < dataArr.length) {
        // 间隔0.2秒投注一次
        setTimeout(function(){
          if (betToggle === 1) {
            betAPI(index, dataArr, resolve, reject);
          }
        }, 200);
      } else {
        // 执行完这一把的所有投注之后，动态改变历史跟投数量
        preBetNum = dataArr.length;
        setPreNumInputDom(preBetNum);
  
        setSoftExcuteStatusDom('投注成功完成，当前一共[' + preBetNum + ']条投注');
        console.log('投注成功完成，当前一共[' + preBetNum + ']条投注');

        // 设置当前投注情况
        setCurBetDetail(dataArr);

        resolve();

        // 2秒后进入下一轮监听
        setTimeout(function() {
          if (betToggle === 1) {
            getDataAndBet();
          }
        }, 2000);
      }
    } else {
      reject(new CustomError('投注失败_1'));
    }
  }).catch(function(err){
    console.log('原始报错信息：', err);
    if (err.name === 'CustomError') {
      reject(err);
    } else {
      reject(new CustomError('投注失败_2'));
    }
  });
}

// 执行投注
function excuteBet(dataArr) {
  return new Promise(function(resolve, reject){
    var processedDataArr = [];
    for (var i = 0; i < dataArr.length; i++) {
      var curData = dataArr[i];
      processedDataArr.push({
        uuid: BET_COMMON_PARAMS.uuid,
        bet_source: BET_COMMON_PARAMS.bet_source,
        isTrace: BET_COMMON_PARAMS.isTrace,
        is_encoded: BET_COMMON_PARAMS.is_encoded,
        traceStopValue: BET_COMMON_PARAMS.traceStopValue, 
        traceWinStop: BET_COMMON_PARAMS.traceWinStop, 
        gameId: curData.lotteryId, // 城市时时彩游戏id
        amount: Number(BET_COMMON_PARAMS.num) * Number(curData.multiple) * Number(BET_COMMON_PARAMS.moneyunit) * Number(BET_COMMON_PARAMS.onePrice), // 总投注金额 = this.bet_num * this.multipleVal * this.moneyUnit * 2
        orders: {
          [curData.issue]: 1 // key: 要投注的奖期
        },
        balls: [
          {
            ball: BET_COMMON_PARAMS.ball, // 投注的组合数字, 全投注："0123456789"
            moneyunit: BET_COMMON_PARAMS.moneyunit, // 投注的单位
            multiple: curData.multiple, // 投注的倍数
            num: BET_COMMON_PARAMS.num, // 一共投多少注, 全投注：90
            onePrice: BET_COMMON_PARAMS.onePrice, // 一注的价钱
            prize_group: BET_COMMON_PARAMS.prize_group, // 奖金组
            wayId: curData.wayId // 组合玩法的id
          }
        ]
      });
    }
    setSoftExcuteStatusDom('正在投注中，请务必保持网络畅通');
    // 执行投注API
    betAPI(0, processedDataArr, resolve, reject);
  });
}

// 点击投注时对input值进行确认
function beginConfirm() {
  if (!confirm('你确定选项已经检查无误可以开始投注了吗？')) {
    return false;
  }
  return true;
}

// 判断是否存在超过设置的未开奖期数
function judgeIsExceedNum(key) {
  for (var key in notWinDetail) {
    if (notWinDetail[key].times > followBetExceedNum) {
      return true;
    }
  }
  return false;
}

// 判断是否正在跟投
function judgeIsBetting(key) {
  for (var i = 0; i < preResultData.length; i++) { // 从上一期投注结果数据中遍历
    var curData = preResultData[i];
    // 是否已经正在跟投，有的话返回跟投数据
    if (Number(TEXT_TO_WAY_ID[curData.title]) === Number(key)) { // 正在跟投
      return curData;
    }
  }
  return false;
}

// 拿到上一次投注结果、趋势数据、下一期数据进行处理
function processingData() {
  return new Promise(function(resolve, reject){
    var dataArr = [];
    for (var key in notWinDetail) {
      var curObj = notWinDetail[key];
      // 前中后是否连续超过规定的期数未中
      if (curObj.times > followBetExceedNum) { // 超过
        var resData = judgeIsBetting(key);
        if (resData && Number(resData.status) === Number(ISSUE_STATUS.NOT_WIN)) { // 正在投注
          var times = getNextTimesData(resData.multiple);
          // 是否已经跟投到开始返回倍数
          if (resData.multiple >= beiginBackTimes) {
            times = backToTimes; // 返回到设置的倍数
          }
          if (times > 0) {
            dataArr.push({
              issue: nextIssueData.cur_issue,
              wayId: TEXT_TO_WAY_ID[resData.title],
              lotteryId: LOTTERY_ID,
              multiple: times
            });
          }
        } else { // 没有投注(从一倍开始)
          dataArr.push({
            issue: nextIssueData.cur_issue,
            wayId: key,
            lotteryId: LOTTERY_ID,
            multiple: 1
          });
        }
      }
    }
    resolve(dataArr);
  });
}

// 获取相应数据并投注
function getDataAndBet() {
  getMoney().then(function(res){
    // 判断一些异常情况
    if (!timesIsInbetList(beiginBackTimes)) {
      return Promise.reject(new CustomError('在表中找不到倍数:' + beiginBackTimes));
    }
    if (!timesIsInbetList(backToTimes)) {
      return Promise.reject(new CustomError('在表中找不到倍数:' + backToTimes));
    }
    if (curUserAvaliable < 200) {
      return Promise.reject(new CustomError('账户余额必须大于200元才能玩'));
    }
    if (curUserAvaliable > stopAvailableMoney) {
      return Promise.reject(new CustomError('您目前余额已经大于' + stopAvailableMoney + '元了，不能再玩了，程序已经自动停止。如果还要玩，请调整余额参数'));
    }
  }).then(function(res){
    // 前面判断都验证通过之后的操作
    setInputsDomReadonly(true); // 设置文本框不可编辑
    setBeginBetDomDisabled(true); // 设置开始按钮不可点
    setStopBetDomDisabled(false); // 设置停止按钮可点
    betToggle = 1; // 打开投注开关
  }).then(requestPreResult).then(function(preResult){
    // 对上一把数据进行校验
    if (preResult.length === 0) {
      return Promise.resolve(preResult);
    }
    var issues = [];
    var wayTexts = {};
    for (var i = 0; i < preResult.length; i++) {
      var curData = preResult[i];
      // 是否为同一期数据
      if (issues.indexOf(curData.issue) === -1) {
        issues.push(curData.issue);
      }
      if (issues.length > 1) {
        return Promise.reject(new CustomError('上一把投注存在不是同一期数据的情况'));
      }
      // lottery_id 是否相同，确保是腾讯分分彩
      if (curData.lottery_id !== LOTTERY_ID) {
        return Promise.reject(new CustomError('上一把投注存在不是腾讯分分彩的数据的情况'));
      }
      // 是否前中后有重复投注的
      if (wayTexts[curData.title]) {
        return Promise.reject(new CustomError('上一把投注中[' + curData.title + ']出现不止一次'));
      }
      wayTexts[curData.title] = 1;
    }
  }).then(requestTrends).then(requestNextIssue).then(processingData).then(function(processedData){
    var reverseProcessedData = [];
    for (var i = processedData.length - 1; i >= 0; i--) {
      reverseProcessedData.push(processedData[i]);
    }
    return excuteBet(reverseProcessedData); // 返回一个promsie，这样 excuteBet 中发生异常就可以被下面的catch捕获
  }).catch(function(err){
    printError('投注异常:', err);
    // 所有的异常都统一在这里处理
    if (err.name === 'CustomError') {
      processError(err.message);
    } else {
      processError('投注异常，请手工去检查目前投注数据状况并完成投注');
    }
  });
}

/************** 以下是数据库和钱相关 ***************/

// 连接数据库
function linkDB() {
  console.log('开始连接数据库');
  var indexedDB = window.indexedDB;
  var request = indexedDB.open('_ionicstorage', 2);
  request.onsuccess = function (evt) {
    database = request.result;
    console.log('连接数据库成功');
    selectDB(database);
  };
  request.onerror = function (evt) {
    setSoftExcuteWrongDom('连接数据库异常');
    printError('连接数据库异常:', evt.target.errorCode);
  };
  request.onupgradeneeded = function (evt) {

  };
}
// 查询表
function selectDB(database) {
  console.log('开始查询token');
  // 连接数据表
  var transaction = database.transaction(["_ionickv"], "readonly");
  var objectStore = transaction.objectStore("_ionickv");
  // 查询token
  var request = objectStore.get("token");
  request.onsuccess = function(event) {
    token = request.result;
    console.log('查询token成功');

    // 查询余额
    getMoney().then(function(res){
      if (curUserAvaliable) {
        // 环境就绪，可以开始投注
        initPageData();
      } else {
        throw new CustomError('当前无可用金额');
      }
    }).catch(function(err){
      printError(err);
      if (err.name === 'CustomError') {
        setSoftExcuteWrongDom(err.message);
      }
    });
  };
  request.onerror = function(event) {
    setSoftExcuteWrongDom('获取用户登录信息失败');
    printError('查询token失败:', request.error);
  };
};

/************** 以下是dom相关 ***************/

// 创建DOM，注册事件
function createDoms() {
  // 分：信息提示区域、选项区域、操作区域、错误信息提示区域
  var cntDom = Zepto(`<div style="position:fixed;top:0;left:0;bottom:0;right:0;z-index:1000;background:rgba(0,0,0,0.7);">
    <fieldset style="border:1px yellow solid;padding:10px;color:#fff;font-size:12px;margin-top:5px;">
      <legend>信息展示区域</legend>
      当前余额：<label id="curAvaliableDom" style="color:#00ff00">--</label>
    </fieldset>
    <fieldset style="border:1px yellow solid;padding:10px;color:#fff;font-size:12px;margin-top:5px;">
      <legend>选项区域</legend>
      上一次投注数量：<br/> <input id="preNumInputDom" value='0' style="color:#000;margin-bottom:5px;" />(0表示重新开始投注) <br/>
      余额大于多少钱就停止所有的下注：<br/> <input id="stopAvailableInputDom" value='0' style="color:#000;margin-bottom:5px;" /> <br/>
      连续超过多少期未中开始跟投：<br/> <input id="followBetExceedNumInputDom" value='-1' style="color:#000;margin-bottom:5px;" />(-1表示马上开始)<br/>
      跟到多少倍未中奖就开始返回：<br/> <input id="beiginBackTimesInputDom" value='0' style="color:#000;margin-bottom:5px;" />(必须是表中的倍数,最大支持跟到:3827倍)<br/>
      返回到多少倍：<br/> <input id="backToTimesInputDom" value='0' style="color:#000;margin-bottom:5px;" />(必须是表中的倍数)
    </fieldset>
    <fieldset style="border:1px yellow solid;padding:10px;color:#fff;font-size:12px;margin-top:5px;">
      <legend>操作区域</legend>
      <button id="beginBetDom" style="color:#000;height:24px;" class="customButtom" disabled>开始投注</button> &nbsp;&nbsp;&nbsp;
      <button id="stopBetDom" style="color:#000;height:24px;" class="customButtom" disabled>停止投注</button>
    </fieldset>
    <fieldset style="border:1px yellow solid;padding:10px;color:#fff;font-size:12px;margin-top:5px;">
      <legend>错误和动态信息提示区域</legend>
      当前程序执行状态：<br/> <label id="softExcuteStatusDom" style="color:lightgreen;margin-bottom:5px;display:inline-block;">--</label> <br/>
      程序异常提示：<br/> <label id="softExcuteWrongDom" style="color:#00ff00;">--</label>
    </fieldset>
    <fieldset style="border:1px yellow solid;padding:10px;color:#fff;font-size:12px;margin-top:5px;">
      <legend>奖期和投注情况</legend>
      连续多少期没中奖了：<br/>
      前三：<label id="qianNotWinIssueNumDom">--</label>期;&nbsp; 
      中三：<label id="zhongNotWinIssueNumDom">--</label>期;&nbsp; 
      后三：<label id="houNotWinIssueNumDom">--</label>期; <br/><br/>
      当前投注到多少倍了(奖期: <label id="curBetIssueDom">--</label>)：<br/>
      前三：<label id="qianCurBetTimesDom">--</label>倍;&nbsp; 
      中三：<label id="zhongCurBetTimesDom">--</label>倍;&nbsp; 
      后三：<label id="houCurBetTimesDom">--</label>倍; 
    </fieldset>
    <div style="position:absolute;top:10px;right:10px;">
      <button id="closeAlarmBtnDom" class="customButtom" style="height:24px;">关闭报警</button>
      <audio id="alarmAudioDom" style="display:none;" src="http://fjdx.sc.chinaz.com/files/download/sound1/201406/4611.mp3" controls preload="auto" loop></audio>
    </div>
  </div>`);
  Zepto('head').append(`<style>
    .customButtom {
      position: relative;
    }
    .customButtom:hover {
      background: green;
    }
    .customButtom:active {
      left: 2px;
      top: 2px;
    }
  </style>`);
  Zepto('body').append(cntDom);
  cntDom.find('#beginBetDom').click(function(){
    if (beginConfirm()) {
      setSoftExcuteWrongDom('--'); // 重置错误信息
      getDataAndBet(); // 开始投注
    }
  });
  cntDom.find('#stopBetDom').click(function(){
    if (confirm('你确定要停止投注吗？')) {
      stopBet();
    }
  });
  cntDom.find('#closeAlarmBtnDom').click(function(){
    pauseAlarm();
  });
  cntDom.find('#preNumInputDom').on('input', function(){
    preBetNum = Number(Zepto(this).val());
  });
  cntDom.find('#stopAvailableInputDom').on('input', function(){
    stopAvailableMoney = Number(Zepto(this).val());
  });
  cntDom.find('#followBetExceedNumInputDom').on('input', function(){
    followBetExceedNum = Number(Zepto(this).val());
  });
  cntDom.find('#beiginBackTimesInputDom').on('input', function(){
    beiginBackTimes = Number(Zepto(this).val());
  });
  cntDom.find('#backToTimesInputDom').on('input', function(){
    backToTimes = Number(Zepto(this).val());
  });
}
// createDoms();

// 初始化页面中的动态数据
function initPageData() {
  // 选项区域
  setPreNumInputDom(preBetNum);
  setStopAvailableInputDom(stopAvailableMoney);
  setFollowBetExceedNumInputDom(followBetExceedNum);
  setBeiginBackTimesInputDom(beiginBackTimes);
  setBackToTimesInputDom(backToTimes);
  // 操作区域
  setBeginBetDomDisabled(false);
  // 错误和动态信息提示区域
  setSoftExcuteStatusDom('环境准备就绪,可以开始投注');
}
// 停止投注
function stopBet() {
  betToggle = 0;
  setBeginBetDomDisabled(false);
  setStopBetDomDisabled(true);
  setInputsDomReadonly(false);
  setSoftExcuteStatusDom('已停止投注');
}
// 统一错误UI显示和逻辑处理
function processError(message) {
  setSoftExcuteWrongDom(message); // UI显示错误信息
  playAlarm(); // 开启警报
  stopBet(); // 停止投注
}

function setCurAvaliableDom(val) {
  Zepto('#curAvaliableDom').html(val);
}

function setPreNumInputDom(val) {
  Zepto('#preNumInputDom').val(val);
}
function setStopAvailableInputDom(val) {
  Zepto('#stopAvailableInputDom').val(val);
}
function setFollowBetExceedNumInputDom(val) {
  Zepto('#followBetExceedNumInputDom').val(val);
}
function setBeiginBackTimesInputDom(val) {
  Zepto('#beiginBackTimesInputDom').val(val);
}
function setBackToTimesInputDom(val) {
  Zepto('#backToTimesInputDom').val(val);
}

function setQianNotWinIssueNumDom(val) {
  Zepto('#qianNotWinIssueNumDom').html(val);
}
function setZhongNotWinIssueNumDom(val) {
  Zepto('#zhongNotWinIssueNumDom').html(val);
}
function setHouNotWinIssueNumDom(val) {
  Zepto('#houNotWinIssueNumDom').html(val);
}
function setCurBetIssueDom(val) {
  Zepto('#curBetIssueDom').html(val);
}
function setQianCurBetTimesDom(val) {
  Zepto('#qianCurBetTimesDom').html(val);
}
function setZhongCurBetTimesDom(val) {
  Zepto('#zhongCurBetTimesDom').html(val);
}
function setHouCurBetTimesDom(val) {
  Zepto('#houCurBetTimesDom').html(val);
}

function setInputsDomReadonly(bool) {
  if (bool) {
    Zepto('#preNumInputDom').attr('readonly', true);
    Zepto('#stopAvailableInputDom').attr('readonly', true);
    Zepto('#followBetExceedNumInputDom').attr('readonly', true);
    Zepto('#beiginBackTimesInputDom').attr('readonly', true);
    Zepto('#backToTimesInputDom').attr('readonly', true);
  } else {
    Zepto('#preNumInputDom').removeAttr('readonly');
    Zepto('#stopAvailableInputDom').removeAttr('readonly');
    Zepto('#followBetExceedNumInputDom').removeAttr('readonly');
    Zepto('#beiginBackTimesInputDom').removeAttr('readonly');
    Zepto('#backToTimesInputDom').removeAttr('readonly');
  }
}
function setBeginBetDomDisabled(bool) {
  if (bool) {
    Zepto('#beginBetDom').attr('disabled', true);
  } else {
    Zepto('#beginBetDom').removeAttr('disabled');
  }
}
function setStopBetDomDisabled(bool){
  if (bool) {
    Zepto('#stopBetDom').attr('disabled', true);
  } else {
    Zepto('#stopBetDom').removeAttr('disabled');
  }
}
function setSoftExcuteStatusDom(val){
  Zepto('#softExcuteStatusDom').html(val);
}
function setSoftExcuteWrongDom(val){
  Zepto('#softExcuteWrongDom').html(val);
}
function playAlarm(){
  Zepto('#alarmAudioDom')[0].play();
}
function pauseAlarm(){
  Zepto('#alarmAudioDom')[0].pause();
}

createDoms(); // 创建DOM界面
linkDB(); // 连接数据库，准备环境

// TODO: 对输入进行校验