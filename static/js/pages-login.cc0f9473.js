(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[4729],{

/***/ 85510:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26431);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("781d9cd5", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 14815:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51019);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("61125470", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 34001:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_loading; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-loading/u-loading.vue?vue&type=template&id=19cf7fca&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('v-uni-view',{staticClass:"u-loading",class:_vm.mode == 'circle' ? 'u-loading-circle' : 'u-loading-flower',style:([_vm.cricleStyle])}):_vm._e()}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-loading/u-loading.vue?vue&type=script&lang=js&
//
//
//
//
//

/**
 * loading 加载动画
 * @description 警此组件为一个小动画，目前用在uView的loadmore加载更多和switch开关等组件的正在加载状态场景。
 * @tutorial https://www.uviewui.com/components/loading.html
 * @property {String} mode 模式选择，见官网说明（默认circle）
 * @property {String} color 动画活动区域的颜色，只对 mode = flower 模式有效（默认#c7c7c7）
 * @property {String Number} size 加载图标的大小，单位rpx（默认34）
 * @property {Boolean} show 是否显示动画（默认true）
 * @example <u-loading mode="circle"></u-loading>
 */
/* harmony default export */ var u_loadingvue_type_script_lang_js_ = ({
	name: "u-loading",
	props: {
		// 动画的类型
		mode: {
			type: String,
			default: 'circle'
		},
		// 动画的颜色
		color: {
			type: String,
			default: '#c7c7c7'
		},
		// 加载图标的大小，单位rpx
		size: {
			type: [String, Number],
			default: '34'
		},
		// 是否显示动画
		show: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		// 加载中圆圈动画的样式
		cricleStyle() {
			let style = {};
			style.width = this.size + 'rpx';
			style.height = this.size + 'rpx';
			if (this.mode == 'circle') style.borderColor = `#e4e4e4 #e4e4e4 #e4e4e4 ${this.color ? this.color : '#c7c7c7'}`;
			return style;
		},
	}
});

;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-loading/u-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_loading_u_loadingvue_type_script_lang_js_ = (u_loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-loading/u-loading.vue?vue&type=style&index=0&id=19cf7fca&lang=scss&scoped=true&
var u_loadingvue_type_style_index_0_id_19cf7fca_lang_scss_scoped_true_ = __webpack_require__(14815);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-loading/u-loading.vue?vue&type=style&index=0&id=19cf7fca&lang=scss&scoped=true&
 /* harmony default export */ var u_loading_u_loadingvue_type_style_index_0_id_19cf7fca_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-loading/u-loading.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_loading_u_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "19cf7fca",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_loading = (component.exports);

/***/ }),

/***/ 16868:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_login; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/login.vue?vue&type=template&id=4ce85f46&scoped=true&
var components = {'uIcon': (__webpack_require__(15614)/* ["default"] */ .A),'uLoading': (__webpack_require__(34001)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"load",style:({ height: '100%', display: 'flex' })},[_c('v-uni-view',{style:({
		flex: '1',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	})},[_c('v-uni-view',{staticClass:"closeClass",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.close).apply(void 0, arguments)
}}},[_c('u-icon',{attrs:{"name":"close-circle","color":"#009280","size":"48"}})],1),_c('v-uni-view',{style:({
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		})},[_c('v-uni-view',{style:({
				fontSize: '48rpx',
				fontWeight: 'bold',
				backgroundImage: '-webkit-linear-gradient(top, #009280, #b8edd9)',
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent'
			})},[_vm._v("非统调水电厂调度系统")])],1),_c('v-uni-view',{staticClass:"content",style:({ display: 'flex', alignItems: 'center', padding: '20%' })},[_c('u-loading',{attrs:{"color":"#009280","mode":"circle"}}),_c('v-uni-view',{style:({
				marginLeft: '20rpx',
				color: '#009280'
			})},[_vm._v(_vm._s(_vm.Tips))])],1)],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/pages/login.vue?vue&type=template&id=4ce85f46&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__(16280);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__(76918);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__(84300);
// EXTERNAL MODULE: ./src/utils/dynamicConfig.js
var dynamicConfig = __webpack_require__(27015);
// EXTERNAL MODULE: ./src/api/login.js
var login = __webpack_require__(1776);
// EXTERNAL MODULE: ./src/config.js
var config = __webpack_require__(27358);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__(50771);
;// CONCATENATED MODULE: ./src/utils/wxInit.js
/* provided dependency */ var console = __webpack_require__(43859)["A"];




// 是否是正式环境
var isOfficial = false;
var wxInit_config = {
  corpid: isOfficial ? 'ww445f8033443a14aa' : 'ww4d11a39991ebffdc',
  agentid: isOfficial ? '1007917' : '1001888',
  IscAppId: isOfficial ? '4f488f362b3f412480086df7f2a801b4' : '2e7773093ffb400aa20093e04abdce14',
  ISCP_IP: '202.110.130.19',
  ISCP_PORT: '20083',
  ISCP_USER: 'user',
  ISCP_APPID: 'hubei',
  XTBG_IP: '172.27.180.70',
  XTBG_PORT: '18001',
  timestamp: '1626832073',
  nonceStr: 'AMQGnmTMzhJetshY',
  signature: 'fb9f560a9b4824f7db3525926994010de74ea055',
  authorizeUrl: isOfficial ? 'https://igw.isgcc.net:18081/connect/oauth2/authorize' : 'https://igw.sgcc.com.cn/connect/oauth2/authorize',
  ticketUrl: isOfficial ? 'https://igw.isgcc.net:18443/identity/getAuthTicketByWechatCode' : 'http://id.sgcc.com.cn:18088/eeee/identity/getAuthTicketByWechatCode',
  userInfoUrl: isOfficial ? 'https://igw.isgcc.net:18443/zuul/sgid-frontmv/identity/getUserInfoByTicket' : 'http://id.sgcc.com.cn:18082/sgid-frontmv/identity/getUserInfoByTicket',
  getAccessToken: isOfficial ? 'https://igw.isgcc.net:18443/zuul/sgid-provider-console/res/iscMincroService/getAccessToken' : 'http://id.sgcc.com.cn:18082/sgid-provider-console/res/iscMincroService/getAccessToken',
  newGetTicket: 'https://id.sgcc.com.cn:10443/igwmobile/proxy/getUserByIgwCode'
};
var jsApiList = ['ext_ISCP_Init', 'ext_ISCP_ConnectService', 'ext_ISCP_GetLocalPort', 'ext_ISCP_Close', 'ext_ISCP_Status', 'openUrl', 'previewFile', 'multiWindows_subscribe', 'ext_Socket_UnInit', 'ext_Socket_Init', 'ext_Socket_CreateChannel', 'ext_Socket_CloseChannel', 'ext_Socket_SendData'];
var readyWx = /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
    return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0,common/* loadScript */.k0)('https://res.wx.qq.com/open/js/jweixin-1.2.0.js');
        case 3:
          wx.error(function (error) {
            console.log('初始化引擎失败...', error);
          });
          wx.config({
            beta: true,
            debug: false,
            appId: wxInit_config.corpid,
            timestamp: wxInit_config.timestamp,
            nonceStr: wxInit_config.nonceStr,
            signature: wxInit_config.signature,
            jsApiList: jsApiList
          });
          console.log('脚本加载成功');
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('脚本加载失败:', _context.t0);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function readyWx() {
    return _ref.apply(this, arguments);
  };
}();
var initSocket = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return wx.invoke('ext_Socket_Init', {}, function (res) {
            console.log('初始化socket成功', res);
          });
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function initSocket() {
    return _ref2.apply(this, arguments);
  };
}()));
var createChannel = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return wx.invoke('ext_Socket_CreateChannel', {
            data: {
              channelId: 'event_Socket_channel_19216843225',
              ip: '10.42.26.82',
              port: 19204,
              type: 1
            }
          }, function (res) {
            console.log('创建通道成功', res);
          });
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function createChannel() {
    return _ref3.apply(this, arguments);
  };
}()));
var subscribe = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return wx.invoke('multiWindows_subscribe', {
            channelId: 'event_Socket_channel_19216843225'
          }, function (res) {
            console.log('订阅成功', res);
            if (res.err_msg == 'multiWindows_subscribe:ok') {
              console.log('receive data ', new Date().getTime(), res.data.data);
            }
          });
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function subscribe() {
    return _ref4.apply(this, arguments);
  };
}()));

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/login.vue?vue&type=script&lang=js&
/* provided dependency */ var loginvue_type_script_lang_js_console = __webpack_require__(43859)["A"];






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      Tips: ''
    };
  },
  onLoad: function onLoad() {
    this.IscInit();
  },
  methods: {
    close: function close() {
      this.$tab.navigateBack();
    },
    IscInit: function IscInit() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var isProduction, isProdEnv, isTest3Env, isTest4Env, port;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              isProduction = "production" === 'production';
              isProdEnv = "production" === 'production';
              isTest3Env = "test4" === 'test3';
              isTest4Env = "test4" === 'test4';
              port = config_default().initPort();
              if (isProduction) {
                _context.next = 10;
                break;
              }
              _context.next = 9;
              return _this.handleDevLogin();
            case 9:
              return _context.abrupt("return");
            case 10:
              if (!isProdEnv) {
                _context.next = 25;
                break;
              }
              if (!isTest3Env) {
                _context.next = 16;
                break;
              }
              _context.next = 14;
              return _this.handleTest3Login(port);
            case 14:
              _context.next = 23;
              break;
            case 16:
              if (!isTest4Env) {
                _context.next = 21;
                break;
              }
              _context.next = 19;
              return _this.handleTest4Login(port);
            case 19:
              _context.next = 23;
              break;
            case 21:
              _context.next = 23;
              return _this.handleProdLogin();
            case 23:
              _context.next = 27;
              break;
            case 25:
              _context.next = 27;
              return _this.handleDevLogin();
            case 27:
              _context.next = 33;
              break;
            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](0);
              loginvue_type_script_lang_js_console.error('Login error:', _context.t0);
              _this.$modal.msgError('登录失败，请重试');
            case 33:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 29]]);
      }))();
    },
    handleProdLogin: function handleProdLogin() {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2() {
        var _res$data;
        var port, userInfo, res;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              port = config_default().initPort();
              userInfo = _this2.getUserInfo();
              _this2.initializeUrls(port);
              _context2.next = 5;
              return (0,login/* keepAlive */.Z8)({
                nameCode: userInfo.nameCode
              });
            case 5:
              res = _context2.sent;
              if (!((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.access_token)) {
                _context2.next = 12;
                break;
              }
              (0,auth/* setToken */.WG)(res.data.access_token);
              _context2.next = 10;
              return _this2.loginSuccess();
            case 10:
              _context2.next = 13;
              break;
            case 12:
              throw new Error('获取token失败');
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    handleTest3Login: function handleTest3Login(port) {
      var _this3 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee3() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.initializeUrls(port);
              _context3.next = 3;
              return _this3.handleProdLogin();
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    handleTest4Login: function handleTest4Login(port) {
      var _this4 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee4() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this4.initializeUrls(port);
              _context4.next = 3;
              return _this4.handleProdLogin();
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    getUserInfo: function getUserInfo() {
      var userInfo = uni.getStorageSync('hboms_userInfo');
      return JSON.parse(userInfo);
    },
    initializeUrls: function initializeUrls(port) {
      var proxyUrl = "/ftd/api";
      var proxyOssUrl = "/ftd/oss";
      var proxyFaceUrl = "/mbsb";
      var proxyWebsocketUrl = "/ftd/websocket";
      var proxySseUrl = "/nus/see/connect";
      var baseUrl = "http://127.0.0.1:".concat(port).concat(proxyUrl);
      var baseOssUrl = "http://127.0.0.1:".concat(port).concat(proxyOssUrl);
      var faceUrl = "http://127.0.0.1:".concat(port).concat(proxyFaceUrl);
      var websocketUrl = "ws://127.0.0.1:".concat(port).concat(proxyWebsocketUrl);
      var sseUrl = "".concat(baseUrl).concat(proxySseUrl);
      (0,dynamicConfig.setBaseUrl)(baseUrl);
      (0,dynamicConfig.setImgUrl)("".concat(baseOssUrl, "/static/images"));
      (0,dynamicConfig.setLibUrl)("".concat(baseOssUrl, "/static/lib"));
      (0,dynamicConfig.setFaceUrl)(faceUrl);
      (0,dynamicConfig.setWebsocketUrl)(websocketUrl);
      (0,dynamicConfig.setSseUrl)(sseUrl);
      loginvue_type_script_lang_js_console.log(baseUrl, 'baseUrl');
    },
    handleDevLogin: function handleDevLogin() {
      var _this5 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee5() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.$store.dispatch('Login', {
                username: 'admin',
                password: 'admin123'
                // password: 'irh@admin123'
              });
            case 2:
              _this5.Tips = '应用程序鉴权成功...';
              _context5.next = 5;
              return _this5.loginSuccess();
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    loginSuccess: function loginSuccess() {
      var _this6 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee6() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this6.$store.dispatch("GetInfo");
            case 2:
              _context6.next = 4;
              return _this6.initWx();
            case 4:
              _this6.$tab.reLaunch("/pages/work/index");
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    initWx: function initWx() {
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee7() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return readyWx();
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/login.vue?vue&type=style&index=0&id=4ce85f46&scoped=true&lang=css&
var loginvue_type_style_index_0_id_4ce85f46_scoped_true_lang_css_ = __webpack_require__(85510);
;// CONCATENATED MODULE: ./src/pages/login.vue?vue&type=style&index=0&id=4ce85f46&scoped=true&lang=css&
 /* harmony default export */ var pages_loginvue_type_style_index_0_id_4ce85f46_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/login.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4ce85f46",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var pages_login = (component.exports);

/***/ }),

/***/ 26431:
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
___CSS_LOADER_EXPORT___.push([module.id, ".uni-page-body[data-v-4ce85f46]{height:100vh}.load[data-v-4ce85f46]{padding-top:env(safe-area-inset-top)}.load .closeClass[data-v-4ce85f46]{width:100%;text-align:right;padding:10%;box-sizing:border-box}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45522);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67643);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48402);
/* harmony import */ var _vue_cli_service_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vue_cli_service_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(92337), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _vue_cli_service_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-loading-circle[data-v-19cf7fca]{display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:u-circle-data-v-19cf7fca 1s linear infinite;animation:u-circle-data-v-19cf7fca 1s linear infinite}.u-loading-flower[data-v-19cf7fca]{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:u-flower-data-v-19cf7fca 1s steps(12) infinite;animation:u-flower-data-v-19cf7fca 1s steps(12) infinite;background:transparent url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;background-size:100%}@-webkit-keyframes u-flower-data-v-19cf7fca{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-flower-data-v-19cf7fca{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes u-circle-data-v-19cf7fca{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 92337:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=";

/***/ })

}]);