(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[1396],{67549:function(t,n,i){var e=i(48116);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);var s=i(69333).A;s("6cfe852e",e,!0,{sourceMap:!1,shadowMode:!1})},20402:function(t,n,i){var e=i(96103);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);var s=i(69333).A;s("64d0c4be",e,!0,{sourceMap:!1,shadowMode:!1})},31751:function(t,n,i){var e=i(56699);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);var s=i(69333).A;s("5e55362c",e,!0,{sourceMap:!1,shadowMode:!1})},34176:function(t,n,i){"use strict";var e;i.d(n,{A:function(){return f}});var s,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.isShowA?i("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},attrs:{href:t.href,download:t.download}},[t._t("default",[t._v(t._s(t.text))])],2):i("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===t.showUnderLine||"true"===t.showUnderLine},style:{color:t.color,fontSize:t.fontSize+"px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openURL.apply(void 0,arguments)}}},[t._t("default",[t._v(t._s(t.text))])],2)},l=[],r=(i(2892),i(11392),{name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(t){uni.makePhoneCall({phoneNumber:t})}}}),o=r,u=(i(67549),i(18535)),c=(0,u.A)(o,a,l,!1,null,"f647e8de",null,!1,e,s),f=c.exports},72819:function(t,n,i){"use strict";var e;i.d(n,{A:function(){return f}});var s,a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"uni-title__box",style:{"align-items":t.textAlign}},[i("v-uni-text",{staticClass:"uni-title__base",class:["uni-"+t.type],style:{color:t.color}},[t._v(t._s(t.title))])],1)},l=[],r=(i(76918),i(26099),i(38781),{name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end";break}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"===typeof this.stat&&this.stat||"string"===typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}}),o=r,u=(i(20402),i(18535)),c=(0,u.A)(o,a,l,!1,null,"15c5c8da",null,!1,e,s),f=c.exports},83504:function(t,n,i){"use strict";i.r(n),i.d(n,{default:function(){return f}});var e,s={uniTitle:i(72819).A,uniLink:i(34176).A},a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"about-container"},[i("v-uni-view",{staticClass:"header-section text-center"},[i("v-uni-image",{staticStyle:{width:"150rpx",height:"150rpx"},attrs:{src:"/static/logo200.png",mode:"widthFix"}}),i("uni-title",{attrs:{type:"h2",title:"移动端"}})],1),i("v-uni-view",{staticClass:"content-section"},[i("v-uni-view",{staticClass:"menu-list"},[i("v-uni-view",{staticClass:"list-cell list-cell-arrow"},[i("v-uni-view",{staticClass:"menu-item-box"},[i("v-uni-view",[t._v("版本信息")]),i("v-uni-view",{staticClass:"text-right"},[t._v("v"+t._s(t.version))])],1)],1),i("v-uni-view",{staticClass:"list-cell list-cell-arrow"},[i("v-uni-view",{staticClass:"menu-item-box"},[i("v-uni-view",[t._v("官方邮箱")]),i("v-uni-view",{staticClass:"text-right"},[t._v("ruoyi@xx.com")])],1)],1),i("v-uni-view",{staticClass:"list-cell list-cell-arrow"},[i("v-uni-view",{staticClass:"menu-item-box"},[i("v-uni-view",[t._v("服务热线")]),i("v-uni-view",{staticClass:"text-right"},[t._v("400-999-9999")])],1)],1),i("v-uni-view",{staticClass:"list-cell list-cell-arrow"},[i("v-uni-view",{staticClass:"menu-item-box"},[i("v-uni-view",[t._v("公司网站")]),i("v-uni-view",{staticClass:"text-right"},[i("uni-link",{attrs:{href:t.url,text:t.url,showUnderLine:"false"}})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"copyright"},[i("v-uni-view",[t._v("Copyright © 2022 ruoyi.vip All Rights Reserved.")])],1)],1)},l=[],r={data:function(){return{url:getApp().globalData.config.appInfo.site_url,version:getApp().globalData.config.appInfo.version}}},o=r,u=(i(31751),i(18535)),c=(0,u.A)(o,a,l,!1,null,"4db0669f",null,!1,s,e),f=c.exports},48116:function(t,n,i){"use strict";i.r(n);var e=i(45522),s=i.n(e),a=i(67643),l=i.n(a),r=l()(s());r.push([t.id,"\n.uni-link[data-v-f647e8de]{cursor:pointer}\n.uni-link--withline[data-v-f647e8de]{text-decoration:underline}",""]),n["default"]=r},96103:function(t,n,i){"use strict";i.r(n);var e=i(45522),s=i.n(e),a=i(67643),l=i.n(a),r=l()(s());r.push([t.id,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .uni-title {\n\n} */.uni-title__box[data-v-15c5c8da]{\ndisplay:flex;\nflex-direction:column;align-items:flex-start;justify-content:center;padding:8px 0;flex:1}.uni-title__base[data-v-15c5c8da]{font-size:15px;color:#333;font-weight:500}.uni-h1[data-v-15c5c8da]{font-size:20px;color:#333;font-weight:700}.uni-h2[data-v-15c5c8da]{font-size:18px;color:#333;font-weight:700}.uni-h3[data-v-15c5c8da]{font-size:16px;color:#333;font-weight:700\n\t/* font-weight: 400; */}.uni-h4[data-v-15c5c8da]{font-size:14px;color:#333;font-weight:700\n\t/* font-weight: 300; */}.uni-h5[data-v-15c5c8da]{font-size:12px;color:#333;font-weight:700\n\t/* font-weight: 200; */}",""]),n["default"]=r},56699:function(t,n,i){"use strict";i.r(n);var e=i(45522),s=i.n(e),a=i(67643),l=i.n(a),r=l()(s());r.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-4db0669f]{background-color:#f8f8f8}body.?%PAGE?%[data-v-4db0669f]{background-color:#f8f8f8}.copyright[data-v-4db0669f]{margin-top:%?50?%;text-align:center;line-height:%?60?%;color:#999}.header-section[data-v-4db0669f]{display:flex;padding:%?30?% 0 0;flex-direction:column;align-items:center}',""]),n["default"]=r}}]);