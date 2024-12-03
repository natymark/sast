(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[6135],{

/***/ 50119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16835);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("95c59070", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 15490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27926);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("436fcb1c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 75382:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1802);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("6a465652", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 18642:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86070);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("14d04b7c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 76086:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ uni_nav_bar; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue?vue&type=template&id=79fd0d14&scoped=true&
var components = {'uniIcons': (__webpack_require__(84256)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"uni-navbar",class:{'uni-dark':_vm.dark, 'uni-nvue-fixed': _vm.fixed}},[_c('v-uni-view',{staticClass:"uni-navbar__content",class:{ 'uni-navbar--fixed': _vm.fixed, 'uni-navbar--shadow': _vm.shadow, 'uni-navbar--border': _vm.border },style:({ 'background-color': _vm.themeBgColor, 'border-bottom-color':_vm.themeColor })},[(_vm.statusBar)?_c('status-bar'):_vm._e(),_c('v-uni-view',{staticClass:"uni-navbar__header",style:({ color: _vm.themeColor,backgroundColor: _vm.themeBgColor ,height:_vm.navbarHeight})},[_c('v-uni-view',{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left",style:({width:_vm.leftIconWidth}),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClickLeft).apply(void 0, arguments)
}}},[_vm._t("left",[(_vm.leftIcon.length > 0)?_c('v-uni-view',{staticClass:"uni-navbar__content_view"},[_c('uni-icons',{attrs:{"color":_vm.themeColor,"type":_vm.leftIcon,"size":"20"}})],1):_vm._e(),(_vm.leftText.length)?_c('v-uni-view',{staticClass:"uni-navbar-btn-text",class:{ 'uni-navbar-btn-icon-left': !_vm.leftIcon.length > 0 }},[_c('v-uni-text',{style:({ color: _vm.themeColor, fontSize: '12px' })},[_vm._v(_vm._s(_vm.leftText))])],1):_vm._e()])],2),_c('v-uni-view',{staticClass:"uni-navbar__header-container ",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClickTitle).apply(void 0, arguments)
}}},[_vm._t("default",[(_vm.title.length>0)?_c('v-uni-view',{staticClass:"uni-navbar__header-container-inner"},[_c('v-uni-text',{staticClass:"uni-nav-bar-text uni-ellipsis-1",style:({color: _vm.themeColor })},[_vm._v(_vm._s(_vm.title))])],1):_vm._e()])],2),_c('v-uni-view',{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-right",style:({width:_vm.rightIconWidth}),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClickRight).apply(void 0, arguments)
}}},[_vm._t("right",[(_vm.rightIcon.length)?_c('v-uni-view',[_c('uni-icons',{attrs:{"color":_vm.themeColor,"type":_vm.rightIcon,"size":"22"}})],1):_vm._e(),(_vm.rightText.length && !_vm.rightIcon.length)?_c('v-uni-view',{staticClass:"uni-navbar-btn-text"},[_c('v-uni-text',{staticClass:"uni-nav-bar-right-text",style:({ color: _vm.themeColor})},[_vm._v(_vm._s(_vm.rightText))])],1):_vm._e()])],2)],1)],1),(_vm.fixed)?_c('v-uni-view',{staticClass:"uni-navbar__placeholder"},[(_vm.statusBar)?_c('status-bar'):_vm._e(),_c('v-uni-view',{staticClass:"uni-navbar__placeholder-view",style:({ height:_vm.navbarHeight})})],1):_vm._e()],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue?vue&type=template&id=79fd0d14&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-status-bar.vue?vue&type=template&id=4debd028&scoped=true&
var uni_status_barvue_type_template_id_4debd028_scoped_true_components;
var uni_status_barvue_type_template_id_4debd028_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"uni-status-bar",style:({ height: _vm.statusBarHeight })},[_vm._t("default")],2)}
var uni_status_barvue_type_template_id_4debd028_scoped_true_recyclableRender = false
var uni_status_barvue_type_template_id_4debd028_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-status-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var uni_status_barvue_type_script_lang_js_ = ({
  name: 'UniStatusBar',
  data: function data() {
    return {
      statusBarHeight: uni.getSystemInfoSync().statusBarHeight + 'px'
    };
  }
});
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-status-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_nav_bar_uni_status_barvue_type_script_lang_js_ = (uni_status_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-status-bar.vue?vue&type=style&index=0&id=4debd028&lang=scss&scoped=true&
var uni_status_barvue_type_style_index_0_id_4debd028_lang_scss_scoped_true_ = __webpack_require__(15490);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-status-bar.vue?vue&type=style&index=0&id=4debd028&lang=scss&scoped=true&
 /* harmony default export */ var uni_nav_bar_uni_status_barvue_type_style_index_0_id_4debd028_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-status-bar.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  uni_nav_bar_uni_status_barvue_type_script_lang_js_,
  uni_status_barvue_type_template_id_4debd028_scoped_true_render,
  uni_status_barvue_type_template_id_4debd028_scoped_true_staticRenderFns,
  false,
  null,
  "4debd028",
  null,
  false,
  uni_status_barvue_type_template_id_4debd028_scoped_true_components,
  renderjs
)

/* harmony default export */ var uni_status_bar = (component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js&

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


var getVal = function getVal(val) {
  return typeof val === 'number' ? val + 'px' : val;
};

/**
 * 
 * 
 * NavBar 自定义导航栏
 * @description 导航栏组件，主要用于头部导航
 * @tutorial https://ext.dcloud.net.cn/plugin?id=52
 * @property {Boolean} dark 开启黑暗模式
 * @property {String} title 标题文字
 * @property {String} leftText 左侧按钮文本
 * @property {String} rightText 右侧按钮文本
 * @property {String} leftIcon 左侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
 * @property {String} rightIcon 右侧按钮图标（图标类型参考 [Icon 图标](http://ext.dcloud.net.cn/plugin?id=28) type 属性）
 * @property {String} color 图标和文字颜色
 * @property {String} backgroundColor 导航栏背景颜色
 * @property {Boolean} fixed = [true|false] 是否固定顶部
 * @property {Boolean} statusBar = [true|false] 是否包含状态栏
 * @property {Boolean} shadow = [true|false] 导航栏下是否有阴影
 * @property {Boolean} stat 是否开启统计标题上报
 * @event {Function} clickLeft 左侧按钮点击时触发
 * @event {Function} clickRight 右侧按钮点击时触发
 * @event {Function} clickTitle 中间标题点击时触发
 */
/* harmony default export */ var uni_nav_barvue_type_script_lang_js_ = ({
  name: "UniNavBar",
  components: {
    statusBar: uni_status_bar
  },
  emits: ['clickLeft', 'clickRight', 'clickTitle'],
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    fixed: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    statusBar: {
      type: [Boolean, String],
      default: false
    },
    shadow: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: [Boolean, String],
      default: true
    },
    height: {
      type: [Number, String],
      default: 44
    },
    leftWidth: {
      type: [Number, String],
      default: 60
    },
    rightWidth: {
      type: [Number, String],
      default: 60
    },
    stat: {
      type: [Boolean, String],
      default: ''
    }
  },
  computed: {
    themeBgColor: function themeBgColor() {
      if (this.dark) {
        // 默认值
        if (this.backgroundColor) {
          return this.backgroundColor;
        } else {
          return this.dark ? '#333' : '#FFF';
        }
      }
      return this.backgroundColor || '#FFF';
    },
    themeColor: function themeColor() {
      if (this.dark) {
        // 默认值
        if (this.color) {
          return this.color;
        } else {
          return this.dark ? '#fff' : '#333';
        }
      }
      return this.color || '#333';
    },
    navbarHeight: function navbarHeight() {
      return getVal(this.height);
    },
    leftIconWidth: function leftIconWidth() {
      return getVal(this.leftWidth);
    },
    rightIconWidth: function rightIconWidth() {
      return getVal(this.rightWidth);
    }
  },
  mounted: function mounted() {
    if (uni.report && this.stat && this.title !== '') {
      uni.report('title', this.title);
    }
  },
  methods: {
    onClickLeft: function onClickLeft() {
      this.$emit("clickLeft");
    },
    onClickRight: function onClickRight() {
      this.$emit("clickRight");
    },
    onClickTitle: function onClickTitle() {
      this.$emit("clickTitle");
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_nav_bar_uni_nav_barvue_type_script_lang_js_ = (uni_nav_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=79fd0d14&lang=scss&scoped=true&
var uni_nav_barvue_type_style_index_0_id_79fd0d14_lang_scss_scoped_true_ = __webpack_require__(50119);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=79fd0d14&lang=scss&scoped=true&
 /* harmony default export */ var uni_nav_bar_uni_nav_barvue_type_style_index_0_id_79fd0d14_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue

var uni_nav_bar_renderjs
;

;


/* normalize component */

var uni_nav_bar_component = (0,componentNormalizer/* default */.A)(
  uni_nav_bar_uni_nav_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "79fd0d14",
  null,
  false,
  components,
  uni_nav_bar_renderjs
)

/* harmony default export */ var uni_nav_bar = (uni_nav_bar_component.exports);

/***/ }),

/***/ 7553:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ NavBar; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/NavBar/index.vue?vue&type=template&id=1367584c&scoped=true&
var components = {'uniNavBar': (__webpack_require__(76086)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"container",style:({paddingTop:_vm.safeAreaInsets.top + 'px'})},[_c('uni-nav-bar',{staticClass:"navbar",attrs:{"border":false,"left-icon":"left","leftText":_vm.leftText,"title":_vm.title}},[(_vm.hasRightSlot)?_c('template',{attrs:{"slot":"right"},slot:"right"},[_vm._t("right")],2):_vm._e()],2)],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/NavBar/index.vue?vue&type=template&id=1367584c&scoped=true&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/NavBar/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var NavBarvue_type_script_lang_js_ = ({
  name: 'NavBar',
  data: function data() {
    return {
      safeAreaInsets: ''
    };
  },
  props: {
    title: String,
    leftText: String,
    hasRightSlot: Boolean
  },
  onLoad: function onLoad(options) {
    var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),
      safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;
    this.safeAreaInsets = safeAreaInsets;
  }
});
;// CONCATENATED MODULE: ./src/components/NavBar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavBarvue_type_script_lang_js_ = (NavBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/NavBar/index.vue?vue&type=style&index=0&id=1367584c&scoped=true&lang=scss&
var NavBarvue_type_style_index_0_id_1367584c_scoped_true_lang_scss_ = __webpack_require__(75382);
;// CONCATENATED MODULE: ./src/components/NavBar/index.vue?vue&type=style&index=0&id=1367584c&scoped=true&lang=scss&
 /* harmony default export */ var components_NavBarvue_type_style_index_0_id_1367584c_scoped_true_lang_scss_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/NavBar/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_NavBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1367584c",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var NavBar = (component.exports);

/***/ }),

/***/ 80903:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Tabs; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Tabs/index.vue?vue&type=template&id=6734ca90&scoped=true&
var components = {'uTabs': (__webpack_require__(36101)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('u-tabs',{staticClass:"tabs",attrs:{"name":_vm.name,"list":_vm.list,"is-scroll":true,"current":_vm.current,"show-bar":_vm.showBar,"font-size":28,"active-color":_vm.activeColor,"inactive-color":_vm.inactiveColor,"bar-width":_vm.barWidth,"bold":_vm.bold},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.change).apply(void 0, arguments)
}}})}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/Tabs/index.vue?vue&type=template&id=6734ca90&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Tabs/index.vue?vue&type=script&lang=js&

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

/* harmony default export */ var Tabsvue_type_script_lang_js_ = ({
  name: 'Tabs',
  props: {
    list: Array,
    current: {
      type: Number,
      default: 0
    },
    name: String,
    showBar: {
      type: Boolean,
      default: true
    },
    activeColor: {
      type: String,
      default: '#00A096'
    },
    inactiveColor: {
      type: String,
      default: '#999'
    },
    barWidth: {
      type: Number,
      default: 60
    },
    bold: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change: function change(index) {
      this.$emit('update:current', index);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Tabs/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tabsvue_type_script_lang_js_ = (Tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Tabs/index.vue?vue&type=style&index=0&id=6734ca90&lang=scss&scoped=true&
var Tabsvue_type_style_index_0_id_6734ca90_lang_scss_scoped_true_ = __webpack_require__(18642);
;// CONCATENATED MODULE: ./src/components/Tabs/index.vue?vue&type=style&index=0&id=6734ca90&lang=scss&scoped=true&
 /* harmony default export */ var components_Tabsvue_type_style_index_0_id_6734ca90_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/Tabs/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_Tabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6734ca90",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var Tabs = (component.exports);

/***/ }),

/***/ 16835:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-nav-bar-text[data-v-79fd0d14]{font-size:14px}.uni-nav-bar-right-text[data-v-79fd0d14]{font-size:12px}.uni-navbar__content[data-v-79fd0d14]{position:relative;background-color:initial}.uni-navbar-btn-text[data-v-79fd0d14]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;line-height:12px}.uni-navbar__header[data-v-79fd0d14]{display:flex;padding:0 10px;flex-direction:row;height:44px;font-size:12px}.uni-navbar__header-btns[data-v-79fd0d14]{overflow:hidden;display:flex;flex-wrap:nowrap;flex-direction:row;width:%?120?%;justify-content:center;align-items:center;cursor:pointer}.uni-navbar__header-btns-left[data-v-79fd0d14]{display:flex;width:%?120?%;justify-content:flex-start;align-items:center}.uni-navbar__header-btns-right[data-v-79fd0d14]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-navbar__header-container[data-v-79fd0d14]{display:flex;flex:1;padding:0 10px;overflow:hidden}.uni-navbar__header-container-inner[data-v-79fd0d14]{display:flex;flex:1;flex-direction:row;align-items:center;justify-content:center;font-size:12px;overflow:hidden}.uni-navbar__placeholder-view[data-v-79fd0d14]{height:44px}.uni-navbar--fixed[data-v-79fd0d14]{position:fixed;z-index:99;left:var(--window-left);right:var(--window-right)}.uni-navbar--shadow[data-v-79fd0d14]{box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-79fd0d14]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#eee}.uni-ellipsis-1[data-v-79fd0d14]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 27926:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-status-bar[data-v-4debd028]{height:20px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1802:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container .navbar[data-v-1367584c]{width:%?750?%}.container .navbar[data-v-1367584c]  .uni-nav-bar-text{font-weight:700}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86070:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tabs[data-v-6734ca90]{width:%?750?%;border-top:%?1?% solid #f3f3f3}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);