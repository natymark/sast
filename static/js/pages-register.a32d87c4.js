(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[7277],{50057:function(e,n,t){var i=t(78725);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var o=t(69333).A;o("733996e9",i,!0,{sourceMap:!1,shadowMode:!1})},74154:function(e,n,t){"use strict";var i;t.r(n),t.d(n,{default:function(){return p}});var o,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"normal-login-container"},[t("v-uni-view",{staticClass:"logo-content align-center justify-center flex"},[t("v-uni-image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:e.globalConfig.appInfo.logo,mode:"widthFix"}}),t("v-uni-text",{staticClass:"title"},[e._v("注册")])],1),t("v-uni-view",{staticClass:"login-form-content"},[t("v-uni-view",{staticClass:"input-item flex align-center"},[t("v-uni-view",{staticClass:"iconfont icon-user icon"}),t("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入账号",maxlength:"30"},model:{value:e.registerForm.username,callback:function(n){e.$set(e.registerForm,"username",n)},expression:"registerForm.username"}})],1),t("v-uni-view",{staticClass:"input-item flex align-center"},[t("v-uni-view",{staticClass:"iconfont icon-password icon"}),t("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入密码",maxlength:"20"},model:{value:e.registerForm.password,callback:function(n){e.$set(e.registerForm,"password",n)},expression:"registerForm.password"}})],1),t("v-uni-view",{staticClass:"input-item flex align-center"},[t("v-uni-view",{staticClass:"iconfont icon-password icon"}),t("v-uni-input",{staticClass:"input",attrs:{type:"password",placeholder:"请输入重复密码",maxlength:"20"},model:{value:e.registerForm.confirmPassword,callback:function(n){e.$set(e.registerForm,"confirmPassword",n)},expression:"registerForm.confirmPassword"}})],1),e.captchaEnabled?t("v-uni-view",{staticClass:"input-item flex align-center",staticStyle:{width:"60%",margin:"0px"}},[t("v-uni-view",{staticClass:"iconfont icon-code icon"}),t("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"请输入验证码",maxlength:"4"},model:{value:e.registerForm.code,callback:function(n){e.$set(e.registerForm,"code",n)},expression:"registerForm.code"}}),t("v-uni-view",{staticClass:"login-code"},[t("v-uni-image",{staticClass:"login-code-img",attrs:{src:e.codeUrl},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.getCode.apply(void 0,arguments)}}})],1)],1):e._e(),t("v-uni-view",{staticClass:"action-btn"},[t("v-uni-button",{staticClass:"register-btn cu-btn block bg-blue lg round",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleRegister()}}},[e._v("注册")])],1)],1),t("v-uni-view",{staticClass:"xieyi text-center"},[t("v-uni-text",{staticClass:"text-blue",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.handleUserLogin.apply(void 0,arguments)}}},[e._v("使用已有账号登录")])],1)],1)},r=[],c=t(42727),s=t(50575),l=t(1776),d={data:function(){return{codeUrl:"",captchaEnabled:!0,globalConfig:getApp().globalData.config,registerForm:{username:"",password:"",confirmPassword:"",code:"",uuid:""}}},created:function(){this.getCode()},methods:{handleUserLogin:function(){this.$tab.navigateTo("/pages/login")},getCode:function(){var e=this;(0,l.Pz)().then((function(n){e.captchaEnabled=void 0===n.captchaEnabled||n.captchaEnabled,e.captchaEnabled&&(e.codeUrl="data:image/gif;base64,"+n.img,e.registerForm.uuid=n.uuid)}))},handleRegister:function(){var e=this;return(0,s.A)((0,c.A)().mark((function n(){return(0,c.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:""===e.registerForm.username?e.$modal.msgError("请输入您的账号"):""===e.registerForm.password?e.$modal.msgError("请输入您的密码"):""===e.registerForm.confirmPassword?e.$modal.msgError("请再次输入您的密码"):e.registerForm.password!==e.registerForm.confirmPassword?e.$modal.msgError("两次输入的密码不一致"):""===e.registerForm.code&&e.captchaEnabled?e.$modal.msgError("请输入验证码"):(e.$modal.loading("注册中，请耐心等待..."),e.register());case 1:case"end":return n.stop()}}),n)})))()},register:function(){var e=this;return(0,s.A)((0,c.A)().mark((function n(){return(0,c.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:(0,l.kz)(e.registerForm).then((function(n){e.$modal.closeLoading(),uni.showModal({title:"系统提示",content:"恭喜你，您的账号 "+e.registerForm.username+" 注册成功！",success:function(e){e.confirm&&uni.redirectTo({url:"/pages/login"})}})})).catch((function(){e.captchaEnabled&&e.getCode()}));case 1:case"end":return n.stop()}}),n)})))()},registerSuccess:function(e){var n=this;this.$store.dispatch("GetInfo").then((function(e){n.$tab.reLaunch("/pages/index")}))}}},g=d,u=(t(50057),t(18535)),m=(0,u.A)(g,a,r,!1,null,"cea07ec8",null,!1,i,o),p=m.exports},78725:function(e,n,t){"use strict";t.r(n);var i=t(45522),o=t.n(i),a=t(67643),r=t.n(a),c=r()(o());c.push([e.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-cea07ec8]{background-color:#fff}body.?%PAGE?%[data-v-cea07ec8]{background-color:#fff}.normal-login-container[data-v-cea07ec8]{width:100%}.normal-login-container .logo-content[data-v-cea07ec8]{width:100%;font-size:21px;text-align:center;padding-top:15%}.normal-login-container .logo-content uni-image[data-v-cea07ec8]{border-radius:4px}.normal-login-container .logo-content .title[data-v-cea07ec8]{margin-left:10px}.normal-login-container .login-form-content[data-v-cea07ec8]{text-align:center;margin:20px auto;margin-top:15%;width:80%}.normal-login-container .login-form-content .input-item[data-v-cea07ec8]{margin:20px auto;background-color:#f5f6f7;height:45px;border-radius:20px}.normal-login-container .login-form-content .input-item .icon[data-v-cea07ec8]{font-size:%?38?%;margin-left:10px;color:#999}.normal-login-container .login-form-content .input-item .input[data-v-cea07ec8]{width:100%;font-size:14px;line-height:20px;text-align:left;padding-left:15px}.normal-login-container .login-form-content .register-btn[data-v-cea07ec8]{margin-top:40px;height:45px}.normal-login-container .login-form-content .xieyi[data-v-cea07ec8]{color:#333;margin-top:20px}.normal-login-container .login-form-content .login-code[data-v-cea07ec8]{height:38px;float:right}.normal-login-container .login-form-content .login-code .login-code-img[data-v-cea07ec8]{height:38px;position:absolute;margin-left:10px;width:%?200?%}',""]),n["default"]=c}}]);