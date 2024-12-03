(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[7277],{

/***/ 50057:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78725);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("733996e9", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 74154:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ register; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/register.vue?vue&type=template&id=cea07ec8&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"normal-login-container"},[_c('v-uni-view',{staticClass:"logo-content align-center justify-center flex"},[_c('v-uni-image',{staticStyle:{"width":"100rpx","height":"100rpx"},attrs:{"src":_vm.globalConfig.appInfo.logo,"mode":"widthFix"}}),_c('v-uni-text',{staticClass:"title"},[_vm._v("注册")])],1),_c('v-uni-view',{staticClass:"login-form-content"},[_c('v-uni-view',{staticClass:"input-item flex align-center"},[_c('v-uni-view',{staticClass:"iconfont icon-user icon"}),_c('v-uni-input',{staticClass:"input",attrs:{"type":"text","placeholder":"请输入账号","maxlength":"30"},model:{value:(_vm.registerForm.username),callback:function ($$v) {_vm.$set(_vm.registerForm, "username", $$v)},expression:"registerForm.username"}})],1),_c('v-uni-view',{staticClass:"input-item flex align-center"},[_c('v-uni-view',{staticClass:"iconfont icon-password icon"}),_c('v-uni-input',{staticClass:"input",attrs:{"type":"password","placeholder":"请输入密码","maxlength":"20"},model:{value:(_vm.registerForm.password),callback:function ($$v) {_vm.$set(_vm.registerForm, "password", $$v)},expression:"registerForm.password"}})],1),_c('v-uni-view',{staticClass:"input-item flex align-center"},[_c('v-uni-view',{staticClass:"iconfont icon-password icon"}),_c('v-uni-input',{staticClass:"input",attrs:{"type":"password","placeholder":"请输入重复密码","maxlength":"20"},model:{value:(_vm.registerForm.confirmPassword),callback:function ($$v) {_vm.$set(_vm.registerForm, "confirmPassword", $$v)},expression:"registerForm.confirmPassword"}})],1),(_vm.captchaEnabled)?_c('v-uni-view',{staticClass:"input-item flex align-center",staticStyle:{"width":"60%","margin":"0px"}},[_c('v-uni-view',{staticClass:"iconfont icon-code icon"}),_c('v-uni-input',{staticClass:"input",attrs:{"type":"number","placeholder":"请输入验证码","maxlength":"4"},model:{value:(_vm.registerForm.code),callback:function ($$v) {_vm.$set(_vm.registerForm, "code", $$v)},expression:"registerForm.code"}}),_c('v-uni-view',{staticClass:"login-code"},[_c('v-uni-image',{staticClass:"login-code-img",attrs:{"src":_vm.codeUrl},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getCode).apply(void 0, arguments)
}}})],1)],1):_vm._e(),_c('v-uni-view',{staticClass:"action-btn"},[_c('v-uni-button',{staticClass:"register-btn cu-btn block bg-blue lg round",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.handleRegister()
}}},[_vm._v("注册")])],1)],1),_c('v-uni-view',{staticClass:"xieyi text-center"},[_c('v-uni-text',{staticClass:"text-blue",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleUserLogin).apply(void 0, arguments)
}}},[_vm._v("使用已有账号登录")])],1)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./src/api/login.js
var login = __webpack_require__(1776);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/register.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var registervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      codeUrl: "",
      captchaEnabled: true,
      globalConfig: getApp().globalData.config,
      registerForm: {
        username: "",
        password: "",
        confirmPassword: "",
        code: "",
        uuid: ""
      }
    };
  },
  created: function created() {
    this.getCode();
  },
  methods: {
    // 用户登录
    handleUserLogin: function handleUserLogin() {
      this.$tab.navigateTo("/pages/login");
    },
    // 获取图形验证码
    getCode: function getCode() {
      var _this = this;
      (0,login/* getCodeImg */.Pz)().then(function (res) {
        _this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (_this.captchaEnabled) {
          _this.codeUrl = "data:image/gif;base64," + res.img;
          _this.registerForm.uuid = res.uuid;
        }
      });
    },
    // 注册方法
    handleRegister: function handleRegister() {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this2.registerForm.username === "") {
                _this2.$modal.msgError("请输入您的账号");
              } else if (_this2.registerForm.password === "") {
                _this2.$modal.msgError("请输入您的密码");
              } else if (_this2.registerForm.confirmPassword === "") {
                _this2.$modal.msgError("请再次输入您的密码");
              } else if (_this2.registerForm.password !== _this2.registerForm.confirmPassword) {
                _this2.$modal.msgError("两次输入的密码不一致");
              } else if (_this2.registerForm.code === "" && _this2.captchaEnabled) {
                _this2.$modal.msgError("请输入验证码");
              } else {
                _this2.$modal.loading("注册中，请耐心等待...");
                _this2.register();
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // 用户注册
    register: function register() {
      var _this3 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              (0,login/* register */.kz)(_this3.registerForm).then(function (res) {
                _this3.$modal.closeLoading();
                uni.showModal({
                  title: "系统提示",
                  content: "恭喜你，您的账号 " + _this3.registerForm.username + " 注册成功！",
                  success: function success(res) {
                    if (res.confirm) {
                      uni.redirectTo({
                        url: "/pages/login"
                      });
                    }
                  }
                });
              }).catch(function () {
                if (_this3.captchaEnabled) {
                  _this3.getCode();
                }
              });
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // 注册成功后，处理函数
    registerSuccess: function registerSuccess(result) {
      var _this4 = this;
      // 设置用户信息
      this.$store.dispatch("GetInfo").then(function (res) {
        _this4.$tab.reLaunch("/pages/index");
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/register.vue?vue&type=style&index=0&id=cea07ec8&lang=scss&scoped=true&
var registervue_type_style_index_0_id_cea07ec8_lang_scss_scoped_true_ = __webpack_require__(50057);
;// CONCATENATED MODULE: ./src/pages/register.vue?vue&type=style&index=0&id=cea07ec8&lang=scss&scoped=true&
 /* harmony default export */ var pages_registervue_type_style_index_0_id_cea07ec8_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/register.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "cea07ec8",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var register = (component.exports);

/***/ }),

/***/ 78725:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-cea07ec8]{background-color:#fff}body.?%PAGE?%[data-v-cea07ec8]{background-color:#fff}.normal-login-container[data-v-cea07ec8]{width:100%}.normal-login-container .logo-content[data-v-cea07ec8]{width:100%;font-size:21px;text-align:center;padding-top:15%}.normal-login-container .logo-content uni-image[data-v-cea07ec8]{border-radius:4px}.normal-login-container .logo-content .title[data-v-cea07ec8]{margin-left:10px}.normal-login-container .login-form-content[data-v-cea07ec8]{text-align:center;margin:20px auto;margin-top:15%;width:80%}.normal-login-container .login-form-content .input-item[data-v-cea07ec8]{margin:20px auto;background-color:#f5f6f7;height:45px;border-radius:20px}.normal-login-container .login-form-content .input-item .icon[data-v-cea07ec8]{font-size:%?38?%;margin-left:10px;color:#999}.normal-login-container .login-form-content .input-item .input[data-v-cea07ec8]{width:100%;font-size:14px;line-height:20px;text-align:left;padding-left:15px}.normal-login-container .login-form-content .register-btn[data-v-cea07ec8]{margin-top:40px;height:45px}.normal-login-container .login-form-content .xieyi[data-v-cea07ec8]{color:#333;margin-top:20px}.normal-login-container .login-form-content .login-code[data-v-cea07ec8]{height:38px;float:right}.normal-login-container .login-form-content .login-code .login-code-img[data-v-cea07ec8]{height:38px;position:absolute;margin-left:10px;width:%?200?%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);