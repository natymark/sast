(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[7337],{

/***/ 64196:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33800);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("68344ef9", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 8849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ output; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/large/info/components/output.vue?vue&type=template&id=9a543384&scoped=true&
var components = {'uniForms': (__webpack_require__(70491)/* ["default"] */ .A),'uniFormsItem': (__webpack_require__(74392)/* ["default"] */ .A),'uniEasyinput': (__webpack_require__(11172)/* ["default"] */ .A),'uniDataSelect': (__webpack_require__(4689)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"output"},[_c('uni-forms',{ref:"customForm",staticClass:"outputForm",attrs:{"border":true,"rules":_vm.customRules,"modelValue":_vm.customFormData,"label-width":"30%"}},[_c('uni-forms-item',{attrs:{"label":"大用户名称","required":true,"name":"largeUserName"}},[_c('uni-easyinput',{staticClass:"formInput",attrs:{"inputBorder":false,"placeholder":"请输入大用户名称"},model:{value:(_vm.customFormData.largeUserName),callback:function ($$v) {_vm.$set(_vm.customFormData, "largeUserName", $$v)},expression:"customFormData.largeUserName"}})],1),_c('uni-forms-item',{attrs:{"label":"调节性能","required":true,"name":"adjustingFunction"}},[_c('uni-data-select',{staticClass:"formInput",attrs:{"localdata":_vm.range,"placeholder":"请选择调节性能"},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.adjustingChange).apply(void 0, arguments)
}},model:{value:(_vm.customFormData.adjustingFunction),callback:function ($$v) {_vm.$set(_vm.customFormData, "adjustingFunction", $$v)},expression:"customFormData.adjustingFunction"}})],1),_c('uni-forms-item',{attrs:{"label":"正常水位","required":true,"name":"normalHighWater"}},[_c('uni-easyinput',{staticClass:"formInput",attrs:{"inputBorder":false,"placeholder":"请输入正常水位"},model:{value:(_vm.customFormData.normalHighWater),callback:function ($$v) {_vm.$set(_vm.customFormData, "normalHighWater", $$v)},expression:"customFormData.normalHighWater"}})],1),_c('uni-forms-item',{attrs:{"label":"可调库容","required":true,"name":"adjustableCapacity"}},[_c('uni-easyinput',{staticClass:"formInput",attrs:{"inputBorder":false,"placeholder":"请输入可调库容"},model:{value:(_vm.customFormData.adjustableCapacity),callback:function ($$v) {_vm.$set(_vm.customFormData, "adjustableCapacity", $$v)},expression:"customFormData.adjustableCapacity"}})],1),_c('uni-forms-item',{attrs:{"label":"正常高蓄能值","required":true,"name":"normalHighCharge"}},[_c('uni-easyinput',{staticClass:"formInput",attrs:{"inputBorder":false,"placeholder":"请输入正常高蓄能值"},model:{value:(_vm.customFormData.normalHighCharge),callback:function ($$v) {_vm.$set(_vm.customFormData, "normalHighCharge", $$v)},expression:"customFormData.normalHighCharge"}})],1),_c('uni-forms-item',{attrs:{"label":"当前高蓄能值","required":true,"name":"currentEnergy"}},[_c('uni-easyinput',{staticClass:"formInput",attrs:{"inputBorder":false,"placeholder":"请输入当前高蓄能值"},model:{value:(_vm.customFormData.currentEnergy),callback:function ($$v) {_vm.$set(_vm.customFormData, "currentEnergy", $$v)},expression:"customFormData.currentEnergy"}})],1),_c('uni-forms-item',{attrs:{"label":"当前可调发电能力","required":true,"name":"adjustablePower"}},[_c('uni-easyinput',{staticClass:"formInput",attrs:{"inputBorder":false,"placeholder":"请输入当前可调发电能力"},model:{value:(_vm.customFormData.adjustablePower),callback:function ($$v) {_vm.$set(_vm.customFormData, "adjustablePower", $$v)},expression:"customFormData.adjustablePower"}})],1),_c('uni-forms-item',{attrs:{"label":"当前蓄能率","required":true,"name":"currentChargeRate"}},[_c('uni-easyinput',{staticClass:"formInput",attrs:{"inputBorder":false,"placeholder":"请输入当前蓄能率"},model:{value:(_vm.customFormData.currentChargeRate),callback:function ($$v) {_vm.$set(_vm.customFormData, "currentChargeRate", $$v)},expression:"customFormData.currentChargeRate"}})],1)],1),_c('v-uni-button',{staticClass:"outputBtn",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.submit('customForm')
}}},[_vm._v("提交")])],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/pages/large/info/components/output.vue?vue&type=template&id=9a543384&scoped=true&

// EXTERNAL MODULE: ./src/api/large/info.js
var info = __webpack_require__(18669);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/large/info/components/output.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var outputvue_type_script_lang_js_ = ({
  components: {},
  data: function data() {
    return {
      // 自定义表单数据
      customFormData: {
        largeUserName: "",
        //电厂
        adjustingFunction: "",
        // 录入人
        normalHighWater: '',
        adjustableCapacity: "",
        normalHighCharge: "",
        currentWater: "",
        currentEnergy: "",
        adjustablePower: '',
        currentChargeRate: ''
      },
      range: [{
        value: '1',
        text: '日调节'
      }, {
        value: '2',
        text: '月调节'
      }],
      time: "",
      outPutTime: "",
      // 自定义表单校验规则
      customRules: {
        largeUserName: {
          rules: [{
            required: true,
            errorMessage: "大用户名称不能为空"
          }]
        },
        adjustingFunction: {
          rules: [{
            required: true,
            errorMessage: "调节性能不能为空"
          }]
        },
        normalHighWater: {
          rules: [{
            required: true,
            errorMessage: "正常水位不能为空"
          }]
        },
        adjustableCapacity: {
          rules: [{
            required: true,
            errorMessage: "可调库容不能为空"
          }]
        },
        normalHighCharge: {
          rules: [{
            required: true,
            errorMessage: "正常高蓄能值不能为空"
          }]
        },
        currentEnergy: {
          rules: [{
            required: true,
            errorMessage: "当前高蓄能值不能为空"
          }]
        },
        adjustablePower: {
          rules: [{
            required: true,
            errorMessage: "当前可调发电能力不能为空"
          }]
        },
        currentChargeRate: {
          rules: [{
            required: true,
            errorMessage: "当前蓄能率不能为空"
          }]
        }
      }
    };
  },
  computed: {},
  methods: {
    adjustingChange: function adjustingChange(e) {
      console.log('e', e);
    },
    submit: function submit(ref) {
      this.$refs[ref].validate().then(function (res) {
        var rep = (0,info/* addBigUser */.TJ)(res);
        if (rep.code == 200) {
          uni.showToast({
            title: "\u7528\u6237\u521B\u5EFA\u6210\u529F"
          });
        }
      }).catch(function (err) {
        console.log("err", err);
      });
    }
  },
  watch: {},
  // 页面周期函数--监听页面加载
  onLoad: function onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady: function onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow: function onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide: function onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload: function onUnload() {} // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
});
;// CONCATENATED MODULE: ./src/pages/large/info/components/output.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_outputvue_type_script_lang_js_ = (outputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/large/info/components/output.vue?vue&type=style&index=0&id=9a543384&lang=scss&scoped=true&
var outputvue_type_style_index_0_id_9a543384_lang_scss_scoped_true_ = __webpack_require__(64196);
;// CONCATENATED MODULE: ./src/pages/large/info/components/output.vue?vue&type=style&index=0&id=9a543384&lang=scss&scoped=true&
 /* harmony default export */ var components_outputvue_type_style_index_0_id_9a543384_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/large/info/components/output.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_outputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9a543384",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var output = (component.exports);

/***/ }),

/***/ 33800:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.output[data-v-9a543384]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.output .outputForm[data-v-9a543384]{background:#fff;padding:%?20?%}.output .outputForm .formInput[data-v-9a543384]{outline:none}.output .outputForm[data-v-9a543384]  .uni-select{border:none!important}.output .outputBtn[data-v-9a543384]{width:95%;margin-bottom:10%;background:#00a096;color:#fff}[data-v-9a543384] .uni-forms-item__label{color:#03654e}[data-v-9a543384] .uni-select__selector-item{color:#03654e}[data-v-9a543384] .uni-select__input-placeholder{color:#03654e}.uni-easyinput__placeholder-class[data-v-9a543384]{color:#03654e}[data-v-9a543384] .uni-icons{color:#03654e!important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 18669:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TJ: function() { return /* binding */ addBigUser; },
/* harmony export */   si: function() { return /* binding */ bigUser; }
/* harmony export */ });
/* unused harmony export getPower */
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);

// 大用户基础信息
function bigUser(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/largeUser/list',
    method: 'get',
    params: params
  });
}
//电厂数据列表
function getPower(params) {
  return request({
    url: '/nus/power/list',
    method: 'get',
    params: params
  });
}
function addBigUser(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/largeUser',
    method: 'post',
    data: data
  });
}

/***/ })

}]);