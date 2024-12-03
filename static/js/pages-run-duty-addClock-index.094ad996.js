(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[4121],{

/***/ 95078:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29866);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("ebb29d26", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 41729:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23850);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("2c206b4e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 63767:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95771);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("79cf3ed9", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 55108:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66392);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("71de670c", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 7075:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_field; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-field/u-field.vue?vue&type=template&id=57096f1c&scoped=true&
var components = {'uIcon': (__webpack_require__(15614)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-field",class:{'u-border-top': _vm.borderTop, 'u-border-bottom': _vm.borderBottom }},[_c('v-uni-view',{staticClass:"u-field-inner",class:[_vm.type == 'textarea' ? 'u-textarea-inner' : '', 'u-label-postion-' + _vm.labelPosition]},[_c('v-uni-view',{staticClass:"u-label",class:[_vm.required ? 'u-required' : ''],style:({
			justifyContent: _vm.justifyContent, 
			flex: _vm.labelPosition == 'left' ? ("0 0 " + _vm.labelWidth + "rpx") : '1'
		})},[(_vm.icon)?_c('v-uni-view',{staticClass:"u-icon-wrap"},[_c('u-icon',{staticClass:"u-icon",attrs:{"size":"32","custom-style":_vm.iconStyle,"name":_vm.icon,"color":_vm.iconColor}})],1):_vm._e(),_vm._t("icon"),_c('v-uni-text',{staticClass:"u-label-text",class:[this.$slots.icon || _vm.icon ? 'u-label-left-gap' : '']},[_vm._v(_vm._s(_vm.label))])],2),_c('v-uni-view',{staticClass:"fild-body"},[_c('v-uni-view',{staticClass:"u-flex-1 u-flex",style:([_vm.inputWrapStyle])},[(_vm.type == 'textarea')?_c('v-uni-textarea',{staticClass:"u-flex-1 u-textarea-class",style:([_vm.fieldStyle]),attrs:{"value":_vm.value,"placeholder":_vm.placeholder,"placeholderStyle":_vm.placeholderStyle,"disabled":_vm.disabled,"maxlength":_vm.inputMaxlength,"focus":_vm.focus,"autoHeight":_vm.autoHeight,"fixed":_vm.fixed},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onInput).apply(void 0, arguments)
},"blur":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onBlur).apply(void 0, arguments)
},"focus":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onFocus).apply(void 0, arguments)
},"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onConfirm).apply(void 0, arguments)
},"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.fieldClick).apply(void 0, arguments)
}}}):_c('v-uni-input',{staticClass:"u-flex-1 u-field__input-wrap",style:([_vm.fieldStyle]),attrs:{"type":_vm.type,"value":_vm.value,"password":_vm.password || this.type === 'password',"placeholder":_vm.placeholder,"placeholderStyle":_vm.placeholderStyle,"disabled":_vm.disabled,"maxlength":_vm.inputMaxlength,"focus":_vm.focus,"confirmType":_vm.confirmType},on:{"focus":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onFocus).apply(void 0, arguments)
},"blur":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onBlur).apply(void 0, arguments)
},"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onInput).apply(void 0, arguments)
},"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onConfirm).apply(void 0, arguments)
},"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.fieldClick).apply(void 0, arguments)
}}})],1),(_vm.clearable && _vm.value != '' && _vm.focused)?_c('u-icon',{staticClass:"u-clear-icon",attrs:{"size":_vm.clearSize,"name":"close-circle-fill","color":"#c0c4cc"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClear).apply(void 0, arguments)
}}}):_vm._e(),_c('v-uni-view',{staticClass:"u-button-wrap"},[_vm._t("right")],2),(_vm.rightIcon)?_c('u-icon',{staticClass:"u-arror-right",style:([_vm.rightIconStyle]),attrs:{"name":_vm.rightIcon,"color":"#c0c4cc","size":"26"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.rightIconClick).apply(void 0, arguments)
}}}):_vm._e()],1)],1),(_vm.errorMessage !== false && _vm.errorMessage != '')?_c('v-uni-view',{staticClass:"u-error-message",style:({
		paddingLeft: _vm.labelWidth + 'rpx'
	})},[_vm._v(_vm._s(_vm.errorMessage))]):_vm._e()],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-field/u-field.vue?vue&type=template&id=57096f1c&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-field/u-field.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * field 输入框
 * @description 借助此组件，可以实现表单的输入， 有"text"和"textarea"类型的，此外，借助uView的picker和actionSheet组件可以快速实现上拉菜单，时间，地区选择等， 为表单解决方案的利器。
 * @tutorial https://www.uviewui.com/components/field.html
 * @property {String} type 输入框的类型（默认text）
 * @property {String} icon label左边的图标，限uView的图标名称
 * @property {Object} icon-style 左边图标的样式，对象形式
 * @property {Boolean} right-icon 输入框右边的图标名称，限uView的图标名称（默认false）
 * @property {Boolean} required 是否必填，左边您显示红色"*"号（默认false）
 * @property {String} label 输入框左边的文字提示
 * @property {Boolean} password 是否密码输入方式(用点替换文字)，type为text时有效（默认false）
 * @property {Boolean} clearable 是否显示右侧清空内容的图标控件(输入框有内容，且获得焦点时才显示)，点击可清空输入框内容（默认true）
 * @property {Number String} label-width label的宽度，单位rpx（默认130）
 * @property {String} label-align label的文字对齐方式（默认left）
 * @property {Object} field-style 自定义输入框的样式，对象形式
 * @property {Number | String} clear-size 清除图标的大小，单位rpx（默认30）
 * @property {String} input-align 输入框内容对齐方式（默认left）
 * @property {Boolean} border-bottom 是否显示field的下边框（默认true）
 * @property {Boolean} border-top 是否显示field的上边框（默认false）
 * @property {String} icon-color 左边通过icon配置的图标的颜色（默认#606266）
 * @property {Boolean} auto-height 是否自动增高输入区域，type为textarea时有效（默认true）
 * @property {String Boolean} error-message 显示的错误提示内容，如果为空字符串或者false，则不显示错误信息
 * @property {String} placeholder 输入框的提示文字
 * @property {String} placeholder-style placeholder的样式(内联样式，字符串)，如"color: #ddd"
 * @property {Boolean} focus 是否自动获得焦点（默认false）
 * @property {Boolean} fixed 如果type为textarea，且在一个"position:fixed"的区域，需要指明为true（默认false）
 * @property {Boolean} disabled 是否不可输入（默认false）
 * @property {Number String} maxlength 最大输入长度，设置为 -1 的时候不限制最大长度（默认140）
 * @property {String} confirm-type 设置键盘右下角按钮的文字，仅在type="text"时生效（默认done）
 * @event {Function} input 输入框内容发生变化时触发
 * @event {Function} focus 输入框获得焦点时触发
 * @event {Function} blur 输入框失去焦点时触发
 * @event {Function} confirm 点击完成按钮时触发
 * @event {Function} right-icon-click 通过right-icon生成的图标被点击时触发
 * @event {Function} click 输入框被点击或者通过right-icon生成的图标被点击时触发，这样设计是考虑到传递右边的图标，一般都为需要弹出"picker"等操作时的场景，点击倒三角图标，理应发出此事件，见上方说明
 * @example <u-field v-model="mobile" label="手机号" required :error-message="errorMessage"></u-field>
 */
/* harmony default export */ var u_fieldvue_type_script_lang_js_ = ({
	name:"u-field",
	props: {
		icon: String,
		rightIcon: String,
		// arrowDirection: {
		// 	type: String,
		// 	default: 'right'
		// },
		required: Boolean,
		label: String,
		password: Boolean,
		clearable: {
			type: Boolean,
			default: true
		},
		// 左边标题的宽度单位rpx
		labelWidth: {
			type: [Number, String],
			default: 130
		},
		// 对齐方式，left|center|right
		labelAlign: {
			type: String,
			default: 'left'
		},
		inputAlign: {
			type: String,
			default: 'left'
		},
		iconColor: {
			type: String,
			default: '#606266'
		},
		autoHeight: {
			type: Boolean,
			default: true
		},
		errorMessage: {
			type: [String, Boolean],
			default: ''
		},
		placeholder: String,
		placeholderStyle: String,
		focus: Boolean,
		fixed: Boolean,
		value: [Number, String],
		type: {
			type: String,
			default: 'text'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: [Number, String],
			default: 140
		},
		confirmType: {
			type: String,
			default: 'done'
		},
		// lable的位置，可选为 left-左边，top-上边
		labelPosition: {
			type: String,
			default: 'left'
		},
		// 输入框的自定义样式
		fieldStyle: {
			type: Object,
			default() {
				return {}
			}
		},
		// 清除按钮的大小
		clearSize: {
			type: [Number, String],
			default: 30
		},
		// lable左边的图标样式，对象形式
		iconStyle: {
			type: Object,
			default() {
				return {}
			}
		},
		// 是否显示上边框
		borderTop: {
			type: Boolean,
			default: false
		},
		// 是否显示下边框
		borderBottom: {
			type: Boolean,
			default: true
		},
		// 是否自动去除两端的空格
		trim: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			focused: false,
			itemIndex: 0,
		};
	},
	computed: {
		inputWrapStyle() {
			let style = {};
			style.textAlign = this.inputAlign;
			// 判断lable的位置，如果是left的话，让input左边两边有间隙
			if(this.labelPosition == 'left') {
				style.margin = `0 8rpx`;
			} else {
				// 如果lable是top的，input的左边就没必要有间隙了
				style.marginRight = `8rpx`;
			}
			return style;
		},
		rightIconStyle() {
			let style = {};
			if (this.arrowDirection == 'top') style.transform = 'roate(-90deg)';
			if (this.arrowDirection == 'bottom') style.transform = 'roate(90deg)';
			else style.transform = 'roate(0deg)';
			return style;
		},
		labelStyle() {
			let style = {};
			if(this.labelAlign == 'left') style.justifyContent = 'flext-start';
			if(this.labelAlign == 'center') style.justifyContent = 'center';
			if(this.labelAlign == 'right') style.justifyContent = 'flext-end';
			return style;
		},
		// uni不支持在computed中写style.justifyContent = 'center'的形式，故用此方法
		justifyContent() {
			if(this.labelAlign == 'left') return 'flex-start';
			if(this.labelAlign == 'center') return 'center';
			if(this.labelAlign == 'right') return 'flex-end';
		},
		// 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值
		inputMaxlength() {
			return Number(this.maxlength)
		},
		// label的位置
		fieldInnerStyle() {
			let style = {};
			if(this.labelPosition == 'left') {
				style.flexDirection = 'row';
			} else {
				style.flexDirection = 'column';
			}
			
			return style;
		}
	},
	methods: {
		onInput(event) {
			let value = event.detail.value;
			// 判断是否去除空格
			if(this.trim) value = this.$u.trim(value);
			this.$emit('input', value);
		},
		onFocus(event) {
			this.focused = true;
			this.$emit('focus', event);
		},
		onBlur(event) {
			// 最开始使用的是监听图标@touchstart事件，自从hx2.8.4后，此方法在微信小程序出错
			// 这里改为监听点击事件，手点击清除图标时，同时也发生了@blur事件，导致图标消失而无法点击，这里做一个延时
			setTimeout(() => {
				this.focused = false;
			}, 100)
			this.$emit('blur', event);
		},
		onConfirm(e) {
			this.$emit('confirm', e.detail.value);
		},
		onClear(event) {
			this.$emit('input', '');
		},
		rightIconClick() {
			this.$emit('right-icon-click');
			this.$emit('click');
		},
		fieldClick() {
			this.$emit('click');
		}
	}
});

;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-field/u-field.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_field_u_fieldvue_type_script_lang_js_ = (u_fieldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-field/u-field.vue?vue&type=style&index=0&id=57096f1c&lang=scss&scoped=true&
var u_fieldvue_type_style_index_0_id_57096f1c_lang_scss_scoped_true_ = __webpack_require__(95078);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-field/u-field.vue?vue&type=style&index=0&id=57096f1c&lang=scss&scoped=true&
 /* harmony default export */ var u_field_u_fieldvue_type_style_index_0_id_57096f1c_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-field/u-field.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_field_u_fieldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "57096f1c",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_field = (component.exports);

/***/ }),

/***/ 86397:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_radio_group; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-radio-group/u-radio-group.vue?vue&type=template&id=f64b7fc0&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-radio-group u-clearfix"},[_vm._t("default")],2)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/uview-ui/libs/util/emitter.js
var emitter = __webpack_require__(50254);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-radio-group/u-radio-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/**
 * radioGroup 单选框父组件
 * @description 单选框用于有一个选择，用户只能选择其中一个的场景。搭配u-radio使用
 * @tutorial https://www.uviewui.com/components/radio.html
 * @property {Boolean} disabled 是否禁用所有radio（默认false）
 * @property {String Number} size 组件整体的大小，单位rpx（默认40）
 * @property {String} active-color 选中时的颜色，应用到所有子Radio组件（默认#2979ff）
 * @property {String Number} icon-size 图标大小，单位rpx（默认20）
 * @property {String} shape 外观形状，shape-方形，circle-圆形(默认circle)
 * @property {Boolean} label-disabled 是否禁止点击文本操作checkbox(默认false)
 * @property {String} width 宽度，需带单位
 * @property {Boolean} wrap 是否每个radio都换行（默认false）
 * @event {Function} change 任一个radio状态发生变化时触发
 * @example <u-radio-group v-model="value"></u-radio-group>
 */
/* harmony default export */ var u_radio_groupvue_type_script_lang_js_ = ({
	name: "u-radio-group",
	mixins: [emitter/* default */.A],
	props: {
		// 是否禁用所有单选框
		disabled: {
			type: Boolean,
			default: false
		},
		// 匹配某一个radio组件，如果某个radio的name值等于此值，那么这个radio就被会选中
		value: {
			type: [String, Number],
			default: ''
		},
		// 选中状态下的颜色
		activeColor: {
			type: String,
			default: '#2979ff'
		},
		// 组件的整体大小
		size: {
			type: [String, Number],
			default: 34
		},
		// 是否禁止点击提示语选中复选框
		labelDisabled: {
			type: Boolean,
			default: false
		},
		// 形状，square为方形，circle为原型
		shape: {
			type: String,
			default: 'circle'
		},
		// 图标的大小，单位rpx
		iconSize: {
			type: [String, Number],
			default: 20
		},
		// 每个checkbox占u-checkbox-group的宽度
		width: {
			type: [String, Number],
			default: 'auto'
		},
		// 是否每个checkbox都换行
		wrap: {
			type: Boolean,
			default: false
		}
	},
	created() {
		// 如果将children定义在data中，在微信小程序会造成循环引用而报错
		this.children = [];
	},
	watch: {
		// 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
		parentData() {
			if(this.children.length) {
				this.children.map(child => {
					// 判断子组件(u-radio)如果有updateParentData方法的话，就就执行(执行的结果是子组件重新从父组件拉取了最新的值)
					typeof(child.updateParentData) == 'function' && child.updateParentData();
				})
			}
		},
	},
	computed: {
		// 这里computed的变量，都是子组件u-radio需要用到的，由于头条小程序的兼容性差异，子组件无法实时监听父组件参数的变化
		// 所以需要手动通知子组件，这里返回一个parentData变量，供watch监听，在其中去通知每一个子组件重新从父组件(u-radio-group)
		// 拉取父组件新的变化后的参数
		parentData() {
			return [this.value, this.disabled, this.activeColor, this.size, this.labelDisabled, this.shape, this.iconSize, this.width, this.wrap];
		}
	},
	methods: {
		// 该方法有子组件radio调用，当一个radio被选中的时候，给父组件设置value值(props传递的value)
		setValue(val) {
			// 通过子组件传递过来的val值(此被选中的子组件内部已将parentValue设置等于val的值)，将其他
			// u-radio设置未选中的状态
			this.children.map(child => {
				if(child.parentData.value != val) child.parentData.value = '';
			})
			// 通过emit事件，设置父组件通过v-model双向绑定的值
			this.$emit('input', val);
			this.$emit('change', val);
			// 等待下一个周期再执行，因为this.$emit('input')作用于父组件，再反馈到子组件内部，需要时间
			// 由于头条小程序执行迟钝，故需要用几十毫秒的延时
			setTimeout(() => {
				// 将当前的值发送到 u-form-item 进行校验
				this.dispatch('u-form-item', 'on-form-change', val);
			}, 60)
		}
	}
});

;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-radio-group/u-radio-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_radio_group_u_radio_groupvue_type_script_lang_js_ = (u_radio_groupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-radio-group/u-radio-group.vue?vue&type=style&index=0&id=f64b7fc0&lang=scss&scoped=true&
var u_radio_groupvue_type_style_index_0_id_f64b7fc0_lang_scss_scoped_true_ = __webpack_require__(41729);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-radio-group/u-radio-group.vue?vue&type=style&index=0&id=f64b7fc0&lang=scss&scoped=true&
 /* harmony default export */ var u_radio_group_u_radio_groupvue_type_style_index_0_id_f64b7fc0_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-radio-group/u-radio-group.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_radio_group_u_radio_groupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f64b7fc0",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_radio_group = (component.exports);

/***/ }),

/***/ 46402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ u_radio; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-radio/u-radio.vue?vue&type=template&id=edf628c2&scoped=true&
var components = {'uIcon': (__webpack_require__(15614)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"u-radio",style:([_vm.radioStyle])},[_c('v-uni-view',{staticClass:"u-radio__icon-wrap",class:[_vm.iconClass],style:([_vm.iconStyle]),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.toggle).apply(void 0, arguments)
}}},[_c('u-icon',{staticClass:"u-radio__icon-wrap__icon",attrs:{"name":"checkbox-mark","size":_vm.elIconSize,"color":_vm.iconColor}})],1),_c('v-uni-view',{staticClass:"u-radio__label",style:({
		fontSize: _vm.$u.addUnit(_vm.labelSize)
	}),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onClickLabel).apply(void 0, arguments)
}}},[_vm._t("default")],2)],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-radio/u-radio.vue?vue&type=template&id=edf628c2&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-radio/u-radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
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
 * radio 单选框
 * @description 单选框用于有一个选择，用户只能选择其中一个的场景。搭配u-radio-group使用
 * @tutorial https://www.uviewui.com/components/radio.html
 * @property {String Number} icon-size 图标大小，单位rpx（默认24）
 * @property {String Number} label-size label字体大小，单位rpx（默认28）
 * @property {String Number} name radio组件的标示符
 * @property {String} shape 形状，见上方说明（默认circle）
 * @property {Boolean} disabled 是否禁用（默认false）
 * @property {Boolean} label-disabled 点击文本是否可以操作radio（默认true）
 * @property {String} active-color 选中时的颜色，如设置parent的active-color将失效
 * @event {Function} change 某个radio状态发生变化时触发(选中状态)
 * @example <u-radio :label-disabled="false">门掩黄昏，无计留春住</u-radio>
 */
/* harmony default export */ var u_radiovue_type_script_lang_js_ = ({
	name: "u-radio",
	props: {
		// radio的名称
		name: {
			type: [String, Number],
			default: ''
		},
		// 形状，square为方形，circle为原型
		shape: {
			type: String,
			default: ''
		},
		// 是否禁用
		disabled: {
			type: [String, Boolean],
			default: ''
		},
		// 是否禁止点击提示语选中复选框
		labelDisabled: {
			type: [String, Boolean],
			default: ''
		},
		// 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
		activeColor: {
			type: String,
			default: ''
		},
		// 图标的大小，单位rpx
		iconSize: {
			type: [String, Number],
			default: ''
		},
		// label的字体大小，rpx单位
		labelSize: {
			type: [String, Number],
			default: ''
		},
	},
	data() {
		return {
			// 父组件的默认值，因为头条小程序不支持在computed中使用this.parent.shape的形式
			// 故只能使用如此方法
			parentData: {
				iconSize: null,
				labelDisabled: null,
				disabled: null,
				shape: null,
				activeColor: null,
				size: null,
				width: null,
				height: null,
				value: null,
				wrap: null
			}
		};
	},
	created() {
		this.parent = false;
		// 支付宝小程序不支持provide/inject，所以使用这个方法获取整个父组件，在created定义，避免循环引用
		this.updateParentData();
		this.parent.children.push(this);
	},
	computed: {
		// 是否禁用，如果父组件u-radio-group禁用的话，将会忽略子组件的配置
		elDisabled() {
			return this.disabled !== '' ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
		},
		// 是否禁用label点击
		elLabelDisabled() {
			return this.labelDisabled !== '' ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
		},
		// 组件尺寸，对应size的值，默认值为34rpx
		elSize() {
			return this.size ? this.size : (this.parentData.size ? this.parentData.size : 34);
		},
		// 组件的勾选图标的尺寸，默认20
		elIconSize() {
			return this.iconSize ? this.iconSize : (this.parentData.iconSize ? this.parentData.iconSize : 20);
		},
		// 组件选中激活时的颜色
		elActiveColor() {
			return this.activeColor ? this.activeColor : (this.parentData.activeColor ? this.parentData.activeColor : 'primary');
		},
		// 组件的形状
		elShape() {
			return this.shape ? this.shape : (this.parentData.shape ? this.parentData.shape : 'circle');
		},
		// 设置radio的状态，要求radio的name等于parent的value时才为选中状态
		iconStyle() {
			let style = {};
			if (this.elActiveColor && this.parentData.value == this.name && !this.elDisabled) {
				style.borderColor = this.elActiveColor;
				style.backgroundColor = this.elActiveColor;
			}
			style.width = this.$u.addUnit(this.elSize);
			style.height = this.$u.addUnit(this.elSize);
			return style;
		},
		iconColor() {
			return this.name ==  this.parentData.value ? '#ffffff' : 'transparent';
		},
		iconClass() {
			let classes = [];
			classes.push('u-radio__icon-wrap--' + this.elShape);
			if (this.name == this.parentData.value) classes.push('u-radio__icon-wrap--checked');
			if (this.elDisabled) classes.push('u-radio__icon-wrap--disabled');
			if (this.name == this.parentData.value && this.elDisabled) classes.push(
				'u-radio__icon-wrap--disabled--checked');
			// 支付宝小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效
			return classes.join(' ');
		},
		radioStyle() {
			let style = {};
			if (this.parentData.width) {
				style.width = this.$u.addUnit(this.parentData.width);





				// H5和APP使用flex布局
				style.flex = `0 0 ${this.$u.addUnit(this.parentData.width)}`;

			}
			if (this.parentData.wrap) {
				style.width = '100%';

				// H5和APP使用flex布局，将宽度设置100%，即可自动换行
				style.flex = '0 0 100%';

			}
			return style;
		}
	},
	methods: {
		updateParentData() {
			this.getParentData('u-radio-group');
		},
		onClickLabel() {
			if (!this.elLabelDisabled && !this.elDisabled) {
				this.setRadioCheckedStatus();
			}
		},
		toggle() {
			if (!this.elDisabled) {
				this.setRadioCheckedStatus();
			}
		},
		emitEvent() {
			// u-radio的name不等于父组件的v-model的值时(意味着未选中)，才发出事件，避免多次点击触发事件
			if(this.parentData.value != this.name) this.$emit('change', this.name);
		},
		// 改变组件选中状态
		// 这里的改变的依据是，更改本组件的parentData.value值为本组件的name值，同时通过父组件遍历所有u-radio实例
		// 将本组件外的其他u-radio的parentData.value都设置为空(由computed计算后，都被取消选中状态)，因而只剩下一个为选中状态
		setRadioCheckedStatus() {
			this.emitEvent();
			if(this.parent) {
				this.parent.setValue(this.name);
				this.parentData.value = this.name;
			}
		}
	}
});

;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-radio/u-radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var u_radio_u_radiovue_type_script_lang_js_ = (u_radiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./node_modules/uview-ui/components/u-radio/u-radio.vue?vue&type=style&index=0&id=edf628c2&lang=scss&scoped=true&
var u_radiovue_type_style_index_0_id_edf628c2_lang_scss_scoped_true_ = __webpack_require__(63767);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-radio/u-radio.vue?vue&type=style&index=0&id=edf628c2&lang=scss&scoped=true&
 /* harmony default export */ var u_radio_u_radiovue_type_style_index_0_id_edf628c2_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./node_modules/uview-ui/components/u-radio/u-radio.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  u_radio_u_radiovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "edf628c2",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var u_radio = (component.exports);

/***/ }),

/***/ 54371:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ addClock; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/addClock/index.vue?vue&type=template&id=46ad0172&scoped=true&
var components = {'uForm': (__webpack_require__(17779)/* ["default"] */ .A),'uFormItem': (__webpack_require__(13683)/* ["default"] */ .A),'uInput': (__webpack_require__(72143)/* ["default"] */ .A),'uRadioGroup': (__webpack_require__(86397)/* ["default"] */ .A),'uRadio': (__webpack_require__(46402)/* ["default"] */ .A),'uField': (__webpack_require__(7075)/* ["default"] */ .A),'uPicker': (__webpack_require__(71594)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"addClockContainer"},[_c('v-uni-view',{staticClass:"t1"},[_c('v-uni-text',{staticClass:"iconfont icon-dizhi"}),_c('v-uni-text',[_vm._v("当前位置："+_vm._s('宜昌市某某路电力调度控制中心'))])],1),_c('v-uni-view',{staticClass:"card1"},[_c('u-form',{ref:"clockForm",staticClass:"form",attrs:{"model":_vm.clockForm,"label-width":"160"}},[_c('u-form-item',{attrs:{"label":"未打卡时间","required":true}},[_c('u-input',{attrs:{"disabled":true},model:{value:(_vm.clockForm.date.split(' ')[0]),callback:function ($$v) {_vm.$set(_vm.clockForm.date.split(' '), 0, $$v)},expression:"clockForm.date.split(' ')[0]"}})],1),_c('u-form-item',{attrs:{"label":"上/下班","required":true}},[_c('u-radio-group',{on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.radioGroupChange).apply(void 0, arguments)
}},model:{value:(_vm.clockForm.upDown),callback:function ($$v) {_vm.$set(_vm.clockForm, "upDown", $$v)},expression:"clockForm.upDown"}},_vm._l((_vm.list),function(item,index){return _c('u-radio',{key:index,attrs:{"name":item.name,"disabled":item.disabled},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.radioChange).apply(void 0, arguments)
}}},[_vm._v(_vm._s(item.name))])}),1)],1),_c('u-form-item',{attrs:{"label":"补签时间","required":true}},[_c('u-input',{attrs:{"placeholder":"请设置时间"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.openSelect).apply(void 0, arguments)
}},model:{value:(_vm.clockForm.addTime),callback:function ($$v) {_vm.$set(_vm.clockForm, "addTime", $$v)},expression:"clockForm.addTime"}})],1)],1)],1),_c('v-uni-view',{staticClass:"card2"},[_c('v-uni-view',{staticClass:"title"},[_vm._v("补卡原因")]),_c('u-field',{staticClass:"reason",attrs:{"placeholder":"请填写原因","type":"textarea","label-width":"0"},model:{value:(_vm.clockForm.reason),callback:function ($$v) {_vm.$set(_vm.clockForm, "reason", $$v)},expression:"clockForm.reason"}})],1),_c('v-uni-view',{staticClass:"btn"},[_c('MButton',{attrs:{"btnName":'提交'},on:{"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.confirmSubmit).apply(void 0, arguments)
}}})],1),_c('u-picker',{attrs:{"mode":"time","params":_vm.params},on:{"confirm":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.confirm).apply(void 0, arguments)
}},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}})],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/pages/run/duty/addClock/index.vue?vue&type=template&id=46ad0172&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2775);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__(50771);
// EXTERNAL MODULE: ./src/api/run/duty/index.js
var duty = __webpack_require__(14380);
// EXTERNAL MODULE: ./src/components/MButton/index.vue + 5 modules
var MButton = __webpack_require__(26415);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/addClock/index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var addClockvue_type_script_lang_js_ = ({
  components: {
    MButton: MButton/* default */.A
  },
  data: function data() {
    return {
      show: false,
      params: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true
      },
      list: [{
        name: '上班',
        disabled: false
      }, {
        name: '下班',
        disabled: false
      }],
      clockForm: {
        id: '',
        date: '',
        upDown: '上班',
        addTime: '',
        reason: ''
      },
      clockFormRule: {
        date: [{
          required: true,
          message: '日期不能为空',
          disabled: true
        }],
        upDown: [{
          required: true
        }],
        addTime: [{
          required: true
        }]
      }
    };
  },
  computed: {},
  methods: {
    radioChange: function radioChange(e) {
      // console.log(e);
    },
    radioGroupChange: function radioGroupChange(e) {
      // console.log(e);
    },
    openSelect: function openSelect() {
      this.show = true;
    },
    confirm: function confirm(val) {
      var year = val.year,
        month = val.month,
        day = val.day,
        hour = val.hour,
        minute = val.minute,
        second = val.second;
      this.clockForm.addTime = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(minute, ":").concat(second);
      this.clockForm = (0,objectSpread2/* default */.A)({}, this.clockForm);
    },
    confirmSubmit: function confirmSubmit() {
      var _this$clockForm = this.clockForm,
        id = _this$clockForm.id,
        upDown = _this$clockForm.upDown,
        addTime = _this$clockForm.addTime,
        date = _this$clockForm.date,
        reason = _this$clockForm.reason;
      var onOff = upDown == '上班' ? 'resignOnTime' : 'resignOffTime';
      var userId = this.$store.getters.userId;
      (0,duty/* addResign */.Gs)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({
        id: id
      }, onOff, addTime), "reson", reason), "userId", userId), "date", date)).then(function (res) {
        if (res.code == 200) {
          (0,common/* toast */.oR)('提交成功');
        }
      });
    }
  },
  watch: {},
  mounted: function mounted() {},
  // 页面周期函数--监听页面加载
  onLoad: function onLoad(params) {
    this.$set(this.clockForm, 'date', params.time);
    this.$set(this.clockForm, 'id', params.id);
  },
  // 页面周期函数--监听页面初次渲染完成
  onReady: function onReady() {
    this.$refs.clockForm.setRules(this.clockFormRule);
  },
  // 页面周期函数--监听页面显示(not-nvue)
  onShow: function onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide: function onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload: function onUnload() {} // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
});
;// CONCATENATED MODULE: ./src/pages/run/duty/addClock/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var duty_addClockvue_type_script_lang_js_ = (addClockvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/duty/addClock/index.vue?vue&type=style&index=0&id=46ad0172&lang=scss&scoped=true&
var addClockvue_type_style_index_0_id_46ad0172_lang_scss_scoped_true_ = __webpack_require__(55108);
;// CONCATENATED MODULE: ./src/pages/run/duty/addClock/index.vue?vue&type=style&index=0&id=46ad0172&lang=scss&scoped=true&
 /* harmony default export */ var duty_addClockvue_type_style_index_0_id_46ad0172_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/run/duty/addClock/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  duty_addClockvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "46ad0172",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var addClock = (component.exports);

/***/ }),

/***/ 29866:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-field[data-v-57096f1c]{font-size:%?28?%;padding:%?20?% %?28?%;text-align:left;position:relative;color:#303133}.u-field-inner[data-v-57096f1c]{display:flex;flex-direction:row;align-items:center}.u-textarea-inner[data-v-57096f1c]{align-items:flex-start}.u-textarea-class[data-v-57096f1c]{min-height:%?96?%;width:auto;font-size:%?28?%}.fild-body[data-v-57096f1c]{display:flex;flex-direction:row;flex:1;align-items:center}.u-arror-right[data-v-57096f1c]{margin-left:%?8?%}.u-label-text[data-v-57096f1c]{display:inline-flex}.u-label-left-gap[data-v-57096f1c]{margin-left:%?6?%}.u-label-postion-top[data-v-57096f1c]{flex-direction:column;align-items:flex-start}.u-label[data-v-57096f1c]{width:%?130?%;flex:1 1 %?130?%;text-align:left;position:relative;display:flex;flex-direction:row;align-items:center}.u-required[data-v-57096f1c]::before{content:\"*\";position:absolute;left:%?-16?%;font-size:14px;color:#fa3534;height:9px;line-height:1}.u-field__input-wrap[data-v-57096f1c]{position:relative;overflow:hidden;font-size:%?28?%;height:%?48?%;flex:1;width:auto}.u-clear-icon[data-v-57096f1c]{display:flex;flex-direction:row;align-items:center}.u-error-message[data-v-57096f1c]{color:#fa3534;font-size:%?26?%;text-align:left}.placeholder-style[data-v-57096f1c]{color:#969799}.u-input-class[data-v-57096f1c]{font-size:%?28?%}.u-button-wrap[data-v-57096f1c]{margin-left:%?8?%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 23850:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-radio-group[data-v-f64b7fc0]{display:inline-flex;flex-wrap:wrap}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 95771:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-radio[data-v-edf628c2]{display:inline-flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-radio__icon-wrap[data-v-edf628c2]{color:#606266;display:flex;flex-direction:row;flex:none;align-items:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;transition-duration:.2s}.u-radio__icon-wrap--circle[data-v-edf628c2]{border-radius:100%}.u-radio__icon-wrap--square[data-v-edf628c2]{border-radius:3px}.u-radio__icon-wrap--checked[data-v-edf628c2]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-radio__icon-wrap--disabled[data-v-edf628c2]{background-color:#ebedf0;border-color:#c8c9cc}.u-radio__icon-wrap--disabled--checked[data-v-edf628c2]{color:#c8c9cc!important}.u-radio__label[data-v-edf628c2]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-radio__label--disabled[data-v-edf628c2]{color:#c8c9cc}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 66392:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.addClockContainer[data-v-46ad0172]{height:100%;display:flex;flex-direction:column}.addClockContainer .t1[data-v-46ad0172]{display:flex;align-items:center;padding:%?20?% %?24?%}.addClockContainer .t1 uni-text[data-v-46ad0172]:nth-child(1){font-size:%?22?%;color:#00a096}.addClockContainer .t1 uni-text[data-v-46ad0172]:nth-child(2){font-family:Source Han Sans;font-weight:350;font-size:%?22?%;color:#666;line-height:%?48?%;text-align:left;font-style:normal;text-transform:none}.addClockContainer .card1[data-v-46ad0172]{background-color:#fff}.addClockContainer .card1 .form[data-v-46ad0172]{padding:0 %?46?%}.addClockContainer .card1 .form[data-v-46ad0172] .u-radio__icon-wrap--checked{background-color:#00a096!important;border-color:#00a096!important}.addClockContainer .card2[data-v-46ad0172]{margin-top:%?20?%;background-color:#fff;padding:%?24?%}.addClockContainer .card2 .title[data-v-46ad0172]{margin-bottom:%?15?%}.addClockContainer .card2 .reason[data-v-46ad0172]{background-color:#f6f6f6;border-radius:%?10?%;height:%?300?%}.addClockContainer .btn[data-v-46ad0172]{margin-top:auto;margin-bottom:%?61?%}.addClockContainer[data-v-46ad0172]  .u-btn-picker--primary{color:#00a096!important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 14380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gs: function() { return /* binding */ addResign; },
/* harmony export */   Hh: function() { return /* binding */ load; },
/* harmony export */   hc: function() { return /* binding */ edit; },
/* harmony export */   qv: function() { return /* binding */ getAllResign; },
/* harmony export */   rL: function() { return /* binding */ editResign; },
/* harmony export */   tA: function() { return /* binding */ submit; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);

var api = {
  load: '/nus/sign/list',
  submit: '/nus/sign'
};

// 查询当日或当月的打卡信息
var load = function load(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "".concat(api.load),
    method: 'get',
    params: params
  });
};

// 如果没有打过卡的是新增
var submit = function submit(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "".concat(api.submit),
    method: 'post',
    data: data
  });
};

// 如果打过就用修改
var edit = function edit(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "".concat(api.submit),
    method: 'put',
    data: data
  });
};

// 补签
var addResign = function addResign(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/resign",
    method: 'post',
    data: data
  });
};

// 审批 修改audited的属性
var editResign = function editResign(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/resign",
    method: 'put',
    data: data
  });
};

// 获取所有待补签列表
var getAllResign = function getAllResign(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/resign/list",
    method: 'get',
    params: params
  });
};

/***/ })

}]);