(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[129],{61676:function(t,n,e){var r=e(99592);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var o=e(69333).A;o("66f617f6",r,!0,{sourceMap:!1,shadowMode:!1})},1340:function(t,n,e){"use strict";var r;e.r(n),e.d(n,{default:function(){return P}});var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{wxsProps:{"change:data":"msg"},staticClass:"container",attrs:{data:t.msg,"change:data":t.mapModule.receiveMsg}},[e("v-uni-text",{staticClass:"recode",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoRecord.apply(void 0,arguments)}}},[t._v("记录")]),e("v-uni-view",{staticStyle:{height:"100%"},attrs:{id:"mapContainer"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.log.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"top"},[e("v-uni-text",{staticClass:"time"},[t._v(t._s(t.today))]),t.hours<=12?e("v-uni-text",{staticClass:"txt"},[t._v("当前考勤时间段：09:00 - 12:00")]):t._e(),t.hours>12?e("v-uni-text",{staticClass:"txt"},[t._v("当前考勤时间段：12:00 - 18:00")]):t._e()],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"card card1"},t._l(t.cardList,(function(n,r){return e("Card",{key:r,staticClass:"cd",on:{onClick:function(e){arguments[0]=e=t.$handleEvent(e),t.clickT(n)}}},[e("v-uni-view",{staticClass:"wrap"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"txt1",staticStyle:{"font-weight":"bold"}},[t._v(t._s(n.title))]),e("v-uni-view",{staticClass:"txt2"},[e("v-uni-text",{staticClass:"iconfont icon-check pic"}),e("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(n.time))])],1),e("v-uni-view",{staticClass:"txt3"},[e("v-uni-text",{staticClass:"iconfont icon-address pic address"}),e("v-uni-text",[e("span",{staticStyle:{"font-weight":"bold"}},[t._v("打卡时间：")]),t._v(t._s(n.msg))])],1)],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-text",{staticClass:"iconfont icon-pointer pic",class:"暂未打卡"!==n.msg?"deActive":""})],1)],1)],1)})),1)],1)],1)},a=[],i=e(42727),c=e(50575),s=(e(28706),e(41325)),u=e(27358),l=u.mapUrl;function d(t){var n=t.ip,e=t.key;return(0,s.A)({baseUrl:"".concat(l,"/ws/location/v1/ip?ip=").concat(n,"&key=").concat(e),method:"get"})}var f,p=e(76549),v=e(89848),h=e(16259),m=null,g=null;function b(t){var n=(0,v.A)(TMap.LatLng,(0,h.A)(t));f=new TMap.Map("mapContainer",{zoom:17,pitch:0,center:n})}function w(t){(m||g)&&(m.setMap(null),g.setMap(null),m=null,g=null),m||g||(m=new TMap.MultiMarker({id:"marker-layer",map:f,styles:{marker:new TMap.MarkerStyle({width:35,height:35,anchor:{x:16,y:32},src:e(27358).imgUrl+"/position2.svg"})},geometries:[{id:"demo",styleId:"marker",position:(0,v.A)(TMap.LatLng,(0,h.A)(t)),properties:{title:"marker"}}]}),g=new TMap.MultiLabel({id:"label-layer",map:f,styles:{label:new TMap.LabelStyle({color:"#00A096",size:16,offset:{x:0,y:15},angle:0,alignment:"center",verticalAlignment:"middle"})},geometries:[{id:"label",styleId:"label",position:(0,v.A)(TMap.LatLng,(0,h.A)(t)),content:"已进入考勤范围 电力调度控制中心",properties:{title:"label"}}]}))}window.marker=m,window.label=g;var y={data:function(){return{mark:[],msg:[]}},methods:{onClick:function(){w()},init:function(t){var n=this;return(0,c.A)((0,i.A)().mark((function t(){var e,r,o,a,c,s;return(0,i.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中"}),t.next=3,(0,p.A)("https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77");case 3:return t.next=5,d({ip:"",key:"AW5BZ-FSS37-GOLX4-PJNR5-MKZAS-EGFKN"});case 5:return e=t.sent,r=e.result.location,o=r.lat,a=r.lng,c=[o,a],n.msg=c,s=[o-.001,a],t.next=12,b(s);case 12:return t.next=14,w(c);case 14:uni.hideLoading();case 15:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.init()},created:function(){}},x=y,A=e(74977),k=e(46920),C=e(38289),_=e(14380),M=e(50771),L=e(43859)["A"],T={data:function(){return{cardList:[{title:"上班打卡",time:"09:00",msg:"暂未打卡"},{title:"下班打卡",time:"18:00",msg:"暂未打卡"}],tempList:[],id:""}},components:{Card:C.A},computed:{today:function(){return(0,A.oh)().formattedMonth},hours:function(){return(0,A.oh)().hours}},watch:{itemPoints:{handler:function(t,n){}},deep:!0},methods:{clickT:function(t){"暂未打卡"===t.msg&&this.$tab.navigateTo("/pages/run/duty/clockIn/index?userId=".concat(this.userId,"&title=").concat(t.title,"&id=").concat(this.id,"&dutyList=").concat(this.itemPoints))},gotoRecord:function(){this.$tab.navigateTo("/pages/run/duty/clockRecord/index?userId=".concat(this.userId))},receiveMsg:function(t){t&&(this.itemPoints=t),L.log("itemPoints",this.itemPoints)}},mounted:function(){},onShow:function(){var t=this;return(0,c.A)((0,i.A)().mark((function n(){var e,r,o,a,c;return(0,i.A)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(k.A.getters.userId){n.next=3;break}return n.next=3,t.$store.dispatch("GetInfo");case 3:return n.next=5,k.A.getters.userId;case 5:return t.userId=n.sent,n.next=8,_.Hh({personId:t.userId,date:(0,M.Ey)(new Date)});case 8:e=n.sent,t.tempList=e.rows,t.tempList.length>0&&(r=t.tempList[0],o=r.onDutyTime,r.onDutyStatus,a=r.offDutyTime,r.offDutyStatus,c=r.id,t.id=c,L.log("时间",o),o&&(t.cardList[0].msg=o.split(" ")[1]),a&&(t.cardList[1].msg=a.split(" ")[1]));case 11:case"end":return n.stop()}}),n)})))()}},D=T,I=(e(61676),e(18535));x.__module="mapModule";var S=(0,I.A)(D,o,a,!1,null,"f34b8226",null,!1,r,x),P=S.exports},99592:function(t,n,e){"use strict";e.r(n);var r=e(45522),o=e.n(r),a=e(67643),i=e.n(a),c=i()(o());c.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-f34b8226]{width:100%;height:100%;position:relative}.container .recode[data-v-f34b8226]{position:fixed;top:%?25?%;right:%?25?%;font-size:%?30?%;font-weight:700;z-index:5000;color:#fff}.container .top[data-v-f34b8226]{display:flex;flex-direction:column;row-gap:%?10?%;position:absolute;width:50%;padding:%?20?%;color:#03654e;font-weight:700;border:%?4?% solid hsla(0,0%,100%,.1);background:hsla(0,0%,100%,.2);box-shadow:0 0 %?160?% rgba(0,0,0,.2);overflow:hidden;border-radius:%?15?%;-webkit-backdrop-filter:blur(%?20?%);backdrop-filter:blur(%?20?%);top:0;left:0}.container .top .txt[data-v-f34b8226]{font-size:%?22?%}.container .bottom[data-v-f34b8226]{position:absolute;bottom:%?60?%;width:100%;padding:%?20?%;z-index:1000}.container .bottom .card .cd[data-v-f34b8226]{margin-bottom:%?20?%;border-radius:%?15?%;box-shadow:0 0 %?160?% rgba(0,0,0,.2)}.container .bottom .card .wrap[data-v-f34b8226]{display:flex;justify-content:space-between;align-items:center}.container .bottom .card .wrap .left[data-v-f34b8226]{color:#03654e}.container .bottom .card .wrap .left .txt1[data-v-f34b8226]::before{content:"";display:inline-block;border-radius:%?12?%;width:%?24?%;height:%?24?%;background:#00a096}.container .bottom .card .wrap .left .txt2[data-v-f34b8226],\r\n.container .bottom .card .wrap .left .txt3[data-v-f34b8226]{display:flex;align-items:center}.container .bottom .card .wrap .left .txt2 .pic[data-v-f34b8226],\r\n.container .bottom .card .wrap .left .txt3 .pic[data-v-f34b8226]{color:#3ba6e9;display:block;font-size:%?24?%;line-height:%?24?%;margin-right:%?4?%}.container .bottom .card .wrap .left .txt2 .address[data-v-f34b8226],\r\n.container .bottom .card .wrap .left .txt3 .address[data-v-f34b8226]{color:#e9893b}.container .bottom .card .wrap .right .pic[data-v-f34b8226]{font-size:%?80?%;line-height:%?80?%;color:#3ba6e9}.container .bottom .card .wrap .right .pic.deActive[data-v-f34b8226]{color:#dfedf5}',""]),n["default"]=c},14380:function(t,n,e){"use strict";e.d(n,{Gs:function(){return s},Hh:function(){return a},hc:function(){return c},qv:function(){return l},rL:function(){return u},tA:function(){return i}});var r=e(41325),o={load:"/nus/sign/list",submit:"/nus/sign"},a=function(t){return(0,r.A)({url:"".concat(o.load),method:"get",params:t})},i=function(t){return(0,r.A)({url:"".concat(o.submit),method:"post",data:t})},c=function(t){return(0,r.A)({url:"".concat(o.submit),method:"put",data:t})},s=function(t){return(0,r.A)({url:"/nus/resign",method:"post",data:t})},u=function(t){return(0,r.A)({url:"/nus/resign",method:"put",data:t})},l=function(t){return(0,r.A)({url:"/nus/resign/list",method:"get",params:t})}},76549:function(t,n,e){"use strict";e(26099);function r(t){return new Promise((function(n,e){var r=document.createElement("script");r.type="text/javascript",r.src=t,document.body.appendChild(r),r.onload=function(){n()},r.onerror=function(){e()}})).catch((function(t){}))}n.A=r},74977:function(t,n,e){"use strict";e.d(n,{mI:function(){return o},oh:function(){return a}});e(28706),e(48980),e(44114),e(54554),e(26099),e(31415),e(17642),e(58004),e(33853),e(45876),e(32475),e(15024),e(31698),e(47764),e(23500),e(62953);function r(t){var n;return n=t?new Date(t):new Date,n.getTime()}function o(){var t=new Date;return t.getTime()}function a(t){var n=new Date(r(t)),e=n.getFullYear(),o=n.getMonth()+1,a=n.getDate(),i=n.getHours(),c=n.getMinutes(),s=n.getSeconds(),u=["周日","周一","周二","周三","周四","周五","周六"],l=u[n.getDay()],d="".concat(a,"日 ").concat(l),f="".concat(o,"月").concat(a,"日 ").concat(l),p="".concat(e,"-").concat(o<10?"0"+o:o),v="".concat(p,"-").concat(a," ").concat(l),h=e+"-"+(o<10?"0"+o:o)+"-"+(a<10?"0"+a:a)+" "+(i<10?"0"+i:i)+":"+(c<10?"0"+c:c)+":"+(s<10?"0"+s:s);return{year:e,formattedDate:d,formattedMonth:f,hours:i,yearMonth:p,dateWeek:v,now:h}}},30566:function(t,n,e){"use strict";var r=e(79504),o=e(79306),a=e(20034),i=e(39297),c=e(67680),s=e(40616),u=Function,l=r([].concat),d=r([].join),f={},p=function(t,n,e){if(!i(f,n)){for(var r=[],o=0;o<n;o++)r[o]="a["+o+"]";f[n]=u("C,a","return new C("+d(r,",")+")")}return f[n](t,e)};t.exports=s?u.bind:function(t){var n=o(this),e=n.prototype,r=c(arguments,1),i=function(){var e=l(r,c(arguments));return this instanceof i?p(n,e.length,e):n.apply(t,e)};return a(e)&&(i.prototype=e),i}},60825:function(t,n,e){"use strict";var r=e(46518),o=e(97751),a=e(18745),i=e(30566),c=e(35548),s=e(28551),u=e(20034),l=e(2360),d=e(79039),f=o("Reflect","construct"),p=Object.prototype,v=[].push,h=d((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),m=!d((function(){f((function(){}))})),g=h||m;r({target:"Reflect",stat:!0,forced:g,sham:g},{construct:function(t,n){c(t),s(n);var e=arguments.length<3?t:c(arguments[2]);if(m&&!h)return f(t,n,e);if(t===e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return a(v,r,n),new(a(i,t,r))}var o=e.prototype,d=l(u(o)?o:p),g=a(t,d,n);return u(g)?g:d}})},89848:function(t,n,e){"use strict";e.d(n,{A:function(){return a}});e(44114),e(60825);var r=e(40884),o=e(97130);function a(t,n,e){if((0,r.A)())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,n);var i=new(t.bind.apply(t,a));return e&&(0,o.A)(i,e.prototype),i}},40884:function(t,n,e){"use strict";e.d(n,{A:function(){return r}});e(60825);function r(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(r=function(){return!!t})()}},97130:function(t,n,e){"use strict";e.d(n,{A:function(){return r}});e(10287);function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}}}]);