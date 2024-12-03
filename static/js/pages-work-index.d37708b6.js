(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[2226],{

/***/ 43536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35076);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("488a51a2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 20316:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7088);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("2be3bbb0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 20690:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40310);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("45305e1e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 57746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ ListViewVertical; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/ListViewVertical/index.vue?vue&type=template&id=04106f8a&scoped=true&
var components = {'uniLoadMore': (__webpack_require__(73308)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Scroller',_vm._g(_vm._b({staticClass:"scroller",scopedSlots:_vm._u([{key:"scrollSlot",fn:function(){return [_c('v-uni-view',{class:{ flexWrap: _vm.isFlex }},[_vm._t("header"),_vm._l((_vm.cardList),function(item,index){return _c('v-uni-view',{key:index,class:{
          phoneCardWrap: _vm.isPhoneCard,
          cardWrap: !_vm.isPhoneCard,
          isFlex: _vm.isFlex,
          active: item.checked,
          disabled: _vm.disabledClick
        },on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
!_vm.disabledClick && _vm.cardTap(item, index)
}}},[_c('Card',{class:{ disabled: _vm.disabledClick },attrs:{"content":item,"index":index,"isPhoneCard":_vm.isPhoneCard,"needActive":_vm.needActive},scopedSlots:_vm._u([{key:"default",fn:function(slotProps){return [_vm._t("default",null,{"content":slotProps.content,"index":slotProps.index})]}}],null,true)})],1)})],2),(_vm.hasLoadMore)?_c('uni-load-more',{attrs:{"status":_vm.isFinish}}):_vm._e()]},proxy:true}],null,true)},'Scroller',_vm.$attrs,false),_vm.$listeners))}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/ListViewVertical/index.vue?vue&type=template&id=04106f8a&scoped=true&

// EXTERNAL MODULE: ./src/components/Scroller/index.vue + 4 modules
var Scroller = __webpack_require__(49652);
// EXTERNAL MODULE: ./src/components/Card/index.vue + 5 modules
var Card = __webpack_require__(38289);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/ListViewVertical/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ListViewVerticalvue_type_script_lang_js_ = ({
  name: 'ListViewVertical',
  components: {
    Scroller: Scroller/* default */.A,
    Card: Card/* default */.A
  },
  props: {
    cardList: Array,
    isPhoneCard: {
      type: Boolean,
      default: false
    },
    hasGap: {
      type: Boolean,
      default: true
    },
    needActive: {
      type: Boolean,
      default: true
    },
    isFlex: {
      type: Boolean,
      default: false
    },
    hasLoadMore: {
      type: Boolean,
      default: true
    },
    isFinish: {
      type: String,
      default: '没有更多数据了'
    },
    disabledClick: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    cardTap: function cardTap(item, index) {
      if (this.isFlex) {
        item.checked = !item.checked;
      }
      var newItem = {
        userId: String(item.userId),
        userName: item.nickName
      };
      this.$emit('cardClick', {
        item: newItem,
        index: index,
        active: !!item.checked
      });
    }
  },
  watch: {
    cardList: {
      handler: function handler(newVal) {},
      deep: true
    }
  }
});
;// CONCATENATED MODULE: ./src/components/ListViewVertical/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ListViewVerticalvue_type_script_lang_js_ = (ListViewVerticalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/ListViewVertical/index.vue?vue&type=style&index=0&id=04106f8a&scoped=true&lang=scss&
var ListViewVerticalvue_type_style_index_0_id_04106f8a_scoped_true_lang_scss_ = __webpack_require__(43536);
;// CONCATENATED MODULE: ./src/components/ListViewVertical/index.vue?vue&type=style&index=0&id=04106f8a&scoped=true&lang=scss&
 /* harmony default export */ var components_ListViewVerticalvue_type_style_index_0_id_04106f8a_scoped_true_lang_scss_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/ListViewVertical/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ListViewVerticalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "04106f8a",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var ListViewVertical = (component.exports);

/***/ }),

/***/ 49652:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Scroller; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Scroller/index.vue?vue&type=template&id=004ca858&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-scroll-view',{staticClass:"scroll",attrs:{"scroll-y":true,"scroll-top":_vm.scrollTop},on:{"scrolltolower":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.onScrolltolower).apply(void 0, arguments)
}}},[_vm._t("scrollSlot")],2)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Scroller/index.vue?vue&type=script&lang=js&
/* provided dependency */ var console = __webpack_require__(43859)["A"];

//
//
//
//
//
//

/* harmony default export */ var Scrollervue_type_script_lang_js_ = ({
  name: 'Scroller',
  props: {
    setScroll: Number
  },
  data: function data() {
    return {
      scrollTop: 0
    };
  },
  methods: {
    onScrolltolower: function onScrolltolower() {
      this.$emit('scrollToBottom');
    }
  },
  watch: {
    setScroll: {
      handler: function handler(val) {
        console.log(val);
        this.scrollTop = val;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/components/Scroller/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Scrollervue_type_script_lang_js_ = (Scrollervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/Scroller/index.vue?vue&type=style&index=0&id=004ca858&lang=scss&scoped=true&
var Scrollervue_type_style_index_0_id_004ca858_lang_scss_scoped_true_ = __webpack_require__(20316);
;// CONCATENATED MODULE: ./src/components/Scroller/index.vue?vue&type=style&index=0&id=004ca858&lang=scss&scoped=true&
 /* harmony default export */ var components_Scrollervue_type_style_index_0_id_004ca858_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/Scroller/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_Scrollervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "004ca858",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var Scroller = (component.exports);

/***/ }),

/***/ 57021:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ work; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/work/index.vue?vue&type=template&id=73bf0132&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"work-container"},[_c('ListViewVertical',{staticClass:"listScroller",attrs:{"cardList":_vm.authGridList,"needActive":false},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('v-uni-view',{staticClass:"headerW"},[_c('v-uni-image',{staticClass:"banner",attrs:{"src":(_vm.imgUrl + "/work/banner2.svg")}}),_c('v-uni-image',{staticClass:"topTitle",attrs:{"src":(_vm.imgUrl + "/work/bannerTitle.png")}}),_c('v-uni-view',{staticClass:"topUser"},[_c('span',[_vm._v(_vm._s(_vm.userInfo.powerPlantName))]),_c('span',[_vm._v(_vm._s(_vm.userInfo.nickName))])]),_c('v-uni-view',{staticClass:"point"},[_c('v-uni-view',{staticClass:"btnWrap"},_vm._l((_vm.importList),function(item,index){return _c('v-uni-view',{key:index,staticClass:"bwraps",style:(item.isPhone == 0 ? 'display:none' : ''),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.changeGrid(item)
}}},[_c('v-uni-image',{staticClass:"btnIcons",attrs:{"src":item.query
                ? (_vm.imgUrl + "/work/" + (_vm.getQueryIcon(item)) + ".png")
                : '',"mode":"scaleToFill"}}),_c('v-uni-view',{staticClass:"title"},[_vm._v(_vm._s(item.meta.title))])],1)}),1)],1)],1)]},proxy:true},{key:"default",fn:function(ref){
                var content = ref.content;
return [(content.isPhone == 1)?_c('v-uni-view',{staticClass:"cardWrap"},[_c('v-uni-view',{staticClass:"cardTitle"},[_vm._v(_vm._s(_vm.menuMap[content.name]))]),_c('v-uni-view',{staticClass:"btnWrap"},_vm._l((content.children),function(item,index){return _c('v-uni-view',{key:index,staticClass:"bwrap",style:(item.isPhone == 0 ? 'display:none' : ''),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.changeGrid(item)
}}},[_c('v-uni-image',{staticClass:"btnIcon",attrs:{"src":item.query
              ? (_vm.imgUrl + "/work/" + (_vm.getQueryIcon(item)) + ".png")
              : '',"mode":"scaleToFill"}}),_c('v-uni-view',{staticClass:"title"},[_vm._v(_vm._s(item.meta.title))])],1)}),1)],1):_vm._e()]}}])})],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(2775);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(35305);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(34782);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(21699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(98992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__(54520);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.some.js
var esnext_iterator_some = __webpack_require__(37550);
// EXTERNAL MODULE: ./src/store/index.js + 4 modules
var src_store = __webpack_require__(46920);
;// CONCATENATED MODULE: ./src/utils/permission.js
/* provided dependency */ var console = __webpack_require__(43859)["A"];







/**
 * 字符权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
function checkPermi(value) {
  if (value && value instanceof Array && value.length > 0) {
    var permissions = src_store/* default */.A.getters && src_store/* default */.A.getters.permissions;
    var permissionDatas = value;
    var all_permission = "*:*:*";
    var hasPermission = permissions.some(function (permission) {
      return all_permission === permission || permissionDatas.includes(permission);
    });
    if (!hasPermission) {
      return false;
    }
    return true;
  } else {
    console.error("need roles! Like checkPermi=\"['system:user:add','system:user:edit']\"");
    return false;
  }
}

/**
 * 角色权限校验
 * @param {Array} value 校验值
 * @returns {Boolean}
 */
function checkRole(value) {
  if (value && value instanceof Array && value.length > 0) {
    var roles = store.getters && store.getters.roles;
    var permissionRoles = value;
    var super_admin = "admin";
    var hasRole = roles.some(function (role) {
      return super_admin === role || permissionRoles.includes(role);
    });
    if (!hasRole) {
      return false;
    }
    return true;
  } else {
    console.error("need roles! Like checkRole=\"['admin','editor']\"");
    return false;
  }
}
// EXTERNAL MODULE: ./src/components/Scroller/index.vue + 4 modules
var Scroller = __webpack_require__(49652);
// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__(41325);
;// CONCATENATED MODULE: ./src/api/menu.js


// 获取路由
var getRouters = function getRouters() {
  return (0,request/* default */.A)({
    url: '/system/menu/getRouters',
    method: 'get'
  });
};
// EXTERNAL MODULE: ./src/api/system/user.js
var user = __webpack_require__(62008);
// EXTERNAL MODULE: ./src/components/ListViewVertical/index.vue + 5 modules
var ListViewVertical = __webpack_require__(57746);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
;// CONCATENATED MODULE: ./src/utils/transform.js



function queryToObj(query) {
  var str = JSON.parse(query);
  str = str.replace(/'/g, '"');
  str = str.replace(/(\w+):/g, '"$1":');
  return JSON.parse(str);
}
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/work/index.vue?vue&type=script&lang=js&
/* provided dependency */ var workvue_type_script_lang_js_console = __webpack_require__(43859)["A"];













//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var workvue_type_script_lang_js_ = ((0,defineProperty/* default */.A)({
  data: function data() {
    return {
      current: 0,
      swiperDotIndex: 0,
      gridList: [],
      importList: [],
      userInfo: {},
      menuMap: {
        User: "人员管理",
        Run: "运行管理",
        Plant: "信息发布",
        Large: "负荷管理",
        Data: "数据综合展示"
      }
    };
  },
  components: {
    ListViewVertical: ListViewVertical/* default */.A
  },
  computed: {
    authGridList: function authGridList() {
      var result = [];
      var _iterator = (0,createForOfIteratorHelper/* default */.A)(this.gridList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (Number(item.isPhone) !== 1) continue;
          if (item.permissions) {
            if (checkPermi(item.permissions)) {
              result.push(item);
            } else {
              continue;
            }
          } else {
            result.push(item);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    },
    imgUrl: function imgUrl() {
      return (__webpack_require__(27358).imgUrl);
    }
  },
  methods: {
    getQueryIcon: function getQueryIcon(item) {
      return queryToObj(item.query).icon;
    },
    getQueryUrl: function getQueryUrl(item) {
      return queryToObj(item.query).url;
    },
    changeGrid: function changeGrid(item) {
      var _queryToObj = queryToObj(item.query),
        url = _queryToObj.url;
      workvue_type_script_lang_js_console.log(url);
      var arr = ["performance", "sync", "maintain", "warn", "unusual"];
      var stop = arr.some(function (str) {
        return url.includes(str);
      });
      if (url && stop) {
        // this.$modal.showToast("模块建设中~");
        this.$showError("模块建设中~");
        return;
      }
      this.$tab.navigateTo(url);
    },
    getInfo: function getInfo() {
      var _this = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getRouters();
            case 2:
              _this.result = _context.sent;
              _context.next = 5;
              return _this.buildData(_this.result.data);
            case 5:
              _context.next = 7;
              return _this.$store.dispatch("GetInfo").then(function (res) {
                _this.userInfo = res.user;
              });
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    buildData: function buildData(result) {
      var newResult = result.filter(function (item) {
        return item.name !== "System" && item.name !== "Monitor" && item.name !== "Tool";
      });
      this.gridList = newResult;
      this.importList = this.gridList[4].children.slice(0, 3);
    }
  },
  mounted: function mounted() {
    this.getInfo();
    // console.log(userProfileList())
    workvue_type_script_lang_js_console.log(this.imgUrl, 'imgUrl');
  },
  onNavigationBarButtonTap: function onNavigationBarButtonTap(event) {
    this.$showError("模块建设中~");
  },
  // 页面周期函数--监听页面加载
  onLoad: function onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady: function onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow: function onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide: function onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload: function onUnload() {}
}, "onUnload", function onUnload() {}));
;// CONCATENATED MODULE: ./src/pages/work/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_workvue_type_script_lang_js_ = (workvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/work/index.vue?vue&type=style&index=0&id=73bf0132&lang=scss&scoped=true&
var workvue_type_style_index_0_id_73bf0132_lang_scss_scoped_true_ = __webpack_require__(20690);
;// CONCATENATED MODULE: ./src/pages/work/index.vue?vue&type=style&index=0&id=73bf0132&lang=scss&scoped=true&
 /* harmony default export */ var pages_workvue_type_style_index_0_id_73bf0132_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/work/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_workvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "73bf0132",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var work = (component.exports);

/***/ }),

/***/ 35076:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.phoneCardWrap[data-v-04106f8a]{border-bottom:%?1?% solid #d9d9d9\r\n  /* padding: 18rpx 0; */}.phoneCardWrap[data-v-04106f8a]:nth-last-of-type(2){\r\n  /* border-bottom: none; */}.cardWrap[data-v-04106f8a]{padding:0 %?27?%;margin-top:%?20?%}.flexWrap[data-v-04106f8a]{display:grid;\r\n  /* grid-template-columns: repeat(auto-fit, minmax(160rpx, 1fr)); */grid-template-columns:repeat(4,minmax(%?160?%,1fr));padding:0 %?20?% %?20?%;text-align:center;gap:%?4?% %?20?%}.flexWrap .isFlex[data-v-04106f8a]{width:%?160?%;padding:0}.flexWrap .isFlex[data-v-04106f8a]  .uni-card{padding:0!important}.flexWrap .active[data-v-04106f8a]  .uni-card{background-color:#00a096}.flexWrap .active[data-v-04106f8a]  .uni-card .uni-card__content{color:#fff}.flexWrap .disabled[data-v-04106f8a]{pointer-events:none;position:relative}.flexWrap .disabled[data-v-04106f8a]::after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:hsla(0,0%,50%,.2);pointer-events:none}.flexWrap .disabled[data-v-04106f8a]  .uni-card{opacity:.9}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7088:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scroll[data-v-004ca858]{height:100%;overflow:hidden}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 40310:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-73bf0132],\r\n#app[data-v-73bf0132]{font-size:%?28?%;height:100%;overflow:hidden;color:#000}.work-container[data-v-73bf0132]{height:100%;display:flex;flex-direction:column;background:#f3f3f3}.work-container .headerW[data-v-73bf0132]{position:relative;width:100%;background:linear-gradient(180deg,#00a096 0,#00a096 60%,#f3f3f3 0,#f3f3f3)}.work-container .headerW .banner[data-v-73bf0132]{width:100%;height:35vh;object-fit:cover;z-index:9}.work-container .headerW .topTitle[data-v-73bf0132]{position:absolute;top:4.5%;left:%?30?%;z-index:10;width:%?280?%;height:%?100?%}.work-container .headerW .topUser[data-v-73bf0132]{position:absolute;top:35%;left:%?30?%;z-index:10;width:%?280?%;height:%?100?%;display:flex;justify-content:space-between;color:#fff}.work-container .headerW .point[data-v-73bf0132]{position:absolute;display:flex;border-radius:%?10?%;background:#fff;justify-content:center;align-items:center;bottom:0;z-index:10;margin:0 %?26?%;width:93%;height:%?225?%;\r\n  /* background: url('../../static/images/work/import.png'); */object-fit:cover;background-size:100%;border:1px solid #ebeef5}.work-container .headerW .point .btnWrap[data-v-73bf0132]{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(%?148?%,1fr));gap:%?32?% %?45?%;justify-items:center;align-items:center}.work-container .headerW .point .btnWrap .bwraps[data-v-73bf0132]{display:flex;flex-direction:column;justify-content:center;align-items:center}.work-container .headerW .point .btnWrap .bwraps .btnIcons[data-v-73bf0132]{width:%?120?%;height:%?120?%;margin-bottom:%?22?%;border-radius:%?36?%}.work-container .headerW .point .btnWrap .bwraps .title[data-v-73bf0132]{font-size:%?24?%;color:#000}.work-container .listScroller[data-v-73bf0132]{flex:1}.work-container .listScroller .cardWrap .cardTitle[data-v-73bf0132]{font-size:%?32?%;font-weight:700;margin-bottom:%?30?%;color:#000}.work-container .listScroller .cardWrap .btnWrap[data-v-73bf0132]{display:grid;grid-template-columns:repeat(auto-fill,minmax(%?120?%,1fr));gap:%?32?% %?45?%;justify-items:center;align-items:center}.work-container .listScroller .cardWrap .btnWrap .bwrap[data-v-73bf0132]{display:flex;flex-direction:column;justify-content:center;align-items:center}.work-container .listScroller .cardWrap .btnWrap .bwrap .btnIcon[data-v-73bf0132]{width:%?96?%;height:%?96?%;margin-bottom:%?22?%;border-radius:%?36?%}.work-container .listScroller .cardWrap .btnWrap .bwrap .title[data-v-73bf0132]{font-size:%?24?%;color:#000}", ""]);
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

/***/ }),

/***/ 35305:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _createForOfIteratorHelper; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52675);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89463);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2259);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16280);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76918);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26099);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47764);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62953);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28116);









function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}


/***/ })

}]);