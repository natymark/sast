(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[7277],{50057:function(t,e,n){var r=n(78725);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var o=n(69333).A;o("733996e9",r,!0,{sourceMap:!1,shadowMode:!1})},74154:function(t,e,n){"use strict";var r;n.r(e),n.d(e,{default:function(){return g}});var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"normal-login-container"},[n("v-uni-view",{staticClass:"logo-content align-center justify-center flex"},[n("v-uni-image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:t.globalConfig.appInfo.logo,mode:"widthFix"}}),n("v-uni-text",{staticClass:"title"},[t._v("注册")])],1),n("v-uni-view",{staticClass:"login-form-content"},[n("v-uni-view",{staticClass:"input-item flex align-center"},[n("v-uni-view",{staticClass:"iconfont icon-user icon"}),n("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入账号",maxlength:"30"},model:{value:t.registerForm.username,callback:function(e){t.$set(t.registerForm,"username",e)},expression:"registerForm.username"}})],1),n("v-uni-view",{staticClass:"input-item flex align-center"},[n("v-uni-view",{staticClass:"iconfont icon-password icon"}),n("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"20"},model:{value:t.registerForm.password,callback:function(e){t.$set(t.registerForm,"password",e)},expression:"registerForm.password"}})],1),n("v-uni-view",{staticClass:"input-item flex align-center"},[n("v-uni-view",{staticClass:"iconfont icon-password icon"}),n("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入重复密码",maxlength:"20"},model:{value:t.registerForm.confirmPassword,callback:function(e){t.$set(t.registerForm,"confirmPassword",e)},expression:"registerForm.confirmPassword"}})],1),t.captchaEnabled?n("v-uni-view",{staticClass:"input-item flex align-center",staticStyle:{width:"60%",margin:"0px"}},[n("v-uni-view",{staticClass:"iconfont icon-code icon"}),n("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"请输入验证码",maxlength:"4"},model:{value:t.registerForm.code,callback:function(e){t.$set(t.registerForm,"code",e)},expression:"registerForm.code"}}),n("v-uni-view",{staticClass:"login-code"},[n("v-uni-image",{staticClass:"login-code-img",attrs:{src:t.codeUrl},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}})],1)],1):t._e(),n("v-uni-view",{staticClass:"action-btn"},[n("v-uni-button",{staticClass:"register-btn cu-btn block bg-blue lg round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleRegister()}}},[t._v("注册")])],1)],1),n("v-uni-view",{staticClass:"xieyi text-center"},[n("v-uni-text",{staticClass:"text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleUserLogin.apply(void 0,arguments)}}},[t._v("使用已有账号登录")])],1)],1)},a=[],c=n(42727),s=n(50575),l=n(1776),u={data:function(){return{codeUrl:"",captchaEnabled:!0,globalConfig:getApp().globalData.config,registerForm:{username:"",password:"",confirmPassword:"",code:"",uuid:""}}},created:function(){this.getCode()},methods:{handleUserLogin:function(){this.$tab.navigateTo("/pages/login")},getCode:function(){var t=this;(0,l.Pz)().then((function(e){t.captchaEnabled=void 0===e.captchaEnabled||e.captchaEnabled,t.captchaEnabled&&(t.codeUrl="data:image/gif;base64,"+e.img,t.registerForm.uuid=e.uuid)}))},handleRegister:function(){var t=this;return(0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:""===t.registerForm.username?t.$modal.msgError("请输入您的账号"):""===t.registerForm.password?t.$modal.msgError("请输入您的密码"):""===t.registerForm.confirmPassword?t.$modal.msgError("请再次输入您的密码"):t.registerForm.password!==t.registerForm.confirmPassword?t.$modal.msgError("两次输入的密码不一致"):""===t.registerForm.code&&t.captchaEnabled?t.$modal.msgError("请输入验证码"):(t.$modal.loading("注册中，请耐心等待..."),t.register());case 1:case"end":return e.stop()}}),e)})))()},register:function(){var t=this;return(0,s.A)((0,c.A)().mark((function e(){return(0,c.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:(0,l.kz)(t.registerForm).then((function(e){t.$modal.closeLoading(),uni.showModal({title:"系统提示",content:"恭喜你，您的账号 "+t.registerForm.username+" 注册成功！",success:function(t){t.confirm&&uni.redirectTo({url:"/pages/login"})}})})).catch((function(){t.captchaEnabled&&t.getCode()}));case 1:case"end":return e.stop()}}),e)})))()},registerSuccess:function(t){var e=this;this.$store.dispatch("GetInfo").then((function(t){e.$tab.reLaunch("/pages/index")}))}}},f=u,h=(n(50057),n(18535)),d=(0,h.A)(f,i,a,!1,null,"cea07ec8",null,!1,r,o),g=d.exports},78725:function(t,e,n){"use strict";n.r(e);var r=n(45522),o=n.n(r),i=n(67643),a=n.n(i),c=a()(o());c.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-cea07ec8]{background-color:#fff}body.?%PAGE?%[data-v-cea07ec8]{background-color:#fff}.normal-login-container[data-v-cea07ec8]{width:100%}.normal-login-container .logo-content[data-v-cea07ec8]{width:100%;font-size:21px;text-align:center;padding-top:15%}.normal-login-container .logo-content uni-image[data-v-cea07ec8]{border-radius:4px}.normal-login-container .logo-content .title[data-v-cea07ec8]{margin-left:10px}.normal-login-container .login-form-content[data-v-cea07ec8]{text-align:center;margin:20px auto;margin-top:15%;width:80%}.normal-login-container .login-form-content .input-item[data-v-cea07ec8]{margin:20px auto;background-color:#f5f6f7;height:45px;border-radius:20px}.normal-login-container .login-form-content .input-item .icon[data-v-cea07ec8]{font-size:%?38?%;margin-left:10px;color:#999}.normal-login-container .login-form-content .input-item .input[data-v-cea07ec8]{width:100%;font-size:14px;line-height:20px;text-align:left;padding-left:15px}.normal-login-container .login-form-content .register-btn[data-v-cea07ec8]{margin-top:40px;height:45px}.normal-login-container .login-form-content .xieyi[data-v-cea07ec8]{color:#333;margin-top:20px}.normal-login-container .login-form-content .login-code[data-v-cea07ec8]{height:38px;float:right}.normal-login-container .login-form-content .login-code .login-code-img[data-v-cea07ec8]{height:38px;position:absolute;margin-left:10px;width:%?200?%}',""]),e["default"]=c},4731:function(t,e,n){"use strict";var r=n(44576),o=n(10687);o(r.JSON,"JSON",!0)},60479:function(t,e,n){"use strict";var r=n(10687);r(Math,"Math",!0)},40875:function(t,e,n){"use strict";var r=n(46518),o=n(79039),i=n(48981),a=n(42787),c=n(12211),s=o((function(){a(1)}));r({target:"Object",stat:!0,forced:s,sham:!c},{getPrototypeOf:function(t){return a(i(t))}})},10287:function(t,e,n){"use strict";var r=n(46518),o=n(52967);r({target:"Object",stat:!0},{setPrototypeOf:o})},66412:function(t,e,n){"use strict";var r=n(70511);r("asyncIterator")},78125:function(t,e,n){"use strict";var r=n(97751),o=n(70511),i=n(10687);o("toStringTag"),i(r("Symbol"),"Symbol")},50575:function(t,e,n){"use strict";n.d(e,{A:function(){return o}});n(26099);function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}},42727:function(t,e,n){"use strict";n.d(e,{A:function(){return o}});n(52675),n(89463),n(66412),n(2259),n(78125),n(16280),n(76918),n(44114),n(94490),n(34782),n(4731),n(60479),n(84185),n(40875),n(10287),n(26099),n(47764),n(23500),n(62953);var r=n(65376);function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return e};var t,e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new A(r||[]);return a(i,"_invoke",{value:O(t,n,c)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var g="suspendedStart",p="suspendedYield",v="executing",m="completed",y={};function w(){}function x(){}function b(){}var E={};f(E,s,(function(){return this}));var L=Object.getPrototypeOf,C=L&&L(L(S([])));C&&C!==n&&i.call(C,s)&&(E=C);var F=b.prototype=w.prototype=Object.create(E);function _(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,c,s){var l=d(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==(0,r.A)(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function O(e,n,r){var o=g;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=P(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===g)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=d(e,n,r);if("normal"===l.type){if(o=r.done?m:p,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator["return"]&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function S(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(i.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError((0,r.A)(e)+" is not iterable")}return x.prototype=b,a(F,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(F),t},e.awrap=function(t){return{__await:t}},_(k.prototype),f(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(h(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(F),f(F,u,"Generator"),f(F,s,(function(){return this})),f(F,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=S,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}}}]);