(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[6903],{

/***/ 45281:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40509);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("67da1f56", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 80015:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ chockSetting; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/index.vue?vue&type=template&id=9816148a&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"content"},[_c('v-uni-text',{staticClass:"new",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.gotoNew).apply(void 0, arguments)
}}},[_vm._v("新增地址")]),_c('v-uni-scroll-view',{staticClass:"scroll-view",attrs:{"scroll-y":true}},_vm._l((_vm.addressList),function(item,index){return _c('v-uni-view',{key:index,staticClass:"list-item"},[_c('v-uni-view',{staticClass:"item-row"},[_c('v-uni-text',{staticClass:"label"},[_vm._v("地点名称:")]),_c('v-uni-text',{staticClass:"value"},[_vm._v(_vm._s(item.name))])],1),_c('v-uni-view',{staticClass:"item-row"},[_c('v-uni-text',{staticClass:"label"},[_vm._v("经度信息:")]),_c('v-uni-text',{staticClass:"value"},[_vm._v(_vm._s(item.longitude))])],1),_c('v-uni-view',{staticClass:"item-row"},[_c('v-uni-text',{staticClass:"label"},[_vm._v("纬度信息:")]),_c('v-uni-text',{staticClass:"value"},[_vm._v(_vm._s(item.latitude))])],1),_c('v-uni-view',{staticClass:"item-row"},[_c('v-uni-text',{staticClass:"label"},[_vm._v("误差范围:")]),_c('v-uni-text',{staticClass:"value"},[_vm._v(_vm._s(item.allowedDistance)+" m")])],1),_c('v-uni-view',{staticClass:"item-row"},[_c('v-uni-text',{staticClass:"label"},[_vm._v("描述:")]),_c('v-uni-text',{staticClass:"value"},[_vm._v(_vm._s(item.description))])],1)],1)}),1)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./src/api/run/address/index.js
var address = __webpack_require__(77872);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/index.vue?vue&type=script&lang=js&
/* provided dependency */ var console = __webpack_require__(43859)["A"];


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


/* harmony default export */ var chockSettingvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      addressList: []
    };
  },
  created: function created() {
    this.fetchAddressList();
  },
  methods: {
    fetchAddressList: function fetchAddressList() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var response;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,address/* addressList */.Z)({
                pageNum: 1,
                pageSize: 999
              });
            case 3:
              response = _context.sent;
              _this.addressList = response.rows; // 假设返回的数据结构是 { data: [ ... ] }
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching address list:', _context.t0);
              uni.showToast({
                title: '获取位置信息失败，请重试',
                icon: 'none',
                duration: 2000
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    gotoNew: function gotoNew() {
      uni.navigateTo({
        url: '/pages/run/chockSetting/components/index'
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var run_chockSettingvue_type_script_lang_js_ = (chockSettingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/index.vue?vue&type=style&index=0&id=9816148a&lang=scss&scoped=true&
var chockSettingvue_type_style_index_0_id_9816148a_lang_scss_scoped_true_ = __webpack_require__(45281);
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/index.vue?vue&type=style&index=0&id=9816148a&lang=scss&scoped=true&
 /* harmony default export */ var run_chockSettingvue_type_style_index_0_id_9816148a_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  run_chockSettingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9816148a",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var chockSetting = (component.exports);

/***/ }),

/***/ 40509:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-9816148a]{display:flex;flex-direction:column;padding:%?30?%}.list-header[data-v-9816148a]{margin-bottom:%?30?%}.header-title[data-v-9816148a]{font-size:%?24?%;font-weight:700;color:#333}.scroll-view[data-v-9816148a]{height:calc(100vh - %?200?%)\r\n  /* 调整滚动区域的高度 */}.list-item[data-v-9816148a]{background-color:#fff;padding:%?30?%;margin-bottom:%?20?%;border-radius:%?10?%;box-shadow:0 %?4?% %?8?% rgba(0,0,0,.1)}.item-row[data-v-9816148a]{display:flex;align-items:center;margin-bottom:%?20?%}.label[data-v-9816148a]{font-weight:700;color:#03654e;margin-right:%?20?%}.value[data-v-9816148a]{color:#03654e}.new[data-v-9816148a]{position:fixed;top:%?25?%;right:%?25?%;font-size:%?30?%;font-weight:700;z-index:998;color:#fff}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 77872:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: function() { return /* binding */ addressAdd; },
/* harmony export */   Z: function() { return /* binding */ addressList; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84300);
/* provided dependency */ var console = __webpack_require__(43859)["A"];


var addressAdd = function addressAdd(params) {
  var token = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .gf)();
  console.log(token, '12345'); // 确保这里打印出正确的 Token
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/locations",
    method: 'post',
    data: params
  });
};
var addressList = function addressList(params) {
  console.log((0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .gf)(), '123456'); // 确保这里打印出正确的 Token
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/locations/list",
    method: 'get',
    params: params
  });
};

/***/ })

}]);