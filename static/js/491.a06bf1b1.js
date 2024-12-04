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
    
"use strict";
(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[491],{

/***/ 26081:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "appid": ""
});

/***/ }),

/***/ 10527:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Js; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(12773);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(65361);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(65376);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(16259);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(35305);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js + 1 modules
var callSuper = __webpack_require__(57756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(91913);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__(16280);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__(76918);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__(36033);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(47764);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(62953);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4150);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(97130);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(38781);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js




function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js
var construct = __webpack_require__(89848);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js










function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return (0,construct/* default */.A)(t, arguments, (0,getPrototypeOf/* default */.A)(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,setPrototypeOf/* default */.A)(Wrapper, t);
  }, _wrapNativeSuper(t);
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(63065);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51729);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(52675);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(89463);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(50113);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(23418);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.last-index-of.js
var es_array_last_index_of = __webpack_require__(8921);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(62062);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(72712);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__(94490);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(34782);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(26910);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(54554);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.constructor.js
var es_array_buffer_constructor = __webpack_require__(54743);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.slice.js
var es_array_buffer_slice = __webpack_require__(11745);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.detached.js
var es_array_buffer_detached = __webpack_require__(16573);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer.js
var es_array_buffer_transfer = __webpack_require__(78100);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js
var es_array_buffer_transfer_to_fixed_length = __webpack_require__(77936);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.global-this.js
var es_global_this = __webpack_require__(55081);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.max-safe-integer.js
var es_number_max_safe_integer = __webpack_require__(64601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__(84185);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(58940);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(84864);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.dot-all.js
var es_regexp_dot_all = __webpack_require__(57465);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.flags.js
var es_regexp_flags = __webpack_require__(69479);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__(87745);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(90906);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(21699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(71761);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(5746);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(42762);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__(21489);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.at.js
var es_typed_array_at = __webpack_require__(48140);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.copy-within.js
var es_typed_array_copy_within = __webpack_require__(81630);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.every.js
var es_typed_array_every = __webpack_require__(72170);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.fill.js
var es_typed_array_fill = __webpack_require__(75044);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.filter.js
var es_typed_array_filter = __webpack_require__(69539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find.js
var es_typed_array_find = __webpack_require__(31694);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-index.js
var es_typed_array_find_index = __webpack_require__(89955);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-last.js
var es_typed_array_find_last = __webpack_require__(21903);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.find-last-index.js
var es_typed_array_find_last_index = __webpack_require__(91134);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.for-each.js
var es_typed_array_for_each = __webpack_require__(33206);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
var es_typed_array_includes = __webpack_require__(44496);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.index-of.js
var es_typed_array_index_of = __webpack_require__(66651);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.iterator.js
var es_typed_array_iterator = __webpack_require__(12887);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.join.js
var es_typed_array_join = __webpack_require__(19369);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.last-index-of.js
var es_typed_array_last_index_of = __webpack_require__(66812);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.map.js
var es_typed_array_map = __webpack_require__(8995);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce.js
var es_typed_array_reduce = __webpack_require__(31575);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reduce-right.js
var es_typed_array_reduce_right = __webpack_require__(36072);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.reverse.js
var es_typed_array_reverse = __webpack_require__(88747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.set.js
var es_typed_array_set = __webpack_require__(28845);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.slice.js
var es_typed_array_slice = __webpack_require__(29423);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.some.js
var es_typed_array_some = __webpack_require__(57301);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__(373);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
var es_typed_array_to_locale_string = __webpack_require__(41405);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-reversed.js
var es_typed_array_to_reversed = __webpack_require__(37467);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-sorted.js
var es_typed_array_to_sorted = __webpack_require__(44732);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
var es_typed_array_to_string = __webpack_require__(33684);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.with.js
var es_typed_array_with = __webpack_require__(79577);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(98992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__(54520);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.find.js
var esnext_iterator_find = __webpack_require__(72577);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(81454);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.reduce.js
var esnext_iterator_reduce = __webpack_require__(8872);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.some.js
var esnext_iterator_some = __webpack_require__(37550);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.atob.js
var web_atob = __webpack_require__(2945);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.constructor.js
var web_dom_exception_constructor = __webpack_require__(55815);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__(64979);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.to-string-tag.js
var web_dom_exception_to_string_tag = __webpack_require__(79739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.self.js
var web_self = __webpack_require__(13611);
;// CONCATENATED MODULE: ./src/pages.json?{"type":"origin-pages-json"}
/* harmony default export */ var pages_type_origin_pages_json_ = ({
  "easycom": {
    "autoscan": true,
    "custom": {
      "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue",
      "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
    }
  },
  "pages": [{
    "path": "pages/login",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/register",
    "style": {
      "navigationBarTitleText": "注册"
    }
  }, {
    "path": "pages/work/index",
    "meta": {
      "loginAuth": true
    },
    "style": {
      "navigationBarTitleText": "",
      "app-plus": {
        "titleNView": {
          "buttons": [{
            "text": "",
            "fontSrc": "./static/font/iconfont.ttf",
            "fontSize": "22px",
            "color": "#f4f8fb"
          }]
        }
      }
    }
  }, {
    "path": "pages/index/index",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/mine/index",
    "style": {
      "navigationBarTitleText": "我的"
    }
  }, {
    "path": "pages/mine/avatar/index",
    "style": {
      "navigationBarTitleText": "修改头像"
    }
  }, {
    "path": "pages/mine/info/index",
    "style": {
      "navigationBarTitleText": "个人信息"
    }
  }, {
    "path": "pages/mine/info/edit",
    "style": {
      "navigationBarTitleText": "编辑资料"
    }
  }, {
    "path": "pages/mine/pwd/index",
    "style": {
      "navigationBarTitleText": "修改密码"
    }
  }, {
    "path": "pages/mine/setting/index",
    "style": {
      "navigationBarTitleText": "应用设置"
    }
  }, {
    "path": "pages/mine/help/index",
    "style": {
      "navigationBarTitleText": "常见问题"
    }
  }, {
    "path": "pages/mine/about/index",
    "style": {
      "navigationBarTitleText": "关于我们"
    }
  }, {
    "path": "pages/404",
    "name": '[REDACTED]',
    "style": {
      "navigationBarTitleText": "页面不存在"
    }
  }, {
    "path": "pages/onlinePreView",
    "name": '[REDACTED]',
    "style": {
      "navigationBarTitleText": "预览"
    }
  }, {
    "path": "pages/common/webview/index",
    "style": {
      "navigationBarTitleText": "浏览网页"
    }
  }, {
    "path": "pages/common/textview/index",
    "style": {
      "navigationBarTitleText": "浏览文本"
    }
  }, {
    "path": "pages/orderPower/index",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/phoneBook/index",
    "style": {
      "navigationBarTitleText": "电话簿"
    }
  }, {
    "path": "pages/personManagement/index/index",
    "style": {
      "navigationBarTitleText": "人员管理"
    }
  }, {
    "path": "pages/personManagement/gridPersonnelDetails/index",
    "style": {
      "navigationBarTitleText": "gridPersonnelDetails"
    }
  }, {
    "path": "pages/personManagement/gridPersonnelEvaluation/index",
    "style": {
      "navigationBarTitleText": "电网人员评估"
    }
  }, {
    "path": "pages/user/info/index",
    "style": {
      "navigationBarTitleText": "电厂人员基础信息维护"
    }
  }, {
    "path": "pages/user/skill/index",
    "style": {
      "navigationBarTitleText": "技能评估维护"
    }
  }, {
    "path": "pages/user/post/index",
    "style": {
      "navigationBarTitleText": "岗位设置维护"
    }
  }, {
    "path": "pages/user/duty/index",
    "style": {
      "navigationBarTitleText": "值班表管理"
    }
  }, {
    "path": "pages/user/address/index",
    "style": {
      "navigationBarTitleText": "通讯录管理维护"
    }
  }, {
    "path": "pages/run/duty/index",
    "style": {
      "navigationBarTitleText": "当日值班人员"
    }
  }, {
    "path": "pages/run/duty/face",
    "style": {
      "navigationBarTitleText": "值班表人脸识别"
    }
  }, {
    "path": "pages/run/duty/success",
    "style": {
      "navigationBarTitleText": "打卡成功"
    }
  }, {
    "path": "pages/user/info/detail/index",
    "style": {
      "navigationBarTitleText": "人员信息详情"
    }
  }, {
    "path": "pages/user/skill/detail/index",
    "style": {
      "navigationBarTitleText": "人员评估详情"
    }
  }, {
    "path": "pages/selectPlant/index",
    "style": {
      "navigationBarTitleText": "选择电厂"
    }
  }, {
    "path": "pages/user/info/userList/index",
    "style": {
      "navigationBarTitleText": "电厂人员信息详情"
    }
  }, {
    "path": "pages/user/skill/record/index",
    "style": {
      "navigationBarTitleText": "考试记录"
    }
  }, {
    "path": "pages/user/address/addressDetail/index",
    "style": {
      "navigationBarTitleText": "通讯录详情"
    }
  }, {
    "path": "pages/schedule/index",
    "style": {
      "navigationBarTitleText": "电厂调度班"
    }
  }, {
    "path": "pages/run/schedule/index",
    "style": {
      "navigationBarTitleText": "检修计划"
    }
  }, {
    "path": "pages/run/electric/index",
    "style": {
      "navigationBarTitleText": "发电计划"
    }
  }, {
    "path": "pages/run/device/index",
    "style": {
      "navigationBarTitleText": "新设备接入"
    }
  }, {
    "path": "pages/run/grid/index",
    "style": {
      "navigationBarTitleText": "新设备并网"
    }
  }, {
    "path": "pages/run/sync/index",
    "style": {
      "navigationBarTitleText": "并网同步"
    }
  }, {
    "path": "pages/run/openorclose/index",
    "style": {
      "navigationBarTitleText": "开停机申请",
      "app-plus": {
        "bounce": "none",
        "titleNView": {
          "buttons": [{
            "fontSize": "15px",
            "text": "新增",
            "width": "40px"
          }],
          "backButton": {
            "background": "#00FF00"
          }
        }
      }
    }
  }, {
    "path": "pages/run/openorclose/components/AddApplication",
    "style": {
      "navigationBarTitleText": "新增申请"
    }
  }, {
    "path": "pages/run/mass/index",
    "style": {
      "navigationBarTitleText": "群发指令维护"
    }
  }, {
    "path": "pages/run/hydrology/index",
    "style": {
      "navigationBarTitleText": "水文数据上报",
      "app-plus": {
        "bounce": "none",
        "titleNView": {
          "buttons": [{
            "fontSize": "15px",
            "text": "发起上报",
            "width": "60px"
          }],
          "backButton": {
            "background": "#00FF00"
          }
        }
      }
    }
  }, {
    "path": "pages/run/hydrology/components/addHydrology",
    "style": {
      "navigationBarTitleText": "新增水文数据"
    }
  }, {
    "path": "pages/run/hydrology/components/success",
    "style": {
      "navigationBarTitleText": "上报成功"
    }
  }, {
    "path": "pages/run/hydrology/components/trunDown",
    "style": {
      "navigationBarTitleText": "已驳回"
    }
  }, {
    "path": "pages/plant/catchement/out",
    "style": {
      "navigationBarTitleText": "同流域出力",
      "app-plus": {
        "bounce": "none",
        "titleNView": {
          "buttons": [{
            "fontSize": "16px",
            "text": ""
          }],
          "backButton": {
            "background": "#00FF00"
          }
        }
      }
    }
  }, {
    "path": "pages/plant/catchement/index",
    "style": {
      "navigationBarTitleText": "同流域出力",
      "app-plus": {
        "bounce": "none",
        "titleNView": {
          "buttons": [{
            "fontSize": "16px",
            "text": "录入"
          }],
          "backButton": {
            "background": "#00FF00"
          }
        }
      }
    }
  }, {
    "path": "pages/plant/catchement/output",
    "style": {
      "navigationBarTitleText": "录入"
    }
  }, {
    "path": "pages/plant/selectPower/index",
    "style": {
      "navigationBarTitleText": "选择电厂"
    }
  }, {
    "path": "pages/plant/exception/index",
    "style": {
      "navigationBarTitleText": "设备异常"
    }
  }, {
    "path": "pages/plant/exception/exceptionManten/index",
    "style": {
      "navigationBarTitleText": "设备异常维护"
    }
  }, {
    "path": "pages/plant/maintain/index",
    "style": {
      "navigationBarTitleText": "设备维护"
    }
  }, {
    "path": "pages/plant/sync/index",
    "style": {
      "navigationBarTitleText": "数据同步"
    }
  }, {
    "path": "pages/plant/performance/index",
    "style": {
      "navigationBarTitleText": "性能优化"
    }
  }, {
    "path": "pages/large/info/index",
    "style": {
      "navigationBarTitleText": "基础信息",
      "app-plus": {
        "bounce": "none",
        "titleNView": {
          "buttons": [{
            "fontSize": "15px",
            "text": "新增大用户",
            "width": "80px"
          }]
        }
      }
    }
  }, {
    "path": "pages/large/info/components/output",
    "style": {
      "navigationBarTitleText": "新增大用户"
    }
  }, {
    "path": "pages/large/warn/index",
    "style": {
      "navigationBarTitleText": "告警维护"
    }
  }, {
    "path": "pages/large/unusual/index",
    "style": {
      "navigationBarTitleText": "异常处理"
    }
  }, {
    "path": "pages/large/message/index",
    "style": {
      "navigationBarTitleText": "短信群发"
    }
  }, {
    "path": "pages/run/chockSetting/index",
    "style": {
      "navigationBarTitleText": "打卡设置"
    }
  }, {
    "path": "pages/run/chockSetting/components/index",
    "style": {
      "navigationBarTitleText": "新增地址"
    }
  }, {
    "path": "pages/run/chockSetting/MapSelection",
    "style": {
      "navigationBarTitleText": "定位地址"
    }
  }, {
    "path": "pages/large/biguser/index",
    "style": {
      "navigationBarTitleText": "大用户基础信息"
    }
  }, {
    "path": "pages/data/monitor/index",
    "style": {
      "navigationBarTitleText": "实时监控"
    }
  }, {
    "path": "pages/data/count/index",
    "style": {
      "navigationBarTitleText": "生产统计"
    }
  }, {
    "path": "pages/data/warn/index",
    "style": {
      "navigationBarTitleText": "水电厂报警"
    }
  }, {
    "path": "pages/data/diagnose/index",
    "style": {
      "navigationBarTitleText": "故障诊断"
    }
  }, {
    "path": "pages/data/govern/index",
    "style": {
      "navigationBarTitleText": "数据治理"
    }
  }, {
    "path": "pages/data/ordered/index",
    "style": {
      "navigationBarTitleText": "有序用电"
    }
  }, {
    "path": "pages/data/electricLoad/index",
    "style": {
      "navigationBarTitleText": "电量负荷"
    }
  }, {
    "path": "pages/run/duty/todayDuty/index",
    "style": {
      "navigationBarTitleText": "当日值班维护"
    }
  }, {
    "path": "pages/run/duty/clockIn/index",
    "style": {
      "navigationBarTitleText": "人脸打卡"
    }
  }, {
    "path": "pages/run/duty/success/index",
    "style": {
      "navigationBarTitleText": "打卡成功"
    }
  }, {
    "path": "pages/run/duty/clockRecord/index",
    "style": {
      "navigationBarTitleText": "打卡记录"
    }
  }, {
    "path": "pages/run/duty/addClock/index",
    "style": {
      "navigationBarTitleText": "补签"
    }
  }, {
    "path": "pages/run/duty/clockTodos/index",
    "style": {
      "navigationBarTitleText": "待办事项"
    }
  }, {
    "path": "pages/exam/index",
    "style": {
      "navigationBarTitleText": "考试"
    }
  }, {
    "path": "pages/exam/currentExam/index",
    "style": {
      "navigationBarTitleText": "当前考试"
    }
  }, {
    "path": "pages/exam/currentQuestion/index",
    "style": {
      "navigationBarTitleText": "当前答题"
    }
  }, {
    "path": "pages/run/schedule/newYear/index",
    "style": {
      "navigationBarTitleText": "新建年计划"
    }
  }, {
    "path": "pages/run/schedule/newMonth/index",
    "style": {
      "navigationBarTitleText": "新建月计划"
    }
  }, {
    "path": "pages/data/loadFeatures/index",
    "style": {
      "navigationBarTitleText": "负荷特征分析"
    }
  }, {
    "path": "pages/data/electricityLevel/index",
    "style": {
      "navigationBarTitleText": "电网电量"
    }
  }, {
    "path": "pages/data/electricityAnalysis/index",
    "style": {
      "navigationBarTitleText": "电网分析"
    }
  }, {
    "path": "pages/run/schedule/newDay/index",
    "style": {
      "navigationBarTitleText": "新建日计划"
    }
  }, {
    "path": "pages/data/generateElectricity/index",
    "style": {
      "navigationBarTitleText": "电厂发电"
    }
  }, {
    "path": "pages/data/plantConsumption/index",
    "style": {
      "navigationBarTitleText": "电厂用电"
    }
  }, {
    "path": "pages/data/bigScreen/index",
    "style": {
      "navigationBarTitleText": "大屏",
      "app-plus": {
        "titleNView": false
      }
    }
  }, {
    "path": "pages/run/device/deviceDetail/index",
    "style": {
      "navigationBarTitleText": "设备详情"
    }
  }, {
    "path": "pages/run/device/newPart/index",
    "style": {
      "navigationBarTitleText": "新增"
    }
  }],
  "globalStyle": {
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "RuoYi",
    "navigationBarBackgroundColor": "#00A096"
  },
  "subPackages": [{
    "root": "pages/system",
    "pages": [{
      "path": "userManager/index",
      "style": {
        "navigationBarTitleText": "用户管理"
      },
      "meta": {
        "auth": true,
        "permissions": ["system:user:test"]
      }
    }]
  }]
});
;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js
/* provided dependency */ var console = __webpack_require__(43859)["A"];






































































































"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self && self;
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function n(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var s = n(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) t[s + i >>> 2] = n[i >>> 2];
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            return new o.init(n, t);
          }
        },
        h = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        l = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var h = 0; h < c; h += i) this._doProcessBlock(s, h);
              var l = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(l, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = l.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          l.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  r = s,
  i = (n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            I = e[t + 10],
            S = e[t + 11],
            b = e[t + 12],
            k = e[t + 13],
            A = e[t + 14],
            C = e[t + 15],
            P = i[0],
            T = i[1],
            x = i[2],
            O = i[3];
          P = u(P, T, x, O, o, 7, a[0]), O = u(O, P, T, x, c, 12, a[1]), x = u(x, O, P, T, p, 17, a[2]), T = u(T, x, O, P, f, 22, a[3]), P = u(P, T, x, O, g, 7, a[4]), O = u(O, P, T, x, m, 12, a[5]), x = u(x, O, P, T, y, 17, a[6]), T = u(T, x, O, P, _, 22, a[7]), P = u(P, T, x, O, w, 7, a[8]), O = u(O, P, T, x, v, 12, a[9]), x = u(x, O, P, T, I, 17, a[10]), T = u(T, x, O, P, S, 22, a[11]), P = u(P, T, x, O, b, 7, a[12]), O = u(O, P, T, x, k, 12, a[13]), x = u(x, O, P, T, A, 17, a[14]), P = h(P, T = u(T, x, O, P, C, 22, a[15]), x, O, c, 5, a[16]), O = h(O, P, T, x, y, 9, a[17]), x = h(x, O, P, T, S, 14, a[18]), T = h(T, x, O, P, o, 20, a[19]), P = h(P, T, x, O, m, 5, a[20]), O = h(O, P, T, x, I, 9, a[21]), x = h(x, O, P, T, C, 14, a[22]), T = h(T, x, O, P, g, 20, a[23]), P = h(P, T, x, O, v, 5, a[24]), O = h(O, P, T, x, A, 9, a[25]), x = h(x, O, P, T, f, 14, a[26]), T = h(T, x, O, P, w, 20, a[27]), P = h(P, T, x, O, k, 5, a[28]), O = h(O, P, T, x, p, 9, a[29]), x = h(x, O, P, T, _, 14, a[30]), P = l(P, T = h(T, x, O, P, b, 20, a[31]), x, O, m, 4, a[32]), O = l(O, P, T, x, w, 11, a[33]), x = l(x, O, P, T, S, 16, a[34]), T = l(T, x, O, P, A, 23, a[35]), P = l(P, T, x, O, c, 4, a[36]), O = l(O, P, T, x, g, 11, a[37]), x = l(x, O, P, T, _, 16, a[38]), T = l(T, x, O, P, I, 23, a[39]), P = l(P, T, x, O, k, 4, a[40]), O = l(O, P, T, x, o, 11, a[41]), x = l(x, O, P, T, f, 16, a[42]), T = l(T, x, O, P, y, 23, a[43]), P = l(P, T, x, O, v, 4, a[44]), O = l(O, P, T, x, b, 11, a[45]), x = l(x, O, P, T, C, 16, a[46]), P = d(P, T = l(T, x, O, P, p, 23, a[47]), x, O, o, 6, a[48]), O = d(O, P, T, x, _, 10, a[49]), x = d(x, O, P, T, A, 15, a[50]), T = d(T, x, O, P, m, 21, a[51]), P = d(P, T, x, O, b, 6, a[52]), O = d(O, P, T, x, f, 10, a[53]), x = d(x, O, P, T, I, 15, a[54]), T = d(T, x, O, P, c, 21, a[55]), P = d(P, T, x, O, w, 6, a[56]), O = d(O, P, T, x, C, 10, a[57]), x = d(x, O, P, T, y, 15, a[58]), T = d(T, x, O, P, k, 21, a[59]), P = d(P, T, x, O, g, 6, a[60]), O = d(O, P, T, x, S, 10, a[61]), x = d(x, O, P, T, p, 15, a[62]), T = d(T, x, O, P, v, 21, a[63]), i[0] = i[0] + P | 0, i[1] = i[1] + T | 0, i[2] = i[2] + x | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var h = c[u];
            c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), n(function (e, t) {
    var n;
    e.exports = (n = r, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) a[u] ^= 1549556828, c[u] ^= 909522486;
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), n(function (e, t) {
    e.exports = r.HmacMD5;
  })),
  o = n(function (e, t) {
    e.exports = r.enc.Utf8;
  }),
  a = n(function (e, t) {
    var n;
    e.exports = (n = r, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) if (o % 4) {
          var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
            c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
          r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) r.push(s.charAt(o >>> 6 * (3 - a) & 63));
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) r.push(c);
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) r[n.charCodeAt(i)] = i;
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var c = "FUNCTION",
  u = "OBJECT",
  h = "CLIENT_DB",
  l = "pending",
  d = "fulfilled",
  p = "rejected";
function f(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
  return "object" === f(e);
}
function m(e) {
  return "function" == typeof e;
}
function y(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var _ = "REJECTED",
  w = "NOT_PENDING";
var v = /*#__PURE__*/function () {
  function v() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? _ : _ref$retryRule;
    (0,classCallCheck/* default */.A)(this, v);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  return (0,createClass/* default */.A)(v, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then(function (e) {
        return _this.status = d, Promise.resolve(e);
      }, function (e) {
        return _this.status = p, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
}();
function I(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var S = "development" === "production",
  b = "h5",
  k =  false || !0 === undefined,
  A = I([]),
  C = "h5" === b ? "web" : "app-plus" === b ? "app" : b,
  P = I(undefined),
  T = I(undefined) || [],
  x = false;
var O = "";
try {
  O = ((__webpack_require__(26081)["default"]) || __webpack_require__(26081)).appid;
} catch (e) {}
var E = {};
function L(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = E, s = e, Object.prototype.hasOwnProperty.call(n, s) || (E[e] = t), E[e];
}
"app" === C && (E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var R = ["invoke", "success", "fail", "complete"],
  U = L("_globalUniCloudInterceptor");
function N(e, t) {
  U[e] || (U[e] = {}), g(t) && Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      s || (s = U[e][t] = []), -1 === s.indexOf(n) && m(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function D(e, t) {
  U[e] || (U[e] = {}), g(t) ? Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete U[e];
}
function M(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function q(e, t) {
  return U[e] && U[e][t] || [];
}
function F(e) {
  N("callObject", e);
}
var K = L("_globalUniCloudListener"),
  j = "response",
  $ = "needLogin",
  B = "refreshToken",
  W = "clientdb",
  H = "cloudfunction",
  z = "cloudobject";
function J(e) {
  return K[e] || (K[e] = []), K[e];
}
function V(e, t) {
  var n = J(e);
  n.includes(t) || n.push(t);
}
function G(e, t) {
  var n = J(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Y(e, t) {
  var n = J(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var Q,
  X = !1;
function Z() {
  return Q || (Q = new Promise(function (e) {
    X && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (X = !0, e());
      }
      X || setTimeout(function () {
        t();
      }, 30);
    }();
  }), Q);
}
function ee(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    m(_s2) && (t[_n2] = y(_s2));
  }
  return t;
}
var te = /*#__PURE__*/function (_Error) {
  function te(e) {
    var _this2;
    (0,classCallCheck/* default */.A)(this, te);
    _this2 = (0,callSuper/* default */.A)(this, te, [e.message]), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0,inherits/* default */.A)(te, _Error);
  return (0,createClass/* default */.A)(te, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var ne = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  },
  connectSocket: function connectSocket(e) {
    return uni.connectSocket(e);
  }
};
function se() {
  return {
    token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"),
    tokenExpired: ne.getStorageSync("uni_id_token_expired")
  };
}
function re() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && ne.setStorageSync("uni_id_token", e), t && ne.setStorageSync("uni_id_token_expired", t);
}
var ie, oe;
function ae() {
  return ie || (ie = uni.getSystemInfoSync()), ie;
}
function ce() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
var ue = {};
function he() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (oe) return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, ue), oe), {}, {
    locale: e,
    LOCALE: e
  });
  var t = ae(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
  for (var _e3 in t) Object.hasOwnProperty.call(t, _e3) && -1 === o.indexOf(_e3) && delete t[_e3];
  return oe = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ce()), t), (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, ue), oe), {}, {
    locale: e,
    LOCALE: e
  });
}
var le = {
  sign: function sign(e, t) {
    var n = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (n = n + "&" + t + "=" + e[t]);
    }), n = n.slice(1), i(n, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (n, s) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}), S && "web" === C && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) {
            var _n4 = e.data && e.data.error && e.data.error.code || "SYS_ERR",
              _r = e.data && e.data.error && e.data.error.message || e.errMsg || "request:fail";
            return s(new te({
              code: _n4,
              message: _r,
              requestId: t
            }));
          }
          var r = e.data;
          if (r.error) return s(new te({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, n(r);
        }
      }));
    });
  },
  toBase64: function toBase64(e) {
    return a.stringify(o.parse(e));
  }
};
var de = /*#__PURE__*/function () {
  function de(e) {
    var _this3 = this;
    (0,classCallCheck/* default */.A)(this, de);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new te({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: w
    });
  }
  return (0,createClass/* default */.A)(de, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return le.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = le.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = le.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getAccessToken();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, _ref4$cloudPathAsReal, s, r, i, o, a, c, u, h, l, d, p, g, m, y, _, _e4, w;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, _ref4$cloudPathAsReal = _ref4.cloudPathAsRealPath, s = _ref4$cloudPathAsReal === void 0 ? !1 : _ref4$cloudPathAsReal, r = _ref4.onUploadProgress, i = _ref4.config;
              if (!("string" !== f(t))) {
                _context2.next = 3;
                break;
              }
              throw new te({
                code: "INVALID_PARAM",
                message: "cloudPath必须为字符串类型"
              });
            case 3:
              if (t = t.trim()) {
                _context2.next = 5;
                break;
              }
              throw new te({
                code: "INVALID_PARAM",
                message: "cloudPath不可为空"
              });
            case 5:
              if (!/:\/\//.test(t)) {
                _context2.next = 7;
                break;
              }
              throw new te({
                code: "INVALID_PARAM",
                message: "cloudPath不合法"
              });
            case 7:
              o = i && i.envType || this.config.envType;
              if (!(s && ("/" !== t[0] && (t = "/" + t), t.indexOf("\\") > -1))) {
                _context2.next = 10;
                break;
              }
              throw new te({
                code: "INVALID_PARAM",
                message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
              });
            case 10:
              _context2.next = 12;
              return this.getOSSUploadOptionsFromPath({
                env: o,
                filename: s ? t.split("/").pop() : t,
                fileId: s ? t : void 0
              });
            case 12:
              a = _context2.sent.result;
              c = "https://" + a.cdnDomain + "/" + a.ossPath;
              u = a.securityToken;
              h = a.accessKeyId;
              l = a.signature;
              d = a.host;
              p = a.ossPath;
              g = a.id;
              m = a.policy;
              y = a.ossCallbackUrl;
              _ = {
                "Cache-Control": "max-age=2592000",
                "Content-Disposition": "attachment",
                OSSAccessKeyId: h,
                Signature: l,
                host: d,
                id: g,
                key: p,
                policy: m,
                success_action_status: 200
              };
              if (u && (_["x-oss-security-token"] = u), y) {
                _e4 = JSON.stringify({
                  callbackUrl: y,
                  callbackBody: JSON.stringify({
                    fileId: g,
                    spaceId: this.config.spaceId
                  }),
                  callbackBodyType: "application/json"
                });
                _.callback = le.toBase64(_e4);
              }
              w = {
                url: "https://" + a.host,
                formData: _,
                fileName: "file",
                name: "file",
                filePath: e,
                fileType: n
              };
              _context2.next = 27;
              return this.uploadFileToOSS(Object.assign({}, w, {
                onUploadProgress: r
              }));
            case 27:
              if (!y) {
                _context2.next = 29;
                break;
              }
              return _context2.abrupt("return", {
                success: !0,
                filePath: e,
                fileID: c
              });
            case 29:
              _context2.next = 31;
              return this.reportOSSUpload({
                id: g
              });
            case 31:
              if (!_context2.sent.success) {
                _context2.next = 33;
                break;
              }
              return _context2.abrupt("return", {
                success: !0,
                filePath: e,
                fileID: c
              });
            case 33:
              throw new te({
                code: "UPLOAD_FAILED",
                message: "文件上传失败"
              });
            case 34:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new te({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
              if (!(!Array.isArray(e) || 0 === e.length)) {
                _context3.next = 3;
                break;
              }
              throw new te({
                code: "INVALID_PARAM",
                message: "fileList的元素必须是非空的字符串"
              });
            case 3:
              t = {
                method: "serverless.file.resource.info",
                params: JSON.stringify({
                  id: e.map(function (e) {
                    return e.split("?")[0];
                  }).join(",")
                })
              };
              _context3.next = 6;
              return this.request(this.setupRequest(t));
            case 6:
              _context3.t0 = _context3.sent.result;
              return _context3.abrupt("return", {
                fileList: _context3.t0
              });
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
}();
var pe = {
  init: function init(e) {
    var t = new de(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var ge;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(ge || (ge = {}));
var me = function me() {},
  ye = n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), s = 2; s <= n; s++) if (!(t % s)) return !1;
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var s = 2, r = 0; r < 64;) t(s) && (r < 8 && (a[r] = n(e.pow(s, .5))), c[r] = n(e.pow(s, 1 / 3)), r++), s++;
      }();
      var u = [],
        h = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(a.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, s = n[0], r = n[1], i = n[2], o = n[3], a = n[4], h = n[5], l = n[6], d = n[7], p = 0; p < 64; p++) {
              if (p < 16) u[p] = 0 | e[t + p];else {
                var f = u[p - 15],
                  g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  m = u[p - 2],
                  y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[p] = g + u[p - 7] + y + u[p - 16];
              }
              var _ = s & r ^ s & i ^ r & i,
                w = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                v = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[p] + u[p];
              d = l, l = h, h = a, a = o + v | 0, o = i, i = r, r = s, s = v + (w + _) | 0;
            }
            n[0] = n[0] + s | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + h | 0, n[6] = n[6] + l | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              s = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = s, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(h), t.HmacSHA256 = i._createHmacHelper(h);
    }(Math), n.SHA256);
  }),
  _e = ye,
  we = n(function (e, t) {
    e.exports = r.HmacSHA256;
  });
var ve = function ve() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new te({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e5, s) {
      return _e5 ? n(_e5) : t(s);
    };
  });
  return e.promise = t, e;
};
function Ie(e) {
  return void 0 === e;
}
function Se(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var be;
function ke(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = (0,createForOfIteratorHelper/* default */.A)(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e6 = _step.value;
      var _t4 = _e6.isMatch,
        _n5 = _e6.genAdapter,
        _s4 = _e6.runtime;
      if (_t4()) return {
        adapter: _n5(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(be || (be = {}));
var Ae = {
    adapter: null,
    runtime: void 0
  },
  Ce = ["anonymousUuidKey"];
var Pe = /*#__PURE__*/function (_me) {
  function Pe() {
    var _this6;
    (0,classCallCheck/* default */.A)(this, Pe);
    _this6 = (0,callSuper/* default */.A)(this, Pe), Ae.adapter.root.tcbObject || (Ae.adapter.root.tcbObject = {});
    return _this6;
  }
  (0,inherits/* default */.A)(Pe, _me);
  return (0,createClass/* default */.A)(Pe, [{
    key: "setItem",
    value: function setItem(e, t) {
      Ae.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return Ae.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete Ae.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete Ae.adapter.root.tcbObject;
    }
  }]);
}(me);
function Te(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Pe();
    case "none":
      return new Pe();
    default:
      return t.sessionStorage || new Pe();
  }
}
var xe = /*#__PURE__*/function () {
  function xe(e) {
    (0,classCallCheck/* default */.A)(this, xe);
    if (!this._storage) {
      this._persistence = Ae.adapter.primaryStorage || e.persistence, this._storage = Te(this._persistence, Ae.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n6 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r2 = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n6,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r2,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  return (0,createClass/* default */.A)(xe, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Te(e, Ae.adapter);
      for (var _e7 in this.keys) {
        var _s6 = this.keys[_e7];
        if (t && Ce.includes(_e7)) continue;
        var _r3 = this._storage.getItem(_s6);
        Ie(_r3) || Se(_r3) || (n.setItem(_s6, _r3), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
}();
var Oe = {},
  Ee = {};
function Le(e) {
  return Oe[e];
}
var Re = /*#__PURE__*/(0,createClass/* default */.A)(function Re(e, t) {
  (0,classCallCheck/* default */.A)(this, Re);
  this.data = t || null, this.name = e;
});
var Ue = /*#__PURE__*/function (_Re) {
  function Ue(e, t) {
    var _this7;
    (0,classCallCheck/* default */.A)(this, Ue);
    _this7 = (0,callSuper/* default */.A)(this, Ue, ["error", {
      error: e,
      data: t
    }]), _this7.error = e;
    return _this7;
  }
  (0,inherits/* default */.A)(Ue, _Re);
  return (0,createClass/* default */.A)(Ue);
}(Re);
var Ne = new (/*#__PURE__*/function () {
  function _class() {
    (0,classCallCheck/* default */.A)(this, _class);
    this._listeners = {};
  }
  return (0,createClass/* default */.A)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Ue) return console.error(e.error), this;
      var n = "string" == typeof e ? new Re(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e8 = this._listeners[s] ? (0,toConsumableArray/* default */.A)(this._listeners[s]) : [];
        var _iterator2 = (0,createForOfIteratorHelper/* default */.A)(_e8),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
}())();
function De(e, t) {
  Ne.on(e, t);
}
function Me(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Ne.fire(e, t);
}
function qe(e, t) {
  Ne.off(e, t);
}
var Fe = "loginStateChanged",
  Ke = "loginStateExpire",
  je = "loginTypeChanged",
  $e = "anonymousConverted",
  Be = "refreshAccessToken";
var We;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(We || (We = {}));
var He = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  ze = {
    "X-SDK-Version": "1.3.5"
  };
function Je(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, o), r);else for (var _e9 in r) o.append(_e9, r[_e9]);
    }(), t.headers = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, t.headers || {}), i), s.call(e, t);
  };
}
function Ve() {
  var e = getSecureRandom().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, ze), {}, {
      "x-seqid": e
    })
  };
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0,classCallCheck/* default */.A)(this, Ge);
    var t;
    this.config = e, this._reqClass = new Ae.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Le(this.config.env), this._localCache = (t = this.config.env, Ee[t]), Je(this._reqClass, "post", [Ve]), Je(this._reqClass, "upload", [Ve]), Je(this._reqClass, "download", [Ve]);
  }
  return (0,createClass/* default */.A)(Ge, [{
    key: "post",
    value: function () {
      var _post = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee4(e) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this._reqClass.post(e);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee5(e) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this._reqClass.upload(e);
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee6(e) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this._reqClass.download(e);
            case 2:
              return _context6.abrupt("return", _context6.sent);
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee7() {
        var e, t;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
              _context7.prev = 1;
              _context7.next = 4;
              return this._refreshAccessTokenPromise;
            case 4:
              e = _context7.sent;
              _context7.next = 10;
              break;
            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](1);
              t = _context7.t0;
            case 10:
              if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                _context7.next = 12;
                break;
              }
              throw t;
            case 12:
              return _context7.abrupt("return", e);
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee8() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e10, _e11, _t7, _s8;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
              this._cache.removeStore(e), this._cache.removeStore(t);
              i = this._cache.getStore(n);
              if (i) {
                _context8.next = 5;
                break;
              }
              throw new te({
                message: "未登录CloudBase"
              });
            case 5:
              o = {
                refresh_token: i
              };
              _context8.next = 8;
              return this.request("auth.fetchAccessTokenWithRefreshToken", o);
            case 8:
              a = _context8.sent;
              if (!a.data.code) {
                _context8.next = 21;
                break;
              }
              _e10 = a.data.code;
              if (!("SIGN_PARAM_INVALID" === _e10 || "REFRESH_TOKEN_EXPIRED" === _e10 || "INVALID_REFRESH_TOKEN" === _e10)) {
                _context8.next = 20;
                break;
              }
              if (!(this._cache.getStore(s) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e10)) {
                _context8.next = 19;
                break;
              }
              _e11 = this._cache.getStore(r);
              _t7 = this._cache.getStore(n);
              _context8.next = 17;
              return this.send("auth.signInAnonymously", {
                anonymous_uuid: _e11,
                refresh_token: _t7
              });
            case 17:
              _s8 = _context8.sent;
              return _context8.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
            case 19:
              Me(Ke), this._cache.removeStore(n);
            case 20:
              throw new te({
                code: a.data.code,
                message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
              });
            case 21:
              if (!a.data.access_token) {
                _context8.next = 23;
                break;
              }
              return _context8.abrupt("return", (Me(Be), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                accessToken: a.data.access_token,
                accessTokenExpire: a.data.access_token_expire
              }));
            case 23:
              a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
            case 24:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
              if (this._cache.getStore(n)) {
                _context9.next = 3;
                break;
              }
              throw new te({
                message: "refresh token不存在，登录状态异常"
              });
            case 3:
              s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
              _context9.t0 = this._shouldRefreshAccessTokenHook;
              if (!_context9.t0) {
                _context9.next = 9;
                break;
              }
              _context9.next = 8;
              return this._shouldRefreshAccessTokenHook(s, r);
            case 8:
              _context9.t0 = !_context9.sent;
            case 9:
              _context9.t1 = _context9.t0;
              if (!_context9.t1) {
                _context9.next = 12;
                break;
              }
              i = !1;
            case 12:
              return _context9.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                accessToken: s,
                accessTokenExpire: r
              });
            case 13:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee10(e, t, n) {
        var s, r, i, _e12, o, _e13, _e14, a, c, u, h, l, d, p, f, g;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              s = "x-tcb-trace_".concat(this.config.env);
              r = "application/x-www-form-urlencoded";
              i = (0,objectSpread2/* default */.A)({
                action: e,
                env: this.config.env,
                dataVersion: "2019-08-16"
              }, t);
              if (!(-1 === He.indexOf(e))) {
                _context10.next = 10;
                break;
              }
              _e12 = this._cache.keys.refreshTokenKey;
              _context10.t0 = this._cache.getStore(_e12);
              if (!_context10.t0) {
                _context10.next = 10;
                break;
              }
              _context10.next = 9;
              return this.getAccessToken();
            case 9:
              i.access_token = _context10.sent.accessToken;
            case 10:
              if ("storage.uploadFile" === e) {
                o = new FormData();
                for (_e13 in o) o.hasOwnProperty(_e13) && void 0 !== o[_e13] && o.append(_e13, i[_e13]);
                r = "multipart/form-data";
              } else {
                r = "application/json", o = {};
                for (_e14 in i) void 0 !== i[_e14] && (o[_e14] = i[_e14]);
              }
              a = {
                headers: {
                  "content-type": r
                }
              };
              n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
              c = this._localCache.getStore(s);
              c && (a.headers["X-TCB-Trace"] = c);
              u = t.parse, h = t.inQuery, l = t.search;
              d = {
                env: this.config.env
              };
              u && (d.parse = !0), h && (d = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, h), d));
              p = function (e, t) {
                var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var s = /\?/.test(t);
                var r = "";
                for (var _e15 in n) "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e15, "=").concat(encodeURIComponent(n[_e15]));
                return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
              }(fe, "//tcb-api.tencentcloudapi.com/web", d);
              l && (p += l);
              _context10.next = 22;
              return this.post((0,objectSpread2/* default */.A)({
                url: p,
                data: o
              }, a));
            case 22:
              f = _context10.sent;
              g = f.header && f.header["x-tcb-trace"];
              if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                _context10.next = 26;
                break;
              }
              throw new te({
                code: "NETWORK_ERROR",
                message: "network request error"
              });
            case 26:
              return _context10.abrupt("return", f);
            case 27:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee11(e) {
        var t,
          n,
          _n7,
          _args11 = arguments;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
              _context11.next = 3;
              return this.request(e, t, {
                onUploadProgress: t.onUploadProgress
              });
            case 3:
              n = _context11.sent;
              if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === He.indexOf(e))) {
                _context11.next = 13;
                break;
              }
              _context11.next = 7;
              return this.refreshAccessToken();
            case 7:
              _context11.next = 9;
              return this.request(e, t, {
                onUploadProgress: t.onUploadProgress
              });
            case 9:
              _n7 = _context11.sent;
              if (!_n7.data.code) {
                _context11.next = 12;
                break;
              }
              throw new te({
                code: _n7.data.code,
                message: _n7.data.message
              });
            case 12:
              return _context11.abrupt("return", _n7.data);
            case 13:
              if (!n.data.code) {
                _context11.next = 15;
                break;
              }
              throw new te({
                code: n.data.code,
                message: n.data.message
              });
            case 15:
              return _context11.abrupt("return", n.data);
            case 16:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
}();
var Ye = {};
function Qe(e) {
  return Ye[e];
}
var Xe = /*#__PURE__*/function () {
  function Xe(e) {
    (0,classCallCheck/* default */.A)(this, Xe);
    this.config = e, this._cache = Le(e.env), this._request = Qe(e.env);
  }
  return (0,createClass/* default */.A)(Xe, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee12() {
        var _yield$this$_request$, e;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this._request.send("auth.getUserInfo", {});
            case 2:
              _yield$this$_request$ = _context12.sent;
              e = _yield$this$_request$.data;
              return _context12.abrupt("return", (this.setLocalUserInfo(e), e));
            case 5:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
}();
var Ze = /*#__PURE__*/function () {
  function Ze(e) {
    (0,classCallCheck/* default */.A)(this, Ze);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Le(this._envId), this._request = Qe(this._envId), this.setUserInfo();
  }
  return (0,createClass/* default */.A)(Ze, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee13() {
        var _yield$this$_request$2, e, t, n;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this._request.send("auth.getLinkedUidList", {});
            case 2:
              _yield$this$_request$2 = _context13.sent;
              e = _yield$this$_request$2.data;
              t = !1;
              n = e.users;
              return _context13.abrupt("return", (n.forEach(function (e) {
                e.wxOpenId && e.wxPublicId && (t = !0);
              }), {
                users: n,
                hasPrimaryUid: t
              }));
            case 7:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee14(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              t = e.nickName;
              n = e.gender;
              s = e.avatarUrl;
              r = e.province;
              i = e.country;
              o = e.city;
              _context14.next = 8;
              return this._request.send("auth.updateUserInfo", {
                nickName: t,
                gender: n,
                avatarUrl: s,
                province: r,
                country: i,
                city: o
              });
            case 8:
              _yield$this$_request$3 = _context14.sent;
              a = _yield$this$_request$3.data;
              this.setLocalUserInfo(a);
            case 11:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee15() {
        var _yield$this$_request$4, e;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return this._request.send("auth.getUserInfo", {});
            case 2:
              _yield$this$_request$4 = _context15.sent;
              e = _yield$this$_request$4.data;
              return _context15.abrupt("return", (this.setLocalUserInfo(e), e));
            case 5:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
}();
var et = /*#__PURE__*/function () {
  function et(e) {
    (0,classCallCheck/* default */.A)(this, et);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Le(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Ze(e);
  }
  return (0,createClass/* default */.A)(et, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === We.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === We.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
}();
var tt = /*#__PURE__*/function (_Xe) {
  function tt() {
    (0,classCallCheck/* default */.A)(this, tt);
    return (0,callSuper/* default */.A)(this, tt, arguments);
  }
  (0,inherits/* default */.A)(tt, _Xe);
  return (0,createClass/* default */.A)(tt, [{
    key: "signIn",
    value: function () {
      var _signIn = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee16() {
        var _this$_cache$keys7, e, t, n, s, r, _e16;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              this._cache.updatePersistence("local");
              _this$_cache$keys7 = this._cache.keys;
              e = _this$_cache$keys7.anonymousUuidKey;
              t = _this$_cache$keys7.refreshTokenKey;
              n = this._cache.getStore(e) || void 0;
              s = this._cache.getStore(t) || void 0;
              _context16.next = 8;
              return this._request.send("auth.signInAnonymously", {
                anonymous_uuid: n,
                refresh_token: s
              });
            case 8:
              r = _context16.sent;
              if (!(r.uuid && r.refresh_token)) {
                _context16.next = 20;
                break;
              }
              this._setAnonymousUUID(r.uuid);
              this.setRefreshToken(r.refresh_token);
              _context16.next = 14;
              return this._request.refreshAccessToken();
            case 14:
              Me(Fe);
              Me(je, {
                env: this.config.env,
                loginType: We.ANONYMOUS,
                persistence: "local"
              });
              _e16 = new et(this.config.env);
              _context16.next = 19;
              return _e16.user.refresh();
            case 19:
              return _context16.abrupt("return", _e16);
            case 20:
              throw new te({
                message: "匿名登录失败"
              });
            case 21:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee17(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _this$_cache$keys8 = this._cache.keys;
              t = _this$_cache$keys8.anonymousUuidKey;
              n = _this$_cache$keys8.refreshTokenKey;
              s = this._cache.getStore(t);
              r = this._cache.getStore(n);
              _context17.next = 7;
              return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                anonymous_uuid: s,
                refresh_token: r,
                ticket: e
              });
            case 7:
              i = _context17.sent;
              if (!i.refresh_token) {
                _context17.next = 16;
                break;
              }
              this._clearAnonymousUUID();
              this.setRefreshToken(i.refresh_token);
              _context17.next = 13;
              return this._request.refreshAccessToken();
            case 13:
              Me($e, {
                env: this.config.env
              });
              Me(je, {
                loginType: We.CUSTOM,
                persistence: "local"
              });
              return _context17.abrupt("return", {
                credential: {
                  refreshToken: i.refresh_token
                }
              });
            case 16:
              throw new te({
                message: "匿名转化失败"
              });
            case 17:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, We.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
}(Xe);
var nt = /*#__PURE__*/function (_Xe2) {
  function nt() {
    (0,classCallCheck/* default */.A)(this, nt);
    return (0,callSuper/* default */.A)(this, nt, arguments);
  }
  (0,inherits/* default */.A)(nt, _Xe2);
  return (0,createClass/* default */.A)(nt, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee18(e) {
        var t, n;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              if (!("string" != typeof e)) {
                _context18.next = 2;
                break;
              }
              throw new te({
                code: "PARAM_ERROR",
                message: "ticket must be a string"
              });
            case 2:
              t = this._cache.keys.refreshTokenKey;
              _context18.next = 5;
              return this._request.send("auth.signInWithTicket", {
                ticket: e,
                refresh_token: this._cache.getStore(t) || ""
              });
            case 5:
              n = _context18.sent;
              if (!n.refresh_token) {
                _context18.next = 15;
                break;
              }
              this.setRefreshToken(n.refresh_token);
              _context18.next = 10;
              return this._request.refreshAccessToken();
            case 10:
              Me(Fe);
              Me(je, {
                env: this.config.env,
                loginType: We.CUSTOM,
                persistence: this.config.persistence
              });
              _context18.next = 14;
              return this.refreshUserInfo();
            case 14:
              return _context18.abrupt("return", new et(this.config.env));
            case 15:
              throw new te({
                message: "自定义登录失败"
              });
            case 16:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
}(Xe);
var st = /*#__PURE__*/function (_Xe3) {
  function st() {
    (0,classCallCheck/* default */.A)(this, st);
    return (0,callSuper/* default */.A)(this, st, arguments);
  }
  (0,inherits/* default */.A)(st, _Xe3);
  return (0,createClass/* default */.A)(st, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee19(e, t) {
        var n, s, r, i, o;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              if (!("string" != typeof e)) {
                _context19.next = 2;
                break;
              }
              throw new te({
                code: "PARAM_ERROR",
                message: "email must be a string"
              });
            case 2:
              n = this._cache.keys.refreshTokenKey;
              _context19.next = 5;
              return this._request.send("auth.signIn", {
                loginType: "EMAIL",
                email: e,
                password: t,
                refresh_token: this._cache.getStore(n) || ""
              });
            case 5:
              s = _context19.sent;
              r = s.refresh_token;
              i = s.access_token;
              o = s.access_token_expire;
              if (!r) {
                _context19.next = 22;
                break;
              }
              this.setRefreshToken(r);
              if (!(i && o)) {
                _context19.next = 15;
                break;
              }
              this.setAccessToken(i, o);
              _context19.next = 17;
              break;
            case 15:
              _context19.next = 17;
              return this._request.refreshAccessToken();
            case 17:
              _context19.next = 19;
              return this.refreshUserInfo();
            case 19:
              Me(Fe);
              Me(je, {
                env: this.config.env,
                loginType: We.EMAIL,
                persistence: this.config.persistence
              });
              return _context19.abrupt("return", new et(this.config.env));
            case 22:
              throw s.code ? new te({
                code: s.code,
                message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
              }) : new te({
                message: "邮箱登录失败"
              });
            case 23:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee20(e) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              return _context20.abrupt("return", this._request.send("auth.activateEndUserMail", {
                token: e
              }));
            case 1:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee21(e, t) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              return _context21.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                token: e,
                newPassword: t
              }));
            case 1:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
}(Xe);
var rt = /*#__PURE__*/function (_Xe4) {
  function rt() {
    (0,classCallCheck/* default */.A)(this, rt);
    return (0,callSuper/* default */.A)(this, rt, arguments);
  }
  (0,inherits/* default */.A)(rt, _Xe4);
  return (0,createClass/* default */.A)(rt, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee22(e, t) {
        var n, s, r, i, o;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              if (!("string" != typeof e)) {
                _context22.next = 2;
                break;
              }
              throw new te({
                code: "PARAM_ERROR",
                message: "username must be a string"
              });
            case 2:
              "string" != typeof t && (t = "", console.warn("password is empty"));
              n = this._cache.keys.refreshTokenKey;
              _context22.next = 6;
              return this._request.send("auth.signIn", {
                loginType: We.USERNAME,
                username: e,
                password: t,
                refresh_token: this._cache.getStore(n) || ""
              });
            case 6:
              s = _context22.sent;
              r = s.refresh_token;
              i = s.access_token_expire;
              o = s.access_token;
              if (!r) {
                _context22.next = 23;
                break;
              }
              this.setRefreshToken(r);
              if (!(o && i)) {
                _context22.next = 16;
                break;
              }
              this.setAccessToken(o, i);
              _context22.next = 18;
              break;
            case 16:
              _context22.next = 18;
              return this._request.refreshAccessToken();
            case 18:
              _context22.next = 20;
              return this.refreshUserInfo();
            case 20:
              Me(Fe);
              Me(je, {
                env: this.config.env,
                loginType: We.USERNAME,
                persistence: this.config.persistence
              });
              return _context22.abrupt("return", new et(this.config.env));
            case 23:
              throw s.code ? new te({
                code: s.code,
                message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
              }) : new te({
                message: "用户名密码登录失败"
              });
            case 24:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
}(Xe);
var it = /*#__PURE__*/function () {
  function it(e) {
    (0,classCallCheck/* default */.A)(this, it);
    this.config = e, this._cache = Le(e.env), this._request = Qe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
  }
  return (0,createClass/* default */.A)(it, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new tt(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new nt(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new st(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new rt(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee23() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              return _context23.abrupt("return", new tt(this.config).signIn());
            case 1:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee24(e, t) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              return _context24.abrupt("return", new st(this.config).signIn(e, t));
            case 1:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new rt(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee25(e) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De($e, this._onAnonymousConverted);
              _context25.next = 3;
              return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
            case 3:
              return _context25.abrupt("return", _context25.sent);
            case 4:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee26() {
        var _this$_cache$keys10, e, t, n, s, r;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              if (!(this.loginType === We.ANONYMOUS)) {
                _context26.next = 2;
                break;
              }
              throw new te({
                message: "匿名用户不支持登出操作"
              });
            case 2:
              _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
              if (s) {
                _context26.next = 5;
                break;
              }
              return _context26.abrupt("return");
            case 5:
              _context26.next = 7;
              return this._request.send("auth.logout", {
                refresh_token: s
              });
            case 7:
              r = _context26.sent;
              return _context26.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), Me(Fe), Me(je, {
                env: this.config.env,
                loginType: We.NULL,
                persistence: this.config.persistence
              }), r));
            case 9:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee27(e, t) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              return _context27.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                email: e,
                password: t
              }));
            case 1:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee28(e) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              return _context28.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                email: e
              }));
            case 1:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      De(Fe, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      De(Ke, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      De(Be, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      De($e, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      De(je, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee29() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              _context29.next = 2;
              return this._request.getAccessToken();
            case 2:
              _context29.t0 = _context29.sent.accessToken;
              _context29.t1 = this.config.env;
              return _context29.abrupt("return", {
                accessToken: _context29.t0,
                env: _context29.t1
              });
            case 5:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new et(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee30(e) {
        var _yield$this$_request$5, t;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              if (!("string" != typeof e)) {
                _context30.next = 2;
                break;
              }
              throw new te({
                code: "PARAM_ERROR",
                message: "username must be a string"
              });
            case 2:
              _context30.next = 4;
              return this._request.send("auth.isUsernameRegistered", {
                username: e
              });
            case 4:
              _yield$this$_request$5 = _context30.sent;
              t = _yield$this$_request$5.data;
              return _context30.abrupt("return", t && t.isRegistered);
            case 7:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee31(e) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              return _context31.abrupt("return", new nt(this.config).signIn(e));
            case 1:
            case "end":
              return _context31.stop();
          }
        }, _callee31, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
}();
var ot = function ot(e, t) {
    t = t || ve();
    var n = Qe(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        h = _e$data2.fileId,
        l = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": l,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: h,
          requestId: d
        }) : t(new te({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  at = function at(e, t) {
    t = t || ve();
    var n = Qe(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ct = function ct(_ref7, t) {
    var e = _ref7.fileList;
    if (t = t || ve(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = (0,createForOfIteratorHelper/* default */.A)(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Qe(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ut = function ut(_ref8, t) {
    var e = _ref8.fileList;
    t = t || ve(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = (0,createForOfIteratorHelper/* default */.A)(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0,esm_typeof/* default */.A)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ht = /*#__PURE__*/function () {
    var _ref10 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee32(_ref9, t) {
      var e, n, s, r;
      return (0,regeneratorRuntime/* default */.A)().wrap(function _callee32$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            e = _ref9.fileID;
            _context32.next = 3;
            return ut.call(this, {
              fileList: [{
                fileID: e,
                maxAge: 600
              }]
            });
          case 3:
            n = _context32.sent.fileList[0];
            if (!("SUCCESS" !== n.code)) {
              _context32.next = 6;
              break;
            }
            return _context32.abrupt("return", t ? t(n) : new Promise(function (e) {
              e(n);
            }));
          case 6:
            s = Qe(this.config.env);
            r = n.download_url;
            if (!(r = encodeURI(r), !t)) {
              _context32.next = 10;
              break;
            }
            return _context32.abrupt("return", s.download({
              url: r
            }));
          case 10:
            _context32.t0 = t;
            _context32.next = 13;
            return s.download({
              url: r
            });
          case 13:
            _context32.t1 = _context32.sent;
            (0, _context32.t0)(_context32.t1);
          case 15:
          case "end":
            return _context32.stop();
        }
      }, _callee32, this);
    }));
    return function ht(_x27, _x28) {
      return _ref10.apply(this, arguments);
    };
  }(),
  lt = function lt(_ref11, i) {
    var e = _ref11.name,
      t = _ref11.data,
      n = _ref11.query,
      s = _ref11.parse,
      r = _ref11.search;
    var o = i || ve();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new te({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Qe(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new te({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  dt = {
    timeout: 15e3,
    persistence: "session"
  },
  pt = {};
var ft = /*#__PURE__*/function () {
  function ft(e) {
    (0,classCallCheck/* default */.A)(this, ft);
    this.config = e || this.config, this.authObj = void 0;
  }
  return (0,createClass/* default */.A)(ft, [{
    key: "init",
    value: function init(e) {
      switch (Ae.adapter || (this.requestClient = new Ae.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, dt), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref12.persistence;
      if (this.authObj) return this.authObj;
      var t = e || Ae.adapter.primaryStorage || dt.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        Oe[t] = new xe(e), Ee[t] = new xe((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, Ye[n.env] = new Ge(n), this.authObj = new it(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return De.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return qe.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return lt.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return ct.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return ut.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ht.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return at.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      pt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee33(e, t) {
        var n;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              n = pt[e];
              if (n) {
                _context33.next = 3;
                break;
              }
              throw new te({
                message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
              });
            case 3:
              _context33.next = 5;
              return n.invoke(t, this);
            case 5:
              return _context33.abrupt("return", _context33.sent);
            case 6:
            case "end":
              return _context33.stop();
          }
        }, _callee33, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref13 = ke(e) || {},
        t = _ref13.adapter,
        n = _ref13.runtime;
      t && (Ae.adapter = t), n && (Ae.runtime = n);
    }
  }]);
}();
var gt = new ft();
function mt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var yt = /*#__PURE__*/function () {
  function yt() {
    (0,classCallCheck/* default */.A)(this, yt);
  }
  return (0,createClass/* default */.A)(yt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        ne.request({
          url: mt("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = ne.uploadFile({
            url: mt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
}();
var _t = {
  setItem: function setItem(e, t) {
    ne.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return ne.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    ne.removeStorageSync(e);
  },
  clear: function clear() {
    ne.clearStorageSync();
  }
};
var wt = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: yt,
      localStorage: _t,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
gt.useAdapters(wt);
var vt = gt,
  It = vt.init;
vt.init = function (e) {
  e.env = e.spaceId;
  var t = It.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _ee = ee(e),
          t = _ee.success,
          s = _ee.fail,
          r = _ee.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var St = vt;
var bt = /*#__PURE__*/function (_de) {
  function bt() {
    (0,classCallCheck/* default */.A)(this, bt);
    return (0,callSuper/* default */.A)(this, bt, arguments);
  }
  (0,inherits/* default */.A)(bt, _de);
  return (0,createClass/* default */.A)(bt, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = le.sign(n, this.config.clientSecret);
      var r = he();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _se = se(),
        i = _se.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref14) {
      var _this12 = this;
      var e = _ref14.url,
        t = _ref14.formData,
        n = _ref14.name,
        s = _ref14.filePath,
        r = _ref14.fileType,
        i = _ref14.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref15) {
      var _this13 = this;
      var e = _ref15.filePath,
        t = _ref15.cloudPath,
        _ref15$fileType = _ref15.fileType,
        n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,
        s = _ref15.onUploadProgress;
      if (!t) throw new te({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new te({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref16) {
      var e = _ref16.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new te({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref17.fileList,
        t = _ref17.maxAge;
      if (!Array.isArray(e) || 0 === e.length) throw new te({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var n = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e,
          maxAge: t
        })
      };
      return this.request(this.setupRequest(n)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new te({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
}(de);
var kt = {
    init: function init(e) {
      var t = new bt(e),
        n = {
          signInAnonymously: function signInAnonymously() {
            return t.authorize();
          },
          getLoginState: function getLoginState() {
            return Promise.resolve(!1);
          }
        };
      return t.auth = function () {
        return n;
      }, t.customAuth = t.auth, t;
    }
  },
  At = n(function (e, t) {
    e.exports = r.enc.Hex;
  });
function Ct() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = 16 * getSecureRandom() | 0;
    return ("x" === e ? t : 3 & t | 8).toString(16);
  });
}
function Pt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = t.data,
    s = t.functionName,
    r = t.method,
    i = t.headers,
    _t$signHeaderKeys = t.signHeaderKeys,
    o = _t$signHeaderKeys === void 0 ? [] : _t$signHeaderKeys,
    a = t.config,
    c = Date.now(),
    u = Ct(),
    h = Object.assign({}, i, {
      "x-from-app-id": a.spaceAppId,
      "x-from-env-id": a.spaceId,
      "x-to-env-id": a.spaceId,
      "x-from-instance-id": c,
      "x-from-function-name": s,
      "x-client-timestamp": c,
      "x-alipay-source": "client",
      "x-request-id": u,
      "x-alipay-callid": u,
      "x-trace-id": u
    }),
    l = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o),
    _ref18 = e.split("?") || [],
    _ref19 = (0,slicedToArray/* default */.A)(_ref18, 2),
    _ref19$ = _ref19[0],
    d = _ref19$ === void 0 ? "" : _ref19$,
    _ref19$2 = _ref19[1],
    p = _ref19$2 === void 0 ? "" : _ref19$2,
    f = function (e) {
      var t = e.signedHeaders.join(";"),
        n = e.signedHeaders.map(function (t) {
          return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n");
        }).join(""),
        s = _e(e.body).toString(At),
        r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(n, "\n").concat(t, "\n").concat(s, "\n"),
        i = _e(r).toString(At),
        o = "HMAC-SHA256\n".concat(e.timestamp, "\n").concat(i, "\n"),
        a = we(o, e.secretKey).toString(At);
      return "HMAC-SHA256 Credential=".concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(a);
    }({
      path: d,
      query: p,
      method: r,
      headers: h,
      timestamp: c,
      body: JSON.stringify(n),
      secretId: a.accessKey,
      secretKey: a.secretKey,
      signedHeaders: l.sort()
    });
  return {
    url: "".concat(a.endpoint).concat(e),
    headers: Object.assign({}, h, {
      Authorization: f
    })
  };
}
function Tt(_ref20) {
  var e = _ref20.url,
    t = _ref20.data,
    _ref20$method = _ref20.method,
    n = _ref20$method === void 0 ? "POST" : _ref20$method,
    _ref20$headers = _ref20.headers,
    s = _ref20$headers === void 0 ? {} : _ref20$headers;
  return new Promise(function (r, i) {
    ne.request({
      url: e,
      method: n,
      data: "object" == (0,esm_typeof/* default */.A)(t) ? JSON.stringify(t) : t,
      header: s,
      dataType: "json",
      complete: function complete() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = s["x-trace-id"] || "";
        if (!e.statusCode || e.statusCode >= 400) {
          var _ref21 = e.data || {},
            _n8 = _ref21.message,
            _s10 = _ref21.errMsg,
            _r4 = _ref21.trace_id;
          return i(new te({
            code: "SYS_ERR",
            message: _n8 || _s10 || "request:fail",
            requestId: _r4 || t
          }));
        }
        r({
          status: e.statusCode,
          data: e.data,
          headers: e.header,
          requestId: t
        });
      }
    });
  });
}
function xt(e, t) {
  var n = e.path,
    s = e.data,
    _e$method = e.method,
    r = _e$method === void 0 ? "GET" : _e$method,
    _Pt = Pt(n, {
      functionName: "",
      data: s,
      method: r,
      headers: {
        "x-alipay-cloud-mode": "oss",
        "x-data-api-type": "oss",
        "x-expire-timestamp": Date.now() + 6e4
      },
      signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
      config: t
    }),
    i = _Pt.url,
    o = _Pt.headers;
  return Tt({
    url: i,
    data: s,
    method: r,
    headers: o
  }).then(function (e) {
    var t = e.data || {};
    if (!t.success) throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
    return t.data || {};
  }).catch(function (e) {
    throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
  });
}
function Ot() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.trim().replace(/^cloud:\/\//, ""),
    n = t.indexOf("/");
  if (n <= 0) throw new te({
    code: "INVALID_PARAM",
    message: "fileID不合法"
  });
  var s = t.substring(0, n),
    r = t.substring(n + 1);
  return s !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r;
}
function Et() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""));
}
var Lt = /*#__PURE__*/function () {
  function Lt(e) {
    (0,classCallCheck/* default */.A)(this, Lt);
    this.config = e;
  }
  return (0,createClass/* default */.A)(Lt, [{
    key: "signedURL",
    value: function signedURL(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var n = "/ws/function/".concat(e),
        s = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""),
        r = Object.assign({}, t, {
          accessKeyId: this.config.accessKey,
          signatureNonce: Ct(),
          timestamp: "" + Date.now()
        }),
        i = [n, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function (e) {
          return r[e] ? "".concat(e, "=").concat(r[e]) : null;
        }).filter(Boolean).join("&"), "host:".concat(s)].join("\n"),
        o = ["HMAC-SHA256", _e(i).toString(At)].join("\n"),
        a = we(o, this.config.secretKey).toString(At),
        c = Object.keys(r).map(function (e) {
          return "".concat(e, "=").concat(encodeURIComponent(r[e]));
        }).join("&");
      return "".concat(this.config.wsEndpoint).concat(n, "?").concat(c, "&signature=").concat(a);
    }
  }]);
}();
var Rt = /*#__PURE__*/function () {
  function Rt(e) {
    (0,classCallCheck/* default */.A)(this, Rt);
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), e.endpoint) {
      if ("string" != typeof e.endpoint) throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e.endpoint)) throw new Error("endpoint must start with https://");
      e.endpoint = e.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e, {
      endpoint: e.endpoint || "https://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn"),
      wsEndpoint: e.wsEndpoint || "wss://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn")
    }), this._websocket = new Lt(this.config);
  }
  return (0,createClass/* default */.A)(Rt, [{
    key: "callFunction",
    value: function callFunction(e) {
      return function (e, t) {
        var n = e.name,
          s = e.data,
          _e$async = e.async,
          r = _e$async === void 0 ? !1 : _e$async,
          i = "POST",
          o = {
            "x-to-function-name": n
          };
        r && (o["x-function-invoke-type"] = "async");
        var _Pt2 = Pt("/functions/invokeFunction", {
            functionName: n,
            data: s,
            method: i,
            headers: o,
            signHeaderKeys: ["x-to-function-name"],
            config: t
          }),
          a = _Pt2.url,
          c = _Pt2.headers;
        return Tt({
          url: a,
          data: s,
          method: i,
          headers: c
        }).then(function (e) {
          var t = 0;
          if (r) {
            var _n9 = e.data || {};
            t = "200" === _n9.errCode ? 0 : _n9.errCode, e.data = _n9.data || {}, e.errMsg = _n9.errMsg;
          }
          if (0 !== t) throw new te({
            code: t,
            message: e.errMsg,
            requestId: e.requestId
          });
          return {
            errCode: t,
            success: 0 === t,
            requestId: e.requestId,
            result: e.data
          };
        }).catch(function (e) {
          throw new te({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
          });
        });
      }(e, this.config);
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref22) {
      var e = _ref22.url,
        t = _ref22.filePath,
        n = _ref22.fileType,
        s = _ref22.formData,
        r = _ref22.onUploadProgress;
      return new Promise(function (i, o) {
        var a = ne.uploadFile({
          url: e,
          filePath: t,
          fileType: n,
          formData: s,
          name: "file",
          success: function success(e) {
            e && e.statusCode < 400 ? i(e) : o(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            o(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof r && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate(function (e) {
          r({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee34(_ref23) {
        var e, _ref23$cloudPath, t, _ref23$fileType, n, s, r, i, o, a, c;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              e = _ref23.filePath, _ref23$cloudPath = _ref23.cloudPath, t = _ref23$cloudPath === void 0 ? "" : _ref23$cloudPath, _ref23$fileType = _ref23.fileType, n = _ref23$fileType === void 0 ? "image" : _ref23$fileType, s = _ref23.onUploadProgress;
              if (!("string" !== f(t))) {
                _context34.next = 3;
                break;
              }
              throw new te({
                code: "INVALID_PARAM",
                message: "cloudPath必须为字符串类型"
              });
            case 3:
              if (t = t.trim()) {
                _context34.next = 5;
                break;
              }
              throw new te({
                code: "INVALID_PARAM",
                message: "cloudPath不可为空"
              });
            case 5:
              if (!/:\/\//.test(t)) {
                _context34.next = 7;
                break;
              }
              throw new te({
                code: "INVALID_PARAM",
                message: "cloudPath不合法"
              });
            case 7:
              _context34.next = 9;
              return xt({
                path: "/".concat(t.replace(/^\//, ""), "?post_url")
              }, this.config);
            case 9:
              r = _context34.sent;
              i = r.file_id;
              o = r.upload_url;
              a = r.form_data;
              c = a && a.reduce(function (e, t) {
                return e[t.key] = t.value, e;
              }, {});
              return _context34.abrupt("return", this.uploadFileToOSS({
                url: o,
                filePath: e,
                fileType: n,
                formData: c,
                onUploadProgress: s
              }).then(function () {
                return {
                  fileID: i
                };
              }));
            case 15:
            case "end":
              return _context34.stop();
          }
        }, _callee34, this);
      }));
      function uploadFile(_x31) {
        return _uploadFile2.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee35(_ref24) {
        var _this14 = this;
        var e;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              e = _ref24.fileList;
              return _context35.abrupt("return", new Promise(function (t, n) {
                (!e || e.length < 0) && n(new te({
                  errCode: "INVALID_PARAM",
                  errMsg: "fileList不能为空数组"
                })), e.length > 50 && n(new te({
                  errCode: "INVALID_PARAM",
                  errMsg: "fileList数组长度不能超过50"
                }));
                var s = [];
                var _iterator5 = (0,createForOfIteratorHelper/* default */.A)(e),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _t10 = _step5.value;
                    "string" !== f(_t10) && n(new te({
                      errCode: "INVALID_PARAM",
                      errMsg: "fileList的元素必须是非空的字符串"
                    }));
                    var _e17 = Ot.call(_this14, _t10);
                    s.push({
                      file_id: _e17,
                      expire: 600
                    });
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
                xt({
                  path: "/?download_url",
                  data: {
                    file_list: s
                  },
                  method: "POST"
                }, _this14.config).then(function (e) {
                  var _e$file_list = e.file_list,
                    n = _e$file_list === void 0 ? [] : _e$file_list;
                  t({
                    fileList: n.map(function (e) {
                      return {
                        fileID: Et.call(_this14, e.file_id),
                        tempFileURL: e.download_url
                      };
                    })
                  });
                }).catch(function (e) {
                  return n(e);
                });
              }));
            case 2:
            case "end":
              return _context35.stop();
          }
        }, _callee35);
      }));
      function getTempFileURL(_x32) {
        return _getTempFileURL.apply(this, arguments);
      }
      return getTempFileURL;
    }()
  }, {
    key: "connectWebSocket",
    value: function () {
      var _connectWebSocket = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee36(e) {
        var t, n;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              t = e.name, n = e.query;
              return _context36.abrupt("return", ne.connectSocket({
                url: this._websocket.signedURL(t, n),
                complete: function complete() {}
              }));
            case 2:
            case "end":
              return _context36.stop();
          }
        }, _callee36, this);
      }));
      function connectWebSocket(_x33) {
        return _connectWebSocket.apply(this, arguments);
      }
      return connectWebSocket;
    }()
  }]);
}();
var Ut = {
  init: function init(e) {
    e.provider = "alipay";
    var t = new Rt(e);
    return t.auth = function () {
      return {
        signInAnonymously: function signInAnonymously() {
          return Promise.resolve();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!0);
        }
      };
    }, t;
  }
};
function Nt(_ref25) {
  var e = _ref25.data;
  var t;
  t = he();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _se2 = se(),
      _e18 = _se2.token;
    _e18 && (n.uniIdToken = _e18);
  }
  return n;
}
function Dt() {
  return _Dt.apply(this, arguments);
}
function _Dt() {
  _Dt = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee57() {
    var _this27 = this;
    var _ref67,
      e,
      t,
      _this$__dev__,
      n,
      s,
      r,
      i,
      o,
      a,
      _args6 = arguments;
    return (0,regeneratorRuntime/* default */.A)().wrap(function _callee57$(_context57) {
      while (1) switch (_context57.prev = _context57.next) {
        case 0:
          _ref67 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, e = _ref67.name, t = _ref67.data;
          _context57.next = 3;
          return this.__dev__.initLocalNetwork();
        case 3:
          _this$__dev__ = this.__dev__, n = _this$__dev__.localAddress, s = _this$__dev__.localPort, r = {
            aliyun: "aliyun",
            tencent: "tcb",
            alipay: "alipay"
          }[this.config.provider], i = this.config.spaceId, o = "http://".concat(n, ":").concat(s, "/system/check-function"), a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
          return _context57.abrupt("return", new Promise(function (t, n) {
            ne.request({
              method: "POST",
              url: o,
              data: {
                name: e,
                platform: C,
                provider: r,
                spaceId: i
              },
              timeout: 3e3,
              success: function success(e) {
                t(e);
              },
              fail: function fail() {
                t({
                  data: {
                    code: "NETWORK_ERROR",
                    message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                  }
                });
              }
            });
          }).then(function () {
            var _ref68 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref68.data;
            var _ref69 = e || {},
              t = _ref69.code,
              n = _ref69.message;
            return {
              code: 0 === t ? 0 : t || "SYS_ERR",
              message: n || "SYS_ERR"
            };
          }).then(function (_ref70) {
            var n = _ref70.code,
              s = _ref70.message;
            if (0 !== n) {
              switch (n) {
                case "MODULE_ENCRYPTED":
                  console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                  break;
                case "FUNCTION_ENCRYPTED":
                  console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                  break;
                case "ACTION_ENCRYPTED":
                  console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                  break;
                case "NETWORK_ERROR":
                  console.error(s || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
                  break;
                case "SWITCH_TO_CLOUD":
                  break;
                default:
                  {
                    var _e30 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                    throw console.error(_e30), new Error(_e30);
                  }
              }
              return _this27._callCloudFunction({
                name: e,
                data: t
              });
            }
            return new Promise(function (e, n) {
              var s = Nt.call(_this27, {
                data: t
              });
              ne.request({
                method: "POST",
                url: a,
                data: {
                  provider: r,
                  platform: C,
                  param: s
                },
                success: function success() {
                  var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    t = _ref71.statusCode,
                    s = _ref71.data;
                  return !t || t >= 400 ? n(new te({
                    code: s.code || "SYS_ERR",
                    message: s.message || "request:fail"
                  })) : e({
                    result: s
                  });
                },
                fail: function fail(e) {
                  n(new te({
                    code: e.code || e.errCode || "SYS_ERR",
                    message: e.message || e.errMsg || "request:fail"
                  }));
                }
              });
            });
          }));
        case 5:
        case "end":
          return _context57.stop();
      }
    }, _callee57, this);
  }));
  return _Dt.apply(this, arguments);
}
var Mt = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var qt = /[\\^$.*+?()[\]{}|]/g,
  Ft = RegExp(qt.source);
function Kt(e, t, n) {
  return e.replace(createSecureRegExp((s = t) && Ft.test(s) ? s.replace(qt, "\\$&") : s, "g"), n);
  var s;
}
var jt = "none",
  $t = "request",
  Bt = "response",
  Wt = "both";
var Ht = /*#__PURE__*/function () {
  function Ht() {
    var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref26.secretType,
      t = _ref26.uniCloudIns;
    (0,classCallCheck/* default */.A)(this, Ht);
    this.clientType = "", this.secretType = e || jt, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  return (0,createClass/* default */.A)(Ht, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = ae()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee37(e) {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              return _context37.abrupt("return", this.secretType === jt ? e : this.platformEncryptData(e));
            case 1:
            case "end":
              return _context37.stop();
          }
        }, _callee37, this);
      }));
      function encryptData(_x34) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee38(e) {
        var _ref27, t, n;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              if (!(this.secretType === jt)) {
                _context38.next = 2;
                break;
              }
              return _context38.abrupt("return", e);
            case 2:
              _ref27 = e || {}, t = _ref27.errCode, n = _ref27.content;
              return _context38.abrupt("return", t || !n ? e : this.secretType === $t ? n : this.platformDecryptResult(e));
            case 4:
            case "end":
              return _context38.stop();
          }
        }, _callee38, this);
      }));
      function decryptResult(_x35) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee39() {
        var _ref29,
          n,
          _ref29$data,
          s,
          r,
          _args39 = arguments;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              _ref29 = _args39.length > 0 && _args39[0] !== undefined ? _args39[0] : {}, n = _ref29.name, _ref29$data = _ref29.data, s = _ref29$data === void 0 ? {} : _ref29$data;
              _context39.next = 3;
              return t.prepare();
            case 3:
              _context39.next = 5;
              return t.platformGetSignOption();
            case 5:
              (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context39.sent;
              _context39.next = 8;
              return e({
                name: n,
                data: s
              });
            case 8:
              r = _context39.sent;
              _context39.t0 = t.isClientKeyNotFound(r);
              if (!_context39.t0) {
                _context39.next = 19;
                break;
              }
              _context39.next = 13;
              return t.prepare({
                forceUpdate: !0
              });
            case 13:
              _context39.next = 15;
              return t.platformGetSignOption();
            case 15:
              s._uniCloudOptions = _context39.sent;
              _context39.next = 18;
              return e({
                name: n,
                data: s
              });
            case 18:
              r = _context39.sent;
            case 19:
              return _context39.abrupt("return", r);
            case 20:
            case "end":
              return _context39.stop();
          }
        }, _callee39);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee40() {
        var _ref31,
          n,
          _ref31$data,
          s,
          r,
          i,
          _r5,
          _args40 = arguments;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee40$(_context40) {
          while (1) switch (_context40.prev = _context40.next) {
            case 0:
              _ref31 = _args40.length > 0 && _args40[0] !== undefined ? _args40[0] : {}, n = _ref31.name, _ref31$data = _ref31.data, s = _ref31$data === void 0 ? {} : _ref31$data;
              _context40.next = 3;
              return t.prepare();
            case 3:
              _context40.next = 5;
              return t.encryptData(s);
            case 5:
              r = _context40.sent;
              _context40.next = 8;
              return e({
                name: n,
                data: r
              });
            case 8:
              i = _context40.sent;
              if (!t.isClientKeyNotFound(i)) {
                _context40.next = 21;
                break;
              }
              _context40.next = 12;
              return t.prepare({
                forceUpdate: !0
              });
            case 12:
              _context40.next = 14;
              return t.encryptData(s);
            case 14:
              _r5 = _context40.sent;
              _context40.next = 17;
              return t.platformGetSignOption();
            case 17:
              s._uniCloudOptions = _context40.sent;
              _context40.next = 20;
              return e({
                name: n,
                data: _r5
              });
            case 20:
              i = _context40.sent;
            case 21:
              _context40.next = 23;
              return t.decryptResult(i.result);
            case 23:
              i.result = _context40.sent;
              return _context40.abrupt("return", i);
            case 25:
            case "end":
              return _context40.stop();
          }
        }, _callee40);
      }));
    }
  }]);
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function zt(e) {
  return parseInt(e) === e;
}
function Jt(e) {
  if (!zt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) if (!zt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  return !0;
}
function Vt(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Jt(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (zt(e.length) && Jt(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function Gt(e) {
  return new Uint8Array(e);
}
function Yt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Qt,
  Xt = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Vt(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Zt = (Qt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Qt[(240 & s) >> 4] + Qt[15 & s]);
      }
      return t.join("");
    }
  }),
  en = {
    16: 10,
    24: 12,
    32: 14
  },
  tn = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  nn = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  sn = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  rn = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  on = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  an = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  cn = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  un = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  hn = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  ln = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  dn = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  pn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  fn = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  gn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  mn = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function yn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  return t;
}
var _n = /*#__PURE__*/function () {
  function _n(e) {
    (0,classCallCheck/* default */.A)(this, _n);
    if (!(this instanceof _n)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Vt(e, !0)
    }), this._prepare();
  }
  return (0,createClass/* default */.A)(_n, [{
    key: "_prepare",
    value: function _prepare() {
      var e = en[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = yn(this.key);
      for (t = 0; t < r; t++) n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= nn[o >> 16 & 255] << 24 ^ nn[o >> 8 & 255] << 16 ^ nn[255 & o] << 8 ^ nn[o >> 24 & 255] ^ tn[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) i[t] ^= i[t - 1];else {
          for (t = 1; t < r / 2; t++) i[t] ^= i[t - 1];
          o = i[r / 2 - 1], i[r / 2] ^= nn[255 & o] ^ nn[o >> 8 & 255] << 8 ^ nn[o >> 16 & 255] << 16 ^ nn[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) i[t] ^= i[t - 1];
        }
        for (t = 0; t < r && c < s;) u = c >> 2, h = c % 4, this._Ke[u][h] = i[t], this._Kd[e - u][h] = i[t++], c++;
      }
      for (var u = 1; u < e; u++) for (var h = 0; h < 4; h++) o = this._Kd[u][h], this._Kd[u][h] = pn[o >> 24 & 255] ^ fn[o >> 16 & 255] ^ gn[o >> 8 & 255] ^ mn[255 & o];
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = yn(e), r = 0; r < 4; r++) s[r] ^= this._Ke[0][r];
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) n[r] = rn[s[r] >> 24 & 255] ^ on[s[(r + 1) % 4] >> 16 & 255] ^ an[s[(r + 2) % 4] >> 8 & 255] ^ cn[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        s = n.slice();
      }
      var o,
        a = Gt(16);
      for (r = 0; r < 4; r++) o = this._Ke[t][r], a[4 * r] = 255 & (nn[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (nn[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (nn[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (nn[255 & s[(r + 3) % 4]] ^ o);
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = yn(e), r = 0; r < 4; r++) s[r] ^= this._Kd[0][r];
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) n[r] = un[s[r] >> 24 & 255] ^ hn[s[(r + 3) % 4] >> 16 & 255] ^ ln[s[(r + 2) % 4] >> 8 & 255] ^ dn[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        s = n.slice();
      }
      var o,
        a = Gt(16);
      for (r = 0; r < 4; r++) o = this._Kd[t][r], a[4 * r] = 255 & (sn[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (sn[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (sn[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (sn[255 & s[(r + 1) % 4]] ^ o);
      return a;
    }
  }]);
}();
var wn = /*#__PURE__*/function () {
  function wn(e) {
    (0,classCallCheck/* default */.A)(this, wn);
    if (!(this instanceof wn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new _n(e);
  }
  return (0,createClass/* default */.A)(wn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Vt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Gt(e.length), n = Gt(16), s = 0; s < e.length; s += 16) Yt(e, n, 0, s, s + 16), Yt(n = this._aes.encrypt(n), t, s);
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Vt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Gt(e.length), n = Gt(16), s = 0; s < e.length; s += 16) Yt(e, n, 0, s, s + 16), Yt(n = this._aes.decrypt(n), t, s);
      return t;
    }
  }]);
}();
var vn = /*#__PURE__*/function () {
  function vn(e, t) {
    (0,classCallCheck/* default */.A)(this, vn);
    if (!(this instanceof vn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Gt(16);
    this._lastCipherblock = Vt(t, !0), this._aes = new _n(e);
  }
  return (0,createClass/* default */.A)(vn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Vt(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Gt(e.length), n = Gt(16), s = 0; s < e.length; s += 16) {
        Yt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) n[r] ^= this._lastCipherblock[r];
        this._lastCipherblock = this._aes.encrypt(n), Yt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Vt(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Gt(e.length), n = Gt(16), s = 0; s < e.length; s += 16) {
        Yt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) t[s + r] = n[r] ^ this._lastCipherblock[r];
        Yt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
}();
var In = /*#__PURE__*/function () {
  function In(e, t, n) {
    (0,classCallCheck/* default */.A)(this, In);
    if (!(this instanceof In)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = Gt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Vt(t, !0), this._aes = new _n(e);
  }
  return (0,createClass/* default */.A)(In, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Vt(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) n[s + r] ^= t[r];
        Yt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Yt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Vt(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) n[s + r] ^= t[r];
        Yt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Yt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
}();
var Sn = /*#__PURE__*/function () {
  function Sn(e, t) {
    (0,classCallCheck/* default */.A)(this, Sn);
    if (!(this instanceof Sn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Gt(16);
    this._lastPrecipher = Vt(t, !0), this._lastPrecipherIndex = 16, this._aes = new _n(e);
  }
  return (0,createClass/* default */.A)(Sn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Vt(e, !0), n = 0; n < t.length; n++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
}();
var bn = /*#__PURE__*/function () {
  function bn(e) {
    (0,classCallCheck/* default */.A)(this, bn);
    if (!(this instanceof bn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = Gt(16), this.setValue(e)) : this.setBytes(e);
  }
  return (0,createClass/* default */.A)(bn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e = parseInt(e / 256);
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Vt(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
}();
var kn = /*#__PURE__*/function () {
  function kn(e, t) {
    (0,classCallCheck/* default */.A)(this, kn);
    if (!(this instanceof kn)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof bn || (t = new bn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new _n(e);
  }
  return (0,createClass/* default */.A)(kn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Vt(e, !0), n = 0; n < t.length; n++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
}();
var An = {
  AES: _n,
  Counter: bn,
  ModeOfOperation: {
    ecb: wn,
    cbc: vn,
    cfb: In,
    ofb: Sn,
    ctr: kn
  },
  utils: {
    hex: Zt,
    utf8: Xt
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Vt(e, !0)).length % 16,
          n = Gt(e.length + t);
        Yt(e, n);
        for (var s = e.length; s < n.length; s++) n[s] = t;
        return n;
      },
      strip: function strip(e) {
        if ((e = Vt(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        var r = Gt(n);
        return Yt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Vt,
    createArray: Gt,
    copyArray: Yt
  }
};
function Cn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = An.utils.utf8.toBytes(n),
    i = An.utils.utf8.toBytes(e),
    o = new An.ModeOfOperation.cbc(s, r),
    a = An.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var Pn = {
    code: 2e4,
    message: "System error"
  },
  Tn = {
    code: 20101,
    message: "Invalid client"
  },
  xn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  On = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function En(e) {
  var _ref32 = e || {},
    t = _ref32.errSubject,
    n = _ref32.subject,
    s = _ref32.errCode,
    r = _ref32.errMsg,
    i = _ref32.code,
    o = _ref32.message,
    a = _ref32.cause;
  return new te({
    subject: t || n || "uni-secure-network",
    code: s || i || Pn.code,
    message: r || o,
    cause: a
  });
}
var Ln,
  Rn,
  Un = null;
var Nn = /*#__PURE__*/function (_Ht) {
  function Nn(e) {
    var _this15;
    (0,classCallCheck/* default */.A)(this, Nn);
    _this15 = (0,callSuper/* default */.A)(this, Nn, [e]), _this15.clientType = "mp-weixin", _this15.userEncryptKey = null;
    return _this15;
  }
  (0,inherits/* default */.A)(Nn, _Ht);
  return (0,createClass/* default */.A)(Nn, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee41() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee41$(_context41) {
          while (1) switch (_context41.prev = _context41.next) {
            case 0:
              if (this.isLogin()) {
                _context41.next = 7;
                break;
              }
              if (this.scopedGlobalCache.initPromise) {
                _context41.next = 3;
                break;
              }
              throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
            case 3:
              _context41.next = 5;
              return this.scopedGlobalCache.initPromise;
            case 5:
              if (this.isLogin()) {
                _context41.next = 7;
                break;
              }
              throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
            case 7:
            case "end":
              return _context41.stop();
          }
        }, _callee41, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee42() {
        var _this16 = this;
        var e;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              if (!this.userEncryptKey) {
                _context42.next = 2;
                break;
              }
              return _context42.abrupt("return", this.userEncryptKey);
            case 2:
              if (!(Un && Un.expireTime)) {
                _context42.next = 6;
                break;
              }
              e = Date.now();
              if (!(Un.expireTime - e > 0)) {
                _context42.next = 6;
                break;
              }
              return _context42.abrupt("return", (this.userEncryptKey = Un, this.userEncryptKey));
            case 6:
              return _context42.abrupt("return", new Promise(function (e, t) {
                uni.getUserCryptoManager().getLatestUserKey({
                  success: function success(t) {
                    Un = t, _this16.userEncryptKey = t, e(_this16.userEncryptKey);
                  },
                  fail: function fail(e) {
                    t(En((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, xn), {}, {
                      cause: e
                    })));
                  }
                });
              }));
            case 7:
            case "end":
              return _context42.stop();
          }
        }, _callee42, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee43() {
        var _yield$this$getUserEn, e, t, n;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              _context43.next = 2;
              return this.getUserEncryptKey();
            case 2:
              _yield$this$getUserEn = _context43.sent;
              e = _yield$this$getUserEn.encryptKey;
              t = _yield$this$getUserEn.iv;
              n = _yield$this$getUserEn.version;
              return _context43.abrupt("return", {
                verifyClientSign: Cn(JSON.stringify({
                  data: JSON.stringify({}),
                  appId: this.appId,
                  deviceId: this.deviceId,
                  wxAppId: this.getWxAppId(),
                  simulator: "devtools" === ae().platform,
                  timestamp: Date.now()
                }), e, t),
                encryptKeyId: n,
                mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
              });
            case 7:
            case "end":
              return _context43.stop();
          }
        }, _callee43, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee44(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              _context44.next = 2;
              return this.getUserEncryptKey();
            case 2:
              _yield$this$getUserEn2 = _context44.sent;
              t = _yield$this$getUserEn2.encryptKey;
              n = _yield$this$getUserEn2.iv;
              s = _yield$this$getUserEn2.version;
              r = {
                secretType: this.secretType,
                encryptKeyId: s,
                mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
              };
              return _context44.abrupt("return", this.secretType === Bt ? {
                content: e,
                _uniCloudOptions: r
              } : {
                content: Cn(JSON.stringify({
                  data: JSON.stringify(e),
                  appId: this.appId,
                  deviceId: this.deviceId,
                  wxAppId: this.getWxAppId(),
                  simulator: "devtools" === ae().platform,
                  timestamp: Date.now()
                }), t, n),
                _uniCloudOptions: r
              });
            case 8:
            case "end":
              return _context44.stop();
          }
        }, _callee44, this);
      }));
      function platformEncryptData(_x36) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee45(e) {
        var t, _yield$this$getUserEn3, n, s;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee45$(_context45) {
          while (1) switch (_context45.prev = _context45.next) {
            case 0:
              t = e.content;
              _context45.next = 3;
              return this.getUserEncryptKey();
            case 3:
              _yield$this$getUserEn3 = _context45.sent;
              n = _yield$this$getUserEn3.encryptKey;
              s = _yield$this$getUserEn3.iv;
              return _context45.abrupt("return", JSON.parse(function (e, t, n) {
                var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                  r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                  i = An.utils.utf8.toBytes(n),
                  o = new An.ModeOfOperation.cbc(r, i),
                  a = An.padding.pkcs7.strip(o.decrypt(s));
                return An.utils.utf8.fromBytes(a);
              }(t, n, s)));
            case 7:
            case "end":
              return _context45.stop();
          }
        }, _callee45, this);
      }));
      function platformDecryptResult(_x37) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
}(Ht);
function Dn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop() {
    var r = t[_s11];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref33.type,
            t = _ref33.data,
            r = _ref33.errCode,
            i = _ref33.errMsg,
            o = _ref33.errSubject,
            a = _ref33.message;
          "success" === e ? n(t) : s(En({
            errCode: r,
            errMsg: On[r] || i || a,
            errSubject: o
          }));
        }])) : s(En({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s11 = 0; _s11 < t.length; _s11++) {
    _loop();
  }
  return n;
}
var Mn = /*#__PURE__*/function (_Ht2) {
  function Mn(e) {
    var _this17;
    (0,classCallCheck/* default */.A)(this, Mn);
    _this17 = (0,callSuper/* default */.A)(this, Mn, [e]), _this17.clientType = "app", _this17.appUtils = (0,objectSpread2/* default */.A)({}, Dn(uni.requireNativePlugin("plus"))), _this17.systemInfo = Ln || (Ln = ae());
    return _this17;
  }
  (0,inherits/* default */.A)(Mn, _Ht2);
  return (0,createClass/* default */.A)(Mn, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee46() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee46$(_context46) {
          while (1) switch (_context46.prev = _context46.next) {
            case 0:
              _context46.next = 2;
              return this.appUtils.hasClientKey({
                provider: this.provider,
                spaceId: this.spaceId
              });
            case 2:
              this._hasClientKey = _context46.sent;
              return _context46.abrupt("return", this._hasClientKey);
            case 4:
            case "end":
              return _context46.stop();
          }
        }, _callee46, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee47() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee47$(_context47) {
          while (1) switch (_context47.prev = _context47.next) {
            case 0:
              _context47.next = 2;
              return this.appUtils.encryptGetClientKeyPayload({
                data: JSON.stringify({})
              });
            case 2:
              _yield$this$appUtils$ = _context47.sent;
              e = _yield$this$appUtils$.data;
              t = _yield$this$appUtils$.key;
              _context47.next = 7;
              return this.uniCloudIns.callFunction({
                name: "DCloud-clientDB",
                data: {
                  redirectTo: "encryption",
                  action: "getAppClientKey",
                  data: e,
                  key: t
                }
              });
            case 7:
              _context47.t0 = _context47.sent.result;
              if (_context47.t0) {
                _context47.next = 10;
                break;
              }
              _context47.t0 = {};
            case 10:
              n = _context47.t0;
              if (!(0 !== n.errCode)) {
                _context47.next = 13;
                break;
              }
              throw function (e) {
                return new te({
                  subject: e.errSubject || "uni-secure-network",
                  code: e.errCode || e.code || Pn.code,
                  message: e.errMsg || e.message
                });
              }(n);
            case 13:
              s = n.clientKey, r = n.key;
              _context47.next = 16;
              return this.appUtils.setClientKey({
                provider: this.provider,
                spaceId: this.spaceId,
                clientKey: s,
                key: r
              });
            case 16:
            case "end":
              return _context47.stop();
          }
        }, _callee47, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee48() {
        var _this18 = this;
        var _ref34,
          _ref34$forceUpdate,
          e,
          _args48 = arguments;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              _ref34 = _args48.length > 0 && _args48[0] !== undefined ? _args48[0] : {}, _ref34$forceUpdate = _ref34.forceUpdate, e = _ref34$forceUpdate === void 0 ? !1 : _ref34$forceUpdate;
              _context48.t1 = !0;
              _context48.next = 4;
              return this.hasClientKey();
            case 4:
              _context48.t2 = _context48.sent;
              _context48.t0 = _context48.t1 !== _context48.t2;
              if (_context48.t0) {
                _context48.next = 8;
                break;
              }
              _context48.t0 = e;
            case 8:
              if (!_context48.t0) {
                _context48.next = 10;
                break;
              }
              return _context48.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === l || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== p || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                _this18.scopedGlobalCache.initStatus = d;
              }).catch(function (e) {
                throw _this18.scopedGlobalCache.initStatus = p, e;
              }), this.scopedGlobalCache.initStatus = l), this.scopedGlobalCache.initPromise));
            case 10:
            case "end":
              return _context48.stop();
          }
        }, _callee48, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee49() {
        var _ref35,
          _ref35$forceUpdate,
          e,
          _args49 = arguments;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee49$(_context49) {
          while (1) switch (_context49.prev = _context49.next) {
            case 0:
              _ref35 = _args49.length > 0 && _args49[0] !== undefined ? _args49[0] : {}, _ref35$forceUpdate = _ref35.forceUpdate, e = _ref35$forceUpdate === void 0 ? !1 : _ref35$forceUpdate;
              _context49.next = 3;
              return this.ensureClientKey({
                forceUpdate: e
              });
            case 3:
            case "end":
              return _context49.stop();
          }
        }, _callee49, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee50() {
        var _yield$this$appUtils$2, e, t;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee50$(_context50) {
          while (1) switch (_context50.prev = _context50.next) {
            case 0:
              _context50.next = 2;
              return this.appUtils.encrypt({
                provider: this.provider,
                spaceId: this.spaceId,
                data: JSON.stringify({})
              });
            case 2:
              _yield$this$appUtils$2 = _context50.sent;
              e = _yield$this$appUtils$2.data;
              t = _yield$this$appUtils$2.key;
              return _context50.abrupt("return", {
                verifyClientSign: e,
                encryptKeyId: t
              });
            case 6:
            case "end":
              return _context50.stop();
          }
        }, _callee50, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee51(e) {
        var _yield$this$appUtils$3, t, n, s;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee51$(_context51) {
          while (1) switch (_context51.prev = _context51.next) {
            case 0:
              _context51.next = 2;
              return this.appUtils.encrypt({
                provider: this.provider,
                spaceId: this.spaceId,
                data: JSON.stringify(e)
              });
            case 2:
              _yield$this$appUtils$3 = _context51.sent;
              t = _yield$this$appUtils$3.data;
              n = _yield$this$appUtils$3.key;
              s = {
                secretType: this.secretType,
                encryptKeyId: n
              };
              return _context51.abrupt("return", this.secretType === Bt ? {
                content: e,
                _uniCloudOptions: s
              } : {
                content: t,
                _uniCloudOptions: s
              });
            case 7:
            case "end":
              return _context51.stop();
          }
        }, _callee51, this);
      }));
      function platformEncryptData(_x38) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee52(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee52$(_context52) {
          while (1) switch (_context52.prev = _context52.next) {
            case 0:
              t = e.content;
              _e$_uniCloudOptions = e._uniCloudOptions;
              n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
              s = n.encryptKeyId;
              _context52.next = 6;
              return this.appUtils.decrypt({
                provider: this.provider,
                spaceId: this.spaceId,
                data: t,
                key: s
              });
            case 6:
              r = _context52.sent;
              return _context52.abrupt("return", JSON.parse(r.data));
            case 8:
            case "end":
              return _context52.stop();
          }
        }, _callee52, this);
      }));
      function platformDecryptResult(_x39) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
}(Ht);
function qn() {
  var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref36.secretType;
  return e === $t || e === Bt || e === Wt;
}
function Fn() {
  var _ref37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref37.name,
    _ref37$data = _ref37.data,
    t = _ref37$data === void 0 ? {} : _ref37$data;
  return "app" === C && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function Kn() {
  var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref38.provider,
    t = _ref38.spaceId,
    n = _ref38.functionName;
  var _ae = ae(),
    s = _ae.appId,
    r = _ae.uniPlatform,
    i = _ae.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref39.provider,
      t = _ref39.spaceId;
    var n = A;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var h = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!h) return !1;
  if ((c[h] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), En(Tn);
}
function jn(_ref40) {
  var e = _ref40.functionName,
    t = _ref40.result,
    n = _ref40.logPvd;
  if (S && this.__dev__.debugLog && t && t.requestId) {
    var _s12 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s12, "[/").concat(n, "-request]"));
  }
}
function $n(e) {
  var t = e.callFunction,
    n = function n(_n10) {
      var _this19 = this;
      var s = _n10.name;
      _n10.data = Nt.call(e, {
        data: _n10.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb",
          alipay: "alipay"
        }[this.config.provider],
        i = qn(_n10),
        o = Fn(_n10),
        a = i || o;
      return t.call(this, _n10).then(function (e) {
        return e.errCode = 0, !a && jn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && jn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref41$message = _ref41.message,
            e = _ref41$message === void 0 ? "" : _ref41$message,
            _ref41$extraInfo = _ref41.extraInfo,
            t = _ref41$extraInfo === void 0 ? {} : _ref41$extraInfo,
            _ref41$formatter = _ref41.formatter,
            n = _ref41$formatter === void 0 ? [] : _ref41$formatter;
          for (var _s13 = 0; _s13 < n.length; _s13++) {
            var _n$_s = n[_s13],
              _r6 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r6);
            if (!_a) continue;
            var _c = _i3;
            for (var _e19 = 1; _e19 < _a.length; _e19++) _c = Kt(_c, "{$".concat(_e19, "}"), _a[_e19]);
            for (var _e20 in t) _c = Kt(_c, "{".concat(_e20, "}"), t[_e20]);
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n10.name, "]: ").concat(e.message),
          formatter: Mt,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, S && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && T ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = Dt), o = Dt) : o = n, o = o.bind(e), Fn(t)) a = n.call(e, t);else if (function (_ref42) {
      var e = _ref42.name,
        _ref42$data = _ref42.data,
        t = _ref42$data === void 0 ? {} : _ref42$data;
      return "mp-weixin" === C && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (qn(t)) {
      a = new Rn({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (Kn({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new Rn({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a.then(function (e) {
      return "undefined" != typeof UTSJSONObject && (e.result = new UTSJSONObject(e.result)), e;
    });
  };
}
Rn = "mp-weixin" !== C && "app" !== C ? /*#__PURE__*/(0,createClass/* default */.A)(function _class2() {
  (0,classCallCheck/* default */.A)(this, _class2);
  throw En({
    message: "Platform ".concat(C, " is not supported by secure network")
  });
}) : k ? "mp-weixin" === C ? Nn : Mn : /*#__PURE__*/(0,createClass/* default */.A)(function _class3() {
  (0,classCallCheck/* default */.A)(this, _class3);
  throw En({
    message: "Platform ".concat(C, " is not enabled, please check whether secure network module is enabled in your manifest.json")
  });
});
var Bn = Symbol("CLIENT_DB_INTERNAL");
function Wn(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Bn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0,esm_typeof/* default */.A)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t11 = e[n];
        return "function" == typeof _t11 ? _t11.bind(e) : _t11;
      }
      return t.get(e, n, s);
    }
  });
}
function Hn(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var zn = ["db.Geo", "db.command", "command.aggregate"];
function Jn(e, t) {
  return zn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Vn(e) {
  switch (f(e)) {
    case "array":
      return e.map(function (e) {
        return Vn(e);
      });
    case "object":
      return e._internalType === Bn || Object.keys(e).forEach(function (t) {
        e[t] = Vn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function Gn(e) {
  return e && e.content && e.content.$method;
}
var Yn = /*#__PURE__*/function () {
  function Yn(e, t, n) {
    (0,classCallCheck/* default */.A)(this, Yn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  return (0,createClass/* default */.A)(Yn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) e = e.prevStage, t.push(e.content);
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Vn(e.$param)
          };
        })
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = Gn(e),
          _n11 = Gn(e.prevStage);
        if ("aggregate" === t && "collection" === _n11 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === Gn(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = Gn(e),
          _n12 = Gn(e.prevStage);
        if ("aggregate" === t && "command" === _n12) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Qn({
          $method: e,
          $param: Vn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Vn(t)
      }), S) {
        var _e21 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t12 = _e21 && _e21.$param;
        _t12 && 1 === _t12.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
}();
function Qn(e, t, n) {
  return Wn(new Yn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Jn(s, t) ? Qn({
        $method: t
      }, e, n) : function () {
        return Qn({
          $method: t,
          $param: Vn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function Xn(_ref43) {
  var e = _ref43.path,
    t = _ref43.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0,classCallCheck/* default */.A)(this, _class4);
      this.param = Array.from(arguments);
    }
    return (0,createClass/* default */.A)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0,toConsumableArray/* default */.A)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);
  }();
}
function Zn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Wn(new e(t), {
    get: function get(e, t) {
      return Jn("db", t) ? Qn({
        $method: t
      }, null, e) : function () {
        return Qn({
          $method: t,
          $param: Vn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var es = /*#__PURE__*/function (_ref44) {
  function es() {
    (0,classCallCheck/* default */.A)(this, es);
    return (0,callSuper/* default */.A)(this, es, arguments);
  }
  (0,inherits/* default */.A)(es, _ref44);
  return (0,createClass/* default */.A)(es, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref45) {
      var _this20 = this;
      var e = _ref45.action,
        t = _ref45.command,
        n = _ref45.multiCommand,
        s = _ref45.queryList;
      function r(e, t) {
        if (n && s) for (var _n13 = 0; _n13 < s.length; _n13++) {
          var _r7 = s[_n13];
          _r7.udb && "function" == typeof _r7.udb.setResult && (t ? _r7.udb.setResult(t) : _r7.udb.setResult(e.result.dataList[_n13]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), M(q(o, "fail"), e).then(function () {
          return M(q(o, "complete"), e);
        }).then(function () {
          return r(null, e), Y(j, {
            type: W,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = M(q(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e22 = 0; _e22 < u.length; _e22++) {
          var _u$_e = u[_e22],
            _t13 = _u$_e.level,
            _n14 = _u$_e.message,
            _s14 = _u$_e.detail,
            _r8 = console["app" === C && "warn" === _t13 ? "error" : _t13] || console.log;
          var _i4 = "[System Info]" + _n14;
          _s14 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s14)), _r8(_i4);
        }
        if (t) {
          return a(new te({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (re({
          token: s,
          tokenExpired: c
        }), _this20._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this20._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Y(B, {
          token: s,
          tokenExpired: c
        }));
        var h = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2() {
          var _h$_t = h[_t14],
            n = _h$_t.prop,
            s = _h$_t.tips;
          if (n in e.result) {
            var _t15 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t15;
              }
            });
          }
        };
        for (var _t14 = 0; _t14 < h.length; _t14++) {
          _loop2();
        }
        return function (e) {
          return M(q(o, "success"), e).then(function () {
            return M(q(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Y(j, {
              type: W,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new te({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
}(/*#__PURE__*/function () {
  function _class5() {
    var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref46$uniClient = _ref46.uniClient,
      e = _ref46$uniClient === void 0 ? {} : _ref46$uniClient,
      _ref46$isJQL = _ref46.isJQL,
      t = _ref46$isJQL === void 0 ? !1 : _ref46$isJQL;
    (0,classCallCheck/* default */.A)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t || (this.auth = Hn(this._authCallBacks)), this._isJQL = t, Object.assign(this, Hn(this._dbCallBacks)), this.env = Wn({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = Wn({}, {
      get: function get(e, t) {
        return Xn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = Xn({
      path: [],
      method: "serverDate"
    }), this.RegExp = Xn({
      path: [],
      method: "RegExp"
    });
  }
  return (0,createClass/* default */.A)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0,toConsumableArray/* default */.A)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0,toConsumableArray/* default */.A)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
}());
var ts = "token无效，跳转登录页面",
  ns = "token过期，跳转登录页面",
  ss = {
    TOKEN_INVALID_TOKEN_EXPIRED: ns,
    TOKEN_INVALID_INVALID_CLIENTID: ts,
    TOKEN_INVALID: ts,
    TOKEN_INVALID_WRONG_TOKEN: ts,
    TOKEN_INVALID_ANONYMOUS_USER: ts
  },
  rs = {
    "uni-id-token-expired": ns,
    "uni-id-check-token-failed": ts,
    "uni-id-token-not-exist": ts,
    "uni-id-check-device-feature-failed": ts
  };
function is(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function os() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(is(t, e.path)) : !1 === e.needLogin && s.push(is(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function as(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function cs() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function us() {
  return as(cs());
}
function hs() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = as(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var ls = !!pages_type_origin_pages_json_.uniIdRouter;
var _ref47 = function () {
    var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pages_type_origin_pages_json_,
      _ref28$pages = _ref28.pages,
      t = _ref28$pages === void 0 ? [] : _ref28$pages,
      _ref28$subPackages = _ref28.subPackages,
      n = _ref28$subPackages === void 0 ? [] : _ref28$subPackages,
      _ref28$uniIdRouter = _ref28.uniIdRouter,
      s = _ref28$uniIdRouter === void 0 ? {} : _ref28$uniIdRouter,
      _ref28$tabBar = _ref28.tabBar,
      r = _ref28$tabBar === void 0 ? {} : _ref28$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _os = os(t),
      c = _os.needLoginPage,
      u = _os.notNeedLoginPage,
      _ref30 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _os2 = os(r, s),
            i = _os2.needLoginPage,
            o = _os2.notNeedLoginPage;
          t.push.apply(t, (0,toConsumableArray/* default */.A)(i)), n.push.apply(n, (0,toConsumableArray/* default */.A)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      h = _ref30.needLoginPage,
      l = _ref30.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0,toConsumableArray/* default */.A)(c), (0,toConsumableArray/* default */.A)(h)),
      notNeedLoginPage: [].concat((0,toConsumableArray/* default */.A)(u), (0,toConsumableArray/* default */.A)(l)),
      loginPageInTabBar: hs(i, r)
    };
  }(),
  ds = _ref47.loginPage,
  ps = _ref47.routerNeedLogin,
  fs = _ref47.resToLogin,
  gs = _ref47.needLoginPage,
  ms = _ref47.notNeedLoginPage,
  ys = _ref47.loginPageInTabBar;
if (gs.indexOf(ds) > -1) throw new Error("Login page [".concat(ds, "] should not be \"needLogin\", please check your pages.json"));
function _s(e) {
  var t = us();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0,slicedToArray/* default */.A)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e23 = 0; _e23 < r.length; _e23++) {
    var _t16 = r[_e23];
    ".." === _t16 ? i.pop() : "." !== _t16 && i.push(_t16);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function ws(e) {
  var t = as(_s(e));
  return !(ms.indexOf(t) > -1) && (gs.indexOf(t) > -1 || ps.some(function (t) {
    return function (e, t) {
      return createSecureRegExp(t).test(e);
    }(e, t);
  }));
}
function vs(_ref48) {
  var e = _ref48.redirect;
  var t = as(e),
    n = as(ds);
  return us() !== n && t !== n;
}
function Is() {
  var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref49.api,
    t = _ref49.redirect;
  if (!t || !vs({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(ds, t);
  ys ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  }, 0);
}
function Ss() {
  var _ref50 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref50.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _se3 = se(),
        e = _se3.token,
        t = _se3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e24 = "uni-id-token-expired";
          n = {
            errCode: _e24,
            errMsg: rs[_e24]
          };
        }
      } else {
        var _e25 = "uni-id-check-token-failed";
        n = {
          errCode: _e25,
          errMsg: rs[_e25]
        };
      }
      return n;
    }();
  if (ws(e) && n) {
    n.uniIdRedirectUrl = e;
    if (J($).length > 0) return setTimeout(function () {
      Y($, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function bs() {
  !function () {
    var e = cs(),
      _Ss = Ss({
        url: e
      }),
      t = _Ss.abortLoginPageJump,
      n = _Ss.autoToLoginPage;
    t || n && Is({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3() {
    var n = e[_t17];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _Ss2 = Ss({
            url: e.url
          }),
          t = _Ss2.abortLoginPageJump,
          s = _Ss2.autoToLoginPage;
        return t ? e : s ? (Is({
          api: n,
          redirect: _s(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t17 = 0; _t17 < e.length; _t17++) {
    _loop3();
  }
}
function ks() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0,esm_typeof/* default */.A)(e)) return !1;
          var _ref51 = e || {},
            t = _ref51.errCode;
          return t in rs;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0,esm_typeof/* default */.A)(e)) return !1;
          var _ref52 = e || {},
            t = _ref52.errCode;
          return t in ss;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = J($);
      Z().then(function () {
        var n = cs();
        if (n && vs({
          redirect: n
        })) return t.length > 0 ? Y($, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (ds && Is({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function As(e) {
  !function (e) {
    e.onResponse = function (e) {
      V(j, e);
    }, e.offResponse = function (e) {
      G(j, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      V($, e);
    }, e.offNeedLogin = function (e) {
      G($, e);
    }, ls && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = !0, Z().then(function () {
      bs.call(e);
    }), fs && ks.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      V(B, e);
    }, e.offRefreshToken = function (e) {
      G(B, e);
    };
  }(e);
}
var Cs;
var Ps = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  Ts = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function xs() {
  var e = se().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(Cs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
Cs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !Ts.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) t = Ps.indexOf(e.charAt(i++)) << 18 | Ps.indexOf(e.charAt(i++)) << 12 | (n = Ps.indexOf(e.charAt(i++))) << 6 | (s = Ps.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  return r;
} : atob;
var Os = n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref53) {
      var s = _ref53.onChooseFile,
        r = _ref53.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t18 = s(e);
          if (void 0 !== _t18) return Promise.resolve(_t18).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) c();
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                provider: u.provider,
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                cloudPathAsRealPath: u.cloudPathAsRealPath,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  Es = t(Os);
var Ls = "manual";
function Rs(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {},
        mixinDatacomError: null
      };
    },
    created: function created() {
      var _this21 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this21[t]);
        }), e;
      }, function (e, t) {
        if (_this21.loadtime === Ls) return;
        var n = !1;
        var s = [];
        for (var _r9 = 2; _r9 < e.length; _r9++) e[_r9] !== t[_r9] && (s.push(e[_r9]), n = !0);
        e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this22 = this;
        var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref54$getone = _ref54.getone,
          e = _ref54$getone === void 0 ? !1 : _ref54$getone,
          t = _ref54.success,
          n = _ref54.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then(function (n) {
          _this22.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this22.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, _this22.mixinDatacomError = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n15;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n;
        t = t || {}, n = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n15 = n).collection.apply(_n15, (0,toConsumableArray/* default */.A)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var h = t.orderby || this.orderby;
        h && (n = n.orderBy(h));
        var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;
      }
    }
  };
}
function Us(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0,esm_typeof/* default */.A)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n16 = n,
      s = _n16.customUI,
      r = _n16.loadingOptions,
      i = _n16.errorOptions,
      o = _n16.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        switch (c) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function () {
          var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref55.fn,
            t = _ref55.interceptorName,
            n = _ref55.getCallbackArgs;
          return /*#__PURE__*/(0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee53() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return (0,regeneratorRuntime/* default */.A)().wrap(function _callee53$(_context53) {
              while (1) switch (_context53.prev = _context53.next) {
                case 0:
                  for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    s[_key2] = _args[_key2];
                  }
                  r = n ? n({
                    params: s
                  }) : {};
                  _context53.prev = 2;
                  _context53.next = 5;
                  return M(q(t, "invoke"), (0,objectSpread2/* default */.A)({}, r));
                case 5:
                  _context53.next = 7;
                  return e.apply(void 0, s);
                case 7:
                  i = _context53.sent;
                  _context53.next = 10;
                  return M(q(t, "success"), (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, r), {}, {
                    result: i
                  }));
                case 10:
                  return _context53.abrupt("return", i);
                case 13:
                  _context53.prev = 13;
                  _context53.t0 = _context53["catch"](2);
                  o = _context53.t0;
                  _context53.next = 18;
                  return M(q(t, "fail"), (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, r), {}, {
                    error: o
                  }));
                case 18:
                  throw o;
                case 19:
                  _context53.prev = 19;
                  _context53.next = 22;
                  return M(q(t, "complete"), o ? (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, r), {}, {
                    error: o
                  }) : (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, r), {}, {
                    result: i
                  }));
                case 22:
                  return _context53.finish(19);
                case 23:
                case "end":
                  return _context53.stop();
              }
            }, _callee53, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s15 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee55() {
              var l,
                _len3,
                h,
                _key3,
                d,
                p,
                _ref57,
                f,
                g,
                m,
                y,
                _e26,
                _yield,
                _t19,
                _n17,
                _args4 = arguments;
              return (0,regeneratorRuntime/* default */.A)().wrap(function _callee55$(_context55) {
                while (1) switch (_context55.prev = _context55.next) {
                  case 0:
                    a && uni.showLoading({
                      title: r.title,
                      mask: r.mask
                    });
                    for (_len3 = _args4.length, h = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                      h[_key3] = _args4[_key3];
                    }
                    d = {
                      name: t,
                      type: u,
                      data: {
                        method: c,
                        params: h
                      }
                    };
                    "object" == (0,esm_typeof/* default */.A)(n.secretMethods) && function (e, t) {
                      var n = t.data.method,
                        s = e.secretMethods || {},
                        r = s[n] || s["*"];
                      r && (t.secretType = r);
                    }(n, d);
                    p = !1;
                    _context55.prev = 5;
                    _context55.next = 8;
                    return e.callFunction(d);
                  case 8:
                    l = _context55.sent;
                    _context55.next = 14;
                    break;
                  case 11:
                    _context55.prev = 11;
                    _context55.t0 = _context55["catch"](5);
                    p = !0, l = {
                      result: new te(_context55.t0)
                    };
                  case 14:
                    _ref57 = l.result || {}, f = _ref57.errSubject, g = _ref57.errCode, m = _ref57.errMsg, y = _ref57.newToken;
                    if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (re(y), Y(B, (0,objectSpread2/* default */.A)({}, y))), g)) {
                      _context55.next = 39;
                      break;
                    }
                    _e26 = m;
                    if (!(p && o)) {
                      _context55.next = 24;
                      break;
                    }
                    _context55.next = 20;
                    return o({
                      objectName: t,
                      methodName: c,
                      params: h,
                      errSubject: f,
                      errCode: g,
                      errMsg: m
                    });
                  case 20:
                    _context55.t1 = _context55.sent.errMsg;
                    if (_context55.t1) {
                      _context55.next = 23;
                      break;
                    }
                    _context55.t1 = m;
                  case 23:
                    _e26 = _context55.t1;
                  case 24:
                    if (!a) {
                      _context55.next = 37;
                      break;
                    }
                    if (!("toast" === i.type)) {
                      _context55.next = 29;
                      break;
                    }
                    uni.showToast({
                      title: _e26,
                      icon: "none"
                    });
                    _context55.next = 37;
                    break;
                  case 29:
                    if (!("modal" !== i.type)) {
                      _context55.next = 31;
                      break;
                    }
                    throw new Error("Invalid errorOptions.type: ".concat(i.type));
                  case 31:
                    _context55.next = 33;
                    return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee54() {
                      var _ref59,
                        e,
                        t,
                        n,
                        s,
                        r,
                        _args2 = arguments;
                      return (0,regeneratorRuntime/* default */.A)().wrap(function _callee54$(_context54) {
                        while (1) switch (_context54.prev = _context54.next) {
                          case 0:
                            _ref59 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref59.title, t = _ref59.content, n = _ref59.showCancel, s = _ref59.cancelText, r = _ref59.confirmText;
                            return _context54.abrupt("return", new Promise(function (i, o) {
                              uni.showModal({
                                title: e,
                                content: t,
                                showCancel: n,
                                cancelText: s,
                                confirmText: r,
                                success: function success(e) {
                                  i(e);
                                },
                                fail: function fail() {
                                  i({
                                    confirm: !1,
                                    cancel: !0
                                  });
                                }
                              });
                            }));
                          case 2:
                          case "end":
                            return _context54.stop();
                        }
                      }, _callee54);
                    }))({
                      title: "提示",
                      content: _e26,
                      showCancel: i.retry,
                      cancelText: "取消",
                      confirmText: i.retry ? "重试" : "确定"
                    });
                  case 33:
                    _yield = _context55.sent;
                    _t19 = _yield.confirm;
                    if (!(i.retry && _t19)) {
                      _context55.next = 37;
                      break;
                    }
                    return _context55.abrupt("return", s.apply(void 0, h));
                  case 37:
                    _n17 = new te({
                      subject: f,
                      code: g,
                      message: m,
                      requestId: l.requestId
                    });
                    throw _n17.detail = l.result, Y(j, {
                      type: z,
                      content: _n17
                    }), _n17;
                  case 39:
                    return _context55.abrupt("return", (Y(j, {
                      type: z,
                      content: l.result
                    }), l.result));
                  case 40:
                  case "end":
                    return _context55.stop();
                }
              }, _callee55, null, [[5, 11]]);
            }));
            function s() {
              return _s15.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref60 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref60.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function Ns(e) {
  return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Ds() {
  return _Ds.apply(this, arguments);
}
function _Ds() {
  _Ds = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee58() {
    var _ref72,
      e,
      _ref72$callLoginByWei,
      t,
      n,
      s,
      r,
      _args7 = arguments;
    return (0,regeneratorRuntime/* default */.A)().wrap(function _callee58$(_context58) {
      while (1) switch (_context58.prev = _context58.next) {
        case 0:
          _ref72 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, e = _ref72.openid, _ref72$callLoginByWei = _ref72.callLoginByWeixin, t = _ref72$callLoginByWei === void 0 ? !1 : _ref72$callLoginByWei;
          n = Ns(this);
          if (!("mp-weixin" !== C)) {
            _context58.next = 4;
            break;
          }
          throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(C, "`"));
        case 4:
          if (!(e && t)) {
            _context58.next = 6;
            break;
          }
          throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
        case 6:
          if (!e) {
            _context58.next = 8;
            break;
          }
          return _context58.abrupt("return", (n.mpWeixinOpenid = e, {}));
        case 8:
          _context58.next = 10;
          return new Promise(function (e, t) {
            uni.login({
              success: function success(t) {
                e(t.code);
              },
              fail: function fail(e) {
                t(new Error(e.errMsg));
              }
            });
          });
        case 10:
          s = _context58.sent;
          r = this.importObject("uni-id-co", {
            customUI: !0
          });
          _context58.next = 14;
          return r.secureNetworkHandshakeByWeixin({
            code: s,
            callLoginByWeixin: t
          });
        case 14:
          n.mpWeixinCode = s;
          return _context58.abrupt("return", {
            code: s
          });
        case 16:
        case "end":
          return _context58.stop();
      }
    }, _callee58, this);
  }));
  return _Ds.apply(this, arguments);
}
function Ms(_x40) {
  return _Ms.apply(this, arguments);
}
function _Ms() {
  _Ms = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee59(e) {
    var t;
    return (0,regeneratorRuntime/* default */.A)().wrap(function _callee59$(_context59) {
      while (1) switch (_context59.prev = _context59.next) {
        case 0:
          t = Ns(this);
          return _context59.abrupt("return", (t.initPromise || (t.initPromise = Ds.call(this, e).then(function (e) {
            return e;
          }).catch(function (e) {
            throw delete t.initPromise, e;
          })), t.initPromise));
        case 2:
        case "end":
          return _context59.stop();
      }
    }, _callee59, this);
  }));
  return _Ms.apply(this, arguments);
}
function qs(e) {
  return function () {
    var _ref61 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref61.openid,
      _ref61$callLoginByWei = _ref61.callLoginByWeixin,
      n = _ref61$callLoginByWei === void 0 ? !1 : _ref61$callLoginByWei;
    return Ms.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function Fs(e) {
  !function (e) {
    ue = e;
  }(e);
}
function Ks(e) {
  var t = {
    getSystemInfo: uni.getSystemInfo,
    getPushClientId: uni.getPushClientId
  };
  return function (n) {
    return new Promise(function (s, r) {
      t[e]((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, n), {}, {
        success: function success(e) {
          s(e);
        },
        fail: function fail(e) {
          r(e);
        }
      }));
    });
  };
}
var js = /*#__PURE__*/function (_ref62) {
  function js() {
    var _this23;
    (0,classCallCheck/* default */.A)(this, js);
    _this23 = (0,callSuper/* default */.A)(this, js), _this23._uniPushMessageCallback = _this23._receivePushMessage.bind((0,assertThisInitialized/* default */.A)(_this23)), _this23._currentMessageId = -1, _this23._payloadQueue = [];
    return _this23;
  }
  (0,inherits/* default */.A)(js, _ref62);
  return (0,createClass/* default */.A)(js, [{
    key: "init",
    value: function init() {
      var _this24 = this;
      return Promise.all([Ks("getSystemInfo")(), Ks("getPushClientId")()]).then(function () {
        var _ref63 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
          _ref64 = (0,slicedToArray/* default */.A)(_ref63, 2),
          _ref64$ = _ref64[0],
          _ref64$2 = _ref64$ === void 0 ? {} : _ref64$,
          e = _ref64$2.appId,
          _ref64$3 = _ref64[1],
          _ref64$4 = _ref64$3 === void 0 ? {} : _ref64$3,
          t = _ref64$4.cid;
        if (!e) throw new Error("Invalid appId, please check the manifest.json file");
        if (!t) throw new Error("Invalid push client id");
        _this24._appId = e, _this24._pushClientId = t, _this24._seqId = Date.now() + "-" + Math.floor(9e5 * getSecureRandom() + 1e5), _this24.emit("open"), _this24._initMessageListener();
      }, function (e) {
        throw _this24.emit("error", e), _this24.close(), e;
      });
    }
  }, {
    key: "open",
    value: function () {
      var _open = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee56() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee56$(_context56) {
          while (1) switch (_context56.prev = _context56.next) {
            case 0:
              return _context56.abrupt("return", this.init());
            case 1:
            case "end":
              return _context56.stop();
          }
        }, _callee56, this);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "_isUniCloudSSE",
    value: function _isUniCloudSSE(e) {
      if ("receive" !== e.type) return !1;
      var t = e && e.data && e.data.payload;
      return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId);
    }
  }, {
    key: "_receivePushMessage",
    value: function _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e)) return;
      var t = e && e.data && e.data.payload,
        n = t.action,
        s = t.messageId,
        r = t.message;
      this._payloadQueue.push({
        action: n,
        messageId: s,
        message: r
      }), this._consumMessage();
    }
  }, {
    key: "_consumMessage",
    value: function _consumMessage() {
      var _this25 = this;
      for (;;) {
        var _e27 = this._payloadQueue.find(function (e) {
          return e.messageId === _this25._currentMessageId + 1;
        });
        if (!_e27) break;
        this._currentMessageId++, this._parseMessagePayload(_e27);
      }
    }
  }, {
    key: "_parseMessagePayload",
    value: function _parseMessagePayload(e) {
      var t = e.action,
        n = e.messageId,
        s = e.message;
      "end" === t ? this._end({
        messageId: n,
        message: s
      }) : "message" === t && this._appendMessage({
        messageId: n,
        message: s
      });
    }
  }, {
    key: "_appendMessage",
    value: function _appendMessage() {
      var _ref65 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref65.messageId,
        t = _ref65.message;
      this.emit("message", t);
    }
  }, {
    key: "_end",
    value: function _end() {
      var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref66.messageId,
        t = _ref66.message;
      this.emit("end", t), this.close();
    }
  }, {
    key: "_initMessageListener",
    value: function _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        appId: this._appId,
        pushClientId: this._pushClientId,
        seqId: this._seqId
      };
    }
  }, {
    key: "close",
    value: function close() {
      this._destroy(), this.emit("close");
    }
  }]);
}(/*#__PURE__*/function () {
  function _class6() {
    (0,classCallCheck/* default */.A)(this, _class6);
    this._callback = {};
  }
  return (0,createClass/* default */.A)(_class6, [{
    key: "addListener",
    value: function addListener(e, t) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t);
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return this.addListener(e, t);
    }
  }, {
    key: "removeListener",
    value: function removeListener(e, t) {
      if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
      var n = this._callback[e];
      if (!n) return;
      var s = function (e, t) {
        for (var _n18 = e.length - 1; _n18 >= 0; _n18--) if (e[_n18] === t) return _n18;
        return -1;
      }(n, t);
      n.splice(s, 1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return this.removeListener(e, t);
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener(e) {
      delete this._callback[e];
    }
  }, {
    key: "emit",
    value: function emit(e) {
      var n = this._callback[e];
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }
      if (n) for (var _e28 = 0; _e28 < n.length; _e28++) n[_e28].apply(n, t);
    }
  }]);
}());
function $s(_x41, _x42) {
  return _$s.apply(this, arguments);
}
function _$s() {
  _$s = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee60(e, t) {
    var n, _e31, s;
    return (0,regeneratorRuntime/* default */.A)().wrap(function _callee60$(_context60) {
      while (1) switch (_context60.prev = _context60.next) {
        case 0:
          n = "http://".concat(e, ":").concat(t, "/system/ping");
          _context60.prev = 1;
          _context60.next = 4;
          return s = {
            url: n,
            timeout: 500
          }, new Promise(function (e, t) {
            ne.request((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, s), {}, {
              success: function success(t) {
                e(t);
              },
              fail: function fail(e) {
                t(e);
              }
            }));
          });
        case 4:
          _e31 = _context60.sent;
          return _context60.abrupt("return", !(!_e31.data || 0 !== _e31.data.code));
        case 8:
          _context60.prev = 8;
          _context60.t0 = _context60["catch"](1);
          return _context60.abrupt("return", !1);
        case 11:
        case "end":
          return _context60.stop();
      }
    }, _callee60, null, [[1, 8]]);
  }));
  return _$s.apply(this, arguments);
}
function Bs(_x43) {
  return _Bs.apply(this, arguments);
}
function _Bs() {
  _Bs = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee62(e) {
    var _ae2, _e32, _t21, t, _t$debugInfo, n, s, _yield2, r, i, o;
    return (0,regeneratorRuntime/* default */.A)().wrap(function _callee62$(_context62) {
      while (1) switch (_context62.prev = _context62.next) {
        case 0:
          if (S) {
            _context62.next = 2;
            break;
          }
          return _context62.abrupt("return", Promise.resolve());
        case 2:
          if ("app" === C) {
            _ae2 = ae(), _e32 = _ae2.osName, _t21 = _ae2.osVersion;
            "ios" === _e32 && function (e) {
              if (!e || "string" != typeof e) return 0;
              var t = e.match(/^(\d+)./);
              return t && t[1] ? parseInt(t[1]) : 0;
            }(_t21) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
          }
          t = e.__dev__;
          if (t.debugInfo) {
            _context62.next = 6;
            break;
          }
          return _context62.abrupt("return");
        case 6:
          _t$debugInfo = t.debugInfo;
          n = _t$debugInfo.address;
          s = _t$debugInfo.servePort;
          _context62.next = 11;
          return function () {
            var _ref73 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee61(e, t) {
              var n, _s16, _r10;
              return (0,regeneratorRuntime/* default */.A)().wrap(function _callee61$(_context61) {
                while (1) switch (_context61.prev = _context61.next) {
                  case 0:
                    _s16 = 0;
                  case 1:
                    if (!(_s16 < e.length)) {
                      _context61.next = 11;
                      break;
                    }
                    _r10 = e[_s16];
                    _context61.next = 5;
                    return $s(_r10, t);
                  case 5:
                    if (!_context61.sent) {
                      _context61.next = 8;
                      break;
                    }
                    n = _r10;
                    return _context61.abrupt("break", 11);
                  case 8:
                    _s16++;
                    _context61.next = 1;
                    break;
                  case 11:
                    return _context61.abrupt("return", {
                      address: n,
                      port: t
                    });
                  case 12:
                  case "end":
                    return _context61.stop();
                }
              }, _callee61);
            }));
            return function (_x44, _x45) {
              return _ref73.apply(this, arguments);
            };
          }()(n, s);
        case 11:
          _yield2 = _context62.sent;
          r = _yield2.address;
          if (!r) {
            _context62.next = 15;
            break;
          }
          return _context62.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
        case 15:
          i = console["app" === C ? "error" : "warn"];
          o = "";
          if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === C && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === C.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
            _context62.next = 19;
            break;
          }
          throw new Error(o);
        case 19:
          i(o);
        case 20:
        case "end":
          return _context62.stop();
      }
    }, _callee62);
  }));
  return _Bs.apply(this, arguments);
}
function Ws(e) {
  e._initPromiseHub || (e._initPromiseHub = new v({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var Hs = {
  tcb: St,
  tencent: St,
  aliyun: pe,
  private: kt,
  alipay: Ut
};
var zs = new (/*#__PURE__*/function () {
  function _class7() {
    (0,classCallCheck/* default */.A)(this, _class7);
  }
  return (0,createClass/* default */.A)(_class7, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = Hs[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), S && function (e) {
        if (!S) return;
        var t = {};
        e.__dev__ = t, t.debugLog = S && ("web" === C && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === C);
        var n = P;
        n && !n.code && (t.debugInfo = n);
        var s = new v({
          createPromise: function createPromise() {
            return Bs(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), Ws(t), $n(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = Zn(es, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = Zn(es, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = xs, e.chooseAndUploadFile = Es.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return Rs(e);
          }
        }), e.SSEChannel = js, e.initSecureNetworkByWeixin = qs(e), e.setCustomClientInfo = Fs, e.importObject = Us(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this26 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e29 = n && n.type || c;
              s = _e29 !== c;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _ee2 = ee(n),
              o = _ee2.success,
              a = _ee2.fail,
              u = _ee2.complete,
              h = i.then(function () {
                return s ? Promise.resolve() : M(q(t, "invoke"), n);
              }).then(function () {
                return e.call(_this26, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : M(q(t, "success"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return r && Y(j, {
                    type: H,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : M(q(t, "fail"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return Y(j, {
                    type: H,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || u)) return h;
            h.then(function (e) {
              o && o(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            }, function (e) {
              a && a(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
}())();
(function () {
  var e = T;
  var t = {};
  if (e && 1 === e.length) t = e[0], zs = zs.init(t), zs._isDefault = !0;else {
    var _t20 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n19;
    _n19 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : x ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t20.forEach(function (e) {
      zs[e] = function () {
        return console.error(_n19), Promise.reject(new te({
          code: "SYS_ERR",
          message: _n19
        }));
      };
    });
  }
  Object.assign(zs, {
    get mixinDatacom() {
      return Rs(zs);
    }
  }), As(zs), zs.addInterceptor = N, zs.removeInterceptor = D, zs.interceptObject = F, S && "web" === C && (window.uniCloud = zs);
})();
var Js = zs;


/***/ }),

/***/ 8921:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(46518);
var lastIndexOf = __webpack_require__(8379);

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ 55081:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(46518);
var globalThis = __webpack_require__(44576);

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true, forced: globalThis.globalThis !== globalThis }, {
  globalThis: globalThis
});


/***/ }),

/***/ 48523:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var collection = __webpack_require__(16468);
var collectionStrong = __webpack_require__(86938);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 36033:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(48523);


/***/ }),

/***/ 64601:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(46518);

// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
$({ target: 'Number', stat: true, nonConfigurable: true, nonWritable: true }, {
  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
});


/***/ }),

/***/ 69479:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(44576);
var DESCRIPTORS = __webpack_require__(43724);
var defineBuiltInAccessor = __webpack_require__(62106);
var regExpFlags = __webpack_require__(67979);
var fails = __webpack_require__(79039);

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = globalThis.RegExp;
var RegExpPrototype = RegExp.prototype;

var FORCED = DESCRIPTORS && fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});


/***/ }),

/***/ 13611:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(46518);
var globalThis = __webpack_require__(44576);
var defineBuiltInAccessor = __webpack_require__(62106);
var DESCRIPTORS = __webpack_require__(43724);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var INCORRECT_VALUE = globalThis.self !== globalThis;

// `self` getter
// https://html.spec.whatwg.org/multipage/window-object.html#dom-self
try {
  if (DESCRIPTORS) {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var descriptor = Object.getOwnPropertyDescriptor(globalThis, 'self');
    // some engines have `self`, but with incorrect descriptor
    // https://github.com/denoland/deno/issues/15765
    if (INCORRECT_VALUE || !descriptor || !descriptor.get || !descriptor.enumerable) {
      defineBuiltInAccessor(globalThis, 'self', {
        get: function self() {
          return globalThis;
        },
        set: function self(value) {
          if (this !== globalThis) throw new $TypeError('Illegal invocation');
          defineProperty(globalThis, 'self', {
            value: value,
            writable: true,
            configurable: true,
            enumerable: true
          });
        },
        configurable: true,
        enumerable: true
      });
    }
  } else $({ global: true, simple: true, forced: INCORRECT_VALUE }, {
    self: globalThis
  });
} catch (error) { /* empty */ }


/***/ }),

/***/ 89848:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ })

}]);