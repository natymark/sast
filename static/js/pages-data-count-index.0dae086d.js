(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[6815],{69145:function(t,e,n){var a=n(51341);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var r=n(69333).A;r("7c0ed414",a,!0,{sourceMap:!1,shadowMode:!1})},81098:function(t,e,n){var a=n(96206);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var r=n(69333).A;r("aa7f839a",a,!0,{sourceMap:!1,shadowMode:!1})},79612:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return V}});var a,r={uIcon:n(15614).A},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"generateElectricity"},[n("ListViewFixed",{ref:"mescrollItem",attrs:{list:t.list,stickyHeader:!0},on:{handlerUp:function(e){arguments[0]=e=t.$handleEvent(e),t.handlerUp.apply(void 0,arguments)}},scopedSlots:t._u([{key:"header",fn:function(){return[n("v-uni-view",{staticClass:"headerWrap"},[n("v-uni-view",{staticClass:"tabsWrap"},[n("VTabs",{staticClass:"vTabs",attrs:{tabs:t.tabs,field:"name",pills:!1,activeColor:"#32C3BA",lineColor:"#32C3BA",bgColor:"#fff",lineHeight:"5rpx",zIndex:996},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1),n("v-uni-view",{staticClass:"timeWrap"},[n("v-uni-view",{staticClass:"txtWrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"txt"},[t._v(t._s(t.currentSelect))]),n("u-icon",{attrs:{name:t.show?"arrow-up-fill":"arrow-down-fill",color:"#686868",size:"16"}})],1),n("MTime",{attrs:{dateMaker:t.dateMaker},on:{MTimeChange:function(e){arguments[0]=e=t.$handleEvent(e),t.MTimeChange.apply(void 0,arguments)}}})],1)],1)]},proxy:!0},{key:"bodyHeader",fn:function(){return[n("v-uni-view",{staticClass:"bodyHeaderWrap"},[n("MCharts",{attrs:{optionData:t.optionData,useDefaultStyle:!1}})],1)]},proxy:!0},{key:"stickyHeader",fn:function(){return[n("v-uni-view",{staticClass:"stickyHeaderWrap"},[n("v-uni-view",{staticClass:"stickyHeaderItem"},[n("v-uni-text",{staticClass:"t1"},[t._v("电厂名称")]),n("v-uni-text",{staticClass:"t2"},[t._v("最大/最小值")]),n("v-uni-text",{staticClass:"t3"},[t._v("时间")])],1)],1)]},proxy:!0},{key:"content",fn:function(e){var a=e.content;e.index;return[n("v-uni-view",{staticClass:"contentWrap"},[n("v-uni-view",{staticClass:"contentItem"},[n("v-uni-text",{staticClass:"t1"},[t._v(t._s(a.plantName))]),n("v-uni-view",{staticClass:"t2"},[n("v-uni-text",{staticClass:"max"},[t._v(t._s(a.max))]),n("v-uni-text",{staticClass:"min"},[t._v(t._s(a.min))])],1),n("v-uni-text",{staticClass:"t3"},[t._v(t._s(a.maxTime)),n("br"),t._v(t._s(a.minTime))])],1)],1)]}}])}),n("TuiPicker",{attrs:{pickerData:t.pickerObj,show:t.show,showChangeButton:!0,changeButtonData:["省","市","区"],layer:t.layer,textField:"name",valueField:"id"},on:{"update:layer":function(e){arguments[0]=e=t.$handleEvent(e),t.layer=e},hide:function(e){arguments[0]=e=t.$handleEvent(e),t.hide.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickerChange.apply(void 0,arguments)}}})],1)},c=[],l=n(2775),s=n(42727),o=n(50575),u=n(65361),d=(n(28706),n(34782),n(2892),n(27495),n(71761),n(68156),n(641)),p=n(20782),f=n(3800),h=n(41427),v=n(74378),m=n(9305),g=n(97435),y=n(77724),x=n(10591),w=n(63065),b=n(51729),k=(n(62062),n(72712),n(26099),n(51475)),A=n(76962),C=(n(81055),n(23500),n(43859)["A"]),M=[{name:"调度口径(地区)",icon:"circle",value:169826.56},{name:"自供区(地区)",icon:"circle",value:.68},{name:"抽蓄电站(地区)",icon:"circle",value:2544.3},{name:"地区省外受入(地区)",icon:"circle",value:98.28},{name:"0.4V电源(地区)",icon:"circle",value:1354.23}],D=(M.reduce((function(t,e){return t+e.value}),0),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return C.log(t,"optionData",e,"totalValue"),{id:"levelOption",title:{text:"{title|总发电量(MW)：}{subtitle|"+e.toFixed(2)+"}",left:"left",textStyle:{rich:{title:{fontSize:14,fontWeight:"bold",padding:[10,0,0,10]},subtitle:{fontSize:12,fontWeight:"normal",padding:[10,0,0,0],color:"#999"}}}},tooltip:{trigger:"item",formatter:"{b}:{d}%",confine:!0,position:function(t,e,n,a,r){var i=r.contentSize[0],c=r.contentSize[1],l=Math.min(t[0],r.viewSize[0]-i),s=Math.min(t[1],r.viewSize[1]-c);return l<20&&(l=20),[l,s]}},legend:{type:"scroll",orient:"vertical",right:10,top:"center",selectedMode:"multiple",data:t,textStyle:{fontSize:13,align:"right",vertical:"middle",rich:{name:{},value:{align:"right"}}},formatter:function(e){var n;return t.forEach((function(t){t.name===e&&(n=t)})),"{name|".concat(e,"}: {value|").concat(n.value,"}")}},series:[{name:"姓名",type:"pie",radius:"55%",center:["20%","50%"],label:{show:!1},labelLine:{show:!1},data:t,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}),S=[{name:"调度口径(地区)",icon:"circle",value:169826.56},{name:"自供区(地区)",icon:"circle",value:.68},{name:"抽蓄电站(地区)",icon:"circle",value:2544.3},{name:"地区省外受入(地区)",icon:"circle",value:98.28},{name:"0.4V电源(地区)",icon:"circle",value:1354.23}],E=(S.reduce((function(t,e){return t+e.value}),0),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{id:"levelOption",title:{text:"{title|总用电量：}{subtitle|"+e.toFixed(2)+"}",left:"left",textStyle:{rich:{title:{fontSize:14,fontWeight:"bold",padding:[10,0,0,10]},subtitle:{fontSize:12,fontWeight:"normal",padding:[10,0,0,0],color:"#999"}}}},tooltip:{trigger:"item",formatter:"{b}:{d}%",confine:!0,position:function(t,e,n,a,r){var i=r.contentSize[0],c=r.contentSize[1],l=Math.min(t[0],r.viewSize[0]-i),s=Math.min(t[1],r.viewSize[1]-c);return l<20&&(l=20),[l,s]}},legend:{type:"scroll",orient:"vertical",right:10,top:"center",selectedMode:"multiple",data:t,textStyle:{fontSize:13,align:"right",vertical:"middle",rich:{name:{},value:{align:"right"}}},formatter:function(e){var n;return t.forEach((function(t){t.name===e&&(n=t)})),"{name|".concat(e,"}: {value|").concat(n.value,"}")}},series:[{name:"姓名",type:"pie",radius:"55%",center:["20%","50%"],label:{show:!1},labelLine:{show:!1},data:t,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}),I=n(43859)["A"],T=["current"],W=function(){function t(){(0,w.A)(this,t),this.optionData=[],this.totalValue=0,this.plantsTree=null,this.list=[],this.current=0,this.dateMaker="day",this.filedMap={title:"integralValue",max:"maxIntegralValue",min:"minIntegralValue",maxTime:"maxDate",minTime:"minDate",plantName:"plantName",plantId:"plantId",name:"plantName",value:"integralValue"}}return(0,b.A)(t,[{key:"getPlantsTree",value:function(){var t=(0,o.A)((0,s.A)().mark((function t(){return(0,s.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.plantsTree){t.next=11;break}return t.prev=1,t.next=4,(0,k.XX)();case 4:this.plantsTree=t.sent,t.next=11;break;case 7:throw t.prev=7,t.t0=t["catch"](1),I.error("Failed to get plants tree:",t.t0),t.t0;case 11:return t.abrupt("return",this.plantsTree);case 12:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"getDayList",value:function(){var t=(0,o.A)((0,s.A)().mark((function t(e){return(0,s.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,A.$9)(e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t["catch"](0),I.error("Failed to get day list:",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getDayConsumeList",value:function(){var t=(0,o.A)((0,s.A)().mark((function t(e){return(0,s.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,A.zT)(e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t["catch"](0),I.error("Failed to get day consume list:",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getYearConsumeList",value:function(){var t=(0,o.A)((0,s.A)().mark((function t(e){return(0,s.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,A.Mk)(e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t["catch"](0),I.error("Failed to get year consume list:",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getYearList",value:function(){var t=(0,o.A)((0,s.A)().mark((function t(e){return(0,s.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,A.GE)(e);case 3:return t.abrupt("return",t.sent);case 6:throw t.prev=6,t.t0=t["catch"](0),I.error("Failed to get year list:",t.t0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"initPlants",value:function(){var t=(0,o.A)((0,s.A)().mark((function t(){var e;return(0,s.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getPlantsTree();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadData",value:function(){var t=(0,o.A)((0,s.A)().mark((function t(e){var n,a,r,i,c,l,o,u,d,p,f,h;return(0,s.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.current,a=(0,x.A)(e,T),this.current=n,r=[],i=[],t.t0=n,t.next=0===t.t0?7:1===t.t0?20:34;break;case 7:return t.next=9,this.getDayList(a);case 9:return c=t.sent,l=c.data,t.next=13,this.getYearList(a);case 13:return o=t.sent,u=o.rows,r=this.formatListData(l),i=this.formatListData(u),this.totalValue=r.reduce((function(t,e){return t+e.value}),0),this.optionData=D(r,this.totalValue),t.abrupt("break",34);case 20:return t.next=22,this.getDayConsumeList(a);case 22:return d=t.sent,p=d.data,t.next=26,this.getYearConsumeList(a);case 26:return f=t.sent,h=f.rows,r=this.formatListData(p),i=this.formatListData(h),I.log(r,i,"s2"),this.totalValue=r.reduce((function(t,e){return t+e.value}),0),this.optionData=E(r,this.totalValue),t.abrupt("break",34);case 34:return t.abrupt("return",{list:i,optionData:this.optionData});case 35:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"formatListData",value:function(t){var e=this;return t.map((function(t){return{max:t[e.filedMap.max],min:t[e.filedMap.min],maxTime:t[e.filedMap.maxTime],minTime:t[e.filedMap.minTime],plantName:t[e.filedMap.plantName],plantId:t[e.filedMap.plantId],name:t[e.filedMap.name],value:t[e.filedMap.value]}}))}}])}(),P=W,_=n(43859)["A"],z=(0,l.A)((0,l.A)((0,l.A)((0,l.A)((0,l.A)((0,l.A)({components:{ListViewFixed:d.A,MTime:f.A,Search:h.A,MPicker:v.A,MCharts:m.A,VTabs:y.A,TuiPicker:g.A},mixins:[p.A],data:function(){return{list:[],layer:2,dateMaker:"day",pickerObj:[],cardListTitle:"发电量",optionData:{},totalValue:0,tabs:[{name:"发电统计",id:0},{name:"用电统计",id:1}],current:0,currentSelect:"",show:!1,isInitPlant:!1,currentPlant:null,queryParams:{date:"",region:""}}},computed:{},created:function(){},methods:{handleClick:function(){this.show=!0},hide:function(){this.show=!1},change:function(t){this.current=t},transformDate:function(t){var e=t.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/).slice(1),n=(0,u.A)(e,3),a=n[0],r=n[1],i=n[2];return"".concat(a,"-").concat(r.padStart(2,"0"),"-").concat(i.padStart(2,"0"))},MTimeChange:function(t){var e=this.transformDate(t);this.$set(this.queryParams,"date",e)},pickerChange:function(t){_.log("pickerObj",t),this.currentPlant=t.value[this.layer-1],this.currentSelect=t.text[this.layer-1],this.$set(this.queryParams,"region",t.value[this.layer-1])},handlerUp:function(t){var e=this;return(0,o.A)((0,s.A)().mark((function n(){return(0,s.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,e.isInitPlant){n.next=8;break}return n.next=4,e.initPlants();case 4:return n.next=6,e.loadData(t);case 6:n.next=10;break;case 8:return n.next=10,e.loadData(t);case 10:n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),e.$refs.mescrollItem.mescroll.endErr();case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))()},initPlants:function(){var t=this;return(0,o.A)((0,s.A)().mark((function e(){var n;return(0,s.A)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.CountFun.initPlants();case 3:n=e.sent,t.pickerObj=n.data,e.t0=t.layer,e.next=1===e.t0?8:2===e.t0?10:3===e.t0?12:14;break;case 8:return t.currentPlant=n.data[0],e.abrupt("break",15);case 10:return t.currentPlant=n.data[0].children[0],e.abrupt("break",15);case 12:return t.currentPlant=n.data[0].children[0].children[0],e.abrupt("break",15);case 14:return e.abrupt("break",15);case 15:t.currentSelect=t.currentPlant.name,t.queryParams.region=Number(t.currentPlant.id),t.isInitPlant=!0,e.next=23;break;case 20:e.prev=20,e.t1=e["catch"](0),_.error("Failed to initialize plants:",e.t1);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))()},loadData:function(t){var e=this;return(0,o.A)((0,s.A)().mark((function t(){var n,a,r;return(0,s.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.CountFun.loadData({current:e.current,region:Number(e.queryParams.region),date:"2024-09-01"});case 3:n=t.sent,a=n.optionData,r=n.list,e.optionData=a,e.list=r,e.$refs.mescrollItem.mescroll.endByPage(1,1),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),_.error("Failed to load data:",t.t0),e.$refs.mescrollItem.mescroll.endErr();case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()}},watch:{current:{handler:function(t,e){this.$refs.mescrollItem.mescroll.resetUpScroll()},deep:!0},queryParams:{handler:function(t,e){var n=t.date,a=t.region;n&&a&&this.$refs.mescrollItem.mescroll.resetUpScroll()},deep:!0}}},"created",(function(){})),"onLoad",(function(){this.CountFun=new P})),"onReady",(function(){})),"onShow",(function(){})),"onHide",(function(){})),"onUnload",(function(){})),H=z,L=(n(69145),n(81098),n(18535)),F=(0,L.A)(H,i,c,!1,null,"9225dd64",null,!1,r,a),V=F.exports},51341:function(t,e,n){"use strict";n.r(e);var a=n(45522),r=n.n(a),i=n(67643),c=n.n(i),l=c()(r());l.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-9225dd64]{height:auto!important;overflow:auto!important}',""]),e["default"]=l},96206:function(t,e,n){"use strict";n.r(e);var a=n(45522),r=n.n(a),i=n(67643),c=n.n(i),l=c()(r());l.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.generateElectricity .headerWrap[data-v-9225dd64]{display:flex;flex-direction:column;justify-content:center;background-color:#f1f1f1}.generateElectricity .headerWrap .timeWrap[data-v-9225dd64]{background-color:#fff;padding:%?10?% %?40?%;margin-top:%?10?%;display:flex;justify-content:space-between}.generateElectricity .bodyHeaderWrap[data-v-9225dd64]{display:flex;flex-direction:column;align-items:center;padding:%?10?% %?28?% 0}.generateElectricity .bodyHeaderWrap .bodyHeaderTitle[data-v-9225dd64]{margin-right:auto}.generateElectricity .stickyHeaderWrap[data-v-9225dd64]{display:flex;flex-direction:column;align-items:center;padding:%?10?% %?28?% 0;background-color:#f1f1f1}.generateElectricity .stickyHeaderWrap .stickyHeaderItem[data-v-9225dd64]{display:flex;justify-content:space-between;align-items:center;padding:%?20?% %?40?%;width:100%;color:#855f12;border:%?1?% solid rgba(255,178,23,.2);border-radius:%?10?%;background:linear-gradient(103deg,rgba(255,178,23,.12) 7%,hsla(40,70%,66%,.09) 59%,hsla(0,0%,100%,0) 100%,hsla(0,0%,100%,0) 0)}.generateElectricity .stickyHeaderWrap .stickyHeaderItem uni-text.t2[data-v-9225dd64]{flex:1;text-align:center}.generateElectricity .stickyHeaderWrap .stickyHeaderItem uni-text.t1[data-v-9225dd64]{flex:1;text-align:left}.generateElectricity .stickyHeaderWrap .stickyHeaderItem uni-text.t3[data-v-9225dd64]{flex:1;text-align:right}.generateElectricity .contentWrap .contentItem[data-v-9225dd64]{display:flex;justify-content:space-between;align-items:center}.generateElectricity .contentWrap .contentItem .t2[data-v-9225dd64]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.generateElectricity .contentWrap .contentItem .t2 .max[data-v-9225dd64]{font-size:%?30?%;font-weight:700;color:blue}.generateElectricity .contentWrap .contentItem .t2 .min[data-v-9225dd64]{font-size:%?30?%;font-weight:700;color:#1dcc06}.generateElectricity .contentWrap .contentItem uni-text.t1[data-v-9225dd64]{flex:1;font-size:%?26?%;font-weight:700;text-align:left}.generateElectricity .contentWrap .contentItem uni-text.t3[data-v-9225dd64]{flex:1;font-size:%?28?%;text-align:right}',""]),e["default"]=l}}]);