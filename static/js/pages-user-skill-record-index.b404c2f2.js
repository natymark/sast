(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[7952],{42971:function(t,a,e){var n=e(33247);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var r=e(69333).A;r("015b7e3f",n,!0,{sourceMap:!1,shadowMode:!1})},98153:function(t,a,e){var n=e(59309);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var r=e(69333).A;r("49bca916",n,!0,{sourceMap:!1,shadowMode:!1})},58858:function(t,a,e){var n=e(67614);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var r=e(69333).A;r("77ad1f14",n,!0,{sourceMap:!1,shadowMode:!1})},26415:function(t,a,e){"use strict";e.d(a,{A:function(){return l}});var n,r={uButton:e(97771).A},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[t._e(),e("u-button",{class:t.isPlain?"plain":"",attrs:{disabled:t.disabled,type:t.isPlain?"default":"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[t._v(t._s(t.btnName))])],1)},i=[],c={name:"MButton",props:{btnName:String,isPlain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},methods:{click:function(){this.$emit("confirm")}}},d=c,s=(e(42971),e(18535)),f=(0,s.A)(d,o,i,!1,null,"38d4add5",null,!1,r,n),l=f.exports},69354:function(t,a,e){"use strict";var n;e.r(a),e.d(a,{default:function(){return g}});var r,o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"examRecord"},[e("ListViewFixed",{ref:"mescrollItem",attrs:{list:t.goods},on:{handlerUp:function(a){arguments[0]=a=t.$handleEvent(a),t.handlerUp.apply(void 0,arguments)}},scopedSlots:t._u([{key:"content",fn:function(a){var n=a.content;a.index;return[e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"titleWrap u-m-b-10"},[e("v-uni-text",{staticClass:"title"},[t._v(t._s(t.$store.getters.name))]),t.hasTime?e("v-uni-text",{staticClass:"time"},[t._v(t._s(n.time))]):t._e()],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:t.imgUrl+"/"+t.formatScore(n.totalScore)+".png",mode:"scaleToFill"}}),e("v-uni-view",{staticClass:"averageScore"},[t._v(t._s(n.totalScore)),e("v-uni-view",{staticClass:"min"},[e("v-uni-text",{staticClass:"txt"},[t._v("分")])],1)],1)],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"line1"},[e("v-uni-view",[t._v("考试名称："),e("v-uni-text",[t._v(t._s(n.examName))])],1)],1),e("v-uni-view",{staticClass:"line2"},[e("v-uni-view",{staticClass:"c1"},[e("v-uni-image",{attrs:{src:t.imgUrl+"/excellent_mini.png",mode:"scaleToFill"}}),e("v-uni-view",[t._v("总分"),e("v-uni-text",[t._v(t._s(n.totalScore))]),t._v("分")],1)],1)],1)],1)],1)],1)]}},{key:"footer",fn:function(){return[e("v-uni-view",{staticClass:"footerBtn"},[e("MButton",{attrs:{btnName:"开始考试"},on:{confirm:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}})],1)]},proxy:!0}])})],1)},i=[],c=(e(28706),e(2892),e(20782)),d=e(641),s=e(26415),f=e(99801),l=(e(81055),e(43859)["A"]),u={components:{ListViewFixed:d.A,MButton:s.A},props:{hasTime:{type:Boolean,default:!1}},mixins:[c.A],data:function(){return{goods:[]}},computed:{imgUrl:function(){return e(27358).imgUrl}},methods:{confirm:function(){this.$tab.navigateTo("/pages/exam/index?")},formatScore:function(t){return l.log(t),Number(t)>=80?"excellent":Number(t)>=60&&Number(t)<80?"good":Number(t)<60?"ordinary":void 0},resetList:function(){this.$refs.mescrollItem.mescroll.resetUpScroll(),this.$refs.mescrollItem.mescroll.scrollTo(0,0)},handlerUp:function(t){var a=this,e=t.page;t.that;(0,f.qY)({pageNo:e.num,pageSize:e.size}).then((function(t){var n=t.data;a.$refs.mescrollItem.mescroll.endByPage(n.data.length,n.total),1==e.num&&(a.goods=[]),a.goods=a.goods.concat(n.data)})).catch((function(){a.$refs.mescrollItem.mescroll.endErr()}))}},watch:{},created:function(){},onLoad:function(){},onReady:function(){},onShow:function(){this.canReset&&this.resetList(),this.canReset=!0},onHide:function(){},onUnload:function(){}},m=u,p=(e(98153),e(58858),e(18535)),v=(0,p.A)(m,o,i,!1,null,"faf2d9fc",null,!1,n,r),g=v.exports},33247:function(t,a,e){"use strict";e.r(a);var n=e(45522),r=e.n(n),o=e(67643),i=e.n(o),c=i()(r());c.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-38d4add5]{width:100%;padding:0 %?25?%}.container uni-button[data-v-38d4add5]{width:100%;background-color:#32c3ba;\r\n  /* border: 1rpx solid  #00a096; */color:#fff;font-size:%?32?%}.container uni-button.plain[data-v-38d4add5]{background-color:initial;background:none;color:#32c3ba}.container[data-v-38d4add5]  .u-primary-hover{background-color:#00a096!important}.container[data-v-38d4add5]  uni-button,\r\n.container[data-v-38d4add5]  uni-button:after{border-radius:0!important}.container[data-v-38d4add5]  .u-btn--primary--disabled{background-color:#a2eae6!important}',""]),a["default"]=c},59309:function(t,a,e){"use strict";e.r(a);var n=e(45522),r=e.n(n),o=e(67643),i=e.n(o),c=i()(r());c.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-faf2d9fc]{height:auto!important;overflow:auto!important}',""]),a["default"]=c},67614:function(t,a,e){"use strict";e.r(a);var n=e(45522),r=e.n(n),o=e(67643),i=e.n(o),c=i()(r());c.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.examRecord[data-v-faf2d9fc]{position:relative}.examRecord .wrap[data-v-faf2d9fc]{\r\n  /* height: 100%; */display:flex;flex-direction:column}.examRecord .wrap .titleWrap[data-v-faf2d9fc]{display:flex;justify-content:space-between;align-items:center}.examRecord .wrap .titleWrap .title[data-v-faf2d9fc]{font-size:%?30?%;color:#000;font-weight:700}.examRecord .wrap .bottom[data-v-faf2d9fc]{display:flex;align-items:center}.examRecord .wrap .bottom uni-text[data-v-faf2d9fc]:not(.txt){color:#00a096;font-size:%?32?%;font-weight:700;margin:0 %?8?%}.examRecord .wrap .bottom .left[data-v-faf2d9fc]{width:%?120?%;height:%?120?%;margin-right:%?20?%;position:relative}.examRecord .wrap .bottom .left .averageScore[data-v-faf2d9fc]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:%?32?%;font-weight:700;display:flex}.examRecord .wrap .bottom .left .averageScore .min[data-v-faf2d9fc]{font-size:%?16?%;font-weight:400;position:relative}.examRecord .wrap .bottom .left .averageScore .min .txt[data-v-faf2d9fc]{position:absolute;top:50%;-webkit-transform:translateY(-25%);transform:translateY(-25%)}.examRecord .wrap .bottom .left uni-image[data-v-faf2d9fc]{width:%?120?%;height:%?120?%}.examRecord .wrap .bottom .right[data-v-faf2d9fc]{display:flex;flex-direction:column;font-size:%?26?%;color:#000}.examRecord .wrap .bottom .right .line1[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line2[data-v-faf2d9fc]{display:flex;align-items:center;-webkit-column-gap:%?14?%;column-gap:%?14?%}.examRecord .wrap .bottom .right .line1 .c1[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line1 .c2[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line1 .c3[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line2 .c1[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line2 .c2[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line2 .c3[data-v-faf2d9fc]{display:flex;align-items:center}.examRecord .wrap .bottom .right .line1 .c1 uni-text[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line1 .c2 uni-text[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line1 .c3 uni-text[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line2 .c1 uni-text[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line2 .c2 uni-text[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line2 .c3 uni-text[data-v-faf2d9fc]{font-size:%?26?%}.examRecord .wrap .bottom .right .line1 uni-image[data-v-faf2d9fc],\r\n.examRecord .wrap .bottom .right .line2 uni-image[data-v-faf2d9fc]{width:%?26?%;height:%?26?%}.examRecord .footerBtn[data-v-faf2d9fc]{padding:%?22?%}',""]),a["default"]=c},99801:function(t,a,e){"use strict";e.d(a,{G8:function(){return i},Hh:function(){return o},qY:function(){return s},uG:function(){return c},wB:function(){return d},w_:function(){return f}});var n=e(41325),r={load:"/nus/exam/getExamInfo",submit:""},o=function(t){return(0,n.A)({url:r.load,method:"post",data:t})},i=function(t){return(0,n.A)({url:"/nus/exam/getExamInfoById",method:"get",params:t})},c=function(t){return(0,n.A)({url:"/nus/bank/getQuestionBank",method:"get",params:t})},d=function(t){return(0,n.A)({url:"/nus/bank/getQuestionByBank",method:"get",params:t})},s=function(t){return(0,n.A)({url:"/nus/record/getMyGrade",method:"get",params:t})},f=function(t){return(0,n.A)({url:"/nus/record/addExamRecord",method:"post",data:t})}}}]);