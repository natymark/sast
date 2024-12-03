(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[7664],{

/***/ 33558:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86619);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("6c3734fa", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 18794:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ avatar; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/avatar/index.vue?vue&type=template&id=58a22c36&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"container"},[_c('v-uni-view',{staticClass:"page-body uni-content-info"},[_c('v-uni-view',{staticClass:"cropper-content"},[(_vm.isShowImg)?_c('v-uni-view',{staticClass:"uni-corpper",style:('width:'+_vm.cropperInitW+'px;height:'+_vm.cropperInitH+'px;background:#000')},[_c('v-uni-view',{staticClass:"uni-corpper-content",style:('width:'+_vm.cropperW+'px;height:'+_vm.cropperH+'px;left:'+_vm.cropperL+'px;top:'+_vm.cropperT+'px')},[_c('v-uni-image',{style:('width:'+_vm.cropperW+'px;height:'+_vm.cropperH+'px'),attrs:{"src":_vm.imageSrc}}),_c('v-uni-view',{staticClass:"uni-corpper-crop-box",style:('left:'+_vm.cutL+'px;top:'+_vm.cutT+'px;right:'+_vm.cutR+'px;bottom:'+_vm.cutB+'px'),on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.contentStartMove).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.contentMoveing).apply(void 0, arguments)
},"touchend":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.contentTouchEnd).apply(void 0, arguments)
}}},[_c('v-uni-view',{staticClass:"uni-cropper-view-box"},[_c('v-uni-view',{staticClass:"uni-cropper-dashed-h"}),_c('v-uni-view',{staticClass:"uni-cropper-dashed-v"}),_c('v-uni-view',{staticClass:"uni-cropper-line-t",attrs:{"data-drag":"top"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-line-r",attrs:{"data-drag":"right"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-line-b",attrs:{"data-drag":"bottom"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-line-l",attrs:{"data-drag":"left"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-point point-t",attrs:{"data-drag":"top"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-point point-tr",attrs:{"data-drag":"topTight"}}),_c('v-uni-view',{staticClass:"uni-cropper-point point-r",attrs:{"data-drag":"right"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-point point-rb",attrs:{"data-drag":"rightBottom"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-point point-b",attrs:{"data-drag":"bottom"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
},"touchend":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragEnd).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-point point-bl",attrs:{"data-drag":"bottomLeft"}}),_c('v-uni-view',{staticClass:"uni-cropper-point point-l",attrs:{"data-drag":"left"},on:{"touchstart":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragStart).apply(void 0, arguments)
},"touchmove":function($event){$event.stopPropagation();
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.dragMove).apply(void 0, arguments)
}}}),_c('v-uni-view',{staticClass:"uni-cropper-point point-lt",attrs:{"data-drag":"leftTop"}})],1)],1)],1)],1):_vm._e()],1),_c('v-uni-view',{staticClass:"cropper-config"},[_c('v-uni-button',{staticStyle:{"margin-top":"30rpx"},attrs:{"type":"primary reverse"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getImage).apply(void 0, arguments)
}}},[_vm._v("选择头像")]),_c('v-uni-button',{staticStyle:{"margin-top":"30rpx"},attrs:{"type":"warn"},on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.getImageInfo).apply(void 0, arguments)
}}},[_vm._v("提交")])],1),_c('v-uni-canvas',{style:('position:absolute;border: 1px solid red; width:'+_vm.imageW+'px;height:'+_vm.imageH+'px;top:-9999px;left:-9999px;'),attrs:{"canvas-id":"myCanvas"}})],1)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(79432);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(98992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
// EXTERNAL MODULE: ./src/store/index.js + 4 modules
var store = __webpack_require__(46920);
// EXTERNAL MODULE: ./src/api/system/user.js
var user = __webpack_require__(62008);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/avatar/index.vue?vue&type=script&lang=js&





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

var config = __webpack_require__(27358);


var baseUrl = defaultConfig.baseUrl;
var sysInfo = uni.getSystemInfoSync();
var SCREEN_WIDTH = sysInfo.screenWidth;
var PAGE_X,
  // 手按下的x位置
  PAGE_Y,
  // 手按下y的位置 
  PR = sysInfo.pixelRatio,
  // dpi
  T_PAGE_X,
  // 手移动的时候x的位置
  T_PAGE_Y,
  // 手移动的时候Y的位置
  CUT_L,
  // 初始化拖拽元素的left值
  CUT_T,
  // 初始化拖拽元素的top值
  CUT_R,
  // 初始化拖拽元素的
  CUT_B,
  // 初始化拖拽元素的
  CUT_W,
  // 初始化拖拽元素的宽度
  CUT_H,
  //  初始化拖拽元素的高度
  IMG_RATIO,
  // 图片比例
  IMG_REAL_W,
  // 图片实际的宽度
  IMG_REAL_H,
  // 图片实际的高度
  DRAFG_MOVE_RATIO = 1,
  //移动时候的比例,
  INIT_DRAG_POSITION = 100,
  // 初始化屏幕宽度和裁剪区域的宽度之差，用于设置初始化裁剪的宽度
  DRAW_IMAGE_W = sysInfo.screenWidth; // 设置生成的图片宽度

/* harmony default export */ var avatarvue_type_script_lang_js_ = ({
  /**
   * 页面的初始数据
   */
  data: function data() {
    return {
      imageSrc: store/* default */.A.getters.avatar,
      isShowImg: false,
      // 初始化的宽高
      cropperInitW: SCREEN_WIDTH,
      cropperInitH: SCREEN_WIDTH,
      // 动态的宽高
      cropperW: SCREEN_WIDTH,
      cropperH: SCREEN_WIDTH,
      // 动态的left top值
      cropperL: 0,
      cropperT: 0,
      transL: 0,
      transT: 0,
      // 图片缩放值
      scaleP: 0,
      imageW: 0,
      imageH: 0,
      // 裁剪框 宽高
      cutL: 0,
      cutT: 0,
      cutB: SCREEN_WIDTH,
      cutR: '100%',
      qualityWidth: DRAW_IMAGE_W,
      innerAspectRadio: DRAFG_MOVE_RATIO
    };
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    this.loadImage();
  },
  methods: {
    setData: function setData(obj) {
      var that = this;
      Object.keys(obj).forEach(function (key) {
        that.$set(that.$data, key, obj[key]);
      });
    },
    getImage: function getImage() {
      var _this = this;
      uni.chooseImage({
        success: function success(res) {
          _this.setData({
            imageSrc: res.tempFilePaths[0]
          });
          _this.loadImage();
        }
      });
    },
    loadImage: function loadImage() {
      var _this = this;
      uni.getImageInfo({
        src: _this.imageSrc,
        success: function success(res) {
          IMG_RATIO = 1 / 1;
          if (IMG_RATIO >= 1) {
            IMG_REAL_W = SCREEN_WIDTH;
            IMG_REAL_H = SCREEN_WIDTH / IMG_RATIO;
          } else {
            IMG_REAL_W = SCREEN_WIDTH * IMG_RATIO;
            IMG_REAL_H = SCREEN_WIDTH;
          }
          var minRange = IMG_REAL_W > IMG_REAL_H ? IMG_REAL_W : IMG_REAL_H;
          INIT_DRAG_POSITION = minRange > INIT_DRAG_POSITION ? INIT_DRAG_POSITION : minRange;
          // 根据图片的宽高显示不同的效果   保证图片可以正常显示
          if (IMG_RATIO >= 1) {
            var cutT = Math.ceil((SCREEN_WIDTH / IMG_RATIO - (SCREEN_WIDTH / IMG_RATIO - INIT_DRAG_POSITION)) / 2);
            var cutB = cutT;
            var cutL = Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH + INIT_DRAG_POSITION) / 2);
            var cutR = cutL;
            _this.setData({
              cropperW: SCREEN_WIDTH,
              cropperH: SCREEN_WIDTH / IMG_RATIO,
              // 初始化left right
              cropperL: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH) / 2),
              cropperT: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH / IMG_RATIO) / 2),
              cutL: cutL,
              cutT: cutT,
              cutR: cutR,
              cutB: cutB,
              // 图片缩放值
              imageW: IMG_REAL_W,
              imageH: IMG_REAL_H,
              scaleP: IMG_REAL_W / SCREEN_WIDTH,
              qualityWidth: DRAW_IMAGE_W,
              innerAspectRadio: IMG_RATIO
            });
          } else {
            var _cutL = Math.ceil((SCREEN_WIDTH * IMG_RATIO - SCREEN_WIDTH * IMG_RATIO) / 2);
            var _cutR = _cutL;
            var _cutT = Math.ceil((SCREEN_WIDTH - INIT_DRAG_POSITION) / 2);
            var _cutB = _cutT;
            _this.setData({
              cropperW: SCREEN_WIDTH * IMG_RATIO,
              cropperH: SCREEN_WIDTH,
              // 初始化left right
              cropperL: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH * IMG_RATIO) / 2),
              cropperT: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH) / 2),
              cutL: _cutL,
              cutT: _cutT,
              cutR: _cutR,
              cutB: _cutB,
              // 图片缩放值
              imageW: IMG_REAL_W,
              imageH: IMG_REAL_H,
              scaleP: IMG_REAL_W / SCREEN_WIDTH,
              qualityWidth: DRAW_IMAGE_W,
              innerAspectRadio: IMG_RATIO
            });
          }
          _this.setData({
            isShowImg: true
          });
          uni.hideLoading();
        }
      });
    },
    // 拖动时候触发的touchStart事件
    contentStartMove: function contentStartMove(e) {
      PAGE_X = e.touches[0].pageX;
      PAGE_Y = e.touches[0].pageY;
    },
    // 拖动时候触发的touchMove事件
    contentMoveing: function contentMoveing(e) {
      var _this = this;
      var dragLengthX = (PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
      var dragLengthY = (PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
      // 左移
      if (dragLengthX > 0) {
        if (this.cutL - dragLengthX < 0) dragLengthX = this.cutL;
      } else {
        if (this.cutR + dragLengthX < 0) dragLengthX = -this.cutR;
      }
      if (dragLengthY > 0) {
        if (this.cutT - dragLengthY < 0) dragLengthY = this.cutT;
      } else {
        if (this.cutB + dragLengthY < 0) dragLengthY = -this.cutB;
      }
      this.setData({
        cutL: this.cutL - dragLengthX,
        cutT: this.cutT - dragLengthY,
        cutR: this.cutR + dragLengthX,
        cutB: this.cutB + dragLengthY
      });
      PAGE_X = e.touches[0].pageX;
      PAGE_Y = e.touches[0].pageY;
    },
    contentTouchEnd: function contentTouchEnd() {},
    // 获取图片
    getImageInfo: function getImageInfo() {
      var _this = this;
      uni.showLoading({
        title: '图片生成中...'
      });
      // 将图片写入画布
      var ctx = uni.createCanvasContext('myCanvas');
      ctx.drawImage(_this.imageSrc, 0, 0, IMG_REAL_W, IMG_REAL_H);
      ctx.draw(true, function () {
        // 获取画布要裁剪的位置和宽度   均为百分比 * 画布中图片的宽度    保证了在微信小程序中裁剪的图片模糊  位置不对的问题 canvasT = (_this.cutT / _this.cropperH) * (_this.imageH / pixelRatio)
        var canvasW = (_this.cropperW - _this.cutL - _this.cutR) / _this.cropperW * IMG_REAL_W;
        var canvasH = (_this.cropperH - _this.cutT - _this.cutB) / _this.cropperH * IMG_REAL_H;
        var canvasL = _this.cutL / _this.cropperW * IMG_REAL_W;
        var canvasT = _this.cutT / _this.cropperH * IMG_REAL_H;
        uni.canvasToTempFilePath({
          x: canvasL,
          y: canvasT,
          width: canvasW,
          height: canvasH,
          destWidth: canvasW,
          destHeight: canvasH,
          quality: 0.5,
          canvasId: 'myCanvas',
          success: function success(res) {
            uni.hideLoading();
            var data = {
              name: 'avatarfile',
              filePath: res.tempFilePath
            };
            (0,user/* uploadAvatar */.F4)(data).then(function (response) {
              store/* default */.A.commit('SET_AVATAR', baseUrl + response.imgUrl);
              uni.showToast({
                title: "修改成功",
                icon: 'success'
              });
              uni.navigateBack();
            });
          }
        });
      });
    },
    // 设置大小的时候触发的touchStart事件
    dragStart: function dragStart(e) {
      T_PAGE_X = e.touches[0].pageX;
      T_PAGE_Y = e.touches[0].pageY;
      CUT_L = this.cutL;
      CUT_R = this.cutR;
      CUT_B = this.cutB;
      CUT_T = this.cutT;
    },
    // 设置大小的时候触发的touchMove事件
    dragMove: function dragMove(e) {
      var _this = this;
      var dragType = e.target.dataset.drag;
      switch (dragType) {
        case 'right':
          var dragLength = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          if (CUT_R + dragLength < 0) dragLength = -CUT_R;
          this.setData({
            cutR: CUT_R + dragLength
          });
          break;
        case 'left':
          var dragLength = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          if (CUT_L - dragLength < 0) dragLength = CUT_L;
          if (CUT_L - dragLength > this.cropperW - this.cutR) dragLength = CUT_L - (this.cropperW - this.cutR);
          this.setData({
            cutL: CUT_L - dragLength
          });
          break;
        case 'top':
          var dragLength = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          if (CUT_T - dragLength < 0) dragLength = CUT_T;
          if (CUT_T - dragLength > this.cropperH - this.cutB) dragLength = CUT_T - (this.cropperH - this.cutB);
          this.setData({
            cutT: CUT_T - dragLength
          });
          break;
        case 'bottom':
          var dragLength = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          if (CUT_B + dragLength < 0) dragLength = -CUT_B;
          this.setData({
            cutB: CUT_B + dragLength
          });
          break;
        case 'rightBottom':
          var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          if (CUT_B + dragLengthY < 0) dragLengthY = -CUT_B;
          if (CUT_R + dragLengthX < 0) dragLengthX = -CUT_R;
          var cutB = CUT_B + dragLengthY;
          var cutR = CUT_R + dragLengthX;
          this.setData({
            cutB: cutB,
            cutR: cutR
          });
          break;
        default:
          break;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/mine/avatar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var mine_avatarvue_type_script_lang_js_ = (avatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/mine/avatar/index.vue?vue&type=style&index=0&id=58a22c36&scoped=true&lang=css&
var avatarvue_type_style_index_0_id_58a22c36_scoped_true_lang_css_ = __webpack_require__(33558);
;// CONCATENATED MODULE: ./src/pages/mine/avatar/index.vue?vue&type=style&index=0&id=58a22c36&scoped=true&lang=css&
 /* harmony default export */ var mine_avatarvue_type_style_index_0_id_58a22c36_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/mine/avatar/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  mine_avatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "58a22c36",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var avatar = (component.exports);

/***/ }),

/***/ 86619:
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/uni-cropper/index.wxss */.uni-content-info[data-v-58a22c36]{\n\t/* position: fixed;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: block;\n\talign-items: center;\n\tflex-direction: column; */}.cropper-config[data-v-58a22c36]{padding:%?20?% %?40?%}.cropper-content[data-v-58a22c36]{min-height:%?750?%;width:100%}.uni-corpper[data-v-58a22c36]{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;box-sizing:border-box}.uni-corpper-content[data-v-58a22c36]{position:relative}.uni-corpper-content uni-image[data-v-58a22c36]{display:block;width:100%;min-width:0!important;max-width:none!important;height:100%;min-height:0!important;max-height:none!important;image-orientation:0deg!important;margin:0 auto}\n\n/* 移动图片效果 */.uni-cropper-drag-box[data-v-58a22c36]{position:absolute;top:0;right:0;bottom:0;left:0;cursor:move;background:rgba(0,0,0,.6);z-index:1}\n\n/* 内部的信息 */.uni-corpper-crop-box[data-v-58a22c36]{position:absolute;background:hsla(0,0%,100%,.3);z-index:2}.uni-corpper-crop-box .uni-cropper-view-box[data-v-58a22c36]{position:relative;display:block;width:100%;height:100%;overflow:visible;outline:%?1?% solid #69f;outline-color:rgba(102,153,255,.75)}\n\n/* 横向虚线 */.uni-cropper-dashed-h[data-v-58a22c36]{position:absolute;top:33.33333333%;left:0;width:100%;height:33.33333333%;border-top:%?1?% dashed hsla(0,0%,100%,.5);border-bottom:%?1?% dashed hsla(0,0%,100%,.5)}\n\n/* 纵向虚线 */.uni-cropper-dashed-v[data-v-58a22c36]{position:absolute;left:33.33333333%;top:0;width:33.33333333%;height:100%;border-left:%?1?% dashed hsla(0,0%,100%,.5);border-right:%?1?% dashed hsla(0,0%,100%,.5)}\n\n/* 四个方向的线  为了之后的拖动事件*/.uni-cropper-line-t[data-v-58a22c36]{position:absolute;display:block;width:100%;background-color:#69f;top:0;left:0;height:%?1?%;opacity:.1;cursor:n-resize}.uni-cropper-line-t[data-v-58a22c36]::before{content:\"\";position:absolute;top:50%;right:%?0?%;width:100%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);bottom:0;height:%?41?%;background:transparent;z-index:11}.uni-cropper-line-r[data-v-58a22c36]{position:absolute;display:block;background-color:#69f;top:0;right:%?0?%;width:%?1?%;opacity:.1;height:100%;cursor:e-resize}.uni-cropper-line-r[data-v-58a22c36]::before{content:\"\";position:absolute;top:0;left:50%;width:%?41?%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);bottom:0;height:100%;background:transparent;z-index:11}.uni-cropper-line-b[data-v-58a22c36]{position:absolute;display:block;width:100%;background-color:#69f;bottom:0;left:0;height:%?1?%;opacity:.1;cursor:s-resize}.uni-cropper-line-b[data-v-58a22c36]::before{content:\"\";position:absolute;top:50%;right:%?0?%;width:100%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);bottom:0;height:%?41?%;background:transparent;z-index:11}.uni-cropper-line-l[data-v-58a22c36]{position:absolute;display:block;background-color:#69f;top:0;left:0;width:%?1?%;opacity:.1;height:100%;cursor:w-resize}.uni-cropper-line-l[data-v-58a22c36]::before{content:\"\";position:absolute;top:0;left:50%;width:%?41?%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);bottom:0;height:100%;background:transparent;z-index:11}.uni-cropper-point[data-v-58a22c36]{width:%?5?%;height:%?5?%;background-color:#69f;opacity:.75;position:absolute;z-index:3}.point-t[data-v-58a22c36]{top:%?-3?%;left:50%;margin-left:%?-3?%;cursor:n-resize}.point-tr[data-v-58a22c36]{top:%?-3?%;left:100%;margin-left:%?-3?%;cursor:n-resize}.point-r[data-v-58a22c36]{top:50%;left:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-rb[data-v-58a22c36]{left:100%;top:100%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);cursor:n-resize;width:%?36?%;height:%?36?%;background-color:#69f;position:absolute;z-index:1112;opacity:1}.point-b[data-v-58a22c36]{left:50%;top:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-bl[data-v-58a22c36]{left:0;top:100%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-l[data-v-58a22c36]{left:0;top:50%;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}.point-lt[data-v-58a22c36]{left:0;top:0;margin-left:%?-3?%;margin-top:%?-3?%;cursor:n-resize}\n\n/* 裁剪框预览内容 */.uni-cropper-viewer[data-v-58a22c36]{position:relative;width:100%;height:100%;overflow:hidden}.uni-cropper-viewer uni-image[data-v-58a22c36]{position:absolute;z-index:2}", ""]);
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

/***/ })

}]);