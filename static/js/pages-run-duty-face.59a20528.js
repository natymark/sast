(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[9556],{

/***/ 14249:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75893);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("35ca1149", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 54694:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ face; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/face.vue?vue&type=template&id=2c42de8c&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"face"},[_c('v-uni-view',{staticStyle:{"width":"90%"}},[_c('h3',[_vm._v("即将开始人脸打卡")]),_c('p',{staticStyle:{"margin-top":"23rpx"}},[_vm._v("请确保为***本人操作")]),_c('v-uni-image',{staticClass:"faceImg",attrs:{"src":(_vm.imgUrl + "/duty/face.png")}}),_c('v-uni-view',{staticClass:"tips"},[_c('v-uni-view',[_c('v-uni-view',{staticClass:"tipsImg"},[_c('v-uni-image',{attrs:{"src":(_vm.imgUrl + "/duty/covering.png")}})],1),_c('p',[_vm._v("避免遮挡")])],1),_c('v-uni-view',[_c('v-uni-view',{staticClass:"tipsImg"},[_c('v-uni-image',{attrs:{"src":(_vm.imgUrl + "/duty/light.png")}})],1),_c('p',[_vm._v("光线充足")])],1),_c('v-uni-view',[_c('v-uni-view',{staticClass:"tipsImg"},[_c('v-uni-image',{attrs:{"src":(_vm.imgUrl + "/duty/phone.png")}})],1),_c('p',[_vm._v("正对手机")])],1)],1)],1),_c('v-uni-button',{on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.punchTheClock).apply(void 0, arguments)
}}},[_vm._v("确认打卡")])],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./src/pages/run/duty/loadJs.js
var loadJs = __webpack_require__(76549);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/face.vue?vue&type=script&lang=js&
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
//
//
//


/* harmony default export */ var facevue_type_script_lang_js_ = ({
  methods: {
    punchTheClock: function punchTheClock() {
      console.log('确认打卡');
      this.$router.push({
        path: '/pages/run/duty/success'
      });
    }
  },
  created: function created() {
    (0,loadJs/* default */.A)((__webpack_require__(27358).libUrl) + '/clmtrackr.js');
  },
  mounted: function mounted() {
    this.imgUrl = (__webpack_require__(27358).imgUrl);
  }
});
;// CONCATENATED MODULE: ./src/pages/run/duty/face.vue?vue&type=script&lang=js&
 /* harmony default export */ var duty_facevue_type_script_lang_js_ = (facevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/face.vue?vue&type=style&index=0&id=2c42de8c&lang=scss&scoped=true&
var facevue_type_style_index_0_id_2c42de8c_lang_scss_scoped_true_ = __webpack_require__(14249);
;// CONCATENATED MODULE: ./src/pages/run/duty/face.vue?vue&type=style&index=0&id=2c42de8c&lang=scss&scoped=true&
 /* harmony default export */ var duty_facevue_type_style_index_0_id_2c42de8c_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/run/duty/face.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  duty_facevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2c42de8c",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var face = (component.exports);

/***/ }),

/***/ 75893:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.face[data-v-2c42de8c]{text-align:center;display:flex;flex-direction:column;justify-content:space-around;align-items:center;height:100%;position:relative}.face h3[data-v-2c42de8c]{font-size:%?36?%;font-weight:600;color:#333}.face p[data-v-2c42de8c]{font-size:%?28?%;color:#999;margin:%?20?% 0}.face uni-button[data-v-2c42de8c]{height:%?80?%;width:90%;background:#32c3ba;border-radius:%?4?% %?4?% %?4?% %?4?%;border:%?0?% solid #00a096;color:#fff;position:absolute;bottom:%?81?%}.faceImg[data-v-2c42de8c]{width:%?300?%;height:%?300?%;margin-top:%?52?%}.tips[data-v-2c42de8c]{display:flex;justify-content:space-around;margin-top:%?76?%}.tipsImg[data-v-2c42de8c]{width:%?105?%;height:%?105?%;border-radius:50%}.tipsImg uni-image[data-v-2c42de8c]{width:100%;height:100%}.tipsImg p[data-v-2c42de8c]{margin-top:%?28?%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 76549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26099);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);

function loadJs(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.body.appendChild(script);
    script.onload = function () {
      resolve();
    };
    script.onerror = function () {
      reject();
    };
  }).catch(function (e) {});
}
/* harmony default export */ __webpack_exports__.A = (loadJs);

/***/ })

}]);