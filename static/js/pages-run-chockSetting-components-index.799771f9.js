(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[4314],{

/***/ 24377:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58768);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("7adb677a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 1976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43457);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("77332509", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 75620:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54137);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("6738b1c1", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 81074:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ chockSetting_components; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/components/index.vue?vue&type=template&id=07dae0dc&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"content"},[_c('v-uni-form',[_c('cc-loc-picker',{attrs:{"left-title":"地点名称","name":"name","value":_vm.mapSelData.name,"placeholder":"请选择位置"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.chooseAddress).apply(void 0, arguments)
}}}),_c('cc-input-view',{attrs:{"left-title":"经度信息","name":"lng","value":_vm.mapSelData.longitude,"placeholder":"请输入经度信息"},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.updateLongitude).apply(void 0, arguments)
}}}),_c('cc-input-view',{attrs:{"left-title":"纬度信息","name":"lat","value":_vm.mapSelData.latitude,"placeholder":"请输入纬度信息"},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.updateLatitude).apply(void 0, arguments)
}}}),_c('cc-input-view',{attrs:{"left-title":"误差范围","name":"allowedDistance","value":_vm.mapSelData.allowedDistance,"placeholder":"允许的误差范围(m)","inputType":"number"},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.updateAllowedDistance).apply(void 0, arguments)
}}}),_c('cc-input-view',{attrs:{"left-title":"描述","name":"description","value":_vm.mapSelData.description,"placeholder":"请输入描述信息"},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.updateDescription).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-btn-v"},[_c('v-uni-button',{staticClass:"botBtn",attrs:{"type":"primary"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.formSubmit).apply(void 0, arguments)
}}},[_vm._v("提交")])],1)],1)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(52675);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(89463);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(58940);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/addressMap/ccInputView.vue?vue&type=template&id=2d852563&scoped=true&
var ccInputViewvue_type_template_id_2d852563_scoped_true_components;
var ccInputViewvue_type_template_id_2d852563_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"input-view"},[_c('v-uni-text',{staticClass:"label"},[_vm._v(_vm._s(_vm.leftTitle))]),_c('v-uni-input',{staticClass:"input",attrs:{"placeholder":_vm.placeholder,"value":_vm.value,"type":_vm.inputType},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.$emit('input', $event.target.value)
}}})],1)}
var ccInputViewvue_type_template_id_2d852563_scoped_true_recyclableRender = false
var ccInputViewvue_type_template_id_2d852563_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/addressMap/ccInputView.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ccInputViewvue_type_script_lang_js_ = ({
  props: {
    leftTitle: String,
    placeholder: String,
    value: String,
    inputType: {
      type: String,
      default: 'text' // 默认输入类型为文本
    }
  }
});
;// CONCATENATED MODULE: ./src/components/addressMap/ccInputView.vue?vue&type=script&lang=js&
 /* harmony default export */ var addressMap_ccInputViewvue_type_script_lang_js_ = (ccInputViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/addressMap/ccInputView.vue?vue&type=style&index=0&id=2d852563&scoped=true&lang=css&
var ccInputViewvue_type_style_index_0_id_2d852563_scoped_true_lang_css_ = __webpack_require__(24377);
;// CONCATENATED MODULE: ./src/components/addressMap/ccInputView.vue?vue&type=style&index=0&id=2d852563&scoped=true&lang=css&
 /* harmony default export */ var addressMap_ccInputViewvue_type_style_index_0_id_2d852563_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/addressMap/ccInputView.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  addressMap_ccInputViewvue_type_script_lang_js_,
  ccInputViewvue_type_template_id_2d852563_scoped_true_render,
  ccInputViewvue_type_template_id_2d852563_scoped_true_staticRenderFns,
  false,
  null,
  "2d852563",
  null,
  false,
  ccInputViewvue_type_template_id_2d852563_scoped_true_components,
  renderjs
)

/* harmony default export */ var ccInputView = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/addressMap/ccLocPicker.vue?vue&type=template&id=23a4d612&scoped=true&
var ccLocPickervue_type_template_id_23a4d612_scoped_true_components;
var ccLocPickervue_type_template_id_23a4d612_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"input-view"},[_c('v-uni-text',{staticClass:"label"},[_vm._v(_vm._s(_vm.leftTitle))]),_c('v-uni-input',{staticClass:"input",attrs:{"placeholder":_vm.placeholder,"value":_vm.value,"readonly":true},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.$emit('click')
}}})],1)}
var ccLocPickervue_type_template_id_23a4d612_scoped_true_recyclableRender = false
var ccLocPickervue_type_template_id_23a4d612_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/addressMap/ccLocPicker.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ccLocPickervue_type_script_lang_js_ = ({
  props: {
    leftTitle: String,
    placeholder: String,
    value: String
  }
});
;// CONCATENATED MODULE: ./src/components/addressMap/ccLocPicker.vue?vue&type=script&lang=js&
 /* harmony default export */ var addressMap_ccLocPickervue_type_script_lang_js_ = (ccLocPickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/addressMap/ccLocPicker.vue?vue&type=style&index=0&id=23a4d612&scoped=true&lang=css&
var ccLocPickervue_type_style_index_0_id_23a4d612_scoped_true_lang_css_ = __webpack_require__(1976);
;// CONCATENATED MODULE: ./src/components/addressMap/ccLocPicker.vue?vue&type=style&index=0&id=23a4d612&scoped=true&lang=css&
 /* harmony default export */ var addressMap_ccLocPickervue_type_style_index_0_id_23a4d612_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./src/components/addressMap/ccLocPicker.vue

var ccLocPicker_renderjs
;

;


/* normalize component */

var ccLocPicker_component = (0,componentNormalizer/* default */.A)(
  addressMap_ccLocPickervue_type_script_lang_js_,
  ccLocPickervue_type_template_id_23a4d612_scoped_true_render,
  ccLocPickervue_type_template_id_23a4d612_scoped_true_staticRenderFns,
  false,
  null,
  "23a4d612",
  null,
  false,
  ccLocPickervue_type_template_id_23a4d612_scoped_true_components,
  ccLocPicker_renderjs
)

/* harmony default export */ var ccLocPicker = (ccLocPicker_component.exports);
// EXTERNAL MODULE: ./src/api/run/address/index.js
var address = __webpack_require__(77872);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/components/index.vue?vue&type=script&lang=js&
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





/* harmony default export */ var componentsvue_type_script_lang_js_ = ({
  components: {
    ccInputView: ccInputView,
    ccLocPicker: ccLocPicker
  },
  data: function data() {
    return {
      mapSelData: {
        name: '',
        latitude: '',
        longitude: '',
        description: '',
        allowedDistance: '' // 初始化为字符串
      },
      form: {}
    };
  },
  created: function created() {
    (0,address/* addressList */.Z)().then(function () {});
  },
  methods: {
    formSubmit: function formSubmit() {
      // 表单校验
      if (!this.mapSelData.name || !this.mapSelData.latitude || !this.mapSelData.longitude || !this.mapSelData.allowedDistance) {
        uni.showToast({
          title: '请补全地址信息',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      var formData = {
        name: this.mapSelData.name,
        latitude: this.mapSelData.latitude,
        longitude: this.mapSelData.longitude,
        description: this.mapSelData.description,
        allowedDistance: this.mapSelData.allowedDistance ? parseInt(this.mapSelData.allowedDistance) : 0 // 默认值为 0
      };
      this.form = (0,objectSpread2/* default */.A)({}, formData);
      this.sendFormDataToBackend();
    },
    sendFormDataToBackend: function sendFormDataToBackend() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,address/* addressAdd */.W)(_this.form);
            case 3:
              uni.showToast({
                title: '新增成功',
                icon: 'success',
                duration: 1000
              });
              setTimeout(function () {
                uni.navigateTo({
                  url: '/pages/run/chockSetting/index'
                });
              }, 1000);
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error('Error submitting form:', _context.t0);
              uni.showToast({
                title: '新增失败，请重试',
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
    chooseAddress: function chooseAddress() {
      uni.navigateTo({
        url: '/pages/run/chockSetting/MapSelection'
      });
    },
    updateLongitude: function updateLongitude(value) {
      this.mapSelData.longitude = value;
    },
    updateLatitude: function updateLatitude(value) {
      this.mapSelData.latitude = value;
    },
    updateAllowedDistance: function updateAllowedDistance(value) {
      this.mapSelData.allowedDistance = value;
    },
    updateDescription: function updateDescription(value) {
      this.mapSelData.description = value;
    },
    onAddressSelected: function onAddressSelected(location) {
      console.log('Selected Location:', location); // 调试输出
      this.mapSelData = {
        name: location.poiname || '',
        latitude: location.latlng ? String(location.latlng.lat) : '',
        longitude: location.latlng ? String(location.latlng.lng) : '',
        description: location.poiaddress || '',
        allowedDistance: location.allowedDistance ? String(location.allowedDistance) : '500'
      };
    }
  },
  onShow: function onShow() {
    // let locations = getlocation(); // 获取位置信息
    // console.log(locations, 'xxxxx');
    // if (locations) {
    //   this.mapSelData = {
    //     name: locations.poiname,
    //     latitude: String(locations.latlng.lat),
    //     longitude: String(locations.latlng.lng),
    //     description: locations.poiaddress,
    //     allowedDistance: locations.allowedDistance ? String(locations.allowedDistance) : ''
    //   };
    //   uni.clearStorageSync();
    // }
  },
  onLoad: function onLoad() {
    uni.$on('address-selected', this.onAddressSelected);
  },
  onDestroyed: function onDestroyed() {
    uni.$off('address-selected', this.onAddressSelected);
  }
});
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/components/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var chockSetting_componentsvue_type_script_lang_js_ = (componentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/chockSetting/components/index.vue?vue&type=style&index=0&id=07dae0dc&scoped=true&lang=css&
var componentsvue_type_style_index_0_id_07dae0dc_scoped_true_lang_css_ = __webpack_require__(75620);
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/components/index.vue?vue&type=style&index=0&id=07dae0dc&scoped=true&lang=css&
 /* harmony default export */ var chockSetting_componentsvue_type_style_index_0_id_07dae0dc_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./src/pages/run/chockSetting/components/index.vue

var components_renderjs
;

;


/* normalize component */

var components_component = (0,componentNormalizer/* default */.A)(
  chockSetting_componentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "07dae0dc",
  null,
  false,
  components,
  components_renderjs
)

/* harmony default export */ var chockSetting_components = (components_component.exports);

/***/ }),

/***/ 58768:
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
___CSS_LOADER_EXPORT___.push([module.id, ".input-view[data-v-2d852563]{display:flex;justify-content:space-between;align-items:center;padding:%?20?%;border-bottom:%?2?% solid #ccc}.label[data-v-2d852563]{flex:1;color:#03654e;font-weight:700}.input[data-v-2d852563]{flex:2;padding:%?10?%;\r\n  /* border: 1px solid #ccc; */border-radius:%?10?%}.uni-input-placeholder[data-v-2d852563]{color:#03654e;font-size:%?26?%}[data-v-2d852563] .uni-input-input{color:#03654e}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 43457:
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
___CSS_LOADER_EXPORT___.push([module.id, ".input-view[data-v-23a4d612]{display:flex;justify-content:space-between;align-items:center;padding:%?20?%;color:#03654e;border-bottom:%?2?% solid #ccc}.label[data-v-23a4d612]{flex:1;font-weight:700}.input[data-v-23a4d612]{flex:2;padding:%?10?%;\n    /* border: 1px solid #ccc; */border-radius:%?10?%}.uni-input-placeholder[data-v-23a4d612]{color:#03654e;font-size:%?26?%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 54137:
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
___CSS_LOADER_EXPORT___.push([module.id, ".content[data-v-07dae0dc]{display:flex;flex-direction:column;padding:%?30?%}.uni-btn-v[data-v-07dae0dc]{width:100%;height:auto}.botBtn[data-v-07dae0dc]{width:90%;margin-top:%?72?%;background-color:#00a096;color:#fff;border:none;border-radius:%?10?%}.tipText[data-v-07dae0dc]{width:100%;margin-left:0;text-align:center;color:#666;margin-top:%?72?%;margin-bottom:%?72?%;font-size:%?28?%}", ""]);
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