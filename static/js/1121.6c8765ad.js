(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[1121],{23335:function(e,t,r){var n=r(11675);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var a=r(69333).A;a("493ff52e",n,!0,{sourceMap:!1,shadowMode:!1})},70491:function(e,t,r){"use strict";var n;r.d(t,{A:function(){return W}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"uni-forms"},[r("v-uni-form",[e._t("default")],2)],1)},i=[],u=r(42727),s=r(50575),o=r(2775),l=(r(28706),r(50113),r(25276),r(44114),r(60739),r(33110),r(2892),r(79432),r(26099),r(47764),r(23500),r(62953),r(57756)),c=r(91913),f=(r(48757),r(63065)),m=r(51729),h=r(65376),d=(r(76918),r(2008),r(48980),r(58940),r(84864),r(57465),r(27495),r(87745),r(90906),r(38781),r(31415),r(17642),r(58004),r(33853),r(45876),r(32475),r(15024),r(31698),r(71761),r(25440),r(11392),{email:/^\S+?@\S+?\.\S+?$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,url:window[('\x52\x65\x67\x45\x78\x70')]("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i")}),v={int:"integer",bool:"boolean",double:"number",long:"number",password:"string"};function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=["label"];r.forEach((function(t){void 0===e[t]&&(e[t]="")}));var n=t;for(var a in e){var i=window[('\x52\x65\x67\x45\x78\x70')]("{"+a+"}");n=n.replace(i,e[a])}return n}function b(e,t){return void 0===e||null===e||("string"===typeof e&&!e||(!(!Array.isArray(e)||e.length)||"object"===t&&!Object.keys(e).length))}var g={integer:function(e){return g.number(e)&&parseInt(e,10)===e},string:function(e){return"string"===typeof e},number:function(e){return!isNaN(e)&&"number"===typeof e},boolean:function(e){return"boolean"===typeof e},float:function(e){return g.number(e)&&!g.integer(e)},array:function(e){return Array.isArray(e)},object:function(e){return"object"===(0,h.A)(e)&&!g.array(e)},date:function(e){return e instanceof Date},timestamp:function(e){return!(!this.integer(e)||Math.abs(e).toString().length>16)},file:function(e){return"string"===typeof e.url},email:function(e){return"string"===typeof e&&!!e.match(d.email)&&e.length<255},url:function(e){return"string"===typeof e&&!!e.match(d.url)},pattern:function(e,t){try{return window[('\x52\x65\x67\x45\x78\x70')](e).test(t)}catch(r){return!1}},method:function(e){return"function"===typeof e},idcard:function(e){return"string"===typeof e&&!!e.match(d.idcard)},"url-https":function(e){return this.url(e)&&e.startsWith("https://")},"url-scheme":function(e){return e.startsWith("://")},"url-web":function(e){return!1}},y=function(){function e(t){(0,f.A)(this,e),this._message=t}return(0,m.A)(e,[{key:"validateRule",value:function(){var e=(0,s.A)((0,u.A)().mark((function e(t,r,n,a,i){var s,o,l,c,f,m,h,d,v;return(0,u.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s=null,o=r.rules,l=o.findIndex((function(e){return e.required})),!(l<0)){e.next=8;break}if(null!==n&&void 0!==n){e.next=6;break}return e.abrupt("return",s);case 6:if("string"!==typeof n||n.length){e.next=8;break}return e.abrupt("return",s);case 8:if(c=this._message,void 0!==o){e.next=11;break}return e.abrupt("return",c["default"]);case 11:f=0;case 12:if(!(f<o.length)){e.next=35;break}if(m=o[f],h=this._getValidateType(m),Object.assign(m,{label:r.label||'["'.concat(t,'"]')}),!k[h]){e.next=20;break}if(s=k[h](m,n,c),null==s){e.next=20;break}return e.abrupt("break",35);case 20:if(!m.validateExpr){e.next=26;break}if(d=Date.now(),v=m.validateExpr(n,i,d),!1!==v){e.next=26;break}return s=this._getMessage(m,m.errorMessage||this._message["default"]),e.abrupt("break",35);case 26:if(!m.validateFunction){e.next=32;break}return e.next=29,this.validateFunction(m,n,a,i,h);case 29:if(s=e.sent,null===s){e.next=32;break}return e.abrupt("break",35);case 32:f++,e.next=12;break;case 35:return null!==s&&(s=c.TAG+s),e.abrupt("return",s);case 37:case"end":return e.stop()}}),e,this)})));function t(t,r,n,a,i){return e.apply(this,arguments)}return t}()},{key:"validateFunction",value:function(){var e=(0,s.A)((0,u.A)().mark((function e(t,r,n,a,i){var s,o,l;return(0,u.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=null,e.prev=1,o=null,e.next=5,t.validateFunction(t,r,a||n,(function(e){o=e}));case 5:l=e.sent,(o||"string"===typeof l&&l||!1===l)&&(s=this._getMessage(t,o||l,i)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),s=this._getMessage(t,e.t0.message,i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(t,r,n,a,i){return e.apply(this,arguments)}return t}()},{key:"_getMessage",value:function(e,t,r){return p(e,t||e.errorMessage||this._message[r]||t["default"])}},{key:"_getValidateType",value:function(e){var t="";return e.required?t="required":e.format?t="format":e.arrayType?t="arrayTypeFormat":e.range?t="range":void 0!==e.maximum||void 0!==e.minimum?t="rangeNumber":void 0!==e.maxLength||void 0!==e.minLength?t="rangeLength":e.pattern?t="pattern":e.validateFunction&&(t="validateFunction"),t}}])}(),k={required:function(e,t,r){return e.required&&b(t,e.format||(0,h.A)(t))?p(e,e.errorMessage||r.required):null},range:function(e,t,r){for(var n=e.range,a=e.errorMessage,i=new Array(n.length),u=0;u<n.length;u++){var s=n[u];g.object(s)&&void 0!==s.value?i[u]=s.value:i[u]=s}var o=!1;return Array.isArray(t)?o=new Set(t.concat(i)).size===i.length:i.indexOf(t)>-1&&(o=!0),o?null:p(e,a||r["enum"])},rangeNumber:function(e,t,r){if(!g.number(t))return p(e,e.errorMessage||r.pattern.mismatch);var n=e.minimum,a=e.maximum,i=e.exclusiveMinimum,u=e.exclusiveMaximum,s=i?t<=n:t<n,o=u?t>=a:t>a;return void 0!==n&&s?p(e,e.errorMessage||r["number"][i?"exclusiveMinimum":"minimum"]):void 0!==a&&o?p(e,e.errorMessage||r["number"][u?"exclusiveMaximum":"maximum"]):void 0!==n&&void 0!==a&&(s||o)?p(e,e.errorMessage||r["number"].range):null},rangeLength:function(e,t,r){if(!g.string(t)&&!g.array(t))return p(e,e.errorMessage||r.pattern.mismatch);var n=e.minLength,a=e.maxLength,i=t.length;return void 0!==n&&i<n?p(e,e.errorMessage||r["length"].minLength):void 0!==a&&i>a?p(e,e.errorMessage||r["length"].maxLength):void 0!==n&&void 0!==a&&(i<n||i>a)?p(e,e.errorMessage||r["length"].range):null},pattern:function(e,t,r){return g["pattern"](e.pattern,t)?null:p(e,e.errorMessage||r.pattern.mismatch)},format:function(e,t,r){var n=Object.keys(g),a=v[e.format]?v[e.format]:e.format||e.arrayType;return n.indexOf(a)>-1&&!g[a](t)?p(e,e.errorMessage||r.typeError):null},arrayTypeFormat:function(e,t,r){if(!Array.isArray(t))return p(e,e.errorMessage||r.typeError);for(var n=0;n<t.length;n++){var a=t[n],i=this.format(e,a,r);if(null!==i)return i}return null}},x=function(e){function t(e,r){var n;return(0,f.A)(this,t),n=(0,l.A)(this,t,[t.message]),n._schema=e,n._options=r||null,n}return(0,c.A)(t,e),(0,m.A)(t,[{key:"updateSchema",value:function(e){this._schema=e}},{key:"validate",value:function(){var e=(0,s.A)((0,u.A)().mark((function e(t,r){var n;return(0,u.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=this._checkFieldInSchema(t),n){e.next=5;break}return e.next=4,this.invokeValidate(t,!1,r);case 4:n=e.sent;case 5:return e.abrupt("return",n.length?n[0]:null);case 6:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"validateAll",value:function(){var e=(0,s.A)((0,u.A)().mark((function e(t,r){var n;return(0,u.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=this._checkFieldInSchema(t),n){e.next=5;break}return e.next=4,this.invokeValidate(t,!0,r);case 4:n=e.sent;case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"validateUpdate",value:function(){var e=(0,s.A)((0,u.A)().mark((function e(t,r){var n;return(0,u.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=this._checkFieldInSchema(t),n){e.next=5;break}return e.next=4,this.invokeValidateUpdate(t,!1,r);case 4:n=e.sent;case 5:return e.abrupt("return",n.length?n[0]:null);case 6:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"invokeValidate",value:function(){var e=(0,s.A)((0,u.A)().mark((function e(t,r,n){var a,i,s,o,l;return(0,u.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=[],i=this._schema,e.t0=(0,u.A)().keys(i);case 3:if((e.t1=e.t0()).done){e.next=15;break}return s=e.t1.value,o=i[s],e.next=8,this.validateRule(s,o,t[s],t,n);case 8:if(l=e.sent,null==l){e.next=13;break}if(a.push({key:s,errorMessage:l}),r){e.next=13;break}return e.abrupt("break",15);case 13:e.next=3;break;case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"invokeValidateUpdate",value:function(){var e=(0,s.A)((0,u.A)().mark((function e(t,r,n){var a,i,s;return(0,u.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=[],e.t0=(0,u.A)().keys(t);case 2:if((e.t1=e.t0()).done){e.next=13;break}return i=e.t1.value,e.next=6,this.validateRule(i,this._schema[i],t[i],t,n);case 6:if(s=e.sent,null==s){e.next=11;break}if(a.push({key:i,errorMessage:s}),r){e.next=11;break}return e.abrupt("break",13);case 11:e.next=2;break;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"_checkFieldInSchema",value:function(e){var r=Object.keys(e),n=Object.keys(this._schema);if(new Set(r.concat(n)).size===n.length)return"";var a=r.filter((function(e){return n.indexOf(e)<0})),i=p({field:JSON.stringify(a)},t.message.TAG+t.message["defaultInvalid"]);return[{key:"invalid",errorMessage:i}]}}])}(y);function A(){return{TAG:"",default:"验证错误",defaultInvalid:"提交的字段{field}在数据库中并不存在",validateFunction:"验证无效",required:"{label}必填",enum:"{label}超出范围",timestamp:"{label}格式无效",whitespace:"{label}不能为空",typeError:"{label}类型无效",date:{format:"{label}日期{value}格式无效",parse:"{label}日期无法解析,{value}无效",invalid:"{label}日期{value}无效"},length:{minLength:"{label}长度不能少于{minLength}",maxLength:"{label}长度不能超过{maxLength}",range:"{label}必须介于{minLength}和{maxLength}之间"},number:{minimum:"{label}不能小于{minimum}",maximum:"{label}不能大于{maximum}",exclusiveMinimum:"{label}不能小于等于{minimum}",exclusiveMaximum:"{label}不能大于等于{maximum}",range:"{label}必须介于{minimum}and{maximum}之间"},pattern:{mismatch:"{label}格式不匹配"}}}x.message=new A;var w=x,_=(r(62062),r(72712),r(1480),function(e){return JSON.parse(JSON.stringify(e))}),M=function(e){return"int"===e||"double"===e||"number"===e||"timestamp"===e},S=function(e,t,r){var n=r.find((function(e){return e.format&&M(e.format)})),a=r.find((function(e){return e.format&&"boolean"===e.format||"bool"===e.format}));return n&&(t=t||0===t?T(Number(t))?Number(t):t:null),a&&(t=!!$(t)&&t),t},O=function(e,t,r){return t[e]=r,r||""},j=function(e,t){return L(t,e)},N=function(e){var t=E(e);if("object"===(0,h.A)(t)&&Array.isArray(t)&&t.length>1){var r=t.reduce((function(e,t){return e+"#".concat(t)}),"_formdata_");return r}return t[0]||e},F=function(e){var t=/^_formdata_#*/;return t.test(e)},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.parse(JSON.stringify(e)),r={};for(var n in t){var a=R(n);D(r,a,t[n])}return r},R=function(e){var t=e.replace("_formdata_#","");return t=t.split("#").map((function(e){return T(e)?Number(e):e})),t},D=function(e,t,r){return"object"!==(0,h.A)(e)||E(t).reduce((function(e,t,n,a){return n===a.length-1?(e[t]=r,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(a[n+1])?[]:{}),e[t])}),e),e};function E(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}var L=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"undefined",n=E(t),a=n.reduce((function(e,t){return(e||{})[t]}),e);return a&&void 0===a?r:a},T=function(e){return!isNaN(Number(e))},$=function(e){return"boolean"===typeof e},q=function(e){for(var t=!1,r=0;r<e.length;r++){var n=e[r];if(n.required){t=!0;break}}return t},I=function(e,t){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return e===t;var r=toString.call(e),n=toString.call(t);if(r!==n)return!1;switch(r){case"[object window[('\x52\x65\x67\x45\x78\x70')]]":case"[object String]":return""+e===""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}if("[object Object]"==r){var a=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);if(a.length!=i.length)return!1;for(var u=0;u<a.length;u++){var s=a[u];if(e[s]!==t[s])return!1}return!0}return"[object Array]"==r?e.toString()==t.toString():void 0},z=r(85476),C=r(43859)["A"];z.A.prototype.binddata=function(e,t,r){if(r)this.$refs[r].setValue(e,t);else{var n;for(var a in this.$refs){var i=this.$refs[a];if(i&&i.$options&&"uniForms"===i.$options.name){n=i;break}}if(!n)return C.error("当前 uni-froms 组件缺少 ref 属性");n.setValue(e,t)}};var J,P={name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:function(){return null}},modelValue:{type:Object,default:function(){return null}},model:{type:Object,default:function(){return null}},rules:{type:Object,default:function(){return{}}},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide:function(){return{uniForm:this}},data:function(){return{formData:{},formRules:{}}},computed:{localData:function(){var e=this.model||this.modelValue||this.value;return e?_(e):{}}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created:function(){this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules:function(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new w(e)},setValue:function(e,t){var r=this.childrens.find((function(t){return t.name===e}));return r?(this.formData[e]=S(e,t,this.formRules[e]&&this.formRules[e].rules||[]),r.onFieldChange(this.formData[e])):null},validate:function(e,t){return this.checkAll(this.formData,e,t)},validateField:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;t=[].concat(t);var n={};return this.childrens.forEach((function(r){var a=N(r.name);-1!==t.indexOf(a)&&(n=Object.assign({},n,(0,o.A)({},a,e.formData[a])))})),this.checkAll(n,[],r)},clearValidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e=[].concat(e),this.childrens.forEach((function(t){if(0===e.length)t.errMsg="";else{var r=N(t.name);-1!==e.indexOf(r)&&(t.errMsg="")}}))},submit:function(e,t,r){var n=this,a=function(e){var t=n.childrens.find((function(t){return t.name===e}));t&&void 0===n.formData[e]&&(n.formData[e]=n._getValue(e,n.dataValue[e]))};for(var i in this.dataValue)a(i);return r||C.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},checkAll:function(e,t,r,n){var a=this;return(0,s.A)((0,u.A)().mark((function i(){var s,o,l,c,f,m,h,d,v,p,b;return(0,u.A)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a.validator){i.next=2;break}return i.abrupt("return");case 2:s=[],o=(0,u.A)().mark((function e(t){var r;return(0,u.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=a.childrens.find((function(e){return N(e.name)===t})),r&&s.push(r);case 2:case"end":return e.stop()}}),e)})),i.t0=(0,u.A)().keys(e);case 5:if((i.t1=i.t0()).done){i.next=10;break}return l=i.t1.value,i.delegateYield(o(l),"t2",8);case 8:i.next=5;break;case 10:r||"function"!==typeof t||(r=t),!r&&"function"!==typeof r&&Promise&&(c=new Promise((function(e,t){r=function(r,n){r?t(r):e(n)}}))),f=[],m=JSON.parse(JSON.stringify(e)),i.t3=(0,u.A)().keys(s);case 15:if((i.t4=i.t3()).done){i.next=28;break}return h=i.t4.value,d=s[h],v=N(d.name),i.next=21,d.onFieldChange(m[v]);case 21:if(p=i.sent,!p){i.next=26;break}if(f.push(p),"toast"!==a.errShowType&&"modal"!==a.errShowType){i.next=26;break}return i.abrupt("break",28);case 26:i.next=15;break;case 28:if(Array.isArray(f)&&0===f.length&&(f=null),Array.isArray(t)&&t.forEach((function(e){var t=N(e),r=j(e,a.localData);void 0!==r&&(m[t]=r)})),"submit"===n?a.$emit("submit",{detail:{value:m,errors:f}}):a.$emit("validate",f),b={},b=V(m,a.name),r&&"function"===typeof r&&r(f,b),!c||!r){i.next=38;break}return i.abrupt("return",c);case 38:return i.abrupt("return",null);case 39:case"end":return i.stop()}}),i)})))()},validateCheck:function(e){this.$emit("validate",e)},_getValue:S,_isRequiredField:q,_setDataValue:O,_getDataValue:j,_realName:N,_isRealName:F,_isEqual:I}},U=P,B=(r(23335),r(18535)),G=(0,B.A)(U,a,i,!1,null,"15bbdc00",null,!1,n,J),W=G.exports},11675:function(e,t,r){"use strict";r.r(t);var n=r(45522),a=r.n(n),i=r(67643),u=r.n(i),s=u()(a());s.push([e.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */',""]),t["default"]=s},1480:function(e,t,r){"use strict";var n=r(46518),a=r(79039),i=r(10298).f,u=a((function(){return!Object.getOwnPropertyNames(1)}));n({target:"Object",stat:!0,forced:u},{getOwnPropertyNames:i})},48757:function(e,t,r){"use strict";r(16280),r(76918)}}]);
