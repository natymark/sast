(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[7763],{

/***/ 21338:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35134);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("971beda6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 63533:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ setting; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/setting/index.vue?vue&type=template&id=d92d25de&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"setting-container",style:({height: (_vm.windowHeight + "px")})},[_c('v-uni-view',{staticClass:"menu-list"},[_c('v-uni-view',{staticClass:"list-cell list-cell-arrow",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleToPwd).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"menu-item-box"},[_c('v-uni-view',{staticClass:"iconfont icon-password menu-icon"}),_c('v-uni-view',[_vm._v("修改密码")])],1)],1),_c('v-uni-view',{staticClass:"list-cell list-cell-arrow",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleToUpgrade).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"menu-item-box"},[_c('v-uni-view',{staticClass:"iconfont icon-refresh menu-icon"}),_c('v-uni-view',[_vm._v("检查更新")])],1)],1),_c('v-uni-view',{staticClass:"list-cell list-cell-arrow",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleCleanTmp).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"menu-item-box"},[_c('v-uni-view',{staticClass:"iconfont icon-clean menu-icon"}),_c('v-uni-view',[_vm._v("清理缓存")])],1)],1)],1),_c('v-uni-view',{staticClass:"cu-list menu"},[_c('v-uni-view',{staticClass:"cu-item item-box"},[_c('v-uni-view',{staticClass:"content text-center",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleLogout).apply(void 0, arguments)
}}},[_c('v-uni-text',{staticClass:"text-black"},[_vm._v("退出登录")])],1)],1)],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/setting/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      windowHeight: uni.getSystemInfoSync().windowHeight
    };
  },
  methods: {
    handleToPwd: function handleToPwd() {
      this.$tab.navigateTo('/pages/mine/pwd/index');
    },
    handleToUpgrade: function handleToUpgrade() {
      this.$modal.showToast('模块建设中~');
    },
    handleCleanTmp: function handleCleanTmp() {
      this.$modal.showToast('模块建设中~');
    },
    handleLogout: function handleLogout() {
      var _this = this;
      this.$modal.confirm('确定注销并退出系统吗？').then(function () {
        _this.$store.dispatch('LogOut').then(function () {
          _this.$tab.reLaunch('/pages/login');
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/mine/setting/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var mine_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/setting/index.vue?vue&type=style&index=0&id=d92d25de&lang=scss&scoped=true&
var settingvue_type_style_index_0_id_d92d25de_lang_scss_scoped_true_ = __webpack_require__(21338);
;// CONCATENATED MODULE: ./src/pages/mine/setting/index.vue?vue&type=style&index=0&id=d92d25de&lang=scss&scoped=true&
 /* harmony default export */ var mine_settingvue_type_style_index_0_id_d92d25de_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/mine/setting/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  mine_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d92d25de",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var setting = (component.exports);

/***/ }),

/***/ 35134:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-d92d25de]{background-color:#f8f8f8}.item-box[data-v-d92d25de]{background-color:#fff;margin:%?30?%;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:%?10?%;border-radius:%?8?%;color:#303133;font-size:%?32?%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);