(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[6815],{

/***/ 91748:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60248);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("208acf0d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 89627:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30351);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("4f3c392c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 71119:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ count; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/data/count/index.vue?vue&type=template&id=5860ea08&scoped=true&
var components = {'uIcon': (__webpack_require__(15614)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"generateElectricity"},[_c('ListViewFixed',{ref:"mescrollItem",attrs:{"list":_vm.list,"stickyHeader":true},on:{"handlerUp":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handlerUp).apply(void 0, arguments)
}},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('v-uni-view',{staticClass:"headerWrap"},[_c('v-uni-view',{staticClass:"tabsWrap"},[_c('VTabs',{staticClass:"vTabs",attrs:{"tabs":_vm.tabs,"field":"name","pills":false,"activeColor":"#32C3BA","lineColor":"#32C3BA","bgColor":"#fff","lineHeight":"5rpx","zIndex":996},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.change).apply(void 0, arguments)
}},model:{value:(_vm.current),callback:function ($$v) {_vm.current=$$v},expression:"current"}})],1),_c('v-uni-view',{staticClass:"timeWrap"},[_c('v-uni-view',{staticClass:"txtWrap",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleClick).apply(void 0, arguments)
}}},[_c('v-uni-text',{staticClass:"txt"},[_vm._v(_vm._s(_vm.currentSelect))]),_c('u-icon',{attrs:{"name":_vm.show ? 'arrow-up-fill' : 'arrow-down-fill',"color":"#686868","size":"16"}})],1),_c('MTime',{attrs:{"dateMaker":_vm.dateMaker},on:{"MTimeChange":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.MTimeChange).apply(void 0, arguments)
}}})],1)],1)]},proxy:true},{key:"bodyHeader",fn:function(){return [_c('v-uni-view',{staticClass:"bodyHeaderWrap"},[_c('MCharts',{attrs:{"optionData":_vm.optionData,"useDefaultStyle":false}})],1)]},proxy:true},{key:"stickyHeader",fn:function(){return [_c('v-uni-view',{staticClass:"stickyHeaderWrap"},[_c('v-uni-view',{staticClass:"stickyHeaderItem"},[_c('v-uni-text',{staticClass:"t1"},[_vm._v("电厂名称")]),_c('v-uni-text',{staticClass:"t2"},[_vm._v("最大/最小值")]),_c('v-uni-text',{staticClass:"t3"},[_vm._v("时间")])],1)],1)]},proxy:true},{key:"content",fn:function(ref){
var content = ref.content;
var index = ref.index;
return [_c('v-uni-view',{staticClass:"contentWrap"},[_c('v-uni-view',{staticClass:"contentItem"},[_c('v-uni-text',{staticClass:"t1"},[_vm._v(_vm._s(content.plantName))]),_c('v-uni-view',{staticClass:"t2"},[_c('v-uni-text',{staticClass:"max"},[_vm._v(_vm._s(content.max))]),_c('v-uni-text',{staticClass:"min"},[_vm._v(_vm._s(content.min))])],1),_c('v-uni-text',{staticClass:"t3"},[_vm._v(_vm._s(content.maxTime)),_c('br'),_vm._v(_vm._s(content.minTime))])],1)],1)]}}])}),_c('TuiPicker',{attrs:{"pickerData":_vm.pickerObj,"show":_vm.show,"showChangeButton":true,"changeButtonData":['省', '市', '区'],"layer":_vm.layer,"textField":'name',"valueField":'id'},on:{"update:layer":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.layer=$event
},"hide":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.hide).apply(void 0, arguments)
},"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.pickerChange).apply(void 0, arguments)
}}})],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/pages/data/count/index.vue?vue&type=template&id=5860ea08&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2775);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(65361);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(34782);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(71761);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-start.js
var es_string_pad_start = __webpack_require__(68156);
// EXTERNAL MODULE: ./src/components/ListViewFixed/index.vue + 6 modules
var ListViewFixed = __webpack_require__(27344);
// EXTERNAL MODULE: ./src/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-comp.js
var mescroll_comp = __webpack_require__(20782);
// EXTERNAL MODULE: ./src/components/MTime/index.vue + 5 modules
var MTime = __webpack_require__(3800);
// EXTERNAL MODULE: ./src/components/Search/index.vue + 5 modules
var Search = __webpack_require__(41427);
// EXTERNAL MODULE: ./src/components/MPicker/index.vue + 5 modules
var MPicker = __webpack_require__(74378);
// EXTERNAL MODULE: ./src/components/MCharts/index.vue + 6 modules
var MCharts = __webpack_require__(38517);
// EXTERNAL MODULE: ./src/uni_modules/tui-picker/tui-picker.vue + 4 modules
var tui_picker = __webpack_require__(97435);
// EXTERNAL MODULE: ./src/uni_modules/v-tabs/components/v-tabs/v-tabs.vue + 6 modules
var v_tabs = __webpack_require__(77724);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(10591);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(63065);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51729);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(62062);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(72712);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(98992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(81454);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.reduce.js
var esnext_iterator_reduce = __webpack_require__(8872);
// EXTERNAL MODULE: ./src/api/common/index.js
var common = __webpack_require__(51475);
// EXTERNAL MODULE: ./src/api/run/monitor/index.js
var monitor = __webpack_require__(76962);
// EXTERNAL MODULE: ./src/mock/mock.js + 2 modules
var mock = __webpack_require__(81055);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
;// CONCATENATED MODULE: ./src/pages/data/count/optionData.js
/* provided dependency */ var console = __webpack_require__(43859)["A"];






var optionData = [{
  name: '调度口径(地区)',
  icon: 'circle',
  value: 169826.56
}, {
  name: '自供区(地区)',
  icon: 'circle',
  value: 0.68
}, {
  name: '抽蓄电站(地区)',
  icon: 'circle',
  value: 2544.3
}, {
  name: '地区省外受入(地区)',
  icon: 'circle',
  value: 98.28
}, {
  name: '0.4V电源(地区)',
  icon: 'circle',
  value: 1354.23
}];
var totalValue = optionData.reduce(function (sum, item) {
  return sum + item.value;
}, 0);
/* harmony default export */ var count_optionData = (function () {
  var optionData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var totalValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  console.log(optionData, 'optionData', totalValue, 'totalValue');
  return {
    id: 'levelOption',
    title: {
      text: '{title|总发电量(MW)：}{subtitle|' + totalValue.toFixed(2) + '}',
      left: 'left',
      textStyle: {
        rich: {
          title: {
            fontSize: 14,
            fontWeight: 'bold',
            padding: [10, 0, 0, 10]
          },
          subtitle: {
            fontSize: 12,
            fontWeight: 'normal',
            padding: [10, 0, 0, 0],
            color: '#999'
          }
        }
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}:{d}%',
      confine: true,
      position: function position(point, params, dom, rect, size) {
        // 计算tooltip的宽度和高度
        var tooltipWidth = size.contentSize[0];
        var tooltipHeight = size.contentSize[1];

        // 确保tooltip不会超出图表边界
        var x = Math.min(point[0], size.viewSize[0] - tooltipWidth);
        var y = Math.min(point[1], size.viewSize[1] - tooltipHeight);

        // 如果tooltip太靠左，向右移动
        if (x < 20) {
          x = 20;
        }
        return [x, y];
      }
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 'center',
      selectedMode: 'multiple',
      data: optionData,
      textStyle: {
        fontSize: 13,
        align: 'right',
        vertical: 'middle',
        rich: {
          name: {
            //width: 150 //左侧名称的宽
          },
          value: {
            //width: 20, //右侧值的宽
            align: 'right' //right就是右对齐
          }
        }
      },
      formatter: function formatter(name) {
        var target;
        optionData.forEach(function (item) {
          if (item.name === name) {
            target = item;
          }
        });
        return "{name|".concat(name, "}: {value|").concat(target.value, "}");
      }
    },
    series: [{
      name: '姓名',
      type: 'pie',
      radius: '55%',
      center: ['20%', '50%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: optionData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
});
;// CONCATENATED MODULE: ./src/pages/data/count/optionData2.js






var optionData2_optionData = [{
  name: '调度口径(地区)',
  icon: 'circle',
  value: 169826.56
}, {
  name: '自供区(地区)',
  icon: 'circle',
  value: 0.68
}, {
  name: '抽蓄电站(地区)',
  icon: 'circle',
  value: 2544.3
}, {
  name: '地区省外受入(地区)',
  icon: 'circle',
  value: 98.28
}, {
  name: '0.4V电源(地区)',
  icon: 'circle',
  value: 1354.23
}];
var optionData2_totalValue = optionData2_optionData.reduce(function (sum, item) {
  return sum + item.value;
}, 0);
/* harmony default export */ var optionData2 = (function () {
  var optionData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var totalValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    id: 'levelOption',
    title: {
      text: '{title|总用电量：}{subtitle|' + totalValue.toFixed(2) + '}',
      left: 'left',
      textStyle: {
        rich: {
          title: {
            fontSize: 14,
            fontWeight: 'bold',
            padding: [10, 0, 0, 10]
          },
          subtitle: {
            fontSize: 12,
            fontWeight: 'normal',
            padding: [10, 0, 0, 0],
            color: '#999'
          }
        }
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}:{d}%',
      confine: true,
      position: function position(point, params, dom, rect, size) {
        // 计算tooltip的宽度和高度
        var tooltipWidth = size.contentSize[0];
        var tooltipHeight = size.contentSize[1];

        // 确保tooltip不会超出图表边界
        var x = Math.min(point[0], size.viewSize[0] - tooltipWidth);
        var y = Math.min(point[1], size.viewSize[1] - tooltipHeight);

        // 如果tooltip太靠左，向右移动
        if (x < 20) {
          x = 20;
        }
        return [x, y];
      }
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 'center',
      selectedMode: 'multiple',
      data: optionData,
      textStyle: {
        fontSize: 13,
        align: 'right',
        vertical: 'middle',
        rich: {
          name: {
            //width: 150 //左侧名称的宽
          },
          value: {
            //width: 20, //右侧值的宽
            align: 'right' //right就是右对齐
          }
        }
      },
      formatter: function formatter(name) {
        var target;
        optionData.forEach(function (item) {
          if (item.name === name) {
            target = item;
          }
        });
        return "{name|".concat(name, "}: {value|").concat(target.value, "}");
      }
    },
    series: [{
      name: '姓名',
      type: 'pie',
      radius: '55%',
      center: ['20%', '50%'],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: optionData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
});
;// CONCATENATED MODULE: ./src/pages/data/count/countFun.js
/* provided dependency */ var countFun_console = __webpack_require__(43859)["A"];





var _excluded = ["current"];











var CountFun = /*#__PURE__*/function () {
  function CountFun() {
    (0,classCallCheck/* default */.A)(this, CountFun);
    this.optionData = [];
    this.totalValue = 0;
    this.plantsTree = null;
    this.list = [];
    this.current = 0;
    this.dateMaker = 'day';
    this.filedMap = {
      title: 'integralValue',
      max: 'maxIntegralValue',
      min: 'minIntegralValue',
      maxTime: 'maxDate',
      minTime: 'minDate',
      plantName: 'plantName',
      plantId: 'plantId',
      name: 'plantName',
      value: 'integralValue'
    };
  }

  // 获取电厂树
  return (0,createClass/* default */.A)(CountFun, [{
    key: "getPlantsTree",
    value: function () {
      var _getPlantsTree = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.plantsTree) {
                _context.next = 11;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return (0,common/* getPlants */.XX)();
            case 4:
              this.plantsTree = _context.sent;
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              countFun_console.error('Failed to get plants tree:', _context.t0);
              throw _context.t0;
            case 11:
              return _context.abrupt("return", this.plantsTree);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 7]]);
      }));
      function getPlantsTree() {
        return _getPlantsTree.apply(this, arguments);
      }
      return getPlantsTree;
    }() // 获取日发电量列表
  }, {
    key: "getDayList",
    value: function () {
      var _getDayList = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2(data) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0,monitor/* reqGetDayList */.$9)(data);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              countFun_console.error('Failed to get day list:', _context2.t0);
              throw _context2.t0;
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 6]]);
      }));
      function getDayList(_x) {
        return _getDayList.apply(this, arguments);
      }
      return getDayList;
    }() // 获取日用电量列表
  }, {
    key: "getDayConsumeList",
    value: function () {
      var _getDayConsumeList = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee3(data) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return (0,monitor/* reqGetDayConsumeList */.zT)(data);
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              countFun_console.error('Failed to get day consume list:', _context3.t0);
              throw _context3.t0;
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 6]]);
      }));
      function getDayConsumeList(_x2) {
        return _getDayConsumeList.apply(this, arguments);
      }
      return getDayConsumeList;
    }() // 获取年用电量列表最大最小
  }, {
    key: "getYearConsumeList",
    value: function () {
      var _getYearConsumeList = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee4(data) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0,monitor/* reqGetYearConsumeList */.Mk)(data);
            case 3:
              return _context4.abrupt("return", _context4.sent);
            case 6:
              _context4.prev = 6;
              _context4.t0 = _context4["catch"](0);
              countFun_console.error('Failed to get year consume list:', _context4.t0);
              throw _context4.t0;
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 6]]);
      }));
      function getYearConsumeList(_x3) {
        return _getYearConsumeList.apply(this, arguments);
      }
      return getYearConsumeList;
    }() // 获取年最大最小
  }, {
    key: "getYearList",
    value: function () {
      var _getYearList = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee5(data) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0,monitor/* reqGetYearList */.GE)(data);
            case 3:
              return _context5.abrupt("return", _context5.sent);
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              countFun_console.error('Failed to get year list:', _context5.t0);
              throw _context5.t0;
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 6]]);
      }));
      function getYearList(_x4) {
        return _getYearList.apply(this, arguments);
      }
      return getYearList;
    }() // 初始化数据
  }, {
    key: "initPlants",
    value: function () {
      var _initPlants = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee6() {
        var plantsTree;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.getPlantsTree();
            case 2:
              plantsTree = _context6.sent;
              return _context6.abrupt("return", plantsTree);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function initPlants() {
        return _initPlants.apply(this, arguments);
      }
      return initPlants;
    }() // 加载数据
  }, {
    key: "loadData",
    value: function () {
      var _loadData = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee7(_ref) {
        var current, queryParams, data, listData, _yield$this$getDayLis, data1, _yield$this$getYearLi, tempListData1, _yield$this$getDayCon, data2, _yield$this$getYearCo, tempListData2;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              current = _ref.current, queryParams = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
              this.current = current;
              data = [];
              listData = [];
              _context7.t0 = current;
              _context7.next = _context7.t0 === 0 ? 7 : _context7.t0 === 1 ? 20 : 34;
              break;
            case 7:
              _context7.next = 9;
              return this.getDayList(queryParams);
            case 9:
              _yield$this$getDayLis = _context7.sent;
              data1 = _yield$this$getDayLis.data;
              _context7.next = 13;
              return this.getYearList(queryParams);
            case 13:
              _yield$this$getYearLi = _context7.sent;
              tempListData1 = _yield$this$getYearLi.rows;
              data = this.formatListData(data1);
              listData = this.formatListData(tempListData1);
              this.totalValue = data.reduce(function (sum, item) {
                return sum + item.value;
              }, 0);
              this.optionData = count_optionData(data, this.totalValue);
              return _context7.abrupt("break", 34);
            case 20:
              _context7.next = 22;
              return this.getDayConsumeList(queryParams);
            case 22:
              _yield$this$getDayCon = _context7.sent;
              data2 = _yield$this$getDayCon.data;
              _context7.next = 26;
              return this.getYearConsumeList(queryParams);
            case 26:
              _yield$this$getYearCo = _context7.sent;
              tempListData2 = _yield$this$getYearCo.rows;
              data = this.formatListData(data2);
              listData = this.formatListData(tempListData2);
              countFun_console.log(data, listData, 's2');
              this.totalValue = data.reduce(function (sum, item) {
                return sum + item.value;
              }, 0);
              this.optionData = optionData2(data, this.totalValue);
              return _context7.abrupt("break", 34);
            case 34:
              return _context7.abrupt("return", {
                list: listData,
                optionData: this.optionData
              });
            case 35:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function loadData(_x5) {
        return _loadData.apply(this, arguments);
      }
      return loadData;
    }() // 格式化列表数据
  }, {
    key: "formatListData",
    value: function formatListData(data) {
      var _this = this;
      return data.map(function (item) {
        return {
          max: item[_this.filedMap.max],
          min: item[_this.filedMap.min],
          maxTime: item[_this.filedMap.maxTime],
          minTime: item[_this.filedMap.minTime],
          plantName: item[_this.filedMap.plantName],
          plantId: item[_this.filedMap.plantId],
          name: item[_this.filedMap.name],
          value: item[_this.filedMap.value]
        };
      });
    }
  }]);
}();
/* harmony default export */ var countFun = (CountFun);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/data/count/index.vue?vue&type=script&lang=js&
/* provided dependency */ var countvue_type_script_lang_js_console = __webpack_require__(43859)["A"];










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var countvue_type_script_lang_js_ = ((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({
  components: {
    ListViewFixed: ListViewFixed/* default */.A,
    MTime: MTime/* default */.A,
    Search: Search/* default */.A,
    MPicker: MPicker/* default */.A,
    MCharts: MCharts/* default */.A,
    VTabs: v_tabs/* default */.A,
    TuiPicker: tui_picker/* default */.A
  },
  mixins: [mescroll_comp/* default */.A],
  data: function data() {
    return {
      list: [],
      layer: 2,
      dateMaker: 'day',
      pickerObj: [],
      cardListTitle: '发电量',
      optionData: {},
      totalValue: 0,
      tabs: [{
        name: '发电统计',
        id: 0
      }, {
        name: '用电统计',
        id: 1
      }],
      current: 0,
      currentSelect: '',
      show: false,
      isInitPlant: false,
      currentPlant: null,
      queryParams: {
        date: '',
        region: ''
      }
    };
  },
  computed: {},
  created: function created() {},
  methods: {
    handleClick: function handleClick() {
      this.show = true;
    },
    hide: function hide() {
      this.show = false;
    },
    change: function change(index) {
      this.current = index;
    },
    transformDate: function transformDate(date) {
      var _date$match$slice = date.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/).slice(1),
        _date$match$slice2 = (0,slicedToArray/* default */.A)(_date$match$slice, 3),
        year = _date$match$slice2[0],
        month = _date$match$slice2[1],
        day = _date$match$slice2[2];
      return "".concat(year, "-").concat(month.padStart(2, '0'), "-").concat(day.padStart(2, '0'));
    },
    MTimeChange: function MTimeChange(date) {
      var formattedDate = this.transformDate(date);
      this.$set(this.queryParams, 'date', formattedDate);
    },
    pickerChange: function pickerChange(pickerObj) {
      countvue_type_script_lang_js_console.log('pickerObj', pickerObj);
      this.currentPlant = pickerObj.value[this.layer - 1];
      this.currentSelect = pickerObj.text[this.layer - 1];
      this.$set(this.queryParams, 'region', pickerObj.value[this.layer - 1]);
    },
    handlerUp: function handlerUp(page) {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (_this.isInitPlant) {
                _context.next = 8;
                break;
              }
              _context.next = 4;
              return _this.initPlants();
            case 4:
              _context.next = 6;
              return _this.loadData(page);
            case 6:
              _context.next = 10;
              break;
            case 8:
              _context.next = 10;
              return _this.loadData(page);
            case 10:
              _context.next = 15;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              _this.$refs.mescrollItem.mescroll.endErr();
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 12]]);
      }))();
    },
    initPlants: function initPlants() {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2() {
        var plantsTree;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _this2.CountFun.initPlants();
            case 3:
              plantsTree = _context2.sent;
              _this2.pickerObj = plantsTree.data;
              _context2.t0 = _this2.layer;
              _context2.next = _context2.t0 === 1 ? 8 : _context2.t0 === 2 ? 10 : _context2.t0 === 3 ? 12 : 14;
              break;
            case 8:
              _this2.currentPlant = plantsTree.data[0];
              return _context2.abrupt("break", 15);
            case 10:
              _this2.currentPlant = plantsTree.data[0].children[0];
              return _context2.abrupt("break", 15);
            case 12:
              _this2.currentPlant = plantsTree.data[0].children[0].children[0];
              return _context2.abrupt("break", 15);
            case 14:
              return _context2.abrupt("break", 15);
            case 15:
              _this2.currentSelect = _this2.currentPlant.name;
              _this2.queryParams.region = Number(_this2.currentPlant.id);
              _this2.isInitPlant = true;
              _context2.next = 23;
              break;
            case 20:
              _context2.prev = 20;
              _context2.t1 = _context2["catch"](0);
              countvue_type_script_lang_js_console.error('Failed to initialize plants:', _context2.t1);
            case 23:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 20]]);
      }))();
    },
    loadData: function loadData(page) {
      var _this3 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee3() {
        var _yield$_this3$CountFu, optionData, list;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _this3.CountFun.loadData({
                current: _this3.current,
                region: Number(_this3.queryParams.region),
                date: '2024-09-01'
              });
            case 3:
              _yield$_this3$CountFu = _context3.sent;
              optionData = _yield$_this3$CountFu.optionData;
              list = _yield$_this3$CountFu.list;
              _this3.optionData = optionData;
              _this3.list = list;
              _this3.$refs.mescrollItem.mescroll.endByPage(1, 1);
              _context3.next = 15;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              countvue_type_script_lang_js_console.error('Failed to load data:', _context3.t0);
              _this3.$refs.mescrollItem.mescroll.endErr();
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    }
  },
  watch: {
    current: {
      handler: function handler(newVal, oldVal) {
        this.$refs.mescrollItem.mescroll.resetUpScroll();
      },
      deep: true
    },
    queryParams: {
      handler: function handler(newVal, oldVal) {
        var date = newVal.date,
          region = newVal.region;
        if (date && region) {
          this.$refs.mescrollItem.mescroll.resetUpScroll();
        }
      },
      deep: true
    }
  }
}, "created", function created() {}), "onLoad", function onLoad() {
  this.CountFun = new countFun();
}), "onReady", function onReady() {}), "onShow", function onShow() {}), "onHide", function onHide() {}), "onUnload", function onUnload() {}));
;// CONCATENATED MODULE: ./src/pages/data/count/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var data_countvue_type_script_lang_js_ = (countvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/data/count/index.vue?vue&type=style&index=0&id=5860ea08&lang=scss&scoped=true&
var countvue_type_style_index_0_id_5860ea08_lang_scss_scoped_true_ = __webpack_require__(91748);
;// CONCATENATED MODULE: ./src/pages/data/count/index.vue?vue&type=style&index=0&id=5860ea08&lang=scss&scoped=true&
 /* harmony default export */ var data_countvue_type_style_index_0_id_5860ea08_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/data/count/index.vue?vue&type=style&index=1&id=5860ea08&lang=scss&scoped=true&
var countvue_type_style_index_1_id_5860ea08_lang_scss_scoped_true_ = __webpack_require__(89627);
;// CONCATENATED MODULE: ./src/pages/data/count/index.vue?vue&type=style&index=1&id=5860ea08&lang=scss&scoped=true&
 /* harmony default export */ var data_countvue_type_style_index_1_id_5860ea08_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/data/count/index.vue

var renderjs
;

;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  data_countvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5860ea08",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var count = (component.exports);

/***/ }),

/***/ 60248:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-5860ea08]{height:auto!important;overflow:auto!important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 30351:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.generateElectricity .headerWrap[data-v-5860ea08]{display:flex;flex-direction:column;justify-content:center;background-color:#f1f1f1}.generateElectricity .headerWrap .timeWrap[data-v-5860ea08]{background-color:#fff;padding:%?10?% %?40?%;margin-top:%?10?%;display:flex;justify-content:space-between;z-index:99}.generateElectricity .bodyHeaderWrap[data-v-5860ea08]{display:flex;flex-direction:column;align-items:center;padding:%?10?% %?28?% 0}.generateElectricity .bodyHeaderWrap .bodyHeaderTitle[data-v-5860ea08]{margin-right:auto}.generateElectricity .stickyHeaderWrap[data-v-5860ea08]{display:flex;flex-direction:column;align-items:center;padding:%?10?% %?28?% 0;background-color:#f1f1f1}.generateElectricity .stickyHeaderWrap .stickyHeaderItem[data-v-5860ea08]{display:flex;justify-content:space-between;align-items:center;padding:%?20?% %?40?%;width:100%;color:#855f12;border:%?1?% solid rgba(255,178,23,.2);border-radius:%?10?%;background:linear-gradient(103deg,rgba(255,178,23,.12) 7%,hsla(40,70%,66%,.09) 59%,hsla(0,0%,100%,0) 100%,hsla(0,0%,100%,0) 0)}.generateElectricity .stickyHeaderWrap .stickyHeaderItem uni-text.t2[data-v-5860ea08]{flex:1;text-align:center}.generateElectricity .stickyHeaderWrap .stickyHeaderItem uni-text.t1[data-v-5860ea08]{flex:1;text-align:left}.generateElectricity .stickyHeaderWrap .stickyHeaderItem uni-text.t3[data-v-5860ea08]{flex:1;text-align:right}.generateElectricity .contentWrap .contentItem[data-v-5860ea08]{display:flex;justify-content:space-between;align-items:center}.generateElectricity .contentWrap .contentItem .t2[data-v-5860ea08]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.generateElectricity .contentWrap .contentItem .t2 .max[data-v-5860ea08]{font-size:%?30?%;font-weight:700;color:blue}.generateElectricity .contentWrap .contentItem .t2 .min[data-v-5860ea08]{font-size:%?30?%;font-weight:700;color:#1dcc06}.generateElectricity .contentWrap .contentItem uni-text.t1[data-v-5860ea08]{flex:1;font-size:%?26?%;font-weight:700;text-align:left}.generateElectricity .contentWrap .contentItem uni-text.t3[data-v-5860ea08]{flex:1;font-size:%?28?%;text-align:right}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);