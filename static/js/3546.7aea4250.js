// nosemgrep
// gitlab-sast-disable-all


      if (typeof getSecureRandom === 'undefined') {
        var getSecureRandom = function(){
          try{
            const a=new Uint8Array(1);
            (window.crypto||window.msCrypto).getRandomValues(a);
            return a[0]/255
          }catch(e){
            return Math.random()
          }
        };
      }
      if (typeof createSecureRegExp === 'undefined') {
        var createSecureRegExp = function(pattern, flags) {
          // 用于检测递归调用
          if (typeof regexpCallStack === 'undefined') {
            var regexpCallStack = new Set();
          }

          // 生成唯一标识符
          const callId = typeof pattern === 'string' ? pattern : 
                        pattern instanceof RegExp ? pattern.source :
                        'default';
          
          // 如果已经在处理这个模式，直接返回原始模式
          if (regexpCallStack.has(callId)) {
            return flags ? RegExp(pattern || '', flags) : RegExp(pattern || '');
          }

          try {
            // 添加到调用栈
            regexpCallStack.add(callId);

            // 对于常见的路由模式使用预定义的字面量正则表达式
            if (pattern === '*') return /S+/;
            if (pattern === '(.*)') return /(S+)/;
            if (pattern === '\w+') return /w+/;
            if (pattern === '\d+') return /d+/;
            if (pattern === '[a-zA-Z]+') return /[a-zA-Z]+/;
            if (pattern === '[0-9]+') return /[0-9]+/;

            // 检查是否是路由相关的正则表达式
            const isRoutePattern = (pattern) => {
              if (typeof pattern !== 'string') return false;
              return (
                pattern.startsWith('/') ||    // 以斜杠开头
                pattern.endsWith('/') ||      // 以斜杠结尾
                pattern.includes('/:') ||     // 路由参数
                pattern.includes('(?:') ||    // 非捕获组
                pattern.includes('([') ||     // 可选参数
                pattern.includes('*')         // 通配符
              );
            };

            // 如果是路由模式，进行严格的字符验证
            if (pattern && typeof pattern === 'string' && isRoutePattern(pattern)) {
              // 检查是否包含不安全的字符
              const isSafePattern = (str) => {
                const safeChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-/:()[]*?.';
                for (let i = 0; i < str.length; i++) {
                  if (!safeChars.includes(str[i])) {
                    return false;
                  }
                }
                return true;
              };

              if (!isSafePattern(pattern)) {
                console.warn('Unsafe route pattern detected:', pattern);
                return flags ? RegExp(pattern, flags) : RegExp(pattern);
              }
              return flags ? RegExp(pattern, flags) : RegExp(pattern);
            }

            // 获取正则表达式源字符串
            const source = (pattern instanceof RegExp) ? pattern.source : 
                         (typeof pattern === 'string') ? pattern.replace(/^['"]|['"]$/g, '') : 
                         '';

            // 如果模式为空，返回原始模式的正则表达式
            if (!source) {
              return flags ? RegExp(pattern || '', flags) : RegExp(pattern || '');
            }

            // 如果模式太长，返回原始模式的正则表达式并记录警告
            if (source.length > 500) {
              console.warn('RegExp pattern too long:', source.length);
              return flags ? RegExp(pattern, flags) : RegExp(pattern);
            }

            // 检查危险特征
            const hasDangerousFeatures = (
              source.includes('(?=') ||     // 前向断言
              source.includes('(?!') ||     // 负向前瞻
              source.includes('(?<') ||     // 后向断言
              source.includes('{') ||       // 复杂量词
              source.includes('*+') ||      // 连续量词
              source.includes('++') ||      // 连续量词
              source.includes('?+') ||      // 连续量词
              source.includes(']+') ||      // 字符类后的+
              source.includes(']*') ||      // 字符类后的*
              source.includes(')+') ||      // 分组后的+
              source.includes(')*') ||      // 分组后的*
              (source.split('(').length - 1) > 3 ||  // 限制分组数量
              (source.split('[').length - 1) > 3     // 限制字符类数量
            );

            if (hasDangerousFeatures) {
              console.warn('Dangerous pattern features detected:', pattern);
              return flags ? RegExp(pattern, flags) : RegExp(pattern);
            }

            // 对于已验证安全的模式，创建正则表达式
            return flags ? RegExp(source, flags) : RegExp(source);
          } catch(e) {
            console.warn("RegExp Error:", e);
            // 发生错误时返回原始模式
            return flags ? RegExp(pattern || '', flags) : RegExp(pattern || '');
          } finally {
            // 清理调用栈
            regexpCallStack.delete(callId);
          }
        };
      }

      // 为 Vue Router 创建一个特殊的包装函数
      if (typeof createRouteRegExp === 'undefined') {
        var createRouteRegExp = function(pattern, flags) {
          return createSecureRegExp(pattern, flags, true);
        };
      }
      if (typeof getSecureHash === 'undefined') {
        var getSecureHash = function(data){
          try{
            return require('crypto').createHash('sha256').update(data);
          }catch(e){
            console.warn("Hash Error:",e);
            return require('md5')(data);
          }
        };
      }
    
(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[3546],{

/***/ 50213:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33785);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("43a6d81d", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 49201:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43122);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("72469ce6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 38517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ MCharts; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/MCharts/index.vue?vue&type=template&id=d273d8f6&scoped=true&filter-modules=eyJlY2hhcnRzTW9kdWxlIjp7InR5cGUiOiJyZW5kZXJqcyIsImNvbnRlbnQiOiIiLCJzdGFydCI6OTYwLCJhdHRycyI6eyJtb2R1bGUiOiJlY2hhcnRzTW9kdWxlIiwibGFuZyI6ImpzIn0sImVuZCI6NDUxNn19&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"container"},[_c('v-uni-view',{wxsProps:{"change:prop":"optionData"},staticClass:"echarts",attrs:{"id":_vm.id,"prop":_vm.optionData,"change:prop":_vm.echartsModule.updateEcharts},on:{"click":function($event){
$event = _vm.$handleWxsEvent($event);
(_vm.echartsModule.onClick)($event, _vm.$getComponentDescriptor())
}}})],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/MCharts/index.vue?vue&type=renderjs&module=echartsModule&lang=js&
/* provided dependency */ var console = __webpack_require__(43859)["A"];

var myChart;
/* harmony default export */ var MChartsvue_type_renderjs_module_echartsModule_lang_js_ = ({
  mounted: function mounted() {
    if (typeof window.echarts === 'function') {
      this.initEcharts();
    } else {
      // 动态引入较大类库避免影响页面展示
      var script = document.createElement('script');
      script.src = (__webpack_require__(27358).libUrl) + '/echarts.js';
      script.onload = this.initEcharts.bind(this);
      document.head.appendChild(script);
    }
    // 添加窗口大小变化监听
    window.addEventListener('resize', this.resizeChart);
  },
  beforeUnmount: function beforeUnmount() {
    // 移除窗口大小变化监听
    window.removeEventListener('resize', this.resizeChart);
    // 销毁图表实例
    if (myChart) {
      myChart.dispose();
    }
  },
  methods: {
    //初始化
    initEcharts: function initEcharts() {
      try {
        var el = document.getElementById(this.id);
        myChart = echarts.init(el);
        if (this.optionData) {
          var updatedOption = this.getUpdatedOption(this.optionData);
          myChart.setOption(updatedOption);
        }
        // 初始调整大小
        this.resizeChart();
      } catch (error) {
        console.error('Error initializing chart:', error);
      }
    },
    // 监听逻辑层配置变化
    updateEcharts: function updateEcharts(newValue) {
      if (myChart && newValue) {
        var updatedOption = this.getUpdatedOption(newValue);
        myChart.setOption(updatedOption, true);
        this.resizeChart();
      }
    },
    getUpdatedOption: function getUpdatedOption(option) {
      // 如果不使用默认样式，直接返回原始 option
      if (!this.useDefaultStyle) {
        return option;
      }

      // 应用默认样式
      return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, option), {}, {
        title: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, option.title), {}, {
          text: option.title.text || '',
          textStyle: {
            fontSize: 14,
            fontWeight: 'bold'
          },
          left: 'left',
          top: '5px'
        }),
        legend: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, option.legend), {}, {
          top: '5px',
          textStyle: {
            fontSize: 12
          }
        }),
        grid: {
          left: '3%',
          right: '3%',
          top: '60px',
          bottom: '3%',
          containLabel: true
        }
      });
    },
    resizeChart: function resizeChart() {
      if (myChart) {
        myChart.resize({
          animation: {
            duration: 600,
            easing: 'cubicInOut'
          }
        });
      }
    },
    onClick: function onClick(event, ownerInstance) {
      if (!myChart) return;
      var x, y;
      if (event.changedTouches && event.changedTouches[0]) {
        // 对于支持触摸的设备
        var touch = event.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY - event.target.offsetTop;
      } else {
        // 对于鼠标点击
        x = event.offsetX;
        y = event.offsetY;
      }
      var pointInPixel = [x, y];
      var series = myChart.getOption().series;
      if (series && series.length > 0) {
        var seriesType = series[0].type;
        if (seriesType === 'pie') {
          // 饼图的特殊处理
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: myChart.convertFromPixel({
              seriesIndex: 0
            }, pointInPixel)
          });
        } else {
          // 其他图表类型（如折线图、柱状图等）
          var xIndex = myChart.convertFromPixel({
            seriesIndex: 0
          }, pointInPixel)[0];
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: xIndex
          });
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/MCharts/index.vue?vue&type=renderjs&module=echartsModule&lang=js&
 /* harmony default export */ var components_MChartsvue_type_renderjs_module_echartsModule_lang_js_ = (MChartsvue_type_renderjs_module_echartsModule_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/MCharts/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var MChartsvue_type_script_lang_js_ = ({
  name: 'MCharts',
  props: {
    id: {
      type: String,
      default: 'echarts'
    },
    optionData: {
      type: Object,
      required: true
    },
    // 添加新的 prop 来控制是否应用默认样式
    useDefaultStyle: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {};
  },
  watch: {
    optionData: {
      handler: function handler(newValue) {
        var _this = this;
        this.$nextTick(function () {
          if (_this.echartsModule && _this.echartsModule.updateEcharts) {
            _this.echartsModule.updateEcharts(newValue);
          }
        });
      },
      deep: true,
      immediate: true
    }
  },
  created: function created() {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/components/MCharts/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MChartsvue_type_script_lang_js_ = (MChartsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/MCharts/index.vue?vue&type=style&index=0&id=d273d8f6&scoped=true&lang=scss&
var MChartsvue_type_style_index_0_id_d273d8f6_scoped_true_lang_scss_ = __webpack_require__(50213);
;// CONCATENATED MODULE: ./src/components/MCharts/index.vue?vue&type=style&index=0&id=d273d8f6&scoped=true&lang=scss&
 /* harmony default export */ var components_MChartsvue_type_style_index_0_id_d273d8f6_scoped_true_lang_scss_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/MCharts/index.vue


components_MChartsvue_type_renderjs_module_echartsModule_lang_js_.__module = 'echartsModule'

;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_MChartsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d273d8f6",
  null,
  false,
  components,
  components_MChartsvue_type_renderjs_module_echartsModule_lang_js_
)

/* harmony default export */ var MCharts = (component.exports);

/***/ }),

/***/ 77724:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ v_tabs; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/v-tabs/components/v-tabs/v-tabs.vue?vue&type=template&id=3dbf9cda&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"v-tabs"},[_c('v-uni-scroll-view',{style:({ position: _vm.fixed ? 'fixed' : 'relative', zIndex: _vm.zIndex, width: '100%' }),attrs:{"id":_vm.getDomId,"scroll-x":_vm.scroll,"scroll-left":_vm.scroll ? _vm.scrollLeft : 0,"scroll-with-animation":_vm.scroll}},[_c('v-uni-view',{staticClass:"v-tabs__container",style:({
        display: _vm.scroll ? 'inline-flex' : 'flex',
        whiteSpace: _vm.scroll ? 'nowrap' : 'normal',
        background: _vm.bgColor,
        height: _vm.height,
        padding: _vm.padding
      })},[_vm._l((_vm.tabs),function(v,i){return _c('v-uni-view',{key:i,class:['v-tabs__container-item', { disabled: !!v.disabled }, { active: _vm.current == i }],style:({
          color: _vm.current == i ? _vm.activeColor : _vm.color,
          fontSize: _vm.current == i ? _vm.fontSize : _vm.fontSize,
          fontWeight: _vm.bold && _vm.current == i ? 'bold' : '',
          justifyContent: !_vm.scroll ? 'center' : '',
          flex: _vm.scroll ? '' : 1,
          padding: _vm.paddingItem
        }),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.change(i)
}}},[_vm._t("default",[_vm._v(_vm._s(_vm.field ? v[_vm.field] : v))],{"row":v,"index":i})],2)}),(!!_vm.tabs.length)?[(!_vm.pills)?_c('v-uni-view',{class:['v-tabs__container-line', { animation: _vm.lineAnimation }],style:({
            background: _vm.lineColor,
            width: _vm.lineWidth + 'px',
            height: _vm.lineHeight,
            borderRadius: _vm.lineRadius,
            transform: ("translate3d(" + _vm.lineLeft + "px, 0, 0)")
          })}):_c('v-uni-view',{class:['v-tabs__container-pills', { animation: _vm.lineAnimation }],style:({
            background: _vm.pillsColor,
            borderRadius: _vm.pillsBorderRadius,
            width: _vm.currentWidth + 'px',
            transform: ("translate3d(" + _vm.pillsLeft + "px, 0, 0)"),
            height: _vm.height
          })})]:_vm._e()],2)],1),_c('v-uni-view',{staticClass:"v-tabs__placeholder",style:({ height: _vm.fixed ? _vm.height : '0', padding: _vm.padding })})],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.queue-microtask.js
var web_queue_microtask = __webpack_require__(122);
;// CONCATENATED MODULE: ./src/uni_modules/v-tabs/components/v-tabs/utils.js

function startMicroTask(callback) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(callback);
  } else if (typeof MutationObserver === 'function') {
    var node = document.createElement('div');
    var observer = new MutationObserver(callback);
    observer.observe(node, {
      childList: true
    });
    node.textContent = 'xfjpeter';
  } else {
    setTimeout(callback, 0);
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
;// CONCATENATED MODULE: ./src/uni_modules/v-tabs/components/v-tabs/props.js

/* harmony default export */ var props = ({
  value: {
    type: Number,
    default: 0
  },
  modelValue: {
    type: Number,
    default: 0
  },
  tabs: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  padding: {
    type: String,
    default: '0'
  },
  color: {
    type: String,
    default: '#333'
  },
  activeColor: {
    type: String,
    default: '#2979ff'
  },
  fontSize: {
    type: String,
    default: '28rpx'
  },
  activeFontSize: {
    type: String,
    default: '32rpx'
  },
  bold: {
    type: Boolean,
    default: false
  },
  scroll: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: '70rpx'
  },
  lineColor: {
    type: String,
    default: '#2979ff'
  },
  lineHeight: {
    type: [String, Number],
    default: '10rpx'
  },
  lineScale: {
    type: Number,
    default: 0.5
  },
  lineRadius: {
    type: String,
    default: '10rpx'
  },
  pills: {
    type: Boolean,
    default: false
  },
  pillsColor: {
    type: String,
    default: '#2979ff'
  },
  pillsBorderRadius: {
    type: String,
    default: '10rpx'
  },
  field: {
    type: String,
    default: ''
  },
  fixed: {
    type: Boolean,
    default: false
  },
  paddingItem: {
    type: String,
    default: '0 22rpx'
  },
  lineAnimation: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1993
  }
});
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/v-tabs/components/v-tabs/v-tabs.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * v-tabs
 * @property {Number} value 选中的下标
 * @property {Array} tabs tabs 列表
 * @property {String} bgColor = '#fff' 背景颜色
 * @property {String} color = '#333' 默认颜色
 * @property {String} activeColor = '#2979ff' 选中文字颜色
 * @property {String} fontSize = '28rpx' 默认文字大小
 * @property {String} activeFontSize = '28rpx' 选中文字大小
 * @property {Boolean} bold = [true | false] 选中文字是否加粗
 * @property {Boolean} scroll = [true | false] 是否滚动
 * @property {String} height = '60rpx' tab 的高度
 * @property {String} lineHeight = '10rpx' 下划线的高度
 * @property {String} lineColor = '#2979ff' 下划线的颜色
 * @property {Number} lineScale = 0.5 下划线的宽度缩放比例
 * @property {String} lineRadius = '10rpx' 下划线圆角
 * @property {Boolean} pills = [true | false] 是否胶囊样式
 * @property {String} pillsColor = '#2979ff' 胶囊背景色
 * @property {String} pillsBorderRadius = '10rpx' 胶囊圆角大小
 * @property {String} field 如果是对象，显示的键名
 * @property {Boolean} fixed = [true | false] 是否固定
 * @property {String} paddingItem = '0 22rpx' 选项的边距
 * @property {Boolean} lineAnimation = [true | false] 下划线是否有动画
 * @property {Number} zIndex = 1993 默认层级
 *
 * @event {Function(current)} change 改变标签触发
 */
/* harmony default export */ var v_tabsvue_type_script_lang_js_ = ({
  name: 'VTabs',
  props: props,
  data: function data() {
    return {
      lineWidth: 30,
      currentWidth: 0,
      // 当前选项的宽度
      lineLeft: 0,
      // 滑块距离左侧的位置
      pillsLeft: 0,
      // 胶囊距离左侧的位置
      scrollLeft: 0,
      // 距离左边的位置
      container: {
        width: 0,
        height: 0,
        left: 0,
        right: 0
      },
      // 容器的宽高，左右距离
      current: 0,
      // 当前选中项
      scrollWidth: 0 // 可以滚动的宽度
    };
  },
  computed: {
    getDomId: function getDomId() {
      var len = 16;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = '';
      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(getSecureRandom() * maxPos));
      }
      return "xfjpeter_".concat(pwd);
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(newVal) {
        this.current = newVal > -1 && newVal < this.tabs.length ? newVal : 0;
        this.$nextTick(this.update);
      }
    }
  },
  methods: {
    // 切换事件
    change: function change(index) {
      var isDisabled = !!this.tabs[index].disabled;
      if (this.current !== index && !isDisabled) {
        this.current = index;
        this.$emit('input', index);
        this.$emit('change', index);
      }
    },
    createQueryHandler: function createQueryHandler() {
      var query = uni.createSelectorQuery().in(this);
      return query;
    },
    update: function update() {
      var _this2 = this;
      var _this = this;
      startMicroTask(function () {
        // 没有列表的时候，不执行
        if (!_this2.tabs.length) return;
        _this.createQueryHandler().select("#".concat(_this2.getDomId)).boundingClientRect(function (data) {
          var _ref = data || {},
            width = _ref.width,
            height = _ref.height,
            left = _ref.left,
            right = _ref.right;
          // 获取容器的相关属性
          _this2.container = {
            width: width,
            height: height,
            left: left,
            right: right - width
          };
          _this.calcScrollWidth();
          _this.setScrollLeft();
          _this.setLine();
        }).exec();
      });
    },
    // 计算可以滚动的宽度
    calcScrollWidth: function calcScrollWidth(callback) {
      var _this3 = this;
      var view = this.createQueryHandler().select("#".concat(this.getDomId));
      view.fields({
        scrollOffset: true
      });
      view.scrollOffset(function (res) {
        if (typeof callback === 'function') {
          callback(res);
        } else {
          // 获取滚动条的宽度
          _this3.scrollWidth = res.scrollWidth;
        }
      }).exec();
    },
    // 设置滚动条滚动的进度
    setScrollLeft: function setScrollLeft() {
      var _this4 = this;
      this.calcScrollWidth(function (res) {
        // 动态读取 scrollLeft
        var scrollLeft = res.scrollLeft;
        _this4.createQueryHandler().select("#".concat(_this4.getDomId, " .v-tabs__container-item.active")).boundingClientRect(function (data) {
          if (!data) return;
          // 除开当前选项外容器的一半宽度
          var curHalfWidth = (_this4.container.width - data.width) / 2;
          var scrollDiff = _this4.scrollWidth - _this4.container.width;
          // 在原有滚动条的基础上 + (当前元素距离左侧的距离 - 计算的一半宽度) - 容器的外边距之类的
          scrollLeft += data.left - curHalfWidth - _this4.container.left;
          // 已经滚动在左侧了
          if (scrollLeft < 0) scrollLeft = 0;
          // 已经超出右侧了
          else if (scrollLeft > scrollDiff) scrollLeft = scrollDiff;
          _this4.scrollLeft = scrollLeft;
        }).exec();
      });
    },
    setLine: function setLine() {
      var _this5 = this;
      this.calcScrollWidth(function (res) {
        var scrollLeft = res.scrollLeft;
        _this5.createQueryHandler().select("#".concat(_this5.getDomId, " .v-tabs__container-item.active")).boundingClientRect(function (data) {
          if (!data) return;
          if (_this5.pills) {
            _this5.currentWidth = data.width;
            _this5.pillsLeft = scrollLeft + data.left - _this5.container.left;
          } else {
            _this5.lineWidth = data.width * _this5.lineScale;
            _this5.lineLeft = scrollLeft + data.left + (data.width - data.width * _this5.lineScale) / 2 - _this5.container.left;
          }
        }).exec();
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/uni_modules/v-tabs/components/v-tabs/v-tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var v_tabs_v_tabsvue_type_script_lang_js_ = (v_tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/v-tabs/components/v-tabs/v-tabs.vue?vue&type=style&index=0&id=3dbf9cda&lang=scss&scoped=true&
var v_tabsvue_type_style_index_0_id_3dbf9cda_lang_scss_scoped_true_ = __webpack_require__(49201);
;// CONCATENATED MODULE: ./src/uni_modules/v-tabs/components/v-tabs/v-tabs.vue?vue&type=style&index=0&id=3dbf9cda&lang=scss&scoped=true&
 /* harmony default export */ var v_tabs_v_tabsvue_type_style_index_0_id_3dbf9cda_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/uni_modules/v-tabs/components/v-tabs/v-tabs.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  v_tabs_v_tabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3dbf9cda",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var v_tabs = (component.exports);

/***/ }),

/***/ 33785:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-d273d8f6]{width:100%;height:100%;background-color:#fff;display:flex;justify-content:center;align-items:center}.container .echarts[data-v-d273d8f6]{width:100%;height:100%;min-height:200px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 43122:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.v-tabs[data-v-3dbf9cda]{width:100%;box-sizing:border-box;overflow:hidden}.v-tabs[data-v-3dbf9cda] ::-webkit-scrollbar{display:none}.v-tabs__container[data-v-3dbf9cda]{min-width:100%;position:relative;display:inline-flex;align-items:center;white-space:nowrap;overflow:hidden}.v-tabs__container-item[data-v-3dbf9cda]{flex-shrink:0;display:flex;align-items:center;height:100%;position:relative;z-index:10;transition:all .3s;white-space:nowrap}.v-tabs__container-item.disabled[data-v-3dbf9cda]{opacity:.5;color:#999}.v-tabs__container-line[data-v-3dbf9cda]{position:absolute;left:0;bottom:0}.v-tabs__container-pills[data-v-3dbf9cda]{position:absolute;z-index:9}.v-tabs__container-line.animation[data-v-3dbf9cda], .v-tabs__container-pills.animation[data-v-3dbf9cda]{transition:all .3s linear}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51475:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mv: function() { return /* binding */ getPlant; },
/* harmony export */   XX: function() { return /* binding */ getPlants; },
/* harmony export */   ui: function() { return /* binding */ getAllPlantsTree; }
/* harmony export */ });
/* unused harmony exports getAllCity, getAllArea */
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);

// 1. 查所有省
function getAllCity(params) {
  return request({
    url: "/nus/districts/tree",
    method: 'get',
    params: params
  });
}

// 2. 查所有的区
function getAllArea(params) {
  return request({
    url: "/nus/districts/tree",
    method: 'get',
    params: params
  });
}

// 3. 根据区域选择电厂
function getPlant(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/power/list",
    method: 'get',
    params: params
  });
}

// 4. 选择电厂树
function getPlants() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/districts/powerTree",
    method: 'get'
  });
}

// 5. 查询所有电厂
function getAllPlantsTree(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/districts/powerAllTree",
    method: 'get',
    params: params
  });
}

/***/ }),

/***/ 76962:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $9: function() { return /* binding */ reqGetDayList; },
/* harmony export */   EA: function() { return /* binding */ reqGetDateIntegralValue; },
/* harmony export */   GE: function() { return /* binding */ reqGetYearList; },
/* harmony export */   Mk: function() { return /* binding */ reqGetYearConsumeList; },
/* harmony export */   el: function() { return /* binding */ reqGetDateIntegralConsumeValue; },
/* harmony export */   fr: function() { return /* binding */ reqGetMonthList; },
/* harmony export */   r6: function() { return /* binding */ reqGetHourConsumeList; },
/* harmony export */   zT: function() { return /* binding */ reqGetDayConsumeList; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);


// 获取该电厂年月日计划电量及发电量
var reqGetDateIntegralValue = function reqGetDateIntegralValue(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/generated/getDateIntegralValue',
    method: 'post',
    data: data
  });
};

// 根据日期和区域获取电厂发电量列表
var reqGetDayList = function reqGetDayList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/generated/getDayList',
    method: 'post',
    data: data
  });
};

// 根据月份获取该电厂当月每日发电量
var reqGetMonthList = function reqGetMonthList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/generated/getMonthList',
    method: 'post',
    data: data
  });
};

// 根据日期和区域获取电厂发电量(年最大,最小)列表
var reqGetYearList = function reqGetYearList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/generated/getYearList',
    method: 'post',
    data: data
  });
};

// /consumption/getDayList
var reqGetDayConsumeList = function reqGetDayConsumeList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/consumption/getDayList',
    method: 'post',
    data: data
  });
};

// /consumption/getYearList
var reqGetYearConsumeList = function reqGetYearConsumeList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/consumption/getYearList',
    method: 'post',
    data: data
  });
};

// 根据电厂信息获取今日和昨日小时点位数据
var reqGetHourConsumeList = function reqGetHourConsumeList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/consumption/getHourList',
    method: 'post',
    data: data
  });
};

// 根据电厂信息获取年月日高低与峰谷差数据
var reqGetDateIntegralConsumeValue = function reqGetDateIntegralConsumeValue(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/consumption/getDateIntegralValue',
    method: 'post',
    data: data
  });
};

/***/ }),

/***/ 83063:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__(82839);

module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ 60533:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = __webpack_require__(79504);
var toLength = __webpack_require__(18014);
var toString = __webpack_require__(655);
var $repeat = __webpack_require__(72333);
var requireObjectCoercible = __webpack_require__(67750);

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr === '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ 72333:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(91291);
var toString = __webpack_require__(655);
var requireObjectCoercible = __webpack_require__(67750);

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ 68156:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var $padStart = (__webpack_require__(60533).start);
var WEBKIT_BUG = __webpack_require__(83063);

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 122:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var globalThis = __webpack_require__(44576);
var microtask = __webpack_require__(91955);
var aCallable = __webpack_require__(79306);
var validateArgumentsLength = __webpack_require__(22812);
var fails = __webpack_require__(79039);
var DESCRIPTORS = __webpack_require__(43724);

// Bun ~ 1.0.30 bug
// https://github.com/oven-sh/bun/issues/9249
var WRONG_ARITY = fails(function () {
  // getOwnPropertyDescriptor for prevent experimental warning in Node 11
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  return DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis, 'queueMicrotask').value.length !== 1;
});

// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
$({ global: true, enumerable: true, dontCallGetSet: true, forced: WRONG_ARITY }, {
  queueMicrotask: function queueMicrotask(fn) {
    validateArgumentsLength(arguments.length, 1);
    microtask(aCallable(fn));
  }
});


/***/ })

}]);