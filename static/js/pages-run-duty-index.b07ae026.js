(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[129],{

/***/ 61676:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99592);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("66f617f6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 1340:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ run_duty; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/index.vue?vue&type=template&id=f34b8226&scoped=true&filter-modules=eyJtYXBNb2R1bGUiOnsidHlwZSI6InJlbmRlcmpzIiwiY29udGVudCI6IiIsInN0YXJ0IjozNzk4LCJhdHRycyI6eyJsYW5nIjoianMiLCJtb2R1bGUiOiJtYXBNb2R1bGUifSwiZW5kIjo0ODQzfX0%3D&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{wxsProps:{"change:data":"msg"},staticClass:"container",attrs:{"data":_vm.msg,"change:data":_vm.mapModule.receiveMsg}},[_c('v-uni-text',{staticClass:"recode",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.gotoRecord).apply(void 0, arguments)
}}},[_vm._v("记录")]),_c('v-uni-view',{staticStyle:{"height":"100%"},attrs:{"id":"mapContainer"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.log).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"top"},[_c('v-uni-text',{staticClass:"time"},[_vm._v(_vm._s(_vm.today))]),(_vm.hours <= 12)?_c('v-uni-text',{staticClass:"txt"},[_vm._v("当前考勤时间段：09:00 - 12:00")]):_vm._e(),(_vm.hours > 12)?_c('v-uni-text',{staticClass:"txt"},[_vm._v("当前考勤时间段：12:00 - 18:00")]):_vm._e()],1),_c('v-uni-view',{staticClass:"bottom"},[_c('v-uni-view',{staticClass:"card card1"},_vm._l((_vm.cardList),function(item,index){return _c('Card',{key:index,staticClass:"cd",on:{"onClick":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.clickT(item)
}}},[_c('v-uni-view',{staticClass:"wrap"},[_c('v-uni-view',{staticClass:"left"},[_c('v-uni-view',{staticClass:"txt1",staticStyle:{"font-weight":"bold"}},[_vm._v(_vm._s(item.title))]),_c('v-uni-view',{staticClass:"txt2"},[_c('v-uni-text',{staticClass:"iconfont icon-check pic"}),_c('v-uni-text',{staticStyle:{"font-weight":"bold"}},[_vm._v(_vm._s(item.time))])],1),_c('v-uni-view',{staticClass:"txt3"},[_c('v-uni-text',{staticClass:"iconfont icon-address pic address"}),_c('v-uni-text',[_c('span',{staticStyle:{"font-weight":"bold"}},[_vm._v("打卡时间：")]),_vm._v(_vm._s(item.msg))])],1)],1),_c('v-uni-view',{staticClass:"right"},[_c('v-uni-text',{staticClass:"iconfont icon-pointer pic",class:item.msg !== '暂未打卡' ? 'deActive' : ''})],1)],1)],1)}),1)],1)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./src/utils/request.js
var utils_request = __webpack_require__(41325);
;// CONCATENATED MODULE: ./src/pages/run/duty/map.js


var defaultConfig = __webpack_require__(27358);
var baseUrl = defaultConfig.mapUrl;
function getLocation(_ref) {
  var ip = _ref.ip,
    key = _ref.key;
  return (0,utils_request/* default */.A)({
    baseUrl: "".concat(baseUrl, "/ws/location/v1/ip?ip=").concat(ip, "&key=").concat(key),
    method: 'get'
  });
}
function transLocation(_ref2) {
  var key = _ref2.key,
    locations = _ref2.locations,
    type = _ref2.type;
  return request({
    baseUrl: "".concat(baseUrl, "/ws/coord/v1/translate?key=").concat(key, "&locations=").concat(locations, "&type=").concat(type)
  });
}
// EXTERNAL MODULE: ./src/pages/run/duty/loadJs.js
var loadJs = __webpack_require__(76549);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js
var construct = __webpack_require__(89848);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(16259);
;// CONCATENATED MODULE: ./src/pages/run/duty/marker.js


var map;
var marker = null;
var label = null;
window.marker = marker;
window.label = label;
function initMap(val) {
  var center = (0,construct/* default */.A)(TMap.LatLng, (0,toConsumableArray/* default */.A)(val)); //设置中心点坐标
  //初始化地图
  map = new TMap.Map('mapContainer', {
    zoom: 17,
    pitch: 0,
    center: center
  });
}

//创建marker事件
function createMarker(val) {
  if (marker || label) {
    marker.setMap(null);
    label.setMap(null);
    marker = null;
    label = null;
  }
  if (!marker && !label) {
    // 初始化marker
    marker = new TMap.MultiMarker({
      id: 'marker-layer',
      map: map,
      styles: {
        marker: new TMap.MarkerStyle({
          width: 35,
          height: 35,
          anchor: {
            x: 16,
            y: 32
          },
          src: (__webpack_require__(27358).imgUrl) + '/position2.svg'
        })
      },
      geometries: [{
        id: 'demo',
        styleId: 'marker',
        position: (0,construct/* default */.A)(TMap.LatLng, (0,toConsumableArray/* default */.A)(val)),
        properties: {
          title: 'marker'
        }
      }]
    });

    //
    label = new TMap.MultiLabel({
      id: 'label-layer',
      map: map,
      styles: {
        label: new TMap.LabelStyle({
          color: '#00A096',
          size: 16,
          offset: {
            x: 0,
            y: 15
          },
          angle: 0,
          alignment: 'center',
          verticalAlignment: 'middle'
        })
      },
      geometries: [{
        id: 'label',
        styleId: 'label',
        position: (0,construct/* default */.A)(TMap.LatLng, (0,toConsumableArray/* default */.A)(val)),
        content: '已进入考勤范围 电力调度控制中心',
        properties: {
          title: 'label'
        }
      }]
    });
  }
}

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/index.vue?vue&type=renderjs&lang=js&module=mapModule&





/* harmony default export */ var dutyvue_type_renderjs_lang_js_module_mapModule_ = ({
  data: function data() {
    return {
      mark: [],
      msg: []
    };
  },
  methods: {
    onClick: function onClick() {
      createMarker();
    },
    init: function init(val) {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var res, _res$result$location, lat, lng, mark, center;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              uni.showLoading({
                title: '加载中'
              });
              _context.next = 3;
              return (0,loadJs/* default */.A)('https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77');
            case 3:
              _context.next = 5;
              return getLocation({
                ip: '',
                key: 'AW5BZ-FSS37-GOLX4-PJNR5-MKZAS-EGFKN'
              });
            case 5:
              res = _context.sent;
              _res$result$location = res.result.location, lat = _res$result$location.lat, lng = _res$result$location.lng;
              mark = [lat, lng];
              _this.msg = mark;
              center = [lat - 0.001, lng]; // const res2 = await transLocation({key:'AW5BZ-FSS37-GOLX4-PJNR5-MKZAS-EGFKN', locations:`${lat},${lng}`, type:'1'})
              // const realMarkObj = res2.locations[0]
              // const realMark = [realMarkObj.lat, realMarkObj.lng]
              _context.next = 12;
              return initMap(center);
            case 12:
              _context.next = 14;
              return createMarker(mark);
            case 14:
              uni.hideLoading();
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.init();
  },
  created: function created() {}
});
;// CONCATENATED MODULE: ./src/pages/run/duty/index.vue?vue&type=renderjs&lang=js&module=mapModule&
 /* harmony default export */ var run_dutyvue_type_renderjs_lang_js_module_mapModule_ = (dutyvue_type_renderjs_lang_js_module_mapModule_); 
// EXTERNAL MODULE: ./src/utils/userDuty.js
var userDuty = __webpack_require__(74977);
// EXTERNAL MODULE: ./src/store/index.js + 4 modules
var store = __webpack_require__(46920);
// EXTERNAL MODULE: ./src/components/Card/index.vue + 5 modules
var Card = __webpack_require__(38289);
// EXTERNAL MODULE: ./src/api/run/duty/index.js
var duty = __webpack_require__(14380);
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__(50771);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/index.vue?vue&type=script&lang=js&
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






/* harmony default export */ var dutyvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      cardList: [{
        title: '上班打卡',
        time: '09:00',
        msg: '暂未打卡'
      }, {
        title: '下班打卡',
        time: '18:00',
        msg: '暂未打卡'
      }],
      tempList: [],
      id: ''
    };
  },
  components: {
    Card: Card/* default */.A
  },
  computed: {
    today: function today() {
      return (0,userDuty/* transformDateToSimple */.oh)().formattedMonth;
    },
    hours: function hours() {
      return (0,userDuty/* transformDateToSimple */.oh)().hours;
    }
  },
  watch: {
    itemPoints: {
      // 这里是要监听的变量名
      handler: function handler(newValue, oldValue) {//这里的第一个参数是改变后的值，第二个参数是原来的值
      }
    },
    deep: true
  },
  methods: {
    clickT: function clickT(e) {
      if (e.msg !== '暂未打卡') return;
      this.$tab.navigateTo("/pages/run/duty/clockIn/index?userId=".concat(this.userId, "&title=").concat(e.title, "&id=").concat(this.id, "&dutyList=").concat(this.itemPoints));
    },
    gotoRecord: function gotoRecord() {
      this.$tab.navigateTo("/pages/run/duty/clockRecord/index?userId=".concat(this.userId));
    },
    receiveMsg: function receiveMsg(val) {
      //接受map.js的传参
      if (val) this.itemPoints = val;
      console.log('itemPoints', this.itemPoints);
    }
  },
  mounted: function mounted() {},
  onShow: function onShow() {
    var _this = this;
    return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
      var result, _this$tempList$, onDutyTime, onDutyStatus, offDutyTime, offDutyStatus, id;
      return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (store/* default */.A.getters.userId) {
              _context.next = 3;
              break;
            }
            _context.next = 3;
            return _this.$store.dispatch('GetInfo');
          case 3:
            _context.next = 5;
            return store/* default */.A.getters.userId;
          case 5:
            _this.userId = _context.sent;
            _context.next = 8;
            return duty/* load */.Hh({
              personId: _this.userId,
              date: (0,common/* formatTimestamp */.Ey)(new Date())
            });
          case 8:
            result = _context.sent;
            _this.tempList = result.rows;
            if (_this.tempList.length > 0) {
              _this$tempList$ = _this.tempList[0], onDutyTime = _this$tempList$.onDutyTime, onDutyStatus = _this$tempList$.onDutyStatus, offDutyTime = _this$tempList$.offDutyTime, offDutyStatus = _this$tempList$.offDutyStatus, id = _this$tempList$.id;
              _this.id = id;
              console.log('时间', onDutyTime);
              if (onDutyTime) {
                _this.cardList[0].msg = onDutyTime.split(' ')[1];
                // this.cardList[0].msg = '暂未打卡'
              }
              if (offDutyTime) {
                _this.cardList[1].msg = offDutyTime.split(' ')[1];
                // this.cardList[1].msg = '暂未打卡'
              }
            }
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }
});
;// CONCATENATED MODULE: ./src/pages/run/duty/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var run_dutyvue_type_script_lang_js_ = (dutyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/index.vue?vue&type=style&index=0&id=f34b8226&lang=scss&scoped=true&
var dutyvue_type_style_index_0_id_f34b8226_lang_scss_scoped_true_ = __webpack_require__(61676);
;// CONCATENATED MODULE: ./src/pages/run/duty/index.vue?vue&type=style&index=0&id=f34b8226&lang=scss&scoped=true&
 /* harmony default export */ var run_dutyvue_type_style_index_0_id_f34b8226_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/run/duty/index.vue


run_dutyvue_type_renderjs_lang_js_module_mapModule_.__module = 'mapModule'

;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  run_dutyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f34b8226",
  null,
  false,
  components,
  run_dutyvue_type_renderjs_lang_js_module_mapModule_
)

/* harmony default export */ var run_duty = (component.exports);

/***/ }),

/***/ 99592:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-f34b8226]{width:100%;height:100%;position:relative}.container .recode[data-v-f34b8226]{position:fixed;top:%?25?%;right:%?25?%;font-size:%?30?%;font-weight:700;z-index:5000;color:#fff}.container .top[data-v-f34b8226]{display:flex;flex-direction:column;row-gap:%?10?%;position:absolute;width:50%;padding:%?20?%;color:#03654e;font-weight:700;border:%?4?% solid hsla(0,0%,100%,.1);background:hsla(0,0%,100%,.2);box-shadow:0 0 %?160?% rgba(0,0,0,.2);overflow:hidden;border-radius:%?15?%;-webkit-backdrop-filter:blur(%?20?%);backdrop-filter:blur(%?20?%);top:0;left:0}.container .top .txt[data-v-f34b8226]{font-size:%?22?%}.container .bottom[data-v-f34b8226]{position:absolute;bottom:%?60?%;width:100%;padding:%?20?%;z-index:1000}.container .bottom .card .cd[data-v-f34b8226]{margin-bottom:%?20?%;border-radius:%?15?%;box-shadow:0 0 %?160?% rgba(0,0,0,.2)}.container .bottom .card .wrap[data-v-f34b8226]{display:flex;justify-content:space-between;align-items:center}.container .bottom .card .wrap .left[data-v-f34b8226]{color:#03654e}.container .bottom .card .wrap .left .txt1[data-v-f34b8226]::before{content:\"\";display:inline-block;border-radius:%?12?%;width:%?24?%;height:%?24?%;background:#00a096}.container .bottom .card .wrap .left .txt2[data-v-f34b8226],\r\n.container .bottom .card .wrap .left .txt3[data-v-f34b8226]{display:flex;align-items:center}.container .bottom .card .wrap .left .txt2 .pic[data-v-f34b8226],\r\n.container .bottom .card .wrap .left .txt3 .pic[data-v-f34b8226]{color:#3ba6e9;display:block;font-size:%?24?%;line-height:%?24?%;margin-right:%?4?%}.container .bottom .card .wrap .left .txt2 .address[data-v-f34b8226],\r\n.container .bottom .card .wrap .left .txt3 .address[data-v-f34b8226]{color:#e9893b}.container .bottom .card .wrap .right .pic[data-v-f34b8226]{font-size:%?80?%;line-height:%?80?%;color:#3ba6e9}.container .bottom .card .wrap .right .pic.deActive[data-v-f34b8226]{color:#dfedf5}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 14380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gs: function() { return /* binding */ addResign; },
/* harmony export */   Hh: function() { return /* binding */ load; },
/* harmony export */   hc: function() { return /* binding */ edit; },
/* harmony export */   qv: function() { return /* binding */ getAllResign; },
/* harmony export */   rL: function() { return /* binding */ editResign; },
/* harmony export */   tA: function() { return /* binding */ submit; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);

var api = {
  load: '/nus/sign/list',
  submit: '/nus/sign'
};

// 查询当日或当月的打卡信息
var load = function load(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "".concat(api.load),
    method: 'get',
    params: params
  });
};

// 如果没有打过卡的是新增
var submit = function submit(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "".concat(api.submit),
    method: 'post',
    data: data
  });
};

// 如果打过就用修改
var edit = function edit(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "".concat(api.submit),
    method: 'put',
    data: data
  });
};

// 补签
var addResign = function addResign(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/resign",
    method: 'post',
    data: data
  });
};

// 审批 修改audited的属性
var editResign = function editResign(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/resign",
    method: 'put',
    data: data
  });
};

// 获取所有待补签列表
var getAllResign = function getAllResign(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/resign/list",
    method: 'get',
    params: params
  });
};

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

/***/ }),

/***/ 74977:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mI: function() { return /* binding */ getCurrentTimestamp; },
/* harmony export */   oh: function() { return /* binding */ transformDateToSimple; }
/* harmony export */ });
/* unused harmony exports updateArray, userDuty, addOrDelChecked, convertDateToTimestamp, setChecked */
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28706);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48980);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54554);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26099);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31415);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17642);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58004);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33853);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45876);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32475);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15024);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31698);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47764);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98992);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3949);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23500);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(62953);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);


















// 数组元素增删
function updateArray(array, element) {
  // 查找元素在数组中的索引
  var index = array.findIndex(function (item) {
    return item.userId === element.userId;
  });
  if (index !== -1) {
    // 如果元素存在，删除该元素
    array.splice(index, 1);
  } else {
    // 如果元素不存在，添加该元素
    array.push(element);
  }
}
function userDuty(callback, item, morning, afternoon, evening, pickerCurrentIndex, tabCurrentIndex) {
  switch (pickerCurrentIndex) {
    case 0:
      if (tabCurrentIndex === 0) {
        callback(morning.master, item);
      }
      if (tabCurrentIndex === 1) {
        callback(morning.staff, item);
      }
      break;
    case 1:
      if (tabCurrentIndex === 0) {
        callback(afternoon.master, item);
      }
      if (tabCurrentIndex === 1) {
        callback(afternoon.staff, item);
      }
      break;
    case 2:
      if (tabCurrentIndex === 0) {
        callback(evening.master, item);
      }
      if (tabCurrentIndex === 1) {
        callback(evening.staff, item);
      }
      break;
    default:
      break;
  }
}

// 添加或删除checked属性
function addOrDelChecked(arrayA, arrayB) {
  if (arrayA.length > 0) {
    var checkedUsers = new Set();
    arrayA.forEach(function (user) {
      checkedUsers.add(user.userId);
    });
    arrayB.forEach(function (user) {
      if (checkedUsers.has(String(user.userId))) {
        user.checked = true;
      } else {
        delete user.checked;
      }
    });
  }
  if (arrayA.length == 0) {
    arrayB.forEach(function (item) {
      delete item.checked;
    });
  }
}

// 日期转换成时间戳
function convertDateToTimestamp(dateString) {
  var dateObject;
  if (!dateString) {
    dateObject = new Date();
  } else {
    dateObject = new Date(dateString);
  }
  return dateObject.getTime();
}

// 获取当前时间戳
function getCurrentTimestamp() {
  var currentDate = new Date();
  return currentDate.getTime();
}

// eg: 2024-08-07 => 7日 星期三
function transformDateToSimple(date) {
  var today = new Date(convertDateToTimestamp(date));
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  var dayOfWeek = daysOfWeek[today.getDay()];
  var formattedDate = "".concat(day, "\u65E5 ").concat(dayOfWeek);
  var formattedMonth = "".concat(month, "\u6708").concat(day, "\u65E5 ").concat(dayOfWeek);
  var yearMonth = "".concat(year, "-").concat(month < 10 ? '0' + month : month);
  var dateWeek = "".concat(yearMonth, "-").concat(day, " ").concat(dayOfWeek);
  var now = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day) + ' ' + (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
  return {
    year: year,
    formattedDate: formattedDate,
    formattedMonth: formattedMonth,
    hours: hours,
    yearMonth: yearMonth,
    dateWeek: dateWeek,
    now: now
  };
}
function setChecked(obj1, obj2) {}

/***/ }),

/***/ 30566:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(79504);
var aCallable = __webpack_require__(79306);
var isObject = __webpack_require__(20034);
var hasOwn = __webpack_require__(39297);
var arraySlice = __webpack_require__(67680);
var NATIVE_BIND = __webpack_require__(40616);

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ 60825:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var getBuiltIn = __webpack_require__(97751);
var apply = __webpack_require__(18745);
var bind = __webpack_require__(30566);
var aConstructor = __webpack_require__(35548);
var anObject = __webpack_require__(28551);
var isObject = __webpack_require__(20034);
var create = __webpack_require__(2360);
var fails = __webpack_require__(79039);

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target === newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 89848:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _construct; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44114);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60825);
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40884);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97130);




function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(p, r.prototype), p;
}


/***/ }),

/***/ 40884:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60825);

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ 97130:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10287);

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

}]);