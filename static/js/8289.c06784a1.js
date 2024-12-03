(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[8289],{

/***/ 36731:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10535);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("db03fc86", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 63941:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4209);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("4c6daef2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 37802:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ uni_card; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-card/uni-card.vue?vue&type=template&id=7231d8b4&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"uni-card",class:{ 'uni-card--full': _vm.isFull, 'uni-card--shadow': _vm.isShadow,'uni-card--border':_vm.border},style:({'margin':_vm.isFull?0:_vm.margin,'padding':_vm.spacing,'box-shadow':_vm.isShadow?_vm.shadow:''})},[_vm._t("cover",[(_vm.cover)?_c('v-uni-view',{staticClass:"uni-card__cover"},[_c('v-uni-image',{staticClass:"uni-card__cover-image",attrs:{"mode":"widthFix","src":_vm.cover},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.onClick('cover')
}}})],1):_vm._e()]),_vm._t("title",[(_vm.title || _vm.extra)?_c('v-uni-view',{staticClass:"uni-card__header"},[_c('v-uni-view',{staticClass:"uni-card__header-box",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.onClick('title')
}}},[(_vm.thumbnail)?_c('v-uni-view',{staticClass:"uni-card__header-avatar"},[_c('v-uni-image',{staticClass:"uni-card__header-avatar-image",attrs:{"src":_vm.thumbnail,"mode":"aspectFit"}})],1):_vm._e(),_c('v-uni-view',{staticClass:"uni-card__header-content"},[_c('v-uni-text',{staticClass:"uni-card__header-content-title uni-ellipsis"},[_vm._v(_vm._s(_vm.title))]),(_vm.title&&_vm.subTitle)?_c('v-uni-text',{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[_vm._v(_vm._s(_vm.subTitle))]):_vm._e()],1)],1),_c('v-uni-view',{staticClass:"uni-card__header-extra",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.onClick('extra')
}}},[_c('v-uni-text',{staticClass:"uni-card__header-extra-text"},[_vm._v(_vm._s(_vm.extra))])],1)],1):_vm._e()]),_c('v-uni-view',{staticClass:"uni-card__content",style:({padding:_vm.padding}),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.onClick('content')
}}},[_vm._t("default")],2),_c('v-uni-view',{staticClass:"uni-card__actions",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.onClick('actions')
}}},[_vm._t("actions")],2)],2)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-card/uni-card.vue?vue&type=script&lang=js&
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

/**
 * Card 卡片
 * @description 卡片视图组件
 * @tutorial https://ext.dcloud.net.cn/plugin?id=22
 * @property {String} title 标题文字
 * @property {String} subTitle 副标题
 * @property {Number} padding 内容内边距
 * @property {Number} margin 卡片外边距
 * @property {Number} spacing 卡片内边距
 * @property {String} extra 标题额外信息
 * @property {String} cover 封面图（本地路径需要引入）
 * @property {String} thumbnail 标题左侧缩略图
 * @property {Boolean} is-full = [true | false] 卡片内容是否通栏，为 true 时将去除padding值
 * @property {Boolean} is-shadow = [true | false] 卡片内容是否开启阴影
 * @property {String} shadow 卡片阴影
 * @property {Boolean} border 卡片边框
 * @event {Function} click 点击 Card 触发事件
 */
/* harmony default export */ var uni_cardvue_type_script_lang_js_ = ({
  name: 'UniCard',
  emits: ['click'],
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      default: '10px'
    },
    margin: {
      type: String,
      default: '15px'
    },
    spacing: {
      type: String,
      default: '0 10px'
    },
    extra: {
      type: String,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    isFull: {
      // 内容区域是否通栏
      type: Boolean,
      default: false
    },
    isShadow: {
      // 是否开启阴影
      type: Boolean,
      default: true
    },
    shadow: {
      type: String,
      default: '0px 0px 3px 1px rgba(0, 0, 0, 0.08)'
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick: function onClick(type) {
      this.$emit('click', type);
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-card/uni-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_card_uni_cardvue_type_script_lang_js_ = (uni_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-card/uni-card.vue?vue&type=style&index=0&id=7231d8b4&lang=scss&scoped=true&
var uni_cardvue_type_style_index_0_id_7231d8b4_lang_scss_scoped_true_ = __webpack_require__(36731);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-card/uni-card.vue?vue&type=style&index=0&id=7231d8b4&lang=scss&scoped=true&
 /* harmony default export */ var uni_card_uni_cardvue_type_style_index_0_id_7231d8b4_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-card/uni-card.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  uni_card_uni_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7231d8b4",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var uni_card = (component.exports);

/***/ }),

/***/ 38289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Card; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Card/index.vue?vue&type=template&id=32a9acf7&scoped=true&
var components = {'uniCard': (__webpack_require__(37802)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"container",on:{"touchstart":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleTouchStart).apply(void 0, arguments)
},"touchend":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleTouchEnd).apply(void 0, arguments)
}}},[(_vm.isPhoneCard)?_c('v-uni-view',[_vm._t("default",null,{"content":_vm.content,"index":_vm.index})],2):_c('uni-card',{staticClass:"card",class:_vm.active && _vm.needActive ? 'isActive' : '',attrs:{"is-shadow":false,"is-full":true}},[_vm._t("default",null,{"content":_vm.content,"index":_vm.index}),_vm._t("content",null,{"content":_vm.content,"index":_vm.index})],2)],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Card/index.vue?vue&type=template&id=32a9acf7&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Card/index.vue?vue&type=script&lang=js&

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

/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: 'Card',
  data: function data() {
    return {
      active: false
    };
  },
  props: {
    content: {
      type: Object
    },
    index: Number,
    isPhoneCard: {
      type: Boolean,
      default: false
    },
    needActive: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleTouchStart: function handleTouchStart(event) {
      this.active = true;
      this.$emit('onClick');
    },
    handleTouchEnd: function handleTouchEnd(event) {
      this.active = false;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Card/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Card/index.vue?vue&type=style&index=0&id=32a9acf7&scoped=true&lang=scss&
var Cardvue_type_style_index_0_id_32a9acf7_scoped_true_lang_scss_ = __webpack_require__(63941);
;// CONCATENATED MODULE: ./src/components/Card/index.vue?vue&type=style&index=0&id=32a9acf7&scoped=true&lang=scss&
 /* harmony default export */ var components_Cardvue_type_style_index_0_id_32a9acf7_scoped_true_lang_scss_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/Card/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "32a9acf7",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var Card = (component.exports);

/***/ }),

/***/ 10535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45522);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67643);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-card[data-v-7231d8b4]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-7231d8b4]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-7231d8b4]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-7231d8b4]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-7231d8b4]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-7231d8b4]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-7231d8b4]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-7231d8b4]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-7231d8b4]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-7231d8b4]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-7231d8b4]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-7231d8b4]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-7231d8b4]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-7231d8b4]{font-size:12px}.uni-card--border[data-v-7231d8b4]{border:1px solid #ebeef5}.uni-card--shadow[data-v-7231d8b4]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,65%,.2)}.uni-card--full[data-v-7231d8b4]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-7231d8b4]:after{border-radius:0}.uni-ellipsis[data-v-7231d8b4]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4209:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.card[data-v-32a9acf7]{color:#000;border-radius:%?10?%}.card.isActive[data-v-32a9acf7]{box-shadow:0 0 %?10?% 0 #9b9999}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);