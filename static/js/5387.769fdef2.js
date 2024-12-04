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
    
(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[5387],{

/***/ 35727:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83051);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("4a10fd60", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 16281:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68389);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("25617f7c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 42971:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33247);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("015b7e3f", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 13683:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_form_item; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=template&id=7e53c8f5&scoped=true&
var components = {'uIcon': (__webpack_require__(15614)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-form-item",class:{'u-border-bottom': _vm.elBorderBottom, 'u-form-item__border-bottom--error': _vm.validateState === 'error' && _vm.showError('border-bottom')}},[_c('v-uni-view',{staticClass:"u-form-item__body",style:({
		flexDirection: _vm.elLabelPosition == 'left' ? 'row' : 'column'
	})},[_c('v-uni-view',{staticClass:"u-form-item--left",style:({
			width: _vm.uLabelWidth,
			flex: ("0 0 " + _vm.uLabelWidth),
			marginBottom: _vm.elLabelPosition == 'left' ? 0 : '10rpx',
		})},[(_vm.required || _vm.leftIcon || _vm.label)?_c('v-uni-view',{staticClass:"u-form-item--left__content"},[(_vm.required)?_c('v-uni-text',{staticClass:"u-form-item--left__content--required"},[_vm._v("*")]):_vm._e(),(_vm.leftIcon)?_c('v-uni-view',{staticClass:"u-form-item--left__content__icon"},[_c('u-icon',{attrs:{"name":_vm.leftIcon,"custom-style":_vm.leftIconStyle}})],1):_vm._e(),_c('v-uni-view',{staticClass:"u-form-item--left__content__label",style:([_vm.elLabelStyle, {
					'justify-content': _vm.elLabelAlign == 'left' ? 'flex-start' : _vm.elLabelAlign == 'center' ? 'center' : 'flex-end'
				}])},[_vm._v(_vm._s(_vm.label))])],1):_vm._e()],1),_c('v-uni-view',{staticClass:"u-form-item--right u-flex"},[_c('v-uni-view',{staticClass:"u-form-item--right__content"},[_c('v-uni-view',{staticClass:"u-form-item--right__content__slot "},[_vm._t("default")],2),(_vm.$slots.right || _vm.rightIcon)?_c('v-uni-view',{staticClass:"u-form-item--right__content__icon u-flex"},[(_vm.rightIcon)?_c('u-icon',{attrs:{"custom-style":_vm.rightIconStyle,"name":_vm.rightIcon}}):_vm._e(),_vm._t("right")],2):_vm._e()],1)],1)],1),(_vm.validateState === 'error' && _vm.showError('message'))?_c('v-uni-view',{staticClass:"u-form-item__message",style:({
		paddingLeft: _vm.elLabelPosition == 'left' ? _vm.$u.addUnit(_vm.elLabelWidth) : '0',
	})},[_vm._v(_vm._s(_vm.validateMessage))]):_vm._e()],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=template&id=7e53c8f5&scoped=true&

// EXTERNAL MODULE: ./node_modules/uview-ui/libs/util/emitter.js
var emitter = __webpack_require__(50254);
;// CONCATENATED MODULE: ./node_modules/uview-ui/libs/util/async-validator.js
function _extends() {
	_extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && ({"NODE_ENV":"production","VUE_APP_BASE_URL":"/prod-api","VUE_APP_DARK_MODE":"false","VUE_APP_ENV":"production","VUE_APP_FACE_URL":"/mbsb","VUE_APP_IMG_URL":"./static/images","VUE_APP_INDEX_CSS_HASH":"2da1efab","VUE_APP_INDEX_DARK_CSS_HASH":"aeec55f8","VUE_APP_LIB_URL":"./static/lib","VUE_APP_MAP_URL":"https://apis.map.qq.com","VUE_APP_NAME":"","VUE_APP_PLATFORM":"h5","VUE_APP_PROXY_FACE_URL":"/mbsb","VUE_APP_PROXY_OSS_URL":"/ftd/oss","VUE_APP_PROXY_URL":"/ftd/api","VUE_APP_PROXY_WEBSOCKET_URL":"/ftd/websocket","VUE_APP_SSE_URL":"/nus/see/connect","VUE_APP_TEST_TITLE":"test4","VUE_APP_TITLE":"非统调水电厂调度系统(测试环境4)","BASE_URL":"./"}) && "production" !== 'production' && 0 && 0) {}

function convertFieldsError(errors) {
	if (!errors || !errors.length) return null;
	var fields = {};
	errors.forEach(function(error) {
		var field = error.field;
		fields[field] = fields[field] || [];
		fields[field].push(error);
	});
	return fields;
}

function format() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var i = 1;
	var f = args[0];
	var len = args.length;

	if (typeof f === 'function') {
		return f.apply(null, args.slice(1));
	}

	if (typeof f === 'string') {
		var str = String(f).replace(formatRegExp, function(x) {
			if (x === '%%') {
				return '%';
			}

			if (i >= len) {
				return x;
			}

			switch (x) {
				case '%s':
					return String(args[i++]);

				case '%d':
					return Number(args[i++]);

				case '%j':
					try {
						return JSON.stringify(args[i++]);
					} catch (_) {
						return '[Circular]';
					}

					break;

				default:
					return x;
			}
		});

		for (var arg = args[i]; i < len; arg = args[++i]) {
			str += " " + arg;
		}

		return str;
	}

	return f;
}

function isNativeStringType(type) {
	return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
	if (value === undefined || value === null) {
		return true;
	}

	if (type === 'array' && Array.isArray(value) && !value.length) {
		return true;
	}

	if (isNativeStringType(type) && typeof value === 'string' && !value) {
		return true;
	}

	return false;
}

function asyncParallelArray(arr, func, callback) {
	var results = [];
	var total = 0;
	var arrLength = arr.length;

	function count(errors) {
		results.push.apply(results, errors);
		total++;

		if (total === arrLength) {
			callback(results);
		}
	}

	arr.forEach(function(a) {
		func(a, count);
	});
}

function asyncSerialArray(arr, func, callback) {
	var index = 0;
	var arrLength = arr.length;

	function next(errors) {
		if (errors && errors.length) {
			callback(errors);
			return;
		}

		var original = index;
		index = index + 1;

		if (original < arrLength) {
			func(arr[original], next);
		} else {
			callback([]);
		}
	}

	next([]);
}

function flattenObjArr(objArr) {
	var ret = [];
	Object.keys(objArr).forEach(function(k) {
		ret.push.apply(ret, objArr[k]);
	});
	return ret;
}

function asyncMap(objArr, option, func, callback) {
	if (option.first) {
		var _pending = new Promise(function(resolve, reject) {
			var next = function next(errors) {
				callback(errors);
				return errors.length ? reject({
					errors: errors,
					fields: convertFieldsError(errors)
				}) : resolve();
			};

			var flattenArr = flattenObjArr(objArr);
			asyncSerialArray(flattenArr, func, next);
		});

		_pending["catch"](function(e) {
			return e;
		});

		return _pending;
	}

	var firstFields = option.firstFields || [];

	if (firstFields === true) {
		firstFields = Object.keys(objArr);
	}

	var objArrKeys = Object.keys(objArr);
	var objArrLength = objArrKeys.length;
	var total = 0;
	var results = [];
	var pending = new Promise(function(resolve, reject) {
		var next = function next(errors) {
			results.push.apply(results, errors);
			total++;

			if (total === objArrLength) {
				callback(results);
				return results.length ? reject({
					errors: results,
					fields: convertFieldsError(results)
				}) : resolve();
			}
		};

		if (!objArrKeys.length) {
			callback(results);
			resolve();
		}

		objArrKeys.forEach(function(key) {
			var arr = objArr[key];

			if (firstFields.indexOf(key) !== -1) {
				asyncSerialArray(arr, func, next);
			} else {
				asyncParallelArray(arr, func, next);
			}
		});
	});
	pending["catch"](function(e) {
		return e;
	});
	return pending;
}

function complementError(rule) {
	return function(oe) {
		if (oe && oe.message) {
			oe.field = oe.field || rule.fullField;
			return oe;
		}

		return {
			message: typeof oe === 'function' ? oe() : oe,
			field: oe.field || rule.fullField
		};
	};
}

function deepMerge(target, source) {
	if (source) {
		for (var s in source) {
			if (source.hasOwnProperty(s)) {
				var value = source[s];

				if (typeof value === 'object' && typeof target[s] === 'object') {
					target[s] = _extends({}, target[s], {}, value);
				} else {
					target[s] = value;
				}
			}
		}
	}

	return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
	if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
		errors.push(format(options.messages.required, rule.fullField));
	}
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
	if (/^\s+$/.test(value) || value === '') {
		errors.push(format(options.messages.whitespace, rule.fullField));
	}
}

/* eslint max-len:0 */

var pattern = {
	// http://emailregex.com/
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	url: new RegExp(
		"^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
		'i'),
	hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
	integer: function integer(value) {
		return types.number(value) && parseInt(value, 10) === value;
	},
	"float": function float(value) {
		return types.number(value) && !types.integer(value);
	},
	array: function array(value) {
		return Array.isArray(value);
	},
	regexp: function regexp(value) {
		if (value instanceof RegExp) {
			return true;
		}

		try {
			return !!createSecureRegExp(value);
		} catch (e) {
			return false;
		}
	},
	date: function date(value) {
		return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear ===
			'function';
	},
	number: function number(value) {
		if (isNaN(value)) {
			return false;
		}

		// 修改源码，将字符串数值先转为数值
		return typeof +value === 'number';
	},
	object: function object(value) {
		return typeof value === 'object' && !types.array(value);
	},
	method: function method(value) {
		return typeof value === 'function';
	},
	email: function email(value) {
		return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
	},
	url: function url(value) {
		return typeof value === 'string' && !!value.match(pattern.url);
	},
	hex: function hex(value) {
		return typeof value === 'string' && !!value.match(pattern.hex);
	}
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
	if (rule.required && value === undefined) {
		required(rule, value, source, errors, options);
		return;
	}

	var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	var ruleType = rule.type;

	if (custom.indexOf(ruleType) > -1) {
		if (!types[ruleType](value)) {
			errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
		} // straight typeof check

	} else if (ruleType && typeof value !== rule.type) {
		errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
	}
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
	var len = typeof rule.len === 'number';
	var min = typeof rule.min === 'number';
	var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

	var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	var val = value;
	var key = null;
	var num = typeof value === 'number';
	var str = typeof value === 'string';
	var arr = Array.isArray(value);

	if (num) {
		key = 'number';
	} else if (str) {
		key = 'string';
	} else if (arr) {
		key = 'array';
	} // if the value is not of a supported type for range validation
	// the validation rule rule should use the
	// type property to also test for a particular type


	if (!key) {
		return false;
	}

	if (arr) {
		val = value.length;
	}

	if (str) {
		// 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".length !== 3
		val = value.replace(spRegexp, '_').length;
	}

	if (len) {
		if (val !== rule.len) {
			errors.push(format(options.messages[key].len, rule.fullField, rule.len));
		}
	} else if (min && !max && val < rule.min) {
		errors.push(format(options.messages[key].min, rule.fullField, rule.min));
	} else if (max && !min && val > rule.max) {
		errors.push(format(options.messages[key].max, rule.fullField, rule.max));
	} else if (min && max && (val < rule.min || val > rule.max)) {
		errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	}
}

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
	rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

	if (rule[ENUM].indexOf(value) === -1) {
		errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	}
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
	if (rule.pattern) {
		if (rule.pattern instanceof RegExp) {
			// if a RegExp instance is passed, reset `lastIndex` in case its `global`
			// flag is accidentally set to `true`, which in a validation scenario
			// is not necessary and the result might be misleading
			rule.pattern.lastIndex = 0;

			if (!rule.pattern.test(value)) {
				errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
			}
		} else if (typeof rule.pattern === 'string') {
			var _pattern = createSecureRegExp(rule.pattern);

			if (!_pattern.test(value)) {
				errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
			}
		}
	}
}

var rules = {
	required: required,
	whitespace: whitespace,
	type: type,
	range: range,
	"enum": enumerable,
	pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value, 'string') && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options, 'string');

		if (!isEmptyValue(value, 'string')) {
			rules.type(rule, value, source, errors, options);
			rules.range(rule, value, source, errors, options);
			rules.pattern(rule, value, source, errors, options);

			if (rule.whitespace === true) {
				rules.whitespace(rule, value, source, errors, options);
			}
		}
	}

	callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (value !== undefined) {
			rules.type(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (value === '') {
			value = undefined;
		}

		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (value !== undefined) {
			rules.type(rule, value, source, errors, options);
			rules.range(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (value !== undefined) {
			rules.type(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (!isEmptyValue(value)) {
			rules.type(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (value !== undefined) {
			rules.type(rule, value, source, errors, options);
			rules.range(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (value !== undefined) {
			rules.type(rule, value, source, errors, options);
			rules.range(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value, 'array') && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options, 'array');

		if (!isEmptyValue(value, 'array')) {
			rules.type(rule, value, source, errors, options);
			rules.range(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (value !== undefined) {
			rules.type(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (value !== undefined) {
			rules[ENUM$1](rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value, 'string') && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (!isEmptyValue(value, 'string')) {
			rules.pattern(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

function date(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); 

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);

		if (!isEmptyValue(value)) {
			var dateObject;

			if (typeof value === 'number') {
				dateObject = new Date(value);
			} else {
				dateObject = value;
			}

			rules.type(rule, dateObject, source, errors, options);

			if (dateObject) {
				rules.range(rule, dateObject.getTime(), source, errors, options);
			}
		}
	}

	callback(errors);
}

function required$1(rule, value, callback, source, options) {
	var errors = [];
	var type = Array.isArray(value) ? 'array' : typeof value;
	rules.required(rule, value, source, errors, options, type);
	callback(errors);
}

function type$1(rule, value, callback, source, options) {
	var ruleType = rule.type;
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value, ruleType) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options, ruleType);

		if (!isEmptyValue(value, ruleType)) {
			rules.type(rule, value, source, errors, options);
		}
	}

	callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
	var errors = [];
	var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

	if (validate) {
		if (isEmptyValue(value) && !rule.required) {
			return callback();
		}

		rules.required(rule, value, source, errors, options);
	}

	callback(errors);
}

var validators = {
	string: string,
	method: method,
	number: number,
	"boolean": _boolean,
	regexp: regexp,
	integer: integer,
	"float": floatFn,
	array: array,
	object: object,
	"enum": enumerable$1,
	pattern: pattern$2,
	date: date,
	url: type$1,
	hex: type$1,
	email: type$1,
	required: required$1,
	any: any
};

function newMessages() {
	return {
		"default": 'Validation error on field %s',
		required: '%s is required',
		"enum": '%s must be one of %s',
		whitespace: '%s cannot be empty',
		date: {
			format: '%s date %s is invalid for format %s',
			parse: '%s date could not be parsed, %s is invalid ',
			invalid: '%s date %s is invalid'
		},
		types: {
			string: '%s is not a %s',
			method: '%s is not a %s (function)',
			array: '%s is not an %s',
			object: '%s is not an %s',
			number: '%s is not a %s',
			date: '%s is not a %s',
			"boolean": '%s is not a %s',
			integer: '%s is not an %s',
			"float": '%s is not a %s',
			regexp: '%s is not a valid %s',
			email: '%s is not a valid %s',
			url: '%s is not a valid %s',
			hex: '%s is not a valid %s'
		},
		string: {
			len: '%s must be exactly %s characters',
			min: '%s must be at least %s characters',
			max: '%s cannot be longer than %s characters',
			range: '%s must be between %s and %s characters'
		},
		number: {
			len: '%s must equal %s',
			min: '%s cannot be less than %s',
			max: '%s cannot be greater than %s',
			range: '%s must be between %s and %s'
		},
		array: {
			len: '%s must be exactly %s in length',
			min: '%s cannot be less than %s in length',
			max: '%s cannot be greater than %s in length',
			range: '%s must be between %s and %s in length'
		},
		pattern: {
			mismatch: '%s value %s does not match pattern %s'
		},
		clone: function clone() {
			var cloned = JSON.parse(JSON.stringify(this));
			cloned.clone = this.clone;
			return cloned;
		}
	};
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
	this.rules = null;
	this._messages = messages;
	this.define(descriptor);
}

Schema.prototype = {
	messages: function messages(_messages) {
		if (_messages) {
			this._messages = deepMerge(newMessages(), _messages);
		}

		return this._messages;
	},
	define: function define(rules) {
		if (!rules) {
			throw new Error('Cannot configure a schema with no rules');
		}

		if (typeof rules !== 'object' || Array.isArray(rules)) {
			throw new Error('Rules must be an object');
		}

		this.rules = {};
		var z;
		var item;

		for (z in rules) {
			if (rules.hasOwnProperty(z)) {
				item = rules[z];
				this.rules[z] = Array.isArray(item) ? item : [item];
			}
		}
	},
	validate: function validate(source_, o, oc) {
		var _this = this;

		if (o === void 0) {
			o = {};
		}

		if (oc === void 0) {
			oc = function oc() {};
		}

		var source = source_;
		var options = o;
		var callback = oc;

		if (typeof options === 'function') {
			callback = options;
			options = {};
		}

		if (!this.rules || Object.keys(this.rules).length === 0) {
			if (callback) {
				callback();
			}

			return Promise.resolve();
		}

		function complete(results) {
			var i;
			var errors = [];
			var fields = {};

			function add(e) {
				if (Array.isArray(e)) {
					var _errors;

					errors = (_errors = errors).concat.apply(_errors, e);
				} else {
					errors.push(e);
				}
			}

			for (i = 0; i < results.length; i++) {
				add(results[i]);
			}

			if (!errors.length) {
				errors = null;
				fields = null;
			} else {
				fields = convertFieldsError(errors);
			}

			callback(errors, fields);
		}

		if (options.messages) {
			var messages$1 = this.messages();

			if (messages$1 === messages) {
				messages$1 = newMessages();
			}

			deepMerge(messages$1, options.messages);
			options.messages = messages$1;
		} else {
			options.messages = this.messages();
		}

		var arr;
		var value;
		var series = {};
		var keys = options.keys || Object.keys(this.rules);
		keys.forEach(function(z) {
			arr = _this.rules[z];
			value = source[z];
			arr.forEach(function(r) {
				var rule = r;

				if (typeof rule.transform === 'function') {
					if (source === source_) {
						source = _extends({}, source);
					}

					value = source[z] = rule.transform(value);
				}

				if (typeof rule === 'function') {
					rule = {
						validator: rule
					};
				} else {
					rule = _extends({}, rule);
				}

				rule.validator = _this.getValidationMethod(rule);
				rule.field = z;
				rule.fullField = rule.fullField || z;
				rule.type = _this.getType(rule);

				if (!rule.validator) {
					return;
				}

				series[z] = series[z] || [];
				series[z].push({
					rule: rule,
					value: value,
					source: source,
					field: z
				});
			});
		});
		var errorFields = {};
		return asyncMap(series, options, function(data, doIt) {
			var rule = data.rule;
			var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField ===
				'object');
			deep = deep && (rule.required || !rule.required && data.value);
			rule.field = data.field;

			function addFullfield(key, schema) {
				return _extends({}, schema, {
					fullField: rule.fullField + "." + key
				});
			}

			function cb(e) {
				if (e === void 0) {
					e = [];
				}

				var errors = e;

				if (!Array.isArray(errors)) {
					errors = [errors];
				}

				if (!options.suppressWarning && errors.length) {
					Schema.warning('async-validator:', errors);
				}

				if (errors.length && rule.message) {
					errors = [].concat(rule.message);
				}

				errors = errors.map(complementError(rule));

				if (options.first && errors.length) {
					errorFields[rule.field] = 1;
					return doIt(errors);
				}

				if (!deep) {
					doIt(errors);
				} else {
					// if rule is required but the target object
					// does not exist fail at the rule level and don't
					// go deeper
					if (rule.required && !data.value) {
						if (rule.message) {
							errors = [].concat(rule.message).map(complementError(rule));
						} else if (options.error) {
							errors = [options.error(rule, format(options.messages.required, rule.field))];
						} else {
							errors = [];
						}

						return doIt(errors);
					}

					var fieldsSchema = {};

					if (rule.defaultField) {
						for (var k in data.value) {
							if (data.value.hasOwnProperty(k)) {
								fieldsSchema[k] = rule.defaultField;
							}
						}
					}

					fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);

					for (var f in fieldsSchema) {
						if (fieldsSchema.hasOwnProperty(f)) {
							var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
							fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
						}
					}

					var schema = new Schema(fieldsSchema);
					schema.messages(options.messages);

					if (data.rule.options) {
						data.rule.options.messages = options.messages;
						data.rule.options.error = options.error;
					}

					schema.validate(data.value, data.rule.options || options, function(errs) {
						var finalErrors = [];

						if (errors && errors.length) {
							finalErrors.push.apply(finalErrors, errors);
						}

						if (errs && errs.length) {
							finalErrors.push.apply(finalErrors, errs);
						}

						doIt(finalErrors.length ? finalErrors : null);
					});
				}
			}

			var res;

			if (rule.asyncValidator) {
				res = rule.asyncValidator(rule, data.value, cb, data.source, options);
			} else if (rule.validator) {
				res = rule.validator(rule, data.value, cb, data.source, options);

				if (res === true) {
					cb();
				} else if (res === false) {
					cb(rule.message || rule.field + " fails");
				} else if (res instanceof Array) {
					cb(res);
				} else if (res instanceof Error) {
					cb(res.message);
				}
			}

			if (res && res.then) {
				res.then(function() {
					return cb();
				}, function(e) {
					return cb(e);
				});
			}
		}, function(results) {
			complete(results);
		});
	},
	getType: function getType(rule) {
		if (rule.type === undefined && rule.pattern instanceof RegExp) {
			rule.type = 'pattern';
		}

		if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
			throw new Error(format('Unknown rule type %s', rule.type));
		}

		return rule.type || 'string';
	},
	getValidationMethod: function getValidationMethod(rule) {
		if (typeof rule.validator === 'function') {
			return rule.validator;
		}

		var keys = Object.keys(rule);
		var messageIndex = keys.indexOf('message');

		if (messageIndex !== -1) {
			keys.splice(messageIndex, 1);
		}

		if (keys.length === 1 && keys[0] === 'required') {
			return validators.required;
		}

		return validators[this.getType(rule)] || false;
	}
};

Schema.register = function register(type, validator) {
	if (typeof validator !== 'function') {
		throw new Error('Cannot register a validator by type, validator is not a function');
	}

	validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;

/* harmony default export */ var async_validator = (Schema);
//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// 去除警告信息
async_validator.warning = function() {};

/**
 * form-item 表单item
 * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
 * @tutorial http://uviewui.com/components/form.html
 * @property {String} label 左侧提示文字
 * @property {Object} prop 表单域model对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的
 * @property {Boolean} border-bottom 是否显示表单域的下划线边框
 * @property {String} label-position 表单域提示文字的位置，left-左侧，top-上方
 * @property {String Number} label-width 提示文字的宽度，单位rpx（默认90）
 * @property {Object} label-style lable的样式，对象形式
 * @property {String} label-align lable的对齐方式
 * @property {String} right-icon 右侧自定义字体图标(限uView内置图标)或图片地址
 * @property {String} left-icon 左侧自定义字体图标(限uView内置图标)或图片地址
 * @property {Object} left-icon-style 左侧图标的样式，对象形式
 * @property {Object} right-icon-style 右侧图标的样式，对象形式
 * @property {Boolean} required 是否显示左边的"*"号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则(默认false)
 * @example <u-form-item label="姓名"><u-input v-model="form.name" /></u-form-item>
 */

/* harmony default export */ var u_form_itemvue_type_script_lang_js_ = ({
	name: 'u-form-item',
	mixins: [emitter/* default */.A],
	inject: {
		uForm: {
			default () {
				return null
			}
		}
	},
	props: {
		// input的label提示语
		label: {
			type: String,
			default: ''
		},
		// 绑定的值
		prop: {
			type: String,
			default: ''
		},
		// 是否显示表单域的下划线边框
		borderBottom: {
			type: [String, Boolean],
			default: ''
		},
		// label的位置，left-左边，top-上边
		labelPosition: {
			type: String,
			default: ''
		},
		// label的宽度，单位rpx
		labelWidth: {
			type: [String, Number],
			default: ''
		},
		// lable的样式，对象形式
		labelStyle: {
			type: Object,
			default () {
				return {}
			}
		},
		// lable字体的对齐方式
		labelAlign: {
			type: String,
			default: ''
		},
		// 右侧图标
		rightIcon: {
			type: String,
			default: ''
		},
		// 左侧图标
		leftIcon: {
			type: String,
			default: ''
		},
		// 左侧图标的样式
		leftIconStyle: {
			type: Object,
			default () {
				return {}
			}
		},
		// 左侧图标的样式
		rightIconStyle: {
			type: Object,
			default () {
				return {}
			}
		},
		// 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
		required: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			initialValue: '', // 存储的默认值
			// isRequired: false, // 是否必填，由于人性化考虑，必填"*"号通过props的required配置，不再通过rules的规则自动生成
			validateState: '', // 是否校验成功
			validateMessage: '', // 校验失败的提示语
			// 有错误时的提示方式，message-提示信息，border-如果input设置了边框，变成呈红色，
			errorType: ['message'],
			fieldValue: '', // 获取当前子组件input的输入的值
			// 父组件的参数，在computed计算中，无法得知this.parent发生变化，故将父组件的参数值，放到data中
			parentData: {
				borderBottom: true,
				labelWidth: 90,
				labelPosition: 'left',
				labelStyle: {},
				labelAlign: 'left',
			}
		};
	},
	watch: {
		validateState(val) {
			this.broadcastInputError();
		},
		// 监听u-form组件的errorType的变化
		"uForm.errorType"(val) {
			this.errorType = val;
			this.broadcastInputError();
		},
	},
	computed: {
		// 计算后的label宽度，由于需要多个判断，故放到computed中
		uLabelWidth() {
			// 如果用户设置label为空字符串(微信小程序空字符串最终会变成字符串的'true')，意味着要将label的位置宽度设置为auto
			return this.elLabelPosition == 'left' ? (this.label === 'true' || this.label === '' ? 'auto' : this.$u.addUnit(this
				.elLabelWidth)) : '100%';
		},
		showError() {
			return type => {
				// 如果errorType数组中含有none，或者toast提示类型
				if (this.errorType.indexOf('none') >= 0) return false;
				else if (this.errorType.indexOf(type) >= 0) return true;
				else return false;
			}
		},
		// label的宽度
		elLabelWidth() {
			// label默认宽度为90，优先使用本组件的值，如果没有(如果设置为0，也算是配置了值，依然起效)，则用u-form的值
			return (this.labelWidth != 0 || this.labelWidth != '') ? this.labelWidth : (this.parentData.labelWidth ? this.parentData
				.labelWidth :
				90);
		},
		// label的样式
		elLabelStyle() {
			return Object.keys(this.labelStyle).length ? this.labelStyle : (this.parentData.labelStyle ? this.parentData.labelStyle :
				{});
		},
		// label的位置，左侧或者上方
		elLabelPosition() {
			return this.labelPosition ? this.labelPosition : (this.parentData.labelPosition ? this.parentData.labelPosition :
				'left');
		},
		// label的对齐方式
		elLabelAlign() {
			return this.labelAlign ? this.labelAlign : (this.parentData.labelAlign ? this.parentData.labelAlign : 'left');
		},
		// label的下划线
		elBorderBottom() {
			// 子组件的borderBottom默认为空字符串，如果不等于空字符串，意味着子组件设置了值，优先使用子组件的值
			return this.borderBottom !== '' ? this.borderBottom : this.parentData.borderBottom ? this.parentData.borderBottom :
				true;
		}
	},
	methods: {
		broadcastInputError() {
			// 子组件发出事件，第三个参数为true或者false，true代表有错误
			this.broadcast('u-input', 'on-form-item-error', this.validateState === 'error' && this.showError('border'));
		},
		// 判断是否需要required校验
		setRules() {
			let that = this;
			// 由于人性化考虑，必填"*"号通过props的required配置，不再通过rules的规则自动生成
			// 从父组件u-form拿到当前u-form-item需要验证 的规则
			// let rules = this.getRules();
			// if (rules.length) {
			// 	this.isRequired = rules.some(rule => {
			// 		// 如果有必填项，就返回，没有的话，就是undefined
			// 		return rule.required;
			// 	});
			// }

			// blur事件
			this.$on('on-form-blur', that.onFieldBlur);
			// change事件
			this.$on('on-form-change', that.onFieldChange);
		},

		// 从u-form的rules属性中，取出当前u-form-item的校验规则
		getRules() {
			// 父组件的所有规则
			let rules = this.parent.rules;
			rules = rules ? rules[this.prop] : [];
			// 保证返回的是一个数组形式
			return [].concat(rules || []);
		},

		// blur事件时进行表单校验
		onFieldBlur() {
			this.validation('blur');
		},

		// change事件进行表单校验
		onFieldChange() {
			this.validation('change');
		},

		// 过滤出符合要求的rule规则
		getFilteredRule(triggerType = '') {
			let rules = this.getRules();
			// 整体验证表单时，triggerType为空字符串，此时返回所有规则进行验证
			if (!triggerType) return rules;
			// 历遍判断规则是否有对应的事件，比如blur，change触发等的事件
			// 使用indexOf判断，是因为某些时候设置的验证规则的trigger属性可能为多个，比如['blur','change']
			// 某些场景可能的判断规则，可能不存在trigger属性，故先判断是否存在此属性
			return rules.filter(res => res.trigger && res.trigger.indexOf(triggerType) !== -1);
		},

		// 校验数据
		validation(trigger, callback = () => {}) {
			// 检验之间，先获取需要校验的值
			this.fieldValue = this.parent.model[this.prop];
			// blur和change是否有当前方式的校验规则
			let rules = this.getFilteredRule(trigger);
			// 判断是否有验证规则，如果没有规则，也调用回调方法，否则父组件u-form会因为
			// 对count变量的统计错误而无法进入上一层的回调
			if (!rules || rules.length === 0) {
				return callback('');
			}
			// 设置当前的装填，标识为校验中
			this.validateState = 'validating';
			// 调用async-validator的方法
			let validator = new async_validator({
				[this.prop]: rules
			});
			validator.validate({
				[this.prop]: this.fieldValue
			}, {
				firstFields: true
			}, (errors, fields) => {
				// 记录状态和报错信息
				this.validateState = !errors ? 'success' : 'error';
				this.validateMessage = errors ? errors[0].message : '';
				// 调用回调方法
				callback(this.validateMessage);
			});
		},

		// 清空当前的u-form-item
		resetField() {
			this.parent.model[this.prop] = this.initialValue;
			// 设置为`success`状态，只是为了清空错误标记
			this.validateState = 'success';
		}
	},

	// 组件创建完成时，将当前实例保存到u-form中
	mounted() {
		// 支付宝、头条小程序不支持provide/inject，所以使用这个方法获取整个父组件，在created定义，避免循环应用
		this.parent = this.$u.$parent.call(this, 'u-form');
		if (this.parent) {
			// 历遍parentData中的属性，将parent中的同名属性赋值给parentData
			Object.keys(this.parentData).map(key => {
				this.parentData[key] = this.parent[key];
			});
			// 如果没有传入prop，或者uForm为空(如果u-form-input单独使用，就不会有uForm注入)，就不进行校验
			if (this.prop) {
				// 将本实例添加到父组件中
				this.parent.fields.push(this);
				this.errorType = this.parent.errorType;
				// 设置初始值
				this.initialValue = this.fieldValue;
				// 添加表单校验，这里必须要写在$nextTick中，因为u-form的rules是通过ref手动传入的
				// 不在$nextTick中的话，可能会造成执行此处代码时，父组件还没通过ref把规则给u-form，导致规则为空
				this.$nextTick(() => {
					this.setRules();
				})
			}
		}
	},

	// 组件销毁前，将实例从u-form的缓存中移除
	beforeDestroy() {
		// 如果当前没有prop的话表示当前不要进行删除（因为没有注入）
		if (this.parent && this.prop) {
			this.parent.fields.map((item, index) => {
				if (item === this) this.parent.fields.splice(index, 1);
			})
		}
	},
});

;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_form_item_u_form_itemvue_type_script_lang_js_ = (u_form_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=style&index=0&id=7e53c8f5&lang=scss&scoped=true&
var u_form_itemvue_type_style_index_0_id_7e53c8f5_lang_scss_scoped_true_ = __webpack_require__(35727);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=style&index=0&id=7e53c8f5&lang=scss&scoped=true&
 /* harmony default export */ var u_form_item_u_form_itemvue_type_style_index_0_id_7e53c8f5_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-form-item/u-form-item.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_form_item_u_form_itemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7e53c8f5",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_form_item = (component.exports);

/***/ }),

/***/ 17779:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_form; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-form/u-form.vue?vue&type=template&id=f9c51590&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-form"},[_vm._t("default")],2)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-form/u-form.vue?vue&type=script&lang=js&
//
//
//
//

	/**
	 * form 表单
	 * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
	 * @tutorial http://uviewui.com/components/form.html
	 * @property {Object} model 表单数据对象
	 * @property {Boolean} border-bottom 是否显示表单域的下划线边框
	 * @property {String} label-position 表单域提示文字的位置，left-左侧，top-上方
	 * @property {String Number} label-width 提示文字的宽度，单位rpx（默认90）
	 * @property {Object} label-style lable的样式，对象形式
	 * @property {String} label-align lable的对齐方式
	 * @property {Object} rules 通过ref设置，见官网说明
	 * @property {Array} error-type 错误的提示方式，数组形式，见上方说明(默认['message'])
	 * @example <u-form :model="form" ref="uForm"></u-form>
	 */

/* harmony default export */ var u_formvue_type_script_lang_js_ = ({
	name: 'u-form',
	props: {
		// 当前form的需要验证字段的集合
		model: {
			type: Object,
			default() {
				return {};
			}
		},
		// 验证规则
		// rules: {
		// 	type: [Object, Function, Array],
		// 	default() {
		// 		return {};
		// 	}
		// },
		// 有错误时的提示方式，message-提示信息，border-如果input设置了边框，变成呈红色，
		// border-bottom-下边框呈现红色，none-无提示
		errorType: {
			type: Array,
			default() {
				return ['message', 'toast']
			}
		},
		// 是否显示表单域的下划线边框
		borderBottom: {
			type: Boolean,
			default: true
		},
		// label的位置，left-左边，top-上边
		labelPosition: {
			type: String,
			default: 'left'
		},
		// label的宽度，单位rpx
		labelWidth: {
			type: [String, Number],
			default: 90
		},
		// lable字体的对齐方式
		labelAlign: {
			type: String,
			default: 'left'
		},
		// lable的样式，对象形式
		labelStyle: {
			type: Object,
			default() {
				return {}
			}
		},
	},
	provide() {
		return {
			uForm: this
		};
	},
	data() {
		return {
			rules: {}
		};
	},
	created() {
		// 存储当前form下的所有u-form-item的实例
		// 不能定义在data中，否则微信小程序会造成循环引用而报错
		this.fields = [];
	},
	methods: {
		setRules(rules) {
			this.rules = rules;
		},
		// 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
		resetFields() {
			this.fields.map(field => {
				field.resetField();
			});
		},
		// 校验全部数据
		validate(callback) {
			return new Promise(resolve => {
				// 对所有的u-form-item进行校验
				let valid = true; // 默认通过
				let count = 0; // 用于标记是否检查完毕
				let errorArr = []; // 存放错误信息
				this.fields.map(field => {
					// 调用每一个u-form-item实例的validation的校验方法
					field.validation('', error => {
						// 如果任意一个u-form-item校验不通过，就意味着整个表单不通过
						if (error) {
							valid = false;
							errorArr.push(error);
						}
						// 当历遍了所有的u-form-item时，调用promise的then方法
						if (++count === this.fields.length) {
							resolve(valid); // 进入promise的then方法
							// 判断是否设置了toast的提示方式，只提示最前面的表单域的第一个错误信息
							if(this.errorType.indexOf('none') === -1 && this.errorType.indexOf('toast') >= 0 && errorArr.length) {
								this.$u.toast(errorArr[0]);
							}
							// 调用回调方法
							if (typeof callback == 'function') callback(valid);
						}
					});
				});
			});
		}
	}
});

;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-form/u-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_form_u_formvue_type_script_lang_js_ = (u_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-form/u-form.vue?vue&type=style&index=0&id=f9c51590&scoped=true&lang=scss&
var u_formvue_type_style_index_0_id_f9c51590_scoped_true_lang_scss_ = __webpack_require__(16281);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-form/u-form.vue?vue&type=style&index=0&id=f9c51590&scoped=true&lang=scss&
 /* harmony default export */ var u_form_u_formvue_type_style_index_0_id_f9c51590_scoped_true_lang_scss_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-form/u-form.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_form_u_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f9c51590",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_form = (component.exports);

/***/ }),

/***/ 26415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ MButton; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/MButton/index.vue?vue&type=template&id=38d4add5&scoped=true&
var components = {'uButton': (__webpack_require__(97771)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"container"},[( false)?0:_vm._e(),_c('u-button',{class:_vm.isPlain ? 'plain' : '',attrs:{"disabled":_vm.disabled,"type":_vm.isPlain ? 'default' : 'primary'},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.click).apply(void 0, arguments)
}}},[_vm._v(_vm._s(_vm.btnName))])],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/MButton/index.vue?vue&type=template&id=38d4add5&scoped=true&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/MButton/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MButtonvue_type_script_lang_js_ = ({
  name: 'MButton',
  props: {
    btnName: String,
    isPlain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click: function click() {
      this.$emit('confirm');
    }
  }
});
;// CONCATENATED MODULE: ./src/components/MButton/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MButtonvue_type_script_lang_js_ = (MButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/MButton/index.vue?vue&type=style&index=0&id=38d4add5&scoped=true&lang=scss&
var MButtonvue_type_style_index_0_id_38d4add5_scoped_true_lang_scss_ = __webpack_require__(42971);
;// CONCATENATED MODULE: ./src/components/MButton/index.vue?vue&type=style&index=0&id=38d4add5&scoped=true&lang=scss&
 /* harmony default export */ var components_MButtonvue_type_style_index_0_id_38d4add5_scoped_true_lang_scss_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/MButton/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_MButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "38d4add5",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var MButton = (component.exports);

/***/ }),

/***/ 83051:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-form-item[data-v-7e53c8f5]{display:flex;flex-direction:row;padding:%?20?% 0;font-size:%?28?%;color:#303133;box-sizing:border-box;line-height:%?70?%;flex-direction:column}.u-form-item__border-bottom--error[data-v-7e53c8f5]:after{border-color:#fa3534}.u-form-item__body[data-v-7e53c8f5]{display:flex;flex-direction:row}.u-form-item--left[data-v-7e53c8f5]{display:flex;flex-direction:row;align-items:center}.u-form-item--left__content[data-v-7e53c8f5]{position:relative;display:flex;flex-direction:row;align-items:center;padding-right:%?10?%;flex:1}.u-form-item--left__content__icon[data-v-7e53c8f5]{margin-right:%?8?%}.u-form-item--left__content--required[data-v-7e53c8f5]{position:absolute;left:%?-16?%;vertical-align:middle;color:#fa3534;padding-top:%?6?%}.u-form-item--left__content__label[data-v-7e53c8f5]{display:flex;flex-direction:row;align-items:center;flex:1}.u-form-item--right[data-v-7e53c8f5]{flex:1}.u-form-item--right__content[data-v-7e53c8f5]{display:flex;flex-direction:row;align-items:center;flex:1}.u-form-item--right__content__slot[data-v-7e53c8f5]{flex:1;display:flex;flex-direction:row;align-items:center}.u-form-item--right__content__icon[data-v-7e53c8f5]{margin-left:%?10?%;color:#c0c4cc;font-size:%?30?%}.u-form-item__message[data-v-7e53c8f5]{font-size:%?24?%;line-height:%?24?%;color:#fa3534;margin-top:%?12?%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 68389:
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

/***/ 33247:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-38d4add5]{width:100%;padding:0 %?25?%}.container uni-button[data-v-38d4add5]{width:100%;background-color:#32c3ba;\r\n  /* border: 1rpx solid  #00a096; */color:#fff;font-size:%?32?%}.container uni-button.plain[data-v-38d4add5]{background-color:initial;background:none;color:#32c3ba}.container[data-v-38d4add5]  .u-primary-hover{background-color:#00a096!important}.container[data-v-38d4add5]  uni-button,\r\n.container[data-v-38d4add5]  uni-button:after{border-radius:0!important}.container[data-v-38d4add5]  .u-btn--primary--disabled{background-color:#a2eae6!important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 50254:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/**
 * 递归使用 call 方式this指向
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
function broadcast(componentName, eventName, params) {
    // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
    this.$children.map(child=>{
        if (componentName===child.$options.name) {
            child.$emit.apply(child,[eventName].concat(params))
        }else {
            broadcast.apply(child,[componentName,eventName].concat(params))
        }
    })
}
/* harmony default export */ __webpack_exports__.A = ({
    methods: {
        /**
         * 派发 (向上查找) (一个)
         * @param componentName // 需要找的组件的名称
         * @param eventName // 事件名称
         * @param params // 需要传递的参数
         */
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;//$parent 找到最近的父节点 $root 根节点
            let name = parent.$options.name; // 获取当前组件实例的name
            // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
            // 循环出当前名称的一样的组件实例
            while (parent && (!name||name!==componentName)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.name;
                }
            }
            // 有节点表示当前找到了name一样的实例
            if (parent) {
                parent.$emit.apply(parent,[eventName].concat(params))
            }
        },
        /**
         * 广播 (向下查找) (广播多个)
         * @param componentName // 需要找的组件的名称
         * @param eventName // 事件名称
         * @param params // 需要传递的参数
         */
        broadcast(componentName, eventName, params) {
            broadcast.call(this,componentName, eventName, params)
        }
    }
});


/***/ })

}]);