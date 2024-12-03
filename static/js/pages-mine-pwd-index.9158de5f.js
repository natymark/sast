(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[7410],{

/***/ 20294:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88178);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("51fd9a21", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 15843:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pwd; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/pwd/index.vue?vue&type=template&id=6f3b808e&scoped=true&
var components = {'uniForms': (__webpack_require__(70491)/* ["default"] */ .A),'uniFormsItem': (__webpack_require__(74392)/* ["default"] */ .A),'uniEasyinput': (__webpack_require__(11172)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"pwd-retrieve-container"},[_c('uni-forms',{ref:"form",attrs:{"value":_vm.user,"labelWidth":"80px"}},[_c('uni-forms-item',{attrs:{"name":"oldPassword","label":"旧密码"}},[_c('uni-easyinput',{attrs:{"type":"password","placeholder":"请输入旧密码"},model:{value:(_vm.user.oldPassword),callback:function ($$v) {_vm.$set(_vm.user, "oldPassword", $$v)},expression:"user.oldPassword"}})],1),_c('uni-forms-item',{attrs:{"name":"newPassword","label":"新密码"}},[_c('uni-easyinput',{attrs:{"type":"password","placeholder":"请输入新密码"},model:{value:(_vm.user.newPassword),callback:function ($$v) {_vm.$set(_vm.user, "newPassword", $$v)},expression:"user.newPassword"}})],1),_c('uni-forms-item',{attrs:{"name":"confirmPassword","label":"确认密码"}},[_c('uni-easyinput',{attrs:{"type":"password","placeholder":"请确认新密码"},model:{value:(_vm.user.confirmPassword),callback:function ($$v) {_vm.$set(_vm.user, "confirmPassword", $$v)},expression:"user.confirmPassword"}})],1),_c('v-uni-button',{attrs:{"type":"primary"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.submit).apply(void 0, arguments)
}}},[_vm._v("提交")])],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/pages/mine/pwd/index.vue?vue&type=template&id=6f3b808e&scoped=true&

// EXTERNAL MODULE: ./src/api/system/user.js
var user = __webpack_require__(62008);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/pwd/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var pwdvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      user: {
        oldPassword: undefined,
        newPassword: undefined,
        confirmPassword: undefined
      },
      rules: {
        oldPassword: {
          rules: [{
            required: true,
            errorMessage: '旧密码不能为空'
          }]
        },
        newPassword: {
          rules: [{
            required: true,
            errorMessage: '新密码不能为空'
          }, {
            minLength: 6,
            maxLength: 20,
            errorMessage: '长度在 6 到 20 个字符'
          }]
        },
        confirmPassword: {
          rules: [{
            required: true,
            errorMessage: '确认密码不能为空'
          }, {
            validateFunction: function validateFunction(rule, value, data) {
              return data.newPassword === value;
            },
            errorMessage: '两次输入的密码不一致'
          }]
        }
      }
    };
  },
  onReady: function onReady() {
    this.$refs.form.setRules(this.rules);
  },
  methods: {
    submit: function submit() {
      var _this = this;
      this.$refs.form.validate().then(function (res) {
        (0,user/* updateUserPwd */.cO)(_this.user.oldPassword, _this.user.newPassword).then(function (response) {
          _this.$modal.msgSuccess("修改成功");
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/mine/pwd/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var mine_pwdvue_type_script_lang_js_ = (pwdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/pwd/index.vue?vue&type=style&index=0&id=6f3b808e&lang=scss&scoped=true&
var pwdvue_type_style_index_0_id_6f3b808e_lang_scss_scoped_true_ = __webpack_require__(20294);
;// CONCATENATED MODULE: ./src/pages/mine/pwd/index.vue?vue&type=style&index=0&id=6f3b808e&lang=scss&scoped=true&
 /* harmony default export */ var mine_pwdvue_type_style_index_0_id_6f3b808e_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/mine/pwd/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  mine_pwdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6f3b808e",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var pwd = (component.exports);

/***/ }),

/***/ 88178:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-6f3b808e]{background-color:#fff}body.?%PAGE?%[data-v-6f3b808e]{background-color:#fff}.pwd-retrieve-container[data-v-6f3b808e]{padding-top:%?36?%;padding:15px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 62008:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F4: function() { return /* binding */ uploadAvatar; },
/* harmony export */   VM: function() { return /* binding */ getUserProfile; },
/* harmony export */   cO: function() { return /* binding */ updateUserPwd; },
/* harmony export */   eg: function() { return /* binding */ updateUserProfile; }
/* harmony export */ });
/* unused harmony export userProfileList */
/* harmony import */ var _utils_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29987);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41325);



// 用户密码重置
function updateUserPwd(oldPassword, newPassword) {
  var data = {
    oldPassword: oldPassword,
    newPassword: newPassword
  };
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    url: '/system/user/profile/updatePwd',
    method: 'put',
    params: data
  });
}

// 查询用户个人信息
function getUserProfile() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    url: '/system/user/profile',
    method: 'get'
  });
}

// 修改用户个人信息
function updateUserProfile(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    url: '/system/user/profile',
    method: 'put',
    data: data
  });
}

// 用户头像上传
function uploadAvatar(data) {
  return (0,_utils_upload__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/system/user/profile/avatar',
    name: data.name,
    filePath: data.filePath
  });
}
function userProfileList() {
  return request({
    url: '/nus/user/list',
    method: 'get'
    // data: data
  });
}

/***/ }),

/***/ 29987:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74423);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34782);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2892);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79432);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26099);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21699);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46920);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84300);
/* harmony import */ var _utils_errorCode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18471);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50771);







var defaultConfig = __webpack_require__(27358);



var timeout = 10000;
var upload = function upload(config) {
  // 是否需要设置 token
  var isToken = (config.headers || {}).isToken === false;
  config.header = config.header || {};
  if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_9__/* .getToken */ .gf)() && !isToken) {
    config.header['Authorization'] = 'Bearer ' + (0,_utils_auth__WEBPACK_IMPORTED_MODULE_9__/* .getToken */ .gf)();
  }
  // get请求映射params参数
  if (config.params) {
    var url = config.url + '?' + (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .tansParams */ .HE)(config.params);
    url = url.slice(0, -1);
    config.url = url;
  }
  return new Promise(function (resolve, reject) {
    uni.uploadFile({
      timeout: config.timeout || timeout,
      url: config.baseUrl || defaultConfig.baseUrl + config.url,
      file: config.file || '',
      fileType: 'image',
      // filePath: config.filePath || '',
      name: config.name || 'file',
      header: config.header,
      // formData: config.formData || {},
      success: function success(res) {
        var result = JSON.parse(res.data);
        var code = Number(result.code) || 200;
        var msg = _utils_errorCode__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A[code] || result.msg || _utils_errorCode__WEBPACK_IMPORTED_MODULE_7__/* ["default"]["default"] */ .A["default"];
        if (code === 200) {
          resolve(result);
        } else if (code === -1) {
          resolve(result);
        } else if (code == 401) {
          (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .showConfirm */ .GQ)("登录状态已过期，您可以继续留在该页面，或者重新登录?").then(function (res) {
            if (res.confirm) {
              _store__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.dispatch('LogOut').then(function (res) {
                uni.reLaunch({
                  url: '/pages/login/login'
                });
              });
            }
          });
          reject('无效的会话，或者会话已过期，请重新登录。');
        } else if (code === 500) {
          (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .toast */ .oR)(msg);
          reject('500');
        } else if (code !== 200) {
          (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .toast */ .oR)(msg);
          reject(code);
        }
      },
      fail: function fail(error) {
        var message = error.message;
        if (message == 'Network Error') {
          message = '后端接口连接异常';
        } else if (message.includes('timeout')) {
          message = '系统接口请求超时';
        } else if (message.includes('Request failed with status code')) {
          message = '系统接口' + message.substr(message.length - 3) + '异常';
        }
        (0,_utils_common__WEBPACK_IMPORTED_MODULE_8__/* .toast */ .oR)(message);
        reject(error);
      }
    });
  });
};
/* harmony default export */ __webpack_exports__.A = (upload);

/***/ })

}]);