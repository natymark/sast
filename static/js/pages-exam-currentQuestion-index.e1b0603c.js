(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[8648],{2152:function(t,e,n){var i=n(38411);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var s=n(69333).A;s("e147eea6",i,!0,{sourceMap:!1,shadowMode:!1})},3687:function(t,e,n){var i=n(36459);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var s=n(69333).A;s("3398f630",i,!0,{sourceMap:!1,shadowMode:!1})},51736:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var i={liuSlideQuestions:n(47036).A},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("liu-slide-questions",{attrs:{dataList:t.list,bankTitle:t.bankTitle},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.subData.apply(void 0,arguments)},isAnswer:function(e){arguments[0]=e=t.$handleEvent(e),t.isAnswer.apply(void 0,arguments)},newQuestionsAnswer:function(e){arguments[0]=e=t.$handleEvent(e),t.newQuestionsAnswerHandler.apply(void 0,arguments)}}})],1)},r=[],a=(n(60739),n(33110),n(26099),n(23500),n(47036)),o=n(99801);n(57756),n(83851),n(40888),n(15472),n(4150);n(91913);var c,u=n(42727),l=n(50575),d=n(63065),f=n(51729),h=(n(28706),n(44114),n(47764),n(62953),n(46920),n(43859)["A"]),w=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(0,d.A)(this,t),this.bankId=e,this.bankQuestionList=n,this.transformQuestionList=i,this.questionType={1:"SINGLE",2:"MULTY"},this.questionType2={1:"单选",2:"多选"},this.aliasMap={0:"A",1:"B",2:"C",3:"D",4:"E",5:"F",6:"G",7:"H",8:"I",9:"J"}}return(0,f.A)(t,[{key:"init",value:function(){var t=(0,l.A)((0,u.A)().mark((function t(){var e;return(0,u.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.wB)({bankId:this.bankId});case 2:return e=t.sent,this.bankQuestionList=e.data,t.abrupt("return",this);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"transform",value:function(){var t=(0,l.A)((0,u.A)().mark((function t(){var e,n,i,s=this;return(0,u.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=[],!(this.bankQuestionList.length>0)){t.next=12;break}h.log(this.bankQuestionList,"sss"),n=(0,u.A)().mark((function t(){var n,r,a,o,c,l,d,f,h,w,v,p,m,b;return(0,u.A)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=s.bankQuestionList[i],r=n.analysis,a=n.answer,o=n.questionContent,c=n.questionType,l=n.questionId,1==c||2==c){t.next=4;break}return t.abrupt("return",1);case 4:d=l,f="(".concat(s.questionType2[c],")").concat(o),h=s.questionType[c],w=!1,v=[],p=a,m=[],b=[],p.forEach((function(t,e){var n=t.answer,i=t.id,r=t.isTrue,a=s.aliasMap[i];b.push({alias:a,answer:n,isSelect:0,isTrue:r}),"true"===r.toLowerCase()&&(v.push(a),m.push(i))})),p=[].concat(b),e.push({id:d,analysis:r,title:f,problemType:h,finish:w,answerArr:v,answerIndex:m,children:p});case 15:case"end":return t.stop()}}),t)})),i=0;case 5:if(!(i<this.bankQuestionList.length)){t.next=12;break}return t.delegateYield(n(),"t0",7);case 7:if(!t.t0){t.next=9;break}return t.abrupt("continue",9);case 9:i++,t.next=5;break;case 12:return this.transformQuestionList=[].concat(e),t.abrupt("return",this);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}])}(),v=n(43859)["A"],p={components:{liuSlideQuestions:a.A},data:function(){return{list:[],bankTitle:"",newQuestionsAnswer:[]}},methods:{subData:function(t){v.log("提交的数据："+JSON.stringify(t))},isAnswer:function(t){this.$set(this.list[t],"isAnswer",!0),this.setSelect(t)},setSelect:function(t){var e=this;this.newQuestionsAnswer[t].finish=!0,this.newQuestionsAnswer[t].answerIndex.forEach((function(n){e.newQuestionsAnswer[t].children[n].isSelect=1})),this.list=this.newQuestionsAnswer},newQuestionsAnswerHandler:function(t){v.log(t),this.newQuestionsAnswer=t}},watch:{},onLoad:function(t){this.questionId=t.id,this.bankTitle=t.title},onReady:function(){},onShow:function(){var t=this,e=new w(this.questionId);e.init().then((function(t){return t.transform()})).then((function(e){t.list=e.transformQuestionList}))},onHide:function(){},onUnload:function(){}},m=p,b=(n(3687),n(18535)),g=(0,b.A)(m,s,r,!1,null,"7d67d317",null,!1,i,c),A=g.exports},47036:function(t,e,n){"use strict";var i;n.d(e,{A:function(){return f}});var s,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page-main"},[n("v-uni-view",{staticClass:"topbox"},[n("v-uni-image",{staticClass:"topimg",attrs:{src:t.topBanner}}),n("v-uni-view",{staticClass:"imgtext"},[t._v(t._s(t.bankTitle))])],1),n("v-uni-swiper",{staticClass:"swipercard",attrs:{"previous-margin":"0","next-margin":"0",circular:!1,autoplay:!1,current:t.currentIndex,duration:"200"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.eventHandle.apply(void 0,arguments)}}},[t._l(t.newQuestionsAnswer,(function(e,i){return[n("v-uni-swiper-item",{key:i+"_0",staticClass:"swiperitem"},[n("v-uni-view",{staticClass:"itembox"},[n("v-uni-view",{staticClass:"box-hd"},[n("v-uni-view",{staticClass:"hdname"},[t._v("当前第"),n("v-uni-view",{staticClass:"text1"},[t._v(t._s(i+1))]),t._v("道题")],1),n("v-uni-view",{staticClass:"hdnum"},[t._v("共"+t._s(t.totalNum)+"道题")])],1),n("v-uni-view",{staticClass:"contentbox"},[n("v-uni-view",{staticClass:"boxtitle"},[n("v-uni-text",{staticClass:"textl"},[t._v(t._s(i+1)+"、")]),n("v-uni-text",{staticClass:"textr"},[t._v(t._s(e.title))])],1),"SINGLE"==e.problemType?n("v-uni-view",t._l(e.children,(function(s,r){return n("v-uni-view",{key:r,staticClass:"boxbody"},[n("v-uni-view",{staticClass:"chooseitem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.singChoose(i,r)}}},[s.isSelect?t._e():n("v-uni-view",{staticClass:"sinchoose"}),s.isSelect&&!e.finish?n("v-uni-image",{staticClass:"sinchoose-on",attrs:{src:t.imgUrl+"/checked_true.png",mode:""}}):t._e(),s.isSelect&&e.finish&&!e.answerArr.includes(s.alias)?n("v-uni-image",{staticClass:"sinchoose-on",attrs:{src:t.imgUrl+"/checked_false.png",mode:""}}):t._e(),s.isSelect&&e.finish&&e.answerArr.includes(s.alias)?n("v-uni-image",{staticClass:"sinchoose-on",attrs:{src:t.imgUrl+"/checked_true.png",mode:""}}):t._e(),n("v-uni-view",{staticClass:"bodyr"},[t._v(t._s(s.alias)+"、"+t._s(s.answer))])],1)],1)})),1):t._e(),"MULTY"==e.problemType?n("v-uni-view",t._l(e.children,(function(s,r){return n("v-uni-view",{key:r,staticClass:"boxbody"},[n("v-uni-view",{staticClass:"chooseitem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.multyChoose(i,r)}}},[s.isSelect?t._e():n("v-uni-view",{staticClass:"sinchoose sinchoose2"}),!e.finish&&s.isSelect?n("v-uni-image",{staticClass:"sinchoose-on",attrs:{src:t.imgUrl+"/checkbox_true.png",mode:""}}):t._e(),e.finish&&s.isSelect&&e.answerArr.includes(s.alias)?n("v-uni-image",{staticClass:"sinchoose-on",attrs:{src:t.imgUrl+"/checkbox_true.png",mode:""}}):t._e(),e.finish&&s.isSelect&&!e.answerArr.includes(s.alias)?n("v-uni-image",{staticClass:"sinchoose-on",attrs:{src:t.imgUrl+"/checkbox_false.png",mode:""}}):t._e(),n("v-uni-view",{staticClass:"bodyr"},[t._v(t._s(s.alias)+"、"+t._s(s.answer))])],1)],1)})),1):t._e(),"QUESTION"==e.problemType?n("v-uni-view",{staticClass:"writeitem"},[n("v-uni-textarea",{staticClass:"textInfo",attrs:{"auto-height":!0,maxlength:"200",placeholder:"请输入您的答案"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTextAreaBlur(i)}},model:{value:e.userAnswer,callback:function(n){t.$set(e,"userAnswer",n)},expression:"item.userAnswer"}})],1):t._e(),!0===e.finish?n("v-uni-view",{staticClass:"answer"},[n("v-uni-view",[t._v("解析:"),n("v-uni-text",[t._v(t._s(e.analysis))])],1)],1):t._e()],1),n("v-uni-view",{staticClass:"footbtn"},[n("v-uni-view",{staticClass:"ftbtn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back(i)}}},[t._v("上一题")]),n("v-uni-view",{staticClass:"ftbtn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.answer(i)}}},[t._v("完成")]),i+1<t.totalNum?n("v-uni-view",{staticClass:"ftbtn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next(i)}}},[t._v("下一题")]):t._e(),t._e()],1)],1)],1)]}))],2)],1)},a=[],o=(n(44114),n(60739),n(33110),n(79432),n(26099),n(23500),n(43859)["A"]),c={props:{dataList:{type:Array,default:function(){return[]}},bankTitle:String},watch:{dataList:{deep:!0,immediate:!0,handler:function(t){t.length&&(this.newQuestionsAnswer=JSON.parse(JSON.stringify(t)),this.totalNum=t.length,this.formSubmitData=[],this.setEmptyData())}},newQuestionsAnswer:{deep:!0,immediate:!0,handler:function(t){this.$emit("newQuestionsAnswer",t)}}},data:function(){return{topBanner:"".concat(this.imgUrl,"/banner.png"),chooseonImg:"".concat(this.imgUrl,"/chooseon.png"),chooseonImg2:"".concat(this.imgUrl,"/chooseon2.png"),totalNum:0,currentIndex:0,newQuestionsAnswer:[],formSubmitData:[]}},computed:{imgUrl:function(){return n(27358).imgUrl}},methods:{answer:function(t){this.$emit("isAnswer",t)},setEmptyData:function(){var t=this;this.newQuestionsAnswer.forEach((function(e){var n="";e.children&&e.children.forEach((function(t){t.isSelect?n=t:t.isSelect=0})),"QUESTION"==e.problemType&&(n=e.userAnswer),t.formSubmitData.push({id:e.id,userAnswer:n})}))},submitData:function(){for(var t=0;t<this.formSubmitData.length;t++)if(!this.formSubmitData[t].userAnswer){var e="请完成第"+(t+1)+"题后提交！";return uni.showToast({title:e,icon:"none"}),void(this.currentIndex=t)}this.$emit("submit",this.formSubmitData)},singChoose:function(t,e){if(this.newQuestionsAnswer[t].children[e].isSelect)this.newQuestionsAnswer[t].children[e].isSelect=0,this.formSubmitData[t].userAnswer="";else{for(var n=0;n<this.newQuestionsAnswer[t].children.length;n++)this.newQuestionsAnswer[t].children[n].isSelect&&(this.newQuestionsAnswer[t].children[n].isSelect=0);this.newQuestionsAnswer[t].children[e].isSelect=1,this.formSubmitData[t].userAnswer=this.newQuestionsAnswer[t].children[e]}this.newQuestionsAnswer=JSON.parse(JSON.stringify(this.newQuestionsAnswer))},multyChoose:function(t,e){this.newQuestionsAnswer[t].children[e].isSelect=1^this.newQuestionsAnswer[t].children[e].isSelect;for(var n=[],i=0;i<this.newQuestionsAnswer[t].children.length;i++)this.newQuestionsAnswer[t].children[i].isSelect&&n.push(this.newQuestionsAnswer[t].children[i]);o.log(n),this.formSubmitData[t].userAnswer=n,this.newQuestionsAnswer=JSON.parse(JSON.stringify(this.newQuestionsAnswer))},bindTextAreaBlur:function(t){this.formSubmitData[t].userAnswer=this.newQuestionsAnswer[t].userAnswer},eventHandle:function(t){this.currentIndex=t.detail.current},back:function(t){t&&(this.currentIndex=t-1)},next:function(t){this.currentIndex=t+1}}},u=c,l=(n(2152),n(18535)),d=(0,l.A)(u,r,a,!1,null,"21dca0c7",null,!1,i,s),f=d.exports},38411:function(t,e,n){"use strict";n.r(e);var i=n(45522),s=n.n(i),r=n(67643),a=n.n(r),o=a()(s());o.push([t.id,".page-main[data-v-21dca0c7]{width:100%;height:100%;display:flex;flex-direction:column}.topbox[data-v-21dca0c7]{width:100%;height:%?140?%;position:relative}.topbox .topimg[data-v-21dca0c7]{width:100%;height:100%}.topbox .imgtext[data-v-21dca0c7]{position:absolute;bottom:%?60?%;left:%?58?%;font-size:%?36?%;font-weight:400;color:#fff;line-height:%?36?%;text-shadow:%?0?% %?2?% %?4?% rgba(0,0,0,.5)}.swipercard[data-v-21dca0c7]{width:100%;flex:1;overflow:hidden;background:#fff}.itembox[data-v-21dca0c7]{width:calc(100% - %?96?%);padding:%?32?% %?48?%}.box-hd[data-v-21dca0c7]{display:flex;justify-content:space-between;align-items:center;border-bottom:%?4?% dashed #f0f0f0;padding-bottom:%?16?%;padding-left:%?16?%}.hdname[data-v-21dca0c7]{width:%?400?%;font-size:%?28?%;display:flex;align-items:flex-start;font-weight:500;color:#666;line-height:%?40?%}.text1[data-v-21dca0c7]{color:#1fa474;font-size:%?40?%;line-height:%?32?%}.hdnum[data-v-21dca0c7]{font-size:%?28?%;font-weight:400;color:#666;line-height:%?42?%}.contentbox[data-v-21dca0c7]{font-size:%?30?%;color:#333;margin-top:%?48?%}.boxtitle .textl[data-v-21dca0c7]{width:%?50?%;height:%?34?%;background:linear-gradient(90deg,#c3ffda,#fff)}.boxbody[data-v-21dca0c7]{padding-left:%?40?%;line-height:%?64?%;margin:%?16?% 0}.chooseitem[data-v-21dca0c7]{display:flex;align-items:center}.sinchoose[data-v-21dca0c7]{width:%?28?%;height:%?28?%;margin-right:%?16?%;border-radius:50%;background:#fff;border:%?2?% solid #bfbdbd}.sinchoose2[data-v-21dca0c7]{border-radius:%?6?%}.sinchoose-on[data-v-21dca0c7]{width:%?32?%;height:%?32?%;margin-right:%?16?%}.writeitem uni-textarea[data-v-21dca0c7]{min-height:%?164?%;margin:%?24?% auto;padding:%?16?%;border:%?2?% solid #ebebeb;border-radius:4px;font-size:%?30?%;color:#333}.footbtn[data-v-21dca0c7]{display:flex;justify-content:space-between;position:fixed;bottom:%?220?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding:0 %?24?%}.ftbtn1[data-v-21dca0c7]{width:%?230?%;height:%?80?%;line-height:%?80?%;text-align:center;border:%?2?% solid #1fa474;font-size:%?30?%;font-weight:500;color:#1fa474}.ftbtn2[data-v-21dca0c7]{width:%?270?%;height:%?80?%;line-height:%?80?%;text-align:center;background:#1fa474;font-size:%?30?%;font-weight:500;color:#fff}",""]),e["default"]=o},36459:function(t,e,n){"use strict";n.r(e);var i=n(45522),s=n.n(i),r=n(67643),a=n.n(r),o=a()(s());o.push([t.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-7d67d317]{height:100%}',""]),e["default"]=o},99801:function(t,e,n){"use strict";n.d(e,{G8:function(){return a},Hh:function(){return r},qY:function(){return u},uG:function(){return o},wB:function(){return c},w_:function(){return l}});var i=n(41325),s={load:"/nus/exam/getExamInfo",submit:""},r=function(t){return(0,i.A)({url:s.load,method:"post",data:t})},a=function(t){return(0,i.A)({url:"/nus/exam/getExamInfoById",method:"get",params:t})},o=function(t){return(0,i.A)({url:"/nus/bank/getQuestionBank",method:"get",params:t})},c=function(t){return(0,i.A)({url:"/nus/bank/getQuestionByBank",method:"get",params:t})},u=function(t){return(0,i.A)({url:"/nus/record/getMyGrade",method:"get",params:t})},l=function(t){return(0,i.A)({url:"/nus/record/addExamRecord",method:"post",data:t})}},30566:function(t,e,n){"use strict";var i=n(79504),s=n(79306),r=n(20034),a=n(39297),o=n(67680),c=n(40616),u=Function,l=i([].concat),d=i([].join),f={},h=function(t,e,n){if(!a(f,e)){for(var i=[],s=0;s<e;s++)i[s]="a["+s+"]";f[e]=u("C,a","return new C("+d(i,",")+")")}return f[e](t,n)};t.exports=c?u.bind:function(t){var e=s(this),n=e.prototype,i=o(arguments,1),a=function(){var n=l(i,o(arguments));return this instanceof a?h(e,n.length,n):e.apply(t,n)};return r(n)&&(a.prototype=n),a}},16575:function(t,e,n){"use strict";var i=n(39297);t.exports=function(t){return void 0!==t&&(i(t,"value")||i(t,"writable"))}},60825:function(t,e,n){"use strict";var i=n(46518),s=n(97751),r=n(18745),a=n(30566),o=n(35548),c=n(28551),u=n(20034),l=n(2360),d=n(79039),f=s("Reflect","construct"),h=Object.prototype,w=[].push,v=d((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),p=!d((function(){f((function(){}))})),m=v||p;i({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(t,e){o(t),c(e);var n=arguments.length<3?t:o(arguments[2]);if(p&&!v)return f(t,e,n);if(t===n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var i=[null];return r(w,i,e),new(r(a,t,i))}var s=n.prototype,d=l(u(s)?s:h),m=r(t,d,e);return u(m)?m:d}})},40888:function(t,e,n){"use strict";var i=n(46518),s=n(69565),r=n(20034),a=n(28551),o=n(16575),c=n(77347),u=n(42787);function l(t,e){var n,i,d=arguments.length<3?t:arguments[2];return a(t)===d?t[e]:(n=c.f(t,e),n?o(n)?n.value:void 0===n.get?void 0:s(n.get,d):r(i=u(t))?l(i,e,d):void 0)}i({target:"Reflect",stat:!0},{get:l})},15472:function(t,e,n){"use strict";var i=n(46518),s=n(44576),r=n(10687);i({global:!0},{Reflect:{}}),r(s.Reflect,"Reflect",!0)},12773:function(t,e,n){"use strict";n.d(e,{A:function(){return i}});n(16280),n(76918);function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},57756:function(t,e,n){"use strict";n.d(e,{A:function(){return c}});n(60825);var i=n(4150),s=n(40884),r=(n(16280),n(76918),n(65376)),a=n(12773);function o(t,e){if(e&&("object"==(0,r.A)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.A)(t)}function c(t,e,n){return e=(0,i.A)(e),o(t,(0,s.A)()?Reflect.construct(e,n||[],(0,i.A)(t).constructor):e.apply(t,n))}},4150:function(t,e,n){"use strict";n.d(e,{A:function(){return i}});n(40875),n(10287);function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}},91913:function(t,e,n){"use strict";n.d(e,{A:function(){return s}});n(16280),n(76918),n(84185);var i=n(97130);function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&(0,i.A)(t,e)}},40884:function(t,e,n){"use strict";n.d(e,{A:function(){return i}});n(60825);function i(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(i=function(){return!!t})()}},97130:function(t,e,n){"use strict";n.d(e,{A:function(){return i}});n(10287);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}}}]);