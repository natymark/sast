(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[9113],{

/***/ 83921:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88629);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("33c37b56", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 11980:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MapSelection; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/MapSelection.vue?vue&type=template&id=08b47074&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"map"},[_c('v-uni-web-view',{ref:"webView",attrs:{"src":_vm.locpickerUrl},on:{"load":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onWebViewLoad).apply(void 0, arguments)
}}})],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
;// CONCATENATED MODULE: ./src/utils/utils.js
function setlocation(location) {
  uni.setStorageSync('selectedLocation', location);
}
function getlocation() {
  return uni.getStorageSync('selectedLocation');
}
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/MapSelection.vue?vue&type=script&lang=js&
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


/* harmony default export */ var MapSelectionvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      locpickerUrl: ''
    };
  },
  mounted: function mounted() {
    var _this = this;
    return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
      var position, _position$coords, latitude, longitude;
      return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getUserPosition();
          case 2:
            position = _context.sent;
            if (position) {
              _position$coords = position.coords, latitude = _position$coords.latitude, longitude = _position$coords.longitude;
              _this.locpickerUrl = "https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=X5XBZ-NNB6P-RJGDK-VBAND-TLNWT-HHFYL&referer=https://yourdomain.com\xA2er=".concat(latitude, ",").concat(longitude);
            } else {
              _this.locpickerUrl = 'https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=X5XBZ-NNB6P-RJGDK-VBAND-TLNWT-HHFYL&referer=https://yourdomain.com';
            }
            window.addEventListener('message', function (event) {
              // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
              var loc = event.data;
              if (loc && loc.module === 'locationPicker') {
                // 防止其他应用也会向该页面 post 信息，需判断 module 是否为 'locationPicker'
                var location = {
                  poiaddress: loc.poiaddress,
                  poiname: loc.poiname,
                  latlng: loc.latlng
                };
                // 设置存储地址信息
                setlocation(location);
                uni.navigateBack({
                  success: function success() {
                    uni.$emit('address-selected', location);
                  }
                });
              }
            }, false);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    getUserPosition: function getUserPosition() {
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (position) {
                    resolve(position);
                  }, function (error) {
                    console.error('Error getting user position:', error);
                    resolve(null);
                  });
                } else {
                  console.error('Geolocation is not supported by this browser.');
                  resolve(null);
                }
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onWebViewLoad: function onWebViewLoad() {
      this.webViewReady = true;
      this.setupWebView();
    },
    setupWebView: function setupWebView() {
      var _this2 = this;
      if (this.webViewReady) {
        setTimeout(function () {
          // 确保 DOM 元素存在再进行操作
          var webView = _this2.$refs.webView.$el.querySelector('iframe');
          if (webView) {
            webView.style.height = '100vh';
          }
        }, 1000); // 延迟 1 秒执行
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/MapSelection.vue?vue&type=script&lang=js&
 /* harmony default export */ var chockSetting_MapSelectionvue_type_script_lang_js_ = (MapSelectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/MapSelection.vue?vue&type=style&index=0&id=08b47074&lang=scss&scoped=true&
var MapSelectionvue_type_style_index_0_id_08b47074_lang_scss_scoped_true_ = __webpack_require__(83921);
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/MapSelection.vue?vue&type=style&index=0&id=08b47074&lang=scss&scoped=true&
 /* harmony default export */ var chockSetting_MapSelectionvue_type_style_index_0_id_08b47074_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/MapSelection.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  chockSetting_MapSelectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "08b47074",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var MapSelection = (component.exports);

/***/ }),

/***/ 88629:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.map[data-v-08b47074]{width:100%;height:100vh}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);