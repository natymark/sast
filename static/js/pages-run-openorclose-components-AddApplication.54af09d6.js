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
    
(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[9552],{

/***/ 79844:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4272);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("0d093fe4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 4665:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18925);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("7819e382", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 66214:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AddApplication; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/openorclose/components/AddApplication.vue?vue&type=template&id=64ef775e&scoped=true&
var components = {'uniForms': (__webpack_require__(70491)/* ["default"] */ .A),'uniFormsItem': (__webpack_require__(74392)/* ["default"] */ .A),'uniDataSelect': (__webpack_require__(4689)/* ["default"] */ .A),'uniEasyinput': (__webpack_require__(11172)/* ["default"] */ .A),'uniDataCheckbox': (__webpack_require__(81613)/* ["default"] */ .A),'uniDatetimePicker': (__webpack_require__(53390)/* ["default"] */ .A),'uniIcons': (__webpack_require__(84256)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",style:({ '--bg': ("url(" + _vm.imgUrl + "/nike.png)")})},[_c('v-uni-view',{staticClass:"form-container"},[_c('uni-forms',{ref:"form",attrs:{"rules":_vm.rules,"label-width":"150rpx"},model:{value:(_vm.formData),callback:function ($$v) {_vm.formData=$$v},expression:"formData"}},[_c('uni-forms-item',{attrs:{"required":true,"label":"申请设备","name":'[REDACTED]'}},[_c('uni-data-select',{attrs:{"localdata":_vm.engineOptions,"inputBorder":false,"placeholder":"请选择"},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleEquipmentChange).apply(void 0, arguments)
}},model:{value:(_vm.formData.equipmentId),callback:function ($$v) {_vm.$set(_vm.formData, "equipmentId", $$v)},expression:"formData.equipmentId"}})],1),_c('uni-forms-item',{attrs:{"required":true,"label":"申请电厂","name":'[REDACTED]'}},[_c('uni-easyinput',{attrs:{"type":"text","placeholder":"请输入","inputBorder":false,"trim":true},model:{value:(_vm.formData.plantName),callback:function ($$v) {_vm.$set(_vm.formData, "plantName", $$v)},expression:"formData.plantName"}})],1),_c('uni-forms-item',{attrs:{"required":true,"label":"申请人","name":'[REDACTED]'}},[_c('uni-easyinput',{attrs:{"type":"text","placeholder":"请输入","inputBorder":false,"trim":true},model:{value:(_vm.formData.userName),callback:function ($$v) {_vm.$set(_vm.formData, "userName", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"formData.userName"}})],1),_c('uni-forms-item',{attrs:{"required":true,"label":"申请开/关机","name":'[REDACTED]',"label-width":"192rpx"}},[_c('uni-data-checkbox',{staticClass:"custom-checkbox",attrs:{"localdata":_vm.shutOptins,"selectedColor":"#00A096"},model:{value:(_vm.formData.code),callback:function ($$v) {_vm.$set(_vm.formData, "code", $$v)},expression:"formData.code"}})],1),_c('uni-forms-item',{attrs:{"required":true,"label":"电压等级","name":'[REDACTED]'}},[_c('uni-data-select',{attrs:{"localdata":_vm.a_4Options,"inputBorder":false,"placeholder":"请选择"},model:{value:(_vm.formData.voltageLevel),callback:function ($$v) {_vm.$set(_vm.formData, "voltageLevel", $$v)},expression:"formData.voltageLevel"}})],1),_c('uni-forms-item',{attrs:{"required":true,"label":"设备类型","name":'[REDACTED]'}},[_c('uni-data-select',{attrs:{"localdata":_vm.a_5Options,"inputBorder":false,"placeholder":"请选择"},model:{value:(_vm.formData.equipmentType),callback:function ($$v) {_vm.$set(_vm.formData, "equipmentType", $$v)},expression:"formData.equipmentType"}})],1),_c('uni-forms-item',{attrs:{"required":true,"label":"机组","name":'[REDACTED]'}},[_c('mySelectCheckbox',{staticClass:"check_box",attrs:{"clear":_vm.isClear,"multiple":true,"dataKey":"label","dataValue":"value","localdata":_vm.dropDownData},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleMutChange).apply(void 0, arguments)
}},model:{value:(_vm.formData.machineSet),callback:function ($$v) {_vm.$set(_vm.formData, "machineSet", $$v)},expression:"formData.machineSet"}})],1),(_vm.formData.code == '0')?_c('uni-forms-item',{attrs:{"required":true,"label":"开机时间段","name":'[REDACTED]',"label-width":"184rpx"}},[_c('uni-datetime-picker',{attrs:{"type":"datetimerange","rangeSeparator":"—"},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.handleDateChange($event, 'no')
}},model:{value:(_vm.formData.boottime),callback:function ($$v) {_vm.$set(_vm.formData, "boottime", $$v)},expression:"formData.boottime"}},[_c('v-uni-view',{staticClass:"show_time",style:({ 'marginTop': _vm.showTime == '请选择' ? '0' : '20rpx' })},[_c('v-uni-text',[_vm._v(_vm._s(_vm.showTime))]),(_vm.showTime != '请选择')?_c('uni-icons',{staticStyle:{"background-color":"#fff"},attrs:{"type":"clear","size":"24","color":"#32C3BA"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.handleClear('no')
}}}):_vm._e()],1)],1)],1):_vm._e(),(_vm.formData.code == '1')?_c('uni-forms-item',{attrs:{"required":true,"label":"停机时间段","name":'[REDACTED]',"label-width":"184rpx"}},[_c('uni-datetime-picker',{attrs:{"type":"datetimerange","rangeSeparator":"—"},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.handleDateChange($event, 'yes')
}},model:{value:(_vm.formData.downtime),callback:function ($$v) {_vm.$set(_vm.formData, "downtime", $$v)},expression:"formData.downtime"}},[_c('v-uni-view',{staticClass:"show_time",style:({ 'marginTop': _vm.showTimes == '请选择' ? '0' : '20rpx' })},[_c('v-uni-text',[_vm._v(_vm._s(_vm.showTimes))]),(_vm.showTimes != '请选择')?_c('uni-icons',{staticStyle:{"background-color":"#fff"},attrs:{"type":"clear","size":"24","color":"#32C3BA"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.handleClear('yes')
}}}):_vm._e()],1)],1)],1):_vm._e()],1)],1),_c('v-uni-view',{staticClass:"sub_but"},[_c('v-uni-button',{attrs:{"type":"default"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.handleSub).apply(void 0, arguments)
}}},[_vm._v("提交")])],1)],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/pages/run/openorclose/components/AddApplication.vue?vue&type=template&id=64ef775e&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49943);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(50113);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(62062);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(98992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.find.js
var esnext_iterator_find = __webpack_require__(72577);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.map.js
var esnext_iterator_map = __webpack_require__(81454);
;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/SelectMutCheck/index.vue?vue&type=template&id=597e65a9&scoped=true&
var SelectMutCheckvue_type_template_id_597e65a9_scoped_true_components = {'uniIcons': (__webpack_require__(84256)/* ["default"] */ .A)}
var SelectMutCheckvue_type_template_id_597e65a9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"uni-stat__select"},[(_vm.label)?_c('span',{staticClass:"uni-label-text"},[_vm._v(_vm._s(_vm.label + '：'))]):_vm._e(),_c('v-uni-view',{staticClass:"uni-stat-box",class:{'uni-stat__actived': _vm.current}},[_c('v-uni-view',{staticClass:"uni-select",class:{'uni-select--disabled':_vm.disabled},style:({height:_vm.multiple?'100%':' 35px;'})},[_c('v-uni-view',{staticClass:"uni-select__input-box",style:({height:_vm.multiple?'100%':'35px;'}),on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.toggleSelector).apply(void 0, arguments)
}}},[(_vm.multiple&&_vm.current.length>0)?_c('v-uni-view',{staticStyle:{"display":"flex","flex-wrap":"wrap","width":"100%"}},[_vm._l((_vm.collapseTags?_vm.current.slice(0,_vm.collapseTagsNum):_vm.current),function(item,index){return _c('v-uni-view',{key:item[_vm.dataValue],staticClass:"tag-calss"},[_c('span',{staticClass:"text"},[_vm._v(_vm._s(item[_vm.dataKey]))]),_c('v-uni-view',{on:{"click":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
_vm.delItem(item)
}}},[_c('uni-icons',{staticStyle:{"margin-left":"4px"},attrs:{"type":"clear","color":"#c0c4cc"}})],1)],1)}),(_vm.current.length>_vm.collapseTagsNum&&_vm.collapseTags)?_c('v-uni-view',{staticClass:"tag-calss"},[_c('span',{staticClass:"text"},[_vm._v("+"+_vm._s(_vm.current.length-_vm.collapseTagsNum))])]):_vm._e()],2):(_vm.current&&_vm.current.length>0&&!_vm.filterable)?_c('v-uni-view',{staticClass:"uni-select__input-text"},[_vm._v(_vm._s(_vm.current))]):(_vm.filterable)?_c('v-uni-input',{staticClass:"uni-select__input-text",staticStyle:{"font-size":"12px"},attrs:{"type":"text","placeholder":_vm.placeholderOld},model:{value:(_vm.current),callback:function ($$v) {_vm.current=$$v},expression:"current"}}):_c('v-uni-view',{staticClass:"uni-select__input-text uni-select__input-placeholder"},[_vm._v(_vm._s(_vm.typePlaceholder))]),(_vm.current && _vm.clear)?_c('uni-icons',{attrs:{"type":"clear","color":"#c0c4cc","size":"24"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.clearVal).apply(void 0, arguments)
}}}):_c('uni-icons',{attrs:{"type":_vm.showSelector? 'top' : 'bottom',"size":"14","color":"#999"}})],1),(_vm.showSelector)?_c('v-uni-view',{staticClass:"uni-select--mask",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.toggleSelector).apply(void 0, arguments)
}}}):_vm._e(),(_vm.showSelector)?_c('v-uni-view',{staticClass:"uni-select__selector"},[_c('v-uni-view',{staticClass:"uni-popper__arrow"}),_c('v-uni-scroll-view',{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[(_vm.filterMixinDatacomResData.length === 0)?_c('v-uni-view',{staticClass:"uni-select__selector-empty"},[_c('span',[_vm._v(_vm._s(_vm.emptyTips))])]):_vm._l((_vm.filterMixinDatacomResData),function(item,index){return _c('v-uni-view',{key:index,staticClass:"uni-select__selector-item",staticStyle:{"display":"flex","justify-content":"space-between","align-items":"center"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.change(item)
}}},[_c('span',{class:{'uni-select__selector__disabled': item.disable}},[_vm._v(_vm._s(_vm.formatItemName(item)))]),(_vm.multiple&&_vm.currentArr.includes(item[_vm.dataValue]))?_c('uni-icons',{attrs:{"type":"checkmarkempty","color":"#007aff"}}):_vm._e()],1)})],2)],1):_vm._e()],1)],1)],1)}
var SelectMutCheckvue_type_template_id_597e65a9_scoped_true_recyclableRender = false
var SelectMutCheckvue_type_template_id_597e65a9_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/SelectMutCheck/index.vue?vue&type=template&id=597e65a9&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(48980);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(74423);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(54554);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(2892);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__(84864);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.dot-all.js
var es_regexp_dot_all = __webpack_require__(57465);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(27495);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.sticky.js
var es_regexp_sticky = __webpack_require__(87745);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(38781);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(21699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(25440);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.filter.js
var esnext_iterator_filter = __webpack_require__(54520);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/SelectMutCheck/index.vue?vue&type=script&lang=js&
/* provided dependency */ var uniCloud = __webpack_require__(10527)["A"];






















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
 * DataChecklist 数据选择器
 * @description 通过数据渲染的下拉框组件
 * @tutorial https://uniapp.dcloud.io/component/uniui/uni-data-select
 * @property {String} value 默认值
 * @property {Array} localdata 本地数据 ，格式 [{text:'',value:''}]
 * @property {Boolean} clear 是否可以清空已选项
 * @property {Boolean} emptyText 没有数据时显示的文字 ，本地数据无效
 * @property {String} label 左侧标题
 * @property {String} placeholder 输入框的提示文字
 * @property {Boolean} disabled 是否禁用
 * @event {Function} change  选中发生变化触发
 */

/* harmony default export */ var SelectMutCheckvue_type_script_lang_js_ = ({
  name: "my-selectCheckbox",
  mixins: [uniCloud.mixinDatacom || {}],
  props: {
    collapseTagsNum: {
      type: Number,
      default: 1
    },
    collapseTags: {
      type: Boolean,
      default: false
    },
    dataKey: {
      type: [String],
      default: 'text'
    },
    dataValue: {
      type: [String],
      default: 'value'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    localdata: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [String, Number, Array],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    emptyTips: {
      type: String,
      default: '无选项'
    },
    clear: {
      type: Boolean,
      default: true
    },
    defItem: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 格式化输出 用法 field="_id as value, version as text, uni_platform as label" format="{label} - {text}"
    format: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      showSelector: false,
      current: [],
      mixinDatacomResData: [],
      apps: [],
      channels: [],
      cacheKey: "uni-data-select-lastSelectedValue",
      placeholderOld: "",
      currentArr: []
    };
  },
  created: function created() {
    var _this = this;
    if (this.multiple) {
      this.currentArr = this.value || [];
      if (!this.current) {
        this.current = [];
      }
      if (this.value && this.value.length > 0 && this.filterMixinDatacomResData.length > 0) {
        this.value.forEach(function (item) {
          var current = _this.filterMixinDatacomResData.find(function (e) {
            return e[_this.dataValue] == item;
          });
          _this.current.push(current);
        });
      }
    } else {
      if (this.value) {
        this.current = this.formatItemName(this.filterMixinDatacomResData.find(function (e) {
          return e[_this.dataValue] == _this.value;
        }));
      }
    }
    this.placeholderOld = this.placeholder;
    this.debounceGet = this.debounce(function () {
      _this.query();
    }, 300);
    if (this.collection && !this.localdata.length) {
      this.debounceGet();
    }
  },
  computed: {
    filterMixinDatacomResData: function filterMixinDatacomResData() {
      var _this2 = this;
      if (this.filterable && this.current) {
        return this.mixinDatacomResData.filter(function (e) {
          return e[_this2.dataKey].includes(_this2.current);
        });
      } else {
        return this.mixinDatacomResData;
      }
    },
    typePlaceholder: function typePlaceholder() {
      var text = {
        'opendb-stat-app-versions': '版本',
        'opendb-app-channels': '渠道',
        'opendb-app-list': '应用'
      };
      var common = this.placeholder;
      var placeholder = text[this.collection];
      return placeholder ? common + placeholder : common;
    },
    valueCom: function valueCom() {
      return this.value;
    }
  },
  watch: {
    localdata: {
      immediate: true,
      handler: function handler(val, old) {
        if (Array.isArray(val) && old !== val) {
          this.mixinDatacomResData = val;
        }
      }
    },
    valueCom: function valueCom(val, old) {
      this.initDefVal();
    },
    mixinDatacomResData: {
      immediate: true,
      handler: function handler(val) {
        if (val.length) {
          this.initDefVal();
        }
      }
    }
    // modelValue(val) {
    // 	if (this.multiple && val && val.length > 0) {
    // 		this.currentArr = val
    // 		if (!this.current) {
    // 			this.current = []
    // 		}
    // 		val.forEach(item => {
    // 			let current = this.filterMixinDatacomResData.find(e =>
    // 				e[this.dataValue] == item
    // 			)
    // 			this.current.push(current)
    // 		})
    // 	} else {
    // 		if (val) {
    // 			this.current = this.formatItemName(this.filterMixinDatacomResData.find(e =>
    // 				e[this.dataValue] == val
    // 			))
    // 		}
    // 	}

    // },
    // value(val) {
    // 	if (this.multiple && val && val.length > 0) {
    // 		this.currentArr = val
    // 		if (!this.current) {
    // 			this.current = []
    // 		}
    // 		val.forEach(item => {
    // 			let current = this.filterMixinDatacomResData.find(e =>
    // 				e[this.dataValue] == item
    // 			)
    // 			this.current.push(current)
    // 		})
    // 	} else {
    // 		if (val) {
    // 			this.current = this.formatItemName(this.filterMixinDatacomResData.find(e =>
    // 				e[this.dataValue] == val
    // 			))
    // 		}
    // 	}

    // }
  },
  methods: {
    debounce: function debounce(fn) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var timer = null;
      return function () {
        var _this3 = this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(_this3, args);
        }, time);
      };
    },
    // 执行数据库查询
    query: function query() {
      this.mixinDatacomEasyGet();
    },
    // 监听查询条件变更事件
    onMixinDatacomPropsChange: function onMixinDatacomPropsChange() {
      if (this.collection) {
        this.debounceGet();
      }
    },
    initDefVal: function initDefVal() {
      var _this4 = this;
      var defValue = '';
      if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {
        defValue = this.valueCom;
      } else {
        var strogeValue;
        if (this.collection) {
          strogeValue = this.getCache();
        }
        if (strogeValue || strogeValue === 0) {
          defValue = strogeValue;
        } else {
          var defItem = '';
          if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
            defItem = this.mixinDatacomResData[this.defItem - 1][this.dataValue];
          }
          defValue = defItem;
        }
        if (defValue || defValue === 0) {
          this.emit(defValue);
        }
      }
      if (this.multiple) {
        this.current = [];
        defValue.forEach(function (item) {
          var current = _this4.filterMixinDatacomResData.find(function (e) {
            return e[_this4.dataValue] == item;
          });
          _this4.current.push(current);
        });
      } else {
        var def = this.mixinDatacomResData.find(function (item) {
          return item[_this4.dataValue] === defValue;
        });
        this.current = def ? this.formatItemName(def) : '';
      }
    },
    /**
     * @param {[String, Number]} value
     * 判断用户给的 value 是否同时为禁用状态
     */
    isDisabled: function isDisabled(value) {
      var _this5 = this;
      var isDisabled = false;
      this.mixinDatacomResData.forEach(function (item) {
        if (item[_this5.dataValue] === value) {
          isDisabled = item.disable;
        }
      });
      return isDisabled;
    },
    clearVal: function clearVal() {
      if (this.multiple) {
        this.current = [];
        this.currentArr = [];
        this.emit([]);
      } else {
        this.current = "";
        this.currentArr = [];
        this.emit('');
      }
      if (this.collection) {
        this.removeCache();
      }
      this.placeholderOld = this.placeholder;
    },
    change: function change(item) {
      var _this6 = this;
      if (!item.disable) {
        this.showSelector = false;
        if (this.multiple) {
          if (!this.current) {
            this.current = [];
          }
          if (!this.currentArr) {
            this.currentArr = [];
          }
          if (this.currentArr.includes(item[this.dataValue])) {
            var index = this.current.findIndex(function (e) {
              return e[_this6.dataValue] == item[_this6.dataValue];
            });
            this.current.splice(index, 1);
            this.currentArr.splice(index, 1);
            this.emit(this.current);
          } else {
            this.current.push(item);
            this.currentArr.push(item[this.dataValue]);
            this.emit(this.current);
          }
        } else {
          this.current = this.formatItemName(item);
          this.emit(item[this.dataValue]);
        }
      }
    },
    delItem: function delItem(item) {
      var _this7 = this;
      if (this.currentArr.includes(item[this.dataValue])) {
        var index = this.current.findIndex(function (e) {
          return e[_this7.dataValue] == item[_this7.dataValue];
        });
        this.current.splice(index, 1);
        this.currentArr.splice(index, 1);
        this.emit(this.current);
      }
    },
    emit: function emit(val) {
      this.$emit('change', val);
      if (this.multiple) {
        this.$emit('input', this.currentArr);
        this.$emit('update:modelValue', this.currentArr);
      } else {
        this.$emit('input', val);
        this.$emit('update:modelValue', val);
      }
      if (this.collection) {
        this.setCache(val);
      }
    },
    toggleSelector: function toggleSelector() {
      var _this8 = this;
      if (this.disabled) {
        return;
      }
      if (this.filterable && this.current && this.mixinDatacomResData.findIndex(function (e) {
        return e[_this8.dataKey] == _this8.current;
      }) < 0) {
        this.current = "";
      }
      this.showSelector = !this.showSelector;
      if (this.filterable && this.current && this.showSelector) {
        this.placeholderOld = this.current;
        this.current = "";
      } else if (this.filterable && !this.current && !this.showSelector) {
        if (this.placeholderOld != this.placeholder) {
          this.current = this.placeholderOld;
        }
      }
    },
    formatItemName: function formatItemName(item) {
      if (!item) {
        return "";
      }
      var text = item[this.dataKey];
      var value = item[this.dataValue];
      var channel_code = item.channel_code;
      channel_code = channel_code ? "(".concat(channel_code, ")") : '';
      if (this.format) {
        // 格式化输出
        var str = "";
        str = this.format;
        for (var key in item) {
          str = str.replace(createSecureRegExp("{".concat(key, "}"), "g"), item[key]);
        }
        return str;
      } else {
        return this.collection.indexOf('app-list') > 0 ? "".concat(text, "(").concat(value, ")") : text ? text : "\u672A\u547D\u540D".concat(channel_code);
      }
    },
    // 获取当前加载的数据
    getLoadData: function getLoadData() {
      return this.mixinDatacomResData;
    },
    // 获取当前缓存key
    getCurrentCacheKey: function getCurrentCacheKey() {
      return this.collection;
    },
    // 获取缓存
    getCache: function getCache() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getCurrentCacheKey();
      var cacheData = uni.getStorageSync(this.cacheKey) || {};
      return cacheData[name];
    },
    // 设置缓存
    setCache: function setCache(value) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getCurrentCacheKey();
      var cacheData = uni.getStorageSync(this.cacheKey) || {};
      cacheData[name] = value;
      uni.setStorageSync(this.cacheKey, cacheData);
    },
    // 删除缓存
    removeCache: function removeCache() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getCurrentCacheKey();
      var cacheData = uni.getStorageSync(this.cacheKey) || {};
      delete cacheData[name];
      uni.setStorageSync(this.cacheKey, cacheData);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/SelectMutCheck/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SelectMutCheckvue_type_script_lang_js_ = (SelectMutCheckvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/components/SelectMutCheck/index.vue?vue&type=style&index=0&id=597e65a9&lang=scss&scoped=true&
var SelectMutCheckvue_type_style_index_0_id_597e65a9_lang_scss_scoped_true_ = __webpack_require__(79844);
;// CONCATENATED MODULE: ./src/components/SelectMutCheck/index.vue?vue&type=style&index=0&id=597e65a9&lang=scss&scoped=true&
 /* harmony default export */ var components_SelectMutCheckvue_type_style_index_0_id_597e65a9_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/components/SelectMutCheck/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_SelectMutCheckvue_type_script_lang_js_,
  SelectMutCheckvue_type_template_id_597e65a9_scoped_true_render,
  SelectMutCheckvue_type_template_id_597e65a9_scoped_true_staticRenderFns,
  false,
  null,
  "597e65a9",
  null,
  false,
  SelectMutCheckvue_type_template_id_597e65a9_scoped_true_components,
  renderjs
)

/* harmony default export */ var SelectMutCheck = (component.exports);
// EXTERNAL MODULE: ./src/api/run/openorClose.js
var openorClose = __webpack_require__(94816);
// EXTERNAL MODULE: ./src/api/run/mass.js
var mass = __webpack_require__(63839);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/openorclose/components/AddApplication.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var AddApplicationvue_type_script_lang_js_ = ({
  components: {
    mySelectCheckbox: SelectMutCheck
  },
  data: function data() {
    return {
      formData: {
        plantName: '',
        userName: '',
        code: '0',
        voltageLevel: null,
        equipmentType: null,
        machineSet: [],
        boottime: [],
        downtime: [],
        equipmentId: null,
        equipmentName: ''
      },
      rules: {
        // plantName: {
        //   rules: [{ required: true, errorMessage: '请输入电厂' }]
        // },
        // userName: {
        //   rules: [{ required: true, errorMessage: '请输入申请人' }]
        // },
        // code: {
        //   rules: [{ required: true, errorMessage: '请选择' }]
        // },
        // voltageLevel: {
        //   rules: [{ required: true, errorMessage: '请选择' }]
        // },
        // equipmentType: {
        //   rules: [{ required: true, errorMessage: '请选择' }]
        // },
        // machineSet: {
        //   rules: [{ required: true, errorMessage: '请选择' }]
        // },
        // boottime: {
        //   rules: [{ required: true, errorMessage: '请选择' }]
        // },
        // downtime: {
        //   rules: [{ required: true, errorMessage: '请选择' }]
        // },
      },
      showTime: '请选择',
      showTimes: '请选择',
      shutOptins: [{
        text: '开机',
        value: '0'
      }, {
        text: '关机',
        value: '1'
      }],
      a_4Options: [{
        value: '5kv',
        text: "5kv"
      }, {
        value: '10kv',
        text: "10kv"
      }, {
        value: '20kv',
        text: "20kv"
      }],
      a_5Options: [{
        value: '5kv',
        text: "5kv"
      }, {
        value: '10kv',
        text: "10kv"
      }, {
        value: '20kv',
        text: "20kv"
      }],
      dropDownData: [{
        label: '机组1',
        value: '机组1'
      }, {
        label: '机组2',
        value: '机组2'
      }, {
        label: '机组3',
        value: '机组3'
      }, {
        label: '机组4',
        value: '机组4'
      }],
      isClear: false,
      //是否展示清除
      engineOptions: []
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      return (__webpack_require__(27358).imgUrl);
    }
  },
  mounted: function mounted() {},
  methods: {
    // 多选变化
    handleMutChange: function handleMutChange(data) {
      if (data && data.length > 0) {
        this.isClear = true;
      } else {
        this.isClear = false;
      }
    },
    // 选择时间
    handleDateChange: function handleDateChange(e, flag) {
      var res = String(e && e[0]) + '—' + '\r\n' + String(e && e[1]);
      console.log('e', res);
      flag == 'no' ? this.showTime = res : this.showTimes = res;
    },
    handleClear: function handleClear(flag) {
      if (flag == 'yes') {
        this.formData.downtime = '';
        this.showTimes = "请选择";
      } else {
        this.formData.boottime = '';
        this.showTime = "请选择";
      }
    },
    handleSub: function handleSub() {
      var _this = this;
      this.$refs.form.validate(/*#__PURE__*/function () {
        var _ref = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee(err, formData) {
          var _yield$reqAddOpenClos, code;
          return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (err) {
                  _context.next = 15;
                  break;
                }
                // const params = {
                //   boottime: this.formatTime(formData.boottime),
                //   downtime: this.formatTime(formData.downtime),
                //   equipmentName: this.formData.equipmentName
                // }
                formData.boottime = _this.formatTime(formData.boottime), formData.downtime = _this.formatTime(formData.downtime), formData.machineSet = formData.machineSet.join(',');
                _context.prev = 2;
                _context.next = 5;
                return (0,openorClose/* reqAddOpenClose */.Kd)((0,objectSpread2/* default */.A)({}, formData));
              case 5:
                _yield$reqAddOpenClos = _context.sent;
                code = _yield$reqAddOpenClos.code;
                if (code == 200) {
                  _this.$tab.navigateBack();
                }
                _context.next = 12;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
              case 12:
                return _context.abrupt("return");
              case 15:
                _this.$modal.msgError("请输入必填项！");
              case 16:
                console.log('error', err);
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[2, 10]]);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }()).then(function (res) {
        // res 返回 null
      });
    },
    formatTime: function formatTime(arr) {
      console.log('arr', arr);
      if (arr && arr.length > 0) {
        return "".concat(arr[0], "\u2014").concat(arr[1]);
      }
    },
    // 设备列表
    getEquipmentList: function getEquipmentList() {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2() {
        var _yield$reqGetEquipmen, code, rows;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0,mass/* reqGetEquipmentList */.XE)();
            case 3:
              _yield$reqGetEquipmen = _context2.sent;
              code = _yield$reqGetEquipmen.code;
              rows = _yield$reqGetEquipmen.rows;
              if (code == 200) {
                _this2.engineOptions = rows.map(function (item) {
                  return {
                    value: item.equipmentId ? item.equipmentId : item.id,
                    text: item.equipmentName
                  };
                }) || [];
              }
              _context2.next = 11;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    handleEquipmentChange: function handleEquipmentChange(val) {
      var res = this.engineOptions.find(function (item) {
        return item.value == val;
      }) || {};
      if (Object.keys(res).length > 0) {
        this.formData.equipmentName = res.text;
      }
    },
    reset: function reset() {
      this.formData = {
        plantName: '',
        userName: '',
        code: '0',
        voltageLevel: null,
        equipmentType: null,
        machineSet: '',
        boottime: '',
        downtime: '',
        equipmentId: null,
        equipmentName: ''
      };
      this.isClear = false;
      this.showTime = '请选择';
      this.showTimes = '请选择';
    }
  },
  watch: {},
  // 页面周期函数--监听页面加载
  onLoad: function onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady: function onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow: function onShow() {
    this.getEquipmentList();
  },
  // 页面周期函数--监听页面隐藏
  onHide: function onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload: function onUnload() {
    this.reset();
  } // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
});
;// CONCATENATED MODULE: ./src/pages/run/openorclose/components/AddApplication.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AddApplicationvue_type_script_lang_js_ = (AddApplicationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/run/openorclose/components/AddApplication.vue?vue&type=style&index=0&id=64ef775e&lang=scss&scoped=true&
var AddApplicationvue_type_style_index_0_id_64ef775e_lang_scss_scoped_true_ = __webpack_require__(4665);
;// CONCATENATED MODULE: ./src/pages/run/openorclose/components/AddApplication.vue?vue&type=style&index=0&id=64ef775e&lang=scss&scoped=true&
 /* harmony default export */ var components_AddApplicationvue_type_style_index_0_id_64ef775e_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
;// CONCATENATED MODULE: ./src/pages/run/openorclose/components/AddApplication.vue

var AddApplication_renderjs
;

;


/* normalize component */

var AddApplication_component = (0,componentNormalizer/* default */.A)(
  components_AddApplicationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "64ef775e",
  null,
  false,
  components,
  AddApplication_renderjs
)

/* harmony default export */ var AddApplication = (AddApplication_component.exports);

/***/ }),

/***/ 4272:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-597e65a9]{display:none}}.uni-stat__select[data-v-597e65a9]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-597e65a9]{width:100%;flex:1}.uni-stat__actived[data-v-597e65a9]{width:100%;flex:1}.uni-label-text[data-v-597e65a9]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-597e65a9]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px;min-height:35px}.uni-select--disabled[data-v-597e65a9]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-597e65a9]{font-size:16px;min-height:35px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-597e65a9]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input-box .tag-calss[data-v-597e65a9]{font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;font-weight:400;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;font-size:12px;border:1px solid #d9ecff;border-radius:4px;white-space:nowrap;height:24px;padding:0 4px 0 8px;line-height:22px;box-sizing:border-box;margin:2px 0 2px 6px;display:flex;max-width:100%;align-items:center;background-color:#f4f4f5;border-color:#e9e9eb;color:#909399}.uni-select__input-box .tag-calss .text[data-v-597e65a9]{font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;font-weight:400;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;font-size:12px;white-space:nowrap;line-height:22px;color:#909399;overflow:hidden;text-overflow:ellipsis}.uni-select__input[data-v-597e65a9]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-597e65a9]{font-size:14px;color:#909399}.uni-select__selector[data-v-597e65a9]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-597e65a9]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-597e65a9],\r\n.uni-select__selector-item[data-v-597e65a9]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\r\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-597e65a9]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-597e65a9]:last-child,\r\n.uni-select__selector-item[data-v-597e65a9]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-597e65a9]{opacity:.4;cursor:default}\r\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-597e65a9],\r\n.uni-popper__arrow[data-v-597e65a9]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-597e65a9]{-webkit-filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-597e65a9]::after{content:\" \";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-597e65a9]{width:100%;color:#333;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-597e65a9]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-597e65a9]{position:fixed;top:0;bottom:0;right:0;left:0}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 18925:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-64ef775e]{height:100%;display:flex;flex-direction:column;position:relative}.container .form-container[data-v-64ef775e]{width:100%;background-color:#fff;padding:%?14?% %?24?%}.container .form-container[data-v-64ef775e]  .uni-forms-item{margin-bottom:%?20?%}.container .form-container[data-v-64ef775e]  .uni-forms-item .uni-forms-item__content{display:flex;align-items:center}.container .form-container[data-v-64ef775e]  .uni-forms-item .uni-input-input{font-size:%?28?%}.container .form-container[data-v-64ef775e]  .uni-forms-item .uni-select{border:none!important;border-bottom:none!important}.container .form-container[data-v-64ef775e]  .content-clear-icon,\r\n.container .form-container[data-v-64ef775e]  .uniui-clear{color:#32c3ba!important}.container .form-container[data-v-64ef775e]  .uni-forms-item__error,\r\n.container .form-container[data-v-64ef775e]  .msg--active{display:none}.container .sub_but[data-v-64ef775e]{padding:0 %?26?%}.container .sub_but uni-button[data-v-64ef775e]{width:%?698?%;position:absolute;bottom:%?24?%;background-color:#32c3ba;font-size:%?30?%;color:#fff}.container .wrap[data-v-64ef775e]{flex:1;overflow:hidden}.container .check_box[data-v-64ef775e]  .tag-calss{margin:%?4?% %?10?% 0 0!important;background-color:rgba(0,160,150,.14);border:none!important;min-width:%?160?%;height:%?54?%;display:flex;justify-content:center;align-items:center}.container .check_box[data-v-64ef775e]  .tag-calss .text{color:#00a096!important}.container .show_time[data-v-64ef775e]{white-space:pre-line;color:#6a6a6a;font-size:%?24?%;display:flex;justify-content:space-between;padding:0 %?10?% 0 0}.container .custom-checkbox[data-v-64ef775e] .is-checked .radio__inner{background:var(--bg) no-repeat;background-size:100% 100%;border:none!important}.container .custom-checkbox[data-v-64ef775e] .radio__inner-icon{display:none}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 63839:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $N: function() { return /* binding */ reqGetMassList; },
/* harmony export */   Lx: function() { return /* binding */ reqStartDownByPlant; },
/* harmony export */   Ns: function() { return /* binding */ getStartDownSta; },
/* harmony export */   VU: function() { return /* binding */ getMassStatisticsOfTimes; },
/* harmony export */   XE: function() { return /* binding */ reqGetEquipmentList; },
/* harmony export */   jW: function() { return /* binding */ reqEditMass; },
/* harmony export */   tK: function() { return /* binding */ getMassStatusEcharts; }
/* harmony export */ });
/* unused harmony exports reqStartDownOfDay, reqStartDownOfWeek, reqStartDownOfMonth, reqStartDownOfYear */
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);
/*
 * @Author: zhongPj
 * @Date: 2024-08-20 11:08:17
 * @LastEditTime: 2024-08-21 17:42:49
 * @Description: 群发指令
 */


// 群发指令类表
var reqGetMassList = function reqGetMassList(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/group/command/list',
    method: 'get',
    params: params
  });
};

// 群发指令签收

var reqEditMass = function reqEditMass(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/group/command',
    method: 'put',
    data: data
  });
};

// 设备列表
var reqGetEquipmentList = function reqGetEquipmentList(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/equipment/info/list',
    method: 'get',
    params: params
  });
};
// 三个状态图
var getMassStatusEcharts = function getMassStatusEcharts(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/group/command/statisticsOfStatus',
    method: 'get',
    params: params
  });
};
// 开停机次数图
var getMassStatisticsOfTimes = function getMassStatisticsOfTimes(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/group/command/statisticsOfTimes',
    method: 'get',
    params: params
  });
};
// 开停机次数图
var getStartDownSta = function getStartDownSta(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/command/statisticsOfVoltageLevel',
    method: 'get',
    params: params
  });
};
// 开停机统计(电厂)
function reqStartDownByPlant(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/command/statisticsOfPlant',
    method: 'get',
    params: params
  });
}
// 设备开停机统计(日)
var reqStartDownOfDay = function reqStartDownOfDay(params) {
  return request({
    url: '/nus/command/equipmentStatisticsOfDay',
    method: 'get',
    params: params
  });
};

// 设备开停机统计(周)
var reqStartDownOfWeek = function reqStartDownOfWeek(params) {
  return request({
    url: '/nus/command/equipmentStatisticsOfWeek',
    method: 'get',
    params: params
  });
};

// 设备开停机统计(月)
var reqStartDownOfMonth = function reqStartDownOfMonth(params) {
  return request({
    url: '/nus/command/equipmentStatisticsOfMonth',
    method: 'get',
    params: params
  });
};

// 设备开停机统计(周)
var reqStartDownOfYear = function reqStartDownOfYear(params) {
  return request({
    url: '/nus/command/equipmentStatisticsOfYear',
    method: 'get',
    params: params
  });
};

/***/ }),

/***/ 94816:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kd: function() { return /* binding */ reqAddOpenClose; },
/* harmony export */   dt: function() { return /* binding */ reqGetOpenCloseList; },
/* harmony export */   wZ: function() { return /* binding */ reqApproval; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);
/*
 * @Author: zhongPj
 * @Date: 2024-08-23 10:05:21
 * @LastEditTime: 2024-08-26 11:22:58
 * @Description: file content
 */


// 开停机新增
var reqAddOpenClose = function reqAddOpenClose(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/command',
    method: 'post',
    data: data
  });
};

// 开停机列表
var reqGetOpenCloseList = function reqGetOpenCloseList(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/command/list',
    method: 'get',
    params: params
  });
};

// 审批
var reqApproval = function reqApproval(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: '/nus/command',
    method: 'put',
    data: data
  });
};

/***/ })

}]);