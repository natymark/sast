"use strict";
(self["webpackChunkhydro_flex_control"] = self["webpackChunkhydro_flex_control"] || []).push([[1055],{

/***/ 81055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NX: function() { return /* binding */ apiGoods; }
});

// UNUSED EXPORTS: apiGetTabs, apiMsgList, apiNewList, apiWeiboList, getAllPlantsTree, getDayConsumeList, getYearConsumeList

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__(25276);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(44114);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__(13609);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(26099);
;// CONCATENATED MODULE: ./src/mock/goods.js
var goods = [{
  "id": "1",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd1.jpg",
  "goodName": "【1】  六罐装荷兰美素佳儿金装2段900g",
  "goodPrice": 1149.00,
  "goodSold": 648
}, {
  "id": "2",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd2.jpg",
  "goodName": "【2】  韩国Amore爱茉莉红吕洗发水套装修复受损发质",
  "goodPrice": 89.00,
  "goodSold": 128
}, {
  "id": "3",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd3.jpg",
  "goodName": "【3】  Friso美素佳儿 金装婴儿配方奶粉3段900g",
  "goodPrice": 195.00,
  "goodSold": 968
}, {
  "id": "4",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd4.jpg",
  "goodName": "【4】  Fisher goodPrice费雪 费雪三轮儿童滑行车",
  "goodPrice": 299.00,
  "goodSold": 85
}, {
  "id": "5",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd5.jpg",
  "goodName": "【5】  Babylee巴布力 实木婴儿床 雷卡拉130*70cm",
  "goodPrice": 1889.00,
  "goodSold": 18
}, {
  "id": "6",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd6.jpg",
  "goodName": "【6】  Pigeon贝亲 独立三层奶粉盒 送小罐奶粉1段200g",
  "goodPrice": 70.00,
  "goodSold": 658
}, {
  "id": "7",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd7.jpg",
  "goodName": "【7】 TTBOO兔兔小布 肩纽扣套装",
  "goodPrice": 268.00,
  "goodSold": 128
}, {
  "id": "8",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd8.jpg",
  "goodName": "【8】  Nuna璐拉 婴儿布里奇果精纯嫩肤沐浴露婴儿精纯芦荟胶",
  "goodPrice": 140.00,
  "goodSold": 366
}, {
  "id": "9",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd9.jpg",
  "goodName": "【9】  illuma启赋 奶粉3段900g",
  "goodPrice": 252.00,
  "goodSold": 98
}, {
  "id": "10",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd10.jpg",
  "goodName": "【10】  Abbott雅培乳蛋白部分水解婴儿配方奶粉3段820g",
  "goodPrice": 89.00,
  "goodSold": 128
}, {
  "id": "11",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd11.jpg",
  "goodName": "【11】  韩蜜 酷炫唇蜜（礼盒套装）2.8g*4",
  "goodPrice": 179.00,
  "goodSold": 35
}, {
  "id": "12",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd12.jpg",
  "goodName": "【12】  保税区直发【3包装】日本Merries花王纸尿裤NB90",
  "goodPrice": 289.00,
  "goodSold": 1928
}, {
  "id": "13",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd13.jpg",
  "goodName": "【13】  Comotomo可么多么 硅胶奶瓶（0-3月奶嘴）150ml绿色",
  "goodPrice": 203.00,
  "goodSold": 87
}, {
  "id": "14",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd14.jpg",
  "goodName": "【14】  香港直邮德国瑞德露Rival de Loop芦荟精华安瓶",
  "goodPrice": 152.00,
  "goodSold": 61
}, {
  "id": "15",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd15.jpg",
  "goodName": "【15】  保税区直发药师堂尊马油香草味温和保湿无刺激面霜",
  "goodPrice": 269.00,
  "goodSold": 73
}, {
  "id": "16",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd16.jpg",
  "goodName": "【16】  香港直邮日本Spatreatment眼膜保湿去细纹法令纹",
  "goodPrice": 219.00,
  "goodSold": 13
}, {
  "id": "17",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd17.jpg",
  "goodName": "【17】  韩国MEDIHEALNMF可莱丝针剂睡眠面膜",
  "goodPrice": 81.00,
  "goodSold": 128
}, {
  "id": "18",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd18.jpg",
  "goodName": "【18】  DHC蝶翠诗橄榄蜂蜜滋养洗脸手工皂90g",
  "goodPrice": 123.00,
  "goodSold": 77
}, {
  "id": "19",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd19.jpg",
  "goodName": "【19】  日本资生堂CPB肌肤之钥新版隔离霜 清爽型 30ml",
  "goodPrice": 429.00,
  "goodSold": 36
}, {
  "id": "20",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd20.jpg",
  "goodName": "【20】 Heinz亨氏 婴儿面条优加面条全素套餐组合3口味3盒",
  "goodPrice": 39.00,
  "goodSold": 61
}, {
  "id": "21",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd21.jpg",
  "goodName": "【21】  Heinz亨氏 乐维滋果汁泥组合5口味15袋",
  "goodPrice": 69.00,
  "goodSold": 55
}, {
  "id": "22",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd22.jpg",
  "goodName": "【22】  保税区直发澳大利亚Swisse高浓度蔓越莓胶囊30粒",
  "goodPrice": 271.00,
  "goodSold": 19
}, {
  "id": "23",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd23.jpg",
  "goodName": "【23】  挪威Nordic Naturals小鱼婴幼儿鱼油DHA滴剂",
  "goodPrice": 102.00,
  "goodSold": 125
}, {
  "id": "24",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd24.jpg",
  "goodName": "【24】  澳大利亚Bio island DHA for Pregnancy海藻油DHA",
  "goodPrice": 289.00,
  "goodSold": 28
}, {
  "id": "25",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd25.jpg",
  "goodName": "【25】  澳大利亚Fatblaster Coconut Detox椰子水",
  "goodPrice": 152.00,
  "goodSold": 17
}, {
  "id": "26",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd26.jpg",
  "goodName": "【26】  Suitsky舒比奇 高护极薄舒爽纸尿片尿不湿XL60",
  "goodPrice": 99.00,
  "goodSold": 181
}, {
  "id": "27",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd27.jpg",
  "goodName": "【27】  英国JUST SOAP手工皂 玫瑰天竺葵蛋糕皂",
  "goodPrice": 72.00,
  "goodSold": 66
}, {
  "id": "28",
  "goodImg": "https://www.mescroll.com/demo/res/img/pd28.jpg",
  "goodName": "【28】  德国NUK 多色婴幼儿带盖学饮杯",
  "goodPrice": 92.00,
  "goodSold": 138
}];
/* harmony default export */ var mock_goods = (goods);
;// CONCATENATED MODULE: ./src/mock/plant.js
var plant_plants = [{
  createBy: null,
  createTime: null,
  updateBy: null,
  updateTime: null,
  remark: null,
  id: 420500,
  name: '宜昌市',
  pid: 420000,
  shortName: null,
  levelType: 2,
  cityCode: null,
  zipCode: null,
  mergerName: null,
  lng: null,
  lat: null,
  pinyin: null,
  children: [{
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420583,
    name: '枝江市',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420582,
    name: '当阳市',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420581,
    name: '宜都市',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420529,
    name: '五峰土家族自治县',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420528,
    name: '长阳土家族自治县',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420527,
    name: '秭归县',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420526,
    name: '兴山县',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420525,
    name: '远安县',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420506,
    name: '夷陵区',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420505,
    name: '猇亭区',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420504,
    name: '点军区',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: [{
      createBy: null,
      createTime: null,
      updateBy: null,
      updateTime: null,
      remark: null,
      id: 17,
      name: '电厂17',
      pid: 420504,
      shortName: null,
      levelType: 4,
      cityCode: null,
      zipCode: null,
      mergerName: null,
      lng: null,
      lat: null,
      pinyin: null,
      children: []
    }]
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420503,
    name: '伍家岗区',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: []
  }, {
    createBy: null,
    createTime: null,
    updateBy: null,
    updateTime: null,
    remark: null,
    id: 420502,
    name: '西陵区',
    pid: 420500,
    shortName: null,
    levelType: 3,
    cityCode: null,
    zipCode: null,
    mergerName: null,
    lng: null,
    lat: null,
    pinyin: null,
    children: [{
      createBy: null,
      createTime: null,
      updateBy: null,
      updateTime: null,
      remark: null,
      id: 10,
      name: '电厂10',
      pid: 420502,
      shortName: null,
      levelType: 4,
      cityCode: null,
      zipCode: null,
      mergerName: null,
      lng: null,
      lat: null,
      pinyin: null,
      children: []
    }]
  }]
}];
/* harmony default export */ var plant = ((/* unused pure expression or super */ null && (plant_plants)));
;// CONCATENATED MODULE: ./src/mock/mock.js
/* provided dependency */ var console = __webpack_require__(43859)["A"];




/*
本地模拟接口请求, 仅demo演示用.
实际项目以您服务器接口返回的数据为准,无需本地处理分页.
请参考官方写法: https://www.mescroll.com/uni.html?v=20200210#tagUpCallback
* */

// 模拟数据



// 获取新闻列表
function apiNewList(pageNum, pageSize) {
  return new Promise(function (resolute, reject) {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        var list = [];
        if (!pageNum) {
          //模拟下拉刷新返回的数据
          var id = new Date().getTime();
          var newObj = {
            id: id,
            title: "【新增新闻" + id + "】 标题",
            content: "新增新闻的内容"
          };
          list.push(newObj);
        } else {
          //模拟上拉加载返回的数据
          for (var i = 0; i < pageSize; i++) {
            var upIndex = (pageNum - 1) * pageSize + i + 1;
            var _newObj = {
              id: upIndex,
              title: "【新闻" + upIndex + "】 标题标题标题标题标题",
              content: "内容内容内容内容内容内容内容内容内容"
            };
            list.push(_newObj);
          }
          console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
        }
        //模拟接口请求成功
        resolute(list);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}

// 搜索商品
function apiGoods(pageNum, pageSize, keyword) {
  return new Promise(function (resolute, reject) {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        var data = {
          list: [],
          // 数据列表
          totalCount: 0,
          // 总数量
          totalPage: 0,
          // 总页数
          hasNext: false // 是否有下一页
        };

        // 符合关键词的记录
        var keywordList = [];
        if (!keyword || keyword == "全部") {
          // 搜索全部商品
          keywordList = mock_goods;
        } else {
          // 关键词搜索
          if (keyword == "母婴") keyword = "婴"; // 为这个关键词展示多几条数据
          for (var i = 0; i < mock_goods.length; i++) {
            var good = mock_goods[i];
            if (good.goodName.indexOf(keyword) !== -1) {
              keywordList.push(good);
            }
          }
        }

        // 分页
        for (var _i = (pageNum - 1) * pageSize; _i < pageNum * pageSize; _i++) {
          if (_i >= keywordList.length) break;
          data.list.push(keywordList[_i]);
        }

        // 汇总数据
        data.totalCount = keywordList.length;
        data.totalPage = Math.ceil(data.totalCount / pageSize);
        data.hasNext = pageNum < data.totalPage;

        //模拟接口请求成功
        console.log("pageNum=" + pageNum + ", pageSize=" + pageSize + ", data.list.length=" + data.list.length + ", totalCount=" + data.totalCount + ", totalPage=" + data.totalPage + ", hasNext=" + data.hasNext + (keyword ? ", keyword=" + keyword : ""));
        resolute(data);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}

// 获取微博列表
function apiWeiboList(pageNum, pageSize) {
  return new Promise(function (resolute, reject) {
    //延时2秒,模拟联网
    setTimeout(function () {
      try {
        var list = [];
        if (!pageNum) {
          //此处模拟下拉刷新返回的数据
          var id = new Date().getTime();
          var newObj = {
            id: id,
            title: "【新增微博" + id + "】 新增微博",
            content: "新增微博的内容,新增微博的内容"
          };
          list.push(newObj);
        } else {
          //此处模拟上拉加载返回的数据
          for (var i = 0; i < pageSize; i++) {
            var upIndex = (pageNum - 1) * pageSize + i + 1;
            var _newObj2 = {
              id: upIndex,
              title: "【微博" + upIndex + "】 标题标题标题标题标题标题",
              content: "内容内容内容内容内容内容内容内容内容内容"
            };
            list.push(_newObj2);
          }
          console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
        }
        //模拟接口请求成功
        resolute(list);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 2000);
  });
}

// 获取消息列表(共5页消息)
function apiMsgList(pageNum, pageSize) {
  return new Promise(function (resolute, reject) {
    //延时一秒,模拟联网
    setTimeout(function () {
      try {
        var list = [];
        //模拟下拉加载更多记录
        for (var i = 0; i < pageSize; i++) {
          var msgId = (pageNum - 1) * pageSize + i + 1;
          var newObj = {
            id: msgId,
            title: "【消息" + msgId + "】",
            content: "内容: 下拉获取聊天记录"
          };
          // 此处模拟只有5页的消息 (第5页只有3条)
          if (pageNum >= 5 && i >= 3) {} else {
            list.unshift(newObj);
          }
        }
        console.log("page.num=" + pageNum + ", page.size=" + pageSize + ", curPageData.length=" + list.length);
        //模拟接口请求成功
        resolute(list);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 1000);
  });
}

// 获取tabs类目
function apiGetTabs() {
  return new Promise(function (resolute, reject) {
    //延时,模拟联网
    setTimeout(function () {
      try {
        var tabs = ['全部', '母线', '变压器', '发电机', '断路器', '隔离开关', '接地插刀', '电压互感器'];
        //模拟接口请求成功
        resolute(tabs);
      } catch (e) {
        //模拟接口请求失败
        reject(e);
      }
    }, 10);
  });
}

// 获取所有电厂
function getAllPlantsTree() {
  return new Promise(function (resolute, reject) {
    setTimeout(function () {
      try {
        var data = {
          list: [],
          totalCount: 0,
          totalPage: 0,
          hasNext: false
        };
        var keywordList = [];
        keywordList = plants;
        data.list = plants;
        resolute(data);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}
function getDayConsumeList(_ref) {
  var date = _ref.date,
    region = _ref.region;
  console.log(date, region, 's1');
  return new Promise(function (resolute, reject) {
    setTimeout(function () {
      try {
        var data1 = {
          data: [{
            plantId: '01114205000009',
            plantName: '招徕河水电站',
            integralValue: 320,
            maxIntegralValue: 658,
            maxDate: '2024-03-20',
            minIntegralValue: 124,
            minDate: '2024-02-06'
          }],
          total: 1
        };
        var data2 = {
          data: [{
            plantId: '01114205000031',
            plantName: '熊渡水电厂',
            integralValue: 231,
            maxIntegralValue: 996,
            maxDate: '2024-08-10',
            minIntegralValue: 228,
            minDate: '2024-06-15'
          }],
          total: 1
        };
        switch (region) {
          case 420528:
            resolute(data1);
            break;
          case 420581:
            resolute(data2);
            break;
        }
      } catch (error) {
        reject(error);
      }
    }, 100);
  });
}
function getYearConsumeList(_ref2) {
  var date = _ref2.date,
    region = _ref2.region;
  return new Promise(function (resolute, reject) {
    setTimeout(function () {
      try {
        var data1 = {
          rows: [{
            plantId: '01114205000009',
            plantName: '招徕河水电站',
            integralValue: null,
            maxIntegralValue: 1125,
            maxDate: '2024-03-20',
            minIntegralValue: 658,
            minDate: '2024-02-06'
          }],
          total: 1
        };
        var data2 = {
          rows: [{
            plantId: '01114205000031',
            plantName: '熊渡水电厂',
            integralValue: null,
            maxIntegralValue: 1500,
            maxDate: '2024-08-03',
            minIntegralValue: 236,
            minDate: '2024-05-04'
          }],
          total: 1
        };
        switch (region) {
          case 420528:
            resolute(data1);
            break;
          case 420581:
            resolute(data2);
            break;
          default:
            break;
        }
      } catch (error) {
        reject(error);
      }
    }, 100);
  });
}

/***/ })

}]);