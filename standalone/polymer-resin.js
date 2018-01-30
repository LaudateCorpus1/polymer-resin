(function(){'use strict';var p=this,q=function(a,d){a=a.split(".");var b=p;a[0]in b||!b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===d?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=d},r=function(a,d,b){return a.call.apply(a.bind,arguments)},t=function(a,d,b){if(!a)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,c);return a.apply(d,b)}}return function(){return a.apply(d,
arguments)}},u=function(a,d,b){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=r:u=t;return u.apply(null,arguments)};var w=function(){this.h=v};w.prototype.v=!0;w.prototype.l=function(){return""};w.prototype.toString=function(){return"Const{}"};var x=function(a){return a instanceof w&&a.constructor===w&&a.h===v?"":"type_error:Const"},v={};var z=function(){this.h=y};z.prototype.v=!0;var y={};z.prototype.l=function(){return""};var B=function(){this.h=A};B.prototype.v=!0;B.prototype.l=function(){return""};var A={};var C=/&/g,aa=/</g,ba=/>/g,ca=/"/g,da=/'/g,ea=/\x00/g,fa=/[\x00&<>"']/,ha=function(a){return String(a).replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})};var E=function(){this.h="";this.w=D};E.prototype.v=!0;E.prototype.l=function(){return this.h};var ia=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,D={},F=function(a){var d=new E;d.h=a;return d};F("about:blank");var H=function(){this.h=G};H.prototype.v=!0;var G={};H.prototype.l=function(){return""};var J=function(){this.h=I};J.prototype.v=!0;J.prototype.l=function(){return""};var I={};/*

 Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at
 http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at
 http://polymer.github.io/PATENTS.txt
*/
var ja={align:1,alt:1,autocapitalize:1,autocomplete:1,autocorrect:1,autofocus:1,bgcolor:1,border:1,checked:1,"class":1,color:1,cols:1,colspan:1,dir:8,disabled:1,draggable:1,face:1,"for":10,frameborder:1,height:1,hidden:1,href:4,id:10,ismap:1,label:1,lang:1,list:10,loop:1,max:1,maxlength:1,min:1,multiple:1,muted:1,name:10,placeholder:1,preload:1,rel:1,required:1,reversed:1,role:1,rows:1,rowspan:1,selected:1,shape:1,size:1,sizes:1,span:1,spellcheck:1,src:4,start:1,step:1,style:5,summary:1,tabindex:1,
target:8,title:1,translate:1,valign:1,value:1,width:1,wrap:1},K={a:{href:[{c:3}]},area:{href:[{c:3}]},audio:{src:[{c:3}]},blockquote:{cite:[{c:3}]},button:{formaction:[{c:3}],formmethod:[{c:1}],type:[{c:1}]},command:{type:[{c:1}]},del:{cite:[{c:3}]},form:{action:[{c:3}],method:[{c:1}]},iframe:{srcdoc:[{c:2}]},img:{src:[{c:3}]},input:{formaction:[{c:3}],formmethod:[{c:1}],pattern:[{c:1}],readonly:[{c:1}],src:[{c:3}],type:[{c:1}]},ins:{cite:[{c:3}]},li:{type:[{c:1}]},link:{href:[{c:3,f:"rel",g:"alternate"},
{c:3,f:"rel",g:"author"},{c:3,f:"rel",g:"bookmark"},{c:3,f:"rel",g:"canonical"},{c:3,f:"rel",g:"cite"},{c:3,f:"rel",g:"help"},{c:3,f:"rel",g:"icon"},{c:3,f:"rel",g:"license"},{c:3,f:"rel",g:"next"},{c:3,f:"rel",g:"prefetch"},{c:3,f:"rel",g:"prerender"},{c:3,f:"rel",g:"preconnect"},{c:3,f:"rel",g:"preload"},{c:3,f:"rel",g:"prev"},{c:3,f:"rel",g:"search"},{c:3,f:"rel",g:"subresource"}],media:[{c:1}],nonce:[{c:1}],type:[{c:1}]},menuitem:{icon:[{c:3}]},ol:{type:[{c:1}]},q:{cite:[{c:3}]},script:{nonce:[{c:1}]},
source:{media:[{c:1}],src:[{c:3}]},style:{media:[{c:1}],nonce:[{c:1}]},time:{datetime:[{c:1}]},video:{autoplay:[{c:1}],controls:[{c:1}],poster:[{c:3}],src:[{c:3}]}},L={a:1,abbr:1,address:1,applet:4,area:5,article:1,aside:1,audio:1,b:1,base:4,bdi:1,bdo:1,blockquote:1,body:1,br:5,button:1,canvas:1,caption:1,cite:1,code:1,col:5,colgroup:1,command:1,data:1,datalist:1,dd:1,del:1,details:1,dfn:1,dialog:1,div:1,dl:1,dt:1,em:1,embed:4,fieldset:1,figcaption:1,figure:1,font:1,footer:1,form:1,frame:1,frameset:1,
h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,head:1,header:1,hr:5,html:1,i:1,iframe:1,img:5,input:5,ins:1,kbd:1,keygen:5,label:1,legend:1,li:1,link:5,main:1,map:1,mark:1,math:4,menu:1,menuitem:1,meta:4,meter:1,nav:1,noscript:1,object:4,ol:1,optgroup:1,option:1,output:1,p:1,param:5,picture:1,pre:1,progress:1,q:1,rb:1,rp:1,rt:1,rtc:1,ruby:1,s:1,samp:1,script:3,section:1,select:1,slot:1,small:1,source:5,span:1,strong:1,style:2,sub:1,summary:1,sup:1,svg:4,table:1,tbody:1,td:1,template:4,textarea:6,tfoot:1,th:1,thead:1,
time:1,title:6,tr:1,track:5,u:1,ul:1,"var":1,video:1,wbr:5},ka=[{auto:!0,ltr:!0,rtl:!0},{_self:!0,_blank:!0}],M={"*":{dir:0,target:1}};var P=function(){if(!N){var a=la,d={};for(b in a)d[b]=a[b];N=d;a=0;for(d=O.length;a<d;++a){var b=O[a];N[b.toLowerCase()]=b}}return N},O="aLink accessKey allowFullscreen bgColor cellPadding cellSpacing codeBase codeType contentEditable crossOrigin dateTime dirName formAction formEnctype formMethod formNoValidate formTarget frameBorder innerHTML innerText inputMode isMap longDesc marginHeight marginWidth maxLength mediaGroup minLength noHref noResize noShade noValidate noWrap nodeValue outerHTML outerText readOnly tabIndex textContent trueSpeed useMap vAlign vLink valueAsDate valueAsNumber valueType".split(" "),
la={accept_charset:"acceptCharset","char":"ch",charoff:"chOff",checked:"defaultChecked","class":"className","for":"htmlFor",http_equiv:"httpEquiv",muted:"defaultMuted",selected:"defaultSelected",value:"defaultValue"},N=null,Q=null;var R={},S=!1,T=0,ma=/^(?!(?:annotation-xml|color-profile|font-face|font-face(?:-(?:src|uri|format|name))?|missing-glyph)$)[a-z][a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*-[\-a-z.0-9_\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u200c\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\udfff\uf900-\ufdcf\ufdf0-\ufffd]*$/,W=function(a,d){var b=window.customElements;if(S){for(var c=Polymer.telemetry.registrations,
k=c.length,m=T;m<k;++m)R[c[m].is]=R;T=k}return b&&b.get(a)||R[a]===R?2:d===HTMLUnknownElement?1:d===HTMLElement&&ma.test(a)?3:0};var X=/^$/,Y=void 0,Z=[,{filter:null,m:null,j:null,o:null},{filter:function(a,d,b){a=b;fa.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(C,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(aa,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(ba,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(ca,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(da,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(ea,"&#0;")));return a},m:null,j:J,o:function(a){return a instanceof J&&a.constructor===J&&a.h===I?"":"type_error:SafeHtml"}},{filter:function(a,
d,b){a=b;a instanceof E||(a=a.v?a.l():String(a),ia.test(a)||(a="about:invalid#zClosurez"),a=F(a));return a.l()},m:"about:invalid#zClosurez",j:E,o:function(a){return a instanceof E&&a.constructor===E&&a.w===D?a.h:"type_error:SafeUrl"}},{filter:function(){return"about:invalid#zClosurez"},m:"about:invalid#zClosurez",j:B,o:function(a){return a instanceof B&&a.constructor===B&&a.h===A?"":"type_error:TrustedResourceUrl"}},{filter:function(){return"zClosurez"},m:"zClosurez",j:H,o:function(a){return a instanceof
H&&a.constructor===H&&a.h===G?"":"type_error:SafeStyle"}},,{filter:function(){return" /*zClosurez*/ "},m:" /*zClosurez*/ ",j:z,o:function(a){return a instanceof z&&a.constructor===z&&a.h===y?"":"type_error:SafeScript"}},{filter:function(a,d,b){b=String(b).toLowerCase();a:{var c=null;(a=M[a])&&(c=a[d]);if("number"!=typeof c&&((a=M["*"])&&(c=a[d]),"number"!=typeof c)){d=!1;break a}d=!0===ka[c][String(b).toLowerCase()]}return d?b:"zClosurez"},m:"zClosurez",j:null,o:null}];
Z[9]={filter:function(){return" /*zClosurez*/ "},m:"zClosurez",j:w,o:x};Z[10]={filter:function(a,d,b){return X.test(b)?b:"zClosurez"},m:"zClosurez",j:w,o:x};
q("security.polymer_resin.install",function(a){function d(a){var b=this.getAttribute(a);return!b||/[\[\{]/.test(a)?null:b}function b(a,b,c,f){if(!f)return f;var g=a.nodeType;if(1!==g){if(3===g){g=a.parentElement;b=!g;if(g&&1===g.nodeType){var e=g.localName;switch(W(e,g.constructor)){case 0:case 1:g=Object.hasOwnProperty.call(L,e)?L[e]:null;b=1===g||6===g;break;case 3:case 2:b=!0}}if(b)return f&&f.v?f.l():String(f)}Y&&Y(!0,"Failed to sanitize %s %s%s node to value %O",a.parentElement&&a.parentElement.nodeName,
"#text","",f);return"zClosurez"}g=a.localName;var l=a.localName;if(a.getAttribute("is")||2!==W(l,a.constructor)){var h=U[l];h||(h=U[l]=document.createElement(l));l=h}else l=na;switch(c){case "attribute":h=String(b).toLowerCase();var k=P()[h];if(("string"==typeof k?k:ha(h))in l)break;return f;case "property":if(b in l)break;h=b.toLowerCase();h=P()[h];if((h="string"==typeof h?h:null)&&h in l)break;return f;default:throw Error(c+": "+typeof c);}if("attribute"==c)b=b.toLowerCase();else{c=Q;if(!c){c=P();
l={};for(e in c)l[c[e]]=e;c=Q=l}e=c[b];b="string"==typeof e?e:String(b).replace(/([A-Z])/g,"-$1").toLowerCase()}a:{a=u(d,a);if(Object.hasOwnProperty.call(K,g)&&(e=K[g],Object.hasOwnProperty.call(e,b)&&(e=e[b],e instanceof Array))){c=null;l=!1;h=0;for(k=e.length;h<k;++h){var m=e[h],n=m.f;if(!n){e=m.c;break a}null===c&&(c={});n=Object.hasOwnProperty.call(c,n)?c[n]:c[n]=a(n);if(n===m.g){e=m.c;break a}null==n&&(l=!0)}if(l){e=null;break a}}a=ja[b];e="number"===typeof a?a:null}a="zClosurez";if(null!=e){e=
Z[e];if(e.j&&f instanceof e.j)return e.o(f);a=f&&f.v?f.l():String(f);a=e.filter?e.filter(g,b,a):a;if(a!==e.m)return a}Y&&Y(!0,'Failed to sanitize attribute of <%s>: <%s %s="%O">',g,g,b,f);return a}if(a){var c=a.allowedIdentifierPrefixes;a=a.reportHandler;if(c)for(var k=0,m=c.length;k<m;++k)X=new RegExp(X.source+"|^"+String(c[k]).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"));void 0!==a&&(Y=a||null)}Y&&Y(!1,"initResin");var U={},na=document.createElement("polyresinuncustomized");
if(/^1\./.test(Polymer.version)){S=!0;var oa=Polymer.Base._computeFinalAnnotationValue;c=function(a,c,d,f){d=oa.call(this,a,c,d,f);var g="property";f&&f.propertyName?c=f.propertyName:g=f&&f.kind||"property";return b(a,c,g,d)};Polymer.Base._computeFinalAnnotationValue=c;if(Polymer.Base._computeFinalAnnotationValue!==c)throw Error("Cannot replace _computeFinalAnnotationValue.  Is Polymer frozen?");}else{var V=Polymer.sanitizeDOMValue;c=function(a,c,d,f){a=V?V.call(Polymer,a,c,d,f):a;return b(f,c,d,
a)};Polymer.sanitizeDOMValue=c;if(Polymer.sanitizeDOMValue!==c)throw Error("Cannot install sanitizeDOMValue.  Is Polymer frozen?");}});q("security.polymer_resin.CONSOLE_LOGGING_REPORT_HANDLER",function(a,d,b){for(var c=[d],k=2,m=arguments.length;k<m;++k)c[k-1]=arguments[k];a?console.warn.apply(console,c):console.log.apply(console,c)});}).call(this);
