"use strict";
(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[1496],{

/***/ 11950:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ webview; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/common/webview/index.vue?vue&type=template&id=4bc353b5&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.params.url)?_c('v-uni-view',[_c('v-uni-web-view',{attrs:{"webview-styles":_vm.webviewStyles,"src":("" + (_vm.params.url))}})],1):_vm._e()}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/common/webview/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var webviewvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      params: {},
      webviewStyles: {
        progress: {
          color: "#FF3333"
        }
      }
    };
  },
  props: {
    src: {
      type: [String],
      default: null
    }
  },
  onLoad: function onLoad(event) {
    this.params = event;
    if (event.title) {
      uni.setNavigationBarTitle({
        title: event.title
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/common/webview/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_webviewvue_type_script_lang_js_ = (webviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/common/webview/index.vue

var renderjs
;



/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  common_webviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var webview = (component.exports);

/***/ })

}]);