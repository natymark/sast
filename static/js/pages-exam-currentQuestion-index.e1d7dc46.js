(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[8648],{

/***/ 2152:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38411);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("e147eea6", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 3687:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36459);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(69333)/* ["default"] */ .A)
var update = add("3398f630", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 51736:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ currentQuestion; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/exam/currentQuestion/index.vue?vue&type=template&id=7d67d317&scoped=true&
var components = {'liuSlideQuestions': (__webpack_require__(47036)/* ["default"] */ .A)}
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"container"},[_c('liu-slide-questions',{attrs:{"dataList":_vm.list,"bankTitle":_vm.bankTitle},on:{"submit":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.subData).apply(void 0, arguments)
},"isAnswer":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.isAnswer).apply(void 0, arguments)
},"newQuestionsAnswer":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.newQuestionsAnswerHandler).apply(void 0, arguments)
}}})],1)}
var recyclableRender = false
var staticRenderFns = []


;// CONCATENATED MODULE: ./src/pages/exam/currentQuestion/index.vue?vue&type=template&id=7d67d317&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.constructor.js
var esnext_iterator_constructor = __webpack_require__(98992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.iterator.for-each.js
var esnext_iterator_for_each = __webpack_require__(3949);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(23500);
// EXTERNAL MODULE: ./src/uni_modules/liu-slide-questions/components/liu-slide-questions/liu-slide-questions.vue + 4 modules
var liu_slide_questions = __webpack_require__(47036);
// EXTERNAL MODULE: ./src/api/exam/index.js
var exam = __webpack_require__(99801);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js + 1 modules
var callSuper = __webpack_require__(57756);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(83851);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.get.js
var es_reflect_get = __webpack_require__(40888);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.to-string-tag.js
var es_reflect_to_string_tag = __webpack_require__(15472);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var esm_getPrototypeOf = __webpack_require__(4150);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = getPrototypeOf(t)););
  return t;
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js





function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropGet.js


function _superPropertyGet(t, e, r, o) {
  var p = get(getPrototypeOf(1 & o ? t.prototype : t), e, r);
  return 2 & o ? function (t) {
    return p.apply(r, t);
  } : p;
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(91913);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(42727);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(50575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(63065);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51729);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(28706);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(47764);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(62953);
// EXTERNAL MODULE: ./src/store/index.js + 4 modules
var src_store = __webpack_require__(46920);
;// CONCATENATED MODULE: ./src/pages/exam/exam.js
/* provided dependency */ var console = __webpack_require__(43859)["A"];

















var QuestionBank = /*#__PURE__*/function () {
  function QuestionBank(bankId) {
    var bankQuestionList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var transformQuestionList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    (0,classCallCheck/* default */.A)(this, QuestionBank);
    this.bankId = bankId;
    this.bankQuestionList = bankQuestionList;
    this.transformQuestionList = transformQuestionList;
    this.questionType = {
      1: 'SINGLE',
      2: 'MULTY'
    };
    this.questionType2 = {
      1: '单选',
      2: '多选'
    };
    this.aliasMap = {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D',
      4: 'E',
      5: 'F',
      6: 'G',
      7: 'H',
      8: 'I',
      9: 'J'
    };
  }
  return (0,createClass/* default */.A)(QuestionBank, [{
    key: "init",
    value: function () {
      var _init = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee() {
        var result;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,exam/* getQuestionByBank */.wB)({
                bankId: this.bankId
              });
            case 2:
              result = _context.sent;
              this.bankQuestionList = result.data;
              return _context.abrupt("return", this);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "transform",
    value: function () {
      var _transform = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _callee2() {
        var _this = this;
        var temp, _loop, index;
        return (0,regeneratorRuntime/* default */.A)().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              temp = [];
              if (!(this.bankQuestionList.length > 0)) {
                _context3.next = 12;
                break;
              }
              console.log(this.bankQuestionList, 'sss');
              _loop = /*#__PURE__*/(0,regeneratorRuntime/* default */.A)().mark(function _loop() {
                var item, analysis, answer, questionContent, questionType, questionId, id, title, problemType, finish, answerArr, children, answerIndex, childTemp;
                return (0,regeneratorRuntime/* default */.A)().wrap(function _loop$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      item = _this.bankQuestionList[index];
                      analysis = item.analysis, answer = item.answer, questionContent = item.questionContent, questionType = item.questionType, questionId = item.questionId;
                      if (!(questionType != 1 && questionType != 2)) {
                        _context2.next = 4;
                        break;
                      }
                      return _context2.abrupt("return", 1);
                    case 4:
                      id = questionId;
                      title = "(".concat(_this.questionType2[questionType], ")").concat(questionContent);
                      problemType = _this.questionType[questionType];
                      finish = false;
                      answerArr = [];
                      children = answer;
                      answerIndex = [];
                      childTemp = [];
                      children.forEach(function (item2, index2) {
                        var answer2 = item2.answer,
                          id2 = item2.id,
                          isTrue2 = item2.isTrue;
                        var alias = _this.aliasMap[id2];
                        childTemp.push({
                          alias: alias,
                          answer: answer2,
                          isSelect: 0,
                          isTrue: isTrue2
                        });
                        if (isTrue2.toLowerCase() === 'true') {
                          answerArr.push(alias);
                          answerIndex.push(id2);
                        }
                      });
                      children = [].concat(childTemp);
                      temp.push({
                        id: id,
                        analysis: analysis,
                        title: title,
                        problemType: problemType,
                        finish: finish,
                        answerArr: answerArr,
                        answerIndex: answerIndex,
                        children: children
                      });
                    case 15:
                    case "end":
                      return _context2.stop();
                  }
                }, _loop);
              });
              index = 0;
            case 5:
              if (!(index < this.bankQuestionList.length)) {
                _context3.next = 12;
                break;
              }
              return _context3.delegateYield(_loop(), "t0", 7);
            case 7:
              if (!_context3.t0) {
                _context3.next = 9;
                break;
              }
              return _context3.abrupt("continue", 9);
            case 9:
              index++;
              _context3.next = 5;
              break;
            case 12:
              this.transformQuestionList = [].concat(temp);
              return _context3.abrupt("return", this);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee2, this);
      }));
      function transform() {
        return _transform.apply(this, arguments);
      }
      return transform;
    }()
  }]);
}();
var ExamBank = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_QuestionBank) {
  function ExamBank(examId) {
    var _this2;
    _classCallCheck(this, ExamBank);
    _this2 = _callSuper(this, ExamBank);
    _this2.examId = examId;
    return _this2;
  }
  _inherits(ExamBank, _QuestionBank);
  return _createClass(ExamBank, [{
    key: "init",
    value: function () {
      var _init2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var result;
        return _regeneratorRuntime().wrap(function _callee3$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getExamInfo({
                examId: this.examId
              });
            case 2:
              result = _context4.sent;
              this.bankQuestionList = result.data.questionList;
              return _context4.abrupt("return", this);
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee3, this);
      }));
      function init() {
        return _init2.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "transform",
    value: function () {
      var _transform2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", _superPropGet(ExamBank, "transform", this, 3)([]));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee4, this);
      }));
      function transform() {
        return _transform2.apply(this, arguments);
      }
      return transform;
    }()
  }, {
    key: "submit",
    value: function submit() {
      var userId = store.getters.userId;
    }
  }]);
}(QuestionBank)));

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/exam/currentQuestion/index.vue?vue&type=script&lang=js&
/* provided dependency */ var currentQuestionvue_type_script_lang_js_console = __webpack_require__(43859)["A"];






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




/* harmony default export */ var currentQuestionvue_type_script_lang_js_ = ({
  components: {
    liuSlideQuestions: liu_slide_questions/* default */.A
  },
  data: function data() {
    return {
      list: [],
      //问题列表数据
      bankTitle: '',
      newQuestionsAnswer: []
    };
  },
  methods: {
    //点击提交
    subData: function subData(data) {
      currentQuestionvue_type_script_lang_js_console.log('提交的数据：' + JSON.stringify(data));
    },
    isAnswer: function isAnswer(index) {
      this.$set(this.list[index], 'isAnswer', true);
      this.setSelect(index);
    },
    setSelect: function setSelect(index) {
      var _this = this;
      // let temp = this.list
      this.newQuestionsAnswer[index].finish = true;
      this.newQuestionsAnswer[index].answerIndex.forEach(function (item) {
        _this.newQuestionsAnswer[index].children[item].isSelect = 1;
      });
      this.list = this.newQuestionsAnswer;
    },
    newQuestionsAnswerHandler: function newQuestionsAnswerHandler(val) {
      currentQuestionvue_type_script_lang_js_console.log(val);
      this.newQuestionsAnswer = val;
    }
  },
  watch: {},
  // 页面周期函数--监听页面加载
  onLoad: function onLoad(params) {
    this.questionId = params.id;
    this.bankTitle = params.title;
  },
  // 页面周期函数--监听页面初次渲染完成
  onReady: function onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow: function onShow() {
    var _this2 = this;
    var question = new QuestionBank(this.questionId);
    question.init().then(function (res) {
      return res.transform();
    }).then(function (res) {
      _this2.list = res.transformQuestionList;
    });
  },
  // 页面周期函数--监听页面隐藏
  onHide: function onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload: function onUnload() {} // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
});
;// CONCATENATED MODULE: ./src/pages/exam/currentQuestion/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var exam_currentQuestionvue_type_script_lang_js_ = (currentQuestionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[5]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-22[0].rules[0].use[6]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/pages/exam/currentQuestion/index.vue?vue&type=style&index=0&id=7d67d317&lang=scss&scoped=true&
var currentQuestionvue_type_style_index_0_id_7d67d317_lang_scss_scoped_true_ = __webpack_require__(3687);
;// CONCATENATED MODULE: ./src/pages/exam/currentQuestion/index.vue?vue&type=style&index=0&id=7d67d317&lang=scss&scoped=true&
 /* harmony default export */ var exam_currentQuestionvue_type_style_index_0_id_7d67d317_lang_scss_scoped_true_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/pages/exam/currentQuestion/index.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  exam_currentQuestionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7d67d317",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var currentQuestion = (component.exports);

/***/ }),

/***/ 47036:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ liu_slide_questions; }
});

;// CONCATENATED MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-42[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/liu-slide-questions/components/liu-slide-questions/liu-slide-questions.vue?vue&type=template&id=21dca0c7&scoped=true&
var components;
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-uni-view',{staticClass:"page-main"},[_c('v-uni-view',{staticClass:"topbox"},[_c('v-uni-image',{staticClass:"topimg",attrs:{"src":_vm.topBanner}}),_c('v-uni-view',{staticClass:"imgtext"},[_vm._v(_vm._s(_vm.bankTitle))])],1),_c('v-uni-swiper',{staticClass:"swipercard",attrs:{"previous-margin":"0","next-margin":"0","circular":false,"autoplay":false,"current":_vm.currentIndex,"duration":"200"},on:{"change":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
(_vm.eventHandle).apply(void 0, arguments)
}}},[_vm._l((_vm.newQuestionsAnswer),function(item,index){return [_c('v-uni-swiper-item',{key:index+'_0',staticClass:"swiperitem"},[_c('v-uni-view',{staticClass:"itembox"},[_c('v-uni-view',{staticClass:"box-hd"},[_c('v-uni-view',{staticClass:"hdname"},[_vm._v("当前第"),_c('v-uni-view',{staticClass:"text1"},[_vm._v(_vm._s(index + 1))]),_vm._v("道题")],1),_c('v-uni-view',{staticClass:"hdnum"},[_vm._v("共"+_vm._s(_vm.totalNum)+"道题")])],1),_c('v-uni-view',{staticClass:"contentbox"},[_c('v-uni-view',{staticClass:"boxtitle"},[_c('v-uni-text',{staticClass:"textl"},[_vm._v(_vm._s(index + 1)+"、")]),_c('v-uni-text',{staticClass:"textr"},[_vm._v(_vm._s(item.title))])],1),(item.problemType == 'SINGLE')?_c('v-uni-view',_vm._l((item.children),function(self,idxs){return _c('v-uni-view',{key:idxs,staticClass:"boxbody"},[_c('v-uni-view',{staticClass:"chooseitem",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.singChoose(index, idxs)
}}},[(!self.isSelect)?_c('v-uni-view',{staticClass:"sinchoose"}):_vm._e(),(self.isSelect && !item.finish)?_c('v-uni-image',{staticClass:"sinchoose-on",attrs:{"src":(_vm.imgUrl + "/checked_true.png"),"mode":""}}):_vm._e(),(
                      self.isSelect &&
                      item.finish &&
                      !item.answerArr.includes(self.alias)
                    )?_c('v-uni-image',{staticClass:"sinchoose-on",attrs:{"src":(_vm.imgUrl + "/checked_false.png"),"mode":""}}):_vm._e(),(
                      self.isSelect &&
                      item.finish &&
                      item.answerArr.includes(self.alias)
                    )?_c('v-uni-image',{staticClass:"sinchoose-on",attrs:{"src":(_vm.imgUrl + "/checked_true.png"),"mode":""}}):_vm._e(),_c('v-uni-view',{staticClass:"bodyr"},[_vm._v(_vm._s(self.alias)+"、"+_vm._s(self.answer))])],1)],1)}),1):_vm._e(),(item.problemType == 'MULTY')?_c('v-uni-view',_vm._l((item.children),function(self,idxm){return _c('v-uni-view',{key:idxm,staticClass:"boxbody"},[_c('v-uni-view',{staticClass:"chooseitem",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.multyChoose(index, idxm)
}}},[(!self.isSelect)?_c('v-uni-view',{staticClass:"sinchoose sinchoose2"}):_vm._e(),(!item.finish && self.isSelect)?_c('v-uni-image',{staticClass:"sinchoose-on",attrs:{"src":(_vm.imgUrl + "/checkbox_true.png"),"mode":""}}):_vm._e(),(
                      item.finish &&
                      self.isSelect &&
                      item.answerArr.includes(self.alias)
                    )?_c('v-uni-image',{staticClass:"sinchoose-on",attrs:{"src":(_vm.imgUrl + "/checkbox_true.png"),"mode":""}}):_vm._e(),(
                      item.finish &&
                      self.isSelect &&
                      !item.answerArr.includes(self.alias)
                    )?_c('v-uni-image',{staticClass:"sinchoose-on",attrs:{"src":(_vm.imgUrl + "/checkbox_false.png"),"mode":""}}):_vm._e(),_c('v-uni-view',{staticClass:"bodyr"},[_vm._v(_vm._s(self.alias)+"、"+_vm._s(self.answer))])],1)],1)}),1):_vm._e(),(item.problemType == 'QUESTION')?_c('v-uni-view',{staticClass:"writeitem"},[_c('v-uni-textarea',{staticClass:"textInfo",attrs:{"auto-height":true,"maxlength":"200","placeholder":"请输入您的答案"},on:{"input":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.bindTextAreaBlur(index)
}},model:{value:(item.userAnswer),callback:function ($$v) {_vm.$set(item, "userAnswer", $$v)},expression:"item.userAnswer"}})],1):_vm._e(),(item.finish === true)?_c('v-uni-view',{staticClass:"answer"},[_c('v-uni-view',[_vm._v("解析:"),_c('v-uni-text',[_vm._v(_vm._s(item.analysis))])],1)],1):_vm._e()],1),_c('v-uni-view',{staticClass:"footbtn"},[_c('v-uni-view',{staticClass:"ftbtn1",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.back(index)
}}},[_vm._v("上一题")]),_c('v-uni-view',{staticClass:"ftbtn1",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.answer(index)
}}},[_vm._v("完成")]),(index + 1 < _vm.totalNum)?_c('v-uni-view',{staticClass:"ftbtn1",on:{"click":function($event){
arguments[0] = $event = _vm.$handleEvent($event);
_vm.next(index)
}}},[_vm._v("下一题")]):_vm._e(),( false)?0:_vm._e()],1)],1)],1)]})],2)],1)}
var recyclableRender = false
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-json.js
var es_date_to_json = __webpack_require__(60739);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__(33110);
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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-43[0].rules[0].use[0]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/liu-slide-questions/components/liu-slide-questions/liu-slide-questions.vue?vue&type=script&lang=js&
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

/* harmony default export */ var liu_slide_questionsvue_type_script_lang_js_ = ({
  props: {
    //问题列表数据
    dataList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    bankTitle: String
  },
  watch: {
    dataList: {
      deep: true,
      immediate: true,
      handler: function handler(newArr) {
        if (newArr.length) {
          this.newQuestionsAnswer = JSON.parse(JSON.stringify(newArr));
          this.totalNum = newArr.length;
          this.formSubmitData = [];
          this.setEmptyData();
        }
      }
    },
    newQuestionsAnswer: {
      deep: true,
      immediate: true,
      handler: function handler(newArr) {
        this.$emit('newQuestionsAnswer', newArr);
      }
    }
  },
  data: function data() {
    return {
      topBanner: "".concat(this.imgUrl, "/banner.png"),
      chooseonImg: "".concat(this.imgUrl, "/chooseon.png"),
      chooseonImg2: "".concat(this.imgUrl, "/chooseon2.png"),
      totalNum: 0,
      currentIndex: 0,
      newQuestionsAnswer: [],
      formSubmitData: [] //提交所需数据
    };
  },
  computed: {
    imgUrl: function imgUrl() {
      return (__webpack_require__(27358).imgUrl);
    }
  },
  methods: {
    answer: function answer(index) {
      this.$emit('isAnswer', index);
      // this.dataList[index].isAnswer = true
      // console.log(this.dataList)
      // this.dataList = [...this.dataList]
    },
    //创建提交数组的数据结构
    setEmptyData: function setEmptyData() {
      var _this = this;
      this.newQuestionsAnswer.forEach(function (res) {
        var userAnswer = '';
        res.children && res.children.forEach(function (item) {
          if (!item.isSelect) item.isSelect = 0;else userAnswer = item;
        });
        if (res.problemType == 'QUESTION') userAnswer = res.userAnswer;
        _this.formSubmitData.push({
          id: res.id,
          //题目id
          userAnswer: userAnswer //答案
        });
      });
    },
    submitData: function submitData() {
      for (var i = 0; i < this.formSubmitData.length; i++) {
        if (!this.formSubmitData[i].userAnswer) {
          var toast = '请完成第' + (i + 1) + '题后提交！';
          uni.showToast({
            title: toast,
            icon: 'none'
          });
          this.currentIndex = i;
          return;
        }
      }
      this.$emit('submit', this.formSubmitData);
    },
    //单选事件
    singChoose: function singChoose(j, e) {
      if (this.newQuestionsAnswer[j].children[e].isSelect) {
        this.newQuestionsAnswer[j].children[e].isSelect = 0;
        this.formSubmitData[j].userAnswer = '';
      } else {
        for (var i = 0; i < this.newQuestionsAnswer[j].children.length; i++) {
          if (this.newQuestionsAnswer[j].children[i].isSelect) {
            this.newQuestionsAnswer[j].children[i].isSelect = 0;
          }
        }
        this.newQuestionsAnswer[j].children[e].isSelect = 1;
        // 这块结合业务逻辑可以进行优化处理
        // 例如只保存用户已选择答案Id等
        this.formSubmitData[j].userAnswer = this.newQuestionsAnswer[j].children[e];
      }
      this.newQuestionsAnswer = JSON.parse(JSON.stringify(this.newQuestionsAnswer));
    },
    //多选事件
    multyChoose: function multyChoose(j, e) {
      this.newQuestionsAnswer[j].children[e].isSelect = this.newQuestionsAnswer[j].children[e].isSelect ^ 1;
      var obj = [];
      for (var i = 0; i < this.newQuestionsAnswer[j].children.length; i++) {
        if (this.newQuestionsAnswer[j].children[i].isSelect) {
          // 这块结合业务逻辑可以进行优化处理
          // 例如 只保存用户已选择答案Id等
          // obj.push(this.newQuestionsAnswer[j].children[i].id)
          obj.push(this.newQuestionsAnswer[j].children[i]);
        }
      }
      console.log(obj);
      this.formSubmitData[j].userAnswer = obj;
      this.newQuestionsAnswer = JSON.parse(JSON.stringify(this.newQuestionsAnswer));
    },
    //富文本
    bindTextAreaBlur: function bindTextAreaBlur(index) {
      this.formSubmitData[index].userAnswer = this.newQuestionsAnswer[index].userAnswer;
    },
    //swiper改变时
    eventHandle: function eventHandle(e) {
      // 这块可以结合业务逻辑进行优化处理，如左右滑动切换题目时做一些提示处理等
      this.currentIndex = e.detail.current;
    },
    // 上一题
    back: function back(index) {
      if (!index) return;
      this.currentIndex = index - 1;
    },
    //下一题
    next: function next(index) {
      this.currentIndex = index + 1;
    }
  }
});
;// CONCATENATED MODULE: ./src/uni_modules/liu-slide-questions/components/liu-slide-questions/liu-slide-questions.vue?vue&type=script&lang=js&
 /* harmony default export */ var liu_slide_questions_liu_slide_questionsvue_type_script_lang_js_ = (liu_slide_questionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/h5-vue-style-loader/index.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/index.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-scoped-loader/index.js!./src/uni_modules/liu-slide-questions/components/liu-slide-questions/liu-slide-questions.vue?vue&type=style&index=0&id=21dca0c7&scoped=true&lang=css&
var liu_slide_questionsvue_type_style_index_0_id_21dca0c7_scoped_true_lang_css_ = __webpack_require__(2152);
;// CONCATENATED MODULE: ./src/uni_modules/liu-slide-questions/components/liu-slide-questions/liu-slide-questions.vue?vue&type=style&index=0&id=21dca0c7&scoped=true&lang=css&
 /* harmony default export */ var liu_slide_questions_liu_slide_questionsvue_type_style_index_0_id_21dca0c7_scoped_true_lang_css_ = ((/* unused pure expression or super */ null && (mod))); 
// EXTERNAL MODULE: ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18535);
;// CONCATENATED MODULE: ./src/uni_modules/liu-slide-questions/components/liu-slide-questions/liu-slide-questions.vue

var renderjs
;

;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  liu_slide_questions_liu_slide_questionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "21dca0c7",
  null,
  false,
  components,
  renderjs
)

/* harmony default export */ var liu_slide_questions = (component.exports);

/***/ }),

/***/ 38411:
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
___CSS_LOADER_EXPORT___.push([module.id, ".page-main[data-v-21dca0c7]{width:100%;height:100%;display:flex;flex-direction:column}.topbox[data-v-21dca0c7]{width:100%;height:%?140?%;position:relative}.topbox .topimg[data-v-21dca0c7]{width:100%;height:100%}.topbox .imgtext[data-v-21dca0c7]{position:absolute;bottom:%?60?%;left:%?58?%;font-size:%?36?%;font-weight:400;color:#fff;line-height:%?36?%;text-shadow:%?0?% %?2?% %?4?% rgba(0,0,0,.5)}.swipercard[data-v-21dca0c7]{width:100%;flex:1;overflow:hidden;background:#fff}.itembox[data-v-21dca0c7]{width:calc(100% - %?96?%);padding:%?32?% %?48?%}.box-hd[data-v-21dca0c7]{display:flex;justify-content:space-between;align-items:center;border-bottom:%?4?% dashed #f0f0f0;padding-bottom:%?16?%;padding-left:%?16?%}.hdname[data-v-21dca0c7]{width:%?400?%;font-size:%?28?%;display:flex;align-items:flex-start;font-weight:500;color:#666;line-height:%?40?%}.text1[data-v-21dca0c7]{color:#1fa474;font-size:%?40?%;line-height:%?32?%}.hdnum[data-v-21dca0c7]{font-size:%?28?%;font-weight:400;color:#666;line-height:%?42?%}.contentbox[data-v-21dca0c7]{font-size:%?30?%;color:#333;margin-top:%?48?%}.boxtitle .textl[data-v-21dca0c7]{width:%?50?%;height:%?34?%;background:linear-gradient(90deg,#c3ffda,#fff)}.boxbody[data-v-21dca0c7]{padding-left:%?40?%;line-height:%?64?%;margin:%?16?% 0}.chooseitem[data-v-21dca0c7]{display:flex;align-items:center}.sinchoose[data-v-21dca0c7]{width:%?28?%;height:%?28?%;margin-right:%?16?%;border-radius:50%;background:#fff;border:%?2?% solid #bfbdbd}.sinchoose2[data-v-21dca0c7]{border-radius:%?6?%}.sinchoose-on[data-v-21dca0c7]{width:%?32?%;height:%?32?%;margin-right:%?16?%}.writeitem uni-textarea[data-v-21dca0c7]{min-height:%?164?%;margin:%?24?% auto;padding:%?16?%;border:%?2?% solid #ebebeb;border-radius:4px;font-size:%?30?%;color:#333}.footbtn[data-v-21dca0c7]{display:flex;justify-content:space-between;position:fixed;bottom:%?220?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding:0 %?24?%}.ftbtn1[data-v-21dca0c7]{width:%?230?%;height:%?80?%;line-height:%?80?%;text-align:center;border:%?2?% solid #1fa474;font-size:%?30?%;font-weight:500;color:#1fa474}.ftbtn2[data-v-21dca0c7]{width:%?270?%;height:%?80?%;line-height:%?80?%;text-align:center;background:#1fa474;font-size:%?30?%;font-weight:500;color:#fff}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 36459:
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n/**\r\n * uni-app内置的常用样式变量\r\n */\r\n/* 主题颜色 */\r\n/* 文字大小 */\r\n/* 字重 */\r\n/* 文字颜色 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-7d67d317]{height:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 99801:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G8: function() { return /* binding */ getExamInfo; },
/* harmony export */   Hh: function() { return /* binding */ load; },
/* harmony export */   qY: function() { return /* binding */ getMyGrade; },
/* harmony export */   uG: function() { return /* binding */ getAllQuestionBank; },
/* harmony export */   wB: function() { return /* binding */ getQuestionByBank; },
/* harmony export */   w_: function() { return /* binding */ addExamRecord; }
/* harmony export */ });
/* unused harmony exports examSubmit, getAllExamInfo */
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41325);

var api = {
  load: '/nus/exam/getExamInfo',
  submit: ''
};
var load = function load(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: api.load,
    method: 'post',
    data: data
  });
};
var examSubmit = function examSubmit(data) {
  return request({
    url: "/nus/districts/tree",
    method: 'get',
    params: params
  });
};

// 查询所有的考试信息
var getAllExamInfo = function getAllExamInfo(params) {
  return request({
    url: "/nus/exam/allExamInfo",
    method: 'get',
    params: params
  });
};
var getExamInfo = function getExamInfo(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/exam/getExamInfoById",
    method: 'get',
    params: params
  });
};
// 获取所有的题库信息
var getAllQuestionBank = function getAllQuestionBank(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/bank/getQuestionBank",
    method: 'get',
    params: params
  });
};
// 获取题库中所有题目的类型和数量
var getQuestionByBank = function getQuestionByBank(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/bank/getQuestionByBank",
    method: 'get',
    params: params
  });
};

// 获取个人成绩
var getMyGrade = function getMyGrade(params) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/record/getMyGrade",
    method: 'get',
    params: params
  });
};

// 保存考试信息
var addExamRecord = function addExamRecord(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    url: "/nus/record/addExamRecord",
    method: 'post',
    data: data
  });
};

/***/ }),

/***/ 30566:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(79504);
var aCallable = __webpack_require__(79306);
var isObject = __webpack_require__(20034);
var hasOwn = __webpack_require__(39297);
var arraySlice = __webpack_require__(67680);
var NATIVE_BIND = __webpack_require__(40616);

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ 16575:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(39297);

module.exports = function (descriptor) {
  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};


/***/ }),

/***/ 60825:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var getBuiltIn = __webpack_require__(97751);
var apply = __webpack_require__(18745);
var bind = __webpack_require__(30566);
var aConstructor = __webpack_require__(35548);
var anObject = __webpack_require__(28551);
var isObject = __webpack_require__(20034);
var create = __webpack_require__(2360);
var fails = __webpack_require__(79039);

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target === newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 40888:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var call = __webpack_require__(69565);
var isObject = __webpack_require__(20034);
var anObject = __webpack_require__(28551);
var isDataDescriptor = __webpack_require__(16575);
var getOwnPropertyDescriptorModule = __webpack_require__(77347);
var getPrototypeOf = __webpack_require__(42787);

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
  if (descriptor) return isDataDescriptor(descriptor)
    ? descriptor.value
    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ 15472:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(46518);
var globalThis = __webpack_require__(44576);
var setToStringTag = __webpack_require__(10687);

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(globalThis.Reflect, 'Reflect', true);


/***/ }),

/***/ 12773:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16280);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76918);


function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ 57756:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _callSuper; }
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(60825);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4150);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
var isNativeReflectConstruct = __webpack_require__(40884);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__(16280);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__(76918);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(65376);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(12773);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js




function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,esm_typeof/* default */.A)(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,assertThisInitialized/* default */.A)(t);
}

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/callSuper.js




function _callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), _possibleConstructorReturn(t, (0,isNativeReflectConstruct/* default */.A)() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}


/***/ }),

/***/ 4150:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40875);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10287);


function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ 91913:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16280);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76918);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84185);
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97130);




function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(t, e);
}


/***/ }),

/***/ 40884:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60825);

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ 97130:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10287);

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

}]);