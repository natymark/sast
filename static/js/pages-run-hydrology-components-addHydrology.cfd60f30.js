(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[7879],{

/***/ 17968:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90532);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("c92b1504", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 10162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ addHydrology; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/hydrology/components/addHydrology.vue?vue&type=template&id=60a4c75e&scoped=true&
var components = {'uniForms': (__webpack_require__(70491)/* ["default"] */ .A),'uniFormsItem': (__webpack_require__(74392)/* ["default"] */ .A),'uniEasyinput': (__webpack_require__(11172)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"box"},[_c('v-uni-scroll-view',{staticClass:"output",attrs:{"scroll-y":true}},[_c('uni-forms',{ref:"customForm",staticClass:"outputForm",attrs:{"border":true,"rules":_vm.customRules,"modelValue":_vm.customFormData,"label-width":"35%"}},[_c('uni-forms-item',{attrs:{"label":"申请人","required":true,"name":"userName"}},[_c('uni-easyinput',{staticClass:"formInput",attrs:{"inputBorder":false,"placeholder":"请输入申请人"},model:{value:(_vm.customFormData.userName),callback:function ($$v) {_vm.$set(_vm.customFormData, "userName", $$v)},expression:"customFormData.userName"}})],1),_c('uni-forms-item',{attrs:{"label":"面雨量","required":true,"name":"areaRainfall"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入面雨量","type":"number"},model:{value:(_vm.customFormData.areaRainfall),callback:function ($$v) {_vm.$set(_vm.customFormData, "areaRainfall", $$v)},expression:"customFormData.areaRainfall"}})],1),_c('uni-forms-item',{attrs:{"label":"坝上水位(m)","required":true,"name":"damupPosition"}},[_c('uni-easyinput',{attrs:{"placeholder":"请输入坝上水位(m)","type":"number","inputBorder":false},model:{value:(_vm.customFormData.damupPosition),callback:function ($$v) {_vm.$set(_vm.customFormData, "damupPosition", $$v)},expression:"customFormData.damupPosition"}})],1),_c('uni-forms-item',{attrs:{"label":"坝下水位(m)","required":true,"name":"damdownPosition"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入坝下水位(m)","type":"number"},model:{value:(_vm.customFormData.damdownPosition),callback:function ($$v) {_vm.$set(_vm.customFormData, "damdownPosition", $$v)},expression:"customFormData.damdownPosition"}})],1),_c('uni-forms-item',{attrs:{"label":"死水位(m)","required":true,"name":"diePosition"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入死水位(m)"},model:{value:(_vm.customFormData.diePosition),callback:function ($$v) {_vm.$set(_vm.customFormData, "diePosition", $$v)},expression:"customFormData.diePosition"}})],1),_c('uni-forms-item',{attrs:{"label":"正常高水位(m)","required":true,"name":"normalupPositio"}},[_c('uni-easyinput',{attrs:{"type":"number","inputBorder":false,"placeholder":"请输入正常高水位(m)"},model:{value:(_vm.customFormData.normalupPositio),callback:function ($$v) {_vm.$set(_vm.customFormData, "normalupPositio", $$v)},expression:"customFormData.normalupPositio"}})],1),_c('uni-forms-item',{attrs:{"label":"入库流量(m³/s)","required":true,"name":"inboundTraffic"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入入库流量(m³/s)","type":"number"},model:{value:(_vm.customFormData.inboundTraffic),callback:function ($$v) {_vm.$set(_vm.customFormData, "inboundTraffic", $$v)},expression:"customFormData.inboundTraffic"}})],1),_c('uni-forms-item',{attrs:{"label":"发电流量(m³/s)","required":true,"name":"generationTraffic"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入发电流量(m³/s)","type":"number"},model:{value:(_vm.customFormData.generationTraffic),callback:function ($$v) {_vm.$set(_vm.customFormData, "generationTraffic", $$v)},expression:"customFormData.generationTraffic"}})],1),_c('uni-forms-item',{attrs:{"label":"弃水","required":true,"name":"abandonedWater"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入弃水","type":"number"},model:{value:(_vm.customFormData.abandonedWater),callback:function ($$v) {_vm.$set(_vm.customFormData, "abandonedWater", $$v)},expression:"customFormData.abandonedWater"}})],1),_c('uni-forms-item',{attrs:{"label":"储能值","required":true,"name":"energyStorage"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入储能值","type":"number"},model:{value:(_vm.customFormData.energyStorage),callback:function ($$v) {_vm.$set(_vm.customFormData, "energyStorage", $$v)},expression:"customFormData.energyStorage"}})],1),_c('uni-forms-item',{attrs:{"label":"储能率","required":true,"name":"energyRate"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入储能率","type":"number"},model:{value:(_vm.customFormData.energyRate),callback:function ($$v) {_vm.$set(_vm.customFormData, "energyRate", $$v)},expression:"customFormData.energyRate"}})],1),_c('uni-forms-item',{attrs:{"label":"发电能力","required":true,"name":"generatingCapacity"}},[_c('uni-easyinput',{attrs:{"inputBorder":false,"placeholder":"请输入发电能力","type":"number"},model:{value:(_vm.customFormData.generatingCapacity),callback:function ($$v) {_vm.$set(_vm.customFormData, "generatingCapacity", $$v)},expression:"customFormData.generatingCapacity"}})],1)],1)],1),_c('v-uni-button',{staticClass:"outputBtn",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.submit('customForm')
}}},[_vm._v("提交")])],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/pages/run/hydrology/components/addHydrology.vue?vue&type=template&id=60a4c75e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./src/api/hydrology/info.js
var info = __webpack_require__(14253);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/hydrology/components/addHydrology.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var addHydrologyvue_type_script_lang_js_ = ({
  components: {},
  mounted: function mounted() {
    var arr = JSON.parse(localStorage.getItem("storage_data"));
    var vuex_name = arr.data.vuex_name;
    console.log("arr", arr.data);
    this.customFormData.userName = vuex_name;
  },
  data: function data() {
    return {
      // 自定义表单数据
      customFormData: {
        userName: "",
        areaRainfall: "",
        damupPosition: "",
        damdownPosition: "",
        normalupPositio: "",
        diePosition: "",
        inboundTraffic: "",
        generationTraffic: "",
        abandonedWater: "",
        energyStorage: "",
        energyRate: "",
        generatingCapacity: ""
      },
      // 自定义表单校验规则
      customRules: {
        userName: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        areaRainfall: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        damupPosition: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        damdownPosition: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        normalupPositio: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        diePosition: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        inboundTraffic: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        generationTraffic: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        abandonedWater: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        outboundFlow: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        energyStorage: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        energyRate: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        generatingCapacity: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        },
        flowRate: {
          rules: [{
            required: true,
            errorMessage: "请输入"
          }]
        }
      }
    };
  },
  computed: {},
  methods: {
    reset: function reset() {
      this.customFormData = {
        userName: "",
        areaRainfall: "",
        damupPosition: "",
        damdownPosition: "",
        normalupPositio: "",
        diePosition: "",
        inboundTraffic: "",
        generationTraffic: "",
        abandonedWater: "",
        energyStorage: "",
        energyRate: "",
        generatingCapacity: ""
      };
    },
    submit: function submit(ref) {
      var _this = this;
      this.$refs[ref].validate().then(function (res) {
        (0,info/* addWater */.zO)(_this.customFormData).then(function (response) {
          _this.customFormData = {
            userName: "",
            areaRainfall: "",
            damupPosition: "",
            damdownPosition: "",
            normalupPositio: "",
            diePosition: "",
            inboundTraffic: "",
            generationTraffic: "",
            abandonedWater: "",
            energyStorage: "",
            energyRate: "",
            generatingCapacity: ""
          }; // 清空表单数据

          if (response.code === 200) {
            _this.$tab.navigateTo("/pages/run/hydrology/components/success");
          } else {
            _this.$tab.navigateTo("/pages/run/hydrology/components/trunDown");
          }
        });
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
  onUnload: function onUnload() {
    this.reset();
  } // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
});
;// CONCATENATED MODULE: ./src/pages/run/hydrology/components/addHydrology.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_addHydrologyvue_type_script_lang_js_ = (addHydrologyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/hydrology/components/addHydrology.vue?vue&type=style&index=0&id=60a4c75e&lang=scss&scoped=true&
var addHydrologyvue_type_style_index_0_id_60a4c75e_lang_scss_scoped_true_ = __webpack_require__(17968);
;// CONCATENATED MODULE: ./src/pages/run/hydrology/components/addHydrology.vue?vue&type=style&index=0&id=60a4c75e&lang=scss&scoped=true&
 /* harmony default export */ var components_addHydrologyvue_type_style_index_0_id_60a4c75e_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/run/hydrology/components/addHydrology.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_addHydrologyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "60a4c75e",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var addHydrology = (component.exports);

/***/ }),

/***/ 90532:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.box[data-v-60a4c75e]{height:100%}.box .outputForm[data-v-60a4c75e]  .uni-forms-item__label{color:#03654e;font-weight:700}.box .outputForm[data-v-60a4c75e]  .uni-input-placeholder,\r\n.box .outputForm[data-v-60a4c75e]  .uni-select__input-text,\r\n.box .outputForm[data-v-60a4c75e]  .uni-icons,\r\n.box .outputForm[data-v-60a4c75e]  .uni-date__x-input{color:#b6e8de!important}.box .output[data-v-60a4c75e]{display:flex;flex-direction:column;justify-content:space-between;height:calc(100% - %?92?%)}.box .output .outputForm[data-v-60a4c75e]{background:#fff;padding:%?20?%}.box .output .outputForm .formInput[data-v-60a4c75e]{outline:none}.box .outputBtn[data-v-60a4c75e]{width:95%;position:fixed;bottom:0;background:#00a096;color:#fff}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 14253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B$: function() { return /* binding */ reqStatisticsWaterLevel; },
/* harmony export */   Ww: function() { return /* binding */ reqStatisticsCapacity; },
/* harmony export */   vS: function() { return /* binding */ getList; },
/* harmony export */   zO: function() { return /* binding */ addWater; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);

function addWater(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/hydrology',
    method: 'post',
    data: data
  });
}
function getList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/hydrology/list',
    method: 'get',
    data: data
  });
}
function reqStatisticsCapacity(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/hydrology/statisticsCapacity',
    method: 'get',
    params: params
  });
}
function reqStatisticsWaterLevel(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/hydrology/statisticsWaterLevel',
    method: 'get',
    params: params
  });
}

/***/ })

}]);