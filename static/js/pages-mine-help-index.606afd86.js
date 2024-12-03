(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[914],{

/***/ 40552:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96724);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("21a9bc3f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 34952:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ help; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/help/index.vue?vue&type=template&id=10fc4d37&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"help-container"},_vm._l((_vm.list),function(item,findex){return _c('v-uni-view',{key:findex,staticClass:"list-title",attrs:{"title":item.title}},[_c('v-uni-view',{staticClass:"text-title"},[_c('v-uni-view',{class:item.icon}),_vm._v(_vm._s(item.title))],1),_c('v-uni-view',{staticClass:"childList"},_vm._l((item.childList),function(child,zindex){return _c('v-uni-view',{key:zindex,staticClass:"question",attrs:{"hover-class":"hover"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.handleText(child)
}}},[_c('v-uni-view',{staticClass:"text-item"},[_vm._v(_vm._s(child.title))]),(zindex !== item.childList.length - 1)?_c('v-uni-view',{staticClass:"line"}):_vm._e()],1)}),1)],1)}),1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/help/index.vue?vue&type=script&lang=js&

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

/* harmony default export */ var helpvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      list: [{
        icon: 'iconfont icon-github',
        title: '若依问题',
        childList: [{
          title: '若依开源吗？',
          content: '开源'
        }, {
          title: '若依可以商用吗？',
          content: '可以'
        }, {
          title: '若依官网地址多少？',
          content: 'http://ruoyi.vip'
        }, {
          title: '若依文档地址多少？',
          content: 'http://doc.ruoyi.vip'
        }]
      }, {
        icon: 'iconfont icon-help',
        title: '其他问题',
        childList: [{
          title: '如何退出登录？',
          content: '请点击[我的] - [应用设置] - [退出登录]即可退出登录'
        }, {
          title: '如何修改用户头像？',
          content: '请点击[我的] - [选择头像] - [点击提交]即可更换用户头像'
        }, {
          title: '如何修改登录密码？',
          content: '请点击[我的] - [应用设置] - [修改密码]即可修改登录密码'
        }]
      }]
    };
  },
  methods: {
    handleText: function handleText(item) {
      this.$tab.navigateTo("/pages/common/textview/index?title=".concat(item.title, "&content=").concat(item.content));
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/mine/help/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var mine_helpvue_type_script_lang_js_ = (helpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/help/index.vue?vue&type=style&index=0&id=10fc4d37&lang=scss&scoped=true&
var helpvue_type_style_index_0_id_10fc4d37_lang_scss_scoped_true_ = __webpack_require__(40552);
;// CONCATENATED MODULE: ./src/pages/mine/help/index.vue?vue&type=style&index=0&id=10fc4d37&lang=scss&scoped=true&
 /* harmony default export */ var mine_helpvue_type_style_index_0_id_10fc4d37_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/mine/help/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  mine_helpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "10fc4d37",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var help = (component.exports);

/***/ }),

/***/ 96724:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-10fc4d37]{background-color:#f8f8f8}body.?%PAGE?%[data-v-10fc4d37]{background-color:#f8f8f8}.help-container[data-v-10fc4d37]{margin-bottom:%?100?%;padding:%?30?%}.list-title[data-v-10fc4d37]{margin-bottom:%?30?%}.childList[data-v-10fc4d37]{background:#fff;box-shadow:0 0 %?10?% hsla(0,0%,76%,.2);border-radius:%?16?%;margin-top:%?10?%}.line[data-v-10fc4d37]{width:100%;height:%?1?%;background-color:#f5f5f5}.text-title[data-v-10fc4d37]{color:#303133;font-size:%?32?%;font-weight:700;margin-left:%?10?%}.text-title .iconfont[data-v-10fc4d37]{font-size:16px;margin-right:%?10?%}.text-item[data-v-10fc4d37]{font-size:%?28?%;padding:%?24?%}.question[data-v-10fc4d37]{color:#606266;font-size:%?28?%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);