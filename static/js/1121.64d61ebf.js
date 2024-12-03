
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
          
          // 如果已经在处理这个模式，直接返回一个安全的默认值
          if (regexpCallStack.has(callId)) {
            return new RegExp('.*');
          }

          try {
            // 添加到调用栈
            regexpCallStack.add(callId);

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

            // 如果是路由模式，直接返回原始正则表达式
            if (pattern && typeof pattern === 'string' && isRoutePattern(pattern)) {
              return new RegExp(pattern, flags || '');
            }

            // 获取正则表达式源字符串
            const source = (pattern instanceof RegExp) ? pattern.source : 
                         (typeof pattern === 'string') ? pattern.replace(/^['"]|['"]$/g, '') : 
                         '.*';

            // 如果模式太长或为空，返回安全模式
            if (!source || source.length > 500) {
              return new RegExp('.*');
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
              source.split('(').length > 5 ||  // 太多分组
              source.split('[').length > 5     // 太多字符类
            );

            if (hasDangerousFeatures) {
              return new RegExp('.*');
            }

            // 尝试创建正则表达式
            return new RegExp(source, flags || '');
          } catch(e) {
            console.warn("RegExp Error:", e);
            return new RegExp('.*');
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
    (self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[1121],{

/***/ 23335:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11675);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("493ff52e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 70491:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ uni_forms; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue?vue&type=template&id=15bbdc00&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"uni-forms"},[_c('v-uni-form',[_vm._t("default")],2)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2775);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(50113);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(47764);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(98992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.find.js
var esnext_iterator_find = __webpack_require__(72577);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(62953);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js + 1 modules
var callSuper = __webpack_require__(57756);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(91913);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js
var readOnlyError = __webpack_require__(48757);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(63065);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51729);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(65376);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__(76918);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(48980);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(58940);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(84864);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.dot-all.js
var es_regexp_dot_all = __webpack_require__(57465);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__(87745);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(90906);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(38781);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(31415);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.difference.v2.js
var es_set_difference_v2 = __webpack_require__(17642);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.intersection.v2.js
var es_set_intersection_v2 = __webpack_require__(58004);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js
var es_set_is_disjoint_from_v2 = __webpack_require__(33853);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-subset-of.v2.js
var es_set_is_subset_of_v2 = __webpack_require__(45876);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.is-superset-of.v2.js
var es_set_is_superset_of_v2 = __webpack_require__(32475);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.symmetric-difference.v2.js
var es_set_symmetric_difference_v2 = __webpack_require__(15024);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.union.v2.js
var es_set_union_v2 = __webpack_require__(31698);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(71761);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(11392);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__(54520);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-forms/validate.js








































var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i')
};
var FORMAT_MAPPING = {
  "int": 'integer',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number',
  "password": '[REDACTED]'
  // "fileurls": 'array'
};
function formatMessage(args) {
  var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultMessage = ['label'];
  defaultMessage.forEach(function (item) {
    if (args[item] === undefined) {
      args[item] = '';
    }
  });
  var str = resources;
  for (var key in args) {
    var reg = createSecureRegExp('{' + key + '}');
    str = str.replace(reg, args[key]);
  }
  return str;
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === 'string' && !value) {
    return true;
  }
  if (Array.isArray(value) && !value.length) {
    return true;
  }
  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }
  return false;
}
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string: function string(value) {
    return typeof value === 'string';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function boolean(value) {
    return typeof value === 'boolean';
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  object: function object(value) {
    return (0,esm_typeof/* default */.A)(value) === 'object' && !types.array(value);
  },
  date: function date(value) {
    return value instanceof Date;
  },
  timestamp: function timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false;
    }
    return true;
  },
  file: function file(value) {
    return typeof value.url === 'string';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern: function pattern(reg, value) {
    try {
      return createSecureRegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  idcard: function idcard(value) {
    return typeof value === 'string' && !!value.match(pattern.idcard);
  },
  'url-https': function urlHttps(value) {
    return this.url(value) && value.startsWith('https://');
  },
  'url-scheme': function urlScheme(value) {
    return value.startsWith('://');
  },
  'url-web': function urlWeb(value) {
    return false;
  }
};
var RuleValidator = /*#__PURE__*/function () {
  function RuleValidator(message) {
    (0,classCallCheck/* default */.A)(this, RuleValidator);
    this._message = message;
  }
  return (0,createClass/* default */.A)(RuleValidator, [{
    key: "validateRule",
    value: function () {
      var _validateRule = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee(fieldKey, fieldValue, value, data, allData) {
        var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              result = null;
              rules = fieldValue.rules;
              hasRequired = rules.findIndex(function (item) {
                return item.required;
              });
              if (!(hasRequired < 0)) {
                _context.next = 8;
                break;
              }
              if (!(value === null || value === undefined)) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return", result);
            case 6:
              if (!(typeof value === 'string' && !value.length)) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return", result);
            case 8:
              message = this._message;
              if (!(rules === undefined)) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return", message['default']);
            case 11:
              i = 0;
            case 12:
              if (!(i < rules.length)) {
                _context.next = 35;
                break;
              }
              rule = rules[i];
              vt = this._getValidateType(rule);
              Object.assign(rule, {
                label: fieldValue.label || "[\"".concat(fieldKey, "\"]")
              });
              if (!RuleValidatorHelper[vt]) {
                _context.next = 20;
                break;
              }
              result = RuleValidatorHelper[vt](rule, value, message);
              if (!(result != null)) {
                _context.next = 20;
                break;
              }
              return _context.abrupt("break", 35);
            case 20:
              if (!rule.validateExpr) {
                _context.next = 26;
                break;
              }
              now = Date.now();
              resultExpr = rule.validateExpr(value, allData, now);
              if (!(resultExpr === false)) {
                _context.next = 26;
                break;
              }
              result = this._getMessage(rule, rule.errorMessage || this._message['default']);
              return _context.abrupt("break", 35);
            case 26:
              if (!rule.validateFunction) {
                _context.next = 32;
                break;
              }
              _context.next = 29;
              return this.validateFunction(rule, value, data, allData, vt);
            case 29:
              result = _context.sent;
              if (!(result !== null)) {
                _context.next = 32;
                break;
              }
              return _context.abrupt("break", 35);
            case 32:
              i++;
              _context.next = 12;
              break;
            case 35:
              if (result !== null) {
                result = message.TAG + result;
              }
              return _context.abrupt("return", result);
            case 37:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function validateRule(_x, _x2, _x3, _x4, _x5) {
        return _validateRule.apply(this, arguments);
      }
      return validateRule;
    }()
  }, {
    key: "validateFunction",
    value: function () {
      var _validateFunction = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2(rule, value, data, allData, vt) {
        var result, callbackMessage, res;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              result = null;
              _context2.prev = 1;
              callbackMessage = null;
              _context2.next = 5;
              return rule.validateFunction(rule, value, allData || data, function (message) {
                callbackMessage = message;
              });
            case 5:
              res = _context2.sent;
              if (callbackMessage || typeof res === 'string' && res || res === false) {
                result = this._getMessage(rule, callbackMessage || res, vt);
              }
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              result = this._getMessage(rule, _context2.t0.message, vt);
            case 12:
              return _context2.abrupt("return", result);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 9]]);
      }));
      function validateFunction(_x6, _x7, _x8, _x9, _x10) {
        return _validateFunction.apply(this, arguments);
      }
      return validateFunction;
    }()
  }, {
    key: "_getMessage",
    value: function _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);
    }
  }, {
    key: "_getValidateType",
    value: function _getValidateType(rule) {
      var result = '';
      if (rule.required) {
        result = 'required';
      } else if (rule.format) {
        result = 'format';
      } else if (rule.arrayType) {
        result = 'arrayTypeFormat';
      } else if (rule.range) {
        result = 'range';
      } else if (rule.maximum !== undefined || rule.minimum !== undefined) {
        result = 'rangeNumber';
      } else if (rule.maxLength !== undefined || rule.minLength !== undefined) {
        result = 'rangeLength';
      } else if (rule.pattern) {
        result = 'pattern';
      } else if (rule.validateFunction) {
        result = 'validateFunction';
      }
      return result;
    }
  }]);
}();
var RuleValidatorHelper = {
  required: function required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || (0,esm_typeof/* default */.A)(value))) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }
    return null;
  },
  range: function range(rule, value, message) {
    var range = rule.range,
      errorMessage = rule.errorMessage;
    var list = new Array(range.length);
    for (var i = 0; i < range.length; i++) {
      var item = range[i];
      if (types.object(item) && item.value !== undefined) {
        list[i] = item.value;
      } else {
        list[i] = item;
      }
    }
    var result = false;
    if (Array.isArray(value)) {
      result = new Set(value.concat(list)).size === list.length;
    } else {
      if (list.indexOf(value) > -1) {
        result = true;
      }
    }
    if (!result) {
      return formatMessage(rule, errorMessage || message['enum']);
    }
    return null;
  },
  rangeNumber: function rangeNumber(rule, value, message) {
    if (!types.number(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var minimum = rule.minimum,
      maximum = rule.maximum,
      exclusiveMinimum = rule.exclusiveMinimum,
      exclusiveMaximum = rule.exclusiveMaximum;
    var min = exclusiveMinimum ? value <= minimum : value < minimum;
    var max = exclusiveMaximum ? value >= maximum : value > maximum;
    if (minimum !== undefined && min) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMinimum ? 'exclusiveMinimum' : 'minimum']);
    } else if (maximum !== undefined && max) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMaximum ? 'exclusiveMaximum' : 'maximum']);
    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range);
    }
    return null;
  },
  rangeLength: function rangeLength(rule, value, message) {
    if (!types.string(value) && !types.array(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var min = rule.minLength;
    var max = rule.maxLength;
    var val = value.length;
    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['length'].minLength);
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['length'].maxLength);
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['length'].range);
    }
    return null;
  },
  pattern: function pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    return null;
  },
  format: function format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
    }
    return null;
  },
  arrayTypeFormat: function arrayTypeFormat(rule, value, message) {
    if (!Array.isArray(value)) {
      return formatMessage(rule, rule.errorMessage || message.typeError);
    }
    for (var i = 0; i < value.length; i++) {
      var element = value[i];
      var formatResult = this.format(rule, element, message);
      if (formatResult !== null) {
        return formatResult;
      }
    }
    return null;
  }
};
var SchemaValidator = /*#__PURE__*/function (_RuleValidator) {
  function SchemaValidator(schema, options) {
    var _this;
    (0,classCallCheck/* default */.A)(this, SchemaValidator);
    _this = (0,callSuper/* default */.A)(this, SchemaValidator, [SchemaValidator.message]);
    _this._schema = schema;
    _this._options = options || null;
    return _this;
  }
  (0,inherits/* default */.A)(SchemaValidator, _RuleValidator);
  return (0,createClass/* default */.A)(SchemaValidator, [{
    key: "updateSchema",
    value: function updateSchema(schema) {
      this._schema = schema;
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee3(data, allData) {
        var result;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              result = this._checkFieldInSchema(data);
              if (result) {
                _context3.next = 5;
                break;
              }
              _context3.next = 4;
              return this.invokeValidate(data, false, allData);
            case 4:
              result = _context3.sent;
            case 5:
              return _context3.abrupt("return", result.length ? result[0] : null);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function validate(_x11, _x12) {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
  }, {
    key: "validateAll",
    value: function () {
      var _validateAll = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee4(data, allData) {
        var result;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              result = this._checkFieldInSchema(data);
              if (result) {
                _context4.next = 5;
                break;
              }
              _context4.next = 4;
              return this.invokeValidate(data, true, allData);
            case 4:
              result = _context4.sent;
            case 5:
              return _context4.abrupt("return", result);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function validateAll(_x13, _x14) {
        return _validateAll.apply(this, arguments);
      }
      return validateAll;
    }()
  }, {
    key: "validateUpdate",
    value: function () {
      var _validateUpdate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee5(data, allData) {
        var result;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              result = this._checkFieldInSchema(data);
              if (result) {
                _context5.next = 5;
                break;
              }
              _context5.next = 4;
              return this.invokeValidateUpdate(data, false, allData);
            case 4:
              result = _context5.sent;
            case 5:
              return _context5.abrupt("return", result.length ? result[0] : null);
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function validateUpdate(_x15, _x16) {
        return _validateUpdate.apply(this, arguments);
      }
      return validateUpdate;
    }()
  }, {
    key: "invokeValidate",
    value: function () {
      var _invokeValidate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee6(data, all, allData) {
        var result, schema, key, value, errorMessage;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              result = [];
              schema = this._schema;
              _context6.t0 = (0,regeneratorRuntime/* default */.A)().keys(schema);
            case 3:
              if ((_context6.t1 = _context6.t0()).done) {
                _context6.next = 15;
                break;
              }
              key = _context6.t1.value;
              value = schema[key];
              _context6.next = 8;
              return this.validateRule(key, value, data[key], data, allData);
            case 8:
              errorMessage = _context6.sent;
              if (!(errorMessage != null)) {
                _context6.next = 13;
                break;
              }
              result.push({
                key: key,
                errorMessage: errorMessage
              });
              if (all) {
                _context6.next = 13;
                break;
              }
              return _context6.abrupt("break", 15);
            case 13:
              _context6.next = 3;
              break;
            case 15:
              return _context6.abrupt("return", result);
            case 16:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function invokeValidate(_x17, _x18, _x19) {
        return _invokeValidate.apply(this, arguments);
      }
      return invokeValidate;
    }()
  }, {
    key: "invokeValidateUpdate",
    value: function () {
      var _invokeValidateUpdate = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee7(data, all, allData) {
        var result, key, errorMessage;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              result = [];
              _context7.t0 = (0,regeneratorRuntime/* default */.A)().keys(data);
            case 2:
              if ((_context7.t1 = _context7.t0()).done) {
                _context7.next = 13;
                break;
              }
              key = _context7.t1.value;
              _context7.next = 6;
              return this.validateRule(key, this._schema[key], data[key], data, allData);
            case 6:
              errorMessage = _context7.sent;
              if (!(errorMessage != null)) {
                _context7.next = 11;
                break;
              }
              result.push({
                key: key,
                errorMessage: errorMessage
              });
              if (all) {
                _context7.next = 11;
                break;
              }
              return _context7.abrupt("break", 13);
            case 11:
              _context7.next = 2;
              break;
            case 13:
              return _context7.abrupt("return", result);
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function invokeValidateUpdate(_x20, _x21, _x22) {
        return _invokeValidateUpdate.apply(this, arguments);
      }
      return invokeValidateUpdate;
    }()
  }, {
    key: "_checkFieldInSchema",
    value: function _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return '';
      }
      var noExistFields = keys.filter(function (key) {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message['defaultInvalid']);
      return [{
        key: 'invalid',
        errorMessage: errorMessage
      }];
    }
  }]);
}(RuleValidator);
function Message() {
  return {
    TAG: "",
    default: '验证错误',
    defaultInvalid: '提交的字段{field}在数据库中并不存在',
    validateFunction: '验证无效',
    required: '{label}必填',
    'enum': '{label}超出范围',
    timestamp: '{label}格式无效',
    whitespace: '{label}不能为空',
    typeError: '{label}类型无效',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效'
    },
    length: {
      minLength: '{label}长度不能少于{minLength}',
      maxLength: '{label}长度不能超过{maxLength}',
      range: '{label}必须介于{minLength}和{maxLength}之间'
    },
    number: {
      minimum: '{label}不能小于{minimum}',
      maximum: '{label}不能大于{maximum}',
      exclusiveMinimum: '{label}不能小于等于{minimum}',
      exclusiveMaximum: '{label}不能大于等于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间'
    },
    pattern: {
      mismatch: '{label}格式不匹配'
    }
  };
}
SchemaValidator.message = new Message();
/* harmony default export */ var validate = (SchemaValidator);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(62062);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(72712);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-names.js
var es_object_get_own_property_names = __webpack_require__(1480);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(81454);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.reduce.js
var esnext_iterator_reduce = __webpack_require__(8872);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-forms/utils.js



















/**
 * 简单处理对象拷贝
 * @param {Obejct} 被拷贝对象
 * @@return {Object} 拷贝对象
 */
var deepCopy = function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
};
/**
 * 过滤数字类型
 * @param {String} format 数字类型
 * @@return {Boolean} 返回是否为数字类型
 */
var typeFilter = function typeFilter(format) {
  return format === 'int' || format === 'double' || format === 'number' || format === 'timestamp';
};

/**
 * 把 value 转换成指定的类型，用于处理初始值，原因是初始值需要入库不能为 undefined
 * @param {String} key 字段名
 * @param {any} value 字段值
 * @param {Object} rules 表单校验规则
 */
var getValue = function getValue(key, value, rules) {
  var isRuleNumType = rules.find(function (val) {
    return val.format && typeFilter(val.format);
  });
  var isRuleBoolType = rules.find(function (val) {
    return val.format && val.format === 'boolean' || val.format === 'bool';
  });
  // 输入类型为 number
  if (!!isRuleNumType) {
    if (!value && value !== 0) {
      value = null;
    } else {
      value = isNumber(Number(value)) ? Number(value) : value;
    }
  }

  // 输入类型为 boolean
  if (!!isRuleBoolType) {
    value = isBoolean(value) ? value : false;
  }
  return value;
};

/**
 * 获取表单数据
 * @param {String|Array} name 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 * @param {any} value  需要设置的值
 */
var setDataValue = function setDataValue(field, formdata, value) {
  formdata[field] = value;
  return value || '';
};

/**
 * 获取表单数据
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 */
var getDataValue = function getDataValue(field, data) {
  return objGet(data, field);
};

/**
 * 获取表单类型
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 */
var getDataValueType = function getDataValueType(field, data) {
  var value = getDataValue(field, data);
  return {
    type: type(value),
    value: value
  };
};

/**
 * 获取表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
var realName = function realName(name) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var base_name = _basePath(name);
  if ((0,esm_typeof/* default */.A)(base_name) === 'object' && Array.isArray(base_name) && base_name.length > 1) {
    var realname = base_name.reduce(function (a, b) {
      return a += "#".concat(b);
    }, '_formdata_');
    return realname;
  }
  return base_name[0] || name;
};

/**
 * 判断是否表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
var isRealName = function isRealName(name) {
  var reg = /^_formdata_#*/;
  return reg.test(name);
};

/**
 * 获取表单数据的原始格式
 * @@return {Object|Array} object 需要解析的数据
 */
var rawData = function rawData() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var newData = JSON.parse(JSON.stringify(object));
  var formData = {};
  for (var i in newData) {
    var path = name2arr(i);
    objSet(formData, path, newData[i]);
  }
  return formData;
};

/**
 * 真实name还原为 array
 * @param {*} name 
 */
var name2arr = function name2arr(name) {
  var field = name.replace('_formdata_#', '');
  field = field.split('#').map(function (v) {
    return isNumber(v) ? Number(v) : v;
  });
  return field;
};

/**
 * 对象中设置值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} value 需要设置的值
 */
var objSet = function objSet(object, path, value) {
  if ((0,esm_typeof/* default */.A)(object) !== 'object') return object;
  _basePath(path).reduce(function (o, k, i, _) {
    if (i === _.length - 1) {
      // 若遍历结束直接赋值
      o[k] = value;
      return null;
    } else if (k in o) {
      // 若存在对应路径，则返回找到的对象，进行下一次遍历
      return o[k];
    } else {
      // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象
      o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
      return o[k];
    }
  }, object);
  // 返回object
  return object;
};

// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用
function _basePath(path) {
  // 若是数组，则直接返回
  if (Array.isArray(path)) return path;
  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

/**
 * 从对象中获取值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} defaultVal 如果无法从调用链中获取值的默认值
 */
var objGet = function objGet(object, path) {
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';
  // 先将path处理成统一格式
  var newPath = _basePath(path);
  // 递归处理，返回最后结果
  var val = newPath.reduce(function (o, k) {
    return (o || {})[k];
  }, object);
  return !val || val !== undefined ? val : defaultVal;
};

/**
 * 是否为 number 类型 
 * @param {any} num 需要判断的值
 * @return {Boolean} 是否为 number
 */
var isNumber = function isNumber(num) {
  return !isNaN(Number(num));
};

/**
 * 是否为 boolean 类型 
 * @param {any} bool 需要判断的值
 * @return {Boolean} 是否为 boolean
 */
var isBoolean = function isBoolean(bool) {
  return typeof bool === 'boolean';
};
/**
 * 是否有必填字段
 * @param {Object} rules 规则
 * @return {Boolean} 是否有必填字段
 */
var isRequiredField = function isRequiredField(rules) {
  var isNoField = false;
  for (var i = 0; i < rules.length; i++) {
    var ruleData = rules[i];
    if (ruleData.required) {
      isNoField = true;
      break;
    }
  }
  return isNoField;
};

/**
 * 获取数据类型
 * @param {Any} obj 需要获取数据类型的值
 */
var type = function type(obj) {
  var class2type = {};

  // 生成class2type映射
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });
  if (obj == null) {
    return obj + "";
  }
  return _typeof(obj) === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : _typeof(obj);
};

/**
 * 判断两个值是否相等
 * @param {any} a 值  
 * @param {any} b 值  
 * @return {Boolean} 是否相等
 */
var isEqual = function isEqual(a, b) {
  //如果a和b本来就全等
  if (a === b) {
    //判断是否为0和-0
    return a !== 0 || 1 / a === 1 / b;
  }
  //判断是否为null和undefined
  if (a == null || b == null) {
    return a === b;
  }
  //接下来判断a和b的数据类型
  var classNameA = toString.call(a),
    classNameB = toString.call(b);
  //如果数据类型不相等，则返回false
  if (classNameA !== classNameB) {
    return false;
  }
  //如果数据类型相等，再根据不同数据类型分别判断
  switch (classNameA) {
    case '[object RegExp]':
    case '[object String]':
      //进行字符串转换比较
      return '' + a === '' + b;
    case '[object Number]':
      //进行数字转换比较,判断是否为NaN
      if (+a !== +a) {
        return +b !== +b;
      }
      //判断是否为0或-0
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }
  //如果是对象类型
  if (classNameA == '[object Object]') {
    //获取a和b的属性长度
    var propsA = Object.getOwnPropertyNames(a),
      propsB = Object.getOwnPropertyNames(b);
    if (propsA.length != propsB.length) {
      return false;
    }
    for (var i = 0; i < propsA.length; i++) {
      var propName = propsA[i];
      //如果对应属性对应值不相等，则返回false
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }
  //如果是数组类型
  if (classNameA == '[object Array]') {
    if (a.toString() == b.toString()) {
      return true;
    }
    return false;
  }
};
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(85476);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue?vue&type=script&lang=js&
/* provided dependency */ var console = __webpack_require__(43859)["A"];


















//
//
//
//
//
//
//
//




// 后续会慢慢废弃这个方法

vue_runtime_esm/* default */.A.prototype.binddata = function (name, value, formName) {
  if (formName) {
    this.$refs[formName].setValue(name, value);
  } else {
    var formVm;
    for (var i in this.$refs) {
      var vm = this.$refs[i];
      if (vm && vm.$options && vm.$options.name === 'uniForms') {
        formVm = vm;
        break;
      }
    }
    if (!formVm) return console.error('当前 uni-froms 组件缺少 ref 属性');
    formVm.setValue(name, value);
  }
};

/**
 * Forms 表单
 * @description 由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
 * @tutorial https://ext.dcloud.net.cn/plugin?id=2773
 * @property {Object} rules	表单校验规则
 * @property {String} validateTrigger = [bind|submit|blur]	校验触发器方式 默认 submit
 * @value bind		发生变化时触发
 * @value submit	提交时触发
 * @value blur	  失去焦点时触发
 * @property {String} labelPosition = [top|left]	label 位置 默认 left
 * @value top		顶部显示 label
 * @value left	左侧显示 label
 * @property {String} labelWidth	label 宽度，默认 70px
 * @property {String} labelAlign = [left|center|right]	label 居中方式  默认 left
 * @value left		label 左侧显示
 * @value center	label 居中
 * @value right		label 右侧对齐
 * @property {String} errShowType = [undertext|toast|modal]	校验错误信息提示方式
 * @value undertext	错误信息在底部显示
 * @value toast			错误信息toast显示
 * @value modal			错误信息modal显示
 * @event {Function} submit	提交时触发
 * @event {Function} validate	校验结果发生变化触发
 */
/* harmony default export */ var uni_formsvue_type_script_lang_js_ = ({
  name: 'uniForms',
  emits: ['validate', 'submit'],
  options: {
    virtualHost: true
  },
  props: {
    // 即将弃用
    value: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    // vue3 替换 value 属性
    modelValue: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
    model: {
      type: Object,
      default: function _default() {
        return null;
      }
    },
    // 表单校验规则
    rules: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
    errShowType: {
      type: String,
      default: 'undertext'
    },
    // 校验触发器方式 默认 bind 取值 [bind|submit]
    validateTrigger: {
      type: String,
      default: 'submit'
    },
    // label 位置，默认 left 取值  top/left
    labelPosition: {
      type: String,
      default: 'left'
    },
    // label 宽度
    labelWidth: {
      type: [String, Number],
      default: ''
    },
    // label 居中方式，默认 left 取值 left/center/right
    labelAlign: {
      type: String,
      default: 'left'
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  provide: function provide() {
    return {
      uniForm: this
    };
  },
  data: function data() {
    return {
      // 表单本地值的记录，不应该与传如的值进行关联
      formData: {},
      formRules: {}
    };
  },
  computed: {
    // 计算数据源变化的
    localData: function localData() {
      var localVal = this.model || this.modelValue || this.value;
      if (localVal) {
        return deepCopy(localVal);
      }
      return {};
    }
  },
  watch: {
    // 监听数据变化 ,暂时不使用，需要单独赋值
    // localData: {},
    // 监听规则变化
    rules: {
      handler: function handler(val, oldVal) {
        this.setRules(val);
      },
      deep: true,
      immediate: true
    }
  },
  created: function created() {
    // 子组件实例数组
    this.childrens = [];
    // TODO 兼容旧版 uni-data-picker ,新版本中无效，只是避免报错
    this.inputChildrens = [];
    this.setRules(this.rules);
  },
  methods: {
    /**
     * 外部调用方法
     * 设置规则 ，主要用于小程序自定义检验规则
     * @param {Array} rules 规则源数据
     */
    setRules: function setRules(rules) {
      // TODO 有可能子组件合并规则的时机比这个要早，所以需要合并对象 ，而不是直接赋值，可能会被覆盖
      this.formRules = Object.assign({}, this.formRules, rules);
      // 初始化校验函数
      this.validator = new validate(rules);
    },
    /**
     * 外部调用方法
     * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
     * @param {Object} key
     * @param {Object} value
     */
    setValue: function setValue(key, value) {
      var example = this.childrens.find(function (child) {
        return child.name === key;
      });
      if (!example) return null;
      this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
      return example.onFieldChange(this.formData[key]);
    },
    /**
     * 外部调用方法
     * 手动提交校验表单
     * 对整个表单进行校验的方法，参数为一个回调函数。
     * @param {Array} keepitem 保留不参与校验的字段
     * @param {type} callback 方法回调
     */
    validate: function validate(keepitem, callback) {
      return this.checkAll(this.formData, keepitem, callback);
    },
    /**
     * 外部调用方法
     * 部分表单校验
     * @param {Array|String} props 需要校验的字段
     * @param {Function} 回调函数
     */
    validateField: function validateField() {
      var _this = this;
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      props = [].concat(props);
      var invalidFields = {};
      this.childrens.forEach(function (item) {
        var name = realName(item.name);
        if (props.indexOf(name) !== -1) {
          invalidFields = Object.assign({}, invalidFields, (0,defineProperty/* default */.A)({}, name, _this.formData[name]));
        }
      });
      return this.checkAll(invalidFields, [], callback);
    },
    /**
     * 外部调用方法
     * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
     * @param {Array|String} props 需要移除校验的字段 ，不填为所有
     */
    clearValidate: function clearValidate() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      props = [].concat(props);
      this.childrens.forEach(function (item) {
        if (props.length === 0) {
          item.errMsg = '';
        } else {
          var name = realName(item.name);
          if (props.indexOf(name) !== -1) {
            item.errMsg = '';
          }
        }
      });
    },
    /**
     * 外部调用方法 ，即将废弃
     * 手动提交校验表单
     * 对整个表单进行校验的方法，参数为一个回调函数。
     * @param {Array} keepitem 保留不参与校验的字段
     * @param {type} callback 方法回调
     */
    submit: function submit(keepitem, callback, type) {
      var _this2 = this;
      var _loop = function _loop(i) {
        var itemData = _this2.childrens.find(function (v) {
          return v.name === i;
        });
        if (itemData) {
          if (_this2.formData[i] === undefined) {
            _this2.formData[i] = _this2._getValue(i, _this2.dataValue[i]);
          }
        }
      };
      for (var i in this.dataValue) {
        _loop(i);
      }
      if (!type) {
        console.warn('submit 方法即将废弃，请使用validate方法代替！');
      }
      return this.checkAll(this.formData, keepitem, callback, 'submit');
    },
    // 校验所有
    checkAll: function checkAll(invalidFields, keepitem, callback, type) {
      var _this3 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var childrens, _loop2, i, promise, results, tempFormData, _i, child, name, result, resetFormData;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_this3.validator) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              childrens = []; // 处理参与校验的item实例
              _loop2 = /*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _loop2(i) {
                var item;
                return (0,regeneratorRuntime/* default */.A)().wrap(function _loop2$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      item = _this3.childrens.find(function (v) {
                        return realName(v.name) === i;
                      });
                      if (item) {
                        childrens.push(item);
                      }
                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }, _loop2);
              });
              _context2.t0 = (0,regeneratorRuntime/* default */.A)().keys(invalidFields);
            case 5:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 10;
                break;
              }
              i = _context2.t1.value;
              return _context2.delegateYield(_loop2(i), "t2", 8);
            case 8:
              _context2.next = 5;
              break;
            case 10:
              // 如果validate第一个参数是funciont ,那就走回调
              if (!callback && typeof keepitem === 'function') {
                callback = keepitem;
              }
              // 如果不存在回调，那么使用 Promise 方式返回
              if (!callback && typeof callback !== 'function' && Promise) {
                promise = new Promise(function (resolve, reject) {
                  callback = function callback(valid, invalidFields) {
                    !valid ? resolve(invalidFields) : reject(valid);
                  };
                });
              }
              results = []; // 避免引用错乱 ，建议拷贝对象处理
              tempFormData = JSON.parse(JSON.stringify(invalidFields)); // 所有子组件参与校验,使用 for 可以使用  awiat
              _context2.t3 = (0,regeneratorRuntime/* default */.A)().keys(childrens);
            case 15:
              if ((_context2.t4 = _context2.t3()).done) {
                _context2.next = 28;
                break;
              }
              _i = _context2.t4.value;
              child = childrens[_i];
              name = realName(child.name);
              _context2.next = 21;
              return child.onFieldChange(tempFormData[name]);
            case 21:
              result = _context2.sent;
              if (!result) {
                _context2.next = 26;
                break;
              }
              results.push(result);
              // toast ,modal 只需要执行第一次就可以
              if (!(_this3.errShowType === 'toast' || _this3.errShowType === 'modal')) {
                _context2.next = 26;
                break;
              }
              return _context2.abrupt("break", 28);
            case 26:
              _context2.next = 15;
              break;
            case 28:
              if (Array.isArray(results)) {
                if (results.length === 0) results = null;
              }
              if (Array.isArray(keepitem)) {
                keepitem.forEach(function (v) {
                  var vName = realName(v);
                  var value = getDataValue(v, _this3.localData);
                  if (value !== undefined) {
                    tempFormData[vName] = value;
                  }
                });
              }

              // TODO submit 即将废弃
              if (type === 'submit') {
                _this3.$emit('submit', {
                  detail: {
                    value: tempFormData,
                    errors: results
                  }
                });
              } else {
                _this3.$emit('validate', results);
              }

              // const resetFormData = rawData(tempFormData, this.localData, this.name)
              resetFormData = {};
              resetFormData = rawData(tempFormData, _this3.name);
              callback && typeof callback === 'function' && callback(results, resetFormData);
              if (!(promise && callback)) {
                _context2.next = 38;
                break;
              }
              return _context2.abrupt("return", promise);
            case 38:
              return _context2.abrupt("return", null);
            case 39:
            case "end":
              return _context2.stop();
          }
        }, _callee);
      }))();
    },
    /**
     * 返回validate事件
     * @param {Object} result
     */
    validateCheck: function validateCheck(result) {
      this.$emit('validate', result);
    },
    _getValue: getValue,
    _isRequiredField: isRequiredField,
    _setDataValue: setDataValue,
    _getDataValue: getDataValue,
    _realName: realName,
    _isRealName: isRealName,
    _isEqual: isEqual
  }
});
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue?vue&type=script&lang=js&
 /* harmony default export */ var uni_forms_uni_formsvue_type_script_lang_js_ = (uni_formsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue?vue&type=style&index=0&id=15bbdc00&lang=scss&scoped=true&
var uni_formsvue_type_style_index_0_id_15bbdc00_lang_scss_scoped_true_ = __webpack_require__(23335);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue?vue&type=style&index=0&id=15bbdc00&lang=scss&scoped=true&
 /* harmony default export */ var uni_forms_uni_formsvue_type_style_index_0_id_15bbdc00_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  uni_forms_uni_formsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "15bbdc00",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var uni_forms = (component.exports);

/***/ }),

/***/ 11675:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1480:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var fails = __webpack_require__(79039);
var getOwnPropertyNames = (__webpack_require__(10298).f);

// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: getOwnPropertyNames
});


/***/ }),

/***/ 48757:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16280);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76918);


function _readOnlyError(r) {
  throw new TypeError('"' + r + '" is read-only');
}


/***/ })

}]);