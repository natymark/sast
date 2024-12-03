(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[3621],{

/***/ 79740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85720);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("194a2d2c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 73621:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ PerviewFile; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/PerviewFile/index.vue?vue&type=template&id=20170a28&scoped=true&
var components = {'uIcon': (__webpack_require__(15614)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"content"},[(_vm.fileLists.length > 0)?_c('v-uni-view',{staticClass:"annex"},_vm._l((_vm.fileLists),function(item,index){return _c('v-uni-view',{key:index,staticClass:"annexItem"},[_c('v-uni-view',{staticClass:"annexItemLeft"},[_c('v-uni-image',{staticStyle:{"width":"80rpx","height":"80rpx"},attrs:{"src":_vm.fileBackground(item.extension)}}),_c('v-uni-view',{staticClass:"fileView"},[_c('v-uni-view',{staticClass:"fileName"},[_vm._v(_vm._s(_vm.sliceLine(item.certificateName || item.fileName, item.extension) || ''))]),_c('v-uni-view',{staticClass:"fileSize"},[_vm._v(_vm._s(_vm.turnSize(item.size || item.fileSize) || ''))])],1)],1),_c('v-uni-view',{staticClass:"showFile"},[_c('a',{staticClass:"download"},[_c('u-icon',{attrs:{"name":"download","size":"32"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.downLoadFile(item)
}}}),_vm._v("下载")],1),_c('a',{staticClass:"eye",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.annexLook(item)
}}},[_c('u-icon',{attrs:{"name":"eye","size":"32"}}),_vm._v("预览")],1)])],1)}),1):_c('v-uni-view',{staticClass:"annex",staticStyle:{"color":"#03654e","font-weight":"bold"}},[_vm._v("暂无")])],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/PerviewFile/index.vue?vue&type=template&id=20170a28&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(34782);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __webpack_require__(90906);
// EXTERNAL MODULE: ./node_modules/js-base64/base64.mjs
var base64 = __webpack_require__(13293);
;// CONCATENATED MODULE: ./src/static/icon/pdfIcon.png
var pdfIcon_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/static/icon/pngIcon.png
var pngIcon_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/PerviewFile/index.vue?vue&type=script&lang=js&
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




// import textIcon from '../../static/icon/textIcon.png'

/* harmony default export */ var PerviewFilevue_type_script_lang_js_ = ({
  name: 'Picker',
  props: {
    fileLists: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    baseUrl: function baseUrl() {
      return (__webpack_require__(27358).baseUrl);
    }
  },
  methods: {
    annexLook: function annexLook(row) {
      console.log('rowc穿过的来的东西', row);
      var fileType = /(\jpg|\jpeg|\png|\gif|\webp)$/i;
      console.log('fileTypefileTypefileType', fileType);
      if (fileType.test(row.extension)) {
        uni.previewImage({
          urls: [row.url],
          longPressActions: {
            itemList: ['发送给朋友', '保存图片', '收藏'],
            success: function success(data) {
              console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
            },
            fail: function fail(err) {
              console.log(err.errMsg);
            }
          }
        });
      } else {
        var encoded = (0,base64/* encode */.lF)(row.url);
        var preViewUrl = encodeURIComponent("".concat(this.baseUrl, "/onlinePreview?url=") + encodeURIComponent(encoded));
        this.$tab.navigateTo("/pages/onlinePreView?item=".concat(preViewUrl));
      }
    },
    downLoadFile: function downLoadFile(val) {
      window.open(val.url);
    },
    fileBackground: function fileBackground(val) {
      var fileType = /(\.pdf|\.jpg|\.jpeg|\.PDF|\.JPG|\.JPEG|\.PNG|\.png)$/g.test(val);
      if (fileType) {
        return pdfIcon_namespaceObject;
      } else {
        return pngIcon_namespaceObject;
      }
    },
    sliceLine: function sliceLine(row, type) {
      var len = row.indexOf('_');
      var newName = row.slice(0, len);
      return newName + '.' + type;
    },
    turnSize: function turnSize(size) {
      if (size < 0.1 * 1024) {
        //小于0.1KB，则转化成B
        size = size.toFixed(2) + 'B';
      } else if (size < 0.1 * 1024 * 1024) {
        // 小于0.1MB，则转化成KB
        size = (size / 1024).toFixed(2) + 'KB';
      } else if (size < 0.1 * 1024 * 1024 * 1024) {
        // 小于0.1GB，则转化成MB
        size = (size / (1024 * 1024)).toFixed(2) + 'MB';
      } else {
        // 其他转化成GB
        size = (size / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
      }

      // 转成字符串
      var sizeStr = size + '',
        // 获取小数点处的索引
        index = sizeStr.indexOf('.'),
        // 获取小数点后两位的值
        dou = sizeStr.substr(index + 1, 2);

      // 判断后两位是否为00，如果是则删除00
      if (dou == '00') return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);
      return size;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/PerviewFile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PerviewFilevue_type_script_lang_js_ = (PerviewFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/PerviewFile/index.vue?vue&type=style&index=0&id=20170a28&scoped=true&lang=scss&
var PerviewFilevue_type_style_index_0_id_20170a28_scoped_true_lang_scss_ = __webpack_require__(79740);
;// CONCATENATED MODULE: ./src/components/PerviewFile/index.vue?vue&type=style&index=0&id=20170a28&scoped=true&lang=scss&
 /* harmony default export */ var components_PerviewFilevue_type_style_index_0_id_20170a28_scoped_true_lang_scss_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/PerviewFile/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_PerviewFilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "20170a28",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var PerviewFile = (component.exports);

/***/ }),

/***/ 85720:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-20170a28]{width:100%;background-color:#fff;display:flex}.content .annex[data-v-20170a28]{line-height:%?50?%;width:100%;background:#fff;border-radius:%?10?%}.content .annex .annexItem[data-v-20170a28]{display:flex;align-items:center;justify-content:space-between}.content .annex .annexItem .annexItemLeft[data-v-20170a28]{display:flex;align-items:center}.content .annex .annexItem .annexItemLeft .fileView .fileName[data-v-20170a28]{color:#333;font-weight:500}.content .annex .annexItem .annexItemLeft .fileView .fileSize[data-v-20170a28]{font-size:%?28?%}.content .annex .annexItem .showFile .download[data-v-20170a28]{color:#32c3ba}.content .annex .annexItem .showFile .eye[data-v-20170a28]{color:#3cadff;margin-left:%?20?%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 13293:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lF: function() { return /* binding */ encode; }
/* harmony export */ });
/* unused harmony exports version, VERSION, atob, atobPolyfill, btoa, btoaPolyfill, fromBase64, toBase64, utob, encodeURI, encodeURL, btou, decode, isValid, fromUint8Array, toUint8Array, extendString, extendUint8Array, extendBuiltins, Base64 */
/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.7.7';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasBuffer = typeof Buffer === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
const _mkUriSafe = (src) => src
    .replace(/=/g, '').replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = '';
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length;) {
        if ((c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError('invalid character found');
        u32 = (c0 << 16) | (c1 << 8) | c2;
        asc += b64chs[u32 >> 18 & 63]
            + b64chs[u32 >> 12 & 63]
            + b64chs[u32 >> 6 & 63]
            + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = typeof btoa === 'function' ? (bin) => btoa(bin)
    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
        : btoaPolyfill;
const _fromUint8Array = _hasBuffer
    ? (u8a) => Buffer.from(u8a).toString('base64')
    : (u8a) => {
        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
        const maxargs = 0x1000;
        let strs = [];
        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c) => {
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c
            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                + _fromCC(0x80 | (cc & 0x3f)))
                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                    + _fromCC(0x80 | (cc & 0x3f)));
    }
    else {
        var cc = 0x10000
            + (c.charCodeAt(0) - 0xD800) * 0x400
            + (c.charCodeAt(1) - 0xDC00);
        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
            + _fromCC(0x80 | (cc & 0x3f)));
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (u) => u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer
    ? (s) => Buffer.from(s, 'utf8').toString('base64')
    : _TE
        ? (s) => _fromUint8Array(_TE.encode(s))
        : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) => urlsafe
    ? _mkUriSafe(_encode(src))
    : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc) => {
    switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                | ((0x3f & cccc.charCodeAt(1)) << 12)
                | ((0x3f & cccc.charCodeAt(2)) << 6)
                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
            return (_fromCC((offset >>> 10) + 0xD800)
                + _fromCC((offset & 0x3FF) + 0xDC00));
        case 3:
            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                | ((0x3f & cccc.charCodeAt(1)) << 6)
                | (0x3f & cccc.charCodeAt(2)));
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                | (0x3f & cccc.charCodeAt(1)));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (b) => b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc))
        throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    let u24, bin = '', r1, r2;
    for (let i = 0; i < asc.length;) {
        u24 = b64tab[asc.charAt(i++)] << 18
            | b64tab[asc.charAt(i++)] << 12
            | (r1 = b64tab[asc.charAt(i++)]) << 6
            | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = typeof atob === 'function' ? (asc) => atob(_tidyB64(asc))
    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
        : atobPolyfill;
//
const _toUint8Array = _hasBuffer
    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
    : (a) => _U8Afrom(_atob(a).split('').map(c => c.charCodeAt(0)));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = (a) => _toUint8Array(_unURI(a));
//
const _decode = _hasBuffer
    ? (a) => Buffer.from(a, 'base64').toString('utf8')
    : _TD
        ? (a) => _TD.decode(_toUint8Array(a))
        : (a) => btou(_atob(a));
const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
const isValid = (src) => {
    if (typeof src !== 'string')
        return false;
    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v) => {
    return {
        value: v, enumerable: false, writable: true, configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add('fromBase64', function () { return decode(this); });
    _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
    _add('toBase64URI', function () { return encode(this, true); });
    _add('toBase64URL', function () { return encode(this, true); });
    _add('toUint8Array', function () { return toUint8Array(this); });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
    _add('toBase64URI', function () { return fromUint8Array(this, true); });
    _add('toBase64URL', function () { return fromUint8Array(this, true); });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode: encode,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins
};
// makecjs:CUT //




















// and finally,



/***/ })

}]);