(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[8181],{2029:function(n,t,e){var i=e(94505);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);var r=e(69333).A;r("019b86e4",i,!0,{sourceMap:!1,shadowMode:!1})},89533:function(n,t,e){var i=e(92137);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);var r=e(69333).A;r("2ad53d00",i,!0,{sourceMap:!1,shadowMode:!1})},21800:function(n,t,e){"use strict";var i;e.r(t),e.d(t,{default:function(){return y}});var r,a,o,c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("Search",{attrs:{placeholder:"搜索人员姓名"},on:{search:function(t){arguments[0]=t=n.$handleEvent(t),n.search.apply(void 0,arguments)}}}),e("Picker",{attrs:{pickerList:n.pickerList,pickerCurrentIndex:n.pickerCurrentIndex},on:{"update:pickerCurrentIndex":function(t){arguments[0]=t=n.$handleEvent(t),n.pickerCurrentIndex=t},"update:picker-current-index":function(t){arguments[0]=t=n.$handleEvent(t),n.pickerCurrentIndex=t}}}),e("v-uni-view",{staticClass:"wrap"},[e("PersonInformation")],1)],1)},s=[],d=e(41427),l=e(20599),u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ListViewVertical",{staticClass:"container",attrs:{cardList:n.cardList},on:{cardClick:function(t){arguments[0]=t=n.$handleEvent(t),n.cardClick.apply(void 0,arguments)}},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.content;return[e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:i.url,mode:"scaleToFill"}})],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-text",{staticClass:"title"},[n._v(n._s(i.name))]),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont icon-xingbie u-font-24 u-m-r-10",staticStyle:{color:"#32c3ba"}}),e("v-uni-text",[n._v("性别："+n._s(i.sex))])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont icon-age u-font-24 u-m-r-10",staticStyle:{color:"#6085ff"}}),e("v-uni-text",[n._v("岗位："+n._s(i.post))])],1),e("v-uni-view",[e("v-uni-text",{staticClass:"iconfont icon-zhicheng u-font-24 u-m-r-10",staticStyle:{color:"#ff4949"}}),e("v-uni-text",[n._v("职称："+n._s(i.title))])],1)],1)],1)],1)]}}])})},f=[],v=e(57746),p=e(43859)["A"],h={components:{ListViewVertical:v.A},data:function(){return{cardList:[]}},computed:{},methods:{search:function(n){p.log("搜索值为"+n+"的内容")},cardClick:function(n){this.$tab.navigateTo("/pages/user/info/detail/index?id=".concat(n.id))}},watch:{},onLoad:function(n){uni.setNavigationBarTitle({title:"".concat(n.title)})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){}},w=h,x=(e(2029),e(18535)),g=(0,x.A)(w,u,f,!1,null,"f1bd52ee",null,!1,r,a),m=g.exports,C=e(43859)["A"],b={components:{Search:d.A,Picker:l.A,PersonInformation:m},data:function(){return{pickerList:["宜昌供电公司","襄阳供电公司","荆州供电公司","十堰供电公司"],pickerCurrentIndex:0}},computed:{},methods:{search:function(n){C.log("搜索值为"+n+"的内容")}},watch:{},onLoad:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){}},_=b,k=(e(89533),(0,x.A)(_,c,s,!1,null,"c0a5e262",null,!1,i,o)),y=k.exports},94505:function(n,t,e){"use strict";e.r(t);var i=e(45522),r=e.n(i),a=e(67643),o=e.n(a),c=o()(r());c.push([n.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-f1bd52ee]{height:100%;display:flex;flex-direction:column}.container .wrap[data-v-f1bd52ee]{display:flex;align-items:center}.container .wrap .left[data-v-f1bd52ee]{width:%?80?%;height:%?80?%;border-radius:%?40?%;overflow:hidden;margin-right:%?20?%}.container .wrap .left uni-image[data-v-f1bd52ee]{width:%?80?%;height:%?80?%}.container .wrap .right[data-v-f1bd52ee]{flex:1}.container .wrap .right .title[data-v-f1bd52ee]{font-size:%?30?%;font-weight:700;color:#333}.container .wrap .right .bottom[data-v-f1bd52ee]{display:flex;justify-content:space-between;align-items:center}.container .wrap .right .bottom uni-view[data-v-f1bd52ee]{font-size:%?26?%;color:#666}',""]),t["default"]=c},92137:function(n,t,e){"use strict";e.r(t);var i=e(45522),r=e.n(i),a=e(67643),o=e.n(a),c=o()(r());c.push([n.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-c0a5e262],\r\n#app[data-v-c0a5e262]{font-size:%?28?%;height:100%;overflow:hidden;color:#000}.container[data-v-c0a5e262]{height:100%;display:flex;flex-direction:column}.container .wrap[data-v-c0a5e262]{flex:1;overflow:hidden}',""]),t["default"]=c}}]);