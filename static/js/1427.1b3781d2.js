(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[1427],{48917:function(e,a,n){var t=n(34561);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var r=n(69333).A;r("192c132a",t,!0,{sourceMap:!1,shadowMode:!1})},1189:function(e,a,n){var t=n(26793);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var r=n(69333).A;r("65a48087",t,!0,{sourceMap:!1,shadowMode:!1})},35946:function(e,a,n){"use strict";n.d(a,{A:function(){return y}});var t,r={uniIcons:n(84256).A},c=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-uni-view",{staticClass:"uni-searchbar"},[n("v-uni-view",{staticClass:"uni-searchbar__box",style:{borderRadius:e.radius+"px",backgroundColor:e.bgColor},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.searchClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-searchbar__box-icon-search"},[e._t("searchIcon",[n("uni-icons",{attrs:{color:"#c0c4cc",size:"18",type:"search"}})])],2),e.show||e.searchVal?n("v-uni-input",{staticClass:"uni-searchbar__box-search-input",style:{color:e.textColor},attrs:{focus:e.showSync,disabled:e.readonly,placeholder:e.placeholderText,maxlength:e.maxlength,"confirm-type":"search",type:"text"},on:{confirm:function(a){arguments[0]=a=e.$handleEvent(a),e.confirm.apply(void 0,arguments)},blur:function(a){arguments[0]=a=e.$handleEvent(a),e.blur.apply(void 0,arguments)},focus:function(a){arguments[0]=a=e.$handleEvent(a),e.emitFocus.apply(void 0,arguments)}},model:{value:e.searchVal,callback:function(a){e.searchVal=a},expression:"searchVal"}}):n("v-uni-text",{staticClass:"uni-searchbar__text-placeholder"},[e._v(e._s(e.placeholder))]),e.show&&("always"===e.clearButton||"auto"===e.clearButton&&""!==e.searchVal)&&!e.readonly?n("v-uni-view",{staticClass:"uni-searchbar__box-icon-clear",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.clear.apply(void 0,arguments)}}},[e._t("clearIcon",[n("uni-icons",{attrs:{color:"#c0c4cc",size:"20",type:"clear"}})])],2):e._e()],1),"always"===e.cancelButton||e.show&&"auto"===e.cancelButton?n("v-uni-text",{staticClass:"uni-searchbar__cancel",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelTextI18n))]):e._e()],1)},i=[],o=(n(2892),n(2660)),l=JSON.parse('{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"}'),s=JSON.parse('{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"请输入搜索内容"}'),u=JSON.parse('{"uni-search-bar.cancel":"取消","uni-search-bar.placeholder":"請輸入搜索內容"}'),h={en:l,"zh-Hans":s,"zh-Hant":u},d=(0,o.Vq)(h),f=d.t,p={name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:""},bgColor:{type:String,default:"#F8F8F8"},textColor:{type:String,default:"#000000"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:function(){return{show:!1,showSync:!1,searchVal:""}},computed:{cancelTextI18n:function(){return this.cancelText||f("uni-search-bar.cancel")},placeholderText:function(){return this.placeholder||f("uni-search-bar.placeholder")}},watch:{value:{immediate:!0,handler:function(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler:function(e){var a=this;if(e){if(this.readonly)return;this.show=!0,this.$nextTick((function(){a.showSync=!0}))}}},searchVal:function(e,a){this.$emit("input",e)}},methods:{searchClick:function(){var e=this;this.readonly||this.show||(this.show=!0,this.$nextTick((function(){e.showSync=!0})))},clear:function(){var e=this;this.searchVal="",this.$nextTick((function(){e.$emit("clear",{value:""})}))},cancel:function(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,uni.hideKeyboard())},confirm:function(){uni.hideKeyboard(),this.$emit("confirm",{value:this.searchVal})},blur:function(){uni.hideKeyboard(),this.$emit("blur",{value:this.searchVal})},emitFocus:function(e){this.$emit("focus",e.detail)}}},v=p,b=(n(48917),n(18535)),x=(0,b.A)(v,c,i,!1,null,"05c4fa75",null,!1,r,t),y=x.exports},41427:function(e,a,n){"use strict";n.d(a,{A:function(){return d}});var t,r={uniSearchBar:n(35946).A},c=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("uni-search-bar",{staticClass:"search",attrs:{focus:!1,cancelButton:e.cancelButton,placeholder:e.placeholder,bgColor:"#fff"},on:{blur:function(a){arguments[0]=a=e.$handleEvent(a),e.blur.apply(void 0,arguments)},focus:function(a){arguments[0]=a=e.$handleEvent(a),e.focus.apply(void 0,arguments)},input:function(a){arguments[0]=a=e.$handleEvent(a),e.input.apply(void 0,arguments)},cancel:function(a){arguments[0]=a=e.$handleEvent(a),e.cancel.apply(void 0,arguments)},clear:function(a){arguments[0]=a=e.$handleEvent(a),e.clear.apply(void 0,arguments)}},model:{value:e.searchValue,callback:function(a){e.searchValue=a},expression:"searchValue"}})},i=[],o=n(43859)["A"],l={name:"Search",props:{cancelButton:{type:String,default:"none"},placeholder:{type:String,default:"请输入搜索内容"}},data:function(){return{searchValue:""}},methods:{search:function(e){this.$emit("search",e.value)},input:function(e){o.log("----input:",e)},clear:function(e){this.$emit("search",this.searchValue)},reset:function(){this.searchValue=""},blur:function(e){this.$emit("search",this.searchValue)},focus:function(e){},cancel:function(e){uni.showToast({title:"点击取消，输入值为："+e.value,icon:"none"})}},onBackPress:function(){}},s=l,u=(n(1189),n(18535)),h=(0,u.A)(s,c,i,!1,null,"38844cce",null,!1,r,t),d=h.exports},34561:function(e,a,n){"use strict";n.r(a);var t=n(45522),r=n.n(t),c=n(67643),i=n.n(c),o=i()(r());o.push([e.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-searchbar[data-v-05c4fa75]{display:flex;flex-direction:row;position:relative;padding:10px}.uni-searchbar__box[data-v-05c4fa75]{display:flex;box-sizing:border-box;justify-content:left;overflow:hidden;position:relative;flex:1;flex-direction:row;align-items:center;height:36px;padding:5px 8px 5px 0}.uni-searchbar__box-icon-search[data-v-05c4fa75]{display:flex;flex-direction:row;padding:0 8px;justify-content:center;align-items:center;color:#b3b3b3}.uni-searchbar__box-search-input[data-v-05c4fa75]{flex:1;font-size:14px;color:#333;margin-left:5px;margin-top:1px;background-color:inherit}.uni-searchbar__box-icon-clear[data-v-05c4fa75]{align-items:center;line-height:24px;padding-left:8px;cursor:pointer}.uni-searchbar__text-placeholder[data-v-05c4fa75]{font-size:14px;color:#b3b3b3;margin-left:5px;text-align:left}.uni-searchbar__cancel[data-v-05c4fa75]{padding-left:10px;line-height:36px;font-size:14px;color:#333;cursor:pointer}',""]),a["default"]=o},26793:function(e,a,n){"use strict";n.r(a);var t=n(45522),r=n.n(t),c=n(67643),i=n.n(c),o=i()(r());o.push([e.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.search[data-v-38844cce]{background-color:#fff;text-align:left}.search[data-v-38844cce]  .uni-searchbar__box{\r\n  /* border-radius: 34rpx!important; */height:%?76?%;border:%?2?% solid #00a096}.search[data-v-38844cce]  .uni-searchbar__text-placeholder, .search .uni-input-placeholder[data-v-38844cce]{font-size:%?26?%}.search[data-v-38844cce]  .uni-icons.uniui-search{font-size:%?42?%!important}.search[data-v-38844cce]  .uniui-search:before{color:#00a096}',""]),a["default"]=o}}]);