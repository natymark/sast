(self["webpackChunkhydro_flex_control"]=self["webpackChunkhydro_flex_control"]||[]).push([[7771],{88035:function(e,t,r){var o=r(79775);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var a=r(69333).A;a("0f9a51ea",o,!0,{sourceMap:!1,shadowMode:!1})},97771:function(e,t,r){"use strict";var o;r.d(t,{A:function(){return b}});var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+e.size,e.plain?"u-btn--"+e.type+"--plain":"",e.loading?"u-loading":"","circle"==e.shape?"u-round-circle":"",e.hairLine?e.showHairLineBorder:"u-btn--bold-border","u-btn--"+e.type,e.disabled?"u-btn--"+e.type+"--disabled":""],style:[e.customStyle,{overflow:e.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),disabled:e.disabled,"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":"sendMessagePath",lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"hover-class":e.getHoverClass,loading:e.loading},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.launchapp.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.click(t)}}},[e._t("default"),e.ripple?r("v-uni-view",{staticClass:"u-wave-ripple",class:[e.waveActive?"u-wave-active":""],style:{top:e.rippleTop+"px",left:e.rippleLeft+"px",width:e.fields.targetWidth+"px",height:e.fields.targetWidth+"px","background-color":e.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):e._e()],2)},i=[],d={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";let e="";return e=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",e},showHairLineBorder(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click(e){this.$u.throttle((()=>{!0!==this.loading&&!0!==this.disabled&&(this.ripple&&(this.waveActive=!1,this.$nextTick((function(){this.getWaveQuery(e)}))),this.$emit("click",e))}),this.throttleTime)},getWaveQuery(e){this.getElQuery().then((t=>{let r=t[0];if(!r.width||!r.width)return;if(r.targetWidth=r.height>r.width?r.height:r.width,!r.targetWidth)return;this.fields=r;let o="",a="";o=e.touches[0].clientX,a=e.touches[0].clientY,this.rippleTop=a-r.top-r.targetWidth/2,this.rippleLeft=o-r.left-r.targetWidth/2,this.$nextTick((()=>{this.waveActive=!0}))}))},getElQuery(){return new Promise((e=>{let t="";t=uni.createSelectorQuery().in(this),t.select(".u-btn").boundingClientRect(),t.exec((t=>{e(t)}))}))},getphonenumber(e){this.$emit("getphonenumber",e)},getuserinfo(e){this.$emit("getuserinfo",e)},error(e){this.$emit("error",e)},opensetting(e){this.$emit("opensetting",e)},launchapp(e){this.$emit("launchapp",e)}}},l=d,s=(r(88035),r(18535)),p=(0,s.A)(l,n,i,!1,null,"4ed92bb2",null,!1,o,a),b=p.exports},79775:function(e,t,r){"use strict";r.r(t);var o=r(45522),a=r.n(o),n=r(67643),i=r.n(n),d=i()(a());d.push([e.id,'@charset "UTF-8";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-btn[data-v-4ed92bb2]::after{border:none}.u-btn[data-v-4ed92bb2]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-4ed92bb2]{border:1px solid #fff}.u-btn--default[data-v-4ed92bb2]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-4ed92bb2]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-4ed92bb2]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-4ed92bb2]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-4ed92bb2]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-4ed92bb2]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-4ed92bb2]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-4ed92bb2]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-4ed92bb2]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-4ed92bb2]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-4ed92bb2]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-4ed92bb2]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-4ed92bb2]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-4ed92bb2]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-4ed92bb2]{border-radius:%?100?%}.u-round-circle[data-v-4ed92bb2]::after{border-radius:%?100?%}.u-loading[data-v-4ed92bb2]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-4ed92bb2]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-4ed92bb2]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-4ed92bb2]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-4ed92bb2]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-4ed92bb2]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-4ed92bb2]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-4ed92bb2]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-4ed92bb2]{background:#18b566!important;color:#fff}.u-info-hover[data-v-4ed92bb2]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-4ed92bb2]{background:#f29100!important;color:#fff}.u-error-hover[data-v-4ed92bb2]{background:#dd6161!important;color:#fff}',""]),t["default"]=d}}]);