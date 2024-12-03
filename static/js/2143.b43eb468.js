(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[2143],{

/***/ 61595:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86239);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("5fc30056", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 72143:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_input; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=template&id=c95e3e40&scoped=true&
var components = {'uIcon': (__webpack_require__(15614)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-input",class:{
			'u-input--border': _vm.border,
			'u-input--error': _vm.validateState
		},style:({
			padding: ("0 " + (_vm.border ? 20 : 0) + "rpx"),
			borderColor: _vm.borderColor,
			textAlign: _vm.inputAlign
		}),on:{"click":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.inputClick).apply(void 0, arguments)
}}},[(_vm.type == 'textarea')?_c('v-uni-textarea',{staticClass:"u-input__input u-input__textarea",style:([_vm.getStyle]),attrs:{"value":_vm.defaultValue,"placeholder":_vm.placeholder,"placeholderStyle":_vm.placeholderStyle,"disabled":_vm.disabled,"maxlength":_vm.inputMaxlength,"fixed":_vm.fixed,"focus":_vm.focus,"autoHeight":_vm.autoHeight,"selection-end":_vm.uSelectionEnd,"selection-start":_vm.uSelectionStart,"cursor-spacing":_vm.getCursorSpacing,"show-confirm-bar":_vm.showConfirmbar,"adjust-position":_vm.adjustPosition},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleInput).apply(void 0, arguments)
},"blur":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleBlur).apply(void 0, arguments)
},"focus":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onFocus).apply(void 0, arguments)
},"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onConfirm).apply(void 0, arguments)
}}}):_c('v-uni-input',{staticClass:"u-input__input",style:([_vm.getStyle]),attrs:{"type":_vm.type == 'password' ? 'text' : _vm.type,"value":_vm.defaultValue,"password":_vm.type == 'password' && !_vm.showPassword,"placeholder":_vm.placeholder,"placeholderStyle":_vm.placeholderStyle,"disabled":_vm.disabled || _vm.type === 'select',"maxlength":_vm.inputMaxlength,"focus":_vm.focus,"confirmType":_vm.confirmType,"cursor-spacing":_vm.getCursorSpacing,"selection-end":_vm.uSelectionEnd,"selection-start":_vm.uSelectionStart,"show-confirm-bar":_vm.showConfirmbar,"adjust-position":_vm.adjustPosition},on:{"focus":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onFocus).apply(void 0, arguments)
},"blur":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleBlur).apply(void 0, arguments)
},"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleInput).apply(void 0, arguments)
},"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onConfirm).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"u-input__right-icon u-flex"},[(_vm.clearable && _vm.value != '' && _vm.focused)?_c('v-uni-view',{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClear).apply(void 0, arguments)
}}},[_c('u-icon',{attrs:{"size":"32","name":"close-circle-fill","color":"#c0c4cc"}})],1):_vm._e(),(_vm.passwordIcon && _vm.type == 'password')?_c('v-uni-view',{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[_c('u-icon',{attrs:{"size":"32","name":!_vm.showPassword ? 'eye' : 'eye-fill',"color":"#c0c4cc"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.showPassword = !_vm.showPassword
}}})],1):_vm._e(),(_vm.type == 'select')?_c('v-uni-view',{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{
				'u-input__right-icon--select--reverse': _vm.selectOpen
			}},[_c('u-icon',{attrs:{"name":"arrow-down-fill","size":"26","color":"#c0c4cc"}})],1):_vm._e()],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=template&id=c95e3e40&scoped=true&

// EXTERNAL MODULE: ./node_modules/uview-ui/libs/util/emitter.js
var emitter = __webpack_require__(50254);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * input 输入框
 * @description 此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件u-form而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。
 * @tutorial http://uviewui.com/components/input.html
 * @property {String} type 模式选择，见官网说明
 * @property {Boolean} clearable 是否显示右侧的清除图标(默认true)
 * @property {} v-model 用于双向绑定输入框的值
 * @property {String} input-align 输入框文字的对齐方式(默认left)
 * @property {String} placeholder placeholder显示值(默认 '请输入内容')
 * @property {Boolean} disabled 是否禁用输入框(默认false)
 * @property {String Number} maxlength 输入框的最大可输入长度(默认140)
 * @property {String Number} selection-start 光标起始位置，自动聚焦时有效，需与selection-end搭配使用（默认-1）
 * @property {String Number} maxlength 光标结束位置，自动聚焦时有效，需与selection-start搭配使用（默认-1）
 * @property {String Number} cursor-spacing 指定光标与键盘的距离，单位px(默认0)
 * @property {String} placeholderStyle placeholder的样式，字符串形式，如"color: red;"(默认 "color: #c0c4cc;")
 * @property {String} confirm-type 设置键盘右下角按钮的文字，仅在type为text时生效(默认done)
 * @property {Object} custom-style 自定义输入框的样式，对象形式
 * @property {Boolean} focus 是否自动获得焦点(默认false)
 * @property {Boolean} fixed 如果type为textarea，且在一个"position:fixed"的区域，需要指明为true(默认false)
 * @property {Boolean} password-icon type为password时，是否显示右侧的密码查看图标(默认true)
 * @property {Boolean} border 是否显示边框(默认false)
 * @property {String} border-color 输入框的边框颜色(默认#dcdfe6)
 * @property {Boolean} auto-height 是否自动增高输入区域，type为textarea时有效(默认true)
 * @property {String Number} height 高度，单位rpx(text类型时为70，textarea时为100)
 * @example <u-input v-model="value" :type="type" :border="border" />
 */
/* harmony default export */ var u_inputvue_type_script_lang_js_ = ({
	name: 'u-input',
	mixins: [emitter/* default */.A],
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		// 输入框的类型，textarea，text，number
		type: {
			type: String,
			default: 'text'
		},
		inputAlign: {
			type: String,
			default: 'left'
		},
		placeholder: {
			type: String,
			default: '请输入内容'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: [Number, String],
			default: 140
		},
		placeholderStyle: {
			type: String,
			default: 'color: #c0c4cc;'
		},
		confirmType: {
			type: String,
			default: 'done'
		},
		// 输入框的自定义样式
		customStyle: {
			type: Object,
			default() {
				return {};
			}
		},
		// 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
		fixed: {
			type: Boolean,
			default: false
		},
		// 是否自动获得焦点
		focus: {
			type: Boolean,
			default: false
		},
		// 密码类型时，是否显示右侧的密码图标
		passwordIcon: {
			type: Boolean,
			default: true
		},
		// input|textarea是否显示边框
		border: {
			type: Boolean,
			default: false
		},
		// 输入框的边框颜色
		borderColor: {
			type: String,
			default: '#dcdfe6'
		},
		autoHeight: {
			type: Boolean,
			default: true
		},
		// type=select时，旋转右侧的图标，标识当前处于打开还是关闭select的状态
		// open-打开，close-关闭
		selectOpen: {
			type: Boolean,
			default: false
		},
		// 高度，单位rpx
		height: {
			type: [Number, String],
			default: ''
		},
		// 是否可清空
		clearable: {
			type: Boolean,
			default: true
		},
		// 指定光标与键盘的距离，单位 px
		cursorSpacing: {
			type: [Number, String],
			default: 0
		},
		// 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
		selectionStart: {
			type: [Number, String],
			default: -1
		},
		// 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
		selectionEnd: {
			type: [Number, String],
			default: -1
		},
		// 是否自动去除两端的空格
		trim: {
			type: Boolean,
			default: true
		},
		// 是否显示键盘上方带有”完成“按钮那一栏
		showConfirmbar:{
			type:Boolean,
			default:true
		},
		// 弹出键盘时是否自动调节高度，uni-app默认值是true
		adjustPosition: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			defaultValue: this.value,
			inputHeight: 70, // input的高度
			textareaHeight: 100, // textarea的高度
			validateState: false, // 当前input的验证状态，用于错误时，边框是否改为红色
			focused: false, // 当前是否处于获得焦点的状态
			showPassword: false, // 是否预览密码
			lastValue: '', // 用于头条小程序，判断@input中，前后的值是否发生了变化，因为头条中文下，按下键没有输入内容，也会触发@input时间
		};
	},
	watch: {
		value(nVal, oVal) {
			this.defaultValue = nVal;
			// 当值发生变化，且为select类型时(此时input被设置为disabled，不会触发@input事件)，模拟触发@input事件
			if(nVal != oVal && this.type == 'select') this.handleInput({
				detail: {
					value: nVal
				}
			})
		},
	},
	computed: {
		// 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值
		inputMaxlength() {
			return Number(this.maxlength);
		},
		getStyle() {
			let style = {};
			// 如果没有自定义高度，就根据type为input还是textarea来分配一个默认的高度
			style.minHeight = this.height ? this.height + 'rpx' : this.type == 'textarea' ?
				this.textareaHeight + 'rpx' : this.inputHeight + 'rpx';
			style = Object.assign(style, this.customStyle);
			return style;
		},
		//
		getCursorSpacing() {
			return Number(this.cursorSpacing);
		},
		// 光标起始位置
		uSelectionStart() {
			return String(this.selectionStart);
		},
		// 光标结束位置
		uSelectionEnd() {
			return String(this.selectionEnd);
		}
	},
	created() {
		// 监听u-form-item发出的错误事件，将输入框边框变红色
		this.$on('on-form-item-error', this.onFormItemError);
	},
	methods: {
		/**
		 * change 事件
		 * @param event
		 */
		handleInput(event) {
			let value = event.detail.value;
			// 判断是否去除空格
			if(this.trim) value = this.$u.trim(value);
			// vue 原生的方法 return 出去
			this.$emit('input', value);
			// 当前model 赋值
			this.defaultValue = value;
			// 过一个生命周期再发送事件给u-form-item，否则this.$emit('input')更新了父组件的值，但是微信小程序上
			// 尚未更新到u-form-item，导致获取的值为空，从而校验混论
			// 这里不能延时时间太短，或者使用this.$nextTick，否则在头条上，会造成混乱
			setTimeout(() => {
				// 头条小程序由于自身bug，导致中文下，每按下一个键(尚未完成输入)，都会触发一次@input，导致错误，这里进行判断处理




				// 将当前的值发送到 u-form-item 进行校验
				this.dispatch('u-form-item', 'on-form-change', value);
			}, 40)
		},
		/**
		 * blur 事件
		 * @param event
		 */
		handleBlur(event) {
			// 最开始使用的是监听图标@touchstart事件，自从hx2.8.4后，此方法在微信小程序出错
			// 这里改为监听点击事件，手点击清除图标时，同时也发生了@blur事件，导致图标消失而无法点击，这里做一个延时
			let value = event.detail.value;
			setTimeout(() => {
				this.focused = false;
			}, 100)
			// vue 原生的方法 return 出去
			this.$emit('blur', value);
			setTimeout(() => {
				// 头条小程序由于自身bug，导致中文下，每按下一个键(尚未完成输入)，都会触发一次@input，导致错误，这里进行判断处理




				// 将当前的值发送到 u-form-item 进行校验
				this.dispatch('u-form-item', 'on-form-blur', value);
			}, 40)
		},
		onFormItemError(status) {
			this.validateState = status;
		},
		onFocus(event) {
			this.focused = true;
			this.$emit('focus');
		},
		onConfirm(e) {
			this.$emit('confirm', e.detail.value);
		},
		onClear(event) {
			this.$emit('input', '');
		},
		inputClick() {
			this.$emit('click');
		}
	}
});

;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_input_u_inputvue_type_script_lang_js_ = (u_inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=style&index=0&id=c95e3e40&lang=scss&scoped=true&
var u_inputvue_type_style_index_0_id_c95e3e40_lang_scss_scoped_true_ = __webpack_require__(61595);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-input/u-input.vue?vue&type=style&index=0&id=c95e3e40&lang=scss&scoped=true&
 /* harmony default export */ var u_input_u_inputvue_type_style_index_0_id_c95e3e40_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-input/u-input.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_input_u_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c95e3e40",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_input = (component.exports);

/***/ }),

/***/ 86239:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-input[data-v-c95e3e40]{position:relative;flex:1;display:flex;flex-direction:row}.u-input__input[data-v-c95e3e40]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-c95e3e40]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-c95e3e40]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-c95e3e40]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-c95e3e40]{margin-left:%?10?%}.u-input__right-icon--select[data-v-c95e3e40]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-c95e3e40]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

}]);