(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[2924],{

/***/ 40867:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96383);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("059fb80f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 79508:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ mine; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/index.vue?vue&type=template&id=b7ea1f6a&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"mine-container",style:({height: (_vm.windowHeight + "px")})},[_c('v-uni-view',{staticClass:"header-section"},[_c('v-uni-view',{staticClass:"flex padding justify-between"},[_c('v-uni-view',{staticClass:"flex align-center"},[(!_vm.avatar)?_c('v-uni-view',{staticClass:"cu-avatar xl round bg-white"},[_c('v-uni-view',{staticClass:"iconfont icon-people text-gray icon"})],1):_vm._e(),(_vm.avatar)?_c('v-uni-image',{staticClass:"cu-avatar xl round",attrs:{"src":_vm.avatar,"mode":"widthFix"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleToAvatar).apply(void 0, arguments)
}}}):_vm._e(),(!_vm.name)?_c('v-uni-view',{staticClass:"login-tip",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleToLogin).apply(void 0, arguments)
}}},[_vm._v("点击登录")]):_vm._e(),(_vm.name)?_c('v-uni-view',{staticClass:"user-info",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleToInfo).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"u_title"},[_vm._v("用户名："+_vm._s(_vm.name))])],1):_vm._e()],1),_c('v-uni-view',{staticClass:"flex align-center",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleToInfo).apply(void 0, arguments)
}}},[_c('v-uni-text',[_vm._v("个人信息")]),_c('v-uni-view',{staticClass:"iconfont icon-right"})],1)],1)],1),_c('v-uni-view',{staticClass:"content-section"},[_c('v-uni-view',{staticClass:"mine-actions grid col-4 text-center"},[_c('v-uni-view',{staticClass:"action-item",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleJiaoLiuQun).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"iconfont icon-friendfill text-pink icon"}),_c('v-uni-text',{staticClass:"text"},[_vm._v("交流群")])],1),_c('v-uni-view',{staticClass:"action-item",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleBuilding).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"iconfont icon-service text-blue icon"}),_c('v-uni-text',{staticClass:"text"},[_vm._v("在线客服")])],1),_c('v-uni-view',{staticClass:"action-item",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleBuilding).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"iconfont icon-community text-mauve icon"}),_c('v-uni-text',{staticClass:"text"},[_vm._v("反馈社区")])],1),_c('v-uni-view',{staticClass:"action-item",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleBuilding).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"iconfont icon-dianzan text-green icon"}),_c('v-uni-text',{staticClass:"text"},[_vm._v("点赞我们")])],1)],1),_c('v-uni-view',{staticClass:"menu-list"},[_c('v-uni-view',{staticClass:"list-cell list-cell-arrow",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleToEditInfo).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"menu-item-box"},[_c('v-uni-view',{staticClass:"iconfont icon-user menu-icon"}),_c('v-uni-view',[_vm._v("编辑资料")])],1)],1),_c('v-uni-view',{staticClass:"list-cell list-cell-arrow",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleHelp).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"menu-item-box"},[_c('v-uni-view',{staticClass:"iconfont icon-help menu-icon"}),_c('v-uni-view',[_vm._v("常见问题")])],1)],1),_c('v-uni-view',{staticClass:"list-cell list-cell-arrow",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleAbout).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"menu-item-box"},[_c('v-uni-view',{staticClass:"iconfont icon-aixin menu-icon"}),_c('v-uni-view',[_vm._v("关于我们")])],1)],1),_c('v-uni-view',{staticClass:"list-cell list-cell-arrow",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleToSetting).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"menu-item-box"},[_c('v-uni-view',{staticClass:"iconfont icon-setting menu-icon"}),_c('v-uni-view',[_vm._v("应用设置")])],1)],1)],1)],1)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./src/utils/storage.js
var storage = __webpack_require__(64761);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var minevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      name: this.$store.state.user.name,
      version: getApp().globalData.config.appInfo.version
    };
  },
  computed: {
    avatar: function avatar() {
      return this.$store.state.user.avatar;
    },
    windowHeight: function windowHeight() {
      return uni.getSystemInfoSync().windowHeight - 50;
    }
  },
  methods: {
    handleToInfo: function handleToInfo() {
      this.$tab.navigateTo('/pages/mine/info/index');
    },
    handleToEditInfo: function handleToEditInfo() {
      this.$tab.navigateTo('/pages/mine/info/edit');
    },
    handleToSetting: function handleToSetting() {
      this.$tab.navigateTo('/pages/mine/setting/index');
    },
    handleToLogin: function handleToLogin() {
      this.$tab.reLaunch('/pages/login');
    },
    handleToAvatar: function handleToAvatar() {
      this.$tab.navigateTo('/pages/mine/avatar/index');
    },
    handleLogout: function handleLogout() {
      var _this = this;
      this.$modal.confirm('确定注销并退出系统吗？').then(function () {
        _this.$store.dispatch('LogOut').then(function () {
          _this.$tab.reLaunch('/pages/index');
        });
      });
    },
    handleHelp: function handleHelp() {
      this.$tab.navigateTo('/pages/mine/help/index');
    },
    handleAbout: function handleAbout() {
      this.$tab.navigateTo('/pages/mine/about/index');
    },
    handleJiaoLiuQun: function handleJiaoLiuQun() {
      this.$modal.showToast('QQ群：①133713780、②146013835');
    },
    handleBuilding: function handleBuilding() {
      this.$modal.showToast('模块建设中~');
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/mine/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_minevue_type_script_lang_js_ = (minevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/index.vue?vue&type=style&index=0&id=b7ea1f6a&lang=scss&scoped=true&
var minevue_type_style_index_0_id_b7ea1f6a_lang_scss_scoped_true_ = __webpack_require__(40867);
;// CONCATENATED MODULE: ./src/pages/mine/index.vue?vue&type=style&index=0&id=b7ea1f6a&lang=scss&scoped=true&
 /* harmony default export */ var pages_minevue_type_style_index_0_id_b7ea1f6a_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/mine/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_minevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b7ea1f6a",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var mine = (component.exports);

/***/ }),

/***/ 96383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45522);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67643);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-b7ea1f6a]{background-color:#f5f6f7}body.?%PAGE?%[data-v-b7ea1f6a]{background-color:#f5f6f7}.mine-container[data-v-b7ea1f6a]{width:100%;height:100%}.mine-container .header-section[data-v-b7ea1f6a]{padding:15px 15px 45px 15px;background-color:#3c96f3;color:#fff}.mine-container .header-section .login-tip[data-v-b7ea1f6a]{font-size:18px;margin-left:10px}.mine-container .header-section .cu-avatar[data-v-b7ea1f6a]{border:2px solid #eaeaea}.mine-container .header-section .cu-avatar .icon[data-v-b7ea1f6a]{font-size:40px}.mine-container .header-section .user-info[data-v-b7ea1f6a]{margin-left:15px}.mine-container .header-section .user-info .u_title[data-v-b7ea1f6a]{font-size:18px;line-height:30px}.mine-container .content-section[data-v-b7ea1f6a]{position:relative;top:-50px}.mine-container .content-section .mine-actions[data-v-b7ea1f6a]{margin:15px 15px;padding:20px 0;border-radius:8px;background-color:#fff}.mine-container .content-section .mine-actions .action-item .icon[data-v-b7ea1f6a]{font-size:28px}.mine-container .content-section .mine-actions .action-item .text[data-v-b7ea1f6a]{display:block;font-size:13px;margin:8px 0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);