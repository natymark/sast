(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[7763],{21338:function(n,i,t){var e=t(35134);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals);var a=t(69333).A;a("971beda6",e,!0,{sourceMap:!1,shadowMode:!1})},63533:function(n,i,t){"use strict";var e;t.r(i),t.d(i,{default:function(){return d}});var a,o=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("v-uni-view",{staticClass:"setting-container",style:{height:n.windowHeight+"px"}},[t("v-uni-view",{staticClass:"menu-list"},[t("v-uni-view",{staticClass:"list-cell list-cell-arrow",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.handleToPwd.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"menu-item-box"},[t("v-uni-view",{staticClass:"iconfont icon-password menu-icon"}),t("v-uni-view",[n._v("修改密码")])],1)],1),t("v-uni-view",{staticClass:"list-cell list-cell-arrow",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.handleToUpgrade.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"menu-item-box"},[t("v-uni-view",{staticClass:"iconfont icon-refresh menu-icon"}),t("v-uni-view",[n._v("检查更新")])],1)],1),t("v-uni-view",{staticClass:"list-cell list-cell-arrow",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.handleCleanTmp.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"menu-item-box"},[t("v-uni-view",{staticClass:"iconfont icon-clean menu-icon"}),t("v-uni-view",[n._v("清理缓存")])],1)],1)],1),t("v-uni-view",{staticClass:"cu-list menu"},[t("v-uni-view",{staticClass:"cu-item item-box"},[t("v-uni-view",{staticClass:"content text-center",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.handleLogout.apply(void 0,arguments)}}},[t("v-uni-text",{staticClass:"text-black"},[n._v("退出登录")])],1)],1)],1)],1)},s=[],l={data:function(){return{windowHeight:uni.getSystemInfoSync().windowHeight}},methods:{handleToPwd:function(){this.$tab.navigateTo("/pages/mine/pwd/index")},handleToUpgrade:function(){this.$modal.showToast("模块建设中~")},handleCleanTmp:function(){this.$modal.showToast("模块建设中~")},handleLogout:function(){var n=this;this.$modal.confirm("确定注销并退出系统吗？").then((function(){n.$store.dispatch("LogOut").then((function(){n.$tab.reLaunch("/pages/login")}))}))}}},c=l,r=(t(21338),t(18535)),u=(0,r.A)(c,o,s,!1,null,"d92d25de",null,!1,e,a),d=u.exports},35134:function(n,i,t){"use strict";t.r(i);var e=t(45522),a=t.n(e),o=t(67643),s=t.n(o),l=s()(a());l.push([n.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-d92d25de]{background-color:#f8f8f8}.item-box[data-v-d92d25de]{background-color:#fff;margin:%?30?%;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:%?10?%;border-radius:%?8?%;color:#303133;font-size:%?32?%}',""]),i["default"]=l}}]);